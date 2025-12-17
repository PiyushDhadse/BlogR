import { connectToDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 10;
    const skip = (page - 1) * limit;

    let db;
    try {
      const connection = await connectToDatabase();
      db = connection.db;
    } catch (connectionError) {
      console.error("MongoDB connection failed:", connectionError);
      return Response.json(
        {
          error: "Database connection failed",
          links: [],
          stats: { totalLinks: 0, totalClicks: 0 },
          totalPages: 1,
        },
        { status: 503 }
      );
    }

    const collection = db.collection("bloggers");

    const total = await collection.countDocuments();

    const links = await collection
      .find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    const totalClicks = await collection
      .aggregate([{ $group: { _id: null, total: { $sum: "$clicks" } } }])
      .toArray();

    return Response.json({
      links,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      stats: {
        totalLinks: total,
        totalClicks: totalClicks[0]?.total || 0,
      },
    });
  } catch (error) {
    console.error("GET Error:", error);
    return Response.json(
      {
        error: "Failed to fetch links",
        links: [],
        stats: { totalLinks: 0, totalClicks: 0 },
        totalPages: 1,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return Response.json({ error: "Missing ID" }, { status: 400 });
    }

    let db;
    try {
      const connection = await connectToDatabase();
      db = connection.db;
    } catch (connectionError) {
      console.error("MongoDB connection failed:", connectionError);
      return Response.json(
        { error: "Database connection failed" },
        { status: 503 }
      );
    }

    const collection = db.collection("urls");

    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return Response.json({ error: "Link not found" }, { status: 404 });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("DELETE Error:", error);
    return Response.json({ error: "Failed to delete link" }, { status: 500 });
  }
}