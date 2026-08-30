import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biblical Worldview | Citadel Christian School",
  description:
    "Discovering God's design throughout every subject and cultivating a Christ-centered perspective in all of life.",
};

export default function BiblicalPage() {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Page Header Banner */}
      <section className="relative w-full h-72 sm:h-80 md:h-96 bg-slate-900 overflow-hidden flex items-center justify-center">
        <Image
          src="/headers/header-biblical.webp"
          alt="Biblical Foundation at Citadel Christian School"
          fill
          priority
          className="object-cover object-center opacity-40"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <span className="text-xs uppercase tracking-widest font-semibold text-purple-300 bg-purple-900/60 px-3.5 py-1 rounded-full border border-purple-400/30">
            About Us • Distinctives
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-3 uppercase">
            Biblical
          </h1>
          <p className="text-lg sm:text-xl text-slate-200 mt-2 max-w-2xl mx-auto font-light">
            Discovering God&apos;s design throughout every subject.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-14">
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-7 space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
            <div>
              <p>
                <strong className="text-slate-900 font-bold text-base sm:text-lg">Foundational –</strong> We are committed to honoring Christ at Citadel and maintaining the foundation of biblical authority in every aspect of our teaching and practice. It is the first value we hold to and guides everything else we do: our pedagogy, our discipline process, our policy-making, our marketing, etc.
              </p>
            </div>

            <div>
              <p>
                <strong className="text-slate-900 font-bold text-base sm:text-lg">Chapel –</strong> In addition to a dedicated Bible class for each grade, our students attend chapel each week. Local pastors and Bible teachers are invited as guest speakers on a regular basis. Students also have opportunities to do chapel presentations with their class at various times throughout the year.
              </p>
            </div>

            <div>
              <p>
                <strong className="text-slate-900 font-bold text-base sm:text-lg">Scripture memorization –</strong> Citadel has a schoolwide Scripture memorization program that trains students to hide God’s Word in their hearts. Passages are chosen each year to undergird the chapel theme, and/or bolster students’ understanding of biblical events such as the birth of Christ, or His death and resurrection. Students will also memorize verses assigned by teachers to provide greater insight into the academic truth being taught in a given class.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/campus-life"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#581076] hover:bg-[#470a60] text-white font-medium text-sm transition shadow-sm"
              >
                Experience Campus Life
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="/files/26-27-Schoolwide-Scripture-Memorization-Passages.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium text-sm transition shadow-sm"
              >
                <FileText className="w-4 h-4 text-[#581076]" />
                Scripture Memorization Passages (PDF)
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <Image
              src="/images/About-Distinctives-Biblical-1280-720.jpg"
              alt="Citadel Christian School students performing in chapel presentation"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Section 2: CCS Statement of Faith */}
        <section className="my-16 pt-10 border-t border-slate-100">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#581076] tracking-tight">
              CCS Statement of Faith
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 text-slate-700 text-sm sm:text-[14.5px] leading-relaxed">
            {/* Left Column (Items 1 - 4) */}
            <div className="space-y-6">
              <div className="flex gap-3">
                <span className="font-semibold text-slate-900 flex-shrink-0">1.</span>
                <p>
                  We believe the Bible to be inspired, the only infallible, authoritative, inerrant Word of God (II Timothy 3:16; II Peter 1:21).
                </p>
              </div>

              <div className="flex gap-3">
                <span className="font-semibold text-slate-900 flex-shrink-0">2.</span>
                <p>
                  We believe there is one God, eternally existent in three persons – Father, Son, and Holy Spirit (Genesis 1:1; Matthew 28:19; John 10:30).
                </p>
              </div>

              <div className="flex gap-3">
                <span className="font-semibold text-slate-900 flex-shrink-0">3.</span>
                <p>
                  We believe in the deity of Christ (John 10:33); His virgin birth (Isaiah 7:14; Matthew 1:23; Luke 1:35); His sinless life (Hebrews 4:15; Hebrews 7:26); His miracles (John 2:11); His vicarious and atoning death (I Corinthians 15:3; Ephesians 1:7; Hebrews 2:9); His resurrection (John 11:25; I Corinthians 15:4); His ascension to the right hand of the Father (Mark 16:19); and His personal return in power and glory (Acts 1:11; Revelation 19:11).
                </p>
              </div>

              <div className="flex gap-3">
                <span className="font-semibold text-slate-900 flex-shrink-0">4.</span>
                <p>
                  We believe in the absolute necessity of regeneration by the Holy Spirit for salvation because of the exceeding sinfulness of human nature; and that people are justified on the single ground of faith in the shed blood of Christ and that only by God’s grace and through faith alone are we saved (John 3:16-19; John 5:24; Romans 3:32; Romans 5:8-9; Ephesians 2:8-10; Titus 3:5).
                </p>
              </div>
            </div>

            {/* Right Column (Items 5 - 8) */}
            <div className="space-y-6">
              <div className="flex gap-3">
                <span className="font-semibold text-slate-900 flex-shrink-0">5.</span>
                <p>
                  We believe in the resurrection of both the saved and the lost; they that are saved unto the resurrection of life, and they that are lost unto the resurrection of damnation (John 5:28-29).
                </p>
              </div>

              <div className="flex gap-3">
                <span className="font-semibold text-slate-900 flex-shrink-0">6.</span>
                <p>
                  We believe in the spiritual unity of believers in our Lord Jesus Christ (Romans 8:9; I Corinthians 12:12-13; Galatians 3:26-28).
                </p>
              </div>

              <div className="flex gap-3">
                <span className="font-semibold text-slate-900 flex-shrink-0">7.</span>
                <p>
                  We believe in the present ministry of the Holy Spirit, by whose indwelling the Christian is enabled to live a Godly life (Romans 8:13-14; I Corinthians 3:16; I Corinthians 6:19-20; Ephesians 4:30; Ephesians 5:18).
                </p>
              </div>

              <div className="flex gap-3">
                <span className="font-semibold text-slate-900 flex-shrink-0">8.</span>
                <p>
                  We believe that God created all people in His divine image and imbued them with dignity and value from conception to death. God created male and female with the distinct and biological sex of each person immutably determined and manifested at conception by God (Genesis 1:26-27). God decreed marriage to be a covenantal relationship between one man and one woman that reflects Christ’s relationship with the Church. God’s will for all people is chastity outside of marriage and fidelity within marriage. No affections, desires, or commitments ever justify sexual acts outside of marriage nor do they justify any form of sexual immorality (Genesis 2:18-24; Ephesians 5:3, 31-32).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Downloadable Hymns & Scripture Guide Callout */}
        <div className="bg-gradient-to-r from-[#581076] to-[#340b47] text-white rounded-2xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 mt-16">
          <div>
            <h3 className="text-2xl font-bold">Download School Hymns & Scripture Guide</h3>
            <p className="text-purple-200 text-sm mt-1">
              Explore the curated annual hymnology and scripture memorization plan for Citadel families.
            </p>
          </div>
          <a
            href="/files/CCS-Hymns-2026-2027.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-white text-[#581076] font-bold text-sm hover:bg-slate-100 transition shadow flex items-center gap-2 flex-shrink-0"
          >
            <FileText className="w-4 h-4 text-[#581076]" />
            Hymns Guide (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}
