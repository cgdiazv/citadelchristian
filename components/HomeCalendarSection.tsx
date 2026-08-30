import React from "react";
import Image from "next/image";

export default function HomeCalendarSection() {
  return (
    <section className="w-full bg-white flex flex-col">
      {/* Calendar Header Image Banner */}
      <div className="relative w-full h-48 sm:h-60 md:h-72 lg:h-80 overflow-hidden">
        <Image
          src="/images/calendar.jpg"
          alt="Citadel Christian School 2026-2027 Academic Calendar"
          fill
          priority
          className="object-cover object-[center_55%]"
        />
      </div>

      {/* Content Area */}
      <div className="w-full bg-[#f4f6f8] border-b border-slate-200 pt-8 pb-14 sm:pb-16 px-6 text-center flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight">
          School Calendar
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
          Check out our school calendar for the 2026-2027 school year
        </p>
        <div className="mt-6">
          <a
            href="/files/2026-2027-School-Calendar.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-9 py-3 rounded-full bg-[#581076] hover:bg-[#470a60] text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow transition-all duration-200"
          >
            DOWNLOAD NOW
          </a>
        </div>
      </div>
    </section>
  );
}
