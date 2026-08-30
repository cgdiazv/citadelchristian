import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { Star, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Support CCS | Citadel Christian School",
  description:
    "Investing in the Lives of our Future Leaders. Support Citadel Christian School through your gift of time, talent, and treasure.",
};

export default function SupportCCSPage() {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Page Header Banner */}
      <section className="relative w-full h-64 sm:h-72 md:h-80 bg-slate-900 overflow-hidden flex items-center justify-center">
        <Image
          src="/images/Donations-1024x768-1.jpg"
          alt="Support Citadel Christian School"
          fill
          priority
          className="object-cover object-[center_35%] opacity-35"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <span className="text-xs uppercase tracking-widest font-semibold text-purple-300 bg-purple-900/60 px-3.5 py-1 rounded-full border border-purple-400/30">
            Partner With Us
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-3">
            Support CCS
          </h1>
          <p className="text-base sm:text-lg text-slate-200 mt-2 max-w-2xl mx-auto font-light">
            Investing in the lives of our future leaders.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 py-12 sm:py-16 md:py-20">
        <div className="space-y-8 sm:space-y-10">
          {/* Main Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Investing in the Lives of our Future Leaders
          </h2>

          {/* 2-Column Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Letter / Message */}
            <div className="lg:col-span-7 space-y-5 text-slate-600 text-base sm:text-[17px] leading-relaxed">
              <p>
                As one who cares about investing in the future of our great nation and recognizes the need to support exceptional education for children, you have an opportunity to join us in the work we are doing at Citadel Christian School (CCS). At CCS we are busy inspiring students to learn and make a difference in the world for Christ—not just in the future, but now.
              </p>

              <p>
                Your gift of time, talent, and treasure is critical in allowing us to continue our mission to equip students for life by providing an exceptional education with a biblical worldview in a supportive, loving atmosphere.
              </p>

              <p>
                Thank you so much for partnering with Citadel Christian. We appreciate your support.
              </p>
            </div>

            {/* Right Column: Image and CTA */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-stretch">
              <div className="w-full relative aspect-[385/255] rounded-xl overflow-hidden shadow-md border border-slate-200/80 bg-slate-100">
                <Image
                  src="/images/support-future-leaders.png"
                  alt="Citadel Christian School students"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Call To Action Button */}
              <div className="w-full mt-6">
                <a
                  href="https://givebutter.com/CitadelDonate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#581076] hover:bg-[#470a60] text-white font-bold text-sm sm:text-base tracking-wide uppercase shadow-md hover:shadow-lg transition-all duration-200 text-center"
                >
                  <span>Click Here to Support CCS</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Young Graduates Image Showcase */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 pb-16 sm:pb-20">
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[480px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 bg-slate-100">
          <Image
            src="/images/CCS-Grads-scaled.jpg"
            alt="Citadel Christian School young graduates"
            fill
            className="object-cover object-[center_30%]"
          />
        </div>
      </section>

      {/* 2026 Gala Sponsors Section */}
      <section className="w-full bg-gradient-to-b from-slate-50 via-purple-50/20 to-white border-t border-slate-200 py-16 sm:py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-12 sm:space-y-16">
          
          {/* Section Heading Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#581076]/10 text-[#581076]">
              Community Partnerships
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Thank you to our 2026 Gala Sponsors!
            </h2>
            <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed">
              We are deeply grateful for our corporate partners and generous friends whose faithful support empowers Citadel Christian School to equip the next generation.
            </p>
          </div>

          {/* Tiered Sponsor Cards */}
          <div className="space-y-10 sm:space-y-12">
            
            {/* 1. PLATINUM GALA SPONSORS */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm border-2 border-slate-300 relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="inline-block w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-slate-400 to-slate-600 shadow-xs"></span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Platinum Gala Sponsors
                  </h3>
                </div>
                <span className="text-xs uppercase font-bold tracking-widest text-slate-800 bg-slate-100 border border-slate-300 px-3.5 py-1 rounded-full">
                  Platinum Level
                </span>
              </div>

              {/* Platinum Content: Donors & Corporate Logos */}
              <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Named Benefactors */}
                <div className="lg:col-span-6 bg-slate-50/90 rounded-xl p-6 border border-slate-200 flex flex-col justify-center space-y-4">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#581076]">
                    Generous Friends &amp; Families
                  </span>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs">
                      <div className="w-8 h-8 rounded-full bg-purple-100 text-[#581076] flex items-center justify-center flex-shrink-0">
                        <Star className="w-4 h-4 fill-[#581076]" />
                      </div>
                      <span className="font-semibold text-slate-800 text-base sm:text-lg">
                        Diane and Les Armstrong
                      </span>
                    </div>
                    <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs">
                      <div className="w-8 h-8 rounded-full bg-purple-100 text-[#581076] flex items-center justify-center flex-shrink-0">
                        <Star className="w-4 h-4 fill-[#581076]" />
                      </div>
                      <span className="font-semibold text-slate-800 text-base sm:text-lg">
                        A Generous Friend of Citadel
                      </span>
                    </div>
                  </div>
                </div>

                {/* Corporate Logos */}
                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Bluebonnet Abstract & Title */}
                  <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col items-center justify-center min-h-[140px] hover:border-[#581076]/40 hover:shadow-md transition-all">
                    <div className="relative w-full h-16">
                      <Image
                        src="/logos/GalaSponsorLogo_BluebonnetAbstractTitle.png"
                        alt="Bluebonnet Abstract & Title"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Blue Bell */}
                  <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col items-center justify-center min-h-[140px] hover:border-[#581076]/40 hover:shadow-md transition-all">
                    <div className="relative w-full h-20">
                      <Image
                        src="/logos/Blue-Bell-Halfmoon-Color-scaled.png"
                        alt="Blue Bell"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. GOLD GALA SPONSORS */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm border border-amber-300 relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-amber-100">
                <div className="flex items-center gap-3">
                  <span className="inline-block w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-amber-400 to-amber-600 shadow-xs"></span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Gold Gala Sponsors
                  </h3>
                </div>
                <span className="text-xs uppercase font-bold tracking-widest text-amber-900 bg-amber-50 border border-amber-300 px-3.5 py-1 rounded-full">
                  Gold Level
                </span>
              </div>

              {/* Gold Content */}
              <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Named Benefactors */}
                <div className="lg:col-span-6 bg-amber-50/40 rounded-xl p-6 border border-amber-200/70 flex flex-col justify-center space-y-4">
                  <span className="text-xs uppercase tracking-wider font-semibold text-amber-900">
                    Generous Friends &amp; Families
                  </span>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-amber-200/70 shadow-xs">
                      <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
                        <Award className="w-4 h-4" />
                      </div>
                      <span className="font-semibold text-slate-800 text-base sm:text-lg">
                        Julia Brewster
                      </span>
                    </div>
                    <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-amber-200/70 shadow-xs">
                      <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0">
                        <Award className="w-4 h-4" />
                      </div>
                      <span className="font-semibold text-slate-800 text-base sm:text-lg">
                        Paravel Ventures
                      </span>
                    </div>
                  </div>
                </div>

                {/* Corporate Logos with Notes */}
                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Meyer Carrington */}
                  <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col items-center justify-between min-h-[140px] hover:border-amber-400 hover:shadow-md transition-all">
                    <div className="relative w-full h-14 my-auto">
                      <Image
                        src="/logos/GalaSponsorLogo-MeyerCarrington.png"
                        alt="Meyer Carrington"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs text-slate-500 font-medium italic mt-2 border-t border-slate-100 pt-1.5 w-full text-center">
                      Kenneth Meyer
                    </span>
                  </div>

                  {/* Pencco */}
                  <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col items-center justify-between min-h-[140px] hover:border-amber-400 hover:shadow-md transition-all">
                    <div className="relative w-full h-14 my-auto">
                      <Image
                        src="/logos/Pencco.png"
                        alt="Pencco"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs text-slate-500 font-medium italic mt-2 border-t border-slate-100 pt-1.5 w-full text-center">
                      Ron and Aline Horne
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. SILVER GALA SPONSOR */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm border border-slate-200 relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="inline-block w-3.5 h-3.5 rounded-full bg-slate-300 shadow-xs"></span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Silver Gala Sponsor
                  </h3>
                </div>
                <span className="text-xs uppercase font-bold tracking-widest text-slate-700 bg-slate-100 border border-slate-300 px-3.5 py-1 rounded-full">
                  Silver Level
                </span>
              </div>

              {/* Silver Content */}
              <div className="mt-8 flex justify-center">
                <div className="w-full max-w-md bg-white rounded-xl p-6 border border-slate-200 shadow-xs flex flex-col items-center justify-center hover:border-[#581076]/40 hover:shadow-md transition-all">
                  <div className="relative w-full h-16">
                    <Image
                      src="/logos/o3_logo_gold1.png"
                      alt="Old Three"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs text-slate-500 font-medium italic mt-3 border-t border-slate-100 pt-2 w-full text-center">
                    Jill &amp; Kerr Taylor
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
