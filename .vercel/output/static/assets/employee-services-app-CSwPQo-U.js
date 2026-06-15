import{c as t,j as e,r as n,ap as d,U as c,G as m}from"./index-oA1j-7bM.js";import{F as p}from"./file-text-CdS2X9Od.js";import{C as h}from"./calendar-days-CR40YRpt.js";const f=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],x=t("calculator",f);const g=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],v=t("clipboard-list",g);const u=[["path",{d:"M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762",key:"17lmqv"}]],b=t("heart-handshake",u);const y=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],j=t("layout-dashboard",y);const N=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],k=t("shield-alert",N);const w=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],S=t("wifi",w);function z({tab:s}){return e.jsxs("div",{className:"rounded border border-[var(--rule)] bg-white shadow-sm",children:[e.jsxs("div",{className:"border-b border-[var(--rule)] p-8",children:[e.jsx("div",{className:"flex items-center gap-3",children:s.badge&&e.jsx("span",{className:"rounded bg-[var(--parchment-dark)] px-3 py-1 font-serif text-xs font-semibold uppercase tracking-wider text-[var(--muted)]",children:s.badge})}),e.jsx("h2",{className:"font-playfair mt-4 text-3xl font-bold text-[var(--ink)] md:text-4xl",children:s.title}),e.jsx("p",{className:"font-serif mt-4 text-lg leading-relaxed text-[var(--muted)]",children:s.description})]}),e.jsxs("div",{className:"p-8",children:[s.metrics&&s.metrics.length>0&&e.jsx("div",{className:"mb-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",children:s.metrics.map((r,a)=>e.jsxs("div",{className:"rounded border border-[var(--rule)] bg-[var(--parchment)] p-6",children:[e.jsx("div",{className:"font-serif text-sm font-semibold uppercase tracking-wider text-[var(--muted)]",children:r.label}),e.jsx("div",{className:"font-playfair mt-2 text-3xl font-bold text-[var(--ink)]",children:r.value}),e.jsx("div",{className:"font-serif mt-2 text-sm text-[var(--muted)]",children:r.note})]},a))}),s.highlights&&s.highlights.length>0&&e.jsxs("div",{className:"mb-12",children:[e.jsx("h3",{className:"font-playfair mb-6 text-2xl font-bold text-[var(--ink)]",children:"Key Highlights"}),e.jsx("div",{className:"grid gap-6 sm:grid-cols-2 lg:grid-cols-3",children:s.highlights.map((r,a)=>e.jsxs("div",{className:`rounded border p-6 ${r.tone==="accent"?"border-[var(--gold)]/30 bg-[var(--gold)]/5":r.tone==="success"?"border-green-900/10 bg-green-50":"border-[var(--rule)] bg-white"}`,children:[e.jsx("h4",{className:"font-playfair text-lg font-bold text-[var(--ink)]",children:r.title}),e.jsx("p",{className:"font-serif mt-2 text-[var(--muted)]",children:r.description})]},a))})]}),s.notices&&s.notices.length>0&&e.jsxs("div",{className:"mb-12",children:[e.jsx("h3",{className:"font-playfair mb-6 text-2xl font-bold text-[var(--ink)]",children:"Recent Notices"}),e.jsx("div",{className:"space-y-4",children:s.notices.map((r,a)=>e.jsxs("div",{className:"flex flex-col gap-4 rounded border border-[var(--rule)] bg-white p-6 sm:flex-row sm:items-start",children:[e.jsx("div",{className:"shrink-0 font-serif text-sm font-semibold text-[var(--gold-light)]",children:r.date}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h4",{className:"font-playfair text-lg font-bold text-[var(--ink)]",children:r.title}),e.jsx("p",{className:"font-serif mt-2 text-[var(--muted)]",children:r.description})]}),e.jsx("span",{className:"shrink-0 rounded bg-[var(--parchment-dark)] px-3 py-1 font-serif text-xs font-semibold text-[var(--muted)]",children:r.status})]},a))})]}),s.steps&&s.steps.length>0&&e.jsxs("div",{className:"mb-12",children:[e.jsx("h3",{className:"font-playfair mb-6 text-2xl font-bold text-[var(--ink)]",children:"Action Steps"}),e.jsx("div",{className:"space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[var(--rule)] before:to-transparent",children:s.steps.map((r,a)=>e.jsxs("div",{className:"relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active",children:[e.jsx("div",{className:"flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[var(--ink)] text-white font-playfair font-bold text-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm",children:a+1}),e.jsxs("div",{className:"w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] rounded border border-[var(--rule)] bg-white p-5 shadow-sm",children:[e.jsx("h4",{className:"font-playfair text-lg font-bold text-[var(--ink)]",children:r.title}),e.jsx("p",{className:"font-serif mt-2 text-[var(--muted)]",children:r.description})]})]},a))})]}),s.resources&&s.resources.length>0&&e.jsxs("div",{className:"mb-12",children:[e.jsx("h3",{className:"font-playfair mb-6 text-2xl font-bold text-[var(--ink)]",children:"Resources & Links"}),e.jsx("div",{className:"grid gap-4 sm:grid-cols-2",children:s.resources.map((r,a)=>{const l=e.jsx("div",{className:"flex h-full flex-col justify-between rounded border border-[var(--rule)] bg-[var(--parchment)] p-6 transition-colors hover:border-[var(--gold)]/50 hover:bg-white group",children:e.jsxs("div",{children:[e.jsx("h4",{className:"font-playfair text-lg font-bold text-[var(--ink)] group-hover:text-[var(--gold-light)] transition-colors",children:r.title}),e.jsxs("div",{className:"mt-4 space-y-2 font-serif text-sm",children:[e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"font-semibold text-[var(--ink)] min-w-[100px]",children:"Channel:"}),e.jsx("span",{className:"text-[var(--muted)]",children:r.channel})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"font-semibold text-[var(--ink)] min-w-[100px]",children:"Turnaround:"}),e.jsx("span",{className:"text-[var(--muted)]",children:r.turnaround})]}),e.jsxs("div",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"font-semibold text-[var(--ink)] min-w-[100px]",children:"Requirements:"}),e.jsx("span",{className:"text-[var(--muted)]",children:r.requirements})]})]})]})});return r.href?e.jsx("a",{href:r.href,className:"block h-full",children:l},a):e.jsx("div",{className:"h-full",children:l},a)})})]}),s.faq&&s.faq.length>0&&e.jsxs("div",{className:"mb-12",children:[e.jsx("h3",{className:"font-playfair mb-6 text-2xl font-bold text-[var(--ink)]",children:"Frequently Asked Questions"}),e.jsx("div",{className:"space-y-4",children:s.faq.map((r,a)=>e.jsxs("div",{className:"rounded border border-[var(--rule)] bg-white p-6",children:[e.jsx("h4",{className:"font-playfair text-lg font-bold text-[var(--ink)]",children:r.question}),e.jsx("p",{className:"font-serif mt-3 text-[var(--muted)]",children:r.answer})]},a))})]}),e.jsxs("div",{className:"rounded border border-[var(--ink)]/10 bg-[var(--ink)] p-8 text-white",children:[e.jsx("h3",{className:"font-playfair text-2xl font-bold",children:"Support Guide"}),e.jsxs("div",{className:"mt-6 grid gap-8 sm:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-serif text-sm font-semibold uppercase tracking-wider text-[var(--gold-light)]",children:"Availability"}),e.jsx("p",{className:"font-serif mt-2",children:s.supportPanel.availability})]}),e.jsxs("div",{children:[e.jsx("div",{className:"font-serif text-sm font-semibold uppercase tracking-wider text-[var(--gold-light)]",children:"Response Time"}),e.jsx("p",{className:"font-serif mt-2",children:s.supportPanel.responseTime})]})]}),e.jsxs("div",{className:"mt-8 grid gap-8 sm:grid-cols-2",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-serif text-sm font-semibold uppercase tracking-wider text-[var(--gold-light)]",children:"Best For"}),e.jsx("ul",{className:"font-serif mt-3 list-inside list-disc space-y-2 opacity-90 marker:text-[var(--gold)]",children:s.supportPanel.bestFor.map((r,a)=>e.jsx("li",{children:r},a))})]}),e.jsxs("div",{children:[e.jsx("div",{className:"font-serif text-sm font-semibold uppercase tracking-wider text-[var(--gold-light)]",children:"Important Notes"}),e.jsx("ul",{className:"font-serif mt-3 list-inside list-disc space-y-2 opacity-90 marker:text-[var(--gold)]",children:s.supportPanel.notes.map((r,a)=>e.jsx("li",{children:r},a))})]})]})]})]})]})}const M={overview:j,"hr-payroll":x,"leave-management":h,"health-welfare":b,"service-records":v,"professional-development":m,"employee-portal":S,"staff-grievance-cell":k,downloads:p,"retirees-pensioners":c};function E({page:s,onPageChange:r}){const a=n.useMemo(()=>d(s),[s]),l=M[a.key],o=n.useMemo(()=>{const i=a.metrics??[];return[{value:i[0]?.value??"—",label:i[0]?.label??"Key focus",note:i[0]?.note??""},{value:i[1]?.value??"—",label:i[1]?.label??"Primary owner",note:i[1]?.note??""},{value:i[2]?.value??"—",label:i[2]?.label??"Best timing",note:i[2]?.note??""},{value:a.shortTitle,label:"Current view",note:a.badge?`Badge: ${a.badge}`:"Staff-facing tab"}]},[a]);return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"emp-page-root emp-page-bg",children:[e.jsxs("section",{className:"emp-hero mb-8",children:[e.jsx("div",{className:"emp-hero-rule"}),e.jsxs("div",{className:"px-6 py-12 md:px-14 relative z-10",children:[e.jsx("p",{style:{fontFamily:"'Source Serif 4', serif",fontSize:"0.65rem",fontWeight:600,letterSpacing:"0.22em",textTransform:"uppercase",color:"rgba(212,160,23,0.9)"},children:"Employee Services"}),e.jsx("h1",{className:"emp-hero-title mt-3",children:a.title}),e.jsx("p",{className:"emp-hero-desc",children:a.description}),e.jsx("div",{className:"emp-tabs-row",children:e.jsx("button",{type:"button",className:"emp-tab-chip","data-active":"true",onClick:()=>r(a.key),"aria-label":"Current service tab",children:e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx(l,{className:"h-3.5 w-3.5 text-[var(--gold)]"}),a.shortTitle]})})})]}),e.jsx("div",{className:"emp-hero-rule"})]}),e.jsx("section",{className:"mb-10",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:"1rem",marginLeft:"0px"},children:o.map(i=>e.jsxs("div",{className:"emp-stat-card",children:[e.jsx("p",{className:"emp-stat-value",children:i.value}),e.jsx("p",{className:"emp-stat-label",children:i.label}),e.jsx("p",{className:"emp-stat-note",children:i.note})]},i.label))}),a.key==="overview"&&e.jsxs("section",{className:"mb-14",children:[e.jsx("p",{className:"emp-section-label",children:"Guiding Principles"}),e.jsxs("h2",{className:"emp-section-heading",children:["Administrative Excellence & ",e.jsx("em",{children:"Staff Welfare"})]}),e.jsx("div",{className:"emp-divider-rule",children:e.jsx("span",{children:"✦"})}),e.jsxs("div",{className:"grid grid-cols-1 gap-6 lg:grid-cols-[1.25fr_0.75fr]",children:[e.jsx("div",{className:"emp-identity-card",children:e.jsxs("div",{className:"emp-identity-prose",children:[e.jsx("p",{children:"Acharya Nagarjuna University coordinates administrative and support services to empower our teaching and non-teaching staff in their academic and research pursuits. The university offers centralized facilities for payroll, leave tracking, service record management, and career advancement."}),e.jsx("p",{children:"We are committed to reducing bureaucratic complexity and delivering clean, digital workflows, allowing our members to focus on instruction, mentoring, and administrative efficiency."}),e.jsx("p",{children:"Whether you are checking your annual tax declarations, submitting medical claims, reviewing service registers, or routing research proposals for approval, this guide outlines the verified procedures, timelines, and contact channels."}),e.jsx("blockquote",{style:{marginTop:"1.25rem",paddingLeft:"1.25rem",borderLeft:"3px solid var(--gold)",fontFamily:"'EB Garamond', serif",fontStyle:"italic",fontSize:"1rem",lineHeight:1.75,color:"var(--ink-mid)"},children:'"Centralized administrative support built on transparent processes and professional accountability."'})]})}),e.jsxs("div",{className:"emp-pillars-card",children:[e.jsx("p",{style:{fontFamily:"'Source Serif 4', serif",fontSize:"0.65rem",fontWeight:600,letterSpacing:"0.2em",textTransform:"uppercase",color:"rgba(184,134,11,0.85)",marginBottom:"0.25rem"},children:"Service Vision"}),e.jsx("h3",{className:"emp-pillars-title",children:"Core Anchors"}),e.jsxs("div",{style:{marginTop:"1.25rem"},children:[e.jsxs("div",{className:"emp-pillars-item",children:[e.jsx("span",{className:"emp-pillars-icon",children:"◈"}),e.jsx("h3",{children:"Service Security"}),e.jsx("p",{className:"emp-pillars-p",children:"Service register custody, annual increment tracking, and structured retirement planning."})]}),e.jsxs("div",{className:"emp-pillars-item",children:[e.jsx("span",{className:"emp-pillars-icon",children:"✦"}),e.jsx("h3",{children:"Digital Convenience"}),e.jsx("p",{className:"emp-pillars-p",children:"Instant monthly payslip downloads, self-service portals, and online leave tracking."})]}),e.jsxs("div",{className:"emp-pillars-item",children:[e.jsx("span",{className:"emp-pillars-icon",children:"❖"}),e.jsx("h3",{children:"Academic Support"}),e.jsx("p",{className:"emp-pillars-p",children:"Duty leaves, FDP participation funding, and streamlined research grant processing."})]})]})]})]})]}),e.jsx("section",{className:"mb-10",children:e.jsx(z,{tab:a})})]})]})}export{E};
