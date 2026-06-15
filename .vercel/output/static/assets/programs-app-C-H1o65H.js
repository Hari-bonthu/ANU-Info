import{j as e,r as l,ak as o}from"./index-oA1j-7bM.js";function n({tab:a}){return e.jsxs("div",{className:"rounded border border-[var(--rule)] bg-white shadow-sm",children:[e.jsxs("div",{className:"border-b border-[var(--rule)] p-8",children:[e.jsx("div",{className:"flex items-center gap-3",children:a.badge&&e.jsx("span",{className:"rounded bg-[var(--parchment-dark)] px-3 py-1 font-serif text-xs font-semibold uppercase tracking-wider text-[var(--muted)]",children:a.badge})}),e.jsx("h2",{className:"font-playfair mt-4 text-3xl font-bold text-[var(--ink)] md:text-4xl",children:a.title}),e.jsx("p",{className:"font-serif mt-4 text-lg leading-relaxed text-[var(--muted)]",children:a.description})]}),e.jsxs("div",{className:"p-8",children:[a.metrics&&a.metrics.length>0&&e.jsx("div",{className:"mb-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",children:a.metrics.map((r,s)=>e.jsxs("div",{className:"rounded border border-[var(--rule)] bg-[var(--parchment)] p-6",children:[e.jsx("div",{className:"font-serif text-sm font-semibold uppercase tracking-wider text-[var(--muted)]",children:r.label}),e.jsx("div",{className:"font-playfair mt-2 text-3xl font-bold text-[var(--ink)]",children:r.value}),e.jsx("div",{className:"font-serif mt-2 text-sm text-[var(--muted)]",children:r.note})]},s))}),a.highlights&&a.highlights.length>0&&e.jsxs("div",{className:"mb-12",children:[e.jsx("h3",{className:"font-playfair mb-6 text-2xl font-bold text-[var(--ink)]",children:"Key Highlights"}),e.jsx("div",{className:"grid gap-6 sm:grid-cols-2 lg:grid-cols-3",children:a.highlights.map((r,s)=>e.jsxs("div",{className:`rounded border p-6 ${r.tone==="accent"?"border-[var(--gold)]/30 bg-[var(--gold)]/5":r.tone==="success"?"border-green-900/10 bg-green-50":"border-[var(--rule)] bg-white"}`,children:[e.jsx("h4",{className:"font-playfair text-lg font-bold text-[var(--ink)]",children:r.title}),e.jsx("p",{className:"font-serif mt-2 text-[var(--muted)]",children:r.description})]},s))})]}),a.notices&&a.notices.length>0&&e.jsxs("div",{className:"mb-12",children:[e.jsx("h3",{className:"font-playfair mb-6 text-2xl font-bold text-[var(--ink)]",children:"Academic Calendar & Notices"}),e.jsx("div",{className:"space-y-4",children:a.notices.map((r,s)=>e.jsxs("div",{className:"flex flex-col gap-4 rounded border border-[var(--rule)] bg-white p-6 sm:flex-row sm:items-start",children:[e.jsx("div",{className:"shrink-0 font-serif text-sm font-semibold text-[var(--gold-light)]",children:r.date}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h4",{className:"font-playfair text-lg font-bold text-[var(--ink)]",children:r.title}),e.jsx("p",{className:"font-serif mt-2 text-[var(--muted)]",children:r.description})]}),e.jsx("span",{className:"shrink-0 rounded bg-[var(--parchment-dark)] px-3 py-1 font-serif text-xs font-semibold text-[var(--muted)]",children:r.status})]},s))})]}),a.steps&&a.steps.length>0&&e.jsxs("div",{className:"mb-12",children:[e.jsx("h3",{className:"font-playfair mb-6 text-2xl font-bold text-[var(--ink)]",children:"Admission & Study Steps"}),e.jsx("div",{className:"space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[var(--rule)] before:to-transparent",children:a.steps.map((r,s)=>e.jsxs("div",{className:"relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active",children:[e.jsx("div",{className:"flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[var(--ink)] text-white font-playfair font-bold text-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm",children:s+1}),e.jsxs("div",{className:"w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] rounded border border-[var(--rule)] bg-white p-5 shadow-sm",children:[e.jsx("h4",{className:"font-playfair text-lg font-bold text-[var(--ink)]",children:r.title}),e.jsx("p",{className:"font-serif mt-2 text-[var(--muted)]",children:r.description})]})]},s))})]}),a.resources&&a.resources.length>0&&e.jsxs("div",{className:"mb-12",children:[e.jsx("h3",{className:"font-playfair mb-6 text-2xl font-bold text-[var(--ink)]",children:"Prospectus & Syllabus Downloads"}),e.jsx("div",{className:"grid gap-4 sm:grid-cols-2",children:a.resources.map((r,s)=>{const t=e.jsx("div",{className:"flex h-full flex-col justify-between rounded border border-[var(--rule)] bg-[var(--parchment)] p-6 transition-colors hover:border-[var(--gold)]/50 hover:bg-white group",children:e.jsxs("div",{children:[e.jsx("h4",{className:"font-playfair text-lg font-bold text-[var(--ink)] group-hover:text-[var(--gold-light)] transition-colors",children:r.title}),e.jsxs("div",{className:"mt-4 space-y-2 font-serif text-sm",children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"font-semibold text-[var(--ink)] min-w-[100px]",children:"Section:"}),e.jsx("span",{className:"text-[var(--muted)]",children:r.channel})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"font-semibold text-[var(--ink)] min-w-[100px]",children:"Access:"}),e.jsx("span",{className:"text-[var(--muted)]",children:r.turnaround})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"font-semibold text-[var(--ink)] min-w-[100px]",children:"Requirements:"}),e.jsx("span",{className:"text-[var(--muted)]",children:r.requirements})]})]})]})});return r.href?e.jsx("a",{href:r.href,className:"block h-full",children:t},s):e.jsx("div",{className:"h-full",children:t},s)})})]}),a.faq&&a.faq.length>0&&e.jsxs("div",{className:"mb-12",children:[e.jsx("h3",{className:"font-playfair mb-6 text-2xl font-bold text-[var(--ink)]",children:"Frequently Asked Questions"}),e.jsx("div",{className:"space-y-4",children:a.faq.map((r,s)=>e.jsxs("div",{className:"rounded border border-[var(--rule)] bg-white p-6",children:[e.jsx("h4",{className:"font-playfair text-lg font-bold text-[var(--ink)]",children:r.question}),e.jsx("p",{className:"font-serif mt-3 text-[var(--muted)]",children:r.answer})]},s))})]}),e.jsxs("div",{className:"rounded border border-[var(--ink)]/10 bg-[var(--ink)] p-8 text-white",children:[e.jsx("h3",{className:"font-playfair text-2xl font-bold",children:"Academic Office Instructions"}),e.jsxs("div",{className:"mt-6 grid gap-8 sm:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-serif text-sm font-semibold uppercase tracking-wider text-[var(--gold-light)]",children:"Timings"}),e.jsx("p",{className:"font-serif mt-2",children:a.supportPanel.availability})]}),e.jsxs("div",{children:[e.jsx("div",{className:"font-serif text-sm font-semibold uppercase tracking-wider text-[var(--gold-light)]",children:"Average Timeline"}),e.jsx("p",{className:"font-serif mt-2",children:a.supportPanel.responseTime})]})]}),e.jsxs("div",{className:"mt-8 grid gap-8 sm:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-serif text-sm font-semibold uppercase tracking-wider text-[var(--gold-light)]",children:"Best For"}),e.jsx("ul",{className:"font-serif mt-3 list-inside list-disc space-y-2 opacity-90 marker:text-[var(--gold)]",children:a.supportPanel.bestFor.map((r,s)=>e.jsx("li",{children:r},s))})]}),e.jsxs("div",{children:[e.jsx("div",{className:"font-serif text-sm font-semibold uppercase tracking-wider text-[var(--gold-light)]",children:"Important Guidelines"}),e.jsx("ul",{className:"font-serif mt-3 list-inside list-disc space-y-2 opacity-90 marker:text-[var(--gold)]",children:a.supportPanel.notes.map((r,s)=>e.jsx("li",{children:r},s))})]})]})]})]})]})}function c({page:a,onPageChange:r}){const s=l.useMemo(()=>o(a),[a]),t=l.useMemo(()=>{const i=s.metrics??[];return[{value:i[0]?.value??"—",label:i[0]?.label??"Streams",note:i[0]?.note??""},{value:i[1]?.value??"—",label:i[1]?.label??"Level / Duration",note:i[1]?.note??""},{value:i[2]?.value??"—",label:i[2]?.label??"Scope",note:i[2]?.note??""},{value:s.shortTitle,label:"Current view",note:s.badge?`Tag: ${s.badge}`:"Programs tab"}]},[s]);return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"pro-page-root pro-page-bg",children:[e.jsxs("section",{className:"pro-hero mb-8",children:[e.jsx("div",{className:"pro-hero-rule"}),e.jsxs("div",{className:"px-6 py-12 md:px-14 relative z-10",children:[e.jsx("p",{style:{fontFamily:"'Source Serif 4', serif",fontSize:"0.65rem",fontWeight:600,letterSpacing:"0.22em",textTransform:"uppercase",color:"rgba(212,160,23,0.9)"},children:"Academic Catalog"}),e.jsx("h1",{className:"pro-hero-title mt-3",children:s.title}),e.jsx("p",{className:"pro-hero-desc",children:s.description}),e.jsx("div",{className:"pro-tabs-row",children:s&&e.jsx("button",{type:"button",className:"pro-tab-chip","data-active":"true",onClick:()=>r(s.key),"aria-label":"Current programs tab",children:s.shortTitle})})]}),e.jsx("div",{className:"pro-hero-rule"})]}),e.jsx("section",{className:"mb-10",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:"1rem",marginLeft:"0px"},children:t.map(i=>e.jsxs("div",{className:"pro-stat-card",children:[e.jsx("p",{className:"pro-stat-value",children:i.value}),e.jsx("p",{className:"pro-stat-label",children:i.label}),e.jsx("p",{className:"pro-stat-note",children:i.note})]},i.label))}),s.key==="overview"&&e.jsxs("section",{className:"mb-14",children:[e.jsx("p",{className:"pro-section-label",children:"Guiding Principles"}),e.jsxs("h2",{className:"pro-section-heading",children:["Comprehensive Academics & ",e.jsx("em",{children:"Graduate Success"})]}),e.jsx("div",{className:"pro-divider-rule",children:e.jsx("span",{children:"✦"})}),e.jsxs("div",{className:"grid grid-cols-1 gap-6 lg:grid-cols-[1.25fr_0.75fr]",children:[e.jsx("div",{className:"pro-identity-card",children:e.jsxs("div",{className:"pro-identity-prose",children:[e.jsx("p",{children:"Acharya Nagarjuna University offers an expansive portfolio of higher education programs specifically structured to meet modern scientific, technical, and socio-economic expectations. Whether looking for full-time professional degrees (B.Tech, B.Pharm, B.Arch), classic postgraduate specializations (M.Sc, M.A), doctoral research tracks, or flexible distance education (ANUCDE), we provide certified curriculums."}),e.jsx("p",{children:"All degree structures operate under UGC directives, AICTE approvals, and Council guidelines. We continuously update study codes under Board of Studies (BOS) resolutions to align learning objectives with industry demands and licensing exam requirements."}),e.jsx("p",{children:"With state-of-the-art laboratory access, experienced faculty profiles, and strong library e-resource subscriptions, students obtain comprehensive academic support for continuous progress."}),e.jsx("blockquote",{style:{marginTop:"1.25rem",paddingLeft:"1.25rem",borderLeft:"3px solid var(--gold)",fontFamily:"'EB Garamond', serif",fontStyle:"italic",fontSize:"1rem",lineHeight:1.75,color:"var(--ink-mid)"},children:'"Delivering diverse, accredited, and flexible educational pathways for global professional success."'})]})}),e.jsxs("div",{className:"pro-pillars-card",children:[e.jsx("p",{style:{fontFamily:"'Source Serif 4', serif",fontSize:"0.65rem",fontWeight:600,letterSpacing:"0.2em",textTransform:"uppercase",color:"rgba(184,134,11,0.85)",marginBottom:"0.25rem"},children:"Curriculum Vision"}),e.jsx("h3",{className:"pro-pillars-title",children:"Core Pillars"}),e.jsxs("div",{style:{marginTop:"1.25rem"},children:[e.jsxs("div",{className:"pro-pillars-item",children:[e.jsx("span",{className:"pro-pillars-icon",children:"◈"}),e.jsx("h3",{children:"Diverse Options"}),e.jsx("p",{children:"Over 150 courses across sciences, engineering, pharmacy, humanities, and distance modes."})]}),e.jsxs("div",{className:"pro-pillars-item",children:[e.jsx("span",{className:"pro-pillars-icon",children:"✦"}),e.jsx("h3",{children:"Accredited Quality"}),e.jsx("p",{children:"All professional and research tracks fully comply with UGC, AICTE, PCI, and NATA frameworks."})]}),e.jsxs("div",{className:"pro-pillars-item",children:[e.jsx("span",{className:"pro-pillars-icon",children:"❖"}),e.jsx("h3",{children:"Flexible Learning"}),e.jsx("p",{children:"State-wide study and examination centres for CDE distance students and evening batch options."})]})]})]})]})]}),e.jsx("section",{className:"mb-10",children:e.jsx(n,{tab:s})})]})]})}export{c as P};
