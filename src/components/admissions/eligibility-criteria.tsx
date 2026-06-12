import React from "react";
import { BookOpen, FileCheck, CheckCircle } from "lucide-react";

export function EligibilityCriteria() {
  const criteria = [
    {
      course: "B.Tech (Bachelor of Technology)",
      specializations: "CSE, AI & ML, Data Science, Cyber Security, ECE, EEE, Mechanical, Civil",
      qualification:
        "Passed 10+2 (Intermediate) examination with Physics, Chemistry, and Mathematics (PCM) as core subjects.",
      minMarks:
        "Minimum 45% aggregate marks (40% for reserved categories SC/ST/BC) in PCM subjects.",
      pathway: "Qualifying rank in AP EAPCET entrance exam followed by web counseling.",
    },
    {
      course: "MBA (Master of Business Administration)",
      specializations:
        "General, Finance, HR, Marketing, International Business, Hospital Administration",
      qualification:
        "Bachelor's degree of minimum 3 years duration in any discipline (except BFA/BOL). Must have studied Mathematics at 10th or 12th level.",
      minMarks:
        "Minimum 50% aggregate marks (45% for SC/ST/BC categories) in the qualifying degree.",
      pathway: "Valid rank in AP ICET entrance exam.",
    },
    {
      course: "MCA (Master of Computer Applications)",
      specializations: "Software Development, Systems Management, Computing Technologies",
      qualification:
        "Bachelor's degree of minimum 3 years duration in any discipline. Must have studied Mathematics at 10+2 or graduation level.",
      minMarks:
        "Minimum 50% aggregate marks (45% for SC/ST/BC categories) in the qualifying degree.",
      pathway: "Valid rank in AP ICET entrance exam.",
    },
    {
      course: "B.Pharmacy (Bachelor of Pharmacy)",
      specializations: "Pharmaceutical Chemistry, Pharmaceutics, Pharmacology, Analysis",
      qualification:
        "Passed 10+2 examination with Physics, Chemistry, and Mathematics or Biology (PCM/PCB) from a recognized board.",
      minMarks: "Passed qualifying 10+2 board exam with core science subjects.",
      pathway: "Valid rank in AP EAPCET science stream counseling.",
    },
    {
      course: "B.Arch (Bachelor of Architecture)",
      specializations: "Architecture Design, Town Planning, Built Environment",
      qualification:
        "Passed 10+2 examination with Physics, Chemistry, and Mathematics as mandatory subjects.",
      minMarks: "Minimum 50% aggregate marks in the qualifying examination.",
      pathway: "Valid NATA score or rank in JEE Main Paper-II.",
    },
    {
      course: "M.Sc (Master of Science)",
      specializations:
        "Physics, Chemistry, Mathematics, Statistics, Biotechnology, Botany, Zoology, Environmental Science",
      qualification:
        "B.Sc degree in relevant subjects (e.g. Physics & Maths for M.Sc Physics; Chemistry for M.Sc Chemistry).",
      minMarks: "Minimum 50% marks in the relevant B.Sc major/optional subjects.",
      pathway: "Valid rank in APPGCET state counseling.",
    },
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section>
        <h2 className="font-playfair text-3xl font-bold text-[var(--ink)]">
          Programme Eligibility Criteria
        </h2>
        <div className="mt-4 h-1 w-20 bg-[var(--gold)]" />

        <div className="mt-8 rounded border border-[var(--rule)] bg-white p-8 shadow-sm">
          <p className="font-serif text-lg leading-relaxed text-[#4a4235]">
            Admissions to various constituent colleges at Acharya Nagarjuna University follow
            statutory guidelines set by the Government of Andhra Pradesh and the UGC. Please check
            the specific academic requirements and entrance test requirements for your chosen course
            below.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        {criteria.map((item, index) => (
          <div
            key={index}
            className="rounded border border-[var(--rule)] bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--parchment)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--gold)]">
                  <BookOpen className="h-3.5 w-3.5" />
                  {item.course}
                </span>
                <p className="font-serif mt-2 text-sm italic text-[var(--muted)]">
                  Specializations: {item.specializations}
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded border border-[var(--rule)]/60 bg-[var(--parchment)]/30 p-4">
                <h4 className="flex items-center gap-2 font-playfair text-sm font-bold text-[var(--ink)]">
                  <FileCheck className="h-4 w-4 text-[var(--gold)]" />
                  Qualifying Exam
                </h4>
                <p className="font-serif mt-2 text-xs leading-relaxed text-[#4a4235]">
                  {item.qualification}
                </p>
              </div>

              <div className="rounded border border-[var(--rule)]/60 bg-[var(--parchment)]/30 p-4">
                <h4 className="flex items-center gap-2 font-playfair text-sm font-bold text-[var(--ink)]">
                  <CheckCircle className="h-4 w-4 text-[var(--gold)]" />
                  Minimum Marks
                </h4>
                <p className="font-serif mt-2 text-xs leading-relaxed text-[#4a4235]">
                  {item.minMarks}
                </p>
              </div>

              <div className="rounded border border-[var(--rule)]/60 bg-[var(--parchment)]/30 p-4">
                <h4 className="flex items-center gap-2 font-playfair text-sm font-bold text-[var(--ink)]">
                  <CheckCircle className="h-4 w-4 text-[var(--gold)]" />
                  Admission Channel
                </h4>
                <p className="font-serif mt-2 text-xs leading-relaxed text-[#4a4235]">
                  {item.pathway}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="rounded border border-[var(--rule)] bg-[var(--ink)] bg-gradient-to-br from-[#0a1628] to-[#12213a] p-8 text-white">
        <h3 className="font-playfair text-2xl font-bold">Important Note on Local Status</h3>
        <p className="font-serif mt-2 text-white/80">
          Candidates must satisfy local/non-local status requirements as per the Andhra Pradesh
          Educational Institutions (Regulation of Admissions) Order, 1974. Scanned Study
          Certificates from class 6 to Intermediate (or graduation for PG) are required to establish
          local status.
        </p>
      </section>
    </div>
  );
}
