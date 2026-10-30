import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FileText, ArrowRight, Calendar, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classical Education | Citadel Christian School",
  description:
    "Cultivating wisdom and virtue in students at each developing stage through the time-tested classical Trivium.",
};

interface MonthlyArticle {
  monthAbbr: string;
  monthLabel: string;
  year: string;
  title: string;
  excerpt: string;
  href: string;
  isLatest?: boolean;
}

const monthlyArticles: MonthlyArticle[] = [
  {
    monthAbbr: "OCT",
    monthLabel: "October 2026",
    year: "2026",
    title: "Why Good Habits Matter in Christian Education",
    excerpt:
      "Cultivating daily habits of diligence, honesty, humility, and self-control alongside parents to prepare students for a lifetime of faithfulness.",
    href: "/files/Why-Good-Habits-Matter-in-Christian-Education.pdf",
    isLatest: true,
  },
  {
    monthAbbr: "SEP",
    monthLabel: "September 2026",
    year: "2026",
    title: "What the Trivium Actually Is",
    excerpt:
      "How the three classical arts of grammar, logic, and rhetoric give students a lifelong pattern for knowing what is true, thinking clearly, and communicating well.",
    href: "/files/What-the-Trivium-Actually-Is.pdf",
  },
  {
    monthAbbr: "AUG",
    monthLabel: "August 2026",
    year: "2026",
    title: "Why We Study Latin",
    excerpt:
      "Why Latin is far more than an academic ornament—training the mind in order and precision, strengthening English mastery, and connecting students to their Christian heritage.",
    href: "/files/CCS-Blog-_-Why-We-Study-Latin.pdf",
  },
  {
    monthAbbr: "JUL",
    monthLabel: "July 2026",
    year: "2026",
    title: "Why Classical Education Matters More in the Age of AI",
    excerpt:
      "Why shortcuts cannot replace moral and intellectual formation, and how timeless habits of wisdom equip students to command modern tools responsibly.",
    href: "/files/Why-Classical-Education-Matters-More-in-the-Age-of-AI.pdf",
  },
  {
    monthAbbr: "JUN",
    monthLabel: "June 2026",
    year: "2026",
    title: "Why Classical Education?",
    excerpt:
      "An introduction to the oldest and most proven model of schooling—forming both well-reasoned minds and virtuous hearts within a Christ-centered community.",
    href: "/files/Why-Classical-Education_-_-CCS-Article.pdf",
  },
];

