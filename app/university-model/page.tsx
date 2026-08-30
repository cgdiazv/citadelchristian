import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FileText, ArrowRight, Quote } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "University-Model® | Citadel Christian School",
  description:
    "What is University-Model®? Combining traditional schooling with homeschooling to give parents more time for imparting faith, character, and values.",
};

const testimonials = [
  {
    quote:
      "As a mother of middle school and high school students at Citadel Christian School, I am continually thankful for the well-rounded education and strong Christian foundation my children are receiving. This year has been especially exciting with the launch of the athletics program, which has brought new opportunities for growth, teamwork, discipline, and school spirit. Watching my kids develop confidence and leadership both in the classroom and on the field has been incredibly rewarding. Citadel’s commitment to excellence—academically, spiritually, and now athletically—has made a lasting impact on our family, and we are so grateful to be part of this community.",
    author: "Citadel Mother",
    role: "Middle & High School Parent",
  },
  {
    quote:
      "Attending Citadel Christian School over the past three years has been such a blessing for our family. We began with our children in Pre-K and Kinder in 2023—and each year since has only reaffirmed that this is exactly where we are meant to be. The teachers and staff have consistently gone above and beyond to nurture our kids’ love for learning while reinforcing strong Christian values. Knowing that our children are prayed over, encouraged, and challenged every day brings us incredible peace of mind. Citadel Christian School has played a meaningful role in shaping who our children are becoming, and we are deeply grateful for the impact it has had on our family over these past three years.",
    author: "Citadel Family",
    role: "Pre-K & Kinder Parent (3 Years)",
  },
  {
    quote:
      "As a parent with three children currently attending Citadel Christian School and another joining next school year, I can confidently say this school has been an incredible blessing to our family. Citadel provides a nurturing, Christ-centered environment where our children are known, loved, and challenged academically and spiritually. The teachers genuinely invest in each student, and it brings us so much peace knowing our kids are growing in faith, character, and confidence every day. We are excited for our youngest to join the Citadel family and grateful to be part of such a supportive, God-honoring community.",
    author: "Citadel Parent",
    role: "Parent of 4 Students",
  },
];

export default function UniversityModelPage() {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Page Header Banner */}
      <section className="relative w-full h-72 sm:h-80 md:h-96 bg-slate-900 overflow-hidden flex items-center justify-center">
        <Image
          src="/images/CCS-Grads-scaled.jpg"
          alt="University-Model Education at Citadel Christian School"
          fill
          priority
          className="object-cover object-[center_32%] opacity-30"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <span className="text-xs uppercase tracking-widest font-semibold text-purple-300 bg-purple-900/60 px-3.5 py-1 rounded-full border border-purple-400/30">
            Educational Model
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-3 uppercase">
            University-Model®
          </h1>
          <p className="text-lg sm:text-xl text-slate-200 mt-2 max-w-2xl mx-auto font-light">
            Partnering with parents to provide a high-caliber Christian education.
          </p>
        </div>
      </section>

      {/* Main Content Layout with Left Sidebar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Sidebar: Parent Testimonials & Quotes */}
          <aside className="lg:col-span-5 space-y-6">
            <div className="sticky top-28 space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-xs uppercase tracking-widest font-bold text-[#581076]">
                  Parent Perspectives
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  What Families Are Saying
                </h3>
              </div>

              {testimonials.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 relative"
                >
                  <Quote className="w-8 h-8 text-[#581076]/20 absolute top-4 right-4" />
                  <p className="text-slate-700 text-xs sm:text-[13.5px] leading-relaxed italic relative z-10">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#581076]">
                      {item.author}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      {item.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* Right Main Column: Image over Text and Structure */}
          <main className="lg:col-span-7 space-y-10">
            {/* Top Image: A Unique Educational Model (over text) */}
            <div className="w-full flex justify-center">
              <div className="relative w-full h-72 sm:h-88 md:h-[400px]">
                <Image
                  src="/images/A-Unique-Educational-Model.png"
                  alt="A Unique Educational Model - University-Model School Structure"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#581076] tracking-tight">
                  What is University-Model®?
                </h2>
                <p>
                  (UM®) combines the best attributes of traditional schooling with the best attributes of homeschooling and integrates them into one model. The result is a quality education that gives parents more time for imparting their own faith and values to their children. In partnership with one another, parents and the school work together toward a mutual goal: to produce wholesome, competent, and virtuous followers of Christ who will change the world in their generation.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Structure
                </h3>
                <p>
                  The UM® is a five-day academic program with students spending three days in the central classroom and two days in their “satellite classroom” at home. Both classrooms are under the supervision of the professional educator. The key to success of the concept is the integration of a biblically based, parent-guided, Christian faith and a sound, teacher-directed, academic environment. Parents partner with professional educators in this educational process. Under the supervision of the qualified educator, parents are required to provide teaching (lower grades) and oversight (upper grades) responsibilities of their child’s coursework in the satellite classroom. Families who choose the University-Model® program must have a parent or guardian in the home on satellite days to provide a Christ-centered education.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/admissions/schedule-a-tour"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#581076] hover:bg-[#470a60] text-white font-medium text-sm transition shadow-sm"
                >
                  Schedule a Tour
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="/files/What-the-University-Model-Offers-_-CCS-Article.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium text-sm transition shadow-sm"
                >
                  <FileText className="w-4 h-4 text-[#581076]" />
                  Download UM® Overview (PDF)
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
