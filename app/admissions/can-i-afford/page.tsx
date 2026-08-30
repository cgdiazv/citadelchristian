import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, FileText, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Can I Afford a Christian Private School? | Citadel Christian School",
  description:
    "Explore practical tips and financial planning strategies to make Christian private school education achievable for your family at Citadel Christian School.",
};

const tips = [
  {
    title: "Do not give in to fear.",
    content:
      "Time and again in Scripture, the Lord called an individual to an assignment that, for all intents and purposes, looked overwhelming. In almost every case, the individual was told not to be afraid. If God is impressing on you to send your child to a private Christian school, He will provide a way.",
  },
  {
    title: "Create a budget.",
    content:
      "Design a financial plan that includes the cost of tuition. Since your spending reflects what you truly value, prioritizing your child's education may mean you will need to drive a less expensive car or modify vacation plans for a while.",
  },
  {
    title: "Look for ways to save money.",
    content:
      "Shop sales in the grocery store. Use coupons. Buy gently used products (thrift stores, Ebay, VarageSale, etc.). Check out books from the library. Downsize, if you are able. Eat more meals at home and/or take your lunch to work. You will be surprised at how much you can save by some simple lifestyle changes.",
  },
  {
    title: "Increase your income.",
    content:
      "Consider how God has gifted you or the things you are passionate about and look for opportunities to create a side business. Become a pet sitter or a freelance photographer. Perhaps the school you are considering is looking to hire part-time help.",
  },
  {
    title: "Use a 529 plan.",
    content:
      '"A 529 plan is a tax-advantaged savings plan designed to help pay for education. Originally limited to post-secondary education costs, it was expanded to cover K-12 education in 2017. Anyone can open a 529 account, but they are typically established by parents or grandparents on behalf of a child or grandchild, who is the account\'s beneficiary. In some states, the person who funds the account may be eligible for a state tax deduction for their contributions." (https://www.investopedia.com/terms/1/529plan.asp)',
    link: "https://www.investopedia.com/terms/1/529plan.asp",
  },
  {
    title: "Ask for help from friends or family members.",
    content:
      "Grandparents, other family, or beloved church members may willingly help cover the cost of tuition. These individuals often recognize the value of investing in Christian education and may be willing to contribute when given the opportunity.",
  },
  {
    title: "Find out if the school offers tuition assistance.",
    content:
      "Most private school budgets include funds for financial aid for those who qualify. Ask for the steps you need to take to apply for this assistance and then apply. The school will let you know if you will receive aid or not. Either way you will have explored the possibility.",
  },
];

export default function CanIAffordPage() {
  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Hero Banner */}
      <section className="relative w-full h-72 sm:h-80 md:h-96 bg-slate-900 overflow-hidden flex items-center justify-center">
        <Image
          src="/images/About-Distinctives-Exceptional-1280-720.jpg"
          alt="Can I Afford Christian Education"
          fill
          priority
          className="object-cover object-center opacity-35"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <span className="text-xs uppercase tracking-widest font-semibold text-purple-300 bg-purple-900/60 px-3.5 py-1 rounded-full border border-purple-400/30">
            Admissions • Affordability
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-3">
            Can I Afford a Christian Private School for My Child?
          </h1>
          <p className="text-lg sm:text-xl text-slate-200 mt-2 max-w-2xl mx-auto font-light">
            Valuable insights and practical guidance for making private Christian education possible.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-14 space-y-8">
        {/* Intro Paragraph */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm">
          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            You recognize the benefits of sending your child to a private Christian school, but you also know that your income would make such a decision challenging, at best. Before you assume that you cannot afford it, consider these valuable tips that just might make it an option for your family:
          </p>
        </div>

        {/* 7 Tip Cards */}
        <div className="space-y-5">
          {tips.map((tip, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 sm:p-8 border-l-4 border-l-[#581076] border-y border-r border-slate-200 shadow-sm space-y-3"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                {tip.title}
              </h2>
              {tip.link ? (
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  &ldquo;A 529 plan is a tax-advantaged savings plan designed to help pay for education. Originally limited to post-secondary education costs, it was expanded to cover K-12 education in 2017. Anyone can open a 529 account, but they are typically established by parents or grandparents on behalf of a child or grandchild, who is the account&apos;s beneficiary. In some states, the person who funds the account may be eligible for a state tax deduction for their contributions.&rdquo; (
                  <a
                    href={tip.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#581076] hover:underline font-medium break-all"
                  >
                    {tip.link}
                  </a>
                  )
                </p>
              ) : (
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {tip.content}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Tuition Download Link Banner */}
        <div className="flex justify-center pt-2 pb-2">
          <a
            href="/files/Fee-and-Tuition-Schedule-2026-2027.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#581076] hover:bg-[#470a60] text-white font-bold text-sm sm:text-base transition shadow-md hover:shadow-lg"
          >
            <FileText className="w-5 h-5" />
            Download 2026–2027 Fee & Tuition Schedule
          </a>
        </div>

        {/* Bottom Conclusion Callout Box */}
        <div className="bg-slate-100/90 rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-4 text-center">
          <p className="text-slate-800 text-sm sm:text-base leading-relaxed">
            Sending your child to a private school is, without a doubt, a financial commitment. It will require a sacrifice for most families, but it is achievable for those who are willing to plan and persevere. The investment in your child&apos;s education and future is worth it.
          </p>
          <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
            If you have questions about the value of such an investment for your child,{" "}
            <a
              href="mailto:info@citadelchristian.org"
              className="text-[#581076] underline hover:text-[#470a60]"
            >
              email us
            </a>{" "}
            or call{" "}
            <a
              href="tel:9798300991"
              className="text-[#581076] underline hover:text-[#470a60] font-bold"
            >
              979-830-0991
            </a>{" "}
            to set up a time to come and visit.
          </p>
        </div>
      </div>
    </div>
  );
}
