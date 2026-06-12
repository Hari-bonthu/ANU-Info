import React from "react";
import { GraduationCap, BookOpen } from "lucide-react";

export function AdmissionsOverview() {
  const stats = [
    { value: "150+", label: "Programs", note: "Across UG, PG & PhD" },
    { value: "50+", label: "Countries", note: "International students" },
    { value: "12,000+", label: "Students", note: "On-campus enrollment" },
    { value: "A+", label: "NAAC Grade", note: "3.46 CGPA" },
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section>
        <h2 className="font-playfair text-3xl font-bold text-[var(--ink)]">
          Welcome to Admissions
        </h2>
        <div className="mt-4 h-1 w-20 bg-[var(--gold)]" />

        <div className="mt-8 rounded border border-[var(--rule)] bg-white p-8 shadow-sm">
          <p className="font-serif text-lg leading-relaxed text-[#4a4235]">
            Acharya Nagarjuna University invites applications from bright, motivated individuals
            ready to engage in rigorous academic programs. Our admissions process is designed to
            identify students who will thrive in our research-oriented, inclusive environment.
          </p>
          <p className="font-serif mt-4 text-lg leading-relaxed text-[#4a4235]">
            Whether you are pursuing an undergraduate degree, a specialized postgraduate program, or
            doctoral research, ANU offers the resources, faculty expertise, and campus life to
            support your academic journey.
          </p>
        </div>
      </section>

      <section>
        <h3 className="font-playfair text-2xl font-bold text-[var(--ink)]">
          University at a Glance
        </h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded border border-[var(--rule)] bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)]" />
              <div className="font-playfair text-4xl font-bold text-[var(--ink)]">{stat.value}</div>
              <div className="font-serif mt-2 text-xs font-bold uppercase tracking-widest text-[var(--muted)]">
                {stat.label}
              </div>
              <div className="font-garamond mt-1 text-sm italic text-[var(--gold)]">
                {stat.note}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="font-playfair text-2xl font-bold text-[var(--ink)]">Key Admission Areas</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded border border-[var(--rule)] bg-[var(--ink)] bg-gradient-to-br from-[#0a1628] to-[#12213a] p-8 text-white">
            <GraduationCap className="mb-4 h-8 w-8 text-[var(--gold)]" />
            <h4 className="font-playfair text-xl font-bold">Undergraduate & Postgraduate</h4>
            <p className="font-serif mt-3 text-sm leading-relaxed text-white/70">
              Direct admissions through central counseling (OAMDC, APPGCET) and university-level
              entrance tests. Programs cover Arts, Sciences, Engineering, Pharmacy, and Law.
            </p>
          </div>

          <div className="rounded border border-[var(--rule)] bg-white p-8">
            <BookOpen className="mb-4 h-8 w-8 text-[var(--gold)]" />
            <h4 className="font-playfair text-xl font-bold text-[var(--ink)]">
              Research (M.Phil & PhD)
            </h4>
            <p className="font-serif mt-3 text-sm leading-relaxed text-[var(--muted)]">
              Admissions to research programs are conducted via APRCET and university interviews,
              focusing on candidates with strong foundational knowledge and research aptitude.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
