import React from "react";
import { Link } from "@tanstack/react-router";
import BreadcrumbTrail from "@/components/BreadcrumbTrail";
import { ChevronRight } from "lucide-react";

export const ADMISSIONS_MENU = [
  { id: "overview", label: "Admissions Overview" },
  { id: "why-choose-us", label: "Why Choose Us" },
  { id: "academic-calendar", label: "Academic Calendar" },
  { id: "fee-structure", label: "Fee Structure" },
  { id: "scholarships", label: "Scholarships" },
  { id: "how-to-apply", label: "How to Apply" },
  { id: "eligibility-criteria", label: "Eligibility Criteria" },
  { id: "affiliated-colleges", label: "Affiliated Colleges" },
  { id: "helpdesk", label: "Admission Helpdesk" },
  { id: "faqs", label: "Admissions FAQ" },
  { id: "brochure", label: "Brochure Downloads" },
];

export function AdmissionsShell({
  pageId,
  children,
}: {
  pageId: string;
  children: React.ReactNode;
}) {
  const activeLabel = ADMISSIONS_MENU.find((item) => item.id === pageId)?.label ?? "Admissions";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;1,8..60,300;1,8..60,400&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap');

        :root {
          --ink: #12213a;
          --ink-mid: #1e3558;
          --gold: #b8860b;
          --gold-light: #d4a017;
          --parchment: #faf7f2;
          --parchment-dark: #f0ebe0;
          --cream: #f5f0e8;
          --rule: #d9d0bf;
          --muted: #6b6352;
        }

        .admissions-root {
          background-color: var(--parchment);
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          min-height: 100vh;
          font-family: 'Source Serif 4', Georgia, serif;
          color: var(--ink);
        }

        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-serif { font-family: 'Source Serif 4', Georgia, serif; }
        .font-garamond { font-family: 'EB Garamond', serif; }

        /* ┤ Masthead ┤ **/
        .admissions-masthead {
          background-color: var(--ink);
          background-image: linear-gradient(135deg, #0a1628 0%, #12213a 50%, #1a3060 100%);
          position: relative;
          overflow: hidden;
        }

        .admissions-masthead::before {
          content: 'ADMIT';
          position: absolute;
          right: -2rem;
          top: 50%;
          transform: translateY(-50%);
          font-family: 'Playfair Display', serif;
          font-size: 14rem;
          font-weight: 700;
          color: rgba(184,134,11,0.05);
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }

        .gold-rule {
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--gold), var(--gold-light), var(--gold), transparent);
        }

        /* ┤ Sidebar ┤ */
        .sidebar-menu {
          background: #fff;
          border: 1px solid var(--rule);
          border-radius: 4px;
          overflow: hidden;
          position: sticky;
          top: 6rem;
        }

        .sidebar-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          border-bottom: 1px solid var(--rule);
          color: var(--muted);
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          transition: all 0.2s ease;
        }

        .sidebar-link:last-child {
          border-bottom: none;
        }

        .sidebar-link:hover {
          background: var(--parchment-dark);
          color: var(--ink);
        }

        .sidebar-link[data-active="true"] {
          background: var(--ink);
          color: #fff;
        }
        
        .sidebar-link[data-active="true"] .sidebar-icon {
          color: var(--gold-light);
        }
      `}</style>

      <div className="admissions-root pb-24">
        <div className="admissions-masthead py-16 text-center text-white lg:py-24">
          <div className="relative z-10 mx-auto max-w-4xl px-6">
            <h1 className="font-playfair text-4xl font-bold tracking-tight md:text-6xl">
              Admissions
            </h1>
            <p className="font-garamond mx-auto mt-6 max-w-2xl text-lg italic tracking-wide text-[var(--gold-light)] md:text-xl">
              "Fostering academic excellence and regional inclusion for the next generation of
              scholars."
            </p>
          </div>
        </div>
        <div className="gold-rule" />

        <div className="mx-auto max-w-[1400px] px-6 py-6 lg:px-8">
          <BreadcrumbTrail
            items={[
              { label: "Home", href: "/" },
              { label: "Admissions", href: "/admissions/overview" },
              { label: activeLabel },
            ]}
          />
        </div>

        <div className="mx-auto max-w-[1400px] px-6 py-8 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[300px_1fr]">
            <aside>
              <div className="lg:sticky lg:top-24">
                <nav className="sidebar-menu" aria-label="Admissions Navigation">
                  <div className="bg-[var(--parchment-dark)] px-6 py-4 border-b border-[var(--rule)]">
                    <h3 className="font-playfair text-lg font-bold text-[var(--ink)]">
                      Admissions Guide
                    </h3>
                  </div>
                  <div className="flex flex-col">
                    {ADMISSIONS_MENU.map((item) => (
                      <Link
                        key={item.id}
                        to={`/admissions/${item.id}` as any}
                        className="sidebar-link"
                        data-active={pageId === item.id}
                      >
                        {item.label}
                        <ChevronRight className="sidebar-icon h-4 w-4 opacity-50" />
                      </Link>
                    ))}
                  </div>
                </nav>
              </div>
            </aside>

            <main className="min-w-0" id="admissions-content">
              {children}
              (* Helpdesk Banner inside main content *)
              <div className="mt-16 rounded border border-[var(--gold)]/30 bg-[var(--gold)]/5 p-8">
                <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
                  <div>
                    <h3 className="font-playfair text-2xl font-bold text-[var(--ink)]">
                      Admissions Helpdesk
                    </h3>
                    <p className="font-serif mt-2 text-lg text-[var(--muted)]">
                      Need assistance with the application process? Our counselors are here to help.
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-col items-center gap-4 sm:flex-row md:items-end">
                    <a
                      href="tel:,918632346114"
                      className="flex items-center gap-2 rounded border border-[var(--rule)] bg-white px-6 py-3 font-serif text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--parchment)] hover:text-[var(--gold)]"
                    >
                      Call: +91 863 234 6114
                    </a>
                    <a
                      href="mailto:admissions@anu.ac.in"
                      className="flex items-center gap-2 rounded bg-[var(--ink)] px-6 py-3 font-serif text-sm font-semibold text-white transition hover:bg-[var(--ink-mid)]"
                    >
                      Email Admissions
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
