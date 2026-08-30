"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, CheckCircle2, Calendar } from "lucide-react";

const gradesList = [
  "PreK",
  "K",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
];

export default function ScheduleATourPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    selectedGrades: [] as string[],
    preferredDate: "",
    preferredTime: "",
    referralSource: "Online Search",
  });

  const handleGradeToggle = (grade: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedGrades: prev.selectedGrades.includes(grade)
        ? prev.selectedGrades.filter((g) => g !== grade)
        : [...prev.selectedGrades, grade],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/schedule-tour", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || "Failed to submit tour request.");
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error("Error submitting tour request:", err);
      setErrorMessage(
        err.message || "An unexpected error occurred. Please try again or call our office."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Page Header Banner */}
      <section className="relative w-full h-72 sm:h-80 md:h-96 bg-slate-900 overflow-hidden flex items-center justify-center">
        <Image
          src="/images/LP-Citadel-Schedule-a-Tour-1.webp"
          alt="Schedule a Tour at Citadel Christian School"
          fill
          priority
          className="object-cover object-center opacity-40"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <span className="text-xs uppercase tracking-widest font-semibold text-purple-300 bg-purple-900/60 px-3.5 py-1 rounded-full border border-purple-400/30">
            Admissions
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-3 uppercase">
            Schedule A Tour
          </h1>
          <p className="text-lg sm:text-xl text-slate-200 mt-2 max-w-2xl mx-auto font-light">
            Experience our classrooms, culture, and community in Brenham, TX.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Form & Intro Area */}
          <div className="lg:col-span-8 space-y-10">
            {/* Intro Copy */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#581076] tracking-tight">
                Come and visit Citadel Christian School!
              </h2>

              <p>
                Visiting is one of the best ways to know if Citadel Christian School is right for your child. We look forward to bringing you into classrooms so that you can experience our joyful learning environment first hand.
              </p>

              <p>
                See for yourself how students benefit from small class sizes and individual attention.
              </p>

              <div className="space-y-3 pt-2">
                <h3 className="text-xl font-bold text-slate-900">
                  During your tour, you will:
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  <li>Step into classrooms and observe student work</li>
                  <li>See our gym, library, and other facilities</li>
                  <li>Meet some of our committed and caring teachers</li>
                  <li>Have time to ask questions about academics, student life, and more.</li>
                </ul>
              </div>

              <p className="pt-2 text-slate-600">
                Please complete the form to schedule a tour with us. Our admissions office will get in touch with you to confirm the details of your visit. We look forward to sharing CCS with you!
              </p>
            </div>

            {/* Tour Request Form */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-2xl font-bold text-[#581076]">
                Complete the form to Request a Tour
              </h3>

              {submitted ? (
                <div className="p-8 rounded-xl bg-purple-50 border border-purple-200 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#581076] text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">
                    Thank You, {formData.firstName}!
                  </h4>
                  <p className="text-slate-700 text-sm max-w-md mx-auto">
                    We have received your campus tour request. Our admissions team will contact you at{" "}
                    <strong>{formData.email}</strong> or <strong>{formData.phone}</strong> to confirm your visit date and time.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-lg bg-[#581076] text-white text-xs font-semibold hover:bg-[#470a60] transition"
                  >
                    Submit Another Tour Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-900 mb-1.5">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                        placeholder="First Name"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#581076]/40 focus:border-[#581076] text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-900 mb-1.5">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        placeholder="Last Name"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#581076]/40 focus:border-[#581076] text-sm"
                      />
                    </div>
                  </div>

                  {/* Email & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-900 mb-1.5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="Email"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#581076]/40 focus:border-[#581076] text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-900 mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="Phone Number"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#581076]/40 focus:border-[#581076] text-sm"
                      />
                    </div>
                  </div>

                  {/* Grade(s) of Interest Checkboxes */}
                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-2">
                      Grade(s) of Interest
                    </label>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-700">
                      {gradesList.map((grade) => (
                        <label
                          key={grade}
                          className="inline-flex items-center gap-1.5 cursor-pointer select-none"
                        >
                          <input
                            type="checkbox"
                            checked={formData.selectedGrades.includes(grade)}
                            onChange={() => handleGradeToggle(grade)}
                            className="w-4 h-4 rounded border-slate-300 text-[#581076] focus:ring-[#581076]"
                          />
                          <span>{grade}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Preferred Date & Preferred Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-900 mb-1.5">
                        Preferred Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.preferredDate}
                        onChange={(e) =>
                          setFormData({ ...formData, preferredDate: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#581076]/40 focus:border-[#581076] text-sm bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-900 mb-1.5">
                        Preferred Time <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="time"
                        required
                        value={formData.preferredTime}
                        onChange={(e) =>
                          setFormData({ ...formData, preferredTime: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#581076]/40 focus:border-[#581076] text-sm bg-white"
                      />
                    </div>
                  </div>

                  {/* How did you first learn about CCS? */}
                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-1.5">
                      How did you first learn about Citadel Christian School?{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.referralSource}
                      onChange={(e) =>
                        setFormData({ ...formData, referralSource: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#581076]/40 focus:border-[#581076] text-sm bg-white"
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

                  {/* Error Message Alert */}
                  {errorMessage && (
                    <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-lg bg-[#581076] hover:bg-[#470a60] disabled:bg-purple-400 text-white font-extrabold text-sm sm:text-base tracking-wider uppercase transition shadow-md hover:shadow-lg cursor-pointer disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      "RSVP NOW"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Quick Details Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Campus Info Card */}
            <div className="bg-[#3d4f5d] text-white rounded-2xl p-7 shadow-sm space-y-5">
              <h3 className="text-xl font-bold">Campus Location & Hours</h3>

              <div className="space-y-4 text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-purple-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Citadel Christian School</strong>
                    2111 S Blue Bell Rd<br />Brenham, TX 77833
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-purple-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Office Hours</strong>
                    8:00am - 4:00pm (Monday – Friday)
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-purple-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Call Us</strong>
                    <a href="tel:9798300991" className="hover:text-purple-200">
                      (979) 830-0991
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-purple-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Email Admissions</strong>
                    <a
                      href="mailto:Info@citadelchristian.org"
                      className="hover:text-purple-200"
                    >
                      Info@citadelchristian.org
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* What to Expect Card */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-slate-900">What to Expect on Your Visit</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#581076] flex-shrink-0 mt-0.5" />
                  <span>30–45 minute guided walkthrough of classrooms and facilities.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#581076] flex-shrink-0 mt-0.5" />
                  <span>Observe active classical teaching and student discussions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#581076] flex-shrink-0 mt-0.5" />
                  <span>One-on-one conversation with our administration.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#581076] flex-shrink-0 mt-0.5" />
                  <span>Receive a personalized admissions packet and curriculum guides.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
