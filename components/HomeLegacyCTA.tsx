import React from "react";
import Link from "next/link";
import { Phone, Map, MapPin } from "lucide-react";

export default function HomeLegacyCTA() {
  return (
    <section className="w-full bg-white flex flex-col">
      {/* Top Heading */}
      <div className="py-12 sm:py-14 text-center px-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#581076] tracking-tight">
          Building a Legacy of Truth
        </h2>
      </div>

      {/* 3-Column Color Block Strip */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3">
        {/* Block 1: Purple - CALL TODAY */}
        <a
          href="tel:9798300991"
          className="bg-[#581076] hover:bg-[#480a62] text-white py-14 sm:py-16 md:py-20 px-6 flex flex-col items-center justify-center text-center transition-colors duration-200 group cursor-pointer"
        >
          <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 text-purple-200 group-hover:scale-110 transition-transform">
            <Phone className="w-8 h-8 fill-current" />
          </div>
          <span className="font-extrabold text-sm sm:text-[15px] uppercase tracking-wider mb-1">
            CALL TODAY
          </span>
          <span className="text-white/95 text-sm sm:text-[15px] font-normal">
            979.830.0991
          </span>
        </a>

        {/* Block 2: Slate Grey - REQUEST FREE TOUR */}
        <Link
          href="/admissions/schedule-a-tour"
          className="bg-[#465664] hover:bg-[#3b4956] text-white py-14 sm:py-16 md:py-20 px-6 flex flex-col items-center justify-center text-center transition-colors duration-200 group cursor-pointer"
        >
          <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 text-slate-300 group-hover:scale-110 transition-transform">
            <Map className="w-8 h-8 stroke-[1.75]" />
          </div>
          <span className="font-extrabold text-sm sm:text-[15px] uppercase tracking-wider mb-1">
            REQUEST FREE TOUR
          </span>
          <span className="text-white/95 text-sm sm:text-[15px] font-normal">
            info@citadelchristian.org
          </span>
        </Link>

        {/* Block 3: Warm Taupe - VISIT US */}
        <a
          href="https://maps.google.com/?q=2111+S+Blue+Bell+Rd,+Brenham,+TX+77833"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#9c9487] hover:bg-[#8e8679] text-white py-14 sm:py-16 md:py-20 px-6 flex flex-col items-center justify-center text-center transition-colors duration-200 group cursor-pointer"
        >
          <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 text-stone-200 group-hover:scale-110 transition-transform">
            <MapPin className="w-8 h-8 fill-current" />
          </div>
          <span className="font-extrabold text-sm sm:text-[15px] uppercase tracking-wider mb-1">
            VISIT US
          </span>
          <div className="text-white/95 text-sm sm:text-[15px] font-normal leading-snug">
            <span>2111 S Blue Bell Rd</span>
            <br />
            <span>Brenham, TX, 77833</span>
          </div>
        </a>
      </div>
    </section>
  );
}
