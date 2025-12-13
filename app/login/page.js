"use client";
import React, { useState } from "react";
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";
import { HiMail, HiLockClosed } from "react-icons/hi";
import { useSession,signIn,signOut } from "next-auth/react";
const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log("Login submitted:", formData);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex bg-linear-to-br from-[#E8F6F6] via-white to-[#F0FAFA]">
      {/* Left Side - Illustration/Branding (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 bg-linear-to-br from-[#005461] via-[#00696B] to-[#00857F] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 border border-white rounded-full" />
          <div className="absolute top-40 left-40 w-60 h-60 border border-white rounded-full" />
          <div className="absolute bottom-20 right-20 w-80 h-80 border border-white rounded-full" />
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/20 rounded-full blur-xl" />
          <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-[#00B7B5]/30 rounded-full blur-2xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center w-full p-12 text-white">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-5xl font-bold tracking-tight">
              Blog<span className="text-[#00B7B5]">R</span>
            </h1>
            <p className="text-white/80 text-center mt-2">Your Creative Space</p>
          </div>

          {/* Illustration */}
          <div className="relative w-80 h-80 mb-8">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl transform rotate-6" />
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl transform -rotate-3" />
            <div className="relative bg-white/20 backdrop-blur-md rounded-3xl p-8 h-full flex flex-col justify-center items-center">
              <svg
                className="w-32 h-32 text-white/90 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              <p className="text-white/90 text-center text-lg font-medium">
                Share your stories with the world
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-4 text-white/80">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#00B7B5] rounded-full" />
              <span>Write and publish your thoughts</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#00B7B5] rounded-full" />
              <span>Connect with like-minded readers</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#00B7B5] rounded-full" />
              <span>Grow your audience organically</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8 md:p-12">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <h1 className="text-4xl font-bold text-[#005461]">
              Blog<span className="text-[#00857F]">R</span>
            </h1>
            <p className="text-[#00857F] text-sm mt-1">Your Creative Space</p>
          </div>

          {/* Welcome Text */}
          <div className="text-center lg:text-left mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#005461]">
              Welcome back!
            </h2>
            <p className="text-[#00857F] mt-2">
              Please enter your details to sign in
            </p>
          </div>

          {/* Social Login Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <button onClick={() => alert("GoogleProvider is not included yet , Sorry for inconvenience , You can continue with Github.")} className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white border border-[#005461]/20 rounded-xl text-[#005461] font-medium hover:bg-[#E8F6F6] hover:border-[#00B7B5]/30 transition-all duration-300 shadow-sm hover:shadow-md">
              <FaGoogle className="text-[#00857F]" />
              <span className="text-sm">Google</span>
            </button>
            <button onClick={() => signIn("github")} className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white border border-[#005461]/20 rounded-xl text-[#005461] font-medium hover:bg-[#E8F6F6] hover:border-[#00B7B5]/30 transition-all duration-300 shadow-sm hover:shadow-md">
              <FaGithub className="text-[#00857F]" />
              <span className="text-sm">GitHub</span>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-linear-to-r from-transparent via-[#005461]/20 to-[#005461]/20" />
            <span className="text-[#00857F] text-sm font-medium">or continue with email</span>
            <div className="flex-1 h-px bg-linear-to-l from-transparent via-[#005461]/20 to-[#005461]/20" />
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#005461]"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <HiMail className="h-5 w-5 text-[#00857F]" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full pl-11 pr-4 py-3 bg-white border border-[#005461]/20 rounded-xl text-[#005461] placeholder-[#00857F]/50 focus:outline-none focus:ring-2 focus:ring-[#00B7B5]/50 focus:border-[#00B7B5] transition-all duration-300"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#005461]"
              >
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <HiLockClosed className="h-5 w-5 text-[#00857F]" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full pl-11 pr-12 py-3 bg-white border border-[#005461]/20 rounded-xl text-[#005461] placeholder-[#00857F]/50 focus:outline-none focus:ring-2 focus:ring-[#00B7B5]/50 focus:border-[#00B7B5] transition-all duration-300"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#00857F] hover:text-[#005461] transition-colors"
                >
                  {showPassword ? (
                    <FaEyeSlash className="h-5 w-5" />
                  ) : (
                    <FaEye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="w-5 h-5 border-2 border-[#005461]/30 rounded-md peer-checked:bg-[#005461] peer-checked:border-[#005461] transition-all duration-300" />
                  <svg
                    className="absolute top-1 left-1 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-sm text-[#005461] group-hover:text-[#00857F] transition-colors">
                  Remember me
                </span>
              </label>

              <a
                href="/forgot-password"
                className="text-sm text-[#00857F] hover:text-[#005461] font-medium transition-colors hover:underline underline-offset-2"
              >
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="relative w-full py-3.5 bg-linear-to-r from-[#005461] via-[#00696B] to-[#00857F] text-white font-semibold rounded-xl shadow-lg shadow-[#005461]/25 hover:shadow-xl hover:shadow-[#005461]/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 overflow-hidden group"
            >
              <span className="absolute inset-0 bg-linear-to-r from-[#00857F] via-[#00696B] to-[#005461] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative flex items-center justify-center gap-2">
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
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
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign in
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </>
                )}
              </span>
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="mt-8 text-center text-[#005461]">
            Don&apos;t have an account?{" "}
            <a
              href="/signup"
              className="font-semibold text-[#00857F] hover:text-[#00B7B5] transition-colors hover:underline underline-offset-2"
            >
              Create an account
            </a>
          </p>

          {/* Footer */}
          <p className="mt-8 text-center text-xs text-[#00857F]/70">
            By signing in, you agree to our{" "}
            <a href="/terms" className="underline hover:text-[#005461]">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="underline hover:text-[#005461]">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;