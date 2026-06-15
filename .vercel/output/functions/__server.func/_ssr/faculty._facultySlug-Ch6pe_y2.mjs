import { k as facultyBySlug, _ as __vite_glob_0_9, a as __vite_glob_0_8, b as __vite_glob_0_7, c as __vite_glob_0_6, d as __vite_glob_0_5, e as __vite_glob_0_4, g as __vite_glob_0_3, h as __vite_glob_0_2, i as __vite_glob_0_1, j as __vite_glob_0_0 } from "./facultyProfiles-0C3lXWFY.mjs";
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useRouterState, L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as BreadcrumbTrail } from "./BreadcrumbTrail-CqCFC3Ty.mjs";
import { aa as Route$7 } from "./router-Dtgf3qry.mjs";
import { f as Mail, P as Phone, B as Building2 } from "../_libs/lucide-react.mjs";
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
import "../_libs/embla-carousel-react.mjs";
import "../_libs/embla-carousel-reactive-utils.mjs";
import "../_libs/embla-carousel.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/class-variance-authority.mjs";
const facultyImages = /* @__PURE__ */ Object.assign({
  "../assets/faculty/Dr Ch VINOD KUMAR PHOTO.jpg": __vite_glob_0_0,
  "../assets/faculty/Dr E KOTESWARARAO PHOTO.jpg": __vite_glob_0_1,
  "../assets/faculty/Dr M SYAMALA PHOTO.jpg": __vite_glob_0_2,
  "../assets/faculty/Dr N SRIHARI PHOTO.jpg": __vite_glob_0_3,
  "../assets/faculty/Dr P MERCY KUMARI PHOTO.jpg": __vite_glob_0_4,
  "../assets/faculty/Dr PB THATHAJI PHOTO.jpg": __vite_glob_0_5,
  "../assets/faculty/Dr S BALA MURALI KRISHNA PHOTO.jpg": __vite_glob_0_6,
  "../assets/faculty/Dr SHAIK AMEER PHOTO.jpg": __vite_glob_0_7,
  "../assets/faculty/Dr T SRIVALLI PHOTO.jpg": __vite_glob_0_8,
  "../assets/faculty/Dr TAV PRASAD PHOTO.jpg": __vite_glob_0_9
});
const imageByFileName = Object.entries(facultyImages).reduce((acc, [path, src]) => {
  const fileName = path.split("/").pop();
  if (fileName) {
    acc[fileName] = src;
  }
  return acc;
}, {});
const Section = ({
  id,
  title,
  items
}) => {
  if (!items.length) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id, className: "mt-10 scroll-mt-28", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "border-b border-slate-200 pb-2 text-3xl font-semibold text-[#0d2f57]", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 divide-y divide-slate-200/80", children: items.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "py-3 text-sm leading-relaxed text-slate-700", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-semibold text-[#f97316]", children: "- " }),
      item
    ] }, `${title}-${index}`)) })
  ] });
};
function FacultyProfile() {
  const {
    facultySlug = ""
  } = Route$7.useParams();
  const searchStr = useRouterState({
    select: (state) => state.location.searchStr
  });
  const query = new URLSearchParams(searchStr);
  const fromDepartmentId = query.get("fromDepartmentId");
  const fromDepartmentName = query.get("fromDepartmentName");
  const fromCollegeName = query.get("fromCollegeName");
  const profile = facultyBySlug[facultySlug];
  const imageSrc = profile ? imageByFileName[profile.imageFile] ?? "" : "";
  if (!profile) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbTrail, { items: [{
        label: "Home",
        href: "/"
      }, fromDepartmentId && fromDepartmentName ? {
        label: "Colleges"
      } : {
        label: "Faculty",
        href: "/faculty"
      }, ...fromDepartmentId && fromDepartmentName ? [...fromCollegeName ? [{
        label: fromCollegeName
      }] : [], {
        label: fromDepartmentName,
        href: `/departments/${fromDepartmentId}`
      }] : [], {
        label: "Profile"
      }] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-16 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold text-[#0d2f57]", children: "Faculty profile not found" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-slate-600", children: "The requested faculty member could not be found." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/faculty", className: "mt-8 inline-flex rounded bg-[#0d3b66] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0b3155]", children: "Back to Faculty List" })
      ] })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-[#f4f6f8]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbTrail, { items: [{
      label: "Home",
      href: "/"
    }, fromDepartmentId && fromDepartmentName ? {
      label: "Colleges"
    } : {
      label: "Faculty",
      href: "/faculty"
    }, ...fromDepartmentId && fromDepartmentName ? [...fromCollegeName ? [{
      label: fromCollegeName
    }] : [], {
      label: fromDepartmentName,
      href: `/departments/${fromDepartmentId}`
    }] : [], {
      label: profile.name
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 py-10 md:py-12 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "space-y-6 lg:sticky lg:top-28 lg:self-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-slate-200 bg-white p-5 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-bold uppercase tracking-wide text-slate-500", children: "Faculty Profile" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mt-3 space-y-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/faculty", className: "block font-semibold text-[#0d3b66]", children: "Back to Faculty" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#overview", className: "block text-slate-600 hover:text-[#0d3b66]", children: "Overview" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#research", className: "block text-slate-600 hover:text-[#f97316]", children: "Research" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#publications", className: "block text-slate-600 hover:text-[#f97316]", children: "Publications" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#achievements", className: "block text-slate-600 hover:text-[#f97316]", children: "Achievements" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "block text-slate-600 hover:text-[#f97316]", children: "Contact" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-md border border-slate-200 bg-white p-5 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-bold uppercase tracking-wide text-slate-500", children: "Research Metrics" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 space-y-3", children: profile.metrics.map((metric) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4 border-b border-slate-100 pb-2 text-sm last:border-b-0 last:pb-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-600", children: metric.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-[#0d2f57]", children: metric.value })
          ] }, metric.label)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "overview", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold tracking-tight text-[#0d2f57]", children: profile.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm xl:grid-cols-[280px_1fr_260px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group bg-slate-100", children: imageSrc ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: imageSrc, alt: profile.name, className: "h-full min-h-[320px] w-full object-cover grayscale transition duration-500 group-hover:grayscale-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full min-h-[320px] w-full items-center justify-center bg-gradient-to-br from-[#0d3b66] to-[#f97316] px-6 text-center text-2xl font-semibold text-white", children: profile.name }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-[#0d3b66] to-[#0a2f52] p-6 text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wide text-[#ffd8b5]", children: "Professor" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl font-semibold leading-tight", children: profile.designation }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-lg text-blue-100", children: profile.department }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-sm text-blue-100", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-white", children: "Qualifications: " }),
              profile.qualifications
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-3 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-blue-100", children: "Date of Joining:" }),
                " ",
                profile.dateOfJoining
              ] }),
              profile.dateOfBirth && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-blue-100", children: "Date of Birth:" }),
                " ",
                profile.dateOfBirth
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-blue-100", children: "Teaching Experience:" }),
                " ",
                profile.teachingExperience
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "contact", className: "bg-[#e9eef4] p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-bold uppercase tracking-wide text-slate-500", children: "Contact & Office" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-4 text-sm text-slate-700", children: [
              profile.contact.email && /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `mailto:${profile.contact.email}`, className: "flex gap-2 hover:text-[#0d3b66]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "mt-0.5 h-4 w-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "break-all", children: profile.contact.email })
              ] }),
              profile.contact.phone && /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `tel:${profile.contact.phone}`, className: "flex gap-2 hover:text-[#0d3b66]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "mt-0.5 h-4 w-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: profile.contact.phone })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "mt-0.5 h-4 w-4" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: profile.contact.addressLines.map((line, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: line }, `address-${index}`)) })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 rounded-md border border-slate-200 bg-white p-6 shadow-sm md:p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold italic leading-snug text-[#0d2f57]", children: "Dedicated to quality teaching, learner support, and applied research." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 h-0.5 w-24 rounded bg-[#f97316]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-4 text-base leading-relaxed text-slate-700", children: profile.summary.map((paragraph, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: paragraph }, `summary-${index}`)) }),
          profile.thesis && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "doctoral-research", className: "mt-10 scroll-mt-28", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "border-b border-slate-200 pb-2 text-3xl font-semibold text-[#0d2f57]", children: "Doctoral Research" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-2 text-sm leading-relaxed text-slate-700", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-slate-900", children: "Thesis Title:" }),
                " ",
                profile.thesis.title
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-slate-900", children: "University:" }),
                " ",
                profile.thesis.university
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-slate-900", children: "Awarded Year:" }),
                " ",
                profile.thesis.year
              ] })
            ] })
          ] }),
          profile.researchInterests.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "research", className: "mt-10 scroll-mt-28", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "border-b border-slate-200 pb-2 text-3xl font-semibold text-[#0d2f57]", children: "Research" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: profile.researchInterests.map((interest, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-[#f97316]/40 bg-[#fff2e8] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#b45309]", children: interest }, `interest-${index}`)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "experience", title: "Administrative Experience", items: profile.administrativeExperience }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "achievements", title: "Academic Achievements", items: profile.achievements }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "publications", title: "Publications & Conferences", items: profile.publications }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "memberships", title: "Memberships", items: profile.memberships }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "activities", title: "Professional Activities", items: profile.professionalActivities })
        ] })
      ] })
    ] }) })
  ] }) });
}
export {
  FacultyProfile as component
};
