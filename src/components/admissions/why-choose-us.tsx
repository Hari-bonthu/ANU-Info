import React from "react";
import { Award, BookOpen, GraduationCap, Microscope, ShieldCheck, Users } from "lucide-react";

export function WhyChooseUs() {
  const highlights = [
    {
      icon: Award,
      title: "NAAC 'A+' Grade Accreditation",
      description:
        "Recognised by the National Assessment and Accreditation Council with an A+ Grade (3.46 CGPA), ranking among the top state public universities in India.",
    },
    {
      icon: Microscope,
      title: "Research & Innovation Focus",
      description:
        "Home to 100+ research centres, advanced labs, and state-funded projects. Our faculty and scholars hold 66+ patents and publish thousands of papers annually.",
    },
    {
      icon: GraduationCap,
      title: "Diverse Programme Portfolio",
      description:
        "Offering 150+ undergraduate, postgraduate, and doctoral programmes across six constituent colleges: Engineering, Sciences, Arts, Pharmacy, Architecture, and Sports.",
    },
    {
      icon: Users,
      title: "Lively Campus Ecosystem",
      description:
        "A 300-acre residential campus hosting 5,000+ on-campus students, modern hostels, sports complexes, and a vibrant community of clubs and societies.",
    },
    {
      icon: ShieldCheck,
      title: "Affordable & Inclusive",
      description:
        "Combining low fee structures, state fee-reimbursement schemes (JVD), and merit scholarships to provide quality higher education accessible to everyone.",
    },
    {
      icon: BookOpen,
      title: "Global Central Library",
      description:
        "Access to a state-of-the-art Central Library housing over 3 lakh volumes, digital resource portals, and international journals.",
    },
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section>
        <h2 className="font-playfair text-3xl font-bold text-[var(--ink)]">
          Why Choose Acharya Nagarjuna University?
        </h2>
        <div className="mt-4 h-1 w-20 bg-[var(--gold)]" />

        <div className="mt-8 rounded border border-[var(--rule)] bg-white p-8 shadow-sm">
          <p className="font-serif text-lg leading-relaxed text-[#4a4235]">
            Established in 1976, Acharya Nagarjuna University has built nearly five decades of
            legacy in coastal Andhra Pradesh. We bring together academic rigor, modern research
            laboratories, active campus life, and strong industry linkages to shape global careers.
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {highlights.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="group relative rounded border border-[var(--rule)] bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--gold)] opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex gap-4">
                <div className="mb-4 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--parchment)] text-[var(--gold)]">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-bold text-[var(--ink)]">
                    {item.title}
                  </h3>
                  <p className="font-serif mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <section className="rounded border border-[var(--rule)] bg-[var(--ink)] bg-gradient-to-br from-[#0a1628] to-[#12213a] p-8 text-white">
        <h3 className="font-playfair text-2xl font-bold">A Launchpad for Global Careers</h3>
        <p className="font-serif mt-2 text-white/80">
          Our alumni serve at top tech firms, academic research centres, government services, and
          professional organizations globally. At ANU, we help you connect academic learning with
          practical, industry-ready skills.
        </p>
      </section>
    </div>
  );
}
