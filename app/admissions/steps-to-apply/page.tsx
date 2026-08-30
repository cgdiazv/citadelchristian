import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, FileText, ArrowRight, Calendar, UserCheck, Sparkles, Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Steps to Apply | Admissions | Citadel Christian School",
  description:
    "Learn the simple 4-step admissions process for joining the Citadel Christian School family in Brenham, TX.",
};

const steps = [
  {
    number: "01",
    title: "Inquire & Schedule a Tour",
    description:
      "We encourage all prospective families to visit our campus in Brenham, TX, observe our vibrant classrooms, meet our teachers, and experience our classical Christian culture firsthand.",
    ctaText: "Schedule a Tour",
    ctaLink: "/admissions/schedule-a-tour",
    icon: Calendar,
  },
  {
    number: "02",
    title: "Submit an Application",
    description:
      "Complete the student application and submit necessary records including past report cards, standardized test scores, birth certificate, and immunization records.",
    ctaText: "View Admissions PDF",
    ctaLink: "/files/admissions_process.pdf",
    isExternal: true,
    icon: FileText,
  },
  {
    number: "03",
    title: "Student Assessment & Family Interview",
    description:
      "Students participate in an age-appropriate readiness assessment. Both parents meet with our administration to discuss educational goals and ensure mutual alignment in Christ-centered discipleship.",
    ctaText: "Tuition & Fees Schedule",
    ctaLink: "/files/Fee-and-Tuition-Schedule-2026-2027.pdf",
    isExternal: true,
    icon: UserCheck,
  },
  {
    number: "04",
    title: "Enrollment & Welcome to Citadel",
    description:
      "Upon acceptance, families finalize enrollment, select tuition payment plans, receive supply lists and summer reading materials, and prepare for a joyful school year!",
    ctaText: "Free Resources",
    ctaLink: "/admissions/free-resources",
    icon: Sparkles,
  },
];

export default function StepsToApplyPage() {
  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Hero Banner */}
      <section className="relative w-full h-72 sm:h-80 md:h-96 bg-slate-900 overflow-hidden flex items-center justify-center">
        <Image
          src="/headers/header-biblical.webp"
          alt="Admissions Steps to Apply"
          fill
          priority
          className="object-cover object-center opacity-40"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <span className="text-xs uppercase tracking-widest font-semibold text-purple-300 bg-purple-900/60 px-3.5 py-1 rounded-full border border-purple-400/30">
            Admissions
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-3">
            Steps to Apply
          </h1>
          <p className="text-lg sm:text-xl text-slate-200 mt-2 max-w-2xl mx-auto font-light">
            Your step-by-step roadmap to joining Citadel Christian School.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-14">
        {/* Intro */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm mb-14">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Welcome to the <span className="text-[#581076]">Citadel Admissions Process</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              We are honored that you are considering Citadel Christian School for your family. Our admissions process is designed to help parents and school leadership discern if Citadel&apos;s classical, University-Model® approach is the right fit for your child&apos;s spiritual and academic growth.
            </p>
          </div>
        </div>

        {/* Steps Timeline / Cards */}
        <div className="space-y-8 mb-16">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm hover:shadow-md transition grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-2 flex flex-col items-start lg:items-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#581076]/10 text-[#581076] font-extrabold text-2xl flex items-center justify-center mb-2">
                    {step.number}
                  </div>
                  <Icon className="w-6 h-6 text-slate-400 hidden lg:block" />
                </div>

                <div className="lg:col-span-7 space-y-2">
                  <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>

                <div className="lg:col-span-3 flex justify-start lg:justify-end">
                  {step.isExternal ? (
                    <a
                      href={step.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium text-sm transition"
                    >
                      <FileText className="w-4 h-4 text-[#581076]" />
                      {step.ctaText}
                    </a>
                  ) : (
                    <Link
                      href={step.ctaLink}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#581076] hover:bg-[#470a60] text-white font-medium text-sm transition shadow-sm"
                    >
                      {step.ctaText}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="bg-[#3d4f5d] text-white rounded-2xl p-8 sm:p-12 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Have Questions About Applying?</h3>
            <p className="text-slate-300 text-sm mt-1">
              Our admissions team is available to assist you with every step of the process.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:Info@citadelchristian.org?subject=Admissions%20Inquiry"
              className="px-6 py-3 rounded-lg bg-[#581076] hover:bg-[#470a60] text-white font-semibold text-sm transition shadow flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Email Admissions
            </a>
            <Link
              href="/admissions/schedule-a-tour"
              className="px-6 py-3 rounded-lg bg-white text-slate-900 font-semibold text-sm hover:bg-slate-100 transition shadow"
            >
              Book a Tour
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
