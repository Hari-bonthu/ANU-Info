import { createFileRoute, Link } from "@tanstack/react-router";
import BreadcrumbTrail from "@/components/BreadcrumbTrail";
import { SiteFooter } from "@/components/site-footer";
import { useEffect, useRef } from "react";

const chapters = [
  {
    era: "Antiquity",
    year: "2nd c. CE",
    numeral: "I",
    title: "Knowledge on the Krishna Riverbank",
    body: "The region's intellectual memory is forever tied to Acharya Nagarjuna — philosopher, physician, logician — whose presence along the Krishna Delta established a culture of rigorous inquiry that outlasted empires.",
    accent: "The root of an ancient tradition.",
  },
  {
    era: "Pre-history",
    year: "1967",
    numeral: "II",
    title: "A Region Demands Its Own University",
    body: "Growing regional aspiration for accessible postgraduate education compelled academic expansion. Extension-stage work at Nallapadu, Guntur, signalled that a full university was no longer a wish — it was an inevitability.",
    accent: "A community's voice, finally heard.",
  },
  {
    era: "Founding",
    year: "1976",
    numeral: "III",
    title: "The University Is Born",
    body: "Acharya Nagarjuna University was constituted under Act 43 of 1976 and formally inaugurated on 11 September 1976. A charter signed, a campus staked, a future opened — all in a single season.",
    accent: "September 11, 1976 — the inaugural day.",
  },
  {
    era: "Growth",
    year: "1980s – 1990s",
    numeral: "IV",
    title: "Departments, Disciplines, Depth",
    body: "Teaching departments multiplied. Postgraduate programmes took root. Research ecosystems formed around faculty of growing ambition. The institution earned its shape through sustained, unglamorous dedication.",
    accent: "Quiet decades of serious work.",
  },
  {
    era: "Identity",
    year: "2004",
    numeral: "V",
    title: "A Name That Honours Its Lineage",
    body: "Formally renamed Acharya Nagarjuna University, the institution stitched its modern mission to its ancient inspiration — making explicit what had always been implicit: that great learning demands great roots.",
    accent: "A name restored, not invented.",
  },
  {
    era: "Present",
    year: "2026",
    numeral: "VI",
    title: "A Mature University in Full Stride",
    body: "ANU today serves thousands through campus departments, extension centres and a sprawling affiliated college ecosystem. Five decades of accumulated intent, now fully expressed.",
    accent: "300 acres. 39 departments. 450+ colleges.",
  },
];

const outcomes = [
  {
    glyph: "✦",
    title: "Academic Depth",
    text: "A strong postgraduate orientation across arts, sciences, engineering and professional streams — built over five decades of deliberate curricular investment.",
  },
  {
    glyph: "◈",
    title: "Geographic Reach",
    text: "Educational impact multiplied through affiliated institutions, extension centres and regional higher education networks across coastal Andhra Pradesh.",
  },
  {
    glyph: "❖",
    title: "Public Purpose",
    text: "An unwavering commitment to social relevance, research contribution and inclusive student advancement — the original mandate, still held.",
  },
];

export const Route = createFileRoute("/history")({
  component: HistoryPage,
  head: () => ({
    meta: [
      { title: "History | Acharya Nagarjuna University" },
      {
        name: "description",
        content:
          "Structured timeline of Acharya Nagarjuna University from historical legacy to present-day academic role.",
      },
    ],
  }),
});

