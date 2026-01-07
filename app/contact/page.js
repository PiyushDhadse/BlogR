/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email",
      detail: "hello@blogr.com",
      description: "Drop us a line anytime",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Location",
      detail: "San Francisco",
      description: "California, USA",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Response Time",
      detail: "24-48 hours",
      description: "We read every message",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-[#E8F6F6] via-white to-[#F0FAFA]">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2300B7B5%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] pointer-events-none" />

      {/* Decorative elements */}
      <div className="absolute top-16 left-8 w-28 h-28 bg-[#00B7B5]/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-24 right-12 w-36 h-36 bg-[#005461]/15 rounded-full blur-2xl animate-pulse" />
      <div className="absolute top-1/3 left-1/3 w-56 h-56 bg-[#00857F]/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 py-12 sm:py-16 md:py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-1 mb-4 text-center text-4xl font-bold">
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

          <p className="text-sm font-semibold text-[#00857F] tracking-widest uppercase mb-8">
            Get in Touch • We&apos;re Listening
          </p>

          {/* Decorative line */}
          <div className="flex justify-center items-center gap-3 mb-12">
            <div className="h-0.5 w-20 bg-linear-to-r from-transparent via-[#00B7B5] to-[#00B7B5] rounded-full" />
            <div className="h-3 w-3 rounded-full bg-[#00B7B5] animate-pulse shadow-lg shadow-[#00B7B5]/50" />
            <div className="h-0.5 w-20 bg-linear-to-l from-transparent via-[#00B7B5] to-[#00B7B5] rounded-full" />
          </div>

          <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#004550] mb-6">
              Let&apos;s start a conversation
            </h1>
            <p className="text-base text-[#004550]/80 leading-relaxed">
              Have questions about Blogr? Want to share feedback? Need help with
              your account? We&apos;re here to help. Fill out the form below and
              we&apos;ll get back to you soon.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-[#00B7B5]/10 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-linear-to-br from-[#005461] to-[#00857F] rounded-lg text-white">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#005461] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-lg font-medium text-[#00857F] mb-1">
                        {item.detail}
                      </p>
                      <p className="text-sm text-[#004550]/70">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Quick Note */}
              <div className="bg-linear-to-br from-[#005461]/5 to-[#00857F]/5 backdrop-blur-sm rounded-xl p-6 border border-[#00B7B5]/20">
                <h4 className="font-bold text-[#005461] mb-3">
                  Before you write
                </h4>
                <ul className="space-y-2 text-sm text-[#004550]/80">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00857F] mt-1">•</span>
                    <span>Check our FAQ section first</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00857F] mt-1">•</span>
                    <span>Include relevant details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00857F] mt-1">•</span>
                    <span>We reply to everyone personally</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-[#00B7B5]/20">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00B7B5]/10 rounded-full mb-6">
                      <svg
                        className="w-8 h-8 text-[#00857F]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#005461] mb-4">
                      Message sent
                    </h3>
                    <p className="text-[#004550]/80 mb-8">
                      Thanks for reaching out. We&apos;ve received your message
                      and will get back to you within 24-48 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 bg-[#005461] text-white font-medium rounded-lg hover:bg-[#004550] transition-colors duration-300"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-[#005461] mb-8">
                      Send us a message
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-[#004550] mb-2">
                            Your name
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white/50 border border-[#005461]/20 rounded-lg focus:outline-none focus:border-[#00B7B5] focus:ring-2 focus:ring-[#00B7B5]/20 transition-all duration-300"
                            placeholder="Enter your name"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-[#004550] mb-2">
                            Email address
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white/50 border border-[#005461]/20 rounded-lg focus:outline-none focus:border-[#00B7B5] focus:ring-2 focus:ring-[#00B7B5]/20 transition-all duration-300"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#004550] mb-2">
                          Subject
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/50 border border-[#005461]/20 rounded-lg focus:outline-none focus:border-[#00B7B5] focus:ring-2 focus:ring-[#00B7B5]/20 transition-all duration-300"
                          placeholder="What's this about?"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#004550] mb-2">
                          Your message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="6"
                          className="w-full px-4 py-3 bg-white/50 border border-[#005461]/20 rounded-lg focus:outline-none focus:border-[#00B7B5] focus:ring-2 focus:ring-[#00B7B5]/20 transition-all duration-300 resize-none"
                          placeholder="Tell us what's on your mind..."
                        />
                      </div>

                      <div className="pt-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="group relative w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-linear-to-br from-[#005461] via-[#00696B] to-[#00857F] text-white font-medium rounded-xl shadow-lg shadow-[#005461]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#005461]/30 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <>
                              <svg
                                className="animate-spin h-5 w-5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                />
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                />
                              </svg>
                              <span>Sending...</span>
                            </>
                          ) : (
                            <>
                              <svg
                                className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={1.5}
                                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                />
                              </svg>
                              <span>Send Message</span>
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="max-w-3xl mx-auto mt-20 text-center">
          <h3 className="text-xl font-bold text-[#005461] mb-6">
            Common questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "How do I create an account?",
              "Can I write anonymously?",
              "Where can I find writing tips?",
            ].map((question, index) => (
              <div
                key={index}
                className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-[#00B7B5]/10 hover:bg-white/80 transition-colors duration-300 cursor-pointer"
              >
                <p className="font-medium text-[#004550]">{question}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#004550]/60 mt-6">
            Check our full FAQ for more answers
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-8 mt-12 border-t border-[#00B7B5]/10">
        <p className="text-[#005461]/60 text-sm">
          © Blogr. We read every message carefully.
        </p>
      </div>
    </div>
  );
};

export default Contact;
