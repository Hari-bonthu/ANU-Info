import React, { useMemo } from "react";
import { Link } from "@tanstack/react-router";
import {
  Calculator,
  CalendarDays,
  ClipboardList,
  FileText,
  GraduationCap,
  HeartHandshake,
  LayoutDashboard,
  ShieldAlert,
  Users,
  Wifi,
} from "lucide-react";
import {
  getEmployeeServiceTab,
  employeeServiceTabs,
  type EmployeeServiceTabKey,
} from "@/data/employee-services-app";
import { EmployeeServiceContent } from "@/components/employee-services/employee-service-content";

const tabIcons: Record<EmployeeServiceTabKey, typeof LayoutDashboard> = {
  overview: LayoutDashboard,
  "hr-payroll": Calculator,
  "leave-management": CalendarDays,
  "health-welfare": HeartHandshake,
  "service-records": ClipboardList,
  "professional-development": GraduationCap,
  "employee-portal": Wifi,
  "staff-grievance-cell": ShieldAlert,
  downloads: FileText,
  "retirees-pensioners": Users,
};

export function EmployeeServicesApp({
  page,
  onPageChange,
}: {
  page?: string;
  onPageChange: (page: EmployeeServiceTabKey) => void;
}) {
  const activeTab = useMemo(() => getEmployeeServiceTab(page), [page]);
  const ActiveIcon = tabIcons[activeTab.key];

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
        note: activeTab.badge ? `Badge: ${activeTab.badge}` : "Staff-facing tab",
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

        .emp-page-root {
          position: relative;
          padding-bottom: 0.5rem;
        }

        .emp-page-bg {
          background-color: var(--parchment);
        }

        .emp-hero {
          border-radius: 0.25rem;
          overflow: hidden;
          background-color: var(--ink);
          background-image: linear-gradient(135deg, #0a1628 0%, #12213a 50%, #1a3060 100%);
          position: relative;
        }

        .emp-hero::before {
          content: 'EMPLOYEE';
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

        .emp-hero-rule {
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--gold), var(--gold-light), var(--gold), transparent);
        }

        .emp-hero-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2rem, 4.8vw, 3.2rem);
          font-weight: 700;
          color: #fff;
          line-height: 1.15;
        }

        .emp-hero-desc {
          font-family: 'Source Serif 4', serif;
          color: rgba(240,235,224,0.75);
          font-size: 0.95rem;
          line-height: 1.9;
          margin-top: 1.25rem;
          max-width: 42rem;
        }

        .emp-stat-card {
          background: #fff;
          border: 1px solid var(--rule);
          border-radius: 4px;
          padding: 1.45rem 1.35rem 1.1rem;
          position: relative;
          overflow: hidden;
          transition: transform .25s ease, box-shadow .25s ease;
        }

        .emp-stat-card::before {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--gold), var(--gold-light));
        }

        .emp-stat-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(18,33,58,0.09);
        }

        .emp-stat-value {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--ink);
          line-height: 1;
        }

        .emp-stat-label {
          font-family: 'Source Serif 4', serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted);
          margin-top: 0.25rem;
        }

        .emp-stat-note {
          font-family: 'EB Garamond', serif;
          font-style: italic;
          font-size: 0.82rem;
          color: var(--gold);
          margin-top: 0.12rem;
        }

        .emp-section-label {
          font-family: 'Source Serif 4', serif;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--gold);
        }

        .emp-section-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 2rem;
          font-weight: 700;
          color: var(--ink);
          line-height: 1.2;
          margin-top: 0.4rem;
        }

        .emp-divider-rule {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin: 0.65rem 0 1.5rem;
        }
        .emp-divider-rule::before,
        .emp-divider-rule::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--rule);
        }
        .emp-divider-rule span {
          color: var(--gold);
          font-size: 0.7rem;
        }

        .emp-identity-card {
          background: #fff;
          border: 1px solid var(--rule);
          border-radius: 4px;
          padding: 2rem;
        }

        .emp-identity-prose {
          font-size: 0.92rem;
          line-height: 1.9;
          color: #4a4235;
        }

        .emp-identity-prose p + p { margin-top: 0.9rem; }

        .emp-pillars-card {
          background: var(--ink);
          background-image: linear-gradient(160deg, #0a1628 0%, #12213a 100%);
          border-radius: 4px;
          padding: 2rem;
        }

        .emp-pillars-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #fff;
          line-height: 1.3;
          margin-top: 0.9rem;
        }

        .emp-pillars-item {
          border-bottom: 1px solid rgba(184,134,11,0.18);
          padding: 1.1rem 0;
        }
        .emp-pillars-item:last-child { border-bottom: none; padding-bottom: 0; }
        .emp-pillars-icon { color: var(--gold); font-size: 1.1rem; display: block; margin-bottom: 0.35rem; }
        .emp-pillars-item h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
        }
        .emp-pillars-p {
          font-size: 0.82rem;
          line-height: 1.75;
          color: rgba(240,235,224,0.65);
          margin-top: 0.35rem;
        }

        .emp-tabs-row {
          display: flex;
          flex-wrap: wrap;
          gap: .5rem;
          margin-top: 1.1rem;
        }

        .emp-tab-chip {
          border-radius: 9999px;
          padding: .55rem 1rem;
          font-size: .8rem;
          font-weight: 700;
          border: 1px solid rgba(217,208,191,1);
          background: rgba(255,255,255,0.95);
          transition: transform .15s ease, border-color .15s ease, background .15s ease;
          cursor: pointer;
        }
        .emp-tab-chip:hover {
          border-color: rgba(184,134,11,0.35);
          transform: translateY(-1px);
        }
        .emp-tab-chip[data-active="true"] {
          border-color: rgba(212,160,23,0.35);
          background: rgba(212,160,23,0.12);
          color: var(--ink);
        }
      `}</style>

      <div className="emp-page-root emp-page-bg">
        {/* Hero */}
        <section className="emp-hero mb-8">
          <div className="emp-hero-rule" />
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
              Employee Services
            </p>

            <h1 className="emp-hero-title mt-3">{activeTab.title}</h1>

            <p className="emp-hero-desc">{activeTab.description}</p>

            {/* In-hero tab chips for smooth switching */}
            <div className="emp-tabs-row">
              <button
                type="button"
                className="emp-tab-chip"
                data-active="true"
                onClick={() => onPageChange(activeTab.key)}
                aria-label="Current service tab"
              >
                <span className="flex items-center gap-1.5">
                  <ActiveIcon className="h-3.5 w-3.5 text-[var(--gold)]" />
                  {activeTab.shortTitle}
                </span>
              </button>
            </div>
          </div>
          <div className="emp-hero-rule" />
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
            <div className="emp-stat-card" key={s.label}>
              <p className="emp-stat-value">{s.value}</p>
              <p className="emp-stat-label">{s.label}</p>
              <p className="emp-stat-note">{s.note}</p>
            </div>
          ))}
        </section>

        {/* Identity + Pillars */}
        {activeTab.key === "overview" && (
          <section className="mb-14">
            <p className="emp-section-label">Guiding Principles</p>
            <h2 className="emp-section-heading">
              Administrative Excellence &amp; <em>Staff Welfare</em>
            </h2>
            <div className="emp-divider-rule">
              <span>✦</span>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.25fr_0.75fr]">
              {/* Identity prose */}
              <div className="emp-identity-card">
                <div className="emp-identity-prose">
                  <p>
                    Acharya Nagarjuna University coordinates administrative and support services to
                    empower our teaching and non-teaching staff in their academic and research
                    pursuits. The university offers centralized facilities for payroll, leave
                    tracking, service record management, and career advancement.
                  </p>
                  <p>
                    We are committed to reducing bureaucratic complexity and delivering clean,
                    digital workflows, allowing our members to focus on instruction, mentoring, and
                    administrative efficiency.
                  </p>
                  <p>
                    Whether you are checking your annual tax declarations, submitting medical
                    claims, reviewing service registers, or routing research proposals for approval,
                    this guide outlines the verified procedures, timelines, and contact channels.
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
                    "Centralized administrative support built on transparent processes and
                    professional accountability."
                  </blockquote>
                </div>
              </div>

              {/* Pillars */}
              <div className="emp-pillars-card">
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
                <h3 className="emp-pillars-title">Core Anchors</h3>
                <div style={{ marginTop: "1.25rem" }}>
                  <div className="emp-pillars-item">
                    <span className="emp-pillars-icon">◈</span>
                    <h3>Service Security</h3>
                    <p className="emp-pillars-p">
                      Service register custody, annual increment tracking, and structured retirement
                      planning.
                    </p>
                  </div>
                  <div className="emp-pillars-item">
                    <span className="emp-pillars-icon">✦</span>
                    <h3>Digital Convenience</h3>
                    <p className="emp-pillars-p">
                      Instant monthly payslip downloads, self-service portals, and online leave
                      tracking.
                    </p>
                  </div>
                  <div className="emp-pillars-item">
                    <span className="emp-pillars-icon">❖</span>
                    <h3>Academic Support</h3>
                    <p className="emp-pillars-p">
                      Duty leaves, FDP participation funding, and streamlined research grant
                      processing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Tab-Specific Content */}
        <section className="mb-10">
          <EmployeeServiceContent tab={activeTab} />
        </section>
      </div>
    </>
  );
}
