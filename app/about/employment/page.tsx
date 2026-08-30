import React from "react";
import Image from "next/image";
import { Check, Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Employment Opportunities | Citadel Christian School",
  description:
    "We are recruiting at Citadel Christian School. Learn about teaching positions, requirements, non-discrimination clause, and download job descriptions and applications.",
};

const jobApplications = [
  {
    name: "Teacher",
    pdfLink: "/files/Application-Teacher-Form.pdf",
    docxLink: "/files/Application-Teacher-Form-fillable.docx",
  },
  {
    name: "Substitute Teacher",
    docxLink: "/files/Application-Substitute-Teaching.docx",
  },
  {
    name: "Classified Personnel",
    pdfLink: "/files/Classified-Personnel-Application.pdf",
  },
];

const jobDescriptions = [
  {
    name: "Teacher",
    pdfLink: "/files/Job-Description-Teacher.pdf",
  },
  {
    name: "Principal",
    pdfLink: "/files/Principal-at-CCS.pdf",
  },
  {
    name: "After School Coordinator",
    pdfLink: "/files/Job-Description-After-School-Coordinator.pdf",
  },
  {
    name: "Office Manager",
    pdfLink: "/files/Office-Manager.pdf",
  },
  {
    name: "Business Manager",
    pdfLink: "/files/Business-Manager-1.pdf",
  },
  {
    name: "Development Director",
    pdfLink: "/files/Development-Director-Job-Description-1.pdf",
  },
  {
    name: "Athletic Director",
    pdfLink: "/files/Athletic-Director-job-description.pdf",
  },
];

export default function EmploymentPage() {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Page Header Banner */}
      <section className="relative w-full h-72 sm:h-80 md:h-96 bg-slate-900 overflow-hidden flex items-center justify-center">
        <Image
          src="/images/About-Our-Story-1280x720-1.jpg"
          alt="Citadel Christian School Faculty and Staff"
          fill
          priority
          className="object-cover object-center opacity-35"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <span className="text-xs uppercase tracking-widest font-semibold text-purple-300 bg-purple-900/60 px-3.5 py-1 rounded-full border border-purple-400/30">
            About Us • Careers
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-3 uppercase">
            Employment Opportunities
          </h1>
          <p className="text-lg sm:text-xl text-slate-200 mt-2 max-w-2xl mx-auto font-light">
            Join our mission of cultivating wisdom, virtue, and academic excellence.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-14 space-y-12">
        {/* Section 1: We Are Recruiting */}
        <section className="space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#581076] tracking-tight">
            We Are Recruiting
          </h2>

          <p className="font-bold text-slate-900 text-base sm:text-lg">
            Citadel Christian School is a great place to work!
          </p>

          <p className="font-medium text-slate-800">
            Interested in applying for a teaching position?
          </p>

          <p>
            All teachers are responsible to instruct children according to a biblical worldview with classical methodology, to reflect the purpose of the school to honor Christ in every class and in every activity, and to lead a mature Christian life that serves as a role model for students and colleagues. Humility, patience, honor, fortitude, and a passion for learning are the character qualities Citadel is looking for in its teachers.
          </p>

          <p>
            Salary is dependent on years of classroom experience and degree earned. A bachelor&apos;s degree is required, and an understanding of classical pedagogy is preferred.
          </p>

          <p>
            For all positions a complete job description can be downloaded from the link below. Interested applicants should send a resume, a cover letter, and a completed application to{" "}
            <a
              href="mailto:info@citadelchristian.org"
              className="text-[#581076] hover:underline font-medium"
            >
              info@citadelchristian.org
            </a>
            . Applications can also be found below.
          </p>

          <p>
            <strong className="text-slate-900 font-semibold">Substitute Teachers</strong> – Please complete the Substitute Teacher application below
          </p>

          <div className="pt-2">
            <p className="font-bold text-slate-900">
              Positions for the 26-27 School Year:
            </p>
            <ul className="list-disc pl-6 mt-1 space-y-1 text-slate-700">
              <li>Development Director</li>
            </ul>
          </div>

          <p className="pt-1">
            To be considered for a position at Citadel, please complete the appropriate application below and submit it to{" "}
            <a
              href="mailto:info@citadelchristian.org"
              className="text-[#581076] hover:underline font-medium"
            >
              info@citadelchristian.org
            </a>
          </p>
        </section>

        {/* Section 2: Non-Discrimination Clause for Hiring Employees */}
        <section className="space-y-4 pt-8 border-t border-slate-100 text-slate-700 text-sm sm:text-base leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#581076] tracking-tight">
            Non-Discrimination Clause for Hiring Employees
          </h2>
          <p>
            Employment at Citadel Christian School is open to qualified individuals who are Christians of good character, without regard or reference to race, gender, national or ethnic origin, color, age, or disability. Citadel Christian School is a religious educational ministry, permitted to discriminate on the basis of religion. All prospective and current employees must agree with Citadel Christian School’s mission statement, and they must be willing to conduct their lives in conformity with the school’s statement of faith and the school’s declaration and agreement to ethical and moral integrity.
          </p>
        </section>

        {/* Divider */}
        <hr className="border-slate-200 my-8" />

        {/* Section 3: Job Applications & Job Descriptions */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 pt-2">
          {/* Left Column: Job Applications */}
          <div>
            <h3 className="text-2xl font-bold text-[#581076] mb-6">
              Job Applications
            </h3>
            <ul className="space-y-4">
              {jobApplications.map((app, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#581076] font-bold text-lg leading-none mt-0.5">
                    ✓
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-slate-900 font-medium text-base">
                      {app.name}
                    </span>
                    <div className="inline-flex items-center gap-2">
                      {app.pdfLink && (
                        <a
                          href={app.pdfLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs px-2.5 py-0.5 rounded bg-purple-50 text-[#581076] hover:bg-purple-100 font-medium transition"
                        >
                          PDF
                        </a>
                      )}
                      {app.docxLink && (
                        <a
                          href={app.docxLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 hover:bg-slate-200 font-medium transition"
                        >
                          Word
                        </a>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Job Descriptions */}
          <div>
            <h3 className="text-2xl font-bold text-[#581076] mb-6">
              Job Descriptions
            </h3>
            <ul className="space-y-3.5">
              {jobDescriptions.map((desc, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="text-[#581076] font-bold text-lg leading-none">
                    ✓
                  </span>
                  <a
                    href={desc.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-900 hover:text-[#581076] text-base transition hover:underline"
                  >
                    {desc.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
