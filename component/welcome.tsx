"use client";

import React, { useState } from "react";
import SignIn from "./signin";

export default function Welcome() {
  const [screen, setScreen] = useState<"welcome" | "signin">("welcome");

  if (screen === "signin") {
    return <SignIn onBack={() => setScreen("welcome")} />;
  }

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#19211D] flex flex-col justify-between selection:bg-[#183E33] selection:text-white font-sans">
      {/* Top Navigation */}
      <header className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-6 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-2.5">
          <div className="relative flex items-center justify-center">
            {/* Orbit Icon */}
            <svg
              className="w-5 h-5 text-[#19211D]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="8" strokeWidth="1.8" />
              <circle
                cx="5.5"
                cy="8.5"
                r="2.2"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </div>
          <span className="text-base sm:text-lg font-bold tracking-widest text-[#19211D] uppercase">
            ORBIT
          </span>
        </div>

        {/* Center Tagline */}
        <div className="hidden md:block">
          <span className="text-[11px] font-semibold tracking-widest text-neutral-500 uppercase">
            CONTRIBUTION, RECOGNIZED.
          </span>
        </div>

        {/* Auth Link */}
        <div className="text-xs sm:text-sm text-neutral-600">
          Already in orbit?{" "}
          <button
            onClick={() => setScreen("signin")}
            className="font-medium text-neutral-900 hover:text-black hover:underline transition-colors bg-transparent border-none cursor-pointer p-0"
          >
            Log in
          </button>
        </div>
      </header>

      {/* Main Content Hero */}
      <main className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-8 lg:py-12 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          {/* Left Column: Information & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow Label */}
            <div className="mb-4">
              <span className="text-[11px] font-bold tracking-widest text-[#183E33] uppercase">
                A PLACE FOR YOUR CONTRIBUTION
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-[70px] font-medium tracking-tight text-[#171E1B] leading-[1.08] mb-6">
              Small actions.
              <br />
              Lasting impact.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-neutral-500 max-w-lg leading-relaxed font-normal mb-8">
              Find communities you believe in. Share what you know. Earn
              recognition for moving things forward, together.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 max-w-md w-full">
              <button
                type="button"
                onClick={() => setScreen("signin")}
                className="w-full py-3.5 px-6 rounded-lg bg-[#183E33] hover:bg-[#123128] active:scale-[0.99] text-white font-medium text-sm transition-all duration-150 shadow-sm text-center flex items-center justify-center cursor-pointer"
              >
                Create your ORBIT account
              </button>

              <button
                type="button"
                className="w-full py-3.5 px-6 rounded-lg bg-white hover:bg-neutral-50 active:scale-[0.99] text-neutral-800 border border-neutral-300 font-medium text-sm transition-all duration-150 text-center flex items-center justify-center cursor-pointer shadow-xs"
              >
                Continue with a wallet
              </button>

              <p className="text-xs text-neutral-500 text-center mt-2">
                Already a contributor?{" "}
                <button
                  onClick={() => setScreen("signin")}
                  className="font-medium text-neutral-900 hover:underline bg-transparent border-none cursor-pointer p-0 text-xs"
                >
                  Log in
                </button>
              </p>
            </div>

            {/* Bottom Key Features */}
            <div className="mt-12 sm:mt-16 pt-8 border-t border-neutral-300/40 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {/* Feature 1 */}
              <div className="flex items-center gap-2.5 text-neutral-700">
                <svg
                  className="w-4 h-4 text-neutral-600 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span className="text-xs sm:text-sm font-medium text-neutral-800">
                  Find your people
                </span>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-2.5 text-neutral-700">
                <svg
                  className="w-4 h-4 text-neutral-600 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span className="text-xs sm:text-sm font-medium text-neutral-800">
                  Do meaningful work
                </span>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-2.5 text-neutral-700">
                <svg
                  className="w-4 h-4 text-neutral-600 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span className="text-xs sm:text-sm font-medium text-neutral-800">
                  Build your reputation
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-lg bg-white rounded-3xl p-6 sm:p-9 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-neutral-200/60 flex flex-col justify-between">
              {/* Card Header */}
              <div className="flex items-center justify-between text-[10px] tracking-wider mb-6">
                <span className="font-bold text-neutral-700 uppercase">
                  THE CONTRIBUTION EFFECT
                </span>
                <span className="font-medium text-neutral-400 uppercase">
                  01 / ORBIT
                </span>
              </div>

              {/* Orbit Visual Graphic */}
              <div className="relative py-10 flex items-center justify-center">
                {/* Outer Orbit Ring */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-neutral-200/60 flex items-center justify-center">
                  {/* Subtle Inner Ring */}
                  <div className="absolute inset-4 rounded-full border border-neutral-100/80" />

                  {/* Satellite Dot - Top Right */}
                  <div className="absolute top-7 right-8 w-2 h-2 rounded-full bg-[#183E33]" />

                  {/* Satellite Dot - Bottom Left */}
                  <div className="absolute bottom-12 left-6 w-1.5 h-1.5 rounded-full bg-neutral-300" />

                  {/* Central Void / Black Sphere */}
                  <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-black shadow-xl flex items-center justify-center overflow-hidden border border-neutral-800/80">
                    {/* Glowing Cosmic Blue Trail */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        className="w-full h-full p-2 animate-[spin_12s_linear_infinite]"
                        viewBox="0 0 160 160"
                        fill="none"
                      >
                        <defs>
                          <linearGradient
                            id="orbitGlow"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                          >
                            <stop
                              offset="0%"
                              stopColor="#ffffff"
                              stopOpacity="1"
                            />
                            <stop
                              offset="30%"
                              stopColor="#38bdf8"
                              stopOpacity="0.95"
                            />
                            <stop
                              offset="70%"
                              stopColor="#0284c7"
                              stopOpacity="0.6"
                            />
                            <stop
                              offset="100%"
                              stopColor="#0369a1"
                              stopOpacity="0"
                            />
                          </linearGradient>
                          <filter
                            id="blurEffect"
                            x="-20%"
                            y="-20%"
                            width="140%"
                            height="140%"
                          >
                            <feGaussianBlur
                              stdDeviation="3"
                              result="blur"
                            />
                            <feMerge>
                              <feMergeNode in="blur" />
                              <feMergeNode in="SourceGraphic" />
                            </feMerge>
                          </filter>
                        </defs>

                        {/* Orbit Arc / Comet Light Streak */}
                        <path
                          d="M 32 96 C 28 58 64 26 102 32 C 128 36 142 62 136 88 C 130 114 100 132 64 126"
                          stroke="url(#orbitGlow)"
                          strokeWidth="4.5"
                          strokeLinecap="round"
                          filter="url(#blurEffect)"
                        />
                        {/* Bright Core Tip */}
                        <circle
                          cx="34"
                          cy="94"
                          r="3"
                          fill="#ffffff"
                          filter="url(#blurEffect)"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Floating Badge - Top Left: "Find your people" */}
                  <div className="absolute top-10 -left-2 sm:left-0 bg-white border border-neutral-200/80 rounded-lg px-3 py-1.5 shadow-[0_2px_10px_rgba(0,0,0,0.05)] flex items-center gap-2 z-10">
                    <svg
                      className="w-3.5 h-3.5 text-neutral-600 shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    </svg>
                    <span className="text-xs font-medium text-neutral-800 whitespace-nowrap">
                      Find your people
                    </span>
                  </div>

                  {/* Floating Badge - Bottom Right: "Make a difference" */}
                  <div className="absolute bottom-8 -right-2 sm:right-2 bg-white border border-neutral-200/80 rounded-lg px-3 py-1.5 shadow-[0_2px_10px_rgba(0,0,0,0.05)] flex items-center gap-2 z-10">
                    <svg
                      className="w-3.5 h-3.5 text-neutral-600 shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    <span className="text-xs font-medium text-neutral-800 whitespace-nowrap">
                      Make a difference
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Bottom Text */}
              <div className="mt-4">
                <h2 className="text-2xl sm:text-[26px] font-medium text-[#171E1B] tracking-tight mb-2">
                  Your perspective belongs here.
                </h2>
                <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                  From a thoughtful reply to a better open tool, the things you
                  do can become something bigger.
                </p>

                {/* Reward Banner */}
                <div className="mt-6 p-3.5 rounded-xl bg-[#FDF9F0] border border-[#F3EBD8] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#F8E8CB] flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 text-[#A76D23]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z" />
                      <path d="M19 4v4" />
                      <path d="M21 6h-4" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-xs text-neutral-900 leading-tight">
                      Recognition is earned, not bought.
                    </div>
                    <div className="text-[11px] text-neutral-500 mt-0.5">
                      Build XP. Unlock rewards. Keep your contribution history.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-6 border-t border-neutral-300/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
        <div>© 2026 ORBIT · Built around contribution.</div>
        <div className="flex items-center gap-3">
          <a
            href="#privacy"
            className="hover:text-neutral-800 transition-colors"
          >
            Privacy policy
          </a>
          <span className="text-neutral-400">/</span>
          <a href="#terms" className="hover:text-neutral-800 transition-colors">
            Terms of service
          </a>
        </div>
      </footer>
    </div>
  );
}

export { Welcome };

