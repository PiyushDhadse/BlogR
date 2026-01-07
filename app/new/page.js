/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";

const New = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    tags: "",
    isPublished: false,
  });

  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const [autoSaveTimer, setAutoSaveTimer] = useState(null);
  const [lastSaved, setLastSaved] = useState(null);

  const categories = [
    "Technology",
    "Lifestyle",
    "Travel",
    "Food",
    "Personal",
    "Business",
    "Creative Writing",
    "Health",
    "Education",
  ];

  useEffect(() => {
    if (formData.content) {
      setCharCount(formData.content.length);
      setWordCount(
        formData.content
          .trim()
          .split(/\s+/)
          .filter((word) => word.length > 0).length
      );
    }
  }, [formData.content]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Auto-save simulation
    if (autoSaveTimer) clearTimeout(autoSaveTimer);

    const timer = setTimeout(() => {
      setIsSaving(true);
      setTimeout(() => {
        setIsSaving(false);
        setLastSaved(
          new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })
        );
      }, 500);
    }, 1500);

    setAutoSaveTimer(timer);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSaving(true);

    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      alert(
        formData.isPublished
          ? "Blog published successfully!"
          : "Blog saved as draft!"
      );
    }, 1000);
  };

  const handleClear = () => {
    if (window.confirm("Clear everything? This can't be undone.")) {
      setFormData({
        title: "",
        content: "",
        category: "",
        tags: "",
        isPublished: false,
      });
      setCharCount(0);
      setWordCount(0);
      setLastSaved(null);
    }
  };

  const formatTags = (tagString) => {
    return tagString
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-[#E8F6F6] via-white to-[#F0FAFA]">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2300B7B5%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] pointer-events-none" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#00B7B5]/15 rounded-full blur-2xl" />
      <div className="absolute bottom-32 right-16 w-40 h-40 bg-[#005461]/10 rounded-full blur-2xl" />

      <div className="relative container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex flex-col items-center text-center gap-2">
            <div className="flex items-center gap-2">
              <div className="flex justify-center items-center gap-1 text-4xl font-bold">
                <span className="text-[#005461] tracking-tight hover:scale-105 transition-transform duration-300 drop-shadow-sm">
                  Blog
                </span>
                <span className="text-[#00857F] relative inline-flex items-center">
                  R
                  <img
                    className="h-6 sm:h-8 md:h-6 ml-0.5"
                    src="./edit2.gif"
                    alt="Writing animation"
                  />
                </span>
              </div>
              <div className="h-6 w-0.5 bg-[#005461]/30"></div>
              <span className="text-sm font-medium text-[#00857F] tracking-widest">
                NEW POST
              </span>
            </div>

            <div className="flex items-center gap-4 mt-2">
              {lastSaved && (
                <div className="text-xs text-[#005461]/60">
                  Saved at {lastSaved}
                </div>
              )}
              {isSaving && (
                <div className="flex items-center gap-1 text-sm text-[#00857F]">
                  <div className="h-2 w-2 bg-[#00B7B5] rounded-full animate-pulse"></div>
                  Saving...
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Stats Bar */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 mb-6 shadow-sm border border-[#00B7B5]/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-sm text-[#005461]/70">Words</div>
                  <div className="text-lg font-bold text-[#005461]">
                    {wordCount}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-[#005461]/70">Characters</div>
                  <div className="text-lg font-bold text-[#005461]">
                    {charCount}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-[#005461]/70">Reading Time</div>
                  <div className="text-lg font-bold text-[#005461]">
                    {Math.ceil(wordCount / 200)} min
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      name="isPublished"
                      checked={formData.isPublished}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div
                      className={`w-10 h-5 rounded-full transition-colors ${
                        formData.isPublished
                          ? "bg-[#00857F]"
                          : "bg-[#005461]/30"
                      }`}
                    ></div>
                    <div
                      className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
                        formData.isPublished ? "transform translate-x-5" : ""
                      }`}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-[#005461]">
                    {formData.isPublished ? "Publish" : "Draft"}
                  </span>
                </label>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Title Input */}
            <div className="mb-6">
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Your blog title here..."
                className="w-full text-3xl md:text-4xl font-bold bg-transparent border-none outline-none text-[#005461] placeholder:text-[#005461]/40"
                maxLength="100"
                required
              />
              <div className="h-0.5 w-full bg-linear-to-r from-[#005461]/20 via-[#00857F] to-[#005461]/20 mt-2"></div>
            </div>

            {/* Category and Tags */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-[#005461] mb-2">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/50 border border-[#005461]/20 rounded-lg focus:outline-none focus:border-[#00B7B5] focus:ring-2 focus:ring-[#00B7B5]/20 transition-all duration-300"
                  required
                >
                  <option value="">Choose a category</option>
                  {categories.map((cat, index) => (
                    <option key={index} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#005461] mb-2">
                  Tags (comma separated)
                </label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  placeholder="writing, tips, blog, ideas"
                  className="w-full px-4 py-3 bg-white/50 border border-[#005461]/20 rounded-lg focus:outline-none focus:border-[#00B7B5] focus:ring-2 focus:ring-[#00B7B5]/20 transition-all duration-300"
                />
                {formData.tags && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {formatTags(formData.tags).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-[#00857F]/10 text-[#005461] text-xs rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Content Editor */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-[#005461] mb-2">
                Your Story
              </label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Start writing your thoughts here... Don't worry about perfection. Just write."
                className="w-full h-96 px-4 py-6 bg-white/80 backdrop-blur-sm border border-[#005461]/20 rounded-xl focus:outline-none focus:border-[#00B7B5] focus:ring-2 focus:ring-[#00B7B5]/20 transition-all duration-300 resize-none text-[#004550] leading-relaxed"
                required
              />

              {/* Formatting Tools */}
              <div className="flex items-center gap-2 mt-4 flex-wrap">
                <button
                  type="button"
                  className="p-2 text-[#005461] hover:bg-[#005461]/10 rounded-lg transition-colors"
                  title="Bold"
                >
                  <span className="font-bold">B</span>
                </button>
                <button
                  type="button"
                  className="p-2 text-[#005461] hover:bg-[#005461]/10 rounded-lg transition-colors"
                  title="Italic"
                >
                  <span className="italic">I</span>
                </button>
                <button
                  type="button"
                  className="p-2 text-[#005461] hover:bg-[#005461]/10 rounded-lg transition-colors"
                  title="Link"
                >
                  🔗
                </button>
                <button
                  type="button"
                  className="p-2 text-[#005461] hover:bg-[#005461]/10 rounded-lg transition-colors"
                  title="Image"
                >
                  🖼️
                </button>
                <button
                  type="button"
                  className="p-2 text-[#005461] hover:bg-[#005461]/10 rounded-lg transition-colors"
                  title="Bullet List"
                >
                  ••
                </button>
                <div className="ml-auto text-sm text-[#005461]/60">
                  {charCount > 0 && `${wordCount} words`}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between gap-4 pt-8 border-t border-[#00B7B5]/20">
              <button
                type="button"
                onClick={handleClear}
                className="px-6 py-3 text-[#005461] hover:bg-[#005461]/10 rounded-lg transition-colors duration-300 flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                Clear All
              </button>

              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, isPublished: false }))
                  }
                  className="px-8 py-3 bg-white text-[#005461] border border-[#005461]/20 rounded-lg hover:bg-[#005461]/5 transition-colors duration-300 font-medium"
                >
                  Save Draft
                </button>

                <button
                  type="submit"
                  disabled={isSaving}
                  className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                    formData.isPublished
                      ? "bg-linear-to-br from-[#005461] to-[#00857F] text-white hover:shadow-lg hover:shadow-[#005461]/25"
                      : "bg-[#00B7B5] text-white hover:bg-[#00857F]"
                  }`}
                >
                  {isSaving ? (
                    <>
                      <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d={
                            formData.isPublished
                              ? "M5 13l4 4L19 7"
                              : "M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                          }
                        />
                      </svg>
                      {formData.isPublished ? "Publish Now" : "Save & Close"}
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>

          {/* Tips Section */}
          <div className="mt-12 pt-8 border-t border-[#00B7B5]/10">
            <h3 className="text-sm font-medium text-[#005461] mb-4 flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Quick writing tips
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white/50 rounded-lg">
                <div className="text-xs text-[#00857F] font-medium mb-1">
                  Title Tip
                </div>
                <div className="text-sm text-[#005461]/80">
                  Make it clear and interesting
                </div>
              </div>
              <div className="p-4 bg-white/50 rounded-lg">
                <div className="text-xs text-[#00857F] font-medium mb-1">
                  Content Tip
                </div>
                <div className="text-sm text-[#005461]/80">
                  Write like you&apos;re talking to a friend
                </div>
              </div>
              <div className="p-4 bg-white/50 rounded-lg">
                <div className="text-xs text-[#00857F] font-medium mb-1">
                  Tag Tip
                </div>
                <div className="text-sm text-[#005461]/80">
                  Add 3-5 relevant tags
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center py-6 mt-8 text-sm text-[#005461]/50">
        Your writing is saved automatically as you type
      </div>
    </div>
  );
};

export default New;
