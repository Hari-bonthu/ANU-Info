import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

export function Faqs() {
  const faqItems = [
    {
      question: "How do I apply for regular UG/PG admission at ANU?",
      answer:
        "Applications for regular on-campus programs are submitted online. For undergraduate courses, admissions are generally managed through the AP state-level OAMDC counseling. For postgraduate courses, students must qualify in the APPGCET exam and participate in state-level counseling. Specialized and self-financed courses can be applied for directly on the ANU admission portal.",
    },
    {
      question: "Are there entrance examinations for engineering and pharmacy?",
      answer:
        "Yes, admissions to B.Tech (Bachelor of Technology) and B.Pharmacy courses are primarily based on the rank obtained in the Andhra Pradesh Engineering, Agriculture and Pharmacy Common Entrance Test (AP EAPCET). Students must participate in the web counseling conducted by the AP State Council of Higher Education (APSCHE) to secure seat allocation.",
    },
    {
      question: "What are the eligibility requirements for MBA and MCA courses?",
      answer:
        "Candidates seeking admission into MBA or MCA programs must possess a recognized 3-year Bachelor's degree with a minimum of 50% aggregate marks (45% for SC/ST/BC categories). Additionally, candidates must studied Mathematics at the 10th or 10+2 level (for MCA) and obtain a qualifying rank in the AP ICET entrance exam.",
    },
    {
      question: "Does ANU offer distance education programs?",
      answer:
        "Yes, Acharya Nagarjuna University Centre for Distance Education (ANUCDE) offers a wide selection of undergraduate, postgraduate, and diploma programs. The admissions for distance learning are conducted twice a year (Calendar year and Academic year batches). Interested candidates can apply online directly through the ANUCDE portal.",
    },
    {
      question: "Is Acharya Nagarjuna University recognized by UGC?",
      answer:
        "Yes, Acharya Nagarjuna University is a public state university established by Act 43 of 1976 of the Andhra Pradesh State Legislature. It is fully recognized under Section 2(f) and 12(B) of the UGC Act and accredited by the National Assessment and Accreditation Council (NAAC) with an 'A+' grade (3.46 CGPA).",
    },
    {
      question: "How do international students apply for courses?",
      answer:
        "International students must apply through the International Students Cell. Admissions are based on the candidate's academic credentials, equivalence verification of certificates, English language proficiency, and student visa approvals. A dedicated support team handles foreign national admissions.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <section>
        <h2 className="font-playfair text-3xl font-bold text-[var(--ink)]">
          Frequently Asked Questions
        </h2>
        <div className="mt-4 h-1 w-20 bg-[var(--gold)]" />

        <div className="mt-8 rounded border border-[var(--rule)] bg-white p-8 shadow-sm">
          <p className="font-serif text-lg leading-relaxed text-[#4a4235]">
            Find quick answers to common queries regarding academic cycles, online application
            pathways, accreditation, and entrance requirements at Acharya Nagarjuna University.
          </p>
        </div>
      </section>

      {/* Accordion List */}
      <section className="space-y-4">
        {faqItems.map((item, idx) => {
          const isOpen = activeIndex === idx;
          return (
            <div
              key={idx}
              className="rounded border border-[var(--rule)] bg-white overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 bg-white hover:bg-[var(--parchment)]/30 transition-colors focus:outline-none"
              >
                <span className="font-playfair font-bold text-lg text-[var(--ink)] flex items-center gap-3">
                  <HelpCircle className="h-5 w-5 text-[var(--gold)] shrink-0" />
                  {item.question}
                </span>
                {isOpen ? (
                  <ChevronUp className="h-5 w-5 text-[var(--gold)] shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[var(--gold)] shrink-0" />
                )}
              </button>

              {/* Collapsible content with transition helper */}
              <div
                className={`transition-all duration-300 ease-in-out border-t border-[var(--rule)]/40 ${
                  isOpen ? "max-h-[500px] opacity-100 p-6" : "max-h-0 opacity-0 pointer-events-none"
                }`}
              >
                <p className="font-serif text-sm leading-relaxed text-[#4a4235]">{item.answer}</p>
              </div>
            </div>
          );
        })}
      </section>

      {/* Escalation callout */}
      <section className="rounded border border-[var(--rule)] bg-[var(--parchment-dark)] p-8 text-center">
        <h3 className="font-playfair text-xl font-bold text-[var(--ink)]">
          Have a different question?
        </h3>
        <p className="font-serif mt-2 text-sm text-[var(--muted)] max-w-xl mx-auto">
          If you cannot find the answer to your inquiry here, please contact the Directorate of
          Admissions helpline or write directly to our helpdesk.
        </p>
      </section>
    </div>
  );
}
