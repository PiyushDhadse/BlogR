/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // For Next.js
// OR import { useParams } from "react-router-dom"; // For React Router

import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaEdit,
  FaShare,
  FaEllipsisH,
  FaHeart,
  FaComment,
  FaBookmark,
  FaUserPlus,
  FaUserCheck,
  FaLink,
  FaCamera,
} from "react-icons/fa";
import {
  HiBookOpen,
  HiBadgeCheck,
  HiOutlineBookmark,
  HiOutlineHeart,
  HiOutlinePencil,
} from "react-icons/hi";

const ProfilePage = ({ params }) => {
  const router = useRouter();
  const username = React.use(params).username || "";

  // For React Router
  //   const { username } = params();

  const [activeTab, setActiveTab] = useState("posts");
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [showOptionsMenu, setShowOptionsMenu] = useState(false);

  // Sample user data - Replace with API call
  const [user, setUser] = useState(null);

  // Simulating API fetch
  useEffect(() => {
    if (username) {
      // Simulate API call
      setTimeout(() => {
        setUser({
          id: 1,
          username: username,
          fullName: "John Doe",
          avatar: null, // or image URL
          coverImage: null, // or image URL
          bio: "Passionate writer and developer. I love sharing knowledge and building things that matter. Writing about tech, life, and everything in between.",
          location: "San Francisco, CA",
          website: "https://johndoe.com",
          joinedDate: "January 2023",
          isVerified: true,
          isOwnProfile: true, // Check if viewing own profile
          stats: {
            posts: 42,
            followers: 1234,
            following: 567,
            likes: 8900,
          },
          socialLinks: {
            twitter: "johndoe",
            github: "johndoe",
            linkedin: "johndoe",
          },
          skills: ["React", "JavaScript", "Node.js", "Writing", "UI/UX"],
        });
        setIsLoading(false);
      }, 1000);
    }
  }, [username]);

  // Sample posts data
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Getting Started with React Hooks",
      excerpt: "Learn how to use React Hooks effectively in your projects...",
      coverImage: null,
      publishedAt: "Dec 15, 2024",
      readTime: "5 min read",
      likes: 234,
      comments: 45,
      bookmarks: 89,
    },
    {
      id: 2,
      title: "The Future of Web Development",
      excerpt:
        "Exploring upcoming trends and technologies in web development...",
      coverImage: null,
      publishedAt: "Dec 10, 2024",
      readTime: "8 min read",
      likes: 567,
      comments: 123,
      bookmarks: 201,
    },
    {
      id: 3,
      title: "Building Scalable Applications",
      excerpt: "Best practices for building applications that scale...",
      coverImage: null,
      publishedAt: "Dec 5, 2024",
      readTime: "10 min read",
      likes: 890,
      comments: 234,
      bookmarks: 456,
    },
  ]);

  const tabs = [
    { id: "posts", label: "Posts", icon: HiBookOpen, count: user?.stats.posts },
    { id: "saved", label: "Saved", icon: HiOutlineBookmark, count: 23 },
    { id: "liked", label: "Liked", icon: HiOutlineHeart, count: 156 },
    {
      id: "drafts",
      label: "Drafts",
      icon: HiOutlinePencil,
      count: 5,
      private: true,
    },
  ];

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  const handleShare = () => {
    setShowShareMenu(!showShareMenu);
  };

  const copyProfileLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowShareMenu(false);
    // Show toast notification
  };

  // Loading skeleton
  if (isLoading) {
    return (
      <div className="min-h-screen bg-linear-to-br from-[#E8F6F6] via-white to-[#F0FAFA]">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Cover skeleton */}
          <div className="h-48 sm:h-64 bg-gray-200 rounded-2xl animate-pulse" />

          {/* Avatar skeleton */}
          <div className="relative -mt-16 sm:-mt-20 ml-4 sm:ml-8">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gray-200 border-4 border-white animate-pulse" />
          </div>

          {/* Content skeleton */}
          <div className="mt-4 px-4 space-y-4">
            <div className="h-8 w-48 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
            <div className="h-20 w-full bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-linear-to-br from-[#E8F6F6] via-white to-[#F0FAFA] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#005461]">User not found</h1>
          <p className="text-[#00857F] mt-2">
            The user you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-[#E8F6F6] via-white to-[#F0FAFA]">
      <div className="max-w-4xl mx-auto px-4 pb-12">
        {/* Cover Image */}
        <div className="relative">
          <div className="h-48 sm:h-64 md:h-72 rounded-b-2xl sm:rounded-2xl sm:mt-6 overflow-hidden bg-linear-to-br from-[#005461] via-[#00696B] to-[#00857F]">
            {user.coverImage ? (
              <img
                src={user.coverImage}
                alt="Cover"
                className="w-full h-full object-cover"
              />
            ) : (
              /* Default pattern */
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full" />
                <div className="absolute top-20 right-20 w-48 h-48 border border-white rounded-full" />
                <div className="absolute bottom-10 left-1/3 w-24 h-24 border border-white rounded-full" />
                <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/20 rounded-full blur-xl" />
              </div>
            )}

            {/* Edit cover button (only on own profile) */}
            {user.isOwnProfile && (
              <button className="absolute bottom-4 right-4 px-4 py-2 bg-black/30 backdrop-blur-sm text-white text-sm font-medium rounded-lg hover:bg-black/50 transition-all duration-300 flex items-center gap-2">
                <FaCamera className="w-4 h-4" />
                <span className="hidden sm:inline">Edit Cover</span>
              </button>
            )}
          </div>

          {/* Avatar */}
          <div className="absolute -bottom-16 sm:-bottom-20 left-4 sm:left-8">
            <div className="relative group">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-linear-to-br from-[#005461] to-[#00B7B5] p-1 shadow-xl">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.fullName}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-4xl sm:text-5xl font-bold text-[#005461]">
                      {user.fullName.charAt(0)}
                    </span>
                  )}
                </div>
              </div>

              {/* Edit avatar button */}
              {user.isOwnProfile && (
                <button className="absolute bottom-2 right-2 w-8 h-8 sm:w-10 sm:h-10 bg-[#00B7B5] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#00857F] transition-colors opacity-0 group-hover:opacity-100">
                  <FaCamera className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Action buttons - positioned top right on mobile, or inline on desktop */}
          <div className="absolute -bottom-12 right-4 sm:right-8 flex items-center gap-2">
            {user.isOwnProfile ? (
              <button
                onClick={() => router.push("/settings/profile")}
                className="px-4 sm:px-6 py-2 bg-white border-2 border-[#005461] text-[#005461] font-semibold rounded-xl hover:bg-[#005461] hover:text-white transition-all duration-300 flex items-center gap-2 shadow-sm"
              >
                <FaEdit className="w-4 h-4" />
                <span className="hidden sm:inline">Edit Profile</span>
              </button>
            ) : (
              <>
                <button
                  onClick={handleFollow}
                  className={`px-4 sm:px-6 py-2 font-semibold rounded-xl transition-all duration-300 flex items-center gap-2 shadow-sm ${
                    isFollowing
                      ? "bg-white border-2 border-[#005461] text-[#005461] hover:bg-red-50 hover:border-red-500 hover:text-red-500"
                      : "bg-linear-to-r from-[#005461] to-[#00857F] text-white hover:shadow-lg"
                  }`}
                >
                  {isFollowing ? (
                    <>
                      <FaUserCheck className="w-4 h-4" />
                      <span className="hidden sm:inline">Following</span>
                    </>
                  ) : (
                    <>
                      <FaUserPlus className="w-4 h-4" />
                      <span className="hidden sm:inline">Follow</span>
                    </>
                  )}
                </button>
              </>
            )}

            {/* Share button */}
            <div className="relative">
              <button
                onClick={handleShare}
                className="p-2.5 bg-white border border-[#005461]/20 text-[#005461] rounded-xl hover:bg-[#E8F6F6] transition-all duration-300 shadow-sm"
              >
                <FaShare className="w-4 h-4" />
              </button>

              {/* Share dropdown */}
              {showShareMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-[#005461]/10 py-2 z-50">
                  <button
                    onClick={copyProfileLink}
                    className="w-full px-4 py-2 text-left text-sm text-[#005461] hover:bg-[#E8F6F6] flex items-center gap-2"
                  >
                    <FaLink className="w-4 h-4 text-[#00857F]" />
                    Copy profile link
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm text-[#005461] hover:bg-[#E8F6F6] flex items-center gap-2">
                    <FaTwitter className="w-4 h-4 text-[#00857F]" />
                    Share on Twitter
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm text-[#005461] hover:bg-[#E8F6F6] flex items-center gap-2">
                    <FaLinkedin className="w-4 h-4 text-[#00857F]" />
                    Share on LinkedIn
                  </button>
                </div>
              )}
            </div>

            {/* More options */}
            <div className="relative">
              <button
                onClick={() => setShowOptionsMenu(!showOptionsMenu)}
                className="p-2.5 bg-white border border-[#005461]/20 text-[#005461] rounded-xl hover:bg-[#E8F6F6] transition-all duration-300 shadow-sm"
              >
                <FaEllipsisH className="w-4 h-4" />
              </button>

              {showOptionsMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-[#005461]/10 py-2 z-50">
                  <button className="w-full px-4 py-2 text-left text-sm text-[#005461] hover:bg-[#E8F6F6]">
                    Block user
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm text-[#005461] hover:bg-[#E8F6F6]">
                    Report user
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="mt-20 sm:mt-24 px-4 sm:px-8">
          {/* Name and verification */}
          <div className="flex items-center gap-2 flex-wrap">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#005461]">
              {user.fullName}
            </h1>
            {user.isVerified && (
              <HiBadgeCheck className="w-6 h-6 text-[#00B7B5]" />
            )}
          </div>

          {/* Username */}
          <p className="text-[#00857F] font-medium mt-1">@{user.username}</p>

          {/* Bio */}
          <p className="mt-4 text-[#004550] leading-relaxed max-w-2xl">
            {user.bio}
          </p>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-[#00857F]">
            {user.location && (
              <span className="flex items-center gap-1">
                <FaMapMarkerAlt className="w-4 h-4" />
                {user.location}
              </span>
            )}
            {user.website && (
              <a
                href={user.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-[#00B7B5] transition-colors"
              >
                <FaGlobe className="w-4 h-4" />
                {user.website.replace("https://", "")}
              </a>
            )}
            <span className="flex items-center gap-1">
              <FaCalendarAlt className="w-4 h-4" />
              Joined {user.joinedDate}
            </span>
          </div>

          {/* Social links */}
          {user.socialLinks && (
            <div className="flex items-center gap-3 mt-4">
              {user.socialLinks.twitter && (
                <a
                  href={`https://twitter.com/${user.socialLinks.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#E8F6F6] text-[#005461] rounded-lg hover:bg-[#005461] hover:text-white transition-all duration-300"
                >
                  <FaTwitter className="w-4 h-4" />
                </a>
              )}
              {user.socialLinks.github && (
                <a
                  href={`https://github.com/${user.socialLinks.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#E8F6F6] text-[#005461] rounded-lg hover:bg-[#005461] hover:text-white transition-all duration-300"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
              )}
              {user.socialLinks.linkedin && (
                <a
                  href={`https://linkedin.com/in/${user.socialLinks.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#E8F6F6] text-[#005461] rounded-lg hover:bg-[#005461] hover:text-white transition-all duration-300"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
              )}
            </div>
          )}

          {/* Stats */}
          <div className="flex items-center gap-6 mt-6 pb-6 border-b border-[#005461]/10">
            <button className="group">
              <span className="font-bold text-[#005461] text-lg group-hover:text-[#00B7B5] transition-colors">
                {user.stats.posts}
              </span>
              <span className="text-[#00857F] text-sm ml-1">Posts</span>
            </button>
            <button className="group">
              <span className="font-bold text-[#005461] text-lg group-hover:text-[#00B7B5] transition-colors">
                {user.stats.followers.toLocaleString()}
              </span>
              <span className="text-[#00857F] text-sm ml-1">Followers</span>
            </button>
            <button className="group">
              <span className="font-bold text-[#005461] text-lg group-hover:text-[#00B7B5] transition-colors">
                {user.stats.following.toLocaleString()}
              </span>
              <span className="text-[#00857F] text-sm ml-1">Following</span>
            </button>
            <div className="hidden sm:block">
              <span className="font-bold text-[#005461] text-lg">
                {user.stats.likes.toLocaleString()}
              </span>
              <span className="text-[#00857F] text-sm ml-1">
                Likes received
              </span>
            </div>
          </div>

          {/* Skills/Tags */}
          {user.skills && user.skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {user.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#E8F6F6] text-[#005461] text-sm font-medium rounded-full hover:bg-[#00B7B5] hover:text-white transition-colors cursor-pointer"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Tabs */}
        <div className="mt-8 px-4 sm:px-8">
          <div className="flex items-center gap-1 sm:gap-2 border-b border-[#005461]/10 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => {
              // Hide private tabs if not own profile
              if (tab.private && !user.isOwnProfile) return null;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 font-medium text-sm sm:text-base transition-all duration-300 border-b-2 whitespace-nowrap ${
                    activeTab === tab.id
                      ? "border-[#00B7B5] text-[#005461]"
                      : "border-transparent text-[#00857F] hover:text-[#005461]"
                  }`}
                >
                  <tab.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  {tab.label}
                  {tab.count !== undefined && (
                    <span
                      className={`px-2 py-0.5 text-xs rounded-full ${
                        activeTab === tab.id
                          ? "bg-[#00B7B5] text-white"
                          : "bg-[#E8F6F6] text-[#00857F]"
                      }`}
                    >
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-6 px-4 sm:px-8">
          {activeTab === "posts" && (
            <div className="space-y-4">
              {posts.length > 0 ? (
                posts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-[#005461]/5 hover:shadow-md hover:border-[#00B7B5]/20 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex gap-4">
                      {/* Post thumbnail */}
                      <div className="hidden sm:block w-32 h-24 rounded-xl bg-linear-to-br from-[#005461]/10 to-[#00B7B5]/10 shrink-0 overflow-hidden">
                        {post.coverImage ? (
                          <img
                            src={post.coverImage}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <HiBookOpen className="w-8 h-8 text-[#00857F]/50" />
                          </div>
                        )}
                      </div>

                      {/* Post content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-[#005461] group-hover:text-[#00B7B5] transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-[#00857F] text-sm mt-1 line-clamp-2">
                          {post.excerpt}
                        </p>

                        {/* Post meta */}
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-4 text-xs text-[#00857F]">
                            <span>{post.publishedAt}</span>
                            <span>·</span>
                            <span>{post.readTime}</span>
                          </div>

                          {/* Post stats */}
                          <div className="flex items-center gap-3 text-xs text-[#00857F]">
                            <span className="flex items-center gap-1 hover:text-red-500 transition-colors">
                              <FaHeart className="w-3.5 h-3.5" />
                              {post.likes}
                            </span>
                            <span className="flex items-center gap-1 hover:text-[#005461] transition-colors">
                              <FaComment className="w-3.5 h-3.5" />
                              {post.comments}
                            </span>
                            <span className="flex items-center gap-1 hover:text-[#00B7B5] transition-colors">
                              <FaBookmark className="w-3.5 h-3.5" />
                              {post.bookmarks}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))
              ) : (
                <div className="text-center py-12">
                  <HiBookOpen className="w-16 h-16 text-[#00857F]/30 mx-auto" />
                  <h3 className="text-lg font-semibold text-[#005461] mt-4">
                    No posts yet
                  </h3>
                  <p className="text-[#00857F] mt-1">
                    {user.isOwnProfile
                      ? "You haven't published any posts yet."
                      : "This user hasn't published any posts yet."}
                  </p>
                  {user.isOwnProfile && (
                    <button className="mt-4 px-6 py-2 bg-linear-to-r from-[#005461] to-[#00857F] text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300">
                      Write your first post
                    </button>
                  )}
                </div>
              )}
            </div>
          )}

          {activeTab === "saved" && (
            <div className="text-center py-12">
              <HiOutlineBookmark className="w-16 h-16 text-[#00857F]/30 mx-auto" />
              <h3 className="text-lg font-semibold text-[#005461] mt-4">
                Saved posts
              </h3>
              <p className="text-[#00857F] mt-1">
                Posts saved for later reading will appear here.
              </p>
            </div>
          )}

          {activeTab === "liked" && (
            <div className="text-center py-12">
              <HiOutlineHeart className="w-16 h-16 text-[#00857F]/30 mx-auto" />
              <h3 className="text-lg font-semibold text-[#005461] mt-4">
                Liked posts
              </h3>
              <p className="text-[#00857F] mt-1">
                Posts you&apos;ve liked will appear here.
              </p>
            </div>
          )}

          {activeTab === "drafts" && user.isOwnProfile && (
            <div className="text-center py-12">
              <HiOutlinePencil className="w-16 h-16 text-[#00857F]/30 mx-auto" />
              <h3 className="text-lg font-semibold text-[#005461] mt-4">
                Your drafts
              </h3>
              <p className="text-[#00857F] mt-1">
                Unpublished posts and drafts will appear here.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Click outside to close menus */}
      {(showShareMenu || showOptionsMenu) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setShowShareMenu(false);
            setShowOptionsMenu(false);
          }}
        />
      )}
    </div>
  );
};

export default ProfilePage;
