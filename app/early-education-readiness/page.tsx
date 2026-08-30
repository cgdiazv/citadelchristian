"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, CheckCircle2, FileText, ArrowRight, Calendar } from "lucide-react";

export default function EarlyEducationReadinessPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    referralSource: "Online Search",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/early-readiness", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || "Failed to submit request.");
      }

      setSubmitted(true);

      // Trigger automatic browser download of the PDF
      const downloadPath = data.downloadUrl || "/files/Rising-1st-Grade-Summer-Plan.pdf";
      const link = document.createElement("a");
      link.href = downloadPath;
      link.setAttribute("download", "Early-Education-Readiness-Checklist.pdf");
      link.setAttribute("target", "_blank");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err: any) {
      console.error("Error submitting early readiness form:", err);
      setErrorMessage(
        err.message || "An unexpected error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Booklets Mockup Image */}
          <div className="md:col-span-4 flex justify-center md:sticky md:top-28">
            <div className="relative w-72 sm:w-80 md:w-full aspect-[4/5] max-w-sm drop-shadow-2xl">
              <Image
                src="/images/Citadel-Combined-Mockup.webp"
                alt="Early Education Readiness Checklist Mockup"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Column: Copy & Form */}
          <div className="md:col-span-8 space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
            {/* Section 1: Intro */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#581076] tracking-tight">
                Is your child ready for school?
              </h1>

              <p className="text-slate-700 font-medium">
                Starting school is a huge milestone for your child.
              </p>

              <p className="text-slate-600">
                Are you providing your children with experiences and opportunities to learn and practice new skills so they are prepared?
              </p>

              <p className="text-slate-600">
                Download our free printable checklist. We&apos;ve designed this checklist to help parents evaluate several key areas of development necessary for pre-kindergarten and kindergarten success.
              </p>
            </div>

            {/* Section 2: The checklist includes */}
            <div className="space-y-3 pt-2">
              <h2 className="text-2xl font-bold text-[#581076]">
                The checklist includes:
              </h2>

              <ul className="list-disc pl-6 space-y-1 text-slate-600">
                <li>Pre-Kindergarten Readiness Skills</li>
                <li>Kindergarten Readiness Skills</li>
              </ul>

              <p className="text-slate-600 pt-1">
                Feel free to share this checklist to a family or friend who might find it helpful!
              </p>
            </div>

            {/* Section 3: Form */}
            <div className="pt-4 border-t border-slate-100 space-y-6">
              <h2 className="text-2xl font-bold text-[#581076]">
                Complete the form to download
              </h2>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-purple-50 border border-purple-200 text-center space-y-5">
                  <div className="w-14 h-14 rounded-full bg-[#581076] text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Thank You, {formData.firstName}!
                  </h3>
                  <p className="text-slate-700 text-sm max-w-md mx-auto">
                    Your Early Education Readiness checklist download has started. If the download didn&apos;t start automatically, please click below.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                    <a
                      href="/files/Rising-1st-Grade-Summer-Plan.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#581076] hover:bg-[#470a60] text-white font-bold text-sm transition shadow-md hover:shadow-lg"
                    >
                      <Download className="w-4 h-4" />
                      Download PDF Again
                    </a>
                    <Link
                      href="/admissions/schedule-a-tour"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white border border-[#581076] text-[#581076] hover:bg-[#581076]/10 font-bold text-sm transition shadow-sm"
                    >
                      <Calendar className="w-4 h-4" />
                      Schedule a Campus Tour
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                        placeholder="First Name"
                        className="w-full px-4 py-3 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#581076]/40 focus:border-[#581076] text-sm text-slate-800 placeholder-slate-400 bg-white shadow-xs"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        placeholder="Last Name"
                        className="w-full px-4 py-3 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#581076]/40 focus:border-[#581076] text-sm text-slate-800 placeholder-slate-400 bg-white shadow-xs"
                      />
                    </div>
                  </div>

                  {/* Email & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="Email"
                        className="w-full px-4 py-3 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#581076]/40 focus:border-[#581076] text-sm text-slate-800 placeholder-slate-400 bg-white shadow-xs"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="Phone Number"
                        className="w-full px-4 py-3 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#581076]/40 focus:border-[#581076] text-sm text-slate-800 placeholder-slate-400 bg-white shadow-xs"
                      />
                    </div>
                  </div>

                  {/* How did you first learn about CCS? */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      How did you first learn about Citadel Christian School?
                    </label>
                    <select
                      value={formData.referralSource}
                      onChange={(e) =>
                        setFormData({ ...formData, referralSource: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#581076]/40 focus:border-[#581076] text-sm text-slate-800 bg-white shadow-xs"
                    >
                      <option value="Online Search">Online Search</option>
                      <option value="Word of Mouth / Friend">Word of Mouth / Friend</option>
                      <option value="Social Media (Facebook / Instagram)">
                        Social Media (Facebook / Instagram)
                      </option>
                      <option value="Local Church">Local Church</option>
                      <option value="Drive By / Campus Signage">
                        Drive By / Campus Signage
                      </option>
                      <option value="Community Event">Community Event</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Error Alert */}
                  {errorMessage && (
                    <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded bg-[#581076] hover:bg-[#470a60] disabled:bg-purple-400 text-white font-extrabold text-sm sm:text-base tracking-wider uppercase transition shadow-md hover:shadow-lg cursor-pointer disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Processing...</span>
                      </>
                    ) : (
                      "DOWNLOAD NOW"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
