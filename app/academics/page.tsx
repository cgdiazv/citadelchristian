import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, GraduationCap, Sparkles, ArrowRight, FileText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academics | Citadel Christian School",
  description:
    "Citadel Christian School provides classical Christian education in harmony with natural developmental stages, offering both a 5-day traditional model and a 3-day University-Model®.",
};

export default function AcademicsPage() {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Page Header Banner */}
      <section className="relative w-full h-72 sm:h-80 md:h-96 bg-slate-900 overflow-hidden flex items-center justify-center">
        <Image
          src="/campus-life/campus09.webp"
          alt="Academics at Citadel Christian School"
          fill
          priority
          className="object-cover object-center opacity-30"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <span className="text-xs uppercase tracking-widest font-semibold text-purple-300 bg-purple-900/60 px-3.5 py-1 rounded-full border border-purple-400/30">
            Rigorous & Christ-Centered
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-3 uppercase">
            Academics
          </h1>
          <p className="text-lg sm:text-xl text-slate-200 mt-2 max-w-2xl mx-auto font-light">
            Cultivating wisdom, virtue, and intellectual mastery through the Trivium.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-14 space-y-12">
        {/* Intro Section */}
        <section className="space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed">
          <p>
            As we observe the world around us, <strong className="text-slate-900 font-semibold">we recognize God’s design</strong> throughout His creation, including human nature. This observation indicates a fairly regular progression in the development of educational tendencies and readiness for learning at various stages of life. With this in mind, Citadel Christian School provides education that is in harmony with these developmental stages. Additionally, CCS teaches all subjects based on the authority of the Bible, recognizing that God is the Creator of all things and provides the standards for knowing and living the truth.
          </p>
          <p className="font-medium text-slate-900">
            Citadel offers two classical, Christian educational options: a 5-day traditional model, and a 3-day University-Model®.
          </p>
        </section>

        {/* Divider */}
        <hr className="border-slate-200" />

        {/* Three Stages of Learning: Grammar, Logic, Rhetoric */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 pt-2">
          {/* Grammar */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#581076]/10 flex items-center justify-center text-[#581076]">
                <BookOpen className="w-4 h-4" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                Grammar
              </h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-[14.5px] leading-relaxed">
              Memorization comes easily to children in this stage of development; therefore, much of their accumulation of new and interesting facts comes through chants, drills, songs, and simple research. Our focus is on mastery of skills and knowledge, rather than on completing all pages of a workbook or preparing for a test. Students who have mastered an understanding of the grammar of a subject will have a solid foundation for lifelong learning.
            </p>
          </div>

          {/* Logic */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#581076]/10 flex items-center justify-center text-[#581076]">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                Logic
              </h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-[14.5px] leading-relaxed">
              While students at this age are still excited about learning, they need more significant challenges. They want to know <em>why</em>, not just what. We teach them more extensive research skills to deepen their understanding of the facts they’ve learned. Students are introduced to formal logic and are given the tools to debate an issue and to understand what is true, and what is false. Teachers include drama and role-playing to effectively engage the students in meaningful application of the material.
            </p>
          </div>

          {/* Rhetoric */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#581076]/10 flex items-center justify-center text-[#581076]">
                <Sparkles className="w-4 h-4" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                Rhetoric
              </h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-[14.5px] leading-relaxed">
              As we equip students for life, the teaching methods at this stage focus on the development of the rhetorical skills of writing and speaking effectively and with originality. Students are guided into research in major areas with an emphasis on synthesis and evaluation. Speeches, debates, Socratic dialogue, and in-depth investigations are some of the strategies used with the student of rhetoric. The classical method prepares young people to be successful in any field they choose.
            </p>
          </div>
        </section>

        {/* Quick Links Banner */}
        <section className="bg-slate-50 rounded-2xl p-8 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Ready to learn more about our academic curriculum?
            </h3>
            <p className="text-slate-600 text-sm mt-1">
              Explore our classical distinctives or schedule an on-campus tour.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="/about/classical"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#581076] hover:bg-[#470a60] text-white font-medium text-sm transition shadow-sm"
            >
              Classical Distinctive
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/admissions/schedule-a-tour"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium text-sm transition shadow-sm"
            >
              Schedule a Tour
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
