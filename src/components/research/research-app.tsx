import React, { useMemo } from "react";
import type { ResearchTabKey } from "@/data/research-app";
import { getResearchTab } from "@/data/research-app";
import { ResearchContent } from "@/components/research/research-content";

export function ResearchApp({
  page,
  onPageChange,
}: {
  page?: string;
  onPageChange: (page: ResearchTabKey) => void;
}) {
  const activeTab = useMemo(() => getResearchTab(page), [page]);

  const heroStats = useMemo(() => {
    const metrics = activeTab.metrics ?? [];
    return [
      {
        value: metrics[0]?.value ?? "—",
        label: metrics[0]?.label ?? "Research scope",
        note: metrics[0]?.note ?? "",
      },
      {
        value: metrics[1]?.value ?? "—",
        label: metrics[1]?.label ?? "Patents/Projects",
        note: metrics[1]?.note ?? "",
      },
      {
        value: metrics[2]?.value ?? "—",
        label: metrics[2]?.label ?? "Scholars",
        note: metrics[2]?.note ?? "",
      },
      {
        value: activeTab.shortTitle,
        label: "Current view",
        note: activeTab.badge ? `Tag: ${activeTab.badge}` : "Research tab",
      },
    ];
  }, [activeTab]);

  return (
    <>
      <style>{`
        :root {
          --ink: #12213a;
          --ink-mid: #1e3558;
          --gold: #b8860b;
          --gold-light: #d4a017;
          --parchment: #faf7f2;
          --parchment-dark: #f0ebe0;
          --rule: #d9d0bf;
          --muted: #6b6352;
        }

        .res-page-root {
          position: relative;
          padding-bottom: 0.5rem;
        }

        .res-page-bg {
          background-color: var(--parchment);
        }

        .res-hero {
          border-radius: 0.25rem;
          overflow: hidden;
          background-color: var(--ink);
          background-image: linear-gradient(135deg, #0a1628 0%, #12213a 50%, #1a3060 100%);
          position: relative;
        }

        .res-hero::before {
          content: 'RESEARCH';
          position: absolute;
          right: -2rem;
          top: 50%;
          transform: translateY(-50%);
          font-family: 'Playfair Display', serif;
          font-size: 11rem;
          font-weight: 700;
          color: rgba(184,134,11,0.05);
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }

        .res-hero-rule {
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--gold), var(--gold-light), var(--gold), transparent);
        }

        .res-hero-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2rem, 4.8vw, 3.2rem);
          font-weight: 700;
          color: #fff;
          line-height: 1.15;
        }

        .res-hero-desc {
          font-family: 'Source Serif 4', serif;
          color: rgba(240,235,224,0.75);
          font-size: 0.95rem;
          line-height: 1.9;
          margin-top: 1.25rem;
          max-width: 42rem;
        }

        .res-stat-card {
          background: #fff;
          border: 1px solid var(--rule);
          border-radius: 4px;
          padding: 1.45rem 1.35rem 1.1rem;
          position: relative;
          overflow: hidden;
          transition: transform .25s ease, box-shadow .25s ease;
        }

        .res-stat-card::before {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--gold), var(--gold-light));
        }

        .res-stat-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(18,33,58,0.09);
        }

        .res-stat-value {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 2.45rem;
          font-weight: 700;
          color: var(--ink);
          line-height: 1;
        }

        .res-stat-label {
          font-family: 'Source Serif 4', serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted);
          margin-top: 0.25rem;
        }

        .res-stat-note {
          font-family: 'EB Garamond', serif;
          font-style: italic;
          font-size: 0.82rem;
          color: var(--gold);
          margin-top: 0.12rem;
        }

        .res-section-label {
          font-family: 'Source Serif 4', serif;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--gold);
        }

        .res-section-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 2rem;
          font-weight: 700;
          color: var(--ink);
          line-height: 1.2;
          margin-top: 0.4rem;
        }

        .res-divider-rule {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin: 0.65rem 0 1.5rem;
        }
        .res-divider-rule::before,
        .res-divider-rule::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--rule);
        }
        .res-divider-rule span {
          color: var(--gold);
          font-size: 0.7rem;
        }

        .res-identity-card {
          background: #fff;
          border: 1px solid var(--rule);
          border-radius: 4px;
          padding: 2rem;
        }

        .res-identity-prose {
          font-size: 0.92rem;
          line-height: 1.9;
          color: #4a4235;
        }

        .res-identity-prose p + p { margin-top: 0.9rem; }

        .res-pillars-card {
          background: var(--ink);
          background-image: linear-gradient(160deg, #0a1628 0%, #12213a 100%);
          border-radius: 4px;
          padding: 2rem;
        }

        .res-pillars-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #fff;
          line-height: 1.3;
          margin-top: 0.9rem;
        }

        .res-pillars-item {
          border-bottom: 1px solid rgba(184,134,11,0.18);
          padding: 1.1rem 0;
        }
        .res-pillars-item:last-child { border-bottom: none; padding-bottom: 0; }
        .res-pillars-icon { color: var(--gold); font-size: 1.1rem; display: block; margin-bottom: 0.35rem; }
        .res-pillars-item h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
        }
        .res-pillars-item p {
          font-size: 0.82rem;
          line-height: 1.75;
          color: rgba(240,235,224,0.65);
          margin-top: 0.35rem;
        }

        .res-tabs-row {
          display: flex;
          flex-wrap: wrap;
          gap: .5rem;
          margin-top: 1.1rem;
        }

        .res-tab-chip {
          border-radius: 9999px;
          padding: .55rem 1rem;
          font-size: .8rem;
          font-weight: 700;
          border: 1px solid rgba(217,208,191,1);
          background: rgba(255,255,255,0.95);
          transition: transform .15s ease, border-color .15s ease, background .15s ease;
          cursor: pointer;
        }
        .res-tab-chip:hover {
          border-color: rgba(184,134,11,0.35);
          transform: translateY(-1px);
        }
        .res-tab-chip[data-active="true"] {
          border-color: rgba(212,160,23,0.35);
          background: rgba(212,160,23,0.12);
          color: var(--ink);
        }
      `}</style>

      <div className="res-page-root res-page-bg">
        {/* Hero */}
        <section className="res-hero mb-8">
          <div className="res-hero-rule" />
          <div className="px-6 py-12 md:px-14 relative z-10">
            <p
              style={{
                fontFamily: "'Source Serif 4', serif",
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(212,160,23,0.9)",
              }}
            >
              Research &amp; Innovation
            </p>

            <h1 className="res-hero-title mt-3">{activeTab.title}</h1>

            <p className="res-hero-desc">{activeTab.description}</p>

            <div className="res-tabs-row">
              {activeTab && (
                <button
                  type="button"
                  className="res-tab-chip"
                  data-active="true"
                  onClick={() => onPageChange(activeTab.key)}
                  aria-label="Current research tab"
                >
                  {activeTab.shortTitle}
                </button>
              )}
            </div>
          </div>
          <div className="res-hero-rule" />
        </section>

        {/* Stats */}
        <section
          className="mb-10"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "1rem",
            marginLeft: "0px",
          }}
        >
          {heroStats.map((s) => (
            <div className="res-stat-card" key={s.label}>
              <p className="res-stat-value">{s.value}</p>
              <p className="res-stat-label">{s.label}</p>
              <p className="res-stat-note">{s.note}</p>
            </div>
          ))}
        </section>

        {/* Identity + Pillars */}
        {activeTab.key === "overview" && (
          <section className="mb-14">
            <p className="res-section-label">Guiding Principles</p>
            <h2 className="res-section-heading">
              Intellectual Stewardship &amp; <em>Academic Innovation</em>
            </h2>
            <div className="res-divider-rule">
              <span>✦</span>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.25fr_0.75fr]">
              {/* Identity prose */}
              <div className="res-identity-card">
                <div className="res-identity-prose">
                  <p>
                    Acharya Nagarjuna University is committed to fostering academic research,
                    scholarly investigations, and technology transfers. Through our central R&amp;D
                    cell, doctoral studies committee, and IPR department, we coordinate dozens of
                    funded projects, draft patents, and provide resources for research scholars and
                    faculty.
                  </p>
                  <p>
                    Our research policy promotes highest academic standards, zero tolerance for
                    plagiarism, and collaboration with global research networks. Faculty and
                    students are encouraged to publish in indexed, high-impact journals under
                    verified ethical frameworks.
                  </p>
                  <p>
                    Additionally, the university provides incubation spaces, mentoring support, and
                    technology transfer options to bridge the gap between academic innovation and
                    market readiness.
                  </p>
                  <blockquote
                    style={{
                      marginTop: "1.25rem",
                      paddingLeft: "1.25rem",
                      borderLeft: "3px solid var(--gold)",
                      fontFamily: "'EB Garamond', serif",
                      fontStyle: "italic",
                      fontSize: "1rem",
                      lineHeight: 1.75,
                      color: "var(--ink-mid)",
                    }}
                  >
                    "Empowering innovators, doctoral scholars, and academic leaders to expand global
                    scientific boundaries."
                  </blockquote>
                </div>
              </div>

              {/* Pillars */}
              <div className="res-pillars-card">
                <p
                  style={{
                    fontFamily: "'Source Serif 4', serif",
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(184,134,11,0.85)",
                    marginBottom: "0.25rem",
                  }}
                >
                  Research Vision
                </p>
                <h3 className="res-pillars-title">Core Anchors</h3>
                <div style={{ marginTop: "1.25rem" }}>
                  <div className="res-pillars-item">
                    <span className="res-pillars-icon">◈</span>
                    <h3>Funding &amp; Labs</h3>
                    <p>
                      Securing central grants from DST, UGC, DBT, and CSIR to build specialized
                      research centers.
                    </p>
                  </div>
                  <div className="res-pillars-item">
                    <span className="res-pillars-icon">✦</span>
                    <h3>Ethical Compliance</h3>
                    <p>
                      Auditing synopsis dossiers and thesis files using verified anti-plagiarism
                      networks.
                    </p>
                  </div>
                  <div className="res-pillars-item">
                    <span className="res-pillars-icon">❖</span>
                    <h3>Incubation &amp; Transfer</h3>
                    <p>
                      Filing international patents and commercializing prototypes inside student
                      start-up cells.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Tab-Specific Content */}
        <section className="mb-10">
          <ResearchContent tab={activeTab} />
        </section>
      </div>
    </>
  );
}
