"use client";
import React, { useState } from 'react';

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState('student'); // Added state for role

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    console.log(`Registering as: ${role}`); // You can pass the role to your backend here
    setTimeout(() => setIsLoading(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#f4f5f9] flex flex-col items-center justify-center p-4 font-sans text-gray-800">
      {/* Main Card Container */}
      <div className="flex flex-col lg:flex-row w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* Left Section - Branding (HIDDEN ON MOBILE & TABLET) */}
        <div 
          className="hidden lg:flex lg:w-5/12 bg-[#2563eb] text-white p-8 flex-col justify-center items-center relative"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1.5px, transparent 1.5px)',
            backgroundSize: '24px 24px',
          }}
        >
          <div className="bg-white text-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-center leading-tight">
            Join the future of learning.
          </h1>
          
          <p className="text-blue-100 text-center text-sm lg:text-base mb-8 max-w-sm">
            Experience a refined environment designed for institutional excellence and student growth.
          </p>

          <div className="flex flex-row w-full gap-3 max-w-md">
            <div className="flex-1 border border-blue-400/30 bg-blue-500/20 backdrop-blur-sm rounded-xl p-3 flex flex-col items-center justify-center gap-1.5">
              <svg className="w-5 h-5 text-blue-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-xs font-medium text-center">Enterprise Grade</span>
            </div>
            <div className="flex-1 border border-blue-400/30 bg-blue-500/20 backdrop-blur-sm rounded-xl p-3 flex flex-col items-center justify-center gap-1.5">
              <svg className="w-5 h-5 text-blue-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <span className="text-xs font-medium text-center">Modern UI</span>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full lg:w-7/12 p-6 md:p-8 lg:p-10 bg-white">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Create an account</h2>
          <p className="text-gray-500 mb-6 text-sm">Get started with EduSphere today.</p>

          <form className="space-y-4" onSubmit={handleRegister}>
            {/* Role Selection (State added here) */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">Registering as</label>
              <div className="flex bg-[#f3f4f6] p-1 rounded-xl relative">
                <button 
                  type="button" 
                  onClick={() => setRole('student')}
                  className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all duration-200 z-10 ${
                    role === 'student' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Student
                </button>
                <button 
                  type="button" 
                  onClick={() => setRole('teacher')}
                  className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all duration-200 z-10 ${
                    role === 'teacher' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Teacher
                </button>
              </div>
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  disabled={isLoading}
                  type="text"
                  placeholder="John Doe"
                  className="w-full pl-10 pr-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
                />
              </div>
            </div>

            {/* Work Email */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">Work Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  disabled={isLoading}
                  type="email"
                  placeholder="name@institution.edu"
                  className="w-full pl-10 pr-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
                />
              </div>
            </div>

            {/* Passwords Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <input
                    disabled={isLoading}
                    type="password"
                    placeholder="••••••••"
                    className="w-full pl-10 pr-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wider">Confirm</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <input
                    disabled={isLoading}
                    type="password"
                    placeholder="••••••••"
                    className="w-full pl-10 pr-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
                  />
                </div>
              </div>
            </div>

            {/* Terms and Privacy */}
            <div className="flex items-center gap-2 pt-1">
              <input
                disabled={isLoading}
                type="checkbox"
                id="terms"
                className="w-3.5 h-3.5 rounded border-gray-300 text-blue-600 focus:ring-blue-600 cursor-pointer"
              />
              <label htmlFor="terms" className="text-xs text-gray-600 cursor-pointer">
                I agree to the <a href="#" className="text-blue-600 hover:underline font-medium">Terms</a> and <a href="#" className="text-blue-600 hover:underline font-medium">Privacy Policy</a>.
              </label>
            </div>

            {/* Submit Button with Animation */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full text-white text-sm font-semibold py-3 rounded-xl flex items-center justify-center gap-3 transition-all shadow-md active:scale-95 cursor-pointer ${
                isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-[#0047e1] hover:bg-blue-700'
              }`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Registering...</span>
                </>
              ) : (
                <>
                  <span>Create Account</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 py-1">
              <div className="h-px bg-gray-200 flex-1"></div>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">OR</span>
              <div className="h-px bg-gray-200 flex-1"></div>
            </div>

            {/* Google Sign In */}
            <button
              disabled={isLoading}
              type="button"
              className="w-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-sm font-semibold py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50 cursor-pointer"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Continue with Google
            </button>

            {/* Login Link */}
            <p className="text-center text-xs text-gray-600 mt-4">
              Already have an account?{' '}
              <a href="login" className="text-blue-600 hover:underline font-bold">
                Log in
              </a>
            </p>
          </form>
        </div>
      </div>

      {/* Footer Links */}
      <div className="mt-6 flex flex-col items-center gap-2 text-[10px] text-gray-400 font-medium">
        <div className="flex gap-4 sm:gap-6 uppercase tracking-widest">
          <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
          <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
          <a href="#" className="hover:text-gray-600 transition-colors">Compliance</a>
          <a href="#" className="hover:text-gray-600 transition-colors">SLA</a>
        </div>
        <p>© 2024 EduVault Enterprise. All rights reserved.</p>
      </div>
    </div>
  );
}