import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a0 as getRankingsTab } from "./router-Dtgf3qry.mjs";
function RankingsContent({ tab }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded border border-[var(--rule)] bg-white shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-[var(--rule)] p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: tab.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded bg-[var(--parchment-dark)] px-3 py-1 font-serif text-xs font-semibold uppercase tracking-wider text-[var(--muted)]", children: tab.badge }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-playfair mt-4 text-3xl font-bold text-[var(--ink)] md:text-4xl", children: tab.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif mt-4 text-lg leading-relaxed text-[var(--muted)]", children: tab.description })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8", children: [
      tab.metrics && tab.metrics.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4", children: tab.metrics.map((metric, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded border border-[var(--rule)] bg-[var(--parchment)] p-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-sm font-semibold uppercase tracking-wider text-[var(--muted)]", children: metric.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-playfair mt-2 text-3xl font-bold text-[var(--ink)]", children: metric.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif mt-2 text-sm text-[var(--muted)]", children: metric.note })
          ]
        },
        i
      )) }),
      tab.highlights && tab.highlights.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-playfair mb-6 text-2xl font-bold text-[var(--ink)]", children: "Key Highlights" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: tab.highlights.map((highlight, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `rounded border p-6 ${highlight.tone === "accent" ? "border-[var(--gold)]/30 bg-[var(--gold)]/5" : highlight.tone === "success" ? "border-green-900/10 bg-green-50" : "border-[var(--rule)] bg-white"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-playfair text-lg font-bold text-[var(--ink)]", children: highlight.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif mt-2 text-[var(--muted)]", children: highlight.description })
            ]
          },
          i
        )) })
      ] }),
      tab.notices && tab.notices.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-playfair mb-6 text-2xl font-bold text-[var(--ink)]", children: "Recent Announcements" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: tab.notices.map((notice, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex flex-col gap-4 rounded border border-[var(--rule)] bg-white p-6 sm:flex-row sm:items-start",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 font-serif text-sm font-semibold text-[var(--gold-light)]", children: notice.date }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-playfair text-lg font-bold text-[var(--ink)]", children: notice.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif mt-2 text-[var(--muted)]", children: notice.description })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 rounded bg-[var(--parchment-dark)] px-3 py-1 font-serif text-xs font-semibold text-[var(--muted)]", children: notice.status })
            ]
          },
          i
        )) })
      ] }),
      tab.steps && tab.steps.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-playfair mb-6 text-2xl font-bold text-[var(--ink)]", children: "Accreditation Steps" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[var(--rule)] before:to-transparent", children: tab.steps.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[var(--ink)] text-white font-playfair font-bold text-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm", children: i + 1 }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] rounded border border-[var(--rule)] bg-white p-5 shadow-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-playfair text-lg font-bold text-[var(--ink)]", children: step.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif mt-2 text-[var(--muted)]", children: step.description })
              ] })
            ]
          },
          i
        )) })
      ] }),
      tab.resources && tab.resources.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-playfair mb-6 text-2xl font-bold text-[var(--ink)]", children: "Resources & Downloads" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: tab.resources.map((resource, i) => {
          const inner = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full flex-col justify-between rounded border border-[var(--rule)] bg-[var(--parchment)] p-6 transition-colors hover:border-[var(--gold)]/50 hover:bg-white group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-playfair text-lg font-bold text-[var(--ink)] group-hover:text-[var(--gold-light)] transition-colors", children: resource.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-2 font-serif text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-[var(--ink)] min-w-[100px]", children: "Source:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--muted)]", children: resource.channel })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-[var(--ink)] min-w-[100px]", children: "Availability:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--muted)]", children: resource.turnaround })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-[var(--ink)] min-w-[100px]", children: "Access Req:" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--muted)]", children: resource.requirements })
              ] })
            ] })
          ] }) });
          return resource.href ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: resource.href, className: "block h-full", children: inner }, i) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full", children: inner }, i);
        }) })
      ] }),
      tab.faq && tab.faq.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-playfair mb-6 text-2xl font-bold text-[var(--ink)]", children: "Frequently Asked Questions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: tab.faq.map((faq, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded border border-[var(--rule)] bg-white p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-playfair text-lg font-bold text-[var(--ink)]", children: faq.question }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif mt-3 text-[var(--muted)]", children: faq.answer })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded border border-[var(--ink)]/10 bg-[var(--ink)] p-8 text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-playfair text-2xl font-bold", children: "Verification Desk Guide" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-8 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-sm font-semibold uppercase tracking-wider text-[var(--gold-light)]", children: "Timings" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif mt-2", children: tab.supportPanel.availability })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-sm font-semibold uppercase tracking-wider text-[var(--gold-light)]", children: "Response Period" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif mt-2", children: tab.supportPanel.responseTime })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-8 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-sm font-semibold uppercase tracking-wider text-[var(--gold-light)]", children: "Best For" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "font-serif mt-3 list-inside list-disc space-y-2 opacity-90 marker:text-[var(--gold)]", children: tab.supportPanel.bestFor.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: item }, i)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif text-sm font-semibold uppercase tracking-wider text-[var(--gold-light)]", children: "Official Guidelines" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "font-serif mt-3 list-inside list-disc space-y-2 opacity-90 marker:text-[var(--gold)]", children: tab.supportPanel.notes.map((note, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: note }, i)) })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function RankingsApp({
  page,
  onPageChange
}) {
  const activeTab = reactExports.useMemo(() => getRankingsTab(page), [page]);
  const heroStats = reactExports.useMemo(() => {
    const metrics = activeTab.metrics ?? [];
    return [
      {
        value: metrics[0]?.value ?? "—",
        label: metrics[0]?.label ?? "Accreditation",
        note: metrics[0]?.note ?? ""
      },
      {
        value: metrics[1]?.value ?? "—",
        label: metrics[1]?.label ?? "System",
        note: metrics[1]?.note ?? ""
      },
      {
        value: metrics[2]?.value ?? "—",
        label: metrics[2]?.label ?? "Verification",
        note: metrics[2]?.note ?? ""
      },
      {
        value: activeTab.shortTitle,
        label: "Category",
        note: activeTab.badge ? `Status: ${activeTab.badge}` : "ANU quality"
      }
    ];
  }, [activeTab]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
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
      ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ran-page-root ran-page-bg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "ran-hero mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ran-hero-rule" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-12 md:px-14 relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              style: {
                fontFamily: "'Source Serif 4', serif",
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(212,160,23,0.9)"
              },
              children: "Institutional Rankings"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "ran-hero-title mt-3", children: activeTab.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ran-hero-desc", children: activeTab.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ran-tabs-row", children: activeTab && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "ran-tab-chip",
              "data-active": "true",
              onClick: () => onPageChange(activeTab.key),
              "aria-label": "Current rankings tab",
              children: activeTab.shortTitle
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ran-hero-rule" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "section",
        {
          className: "mb-10",
          style: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "1rem",
            marginLeft: "0px"
          },
          children: heroStats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ran-stat-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ran-stat-value", children: s.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ran-stat-label", children: s.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ran-stat-note", children: s.note })
          ] }, s.label))
        }
      ),
      activeTab.key === "overview" && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "ran-section-label", children: "Guiding Principles" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "ran-section-heading", children: [
          "Academic Stewardship & ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Quality Assurances" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ran-divider-rule", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "✦" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-6 lg:grid-cols-[1.25fr_0.75fr]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ran-identity-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ran-identity-prose", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Acharya Nagarjuna University operates under standard national and global evaluation frameworks to monitor institutional growth. Guided by the Internal Quality Assurance Cell (IQAC), we compile comprehensive reports, coordinate quarterly internal reviews, and publish self-study metrics to maintain our NAAC and NIRF parameters." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We strictly follow a transparent data policy. Annual reports (AQAR), criterion dossiers, curriculum audits, and verification records are openly made available to all stakeholders, evaluative bodies, and public indices." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Through digital transformations, active stakeholder feedback systems, and green sustainability audits, we aim to deliver standard, high-impact education that prepares our students for global achievement." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "blockquote",
              {
                style: {
                  marginTop: "1.25rem",
                  paddingLeft: "1.25rem",
                  borderLeft: "3px solid var(--gold)",
                  fontFamily: "'EB Garamond', serif",
                  fontStyle: "italic",
                  fontSize: "1rem",
                  lineHeight: 1.75,
                  color: "var(--ink-mid)"
                },
                children: '"Upholding a heritage of academic distinction, certified quality, and eco-friendly development."'
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ran-pillars-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                style: {
                  fontFamily: "'Source Serif 4', serif",
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(184,134,11,0.85)",
                  marginBottom: "0.25rem"
                },
                children: "Quality Vision"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "ran-pillars-title", children: "Core Pillars" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: "1.25rem" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ran-pillars-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ran-pillars-icon", children: "◈" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Rigorous Standards" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Maintaining our NAAC A+ grade by auditing curriculum structures, learning outcomes, and files." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ran-pillars-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ran-pillars-icon", children: "✦" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Data Integrity" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Verifying sponsored projects, student retention metrics, and expenditures under NIRF registries." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ran-pillars-item", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ran-pillars-icon", children: "❖" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Sustainability" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Reducing campus carbon print, implementing active water recycling, and tracking UI GreenMetric parameters." })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(RankingsContent, { tab: activeTab }) })
    ] })
  ] });
}
export {
  RankingsApp as R
};
