"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Check, Loader2 } from "lucide-react";

function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
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

function YoutubeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export default function Footer() {
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (pathname === "/access") {
    return null;
  }

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || "Failed to subscribe. Please try again.");
      }

      setSubscribed(true);
      setEmail("");
    } catch (err: any) {
      console.error("Error subscribing to newsletter:", err);
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="w-full bg-[#333333] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Column 1: CCS */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white tracking-wide">CCS</h3>
            <p className="text-slate-300 text-sm leading-relaxed font-light">
              Equipping students for life by providing an exceptional education with a biblical worldview in a supportive, loving atmosphere.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white tracking-wide">Quick Links</h3>
            <ul className="space-y-2.5 text-sm text-slate-300 font-light">
              <li>
                <Link
                  href="/about/employment"
                  className="hover:text-white transition-colors"
                >
                  Employment Opportunities
                </Link>
              </li>
              <li>
                <a
                  href="/files/Fee-and-Tuition-Schedule-2026-2027.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  School Fees
                </a>
              </li>
              <li>
                <Link
                  href="/support-ccs"
                  className="hover:text-white transition-colors"
                >
                  Support CCS
                </Link>
              </li>
              <li>
                <a
                  href="/files/2026-2027-Upper-School-Supply-Lists.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Secondary School Supply List
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Support Us (Amazon Wishlist) */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white tracking-wide">Support Us</h3>
            <p className="text-slate-300 text-sm leading-relaxed font-light">
              Shop our Amazon wish list for items needed throughout the school year.{" "}
              <a
                href="https://www.amazon.com/hz/wishlist/ls/1LCV55FKTGGHF?ref_=wl_share"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white hover:text-purple-300 underline"
              >
                Shop Now!
              </a>
            </p>
            <div className="pt-2">
              <a
                href="https://www.amazon.com/hz/wishlist/ls/1LCV55FKTGGHF?ref_=wl_share"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block relative w-28 h-9 brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
              >
                <Image
                  src="/logos/amazon-png-logo.png"
                  alt="Amazon Wish List"
                  fill
                  className="object-contain object-left"
                />
              </a>
            </div>
          </div>

          {/* Column 4: Contact Us */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white tracking-wide">Contact Us</h3>
            <div className="space-y-2 text-sm text-slate-300 font-light">
              <p className="leading-snug">
                2111 S Blue Bell Rd<br />Brenham, TX 77833
              </p>
              <p className="pt-1">
                <a
                  href="tel:9798300991"
                  className="hover:text-white transition-colors"
                >
                  979.830.0991
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@citadelchristian.org"
                  className="hover:text-white transition-colors"
                >
                  info@citadelchristian.org
                </a>
              </p>
            </div>
          </div>

          {/* Column 5: Newsletter & Follow */}
          <div className="space-y-5">
            <div>
              <h3 className="text-xl font-bold text-white tracking-wide mb-3">
                Newsletter
              </h3>
              {subscribed ? (
                <div className="bg-[#581076]/40 border border-purple-400/40 rounded-full px-4 py-2 text-xs text-purple-200 flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-300" />
                  <span>Thank you for subscribing!</span>
                </div>
              ) : (
                <div className="space-y-1.5">
                  <form onSubmit={handleSubscribe} className="flex items-center">
                    <input
                      type="email"
                      required
                      disabled={isSubmitting}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      className="w-full bg-white text-slate-900 placeholder:text-slate-400 text-xs px-4 py-2.5 rounded-l-full focus:outline-none disabled:opacity-70"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      aria-label="Subscribe to newsletter"
                      className="bg-[#581076] hover:bg-[#470a60] text-white px-4 py-2.5 rounded-r-full transition flex items-center justify-center flex-shrink-0 cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Mail className="w-4 h-4" />
                      )}
                    </button>
                  </form>
                  {errorMessage && (
                    <p className="text-[11px] text-red-400 px-2 leading-tight">
                      {errorMessage}
                    </p>
                  )}
                </div>
              )}
            </div>

            <div>
              <h3 className="text-xl font-bold text-white tracking-wide mb-3">
                Follow
              </h3>
              <div className="flex items-center gap-3.5 text-white">
                <a
                  href="https://www.facebook.com/WisdomandVirtue"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Citadel Facebook"
                  className="p-1 rounded hover:text-purple-300 transition-colors"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/citadelchristianschool/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Citadel Instagram"
                  className="p-1 rounded hover:text-purple-300 transition-colors"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UC0pBmmZTffKEkIsOS05IrBg"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Citadel YouTube"
                  className="p-1 rounded hover:text-purple-300 transition-colors"
                >
                  <YoutubeIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/citadel-christian-school/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Citadel LinkedIn"
                  className="p-1 rounded hover:text-purple-300 transition-colors"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Footer Copyright & Powered By */}
      <div className="border-t border-slate-600/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-light gap-2">
          <div className="flex items-center gap-2.5">
            <span>© 2019-2026 Citadel Christian School</span>
            <span className="text-slate-600">•</span>
            <Link
              href="/access"
              className="text-slate-500 hover:text-slate-300 transition-colors text-[11px]"
            >
              Staff Access
            </Link>
          </div>
          <div>
            Powered by{" "}
            <a
              href="https://indevasa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors underline-offset-2 hover:underline"
            >
              Indeva Websites
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
