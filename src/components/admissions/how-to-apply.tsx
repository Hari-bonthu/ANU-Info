import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function HowToApply() {
  const steps = [
    {
      title: "Identify Your Program",
      description:
        "Review our program offerings, verify eligibility criteria, and ensure you meet the academic requirements for your chosen course.",
    },
    {
      title: "Register on the Portal",
      description:
        "Create an account on the Directorate of Admissions portal or the State Common Entrance Test portal (APPECET, ICET, etc.) depending on your program.",
    },
    {
      title: "Submit Application & Documents",
      description:
        "Fill out the online application form and upload scanned copies of your academic transcripts, caste certificate (if applicable), and passport-size photographs.",
    },
    {
      title: "Pay Application Fee",
      description:
        "Complete the process by paying the required application fee via the secure payment gateway (Net Banking, Credit/Debit Card, or UPI).",
    },
    {
      title: "Entrance Test & Counseling",
      description:
        "Download your hall ticket, appear for the entrance examination, and participate in the web counseling phase to secure your seat.",
    },
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section>
        <h2 className="font-playfair text-3xl font-bold text-[var(--ink)]">How to Apply</h2>
        <div className="mt-4 h-1 w-20 bg-[var(--gold)]" />

        <div className="mt-8">
          <p className="font-serif text-lg leading-relaxed text-[#4a4235]">
            The application process at Acharya Nagarjuna University is fully digitized to ensure
            transparency and efficiency. Depending on your level of study, admission is either
            through state-level common entrance tests or university-specific admission drives.
          </p>
        </div>
      </section>

      <section>
        <div className="rounded border border-[var(--rule)] bg-white p-8 shadow-sm">
          <h3 className="font-playfair text-2xl font-bold text-[var(--ink)]">Step-by-Step Guide</h3>
          <div className="mt-8 space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex gap-6">
                {/* Connector Line */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-[1.15rem] top-10 bottom-[-2rem] w-px bg-[var(--rule)]" />
                )}

                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--gold)] text-white shadow-sm">
                  <span className="font-playfair font-bold">{index + 1}</span>
                </div>

                <div className="pt-2">
                  <h4 className="font-playfair text-xl font-bold text-[var(--ink)]">
                    {step.title}
                  </h4>
                  <p className="font-serif mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded border border-[var(--rule)] bg-[var(--parchment-dark)] p-8">
        <h3 className="font-playfair text-xl font-bold text-[var(--ink)]">Ready to Begin?</h3>
        <p className="font-serif mt-2 text-sm text-[var(--muted)]">
          Ensure you have all documents ready in digital format before starting your application.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <button className="flex items-center gap-2 rounded bg-[var(--ink)] px-6 py-3 font-serif text-sm font-semibold text-white transition hover:bg-[var(--ink-mid)]">
            Open Admission Portal
            <ArrowRight className="h-4 w-4" />
          </button>
          <button className="flex items-center gap-2 rounded border border-[var(--rule)] bg-white px-6 py-3 font-serif text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--parchment)]">
            Download Prospectus
          </button>
        </div>
      </section>
    </div>
  );
}
