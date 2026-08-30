import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campus Life | Citadel Christian School",
  description:
    "Explore student life at Citadel Christian School. Download the 2026-2027 school calendar, athletic handbooks, summer reading lists, and essential campus forms.",
};

const leftForms = [
  {
    title: "Bullying Incident Reporting Form",
    file: "/files/bullying_reporting_form.docx",
  },
  {
    title: "Emergency Contact Form",
    file: "/files/emergency_physician_and_hospital_treatment_authorization.docm",
  },
  {
    title: "Medication \u2013 Consent for Over-the-counter Medication",
    file: "/files/consent_for_otc_medication_for_student_administration_ccs.pdf",
  },
  {
    title: "Medication \u2013 Request for Prescription Medication",
    file: "/files/request_for_prescription_medication_administration_ccs.pdf",
  },
];

const rightForms = [
  {
    title: "Parent Association Information",
    file: "/files/Parent-Association-2026-27.pdf",
  },
  {
    title: "Parent/Student Handbook",
    file: "/files/Parent-Student-Handbook-2026-27.pdf",
  },
  {
    title: "Prearranged Absence Form \u2013 Elementary",
    file: "/files/ccs_prearranged_absence_for_elementary.pdf",
  },
  {
    title: "Prearranged Absence Form \u2013 Secondary",
    file: "/files/ccs_prearranged_absence_for_secondary.pdf",
  },
  {
    title: "Prearranged Attendance on Satellite Day for UMS student",
    file: "/files/CCS-Prearranged-On-Campus-for-UMS-on-Satellite-Day.pdf",
  },
  {
    title: "Student Dress Code",
    file: "/files/Dress-Code-26-27.pdf",
  },
  {
    title: "Volunteer Driver Application",
    file: "/files/VolunteerDriverFormCCS.pdf",
  },
];

const athleticsLeft = [
  {
    title: "Citadel Athletics Handbook",
    file: "/files/Athletic-Handbook-25-26.pdf",
  },
  {
    title: "Athletics Philosophy at Citadel",
    file: "/files/Athletics-Philosophy-2025.pdf",
  },
];

const athleticsRight = [
  {
    title: "Athlete Information Form",
    file: "/files/CCS-Athlete-Information-Form.pdf",
  },
  {
    title: "Physical Examination Form",
    file: "/files/CCS-Physical-Examination-Form.pdf",
  },
];

const summerReadingLeft = [
  {
    title: "Summer reading \u2013 Rising 1st grade",
    file: "/files/Rising-1st-Grade-Summer-Plan.pdf",
  },
  {
    title: "Summer reading \u2013 Rising 2nd grade",
    file: "/files/Rising-2nd-Grade-Summer-Reading.pdf",
  },
  {
    title: "Summer reading \u2013 Rising 3rd grade",
    file: "/files/Rising-3rd-Grade-Summer-Reading.pdf",
  },
  {
    title: "Summer reading \u2013 Rising 4th grade",
    file: "/files/Rising-4th-Grade-Summer-Reading.pdf",
  },
  {
    title: "Summer reading \u2013 Rising 5th or 6th grade",
    file: "/files/Rising-5th-and-6th-Grade-Summer-Reading-Even-Year.pdf",
  },
];

const summerReadingRight = [
  {
    title: "Summer reading \u2013 Rising 7th or 8th grade",
    file: "/files/Rising-7th-and-8th-Grade-Summer-Reading-Even-Year.pdf",
  },
  {
    title: "Summer reading \u2013 Rising 9th grade",
    file: "/files/Rising-9th-Summer-Reading-Suggestions-and-Required.pdf",
  },
  {
    title: "Summer reading \u2013 Rising 10th grade",
    file: "/files/Rising-10th-Grade-Summer-Reading.pdf",
  },
  {
    title: "Summer reading \u2013 Rising 11th grade",
    file: "/files/Rising-11th-Grade-Summer-Reading.pdf",
  },
  {
    title: "Summer reading \u2013 Rising 12th grade",
    file: "/files/Rising-12th-Grade-Summer-Reading.pdf",
  },
];

