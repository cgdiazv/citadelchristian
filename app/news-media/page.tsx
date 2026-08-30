import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

function YouTubeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "News & Media | Citadel Christian School",
  description:
    "Watch video stories, administrator interviews, and parent perspectives from Citadel Christian School in Brenham, TX.",
};

const videos = [
  {
    title: "Citadel Christian School Web",
    videoId: "frN4ov4T-pY",
    url: "https://www.youtube.com/watch?v=frN4ov4T-pY",
  },
  {
    title: "Why choose Citadel? - A new family\u2019s perspective",
    videoId: "JqZ0yzXY9mI",
    url: "https://www.youtube.com/watch?v=JqZ0yzXY9mI",
  },
  {
    title: "Why choose Citadel? - from the perspective of the Head Administrator at CCS, Sheila Suders",
    videoId: "Xuhk3HHqYJs",
    url: "https://www.youtube.com/watch?v=Xuhk3HHqYJs",
  },
  {
    title: "Why Choose CCS? - Perspective of a current member of the Board of Directors",
    videoId: "SLcVYkfN9Ag",
    url: "https://www.youtube.com/watch?v=SLcVYkfN9Ag",
  },
];

export default function NewsMediaPage() {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Page Header Banner */}
      <section className="relative w-full h-72 sm:h-80 md:h-96 bg-slate-900 overflow-hidden flex items-center justify-center">
        <Image
          src="/images/CCSLife-Spirit-Week-1280x720-1.jpg"
          alt="News & Media at Citadel Christian School"
          fill
          priority
          className="object-cover object-center opacity-35"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <span className="text-xs uppercase tracking-widest font-semibold text-purple-300 bg-purple-900/60 px-3.5 py-1 rounded-full border border-purple-400/30">
            Stories &amp; Perspectives
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-3 uppercase">
            News &amp; Media
          </h1>
          <p className="text-lg sm:text-xl text-slate-200 mt-2 max-w-2xl mx-auto font-light">
            Hear firsthand from our students, parents, leadership, and community.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-14 space-y-12">
        {/* Videos Section Heading */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#581076] tracking-tight">
            Videos
          </h2>
        </div>

        {/* Videos 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {videos.map((vid, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              {/* YouTube Embed Player */}
              <div className="relative w-full aspect-video bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${vid.videoId}`}
                  title={vid.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>

              {/* Video Title & External Link */}
              <div className="p-5 flex items-start justify-between gap-4">
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {vid.title}
                </h3>
                <a
                  href={vid.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Watch ${vid.title} on YouTube`}
                  className="text-slate-400 hover:text-red-600 transition flex-shrink-0 mt-0.5"
                >
                  <YouTubeIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* YouTube Channel Banner */}
        <div className="mt-16 bg-[#3d4f5d] text-white rounded-2xl p-8 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-2xl font-bold">Want to see more videos?</h3>
            <p className="text-slate-200 text-sm">
              Visit our official YouTube channel for school updates, chapel recordings, and special events.
            </p>
          </div>
          <a
            href="https://www.youtube.com/channel/UC0pBmmZTffKEkIsOS05IrBg"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-[#581076] hover:bg-[#470a60] text-white font-semibold text-sm transition shadow flex items-center gap-2 flex-shrink-0"
          >
            <YouTubeIcon className="w-4 h-4" />
            Visit YouTube Channel
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
