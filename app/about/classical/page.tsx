import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classical Education | Citadel Christian School",
  description:
    "Cultivating wisdom and virtue in students at each developing stage through the time-tested classical Trivium.",
};

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

        {/* Resources & Articles */}
        <div className="bg-gradient-to-r from-slate-900 to-[#3a0d50] text-white rounded-2xl p-8 sm:p-12 shadow-xl mt-16">
          <div className="max-w-3xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Explore Our Classical Philosophy
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Learn why classical Christian education is more relevant than ever in shaping disciplined minds, discerning hearts, and resilient Christian leaders.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/files/Why-Classical-Education_-_-CCS-Article.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-sm backdrop-blur transition"
              >
                <FileText className="w-4 h-4 text-purple-300" />
                Why Classical Education Article (PDF)
              </a>
              <a
                href="/files/Why-Classical-Education-Matters-More-in-the-Age-of-AI.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-sm backdrop-blur transition"
              >
                <FileText className="w-4 h-4 text-purple-300" />
                Classical Education in the Age of AI (PDF)
              </a>
              <a
                href="/files/CCS-Blog-_-Why-We-Study-Latin.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-sm backdrop-blur transition"
              >
                <FileText className="w-4 h-4 text-purple-300" />
                Why We Study Latin (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
