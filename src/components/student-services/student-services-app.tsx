import React, { useMemo } from "react";
import type { StudentServiceTabKey } from "@/data/student-services-app";
import { getStudentServiceTab } from "@/data/student-services-app";
import { StudentServiceContent } from "@/components/student-services/student-service-content";

export function StudentServicesApp({
  page,
  onPageChange,
}: {
  page?: string;
  onPageChange: (page: StudentServiceTabKey) => void;
}) {
  const activeTab = useMemo(() => getStudentServiceTab(page), [page]);

  // Small deterministic “hero stats” derived from the tab itself.
  const heroStats = useMemo(() => {
    const metrics = activeTab.metrics ?? [];
    return [
      {
        value: metrics[0]?.value ?? "—",
        label: metrics[0]?.label ?? "Key focus",
        note: metrics[0]?.note ?? "",
      },
      {
        value: metrics[1]?.value ?? "—",
        label: metrics[1]?.label ?? "Primary owner",
        note: metrics[1]?.note ?? "",
      },
      {
        value: metrics[2]?.value ?? "—",
        label: metrics[2]?.label ?? "Best timing",
        note: metrics[2]?.note ?? "",
      },
      {
        value: activeTab.shortTitle,
        label: "Current view",
        note: activeTab.badge ? `Badge: ${activeTab.badge}` : "Student-facing tab",
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

        .stu-page-root {
          position: relative;
          padding-bottom: 0.5rem;
        }

        .stu-page-bg {
          background-color: var(--parchment);
        }

        .stu-hero {
          border-radius: 0.25rem;
          overflow: hidden;
          background-color: var(--ink);
          background-image: linear-gradient(135deg, #0a1628 0%, #12213a 50%, #1a3060 100%);
          position: relative;
        }

        .stu-hero::before {
          content: 'SERVICES';
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

        .stu-hero-rule {
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--gold), var(--gold-light), var(--gold), transparent);
        }

        .stu-hero-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2rem, 4.8vw, 3.2rem);
          font-weight: 700;
          color: #fff;
          line-height: 1.15;
        }

        .stu-hero-desc {
          font-family: 'Source Serif 4', serif;
          color: rgba(240,235,224,0.75);
          font-size: 0.95rem;
          line-height: 1.9;
          margin-top: 1.25rem;
          max-width: 42rem;
        }

        .stu-stat-card {
          background: #fff;
          border: 1px solid var(--rule);
          border-radius: 4px;
          padding: 1.45rem 1.35rem 1.1rem;
          position: relative;
          overflow: hidden;
          transition: transform .25s ease, box-shadow .25s ease;
        }

        .stu-stat-card::before {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--gold), var(--gold-light));
        }

        .stu-stat-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(18,33,58,0.09);
        }

        .stu-stat-value {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 2.45rem;
          font-weight: 700;
          color: var(--ink);
          line-height: 1;
        }

        .stu-stat-label {
          font-family: 'Source Serif 4', serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted);
          margin-top: 0.25rem;
        }

        .stu-stat-note {
          font-family: 'EB Garamond', serif;
          font-style: italic;
          font-size: 0.82rem;
          color: var(--gold);
          margin-top: 0.12rem;
        }

        .stu-section-label {
          font-family: 'Source Serif 4', serif;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--gold);
        }

        .stu-section-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 2rem;
          font-weight: 700;
          color: var(--ink);
          line-height: 1.2;
          margin-top: 0.4rem;
        }

        .stu-divider-rule {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin: 0.65rem 0 1.5rem;
        }
        .stu-divider-rule::before,
        .stu-divider-rule::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--rule);
        }
        .stu-divider-rule span {
          color: var(--gold);
          font-size: 0.7rem;
        }

        .stu-identity-card {
          background: #fff;
          border: 1px solid var(--rule);
          border-radius: 4px;
          padding: 2rem 2rem;
        }

        .stu-identity-prose {
          font-size: 0.92rem;
          line-height: 1.9;
          color: #4a4235;
        }

        .stu-identity-prose p + p { margin-top: 0.9rem; }

        .stu-pillars-card {
          background: var(--ink);
          background-image: linear-gradient(160deg, #0a1628 0%, #12213a 100%);
          border-radius: 4px;
          padding: 2rem;
        }

        .stu-pillars-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #fff;
          line-height: 1.3;
          margin-top: 0.9rem;
        }

        .stu-pillars-item {
          border-bottom: 1px solid rgba(184,134,11,0.18);
          padding: 1.1rem 0;
        }
        .stu-pillars-item:last-child { border-bottom: none; padding-bottom: 0; }
        .stu-pillars-icon { color: var(--gold); font-size: 1.1rem; display: block; margin-bottom: 0.35rem; }
        .stu-pillars-item h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
        }
        .stu-pillars-item p {
          font-size: 0.82rem;
          line-height: 1.75;
          color: rgba(240,235,224,0.65);
          margin-top: 0.35rem;
        }

        .stu-cta-band {
          background: var(--ink);
          background-image: linear-gradient(135deg, #0a1628 0%, #12213a 60%, #1a3060 100%);
          border-radius: 4px;
          padding: 2.75rem 2.25rem;
          position: relative;
          overflow: hidden;
        }

        .stu-cta-band::after {
          content: 'ANU';
          position: absolute;
          right: 1.5rem;
          top: 50%;
          transform: translateY(-50%);
          font-family: 'Playfair Display', serif;
          font-size: 6.4rem;
          font-weight: 700;
          color: rgba(184,134,11,0.07);
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }

        .stu-tabs-row {
          display: flex;
          flex-wrap: wrap;
          gap: .5rem;
          margin-top: 1.1rem;
        }

        .stu-tab-chip {
          border-radius: 9999px;
          padding: .55rem 1rem;
          font-size: .8rem;
          font-weight: 700;
          border: 1px solid rgba(217,208,191,1);
          background: rgba(255,255,255,0.95);
          transition: transform .15s ease, border-color .15s ease, background .15s ease;
          cursor: pointer;
        }
        .stu-tab-chip:hover {
          border-color: rgba(184,134,11,0.35);
          transform: translateY(-1px);
        }
        .stu-tab-chip[data-active="true"] {
          border-color: rgba(212,160,23,0.35);
          background: rgba(212,160,23,0.12);
          color: var(--ink);
        }
      `}</style>

      <div className="stu-page-root stu-page-bg">
        {/* Hero */}
        <section className="stu-hero mb-8">
          <div className="stu-hero-rule" />
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
              Student Services
            </p>

            <h1 className="stu-hero-title mt-3">{activeTab.title}</h1>

            <p className="stu-hero-desc">{activeTab.description}</p>

            {/* In-hero tab chips for smooth switching */}
            <div className="stu-tabs-row">
              {activeTab && (activeTab as any) && (
                // Render only the current tab as a chip to keep design consistent with sidebar.
                // Sidebar already provides full navigation; this keeps “butter smooth” without duplicate UI.
                <button
                  type="button"
                  className="stu-tab-chip"
                  data-active="true"
                  onClick={() => onPageChange(activeTab.key)}
                  aria-label="Current service tab"
                >
                  {activeTab.shortTitle}
                </button>
              )}
            </div>
          </div>
          <div className="stu-hero-rule" />
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
            <div className="stu-stat-card" key={s.label}>
              <p className="stu-stat-value">{s.value}</p>
              <p className="stu-stat-label">{s.label}</p>
              <p className="stu-stat-note">{s.note}</p>
            </div>
          ))}
        </section>

        {/* Identity + Pillars */}
        {activeTab.key === "overview" && (
          <section className="mb-14">
            <p className="stu-section-label">Guiding Principles</p>
            <h2 className="stu-section-heading">
              Centralized Care &amp; <em>Student Welfare</em>
            </h2>
            <div className="stu-divider-rule">
              <span>✦</span>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.25fr_0.75fr]">
              {/* Identity prose */}
              <div className="stu-identity-card">
                <div className="stu-identity-prose">
                  <p>
                    Acharya Nagarjuna University coordinates student services to support your
                    academic journey from admission to graduation. The university provides unified
                    guidance for examinations, certificates, career development, and institutional
                    support systems.
                  </p>
                  <p>
                    We aim to reduce administrative friction and ensure transparent workflows,
                    letting you focus on your study, research, and campus participation.
                  </p>
                  <p>
                    Whether you are verifying exam notifications, checking results, applying for
                    duplicate certificates, or contacting student welfare cells, this hub outlines
                    the necessary steps, requirements, and escalation guidance.
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
                    "Centralized support built on transparent processes and academic
                    responsibility."
                  </blockquote>
                </div>
              </div>

              {/* Pillars */}
              <div className="stu-pillars-card">
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
                  Service Vision
                </p>
                <h3 className="stu-pillars-title">Core Anchors</h3>
                <div style={{ marginTop: "1.25rem" }}>
                  <div className="stu-pillars-item">
                    <span className="stu-pillars-icon">◈</span>
                    <h3>Academic Integrity</h3>
                    <p>
                      Fair examinations, transparent results evaluation, and verified institutional
                      records.
                    </p>
                  </div>
                  <div className="stu-pillars-item">
                    <span className="stu-pillars-icon">✦</span>
                    <h3>Access & Speed</h3>
                    <p>
                      Digital portal integration, clear request forms, and reliable turnaround
                      expectations.
                    </p>
                  </div>
                  <div className="stu-pillars-item">
                    <span className="stu-pillars-icon">❖</span>
                    <h3>Welfare & Redressal</h3>
                    <p>
                      Dedicated cells for anti-ragging, women safety, grievance redressal, and
                      inclusive aid.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Tab-Specific Content */}
        <section className="mb-10">
          <StudentServiceContent tab={activeTab} />
        </section>
      </div>
    </>
  );
}
