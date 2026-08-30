"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MapPin, Clock, ChevronDown, Menu, X } from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [admissionsDropdownOpen, setAdmissionsDropdownOpen] = useState(false);

  // Lock body scroll and handle Escape key when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMobileMenuOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  if (pathname === "/access") {
    return null;
  }

  return (
    <header className="w-full bg-white border-b border-gray-100 shadow-[0_2px_4px_rgba(0,0,0,0.02)] sticky top-0 z-50">
      {/* Top Header Bar with Generous Padding */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-5 sm:py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="relative h-14 w-56 sm:h-18 sm:w-72 md:h-20 md:w-80">
            <Image
              src="/logo.webp"
              alt="Citadel Christian School"
              fill
              priority
              className="object-contain object-left transition-transform duration-200 group-hover:scale-[1.01]"
            />
          </div>
        </Link>

        {/* Desktop Quick Info & CTA */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10 text-xs font-normal text-slate-700">
          {/* Phone & Email */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#581076]/10 flex items-center justify-center flex-shrink-0">
              <Phone className="w-4 h-4 text-[#581076] fill-[#581076]" />
            </div>
            <div className="flex flex-col">
              <a
                href="tel:9798300991"
                className="font-semibold text-slate-800 text-[13.5px] hover:text-[#581076] transition-colors leading-snug"
              >
                (979) 830-0991
              </a>
              <a
                href="mailto:Info@citadelchristian.org"
                className="text-slate-500 hover:text-[#581076] transition-colors leading-snug text-[11.5px]"
              >
                Info@citadelchristian.org
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#581076]/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-4 h-4 text-[#581076] fill-[#581076]" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-slate-800 text-[13.5px] leading-snug">
                2111 S Blue Bell Rd
              </span>
              <span className="text-slate-500 leading-snug text-[11.5px]">
                Brenham, TX, 77833
              </span>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#581076]/10 flex items-center justify-center flex-shrink-0">
              <Clock className="w-4 h-4 text-[#581076]" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-slate-800 text-[13.5px] leading-snug">
                8:00am - 4:00pm
              </span>
              <span className="text-slate-500 leading-snug text-[11.5px]">
                Monday to Friday
              </span>
            </div>
          </div>

          {/* Donate CTA Button */}
          <a
            href="https://givebutter.com/CitadelDonate"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center justify-center px-7 py-2.5 rounded-full bg-[#581076] hover:bg-[#470a60] text-white font-semibold text-sm tracking-wide shadow-sm hover:shadow transition-all duration-200"
          >
            Donate
          </a>
        </div>

        {/* Mobile Hamburger & Donate Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <a
            href="https://givebutter.com/CitadelDonate"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-[#581076] hover:bg-[#470a60] text-white font-medium text-xs shadow-sm transition"
          >
            Donate
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition cursor-pointer"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Navigation Slate Bar */}
      <div className="bg-[#3d4f5d] text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex items-stretch justify-between">
          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-stretch space-x-1.5 font-medium text-[13.5px] xl:text-[14px]">
            {/* About Us Dropdown */}
            <div
              className="relative group flex items-stretch"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <Link
                href="/about"
                className="flex items-center gap-1.5 px-3.5 py-3.5 hover:text-purple-200 transition-colors cursor-pointer"
                aria-expanded={aboutDropdownOpen}
              >
                <span>About Us</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 opacity-80" />
              </Link>

              {/* Dropdown Menu - Aligned exactly to bottom edge of grey bar */}
              <div
                className={`absolute left-0 top-full w-64 bg-white rounded-b-md shadow-xl border border-slate-100 py-3 transition-all duration-150 z-50 ${
                  aboutDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-1"
                }`}
              >
                <Link
                  href="/about/classical"
                  className="block px-6 py-2.5 text-[14px] text-[#581076] font-medium hover:bg-[#581076]/10 transition-colors"
                >
                  Classical
                </Link>
                <Link
                  href="/about/biblical"
                  className="block px-6 py-2 text-[14px] text-[#581076] font-medium hover:bg-[#581076]/10 transition-colors"
                >
                  Biblical
                </Link>
                <Link
                  href="/about/exceptional"
                  className="block px-6 py-2 text-[14px] text-[#581076] font-medium hover:bg-[#581076]/10 transition-colors"
                >
                  Exceptional
                </Link>
                <Link
                  href="/about/employment"
                  className="block px-6 py-2 text-[14px] text-[#581076] font-medium hover:bg-[#581076]/10 transition-colors"
                >
                  Employment Opportunities
                </Link>
              </div>
            </div>

            {/* University-Model */}
            <Link
              href="/university-model"
              className="flex items-center px-3.5 py-3.5 hover:text-purple-200 transition-colors"
            >
              University-Model®
            </Link>

            {/* Academics */}
            <Link
              href="/academics"
              className="flex items-center px-3.5 py-3.5 hover:text-purple-200 transition-colors"
            >
              Academics
            </Link>

            {/* Admissions Dropdown */}
            <div
              className="relative group flex items-stretch"
              onMouseEnter={() => setAdmissionsDropdownOpen(true)}
              onMouseLeave={() => setAdmissionsDropdownOpen(false)}
            >
              <Link
                href="/admissions"
                className="flex items-center gap-1.5 px-3.5 py-3.5 hover:text-purple-200 transition-colors cursor-pointer"
                aria-expanded={admissionsDropdownOpen}
              >
                <span>Admissions</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 opacity-80" />
              </Link>

              {/* Dropdown Menu - Aligned exactly to bottom edge of grey bar */}
              <div
                className={`absolute left-0 top-full w-80 bg-white rounded-b-md shadow-xl border border-slate-100 py-3 transition-all duration-150 z-50 ${
                  admissionsDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-1"
                }`}
              >
                <Link
                  href="/admissions"
                  className="block px-6 py-2.5 text-[14px] text-[#581076] font-medium hover:bg-[#581076]/10 transition-colors"
                >
                  Steps to Apply
                </Link>
                <Link
                  href="/admissions/schedule-a-tour"
                  className="block px-6 py-2.5 text-[14px] text-[#581076] font-medium hover:bg-[#581076]/10 transition-colors"
                >
                  Schedule A Tour
                </Link>
                <a
                  href="https://offers.citadelchristian.org/on-demand-virtual-tour"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-2.5 text-[14px] text-[#581076] font-medium hover:bg-[#581076]/10 transition-colors"
                >
                  Virtual Tour
                </a>
                <Link
                  href="/admissions/can-i-afford"
                  className="block px-6 py-2.5 text-[14px] text-[#581076] font-medium hover:bg-[#581076]/10 transition-colors"
                >
                  Can I Afford a Christian Private School for My Child?
                </Link>
                <Link
                  href="/admissions/free-resources"
                  className="block px-6 py-2.5 text-[14px] text-[#581076] font-medium hover:bg-[#581076]/10 transition-colors"
                >
                  Free Resources
                </Link>
              </div>
            </div>

            {/* Campus Life */}
            <Link
              href="/campus-life"
              className="flex items-center px-3.5 py-3.5 hover:text-purple-200 transition-colors"
            >
              Campus Life
            </Link>

            {/* News & Media */}
            <Link
              href="/news-media"
              className="flex items-center px-3.5 py-3.5 hover:text-purple-200 transition-colors"
            >
              News & Media
            </Link>

            {/* Contact Us */}
            <Link
              href="/contact-us"
              className="flex items-center px-3.5 py-3.5 hover:text-purple-200 transition-colors"
            >
              Contact Us
            </Link>

            {/* Support CCS */}
            <Link
              href="/support-ccs"
              className="flex items-center px-3.5 py-3.5 hover:text-purple-200 transition-colors"
            >
              Support CCS
            </Link>
          </nav>

          {/* Social Icons in Slate Bar */}
          <div className="hidden lg:flex items-center space-x-3.5 text-white/90">
            <a
              href="https://www.instagram.com/citadelchristianschool/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded hover:text-purple-200 transition-colors"
              aria-label="Citadel Christian School Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com/WisdomandVirtue"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded hover:text-purple-200 transition-colors"
              aria-label="Citadel Christian School Facebook"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Off-Canvas Navigation Drawer (Sliding Smoothly from Left) */}
      <div className="lg:hidden">
        {/* Backdrop overlay */}
        <div
          onClick={() => setMobileMenuOpen(false)}
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
          aria-hidden="true"
        />

        {/* Left-Sliding Drawer Panel */}
        <aside
          className={`fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-[#344450] text-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          aria-label="Mobile Navigation Menu"
        >
          {/* Drawer Top Header */}
          <div className="p-5 flex items-center justify-between border-b border-slate-600/50 bg-[#2b3842]">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="relative h-10 w-44"
            >
              <Image
                src="/logo.webp"
                alt="Citadel Christian School"
                fill
                className="object-contain object-left brightness-0 invert"
              />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 rounded-md text-slate-300 hover:text-white hover:bg-slate-700/50 transition cursor-pointer"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Drawer Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-6 py-5 space-y-3 text-sm font-medium">
            <div className="space-y-1">
              {/* About Us Accordion */}
              <div>
                <button
                  onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                  className="w-full flex items-center justify-between py-2.5 text-white hover:text-purple-200 cursor-pointer"
                >
                  <span>About Us</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      aboutDropdownOpen ? "rotate-180 text-purple-300" : ""
                    }`}
                  />
                </button>
                {aboutDropdownOpen && (
                  <div className="pl-4 space-y-1 text-slate-200 text-xs border-l border-slate-600/40 my-1 animate-in fade-in duration-150">
                    <Link
                      href="/about/classical"
                      className="block py-2 hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Classical
                    </Link>
                    <Link
                      href="/about/biblical"
                      className="block py-2 hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Biblical
                    </Link>
                    <Link
                      href="/about/exceptional"
                      className="block py-2 hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Exceptional
                    </Link>
                    <Link
                      href="/about/employment"
                      className="block py-2 hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Employment Opportunities
                    </Link>
                  </div>
                )}
              </div>

              {/* University-Model */}
              <Link
                href="/university-model"
                className="block py-2.5 text-white hover:text-purple-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                University-Model®
              </Link>

              {/* Academics */}
              <Link
                href="/academics"
                className="block py-2.5 text-white hover:text-purple-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Academics
              </Link>

              {/* Admissions Accordion */}
              <div>
                <button
                  onClick={() => setAdmissionsDropdownOpen(!admissionsDropdownOpen)}
                  className="w-full flex items-center justify-between py-2.5 text-white hover:text-purple-200 cursor-pointer"
                >
                  <span>Admissions</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      admissionsDropdownOpen ? "rotate-180 text-purple-300" : ""
                    }`}
                  />
                </button>
                {admissionsDropdownOpen && (
                  <div className="pl-4 space-y-1 text-slate-200 text-xs border-l border-slate-600/40 my-1 animate-in fade-in duration-150">
                    <Link
                      href="/admissions"
                      className="block py-2 hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Steps to Apply
                    </Link>
                    <Link
                      href="/admissions/schedule-a-tour"
                      className="block py-2 hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Schedule A Tour
                    </Link>
                    <a
                      href="https://offers.citadelchristian.org/on-demand-virtual-tour"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-2 hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Virtual Tour
                    </a>
                    <Link
                      href="/admissions/can-i-afford"
                      className="block py-2 hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Can I Afford a Christian Private School for My Child?
                    </Link>
                    <Link
                      href="/admissions/free-resources"
                      className="block py-2 hover:text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Free Resources
                    </Link>
                  </div>
                )}
              </div>

              {/* Campus Life */}
              <Link
                href="/campus-life"
                className="block py-2.5 text-white hover:text-purple-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Campus Life
              </Link>

              {/* News & Media */}
              <Link
                href="/news-media"
                className="block py-2.5 text-white hover:text-purple-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                News & Media
              </Link>

              {/* Contact Us */}
              <Link
                href="/contact-us"
                className="block py-2.5 text-white hover:text-purple-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>

              {/* Support CCS */}
              <Link
                href="/support-ccs"
                className="block py-2.5 text-white hover:text-purple-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Support CCS
              </Link>
            </div>

            {/* Mobile Contact Quick Links & Social */}
            <div className="pt-6 border-t border-slate-600/50 space-y-3 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-purple-300" />
                <a href="tel:9798300991" className="hover:text-white">
                  (979) 830-0991
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-purple-300" />
                <span>2111 S Blue Bell Rd, Brenham, TX</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-3.5 h-3.5 text-purple-300" />
                <span>8:00am - 4:00pm Mon-Fri</span>
              </div>
              <div className="flex items-center gap-4 pt-3 border-t border-slate-600/30">
                <a
                  href="https://www.instagram.com/citadelchristianschool/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-white p-1"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/WisdomandVirtue"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:text-white p-1"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}
