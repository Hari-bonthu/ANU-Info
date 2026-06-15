import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as BreadcrumbTrail } from "./BreadcrumbTrail-CqCFC3Ty.mjs";
import { v as vcImage, r as rector, a as registrar } from "./vice-chancellor-B-RAngZe.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "./router-Dtgf3qry.mjs";
import "../_libs/embla-carousel-react.mjs";
import "../_libs/embla-carousel-reactive-utils.mjs";
import "../_libs/embla-carousel.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/lucide-react.mjs";
const profileStats = [{
  value: "1976",
  label: "Established",
  note: "Act 43 of 1976"
}, {
  value: "300",
  label: "Acres",
  note: "Main campus"
}, {
  value: "39",
  label: "Departments",
  note: "Teaching & research"
}, {
  value: "450+",
  label: "Colleges",
  note: "Affiliated institutions"
}];
const pillars = [{
  icon: "◈",
  title: "Academic Excellence",
  text: "Rigorous teaching and postgraduate depth across arts, sciences, engineering and professional studies — maintained through decades of sustained faculty effort."
}, {
  icon: "✦",
  title: "Research Orientation",
  text: "Research-driven departments pursuing interdisciplinary questions with genuine social relevance and intellectual rigour."
}, {
  icon: "❖",
  title: "Regional Inclusion",
  text: "Widening the frontier of quality higher education for students across coastal Andhra Pradesh, regardless of background or geography."
}];
const leaders = [{
  name: "Prof. K. Gangadhara Rao",
  role: "Vice Chancellor",
  image: vcImage,
  note: "Institutional leadership, long-term academic planning and quality enhancement across all faculties.",
  initial: "GR"
}, {
  name: "Prof. R. Sivarama Prasad",
  role: "Rector",
  image: rector,
  note: "Academic coordination, scholarly development and the advancement of the university's intellectual mission.",
  initial: "SP"
}, {
  name: "Prof. G. Simhachalam",
  role: "Registrar",
  image: registrar,
  note: "Administrative governance, policy implementation and the institutional operations that keep ANU moving.",
  initial: "GS"
}];
function AboutProfilePage() {
  const statsRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const cards = statsRef.current?.querySelectorAll(".stat-card");
    if (!cards) return;
    cards.forEach((card, i) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      card.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
    });
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.opacity = "1";
          e.target.style.transform = "translateY(0)";
        }
      });
    }, {
      threshold: 0.2
    });
    cards.forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
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

        .profile-root {
          background-color: var(--parchment);
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          min-height: 100vh;
          font-family: 'Source Serif 4', Georgia, serif;
          color: var(--ink);
        }

        /* ─ Masthead ─ */
        .profile-masthead {
          background-color: var(--ink);
          background-image: linear-gradient(135deg, #0a1628 0%, #12213a 50%, #1a3060 100%);
          position: relative;
          overflow: hidden;
        }

        .profile-masthead::before {
          content: 'ANU';
          position: absolute;
          right: -2rem;
          top: 50%;
          transform: translateY(-50%);
          font-family: 'Playfair Display', serif;
          font-size: 16rem;
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

        /* ─ Stats ─ */
        .stat-card {
          background: #fff;
          border: 1px solid var(--rule);
          border-radius: 4px;
          padding: 1.5rem 1.5rem 1.25rem;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--gold), var(--gold-light));
        }

        .stat-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(18,33,58,0.09);
        }

        .stat-value {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--ink);
          line-height: 1;
        }

        .stat-label {
          font-family: 'Source Serif 4', serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted);
          margin-top: 0.3rem;
        }

        .stat-note {
          font-family: 'EB Garamond', serif;
          font-style: italic;
          font-size: 0.82rem;
          color: var(--gold);
          margin-top: 0.15rem;
        }

        /* ─ Identity prose ─ */
        .identity-card {
          background: #fff;
          border: 1px solid var(--rule);
          border-radius: 4px;
          padding: 2.25rem;
        }

        .identity-prose {
          font-size: 0.9rem;
          line-height: 1.9;
          color: #4a4235;
        }

        .identity-prose p + p { margin-top: 0.9rem; }

        /* ─ Pillars ─ */
        .pillars-card {
          background: var(--ink);
          background-image: linear-gradient(160deg, #0a1628 0%, #12213a 100%);
          border-radius: 4px;
          padding: 2.25rem;
        }

        .pillar-item {
          border-bottom: 1px solid rgba(184,134,11,0.18);
          padding: 1.25rem 0;
        }

        .pillar-item:first-child { padding-top: 0; }
        .pillar-item:last-child { border-bottom: none; padding-bottom: 0; }

        .pillar-icon {
          font-size: 1.1rem;
          color: var(--gold);
          margin-bottom: 0.4rem;
          display: block;
        }

        .pillar-title {
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
        }

        .pillar-text {
          font-size: 0.82rem;
          line-height: 1.75;
          color: rgba(240,235,224,0.65);
          margin-top: 0.35rem;
        }

        /* ─ Leaders ─ */
        .leader-card {
          background: #fff;
          border: 1px solid var(--rule);
          border-radius: 4px;
          padding: 2rem 1.75rem;
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .leader-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--gold), var(--gold-light));
          border-radius: 4px 4px 0 0;
        }

        .leader-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(18,33,58,0.1);
        }

        .leader-photo {
          width: 5rem;
          height: 5rem;
          border-radius: 50%;
          object-fit: cover;
          object-position: top;
          border: 3px solid var(--parchment-dark);
          box-shadow: 0 2px 8px rgba(18,33,58,0.12);
        }

        .leader-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--ink);
          margin-top: 0.9rem;
        }

        .leader-role {
          font-size: 0.67rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gold);
          margin-top: 0.2rem;
        }

        .leader-rule {
          height: 1px;
          background: var(--rule);
          margin: 0.9rem 0;
        }

        .leader-note {
          font-family: 'EB Garamond', serif;
          font-style: italic;
          font-size: 0.9rem;
          line-height: 1.7;
          color: var(--muted);
        }

        /* ─ Shared ─ */
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
          font-size: 2rem;
          font-weight: 700;
          color: var(--ink);
          line-height: 1.2;
          margin-top: 0.4rem;
        }

        .section-heading em {
          font-style: italic;
          font-weight: 400;
        }

        .divider-rule {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin: 0.65rem 0 1.5rem;
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

        .cta-band {
          background: var(--ink);
          background-image: linear-gradient(135deg, #0a1628 0%, #12213a 60%, #1a3060 100%);
          border-radius: 4px;
          padding: 3rem;
          position: relative;
          overflow: hidden;
        }

        .cta-band::after {
          content: '1976';
          position: absolute;
          right: 2rem;
          top: 50%;
          transform: translateY(-50%);
          font-family: 'Playfair Display', serif;
          font-size: 7rem;
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
          margin-top: 1.5rem;
        }

        .cta-link:hover {
          background: var(--gold-light);
          transform: translateX(4px);
        }
      ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "profile-root", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbTrail, { items: [{
        label: "Home",
        href: "/"
      }, {
        label: "About Profile"
      }] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-5xl px-6 py-12 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "profile-masthead rounded-sm overflow-hidden mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gold-rule" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 py-14 md:px-14 relative z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
              fontFamily: "'Source Serif 4', serif",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(212,160,23,0.9)"
            }, children: "University Profile" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { style: {
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.15,
              marginTop: "0.75rem",
              maxWidth: "30rem"
            }, children: [
              "Acharya Nagarjuna",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
                fontWeight: 400,
                fontStyle: "italic",
                color: "rgba(212,160,23,0.95)"
              }, children: "University" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
              fontFamily: "'Source Serif 4', serif",
              fontSize: "0.9rem",
              lineHeight: 1.9,
              color: "rgba(240,235,224,0.75)",
              marginTop: "1.25rem",
              maxWidth: "34rem"
            }, children: "A public university shaped by heritage, academic intent and regional responsibility. Rooted in 1976. Still building." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gold-rule" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: statsRef, style: {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "1rem",
          marginBottom: "2.5rem"
        }, children: profileStats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "stat-value", children: s.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "stat-label", children: s.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "stat-note", children: s.note })
        ] }, s.label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-label", children: "Institutional Identity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-heading", children: [
            "Rooted in ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Legacy," }),
            " Focused on Relevance"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-rule", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "✦" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.25rem"
          }, className: "lg:grid-cols-identity", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `.lg-identity { display: grid; grid-template-columns: 1.25fr 0.75fr; gap: 1.25rem; } @media (max-width: 768px) { .lg-identity { grid-template-columns: 1fr; } }` }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg-identity", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "identity-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "identity-prose", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Established in 1976, Acharya Nagarjuna University evolved from a regional educational aspiration into a major public university — one that serves learners across multiple disciplines and carries the intellectual lineage of one of antiquity's most remarkable thinkers." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The institution holds a deliberate balance: foundational scholarship alongside contemporary demands in science, technology, social sciences, management and professional education. Neither purely traditional nor breathlessly modern." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "ANU continues to strengthen quality, access and employability through curriculum renewal, faculty development, student support systems and collaborative research with institutions across the country and beyond." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { style: {
                  marginTop: "1.25rem",
                  paddingLeft: "1.25rem",
                  borderLeft: "3px solid var(--gold)",
                  fontFamily: "'EB Garamond', serif",
                  fontStyle: "italic",
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  color: "var(--ink-mid)"
                }, children: '"Great learning demands great roots — and ANU has always known where its roots lie."' })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pillars-card", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(184,134,11,0.85)",
                  marginBottom: "0.25rem"
                }, children: "Vision Anchors" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: {
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1.3
                }, children: [
                  "Three pillars,",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("em", { style: {
                    fontWeight: 400
                  }, children: "one direction." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
                  marginTop: "1.25rem"
                }, children: pillars.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pillar-item", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pillar-icon", children: p.icon }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "pillar-title", children: p.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pillar-text", children: p.text })
                ] }, p.title)) })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-label", children: "Leadership" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-heading", children: [
            "Stewardship & ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Administration" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divider-rule", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "◈" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.25rem"
          }, children: leaders.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leader-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: l.image, alt: l.name, className: "leader-photo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "leader-name", children: l.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leader-role", children: l.role }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "leader-rule" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leader-note", children: l.note })
          ] }, l.name)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "cta-band", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            fontFamily: "'Source Serif 4', serif",
            fontSize: "0.65rem",
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(212,160,23,0.85)"
          }, children: "Continue Exploring" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: {
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.75rem",
            fontWeight: 700,
            color: "#fff",
            marginTop: "0.4rem",
            maxWidth: "28rem",
            lineHeight: 1.3
          }, children: "Read the Full Chronicle" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            fontFamily: "'Source Serif 4', serif",
            fontSize: "0.875rem",
            lineHeight: 1.8,
            color: "rgba(240,235,224,0.7)",
            marginTop: "0.75rem",
            maxWidth: "30rem"
          }, children: "Step into the History page for ANU's complete six-chapter timeline — from ancient inquiry to present-day university." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/history", className: "cta-link", children: "Open History →" })
        ] })
      ] })
    ] })
  ] });
}
export {
  AboutProfilePage as component
};