export default function CampusLifePage() {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Page Header Banner */}
      <section className="relative w-full h-72 sm:h-80 md:h-96 bg-slate-900 overflow-hidden flex items-center justify-center">
        <Image
          src="/images/CCSLife-Intro-1280x720-A.jpg"
          alt="Campus Life at Citadel Christian School"
          fill
          priority
          className="object-cover object-center opacity-35"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <span className="text-xs uppercase tracking-widest font-semibold text-purple-300 bg-purple-900/60 px-3.5 py-1 rounded-full border border-purple-400/30">
            Student Experience
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-3 uppercase">
            Campus Life
          </h1>
          <p className="text-lg sm:text-xl text-slate-200 mt-2 max-w-2xl mx-auto font-light">
            Where students are known, loved, and prepared for useful service.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-14 space-y-16">
        {/* Intro Paragraphs */}
        <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
          <p>
            Life is an adventure, and at Citadel Christian School students are prepared to run the race with wisdom, compassion, grace, and, most importantly, a worldview that produces Christ-like citizens, ready for useful service.
          </p>
          <p>
            Students enjoy rich academics, joyful fine arts performances, opportunities to serve their community, and much more. Wherever our students are found—in or out of the classroom—they are being equipped to exercise a proper role in the family, in the body of Christ, and as a citizen. Student life at Citadel Christian School integrates all aspects of spiritual, academic, and social life.
          </p>
        </div>

        {/* School Calendar Card */}
        <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md">
          <div className="relative h-64 sm:h-80 md:h-96 w-full">
            <Image
              src="/images/calendar.jpg"
              alt="Citadel Christian School Calendar"
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="p-8 sm:p-10 text-center space-y-4 bg-white">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              School Calendar
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Check out our school calendar for the 2026-2027 school year
            </p>
            <div className="pt-2">
              <a
                href="/files/2026-2027-School-Calendar.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded bg-[#581076] hover:bg-[#470a60] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider transition shadow-md hover:shadow-lg"
              >
                <Download className="w-4 h-4" />
                DOWNLOAD NOW
              </a>
            </div>
          </div>
        </div>

        {/* Forms & Helpful Information */}
        <div className="pt-4 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Forms &amp; Helpful Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-slate-800 text-sm sm:text-base font-bold">
            {/* Left Column Forms */}
            <ul className="list-disc pl-6 space-y-3">
              {leftForms.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-slate-900 hover:text-[#581076] transition"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right Column Forms */}
            <ul className="list-disc pl-6 space-y-3">
              {rightForms.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-slate-900 hover:text-[#581076] transition"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Citadel Athletics */}
        <div className="pt-6 space-y-6 border-t border-slate-100">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center tracking-tight">
            Citadel Athletics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-slate-800 text-sm sm:text-base font-bold max-w-3xl mx-auto">
            {/* Left Column Athletics */}
            <ul className="list-disc pl-6 space-y-3">
              {athleticsLeft.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-slate-900 hover:text-[#581076] transition"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right Column Athletics */}
            <ul className="list-disc pl-6 space-y-3">
              {athleticsRight.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-slate-900 hover:text-[#581076] transition"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Summer Reading Lists */}
        <div className="pt-6 space-y-6 border-t border-slate-100">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center tracking-tight">
            Summer Reading Lists
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-[#581076] text-sm sm:text-base font-medium max-w-4xl mx-auto">
            {/* Left Column Summer Reading */}
            <ul className="list-disc pl-6 space-y-3 text-purple-900">
              {summerReadingLeft.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#581076] hover:underline font-semibold transition"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right Column Summer Reading */}
            <ul className="list-disc pl-6 space-y-3 text-purple-900">
              {summerReadingRight.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#581076] hover:underline font-semibold transition"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
