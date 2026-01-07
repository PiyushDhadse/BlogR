/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
const About = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const teamMembers = [
    {
      name: "Alex Morgan",
      role: "Founder & Editor-in-Chief",
      bio: "Passionate about creating spaces where voices are heard and stories matter.",
      color: "from-[#005461] to-[#00857F]"
    },
    {
      name: "Sam Rivera",
      role: "Community Manager",
      bio: "Building connections and nurturing our growing community of writers.",
      color: "from-[#00857F] to-[#00B7B5]"
    },
    {
      name: "Taylor Kim",
      role: "Content Director",
      bio: "Curating meaningful content that inspires and educates our readers.",
      color: "from-[#00B7B5] to-[#005461]"
    }
  ];

  const values = [
    {
      title: "Authenticity",
      description: "We believe in genuine stories from real perspectives.",
      icon: "✍️"
    },
    {
      title: "Community",
      description: "Building connections through shared experiences and knowledge.",
      icon: "🤝"
    },
    {
      title: "Growth",
      description: "Every writer's journey is a path of continuous learning.",
      icon: "🌱"
    },
    {
      title: "Creativity",
      description: "Encouraging innovative expression in all its forms.",
      icon: "🎨"
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-[#E8F6F6] via-white to-[#F0FAFA]">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2300B7B5%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] pointer-events-none" />

      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#00B7B5]/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#005461]/15 rounded-full blur-2xl animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-[#00857F]/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 py-12 sm:py-16 md:py-20">
        {/* Header Section */}
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

          <p className="text-sm sm:text-base font-semibold text-[#00857F] tracking-widest uppercase mb-8">
            Our Story • Our Mission • Our Community
          </p>

          {/* Decorative line */}
          <div className="flex justify-center items-center gap-3 mb-12">
            <div className="h-0.5 w-16 sm:w-24 bg-linear-to-r from-transparent via-[#00B7B5] to-[#00B7B5] rounded-full" />
            <div className="h-3 w-3 rounded-full bg-[#00B7B5] animate-pulse shadow-lg shadow-[#00B7B5]/50" />
            <div className="h-0.5 w-16 sm:w-24 bg-linear-to-l from-transparent via-[#00B7B5] to-[#00B7B5] rounded-full" />
          </div>

          {/* Mission Statement */}
          <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-[#00B7B5]/20 mb-12">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#004550] mb-6">
              Welcome to Blogr — Where Every Voice Finds Its Audience
            </h1>
            <p className="text-base sm:text-lg text-[#004550]/80 leading-relaxed mb-6">
              Born from a simple idea that everyone has a story worth sharing, 
              Blogr has grown into a vibrant community of writers, thinkers, 
              and creators. We believe that words have the power to connect, 
              inspire, and transform.
            </p>
            <p className="text-base sm:text-lg text-[#004550]/80 leading-relaxed">
              Our platform is more than just a blogging website—it&apos;s a creative 
              space designed to nurture ideas, foster meaningful conversations, 
              and celebrate the diversity of human experience.
            </p>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#005461] mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className={`bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-[#00B7B5]/10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-[#005461] mb-3">
                  {value.title}
                </h3>
                <p className="text-[#004550]/70">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Team Section */}
        <div className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#005461] mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-[#00B7B5]/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`h-2 rounded-full mb-6 bg-linear-to-r ${member.color}`} />
                <h3 className="text-xl font-bold text-[#005461] mb-2">
                  {member.name}
                </h3>
                <p className="text-[#00857F] font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-[#004550]/70">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-linear-to-br from-[#005461]/10 to-[#00857F]/10 backdrop-blur-sm rounded-2xl p-8 sm:p-10 mb-20 border border-[#00B7B5]/20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#005461] mb-10">
            Blogr in Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Active Writers", value: "10K+" },
              { label: "Published Stories", value: "50K+" },
              { label: "Community Members", value: "100K+" },
              { label: "Countries Reached", value: "150+" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#005461] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-[#00857F] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#005461] mb-6">
            Join Our Community
          </h2>
          <p className="text-lg text-[#004550]/80 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re a seasoned writer or just starting your journey, 
            Blogr provides the tools and community to help your voice be heard.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button onClick={()=> router.push("/signup")} className="group relative inline-flex items-center gap-3 px-8 py-4 bg-linear-to-br from-[#005461] via-[#00696B] to-[#00857F] text-white font-medium rounded-2xl shadow-lg shadow-[#005461]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#005461]/30 hover:-translate-y-0.5 active:translate-y-0">
              <span className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <svg
                className="relative w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
              <span className="relative">Join Blogr</span>
            </button>

            <span className="hidden sm:block text-[#005461]/30 text-sm font-light">
              or
            </span>

            <button onClick={()=> router.push("/contact")} className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/70 backdrop-blur-sm text-[#005461] font-medium rounded-2xl border border-[#005461]/10 shadow-sm transition-all duration-300 hover:bg-white hover:shadow-md hover:border-[#00B7B5]/30 hover:-translate-y-0.5 active:translate-y-0">
              <svg
                className="w-5 h-5 text-[#00857F] transition-transform duration-300 group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-8 border-t border-[#00B7B5]/10">
        <p className="text-[#005461]/60 text-sm">
          © {new Date().getFullYear()} Blogr. All rights reserved.
        </p>
        <p className="text-[#00857F] text-sm mt-2">
          Made with ❤️ for writers everywhere
        </p>
      </div>
    </div>
  );
};

export default About;