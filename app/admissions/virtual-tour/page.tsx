import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Compass, BookOpen, Trophy, Church, Sparkles, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Virtual Campus Tour | Citadel Christian School",
  description:
    "Take a virtual tour of Citadel Christian School in Brenham, TX. Explore our classical classrooms, library, athletics facilities, and chapel.",
};

const campusHighlights = [
  {
    title: "Classical Classrooms",
    subtitle: "Grammar, Logic & Rhetoric Classrooms",
    description:
      "Intentionally sized learning environments that foster rich socratic dialogue, student engagement, and individual mentorship by dedicated Christian teachers.",
    image: "/images/Home-Classical-1280x720-A.jpg",
    icon: BookOpen,
  },
  {
    title: "Campus Chapel & Worship",
    subtitle: "Spiritual Gathering & Praise",
    description:
      "A sacred space where our entire student body gathers weekly for corporate worship, biblical exposition, hymn singing, and prayer.",
    image: "/images/Home-Biblical-1280x720-A.jpg",
    icon: Church,
  },
  {
    title: "Athletics & Gymnasium",
    subtitle: "Citadel Shields Athletics",
    description:
      "State-of-the-art sports facilities hosting volleyball, basketball, cross country, track & field, and physical education fostering godly sportsmanship.",
    image: "/images/Home-Exceptional-1280x720-A.jpg",
    icon: Trophy,
  },
  {
    title: "Library & Socratic Discussion Hall",
    subtitle: "Great Books & Research",
    description:
      "A rich repository of classical literature, historic texts, Christian theology, and quiet study areas for upper school logic and rhetoric students.",
    image: "/images/About-Our-Story-1280x720-1.jpg",
    icon: Sparkles,
  },
];

export default function VirtualTourPage() {
  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Hero Banner */}
      <section className="relative w-full h-72 sm:h-80 md:h-96 bg-slate-900 overflow-hidden flex items-center justify-center">
        <Image
          src="/headers/header-classical.webp"
          alt="Virtual Tour at Citadel Christian School"
          fill
          priority
          className="object-cover object-center opacity-40"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <span className="text-xs uppercase tracking-widest font-semibold text-purple-300 bg-purple-900/60 px-3.5 py-1 rounded-full border border-purple-400/30">
            Admissions
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-3">
            Virtual Tour
          </h1>
          <p className="text-lg sm:text-xl text-slate-200 mt-2 max-w-2xl mx-auto font-light">
            Explore our campus facilities, classrooms, and community spaces.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-14">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">
            Welcome to Our <span className="text-[#581076]">Brenham Campus</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Conveniently located at <strong>2111 S Blue Bell Rd</strong> in Brenham, Texas, Citadel Christian School offers modern, secure, and beautiful learning spaces designed to inspire young minds.
          </p>
          <div>
            <a
              href="https://offers.citadelchristian.org/on-demand-virtual-tour"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#581076] hover:bg-[#470a60] text-white font-bold text-base transition shadow-md hover:shadow-lg"
            >
              <Compass className="w-5 h-5" />
              Watch On-Demand Virtual Tour
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {campusHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition flex flex-col"
              >
                <div className="relative h-60 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5 text-purple-300" />
                    <span>{item.subtitle}</span>
                  </div>
                </div>
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visit in Person Callout */}
        <div className="bg-gradient-to-r from-slate-900 to-[#3d4f5d] text-white rounded-2xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Ready to See Citadel in Person?</h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Virtual tours are just a preview! We would love to welcome your family to campus for a personalized walkthrough.
            </p>
          </div>
          <Link
            href="/admissions/schedule-a-tour"
            className="px-6 py-3 rounded-lg bg-[#581076] hover:bg-[#470a60] text-white font-semibold text-sm transition shadow flex items-center gap-2 flex-shrink-0"
          >
            <Compass className="w-4 h-4" />
            Schedule an On-Campus Tour
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