function HistoryPage() {
  const timelineRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const items = timelineRef.current?.querySelectorAll<HTMLElement>(".chapter-item");
    if (!items) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.opacity = "1";
            (e.target as HTMLElement).style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.15 },
    );
    items.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(32px)";
      el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Google Fonts */}
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
          --accent-red: #8b2020;
        }

        .history-root {
          background-color: var(--parchment);
          background-image:
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          min-height: 100vh;
          font-family: 'Source Serif 4', Georgia, serif;
          color: var(--ink);
        }

        .masthead {
          background-color: var(--ink);
          background-image: 
            linear-gradient(135deg, #0a1628 0%, #12213a 50%, #1a3060 100%);
          position: relative;
          overflow: hidden;
        }

        .masthead::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 39px,
            rgba(184,134,11,0.08) 39px,
            rgba(184,134,11,0.08) 40px
          );
        }

        .masthead-rule {
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--gold), var(--gold-light), var(--gold), transparent);
        }

        .chapter-numeral {
          font-family: 'EB Garamond', Georgia, serif;
          font-size: 5rem;
          line-height: 1;
          color: var(--gold);
          opacity: 0.18;
          position: absolute;
          top: -0.5rem;
          right: 1rem;
          font-style: italic;
          pointer-events: none;
          user-select: none;
        }

        .timeline-spine {
          position: absolute;
          left: 2.5rem;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, transparent, var(--gold) 5%, var(--gold) 95%, transparent);
        }

        .timeline-node {
          position: absolute;
          left: 2.5rem;
          top: 2.25rem;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--gold);
          border: 3px solid var(--parchment);
          box-shadow: 0 0 0 2px var(--gold);
          transform: translateX(-50%);
          z-index: 2;
        }

        .chapter-card {
          margin-left: 5.5rem;
          position: relative;
          background: #ffffff;
          border: 1px solid var(--rule);
          border-radius: 4px;
          padding: 1.75rem 2rem 1.75rem 1.75rem;
          box-shadow: 0 1px 4px rgba(18,33,58,0.06), 0 4px 16px rgba(18,33,58,0.04);
          transition: box-shadow 0.3s ease, transform 0.3s ease;
          overflow: hidden;
        }

        .chapter-card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: var(--gold);
          border-radius: 4px 0 0 4px;
        }

        .chapter-card:hover {
          box-shadow: 0 2px 8px rgba(18,33,58,0.10), 0 8px 32px rgba(18,33,58,0.08);
          transform: translateY(-2px);
        }

        .era-tag {
          font-family: 'Source Serif 4', serif;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--muted);
        }

        .year-display {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--ink);
          line-height: 1;
          margin-top: 0.25rem;
        }

        .chapter-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--ink-mid);
          margin-top: 0.35rem;
          line-height: 1.4;
        }

        .chapter-body {
          font-size: 0.9rem;
          line-height: 1.8;
          color: #4a4235;
          margin-top: 0.6rem;
        }

        .chapter-accent {
          font-family: 'EB Garamond', serif;
          font-style: italic;
          font-size: 0.85rem;
          color: var(--gold);
          margin-top: 0.75rem;
          display: block;
          border-top: 1px solid var(--rule);
          padding-top: 0.6rem;
        }

        .outcome-card {
          background: #fff;
          border: 1px solid var(--rule);
          border-radius: 4px;
          padding: 1.75rem;
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .outcome-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(18,33,58,0.08);
        }

        .outcome-glyph {
          font-size: 1.5rem;
          color: var(--gold);
          display: block;
          margin-bottom: 0.75rem;
        }

        .outcome-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--ink);
        }

        .outcome-text {
          font-size: 0.875rem;
          line-height: 1.75;
          color: var(--muted);
          margin-top: 0.5rem;
        }

        .cta-band {
          background: var(--ink);
          background-image: linear-gradient(135deg, #0a1628 0%, #12213a 60%, #1a3060 100%);
          border-radius: 4px;
          padding: 3rem;
          position: relative;
          overflow: hidden;
        }

        .cta-band::after {
          content: 'ANU';
          position: absolute;
          right: 2rem;
          top: 50%;
          transform: translateY(-50%);
          font-family: 'Playfair Display', serif;
          font-size: 9rem;
          font-weight: 700;
          color: rgba(184,134,11,0.07);
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }

        .cta-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--gold);
          color: var(--ink);
          font-family: 'Source Serif 4', serif;
          font-size: 0.875rem;
          font-weight: 600;
          padding: 0.65rem 1.5rem;
          border-radius: 3px;
          letter-spacing: 0.05em;
          transition: background 0.2s ease, transform 0.2s ease;
          text-decoration: none;
        }

        .cta-link:hover {
          background: var(--gold-light);
          transform: translateX(4px);
        }

        .section-label {
          font-family: 'Source Serif 4', serif;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--gold);
        }

        .section-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 2.25rem;
          font-weight: 700;
          color: var(--ink);
          line-height: 1.2;
          margin-top: 0.5rem;
        }

        .section-heading em {
          font-style: italic;
          font-weight: 400;
        }

        .divider-rule {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin: 0.75rem 0 1.5rem;
        }

        .divider-rule::before, .divider-rule::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--rule);
        }

        .divider-rule span {
          color: var(--gold);
          font-size: 0.7rem;
        }
      `}</style>

      <div className="history-root">
        <BreadcrumbTrail items={[{ label: "Home", href: "/" }, { label: "History" }]} />

        <main className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
          {/* ── Masthead ── */}
          <section className="masthead rounded-sm overflow-hidden mb-10">
            <div className="masthead-rule" />
            <div className="px-8 py-14 md:px-14 relative z-10">
              <p className="section-label" style={{ color: "rgba(212,160,23,0.9)" }}>
                Chronicle of Acharya Nagarjuna University
              </p>
              <h1
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1.15,
                  marginTop: "0.75rem",
                  maxWidth: "36rem",
                }}
              >
                From Ancient
                <br />
                <em style={{ fontWeight: 400 }}>Inquiry</em> to Living
                <br />
                University
              </h1>
              <p
                style={{
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "0.9rem",
                  lineHeight: 1.9,
                  color: "rgba(240,235,224,0.8)",
                  marginTop: "1.25rem",
                  maxWidth: "34rem",
                }}
              >
                Six chapters. Two millennia of intellectual lineage. One institution that honours
                its roots by refusing to stand still.
              </p>
            </div>
            <div className="masthead-rule" />
          </section>

          {/* ── Timeline ── */}
          <section className="mb-10">
            <p className="section-label">The Six Chapters</p>
            <h2 className="section-heading">
              A <em>Chronicle</em> in Full
            </h2>
            <div className="divider-rule">
              <span>✦</span>
            </div>

            <div className="relative">
              <div className="timeline-spine" />
              <ol ref={timelineRef} className="space-y-8 pb-4">
                {chapters.map((chapter, i) => (
                  <li key={chapter.year} className="chapter-item relative pt-2">
                    <div className="timeline-node" style={{ animationDelay: `${i * 0.1}s` }} />
                    <div className="chapter-card">
                      <span className="chapter-numeral">{chapter.numeral}</span>
                      <div
                        style={{
                          display: "flex",
                          gap: "1.5rem",
                          alignItems: "baseline",
                          flexWrap: "wrap",
                        }}
                      >
                        <p className="era-tag">{chapter.era}</p>
                      </div>
                      <p className="year-display">{chapter.year}</p>
                      <h3 className="chapter-title">{chapter.title}</h3>
                      <p className="chapter-body">{chapter.body}</p>
                      <span className="chapter-accent">{chapter.accent}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* ── Outcomes ── */}
          <section className="mb-10">
            <p className="section-label">Long-term Outcomes</p>
            <h2 className="section-heading">
              What This <em>Journey</em> Built
            </h2>
            <div className="divider-rule">
              <span>◈</span>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {outcomes.map((o) => (
                <div className="outcome-card" key={o.title}>
                  <span className="outcome-glyph">{o.glyph}</span>
                  <h3 className="outcome-title">{o.title}</h3>
                  <p className="outcome-text">{o.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="cta-band">
            <p className="section-label" style={{ color: "rgba(212,160,23,0.85)" }}>
              Continue Exploring
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.75rem",
                fontWeight: 700,
                color: "#fff",
                marginTop: "0.4rem",
                maxWidth: "28rem",
                lineHeight: 1.3,
              }}
            >
              Read the Institutional Profile
            </h2>
            <p
              style={{
                fontFamily: "'Source Serif 4', serif",
                fontSize: "0.875rem",
                lineHeight: 1.8,
                color: "rgba(240,235,224,0.7)",
                marginTop: "0.75rem",
                maxWidth: "30rem",
              }}
            >
              Step into the About Profile for leadership, strategic anchors and the full
              institutional overview.
            </p>
            <Link to="/aboutprofile" className="cta-link" style={{ marginTop: "1.5rem" }}>
              Open About Profile →
            </Link>
          </section>
        </main>
      </div>
    </>
  );
}
