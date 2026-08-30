import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Citadel Christian School",
  description:
    "Located on 40 scenic acres in Brenham, Texas, Citadel Christian School delivers a classical curriculum integrating faith and learning.",
};

export default function AboutPage() {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Hero Banner Header */}
      <section className="relative w-full h-64 sm:h-72 md:h-80 bg-slate-900 overflow-hidden flex items-center justify-center">
        <Image
          src="/images/About-Our-Story-1280x720-1.jpg"
          alt="Citadel Christian School Campus"
          fill
          priority
          className="object-cover object-center opacity-30"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <span className="text-xs uppercase tracking-widest font-semibold text-purple-300 bg-purple-900/60 px-3.5 py-1 rounded-full border border-purple-400/30">
            About Citadel
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-3">
            About Us
          </h1>
          <p className="text-base sm:text-lg text-slate-200 mt-2 max-w-2xl mx-auto font-light">
            ...Building a Legacy of Truth in Brenham, Texas.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-12 sm:py-16">
        {/* Section 1: About Us & Our Commitment (2-Column Grid) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-start mb-16">
          {/* Left Column: About Us */}
          <div className="flex flex-col space-y-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-slate-100 shadow-sm">
              <Image
                src="/images/At-the-Cross1.jpg"
                alt="Citadel Christian School students at the cross"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#581076] tracking-tight">
                About Us
              </h2>
              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                Located on 40 scenic acres on the Redeemer Church property in Brenham, Texas, Citadel delivers a classical curriculum which integrates faith and learning. We are committed to the physical, social, and emotional security of our students in a loving environment. Citadel students leave with a sound Christian worldview and a strong educational foundation.
              </p>
            </div>
          </div>

          {/* Right Column: Our Commitment */}
          <div className="flex flex-col space-y-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-slate-100 shadow-sm">
              <Image
                src="/images/Kinder-teacher-scaled.jpg"
                alt="Citadel Christian School teacher writing on whiteboard"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#581076] tracking-tight">
                Our Commitment
              </h2>
              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                Established in 1993, as Brenham Christian Academy, the school has always been committed to honoring Christ through excellence in education. BCA provided 25 years of service to the community of Washington County, and developed a proud history of academic and athletic accomplishment. Recently, however, it became evident that some changes needed to be made—changes that required a new name to represent a new identity.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Non-Discrimination Clause */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#581076] tracking-tight mb-4">
            Non-Discrimination Clause for Students
          </h2>
          <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
            Citadel Christian School admits students of any race, color, national, and ethnic origin to all the rights, privileges, programs, and activities generally accorded or made available to students of the school. It does not discriminate on the basis of race, color, national and ethnic origin in administration of its educational policies, admissions policies, scholarship and loan programs, and athletic and other school-administered programs.
          </p>
        </section>

        {/* Section 3: Vision & Core Values (2-Column Grid) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-start">
          {/* Left Column: Vision */}
          <div className="flex flex-col space-y-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-slate-100 shadow-sm">
              <Image
                src="/campus-life/campus03.webp"
                alt="Citadel Christian School students smiling together"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#581076] tracking-tight">
                Vision
              </h2>
              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                - To inspire students to be passionate lifelong learners and point them towards making a positive impact in the world for Christ.
              </p>
              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                We see a vibrant school which partners with families to teach a love of learning deeply rooted in Biblical principles and dedicated to the development of Christian leaders who are equipped to engage and influence the great issues of their day.
              </p>
            </div>
          </div>

          {/* Right Column: Core Values */}
          <div className="flex flex-col space-y-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-slate-100 shadow-sm">
              <Image
                src="/campus-life/campus01.webp"
                alt="Citadel Christian School students hugging teacher"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#581076] tracking-tight">
                Core Values
              </h2>
              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                Citadel Christian School operates according to the following values—foundational principles that are not open to compromise. As we build these values into our students, we believe our students will build the next generation to the glory of God.
              </p>
              <ul className="space-y-2.5 text-slate-600 text-sm sm:text-[15px] leading-relaxed pt-1">
                <li>
                  <strong className="text-slate-900 font-bold">Biblical Authority</strong> – 2 Timothy 3:16; John 17:17; Psalm 19 – God’s Word is the foundation of our teaching and our practices
                </li>
                <li>
                  <strong className="text-slate-900 font-bold">Unity</strong> – John 17:20-21; 1 Corinthians 12:12-27 – Manifesting the nature of God in our relationships; working together as a team
                </li>
                <li>
                  <strong className="text-slate-900 font-bold">Integrity</strong> – Psalm 15:2; Proverbs 11:3 – Honest and trustworthy in everything we do
                </li>
                <li>
                  <strong className="text-slate-900 font-bold">Love for God and others</strong> – Luke 10:27 – Love manifests itself in service to God and others
                </li>
                <li>
                  <strong className="text-slate-900 font-bold">Discipleship</strong> – Matthew 28:19; John 15:8 – Called to make disciples of all nations and glorify God through the fruit we bear as His disciples
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Full-Width Purple Callout Banner */}
      <section className="w-full bg-[#581076] text-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-3">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white/95 font-light">
            Thank you for your interest in <span className="font-normal italic">Citadel Christian School</span> and for considering us as a partner with you in educating your child(ren). We encourage you to contact us directly regarding any questions or concerns you may have about CCS. Please{" "}
            <Link
              href="/admissions/schedule-a-tour"
              className="font-bold underline hover:text-purple-200 transition-colors"
            >
              contact
            </Link>{" "}
            the office to set up a tour of our campus.
          </p>
        </div>
      </section>

      {/* Proud Member Section */}
      <section className="w-full bg-white py-16 sm:py-20 text-center">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#3d4f5d] tracking-tight mb-8">
            Proud Member
          </h2>
          <div className="relative w-64 sm:w-72 md:w-80 h-28 sm:h-32">
            <Image
              src="/logos/WashCoChamber_Logo-Fall_2018.jpg"
              alt="Washington County Chamber of Commerce Proud Member"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
