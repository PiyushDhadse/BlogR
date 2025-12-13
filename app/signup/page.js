"use client";
import React, { useState, useEffect } from "react";
import {
  FaGoogle,
  FaGithub,
  FaEye,
  FaEyeSlash,
  FaUser,
  FaCamera,
} from "react-icons/fa";
import { HiMail, HiLockClosed, HiCheckCircle, HiXCircle } from "react-icons/hi";
import { useSession,signIn,signOut } from "next-auth/react";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  // Password strength state
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    label: "",
    color: "",
  });

  // Password requirements
  const [requirements, setRequirements] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false,
  });

  // Check password strength
  useEffect(() => {
    const password = formData.password;

    const newRequirements = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };

    setRequirements(newRequirements);

    const score = Object.values(newRequirements).filter(Boolean).length;

    let label = "";
    let color = "";

    if (password.length === 0) {
      label = "";
      color = "";
    } else if (score <= 2) {
      label = "Weak";
      color = "bg-red-500";
    } else if (score <= 3) {
      label = "Fair";
      color = "bg-yellow-500";
    } else if (score <= 4) {
      label = "Good";
      color = "bg-[#00857F]";
    } else {
      label = "Strong";
      color = "bg-[#00B7B5]";
    }

    setPasswordStrength({ score, label, color });
  }, [formData.password]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!formData.agreeToTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log("Signup submitted:", formData);
    }, 2000);
  };

  const passwordsMatch =
    formData.password === formData.confirmPassword &&
    formData.confirmPassword !== "";

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

        {/* Animated dots */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-[#00B7B5] rounded-full animate-ping" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-white rounded-full animate-ping delay-1000" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center w-full p-12 text-white">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-5xl font-bold tracking-tight">
              Blog<span className="text-[#00B7B5]">R</span>
            </h1>
            <p className="text-white/80 text-center mt-2">
              Your Creative Space
            </p>
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
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
              <p className="text-white/90 text-center text-lg font-medium">
                Join our community of writers
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-4 text-white/80">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#00B7B5]/30 flex items-center justify-center">
                <span className="text-sm font-bold">1</span>
              </div>
              <span>Create your free account</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#00B7B5]/30 flex items-center justify-center">
                <span className="text-sm font-bold">2</span>
              </div>
              <span>Set up your profile</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#00B7B5]/30 flex items-center justify-center">
                <span className="text-sm font-bold">3</span>
              </div>
              <span>Start writing and sharing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8 md:p-12 overflow-y-auto">
        <div className="w-full max-w-md py-8">
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
              Create an account
            </h2>
            <p className="text-[#00857F] mt-2">
              Join our community of creative writers
            </p>
          </div>

          {/* Social Signup Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white border border-[#005461]/20 rounded-xl text-[#005461] font-medium hover:bg-[#E8F6F6] hover:border-[#00B7B5]/30 transition-all duration-300 shadow-sm hover:shadow-md">
              <FaGoogle className="text-[#00857F]" />
              <span className="text-sm">Google</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white border border-[#005461]/20 rounded-xl text-[#005461] font-medium hover:bg-[#E8F6F6] hover:border-[#00B7B5]/30 transition-all duration-300 shadow-sm hover:shadow-md">
              <FaGithub className="text-[#00857F]" />
              <span className="text-sm">GitHub</span>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-linear-to-r from-transparent via-[#005461]/20 to-[#005461]/20" />
            <span className="text-[#00857F] text-sm font-medium">
              or signup with email
            </span>
            <div className="flex-1 h-px bg-linear-to-l from-transparent via-[#005461]/20 to-[#005461]/20" />
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Profile Picture Upload */}
            <div className="flex justify-center mb-6">
              <div className="relative group">
                <div className="w-24 h-24 rounded-full bg-linear-to-br from-[#005461] to-[#00857F] p-[3px] shadow-lg">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                    {profileImage ? (
                      <img
                        src={profileImage}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <FaUser className="w-10 h-10 text-[#00857F]/50" />
                    )}
                  </div>
                </div>
                <label
                  htmlFor="profileImage"
                  className="absolute bottom-0 right-0 w-8 h-8 bg-[#00B7B5] rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:bg-[#00857F] transition-colors duration-300 group-hover:scale-110"
                >
                  <FaCamera className="w-4 h-4 text-white" />
                </label>
                <input
                  type="file"
                  id="profileImage"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>
            </div>
            <p className="text-center text-xs text-[#00857F] -mt-4 mb-4">
              Upload profile picture (optional)
            </p>

            {/* Full Name Field */}
            <div className="space-y-2">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-[#005461]"
              >
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FaUser className="h-4 w-4 text-[#00857F]" />
                </div>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full pl-11 pr-4 py-3 bg-white border border-[#005461]/20 rounded-xl text-[#005461] placeholder-[#00857F]/50 focus:outline-none focus:ring-2 focus:ring-[#00B7B5]/50 focus:border-[#00B7B5] transition-all duration-300"
                  required
                />
              </div>
            </div>

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
                  placeholder="Create a strong password"
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

              {/* Password Strength Indicator */}
              {formData.password && (
                <div className="space-y-2 mt-2">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${passwordStrength.color} transition-all duration-300`}
                        style={{
                          width: `${(passwordStrength.score / 5) * 100}%`,
                        }}
                      />
                    </div>
                    <span
                      className={`text-xs font-medium ${
                        passwordStrength.label === "Weak"
                          ? "text-red-500"
                          : passwordStrength.label === "Fair"
                          ? "text-yellow-500"
                          : passwordStrength.label === "Good"
                          ? "text-[#00857F]"
                          : "text-[#00B7B5]"
                      }`}
                    >
                      {passwordStrength.label}
                    </span>
                  </div>

                  {/* Password Requirements */}
                  <div className="grid grid-cols-2 gap-1 text-xs">
                    <div
                      className={`flex items-center gap-1 ${
                        requirements.length ? "text-[#00B7B5]" : "text-gray-400"
                      }`}
                    >
                      {requirements.length ? (
                        <HiCheckCircle className="w-3 h-3" />
                      ) : (
                        <HiXCircle className="w-3 h-3" />
                      )}
                      8+ characters
                    </div>
                    <div
                      className={`flex items-center gap-1 ${
                        requirements.uppercase
                          ? "text-[#00B7B5]"
                          : "text-gray-400"
                      }`}
                    >
                      {requirements.uppercase ? (
                        <HiCheckCircle className="w-3 h-3" />
                      ) : (
                        <HiXCircle className="w-3 h-3" />
                      )}
                      Uppercase
                    </div>
                    <div
                      className={`flex items-center gap-1 ${
                        requirements.lowercase
                          ? "text-[#00B7B5]"
                          : "text-gray-400"
                      }`}
                    >
                      {requirements.lowercase ? (
                        <HiCheckCircle className="w-3 h-3" />
                      ) : (
                        <HiXCircle className="w-3 h-3" />
                      )}
                      Lowercase
                    </div>
                    <div
                      className={`flex items-center gap-1 ${
                        requirements.number ? "text-[#00B7B5]" : "text-gray-400"
                      }`}
                    >
                      {requirements.number ? (
                        <HiCheckCircle className="w-3 h-3" />
                      ) : (
                        <HiXCircle className="w-3 h-3" />
                      )}
                      Number
                    </div>
                    <div
                      className={`flex items-center gap-1 ${
                        requirements.special
                          ? "text-[#00B7B5]"
                          : "text-gray-400"
                      }`}
                    >
                      {requirements.special ? (
                        <HiCheckCircle className="w-3 h-3" />
                      ) : (
                        <HiXCircle className="w-3 h-3" />
                      )}
                      Special char
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-[#005461]"
              >
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <HiLockClosed className="h-5 w-5 text-[#00857F]" />
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className={`w-full pl-11 pr-12 py-3 bg-white border rounded-xl text-[#005461] placeholder-[#00857F]/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
                    formData.confirmPassword
                      ? passwordsMatch
                        ? "border-[#00B7B5] focus:ring-[#00B7B5]/50"
                        : "border-red-400 focus:ring-red-400/50"
                      : "border-[#005461]/20 focus:ring-[#00B7B5]/50 focus:border-[#00B7B5]"
                  }`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-10 pr-2 flex items-center text-[#00857F] hover:text-[#005461] transition-colors"
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash className="h-5 w-5" />
                  ) : (
                    <FaEye className="h-5 w-5" />
                  )}
                </button>
                {formData.confirmPassword && (
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                    {passwordsMatch ? (
                      <HiCheckCircle className="h-5 w-5 text-[#00B7B5]" />
                    ) : (
                      <HiXCircle className="h-5 w-5 text-red-500" />
                    )}
                  </div>
                )}
              </div>
              {formData.confirmPassword && !passwordsMatch && (
                <p className="text-xs text-red-500 mt-1">
                  Passwords do not match
                </p>
              )}
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start gap-3">
              <label className="flex items-start gap-2 cursor-pointer group">
                <div className="relative mt-0.5">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="sr-only peer"
                    required
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
                <span className="text-sm text-[#005461] leading-relaxed">
                  I agree to the{" "}
                  <a
                    href="/terms"
                    className="font-medium text-[#00857F] hover:text-[#00B7B5] underline underline-offset-2"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="/privacy"
                    className="font-medium text-[#00857F] hover:text-[#00B7B5] underline underline-offset-2"
                  >
                    Privacy Policy
                  </a>
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || !passwordsMatch || !formData.agreeToTerms}
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
                    Creating account...
                  </>
                ) : (
                  <>
                    Create Account
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
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </>
                )}
              </span>
            </button>
          </form>

          {/* Sign In Link */}
          <p className="mt-8 text-center text-[#005461]">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-semibold text-[#00857F] hover:text-[#00B7B5] transition-colors hover:underline underline-offset-2"
            >
              Sign in
            </a>
          </p>

          {/* Security Badge */}
          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#00857F]/70">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            <span>Your data is protected with 256-bit encryption</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
