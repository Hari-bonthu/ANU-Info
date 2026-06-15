import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a6 as Route$8, a7 as resolvePage, V as getStudentServiceTab, a8 as getEmployeeServiceTab, a9 as getCampusLifeTab, a0 as getRankingsTab, Y as getResearchTab, a3 as getProgramsTab } from "./router-Dtgf3qry.mjs";
import { e as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { g as getPublishedPage, P as PageHero, a as PageSections, S as SideNavigation } from "./page-blocks-8EfF0DmX.mjs";
import { S as StudentServicesApp } from "./student-services-app-CHbWdX6V.mjs";
import { E as EmployeeServicesApp } from "./employee-services-app-D59DI9zX.mjs";
import { C as CampusLifeApp } from "./campus-life-app-aUXb19lJ.mjs";
import { R as RankingsApp } from "./rankings-app-8T7X7dFT.mjs";
import { R as ResearchApp } from "./research-app-lFtAZxaI.mjs";
import { P as ProgramsApp } from "./programs-app-oVmQZjhd.mjs";
import { B as BreadcrumbTrail } from "./BreadcrumbTrail-CqCFC3Ty.mjs";
import { B as Building2, P as Phone, f as Mail, V as Clock3 } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/embla-carousel-react.mjs";
import "../_libs/embla-carousel-reactive-utils.mjs";
import "../_libs/embla-carousel.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/zod.mjs";
function toReadable(input) {
  return input.replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()).trim();
}
function PlaceholderPage({
  section,
  page
}) {
  const sectionLabel = toReadable(section);
  const pageLabel = page ? toReadable(page) : "Overview";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-[70vh] anu-page-root", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbTrail, { items: [{
      label: "Home",
      href: "/"
    }, {
      label: sectionLabel
    }, {
      label: pageLabel
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]", children: "Page in progress" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-3 text-3xl font-bold text-[oklch(0.22_0.06_265)] md:text-4xl", children: [
        sectionLabel,
        ": ",
        pageLabel
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-3xl text-sm leading-7 text-muted-foreground md:text-base", children: "This section is being prepared as part of the official ANU website structure. Verified details such as eligibility, schedules, contacts, and downloadable documents will be added here once approved." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto grid max-w-7xl gap-6 px-6 py-10 lg:grid-cols-[1.45fr_1fr] lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold text-foreground", children: "Template Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm leading-7 text-muted-foreground", children: [
          "You are viewing the shared fallback template for incomplete routes using",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: " /pages/$section?page=$page" }),
          ". Once the final page is ready, this URL can map to the full module."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-4 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border/80 bg-background p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: "Section" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm font-semibold text-foreground", children: sectionLabel })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border/80 bg-background p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: "Page" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm font-semibold text-foreground", children: pageLabel })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90", children: "Back to Home" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/aboutprofile", className: "inline-flex items-center justify-center rounded-md border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted", children: "University Profile" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "rounded-2xl border border-border bg-white p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-foreground", children: "Official Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-3 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "mt-0.5 h-4 w-4 text-[color:var(--brand)]", "aria-hidden": true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Acharya Nagarjuna University, Nagarjuna Nagar, Guntur, Andhra Pradesh 522510" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 text-[color:var(--brand)]", "aria-hidden": true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+918632346114", className: "hover:text-foreground", children: "+91 863 234 6114" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 text-[color:var(--brand)]", "aria-hidden": true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:registrar@anu.ac.in", className: "hover:text-foreground", children: "registrar@anu.ac.in" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock3, { className: "mt-0.5 h-4 w-4 text-[color:var(--brand)]", "aria-hidden": true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Working hours and notices are published in the relevant finalized section." })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function PublishedPage({
  section,
  page
}) {
  const published = getPublishedPage(section, page);
  if (!published) return null;
  const {
    content
  } = published;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-[70vh] anu-page-root pb-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbTrail, { items: content.breadcrumbs }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { content }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto grid max-w-7xl gap-6 px-6 py-10 lg:grid-cols-[1.55fr_1fr] lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(PageSections, { sections: content.sections }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SideNavigation, { content })
    ] })
  ] });
}
function StudentServicesPage({
  page
}) {
  const navigate = useNavigate({
    from: "/pages/$section"
  });
  const currentTab = getStudentServiceTab(page);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(StudentServicesApp, { page: currentTab.key, onPageChange: (nextPage) => {
    navigate({
      to: "/pages/$section",
      params: {
        section: "student-services"
      },
      search: {
        page: nextPage
      }
    });
  } });
}
function EmployeeServicesPage({
  page
}) {
  const navigate = useNavigate({
    from: "/pages/$section"
  });
  const currentTab = getEmployeeServiceTab(page);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(EmployeeServicesApp, { page: currentTab.key, onPageChange: (nextPage) => {
    navigate({
      to: "/pages/$section",
      params: {
        section: "employee-services"
      },
      search: {
        page: nextPage
      }
    });
  } });
}
function CampusLifePage({
  page
}) {
  const navigate = useNavigate({
    from: "/pages/$section"
  });
  const currentTab = getCampusLifeTab(page);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CampusLifeApp, { page: currentTab.key, onPageChange: (nextPage) => {
    navigate({
      to: "/pages/$section",
      params: {
        section: "campus-life"
      },
      search: {
        page: nextPage
      }
    });
  } });
}
function RankingsPage({
  page
}) {
  const navigate = useNavigate({
    from: "/pages/$section"
  });
  const currentTab = getRankingsTab(page);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RankingsApp, { page: currentTab.key, onPageChange: (nextPage) => {
    navigate({
      to: "/pages/$section",
      params: {
        section: "rankings"
      },
      search: {
        page: nextPage
      }
    });
  } });
}
function ResearchPage({
  page
}) {
  const navigate = useNavigate({
    from: "/pages/$section"
  });
  const currentTab = getResearchTab(page);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ResearchApp, { page: currentTab.key, onPageChange: (nextPage) => {
    navigate({
      to: "/pages/$section",
      params: {
        section: "research"
      },
      search: {
        page: nextPage
      }
    });
  } });
}
function ProgramsPage({
  page
}) {
  const navigate = useNavigate({
    from: "/pages/$section"
  });
  const currentTab = getProgramsTab(page);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ProgramsApp, { page: currentTab.key, onPageChange: (nextPage) => {
    navigate({
      to: "/pages/$section",
      params: {
        section: "programs"
      },
      search: {
        page: nextPage
      }
    });
  } });
}
function SectionPage() {
  const {
    section
  } = Route$8.useParams();
  const {
    page
  } = Route$8.useSearch();
  const resolvedPage = resolvePage(page);
  if (section === "student-services") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(StudentServicesPage, { page: resolvedPage });
  }
  if (section === "employee-services") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(EmployeeServicesPage, { page: resolvedPage });
  }
  if (section === "campus-life") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(CampusLifePage, { page: resolvedPage });
  }
  if (section === "rankings") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(RankingsPage, { page: resolvedPage });
  }
  if (section === "research") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ResearchPage, { page: resolvedPage });
  }
  if (section === "programs") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ProgramsPage, { page: resolvedPage });
  }
  const published = getPublishedPage(section, resolvedPage);
  if (published) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(PublishedPage, { section, page: resolvedPage });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PlaceholderPage, { section, page: resolvedPage });
}
export {
  SectionPage as component
};
