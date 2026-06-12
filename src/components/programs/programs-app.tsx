import React, { useMemo } from "react";
import type { ProgramsTabKey } from "@/data/programs-app";
import { getProgramsTab } from "@/data/programs-app";
import { ProgramsContent } from "@/components/programs/programs-content";

export function ProgramsApp({
  page,
  onPageChange,
}: {
  page?: string;
  onPageChange: (page: ProgramsTabKey) => void;
}) {
  const activeTab = useMemo(() => getProgramsTab(page), [page]);

  const heroStats = useMemo(() => {
    const metrics = activeTab.metrics ?? [];
    return [
      {
        value: metrics[0]?.value ?? "—",
        label: metrics[0]?.label ?? "Streams",
        note: metrics[0]?.note ?? "",
      },
      {
        value: metrics[1]?.value ?? "—",
        label: metrics[1]?.label ?? "Level / Duration",
        note: metrics[1]?.note ?? "",
      },
      {
        value: metrics[2]?.value ?? "—",
        label: metrics[2]?.label ?? "Scope",
        note: metrics[2]?.note ?? "",
      },
      {
        value: activeTab.shortTitle,
        label: "Current view",
        note: activeTab.badge ? `Tag: ${activeTab.badge}` : "Programs tab",
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

        .pro-page-root {
          position: relative;
          padding-bottom: 0.5rem;
        }

        .pro-page-bg {
          background-color: var(--parchment);
        }

        .pro-hero {
          border-radius: 0.25rem;
          overflow: hidden;
          background-color: var(--ink);
          background-image: linear-gradient(135deg, #0a1628 0%, #12213a 50%, #1a3060 100%);
          position: relative;
        }

        .pro-hero::before {
          content: 'PROGRAMS';
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

        .pro-hero-rule {
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--gold), var(--gold-light), var(--gold), transparent);
        }

        .pro-hero-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2rem, 4.8vw, 3.2rem);
          font-weight: 700;
          color: #fff;
          line-height: 1.15;
        }

        .pro-hero-desc {
          font-family: 'Source Serif 4', serif;
          color: rgba(240,235,224,0.75);
          font-size: 0.95rem;
          line-height: 1.9;
          margin-top: 1.25rem;
          max-width: 42rem;
        }

        .pro-stat-card {
          background: #fff;
          border: 1px solid var(--rule);
          border-radius: 4px;
          padding: 1.45rem 1.35rem 1.1rem;
          position: relative;
          overflow: hidden;
          transition: transform .25s ease, box-shadow .25s ease;
        }

        .pro-stat-card::before {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--gold), var(--gold-light));
        }

        .pro-stat-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(18,33,58,0.09);
        }

        .pro-stat-value {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 2.45rem;
          font-weight: 700;
          color: var(--ink);
          line-height: 1;
        }

        .pro-stat-label {
          font-family: 'Source Serif 4', serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted);
          margin-top: 0.25rem;
        }

        .pro-stat-note {
          font-family: 'EB Garamond', serif;
          font-style: italic;
          font-size: 0.82rem;
          color: var(--gold);
          margin-top: 0.12rem;
        }

        .pro-section-label {
          font-family: 'Source Serif 4', serif;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--gold);
        }

        .pro-section-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 2rem;
          font-weight: 700;
          color: var(--ink);
          line-height: 1.2;
          margin-top: 0.4rem;
        }

        .pro-divider-rule {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin: 0.65rem 0 1.5rem;
        }
        .pro-divider-rule::before,
        .pro-divider-rule::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--rule);
        }
        .pro-divider-rule span {
          color: var(--gold);
          font-size: 0.7rem;
        }

        .pro-identity-card {
          background: #fff;
          border: 1px solid var(--rule);
          border-radius: 4px;
          padding: 2rem;
        }

        .pro-identity-prose {
          font-size: 0.92rem;
          line-height: 1.9;
          color: #4a4235;
        }

        .pro-identity-prose p + p { margin-top: 0.9rem; }

        .pro-pillars-card {
          background: var(--ink);
          background-image: linear-gradient(160deg, #0a1628 0%, #12213a 100%);
          border-radius: 4px;
          padding: 2rem;
        }

        .pro-pillars-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #fff;
          line-height: 1.3;
          margin-top: 0.9rem;
        }

        .pro-pillars-item {
          border-bottom: 1px solid rgba(184,134,11,0.18);
          padding: 1.1rem 0;
        }
        .pro-pillars-item:last-child { border-bottom: none; padding-bottom: 0; }
        .pro-pillars-icon { color: var(--gold); font-size: 1.1rem; display: block; margin-bottom: 0.35rem; }
        .pro-pillars-item h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
        }
        .pro-pillars-item p {
          font-size: 0.82rem;
          line-height: 1.75;
          color: rgba(240,235,224,0.65);
          margin-top: 0.35rem;
        }

        .pro-tabs-row {
          display: flex;
          flex-wrap: wrap;
          gap: .5rem;
          margin-top: 1.1rem;
        }

        .pro-tab-chip {
          border-radius: 9999px;
          padding: .55rem 1rem;
          font-size: .8rem;
          font-weight: 700;
          border: 1px solid rgba(217,208,191,1);
          background: rgba(255,255,255,0.95);
          transition: transform .15s ease, border-color .15s ease, background .15s ease;
          cursor: pointer;
        }
        .pro-tab-chip:hover {
          border-color: rgba(184,134,11,0.35);
          transform: translateY(-1px);
        }
        .pro-tab-chip[data-active="true"] {
          border-color: rgba(212,160,23,0.35);
          background: rgba(212,160,23,0.12);
          color: var(--ink);
        }
      `}</style>

      <div className="pro-page-root pro-page-bg">
        {/* Hero */}
        <section className="pro-hero mb-8">
          <div className="pro-hero-rule" />
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
              Academic Catalog
            </p>

            <h1 className="pro-hero-title mt-3">{activeTab.title}</h1>

            <p className="pro-hero-desc">{activeTab.description}</p>

            <div className="pro-tabs-row">
              {activeTab && (
                <button
                  type="button"
                  className="pro-tab-chip"
                  data-active="true"
                  onClick={() => onPageChange(activeTab.key)}
                  aria-label="Current programs tab"
                >
                  {activeTab.shortTitle}
                </button>
              )}
            </div>
          </div>
          <div className="pro-hero-rule" />
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
            <div className="pro-stat-card" key={s.label}>
              <p className="pro-stat-value">{s.value}</p>
              <p className="pro-stat-label">{s.label}</p>
              <p className="pro-stat-note">{s.note}</p>
            </div>
          ))}
        </section>

        {/* Identity + Pillars */}
        {activeTab.key === "overview" && (
          <section className="mb-14">
            <p className="pro-section-label">Guiding Principles</p>
            <h2 className="pro-section-heading">
              Comprehensive Academics &amp; <em>Graduate Success</em>
            </h2>
            <div className="pro-divider-rule">
              <span>✦</span>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.25fr_0.75fr]">
              {/* Identity prose */}
              <div className="pro-identity-card">
                <div className="pro-identity-prose">
                  <p>
                    Acharya Nagarjuna University offers an expansive portfolio of higher education
                    programs specifically structured to meet modern scientific, technical, and
                    socio-economic expectations. Whether looking for full-time professional degrees
                    (B.Tech, B.Pharm, B.Arch), classic postgraduate specializations (M.Sc, M.A),
                    doctoral research tracks, or flexible distance education (ANUCDE), we provide
                    certified curriculums.
                  </p>
                  <p>
                    All degree structures operate under UGC directives, AICTE approvals, and Council
                    guidelines. We continuously update study codes under Board of Studies (BOS)
                    resolutions to align learning objectives with industry demands and licensing
                    exam requirements.
                  </p>
                  <p>
                    With state-of-the-art laboratory access, experienced faculty profiles, and
                    strong library e-resource subscriptions, students obtain comprehensive academic
                    support for continuous progress.
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
                    "Delivering diverse, accredited, and flexible educational pathways for global
                    professional success."
                  </blockquote>
                </div>
              </div>

              {/* Pillars */}
              <div className="pro-pillars-card">
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
                  Curriculum Vision
                </p>
                <h3 className="pro-pillars-title">Core Pillars</h3>
                <div style={{ marginTop: "1.25rem" }}>
                  <div className="pro-pillars-item">
                    <span className="pro-pillars-icon">◈</span>
                    <h3>Diverse Options</h3>
                    <p>
                      Over 150 courses across sciences, engineering, pharmacy, humanities, and
                      distance modes.
                    </p>
                  </div>
                  <div className="pro-pillars-item">
                    <span className="pro-pillars-icon">✦</span>
                    <h3>Accredited Quality</h3>
                    <p>
                      All professional and research tracks fully comply with UGC, AICTE, PCI, and
                      NATA frameworks.
                    </p>
                  </div>
                  <div className="pro-pillars-item">
                    <span className="pro-pillars-icon">❖</span>
                    <h3>Flexible Learning</h3>
                    <p>
                      State-wide study and examination centres for CDE distance students and evening
                      batch options.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Tab-Specific Content */}
        <section className="mb-10">
          <ProgramsContent tab={activeTab} />
        </section>
      </div>
    </>
  );
}
