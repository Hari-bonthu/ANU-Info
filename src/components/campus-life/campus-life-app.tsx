import React, { useMemo } from "react";
import type { CampusLifeTabKey } from "@/data/campus-life-app";
import { getCampusLifeTab } from "@/data/campus-life-app";
import { CampusLifeContent } from "@/components/campus-life/campus-life-content";

export function CampusLifeApp({
  page,
  onPageChange,
}: {
  page?: string;
  onPageChange: (page: CampusLifeTabKey) => void;
}) {
  const activeTab = useMemo(() => getCampusLifeTab(page), [page]);

  // Stats derived from the tab itself
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
        note: activeTab.badge ? `Badge: ${activeTab.badge}` : "Campus tab",
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

        .cam-page-root {
          position: relative;
          padding-bottom: 0.5rem;
        }

        .cam-page-bg {
          background-color: var(--parchment);
        }

        .cam-hero {
          border-radius: 0.25rem;
          overflow: hidden;
          background-color: var(--ink);
          background-image: linear-gradient(135deg, #0a1628 0%, #12213a 50%, #1a3060 100%);
          position: relative;
        }

        .cam-hero::before {
          content: 'CAMPUS';
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

        .cam-hero-rule {
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--gold), var(--gold-light), var(--gold), transparent);
        }

        .cam-hero-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2rem, 4.8vw, 3.2rem);
          font-weight: 700;
          color: #fff;
          line-height: 1.15;
        }

        .cam-hero-desc {
          font-family: 'Source Serif 4', serif;
          color: rgba(240,235,224,0.75);
          font-size: 0.95rem;
          line-height: 1.9;
          margin-top: 1.25rem;
          max-width: 42rem;
        }

        .cam-stat-card {
          background: #fff;
          border: 1px solid var(--rule);
          border-radius: 4px;
          padding: 1.45rem 1.35rem 1.1rem;
          position: relative;
          overflow: hidden;
          transition: transform .25s ease, box-shadow .25s ease;
        }

        .cam-stat-card::before {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--gold), var(--gold-light));
        }

        .cam-stat-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(18,33,58,0.09);
        }

        .cam-stat-value {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 2.45rem;
          font-weight: 700;
          color: var(--ink);
          line-height: 1;
        }

        .cam-stat-label {
          font-family: 'Source Serif 4', serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted);
          margin-top: 0.25rem;
        }

        .cam-stat-note {
          font-family: 'EB Garamond', serif;
          font-style: italic;
          font-size: 0.82rem;
          color: var(--gold);
          margin-top: 0.12rem;
        }

        .cam-section-label {
          font-family: 'Source Serif 4', serif;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--gold);
        }

        .cam-section-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 2rem;
          font-weight: 700;
          color: var(--ink);
          line-height: 1.2;
          margin-top: 0.4rem;
        }

        .cam-divider-rule {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin: 0.65rem 0 1.5rem;
        }
        .cam-divider-rule::before,
        .cam-divider-rule::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--rule);
        }
        .cam-divider-rule span {
          color: var(--gold);
          font-size: 0.7rem;
        }

        .cam-identity-card {
          background: #fff;
          border: 1px solid var(--rule);
          border-radius: 4px;
          padding: 2rem;
        }

        .cam-identity-prose {
          font-size: 0.92rem;
          line-height: 1.9;
          color: #4a4235;
        }

        .cam-identity-prose p + p { margin-top: 0.9rem; }

        .cam-pillars-card {
          background: var(--ink);
          background-image: linear-gradient(160deg, #0a1628 0%, #12213a 100%);
          border-radius: 4px;
          padding: 2rem;
        }

        .cam-pillars-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #fff;
          line-height: 1.3;
          margin-top: 0.9rem;
        }

        .cam-pillars-item {
          border-bottom: 1px solid rgba(184,134,11,0.18);
          padding: 1.1rem 0;
        }
        .cam-pillars-item:last-child { border-bottom: none; padding-bottom: 0; }
        .cam-pillars-icon { color: var(--gold); font-size: 1.1rem; display: block; margin-bottom: 0.35rem; }
        .cam-pillars-item h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
        }
        .cam-pillars-item p {
          font-size: 0.82rem;
          line-height: 1.75;
          color: rgba(240,235,224,0.65);
          margin-top: 0.35rem;
        }

        .cam-tabs-row {
          display: flex;
          flex-wrap: wrap;
          gap: .5rem;
          margin-top: 1.1rem;
        }

        .cam-tab-chip {
          border-radius: 9999px;
          padding: .55rem 1rem;
          font-size: .8rem;
          font-weight: 700;
          border: 1px solid rgba(217,208,191,1);
          background: rgba(255,255,255,0.95);
          transition: transform .15s ease, border-color .15s ease, background .15s ease;
          cursor: pointer;
        }
        .cam-tab-chip:hover {
          border-color: rgba(184,134,11,0.35);
          transform: translateY(-1px);
        }
        .cam-tab-chip[data-active="true"] {
          border-color: rgba(212,160,23,0.35);
          background: rgba(212,160,23,0.12);
          color: var(--ink);
        }
      `}</style>

      <div className="cam-page-root cam-page-bg">
        {/* Hero */}
        <section className="cam-hero mb-8">
          <div className="cam-hero-rule" />
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
              Campus Life
            </p>

            <h1 className="cam-hero-title mt-3">{activeTab.title}</h1>

            <p className="cam-hero-desc">{activeTab.description}</p>

            {/* In-hero tab chip */}
            <div className="cam-tabs-row">
              {activeTab && (
                <button
                  type="button"
                  className="cam-tab-chip"
                  data-active="true"
                  onClick={() => onPageChange(activeTab.key)}
                  aria-label="Current campus tab"
                >
                  {activeTab.shortTitle}
                </button>
              )}
            </div>
          </div>
          <div className="cam-hero-rule" />
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
            <div className="cam-stat-card" key={s.label}>
              <p className="cam-stat-value">{s.value}</p>
              <p className="cam-stat-label">{s.label}</p>
              <p className="cam-stat-note">{s.note}</p>
            </div>
          ))}
        </section>

        {/* Identity + Pillars */}
        {activeTab.key === "overview" && (
          <section className="mb-14">
            <p className="cam-section-label">Guiding Principles</p>
            <h2 className="cam-section-heading">
              Active Community &amp; <em>Holistic Development</em>
            </h2>
            <div className="cam-divider-rule">
              <span>✦</span>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.25fr_0.75fr]">
              {/* Identity prose */}
              <div className="cam-identity-card">
                <div className="cam-identity-prose">
                  <p>
                    Acharya Nagarjuna University offers a comprehensive, vibrant campus ecosystem
                    designed to support student life beyond classrooms. From residential hostels
                    with cooperative dining to state-of-the-art sports playfields, our facilities
                    help students maintain fitness, construct lifelong networks, and build
                    leadership skills.
                  </p>
                  <p>
                    We actively encourage civic engagement and national pride through our NSS, NCC,
                    and Electoral Literacy chapters. By adopting local villages, participating in
                    parade drills, or launching voter registration drives, students build active
                    responsibility.
                  </p>
                  <p>
                    Whether you are an outpatient checking services at the 24/7 Health Centre,
                    recording educational radio scripts, or exploring biology at the Botanical
                    Gardens, this module presents your guides, forms, and official points of
                    contact.
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
                    "Fostering active student responsibility, health, and leadership across a green,
                    sustainable campus."
                  </blockquote>
                </div>
              </div>

              {/* Pillars */}
              <div className="cam-pillars-card">
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
                  Campus Vision
                </p>
                <h3 className="cam-pillars-title">Core Anchors</h3>
                <div style={{ marginTop: "1.25rem" }}>
                  <div className="cam-pillars-item">
                    <span className="cam-pillars-icon">◈</span>
                    <h3>Wellness & Safety</h3>
                    <p>
                      Round-the-clock medical care, emergency evacuations, residential security, and
                      safe hostelling.
                    </p>
                  </div>
                  <div className="cam-pillars-item">
                    <span className="cam-pillars-icon">✦</span>
                    <h3>Leadership & Service</h3>
                    <p>
                      Active character building via militarized drill units, NSS blood drives, and
                      electoral literacy camps.
                    </p>
                  </div>
                  <div className="cam-pillars-item">
                    <span className="cam-pillars-icon">❖</span>
                    <h3>Creative Engagement</h3>
                    <p>
                      Broadcasting on 91.2 FM, joining active sports, botanical indexing, and
                      cultural convocations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Tab-Specific Content */}
        <section className="mb-10">
          <CampusLifeContent tab={activeTab} />
        </section>
      </div>
    </>
  );
}
