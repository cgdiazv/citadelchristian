"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function HomeCalendarSection() {
  const [calendarData, setCalendarData] = useState({
    title: "School Calendar",
    subtitle: "Check out our school calendar for the 2026-2027 school year",
    image: "/images/calendar.jpg",
    button: "DOWNLOAD NOW",
    fileUrl: "/files/2026-2027-School-Calendar.pdf",
  });

  useEffect(() => {
    const saved = localStorage.getItem("ccs_page_content_/");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const calSection = parsed.sections?.find((s: { id: string }) => s.id === "calendar");
        if (calSection && calSection.fields) {
          const f = (id: string, def: string) =>
            calSection.fields.find((field: { id: string; value: string }) => field.id === id)?.value || def;

          setCalendarData({
            title: f("cal_title", "School Calendar"),
            subtitle: f("cal_subtitle", "Check out our school calendar for the 2026-2027 school year"),
            image: f("cal_image", "/images/calendar.jpg"),
            button: f("cal_button", "DOWNLOAD NOW"),
            fileUrl: f("cal_file", "/files/2026-2027-School-Calendar.pdf"),
          });
        }
      } catch {
        // use default state
      }
    }
  }, []);

  return (
    <section className="w-full bg-white flex flex-col">
      {/* Calendar Header Image Banner */}
      <div className="relative w-full h-48 sm:h-60 md:h-72 lg:h-80 overflow-hidden">
        <Image
          src={calendarData.image || "/images/calendar.jpg"}
          alt="Citadel Christian School Academic Calendar"
          fill
          priority
          className="object-cover object-[center_55%]"
        />
      </div>

      {/* Content Area */}
      <div className="w-full bg-[#f4f6f8] border-b border-slate-200 pt-8 pb-14 sm:pb-16 px-6 text-center flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight">
          {calendarData.title}
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
          {calendarData.subtitle}
        </p>
        <div className="mt-6">
          <a
            href={calendarData.fileUrl || "/files/2026-2027-School-Calendar.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-9 py-3 rounded-full bg-[#581076] hover:bg-[#470a60] text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:shadow transition-all duration-200"
          >
            {calendarData.button}
          </a>
        </div>
      </div>
    </section>
  );
}

