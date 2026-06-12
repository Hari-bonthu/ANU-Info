import React, { useState } from "react";
import { Link } from "@tanstack/react-router";
import BreadcrumbTrail from "@/components/BreadcrumbTrail";
import { ChevronRight } from "lucide-react";
import { campusLifeTabs, getCampusLifeTab } from "@/data/campus-life-app";

export function CampusLifeShell({
  pageId,
  children,
}: {
  pageId: string;
  children: React.ReactNode;
}) {
  const activeTab = getCampusLifeTab(pageId);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

        .campus-root {
          background-color: var(--parchment);
          min-height: 100vh;
          font-family: 'Source Serif 4', Georgia, serif;
          color: var(--ink);
        }

        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-serif { font-family: 'Source Serif 4', Georgia, serif; }
        .font-garamond { font-family: 'EB Garamond', serif; }

        /* ┤ Masthead ┤ **/
        .campus-masthead {
          background-color: var(--ink);
          background-image: linear-gradient(135deg, #0a1628 0%, #12213a 50%, #1a3060 100%);
          position: relative;
          overflow: hidden;
        }

        .campus-masthead::before {
          content: 'CAMPUS LIFE';
          position: absolute;
          right: -1rem;
          top: 50%;
          transform: translateY(-50%);
          font-family: 'Playfair Display', serif;
          font-size: clamp(4rem, 10vw, 8rem);
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

      <div className="campus-root pb-12">
        <div className="campus-masthead py-8 text-center text-white lg:py-12">
          <div className="relative z-10 mx-auto max-w-4xl px-6">
            <h1 className="font-playfair text-3xl font-bold tracking-tight md:text-5xl">
              Campus Life
            </h1>
            <p className="font-garamond mx-auto mt-6 max-w-2xl text-lg italic tracking-wide text-[var(--gold-light)] md:text-xl">
              "Fostering community engagement, athletic excellence, service, and holistic growth
              across a vibrant campus."
            </p>
          </div>
        </div>
        <div className="gold-rule" />

        <div className="mx-auto max-w-[1400px] px-6 py-6 lg:px-8">
          <BreadcrumbTrail
            items={[
              { label: "Home", href: "/" },
              { label: "Campus Life", href: "/campus-life/overview" as any },
              { label: activeTab.shortTitle },
            ]}
          />
        </div>

        <div className="mx-auto max-w-[1400px] px-6 py-8 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[300px_1fr]">
            <aside className="w-full lg:w-auto">
              <div className="lg:sticky lg:top-24">
                <nav className="sidebar-menu" aria-label="Campus Life Navigation">
                  <button
                    type="button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="w-full flex items-center justify-between bg-[var(--parchment-dark)] px-6 py-4 border-b border-[var(--rule)] text-left focus:outline-none"
                  >
                    <h3 className="font-playfair text-lg font-bold text-[var(--ink)]">
                      Campus Directory
                    </h3>
                    <div className="flex items-center gap-2 lg:hidden">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[var(--gold)] bg-white border border-[var(--rule)] px-2.5 py-1 rounded">
                        {activeTab.shortTitle}
                      </span>
                      <ChevronRight
                        className={`h-4 w-4 transition-transform duration-200 text-[var(--gold)] ${isMenuOpen ? "rotate-90" : ""}`}
                      />
                    </div>
                  </button>
                  <div className={`${isMenuOpen ? "flex" : "hidden"} lg:flex flex-col`}>
                    {campusLifeTabs.map((item) => (
                      <Link
                        key={item.key}
                        to={`/campus-life/${item.key}` as any}
                        className="sidebar-link"
                        data-active={activeTab.key === item.key}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.shortTitle}
                        <ChevronRight className="sidebar-icon h-4 w-4 opacity-50" />
                      </Link>
                    ))}
                  </div>
                </nav>
              </div>
            </aside>

            <main className="min-w-0 pb-8" id="campus-content">
              {children}

              <div className="mt-8 rounded border border-[var(--gold)]/30 bg-[var(--gold)]/5 p-8">
                <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
                  <div>
                    <h3 className="font-playfair text-2xl font-bold text-[var(--ink)]">
                      Student Affairs Helpdesk
                    </h3>
                    <p className="font-serif mt-2 text-lg text-[var(--muted)]">
                      Need further assistance? Our student affairs team is here to support you with
                      campus housing, facilities, and activities.
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-col items-center gap-4 sm:flex-row md:items-end">
                    <a
                      href="tel:+918632346116"
                      className="flex items-center gap-2 rounded border border-[var(--rule)] bg-white px-6 py-3 font-serif text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--parchment)] hover:text-[var(--gold)]"
                    >
                      Call Support
                    </a>
                    <a
                      href="mailto:registrar@anu.ac.in"
                      className="flex items-center gap-2 rounded bg-[var(--ink)] px-6 py-3 font-serif text-sm font-semibold text-white transition hover:bg-[var(--ink-mid)]"
                    >
                      Email Us
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
