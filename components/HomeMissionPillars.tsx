import React from "react";
import Link from "next/link";

function ClassicalBuildingIcon({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="currentColor"
      aria-hidden="true"
    >
      {/* Classical Schoolhouse with Tower and Clock */}
      <path d="M24 4L8 14v4h4v22h8V28h8v16h8V18h4v-4L24 4zm0 8a3 3 0 110 6 3 3 0 010-6z" />
      <circle cx="24" cy="14" r="2" fill="white" />
      <path d="M24 13v1.5h1" stroke="currentColor" strokeWidth="0.8" fill="none" />
    </svg>
  );
}

function BiblicalBibleIcon({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="currentColor"
      aria-hidden="true"
    >
      {/* Bible Book with Cross and Ribbon */}
      <path d="M12 6c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V10c0-2.2-1.8-4-4-4H12zm12 8c.6 0 1 .4 1 1v4h4c.6 0 1 .4 1 1s-.4 1-1 1h-4v10c0 .6-.4 1-1 1s-1-.4-1-1V21h-4c-.6 0-1-.4-1-1s.4-1 1-1h4v-4c0-.6.4-1 1-1z" />
      <path d="M10 38h28v2H10z" fill="white" fillOpacity="0.4" />
    </svg>
  );
}

function ExceptionalMedalIcon({ className = "w-14 h-14" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="currentColor"
      aria-hidden="true"
    >
      {/* Ribbon Tails Top */}
      <path d="M18 6l6 8 6-8h6l-9 12h-6L12 6h6z" />
      {/* Medal Circle with Star */}
      <circle cx="24" cy="28" r="14" />
      <polygon
        points="24,19 26.5,24.5 32.5,25.3 28,29.5 29.2,35.5 24,32.5 18.8,35.5 20,29.5 15.5,25.3 21.5,24.5"
        fill="white"
      />
    </svg>
  );
}

export default function HomeMissionPillars() {
  return (
    <section className="w-full bg-white flex flex-col">
      {/* Top Header Block */}
      <div className="max-w-4xl mx-auto px-6 pt-16 pb-12 text-center space-y-3">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#581076] tracking-tight">
          Classical Christian School in Brenham
        </h2>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Equipping students for life by providing an exceptional education with a biblical worldview in a supportive, loving atmosphere.
        </p>
      </div>

      {/* Purple Callout Banner */}
      <div className="w-full bg-[#581076] py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <p className="text-white text-lg sm:text-xl md:text-2xl font-bold leading-snug text-center lg:text-left max-w-3xl">
            Our goals are to maintain high academic standards, instill wisdom and virtue, and teach students how to think and learn with a biblical understanding.
          </p>
          <div className="flex-shrink-0">
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-white text-white font-bold text-xs tracking-wider uppercase hover:bg-white hover:text-[#581076] transition-all duration-200 shadow-sm"
            >
              MORE INFO
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom 3 Distinctive Pillars */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16 sm:py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Classical */}
          <Link
            href="/about/classical"
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="w-20 h-20 flex items-center justify-center text-[#581076] mb-4 transition-transform duration-300 group-hover:scale-110">
              <ClassicalBuildingIcon className="w-16 h-16" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-[#581076] transition-colors">
              Classical
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
              Cultivating wisdom and virtue in students at each developmental stage
            </p>
          </Link>

          {/* Biblical */}
          <Link
            href="/about/biblical"
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="w-20 h-20 flex items-center justify-center text-[#581076] mb-4 transition-transform duration-300 group-hover:scale-110">
              <BiblicalBibleIcon className="w-16 h-16" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-[#581076] transition-colors">
              Biblical
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
              Discovering God&apos;s design throughout every subject
            </p>
          </Link>

          {/* Exceptional */}
          <Link
            href="/about/exceptional"
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="w-20 h-20 flex items-center justify-center text-[#581076] mb-4 transition-transform duration-300 group-hover:scale-110">
              <ExceptionalMedalIcon className="w-16 h-16" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-[#581076] transition-colors">
              Exceptional
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
              Motivating students to achieve their highest potential
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
