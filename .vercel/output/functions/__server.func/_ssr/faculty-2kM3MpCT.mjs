import { f as facultyProfiles, _ as __vite_glob_0_9, a as __vite_glob_0_8, b as __vite_glob_0_7, c as __vite_glob_0_6, d as __vite_glob_0_5, e as __vite_glob_0_4, g as __vite_glob_0_3, h as __vite_glob_0_2, i as __vite_glob_0_1, j as __vite_glob_0_0 } from "./facultyProfiles-0C3lXWFY.mjs";
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useRouterState, O as Outlet, L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as BreadcrumbTrail } from "./BreadcrumbTrail-CqCFC3Ty.mjs";
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
  if (fileName) acc[fileName] = src;
  return acc;
}, {});
const facultyMembers = facultyProfiles.map((profile) => ({
  name: profile.name,
  slug: profile.slug,
  image: imageByFileName[profile.imageFile] ?? "",
  designation: profile.designation,
  department: profile.department
})).sort((a, b) => a.name.localeCompare(b.name));
function Faculty() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname
  });
  if (pathname !== "/faculty") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {});
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-[#f7f7f7]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbTrail, { items: [{
      label: "Home",
      href: "/"
    }, {
      label: "Faculty"
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-12 md:py-16 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-4 border-b border-slate-300 pb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold tracking-tight text-[#0f2345] md:text-5xl", children: "Featured Faculty" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/faculty", className: "text-lg text-[#0f2345] transition-colors hover:text-[#0d3b66]", children: "View all faculty" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-6 sm:grid-cols-2 sm:items-stretch lg:grid-cols-4", children: facultyMembers.map((member) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group flex h-full flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-md bg-white shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/faculty/$facultySlug", params: {
          facultySlug: member.slug
        }, children: member.image ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: member.image, alt: member.name, loading: "lazy", className: "h-64 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-64 w-full items-center justify-center bg-gradient-to-br from-[#0f2345] to-[#f97316] px-6 text-center text-2xl font-semibold text-white transition-transform duration-300 group-hover:scale-[1.02]", children: member.name }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-2xl font-semibold leading-snug text-[#0d1f3f]", children: member.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-600", children: member.designation }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-auto pt-1 text-xs text-slate-500", children: member.department })
      ] }, member.slug)) })
    ] })
  ] }) });
}
export {
  Faculty as component
};
