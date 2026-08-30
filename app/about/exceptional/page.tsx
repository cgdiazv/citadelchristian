import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exceptional Education | Citadel Christian School",
  description:
    "CCS is accredited through ACSI and is a member of ACCS. Providing the tools our students need to master their studies and retain knowledge.",
};

export default function ExceptionalPage() {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Page Header Banner */}
      <section className="relative w-full h-72 sm:h-80 md:h-96 bg-slate-900 overflow-hidden flex items-center justify-center">
        <Image
          src="/headers/header-exceptional.webp"
          alt="Exceptional Education at Citadel Christian School"
          fill
          priority
          className="object-cover object-center opacity-40"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <span className="text-xs uppercase tracking-widest font-semibold text-purple-300 bg-purple-900/60 px-3.5 py-1 rounded-full border border-purple-400/30">
            About Us • Distinctives
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-3 uppercase">
            Exceptional
          </h1>
          <p className="text-lg sm:text-xl text-slate-200 mt-2 max-w-2xl mx-auto font-light">
            Motivating students to achieve their highest potential.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-14">
        {/* Intro Grid: Accreditation & Academic Excellence */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#581076] leading-tight tracking-tight">
              CCS is accredited through ACSI and is a member of ACCS
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Citadel Christian School holds accreditation and membership with Association of Christian Schools International and membership with Association of Classical Christian Schools. We have an effective curriculum and a remarkable staff, providing the tools our students need to master their studies and retain knowledge, rather than simply answer questions on a test. In this environment, student achievement soars.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Achieving accreditation is a thorough process by which a private school is audited and must adhere to certain requirements on governance best practices, financial transparency, curriculum quality, student safety, and staffing. Additionally, all accredited schools in Texas must annually administer a national norm-referenced test approved by the school’s accrediting agency.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/university-model"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#581076] hover:bg-[#470a60] text-white font-medium text-sm transition shadow-sm"
              >
                Learn About University-Model®
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="/files/What-the-University-Model-Offers-_-CCS-Article.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium text-sm transition shadow-sm"
              >
                <FileText className="w-4 h-4 text-[#581076]" />
                University-Model PDF
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <Image
              src="/images/About-Distinctives-Exceptional-1280-720.jpg"
              alt="Exceptional students at Citadel Christian School"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Section 2: Accreditation & Membership Logos (ACSI & ACCS) */}
        <section className="my-16 py-10 border-y border-slate-100 bg-slate-50/60 rounded-2xl">
          <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16 md:gap-20">
            {/* ACSI Logo */}
            <div className="relative w-52 sm:w-60 h-24 sm:h-28 bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex items-center justify-center transition-transform hover:scale-105">
              <Image
                src="/logos/acsi.jpg"
                alt="Association of Christian Schools International (ACSI) Accredited"
                fill
                className="object-contain p-2"
              />
            </div>

            {/* ACCS Logo */}
            <div className="relative w-52 sm:w-60 h-24 sm:h-28 bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex items-center justify-center transition-transform hover:scale-105">
              <Image
                src="/logos/accs.png"
                alt="Association of Classical Christian Schools (ACCS) Member"
                fill
                className="object-contain p-2"
              />
            </div>
          </div>
        </section>

        {/* Section 3: Committed to Producing Students Who */}
        <section className="my-16 space-y-10">
          <div className="text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#581076] tracking-tight">
              We are committed to producing students who:
            </h2>
          </div>

          <div className="space-y-10 text-slate-700 text-sm sm:text-[15px] leading-relaxed">
            {/* Spiritual and Moral */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Spiritual and Moral
              </h3>
              <ol className="list-decimal pl-6 space-y-2.5 text-slate-600">
                <li>Confess Jesus Christ as Savior and Lord and have a growing, personal relationship with Him.</li>
                <li>Live according to the authority of God’s Word.</li>
                <li>Demonstrate a life of virtue by their understanding and application of God’s Word in their daily lives.</li>
                <li>Actively pursue a life of faith empowered by the Holy Spirit that demonstrates love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control.</li>
                <li>Practice the disciplines of Bible study, prayer, Scripture memorization, worship, and service.</li>
                <li>Possess apologetic skills to defend their faith.</li>
                <li>Understand that all thoughts and choices have consequences; some positive, some negative.</li>
              </ol>
            </div>

            {/* Social and Personal */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Social and Personal
              </h3>
              <ol className="list-decimal pl-6 space-y-2.5 text-slate-600">
                <li>Demonstrate leadership with honesty and integrity.</li>
                <li>Understand the worth of every human being as created in the image of God, and treat all people with compassion, respect, dignity, grace, and truth.</li>
                <li>Develop biblical attitudes toward marriage and the family, as well as the understanding and skills needed to establish God-fearing homes.</li>
                <li>Practice responsible stewardship of God’s creation.</li>
                <li>Be good stewards of their finances, time, and all other resources.</li>
                <li>Practice good health habits and physical fitness, treating their bodies as the temple of the Holy Spirit.</li>
                <li>Demonstrate a realistic and biblical view of work and material things as means to accomplish God’s glory.</li>
              </ol>
            </div>

            {/* Academic and Intellectual */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Academic and Intellectual
              </h3>
              <ol className="list-decimal pl-6 space-y-2.5 text-slate-600">
                <li>Demonstrate mastery in all academic disciplines, including reading, writing, speaking, listening, and critical thinking.</li>
                <li>Be proficient in mathematics, science, and problem-solving.</li>
                <li>Have knowledge and understanding of people, events, and movements in history (including church history) and the cultures of other peoples and places.</li>
                <li>Appreciate literature and the arts and understand how they express and shape their belief and values.</li>
                <li>Have a critical appreciation of languages and cultures of other peoples, dispelling prejudice, promoting inter-ethnic harmony, and encouraging biblical hospitality.</li>
                <li>Develop the unique talents and gifts given to them by God.</li>
                <li>Demonstrate an attitude of intellectual inquiry that fosters a love of lifelong learning.</li>
              </ol>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