export default function ClassicalPage() {
  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Page Header Banner */}
      <section className="relative w-full h-72 sm:h-80 md:h-96 bg-slate-900 overflow-hidden flex items-center justify-center">
        <Image
          src="/headers/header-classical.webp"
          alt="Classical Education at Citadel Christian School"
          fill
          priority
          className="object-cover object-center opacity-40"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <span className="text-xs uppercase tracking-widest font-semibold text-purple-300 bg-purple-900/60 px-3.5 py-1 rounded-full border border-purple-400/30">
            About Us • Distinctives
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-3 uppercase">
            Classical
          </h1>
          <p className="text-lg sm:text-xl text-slate-200 mt-2 max-w-2xl mx-auto font-light">
            Cultivating wisdom and virtue in students at each developing stage.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-14">
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#581076] leading-tight tracking-tight">
              Classical methodology takes advantage of the developmental stages of children.
            </h2>
            <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
              Classical education is a time-tested approach that works in harmony with a child&apos;s natural developmental stages. Rather than teaching students simply what to think for an upcoming test, classical education equips them with the tools of learning—teaching them <em>how to think, reason, and articulate truth</em> with clarity and conviction.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Rooted in the historic Trivium (Grammar, Logic, and Rhetoric), our curriculum integrates subjects into a cohesive tapestry of God&apos;s creation, fostering a lifelong love of learning and moral character.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/academics"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#581076] hover:bg-[#470a60] text-white font-medium text-sm transition shadow-sm"
              >
                Explore Academics
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="/files/How-Classical-Education-Forms-Character-Not-Just-Knowledge-_-CCS.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium text-sm transition shadow-sm"
              >
                <FileText className="w-4 h-4 text-[#581076]" />
                Download Character PDF
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <Image
              src="/images/classical01.webp"
              alt="Classical education at Citadel Christian School"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Section 2: Classical Education Videos */}
        <section className="my-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Video 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 flex flex-col">
              <div className="relative aspect-video w-full bg-slate-950">
                <iframe
                  src="https://www.youtube.com/embed/mYZDxqx3jxk"
                  title="What is Classical Education?"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            </div>

            {/* Video 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 flex flex-col">
              <div className="relative aspect-video w-full bg-slate-950">
                <iframe
                  src="https://www.youtube.com/embed/0m5yDZCy2pE"
                  title="Discovering Classical Christian Education"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Classical Methodology & Natural Developmental Stages */}
        <section className="my-16 space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed">
          <p>
            Classical education differs from progressive and conventional education in that it works with the natural developmental stages of the child. Rather than a goal of producing the next generation of workers while attempting to predict the nature of future job markets, the goals of a Classical curriculum are to
          </p>

          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>provide a foundation of knowledge in the early years when children are able to absorb facts with ease;</li>
            <li>build understanding on that foundation in the middle years as students begin to think through arguments;</li>
            <li>teach older students wisdom as they learn to reason and effectively express themselves.</li>
          </ul>

          <p className="font-semibold text-slate-900 pt-1">
            At every stage, the Classical educator is intentional about instilling wisdom and virtue in each student.
          </p>

          <div className="space-y-4 pt-2 text-slate-600">
            <p>
              In primary classes (grammar school), learning is almost exclusively focused on knowledge acquisition, using mostly didactic teaching methods and memorization. Chants, jingles, and songs make that memorization and learning fun.
            </p>
            <p>
              In the preteen and early teen years (the logic stage), instruction becomes more analytical, as children learn the arts of debate and critique along with a continuation of knowledge learning. These students are given the tools to develop sound reasoning through courses in informal and formal logic.
            </p>
            <p>
              In the secondary years (the rhetoric stage), students are trained to write and speak with eloquence and originality, learning to persuade and to apply the knowledge and understanding.
            </p>
          </div>
        </section>

        {/* Resources & Monthly Articles Timeline */}
        <section className="bg-gradient-to-br from-slate-900 via-[#241336] to-[#3a0d50] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl mt-16 border border-purple-400/15">
          {/* Header */}
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-900/60 border border-purple-400/30 text-purple-200 text-xs font-semibold uppercase tracking-widest mb-3">
              <Calendar className="w-3.5 h-3.5 text-purple-300" />
              <span>Monthly Philosophy Series</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
              Explore Our Classical Philosophy
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-3">
              Follow our monthly articles exploring why classical Christian education is more relevant than ever in shaping disciplined minds, discerning hearts, and resilient Christian leaders.
            </p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative">
            {/* Connecting vertical timeline line */}
            <div
              aria-hidden="true"
              className="absolute top-6 bottom-6 left-7 sm:left-9 w-px bg-gradient-to-b from-purple-300/70 via-purple-400/30 to-purple-400/5"
            />

            <div className="space-y-5 sm:space-y-6">
              {monthlyArticles.map((article) => (
                <a
                  key={article.href}
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-start gap-4 sm:gap-6"
                >
                  {/* Calendar Leaf Timeline Node */}
                  <div
                    className={`relative z-10 w-14 sm:w-18 rounded-xl overflow-hidden flex-shrink-0 text-center transition-transform duration-200 group-hover:scale-105 ${
                      article.isLatest
                        ? "bg-white text-slate-900 shadow-lg shadow-purple-950/60 ring-2 ring-purple-300"
                        : "bg-slate-900/90 text-white border border-purple-300/25 group-hover:border-purple-300/60 shadow-md"
                    }`}
                  >
                    <div
                      className={`text-[10px] font-bold uppercase tracking-widest py-1 ${
                        article.isLatest
                          ? "bg-[#581076] text-purple-100"
                          : "bg-purple-950/90 text-purple-300 border-b border-white/10"
                      }`}
                    >
                      {article.year}
                    </div>
                    <div className="py-2 sm:py-2.5 px-1">
                      <span
                        className={`block text-sm sm:text-base font-extrabold tracking-wider leading-none ${
                          article.isLatest ? "text-[#581076]" : "text-white"
                        }`}
                      >
                        {article.monthAbbr}
                      </span>
                    </div>
                  </div>

                  {/* Article Card */}
                  <div
                    className={`flex-1 rounded-2xl p-5 sm:p-6 transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                      article.isLatest
                        ? "bg-white/[0.13] hover:bg-white/[0.18] border border-purple-300/45 shadow-lg backdrop-blur-sm"
                        : "bg-white/[0.06] hover:bg-white/[0.11] border border-white/10 hover:border-purple-300/30 backdrop-blur-sm"
                    }`}
                  >
                    <div className="space-y-1.5 max-w-2xl">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-200">
                          <Calendar className="w-3.5 h-3.5 text-purple-300" />
                          {article.monthLabel}
                        </span>
                        {article.isLatest && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-purple-300 text-[#3a0d50]">
                            Latest Article
                          </span>
                        )}
                      </div>

                      <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-200 transition-colors leading-snug">
                        {article.title}
                      </h4>

                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>

                    {/* PDF Action Pill */}
                    <div className="flex-shrink-0 pt-1 md:pt-0">
                      <span
                        className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition ${
                          article.isLatest
                            ? "bg-white text-[#581076] group-hover:bg-purple-50 shadow-sm"
                            : "bg-white/10 text-white border border-white/15 group-hover:bg-white/20"
                        }`}
                      >
                        <FileText className="w-4 h-4 flex-shrink-0" />
                        <span>Read PDF</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-75" />
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
