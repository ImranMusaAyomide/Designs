"use client";

import React, { useState } from "react";

const steps = ["Account", "Wallet", "Socials", "Profile", "Interests"];

interface SignInProps {
  onBack?: () => void;
}

export default function SignIn({ onBack }: SignInProps) {
  const [email, setEmail] = useState("maya@");
  const [password, setPassword] = useState("............");
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(true);
  const [emailError, setEmailError] = useState(true);

  const isStrongPassword = password.length >= 12;

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setEmail(val);
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    setEmailError(!valid);
  };

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#19211D] flex flex-col justify-between font-sans">
      {/* Header */}
      <header className="w-full border-b border-neutral-200/60 bg-[#F6F4EE]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-5 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <svg className="w-5 h-5 text-[#19211D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="8" strokeWidth="1.8" />
              <circle cx="5.5" cy="8.5" r="2.2" fill="currentColor" stroke="none" />
            </svg>
            <span className="text-base font-bold tracking-widest text-[#19211D] uppercase">ORBIT</span>
          </div>

          {/* Center tagline */}
          <div className="hidden md:block">
            <span className="text-[11px] font-semibold tracking-widest text-neutral-500 uppercase">
              CONTRIBUTION, RECOGNIZED.
            </span>
          </div>

          {/* Help */}
          <div className="text-xs sm:text-sm text-neutral-600">
            Need a hand?{" "}
            <a href="#help" className="font-medium text-neutral-900 hover:underline transition-colors">
              Help center
            </a>
          </div>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="w-full border-b border-neutral-200/50 bg-[#F6F4EE]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-4">
          <div className="flex items-center gap-1.5 sm:gap-0">
            <span className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase mr-4 whitespace-nowrap hidden sm:block">
              YOUR ORBIT / 1 OF 5
            </span>

            <div className="flex items-center gap-0 w-full sm:w-auto">
              {steps.map((step, i) => (
                <React.Fragment key={step}>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                        i === 0
                          ? "bg-[#183E33] text-white"
                          : "border border-neutral-300 text-neutral-400"
                      }`}
                    >
                      {i + 1}
                    </div>
                    <span
                      className={`text-xs font-medium hidden sm:block ${
                        i === 0 ? "text-[#183E33] font-semibold" : "text-neutral-400"
                      }`}
                    >
                      {step}
                    </span>
                    {i === 0 && (
                      <span className="text-xs font-semibold text-[#183E33] sm:hidden">{step}</span>
                    )}
                  </div>

                  {i < steps.length - 1 && (
                    <div className="flex-1 sm:w-10 h-px bg-neutral-200 mx-1 sm:mx-2" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col">
            {/* Eyebrow */}
            <div className="mb-4">
              <span className="text-[11px] font-bold tracking-widest text-neutral-500 uppercase">
                01 / A NEW BEGINNING
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-medium tracking-tight text-[#171E1B] leading-[1.1] mb-5">
              Start with
              <br />
              a little curiosity.
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-neutral-500 leading-relaxed mb-10 max-w-sm">
              One account for the communities you join, the work you share, and the recognition you earn.
            </p>

            <div className="border-t border-neutral-300/40 pt-8 flex flex-col gap-6">
              {/* Feature 1 */}
              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center shrink-0 bg-white">
                  <svg className="w-3.5 h-3.5 text-neutral-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="8" />
                    <path d="M12 7v5l3 3" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-neutral-900 mb-0.5">Your contribution, connected</div>
                  <div className="text-xs text-neutral-500 leading-relaxed">Keep your reputation and task history in one place.</div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center shrink-0 bg-white">
                  <svg className="w-3.5 h-3.5 text-neutral-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-neutral-900 mb-0.5">A wallet can come later</div>
                  <div className="text-xs text-neutral-500 leading-relaxed">Create an account with email. Connect a wallet when you&apos;re ready for onchain rewards.</div>
                </div>
              </div>
            </div>

            {/* Already joined notice */}
            <div className="mt-10">
              <div className="text-[11px] font-bold tracking-widest text-neutral-500 uppercase mb-3">
                IF YOU&apos;VE JOINED BEFORE
              </div>
              <div className="bg-[#EEF3F7] border border-[#D3E2ED] rounded-xl p-4 flex items-start gap-3">
                <svg className="w-4 h-4 text-[#2563EB] mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4M12 16h.01" />
                </svg>
                <div>
                  <div className="text-xs font-bold text-[#1E40AF] mb-1">Email already registered?</div>
                  <div className="text-xs text-[#2563EB] leading-relaxed">
                    This email already has an ORBIT account.{" "}
                    <a href="#login" className="underline font-medium hover:text-[#1D4ED8]">Log in</a>{" "}
                    or{" "}
                    <a href="#reset" className="underline font-medium hover:text-[#1D4ED8]">reset your password</a>{" "}
                    to pick up where you left off.
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={onBack}
                className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-neutral-800 hover:text-black hover:underline transition-colors bg-transparent border-none cursor-pointer p-0"
              >
                ← Back to home
              </button>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="w-full max-w-lg bg-white rounded-2xl border border-neutral-200/70 shadow-[0_2px_24px_rgba(0,0,0,0.04)] p-8 sm:p-10">
              <h2 className="text-2xl font-semibold text-[#171E1B] tracking-tight mb-7">
                Create your account
              </h2>

              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="you@example.com"
                    className={`w-full px-4 py-3 rounded-lg border text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition-all focus:ring-2 focus:ring-[#183E33]/30 ${
                      emailError
                        ? "border-red-400 bg-white focus:border-red-400"
                        : "border-neutral-300 bg-white focus:border-[#183E33]"
                    }`}
                  />
                  {emailError && (
                    <p className="mt-1.5 text-xs text-red-500">
                      Enter a valid email address, like maya@example.com.
                    </p>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <label htmlFor="password" className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Password
                  </label>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create a strong password"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition-all focus:border-[#183E33] focus:ring-2 focus:ring-[#183E33]/30 bg-white"
                  />
                  <p className="mt-1.5 text-xs text-neutral-400">
                    Use 12+ characters with a number and a symbol.
                  </p>

                  {/* Show password / strength row */}
                  <div className="flex items-center justify-between mt-2">
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-xs font-medium text-neutral-700 hover:text-black transition-colors"
                    >
                      {showPassword ? "Hide password" : "Show password"}
                    </button>
                    {isStrongPassword && (
                      <span className="text-xs font-medium text-[#16A34A] flex items-center gap-1">
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m5 12 5 5L20 7" />
                        </svg>
                        Strong password
                      </span>
                    )}
                  </div>
                </div>

                {/* Terms Checkbox */}
                <div className="border border-neutral-200 rounded-xl px-4 py-3.5 flex items-center gap-3 bg-neutral-50/50">
                  <input
                    id="terms"
                    type="checkbox"
                    checked={agreed}
                    onChange={() => setAgreed(!agreed)}
                    className="w-4 h-4 rounded accent-[#183E33] cursor-pointer shrink-0"
                  />
                  <label htmlFor="terms" className="text-xs sm:text-sm text-neutral-700 cursor-pointer select-none">
                    I agree to the{" "}
                    <a href="#terms" className="font-medium text-neutral-900 underline hover:text-black">Terms</a>{" "}
                    and{" "}
                    <a href="#privacy" className="font-medium text-neutral-900 underline hover:text-black">Privacy policy</a>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!agreed}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#183E33] hover:bg-[#122d26] active:scale-[0.99] text-white font-semibold text-sm transition-all duration-150 shadow-sm mt-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Create account
                </button>

                {/* Disclaimer */}
                <p className="text-[11px] text-neutral-400 leading-relaxed">
                  We&apos;ll use your email for account access and important updates. No marketing without your permission.
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-6 border-t border-neutral-300/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
        <div>© 2026 ORBIT · Built around contribution.</div>
        <div className="flex items-center gap-3">
          <a href="#privacy" className="hover:text-neutral-800 transition-colors">Privacy policy</a>
          <span className="text-neutral-400">/</span>
          <a href="#terms" className="hover:text-neutral-800 transition-colors">Terms of service</a>
        </div>
      </footer>
    </div>
  );
}

