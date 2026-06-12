import React, { useMemo } from "react";
import type { RankingsTabKey } from "@/data/rankings-app";
import { getRankingsTab } from "@/data/rankings-app";
import { RankingsContent } from "@/components/rankings/rankings-content";

export function RankingsApp({
  page,
  onPageChange,
}: {
  page?: string;
  onPageChange: (page: RankingsTabKey) => void;
}) {
  const activeTab = useMemo(() => getRankingsTab(page), [page]);

  const heroStats = useMemo(() => {
    const metrics = activeTab.metrics ?? [];
    return [
      {
        value: metrics[0]?.value ?? "—",
        label: metrics[0]?.label ?? "Accreditation",
        note: metrics[0]?.note ?? "",
      },
      {
        value: metrics[1]?.value ?? "—",
        label: metrics[1]?.label ?? "System",
        note: metrics[1]?.note ?? "",
      },
      {
        value: metrics[2]?.value ?? "—",
        label: metrics[2]?.label ?? "Verification",
        note: metrics[2]?.note ?? "",
      },
      {
        value: activeTab.shortTitle,
        label: "Category",
        note: activeTab.badge ? `Status: ${activeTab.badge}` : "ANU quality",
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

        .ran-page-root {
          position: relative;
          padding-bottom: 0.5rem;
        }

        .ran-page-bg {
          background-color: var(--parchment);
        }

        .ran-hero {
          border-radius: 0.25rem;
          overflow: hidden;
          background-color: var(--ink);
          background-image: linear-gradient(135deg, #0a1628 0%, #12213a 50%, #1a3060 100%);
          position: relative;
        }

        .ran-hero::before {
          content: 'QUALITY';
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

        .ran-hero-rule {
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--gold), var(--gold-light), var(--gold), transparent);
        }

        .ran-hero-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2rem, 4.8vw, 3.2rem);
          font-weight: 700;
          color: #fff;
          line-height: 1.15;
        }

        .ran-hero-desc {
          font-family: 'Source Serif 4', serif;
          color: rgba(240,235,224,0.75);
          font-size: 0.95rem;
          line-height: 1.9;
          margin-top: 1.25rem;
          max-width: 42rem;
        }

        .ran-stat-card {
          background: #fff;
          border: 1px solid var(--rule);
          border-radius: 4px;
          padding: 1.45rem 1.35rem 1.1rem;
          position: relative;
          overflow: hidden;
          transition: transform .25s ease, box-shadow .25s ease;
        }

        .ran-stat-card::before {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--gold), var(--gold-light));
        }

        .ran-stat-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(18,33,58,0.09);
        }

        .ran-stat-value {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 2.45rem;
          font-weight: 700;
          color: var(--ink);
          line-height: 1;
        }

        .ran-stat-label {
          font-family: 'Source Serif 4', serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted);
          margin-top: 0.25rem;
        }

        .ran-stat-note {
          font-family: 'EB Garamond', serif;
          font-style: italic;
          font-size: 0.82rem;
          color: var(--gold);
          margin-top: 0.12rem;
        }

        .ran-section-label {
          font-family: 'Source Serif 4', serif;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--gold);
        }

        .ran-section-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 2rem;
          font-weight: 700;
          color: var(--ink);
          line-height: 1.2;
          margin-top: 0.4rem;
        }

        .ran-divider-rule {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin: 0.65rem 0 1.5rem;
        }
        .ran-divider-rule::before,
        .ran-divider-rule::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--rule);
        }
        .ran-divider-rule span {
          color: var(--gold);
          font-size: 0.7rem;
        }

        .ran-identity-card {
          background: #fff;
          border: 1px solid var(--rule);
          border-radius: 4px;
          padding: 2rem;
        }

        .ran-identity-prose {
          font-size: 0.92rem;
          line-height: 1.9;
          color: #4a4235;
        }

        .ran-identity-prose p + p { margin-top: 0.9rem; }

        .ran-pillars-card {
          background: var(--ink);
          background-image: linear-gradient(160deg, #0a1628 0%, #12213a 100%);
          border-radius: 4px;
          padding: 2rem;
        }

        .ran-pillars-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #fff;
          line-height: 1.3;
          margin-top: 0.9rem;
        }

        .ran-pillars-item {
          border-bottom: 1px solid rgba(184,134,11,0.18);
          padding: 1.1rem 0;
        }
        .ran-pillars-item:last-child { border-bottom: none; padding-bottom: 0; }
        .ran-pillars-icon { color: var(--gold); font-size: 1.1rem; display: block; margin-bottom: 0.35rem; }
        .ran-pillars-item h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
        }
        .ran-pillars-item p {
          font-size: 0.82rem;
          line-height: 1.75;
          color: rgba(240,235,224,0.65);
          margin-top: 0.35rem;
        }

        .ran-tabs-row {
          display: flex;
          flex-wrap: wrap;
          gap: .5rem;
          margin-top: 1.1rem;
        }

        .ran-tab-chip {
          border-radius: 9999px;
          padding: .55rem 1rem;
          font-size: .8rem;
          font-weight: 700;
          border: 1px solid rgba(217,208,191,1);
          background: rgba(255,255,255,0.95);
          transition: transform .15s ease, border-color .15s ease, background .15s ease;
          cursor: pointer;
        }
        .ran-tab-chip:hover {
          border-color: rgba(184,134,11,0.35);
          transform: translateY(-1px);
        }
        .ran-tab-chip[data-active="true"] {
          border-color: rgba(212,160,23,0.35);
          background: rgba(212,160,23,0.12);
          color: var(--ink);
        }
      `}</style>

      <div className="ran-page-root ran-page-bg">
        {/* Hero */}
        <section className="ran-hero mb-8">
          <div className="ran-hero-rule" />
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
              Institutional Rankings
            </p>

            <h1 className="ran-hero-title mt-3">{activeTab.title}</h1>

            <p className="ran-hero-desc">{activeTab.description}</p>

            <div className="ran-tabs-row">
              {activeTab && (
                <button
                  type="button"
                  className="ran-tab-chip"
                  data-active="true"
                  onClick={() => onPageChange(activeTab.key)}
                  aria-label="Current rankings tab"
                >
                  {activeTab.shortTitle}
                </button>
              )}
            </div>
          </div>
          <div className="ran-hero-rule" />
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
            <div className="ran-stat-card" key={s.label}>
              <p className="ran-stat-value">{s.value}</p>
              <p className="ran-stat-label">{s.label}</p>
              <p className="ran-stat-note">{s.note}</p>
            </div>
          ))}
        </section>

        {/* Identity + Pillars */}
        {activeTab.key === "overview" && (
          <section className="mb-14">
            <p className="ran-section-label">Guiding Principles</p>
            <h2 className="ran-section-heading">
              Academic Stewardship &amp; <em>Quality Assurances</em>
            </h2>
            <div className="ran-divider-rule">
              <span>✦</span>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.25fr_0.75fr]">
              {/* Identity prose */}
              <div className="ran-identity-card">
                <div className="ran-identity-prose">
                  <p>
                    Acharya Nagarjuna University operates under standard national and global
                    evaluation frameworks to monitor institutional growth. Guided by the Internal
                    Quality Assurance Cell (IQAC), we compile comprehensive reports, coordinate
                    quarterly internal reviews, and publish self-study metrics to maintain our NAAC
                    and NIRF parameters.
                  </p>
                  <p>
                    We strictly follow a transparent data policy. Annual reports (AQAR), criterion
                    dossiers, curriculum audits, and verification records are openly made available
                    to all stakeholders, evaluative bodies, and public indices.
                  </p>
                  <p>
                    Through digital transformations, active stakeholder feedback systems, and green
                    sustainability audits, we aim to deliver standard, high-impact education that
                    prepares our students for global achievement.
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
                    "Upholding a heritage of academic distinction, certified quality, and
                    eco-friendly development."
                  </blockquote>
                </div>
              </div>

              {/* Pillars */}
              <div className="ran-pillars-card">
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
                  Quality Vision
                </p>
                <h3 className="ran-pillars-title">Core Pillars</h3>
                <div style={{ marginTop: "1.25rem" }}>
                  <div className="ran-pillars-item">
                    <span className="ran-pillars-icon">◈</span>
                    <h3>Rigorous Standards</h3>
                    <p>
                      Maintaining our NAAC A+ grade by auditing curriculum structures, learning
                      outcomes, and files.
                    </p>
                  </div>
                  <div className="ran-pillars-item">
                    <span className="ran-pillars-icon">✦</span>
                    <h3>Data Integrity</h3>
                    <p>
                      Verifying sponsored projects, student retention metrics, and expenditures
                      under NIRF registries.
                    </p>
                  </div>
                  <div className="ran-pillars-item">
                    <span className="ran-pillars-icon">❖</span>
                    <h3>Sustainability</h3>
                    <p>
                      Reducing campus carbon print, implementing active water recycling, and
                      tracking UI GreenMetric parameters.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Tab-Specific Content */}
        <section className="mb-10">
          <RankingsContent tab={activeTab} />
        </section>
      </div>
    </>
  );
}
