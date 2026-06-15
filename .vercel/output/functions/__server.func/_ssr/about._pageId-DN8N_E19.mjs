import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { g as getPublishedPage, P as PageHero, a as PageSections, S as SideNavigation } from "./page-blocks-8EfF0DmX.mjs";
import { B as BreadcrumbTrail } from "./BreadcrumbTrail-CqCFC3Ty.mjs";
import { ak as Route } from "./router-Dtgf3qry.mjs";
import { a5 as CircleAlert, B as Building2, P as Phone, f as Mail, V as Clock3 } from "../_libs/lucide-react.mjs";
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
import "../_libs/zod.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/embla-carousel-react.mjs";
import "../_libs/embla-carousel-reactive-utils.mjs";
import "../_libs/embla-carousel.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/class-variance-authority.mjs";
function toReadable(input) {
  return input.replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()).trim();
}
function PlaceholderPage({
  section,
  page
}) {
  const sectionLabel = toReadable(section);
  const pageLabel = page ? toReadable(page) : "Overview";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "anu-page-root pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;1,8..60,300;1,8..60,400&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap');

        .anu-page-root {
          --ink: #12213a;
          --ink-mid: #1e3558;
          --gold: #b8860b;
          --gold-light: #d4a017;
          --parchment: #faf7f2;
          --parchment-dark: #f0ebe0;
          --cream: #f5f0e8;
          --rule: #d9d0bf;
          --muted: #6b6352;
          background-color: var(--parchment);
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          min-height: 100vh;
          font-family: 'Source Serif 4', Georgia, serif;
          color: var(--ink);
        }

        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-serif { font-family: 'Source Serif 4', Georgia, serif; }
        .font-garamond { font-family: 'EB Garamond', serif; }

        .placeholder-masthead {
          background-color: var(--ink);
          background-image: linear-gradient(135deg, #0a1628 0%, #12213a 50%, #1a3060 100%);
          position: relative;
          overflow: hidden;
        }
        .placeholder-masthead::before {
          content: 'PENDING';
          position: absolute;
          right: -2rem;
          top: 50%;
          transform: translateY(-50%);
          font-family: 'Playfair Display', serif;
          font-size: 10rem;
          font-weight: 700;
          color: rgba(184,134,11,0.03);
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }
        .anu-gold-rule {
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--gold), var(--gold-light), var(--gold), transparent);
        }
      ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbTrail, { items: [{
      label: "Home",
      href: "/"
    }, {
      label: sectionLabel,
      href: "/aboutprofile"
    }, {
      label: pageLabel
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "placeholder-masthead py-16 text-center text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-4xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-serif text-xs font-bold uppercase tracking-widest text-[var(--gold-light)]", children: [
        sectionLabel,
        " Module"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-playfair mt-3 text-4xl font-bold tracking-tight md:text-5xl text-white", children: pageLabel }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-garamond mx-auto mt-4 max-w-2xl text-base italic text-white/80", children: '"We are compiling and validating content for this section under official governance guidelines."' })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "anu-gold-rule" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1.55fr_1fr] lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded border border-[var(--rule)] bg-white p-8 shadow-sm space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-playfair text-2xl font-bold text-[var(--ink)] border-b border-[var(--rule)]/60 pb-3 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "h-6 w-6 text-[var(--gold)]" }),
          "Content Preparation In Progress"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-base leading-relaxed text-[#4a4235]", children: "This sub-section is currently being updated to reflect the most recent records, committee configurations, and leadership directives. Acharya Nagarjuna University is committed to accuracy and transparency. All verified documents will be published here upon final review." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2 pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded border border-[var(--rule)]/60 bg-[var(--parchment)]/30 p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-xs font-bold uppercase tracking-wider text-[var(--gold)]", children: "Module Section" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-playfair text-lg font-bold text-[var(--ink)] mt-1", children: sectionLabel })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded border border-[var(--rule)]/60 bg-[var(--parchment)]/30 p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-xs font-bold uppercase tracking-wider text-[var(--gold)]", children: "Target Page" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-playfair text-lg font-bold text-[var(--ink)] mt-1", children: pageLabel })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 pt-6 border-t border-[var(--rule)]/60 flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "rounded bg-[var(--ink)] px-6 py-3 font-serif text-sm font-semibold text-white transition hover:bg-[var(--ink-mid)] shadow-sm", children: "Back to Home" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/aboutprofile", className: "rounded border border-[var(--rule)] bg-white px-6 py-3 font-serif text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--parchment)] shadow-sm", children: "View University Profile" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded border border-[var(--rule)] bg-white p-6 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-playfair text-lg font-bold text-[var(--ink)] border-b border-[var(--rule)]/60 pb-2 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-5 w-5 text-[var(--gold)]" }),
          "Official Registrar Office"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-4 text-sm font-serif text-[var(--muted)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPinIcon, { className: "mt-0.5 h-4 w-4 text-[var(--gold)] shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Administrative Block, Acharya Nagarjuna University, Nagarjuna Nagar, Guntur, AP - 522510" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 text-[var(--gold)] shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+918632346114", className: "text-[var(--ink)] font-semibold hover:text-[var(--gold)] transition-colors", children: "+91 863 234 6114" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 text-[var(--gold)] shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:registrar@anu.ac.in", className: "text-[var(--ink)] font-semibold hover:text-[var(--gold)] transition-colors break-all", children: "registrar@anu.ac.in" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock3, { className: "mt-0.5 h-4 w-4 text-[var(--gold)] shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Working Hours: 10:00 AM to 5:30 PM (Mon - Fri)" })
          ] })
        ] })
      ] }) })
    ] })
  ] });
}
function MapPinIcon(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { ...props, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "10", r: "3" })
  ] });
}
function AboutPageComponent() {
  const {
    pageId
  } = Route.useParams();
  const published = getPublishedPage("about", pageId);
  if (published) {
    const {
      content
    } = published;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "anu-page-root pb-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbTrail, { items: content.breadcrumbs }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { content }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1.55fr_1fr] lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PageSections, { sections: content.sections }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SideNavigation, { content })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PlaceholderPage, { section: "about", page: pageId });
}
export {
  AboutPageComponent as component
};
