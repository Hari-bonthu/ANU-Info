import { Award, Mail, Phone } from "lucide-react";
import emblem from "@/assets/university-emblem.png";
import { UniversityNavbar } from "@/components/university-navbar";
import { GoldenJubileeScroll } from "@/components/golden-jubilee-scroll";

const quickLinks = [
  { label: "Placements", href: "/student-services/placements" },
  { label: "Careers", href: "/employee-services/professional-development" },
  { label: "Contact", href: "/pages/about?page=contact" },
];

const portalLinks = [
  { label: "Student Portal", href: "/student-services/student-portal" },
  { label: "Employee Portal", href: "/employee-services/employee-portal" },
  { label: "WebMail", href: "/employee-services/employee-portal" },
];

export function SiteTopHeader() {
  return (
    <>
      <div
        className="w-full text-xs"
        style={{
          backgroundColor: "var(--utility-bar)",
          color: "var(--utility-bar-foreground)",
        }}
      >
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-2.5 lg:px-8">
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="tel:+918632346114"
              className="flex items-center gap-2 opacity-90 hover:opacity-100"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden />
              <span>+91 863 234 6114</span>
            </a>
            <a
              href="mailto:registrar@anu.ac.in"
              className="flex items-center gap-2 opacity-90 hover:opacity-100"
            >
              <Mail className="h-3.5 w-3.5" aria-hidden />
              <span>registrar@anu.ac.in</span>
            </a>
          </div>
          <div className="hidden items-center gap-5 lg:flex">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-medium hover:underline"
                style={{ color: "var(--utility-bar-accent)" }}
              >
                {link.label}
              </a>
            ))}
            <span className="opacity-40">|</span>
            {portalLinks.map((link) => (
              <a key={link.label} href={link.href} className="opacity-90 hover:opacity-100">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full border-b border-border bg-[oklch(0.97_0.02_85)]">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-6 py-3 text-center">
          <Award
            className="hidden h-6 w-6 shrink-0 text-[oklch(0.55_0.15_30)] sm:block"
            aria-hidden
          />
          <p className="text-sm leading-snug text-foreground sm:text-base">
            <span className="font-semibold">Accredited by NAAC with "A+ Grade</span>{" "}
            <span className="font-semibold">(With 3.46 Outstanding Score</span>
            <br className="hidden sm:block" />
            <span>in Dual Mode Category - First in the State &amp; Country)"</span>
          </p>
        </div>
      </div>

      <div className="w-full bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 px-6 py-6 md:grid-cols-[auto_1fr_auto]">
          <a
            href="/"
            className="mx-auto block shrink-0 transition-transform duration-300 hover:scale-105"
            aria-label="Acharya Nagarjuna University Home"
          >
            <img
              src={emblem}
              alt="University emblem"
              width={120}
              height={120}
              className="h-24 w-24 object-contain md:h-28 md:w-28"
            />
          </a>
          <div className="text-center">
            <a
              href="/"
              className="group inline-block transition-opacity duration-200 hover:opacity-90"
              aria-label="Acharya Nagarjuna University Home"
            >
              <p className="text-2xl font-bold tracking-wide text-[#d71920] md:text-4xl transition-colors duration-200 group-hover:text-[#b51218]">
                ఆచార్య నాగార్జున విశ్వవిద్యాలయం
              </p>
              <h1 className="mt-1 text-2xl font-bold tracking-wide text-[oklch(0.22_0.06_265)] md:text-4xl transition-colors duration-200 group-hover:text-[oklch(0.18_0.06_265)]">
                ACHARYA NAGARJUNA UNIVERSITY
              </h1>
            </a>
          </div>
          <GoldenJubileeScroll variant="inline" />
        </div>
      </div>

      <UniversityNavbar />
    </>
  );
}
