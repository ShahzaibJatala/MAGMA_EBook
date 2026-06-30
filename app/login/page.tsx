import React from 'react';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#f4f5f9] flex flex-col items-center justify-center p-4 font-sans text-gray-800">
      {/* Main Card Container */}
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* Left Section - Graphic & Testimonial (Hidden on mobile) */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-indigo-50/80 via-blue-50/40 to-purple-50/60 p-8 flex-col justify-center items-center relative overflow-hidden">
          
          {/* Decorative Monitor Graphic */}
          <div className="relative w-full max-w-md aspect-video mt-[-40px]">
            {/* Monitor Screen Frame */}
            <div className="absolute inset-0 bg-[#1a1a1a] rounded-xl shadow-2xl p-2 border border-gray-300">
              <div className="w-full h-full bg-gray-50 rounded-lg overflow-hidden relative">
                {/* Fake Dashboard Elements */}
                <div className="flex h-6 bg-white border-b border-gray-200 items-center px-3 gap-2">
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                  <div className="ml-4 h-2 w-16 bg-gray-200 rounded"></div>
                </div>
                <div className="p-4 flex gap-4 h-full">
                  <div className="w-1/4 space-y-3">
                    <div className="h-3 w-3/4 bg-gray-200 rounded"></div>
                    <div className="h-2 w-full bg-gray-100 rounded"></div>
                    <div className="h-2 w-5/6 bg-gray-100 rounded"></div>
                    <div className="h-2 w-full bg-gray-100 rounded"></div>
                  </div>
                  <div className="w-3/4 space-y-4">
                    <div className="flex gap-4">
                      <div className="h-12 flex-1 bg-blue-50 rounded-md border border-blue-100"></div>
                      <div className="h-12 flex-1 bg-green-50 rounded-md border border-green-100"></div>
                      <div className="h-12 flex-1 bg-purple-50 rounded-md border border-purple-100"></div>
                    </div>
                    <div className="h-24 w-full bg-gray-50 border border-gray-100 rounded-md"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Monitor Stand */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-24 h-10 bg-gradient-to-b from-gray-300 to-gray-400 rounded-t-lg shadow-inner z-0">
               <div className="w-6 h-2 bg-gray-200 rounded-full mx-auto mt-2 opacity-50"></div>
            </div>

            {/* Overlapping Testimonial Card */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-11/12 bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl p-5 border border-white z-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#0047e1] text-white flex items-center justify-center text-sm font-bold shadow-sm">
                  JD
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 leading-none">Dr. Julianne Devis</h4>
                  <p className="text-xs text-gray-500 mt-1">Director of Digital Learning</p>
                </div>
              </div>
              <p className="text-[13px] text-gray-600 italic leading-relaxed">
                "EduVault has completely transformed how we manage high-stakes assessments. The precision and security it offers is unmatched in the EdTech space."
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Login Form */}
        <div className="w-full md:w-1/2 p-6 md:p-10 lg:p-12 bg-white flex flex-col justify-center">
          
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <svg className="w-7 h-7 text-[#0047e1]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-xl font-bold text-[#0047e1] tracking-tight">EduVault</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
          <p className="text-gray-500 mb-6 text-sm">Please enter your credentials to access your secure dashboard.</p>

          <form className="space-y-4">
            
            {/* Email Address */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="email"
                  placeholder="name@institution.edu"
                  className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all placeholder-gray-400"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="block text-xs font-semibold text-gray-700">Password</label>
                <a href="#" className="text-xs text-[#0047e1] hover:underline font-medium">Forgot password?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-9 pr-10 py-2.5 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all placeholder-gray-400 tracking-widest"
                />
                <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2 pt-1 pb-2">
              <input
                type="checkbox"
                id="remember"
                className="w-3.5 h-3.5 rounded border-gray-300 text-[#0047e1] focus:ring-[#0047e1] cursor-pointer"
              />
              <label htmlFor="remember" className="text-xs text-gray-600 cursor-pointer font-medium">
                Remember this device for 30 days
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#0047e1] hover:bg-blue-700 text-white text-sm font-medium py-2.5 rounded-xl transition-all shadow-sm cursor-pointer"
            >
              Sign In
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 py-2">
              <div className="h-px bg-gray-200 flex-1"></div>
              <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">OR CONTINUE WITH</span>
              <div className="h-px bg-gray-200 flex-1"></div>
            </div>

            {/* Google Sign In */}
            <button
              type="button"
              className="w-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-sm font-medium py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Continue with Google
            </button>
            
          </form>

          {/* Footer Sub-links */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-gray-500">
            <p>© 2024 EduVault Enterprise.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-800 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-800 transition-colors">Terms of Service</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}