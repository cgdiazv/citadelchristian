"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

export default function HomeOverview() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
          {/* Column 1: Left Intro Text */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight">
                Citadel Christian School
              </h2>
              <p className="text-xl sm:text-2xl font-bold italic text-slate-700 mt-1">
                ...Building a Legacy of Truth
              </p>
            </div>
            <p className="text-slate-600 leading-relaxed text-[14.5px] sm:text-[15px] pt-1">
              Citadel Christian School is a Classical Christian School in Brenham. Additionally, we are an independent, accredited, and private school. As our main focus, we incorporate Christian values into everything we do. For parents seeking a PreK-12th grade educational alternative for their children, we offer relevant, life-equipping instruction delivered by highly qualified, caring teachers.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-7 py-2 rounded-full border-2 border-[#581076] text-[#581076] font-semibold text-sm hover:bg-[#581076] hover:text-white transition-all duration-200"
              >
                Read More...
              </Link>
            </div>
          </div>

          {/* Column 2: Middle 3 Feature Cards */}
          <div className="lg:col-span-4 space-y-5">
            {/* Academics Card */}
            <Link
              href="/academics"
              className="flex items-center gap-4 group hover:opacity-95 transition"
            >
              <div className="relative w-28 h-20 flex-shrink-0 rounded overflow-hidden shadow-sm bg-slate-100">
                <Image
                  src="/images/pic01.png"
                  alt="Academics at Citadel Christian School"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-0.5">
                <h3 className="font-bold text-slate-800 text-[15.5px] group-hover:text-[#581076] transition-colors">
                  Academics
                </h3>
                <p className="text-slate-600 text-xs sm:text-[13px] leading-snug">
                  Our purpose is to provide a safe, happy environment.
                </p>
              </div>
            </Link>

            {/* Admissions Card */}
            <Link
              href="/admissions"
              className="flex items-center gap-4 group hover:opacity-95 transition"
            >
              <div className="relative w-28 h-20 flex-shrink-0 rounded overflow-hidden shadow-sm bg-slate-100">
                <Image
                  src="/images/pic02.png"
                  alt="Admissions at Citadel Christian School"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-0.5">
                <h3 className="font-bold text-slate-800 text-[15.5px] group-hover:text-[#581076] transition-colors">
                  Admissions
                </h3>
                <p className="text-slate-600 text-xs sm:text-[13px] leading-snug">
                  Simple steps to find a place for your child.
                </p>
              </div>
            </Link>

            {/* Campus Life Card */}
            <Link
              href="/campus-life"
              className="flex items-center gap-4 group hover:opacity-95 transition"
            >
              <div className="relative w-28 h-20 flex-shrink-0 rounded overflow-hidden shadow-sm bg-slate-100">
                <Image
                  src="/images/pic03.png"
                  alt="Campus Life at Citadel Christian School"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-0.5">
                <h3 className="font-bold text-slate-800 text-[15.5px] group-hover:text-[#581076] transition-colors">
                  Campus Life
                </h3>
                <p className="text-slate-600 text-xs sm:text-[13px] leading-snug">
                  Where they are able to be themselves.
                </p>
              </div>
            </Link>
          </div>

          {/* Column 3: Right Video Player Card */}
          <div className="lg:col-span-3 flex flex-col space-y-3">
            <a
              href="https://www.youtube.com/watch?v=frN4ov4T-pY"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full aspect-video rounded overflow-hidden shadow-md bg-slate-900 group cursor-pointer block"
              aria-label="Watch Citadel Christian School Web video on YouTube"
            >
              <Image
                src="https://img.youtube.com/vi/frN4ov4T-pY/hqdefault.jpg"
                alt="Citadel Christian School Web Video Preview"
                fill
                unoptimized
                className="object-cover brightness-90 group-hover:scale-105 transition-transform duration-300"
              />

              {/* YouTube Top Bar Overlay with Favicon */}
              <div className="absolute top-0 inset-x-0 p-3 bg-gradient-to-b from-black/85 via-black/40 to-transparent flex items-center justify-between text-white z-10">
                <div className="flex items-center gap-2.5 truncate">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0 bg-[#581076] p-0.5 ring-1 ring-white/30 shadow">
                    <Image
                      src="/favicon.png"
                      alt="Citadel Christian School Emblem"
                      fill
                      className="object-contain p-0.5"
                    />
                  </div>
                  <div className="flex flex-col text-left truncate">
                    <span className="text-xs sm:text-[13px] font-bold text-white truncate drop-shadow leading-tight">
                      Citadel Christian School Web
                    </span>
                    <span className="text-[10.5px] text-slate-300 truncate drop-shadow">
                      Citadel Christian School
                    </span>
                  </div>
                </div>
              </div>

              {/* YouTube Red Play Button */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-14 h-10 bg-red-600 group-hover:bg-red-700 rounded-xl flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110">
                  <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                </div>
              </div>

              {/* YouTube Bottom Right Pill Overlay */}
              <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-medium px-2 py-0.5 rounded flex items-center gap-1 z-10">
                <span>Watch on</span>
                <span className="font-bold text-red-500">YouTube</span>
              </div>
            </a>

            <a
              href="https://www.youtube.com/channel/UC0pBmmZTffKEkIsOS05IrBg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold tracking-wider text-slate-700 hover:text-[#581076] transition-colors uppercase pt-1"
            >
              WATCH MORE VIDEOS NOW
            </a>
          </div>
        </div>

        {/* Bottom Center Purple Accent Divider Bar */}
        <div className="mt-14 sm:mt-16 flex justify-center">
          <div className="w-16 sm:w-20 h-1 bg-[#581076] rounded-full" />
        </div>
      </div>
    </section>
  );
}
