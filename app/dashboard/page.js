"use client";
import React, { useState } from "react";
import { useSession,signIn,signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const { data: session } = useSession();

  const [activeTab, setActiveTab] = useState("profile");
  const [isSaving, setIsSaving] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  if(!session){
    const router = useRouter()
    router.push("/login")
  }

  // Profile form state
  const [profile, setProfile] = useState({
    fullName: "John Doe",
    username: "johndoe",
    email: "john@example.com",
    bio: "Passionate writer and developer.",
    location: "San Francisco, CA",
    website: "https://johndoe.com",
  });

  // Password form state
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Success/Error messages
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setMessage({ type: "success", text: "Profile updated successfully!" });
      setTimeout(() => setMessage({ type: "", text: "" }), 3000);
    }, 1500);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    
    if (passwords.newPassword !== passwords.confirmPassword) {
      setMessage({ type: "error", text: "Passwords do not match!" });
      return;
    }

    if (passwords.newPassword.length < 8) {
      setMessage({ type: "error", text: "Password must be at least 8 characters!" });
      return;
    }

    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setPasswords({ currentPassword: "", newPassword: "", confirmPassword: "" });
      setMessage({ type: "success", text: "Password changed successfully!" });
      setTimeout(() => setMessage({ type: "", text: "" }), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#E8F6F6] via-white to-[#F0FAFA]">
      <div className="max-w-4xl mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#005461]">
            Account Settings
          </h1>
          <p className="text-[#00857F] mt-1">
            Manage your profile and account preferences
          </p>
        </div>

        {/* Success/Error Message */}
        {message.text && (
          <div
            className={`mb-6 p-4 rounded-xl ${
              message.type === "success"
                ? "bg-[#00B7B5]/10 text-[#005461] border border-[#00B7B5]"
                : "bg-red-50 text-red-600 border border-red-200"
            }`}
          >
            {message.text}
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-6">
          
          {/* Sidebar Tabs */}
          <div className="md:w-56 shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-[#005461]/5 p-2">
              <button
                onClick={() => setActiveTab("profile")}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === "profile"
                    ? "bg-linear-to-r from-[#005461] to-[#00857F] text-white"
                    : "text-[#005461] hover:bg-[#E8F6F6]"
                }`}
              >
                👤 Profile
              </button>
              <button
                onClick={() => setActiveTab("password")}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 mt-1 ${
                  activeTab === "password"
                    ? "bg-linear-to-r from-[#005461] to-[#00857F] text-white"
                    : "text-[#005461] hover:bg-[#E8F6F6]"
                }`}
              >
                🔒 Password
              </button>
              <button
                onClick={() => setActiveTab("danger")}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 mt-1 ${
                  activeTab === "danger"
                    ? "bg-red-500 text-white"
                    : "text-red-500 hover:bg-red-50"
                }`}
              >
                ⚠️ Danger Zone
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            
            {/* Profile Settings */}
            {activeTab === "profile" && (
              <div className="bg-white rounded-xl shadow-sm border border-[#005461]/5 p-6">
                <h2 className="text-xl font-bold text-[#005461] mb-6">
                  Profile Information
                </h2>

                {/* Avatar Section */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#005461]/10">
                  <div className="w-20 h-20 rounded-full bg-linear-to-br from-[#005461] to-[#00B7B5] p-0.5">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <span className="text-2xl font-bold text-[#005461]">
                        {profile.fullName.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div>
                    <button className="px-4 py-2 bg-[#005461] text-white text-sm font-medium rounded-lg hover:bg-[#004550] transition-colors">
                      Change Avatar
                    </button>
                    <p className="text-xs text-[#00857F] mt-1">
                      JPG, PNG or GIF. Max 2MB.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleProfileSubmit} className="space-y-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-[#005461] mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={profile.fullName}
                      onChange={handleProfileChange}
                      className="w-full px-4 py-3 bg-[#F0FAFA] border border-[#005461]/20 rounded-xl text-[#005461] focus:outline-none focus:ring-2 focus:ring-[#00B7B5]/50 focus:border-[#00B7B5] transition-all"
                      required
                    />
                  </div>

                  {/* Username */}
                  <div>
                    <label className="block text-sm font-medium text-[#005461] mb-2">
                      Username
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#00857F]">
                        @
                      </span>
                      <input
                        type="text"
                        name="username"
                        value={profile.username}
                        onChange={handleProfileChange}
                        className="w-full pl-8 pr-4 py-3 bg-[#F0FAFA] border border-[#005461]/20 rounded-xl text-[#005461] focus:outline-none focus:ring-2 focus:ring-[#00B7B5]/50 focus:border-[#00B7B5] transition-all"
                        required
                      />
                    </div>
                    <p className="text-xs text-[#00857F] mt-1">
                      blogr.com/profile/{profile.username}
                    </p>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-[#005461] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={profile.email}
                      onChange={handleProfileChange}
                      className="w-full px-4 py-3 bg-[#F0FAFA] border border-[#005461]/20 rounded-xl text-[#005461] focus:outline-none focus:ring-2 focus:ring-[#00B7B5]/50 focus:border-[#00B7B5] transition-all"
                      required
                    />
                  </div>

                  {/* Bio */}
                  <div>
                    <label className="block text-sm font-medium text-[#005461] mb-2">
                      Bio
                    </label>
                    <textarea
                      name="bio"
                      value={profile.bio}
                      onChange={handleProfileChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-[#F0FAFA] border border-[#005461]/20 rounded-xl text-[#005461] focus:outline-none focus:ring-2 focus:ring-[#00B7B5]/50 focus:border-[#00B7B5] transition-all resize-none"
                      placeholder="Tell us about yourself..."
                    />
                    <p className="text-xs text-[#00857F] mt-1 text-right">
                      {profile.bio.length}/200
                    </p>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-sm font-medium text-[#005461] mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={profile.location}
                      onChange={handleProfileChange}
                      className="w-full px-4 py-3 bg-[#F0FAFA] border border-[#005461]/20 rounded-xl text-[#005461] focus:outline-none focus:ring-2 focus:ring-[#00B7B5]/50 focus:border-[#00B7B5] transition-all"
                      placeholder="City, Country"
                    />
                  </div>

                  {/* Website */}
                  <div>
                    <label className="block text-sm font-medium text-[#005461] mb-2">
                      Website
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={profile.website}
                      onChange={handleProfileChange}
                      className="w-full px-4 py-3 bg-[#F0FAFA] border border-[#005461]/20 rounded-xl text-[#005461] focus:outline-none focus:ring-2 focus:ring-[#00B7B5]/50 focus:border-[#00B7B5] transition-all"
                      placeholder="https://yourwebsite.com"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSaving}
                      className="px-6 py-3 bg-linear-to-r from-[#005461] to-[#00857F] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70"
                    >
                      {isSaving ? "Saving..." : "Save Changes"}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Password Settings */}
            {activeTab === "password" && (
              <div className="bg-white rounded-xl shadow-sm border border-[#005461]/5 p-6">
                <h2 className="text-xl font-bold text-[#005461] mb-6">
                  Change Password
                </h2>

                <form onSubmit={handlePasswordSubmit} className="space-y-5">
                  {/* Current Password */}
                  <div>
                    <label className="block text-sm font-medium text-[#005461] mb-2">
                      Current Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="currentPassword"
                        value={passwords.currentPassword}
                        onChange={handlePasswordChange}
                        className="w-full px-4 py-3 bg-[#F0FAFA] border border-[#005461]/20 rounded-xl text-[#005461] focus:outline-none focus:ring-2 focus:ring-[#00B7B5]/50 focus:border-[#00B7B5] transition-all pr-12"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#00857F] hover:text-[#005461]"
                      >
                        {showPassword ? "🙈" : "👁️"}
                      </button>
                    </div>
                  </div>

                  {/* New Password */}
                  <div>
                    <label className="block text-sm font-medium text-[#005461] mb-2">
                      New Password
                    </label>
                    <div className="relative">
                      <input
                        type={showNewPassword ? "text" : "password"}
                        name="newPassword"
                        value={passwords.newPassword}
                        onChange={handlePasswordChange}
                        className="w-full px-4 py-3 bg-[#F0FAFA] border border-[#005461]/20 rounded-xl text-[#005461] focus:outline-none focus:ring-2 focus:ring-[#00B7B5]/50 focus:border-[#00B7B5] transition-all pr-12"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#00857F] hover:text-[#005461]"
                      >
                        {showNewPassword ? "🙈" : "👁️"}
                      </button>
                    </div>
                    <p className="text-xs text-[#00857F] mt-1">
                      Must be at least 8 characters
                    </p>
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label className="block text-sm font-medium text-[#005461] mb-2">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={passwords.confirmPassword}
                      onChange={handlePasswordChange}
                      className={`w-full px-4 py-3 bg-[#F0FAFA] border rounded-xl text-[#005461] focus:outline-none focus:ring-2 transition-all ${
                        passwords.confirmPassword
                          ? passwords.newPassword === passwords.confirmPassword
                            ? "border-[#00B7B5] focus:ring-[#00B7B5]/50"
                            : "border-red-400 focus:ring-red-400/50"
                          : "border-[#005461]/20 focus:ring-[#00B7B5]/50"
                      }`}
                      required
                    />
                    {passwords.confirmPassword && passwords.newPassword !== passwords.confirmPassword && (
                      <p className="text-xs text-red-500 mt-1">
                        Passwords do not match
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSaving}
                      className="px-6 py-3 bg-linear-to-r from-[#005461] to-[#00857F] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70"
                    >
                      {isSaving ? "Updating..." : "Update Password"}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Danger Zone */}
            {activeTab === "danger" && (
              <div className="bg-white rounded-xl shadow-sm border border-red-200 p-6">
                <h2 className="text-xl font-bold text-red-600 mb-2">
                  Danger Zone
                </h2>
                <p className="text-[#00857F] mb-6">
                  Irreversible actions. Please be careful.
                </p>

                {/* Deactivate Account */}
                <div className="p-4 border border-[#005461]/10 rounded-xl mb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-[#005461]">
                        Deactivate Account
                      </h3>
                      <p className="text-sm text-[#00857F]">
                        Temporarily disable your account
                      </p>
                    </div>
                    <button className="px-4 py-2 border-2 border-[#005461] text-[#005461] font-medium rounded-lg hover:bg-[#005461] hover:text-white transition-all">
                      Deactivate
                    </button>
                  </div>
                </div>

                {/* Delete Account */}
                <div className="p-4 border border-red-200 rounded-xl bg-red-50/50">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-red-600">
                        Delete Account
                      </h3>
                      <p className="text-sm text-red-500">
                        Permanently delete your account and all data
                      </p>
                    </div>
                    <button className="px-4 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-all">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;