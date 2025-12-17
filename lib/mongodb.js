import { MongoClient } from "mongodb";

// Support multiple env var names in case deployment uses a different name.
const uri =
  process.env.MONGODB_URI || process.env.MONGO_URI || process.env.MONGO_URL;
const dbName = process.env.MONGODB_DB || "BlogR";

const options = {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
};

let cached = global._mongo;

if (!cached) {
  cached = global._mongo = { conn: null, promise: null };
}

export async function connectToDatabase() {
  if (!uri) {
    const tried = ["MONGODB_URI", "MONGO_URI", "MONGO_URL"].join(", ");
    throw new Error(
      `MongoDB connection string not found. Please set one of: ${tried} in your environment variables.`
    );
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = MongoClient.connect(uri, options).then((client) => {
      return {
        client,
        db: client.db(dbName),
      };
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    // Provide a clearer error to help with debugging on Vercel/Atlas
    const hint =
      e && e.message
        ? `: ${e.message}`
        : ". Check network access and credentials.";
    throw new Error(`Failed to connect to MongoDB${hint}`);
  }

  return cached.conn;
}