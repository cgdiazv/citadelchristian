import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, FileText, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions | Citadel Christian School",
  description:
    "Learn about the 5-step admissions process for Citadel Christian School in Brenham, TX. Download the fee and tuition schedule and explore our student non-discrimination clause.",
};

export default function AdmissionsPage() {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Page Header Banner */}
      <section className="relative w-full h-72 sm:h-80 md:h-96 bg-slate-900 overflow-hidden flex items-center justify-center">
        <Image
          src="/images/Longterm-kids-cropped-scaled.jpg"
          alt="Admissions at Citadel Christian School"
          fill
          priority
          className="object-cover object-[center_20%] opacity-35"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <span className="text-xs uppercase tracking-widest font-semibold text-purple-300 bg-purple-900/60 px-3.5 py-1 rounded-full border border-purple-400/30">
            Join Our Family
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-3 uppercase">
            Admissions
          </h1>
          <p className="text-lg sm:text-xl text-slate-200 mt-2 max-w-2xl mx-auto font-light">
            Your journey toward classical, Christ-centered education begins here.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-14 space-y-12">
        {/* Admissions Steps 1 - 5 */}
        <div className="space-y-10 text-slate-700 text-sm sm:text-base leading-relaxed">
          {/* Step 1 */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-[#581076]">Step 1</h2>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700">
              <li>
                Submit Student Application for Admission by{" "}
                <a
                  href="https://bren-tx.client.renweb.com/oa/?memberid=1988"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline text-slate-900 hover:text-[#581076] transition"
                >
                  clicking here.
                </a>
              </li>
              <li>Pay a non-refundable $50 Application Fee.</li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-[#581076]">Step 2</h2>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700">
              <li>
                Complete the Family Portrait questionnaire. It is available by request at{" "}
                <a
                  href="mailto:office@citadelchristian.org"
                  className="text-[#581076] hover:underline font-medium"
                >
                  office@citadelchristian.org
                </a>
              </li>
              <li>
                Watch the following videos:
                <ul className="list-disc pl-6 mt-1.5 space-y-1 text-slate-600">
                  <li>
                    <a
                      href="https://www.youtube.com/watch?v=DmBahbIkkB4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#581076] hover:underline font-medium"
                    >
                      Three Reasons to Study Latin
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/watch?v=bwyW_thbbVM&t"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#581076] hover:underline font-medium"
                    >
                      What is Classical Education?
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-[#581076]">Step 3</h2>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700">
              <li>
                Interview with the appropriate administrator. School will contact you to schedule the parent and student interview after the application has been received and reviewed.
              </li>
            </ul>
          </div>

          {/* Step 4 */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-[#581076]">Step 4</h2>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700">
              <li>
                Schedule an appointment for placement testing in reading and math for your child, as well as a day for your child to shadow their prospective class.
              </li>
            </ul>
          </div>

          {/* Step 5 */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-[#581076]">Step 5</h2>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700">
              <li>
                Await acceptance notification. You will receive an email informing you of your status.
              </li>
              <li>
                Upon acceptance, you will complete the enrollment process and pay a $250 Enrollment Fee.
              </li>
            </ul>
          </div>
        </div>

        {/* Download Button */}
        <div className="flex justify-center pt-4 pb-2">
          <a
            href="/files/Fee-and-Tuition-Schedule-2026-2027.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#581076] hover:bg-[#470a60] text-white font-bold text-sm sm:text-base transition shadow-md hover:shadow-lg"
          >
            <Download className="w-5 h-5" />
            Download Fee & Tuition Scale
          </a>
        </div>

        {/* Quick Links Row */}
        <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 space-y-2 text-sm sm:text-base font-medium">
          <div>
            <Link
              href="/about/employment"
              className="text-slate-800 hover:text-[#581076] transition hover:underline"
            >
              Employment Opportunities
            </Link>
          </div>
          <div>
            <a
              href="https://givebutter.com/CitadelDonate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-800 hover:text-[#581076] transition hover:underline"
            >
              Support CCS
            </a>
          </div>
        </div>

        {/* Non-Discrimination Clause for Students */}
        <section className="space-y-4 pt-8 border-t border-slate-100 text-slate-700 text-sm sm:text-base leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#581076] tracking-tight">
            Non-Discrimination Clause for Students
          </h2>
          <p>
            Citadel Christian School admits students of any race, color, national, and ethnic origin to all the rights, privileges, programs, and activities generally accorded or made available to students of the school. It does not discriminate on the basis of race, color, national and ethnic origin in administration of its educational policies, admissions policies, scholarship and loan programs, and athletic and other school-administered programs.
          </p>
        </section>
      </div>
    </div>
  );
}
