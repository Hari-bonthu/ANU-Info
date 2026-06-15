import{ae as d,r as c,j as e,af as m,L as f,ag as n,ad as h}from"./index-oA1j-7bM.js";import{B as x}from"./BreadcrumbTrail-Cu86S0Ad.js";import{C as o}from"./chevron-right-C575Ms-s.js";import{R as g}from"./research-app-CbfpleOv.js";function p({pageId:t,children:i}){const a=d(t),[r,l]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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

        .research-root {
          background-color: var(--parchment);
          min-height: 100vh;
          font-family: 'Source Serif 4', Georgia, serif;
          color: var(--ink);
        }

        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-serif { font-family: 'Source Serif 4', Georgia, serif; }
        .font-garamond { font-family: 'EB Garamond', serif; }

        /* ┤ Masthead ┤ */
        .research-masthead {
          background-color: var(--ink);
          background-image: linear-gradient(135deg, #0a1628 0%, #12213a 50%, #1a3060 100%);
          position: relative;
          overflow: hidden;
        }

        .research-masthead::before {
          content: 'RESEARCH';
          position: absolute;
          right: -1rem;
          top: 50%;
          transform: translateY(-50%);
          font-family: 'Playfair Display', serif;
          font-size: clamp(4rem, 10vw, 8rem);
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

        /* ┤ Sidebar ┤ */
        .sidebar-menu {
          background: #fff;
          border: 1px solid var(--rule);
          border-radius: 4px;
          overflow: hidden;
          position: sticky;
          top: 6rem;
        }

        .sidebar-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          border-bottom: 1px solid var(--rule);
          color: var(--muted);
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          transition: all 0.2s ease;
        }

        .sidebar-link:last-child {
          border-bottom: none;
        }

        .sidebar-link:hover {
          background: var(--parchment-dark);
          color: var(--ink);
        }

        .sidebar-link[data-active="true"] {
          background: var(--ink);
          color: #fff;
        }
        
        .sidebar-link[data-active="true"] .sidebar-icon {
          color: var(--gold-light);
        }
      `}),e.jsxs("div",{className:"research-root pb-12",children:[e.jsx("div",{className:"research-masthead py-8 text-center text-white lg:py-12",children:e.jsxs("div",{className:"relative z-10 mx-auto max-w-4xl px-6",children:[e.jsx("h1",{className:"font-playfair text-3xl font-bold tracking-tight md:text-5xl",children:"Research & Development"}),e.jsx("p",{className:"font-garamond mx-auto mt-6 max-w-2xl text-lg italic tracking-wide text-[var(--gold-light)] md:text-xl",children:'"Pioneering innovation, doctoral studies, technology transfer, and business incubation."'})]})}),e.jsx("div",{className:"gold-rule"}),e.jsx("div",{className:"mx-auto max-w-[1400px] px-6 py-6 lg:px-8",children:e.jsx(x,{items:[{label:"Home",href:"/"},{label:"Research",href:"/research/overview"},{label:a.shortTitle}]})}),e.jsx("div",{className:"mx-auto max-w-[1400px] px-6 py-8 lg:px-8",children:e.jsxs("div",{className:"grid grid-cols-1 gap-10 lg:grid-cols-[300px_1fr]",children:[e.jsx("aside",{className:"w-full lg:w-auto",children:e.jsx("div",{className:"lg:sticky lg:top-24",children:e.jsxs("nav",{className:"sidebar-menu","aria-label":"Research Navigation",children:[e.jsxs("button",{type:"button",onClick:()=>l(!r),className:"w-full flex items-center justify-between bg-[var(--parchment-dark)] px-6 py-4 border-b border-[var(--rule)] text-left focus:outline-none",children:[e.jsx("h3",{className:"font-playfair text-lg font-bold text-[var(--ink)]",children:"Research Directory"}),e.jsxs("div",{className:"flex items-center gap-2 lg:hidden",children:[e.jsx("span",{className:"text-xs font-semibold uppercase tracking-wider text-[var(--gold)] bg-white border border-[var(--rule)] px-2.5 py-1 rounded",children:a.shortTitle}),e.jsx(o,{className:`h-4 w-4 transition-transform duration-200 text-[var(--gold)] ${r?"rotate-90":""}`})]})]}),e.jsx("div",{className:`${r?"flex":"hidden"} lg:flex flex-col`,children:m.map(s=>e.jsxs(f,{to:`/research/${s.key}`,className:"sidebar-link","data-active":a.key===s.key,onClick:()=>l(!1),children:[s.shortTitle,e.jsx(o,{className:"sidebar-icon h-4 w-4 opacity-50"})]},s.key))})]})})}),e.jsxs("main",{className:"min-w-0 pb-8",id:"research-content",children:[i,e.jsx("div",{className:"mt-8 rounded border border-[var(--gold)]/30 bg-[var(--gold)]/5 p-8",children:e.jsxs("div",{className:"flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-playfair text-2xl font-bold text-[var(--ink)]",children:"R&D Office Support"}),e.jsx("p",{className:"font-serif mt-2 text-lg text-[var(--muted)]",children:"Need clearances for sponsored grants, project fellow recruitment, or patent filing applications?"})]}),e.jsxs("div",{className:"flex shrink-0 flex-col items-center gap-4 sm:flex-row md:items-end",children:[e.jsx("a",{href:"tel:+918632346126",className:"flex items-center gap-2 rounded border border-[var(--rule)] bg-white px-6 py-3 font-serif text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--parchment)] hover:text-[var(--gold)]",children:"Call R&D Cell"}),e.jsx("a",{href:"mailto:research@anu.ac.in",className:"flex items-center gap-2 rounded bg-[var(--ink)] px-6 py-3 font-serif text-sm font-semibold text-white transition hover:bg-[var(--ink-mid)]",children:"Email Nodal"})]})]})})]})]})})]})]})}function j(){const{pageId:t}=n.useParams(),i=h({from:n.fullPath}),a=r=>{i({params:{pageId:r}})};return e.jsx(p,{pageId:t,children:e.jsx(g,{page:t,onPageChange:a})})}export{j as component};
