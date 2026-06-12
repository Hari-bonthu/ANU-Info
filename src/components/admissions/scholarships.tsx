import React from "react";
import { Award, FileText, Globe } from "lucide-react";

export function Scholarships() {
  const scholarships = [
    {
      icon: Award,
      title: "State Government Schemes",
      description:
        "Jagananna Vidya Deevena (JVD) and Vasathi Deevena covering full tuition fees and hostel/mess charges for eligible SC/ST/BC/EBC/Minority students of Andhra Pradesh.",
    },
    {
      icon: Globe,
      title: "National Fellowship Programs",
      description:
        "UGC NET/JRF, CSIR, and DST-INSPIRE fellowships specifically for Ph.D. scholars pursuing advanced research in sciences and humanities.",
    },
    {
      icon: FileText,
      title: "University Merit Scholarships",
      description:
        "Endowment scholarships and merit-based fee waivers offered by Acharya Nagarjuna University for university rank holders and exceptional performers.",
    },
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section>
        <h2 className="font-playfair text-3xl font-bold text-[var(--ink)]">
          Scholarships & Financial Aid
        </h2>
        <div className="mt-4 h-1 w-20 bg-[var(--gold)]" />

        <div className="mt-8 rounded border border-[var(--rule)] bg-white p-8 shadow-sm">
          <p className="font-serif text-lg leading-relaxed text-[#4a4235]">
            Acharya Nagarjuna University believes that financial constraints should never be a
            barrier to quality education. We facilitate various state, national, and
            university-level scholarship schemes to support meritorious and economically
            disadvantaged students.
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {scholarships.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="group relative rounded border border-[var(--rule)] bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--gold)] opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--parchment)] text-[var(--gold)]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-[var(--ink)]">{item.title}</h3>
              <p className="font-serif mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {item.description}
              </p>
            </div>
          );
        })}
      </section>

      <section className="rounded border border-[var(--rule)] bg-[var(--ink)] bg-gradient-to-br from-[#0a1628] to-[#12213a] p-8 text-white">
        <h3 className="font-playfair text-2xl font-bold">How to Claim</h3>
        <p className="font-serif mt-2 text-white/80">
          Process for applying to State Government (JVD) Scholarships:
        </p>
        <ol className="font-serif mt-6 list-inside list-decimal space-y-3 text-sm leading-relaxed text-white/90">
          <li>Ensure your Aadhaar is linked to your active bank account.</li>
          <li>
            Possess a valid Income Certificate and Caste Certificate issued by the AP Government.
          </li>
          <li>
            Submit these details to the College Office / Scholarship Cell during the admission
            confirmation process.
          </li>
          <li>Complete the biometric authentication (Navasakam) as notified by the university.</li>
        </ol>
      </section>
    </div>
  );
}
