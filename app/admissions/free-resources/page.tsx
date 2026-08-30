import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, ArrowRight, FileText, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Resources | Citadel Christian School",
  description:
    "Download free checklists, readiness guides, and educational resources from Citadel Christian School to help your family make the best schooling choices.",
};

const featuredResources = [
  {
    title: "Kindergarten Readiness Checklist",
    image: "/images/Social-Citadel-Kinder-Checklist-2.webp",
    paragraphs: [
      "Wondering what skills your child needs in preparation for Kindergarten? There are certain skills that most developmental experts consider to be essential tools for achievement in a school setting.",
      "Download your free, printable checklist to help you track skill development across several key areas in your rising junior kindergarten student including fine and gross motor skills, verbal skills, social skills and more.",
    ],
    downloadLink: "https://citadelchristian.org/kindergarten-readiness-checklist/",
  },
  {
    title: "Early Readiness Checklist",
    image: "/images/Social-Citadel-Early-Education-Readiness-1.webp",
    paragraphs: [
      "Download our free printable checklist as we\u2019ve designed this checklist to help parents evaluate several key areas of development necessary for pre-kindergarten and kindergarten success.",
    ],
    downloadLink: "/early-education-readiness",
  },
  {
    title: "Factors to Consider in Choosing the Best School for Your Child",
    image: "/images/Social-CCS-Webinar-2.webp",
    paragraphs: [
      "As a parent, your child\u2019s learning and acquiring good Christian values lies in your hands. In fact, it\u2019s one of the factors that we consider when choosing the right school for them. Sometimes, when they are out of our sight, we worry that cultural slide can suck our child in. As Benjamin Bloom once said, \u201cValues are caught, not taught.\u201d",
    ],
    downloadLink: "https://citadelchristian.org/admissions/resources/factors-to-consider-in-choosing-the-best-school-for-your-child/",
  },
];

export default function FreeResourcesPage() {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Banner */}
      <section className="relative w-full h-72 sm:h-80 md:h-96 bg-slate-900 overflow-hidden flex items-center justify-center">
        <Image
          src="/headers/header-biblical.webp"
          alt="Free Admissions Resources"
          fill
          priority
          className="object-cover object-center opacity-35"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <span className="text-xs uppercase tracking-widest font-semibold text-purple-300 bg-purple-900/60 px-3.5 py-1 rounded-full border border-purple-400/30">
            Admissions • Helpful Tools
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-3 uppercase">
            Free Resources
          </h1>
          <p className="text-lg sm:text-xl text-slate-200 mt-2 max-w-2xl mx-auto font-light">
            Guiding materials and checklists for parents exploring Christian classical education.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-14 space-y-12">
        {/* Intro */}
        <div>
          <p className="text-slate-800 text-lg sm:text-xl font-medium leading-relaxed">
            Citadel Christian School offers several resources to help families who are researching schooling options for their children.
          </p>
        </div>

        {/* Resources List */}
        <div className="space-y-12">
          {featuredResources.map((res, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-start gap-8 pb-10 border-b border-slate-100 last:border-b-0"
            >
              {/* Thumbnail Image */}
              <div className="w-full sm:w-56 md:w-64 flex-shrink-0 aspect-square relative rounded-xl overflow-hidden shadow-md bg-slate-100 border border-slate-200">
                <Image
                  src={res.image}
                  alt={res.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text & Button */}
              <div className="flex-1 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#581076] tracking-tight">
                  {res.title}
                </h2>

                <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                  {res.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href={res.downloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#581076] hover:bg-[#470a60] text-white font-bold text-sm sm:text-base transition shadow-sm hover:shadow-md cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    Download Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Schedule Tour Bottom CTA */}
        <div className="mt-12 bg-[#3d4f5d] text-white rounded-2xl p-8 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-2xl font-bold">Have questions or want to see CCS in person?</h3>
            <p className="text-slate-200 text-sm">
              We invite your family to visit our campus and meet our teachers.
            </p>
          </div>
          <Link
            href="/admissions/schedule-a-tour"
            className="px-6 py-3 rounded-lg bg-[#581076] hover:bg-[#470a60] text-white font-semibold text-sm transition shadow flex items-center gap-2 flex-shrink-0"
          >
            Schedule a Tour
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
