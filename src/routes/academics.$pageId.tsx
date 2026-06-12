import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, Clock3, Mail, Phone, AlertCircle } from "lucide-react";
import { getPublishedPage } from "@/content/page-registry";
import BreadcrumbTrail from "@/components/BreadcrumbTrail";
import { PageHero, PageSections, SideNavigation } from "@/components/content/page-blocks";

export const Route = createFileRoute("/academics/$pageId")({
  component: AcademicsPageComponent,
});

function toReadable(input: string) {
  return input
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}

function PlaceholderPage({ section, page }: { section: string; page: string }) {
  const sectionLabel = toReadable(section);
  const pageLabel = page ? toReadable(page) : "Overview";

  return (
    <div className="anu-page-root pb-24">
      {/* Dynamic style sheet to support theme rules even on placeholder pages */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;1,8..60,300;1,8..60,400&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap');

        .anu-page-root {
          --ink: #12213a;
          --ink-mid: #1e3558;
          --gold: #b8860b;
          --gold-light: #d4a017;
          --parchment: #faf7f2;
          --parchment-dark: #f0ebe0;
          --cream: #f5f0e8;
          --rule: #d9d0bf;
          --muted: #6b6352;
          background-color: var(--parchment);
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          min-height: 100vh;
          font-family: 'Source Serif 4', Georgia, serif;
          color: var(--ink);
        }

        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-serif { font-family: 'Source Serif 4', Georgia, serif; }
        .font-garamond { font-family: 'EB Garamond', serif; }

        .placeholder-masthead {
          background-color: var(--ink);
          background-image: linear-gradient(135deg, #0a1628 0%, #12213a 50%, #1a3060 100%);
          position: relative;
          overflow: hidden;
        }
        .placeholder-masthead::before {
          content: 'PENDING';
          position: absolute;
          right: -2rem;
          top: 50%;
          transform: translateY(-50%);
          font-family: 'Playfair Display', serif;
          font-size: 10rem;
          font-weight: 700;
          color: rgba(184,134,11,0.03);
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }
        .anu-gold-rule {
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--gold), var(--gold-light), var(--gold), transparent);
        }
      `}</style>

      <BreadcrumbTrail
        items={[
          { label: "Home", href: "/" },
          { label: sectionLabel, href: "/academics/overview" },
          { label: pageLabel },
        ]}
      />

      {/* Hero Header */}
      <section className="placeholder-masthead py-16 text-center text-white">
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <p className="font-serif text-xs font-bold uppercase tracking-widest text-[var(--gold-light)]">
            {sectionLabel} Module
          </p>
          <h1 className="font-playfair mt-3 text-4xl font-bold tracking-tight md:text-5xl text-white">
            {pageLabel}
          </h1>
          <p className="font-garamond mx-auto mt-4 max-w-2xl text-base italic text-white/80">
            "Academic curriculum plans and board updates for this section are undergoing
            validation."
          </p>
        </div>
      </section>
      <div className="anu-gold-rule" />

      {/* Main Grid */}
      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1.55fr_1fr] lg:px-8">
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="rounded border border-[var(--rule)] bg-white p-8 shadow-sm space-y-4">
            <h2 className="font-playfair text-2xl font-bold text-[var(--ink)] border-b border-[var(--rule)]/60 pb-3 flex items-center gap-2">
              <AlertCircle className="h-6 w-6 text-[var(--gold)]" />
              Academic Page In Preparation
            </h2>
            <p className="font-serif text-base leading-relaxed text-[#4a4235]">
              This academic page is currently being compiled to list the syllabus grids, regulatory
              documents, library catalogues, and research chair specifications. We appreciate your
              patience while we publish the final governance materials.
            </p>

            <div className="grid gap-4 md:grid-cols-2 pt-4">
              <div className="rounded border border-[var(--rule)]/60 bg-[var(--parchment)]/30 p-5">
                <span className="font-serif text-xs font-bold uppercase tracking-wider text-[var(--gold)]">
                  Module Section
                </span>
                <p className="font-playfair text-lg font-bold text-[var(--ink)] mt-1">
                  {sectionLabel}
                </p>
              </div>
              <div className="rounded border border-[var(--rule)]/60 bg-[var(--parchment)]/30 p-5">
                <span className="font-serif text-xs font-bold uppercase tracking-wider text-[var(--gold)]">
                  Target Page
                </span>
                <p className="font-playfair text-lg font-bold text-[var(--ink)] mt-1">
                  {pageLabel}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--rule)]/60 flex flex-wrap gap-4">
              <Link
                to="/"
                className="rounded bg-[var(--ink)] px-6 py-3 font-serif text-sm font-semibold text-white transition hover:bg-[var(--ink-mid)] shadow-sm"
              >
                Back to Home
              </Link>
              <Link
                to="/aboutprofile"
                className="rounded border border-[var(--rule)] bg-white px-6 py-3 font-serif text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--parchment)] shadow-sm"
              >
                View University Profile
              </Link>
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <aside className="space-y-6">
          <section className="rounded border border-[var(--rule)] bg-white p-6 shadow-sm">
            <h3 className="font-playfair text-lg font-bold text-[var(--ink)] border-b border-[var(--rule)]/60 pb-2 flex items-center gap-2">
              <Building2 className="h-5 w-5 text-[var(--gold)]" />
              Academic Branch Office
            </h3>
            <ul className="mt-4 space-y-4 text-sm font-serif text-[var(--muted)]">
              <li className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-4 w-4 text-[var(--gold)] shrink-0" />
                <span>
                  Office of the Dean, Academic Cell, Acharya Nagarjuna University, Nagarjuna Nagar,
                  Guntur, AP - 522510
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[var(--gold)] shrink-0" />
                <a
                  href="tel:+918632346114"
                  className="text-[var(--ink)] font-semibold hover:text-[var(--gold)] transition-colors"
                >
                  +91 863 234 6114
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[var(--gold)] shrink-0" />
                <a
                  href="mailto:registrar@anu.ac.in"
                  className="text-[var(--ink)] font-semibold hover:text-[var(--gold)] transition-colors break-all"
                >
                  registrar@anu.ac.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock3 className="mt-0.5 h-4 w-4 text-[var(--gold)] shrink-0" />
                <span>Working Hours: 10:00 AM to 5:30 PM (Mon - Fri)</span>
              </li>
            </ul>
          </section>
        </aside>
      </section>
    </div>
  );
}

// Simple helper icon
function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function AcademicsPageComponent() {
  const { pageId } = Route.useParams();
  const published = getPublishedPage("academics", pageId);

  if (published) {
    const { content } = published;
    return (
      <div className="anu-page-root pb-24">
        <BreadcrumbTrail items={content.breadcrumbs} />
        <PageHero content={content} />
        <section className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1.55fr_1fr] lg:px-8">
          <PageSections sections={content.sections} />
          <SideNavigation content={content} />
        </section>
      </div>
    );
  }

  return <PlaceholderPage section="academics" page={pageId} />;
}
