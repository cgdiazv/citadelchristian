"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, Clock, Phone, Mail, CheckCircle2 } from "lucide-react";

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

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    selectedGrades: [] as string[],
    message: "",
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || "Failed to send message.");
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error("Error submitting contact form:", err);
      setErrorMessage(
        err.message || "An unexpected error occurred. Please try again or call our office."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Page Header Banner */}
      <section className="relative w-full h-72 sm:h-80 md:h-96 bg-slate-900 overflow-hidden flex items-center justify-center">
        <Image
          src="/images/About-Our-Story-1280x720-1.jpg"
          alt="Contact Citadel Christian School"
          fill
          priority
          className="object-cover object-center opacity-35"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <span className="text-xs uppercase tracking-widest font-semibold text-purple-300 bg-purple-900/60 px-3.5 py-1 rounded-full border border-purple-400/30">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-3 uppercase">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl text-slate-200 mt-2 max-w-2xl mx-auto font-light">
            We look forward to connecting with your family.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-4 space-y-8 text-slate-700">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="w-5 h-5 text-[#581076]" />
              </div>
              <div className="space-y-0.5 text-sm sm:text-base">
                <h2 className="font-bold text-slate-900 text-base sm:text-lg">Address</h2>
                <p className="text-slate-600">2111 S Blue Bell Rd</p>
                <p className="text-slate-600">Brenham, TX, 77833</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Clock className="w-5 h-5 text-[#581076]" />
              </div>
              <div className="space-y-0.5 text-sm sm:text-base">
                <h2 className="font-bold text-slate-900 text-base sm:text-lg">Working Hours</h2>
                <p className="text-slate-600">Monday to Friday</p>
                <p className="text-slate-600">8:00am - 4:00pm</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Phone className="w-5 h-5 text-[#581076]" />
              </div>
              <div className="space-y-0.5 text-sm sm:text-base">
                <h2 className="font-bold text-slate-900 text-base sm:text-lg">Phone</h2>
                <a
                  href="tel:9798300991"
                  className="text-slate-600 hover:text-[#581076] transition block"
                >
                  979.830.0991
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Mail className="w-5 h-5 text-[#581076]" />
              </div>
              <div className="space-y-0.5 text-sm sm:text-base">
                <h2 className="font-bold text-slate-900 text-base sm:text-lg">Email</h2>
                <a
                  href="mailto:info@citadelchristian.org"
                  className="text-slate-600 hover:text-[#581076] transition block"
                >
                  info@citadelchristian.org
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Request More Information Form */}
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#3d4f5d] text-center mb-4">
              Request More Information
            </h2>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-purple-50 border border-purple-200 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#581076] text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Thank You, {formData.firstName}!
                </h3>
                <p className="text-slate-700 text-sm max-w-md mx-auto">
                  Your message has been sent successfully. A member of our administration will be in touch with you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded bg-[#581076] text-white text-xs font-semibold hover:bg-[#470a60] transition cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
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
                      className="w-full px-4 py-3 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#581076]/40 focus:border-[#581076] text-sm text-slate-800 placeholder-slate-400 bg-white"
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
                      className="w-full px-4 py-3 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#581076]/40 focus:border-[#581076] text-sm text-slate-800 placeholder-slate-400 bg-white"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#581076]/40 focus:border-[#581076] text-sm text-slate-800 placeholder-slate-400 bg-white"
                  />
                </div>

                {/* Grade(s) of Interest */}
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

                {/* Message */}
                <div>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Message"
                    className="w-full px-4 py-3 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#581076]/40 focus:border-[#581076] text-sm text-slate-800 placeholder-slate-400 bg-white resize-y"
                  />
                </div>

                {/* Error Alert */}
                {errorMessage && (
                  <div className="p-3.5 rounded bg-red-50 border border-red-200 text-red-700 text-sm">
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
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    "SEND MESSAGE"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
