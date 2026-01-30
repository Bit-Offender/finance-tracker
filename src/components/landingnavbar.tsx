"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { ArrowRight, Menu, X } from "lucide-react";

const LandingNavbar = () => {
  const { isSignedIn } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Overlay - click to close */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div className="fixed top-3 left-0 right-0 mx-4 sm:mx-5 z-50 lg:sticky">
        <nav className="bg-slate-700/30 backdrop-blur-lg rounded-full border-2 border-white/10 p-3 sm:p-1">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="p-2">
              <Link
                href="/"
                className="text-xl sm:text-2xl font-bold text-[#439A86] ml-2 sm:ml-3"
              >
                FinTrack
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8 mr-4">
              <Link
                href="/"
                className="flex flex-col group/home opacity-90 hover:opacity-100 transition-all duration-300"
              >
                Home
                <span className="bg-[#439A86] w-0 h-0.5 group-focus/home:w-full group-hover/home:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/marketing/about"
                className="flex flex-col group/about opacity-90 hover:opacity-100 transition-all duration-300"
              >
                About
                <span className="bg-[#439A86] w-0 h-0.5 group-focus/about:w-full group-hover/about:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/marketing/contact"
                className="flex flex-col group/contact opacity-90 hover:opacity-100 transition-all duration-300"
              >
                Contact Us
                <span className="bg-[#439A86] w-0 h-0.5 group-focus/contact:w-full group-hover/contact:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/marketing/support"
                className="flex flex-col group/support opacity-90 hover:opacity-100 transition-all duration-300"
              >
                Support Us
                <span className="bg-[#439A86] w-0 h-0.5 group-focus/support:w-full group-hover/support:w-full transition-all duration-300"></span>
              </Link>

              {isSignedIn ? (
                <Link href="/dashboard">
                  <Button className="hover:bg-white hover:text-black transition-all duration-300 rounded-full group/button">
                    Go to Dashboard
                    <ArrowRight className="ml-2 group-hover/button:translate-x-1 transition-all duration-300" />
                  </Button>
                </Link>
              ) : (
                <Link href="/sign-up">
                  <Button className="hover:bg-white hover:text-black transition-all duration-300 rounded-full group/button">
                    Get Started
                    <ArrowRight className="ml-2 group-hover/button:translate-x-1 transition-all duration-300" />
                  </Button>
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              className="lg:hidden p-2 mr-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-2 bg-slate-700/95 backdrop-blur-lg rounded-2xl border-2 border-white/10 p-4 space-y-2 max-h-[calc(100vh-100px)] overflow-y-auto">
            <Link
              href="/"
              className="block px-4 py-3 hover:bg-white/10 rounded-lg transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/marketing/about"
              className="block px-4 py-3 hover:bg-white/10 rounded-lg transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/marketing/contact"
              className="block px-4 py-3 hover:bg-white/10 rounded-lg transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/marketing/support"
              className="block px-4 py-3 hover:bg-white/10 rounded-lg transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Support Us
            </Link>

            <div className="pt-2">
              {isSignedIn ? (
                <Link href="/dashboard" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full hover:bg-white hover:text-black transition-all duration-300 rounded-full group/button">
                    Go to Dashboard
                    <ArrowRight className="ml-2 group-hover/button:translate-x-1 transition-all duration-300" />
                  </Button>
                </Link>
              ) : (
                <Link href="/sign-up" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full hover:bg-white hover:text-black transition-all duration-300 rounded-full group/button">
                    Get Started
                    <ArrowRight className="ml-2 group-hover/button:translate-x-1 transition-all duration-300" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Spacer to prevent content from going under fixed navbar on mobile */}
      <div className="h-20 lg:hidden"></div>
    </>
  );
};

export default LandingNavbar;
