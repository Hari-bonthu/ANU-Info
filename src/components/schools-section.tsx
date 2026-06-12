import { useState } from "react";
import {
  GraduationCap,
  ArrowUpRight,
  MapPin,
  BookOpen,
  Wrench,
  FlaskConical,
  Palette,
  Pill,
  Trophy,
  Building2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import campusImage from "@/assets/bgg1.jpg";
import phdImage from "@/assets/images/phd.jpg";

type School = {
  id: string;
  category: string;
  collegeName: string;
  shortName: string;
  tagline: string;
  description: string;
  programmes: string[];
  established: string;
  location: string;
  icon: LucideIcon;
  /** Bundled image asset resolved by Vite. */
  image: string;
  accent: string; // oklch token
};

const schools: School[] = [
  {
    id: "engineering",
    category: "Engineering",
    collegeName: "ANU College of Engineering & Technology",
    shortName: "Dr. YSR ANUCET",
    tagline: "Innovate. Engineer. Lead.",
    description:
      "A premier institution offering cutting-edge programmes across CSE, AI/ML, Data Science, Cyber Security, ECE, EEE, Mechanical and Civil engineering streams.",
    programmes: [
      "B.Tech CSE",
      "B.Tech AI & ML",
      "B.Tech Data Science",
      "B.Tech Cyber Security",
      "B.Tech ECE",
      "B.Tech EEE",
      "B.Tech Mechanical",
      "B.Tech Civil",
    ],
    established: "2007",
    location: "Main Campus, Nagarjuna Nagar",
    icon: Wrench,
    image: campusImage,
    accent: "oklch(0.55 0.18 250)",
  },
  {
    id: "sciences",
    category: "Sciences",
    collegeName: "ANU College of Sciences",
    shortName: "Sciences",
    tagline: "Discover the truth in nature.",
    description:
      "Home to research-intensive departments in Physics, Chemistry, Mathematics, Biotechnology, Botany, Zoology and Environmental Sciences.",
    programmes: [
      "M.Sc Physics",
      "M.Sc Chemistry",
      "M.Sc Mathematics",
      "M.Sc Biotechnology",
      "M.Sc Botany",
      "M.Sc Zoology",
      "M.Sc Environmental Science",
      "Ph.D Sciences",
    ],
    established: "1976",
    location: "Main Campus, Nagarjuna Nagar",
    icon: FlaskConical,
    image: phdImage,
    accent: "oklch(0.6 0.16 195)",
  },
  {
    id: "arts",
    category: "Arts, Commerce & Law",
    collegeName: "ANU College of Arts, Commerce & Law",
    shortName: "Arts & Law",
    tagline: "Where humanities meet justice.",
    description:
      "Offering distinguished programmes in Humanities, Languages, Commerce, Business Management, and a renowned three-year LL.B programme.",
    programmes: [
      "B.A Honours",
      "B.Com Honours",
      "M.A English",
      "M.A Telugu",
      "M.A Economics",
      "M.Com",
      "MBA",
      "LL.B (3 Year)",
      "LL.M",
      "Ph.D Humanities",
    ],
    established: "1976",
    location: "Main Campus, Nagarjuna Nagar",
    icon: Palette,
    image: campusImage,
    accent: "oklch(0.6 0.18 30)",
  },
  {
    id: "pharmacy",
    category: "Pharmacy",
    collegeName: "ANU College of Pharmaceutical Sciences",
    shortName: "Pharmacy",
    tagline: "Healing through science.",
    description:
      "A NAAC-accredited pharmacy college offering industry-aligned programmes with state-of-the-art research labs and pharmaceutical industry collaborations.",
    programmes: [
      "B.Pharmacy",
      "Pharm.D",
      "M.Pharmacy (Pharmaceutics)",
      "M.Pharmacy (Pharmacology)",
      "M.Pharmacy (Pharmaceutical Analysis)",
      "Ph.D Pharmaceutical Sciences",
    ],
    established: "1982",
    location: "Main Campus, Nagarjuna Nagar",
    icon: Pill,
    image: phdImage,
    accent: "oklch(0.6 0.16 150)",
  },
  {
    id: "sports",
    category: "Physical Education & Sports",
    collegeName: "ANU College of Physical Education & Sports",
    shortName: "Sports Sciences",
    tagline: "Strength of body, spirit and mind.",
    description:
      "Producing national-level athletes, coaches and physical educators with world-class training infrastructure and a dedicated sports sciences research wing.",
    programmes: ["B.P.Ed", "M.P.Ed", "Diploma in Sports Coaching", "Ph.D Physical Education"],
    established: "1985",
    location: "Sports Complex, Nagarjuna Nagar",
    icon: Trophy,
    image: campusImage,
    accent: "oklch(0.65 0.17 60)",
  },
  {
    id: "architecture",
    category: "Architecture & Planning",
    collegeName: "ANU College of Architecture & Planning",
    shortName: "Architecture",
    tagline: "Designing tomorrow's cities.",
    description:
      "Council of Architecture approved programmes blending design thinking, sustainable planning and contemporary technology to shape the built environment.",
    programmes: [
      "B.Arch (5 Year)",
      "M.Arch (Urban Design)",
      "M.Plan (Urban Planning)",
      "Ph.D Architecture",
    ],
    established: "2010",
    location: "Architecture Block, Nagarjuna Nagar",
    icon: Building2,
    image: campusImage,
    accent: "oklch(0.55 0.14 290)",
  },
];

export function SchoolsSection() {
  const [activeId, setActiveId] = useState<string>(schools[0].id);
  const active = schools.find((s) => s.id === activeId)!;

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[oklch(0.985_0.005_250)] via-background to-[oklch(0.97_0.01_255)] py-20">
      {/* Decorative grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.22 0.06 265) 1px, transparent 1px), linear-gradient(90deg, oklch(0.22 0.06 265) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.85_0.05_75)] bg-[oklch(0.97_0.03_75)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[oklch(0.45_0.12_75)]">
            <GraduationCap className="h-3.5 w-3.5" />
            Schools &amp; Programmes
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[oklch(0.22_0.06_265)] md:text-4xl lg:text-5xl">
            Explore Our Constituent Colleges
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Six premier colleges. Sixty plus programmes. One legacy of academic excellence — select
            a discipline to dive into the courses, faculty and infrastructure that define it.
          </p>
        </div>

        {/* Category tabs */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {schools.map((s) => {
            const Icon = s.icon;
            const isActive = s.id === activeId;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveId(s.id)}
                className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "border-transparent text-white shadow-lg"
                    : "border-border bg-white/70 text-foreground hover:border-[oklch(0.85_0.05_75)] hover:bg-white"
                }`}
                style={
                  isActive
                    ? {
                        backgroundColor: s.accent,
                        boxShadow: `0 10px 30px -10px ${s.accent}`,
                      }
                    : undefined
                }
              >
                <Icon className="h-4 w-4" />
                <span>{s.category}</span>
              </button>
            );
          })}
        </div>

        {/* Active college panel */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Image / Hero */}
          <div className="lg:col-span-7">
            <div className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-[0_20px_60px_-20px_oklch(0.22_0.06_265/0.25)]">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                <img
                  src={active.image}
                  alt={active.collegeName}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                {/* Fallback gradient if no image */}
                <div
                  className="absolute inset-0 -z-10"
                  style={{
                    background: `linear-gradient(135deg, ${active.accent}, oklch(0.22 0.06 265))`,
                  }}
                  aria-hidden
                />
                {/* Top gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Floating tag */}
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[oklch(0.22_0.06_265)] backdrop-blur">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: active.accent }}
                  />
                  Established {active.established}
                </div>

                {/* Bottom title overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
                  <p className="text-sm font-medium uppercase tracking-wider text-white/80">
                    {active.shortName}
                  </p>
                  <h3 className="mt-1 text-2xl font-bold leading-tight md:text-3xl">
                    {active.collegeName}
                  </h3>
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-white/85">
                    <MapPin className="h-3.5 w-3.5" />
                    {active.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-5">
            <div className="flex h-full flex-col rounded-3xl border border-border bg-white p-6 shadow-[0_20px_60px_-20px_oklch(0.22_0.06_265/0.15)] md:p-8">
              <p className="text-sm font-semibold italic" style={{ color: active.accent }}>
                "{active.tagline}"
              </p>
              <p className="mt-3 text-base leading-relaxed text-foreground">{active.description}</p>

              <div className="mt-6">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[oklch(0.22_0.06_265)]">
                  <BookOpen className="h-4 w-4" />
                  Programmes Offered
                  <span className="ml-auto rounded-full bg-[oklch(0.96_0.01_260)] px-2 py-0.5 text-xs font-bold text-[oklch(0.22_0.06_265)]">
                    {active.programmes.length}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {active.programmes.map((p) => (
                    <span
                      key={p}
                      className="rounded-lg border border-border bg-[oklch(0.985_0.005_250)] px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-[oklch(0.85_0.05_75)] hover:bg-[oklch(0.98_0.02_75)]"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
                <a
                  href="#"
                  className="group inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition-all hover:translate-y-[-1px]"
                  style={{
                    backgroundColor: active.accent,
                    boxShadow: `0 10px 25px -10px ${active.accent}`,
                  }}
                >
                  Visit College
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-white px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-[oklch(0.97_0.01_260)]"
                >
                  Apply for Admission
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 rounded-2xl border border-border bg-white/80 px-6 py-4 text-sm text-muted-foreground backdrop-blur">
          <span>
            <strong className="text-[oklch(0.22_0.06_265)]">6</strong> Constituent Colleges
          </span>
          <span className="hidden h-4 w-px bg-border md:block" />
          <span>
            <strong className="text-[oklch(0.22_0.06_265)]">60+</strong> Programmes
          </span>
          <span className="hidden h-4 w-px bg-border md:block" />
          <span>
            <strong className="text-[oklch(0.22_0.06_265)]">200+</strong> Specializations
          </span>
          <span className="hidden h-4 w-px bg-border md:block" />
          <span>
            <strong className="text-[oklch(0.22_0.06_265)]">NAAC A+</strong> Accredited
          </span>
        </div>
      </div>
    </section>
  );
}
