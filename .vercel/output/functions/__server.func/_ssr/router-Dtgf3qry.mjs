import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { c as createRouter, u as useRouter, a as createRootRoute, b as createFileRoute, l as lazyRouteComponent, H as HeadContent, S as Scripts, O as Outlet, L as Link, d as useRouterState } from "../_libs/tanstack__react-router.mjs";
import { G as redirect } from "../_libs/tanstack__router-core.mjs";
import { u as useEmblaCarousel } from "../_libs/embla-carousel-react.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { B as Building2, S as ShieldCheck, L as Lightbulb, F as FlaskConical, M as Microscope, C as CodeXml, a as ScrollText, b as BriefcaseBusiness, U as Users, D as Database, R as Rocket, N as Network, G as GraduationCap, c as Brain, d as Cpu, A as ArrowLeft, e as ArrowRight, P as Phone, f as Mail, g as Award, h as Facebook, I as Instagram, T as Twitter, i as MapPin, j as ArrowUp, k as ChevronDown, l as Search, X, m as Menu, E as ExternalLink } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/embla-carousel-reactive-utils.mjs";
import "../_libs/embla-carousel.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
const baseCommonLinks = [
  { label: "Admissions", href: "/admissions/overview" },
  { label: "Exam Notifications", href: "/student-services/exam-notifications" },
  { label: "Results", href: "/student-services/results" },
  { label: "Placements", href: "/student-services/placements" },
  { label: "Contact", href: "mailto:registrar@anu.ac.in", external: true }
];
const routeAwareLinks = {
  home: [
    { label: "Top", href: "#top" },
    { label: "Notifications", href: "#notifications" },
    { label: "About University", href: "#about-university" },
    { label: "Colleges", href: "#colleges" },
    { label: "FAQs", href: "#faq" }
  ],
  faculty: [
    { label: "Faculty List", href: "/faculty" },
    { label: "Featured Faculty", href: "/faculty" },
    { label: "Computer Science Department", href: "/departments/computer-science" },
    { label: "University Colleges", href: "/colleges/sciences" },
    { label: "Home", href: "/" }
  ],
  colleges: [
    { label: "Sciences", href: "/colleges/sciences" },
    { label: "Engineering", href: "/colleges/engineering" },
    { label: "Arts, Commerce & Law", href: "/colleges/arts-commerce-law" },
    { label: "Pharmacy", href: "/colleges/pharmacy" },
    { label: "Architecture & Planning", href: "/colleges/architecture-planning" }
  ],
  departments: [
    { label: "Computer Science", href: "/departments/computer-science" },
    { label: "Faculty", href: "/faculty" },
    { label: "Colleges", href: "/colleges/sciences" },
    { label: "Golden Jubilee", href: "/jubilee" },
    { label: "Home", href: "/" }
  ],
  jubilee: [
    { label: "Jubilee Hero", href: "/jubilee" },
    { label: "Timeline", href: "/jubilee#timeline" },
    { label: "University Home", href: "/" },
    { label: "Colleges", href: "/colleges/sciences" },
    { label: "Faculty", href: "/faculty" }
  ]
};
const socialLinks = [
  { label: "Facebook", icon: Facebook, href: "/pages/about?page=facebook" },
  { label: "Instagram", icon: Instagram, href: "/pages/about?page=instagram" },
  { label: "Twitter", icon: Twitter, href: "/pages/about?page=twitter" }
];
function getSectionFromPath(pathname) {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/faculty")) return "faculty";
  if (pathname.startsWith("/colleges")) return "colleges";
  if (pathname.startsWith("/departments")) return "departments";
  if (pathname.startsWith("/jubilee")) return "jubilee";
  return "home";
}
function toReadable(input) {
  return input.replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()).trim();
}
function getFooterContext(pathname, searchStr) {
  const section = getSectionFromPath(pathname);
  const defaultContext = {
    aboutTitle: "About University",
    aboutText: "Acharya Nagarjuna University, established in 1976, continues to serve students with strong academics, research culture and inclusive campus growth across Andhra Pradesh.",
    contextualTitle: "On This Page",
    contextualLinks: routeAwareLinks[section] ?? routeAwareLinks.home,
    commonLinks: baseCommonLinks
  };
  if (pathname.startsWith("/colleges/")) {
    const collegeId = pathname.split("/")[2] ?? "";
    const collegeName = toReadable(collegeId);
    return {
      ...defaultContext,
      aboutTitle: `${collegeName} College`,
      aboutText: `You are viewing the ${collegeName} college detail page. Explore departments, facilities, updates and admissions pathways for this academic unit.`,
      contextualTitle: "College Navigation",
      contextualLinks: [
        { label: "College Overview", href: "#top" },
        { label: "Departments", href: "#departments" },
        { label: "Admissions", href: "#admissions" },
        { label: "All Colleges", href: "/colleges/sciences" },
        { label: "Faculty", href: "/faculty" }
      ],
      commonLinks: [
        { label: "Apply Now", href: "/admissions/how-to-apply" },
        { label: "Scholarships", href: "/admissions/scholarships" },
        { label: "Academic Regulations", href: "/pages/academics?page=ordinances" },
        { label: "Results", href: "/pages/student-services?page=results" },
        { label: "Contact", href: "mailto:registrar@anu.ac.in", external: true }
      ]
    };
  }
  if (pathname.startsWith("/departments/")) {
    const departmentId = pathname.split("/")[2] ?? "";
    const departmentName = toReadable(departmentId);
    return {
      ...defaultContext,
      aboutTitle: `${departmentName} Department`,
      aboutText: `Department-focused view for ${departmentName}. Access programs, skills, facilities, research and faculty highlights from this page.`,
      contextualTitle: "Department Navigation",
      contextualLinks: [
        { label: "Department Home", href: "#top" },
        { label: "Programs", href: "#programs" },
        { label: "Faculty", href: "#faculty" },
        { label: "Facilities", href: "#facilities" },
        { label: "Research", href: "#research" }
      ],
      commonLinks: baseCommonLinks
    };
  }
  if (pathname.startsWith("/faculty/") && pathname !== "/faculty") {
    return {
      ...defaultContext,
      aboutTitle: "Faculty Profile",
      aboutText: "Detailed faculty page with profile, academic contributions, publications and contact information for the selected member.",
      contextualTitle: "Profile Navigation",
      contextualLinks: [
        { label: "Overview", href: "#overview" },
        { label: "Research", href: "#research" },
        { label: "Publications", href: "#publications" },
        { label: "Achievements", href: "#achievements" },
        { label: "Contact", href: "#contact" }
      ],
      commonLinks: [
        { label: "All Faculty", href: "/faculty" },
        { label: "Departments", href: "/colleges/sciences#departments" },
        { label: "Research Cell", href: "/pages/research?page=research-cell" },
        { label: "Consultancy Policy", href: "/pages/research?page=consultancy-policy" },
        { label: "Contact", href: "mailto:registrar@anu.ac.in", external: true }
      ]
    };
  }
  if (pathname.startsWith("/student-services/")) {
    return {
      ...defaultContext,
      aboutTitle: "Student Services Application",
      aboutText: "This student-services area now works as a real application shell with task-based tabs, classified workflows and dedicated support-cell guidance.",
      contextualTitle: "Student Service Tabs",
      contextualLinks: [
        { label: "Overview", href: "/student-services/overview" },
        { label: "Exam Section", href: "/student-services/exam-section" },
        { label: "Results", href: "/student-services/results" },
        { label: "Downloads", href: "/student-services/downloads" },
        { label: "Student Portal", href: "/student-services/student-portal" }
      ],
      commonLinks: baseCommonLinks
    };
  }
  if (pathname.startsWith("/employee-services/")) {
    return {
      ...defaultContext,
      aboutTitle: "Employee Services Application",
      aboutText: "This employee-services area operates as a dedicated module with task-based tabs, administrative workflows and support guidance for university staff.",
      contextualTitle: "Employee Service Tabs",
      contextualLinks: [
        { label: "Overview", href: "/employee-services/overview" },
        { label: "HR & Payroll", href: "/employee-services/hr-payroll" },
        { label: "Leave Management", href: "/employee-services/leave-management" },
        { label: "Downloads & Forms", href: "/employee-services/downloads" },
        { label: "Employee Portal", href: "/employee-services/employee-portal" }
      ],
      commonLinks: baseCommonLinks
    };
  }
  if (pathname.startsWith("/campus-life/")) {
    return {
      ...defaultContext,
      aboutTitle: "Campus Life Application",
      aboutText: "This campus-life area now works as a real application shell with task-based tabs, classified amenities and dedicated student affairs guidance.",
      contextualTitle: "Campus Life Tabs",
      contextualLinks: [
        { label: "Overview", href: "/campus-life/overview" },
        { label: "Hostels", href: "/campus-life/hostel" },
        { label: "Health Centre", href: "/campus-life/health-center" },
        { label: "Sports", href: "/campus-life/sports" },
        { label: "NSS Cell", href: "/campus-life/nss" }
      ],
      commonLinks: baseCommonLinks
    };
  }
  if (pathname.startsWith("/rankings/")) {
    return {
      ...defaultContext,
      aboutTitle: "Rankings & Quality Application",
      aboutText: "This rankings and quality assurance area operates as a dedicated module displaying national rankings, NAAC status, and IQAC processes.",
      contextualTitle: "Rankings Tabs",
      contextualLinks: [
        { label: "Overview", href: "/rankings/overview" },
        { label: "NIRF", href: "/rankings/nirf" },
        { label: "IQAC", href: "/rankings/iqac" },
        { label: "NAAC", href: "/rankings/naac" },
        { label: "SSR Reports", href: "/rankings/ssr" }
      ],
      commonLinks: baseCommonLinks
    };
  }
  if (pathname.startsWith("/research/")) {
    return {
      ...defaultContext,
      aboutTitle: "Research & Development Application",
      aboutText: "This research area coordinates and displays active projects, doctoral studies, ethics/consultancy policies, and business incubation.",
      contextualTitle: "Research Tabs",
      contextualLinks: [
        { label: "Overview", href: "/research/overview" },
        { label: "R&D Cell", href: "/research/r-and-d-cell" },
        { label: "Research Cell", href: "/research/research-cell" },
        { label: "Research Policy", href: "/research/research-policy" },
        { label: "Incubators", href: "/research/incubators" }
      ],
      commonLinks: baseCommonLinks
    };
  }
  if (pathname.startsWith("/programs/")) {
    return {
      ...defaultContext,
      aboutTitle: "Academic Programs Application",
      aboutText: "This programs directory details undergraduate, postgraduate, integrated, and distance education coursework offered by the university.",
      contextualTitle: "Programs Tabs",
      contextualLinks: [
        { label: "Overview", href: "/programs/overview" },
        { label: "UG Programs", href: "/programs/ug-programs" },
        { label: "PG Programs", href: "/programs/pg-programs" },
        { label: "Integrated", href: "/programs/integrated-programs" },
        { label: "Distance Education", href: "/programs/distance-education-anucde" }
      ],
      commonLinks: baseCommonLinks
    };
  }
  if (pathname.startsWith("/pages/")) {
    const routeSection = pathname.split("/")[2] ?? "section";
    const page = new URLSearchParams(searchStr).get("page") ?? "overview";
    if (routeSection === "student-services") {
      return {
        ...defaultContext,
        aboutTitle: "Student Services Application",
        aboutText: "This student-services area now works as a real application shell with task-based tabs, classified workflows and dedicated support-cell guidance.",
        contextualTitle: "Student Service Tabs",
        contextualLinks: [
          { label: "Overview", href: "/student-services/overview" },
          { label: "Exam Section", href: "/student-services/exam-section" },
          { label: "Results", href: "/student-services/results" },
          { label: "Downloads", href: "/student-services/downloads" },
          { label: "Student Portal", href: "/student-services/student-portal" }
        ],
        commonLinks: baseCommonLinks
      };
    }
    if (routeSection === "employee-services") {
      return {
        ...defaultContext,
        aboutTitle: "Employee Services Application",
        aboutText: "This employee-services area operates as a dedicated module with task-based tabs, administrative workflows and support guidance for university staff.",
        contextualTitle: "Employee Service Tabs",
        contextualLinks: [
          { label: "Overview", href: "/employee-services/overview" },
          { label: "HR & Payroll", href: "/employee-services/hr-payroll" },
          { label: "Leave Management", href: "/employee-services/leave-management" },
          { label: "Downloads & Forms", href: "/employee-services/downloads" },
          { label: "Employee Portal", href: "/employee-services/employee-portal" }
        ],
        commonLinks: baseCommonLinks
      };
    }
    if (routeSection === "campus-life") {
      return {
        ...defaultContext,
        aboutTitle: "Campus Life Application",
        aboutText: "This campus-life area now works as a real application shell with task-based tabs, classified amenities and dedicated student affairs guidance.",
        contextualTitle: "Campus Life Tabs",
        contextualLinks: [
          { label: "Overview", href: "/campus-life/overview" },
          { label: "Hostels", href: "/campus-life/hostel" },
          { label: "Health Centre", href: "/campus-life/health-center" },
          { label: "Sports", href: "/campus-life/sports" },
          { label: "NSS Cell", href: "/campus-life/nss" }
        ],
        commonLinks: baseCommonLinks
      };
    }
    if (routeSection === "rankings") {
      return {
        ...defaultContext,
        aboutTitle: "Rankings & Quality Application",
        aboutText: "This rankings and quality assurance area operates as a dedicated module displaying national rankings, NAAC status, and IQAC processes.",
        contextualTitle: "Rankings Tabs",
        contextualLinks: [
          { label: "Overview", href: "/rankings/overview" },
          { label: "NIRF", href: "/rankings/nirf" },
          { label: "IQAC", href: "/rankings/iqac" },
          { label: "NAAC", href: "/rankings/naac" },
          { label: "SSR Reports", href: "/rankings/ssr" }
        ],
        commonLinks: baseCommonLinks
      };
    }
    if (routeSection === "research") {
      return {
        ...defaultContext,
        aboutTitle: "Research & Development Application",
        aboutText: "This research area coordinates and displays active projects, doctoral studies, ethics/consultancy policies, and business incubation.",
        contextualTitle: "Research Tabs",
        contextualLinks: [
          { label: "Overview", href: "/research/overview" },
          { label: "R&D Cell", href: "/research/r-and-d-cell" },
          { label: "Research Cell", href: "/research/research-cell" },
          { label: "Research Policy", href: "/research/research-policy" },
          { label: "Incubators", href: "/research/incubators" }
        ],
        commonLinks: baseCommonLinks
      };
    }
    if (routeSection === "programs") {
      return {
        ...defaultContext,
        aboutTitle: "Academic Programs Application",
        aboutText: "This programs directory details undergraduate, postgraduate, integrated, and distance education coursework offered by the university.",
        contextualTitle: "Programs Tabs",
        contextualLinks: [
          { label: "Overview", href: "/programs/overview" },
          { label: "UG Programs", href: "/programs/ug-programs" },
          { label: "PG Programs", href: "/programs/pg-programs" },
          { label: "Integrated", href: "/programs/integrated-programs" },
          { label: "Distance Education", href: "/programs/distance-education-anucde" }
        ],
        commonLinks: baseCommonLinks
      };
    }
    return {
      ...defaultContext,
      aboutTitle: `${toReadable(routeSection)} Section`,
      aboutText: `This is a shared placeholder template for ${toReadable(routeSection)} / ${toReadable(page)}. It keeps navigation consistent while final content is being prepared.`,
      contextualTitle: "Related Pages",
      contextualLinks: [
        { label: "Section Overview", href: `/pages/${routeSection}?page=overview` },
        { label: "Admissions", href: "/admissions/overview" },
        { label: "Student Services", href: "/student-services/overview" },
        { label: "Academics", href: "/pages/academics?page=overview" },
        { label: "University Home", href: "/" }
      ],
      commonLinks: baseCommonLinks
    };
  }
  return defaultContext;
}
function renderFooterLink(item) {
  const isAnchorOnly = item.href.startsWith("#");
  const isMailOrExternal = item.external || item.href.startsWith("mailto:") || item.href.startsWith("tel:");
  if (isMailOrExternal) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: item.href,
        className: "group inline-flex items-center gap-1.5 text-white/78 transition hover:text-[color:var(--utility-bar-accent)]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.label }),
          item.external && /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3.5 w-3.5 opacity-80", "aria-hidden": true })
        ]
      }
    );
  }
  if (isAnchorOnly) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: item.href,
        className: "text-white/78 transition hover:text-[color:var(--utility-bar-accent)]",
        children: item.label
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Link,
    {
      to: item.href,
      className: "text-white/78 transition hover:text-[color:var(--utility-bar-accent)]",
      children: item.label
    }
  );
}
function SiteFooter() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const searchStr = useRouterState({ select: (state) => state.location.searchStr });
  const context = getFooterContext(pathname, searchStr);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative overflow-hidden bg-[oklch(0.18_0.05_265)] text-[oklch(0.96_0.01_250)]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "pointer-events-none absolute -left-32 -top-36 h-[420px] w-[420px] rounded-full border border-white/10"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "pointer-events-none absolute -right-20 -bottom-40 h-[420px] w-[420px] rounded-full border border-white/10"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid max-w-[1400px] gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.1fr] lg:px-8 lg:py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FooterHeading, { children: context.aboutTitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-sm leading-7 text-white/80", children: context.aboutText }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex items-center gap-3", children: socialLinks.map((item) => {
          const Icon = item.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: item.href,
              "aria-label": item.label,
              className: "flex h-10 w-10 items-center justify-center rounded-full bg-white/14 text-white transition hover:bg-[color:var(--utility-bar-accent)] hover:text-[oklch(0.18_0.05_265)]",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4", "aria-hidden": true })
            },
            item.label
          );
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { "aria-label": "Contextual footer links", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FooterHeading, { children: context.contextualTitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3 text-sm", children: context.contextualLinks.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: renderFooterLink(item) }, item.label)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { "aria-label": "University quick links", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FooterHeading, { children: "University Links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3 text-sm", children: context.commonLinks.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: renderFooterLink(item) }, item.label)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FooterHeading, { children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-6 text-sm text-white/82", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(ContactItem, { icon: Phone, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+918632346114", className: "block transition hover:text-white", children: "+91 863 234 6114" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+918632346118", className: "mt-1 block transition hover:text-white", children: "+91 863 234 6118" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ContactItem, { icon: Mail, children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:registrar@anu.ac.in", className: "transition hover:text-white", children: "registrar@anu.ac.in" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ContactItem, { icon: MapPin, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("address", { className: "not-italic leading-6", children: [
            "Acharya Nagarjuna University",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Nagarjuna Nagar, Guntur",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Andhra Pradesh 522510"
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: "#top",
        "aria-label": "Back to top",
        className: "absolute bottom-20 right-6 hidden h-12 w-12 items-center justify-center rounded-full bg-[oklch(0.65_0.19_42)] text-[oklch(0.18_0.05_265)] shadow-lg transition hover:-translate-y-1 hover:bg-[color:var(--utility-bar-accent)] lg:flex",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "h-5 w-5", "aria-hidden": true })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative bg-[oklch(0.65_0.19_42)] text-[oklch(0.18_0.05_265)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-2 px-6 py-4 text-center text-sm font-semibold md:flex-row lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "ACHARYA NAGARJUNA UNIVERSITY" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Copyright (c) ANU 2026. All rights reserved." })
    ] }) })
  ] });
}
function FooterHeading({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold tracking-tight text-white", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 h-px w-14 bg-[color:var(--utility-bar-accent)]" })
  ] });
}
function ContactItem({ children, icon: Icon }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[oklch(0.65_0.19_42)] text-[oklch(0.18_0.05_265)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4", "aria-hidden": true }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-1", children })
  ] });
}
const emblem = "/assets/university-emblem-CqyGDip5.png";
const pendingPage = (section, page) => {
  if (section === "about") {
    if (page === "overview" || page === "profile") {
      return "/aboutprofile";
    }
    if (page === "history") {
      return "/history";
    }
    if (page === "jubilee") {
      return "/jubilee";
    }
    return `/about/${encodeURIComponent(page)}`;
  }
  if (section === "admissions") {
    return `/admissions/${encodeURIComponent(page)}`;
  }
  if (section === "academics") {
    return `/academics/${encodeURIComponent(page)}`;
  }
  if (section === "student-services") {
    return `/student-services/${encodeURIComponent(page)}`;
  }
  if (section === "employee-services") {
    return `/employee-services/${encodeURIComponent(page)}`;
  }
  if (section === "campus-life") {
    return `/campus-life/${encodeURIComponent(page)}`;
  }
  if (section === "rankings") {
    return `/rankings/${encodeURIComponent(page)}`;
  }
  if (section === "research") {
    return `/research/${encodeURIComponent(page)}`;
  }
  if (section === "programs") {
    return `/programs/${encodeURIComponent(page)}`;
  }
  return `/pages/${section}?page=${encodeURIComponent(page)}`;
};
const toSlug = (value) => value.toLowerCase().replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
const TOP_RIGHT_ACCENT = [
  { label: "Placements", href: pendingPage("student-services", "placements") },
  { label: "Careers", href: pendingPage("employee-services", "careers") },
  { label: "Contact", href: pendingPage("about", "contact") }
];
const TOP_RIGHT_PORTAL = [
  { label: "Student Portal", href: pendingPage("student-services", "student-portal") },
  { label: "Employee Portal", href: pendingPage("employee-services", "employee-portal") },
  { label: "WebMail", href: pendingPage("employee-services", "webmail") }
];
const MENU = [
  {
    label: "About",
    eyebrow: "DISCOVER",
    heading: "About the University",
    promo: {
      badge: "ESTD. 1976 · NAAC A+",
      description: "A legacy of academic excellence, research and inclusive growth across South India."
    },
    columns: [
      {
        title: "OVERVIEW",
        items: [
          { label: "Profile", href: "/aboutprofile" },
          { label: "History", href: "/history" },
          { label: "Vision & Mission", href: pendingPage("about", "vision-mission") },
          { label: "Emblem", href: pendingPage("about", "emblem") }
        ]
      },
      {
        title: "LEADERSHIP",
        items: [
          { label: "Chancellor", href: pendingPage("about", "chancellor") },
          { label: "Vice Chancellor", href: pendingPage("about", "vice-chancellor") },
          { label: "Rector", href: pendingPage("about", "rector") },
          { label: "Registrar", href: pendingPage("about", "registrar") }
        ]
      },
      {
        title: "GOVERNANCE",
        items: [
          { label: "Executive Council", href: pendingPage("about", "executive-council") },
          { label: "Organization Structure", href: pendingPage("about", "organization-structure") },
          { label: "Statutory Committees", href: pendingPage("about", "statutory-committees") },
          { label: "Strategic Plan", href: pendingPage("about", "strategic-plan") }
        ]
      }
    ]
  },
  {
    label: "Academics",
    eyebrow: "LEARN",
    heading: "Academics",
    promo: {
      badge: "150+ PROGRAMS",
      description: "World-class colleges, departments and centres delivering UG, PG and doctoral education."
    },
    columns: [
      {
        title: "UNIVERSITY COLLEGES",
        items: [
          { label: "Arts, Commerce & Law", href: "/colleges/arts-commerce-law" },
          { label: "Sciences", href: "/colleges/sciences" },
          { label: "Physical Education & Sports", href: "/colleges/physical-education-sports" },
          { label: "Engineering", href: "/colleges/engineering" },
          { label: "Pharmacy", href: "/colleges/pharmacy" },
          { label: "Architecture & Planning", href: "/colleges/architecture-planning" }
        ]
      },
      {
        title: "ACADEMIC UNITS",
        items: [
          { label: "Faculty", href: "/faculty" },
          { label: "ANUCDE", href: pendingPage("academics", "anucde") },
          { label: "Library", href: pendingPage("academics", "library") }
        ]
      },
      {
        title: "SPECIALISED CENTRES",
        items: [
          { label: "Dr. B.R. Ambedkar Chair", href: pendingPage("academics", "ambedkar-chair") },
          { label: "Centre for Women Studies", href: pendingPage("academics", "women-studies") },
          { label: "Centre for CSR", href: pendingPage("academics", "csr-centre") },
          { label: "Phule Centre", href: pendingPage("academics", "phule-centre") },
          {
            label: "Mahatma Gandhi Centre",
            href: pendingPage("academics", "mahatma-gandhi-centre")
          },
          {
            label: "Babu Jagjivan Ram Centre",
            href: pendingPage("academics", "jagjivan-ram-centre")
          },
          { label: "Computer Centre", href: pendingPage("academics", "computer-centre") }
        ]
      },
      {
        title: "REGULATIONS",
        items: [
          { label: "ANU Code", href: pendingPage("academics", "anu-code") },
          { label: "Ordinances", href: pendingPage("academics", "ordinances") },
          { label: "Code of Conduct", href: pendingPage("academics", "code-of-conduct") }
        ]
      }
    ]
  },
  {
    label: "Admissions",
    eyebrow: "JOIN",
    heading: "Admissions",
    promo: {
      badge: "APPLICATIONS OPEN",
      description: "Discover programs, eligibility, fee structure and scholarships for the upcoming academic year."
    },
    columns: [
      {
        title: "GETTING STARTED",
        items: [
          { label: "Why Choose Us", href: pendingPage("admissions", "why-choose-us") },
          { label: "Academic Calendar", href: pendingPage("admissions", "academic-calendar") },
          { label: "Fee Structure", href: pendingPage("admissions", "fee-structure") },
          { label: "Scholarships", href: pendingPage("admissions", "scholarships") }
        ]
      },
      {
        title: "PROCESS",
        items: [
          { label: "How to Apply", href: pendingPage("admissions", "how-to-apply") },
          {
            label: "Eligibility Criteria",
            href: pendingPage("admissions", "eligibility-criteria")
          },
          { label: "Affiliated Colleges", href: pendingPage("admissions", "affiliated-colleges") }
        ]
      },
      {
        title: "SUPPORT",
        items: [
          { label: "Admission Helpdesk", href: pendingPage("admissions", "helpdesk") },
          { label: "FAQs", href: pendingPage("admissions", "faqs") },
          { label: "Brochure", href: pendingPage("admissions", "brochure") }
        ]
      }
    ]
  },
  {
    label: "Programs",
    eyebrow: "STUDY",
    heading: "Programs Offered",
    promo: {
      badge: "150+ COURSES",
      description: "Explore undergraduate, postgraduate and doctoral programs across colleges and centres."
    },
    columns: [
      {
        title: "UNDERGRADUATE",
        items: [
          { label: "UG Programs", href: "#" },
          { label: "Integrated Programs", href: "#" },
          { label: "Diploma Courses", href: "#" }
        ]
      },
      {
        title: "POSTGRADUATE",
        items: [
          { label: "PG Programs", href: "#" },
          { label: "PG Diploma", href: "#" },
          { label: "Distance Education (ANUCDE)", href: "#" }
        ]
      },
      {
        title: "RESEARCH & DOCTORAL",
        items: [
          { label: "PhD Programs", href: "#" },
          { label: "M.Phil Programs", href: "#" },
          { label: "Post-Doctoral Fellowships", href: "#" }
        ]
      }
    ]
  },
  {
    label: "Research",
    eyebrow: "EXPLORE",
    heading: "Research",
    promo: {
      badge: "DST-FUNDED LABS",
      description: "Funded projects, doctoral scholarship, policies and incubation across departments."
    },
    columns: [
      {
        title: "RESEARCH",
        items: [
          { label: "R&D Cell", href: "#" },
          { label: "Research Cell", href: "#" },
          { label: "Research Policy", href: "#" },
          { label: "Consultancy Policy", href: "#" },
          { label: "Incubators", href: "#" }
        ]
      }
    ]
  },
  {
    label: "Rankings",
    eyebrow: "RECOGNITION",
    heading: "Rankings",
    promo: {
      badge: "NAAC A+ ACCREDITED",
      description: "A portfolio of national and global rankings recognising academic and research excellence."
    },
    columns: [
      {
        title: "QUALITY & ACCREDITATION",
        items: [
          { label: "NIRF", href: "#" },
          { label: "IQAC", href: "#" },
          { label: "SSR", href: "#" },
          { label: "NAAC", href: "#" },
          { label: "Awards & Recognitions", href: "#" }
        ]
      },
      {
        title: "NATIONAL & GLOBAL RANKINGS",
        items: [
          { label: "QS Asia Ranking 2022", href: "#" },
          { label: "QS I-Gauge E-Leas", href: "#" },
          { label: "World Ranking", href: "#" },
          { label: "Impact Ranking", href: "#" },
          { label: "Green Metric Ranking", href: "#" },
          { label: "Green University Award 2021", href: "#" }
        ]
      }
    ]
  },
  {
    label: "Student Services",
    eyebrow: "SUPPORT",
    heading: "Student Services",
    promo: {
      badge: "STUDENT-FIRST",
      description: "Examinations, placements, scholarships and dedicated support cells for every learner."
    },
    columns: [
      {
        title: "EXAMINATIONS",
        items: [
          { label: "Exam Section", href: pendingPage("student-services", "exam-section") },
          {
            label: "Notifications & Timetables",
            href: pendingPage("student-services", "exam-notifications")
          },
          { label: "Results", href: pendingPage("student-services", "results") },
          { label: "Downloads (Forms)", href: pendingPage("student-services", "downloads") }
        ]
      },
      {
        title: "CAREER",
        items: [
          { label: "Placements", href: pendingPage("student-services", "placements") },
          { label: "Alumni", href: pendingPage("student-services", "alumni") },
          { label: "Services", href: pendingPage("student-services", "services") }
        ]
      },
      {
        title: "SUPPORT CELLS",
        items: [
          {
            label: "Anti-Ragging Cell",
            href: pendingPage("student-services", "anti-ragging-cell")
          },
          {
            label: "Women Grievance Cell",
            href: pendingPage("student-services", "women-grievance-cell")
          },
          { label: "SC/ST Cell", href: pendingPage("student-services", "sc-st-cell") },
          {
            label: "Differently Abled Cell",
            href: pendingPage("student-services", "differently-abled-cell")
          },
          {
            label: "Student Grievance Cell",
            href: pendingPage("student-services", "student-grievance-cell")
          }
        ]
      }
    ]
  },
  {
    label: "Campus Life",
    eyebrow: "EXPERIENCE",
    heading: "Campus Life",
    promo: {
      badge: "VIBRANT CAMPUS",
      description: "Hostels, sports, NSS, NCC and a thriving cultural calendar across a green 300-acre campus."
    },
    columns: [
      {
        title: "LIVE & PLAY",
        items: [
          { label: "Hostel", href: "#" },
          { label: "Health Center", href: "#" },
          { label: "Sports", href: "#" }
        ]
      },
      {
        title: "STUDENT BODIES",
        items: [
          { label: "NSS", href: "#" },
          { label: "NCC", href: "#" },
          { label: "ELC", href: "#" }
        ]
      },
      {
        title: "MEDIA & OUTREACH",
        items: [
          { label: "News", href: "#" },
          { label: "Events", href: "#" },
          { label: "ANU Radio 91.2", href: "#" },
          { label: "Herbal Garden", href: "#" }
        ]
      }
    ]
  },
  {
    label: "Employee Services",
    eyebrow: "ADMINISTRATION",
    heading: "Employee Services",
    promo: {
      badge: "FACULTY & STAFF",
      description: "Policies, regulations and quick links for faculty, employees and pensioners."
    },
    columns: [
      {
        title: "HR & ADMINISTRATION",
        items: [
          { label: "Overview", href: pendingPage("employee-services", "overview") },
          { label: "HR & Payroll", href: pendingPage("employee-services", "hr-payroll") },
          { label: "Leave Management", href: pendingPage("employee-services", "leave-management") },
          { label: "Service Records", href: pendingPage("employee-services", "service-records") }
        ]
      },
      {
        title: "WELFARE & DEVELOPMENT",
        items: [
          { label: "Health & Welfare", href: pendingPage("employee-services", "health-welfare") },
          {
            label: "Professional Development",
            href: pendingPage("employee-services", "professional-development")
          },
          {
            label: "Retirees & Pensioners",
            href: pendingPage("employee-services", "retirees-pensioners")
          }
        ]
      },
      {
        title: "SUPPORT & PORTALS",
        items: [
          { label: "Employee Portal", href: pendingPage("employee-services", "employee-portal") },
          {
            label: "Staff Grievance Cell",
            href: pendingPage("employee-services", "staff-grievance-cell")
          },
          { label: "Downloads & Forms", href: pendingPage("employee-services", "downloads") }
        ]
      }
    ]
  }
];
function UniversityNavbar() {
  const [openIndex, setOpenIndex] = reactExports.useState(null);
  const [mobileOpen, setMobileOpen] = reactExports.useState(false);
  const [mobileSection, setMobileSection] = reactExports.useState(null);
  const [searchOpen, setSearchOpen] = reactExports.useState(false);
  const [isScrolled, setIsScrolled] = reactExports.useState(false);
  const navRef = reactExports.useRef(null);
  const closeTimer = reactExports.useRef(null);
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const searchableItems = reactExports.useMemo(() => {
    const items = [];
    MENU.forEach((menu) => {
      menu.columns.forEach((col) => {
        col.items.forEach((item) => {
          const href = item.href === "#" ? pendingPage(toSlug(menu.label), toSlug(item.label)) : item.href;
          items.push({
            label: item.label,
            href,
            category: menu.label,
            subtitle: col.title
          });
        });
      });
    });
    items.push(
      { label: "Home", href: "/", category: "General" },
      { label: "University Profile", href: "/aboutprofile", category: "About" },
      { label: "Golden Jubilee Scroll", href: "/jubilee", category: "About" },
      { label: "History", href: "/history", category: "About" }
    );
    return items;
  }, []);
  const filteredResults = reactExports.useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return searchableItems.filter(
      (item) => item.label.toLowerCase().includes(q) || item.category.toLowerCase().includes(q) || item.subtitle?.toLowerCase().includes(q)
    );
  }, [searchQuery, searchableItems]);
  reactExports.useEffect(() => {
    function onClick(e) {
      if (!navRef.current?.contains(e.target)) {
        setOpenIndex(null);
        setSearchOpen(false);
      }
    }
    function onKey(e) {
      if (e.key === "Escape") {
        setOpenIndex(null);
        setMobileOpen(false);
        setSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);
  reactExports.useEffect(() => {
    const onScroll = () => {
      if (navRef.current) {
        const offset = navRef.current.offsetTop;
        if (offset > 0) {
          setIsScrolled(window.scrollY >= offset);
          return;
        }
      }
      setIsScrolled(window.scrollY > 260);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  const openMenu = (i) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpenIndex(i);
  };
  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenIndex(null), 120);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      ref: navRef,
      className: "sticky top-0 z-50 w-full",
      style: { boxShadow: "var(--nav-shadow)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "border-b",
            style: {
              backgroundColor: "var(--utility-bar)",
              borderColor: "oklch(1 0 0 / 0.12)",
              color: "var(--utility-bar-foreground)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 lg:px-8", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "/",
                    className: `hidden shrink-0 items-center gap-3 py-2 lg:flex transition-all duration-500 ease-in-out origin-left ${isScrolled ? "opacity-100 max-w-[400px] scale-100" : "opacity-0 max-w-0 scale-95 overflow-hidden pointer-events-none"}`,
                    "aria-label": "Acharya Nagarjuna University Home",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: emblem, alt: "ANU emblem", className: "h-14 w-14 object-contain shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold tracking-wide text-white/95 whitespace-nowrap", children: "Acharya Nagarjuna University" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "Main", className: "hidden lg:block flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "flex items-stretch", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: "/",
                      className: "relative flex h-full items-center gap-1 px-4 py-6 text-[13px] font-medium tracking-wide transition-colors hover:text-[color:var(--utility-bar-accent)] focus:outline-none",
                      children: "Home"
                    }
                  ) }),
                  MENU.map((item, i) => {
                    const active = openIndex === i;
                    return /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "li",
                      {
                        className: "relative",
                        onMouseEnter: () => openMenu(i),
                        onMouseLeave: scheduleClose,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            type: "button",
                            "aria-haspopup": "true",
                            "aria-expanded": active,
                            onClick: () => setOpenIndex(active ? null : i),
                            onFocus: () => openMenu(i),
                            className: "relative flex h-full items-center gap-1 px-4 py-6 text-[13px] font-medium tracking-wide transition-colors hover:text-[color:var(--utility-bar-accent)] focus:outline-none",
                            children: [
                              item.label,
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                ChevronDown,
                                {
                                  className: "h-3.5 w-3.5 transition-transform",
                                  style: { transform: active ? "rotate(180deg)" : "none" }
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  className: "pointer-events-none absolute bottom-3 left-4 right-4 h-[2px] origin-left rounded-full transition-transform duration-200",
                                  style: {
                                    backgroundColor: "var(--gold-strong)",
                                    transform: active ? "scaleX(1)" : "scaleX(0)"
                                  }
                                }
                              )
                            ]
                          }
                        )
                      },
                      item.label
                    );
                  })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:flex items-center gap-3 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "aria-label": "Search",
                    onClick: () => setSearchOpen((v) => {
                      if (v) setSearchQuery("");
                      return !v;
                    }),
                    className: "flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white/10",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4" })
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "/",
                    className: `flex items-center gap-2 py-2 lg:hidden transition-all duration-500 ease-in-out origin-left ${isScrolled ? "opacity-100 max-w-[300px] scale-100" : "opacity-0 max-w-0 scale-95 overflow-hidden pointer-events-none"}`,
                    "aria-label": "Acharya Nagarjuna University Home",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: emblem, alt: "ANU emblem", className: "h-13 w-13 object-contain shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold tracking-[0.05em] text-[color:var(--utility-bar-accent)] whitespace-nowrap", children: "Acharya Nagarjuna University" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: "-mr-2 p-2 lg:hidden",
                    "aria-label": "Toggle menu",
                    "aria-expanded": mobileOpen,
                    onClick: () => setMobileOpen((v) => !v),
                    children: mobileOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-6 w-6" })
                  }
                )
              ] }),
              searchOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border bg-background shadow-lg max-h-[60vh] overflow-y-auto transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-8 py-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 border-b border-border pb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 text-muted-foreground" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      autoFocus: true,
                      type: "search",
                      value: searchQuery,
                      onChange: (e) => setSearchQuery(e.target.value),
                      placeholder: "Search programs, departments, notifications…",
                      className: "w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => {
                        setSearchQuery("");
                        setSearchOpen(false);
                      },
                      className: "text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground",
                      children: "Close"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: searchQuery.trim() === "" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2", children: "Popular Links" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: [
                    { label: "Fee Structure", href: "/admissions/fee-structure" },
                    { label: "UG Programs", href: "/programs/ug-programs" },
                    { label: "Hostels", href: "/campus-life/hostel" },
                    {
                      label: "Exam Notifications",
                      href: "/student-services/exam-notifications"
                    },
                    { label: "Results", href: "/student-services/results" },
                    { label: "R&D Cell", href: "/research/r-and-d-cell" }
                  ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: item.href,
                      onClick: () => {
                        setSearchQuery("");
                        setSearchOpen(false);
                      },
                      className: "rounded-full bg-muted/60 px-3.5 py-1.5 text-xs text-foreground/80 hover:bg-muted hover:text-foreground transition",
                      children: item.label
                    },
                    item.label
                  )) })
                ] }) : filteredResults.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2", children: [
                    "Matches Found (",
                    filteredResults.length,
                    ")"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border/60", children: filteredResults.slice(0, 10).map((res) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: res.href,
                      onClick: () => {
                        setSearchQuery("");
                        setSearchOpen(false);
                      },
                      className: "flex items-center justify-between group",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground group-hover:text-[color:var(--brand)] transition-colors", children: res.label }),
                          res.subtitle && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 text-xs text-muted-foreground", children: [
                            "in ",
                            res.subtitle
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-wider text-muted-foreground bg-muted/40 px-2 py-0.5 rounded group-hover:bg-brand/10 group-hover:text-brand transition-colors", children: res.category })
                      ]
                    }
                  ) }, `${res.category}-${res.label}-${res.href}`)) })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-6 text-center text-sm text-muted-foreground", children: [
                  "No results found for",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-foreground", children: [
                    '"',
                    searchQuery,
                    '"'
                  ] }),
                  ". Try searching for admissions, exam, programs, or cell."
                ] }) })
              ] }) }),
              openIndex !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute left-0 right-0 hidden lg:block",
                  onMouseEnter: () => openMenu(openIndex),
                  onMouseLeave: scheduleClose,
                  children: (() => {
                    const activeMenu = MENU[openIndex];
                    return /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "border-t border-border bg-background animate-in fade-in slide-in-from-top-1 duration-150",
                        style: { boxShadow: "var(--mega-shadow)" },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1400px] px-8 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-8", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-3", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                className: "text-[11px] font-semibold tracking-[0.2em]",
                                style: { color: "var(--gold-strong)" },
                                children: activeMenu.eyebrow
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "h3",
                              {
                                className: "mt-2 text-3xl font-semibold leading-tight",
                                style: { color: "var(--brand)" },
                                children: activeMenu.heading
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                className: "mt-3 h-[2px] w-12 rounded-full",
                                style: { backgroundColor: "var(--gold-strong)" }
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "div",
                              {
                                className: "mt-6 rounded-2xl p-5",
                                style: { backgroundColor: "var(--brand-soft)" },
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    "div",
                                    {
                                      className: "inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-wider",
                                      style: {
                                        backgroundColor: "var(--brand)",
                                        color: "var(--brand-foreground)"
                                      },
                                      children: activeMenu.promo.badge
                                    }
                                  ),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-foreground/80", children: activeMenu.promo.description }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                    "a",
                                    {
                                      href: pendingPage(toSlug(activeMenu.label), "overview"),
                                      className: "mt-4 inline-flex items-center gap-1 text-sm font-semibold transition-colors",
                                      style: { color: "var(--brand)" },
                                      children: [
                                        "Learn more",
                                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
                                      ]
                                    }
                                  )
                                ]
                              }
                            )
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-9 grid grid-cols-3 gap-8", children: activeMenu.columns.map((col) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "div",
                              {
                                className: "mb-4 text-[11px] font-semibold tracking-[0.18em]",
                                style: { color: "var(--brand)" },
                                children: col.title
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: col.items.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "a",
                              {
                                href: c.href === "#" ? pendingPage(toSlug(activeMenu.label), toSlug(c.label)) : c.href,
                                className: "group block",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-foreground transition-colors group-hover:text-[color:var(--brand)]", children: c.label }),
                                  c.subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-xs text-muted-foreground", children: c.subtitle })
                                ]
                              }
                            ) }, c.label)) })
                          ] }, col.title)) })
                        ] }) })
                      }
                    );
                  })()
                }
              )
            ]
          }
        ),
        mobileOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10 bg-background text-foreground lg:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { "aria-label": "Mobile", className: "max-h-[80vh] overflow-y-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "divide-y divide-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "/",
                className: "block px-4 py-3 text-sm font-medium text-foreground/90 hover:text-foreground",
                children: "Home"
              }
            ) }),
            MENU.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  className: "flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium",
                  "aria-expanded": mobileSection === i,
                  onClick: () => setMobileSection(mobileSection === i ? null : i),
                  children: [
                    item.label,
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ChevronDown,
                      {
                        className: "h-4 w-4 transition-transform",
                        style: {
                          transform: mobileSection === i ? "rotate(180deg)" : "none"
                        }
                      }
                    )
                  ]
                }
              ),
              mobileSection === i && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/40 px-4 pb-4 pt-1", children: item.columns.map((col) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "mb-1 text-[11px] font-semibold tracking-[0.18em]",
                    style: { color: "var(--brand)" },
                    children: col.title
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1 pl-1", children: col.items.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: c.href === "#" ? pendingPage(toSlug(item.label), toSlug(c.label)) : c.href,
                    className: "block py-1 text-sm text-foreground/80 hover:text-foreground",
                    children: c.label
                  }
                ) }, c.label)) })
              ] }, col.title)) })
            ] }, item.label))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: "Quick Links" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-2 gap-2 text-sm", children: [...TOP_RIGHT_ACCENT, ...TOP_RIGHT_PORTAL].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: l.href, className: "block py-1 hover:underline", children: l.label }) }, l.label)) })
          ] })
        ] }) })
      ]
    }
  );
}
function GoldenJubileeScroll({ variant = "fixed" } = {}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Link,
    {
      to: "/jubilee",
      "aria-label": "Open Golden Jubilee 1976 - 2026",
      className: variant === "fixed" ? "group fixed right-4 top-4 z-[60] md:right-6 md:top-6" : "group relative inline-flex mx-auto",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollBadge, {})
    }
  );
}
function ScrollBadge() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative flex h-16 items-center gap-2 rounded-full pl-2 pr-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-[1.05] md:h-20 md:pl-3 md:pr-5",
      style: {
        background: "linear-gradient(135deg,#fff7c0 0%,#f5d060 28%,#d4af37 54%,#b88916 78%,#7a4f05 100%)",
        boxShadow: "0 14px 36px -10px rgba(212,175,55,0.9), 0 0 0 2px rgba(255,244,194,0.75), inset 0 2px 0 rgba(255,255,255,0.75), inset 0 -3px 8px rgba(80,55,5,0.3)",
        animation: "jubilee-pulse-glow 3.2s ease-in-out infinite, jubilee-float 4s ease-in-out infinite"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes jubilee-pulse-glow {
          0%,100%{box-shadow:0 14px 36px -10px rgba(212,175,55,0.9),0 0 0 2px rgba(255,244,194,0.75),inset 0 2px 0 rgba(255,255,255,0.75),inset 0 -3px 8px rgba(80,55,5,0.3)}
          50%{box-shadow:0 18px 46px -8px rgba(245,208,96,1),0 0 0 3px rgba(255,247,192,0.95),inset 0 2px 0 rgba(255,255,255,0.86),inset 0 -3px 8px rgba(80,55,5,0.36)}
        }
        @keyframes jubilee-float {
          0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)}
        }
        @keyframes jubilee-shine {
          0%{left:-60%} 100%{left:130%}
        }
      ` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(RodCurl, { side: "left", height: 48 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex flex-col items-center px-1 leading-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-[9px] font-semibold uppercase tracking-[0.3em] md:text-[10px]",
              style: { color: "#4a3206", textShadow: "0 1px 0 rgba(255,255,255,0.58)" },
              children: "Celebrating"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-xl font-extrabold leading-none md:text-2xl",
              style: { color: "#241600", textShadow: "0 1px 0 rgba(255,255,255,0.58)" },
              children: "50"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-[10px] font-bold tracking-[0.25em] md:text-[11px]",
              style: { color: "#332204", textShadow: "0 1px 0 rgba(255,255,255,0.5)" },
              children: "GOLDEN JUBILEE"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-[8px] font-medium tracking-[0.35em] md:text-[9px]",
              style: { color: "#4a3206" },
              children: "1976 - 2026"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(RodCurl, { side: "right", height: 48 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            "aria-hidden": true,
            className: "pointer-events-none absolute inset-0 overflow-hidden rounded-full",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "absolute inset-y-0 -left-1/3 w-1/2",
                style: {
                  background: "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)",
                  animation: "jubilee-shine 2.8s ease-in-out infinite",
                  mixBlendMode: "screen"
                }
              }
            )
          }
        )
      ]
    }
  );
}
function RodCurl({ side, height }) {
  const insetShadow = side === "left" ? "inset -2px 0 4px rgba(0,0,0,0.45), inset 2px 0 2px rgba(255,255,255,0.35)" : "inset 2px 0 4px rgba(0,0,0,0.45), inset -2px 0 2px rgba(255,255,255,0.35)";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      "aria-hidden": true,
      className: "relative block overflow-hidden rounded-full",
      style: {
        width: 14,
        height,
        background: "linear-gradient(90deg,#2a1800 0%,#6b4e0c 14%,#c09020 28%,#ffe070 50%,#c09020 72%,#6b4e0c 86%,#2a1800 100%)",
        boxShadow: insetShadow
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            "aria-hidden": true,
            className: "absolute inset-0",
            style: {
              backgroundImage: "repeating-linear-gradient(180deg, transparent 0px, transparent 10px, rgba(40,20,0,0.18) 10px, rgba(40,20,0,0.18) 11px)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            "aria-hidden": true,
            className: "absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2",
            style: {
              background: "linear-gradient(180deg,transparent,rgba(255,255,255,0.6),transparent)",
              mixBlendMode: "screen"
            }
          }
        )
      ]
    }
  );
}
const quickLinks = [
  { label: "Placements", href: "/student-services/placements" },
  { label: "Careers", href: "/employee-services/professional-development" },
  { label: "Contact", href: "/pages/about?page=contact" }
];
const portalLinks = [
  { label: "Student Portal", href: "/student-services/student-portal" },
  { label: "Employee Portal", href: "/employee-services/employee-portal" },
  { label: "WebMail", href: "/employee-services/employee-portal" }
];
function SiteTopHeader() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "w-full text-xs",
        style: {
          backgroundColor: "var(--utility-bar)",
          color: "var(--utility-bar-foreground)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-2.5 lg:px-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "tel:+918632346114",
                className: "flex items-center gap-2 opacity-90 hover:opacity-100",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5", "aria-hidden": true }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "+91 863 234 6114" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "mailto:registrar@anu.ac.in",
                className: "flex items-center gap-2 opacity-90 hover:opacity-100",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3.5 w-3.5", "aria-hidden": true }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "registrar@anu.ac.in" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden items-center gap-5 lg:flex", children: [
            quickLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: link.href,
                className: "font-medium hover:underline",
                style: { color: "var(--utility-bar-accent)" },
                children: link.label
              },
              link.label
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-40", children: "|" }),
            portalLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: link.href, className: "opacity-90 hover:opacity-100", children: link.label }, link.label))
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full border-b border-border bg-[oklch(0.97_0.02_85)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-center gap-3 px-6 py-3 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Award,
        {
          className: "hidden h-6 w-6 shrink-0 text-[oklch(0.55_0.15_30)] sm:block",
          "aria-hidden": true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm leading-snug text-foreground sm:text-base", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: 'Accredited by NAAC with "A+ Grade' }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "(With 3.46 Outstanding Score" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden sm:block" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: 'in Dual Mode Category - First in the State & Country)"' })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 px-6 py-6 md:grid-cols-[auto_1fr_auto]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: emblem,
          alt: "University emblem",
          width: 120,
          height: 120,
          className: "mx-auto h-24 w-24 object-contain md:h-28 md:w-28"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold tracking-wide text-[#d71920] md:text-4xl", children: "ఆచార్య నాగార్జున విశ్వవిద్యాలయం" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-1 text-2xl font-bold tracking-wide text-[oklch(0.22_0.06_265)] md:text-4xl", children: "ACHARYA NAGARJUNA UNIVERSITY" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GoldenJubileeScroll, { variant: "inline" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(UniversityNavbar, {})
  ] });
}
const appCss = "/assets/styles-DrKcj-E1.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
const Route$o = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ANU Website" },
      { name: "description", content: "Representation of the ANU culture and idealogy." },
      { name: "author", content: "Acharya Nagarjuna University" },
      { property: "og:title", content: "ANU Website" },
      { property: "og:description", content: "Representation of the ANU culture and idealogy." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@ANU" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "top", className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteTopHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "grow flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
const $$splitComponentImporter$h = () => import("./jubilee-DrEj0spl.mjs");
const Route$n = createFileRoute("/jubilee")({
  component: lazyRouteComponent($$splitComponentImporter$h, "component"),
  head: () => ({
    meta: [{
      title: "Golden Jubilee 1976 – 2026 | Acharya Nagarjuna University"
    }, {
      name: "description",
      content: "Celebrating 50 years of Acharya Nagarjuna University — a Golden Jubilee of academic excellence, research, and impact (1976 – 2026)."
    }, {
      property: "og:title",
      content: "Golden Jubilee 1976 – 2026 | ANU"
    }, {
      property: "og:description",
      content: "Fifty years of legacy, learning, and leadership at Acharya Nagarjuna University."
    }]
  })
});
const $$splitComponentImporter$g = () => import("./history-CvudJ3Jq.mjs");
const Route$m = createFileRoute("/history")({
  component: lazyRouteComponent($$splitComponentImporter$g, "component"),
  head: () => ({
    meta: [{
      title: "History | Acharya Nagarjuna University"
    }, {
      name: "description",
      content: "Structured timeline of Acharya Nagarjuna University from historical legacy to present-day academic role."
    }]
  })
});
const $$splitComponentImporter$f = () => import("./faculty-2kM3MpCT.mjs");
const Route$l = createFileRoute("/faculty")({
  component: lazyRouteComponent($$splitComponentImporter$f, "component"),
  head: () => ({
    meta: [{
      title: "Faculty | Acharya Nagarjuna University"
    }, {
      name: "description",
      content: "Browse featured Acharya Nagarjuna University faculty profiles."
    }]
  })
});
const $$splitComponentImporter$e = () => import("./aboutprofile-BnNjH0Mr.mjs");
const Route$k = createFileRoute("/aboutprofile")({
  component: lazyRouteComponent($$splitComponentImporter$e, "component"),
  head: () => ({
    meta: [{
      title: "About Profile | Acharya Nagarjuna University"
    }, {
      name: "description",
      content: "Comprehensive profile of Acharya Nagarjuna University covering identity, leadership, academic strengths and institutional direction."
    }]
  })
});
const __vite_glob_0_0 = "/assets/01012025-Dsf_f7NT.jpg";
const __vite_glob_0_1 = "/assets/010120251-DCsC2qvK.jpg";
const __vite_glob_0_2 = "/assets/010120252-BCzEbdWy.jpg";
const __vite_glob_0_3 = "/assets/050326-1-CKKDEC2f.jpeg";
const __vite_glob_0_4 = "/assets/050326-2-B7ZQQweB.jpeg";
const __vite_glob_0_5 = "/assets/050326-3-DJpuEvl5.jpeg";
const __vite_glob_0_6 = "/assets/050326-4-C14gJ5pw.jpeg";
const __vite_glob_0_7 = "/assets/050326-5-CJXq4jKG.jpeg";
const __vite_glob_0_8 = "/assets/050326-6-TINBCitx.jpeg";
const __vite_glob_0_9 = "/assets/11092025-1-CgA02El6.jpeg";
const __vite_glob_0_10 = "/assets/11092025-2-DwNE5rT-.jpeg";
const __vite_glob_0_11 = "/assets/11092025-3-BTl4FLLN.jpeg";
const __vite_glob_0_12 = "/assets/11092025-4-CUp5ycuc.jpeg";
const __vite_glob_0_13 = "/assets/11092025-5-DLQmKNLh.jpeg";
const __vite_glob_0_14 = "/assets/11092025-6-GUtRe6Jl.jpeg";
const __vite_glob_0_15 = "/assets/11092025-C03pQyWV.jpeg";
const __vite_glob_0_16 = "/assets/211224-1-DCfxzMHv.jpg";
const __vite_glob_0_17 = "/assets/211224-3-Ctoj5O4-.jpg";
const __vite_glob_0_18 = "/assets/211224-4-BD9tXtBF.jpg";
const __vite_glob_0_19 = "/assets/211224-5-DEEoA2pX.jpg";
const __vite_glob_0_20 = "/assets/251010-_audykwE.jpeg";
const __vite_glob_0_21 = "/assets/251011-ClNUB31w.jpeg";
const __vite_glob_0_22 = "/assets/251012-BIpbFBJz.jpeg";
const __vite_glob_0_23 = "/assets/251013-4ElBFgbl.jpeg";
const __vite_glob_0_24 = "/assets/25103-DiJDWb-Q.jpeg";
const __vite_glob_0_25 = "/assets/25104-q6ezI195.jpeg";
const __vite_glob_0_26 = "/assets/25105-C0WeAqV8.jpeg";
const __vite_glob_0_27 = "/assets/25106-CaXXUHJV.jpeg";
const __vite_glob_0_28 = "/assets/25108-ldHSvI2L.jpeg";
const __vite_glob_0_29 = "/assets/25109-B2lDX37B.jpeg";
const __vite_glob_0_30 = "/assets/271101-C6RtwzZW.jpeg";
const __vite_glob_0_31 = "/assets/271102-DYXUNdHf.jpg";
const __vite_glob_0_32 = "/assets/271103-CK0OsNUv.jpeg";
const __vite_glob_0_33 = "/assets/271104-CPFIlrIu.jpeg";
const __vite_glob_0_34 = "/assets/271105-BGNvDB9E.jpeg";
const __vite_glob_0_35 = "/assets/271106-BBbN3RGS.jpeg";
const __vite_glob_0_36 = "/assets/271107-kzjIndxV.jpeg";
const __vite_glob_0_37 = "/assets/271108-DgMXFaak.jpeg";
const __vite_glob_0_38 = "/assets/271109-TdAmOfqI.jpg";
const __vite_glob_0_39 = "/assets/271110-ByBkctEO.jpeg";
const __vite_glob_0_40 = "/assets/30122024-CFvpRj79.jpg";
const __vite_glob_0_41 = "/assets/301220241-D6OHwQkH.jpg";
const __vite_glob_0_42 = "/assets/301220242-B16_oIkb.jpg";
const __vite_glob_0_43 = "/assets/301220243-BFDySajE.jpg";
const __vite_glob_0_44 = "/assets/301220244-BRozPtxK.jpg";
const __vite_glob_0_45 = "/assets/301220245-CpCP5Hvy.jpg";
const __vite_glob_0_46 = "/assets/301220246-C_sYNm1C.jpg";
const __vite_glob_0_47 = "/assets/ChatGPT%20Image%20May%2015_%202026_%2003_26_44%20PM-DH8-ydkH.png";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const CarouselContext = reactExports.createContext(null);
function useCarousel() {
  const context = reactExports.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = reactExports.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y"
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = reactExports.useState(false);
  const [canScrollNext, setCanScrollNext] = reactExports.useState(false);
  const onSelect = reactExports.useCallback((api2) => {
    if (!api2) {
      return;
    }
    setCanScrollPrev(api2.canScrollPrev());
    setCanScrollNext(api2.canScrollNext());
  }, []);
  const scrollPrev = reactExports.useCallback(() => {
    api?.scrollPrev();
  }, [api]);
  const scrollNext = reactExports.useCallback(() => {
    api?.scrollNext();
  }, [api]);
  const handleKeyDown = reactExports.useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );
  reactExports.useEffect(() => {
    if (!api || !setApi) {
      return;
    }
    setApi(api);
  }, [api, setApi]);
  reactExports.useEffect(() => {
    if (!api) {
      return;
    }
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CarouselContext.Provider,
    {
      value: {
        carouselRef,
        api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          ref,
          onKeyDownCapture: handleKeyDown,
          className: cn("relative", className),
          role: "region",
          "aria-roledescription": "carousel",
          ...props,
          children
        }
      )
    }
  );
});
Carousel.displayName = "Carousel";
const CarouselContent = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        className: cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        ),
        ...props
      }
    ) });
  }
);
CarouselContent.displayName = "CarouselContent";
const CarouselItem = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        role: "group",
        "aria-roledescription": "slide",
        className: cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "pl-4" : "pt-4",
          className
        ),
        ...props
      }
    );
  }
);
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = reactExports.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute  h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollPrev,
        onClick: scrollPrev,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Previous slide" })
        ]
      }
    );
  }
);
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = reactExports.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollNext,
        onClick: scrollNext,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Next slide" })
        ]
      }
    );
  }
);
CarouselNext.displayName = "CarouselNext";
const $$splitComponentImporter$d = () => import("./index-B3iXI4Rt.mjs");
Object.entries(/* @__PURE__ */ Object.assign({
  "../assets/banners/01012025.jpg": __vite_glob_0_0,
  "../assets/banners/010120251.jpg": __vite_glob_0_1,
  "../assets/banners/010120252.jpg": __vite_glob_0_2,
  "../assets/banners/050326-1.jpeg": __vite_glob_0_3,
  "../assets/banners/050326-2.jpeg": __vite_glob_0_4,
  "../assets/banners/050326-3.jpeg": __vite_glob_0_5,
  "../assets/banners/050326-4.jpeg": __vite_glob_0_6,
  "../assets/banners/050326-5.jpeg": __vite_glob_0_7,
  "../assets/banners/050326-6.jpeg": __vite_glob_0_8,
  "../assets/banners/11092025-1.jpeg": __vite_glob_0_9,
  "../assets/banners/11092025-2.jpeg": __vite_glob_0_10,
  "../assets/banners/11092025-3.jpeg": __vite_glob_0_11,
  "../assets/banners/11092025-4.jpeg": __vite_glob_0_12,
  "../assets/banners/11092025-5.jpeg": __vite_glob_0_13,
  "../assets/banners/11092025-6.jpeg": __vite_glob_0_14,
  "../assets/banners/11092025.jpeg": __vite_glob_0_15,
  "../assets/banners/211224-1.jpg": __vite_glob_0_16,
  "../assets/banners/211224-3.jpg": __vite_glob_0_17,
  "../assets/banners/211224-4.jpg": __vite_glob_0_18,
  "../assets/banners/211224-5.jpg": __vite_glob_0_19,
  "../assets/banners/251010.jpeg": __vite_glob_0_20,
  "../assets/banners/251011.jpeg": __vite_glob_0_21,
  "../assets/banners/251012.jpeg": __vite_glob_0_22,
  "../assets/banners/251013.jpeg": __vite_glob_0_23,
  "../assets/banners/25103.jpeg": __vite_glob_0_24,
  "../assets/banners/25104.jpeg": __vite_glob_0_25,
  "../assets/banners/25105.jpeg": __vite_glob_0_26,
  "../assets/banners/25106.jpeg": __vite_glob_0_27,
  "../assets/banners/25108.jpeg": __vite_glob_0_28,
  "../assets/banners/25109.jpeg": __vite_glob_0_29,
  "../assets/banners/271101.jpeg": __vite_glob_0_30,
  "../assets/banners/271102.jpg": __vite_glob_0_31,
  "../assets/banners/271103.jpeg": __vite_glob_0_32,
  "../assets/banners/271104.jpeg": __vite_glob_0_33,
  "../assets/banners/271105.jpeg": __vite_glob_0_34,
  "../assets/banners/271106.jpeg": __vite_glob_0_35,
  "../assets/banners/271107.jpeg": __vite_glob_0_36,
  "../assets/banners/271108.jpeg": __vite_glob_0_37,
  "../assets/banners/271109.jpg": __vite_glob_0_38,
  "../assets/banners/271110.jpeg": __vite_glob_0_39,
  "../assets/banners/30122024.jpg": __vite_glob_0_40,
  "../assets/banners/301220241.jpg": __vite_glob_0_41,
  "../assets/banners/301220242.jpg": __vite_glob_0_42,
  "../assets/banners/301220243.jpg": __vite_glob_0_43,
  "../assets/banners/301220244.jpg": __vite_glob_0_44,
  "../assets/banners/301220245.jpg": __vite_glob_0_45,
  "../assets/banners/301220246.jpg": __vite_glob_0_46,
  "../assets/banners/ChatGPT Image May 15, 2026, 03_26_44 PM.png": __vite_glob_0_47
})).sort(([a], [b]) => a.localeCompare(b, void 0, {
  numeric: true,
  sensitivity: "base"
})).map(([path, src]) => ({
  src,
  alt: `Acharya Nagarjuna University banner ${path.split("/").pop()?.replace(/\.[^.]+$/, "") ?? ""}`
}));
const Route$j = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const Route$i = createFileRoute("/student-services/")({
  beforeLoad: () => {
    throw redirect({
      to: "/student-services/$pageId",
      params: { pageId: "overview" },
      replace: true
    });
  }
});
const Route$h = createFileRoute("/research/")({
  beforeLoad: () => {
    throw redirect({
      to: "/research/$pageId",
      params: { pageId: "overview" },
      replace: true
    });
  }
});
const Route$g = createFileRoute("/rankings/")({
  beforeLoad: () => {
    throw redirect({
      to: "/rankings/$pageId",
      params: { pageId: "overview" },
      replace: true
    });
  }
});
const Route$f = createFileRoute("/programs/")({
  beforeLoad: () => {
    throw redirect({
      to: "/programs/$pageId",
      params: { pageId: "overview" },
      replace: true
    });
  }
});
const Route$e = createFileRoute("/employee-services/")({
  beforeLoad: () => {
    throw redirect({
      to: "/employee-services/$pageId",
      params: { pageId: "overview" },
      replace: true
    });
  }
});
const Route$d = createFileRoute("/campus-life/")({
  beforeLoad: () => {
    throw redirect({
      to: "/campus-life/$pageId",
      params: { pageId: "overview" },
      replace: true
    });
  }
});
const $$splitComponentImporter$c = () => import("./student-services._pageId-BYPBUfMe.mjs");
const Route$c = createFileRoute("/student-services/$pageId")({
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./research._pageId-4wRnL8SI.mjs");
const Route$b = createFileRoute("/research/$pageId")({
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./rankings._pageId-CZNAQPa9.mjs");
const Route$a = createFileRoute("/rankings/$pageId")({
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./programs._pageId-DclR8zoN.mjs");
const Route$9 = createFileRoute("/programs/$pageId")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const sharedContacts$5 = [
  { label: "Student Services Helpdesk", value: "+91 863 234 6114", href: "tel:+918632346114" },
  { label: "Examination Section", value: "+91 863 234 6140", href: "tel:+918632346140" },
  { label: "Registrar Office", value: "registrar@anu.ac.in", href: "mailto:registrar@anu.ac.in" }
];
const studentServicePageAliases = {
  "notifications-timetables": "exam-notifications",
  "downloads-forms": "downloads"
};
const studentServiceTabs = [
  {
    key: "overview",
    title: "Student Services Hub",
    shortTitle: "Overview",
    badge: "Primary",
    description: "A single classified service hub for examinations, certificates, digital access, placements and student support cells.",
    metrics: [
      {
        label: "Core service clusters",
        value: "6",
        note: "Exams, records, portal, placements, alumni and welfare"
      },
      { label: "Support channels", value: "3", note: "Phone, email and office counter guidance" },
      {
        label: "Student-facing tabs",
        value: "14",
        note: "Structured for faster navigation and task discovery"
      },
      {
        label: "Campus address",
        value: "ANU",
        note: "Nagarjuna Nagar, Guntur, Andhra Pradesh 522510"
      }
    ],
    highlights: [
      {
        title: "Find the right service faster",
        description: "Each tab is grouped by what a student is trying to do: write exams, access results, request records or raise support issues.",
        tone: "accent"
      },
      {
        title: "Use the correct channel",
        description: "Every service view explains whether the next step belongs to the portal, examination section, department office or support cell."
      },
      {
        title: "Reduce avoidable back-and-forth",
        description: "Requirements, expected turnaround windows and the usual action order are surfaced before a student reaches the office counter.",
        tone: "success"
      }
    ],
    steps: [
      {
        title: "Choose your service area",
        description: "Start with exams, results, downloads, placements, portal support or a dedicated student support cell."
      },
      {
        title: "Review requirements",
        description: "Check the listed documents, deadlines and submission channel before moving ahead."
      },
      {
        title: "Use the right contact path",
        description: "If a task needs clarification, use the mapped phone, email or office escalation shown for that tab."
      }
    ],
    resources: [
      {
        title: "Exam schedules and hall-ticket flow",
        channel: "Exam Notifications",
        turnaround: "Published as notified",
        requirements: "Programme, semester and fee status",
        href: "/student-services/exam-notifications"
      },
      {
        title: "Result and revaluation guidance",
        channel: "Results",
        turnaround: "After tabulation closure",
        requirements: "Hall-ticket details and result notification",
        href: "/student-services/results"
      },
      {
        title: "Certificates and service requests",
        channel: "Downloads and Portal",
        turnaround: "Varies by document",
        requirements: "Student ID, memo copies, fee receipt when applicable",
        href: "/student-services/downloads"
      },
      {
        title: "Placement readiness and drives",
        channel: "Placements",
        turnaround: "Cycle-based",
        requirements: "Eligibility confirmation and profile readiness",
        href: "/student-services/placements"
      }
    ],
    faq: [
      {
        question: "Where should I start if I am not sure which office handles my request?",
        answer: "Start with the Overview or Services tab. They classify requests by purpose and point you to the correct office or digital channel."
      },
      {
        question: "Do all services happen through the portal?",
        answer: "No. Some steps are portal-enabled, while others still depend on the department office, examination section or a specific support cell."
      }
    ],
    contacts: sharedContacts$5,
    supportPanel: {
      availability: "Use this hub anytime for navigation and classified service guidance.",
      responseTime: "Escalation and processing windows vary by service type and official notification.",
      bestFor: [
        "First-time student navigation",
        "Understanding which office owns a request",
        "Comparing exam, records and support workflows"
      ],
      notes: [
        "This module improves navigation and service clarity; official deadlines still follow university notifications.",
        "Students should rely on authenticated university communication for final submission instructions."
      ]
    }
  },
  {
    key: "exam-section",
    title: "Exam Section",
    shortTitle: "Exam Section",
    badge: "Academic",
    description: "Operational guidance for the examination section, including registration flow, hall-ticket readiness and post-exam service touchpoints.",
    metrics: [
      {
        label: "Key functions",
        value: "4",
        note: "Registration, timetables, hall-tickets and memo support"
      },
      {
        label: "Primary owner",
        value: "COE Office",
        note: "Controller of Examinations process owner"
      },
      {
        label: "Best visit time",
        value: "Before deadlines",
        note: "Resolve mismatches before hall-ticket release windows"
      },
      { label: "Linked tabs", value: "3", note: "Notifications, results and downloads" }
    ],
    highlights: [
      {
        title: "Registration verification",
        description: "Students should verify programme, semester and subject mapping before examination registration closes."
      },
      {
        title: "Hall-ticket dependency",
        description: "Hall-ticket issuance generally follows fee clearance, data validation and schedule publication.",
        tone: "accent"
      },
      {
        title: "Post-exam requests",
        description: "Memo corrections, duplicate requests and revaluation guidance continue through linked service tabs."
      }
    ],
    steps: [
      {
        title: "Confirm eligibility",
        description: "Check registration completion, fee status and paper mapping with your department."
      },
      {
        title: "Track official schedule",
        description: "Watch notification releases for revised dates, instructions and hall-ticket timing."
      },
      {
        title: "Retain exam records",
        description: "Keep hall-ticket and acknowledgement details ready for result and revaluation follow-up."
      }
    ],
    resources: [
      {
        title: "Examination registration guidance",
        channel: "Department + Exam Section",
        turnaround: "Before exam cycle closes",
        requirements: "Programme details and fee clearance"
      },
      {
        title: "Hall-ticket support",
        channel: "Portal / Department Notice",
        turnaround: "7-10 days before exam in typical cycles",
        requirements: "Approved registration and identity details",
        href: "/student-services/student-portal"
      },
      {
        title: "Post-exam correction workflow",
        channel: "Results / Downloads",
        turnaround: "After result release",
        requirements: "Hall-ticket number, memo copy and request reason",
        href: "/student-services/results"
      }
    ],
    faq: [
      {
        question: "What should I do if my subject combination looks incorrect?",
        answer: "Raise the mismatch with your department before the exam window closes so the examination section receives the correction in time."
      },
      {
        question: "Who handles hall-ticket issues on the exam week?",
        answer: "Start with the department notice desk or designated exam support channel, then escalate to the examination section if the issue is unresolved."
      }
    ],
    contacts: sharedContacts$5,
    supportPanel: {
      availability: "Most useful before registration deadlines and during hall-ticket release week.",
      responseTime: "Time-sensitive issues move fastest when raised before the final examination week.",
      bestFor: [
        "Registration verification",
        "Hall-ticket questions",
        "Understanding exam office responsibilities"
      ],
      notes: [
        "Carry programme and semester details when contacting the examination section.",
        "Late escalations may need department endorsement first."
      ]
    }
  },
  {
    key: "exam-notifications",
    title: "Exam Notifications & Timetables",
    shortTitle: "Notifications",
    badge: "Updated",
    description: "A classified view of examination announcements so students can separate schedule releases, hall-ticket alerts and supplementary notices quickly.",
    metrics: [
      {
        label: "Notice groups",
        value: "3",
        note: "Main exams, hall-ticket updates and supplementary notices"
      },
      {
        label: "Recommended check",
        value: "Weekly",
        note: "Increase frequency near exam cycle dates"
      },
      {
        label: "Alert source",
        value: "Exam Section",
        note: "Cross-check with department notice circulation"
      },
      {
        label: "Action path",
        value: "Read → verify → escalate",
        note: "Use the listed channel if details do not match your records"
      }
    ],
    highlights: [
      {
        title: "Separate critical from routine notices",
        description: "Students can identify whether a notice changes dates, unlocks hall-tickets or announces a supplementary cycle."
      },
      {
        title: "Act before the last date",
        description: "The page focuses on actionability by surfacing what to verify immediately after a notification is posted.",
        tone: "accent"
      },
      {
        title: "Stay aligned with department notices",
        description: "Timetables and exam instructions should be checked against both the central release and programme-specific communication."
      }
    ],
    notices: [
      {
        date: "May 2026",
        title: "Semester End Examination Schedule (UG/PG)",
        description: "Revised timetable publication cycle for main semester examinations across constituent colleges.",
        status: "Revised timetable"
      },
      {
        date: "May 2026",
        title: "Hall Ticket Availability Window",
        description: "Hall tickets are released after fee clearance and registration verification are completed.",
        status: "Action required"
      },
      {
        date: "April 2026",
        title: "Supplementary Examination Circular",
        description: "Notification includes registration timeline, fee schedule and subject-paper mapping guidance.",
        status: "Registration window"
      }
    ],
    steps: [
      {
        title: "Read the latest notice first",
        description: "Do not rely on previous-cycle assumptions if a revised timetable or special instruction is posted."
      },
      {
        title: "Match your record set",
        description: "Verify programme, semester, paper titles and hall-ticket availability against your registration details."
      },
      {
        title: "Escalate mismatches quickly",
        description: "Use the examination section or department office before the last working day in the notification window."
      }
    ],
    resources: [
      {
        title: "Hall-ticket release guidance",
        channel: "Student Portal",
        turnaround: "Closer to the exam week",
        requirements: "Registration approval and fee clearance",
        href: "/student-services/student-portal"
      },
      {
        title: "Supplementary cycle instructions",
        channel: "Exam Section",
        turnaround: "Post-result window",
        requirements: "Subject list and fee schedule review",
        href: "/student-services/exam-section"
      }
    ],
    contacts: sharedContacts$5,
    supportPanel: {
      availability: "Check more frequently in the 4-6 weeks before examinations.",
      responseTime: "Schedule clarifications should be raised immediately after a revised notice appears.",
      bestFor: [
        "Timetable changes",
        "Hall-ticket publication windows",
        "Supplementary cycle alerts"
      ],
      notes: [
        "Notification dates shown here are presentation references from the current project content.",
        "Students should treat official notice documents as the final authoritative source."
      ]
    }
  },
  {
    key: "results",
    title: "Results & Revaluation",
    shortTitle: "Results",
    badge: "Popular",
    description: "Clear next steps for students after results are published, including memo access, recounting and revaluation decision points.",
    metrics: [
      {
        label: "Service stages",
        value: "3",
        note: "Result release, review decision and post-result update"
      },
      {
        label: "Linked requests",
        value: "4",
        note: "Revaluation, recounting, duplicate memo and corrections"
      },
      {
        label: "Best preparation",
        value: "Keep records ready",
        note: "Hall-ticket, subject list and prior memo copies"
      },
      {
        label: "Route after results",
        value: "Downloads",
        note: "Use the forms/services catalogue for follow-up requests"
      }
    ],
    highlights: [
      {
        title: "Use result release as a checkpoint",
        description: "Students should first verify subject coverage and score accuracy before choosing any follow-up request."
      },
      {
        title: "Avoid rushed applications",
        description: "Review deadlines, fee requirements and paper eligibility before submitting revaluation or memo requests.",
        tone: "accent"
      },
      {
        title: "Keep a clean record trail",
        description: "Saving hall-ticket and memo references reduces turnaround friction in correction and duplicate requests."
      }
    ],
    notices: [
      {
        date: "June 2026",
        title: "UG/PG Result Publication Window",
        description: "Results are released in programme batches after tabulation and verification closure.",
        status: "Batch-wise release"
      },
      {
        date: "June 2026",
        title: "Digital Memo Issue Advisory",
        description: "Digital memos are usually available first, followed by the physical issue schedule through college communication.",
        status: "Memo guidance"
      }
    ],
    steps: [
      {
        title: "Review the result carefully",
        description: "Check marks, subject presence and whether any paper requires recounting or revaluation."
      },
      {
        title: "Choose the right request path",
        description: "Use the request that matches the issue: revaluation, duplicate memo, correction or certificate follow-up."
      },
      {
        title: "Track the updated outcome",
        description: "Watch official communication channels for revised result publication or memo updates."
      }
    ],
    resources: [
      {
        title: "Revaluation application readiness",
        channel: "Results + Downloads",
        turnaround: "Within notified window",
        requirements: "Memo copy, subject details and fee compliance",
        href: "/student-services/downloads"
      },
      {
        title: "Duplicate mark memo support",
        channel: "Downloads / Examination Section",
        turnaround: "Administrative processing window",
        requirements: "Identity proof and existing record details",
        href: "/student-services/downloads"
      },
      {
        title: "Correction requests",
        channel: "Department + Exam Section",
        turnaround: "Case-based",
        requirements: "Supporting evidence for the correction",
        href: "/student-services/services"
      }
    ],
    faq: [
      {
        question: "How do I know whether I need revaluation or another request?",
        answer: "Start by identifying whether the issue is about marks, a missing paper, a document copy or a data mismatch. Each path has a different follow-up workflow."
      },
      {
        question: "Are digital memos enough for immediate use?",
        answer: "They are often the first available reference, but students should still follow the official guidance for physical memo issuance when required."
      }
    ],
    contacts: sharedContacts$5,
    supportPanel: {
      availability: "Most useful immediately after result publication windows open.",
      responseTime: "Revaluation and memo-related requests are usually deadline-driven and should not be delayed.",
      bestFor: ["Result interpretation", "Memo support", "Revaluation preparation"],
      notes: [
        "Always use the exact result notification window announced for your programme.",
        "Keep digital and printed references aligned when submitting follow-up requests."
      ]
    }
  },
  {
    key: "downloads",
    title: "Forms, Certificates & Downloads",
    shortTitle: "Downloads",
    badge: "Forms",
    description: "A service catalogue for student request forms and certificate workflows, organized by what the student needs rather than by internal office labels.",
    metrics: [
      {
        label: "Common request types",
        value: "6+",
        note: "Revaluation, memo, bonafide, migration and related certificates"
      },
      {
        label: "Submission models",
        value: "3",
        note: "Portal, department office or examination section"
      },
      {
        label: "Student value",
        value: "High clarity",
        note: "Requirements and turnaround intent are visible up front"
      },
      {
        label: "Best companion tab",
        value: "Services",
        note: "Use together to choose the correct administrative channel"
      }
    ],
    highlights: [
      {
        title: "Think in outcomes, not office names",
        description: "Students can start from the document they need and then follow the mapped channel.",
        tone: "accent"
      },
      {
        title: "Reduce incomplete submissions",
        description: "Each item states the likely requirements so students are less likely to miss identity, memo or fee references."
      },
      {
        title: "Bridge paper and digital workflows",
        description: "Where a portal is involved, this page directs students to the digital access tab instead of leaving the path ambiguous."
      }
    ],
    resources: [
      {
        title: "Revaluation application",
        channel: "Examination follow-up",
        turnaround: "Within notified result window",
        requirements: "Memo copy, subject details and fee receipt",
        href: "/student-services/results"
      },
      {
        title: "Duplicate mark memo request",
        channel: "Examination section",
        turnaround: "Administrative processing",
        requirements: "Identity proof and prior academic record",
        href: "/student-services/results"
      },
      {
        title: "Bonafide certificate request",
        channel: "Department / Student Portal",
        turnaround: "Departmental verification based",
        requirements: "Current student ID and purpose statement",
        href: "/student-services/student-portal"
      },
      {
        title: "Migration certificate request",
        channel: "Student records support",
        turnaround: "Case-based",
        requirements: "Programme completion details and destination use case",
        href: "/student-services/services"
      },
      {
        title: "Student grievance submission",
        channel: "Support cell",
        turnaround: "Acknowledgement first, resolution later",
        requirements: "Issue summary and supporting references",
        href: "/student-services/student-grievance-cell"
      }
    ],
    faq: [
      {
        question: "Why are there no direct PDF files on every card?",
        answer: "This page is built as a real service catalogue first. Where a document is tied to another workflow, it sends you to the correct page instead of showing a dead template link."
      },
      {
        question: "What if my request needs both a form and a department signature?",
        answer: "Use the listed channel and requirements together. Most certificate or correction workflows require both the request template and the right validating office."
      }
    ],
    contacts: sharedContacts$5,
    supportPanel: {
      availability: "Useful before any certificate, memo or post-result request submission.",
      responseTime: "Incomplete requests usually slow processing more than queue volume does.",
      bestFor: [
        "Certificate planning",
        "Finding document requirements",
        "Selecting the right submission channel"
      ],
      notes: [
        "Where the project does not yet include a live PDF asset, the catalogue routes students to the real workflow tab instead.",
        "This keeps the experience functional while the broader institute conversion continues."
      ]
    }
  },
  {
    key: "placements",
    title: "Placements & Career Readiness",
    shortTitle: "Placements",
    badge: "Career",
    description: "Placement support presented as a student workflow: readiness, eligibility, employer interaction and post-drive follow-through.",
    metrics: [
      {
        label: "Readiness tracks",
        value: "3",
        note: "Resume, aptitude and internship/project path"
      },
      {
        label: "Typical cycle phases",
        value: "3",
        note: "Orientation, readiness and recruitment drives"
      },
      {
        label: "Primary audience",
        value: "Final-year + interns",
        note: "Also helpful for earlier preparation"
      },
      {
        label: "Connected tab",
        value: "Alumni",
        note: "Career support extends beyond active drive notices"
      }
    ],
    highlights: [
      {
        title: "Build readiness before a drive opens",
        description: "The strongest placement outcomes usually start with early profile preparation, not last-minute registration."
      },
      {
        title: "Match eligibility before applying",
        description: "Students should confirm branch, semester and academic conditions before joining a drive.",
        tone: "accent"
      },
      {
        title: "Use placement support as a cycle",
        description: "Resume review, skill readiness and employer interaction are presented as one connected workflow."
      }
    ],
    steps: [
      {
        title: "Complete your profile basics",
        description: "Keep your resume, academic record summary and contact details ready before opportunities are announced."
      },
      {
        title: "Join readiness sessions",
        description: "Use orientation, aptitude practice and interview sessions to qualify with more confidence."
      },
      {
        title: "Track drive outcomes",
        description: "After a drive, follow the placement cell’s official updates for next rounds or closure."
      }
    ],
    resources: [
      {
        title: "Resume and profile clinic",
        channel: "Placement Cell",
        turnaround: "Cycle-based support",
        requirements: "Current resume and academic summary"
      },
      {
        title: "Aptitude and interview preparation",
        channel: "Career readiness sessions",
        turnaround: "Scheduled throughout the cycle",
        requirements: "Registration with readiness sessions"
      },
      {
        title: "Internship and project support",
        channel: "Placement / Department coordination",
        turnaround: "Opportunity dependent",
        requirements: "Domain interest and faculty coordination"
      }
    ],
    contacts: sharedContacts$5,
    supportPanel: {
      availability: "Most relevant from mid-programme onward, especially during active recruitment cycles.",
      responseTime: "Recruitment and interview communication often moves faster than academic service cycles.",
      bestFor: ["Career preparation", "Placement-cycle navigation", "Internship readiness"],
      notes: [
        "Students should keep placement profiles current even outside live drive periods.",
        "Use the Alumni tab for longer-horizon networking and career continuity."
      ]
    }
  },
  {
    key: "alumni",
    title: "Alumni & Professional Network",
    shortTitle: "Alumni",
    badge: "Network",
    description: "A real alumni-facing information page that connects graduating students with future networking, mentoring and institutional engagement channels.",
    metrics: [
      {
        label: "Core functions",
        value: "3",
        note: "Stay connected, mentor students and support professional networking"
      },
      {
        label: "Best stage",
        value: "Final year onward",
        note: "Useful for graduating students planning long-term engagement"
      },
      { label: "Related areas", value: "2", note: "Placements and student services records" },
      {
        label: "Primary outcome",
        value: "Continuity",
        note: "Keep ANU relationships active beyond graduation"
      }
    ],
    highlights: [
      {
        title: "Support graduates after campus",
        description: "This area explains how alumni remain connected to the university ecosystem after leaving active student status."
      },
      {
        title: "Create mentoring loops",
        description: "Alumni can add value to students through experience-sharing, referrals and community connections.",
        tone: "success"
      },
      {
        title: "Keep records and network aligned",
        description: "Graduating students should resolve academic records and certificate needs while also preparing for alumni engagement."
      }
    ],
    steps: [
      {
        title: "Close academic records cleanly",
        description: "Before transition, make sure certificates, memo support and identity-linked records are in order."
      },
      {
        title: "Keep professional contact details ready",
        description: "Use updated contact information for future alumni communication and networking."
      },
      {
        title: "Re-engage through events and mentoring",
        description: "Join alumni-facing outreach or offer support to new student cohorts where relevant."
      }
    ],
    resources: [
      {
        title: "Graduation transition checklist",
        channel: "Student Services + Alumni",
        turnaround: "Before completion",
        requirements: "Academic records and contact details"
      },
      {
        title: "Placement-to-alumni continuity",
        channel: "Career and alumni coordination",
        turnaround: "Post-selection / post-graduation",
        requirements: "Professional profile readiness",
        href: "/student-services/placements"
      }
    ],
    contacts: sharedContacts$5,
    supportPanel: {
      availability: "Best used by outgoing students and recent graduates.",
      responseTime: "Engagement timing depends on event, outreach and alumni programme schedules.",
      bestFor: ["Graduation transition", "Networking continuity", "Mentoring pathways"],
      notes: [
        "This page focuses on alumni workflow clarity; a fuller alumni programme expansion can follow in a later project phase."
      ]
    }
  },
  {
    key: "services",
    title: "Administrative Student Services",
    shortTitle: "Services",
    badge: "Catalog",
    description: "A classified service map for students who need the right administrative path for records, certificates, corrections, welfare or digital support.",
    metrics: [
      {
        label: "Service families",
        value: "5",
        note: "Records, certificates, exam follow-up, welfare and digital access"
      },
      {
        label: "Goal",
        value: "Correct routing",
        note: "Reduce confusion between offices and counters"
      },
      {
        label: "Useful with",
        value: "Downloads",
        note: "Pair with forms for the cleanest next step"
      },
      {
        label: "Escalation model",
        value: "Layered",
        note: "Department → central office → special cell when relevant"
      }
    ],
    highlights: [
      {
        title: "Route by need, not by guesswork",
        description: "Students can classify whether a request is academic, administrative, digital or grievance-based."
      },
      {
        title: "Prepare before you queue",
        description: "The catalog reduces avoidable delays by telling students what each service usually needs.",
        tone: "accent"
      },
      {
        title: "Keep support cells visible",
        description: "Welfare and grievance routes are placed beside academic services so they do not remain hidden."
      }
    ],
    resources: [
      {
        title: "Academic records support",
        channel: "Department / Exam Section",
        turnaround: "Case-based",
        requirements: "Hall-ticket, memo or programme details"
      },
      {
        title: "Certificate requests",
        channel: "Downloads / Portal",
        turnaround: "Administrative processing",
        requirements: "Identity proof and purpose",
        href: "/student-services/downloads"
      },
      {
        title: "Portal-linked requests",
        channel: "Student Portal",
        turnaround: "Depends on the transaction type",
        requirements: "Authenticated access and record match",
        href: "/student-services/student-portal"
      },
      {
        title: "Special support and grievance cases",
        channel: "Dedicated support cell",
        turnaround: "Acknowledgement first",
        requirements: "Issue summary and support evidence",
        href: "/student-services/student-grievance-cell"
      }
    ],
    faq: [
      {
        question: "Should I start with the department or the university office?",
        answer: "If the issue is programme-specific or needs verification, start with the department. If it is a central exam or institutional record issue, use the relevant central channel."
      },
      {
        question: "Where do support cells fit into student services?",
        answer: "Support cells handle welfare, safety, inclusion and grievance matters that are not just academic record workflows."
      }
    ],
    contacts: sharedContacts$5,
    supportPanel: {
      availability: "Ideal when a student knows the problem but not the right office.",
      responseTime: "Routing correctly at the start improves turnaround more than repeated follow-up does.",
      bestFor: [
        "Choosing the right office",
        "Understanding escalation paths",
        "Connecting forms to the right workflow"
      ],
      notes: ["This is the service classifier for the entire student-services section."]
    }
  },
  {
    key: "anti-ragging-cell",
    title: "Anti-Ragging Cell",
    shortTitle: "Anti-Ragging",
    badge: "Support Cell",
    description: "Safety-first support information for reporting, documenting and escalating ragging-related issues in a clearer and less intimidating way.",
    metrics: [
      {
        label: "Primary focus",
        value: "Campus safety",
        note: "Prevention, reporting and escalation support"
      },
      {
        label: "When to use",
        value: "Immediately",
        note: "Do not wait for informal resolution if student safety is affected"
      },
      {
        label: "Submission mode",
        value: "Confidential first",
        note: "Use safe reporting channels and supporting references"
      },
      {
        label: "Linked area",
        value: "Student Grievance",
        note: "Escalation can intersect depending on the case"
      }
    ],
    highlights: [
      {
        title: "Act early",
        description: "Students should reach the cell at the earliest sign of ragging, intimidation or repeated hostile conduct.",
        tone: "accent"
      },
      {
        title: "Keep the reporting path clear",
        description: "This page clarifies that safety concerns belong to a dedicated support workflow, not only informal peer resolution."
      },
      {
        title: "Preserve confidentiality",
        description: "Students can prepare a factual summary and any evidence before speaking with the support channel."
      }
    ],
    steps: [
      {
        title: "Ensure immediate safety",
        description: "Move to a safe environment and seek support from trusted faculty or administration if the situation is urgent."
      },
      {
        title: "Record the incident clearly",
        description: "Note what happened, when it happened and who was involved or present."
      },
      {
        title: "Use the support and escalation path",
        description: "Contact the designated cell or official university channel for guided next steps."
      }
    ],
    faq: [
      {
        question: "Should students wait to see if the issue stops?",
        answer: "No. Early reporting is safer and gives the university a better chance to intervene appropriately."
      },
      {
        question: "Can I report if I witnessed the incident?",
        answer: "Yes. Witness reporting can help protect affected students and improve factual review."
      }
    ],
    contacts: sharedContacts$5,
    supportPanel: {
      availability: "Use immediately when safety or dignity is affected.",
      responseTime: "Safety cases should be treated as urgent and not deferred.",
      bestFor: ["Ragging concerns", "Witness reporting", "Safety-focused escalation"],
      notes: [
        "If a situation involves immediate risk, on-campus escalation should happen without delay."
      ]
    }
  },
  {
    key: "women-grievance-cell",
    title: "Women Grievance Cell",
    shortTitle: "Women Grievance",
    badge: "Support Cell",
    description: "A dedicated support page for women students seeking a clearer, safer route for grievance reporting and response.",
    metrics: [
      {
        label: "Focus",
        value: "Support + redressal",
        note: "For harassment, dignity and grievance-related concerns"
      },
      {
        label: "Recommended approach",
        value: "Confidential reporting",
        note: "Use official channels and supporting detail"
      },
      {
        label: "Useful outcome",
        value: "Safe escalation",
        note: "Students should not need to decode office ownership themselves"
      },
      {
        label: "Related area",
        value: "Student Grievance Cell",
        note: "Some issues may intersect administratively"
      }
    ],
    highlights: [
      {
        title: "Make the first step easier",
        description: "The page focuses on reducing uncertainty when a student needs to report a sensitive concern."
      },
      {
        title: "Protect dignity and clarity",
        description: "Students are guided toward a factual report with the right context, rather than being left to navigate multiple offices.",
        tone: "accent"
      },
      {
        title: "Keep support visible",
        description: "Dedicated student support is treated as a core service, not a hidden secondary link."
      }
    ],
    steps: [
      {
        title: "Document the concern",
        description: "Write down the issue, dates, involved parties and any available supporting references."
      },
      {
        title: "Choose the official reporting channel",
        description: "Use the designated cell or institutional contact path listed by the university."
      },
      {
        title: "Track acknowledgement and support",
        description: "Keep a record of the submission and any follow-up communication."
      }
    ],
    contacts: sharedContacts$5,
    supportPanel: {
      availability: "Use when a student needs a dedicated support channel for sensitive concerns.",
      responseTime: "Acknowledgement should be captured early so follow-up is trackable.",
      bestFor: [
        "Sensitive grievance routing",
        "Clarifying where to report",
        "Support-first escalation"
      ],
      notes: [
        "Students should preserve any relevant communication or documentation that supports the issue summary."
      ]
    }
  },
  {
    key: "sc-st-cell",
    title: "SC/ST Cell",
    shortTitle: "SC/ST Cell",
    badge: "Inclusion",
    description: "Information and routing support for inclusion, student welfare and issue escalation related to SC/ST student support.",
    metrics: [
      {
        label: "Primary scope",
        value: "Inclusion support",
        note: "Welfare, representation and issue escalation"
      },
      {
        label: "Student benefit",
        value: "Clearer access",
        note: "Makes the support route visible and understandable"
      },
      {
        label: "Use case",
        value: "Support + grievance",
        note: "For concerns that need a dedicated institutional channel"
      },
      {
        label: "Related tabs",
        value: "Services / Grievance",
        note: "Administrative and support routes can intersect"
      }
    ],
    highlights: [
      {
        title: "Bring support channels into the main student flow",
        description: "Students should not have to search separately to find equity-related support."
      },
      {
        title: "Clarify when to escalate",
        description: "The cell is presented as a formal support path for issues needing institutional review.",
        tone: "accent"
      },
      {
        title: "Support inclusive access",
        description: "This section keeps administrative guidance and inclusion guidance in one consistent experience."
      }
    ],
    steps: [
      {
        title: "Identify the concern clearly",
        description: "Define whether the issue is about access, treatment, administrative support or grievance follow-up."
      },
      {
        title: "Prepare relevant references",
        description: "Keep any documents, communication history or context that helps explain the issue."
      },
      {
        title: "Use the dedicated support channel",
        description: "Contact the relevant institutional route so the concern is not lost inside a general request queue."
      }
    ],
    contacts: sharedContacts$5,
    supportPanel: {
      availability: "Use whenever a student needs dedicated support or escalation under this cell’s scope.",
      responseTime: "Concerns are easier to progress when the issue summary is structured from the start.",
      bestFor: ["Inclusion support", "Formal escalation", "Student welfare clarification"],
      notes: [
        "Students may still need linked academic or administrative documents depending on the issue type."
      ]
    }
  },
  {
    key: "differently-abled-cell",
    title: "Differently Abled Cell",
    shortTitle: "Accessibility",
    badge: "Accessibility",
    description: "Accessibility-oriented guidance so students can identify support channels for accommodation, access and inclusive service needs.",
    metrics: [
      {
        label: "Core theme",
        value: "Access",
        note: "Learning, movement and service accessibility support"
      },
      {
        label: "Priority",
        value: "Early planning",
        note: "Support works best when requested before a high-pressure deadline"
      },
      {
        label: "Connected workflows",
        value: "Exams + services",
        note: "Accommodation needs may intersect with academic cycles"
      },
      {
        label: "Outcome",
        value: "Inclusive routing",
        note: "Students can identify the right help path sooner"
      }
    ],
    highlights: [
      {
        title: "Plan support early",
        description: "Where accommodations affect exams or administrative processes, earlier coordination gives better outcomes.",
        tone: "accent"
      },
      {
        title: "Keep accessibility in the main app",
        description: "Accessibility support is part of core student services, not a hidden secondary page."
      },
      {
        title: "Reduce coordination ambiguity",
        description: "The page helps students see when to involve a dedicated support cell and when to connect a department or exam office."
      }
    ],
    steps: [
      {
        title: "Identify the access need",
        description: "Clarify whether the support request affects classes, records, mobility, digital access or examinations."
      },
      {
        title: "Document the requirement",
        description: "Prepare the request context and any supporting records the university needs for accommodation planning."
      },
      {
        title: "Coordinate with the right office",
        description: "Use the support cell and any linked academic office before key deadlines."
      }
    ],
    contacts: sharedContacts$5,
    supportPanel: {
      availability: "Most effective when used ahead of deadlines, exam weeks or major academic milestones.",
      responseTime: "Accommodation planning usually improves when started early, not after an exam or submission window begins.",
      bestFor: [
        "Accessibility planning",
        "Accommodation clarification",
        "Support routing across offices"
      ],
      notes: ["When access needs affect exams, use this page together with the Exam Section tab."]
    }
  },
  {
    key: "student-grievance-cell",
    title: "Student Grievance Cell",
    shortTitle: "Grievances",
    badge: "Escalation",
    description: "A structured escalation page for student complaints or unresolved service issues that need formal acknowledgement and follow-up.",
    metrics: [
      {
        label: "Primary role",
        value: "Formal grievance intake",
        note: "For unresolved or sensitive student issues"
      },
      {
        label: "Best use",
        value: "After classification",
        note: "Know whether the issue is academic, administrative or welfare related"
      },
      {
        label: "Tracking mindset",
        value: "Documented",
        note: "Keep acknowledgement and follow-up records"
      },
      {
        label: "Shared with",
        value: "Support cells",
        note: "Some cases intersect with dedicated welfare channels"
      }
    ],
    highlights: [
      {
        title: "Turn confusion into a case record",
        description: "Students can move from an unresolved issue to a formal, trackable escalation path."
      },
      {
        title: "Help when earlier routing fails",
        description: "If a department or office path does not resolve the issue, the grievance route provides a clearer next step.",
        tone: "accent"
      },
      {
        title: "Keep welfare visible inside administration",
        description: "The page connects process discipline with empathy and support."
      }
    ],
    steps: [
      {
        title: "Summarize the issue factually",
        description: "Write the problem clearly, including what has already been tried and what remains unresolved."
      },
      {
        title: "Attach supporting references",
        description: "Add acknowledgement records, communication history or documents relevant to the grievance."
      },
      {
        title: "Retain follow-up records",
        description: "Keep the submission acknowledgement and later responses for continuity."
      }
    ],
    faq: [
      {
        question: "Should I go straight to the grievance cell for every issue?",
        answer: "Not always. First classify the issue with the Services tab unless it is clearly serious, unresolved or sensitive enough to need formal escalation."
      },
      {
        question: "What makes a grievance easier to resolve?",
        answer: "A clear timeline, specific request, supporting records and evidence of earlier follow-up help the review process."
      }
    ],
    contacts: sharedContacts$5,
    supportPanel: {
      availability: "Use when an issue needs formal acknowledgement, escalation or structured follow-up.",
      responseTime: "Clear documentation usually improves acknowledgement quality and review speed.",
      bestFor: ["Unresolved student issues", "Formal escalation", "Trackable complaint submission"],
      notes: [
        "Sensitive matters may also belong to a dedicated support cell depending on the issue type."
      ]
    }
  },
  {
    key: "student-portal",
    title: "Student Portal Services",
    shortTitle: "Student Portal",
    badge: "Digital",
    description: "Portal-linked service access explained as a real student workflow: records, request tracking, alerts and digital hygiene.",
    metrics: [
      { label: "Core functions", value: "3", note: "Records, tracking and alerts" },
      {
        label: "Digital dependency",
        value: "High",
        note: "Students should maintain correct credentials and verified data"
      },
      {
        label: "Best use",
        value: "Self-service first",
        note: "Check the portal before visiting a counter for routine status queries"
      },
      { label: "Linked tabs", value: "4", note: "Exams, downloads, services and results" }
    ],
    highlights: [
      {
        title: "Use the portal as a status layer",
        description: "Students should first check what is already available digitally before making a physical visit."
      },
      {
        title: "Protect credential hygiene",
        description: "Portal access only works as a reliable service channel when profile data and credentials stay accurate.",
        tone: "accent"
      },
      {
        title: "Support tracking, not guesswork",
        description: "This tab positions the portal as a record-check and request-follow-up tool rather than a vague generic link."
      }
    ],
    steps: [
      {
        title: "Sign in through the official route",
        description: "Use only authenticated university access points and keep credentials secure."
      },
      {
        title: "Verify profile and records",
        description: "Check whether your personal data, result references and service-linked records match university records."
      },
      {
        title: "Track service progress",
        description: "Use portal visibility for alerts, request status or digital memo availability where supported."
      }
    ],
    faq: [
      {
        question: "What should I do if the portal data does not match my records?",
        answer: "Use the linked academic or administrative service tab that matches the issue, then escalate with your identifying details and supporting records."
      },
      {
        question: "Can the portal replace every office visit?",
        answer: "No. It is strongest for access, visibility and status tracking, but many formal workflows still need departmental or institutional verification."
      }
    ],
    contacts: sharedContacts$5,
    supportPanel: {
      availability: "Use for regular self-checks during exam, result and certificate cycles.",
      responseTime: "Digital issues should be raised with exact error context and identifying details.",
      bestFor: ["Record verification", "Status checks", "Digital service access"],
      notes: [
        "Do not share portal credentials. Use only official university channels for authentication and support."
      ]
    }
  }
];
function resolveStudentServiceTabKey(page) {
  const normalized = (page ?? "overview").trim().toLowerCase();
  return studentServicePageAliases[normalized] ?? normalized;
}
function getStudentServiceTab(page) {
  const key = resolveStudentServiceTabKey(page);
  return studentServiceTabs.find((tab) => tab.key === key) ?? studentServiceTabs[0];
}
const sharedContacts$4 = [
  { label: "HR Helpdesk", value: "+91 863 234 6115", href: "tel:+918632346115" },
  { label: "Establishment Section", value: "estt@anu.ac.in", href: "mailto:estt@anu.ac.in" },
  { label: "Registrar Office", value: "registrar@anu.ac.in", href: "mailto:registrar@anu.ac.in" }
];
const employeeServicePageAliases = {
  "payroll-salary": "hr-payroll",
  "forms-downloads": "downloads",
  pension: "retirees-pensioners",
  careers: "professional-development",
  webmail: "employee-portal"
};
const employeeServiceTabs = [
  {
    key: "overview",
    title: "Employee Services Hub",
    shortTitle: "Overview",
    badge: "Primary",
    description: "A centralized service hub for teaching and non-teaching staff, covering payroll, leaves, service records, and professional development.",
    metrics: [
      {
        label: "Core service clusters",
        value: "6",
        note: "Payroll, HR, Records, Portal, Welfare, and Pensions"
      },
      {
        label: "Support channels",
        value: "3",
        note: "Phone, email and establishment office guidance"
      },
      {
        label: "Employee tabs",
        value: "10",
        note: "Structured for faster administrative task discovery"
      },
      {
        label: "Location",
        value: "Admin Block",
        note: "Acharya Nagarjuna University, Guntur"
      }
    ],
    highlights: [
      {
        title: "Streamlined administrative workflows",
        description: "Each tab groups services based on employee intent, such as applying for leave, checking payroll, or escalating an issue.",
        tone: "accent"
      },
      {
        title: "Clear ownership",
        description: "Every service specifies whether the action belongs to the digital portal, establishment section, or finance department."
      },
      {
        title: "Reduced processing delays",
        description: "Requirements and typical turnaround windows are shown upfront to ensure submissions are complete.",
        tone: "success"
      }
    ],
    steps: [
      {
        title: "Select the service area",
        description: "Start with HR & Payroll, Leave Management, Service Records, or navigate directly to the Digital Portal."
      },
      {
        title: "Check submission requirements",
        description: "Verify needed documents, approval routing, and deadlines before initiating a formal request."
      },
      {
        title: "Use the recommended channel",
        description: "Contact the mapped extension or email provided for the specific service when clarification is needed."
      }
    ],
    resources: [
      {
        title: "Payroll and Tax Declarations",
        channel: "HR & Payroll",
        turnaround: "Monthly cycle",
        requirements: "Employee ID and portal authentication",
        href: "/employee-services/hr-payroll"
      },
      {
        title: "Leave Applications",
        channel: "Leave Management",
        turnaround: "Based on leave type",
        requirements: "Managerial approval and leave balance",
        href: "/employee-services/leave-management"
      },
      {
        title: "Service Register Updates",
        channel: "Service Records",
        turnaround: "Administrative cycle",
        requirements: "Supporting documentation and establishment verification",
        href: "/employee-services/service-records"
      },
      {
        title: "Forms and Requisitions",
        channel: "Downloads",
        turnaround: "Varies by form",
        requirements: "Printed, signed and routed through HOD",
        href: "/employee-services/downloads"
      }
    ],
    faq: [
      {
        question: "Where do I find my salary slips and tax forms?",
        answer: "Salary slips and tax declarations are managed under the HR & Payroll tab, which links directly to the Employee Portal."
      },
      {
        question: "How should I report a discrepancy in my service register?",
        answer: "Visit the Service Records tab for the correct procedure and contact the Establishment Section with supporting documents."
      }
    ],
    contacts: sharedContacts$4,
    supportPanel: {
      availability: "Use this hub to quickly find the correct department for any administrative request.",
      responseTime: "Processing windows vary significantly based on the service type and university calendar.",
      bestFor: [
        "First-time onboarding navigation",
        "Finding the correct administrative office",
        "Understanding workflows for leaves and records"
      ],
      notes: [
        "This module provides guidance. Final approvals depend on official rules and committee decisions.",
        "Always maintain copies of physical submissions submitted to the Establishment Section."
      ]
    }
  },
  {
    key: "hr-payroll",
    title: "HR & Payroll Services",
    shortTitle: "HR & Payroll",
    badge: "Finance",
    description: "Access salary slips, tax declarations, provident fund details, and general human resources documentation.",
    metrics: [
      {
        label: "Key functions",
        value: "4",
        note: "Salary, Tax, PF, and Allowances"
      },
      {
        label: "Primary owner",
        value: "Finance & Accounts",
        note: "Coordinate with the Finance section"
      },
      {
        label: "Critical deadline",
        value: "January-February",
        note: "Annual IT declaration submission window"
      },
      { label: "Digital Access", value: "High", note: "Most payroll tasks are portal-driven" }
    ],
    highlights: [
      {
        title: "Digital Salary Slips",
        description: "Monthly payslips are generated digitally and can be downloaded directly from the Employee Portal."
      },
      {
        title: "Timely Tax Declarations",
        description: "Ensure investment proofs are submitted within the notified window to avoid default tax deductions.",
        tone: "accent"
      },
      {
        title: "Provident Fund Updates",
        description: "PF statements and loan request procedures are managed through the central finance desk."
      }
    ],
    steps: [
      {
        title: "Log into the portal",
        description: "Use your employee credentials to access the secure HR & Payroll section of the university portal."
      },
      {
        title: "Review monthly statements",
        description: "Regularly check your salary slip for accurate reflection of increments, deductions, and tax withholdings."
      },
      {
        title: "Submit physical proofs if required",
        description: "For certain claims or tax declarations, route physical copies through your department head to Finance."
      }
    ],
    resources: [
      {
        title: "Income Tax Declaration Form",
        channel: "Downloads / Portal",
        turnaround: "Processed in current financial year",
        requirements: "Investment proofs and PAN details",
        href: "/employee-services/downloads"
      },
      {
        title: "PF Loan Application",
        channel: "Finance Section",
        turnaround: "15-30 days",
        requirements: "Application form, specific reason, and HOD forwarding",
        href: "/employee-services/downloads"
      }
    ],
    faq: [
      {
        question: "When are salary slips usually available?",
        answer: "Salary slips are typically generated and available on the portal within the first week of the following month."
      },
      {
        question: "Who do I contact for a mismatch in my tax deduction?",
        answer: "Reach out to the Payroll/Finance section immediately with your latest slip and submitted investment proofs."
      }
    ],
    contacts: [
      { label: "Finance Officer", value: "finance@anu.ac.in", href: "mailto:finance@anu.ac.in" },
      { label: "Payroll Desk", value: "+91 863 234 6120", href: "tel:+918632346120" },
      ...sharedContacts$4
    ],
    supportPanel: {
      availability: "Highly active during the end of the financial year and first week of the month.",
      responseTime: "Routine slip generation is automatic. Discrepancy resolution takes 3-5 working days.",
      bestFor: ["Salary slip downloads", "Tax declaration planning", "Understanding deductions"],
      notes: [
        "Keep your portal credentials secure.",
        "Always cross-check your bank statements with your official payslip."
      ]
    }
  },
  {
    key: "leave-management",
    title: "Leave Management",
    shortTitle: "Leaves",
    badge: "Active",
    description: "Guidelines and routing for Casual Leave (CL), Earned Leave (EL), Medical Leave, and Special Casual Leave applications.",
    metrics: [
      {
        label: "Leave Types",
        value: "Multiple",
        note: "CL, EL, HPL, ML, SCL, and Maternity/Paternity"
      },
      {
        label: "Primary Owner",
        value: "HOD / Estt.",
        note: "Approval flows through the reporting structure"
      },
      {
        label: "Planning",
        value: "Prior Approval",
        note: "Mandatory for most non-emergency leaves"
      },
      {
        label: "Balance Check",
        value: "Portal",
        note: "View accumulated leaves digitally"
      }
    ],
    highlights: [
      {
        title: "Apply through proper channels",
        description: "All leaves must be routed through the Head of Department before reaching the Establishment Section.",
        tone: "accent"
      },
      {
        title: "Track leave balances",
        description: "Keep track of your CL and EL balances to ensure applications are not rejected due to insufficient quota."
      },
      {
        title: "Special Leave considerations",
        description: "Medical and Special Casual Leaves require additional documentation, such as medical certificates or event invitations."
      }
    ],
    steps: [
      {
        title: "Check availability",
        description: "Review your current leave balance on the portal or with the department clerk."
      },
      {
        title: "Submit application",
        description: "Fill out the standard leave form or apply via the portal, ensuring dates and alternative arrangements are clear."
      },
      {
        title: "Obtain endorsement",
        description: "Ensure your HOD endorses the application before you proceed on leave, except in sudden emergencies."
      }
    ],
    resources: [
      {
        title: "Standard Leave Application Form",
        channel: "Downloads",
        turnaround: "Pre-departure",
        requirements: "Dates, type of leave, and HOD signature",
        href: "/employee-services/downloads"
      },
      {
        title: "Medical Certificate Submission",
        channel: "Establishment",
        turnaround: "Upon return",
        requirements: "Registered practitioner certificate for ML"
      }
    ],
    contacts: sharedContacts$4,
    supportPanel: {
      availability: "Applicable year-round for all teaching and non-teaching staff.",
      responseTime: "CLs are typically approved quickly by HODs; ELs and Medical Leaves may require Establishment processing.",
      bestFor: [
        "Applying for time off",
        "Understanding leave rules",
        "Checking required documentation"
      ],
      notes: [
        "Unauthorized absence without prior intimation is treated as a break in service.",
        "Retain copies of long-leave approvals for your personal records."
      ]
    }
  },
  {
    key: "health-welfare",
    title: "Health & Welfare",
    shortTitle: "Health & Welfare",
    badge: "Support",
    description: "Information on employee health insurance schemes, medical reimbursements, and campus wellness facilities.",
    metrics: [
      {
        label: "Focus",
        value: "Employee Wellbeing",
        note: "Medical claims and health coverage"
      },
      {
        label: "Campus Facility",
        value: "Health Centre",
        note: "Primary care available on campus"
      },
      {
        label: "Claim type",
        value: "Reimbursement",
        note: "Follows university medical reimbursement rules"
      },
      {
        label: "Coverage",
        value: "Staff & Dependents",
        note: "As per declared dependent records"
      }
    ],
    highlights: [
      {
        title: "Campus Health Centre",
        description: "Utilize the university health centre for primary consultations and minor emergencies during working hours."
      },
      {
        title: "Medical Reimbursements",
        description: "Claims for inpatient treatment at recognized hospitals can be submitted with original bills and discharge summaries.",
        tone: "accent"
      },
      {
        title: "Dependent Declarations",
        description: "Ensure your family details are up-to-date in your service record to avoid delays in processing dependent claims."
      }
    ],
    steps: [
      {
        title: "Seek treatment",
        description: "Prefer recognized or empanelled hospitals for smoother reimbursement processing."
      },
      {
        title: "Gather documentation",
        description: "Collect all original bills, prescriptions, diagnostic reports, and the discharge summary."
      },
      {
        title: "Submit claim form",
        description: "Fill out the medical reimbursement form and submit it through your department to the relevant administrative desk."
      }
    ],
    resources: [
      {
        title: "Medical Reimbursement Form",
        channel: "Downloads",
        turnaround: "30-60 days",
        requirements: "Original bills, discharge summary, dependent proof",
        href: "/employee-services/downloads"
      }
    ],
    contacts: [{ label: "Campus Health Centre", value: "Ext: 250", href: "#" }, ...sharedContacts$4],
    supportPanel: {
      availability: "Health centre is available during campus hours; claims can be submitted year-round.",
      responseTime: "Medical reimbursements require thorough verification and committee approval, taking several weeks.",
      bestFor: ["Medical emergencies", "Reimbursement claims", "Updating dependent records"],
      notes: [
        "Keep photocopies of all medical bills submitted for reimbursement.",
        "Always notify the administration early in case of prolonged hospitalization."
      ]
    }
  },
  {
    key: "service-records",
    title: "Service Records & Career Progression",
    shortTitle: "Service Records",
    badge: "Official",
    description: "Management of Service Registers (SR), promotion workflows, annual increments, and probation declarations.",
    metrics: [
      {
        label: "Core Document",
        value: "Service Register",
        note: "The official timeline of an employee's career"
      },
      {
        label: "Key Events",
        value: "Increments & CAS",
        note: "Annual and career advancement milestones"
      },
      {
        label: "Owner",
        value: "Establishment",
        note: "Custodians of the physical and digital records"
      },
      {
        label: "Verification",
        value: "Annual",
        note: "Employees should periodically verify their SR entries"
      }
    ],
    highlights: [
      {
        title: "Career Advancement Scheme (CAS)",
        description: "Faculty promotions are governed by UGC/AICTE CAS guidelines requiring structured API scoring and documentation.",
        tone: "accent"
      },
      {
        title: "Annual Increments",
        description: "Increments are processed annually based on the date of joining and satisfactory service verification."
      },
      {
        title: "Service Register Accuracy",
        description: "Any change in qualification, marital status, or dependent details must be formally entered into the SR."
      }
    ],
    steps: [
      {
        title: "Maintain personal copies",
        description: "Keep copies of all your joining reports, promotion letters, and acquired degree certificates."
      },
      {
        title: "Prepare for CAS/Promotions",
        description: "Compile your academic, research, and administrative contributions well before the application window opens."
      },
      {
        title: "Verify entries",
        description: "Request a periodic review of your Service Register to ensure recent increments and qualifications are logged."
      }
    ],
    resources: [
      {
        title: "CAS Application Proforma",
        channel: "Downloads",
        turnaround: "Committee cycle",
        requirements: "API scores, publications, and service details",
        href: "/employee-services/downloads"
      },
      {
        title: "Qualification Addition Request",
        channel: "Establishment",
        turnaround: "15-20 days",
        requirements: "Original degree certificates and HOD forwarding"
      }
    ],
    contacts: sharedContacts$4,
    supportPanel: {
      availability: "Crucial during promotion cycles and annual increment processing.",
      responseTime: "CAS processing depends on external expert availability and committee scheduling.",
      bestFor: [
        "Applying for promotion",
        "Updating educational qualifications",
        "Ensuring increment processing"
      ],
      notes: [
        "Incomplete CAS applications significantly delay the promotion process.",
        "Your Service Register is the ultimate source of truth for pension calculations."
      ]
    }
  },
  {
    key: "professional-development",
    title: "Professional Development & Research",
    shortTitle: "Development",
    badge: "Growth",
    description: "Support for Faculty Development Programs (FDP), conferences, research grants, and duty leave processing.",
    metrics: [
      {
        label: "Target Audience",
        value: "Faculty",
        note: "Primarily for teaching and research staff"
      },
      {
        label: "Support Type",
        value: "Grants & Duty Leave",
        note: "Time and funding for academic growth"
      },
      {
        label: "Approval",
        value: "Prior Sanction",
        note: "Required before attending external events"
      },
      {
        label: "Outcome",
        value: "API Points",
        note: "Contributes to CAS and accreditation metrics"
      }
    ],
    highlights: [
      {
        title: "Duty Leave (On-Duty)",
        description: "Faculty can avail duty leave for attending conferences, acting as examiners, or participating in approved FDPs."
      },
      {
        title: "Research Projects",
        description: "Proposals for UGC, DST, or CSIR funding must be routed through the university's research cell and Registrar.",
        tone: "accent"
      },
      {
        title: "Financial Assistance",
        description: "Subject to university rules, partial or full funding may be available for presenting papers at reputed international conferences."
      }
    ],
    steps: [
      {
        title: "Identify the opportunity",
        description: "Ensure the conference or FDP is recognized and aligns with your department's goals."
      },
      {
        title: "Apply for On-Duty leave",
        description: "Submit the request with the brochure and invitation letter to the HOD well in advance."
      },
      {
        title: "Submit the participation report",
        description: "Upon return, submit the attendance certificate and a brief report to close the duty leave record."
      }
    ],
    resources: [
      {
        title: "Duty Leave Application",
        channel: "Downloads",
        turnaround: "3-5 days",
        requirements: "Event brochure, invitation, and alternative class arrangements",
        href: "/employee-services/downloads"
      },
      {
        title: "Research Proposal Forwarding",
        channel: "Research Cell",
        turnaround: "7-10 days",
        requirements: "Complete proposal and ethical clearances if applicable"
      }
    ],
    faq: [
      {
        question: "How many days of Duty Leave can I take in a year?",
        answer: "Duty leave limits are governed by university statutes and UGC guidelines, typically capped annually. Check with the Establishment section for the current limit."
      }
    ],
    contacts: sharedContacts$4,
    supportPanel: {
      availability: "Plan and apply well ahead of the registration deadline for external events.",
      responseTime: "Funding approvals require committee clearance and take longer than standard duty leave approvals.",
      bestFor: ["Attending conferences", "Applying for external grants", "Participating in FDPs"],
      notes: ["Maintain a personal dossier of all attended programs for future CAS applications."]
    }
  },
  {
    key: "employee-portal",
    title: "Employee Portal Services",
    shortTitle: "Digital Portal",
    badge: "Access",
    description: "Gateway to digital services, profile management, and online request tracking for university staff.",
    metrics: [
      { label: "Core functions", value: "3", note: "Profile, Payslips, and Leave Tracking" },
      {
        label: "Security",
        value: "Mandatory",
        note: "Keep credentials confidential"
      },
      {
        label: "Best use",
        value: "Self-service",
        note: "Reduce visits to the administrative blocks"
      },
      { label: "Linked workflows", value: "Multiple", note: "Payroll, Leaves, and Notices" }
    ],
    highlights: [
      {
        title: "Centralized Digital Identity",
        description: "The portal acts as your primary digital identity for internal university services and communications."
      },
      {
        title: "Self-Service Convenience",
        description: "Download payslips, check leave balances, and update contact information without paper forms.",
        tone: "accent"
      },
      {
        title: "Secure Access",
        description: "Access is restricted to active employees. Report any unauthorized access attempts immediately to the IT cell."
      }
    ],
    steps: [
      {
        title: "Initial Login",
        description: "Use the credentials provided by the Establishment/IT cell upon joining."
      },
      {
        title: "Verify Profile",
        description: "Ensure your designation, department, and reporting manager are correctly mapped in the system."
      },
      {
        title: "Utilize Services",
        description: "Routinely use the portal for tasks like leave applications and reviewing circulars."
      }
    ],
    faq: [
      {
        question: "What should I do if I forget my portal password?",
        answer: "Use the 'Forgot Password' link on the login page or contact the IT Helpdesk for a reset."
      }
    ],
    contacts: [
      { label: "IT Helpdesk", value: "ithelp@anu.ac.in", href: "mailto:ithelp@anu.ac.in" },
      ...sharedContacts$4
    ],
    supportPanel: {
      availability: "Available 24/7. System maintenance is usually scheduled on weekends.",
      responseTime: "Portal access issues are typically resolved by the IT desk within 24 hours.",
      bestFor: ["Downloading payslips", "Checking leave quotas", "Accessing digital circulars"],
      notes: ["Do not share your password with colleagues or subordinates."]
    }
  },
  {
    key: "staff-grievance-cell",
    title: "Staff Grievance Cell",
    shortTitle: "Grievances",
    badge: "Escalation",
    description: "A structured pathway for escalating workplace concerns, administrative disputes, and policy clarifications.",
    metrics: [
      {
        label: "Primary Role",
        value: "Dispute Resolution",
        note: "Providing a fair hearing for staff issues"
      },
      {
        label: "Confidentiality",
        value: "Maintained",
        note: "Sensitive issues are handled with discretion"
      },
      {
        label: "Process",
        value: "Tiered",
        note: "HOD → Dean/Principal → Registrar → Grievance Cell"
      },
      {
        label: "Goal",
        value: "Workplace Harmony",
        note: "Ensuring fair treatment per university statutes"
      }
    ],
    highlights: [
      {
        title: "Follow the Chain of Command",
        description: "Before approaching the formal grievance cell, attempt to resolve the issue through your immediate HOD or Dean."
      },
      {
        title: "Document the Issue",
        description: "Formal grievances require a clear, factual written representation with supporting evidence or prior correspondence.",
        tone: "accent"
      },
      {
        title: "Impartial Review",
        description: "The grievance committee consists of senior officials to ensure a balanced and objective review of the matter."
      }
    ],
    steps: [
      {
        title: "Attempt local resolution",
        description: "Discuss the concern with your direct supervisor or department head first."
      },
      {
        title: "Draft a formal representation",
        description: "If unresolved, write a clear, objective letter outlining the issue, dates, and what specific resolution you seek."
      },
      {
        title: "Submit to the Registrar",
        description: "Formal grievances should be submitted to the Registrar's office, who will route it to the appropriate committee."
      }
    ],
    contacts: sharedContacts$4,
    supportPanel: {
      availability: "Use when standard administrative channels have failed to resolve a legitimate concern.",
      responseTime: "Committees convene periodically; resolution times vary based on the complexity of the case.",
      bestFor: ["Service condition disputes", "Workplace conflicts", "Policy clarification"],
      notes: [
        "Grievances should be factual and respectful in tone.",
        "Anonymous complaints are generally not entertained by formal committees."
      ]
    }
  },
  {
    key: "downloads",
    title: "Employee Forms & Downloads",
    shortTitle: "Downloads",
    badge: "Forms",
    description: "A centralized repository for common administrative forms, applications, and policy documents.",
    metrics: [
      {
        label: "Content",
        value: "Applications",
        note: "Leave, PF, Claims, and CAS forms"
      },
      {
        label: "Format",
        value: "PDF / Word",
        note: "Ready for print and signature"
      },
      {
        label: "Usage",
        value: "High",
        note: "Saves time compared to office visits"
      },
      {
        label: "Updates",
        value: "Periodic",
        note: "Forms change with policy updates"
      }
    ],
    highlights: [
      {
        title: "Print, Sign, Submit",
        description: "Most university workflows still require physical signatures. Download the form, complete it, and route it properly."
      },
      {
        title: "Categorized for Convenience",
        description: "Forms are grouped by HR, Finance, Research, and General Administration to help you find them faster.",
        tone: "accent"
      },
      {
        title: "Always use the latest version",
        description: "Avoid using old photocopies from colleagues, as form structures and required enclosures occasionally change."
      }
    ],
    resources: [
      {
        title: "Leave Application Forms (CL/EL/ML)",
        channel: "Department",
        turnaround: "N/A",
        requirements: "Standard form for physical routing",
        href: "/employee-services/leave-management"
      },
      {
        title: "Medical Reimbursement Claim Form",
        channel: "Finance",
        turnaround: "N/A",
        requirements: "Needs original bills attached",
        href: "/employee-services/health-welfare"
      },
      {
        title: "PF Advance/Withdrawal Form",
        channel: "Finance",
        turnaround: "N/A",
        requirements: "Requires balance verification",
        href: "/employee-services/hr-payroll"
      },
      {
        title: "CAS Proforma",
        channel: "Establishment",
        turnaround: "N/A",
        requirements: "Extensive enclosures needed",
        href: "/employee-services/service-records"
      }
    ],
    faq: [
      {
        question: "Can I submit these forms digitally?",
        answer: "While some processes are moving online, most critical forms still require a physical signature from your HOD before submission to the administration."
      }
    ],
    contacts: sharedContacts$4,
    supportPanel: {
      availability: "Available anytime. Check back before starting a new process.",
      responseTime: "Instant download.",
      bestFor: ["Finding standard templates", "Preparing applications", "Policy reference"],
      notes: ["If a specific form is missing, contact the relevant department directly."]
    }
  },
  {
    key: "retirees-pensioners",
    title: "Retirees & Pensioners Support",
    shortTitle: "Retirees",
    badge: "Pension",
    description: "Dedicated guidance for retiring staff, covering final settlements, pension processing, and life certificate submissions.",
    metrics: [
      {
        label: "Audience",
        value: "Superannuating Staff",
        note: "Transitioning from active service"
      },
      {
        label: "Key Process",
        value: "Settlement",
        note: "Gratuity, Leave Encashment, and Pension fixing"
      },
      {
        label: "Annual Task",
        value: "Life Certificate",
        note: "Required every November"
      },
      {
        label: "Contact",
        value: "Pension Section",
        note: "Specialized desk in Finance"
      }
    ],
    highlights: [
      {
        title: "Start Planning Early",
        description: "Begin compiling your records and clearing dues at least 6 months before your date of superannuation.",
        tone: "accent"
      },
      {
        title: "No Dues Certificates",
        description: "Clearance from the library, department, hostels, and finance is mandatory for processing final settlements."
      },
      {
        title: "Annual Life Certificate",
        description: "Pensioners must submit a physical or digital life certificate annually to ensure uninterrupted pension disbursement."
      }
    ],
    steps: [
      {
        title: "Initiate No Dues process",
        description: "Collect the No Dues form and get clearances from all specified university departments."
      },
      {
        title: "Submit Pension Papers",
        description: "Complete the pension application forms along with joint photographs and nominee details."
      },
      {
        title: "Stay in Touch",
        description: "Ensure your communication address and phone number are updated with the Pension Section."
      }
    ],
    resources: [
      {
        title: "Pension Application Forms",
        channel: "Downloads / Pension Desk",
        turnaround: "Processed before retirement date",
        requirements: "Service book verification and No Dues",
        href: "/employee-services/downloads"
      },
      {
        title: "Life Certificate Template",
        channel: "Downloads",
        turnaround: "Annual submission (November)",
        requirements: "Signature of gazetted officer or bank manager",
        href: "/employee-services/downloads"
      }
    ],
    contacts: [
      { label: "Pension Desk (Finance)", value: "Ext: 221", href: "#" },
      ...sharedContacts$4
    ],
    supportPanel: {
      availability: "Vital during the 6 months prior to retirement and annually thereafter.",
      responseTime: "Final settlements require complex auditing. Delays in 'No Dues' directly delay the pension order.",
      bestFor: [
        "Retirement planning",
        "Understanding settlement procedures",
        "Life certificate guidance"
      ],
      notes: [
        "Keep your family informed about nominee procedures and pension documentation.",
        "Retain a photocopy of your finalized Service Register."
      ]
    }
  }
];
function resolveEmployeeServiceTabKey(page) {
  const normalized = (page ?? "overview").trim().toLowerCase();
  return employeeServicePageAliases[normalized] ?? normalized;
}
function getEmployeeServiceTab(page) {
  const key = resolveEmployeeServiceTabKey(page);
  return employeeServiceTabs.find((tab) => tab.key === key) ?? employeeServiceTabs[0];
}
const sharedContacts$3 = [
  { label: "Student Affairs Office", value: "+91 863 234 6116", href: "tel:+918632346116" },
  { label: "Campus Health Helpdesk", value: "+91 863 234 6117", href: "tel:+918632346117" },
  { label: "Public Relations Cell", value: "press@anu.ac.in", href: "mailto:press@anu.ac.in" }
];
const campusLifePageAliases = {
  hostels: "hostel",
  "health-centre": "health-center",
  radio: "anu-radio-91-2",
  garden: "herbal-garden"
};
const campusLifeTabs = [
  {
    key: "overview",
    title: "Campus Life Hub",
    shortTitle: "Overview",
    badge: "Active",
    description: "Discover a vibrant 300-acre green campus hosting hostels, healthcare, competitive sports, NSS/NCC chapters, FM radio, and student engagement circles.",
    metrics: [
      { label: "Campus Area", value: "300 Ac", note: "Lush green, plastic-free environment" },
      { label: "Hostel Blocks", value: "8+", note: "Separate housing for men and women" },
      { label: "NSS Volunteers", value: "5000+", note: "Active across constituent units" },
      { label: "Radio Station", value: "91.2 FM", note: "ANU Community Radio broadcasting daily" }
    ],
    highlights: [
      {
        title: "Diverse Engagement Spaces",
        description: "Engage in social service, military training, sports programs, electoral literacy, or community broadcasting.",
        tone: "accent"
      },
      {
        title: "Centralized Amenities",
        description: "Access 24/7 medical care, hostel counseling, sporting complexes, and digital student notifications from this single view."
      },
      {
        title: "Sustainability & Environment",
        description: "Participate in regular campus cleaning, plastic-free campaigns, and biological conservation at our Herbal Garden.",
        tone: "success"
      }
    ],
    steps: [
      {
        title: "Explore Campus Facilities",
        description: "Learn about residential blocks, medical care, and physical sports amenities."
      },
      {
        title: "Join Student Corps & Clubs",
        description: "Register for NSS, NCC, or the Electoral Literacy Club to build leadership and service skills."
      },
      {
        title: "Participate in Events",
        description: "Stay updated on youth festivals, cultural programs, and community radio broadcasts."
      }
    ],
    resources: [
      {
        title: "Hostel Registration Form",
        channel: "Hostel Office",
        turnaround: "Admission day",
        requirements: "Student ID, admission fee receipt, identity proofs",
        href: "/campus-life/hostel"
      },
      {
        title: "NCC Enrollment Form",
        channel: "NCC Unit Office",
        turnaround: "Semester start",
        requirements: "Physical fitness certificate, academic card",
        href: "/campus-life/ncc"
      },
      {
        title: "Health Centre Policy Booklet",
        channel: "Health Centre Counter",
        turnaround: "Instant download",
        requirements: "None",
        href: "/campus-life/health-center"
      }
    ],
    faq: [
      {
        question: "How do I register for on-campus hostels?",
        answer: "Hostel registration is managed at the hostel administrative office block. Submit the registration forms along with academic admission documents and fee clearances."
      },
      {
        question: "Is campus radio accessible to students?",
        answer: "Yes. ANU Radio 91.2 FM encourages students to participate in production, broadcasting, and educational talks."
      }
    ],
    contacts: sharedContacts$3,
    supportPanel: {
      availability: "Student affairs coordinators are available Monday through Saturday from 10:00 AM to 5:00 PM.",
      responseTime: "Routine applications are processed within 3-5 business days.",
      bestFor: [
        "Campus navigation and facilities",
        "Joining student organizations",
        "Cultural calendar coordination"
      ],
      notes: [
        "Students are expected to adhere to the code of conduct across all facilities.",
        "Ensure plastic-free compliance while in recreational areas."
      ]
    }
  },
  {
    key: "hostel",
    title: "Hostel & Residential Life",
    shortTitle: "Hostels",
    badge: "Residential",
    description: "Comfortable and secure residential accommodation for national and international students with dining, security, and recreational facilities.",
    metrics: [
      { label: "Boys Hostels", value: "4 Blocks", note: "Equipped with libraries and gyms" },
      { label: "Girls Hostels", value: "4 Blocks", note: "24/7 security and high surveillance" },
      { label: "Mess Model", value: "Co-op", note: "Healthy vegetarian and non-vegetarian food" },
      { label: "Counseling", value: "24/7", note: "Resident wardens and counselors on duty" }
    ],
    highlights: [
      {
        title: "Secure Environment",
        description: "CCTV surveillance, regular night patrols, and biometric entry systems keep students safe.",
        tone: "accent"
      },
      {
        title: "Recreational Zones",
        description: "Every hostel block contains common reading rooms, television halls, and indoor sports tables."
      },
      {
        title: "Cooperatively Run Dining",
        description: "Student mess committees oversee weekly menus, raw material procurement, and quality audits."
      }
    ],
    steps: [
      {
        title: "Apply for Seat Allocation",
        description: "Submit your academic seat details and choice of room type online or at the Hostel office."
      },
      {
        title: "Clear Admission Fees",
        description: "Pay the required hostel and caution deposits through the authorized bank counter."
      },
      {
        title: "Complete Room Check-In",
        description: "Submit payment challans and retrieve room keys from the resident warden."
      }
    ],
    resources: [
      {
        title: "Hostel Handbook & Rules",
        channel: "Hostel Office",
        turnaround: "Immediate",
        requirements: "None"
      },
      {
        title: "Mess Fee Structure Slip",
        channel: "Mess Office",
        turnaround: "Semester-wise",
        requirements: "Student Registration Details"
      }
    ],
    faq: [
      {
        question: "Can I choose my roommates?",
        answer: "Roommate preferences can be submitted during registration and will be allocated based on availability."
      },
      {
        question: "What is the curfew timing for hostels?",
        answer: "Standard curfew is 7:30 PM for all residential blocks, unless prior permission is acquired for academic labs or events."
      }
    ],
    contacts: [
      { label: "Chief Warden Office", value: "+91 863 234 6130", href: "tel:+918632346130" },
      ...sharedContacts$3
    ],
    supportPanel: {
      availability: "Hostel wardens and security officers are available 24/7 on campus.",
      responseTime: "Immediate response for security and medical emergencies.",
      bestFor: [
        "Room allocations and maintenance",
        "Mess queries and feedback",
        "Discipline and security reports"
      ],
      notes: [
        "Strict anti-ragging policies are maintained inside hostels.",
        "Possession of prohibited items leads to immediate expulsion."
      ]
    }
  },
  {
    key: "health-center",
    title: "University Health Centre",
    shortTitle: "Health Centre",
    badge: "Medical",
    description: "Central medical care facility offering free diagnostic services, primary consultations, emergency aid, and pharmacy access to students and staff.",
    metrics: [
      { label: "Resident Doctors", value: "3", note: "Available for shifts and emergencies" },
      { label: "Ambulance", value: "24/7", note: "On-call emergency transport" },
      { label: "Free Meds", value: "100%", note: "Standard dispensary items provided" },
      { label: "Beds Available", value: "6", note: "Primary observation ward" }
    ],
    highlights: [
      {
        title: "Free Consultations",
        description: "All registered students and employees receive free consultations and standard medicines.",
        tone: "success"
      },
      {
        title: "Emergency Evacuation",
        description: "Dedicated ambulance on standby for quick transport to empanelled super-specialty hospitals."
      },
      {
        title: "Specialist Visits",
        description: "Weekly visits by gynecologists, ophthalmologists, and psychological counselors."
      }
    ],
    steps: [
      {
        title: "Present Student ID",
        description: "Register your details at the outpatient counter using your university identity card."
      },
      {
        title: "Consult Medical Officer",
        description: "Undergo examination, diagnostics, or counseling as recommended by the doctor."
      },
      {
        title: "Collect Dispensary Items",
        description: "Present the medical slip to the pharmacy counter to collect free prescribed medicines."
      }
    ],
    resources: [
      {
        title: "Emergency Contact Directory",
        channel: "Health Centre Office",
        turnaround: "Immediate",
        requirements: "None"
      },
      {
        title: "Counseling Registration Form",
        channel: "Counseling Cell",
        turnaround: "1-2 days schedule",
        requirements: "Student ID"
      }
    ],
    faq: [
      {
        question: "Are diagnostic checkups free?",
        answer: "Basic blood tests, ECG, and blood pressure checks are free for students at the health centre."
      },
      {
        question: "How do I reach the ambulance at night?",
        answer: "Call the emergency health centre helpline at +91 863 234 6117 for immediate assistance."
      }
    ],
    contacts: [
      { label: "Medical Officer", value: "health@anu.ac.in", href: "mailto:health@anu.ac.in" },
      { label: "Ambulance Standby", value: "+91 863 234 6117", href: "tel:+918632346117" },
      ...sharedContacts$3
    ],
    supportPanel: {
      availability: "OPD runs daily from 8:00 AM to 6:00 PM. Emergency and ambulance services are open 24/7.",
      responseTime: "Ambulance dispatch is handled within 5 minutes of calling.",
      bestFor: ["Primary medical care", "Dispensary prescriptions", "Mental health counseling"],
      notes: [
        "In case of severe injuries, first responders will stabilize the patient and transport them to Guntur General Hospital."
      ]
    }
  },
  {
    key: "sports",
    title: "Physical Education & Sports",
    shortTitle: "Sports",
    badge: "Athletics",
    description: "State-of-the-art sports complexes, athletic tracks, gymnasiums, and playfields designed to support physical fitness and competitive representation.",
    metrics: [
      { label: "Athletic Track", value: "400m", note: "Standard synthetic layout" },
      { label: "Playfields", value: "10+", note: "Cricket, football, kabaddi, volleyball" },
      { label: "Indoor Gyms", value: "2", note: "Fully equipped multi-gym structures" },
      { label: "Tournaments", value: "12+", note: "Inter-university events hosted annually" }
    ],
    highlights: [
      {
        title: "Elite Coaching Program",
        description: "Professional training modules for athletics, weightlifting, volleyball, and yoga.",
        tone: "accent"
      },
      {
        title: "Indoor Sporting Arena",
        description: "Wood-floored courts for badminton, basketball, and table tennis championships."
      },
      {
        title: "Fitness & Wellness Gyms",
        description: "Accessible to hostellers during morning and evening sessions under trainer guidance."
      }
    ],
    steps: [
      {
        title: "Register for Sports Club",
        description: "Submit your nomination and selected athletic specialty at the Physical Education block."
      },
      {
        title: "Undergo Fitness Trial",
        description: "Attend coach evaluations for university team selection profiles."
      },
      {
        title: "Obtain Sports Kit",
        description: "Selected players are provided with standard equipment, kits, and training gear."
      }
    ],
    resources: [
      {
        title: "Sports Facility Schedule",
        channel: "Physical Education Office",
        turnaround: "Annual calendar",
        requirements: "None"
      },
      {
        title: "Inter-University Trial Form",
        channel: "Sports Coordinator",
        turnaround: "Before tournament cycle",
        requirements: "Student status verification, fit certificate"
      }
    ],
    faq: [
      {
        question: "Can non-athletes use the gymnasiums?",
        answer: "Yes. Gyms are open to all university students during designated general hours (6:00 AM - 8:30 AM and 4:30 PM - 7:00 PM)."
      },
      {
        question: "Are there travel allowances for outer tournaments?",
        answer: "Yes. Students representing ANU in national or inter-university matches are provided with travel, boarding, and kit allowances."
      }
    ],
    contacts: [
      {
        label: "Director of Physical Education",
        value: "sports@anu.ac.in",
        href: "mailto:sports@anu.ac.in"
      },
      ...sharedContacts$3
    ],
    supportPanel: {
      availability: "Playfields and gyms are active from 5:30 AM to 8:30 AM, and 4:00 PM to 7:30 PM.",
      responseTime: "Facility booking requests are processed in 24 hours.",
      bestFor: ["University team selections", "Gymnasium access", "Booking sports grounds"],
      notes: [
        "Prior approval is mandatory for using primary indoor court lighting.",
        "Appropriate sports shoes and attire are mandatory in gyms and tracks."
      ]
    }
  },
  {
    key: "nss",
    title: "National Service Scheme (NSS)",
    shortTitle: "NSS",
    badge: "Service",
    description: "Developing student personality through community service, village adoption camps, blood donation drives, and national integration campaigns.",
    metrics: [
      { label: "Active Units", value: "50+", note: "Across constituent and affiliated units" },
      { label: "Camps Held", value: "30+", note: "Special rural adoption camps annually" },
      { label: "Blood Drives", value: "10+", note: "Collaborations with Red Cross" },
      { label: "Hours/Year", value: "120 Hr", note: "Standard volunteer service quota" }
    ],
    highlights: [
      {
        title: "Community Village Adoption",
        description: "Units adopt rural areas to educate, construct sanitation checks, and conduct health surveys.",
        tone: "success"
      },
      {
        title: "Special Merit Certificates",
        description: "Volunteers completing two years and 240 service hours are awarded priority admission quotas."
      },
      {
        title: "National Integration Camps",
        description: "Opportunities to represent ANU at national camps, youth festivals, and Republic Day selections."
      }
    ],
    steps: [
      {
        title: "Register with Unit Lead",
        description: "Sign up at your department or the central NSS block at the semester start."
      },
      {
        title: "Attend Weekly Sessions",
        description: "Participate in weekend social service campaigns and campus cleanliness drives."
      },
      {
        title: "Join adoption camps",
        description: "Attend the mandatory 7-day rural camp during semester break for certification."
      }
    ],
    resources: [
      {
        title: "NSS Volunteer Enrollment Card",
        channel: "NSS Office",
        turnaround: "Semester-wise",
        requirements: "Academic records, ID proof"
      },
      {
        title: "Rural Camp Clearance Form",
        channel: "NSS Programme Officer",
        turnaround: "Post-camp week",
        requirements: "Participation diary, signatures of coordinator"
      }
    ],
    faq: [
      {
        question: "Who is eligible to join NSS?",
        answer: "Any undergraduate or postgraduate student registered in constituent or affiliated colleges can join."
      },
      {
        question: "Does NSS give extra credits?",
        answer: "NSS participation adds to your extra-curricular record and provides valuable quota points during higher admissions."
      }
    ],
    contacts: [
      { label: "NSS Program Coordinator", value: "nss@anu.ac.in", href: "mailto:nss@anu.ac.in" },
      ...sharedContacts$3
    ],
    supportPanel: {
      availability: "NSS coordinators are available from 10:00 AM to 5:00 PM at the student activity block.",
      responseTime: "Enrollment cards are issued within 10 days of registration.",
      bestFor: ["Joining NSS chapters", "Rural camp schedules", "NSS merit certificates"],
      notes: ["Volunteers must log their service hours carefully in the official NSS diary."]
    }
  },
  {
    key: "ncc",
    title: "National Cadet Corps (NCC)",
    shortTitle: "NCC",
    badge: "Discipline",
    description: "Providing military training, adventure learning, and disaster management exposure to build character, comradeship, and leadership among students.",
    metrics: [
      { label: "Cadet Capacity", value: "160+", note: "Active boys and girls wings" },
      { label: "Parades/Year", value: "35+", note: "Conducted on university parade grounds" },
      { label: "A, B, C Certs", value: "C-Cert", note: "Highest cadet certification level" },
      { label: "RDC Cadets", value: "Recent", note: "ANU representation in Delhi parades" }
    ],
    highlights: [
      {
        title: "SSB Career Coaching",
        description: "Special training for NCC C-certificate holders aiming for direct commission in Armed Forces.",
        tone: "accent"
      },
      {
        title: "Adventure Programs",
        description: "Trekking camps, obstacle courses, shooting training, and river rafting expeditions."
      },
      {
        title: "Parade Ground Training",
        description: "Professional drills and training led by senior military officers and ANOs."
      }
    ],
    steps: [
      {
        title: "Pass Physical Fitness Trial",
        description: "Attend physical endurance and run tests conducted by the NCC unit during induction week."
      },
      {
        title: "Complete Documentation",
        description: "Submit personal profiles, medical fitness certificates, and guardian consent slips."
      },
      {
        title: "Attend Routine Parades",
        description: "Log regular attendance in weekly training parades to qualify for certificate exams."
      }
    ],
    resources: [
      {
        title: "NCC Cadet Admission Form",
        channel: "NCC Office",
        turnaround: "Induction week",
        requirements: "Physical fitness certificate, class verification card"
      },
      {
        title: "Camp Leave Request Form",
        channel: "ANO Office",
        turnaround: "3 days before camp",
        requirements: "Official camp order copy, alternate academic approvals"
      }
    ],
    faq: [
      {
        question: "Is there a girls' wing in ANU NCC?",
        answer: "Yes. ANU has fully integrated wings offering training and camps to both male and female cadets."
      },
      {
        question: "What benefit does the C-Certificate hold?",
        answer: "Cadets securing 'B' grade or higher in C-Certificate are exempt from written exams for direct SSB army commissions."
      }
    ],
    contacts: [
      {
        label: "Associate NCC Officer (ANO)",
        value: "ncc@anu.ac.in",
        href: "mailto:ncc@anu.ac.in"
      },
      ...sharedContacts$3
    ],
    supportPanel: {
      availability: "Parades are held every Saturday from 6:30 AM to 11:30 AM.",
      responseTime: "Induction results are posted within 3 days of fitness trials.",
      bestFor: [
        "NCC selections",
        "Camp schedules (ATC, RDC, TSC)",
        "Armed forces career guidelines"
      ],
      notes: ["Cadets must maintain their uniforms, boots, and drill gear in pristine condition."]
    }
  },
  {
    key: "elc",
    title: "Electoral Literacy Club (ELC)",
    shortTitle: "ELC",
    badge: "Awareness",
    description: "Creating awareness about democratic values, voter registration, ethical voting practices, and electoral processes among campus youths.",
    metrics: [
      { label: "Events Organized", value: "8+", note: "Seminars and quiz meets per year" },
      { label: "Voters Registered", value: "600+", note: "New registrations verified annually" },
      { label: "Core Members", value: "40+", note: "Student ambassadors across departments" },
      { label: "Special Day", value: "Jan 25", note: "National Voters Day celebrations" }
    ],
    highlights: [
      {
        title: "Voter Helpdesk Campaigns",
        description: "Student ambassadors set up portals to help peers register, download voter slips, and check voter rolls.",
        tone: "success"
      },
      {
        title: "Debates & Quizzes",
        description: "Regular inter-departmental speech contests, model parliaments, and essay writing campaigns."
      },
      {
        title: "Collaborative Focus",
        description: "Coordinating directly with Guntur District Election Authority for mock poll training."
      }
    ],
    steps: [
      {
        title: "Join ELC as Ambassador",
        description: "Register at your department and attend the ELC orientation meet."
      },
      {
        title: "Register as Voter",
        description: "Submit online registrations via Guntur District Voter Portal under ELC guidance."
      },
      {
        title: "Promote Ethical Voting",
        description: "Participate in rallies, street plays, and signature campaigns before general elections."
      }
    ],
    resources: [
      {
        title: "Voter Registration Guide (Form 6)",
        channel: "ELC Desk / NVSP Portal",
        turnaround: "NVSP timeline",
        requirements: "Address proof, age proof, passport photo"
      }
    ],
    faq: [
      {
        question: "How do I become an ELC student ambassador?",
        answer: "ELC selects 2-3 active student representatives from each department based on nominations at the semester start."
      }
    ],
    contacts: [
      { label: "ELC Nodal Officer", value: "elc@anu.ac.in", href: "mailto:elc@anu.ac.in" },
      ...sharedContacts$3
    ],
    supportPanel: {
      availability: "ELC helpdesk runs in the library lobby on select Wednesdays.",
      responseTime: "New registrations take 30-45 days for district office verification.",
      bestFor: [
        "Voter ID corrections and applications",
        "Participating in democracy quizzes",
        "Electoral literacy campaigns"
      ],
      notes: [
        "Voter registration is open to all students aged 18 or above who are Indian citizens."
      ]
    }
  },
  {
    key: "news",
    title: "Campus News & Announcements",
    shortTitle: "News",
    badge: "Updates",
    description: "Chronology of recent announcements, academic press releases, administrative orders, and campus milestones.",
    metrics: [
      { label: "Press Releases", value: "120+", note: "Circulated to regional media annually" },
      { label: "Update Freq", value: "Daily", note: "New notices and events uploaded regularly" },
      { label: "Source", value: "PR Cell", note: "Official media wing of university" },
      { label: "Archived Years", value: "5+", note: "Prior news logs accessible online" }
    ],
    highlights: [
      {
        title: "Official Press Releases",
        description: "Verified news drafts detailing research achievements, vice-chancellor statements, and sports medals.",
        tone: "accent"
      },
      {
        title: "Convocation Bulletins",
        description: "Schedule announcements and dress code norms for graduation convocations."
      }
    ],
    steps: [
      {
        title: "Check News Stream",
        description: "Visit the central news portal regularly to avoid missing important event alerts."
      }
    ],
    resources: [
      {
        title: "ANU Monthly Newsletter",
        channel: "PR Cell Office",
        turnaround: "Monthly",
        requirements: "None"
      }
    ],
    faq: [
      {
        question: "Where can I submit department news?",
        answer: "Department coordinators should email approved reports and photographs to press@anu.ac.in for newsletter inclusion."
      }
    ],
    contacts: [
      {
        label: "Public Relations Officer (PRO)",
        value: "press@anu.ac.in",
        href: "mailto:press@anu.ac.in"
      },
      ...sharedContacts$3
    ],
    supportPanel: {
      availability: "The media office is active during standard administrative hours.",
      responseTime: "News updates are reviewed and uploaded within 24-48 hours.",
      bestFor: [
        "Submitting event coverage",
        "Official press clarifications",
        "Newsletter archiving"
      ],
      notes: [
        "All news reports must be authenticated by the respective HOD or Dean prior to submission."
      ]
    }
  },
  {
    key: "events",
    title: "Campus Events & Culture",
    shortTitle: "Events",
    badge: "Culture",
    description: "Vibrant details of youth festivals, national seminars, international conferences, and departmental cultural clubs.",
    metrics: [
      { label: "Youth Festivals", value: "2", note: "Inter-collegiate events annually" },
      { label: "Seminars hosted", value: "30+", note: "Across departments each year" },
      { label: "Auditoriums", value: "3", note: "Dr. H.H. Deichmann and open-air arenas" },
      { label: "Cultural clubs", value: "6+", note: "Drama, music, photography, literature" }
    ],
    highlights: [
      {
        title: "Dr. H.H. Deichmann Auditorium",
        description: "A centralized, fully air-conditioned auditorium hosting major academic and cultural convocations.",
        tone: "accent"
      },
      {
        title: "Inter-Collegiate Youth Fest",
        description: "Annual cultural competition gathering over 1500 participants across Guntur and Prakasam districts."
      }
    ],
    steps: [
      {
        title: "Select Club/Event",
        description: "Review upcoming activities in the cultural event stream."
      },
      {
        title: "Submit Registration",
        description: "Join as participant or organizer via student union coordinators."
      }
    ],
    resources: [
      {
        title: "Cultural Club Enrolment Form",
        channel: "Student Affairs Office",
        turnaround: "Semester start",
        requirements: "Student ID card"
      }
    ],
    faq: [
      {
        question: "How do I book an auditorium for departmental seminars?",
        answer: "Submit reservation requests endorsed by your Dean/Principal to the Registrar Office at least 15 days in advance."
      }
    ],
    contacts: [
      {
        label: "Dean of Student Affairs",
        value: "dean_student@anu.ac.in",
        href: "mailto:dean_student@anu.ac.in"
      },
      ...sharedContacts$3
    ],
    supportPanel: {
      availability: "Cultural clubs coordinate meetings during evening hours (4:30 PM - 6:00 PM).",
      responseTime: "Auditorium booking approvals take 7-10 working days.",
      bestFor: [
        "Registering for youth fests",
        "Booking event venues",
        "Joining cultural student clubs"
      ],
      notes: ["Events must maintain silence in surrounding library and examination zones."]
    }
  },
  {
    key: "anu-radio-91-2",
    title: "ANU Radio 91.2 FM",
    shortTitle: "ANU Radio",
    badge: "Media",
    description: "ANU Community Radio station broadcasting educational talks, youth development content, health awareness, and traditional songs to nearby villages.",
    metrics: [
      { label: "Frequency", value: "91.2 MHz", note: "Authorized FM community band" },
      { label: "Broadcast Range", value: "15 km", note: "Covers Nagarjuna Nagar and Guntur outer" },
      { label: "Daily Shows", value: "6 Hours", note: "Educational and cultural programming" },
      { label: "Student Hosts", value: "25+", note: "RJs and voice-over creators" }
    ],
    highlights: [
      {
        title: "Community Outreach",
        description: "Broadcasting crucial agricultural guidelines, rural health initiatives, and weather bulletins.",
        tone: "success"
      },
      {
        title: "Student Voice Platform",
        description: "Providing opportunities for students to act as RJs, script writers, and audio editors."
      },
      {
        title: "Digital Recording Studio",
        description: "Advanced audio mixing consoles, soundproof recording booths, and digital editing suites."
      }
    ],
    steps: [
      {
        title: "Apply for Voice Trial",
        description: "Register for announcer auditions at the ANU Radio studio during induction weeks."
      },
      {
        title: "Record Script Draft",
        description: "Prepare and record educational or campus news scripts under coordinator mentorship."
      }
    ],
    resources: [
      {
        title: "Radio Intern Request",
        channel: "Radio Station Block",
        turnaround: "Semester-wise",
        requirements: "Communication background or domain interest, sample script"
      }
    ],
    faq: [
      {
        question: "Can I host a show on ANU Radio?",
        answer: "Yes, students with good communication skills and script ideas are selected as RJs after a voice test."
      }
    ],
    contacts: [
      { label: "Radio Station Manager", value: "radio@anu.ac.in", href: "mailto:radio@anu.ac.in" },
      ...sharedContacts$3
    ],
    supportPanel: {
      availability: "The radio studio is open from 9:30 AM to 5:30 PM on workdays.",
      responseTime: "Voice trial schedules are announced within 5 days of submission.",
      bestFor: ["RJ auditions", "Proposing educational programs", "Studio visit coordinates"],
      notes: [
        "Broadcast scripts must be approved by the station manager and avoid politically sensitive subjects."
      ]
    }
  },
  {
    key: "herbal-garden",
    title: "Botanical & Herbal Garden",
    shortTitle: "Herbal Garden",
    badge: "Eco",
    description: "A specialized biological conservation zone housing rare medicinal plants, taxons, and local flora to support botanical research and environmental wellness.",
    metrics: [
      { label: "Plant Species", value: "350+", note: "Rare medicinal and aromatic shrubs" },
      { label: "Greenhouse", value: "1", note: "Maintained climate for delicate specimens" },
      { label: "Academic Visits", value: "20+", note: "Schools and researcher tours annually" },
      { label: "Garden Area", value: "5 Ac", note: "Dedicated biological park zone" }
    ],
    highlights: [
      {
        title: "Rare Taxon Preservation",
        description: "Conserving endangered plants and local medicinal species for research reference.",
        tone: "success"
      },
      {
        title: "Bio-Research Field",
        description: "Practical field training and research plot allocation for Botany and Biotechnology students."
      }
    ],
    steps: [
      {
        title: "Request Visit Permit",
        description: "Academic classes or external groups must request visiting permits at the Botany department."
      }
    ],
    resources: [
      {
        title: "Plant Taxonomy Catalog",
        channel: "Botany Dept Office",
        turnaround: "Immediate",
        requirements: "None"
      }
    ],
    faq: [
      {
        question: "Is the Herbal Garden open to general public?",
        answer: "Yes, visitors are allowed during morning and evening hours under guided pathways, provided they respect the biological conservation rules."
      }
    ],
    contacts: [
      { label: "Botany Dept Head", value: "botany@anu.ac.in", href: "mailto:botany@anu.ac.in" },
      ...sharedContacts$3
    ],
    supportPanel: {
      availability: "Open daily from 6:00 AM to 9:00 AM, and 4:00 PM to 6:00 PM.",
      responseTime: "Group visit approvals take 2 working days.",
      bestFor: ["Medicinal plant identification", "Botanical research plots", "Eco-wellness walks"],
      notes: [
        "Plucking leaves, flowers, or damaging labels is strictly prohibited and attracts fines."
      ]
    }
  }
];
function getCampusLifeTab(pageId) {
  const resolved = pageId ? campusLifePageAliases[pageId] || pageId : "overview";
  const found = campusLifeTabs.find((t) => t.key === resolved);
  return found || campusLifeTabs[0];
}
const sharedContacts$2 = [
  { label: "IQAC Office", value: "+91 863 234 6125", href: "tel:+918632346125" },
  { label: "Director of IQAC", value: "iqac@anu.ac.in", href: "mailto:iqac@anu.ac.in" }
];
const rankingsPageAliases = {
  "nirf-rankings": "nirf",
  "naac-accreditation": "naac",
  awards: "awards-recognitions",
  "green-metric": "green-metric-ranking"
};
const rankingsTabs = [
  {
    key: "overview",
    title: "Quality & Rankings Hub",
    shortTitle: "Overview",
    badge: "Accredited",
    description: "Overview of Acharya Nagarjuna University rankings, IQAC processes, and national/global accreditations reflecting our commitment to quality standards.",
    metrics: [
      { label: "NAAC Grade", value: "A+", note: "3.46 Cumulative GPA score" },
      { label: "NIRF Status", value: "Ranked", note: "Regular national participant" },
      { label: "IQAC Audits", value: "Annual", note: "Systematic internal reviews" },
      { label: "Global Presence", value: "QS Ranked", note: "Asia and World category listings" }
    ],
    highlights: [
      {
        title: "Quality Standards",
        description: "The IQAC cell continuously audits academic records, faculty profiles, and departmental research output to align with NAAC criteria.",
        tone: "accent"
      },
      {
        title: "Diverse Certifications",
        description: "Participating in national registries, green sustainability metrics, and global institutional ranking frameworks."
      }
    ],
    steps: [
      {
        title: "Check Accreditation Status",
        description: "Verify the current NAAC rating cycle and grading results."
      },
      {
        title: "Review Annual Reports",
        description: "Access the Self-Study Reports (SSR) and IQAC internal audit records."
      }
    ],
    resources: [
      {
        title: "NAAC A+ Accreditation Certificate",
        channel: "IQAC Portal",
        turnaround: "Instant download",
        requirements: "None"
      },
      {
        title: "Latest AQAR Document",
        channel: "IQAC Office",
        turnaround: "Instant download",
        requirements: "None"
      }
    ],
    faq: [
      {
        question: "What is NAAC grading status for ANU?",
        answer: "Acharya Nagarjuna University has been accredited with an 'A+' grade by NAAC with an outstanding CGPA of 3.46."
      }
    ],
    contacts: sharedContacts$2,
    supportPanel: {
      availability: "IQAC administration is available Monday through Saturday from 10:00 AM to 5:00 PM.",
      responseTime: "Standard queries are addressed in 3 business days.",
      bestFor: [
        "Accreditation certificate requests",
        "AQAR submission updates",
        "Institutional rankings verification"
      ],
      notes: [
        "All data published here matches certified submissions to NIRF, NAAC, and other registries."
      ]
    }
  },
  {
    key: "nirf",
    title: "NIRF India Rankings",
    shortTitle: "NIRF",
    badge: "National",
    description: "Annual institutional performance and parameter-level details submitted under the National Institutional Ranking Framework (NIRF), Ministry of Education.",
    metrics: [
      { label: "Registry", value: "NIRF", note: "Ministry of Education, Govt of India" },
      {
        label: "Parameters",
        value: "5",
        note: "Teaching, learning, research, graduation, perception"
      },
      { label: "Participation", value: "Annual", note: "Submitted across multiple streams" },
      { label: "Verification", value: "Public", note: "All data uploads are audited and verified" }
    ],
    highlights: [
      {
        title: "Submission Transparency",
        description: "In compliance with MHRD norms, all data points uploaded for NIRF evaluation are made publicly available for verification.",
        tone: "accent"
      }
    ],
    steps: [
      {
        title: "Access NIRF Data Sheets",
        description: "Download the complete submission dossier covering student strength, placements, and financial resources."
      }
    ],
    resources: [
      {
        title: "NIRF 2026 Overall Submission Dossier",
        channel: "IQAC Office / NIRF",
        turnaround: "Immediate",
        requirements: "None"
      }
    ],
    faq: [
      {
        question: "Where can I view parameter breakdowns?",
        answer: "The full breakdown of parameter scores (TLR, RPC, GO, OI, PR) is available in the official NIRF submission document."
      }
    ],
    contacts: sharedContacts$2,
    supportPanel: {
      availability: "NIRF cell coordinators operate inside the IQAC office block.",
      responseTime: "Dossier corrections and reviews require Registrar sign-off.",
      bestFor: ["Reading NIRF submissions", "Understanding parameter scoring"],
      notes: [
        "Official NIRF publications follow the calendar released by the Ministry of Education."
      ]
    }
  },
  {
    key: "iqac",
    title: "Internal Quality Assurance Cell",
    shortTitle: "IQAC",
    badge: "Quality",
    description: "Internal Quality Assurance Cell (IQAC) coordinates all quality assurance benchmarks, planning systems, and academic performance indicators (API).",
    metrics: [
      { label: "Role", value: "QA Auditing", note: "Academic and administrative parameters" },
      { label: "Meetings", value: "Quarterly", note: "Chaired by the Vice Chancellor" },
      { label: "AQARs File", value: "Annual", note: "Submitted to NAAC online portal" },
      { label: "Feedback", value: "360 Deg", note: "Collected from students, parents, and alumni" }
    ],
    highlights: [
      {
        title: "Academic Audits",
        description: "Periodic evaluations of department syllabus, student feedback patterns, and laboratory capabilities.",
        tone: "success"
      }
    ],
    steps: [
      {
        title: "Submit API Score Sheet",
        description: "Faculty members submit their Annual API appraisal proforma to IQAC for verification."
      }
    ],
    resources: [
      {
        title: "Annual Quality Assurance Report (AQAR)",
        channel: "IQAC Portal",
        turnaround: "Immediate",
        requirements: "None"
      }
    ],
    faq: [
      {
        question: "How do I submit student feedback?",
        answer: "Student feedback forms are sent out digitally at the end of each semester and are directly tabulated by the IQAC cell."
      }
    ],
    contacts: sharedContacts$2,
    supportPanel: {
      availability: "OPD hours of IQAC counter match standard administrative working hours.",
      responseTime: "Routine letters and reports take 2-4 working days.",
      bestFor: ["Quality assurance guidelines", "API appraisal queries", "AQAR downloads"],
      notes: [
        "All constituent colleges must submit their internal quality reports to the central cell annually."
      ]
    }
  },
  {
    key: "ssr",
    title: "Self-Study Report (SSR)",
    shortTitle: "SSR",
    badge: "Audit Docs",
    description: "The complete documentation and data files compiled for the National Assessment and Accreditation Council (NAAC) Self-Study Report (SSR).",
    metrics: [
      { label: "Criteria", value: "7", note: "Core focus areas of NAAC evaluation" },
      { label: "Cycle", value: "4th Cycle", note: "Current institutional assessment phase" },
      { label: "Data Sheets", value: "80+", note: "Metrics verified under DVV" },
      { label: "Status", value: "Accredited", note: "Dossier closed after peer team visit" }
    ],
    highlights: [
      {
        title: "DVV Cleared Data",
        description: "All quantitative metrics presented in the SSR have cleared the rigorous Data Validation and Verification (DVV) phase.",
        tone: "accent"
      }
    ],
    steps: [
      {
        title: "Download SSR Volumes",
        description: "Choose the criterion-wise documentation links below to check specific academic and support dossiers."
      }
    ],
    resources: [
      {
        title: "Complete NAAC Self-Study Report Volume",
        channel: "IQAC Archive",
        turnaround: "Immediate",
        requirements: "None"
      }
    ],
    faq: [
      {
        question: "What are the 7 criteria evaluated in the SSR?",
        answer: "They are Curricular Aspects; Teaching-Learning; Research-Innovations; Infrastructure; Student Support; Governance-Leadership; and Institutional Values."
      }
    ],
    contacts: sharedContacts$2,
    supportPanel: {
      availability: "SSR digital archives are accessible 24/7.",
      responseTime: "Inquiries regarding DVV datasets are handled via the IQAC director.",
      bestFor: ["Criterion-wise data checks", "DVV verification details"],
      notes: [
        "These documents represent the exhaustive quality profile submitted for accreditation reviews."
      ]
    }
  },
  {
    key: "naac",
    title: "NAAC Accreditation Profile",
    shortTitle: "NAAC",
    badge: "A+ Grade",
    description: "Details of NAAC accreditation results, cumulative scores, peer team reports, and certificates awarded over successive assessment cycles.",
    metrics: [
      { label: "Latest Grade", value: "A+ Grade", note: "3.46 score out of 4.0" },
      { label: "Validity", value: "5 Years", note: "Accreditation period" },
      { label: "First Cycle", value: "2003", note: "First accredited state university in AP" },
      { label: "Assessors", value: "Peer Team", note: "Senior academicians and Vice Chancellors" }
    ],
    highlights: [
      {
        title: "Accredited with Distinction",
        description: "Acharya Nagarjuna University has consistently maintained high grades, positioning it as a leading state university in South India.",
        tone: "success"
      }
    ],
    steps: [
      {
        title: "Check Peer Team Report",
        description: "Download the official qualitative feedback document released by the NAAC Peer Team."
      }
    ],
    resources: [
      {
        title: "NAAC Peer Team Assessment Report",
        channel: "IQAC Office",
        turnaround: "Immediate",
        requirements: "None"
      }
    ],
    faq: [
      {
        question: "When is the next NAAC assessment cycle scheduled?",
        answer: "The university is preparing its SSR and documentation for the upcoming assessment cycle in alignment with standard validity timelines."
      }
    ],
    contacts: sharedContacts$2,
    supportPanel: {
      availability: "Standard office hours at the IQAC division.",
      responseTime: "Credential queries are verified within 2 business days.",
      bestFor: ["NAAC certificate copies", "Peer Team feedback reports"],
      notes: [
        "Accreditation status determines eligibility for central funding under RUSA and UGC."
      ]
    }
  },
  {
    key: "awards-recognitions",
    title: "Institutional Awards & Recognitions",
    shortTitle: "Awards",
    badge: "Honours",
    description: "Summary of accolades, national distinctions, green awards, and rankings received by the university from state, national, and global organizations.",
    metrics: [
      { label: "State Rank", value: "Top Tier", note: "In state university rankings" },
      { label: "Green Award", value: "Gold", note: "Recognising eco-friendly practices" },
      { label: "Research Medals", value: "50+", note: "Awarded to faculty members" },
      { label: "Estd", value: "1976", note: "Over 50 years of educational service" }
    ],
    highlights: [
      {
        title: "State and National Honours",
        description: "Accolades celebrating community outreach, academic innovation, and digital governance on campus.",
        tone: "accent"
      }
    ],
    steps: [
      {
        title: "Access Awards Archive",
        description: "Browse documented honours and recognitions catalogued by the PR cell."
      }
    ],
    resources: [
      {
        title: "ANU Awards & Recognitions Dossier",
        channel: "Public Relations Cell",
        turnaround: "Immediate",
        requirements: "None"
      }
    ],
    faq: [
      {
        question: "Where can I view individual faculty awards?",
        answer: "Faculty distinctions are logged on the individual profiles page or the research cell index."
      }
    ],
    contacts: sharedContacts$2,
    supportPanel: {
      availability: "Maintained by the Public Relations and Media cell.",
      responseTime: "Press clarifications are addressed via email.",
      bestFor: ["Press releases and media records", "Historical awards documentation"],
      notes: ["Accolades are verified by the institutional public relations officer."]
    }
  },
  {
    key: "qs-asia-ranking-2022",
    title: "QS Asia Ranking 2022 Details",
    shortTitle: "QS Asia",
    badge: "Global",
    description: "Performance details and parameters assessed under the Quacquarelli Symonds (QS) Asia University Rankings 2022.",
    metrics: [
      { label: "QS Category", value: "Asia", note: "Evaluating global benchmarks" },
      { label: "Staff Phd", value: "High", note: "Reflecting faculty qualification metrics" },
      { label: "Citations", value: "Scopus", note: "Evaluated using verified scopus datasets" },
      { label: "Papers", value: "Indexed", note: "Reflecting international publications" }
    ],
    highlights: [
      {
        title: "International Citations",
        description: "Strong performance in citation frequency and research papers per faculty under the QS methodology.",
        tone: "accent"
      }
    ],
    steps: [
      {
        title: "Check QS Profile",
        description: "View the official rankings overview published on the topuniversities portal."
      }
    ],
    resources: [
      {
        title: "QS Asia 2022 Parameters Sheet",
        channel: "IQAC / QS Portal",
        turnaround: "Immediate",
        requirements: "None"
      }
    ],
    faq: [
      {
        question: "How are QS rankings determined?",
        answer: "Criteria include Academic Reputation, Employer Reputation, Faculty/Student Ratio, Staff with PhD, and Citations per paper."
      }
    ],
    contacts: sharedContacts$2,
    supportPanel: {
      availability: "Data sheets are archived and managed by the IQAC cell.",
      responseTime: "Clarifications take 3 working days.",
      bestFor: ["QS ranking criteria details", "Faculty publication metrics"],
      notes: ["QS rankings are updated annually. Historical data is preserved for comparison."]
    }
  },
  {
    key: "qs-i-gauge-e-leas",
    title: "QS I-Gauge E-LEAD Certification",
    shortTitle: "QS I-Gauge",
    badge: "E-Learning",
    description: "E-Learning Excellence for Academic Digitisation (E-LEAD) certification awarded by QS I-Gauge for digitized campus infrastructure.",
    metrics: [
      { label: "Audit Type", value: "E-LEAD", note: "E-learning audit framework" },
      {
        label: "Infrastructure",
        value: "Excellent",
        note: "Digital classrooms and learning systems"
      },
      { label: "Bandwidth", value: "1 Gbps+", note: "Central campus fiber backbone connectivity" },
      { label: "Classrooms", value: "Digital", note: "Fitted with smart boards and cameras" }
    ],
    highlights: [
      {
        title: "Certified Digitisation",
        description: "Acharya Nagarjuna University is among select institutions certified for seamless online teaching, learning, and assessment.",
        tone: "success"
      }
    ],
    steps: [
      {
        title: "Review Smart Facilities",
        description: "Check the digital classroom mapping and online examination software capabilities."
      }
    ],
    resources: [
      {
        title: "QS I-Gauge E-LEAD Certificate Copy",
        channel: "IT Cell Office",
        turnaround: "Immediate",
        requirements: "None"
      }
    ],
    faq: [
      {
        question: "What does the E-LEAD certificate evaluate?",
        answer: "It audits the university’s IT infrastructure, online course delivery software, LMS system, and online examination security."
      }
    ],
    contacts: sharedContacts$2,
    supportPanel: {
      availability: "IT infrastructure audits are managed under the computer centre.",
      responseTime: "Service portal updates are processed in 24 hours.",
      bestFor: ["Digitisation audit sheets", "Smart classroom capabilities"],
      notes: [
        "The certification confirms our alignment with modern, hybrid learning expectations."
      ]
    }
  },
  {
    key: "world-ranking",
    title: "World University Rankings",
    shortTitle: "World Rank",
    badge: "International",
    description: "ANU global ranking records, citations indicators, and research collaboration networks indexed in international systems.",
    metrics: [
      { label: "Index", value: "World Cat", note: "Global university parameters" },
      { label: "Publications", value: "Scopus", note: "High impact factor entries" },
      { label: "Citations/Faculty", value: "High", note: "Exceeding regional baselines" },
      {
        label: "Collaborations",
        value: "Global",
        note: "Joint projects with foreign universities"
      }
    ],
    highlights: [
      {
        title: "Global Citations Footprint",
        description: "Our faculty’s publication trail in international chemistry, physics, and life science journals supports global rankings.",
        tone: "accent"
      }
    ],
    steps: [
      {
        title: "Check Citation Analytics",
        description: "Refer to the Research Cell database for the latest index statistics."
      }
    ],
    resources: [
      {
        title: "ANU International Citations & Papers Index",
        channel: "Research Cell",
        turnaround: "Immediate",
        requirements: "None"
      }
    ],
    faq: [
      {
        question: "How do I access Scopus/Web of Science analytics?",
        answer: "Access the campus network portal and navigate to library e-resource listings to query verified indices."
      }
    ],
    contacts: sharedContacts$2,
    supportPanel: {
      availability: "Analyzed and maintained under the central library administration.",
      responseTime: "Index checks take 2 business days.",
      bestFor: ["Querying international rankings", "Library e-resources access"],
      notes: [
        "Students and faculty must use university email credentials for premium e-journal access."
      ]
    }
  },
  {
    key: "impact-ranking",
    title: "THE Impact Rankings",
    shortTitle: "Impact Rank",
    badge: "THE Impact",
    description: "Assessment details and results reflecting the UN Sustainable Development Goals (SDGs) evaluated under Times Higher Education (THE) Impact Rankings.",
    metrics: [
      { label: "Methodology", value: "THE Impact", note: "Evaluating UN SDG parameters" },
      { label: "SDG 3 Status", value: "Ranked", note: "Good Health & Wellbeing initiatives" },
      { label: "SDG 4 Status", value: "Ranked", note: "Quality Education parameters" },
      { label: "Sustainability", value: "High", note: "Aligned with campus green policies" }
    ],
    highlights: [
      {
        title: "Sustainable Development Goals",
        description: "Acharya Nagarjuna University actively reports and aligns operations with global environmental, health, and gender equality goals.",
        tone: "success"
      }
    ],
    steps: [
      {
        title: "Check SDG Report Sheets",
        description: "Download the compliance reports submitted to the Times Higher Education portal."
      }
    ],
    resources: [
      {
        title: "THE Impact Rankings SDG Submission File",
        channel: "IQAC Office",
        turnaround: "Immediate",
        requirements: "None"
      }
    ],
    faq: [
      {
        question: "Why does the university participate in THE Impact rankings?",
        answer: "It measures our real social contribution, community health service, and environmental policies against the UN Sustainable Development Goals."
      }
    ],
    contacts: sharedContacts$2,
    supportPanel: {
      availability: "SDG coordination is handled within the IQAC planning cell.",
      responseTime: "Reports are compiled and updated annually.",
      bestFor: ["THE Impact parameters check", "SDG compliance documentation"],
      notes: ["Volunteering with NSS village adoption counts toward SDG 3 and SDG 4 criteria."]
    }
  },
  {
    key: "green-metric-ranking",
    title: "UI GreenMetric Rankings",
    shortTitle: "GreenMetric",
    badge: "Eco-Friendly",
    description: "Rankings performance assessed under the UI GreenMetric World University Rankings, focusing on campus sustainability, water conservation, and carbon footprint.",
    metrics: [
      { label: "Registry", value: "GreenMetric", note: "World university sustainability index" },
      { label: "Campus Setting", value: "300 Ac", note: "Over 60% green coverage" },
      { label: "Water Recycle", value: "Yes", note: "Rainwater harvesting and reuse systems" },
      { label: "Waste Audit", value: "Plastic Free", note: "Strict ban on single-use plastics" }
    ],
    highlights: [
      {
        title: "Sustainable Green Campus",
        description: "High ranking indicators in waste recycling, energy-efficient smart grids, and water harvesting structures across the Guntur campus.",
        tone: "success"
      }
    ],
    steps: [
      {
        title: "Check Green Metrics Dossier",
        description: "Review the carbon emission, energy efficiency, and organic farming logs compiled by campus development cells."
      }
    ],
    resources: [
      {
        title: "UI GreenMetric Assessment Report",
        channel: "Campus Development Office",
        turnaround: "Immediate",
        requirements: "None"
      }
    ],
    faq: [
      {
        question: "What are the core parameters of the GreenMetric ranking?",
        answer: "Setting & Infrastructure, Energy & Climate Change, Waste, Water, Transportation, and Education & Research."
      }
    ],
    contacts: sharedContacts$2,
    supportPanel: {
      availability: "Maintained under the campus garden and estate office.",
      responseTime: "Reports are updated in alignment with the annual ranking cycle.",
      bestFor: ["Sustainability audit sheets", "Campus botanical plans"],
      notes: ["Students must keep the campus plastic-free to support carbon reduction goals."]
    }
  },
  {
    key: "green-university-award-2021",
    title: "Green University Award 2021",
    shortTitle: "Green Award",
    badge: "Awarded",
    description: "Accolades and peer recognitions celebrating the university's green policies, organic farming plots, solar grid installations, and botanical conservation.",
    metrics: [
      { label: "Award Type", value: "Green Uni", note: "National level recognition" },
      { label: "Solar Energy", value: "Smart Grid", note: "Significant campus lighting offset" },
      { label: "Campus Green", value: "High Density", note: "Native forestry and botanical parks" },
      {
        label: "Compliance",
        value: "Zero Plastic",
        note: "Maintained across cafeteria and hostels"
      }
    ],
    highlights: [
      {
        title: "Ecological Excellence",
        description: "Acharya Nagarjuna University was recognized for its green energy transition, water recharging shafts, and plastic-free policy implementation.",
        tone: "success"
      }
    ],
    steps: [
      {
        title: "Review Green Policies",
        description: "Check the solar grid output graphs and wastewater recycling parameters."
      }
    ],
    resources: [
      {
        title: "Green University Award Certificate",
        channel: "PR Cell Office",
        turnaround: "Immediate",
        requirements: "None"
      }
    ],
    faq: [
      {
        question: "Who sponsored the Green University Award?",
        answer: "The award was presented by national ecological forums recognizing institutional excellence in green technology."
      }
    ],
    contacts: sharedContacts$2,
    supportPanel: {
      availability: "Welfare and campus greenery details are coordinated by the Botany and Garden cells.",
      responseTime: "Routine info takes 2 working days.",
      bestFor: ["Solar grid data sheets", "Wastewater recycling details"],
      notes: [
        "The award acknowledges our commitment to climate action and environmental education."
      ]
    }
  }
];
function getRankingsTab(pageId) {
  const resolved = pageId ? rankingsPageAliases[pageId] || pageId : "overview";
  const found = rankingsTabs.find((t) => t.key === resolved);
  return found || rankingsTabs[0];
}
const sharedContacts$1 = [
  { label: "R&D Cell Office", value: "+91 863 234 6126", href: "tel:+918632346126" },
  { label: "Research Cell Nodal", value: "research@anu.ac.in", href: "mailto:research@anu.ac.in" }
];
const researchPageAliases = {
  "rd-cell": "r-and-d-cell",
  "research-cell-info": "research-cell",
  policies: "research-policy",
  consultancy: "consultancy-policy",
  incubation: "incubators"
};
const researchTabs = [
  {
    key: "overview",
    title: "Research & Development Hub",
    shortTitle: "Overview",
    badge: "DST-Funded",
    description: "Welcome to the central research and development hub of Acharya Nagarjuna University. Explore funded projects, R&D cells, patent filing support, consultancy services, and institutional incubators.",
    metrics: [
      { label: "Funded Projects", value: "35+", note: "DST, UGC, CSIR, and ISRO sponsored" },
      { label: "Patents Filed", value: "12+", note: "By faculty and scholars recently" },
      { label: "Research Scholars", value: "450+", note: "Active PhD and PDF researchers" },
      { label: "Incubators", value: "2", note: "Innovation and startup incubation cells" }
    ],
    highlights: [
      {
        title: "Active DST-Funded Labs",
        description: "Our state-of-the-art laboratory infrastructure is funded by the Department of Science and Technology (DST) under FIST programs.",
        tone: "accent"
      },
      {
        title: "Patent and IPR Cell",
        description: "Centralized support to help university researchers draft patents, perform searches, and submit intellectual property applications."
      },
      {
        title: "Consultancy Opportunities",
        description: "Connecting industry demands with academic expertise under structured consultancy and technology transfer policies.",
        tone: "success"
      }
    ],
    steps: [
      {
        title: "Select Research Area",
        description: "Browse the R&D cell, research policies, or consultancy cells based on your current project phase."
      },
      {
        title: "Review Research Policy",
        description: "Check plagiarism limits, ethics clearances, and submission formats prior to writing papers."
      },
      {
        title: "Register Project Proposal",
        description: "Route external grant proposals through the central R&D cell for official Registrar endorsement."
      }
    ],
    resources: [
      {
        title: "ANU Research Policy Manual",
        channel: "Research Cell",
        turnaround: "Instant download",
        requirements: "None"
      },
      {
        title: "Patent Application Guidelines",
        channel: "IPR Cell Desk",
        turnaround: "Instant download",
        requirements: "None"
      }
    ],
    faq: [
      {
        question: "How do I route external research proposals?",
        answer: "Draft proposals should be submitted along with HOD recommendation to the R&D Cell for financial and administrative verification."
      }
    ],
    contacts: sharedContacts$1,
    supportPanel: {
      availability: "The R&D and Research cell offices are open Monday through Saturday from 10:00 AM to 5:00 PM.",
      responseTime: "Routine proposal clearances are processed in 5 business days.",
      bestFor: [
        "External research proposals forwarding",
        "Patent filing guidance",
        "Consultancy agreements review"
      ],
      notes: [
        "Ethical clearances for animal or human subjects must be completed before project commencement."
      ]
    }
  },
  {
    key: "r-and-d-cell",
    title: "R&D Cell Operations",
    shortTitle: "R&D Cell",
    badge: "Projects",
    description: "R&D Cell coordinates and monitors all sponsored projects, university research grants, and technology transfer activities.",
    metrics: [
      { label: "Active Grants", value: "INR 12 Cr+", note: "Combined project budget allocation" },
      { label: "Funding Agencies", value: "DST, DBT, UGC", note: "Central government departments" },
      { label: "Audit cycle", value: "Bi-Annual", note: "Financial utilization certifications" },
      { label: "IPR Support", value: "Central", note: "Facilitating patents and tech transfer" }
    ],
    highlights: [
      {
        title: "Sponsored Project Monitoring",
        description: "Unified assistance for recruitment of project fellows, procurement of equipment, and submission of utilization certificates.",
        tone: "accent"
      }
    ],
    steps: [
      {
        title: "Submit UC Documents",
        description: "Project investigators must submit audited Utilization Certificates (UC) through the R&D cell before the financial year closure."
      }
    ],
    resources: [
      {
        title: "Project Fellow Appointment Forms",
        channel: "R&D Cell",
        turnaround: "7-10 days",
        requirements: "Selection committee minutes, advertisement approval copy"
      }
    ],
    faq: [
      {
        question: "How are project fellow advertisements processed?",
        answer: "Principal investigators submit draft advertisements to the R&D cell. Once approved, circulars are posted on the university website."
      }
    ],
    contacts: sharedContacts$1,
    supportPanel: {
      availability: "R&D coordinators run desks in the administrative block.",
      responseTime: "Financial clearances take 4-7 working days.",
      bestFor: ["Utilization certificate verification", "Project staff appointments"],
      notes: [
        "Carry all purchase bills and stock register listings when presenting final project audit sheets."
      ]
    }
  },
  {
    key: "research-cell",
    title: "Research Cell & Doctoral Studies",
    shortTitle: "Research Cell",
    badge: "Ph.D.",
    description: "Doctoral research administration, covering Ph.D. registration cycles, coursework exams, pre-submission presentations, and thesis evaluation.",
    metrics: [
      { label: "Ph.D. Intake", value: "Annual", note: "Through APRCET or UGC qualification" },
      {
        label: "Coursework",
        value: "Mandatory",
        note: "Syllabus, examinations, and research methodology"
      },
      { label: "Plagiarism", value: "<10%", note: "Standard Urkund/Turnitin clearance threshold" },
      { label: "Evaluators", value: "External", note: "National and international examiners" }
    ],
    highlights: [
      {
        title: "Rigorous DVV Processes",
        description: "Checking research credentials, journal index status, and thesis plagiarism using premium Urkund/Turnitin tools.",
        tone: "success"
      }
    ],
    steps: [
      {
        title: "Apply for Coursework Exams",
        description: "Enroll for Ph.D. coursework exams after completing initial registration and coursework cycles."
      },
      {
        title: "Verify Plagiarism Report",
        description: "Submit draft thesis to the library cell for anti-plagiarism verification and certification."
      },
      {
        title: "Submit Thesis for Review",
        description: "Submit final bound copies along with publication proofs, fee challans, and supervisor signature."
      }
    ],
    resources: [
      {
        title: "Ph.D. Synopsis Submission Proforma",
        channel: "Research Cell",
        turnaround: "10-15 days",
        requirements: "Pre-talk minutes copy, fee receipt, publication list"
      },
      {
        title: "Thesis Plagiarism Clearance Request",
        channel: "Central Library",
        turnaround: "2-3 business days",
        requirements: "Soft copy of thesis (Word/PDF format)"
      }
    ],
    faq: [
      {
        question: "What is the fee structure for Ph.D. scholars?",
        answer: "Ph.D. tuition and laboratory fees are paid annually. Check the detailed research fee card available in the downloads section."
      }
    ],
    contacts: sharedContacts$1,
    supportPanel: {
      availability: "The doctoral studies counter runs from 10:30 AM to 4:30 PM.",
      responseTime: "Thesis evaluation reports are subject to examiner response windows.",
      bestFor: [
        "Coursework registration",
        "Plagiarism certification",
        "Ph.D. synopsis submissions"
      ],
      notes: [
        "Scholars must publish at least two papers in UGC-CARE list journals prior to final submission."
      ]
    }
  },
  {
    key: "research-policy",
    title: "University Research Policy",
    shortTitle: "Research Policy",
    badge: "Guidelines",
    description: "Code of ethics, anti-plagiarism guidelines, research publication parameters, and financial support policies for faculty and scholars.",
    metrics: [
      { label: "Ethics Committee", value: "Active", note: "Institutional approval bodies" },
      { label: "Plagiarism Limit", value: "10%", note: "Maximum allowable text matching" },
      { label: "CARE List", value: "UGC", note: "Mandatory journal registry" },
      {
        label: "Travel Grant",
        value: "Yes",
        note: "Support for international paper presentations"
      }
    ],
    highlights: [
      {
        title: "Zero Tolerance for Plagiarism",
        description: "Strict compliance checks on thesis data, journals, and project files. Mismatches attract academic disciplinary steps.",
        tone: "accent"
      }
    ],
    steps: [
      {
        title: "Review Publication Rules",
        description: "Confirm target journals match the UGC-CARE list or Scopus/Web of Science index."
      }
    ],
    resources: [
      {
        title: "Institutional Research Ethics Policy Booklet",
        channel: "Research Cell / Portal",
        turnaround: "Immediate",
        requirements: "None"
      }
    ],
    faq: [
      {
        question: "Does the university fund patent filing?",
        answer: "Yes. Under the university IPR policy, financial and legal support can be provided for approved inventions."
      }
    ],
    contacts: sharedContacts$1,
    supportPanel: {
      availability: "Policies are managed and updated by the Academic Senate and Research Cell.",
      responseTime: "Ethics committee evaluations take 15-30 days.",
      bestFor: ["Research ethic approvals", "Plagiarism regulations"],
      notes: [
        "Research proposals involving human participants or chemical hazards require prior biosafety committee approval."
      ]
    }
  },
  {
    key: "consultancy-policy",
    title: "Consultancy & Technology Transfer",
    shortTitle: "Consultancy",
    badge: "Policy",
    description: "Guidelines, technology sharing models, revenue sharing ratios, and consultancy contract validation systems for ANU faculty.",
    metrics: [
      { label: "Share Ratio", value: "60:40", note: "Revenue division model (Faculty:University)" },
      {
        label: "Consultancy Type",
        value: "Ind/Inst",
        note: "Individual and institutional agreements"
      },
      { label: "Contract Law", value: "Standard", note: "Approved legal formats" },
      {
        label: "Tech Transfer",
        value: "Active",
        note: "Commercializing campus research prototypes"
      }
    ],
    highlights: [
      {
        title: "Industry Collaboration",
        description: "Opportunities to offer technical solutions, laboratory testing services, and training to external industries.",
        tone: "success"
      }
    ],
    steps: [
      {
        title: "Register Consultancy Agreement",
        description: "Submit draft MOU or service order copies to the R&D cell for administrative approval."
      }
    ],
    resources: [
      {
        title: "Standard Consultancy MOU Template",
        channel: "R&D Cell",
        turnaround: "Immediate",
        requirements: "None"
      }
    ],
    faq: [
      {
        question: "How is consultancy revenue distributed?",
        answer: "Revenue distribution follows the ANU Consultancy Code (typically 60% to the investigating faculty and 40% to the university development fund)."
      }
    ],
    contacts: sharedContacts$1,
    supportPanel: {
      availability: "Legal and financial reviews are coordinated by the finance officer and R&D cell.",
      responseTime: "MOU reviews are completed in 10 working days.",
      bestFor: ["Consultancy contracts", "MOU drafting templates"],
      notes: [
        "Use of university laboratory facilities during consultancy must be logged and audited."
      ]
    }
  },
  {
    key: "incubators",
    title: "Innovation & Business Incubators",
    shortTitle: "Incubators",
    badge: "Startups",
    description: "Incubators providing student startups and inventors with office space, mentoring, initial funding channels, and industry linkages.",
    metrics: [
      { label: "Incubation Space", value: "Active", note: "Office space and smart labs" },
      { label: "Startups", value: "5+", note: "Incubated student and alumni units" },
      { label: "Patents", value: "IPR Cell", note: "Connected patent filing services" },
      { label: "Sponsorship", value: "Govt/Pvt", note: "Access to startup funding cycles" }
    ],
    highlights: [
      {
        title: "Campus Incubation Facilities",
        description: "Access high-speed internet, smart workstations, and collaborative laboratories to test your product prototypes.",
        tone: "success"
      }
    ],
    steps: [
      {
        title: "Submit Startup Proposal",
        description: "Present your business plan or technical prototype to the Innovation Cell selection committee."
      }
    ],
    resources: [
      {
        title: "Incubation Space Request Proforma",
        channel: "Innovation Cell",
        turnaround: "15-20 days",
        requirements: "Technical write-up, team details, business projection"
      }
    ],
    faq: [
      {
        question: "Who can apply for incubation space?",
        answer: "Any active student, alumnus, or faculty member with a viable technology prototype or business model can apply."
      }
    ],
    contacts: sharedContacts$1,
    supportPanel: {
      availability: "The Innovation Cell is located inside the technology block.",
      responseTime: "Proposal reviews are conducted in monthly cycles.",
      bestFor: ["Incubation requests", "Mentoring connections", "Patent link support"],
      notes: ["Incubates must periodically present progress to the startup evaluation committee."]
    }
  }
];
function getResearchTab(pageId) {
  const resolved = pageId ? researchPageAliases[pageId] || pageId : "overview";
  const found = researchTabs.find((t) => t.key === resolved);
  return found || researchTabs[0];
}
const sharedContacts = [
  { label: "Academic Section", value: "+91 863 234 6127", href: "tel:+918632346127" },
  {
    label: "Admissions Directorate",
    value: "diradmission@anu.ac.in",
    href: "mailto:diradmission@anu.ac.in"
  }
];
const programsPageAliases = {
  "undergraduate-programs": "ug-programs",
  "postgraduate-programs": "pg-programs",
  "doctoral-programs": "phd-programs",
  "distance-learning": "distance-education-anucde",
  fellowships: "post-doctoral-fellowships"
};
const programsTabs = [
  {
    key: "overview",
    title: "Programs Offered",
    shortTitle: "Overview",
    badge: "Diverse Courses",
    description: "Acharya Nagarjuna University offers over 150 undergraduate, postgraduate, diploma, and doctoral programs across constituent colleges, departments, and distance mode (ANUCDE).",
    metrics: [
      { label: "Total Programs", value: "150+", note: "Across multiple disciplines" },
      { label: "Colleges", value: "6", note: "Arts, Science, Engg, Pharmacy, Arch, P.E." },
      {
        label: "Distance Learning",
        value: "ANUCDE",
        note: "Centralized distance education support"
      },
      { label: "Research Tracks", value: "30+", note: "PhD specialization areas" }
    ],
    highlights: [
      {
        title: "Comprehensive Course Catalogue",
        description: "Choose from standard UG/PG courses, integrated programs, vocational diplomas, or professional doctorates.",
        tone: "accent"
      },
      {
        title: "Approved Curriculum",
        description: "All courses are approved by UGC, AICTE, PCI, and standard regulatory Councils to ensure degree validity."
      },
      {
        title: "Central Distance Mode",
        description: "ANUCDE offers flexible study modules, digital study materials, and regional examination centres.",
        tone: "success"
      }
    ],
    steps: [
      {
        title: "Discover Study Track",
        description: "Explore the different study levels: UG, PG, Integrated, Diplomas, or Doctoral programs."
      },
      {
        title: "Check Course Regulations",
        description: "Review specific eligibility requirements, semesters, fees, and credits before applying."
      },
      {
        title: "Complete Admission Process",
        description: "Submit forms through the Admissions Cell or through entrance exams (APRCET, APPGCET)."
      }
    ],
    resources: [
      {
        title: "ANU Admission Prospectus",
        channel: "Admissions Office",
        turnaround: "Instant download",
        requirements: "None"
      },
      {
        title: "Academic Regulations Booklet",
        channel: "Academic Section",
        turnaround: "Instant download",
        requirements: "None"
      }
    ],
    faq: [
      {
        question: "How do I check course fees?",
        answer: "Detailed fee structures for each course category are listed under the Admissions fee structure page or in the prospectus."
      }
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "Academic section officers are available Monday through Saturday from 10:00 AM to 5:00 PM.",
      responseTime: "Academic query responses take 3 business days.",
      bestFor: [
        "Course details and criteria",
        "Syllabus structures checking",
        "Degree equivalence requests"
      ],
      notes: ["Curriculum is updated periodically under Board of Studies (BOS) resolutions."]
    }
  },
  {
    key: "ug-programs",
    title: "Undergraduate Programs",
    shortTitle: "UG Programs",
    badge: "Bachelor Degree",
    description: "Explore undergraduate programs in Science, Arts, Engineering, Architecture, Pharmacy, and Physical Education offered across constituent units.",
    metrics: [
      { label: "B.Tech Streams", value: "6+", note: "CSE, ECE, EEE, Civil, Mechanical, Biotech" },
      { label: "Duration", value: "3-4 Years", note: "In semesters" },
      { label: "B.Arch Track", value: "5 Years", note: "Approved by Council of Architecture" },
      { label: "Pharmacy (B.Pharm)", value: "4 Years", note: "Approved by PCI" }
    ],
    highlights: [
      {
        title: "Professional Graduation",
        description: "Structured B.Tech, B.Arch, and B.Pharm courses designed for industrial readiness and licensing examinations.",
        tone: "accent"
      }
    ],
    steps: [
      {
        title: "Check Entrance Criteria",
        description: "Most UG courses require ranking in AP EAPCET, NATA, or equivalent national tests."
      }
    ],
    resources: [
      {
        title: "UG Courses List & Intake Seats",
        channel: "Academic Section",
        turnaround: "Immediate",
        requirements: "None"
      }
    ],
    faq: [
      {
        question: "Is there a lateral entry for B.Tech?",
        answer: "Yes. Lateral entry admissions into 2nd year B.Tech are open to diploma holders through ECET rankings."
      }
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "UG admissions counseling operates inside the main admissions cell block.",
      responseTime: "All admissions updates are posted on the university website.",
      bestFor: ["UG program inquiries", "Lateral entry questions"],
      notes: ["Maintain all intermediate or diploma certificates ready for verification."]
    }
  },
  {
    key: "integrated-programs",
    title: "Integrated Programs",
    shortTitle: "Integrated",
    badge: "5-Year Course",
    description: "Centralized 5-year integrated postgraduate programs offering seamless transition from intermediate to master's level in Sciences and Humanities.",
    metrics: [
      { label: "Duration", value: "5 Years", note: "Continuous semester structure" },
      { label: "Exit Options", value: "Yes", note: "As per National Education Policy guidelines" },
      {
        label: "Specialty",
        value: "Science/Arts",
        note: "Chemistry, Biotechnology, and English tracks"
      },
      { label: "Linked Degrees", value: "B.Sc + M.Sc", note: "Awarded together upon completion" }
    ],
    highlights: [
      {
        title: "Seamless Masters Pathway",
        description: "Save transition time and secure PG enrollment immediately after intermediate (+2) cycles.",
        tone: "success"
      }
    ],
    steps: [
      {
        title: "Review NEP Exit Rules",
        description: "Check intermediate exits, credit transfers, and bachelor degree certificates provisions."
      }
    ],
    resources: [
      {
        title: "Integrated Courses Structure Sheet",
        channel: "Academic Section",
        turnaround: "Immediate",
        requirements: "None"
      }
    ],
    faq: [
      {
        question: "Is there an exit option after 3 years?",
        answer: "Yes. Under modern NEP regulations, exit provisions with a bachelor's degree are available for registered students."
      }
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "Regular updates are managed by the constituent science college office.",
      responseTime: "Registration queries take 3 business days.",
      bestFor: ["Integrated course details", "NEP exit rules information"],
      notes: ["Admission depends on intermediate (+2) aggregate marks or entrance tests."]
    }
  },
  {
    key: "diploma-courses",
    title: "Diploma & Vocational Courses",
    shortTitle: "Diplomas",
    badge: "Vocational",
    description: "Short-term diploma and PG diploma courses designed for skill enhancement, professional certification, and immediate job readiness.",
    metrics: [
      { label: "Duration", value: "1 Year", note: "Two semesters" },
      { label: "Type", value: "Skill / PG Dip", note: "For intermediate and graduate entry" },
      { label: "Core Areas", value: "Yoga, Biotech", note: "Focusing on vocational applications" },
      { label: "Evening Batches", value: "Yes", note: "Flexible slots for working professionals" }
    ],
    highlights: [
      {
        title: "Industry Skill Sets",
        description: "Practical training modules focusing on laboratory skills, yoga therapy, languages, and IT tools.",
        tone: "accent"
      }
    ],
    steps: [
      {
        title: "Check Evening Classes",
        description: "Verify if your selected diploma offers flexible timing slots for working professionals."
      }
    ],
    resources: [
      {
        title: "Vocational Diplomas Syllabus Index",
        channel: "Academic Section",
        turnaround: "Immediate",
        requirements: "None"
      }
    ],
    faq: [
      {
        question: "Can I join a PG Diploma while doing PG?",
        answer: "Yes, dual registration rules under UGC guidelines allow joining select diploma courses simultaneously."
      }
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "Managed by the respective department or central counseling cell.",
      responseTime: "Enrollment updates are processed in 3 working days.",
      bestFor: ["Diploma course choices", "Evening batch coordinates"],
      notes: ["Examinations are conducted at the end of the 1-year study period."]
    }
  },
  {
    key: "pg-programs",
    title: "Postgraduate Programs",
    shortTitle: "PG Programs",
    badge: "Masters Degree",
    description: "Postgraduate master's degrees (M.Sc, M.A, M.Com, MBA, MCA, M.Pharm, M.Tech) delivering specialization and advanced research entry.",
    metrics: [
      { label: "M.Sc Streams", value: "15+", note: "Physics, chemistry, math, biotech, etc." },
      { label: "Duration", value: "2 Years", note: "4 semesters" },
      { label: "MBA/MCA Track", value: "Approved", note: "By AICTE" },
      { label: "Graduation rate", value: "High", note: "Excellent placement track record" }
    ],
    highlights: [
      {
        title: "Advanced Specializations",
        description: "Rigorous academic curriculums designed to support research entry, CSIR-NET preparation, and industry placements.",
        tone: "accent"
      }
    ],
    steps: [
      {
        title: "Qualify APPGCET / ICET",
        description: "Admissions to PG courses require valid state-level entrance rankings."
      }
    ],
    resources: [
      {
        title: "PG Course Catalogue & Seat Matrix",
        channel: "Academic Section",
        turnaround: "Immediate",
        requirements: "None"
      }
    ],
    faq: [
      {
        question: "When does PG counseling commence?",
        answer: "Counseling dates are announced by the state council (APSCHE) and follow APPGCET/ICET result releases."
      }
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "The college principal offices handle PG counseling registers.",
      responseTime: "Seat confirmation verification takes 2 business days.",
      bestFor: ["PG course details", "AP ICET/PGCET counseling"],
      notes: ["Keep your original degree marks memos ready for verification."]
    }
  },
  {
    key: "pg-diploma",
    title: "Postgraduate Diploma",
    shortTitle: "PG Diploma",
    badge: "Specialized",
    description: "Post-graduate diploma programs structured for specialized academic certification after bachelor graduation.",
    metrics: [
      { label: "Duration", value: "1 Year", note: "2 semesters" },
      { label: "Entry", value: "Graduate", note: "Requires Bachelor Degree completion" },
      { label: "Subjects", value: "HR, IT, Yoga", note: "Specialized streams" },
      { label: "Credits", value: "Standard", note: "Approved under academic regulations" }
    ],
    highlights: [
      {
        title: "Fast-Track Specialization",
        description: "Obtain specialized professional credentials in accounting, management, or IT systems within a year.",
        tone: "success"
      }
    ],
    steps: [
      {
        title: "Verify Graduation Status",
        description: "Confirm you have cleared your undergraduate bachelor degree before applying."
      }
    ],
    resources: [
      {
        title: "PG Diploma Regulations Proforma",
        channel: "Academic Section",
        turnaround: "Immediate",
        requirements: "None"
      }
    ],
    faq: [
      {
        question: "Is PG Diploma equivalent to a Masters degree?",
        answer: "No. It is a 1-year specialized diploma certificate, not a full 2-year master's degree, but holds high value in employment sectors."
      }
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "Coordinated at the administrative block registration windows.",
      responseTime: "Application reviews take 3 working days.",
      bestFor: ["PG Diploma requirements", "Fee payments verification"],
      notes: ["Incomplete bachelor dossiers will lead to rejection of PG Diploma registration."]
    }
  },
  {
    key: "distance-education-anucde",
    title: "Centre for Distance Education (ANUCDE)",
    shortTitle: "CDE",
    badge: "Distance Mode",
    description: "UGC-DEB approved distance education programs offering UG, PG, and PG Diploma opportunities with flexible study schedules and online support.",
    metrics: [
      { label: "Approval", value: "UGC-DEB", note: "Approved distance education bureau" },
      { label: "Study Centres", value: "Statewide", note: "Widespread examination networks" },
      { label: "Courses", value: "Multiple", note: "B.A, B.Com, M.A, M.Com, MBA, MCA" },
      { label: "E-Resources", value: "Portal", note: "Digital study material access" }
    ],
    highlights: [
      {
        title: "Flexible Learner Support",
        description: "Study at your own pace with digital content, weekend contact classes, and local examination coordination.",
        tone: "success"
      }
    ],
    steps: [
      {
        title: "Register on CDE Portal",
        description: "Complete online distance admission registration and select your preferred study center."
      }
    ],
    resources: [
      {
        title: "CDE Admission Notification Booklet",
        channel: "ANUCDE Office",
        turnaround: "Immediate",
        requirements: "None"
      }
    ],
    faq: [
      {
        question: "Are ANUCDE degrees recognized for govt jobs?",
        answer: "Yes. All degrees awarded by ANUCDE are approved by UGC-DEB and are equivalent to regular degrees for employment and higher studies."
      }
    ],
    contacts: [
      {
        label: "Director of ANUCDE",
        value: "anucdedirector@gmail.com",
        href: "mailto:anucdedirector@gmail.com"
      },
      { label: "CDE Helpdesk", value: "+91 863 234 6250", href: "tel:+918632346250" },
      ...sharedContacts
    ],
    supportPanel: {
      availability: "CDE administrative desks operate from 10:00 AM to 5:00 PM.",
      responseTime: "Study materials are dispatched within 15 days of admission clearance.",
      bestFor: [
        "Distance degree admissions",
        "E-learning syllabus lookup",
        "Exam center allocation"
      ],
      notes: ["Keep your CDE enrollment identity card safe for all examination halls entry."]
    }
  },
  {
    key: "phd-programs",
    title: "Ph.D. Programs",
    shortTitle: "Ph.D.",
    badge: "Research Degree",
    description: "Doctoral research programs (Ph.D.) offered across science, arts, engineering, pharmacy, and commerce streams under verified research guides.",
    metrics: [
      { label: "Admissions", value: "APRCET", note: "State-level research entrance exam" },
      { label: "Coursework", value: "1 Semester", note: "Followed by examinations" },
      { label: "Duration", value: "3-6 Years", note: "As per UGC regulations" },
      { label: "Scholarships", value: "CSIR/UGC", note: "For JRF qualified scholars" }
    ],
    highlights: [
      {
        title: "Research and Scholarship",
        description: "Focus on original research contribution, mandatory publications, and thesis defense overseen by senior external examiners.",
        tone: "accent"
      }
    ],
    steps: [
      {
        title: "Check Guide Vacancy",
        description: "Review current Ph.D. seat matrices and guide vacancies published by the research cell."
      }
    ],
    resources: [
      {
        title: "APRCET Counseling Seat Matrix",
        channel: "Research Cell",
        turnaround: "Immediate",
        requirements: "None"
      }
    ],
    faq: [
      {
        question: "Is a coursework exam mandatory?",
        answer: "Yes. Every registered research scholar must clear the Ph.D. coursework examinations to qualify for thesis registration."
      }
    ],
    contacts: [
      {
        label: "Director of Research Cell",
        value: "research@anu.ac.in",
        href: "mailto:research@anu.ac.in"
      },
      ...sharedContacts
    ],
    supportPanel: {
      availability: "Research section desk operates inside the administration block.",
      responseTime: "Synopsis approvals take 15 working days.",
      bestFor: ["Guide vacancy checks", "APRCET seat details"],
      notes: ["All doctoral guidelines strictly follow UGC 2016 regulations and amendments."]
    }
  },
  {
    key: "m-phil-programs",
    title: "M.Phil. Programs Archive",
    shortTitle: "M.Phil.",
    badge: "Archived",
    description: "Reference page for historical M.Phil. guidelines, course structures, and evaluation records (admissions discontinued per UGC norms).",
    metrics: [
      { label: "Status", value: "Discontinued", note: "In compliance with UGC norms" },
      { label: "Duration", value: "1.5 Years", note: "Prior course timeline" },
      { label: "Records", value: "Archived", note: "For students registered in previous cycles" },
      { label: "Evaluation", value: "Closed", note: "Except for ongoing pending clearances" }
    ],
    highlights: [
      {
        title: "Historical Records",
        description: "Academic guidelines and transcript references for scholars who completed their M.Phil. in prior cycles.",
        tone: "default"
      }
    ],
    steps: [
      {
        title: "Request M.Phil Certificate",
        description: "Alumni from prior batches can request duplicate memos and degrees through the exam downloads counter."
      }
    ],
    resources: [
      {
        title: "Legacy M.Phil Regulations File",
        channel: "Research Cell Archive",
        turnaround: "Immediate",
        requirements: "None"
      }
    ],
    faq: [
      {
        question: "Can I still apply for M.Phil?",
        answer: "No. M.Phil admissions have been permanently discontinued in accordance with the National Education Policy and UGC directives."
      }
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "Historical registries are managed by the examination section archives.",
      responseTime: "Legacy transcript checks take 5 business days.",
      bestFor: ["Duplicate M.Phil certificates", "Syllabus reference copies"],
      notes: ["Scholars wishing to pursue research must now apply directly to Ph.D. programs."]
    }
  },
  {
    key: "post-doctoral-fellowships",
    title: "Post-Doctoral Fellowships (PDF)",
    shortTitle: "Fellowships",
    badge: "Post-Doc",
    description: "Post-doctoral engagement (PDF) opportunities, CSIR/UGC fellowship routing, and temporary research scientist placements.",
    metrics: [
      { label: "Fellowship Type", value: "PDF / DST", note: "National level fellowships" },
      { label: "Contingency", value: "Yes", note: "In accordance with funding agency norms" },
      { label: "Facilities", value: "Full Access", note: "Advanced campus instrumentation labs" },
      {
        label: "Mentor Link",
        value: "Mandatory",
        note: "Must coordinate with senior university guide"
      }
    ],
    highlights: [
      {
        title: "Independent Research",
        description: "Engage in advanced research tracks, publish high impact factor papers, and mentor Ph.D. scholars under a senior guide.",
        tone: "accent"
      }
    ],
    steps: [
      {
        title: "Obtain Mentor Consent",
        description: "Request a formal research guide consent letter before applying to the central funding agency."
      }
    ],
    resources: [
      {
        title: "PDF Joining Report Format",
        channel: "Research Cell",
        turnaround: "Immediate",
        requirements: "None"
      }
    ],
    faq: [
      {
        question: "How is the contingency grant managed?",
        answer: "Contingency grants are processed through university finance counters in accordance with CSIR/UGC guidelines."
      }
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "Fellowship logs are updated and managed under the central R&D coordinator.",
      responseTime: "Joining paperwork takes 3 business days.",
      bestFor: ["PDF joining reports", "Contingency bills clearance"],
      notes: ["All fellowship renewals require annual progress reports verified by the mentor."]
    }
  }
];
function getProgramsTab(pageId) {
  const resolved = pageId ? programsPageAliases[pageId] || pageId : "overview";
  const found = programsTabs.find((t) => t.key === resolved);
  return found || programsTabs[0];
}
const pageAliasMap = {
  "notifications-timetables": "exam-notifications",
  "downloads-forms": "downloads",
  ...studentServicePageAliases,
  ...employeeServicePageAliases,
  ...campusLifePageAliases,
  ...rankingsPageAliases,
  ...researchPageAliases,
  ...programsPageAliases
};
function normalizeSlug(input) {
  return input.toLowerCase().trim().replace(/[_\s]+/g, "-").replace(/[^a-z0-9-]/g, "").replace(/-+/g, "-").replace(/^-+|-+$/g, "");
}
function resolvePage(page) {
  const normalized = normalizeSlug(page ?? "overview");
  return pageAliasMap[normalized] ?? normalized;
}
const $$splitComponentImporter$8 = () => import("./pages._section-D0V3r6kg.mjs");
const Route$8 = createFileRoute("/pages/$section")({
  validateSearch: (search) => ({
    page: typeof search.page === "string" ? search.page : void 0
  }),
  beforeLoad: ({
    params,
    search
  }) => {
    if (params.section === "about") {
      const resolved = resolvePage(search.page);
      if (resolved === "overview" || resolved === "profile") {
        throw redirect({
          to: "/aboutprofile"
        });
      }
      if (resolved === "history") {
        throw redirect({
          to: "/history"
        });
      }
      if (resolved === "jubilee") {
        throw redirect({
          to: "/jubilee"
        });
      }
      throw redirect({
        to: "/about/$pageId",
        params: {
          pageId: resolved
        }
      });
    }
    if (params.section === "student-services") {
      throw redirect({
        to: "/student-services/$pageId",
        params: {
          pageId: search.page || "overview"
        }
      });
    }
    if (params.section === "employee-services") {
      throw redirect({
        to: "/employee-services/$pageId",
        params: {
          pageId: search.page || "overview"
        }
      });
    }
    if (params.section === "campus-life") {
      throw redirect({
        to: "/campus-life/$pageId",
        params: {
          pageId: search.page || "overview"
        }
      });
    }
    if (params.section === "rankings") {
      throw redirect({
        to: "/rankings/$pageId",
        params: {
          pageId: search.page || "overview"
        }
      });
    }
    if (params.section === "research") {
      throw redirect({
        to: "/research/$pageId",
        params: {
          pageId: search.page || "overview"
        }
      });
    }
    if (params.section === "programs") {
      throw redirect({
        to: "/programs/$pageId",
        params: {
          pageId: search.page || "overview"
        }
      });
    }
    if (params.section === "admissions") {
      throw redirect({
        to: "/admissions/$pageId",
        params: {
          pageId: search.page || "overview"
        }
      });
    }
    if (params.section === "academics") {
      throw redirect({
        to: "/academics/$pageId",
        params: {
          pageId: search.page || "overview"
        }
      });
    }
    const normalizedSection = normalizeSlug(params.section);
    const normalizedPage = resolvePage(search.page);
    if (normalizedSection !== params.section || normalizedPage !== (search.page ?? "overview")) {
      throw redirect({
        to: "/pages/$section",
        params: {
          section: normalizedSection
        },
        search: {
          page: normalizedPage
        },
        replace: true
      });
    }
  },
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./faculty._facultySlug-Ch6pe_y2.mjs");
const Route$7 = createFileRoute("/faculty/$facultySlug")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component"),
  head: () => ({
    meta: [{
      title: "Faculty Profile | Acharya Nagarjuna University"
    }, {
      name: "description",
      content: "Faculty profile details for Acharya Nagarjuna University."
    }]
  })
});
const $$splitComponentImporter$6 = () => import("./employee-services._pageId-CZXLC1Xc.mjs");
const Route$6 = createFileRoute("/employee-services/$pageId")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const departmentPages = {
  // ─── ENGINEERING ────────────────────────────────────────────────────────────
  "computer-science-and-engineering": {
    id: "computer-science-and-engineering",
    slug: "computer-science-and-engineering",
    name: "Department of Computer Science and Engineering",
    shortName: "CSE Department",
    purpose: "Designing practical, reliable and intelligent digital systems.",
    heroLine: "Building intelligent systems for tomorrow",
    heroImage: "/departments/cse.jpg",
    college: "ANU College of Sciences",
    imageLabel: "CSE Department",
    learning: [
      {
        title: "Programming & Problem Solving",
        text: "Write clean code and reason through computational problems.",
        icon: CodeXml
      },
      {
        title: "AI & Machine Learning",
        text: "Apply intelligent models to real-world systems.",
        icon: Brain
      }
    ],
    programs: [
      {
        name: "MCA",
        duration: "2 Years",
        description: "Postgraduate program in software engineering, data structures, web technologies, cloud fundamentals and application development."
      },
      {
        name: "M.Sc Computer Science",
        duration: "2 Years",
        description: "Postgraduate program covering advanced algorithms, operating systems, database systems, distributed computing and machine learning foundations."
      },
      {
        name: "M.Sc Data Science",
        duration: "2 Years",
        description: "Postgraduate specialization in statistics, predictive modelling, big data processing and applied analytics for industry and research."
      }
    ],
    skills: [
      {
        title: "Industry-ready Coding",
        text: "Use modern development tools, frameworks and CI/CD workflows.",
        icon: CodeXml
      },
      {
        title: "Data Analysis",
        text: "Work with large datasets and extract actionable insights.",
        icon: Database
      }
    ],
    facilities: [
      {
        title: "Programming Labs",
        text: "High-spec workstations with the latest development environments and cloud access.",
        icon: CodeXml
      },
      {
        title: "AI & Data Science Lab",
        text: "GPU-enabled lab for deep learning, model training and data visualisation.",
        icon: Brain
      }
    ],
    faculty: [
      {
        name: "Prof. V. Ramachandra Rao",
        role: "Professor & Head",
        focus: "Algorithms and Software Systems"
      }
    ],
    researchFocus: [
      {
        title: "Artificial Intelligence",
        text: "Research in machine learning, NLP and intelligent systems.",
        icon: Brain,
        lead: "Prof. V. Ramachandra Rao",
        projects: "3 active projects"
      }
    ],
    careers: [
      {
        title: "Software Engineer",
        text: "Build modern applications and scalable digital platforms.",
        icon: CodeXml
      },
      {
        title: "Data Scientist",
        text: "Analyse complex datasets and build predictive models.",
        icon: Database
      }
    ],
    updates: [
      { date: "May 12", title: "Department seminar schedule released for 2025–26", tag: "NEW" }
    ]
  },
  "mechanical-engineering": {
    id: "mechanical-engineering",
    slug: "mechanical-engineering",
    name: "Department of Mechanical Engineering",
    shortName: "Mechanical Department",
    purpose: "Building engineering excellence in manufacturing and mechanical systems.",
    heroLine: "Driving innovation through mechanical engineering",
    heroImage: "/departments/mechanical.jpg",
    college: "ANU College of Engineering & Technology",
    imageLabel: "Mechanical Engineering",
    learning: [
      {
        title: "Machine Design",
        text: "Design and analyse mechanical components and assemblies.",
        icon: Cpu
      },
      {
        title: "Thermal Sciences",
        text: "Study heat transfer, thermodynamics and fluid mechanics.",
        icon: Lightbulb
      }
    ],
    programs: [
      {
        name: "B.Tech Mechanical Engineering",
        duration: "4 Years",
        description: "Undergraduate program covering machine design, manufacturing, thermodynamics and materials science."
      }
    ],
    skills: [
      {
        title: "Industrial Design",
        text: "Apply CAD tools and engineering analysis to real-world mechanical systems.",
        icon: Lightbulb
      },
      {
        title: "Manufacturing Processes",
        text: "Understand CNC machining, casting, welding and modern production techniques.",
        icon: Cpu
      }
    ],
    facilities: [
      {
        title: "Mechanical Workshop",
        text: "Fully equipped workshop for machining, welding and fabrication training.",
        icon: Building2
      },
      {
        title: "Thermal Lab",
        text: "Experimental setups for heat exchangers, IC engines and refrigeration.",
        icon: FlaskConical
      }
    ],
    faculty: [{ name: "Prof. K. Raghava", role: "Professor & Head", focus: "Thermal Engineering" }],
    researchFocus: [
      {
        title: "Advanced Manufacturing",
        text: "Research in modern production technologies and materials.",
        icon: Cpu,
        lead: "Prof. K. Raghava",
        projects: "2 active projects"
      }
    ],
    careers: [
      {
        title: "Mechanical Engineer",
        text: "Design and develop industrial mechanical systems and components.",
        icon: Cpu
      },
      {
        title: "Production Engineer",
        text: "Optimise manufacturing lines and implement lean processes.",
        icon: Building2
      }
    ],
    updates: [
      { date: "May 09", title: "Industrial visit schedule released for 2025–26", tag: "NOTICE" }
    ]
  },
  "electronics-and-communication-engineering": {
    id: "electronics-and-communication-engineering",
    slug: "electronics-and-communication-engineering",
    name: "Department of Electronics and Communication Engineering",
    shortName: "ECE Department",
    purpose: "Advancing communication systems and electronic circuit design.",
    heroLine: "Connecting the world through intelligent electronics",
    heroImage: "/departments/ece.jpg",
    college: "ANU College of Engineering & Technology",
    imageLabel: "ECE Department",
    learning: [
      {
        title: "Circuit Design",
        text: "Design and analyse analog and digital electronic circuits.",
        icon: Network
      },
      {
        title: "Communication Systems",
        text: "Understand signal processing, wireless and optical communications.",
        icon: Rocket
      }
    ],
    programs: [
      {
        name: "B.Tech Electronics and Communication Engineering",
        duration: "4 Years",
        description: "Undergraduate program covering analog/digital electronics, communication systems, VLSI design and embedded systems."
      }
    ],
    skills: [
      {
        title: "Embedded Systems",
        text: "Programme microcontrollers and design real-time embedded applications.",
        icon: Cpu
      },
      {
        title: "Signal Processing",
        text: "Apply DSP algorithms to audio, image and communication signals.",
        icon: Network
      }
    ],
    facilities: [
      {
        title: "Electronics Lab",
        text: "Benches equipped with oscilloscopes, function generators and PCB prototyping tools.",
        icon: Network
      },
      {
        title: "VLSI & Simulation Lab",
        text: "Cadence and Xilinx environments for IC and FPGA design.",
        icon: CodeXml
      }
    ],
    faculty: [
      {
        name: "Prof. S. Venkata Krishna",
        role: "Professor & Head",
        focus: "Signal Processing and Communications"
      }
    ],
    researchFocus: [
      {
        title: "Wireless Communications",
        text: "Research in 5G systems, antenna arrays and spectrum management.",
        icon: Network,
        lead: "Prof. S. Venkata Krishna",
        projects: "2 active projects"
      }
    ],
    careers: [
      {
        title: "Electronics Engineer",
        text: "Design circuits, PCBs and embedded systems for industry.",
        icon: Cpu
      },
      {
        title: "Communication Systems Engineer",
        text: "Build and maintain wireless and satellite communication infrastructure.",
        icon: Network
      }
    ],
    updates: [{ date: "May 07", title: "VLSI Design workshop registrations open", tag: "NEW" }]
  },
  "civil-engineering": {
    id: "civil-engineering",
    slug: "civil-engineering",
    name: "Department of Civil Engineering",
    shortName: "Civil Department",
    purpose: "Building sustainable infrastructure for a growing nation.",
    heroLine: "Shaping the built environment with engineering precision",
    heroImage: "/departments/civil.jpg",
    college: "ANU College of Engineering & Technology",
    imageLabel: "Civil Engineering",
    learning: [
      {
        title: "Structural Analysis",
        text: "Analyse loads, stresses and deformations in structures.",
        icon: Building2
      },
      {
        title: "Environmental Engineering",
        text: "Design systems for water supply, sanitation and waste management.",
        icon: FlaskConical
      }
    ],
    programs: [
      {
        name: "B.Tech Civil Engineering",
        duration: "4 Years",
        description: "Undergraduate program in structural engineering, geotechnics, transportation, water resources and construction management."
      }
    ],
    skills: [
      {
        title: "AutoCAD & Structural Design",
        text: "Use design software to plan and evaluate civil infrastructure.",
        icon: Building2
      },
      {
        title: "Site Management",
        text: "Coordinate construction activities, safety and quality on site.",
        icon: Lightbulb
      }
    ],
    facilities: [
      {
        title: "Structural Lab",
        text: "Compressive strength, UTM and non-destructive testing equipment.",
        icon: Building2
      },
      {
        title: "Geotechnical Lab",
        text: "Soil classification, consolidation and shear strength testing setups.",
        icon: FlaskConical
      }
    ],
    faculty: [
      { name: "Prof. B. Ranga Rao", role: "Professor & Head", focus: "Structural Engineering" }
    ],
    researchFocus: [
      {
        title: "Earthquake Resistant Design",
        text: "Research in seismic analysis and retrofitting of structures.",
        icon: Building2,
        lead: "Prof. B. Ranga Rao",
        projects: "2 active projects"
      }
    ],
    careers: [
      {
        title: "Structural Engineer",
        text: "Design and supervise construction of buildings and bridges.",
        icon: Building2
      },
      {
        title: "Site/Project Engineer",
        text: "Manage civil infrastructure projects from planning to delivery.",
        icon: Lightbulb
      }
    ],
    updates: [
      { date: "May 05", title: "AutoCAD and STAAD training programme announced", tag: "NEW" }
    ]
  },
  "electrical-and-electronics-engineering": {
    id: "electrical-and-electronics-engineering",
    slug: "electrical-and-electronics-engineering",
    name: "Department of Electrical and Electronics Engineering",
    shortName: "EEE Department",
    purpose: "Powering the future through electrical systems and smart grids.",
    heroLine: "Engineering the power systems of tomorrow",
    heroImage: "/departments/eee.jpg",
    college: "ANU College of Engineering & Technology",
    imageLabel: "EEE Department",
    learning: [
      {
        title: "Power Systems",
        text: "Study generation, transmission and distribution of electrical energy.",
        icon: Cpu
      },
      {
        title: "Control Systems",
        text: "Design and analyse feedback control loops for industrial automation.",
        icon: Network
      }
    ],
    programs: [
      {
        name: "B.Tech Electrical and Electronics Engineering",
        duration: "4 Years",
        description: "Undergraduate program covering power systems, electrical machines, control systems and power electronics."
      }
    ],
    skills: [
      {
        title: "Electrical Machine Design",
        text: "Analyse transformers, motors and generators for industrial use.",
        icon: Cpu
      },
      {
        title: "Power Electronics",
        text: "Design converters, inverters and drives for modern power systems.",
        icon: Lightbulb
      }
    ],
    facilities: [
      {
        title: "Electrical Machines Lab",
        text: "Experimental setups for DC and AC machines, transformers and drives.",
        icon: Cpu
      },
      {
        title: "Power Electronics Lab",
        text: "Converter, inverter and PLC simulation benches.",
        icon: Network
      }
    ],
    faculty: [
      {
        name: "Prof. R. Srinivasa Rao",
        role: "Professor & Head",
        focus: "Power Systems and Smart Grids"
      }
    ],
    researchFocus: [
      {
        title: "Renewable Energy Integration",
        text: "Research in solar, wind and smart grid technologies.",
        icon: Rocket,
        lead: "Prof. R. Srinivasa Rao",
        projects: "2 active projects"
      }
    ],
    careers: [
      {
        title: "Power Systems Engineer",
        text: "Design and operate electrical power networks and substations.",
        icon: Cpu
      },
      {
        title: "Automation Engineer",
        text: "Implement control systems and automation in manufacturing.",
        icon: Network
      }
    ],
    updates: [
      { date: "May 03", title: "Renewable energy lab inauguration scheduled", tag: "NOTICE" }
    ]
  },
  // ─── SCIENCES ────────────────────────────────────────────────────────────────
  physics: {
    id: "physics",
    slug: "physics",
    name: "Department of Physics",
    shortName: "Physics",
    purpose: "Exploring the fundamental laws of nature through experiment and theory.",
    heroLine: "Unravelling the universe one experiment at a time",
    heroImage: "/departments/physics.jpg",
    college: "ANU College of Sciences",
    imageLabel: "Physics Department",
    learning: [
      {
        title: "Quantum Mechanics",
        text: "Understand the behaviour of matter at atomic and subatomic scales.",
        icon: Microscope
      },
      {
        title: "Condensed Matter Physics",
        text: "Study solid-state systems, semiconductors and nanomaterials.",
        icon: FlaskConical
      }
    ],
    programs: [
      {
        name: "M.Sc Physics",
        duration: "2 Years",
        description: "Postgraduate program covering classical mechanics, quantum physics, electrodynamics, statistical mechanics and spectroscopy. Admission via AP PGCET."
      },
      {
        name: "Ph.D Physics",
        duration: "3–5 Years",
        description: "Research in condensed matter, nuclear physics, laser spectroscopy, nanotechnology and astrophysics."
      }
    ],
    skills: [
      {
        title: "Experimental Physics",
        text: "Operate spectroscopy, optics and vacuum instruments.",
        icon: Microscope
      },
      {
        title: "Computational Modelling",
        text: "Simulate physical systems using numerical methods.",
        icon: CodeXml
      }
    ],
    facilities: [
      {
        title: "Advanced Physics Lab",
        text: "Setups for optics, spectroscopy, X-ray diffraction and low-temperature experiments.",
        icon: FlaskConical
      },
      {
        title: "Computational Physics Lab",
        text: "Workstations with MATLAB, Python and simulation software.",
        icon: CodeXml
      }
    ],
    faculty: [
      {
        name: "Prof. G. Nageswara Rao",
        role: "Professor & Head",
        focus: "Condensed Matter Physics"
      }
    ],
    researchFocus: [
      {
        title: "Nanomaterials and Thin Films",
        text: "Synthesis and characterisation of nano-scale materials for device applications.",
        icon: Microscope,
        lead: "Prof. G. Nageswara Rao",
        projects: "2 active projects"
      }
    ],
    careers: [
      {
        title: "Research Scientist",
        text: "Conduct experiments and publish research in national and international journals.",
        icon: Microscope
      },
      {
        title: "Academic / Lecturer",
        text: "Teach physics at college and university level.",
        icon: GraduationCap
      }
    ],
    updates: [
      {
        date: "Apr 30",
        title: "National seminar on condensed matter physics announced",
        tag: "NEW"
      }
    ]
  },
  chemistry: {
    id: "chemistry",
    slug: "chemistry",
    name: "Department of Chemistry",
    shortName: "Chemistry",
    purpose: "Advancing chemical knowledge from molecules to materials.",
    heroLine: "From atoms to applications — chemistry at its core",
    heroImage: "/departments/chemistry.jpg",
    college: "ANU College of Sciences",
    imageLabel: "Chemistry Department",
    learning: [
      {
        title: "Organic & Inorganic Chemistry",
        text: "Study reaction mechanisms, synthesis and properties of compounds.",
        icon: FlaskConical
      },
      {
        title: "Analytical Techniques",
        text: "Master chromatography, spectroscopy and electrochemical methods.",
        icon: Microscope
      }
    ],
    programs: [
      {
        name: "M.Sc Chemistry",
        duration: "2 Years",
        description: "Postgraduate program in organic, inorganic, physical and analytical chemistry with laboratory practicals. Admission via AP PGCET."
      },
      {
        name: "Ph.D Chemistry",
        duration: "3–5 Years",
        description: "Research in synthetic chemistry, materials, catalysis, environmental chemistry and pharmaceutical applications."
      }
    ],
    skills: [
      {
        title: "Laboratory Techniques",
        text: "Conduct synthesis, titration, chromatography and spectroscopic analysis.",
        icon: FlaskConical
      },
      {
        title: "Chemical Safety",
        text: "Handle hazardous materials following standard laboratory protocols.",
        icon: ShieldCheck
      }
    ],
    facilities: [
      {
        title: "Organic Chemistry Lab",
        text: "Equipped for synthesis, reflux and distillation experiments.",
        icon: FlaskConical
      },
      {
        title: "Instrumentation Lab",
        text: "UV-Vis, IR, AAS and HPLC instruments for advanced analysis.",
        icon: Microscope
      }
    ],
    faculty: [
      {
        name: "Prof. T. Srinivas",
        role: "Professor & Head",
        focus: "Organic and Medicinal Chemistry"
      }
    ],
    researchFocus: [
      {
        title: "Green Chemistry & Catalysis",
        text: "Research in sustainable synthesis routes and heterogeneous catalysts.",
        icon: FlaskConical,
        lead: "Prof. T. Srinivas",
        projects: "3 active projects"
      }
    ],
    careers: [
      {
        title: "Chemist / Analyst",
        text: "Work in quality control, R&D and testing in pharmaceutical or chemical industries.",
        icon: FlaskConical
      },
      {
        title: "Research Scientist",
        text: "Pursue fundamental or applied research in chemistry.",
        icon: Microscope
      }
    ],
    updates: [
      {
        date: "Apr 25",
        title: "Research publications from Chemistry dept recognised nationally",
        tag: "NOTICE"
      }
    ]
  },
  mathematics: {
    id: "mathematics",
    slug: "mathematics",
    name: "Department of Mathematics",
    shortName: "Mathematics",
    purpose: "Building rigorous analytical and problem-solving foundations.",
    heroLine: "The language of the universe — studied with precision",
    heroImage: "/departments/mathematics.jpg",
    college: "ANU College of Sciences",
    imageLabel: "Mathematics Department",
    learning: [
      {
        title: "Pure Mathematics",
        text: "Study algebra, analysis, topology and number theory.",
        icon: ScrollText
      },
      {
        title: "Applied Mathematics",
        text: "Model real-world phenomena using differential equations and optimisation.",
        icon: Network
      }
    ],
    programs: [
      {
        name: "M.Sc Mathematics",
        duration: "2 Years",
        description: "Postgraduate program covering real analysis, algebra, topology, numerical methods and mathematical statistics. Admission via AP PGCET."
      },
      {
        name: "Ph.D Mathematics",
        duration: "3–5 Years",
        description: "Research in pure and applied mathematics including fluid dynamics, graph theory, cryptography and functional analysis."
      }
    ],
    skills: [
      {
        title: "Mathematical Modelling",
        text: "Formulate and solve complex real-world problems mathematically.",
        icon: Network
      },
      {
        title: "Computational Methods",
        text: "Implement numerical algorithms using Python and MATLAB.",
        icon: CodeXml
      }
    ],
    facilities: [
      {
        title: "Computer Lab",
        text: "Workstations with MATLAB, Python and statistical computing software.",
        icon: CodeXml
      },
      {
        title: "Seminar Room",
        text: "Dedicated space for colloquia, workshops and student presentations.",
        icon: Users
      }
    ],
    faculty: [
      {
        name: "Prof. K. Srinivasa Rao",
        role: "Professor & Head",
        focus: "Differential Equations and Fluid Dynamics"
      }
    ],
    researchFocus: [
      {
        title: "Graph Theory and Combinatorics",
        text: "Research in network structures, algorithms and combinatorial optimisation.",
        icon: Network,
        lead: "Prof. K. Srinivasa Rao",
        projects: "2 active projects"
      }
    ],
    careers: [
      {
        title: "Data Analyst / Actuary",
        text: "Apply mathematical models in finance, insurance and data science.",
        icon: Database
      },
      {
        title: "Academic / Lecturer",
        text: "Teach mathematics at college and university level.",
        icon: GraduationCap
      }
    ],
    updates: [{ date: "Apr 28", title: "Maths olympiad coaching sessions begin", tag: "NEW" }]
  },
  statistics: {
    id: "statistics",
    slug: "statistics",
    name: "Department of Statistics",
    shortName: "Statistics",
    purpose: "Turning data into knowledge through rigorous statistical science.",
    heroLine: "Making sense of data — one distribution at a time",
    heroImage: "/departments/statistics.jpg",
    college: "ANU College of Sciences",
    imageLabel: "Statistics Department",
    learning: [
      {
        title: "Probability Theory",
        text: "Understand distributions, random variables and stochastic processes.",
        icon: Network
      },
      {
        title: "Statistical Inference",
        text: "Apply estimation, hypothesis testing and regression to real data.",
        icon: Database
      }
    ],
    programs: [
      {
        name: "M.Sc Statistics",
        duration: "2 Years",
        description: "Postgraduate program covering probability, mathematical statistics, design of experiments, regression and time series analysis. Admission via AP PGCET."
      },
      {
        name: "Ph.D Statistics",
        duration: "3–5 Years",
        description: "Research in biostatistics, reliability theory, multivariate analysis, Bayesian inference and statistical computing."
      }
    ],
    skills: [
      {
        title: "Statistical Computing",
        text: "Analyse datasets using R, SPSS and Python libraries.",
        icon: CodeXml
      },
      {
        title: "Survey Design",
        text: "Plan and execute sampling surveys and interpret results.",
        icon: ScrollText
      }
    ],
    facilities: [
      {
        title: "Statistical Computing Lab",
        text: "Workstations with R, SPSS, SAS and Python for data analysis.",
        icon: CodeXml
      }
    ],
    faculty: [
      {
        name: "Prof. M. Bhaskara Rao",
        role: "Professor & Head",
        focus: "Multivariate Analysis and Reliability"
      }
    ],
    researchFocus: [
      {
        title: "Biostatistics and Clinical Trials",
        text: "Statistical methods for medical data analysis and clinical research.",
        icon: Microscope,
        lead: "Prof. M. Bhaskara Rao",
        projects: "2 active projects"
      }
    ],
    careers: [
      {
        title: "Statistician / Data Analyst",
        text: "Analyse data in pharma, government, finance and research institutions.",
        icon: Database
      },
      {
        title: "Research Officer",
        text: "Design surveys and interpret data for policy and academic research.",
        icon: ScrollText
      }
    ],
    updates: [
      {
        date: "Apr 20",
        title: "Workshop on R programming and data visualisation announced",
        tag: "NEW"
      }
    ]
  },
  "bio-technology": {
    id: "bio-technology",
    slug: "bio-technology",
    name: "Department of Bio Technology",
    shortName: "Biotechnology",
    purpose: "Harnessing biological systems for innovation in health, food and environment.",
    heroLine: "Life science meets engineering — biotechnology at ANU",
    heroImage: "/departments/biotechnology.jpg",
    college: "ANU College of Sciences",
    imageLabel: "Biotechnology Department",
    learning: [
      {
        title: "Molecular Biology",
        text: "Study DNA, RNA, gene expression and molecular mechanisms of life.",
        icon: Microscope
      },
      {
        title: "Genetic Engineering",
        text: "Learn recombinant DNA technology, cloning and gene editing techniques.",
        icon: FlaskConical
      }
    ],
    programs: [
      {
        name: "M.Sc Biotechnology",
        duration: "2 Years",
        description: "Postgraduate program in molecular biology, cell biology, microbiology, immunology and genetic engineering. Admission via AP PGCET."
      },
      {
        name: "M.Tech Biotechnology",
        duration: "2 Years",
        description: "Engineering-oriented postgraduate program covering bioprocess engineering, bioinformatics and pharmaceutical biotechnology."
      },
      {
        name: "Ph.D Biotechnology",
        duration: "3–5 Years",
        description: "Research in genomics, proteomics, nanobiotechnology, agricultural biotechnology and bioremediation."
      }
    ],
    skills: [
      {
        title: "Laboratory Techniques",
        text: "PCR, gel electrophoresis, cell culture and ELISA protocols.",
        icon: FlaskConical
      },
      {
        title: "Bioinformatics",
        text: "Analyse biological sequences and structural data using computational tools.",
        icon: CodeXml
      }
    ],
    facilities: [
      {
        title: "Molecular Biology Lab",
        text: "PCR, gel documentation, laminar flow hoods and centrifuges.",
        icon: FlaskConical
      },
      {
        title: "Tissue Culture Lab",
        text: "Plant and animal cell culture facilities with CO₂ incubators.",
        icon: Microscope
      }
    ],
    faculty: [
      {
        name: "Prof. P. Siva Prasad",
        role: "Professor & Head",
        focus: "Molecular Biology and Genomics"
      }
    ],
    researchFocus: [
      {
        title: "Nanobiotechnology",
        text: "Development of nano-carriers for drug delivery and diagnostics.",
        icon: Microscope,
        lead: "Prof. P. Siva Prasad",
        projects: "3 active projects"
      }
    ],
    careers: [
      {
        title: "Research Scientist",
        text: "Work in biotech and pharma R&D on drug discovery and diagnostics.",
        icon: Microscope
      },
      {
        title: "Bioprocess Engineer",
        text: "Design and scale fermentation and downstream bioprocessing units.",
        icon: FlaskConical
      }
    ],
    updates: [
      { date: "May 01", title: "State-level biotechnology symposium hosted by ANU", tag: "NEW" }
    ]
  },
  "bio-chemistry": {
    id: "bio-chemistry",
    slug: "bio-chemistry",
    name: "Department of Bio Chemistry",
    shortName: "Biochemistry",
    purpose: "Exploring life at the molecular and biochemical level.",
    heroLine: "Chemistry of life — decoded in our labs",
    heroImage: "/departments/biochemistry.jpg",
    college: "ANU College of Sciences",
    imageLabel: "Biochemistry Department",
    learning: [
      {
        title: "Enzymology",
        text: "Study enzyme kinetics, mechanisms and industrial applications.",
        icon: FlaskConical
      },
      {
        title: "Metabolism",
        text: "Understand carbohydrate, lipid, protein and nucleic acid metabolism.",
        icon: Microscope
      }
    ],
    programs: [
      {
        name: "M.Sc Biochemistry",
        duration: "2 Years",
        description: "Postgraduate program in biochemistry covering metabolism, enzymology, molecular biology, clinical biochemistry and biotechnology. Admission via AP PGCET."
      },
      {
        name: "Ph.D Biochemistry",
        duration: "3–5 Years",
        description: "Research in structural biochemistry, clinical and medical biochemistry, bioinformatics and protein engineering."
      }
    ],
    skills: [
      {
        title: "Spectroscopic Analysis",
        text: "Use UV-Vis, fluorescence and NMR spectroscopy for biochemical assays.",
        icon: Microscope
      },
      {
        title: "Clinical Biochemistry",
        text: "Perform diagnostic tests for metabolic and disease-related parameters.",
        icon: ShieldCheck
      }
    ],
    facilities: [
      {
        title: "Biochemistry Research Lab",
        text: "UV-Vis spectrophotometer, HPLC and centrifuge equipment.",
        icon: FlaskConical
      }
    ],
    faculty: [
      {
        name: "Prof. V. Umamaheswara Rao",
        role: "Professor & Head",
        focus: "Clinical Biochemistry and Enzymology"
      }
    ],
    researchFocus: [
      {
        title: "Metabolic Diseases",
        text: "Biochemical basis of diabetes, cardiovascular and neurological disorders.",
        icon: Microscope,
        lead: "Prof. V. Umamaheswara Rao",
        projects: "2 active projects"
      }
    ],
    careers: [
      {
        title: "Clinical Biochemist",
        text: "Work in hospitals and diagnostic labs on metabolic and disease testing.",
        icon: ShieldCheck
      },
      {
        title: "Research Associate",
        text: "Support biochemistry research in academia and biotech companies.",
        icon: Microscope
      }
    ],
    updates: [
      {
        date: "Apr 18",
        title: "Workshop on clinical diagnostic techniques conducted",
        tag: "NOTICE"
      }
    ]
  },
  "botany-and-microbiology": {
    id: "botany-and-microbiology",
    slug: "botany-and-microbiology",
    name: "Department of Botany and Microbiology",
    shortName: "Botany & Microbiology",
    purpose: "Studying plant life and microbial systems for science and sustainability.",
    heroLine: "From cells to ecosystems — understanding life in all its forms",
    heroImage: "/departments/botany.jpg",
    college: "ANU College of Sciences",
    imageLabel: "Botany & Microbiology",
    learning: [
      {
        title: "Plant Biology",
        text: "Study plant anatomy, physiology, taxonomy and ecology.",
        icon: FlaskConical
      },
      {
        title: "Microbiology",
        text: "Understand bacteria, fungi, viruses and their applications.",
        icon: Microscope
      }
    ],
    programs: [
      {
        name: "M.Sc Botany",
        duration: "2 Years",
        description: "Postgraduate program covering plant systematics, physiology, genetics, ecology and economic botany. Admission via AP PGCET."
      },
      {
        name: "M.Sc Microbiology",
        duration: "2 Years",
        description: "Postgraduate program in bacteriology, virology, mycology, immunology and industrial microbiology. Admission via AP PGCET."
      },
      {
        name: "Ph.D Botany",
        duration: "3–5 Years",
        description: "Research in plant biotechnology, ethnobotany, phytochemistry, algology and environmental botany."
      }
    ],
    skills: [
      {
        title: "Microscopy Techniques",
        text: "Use light, fluorescence and electron microscopy to study cells.",
        icon: Microscope
      },
      {
        title: "Microbial Culture",
        text: "Isolate, culture and characterise bacteria and fungi.",
        icon: FlaskConical
      }
    ],
    facilities: [
      {
        title: "Plant Sciences Lab",
        text: "Herbarium, plant tissue culture and growth chambers.",
        icon: FlaskConical
      },
      {
        title: "Microbiology Lab",
        text: "Autoclaves, biosafety cabinets and anaerobic culture equipment.",
        icon: Microscope
      }
    ],
    faculty: [
      {
        name: "Prof. A. Jayaraj",
        role: "Professor & Head",
        focus: "Plant Biotechnology and Ecology"
      }
    ],
    researchFocus: [
      {
        title: "Ethnobotany and Phytochemistry",
        text: "Documenting and studying medicinal plant uses and active compounds.",
        icon: FlaskConical,
        lead: "Prof. A. Jayaraj",
        projects: "2 active projects"
      }
    ],
    careers: [
      {
        title: "Botanist / Ecologist",
        text: "Work in biodiversity research, conservation and environmental agencies.",
        icon: FlaskConical
      },
      {
        title: "Microbiologist",
        text: "Pursue careers in food, pharma and diagnostic laboratories.",
        icon: Microscope
      }
    ],
    updates: [
      {
        date: "Apr 15",
        title: "Nature trail and biodiversity camp announced for students",
        tag: "NEW"
      }
    ]
  },
  "zoology-and-aquaculture": {
    id: "zoology-and-aquaculture",
    slug: "zoology-and-aquaculture",
    name: "Department of Zoology and Aquaculture",
    shortName: "Zoology & Aquaculture",
    purpose: "Advancing knowledge in animal sciences and sustainable aquatic production.",
    heroLine: "Understanding animal life from oceans to ecosystems",
    heroImage: "/departments/zoology.jpg",
    college: "ANU College of Sciences",
    imageLabel: "Zoology & Aquaculture",
    learning: [
      {
        title: "Animal Physiology",
        text: "Study organ systems, homeostasis and comparative physiology.",
        icon: Microscope
      },
      {
        title: "Aquaculture Technology",
        text: "Learn fish farming, hatchery management and aquatic ecosystem management.",
        icon: FlaskConical
      }
    ],
    programs: [
      {
        name: "M.Sc Zoology",
        duration: "2 Years",
        description: "Postgraduate program covering invertebrate and vertebrate zoology, genetics, cell biology, ecology and wildlife biology. Admission via AP PGCET."
      },
      {
        name: "M.Sc Aquaculture",
        duration: "2 Years",
        description: "Specialised program in fish production, hatchery management, feed technology, aquatic health and marine biology. Admission via AP PGCET."
      },
      {
        name: "Ph.D Zoology",
        duration: "3–5 Years",
        description: "Research in taxonomy, wildlife conservation, parasitology, reproductive biology and aquatic ecology."
      }
    ],
    skills: [
      {
        title: "Wildlife Identification",
        text: "Classify and study animal species in field and laboratory settings.",
        icon: Microscope
      },
      {
        title: "Hatchery Management",
        text: "Manage fish and prawn breeding and rearing systems.",
        icon: FlaskConical
      }
    ],
    facilities: [
      {
        title: "Zoology Museum",
        text: "Preserved specimens, skeletal mounts and reference collections.",
        icon: Microscope
      },
      {
        title: "Aquaculture Unit",
        text: "Functional hatchery tanks and water quality analysis equipment.",
        icon: FlaskConical
      }
    ],
    faculty: [
      {
        name: "Prof. C. Ramachandra Reddy",
        role: "Professor & Head",
        focus: "Aquaculture and Fish Biology"
      }
    ],
    researchFocus: [
      {
        title: "Aquatic Ecology",
        text: "Research on freshwater biodiversity, pollution and sustainable aquaculture.",
        icon: FlaskConical,
        lead: "Prof. C. Ramachandra Reddy",
        projects: "2 active projects"
      }
    ],
    careers: [
      {
        title: "Aquaculture Specialist",
        text: "Manage fish farms and hatcheries in the aquaculture industry.",
        icon: FlaskConical
      },
      {
        title: "Wildlife Conservationist",
        text: "Work with government bodies and NGOs on conservation projects.",
        icon: Microscope
      }
    ],
    updates: [
      {
        date: "Apr 22",
        title: "Field study trip to Krishna river estuary scheduled",
        tag: "NOTICE"
      }
    ]
  },
  geology: {
    id: "geology",
    slug: "geology",
    name: "Department of Geology",
    shortName: "Geology",
    purpose: "Understanding Earth's processes, history and natural resources.",
    heroLine: "Reading the history of the Earth through rock and time",
    heroImage: "/departments/geology.jpg",
    college: "ANU College of Sciences",
    imageLabel: "Geology Department",
    learning: [
      {
        title: "Mineralogy & Petrology",
        text: "Identify minerals and classify rocks from igneous, sedimentary and metamorphic origins.",
        icon: Microscope
      },
      {
        title: "Structural Geology",
        text: "Analyse folds, faults and tectonic features to understand Earth's crust.",
        icon: Network
      }
    ],
    programs: [
      {
        name: "M.Sc Geology",
        duration: "2 Years",
        description: "Postgraduate program covering mineralogy, petrology, stratigraphy, structural geology, hydrogeology and economic geology. Admission via AP PGCET."
      },
      {
        name: "Ph.D Geology",
        duration: "3–5 Years",
        description: "Research in igneous petrology, groundwater geology, remote sensing, geochemistry and ore deposit studies."
      }
    ],
    skills: [
      {
        title: "Field Geology",
        text: "Map geological formations, collect samples and interpret stratigraphy.",
        icon: Network
      },
      {
        title: "GIS & Remote Sensing",
        text: "Use spatial data tools for geological mapping and resource exploration.",
        icon: CodeXml
      }
    ],
    facilities: [
      {
        title: "Geology Museum",
        text: "Rock, mineral and fossil collections for identification and study.",
        icon: Microscope
      },
      {
        title: "GIS & Remote Sensing Lab",
        text: "Workstations with ArcGIS and ERDAS Imagine for spatial analysis.",
        icon: CodeXml
      }
    ],
    faculty: [
      {
        name: "Prof. D. Siva Prasad",
        role: "Professor & Head",
        focus: "Structural Geology and Geochemistry"
      }
    ],
    researchFocus: [
      {
        title: "Groundwater Studies",
        text: "Assessment and management of groundwater resources in Andhra Pradesh.",
        icon: FlaskConical,
        lead: "Prof. D. Siva Prasad",
        projects: "2 active projects"
      }
    ],
    careers: [
      {
        title: "Geologist",
        text: "Work in mining, oil & gas, groundwater exploration and environmental surveys.",
        icon: Microscope
      },
      {
        title: "Hydrogeologist",
        text: "Assess and manage groundwater resources for government and industry.",
        icon: Network
      }
    ],
    updates: [
      { date: "Apr 10", title: "Annual geology field camp to Eastern Ghats announced", tag: "NEW" }
    ]
  },
  "food-and-nutritional-science": {
    id: "food-and-nutritional-science",
    slug: "food-and-nutritional-science",
    name: "Department of Food and Nutritional Science",
    shortName: "Food Science",
    purpose: "Advancing food safety, nutrition and public health through science.",
    heroLine: "Science that nourishes — food and nutrition for a healthier world",
    heroImage: "/departments/food-science.jpg",
    college: "ANU College of Sciences",
    imageLabel: "Food & Nutritional Science",
    learning: [
      {
        title: "Food Chemistry",
        text: "Study the composition, structure and reactions of food components.",
        icon: FlaskConical
      },
      {
        title: "Human Nutrition",
        text: "Understand macronutrients, micronutrients and dietary requirements.",
        icon: ShieldCheck
      }
    ],
    programs: [
      {
        name: "M.Sc Food and Nutritional Science",
        duration: "2 Years",
        description: "Postgraduate program covering food chemistry, food microbiology, nutrition, food processing technology and food safety. Admission via AP PGCET."
      },
      {
        name: "Ph.D Food Science",
        duration: "3–5 Years",
        description: "Research in food fortification, nutraceuticals, food safety regulations, packaging and functional foods."
      }
    ],
    skills: [
      {
        title: "Food Analysis",
        text: "Determine proximate composition and nutritional quality of food products.",
        icon: FlaskConical
      },
      {
        title: "Food Safety",
        text: "Apply HACCP and food safety standards in processing and manufacturing.",
        icon: ShieldCheck
      }
    ],
    facilities: [
      {
        title: "Food Processing Lab",
        text: "Equipment for extrusion, pasteurisation, drying and fermentation.",
        icon: FlaskConical
      },
      {
        title: "Nutrition Analysis Lab",
        text: "Instruments for proximate analysis and micronutrient profiling.",
        icon: Microscope
      }
    ],
    faculty: [
      {
        name: "Prof. S. Anuradha",
        role: "Professor & Head",
        focus: "Human Nutrition and Food Safety"
      }
    ],
    researchFocus: [
      {
        title: "Functional Foods and Nutraceuticals",
        text: "Development of health-promoting foods enriched with bioactive compounds.",
        icon: FlaskConical,
        lead: "Prof. S. Anuradha",
        projects: "2 active projects"
      }
    ],
    careers: [
      {
        title: "Food Technologist",
        text: "Work in food processing, quality control and product development.",
        icon: FlaskConical
      },
      {
        title: "Nutritionist / Dietitian",
        text: "Provide nutritional guidance in hospitals, schools and community health.",
        icon: ShieldCheck
      }
    ],
    updates: [
      {
        date: "Apr 16",
        title: "Guest lecture on functional foods and health benefits scheduled",
        tag: "NEW"
      }
    ]
  },
  "electronics-and-instrumentation": {
    id: "electronics-and-instrumentation",
    slug: "electronics-and-instrumentation",
    name: "Department of Electronics and Instrumentation",
    shortName: "Electronics & Instrumentation",
    purpose: "Designing precision measurement and control systems for science and industry.",
    heroLine: "Measuring the world with precision and intelligence",
    heroImage: "/departments/instrumentation.jpg",
    college: "ANU College of Sciences",
    imageLabel: "Electronics & Instrumentation",
    learning: [
      {
        title: "Sensors and Transducers",
        text: "Understand measurement devices for temperature, pressure and flow.",
        icon: Network
      },
      {
        title: "Control Instrumentation",
        text: "Design feedback systems and automated process control circuits.",
        icon: Cpu
      }
    ],
    programs: [
      {
        name: "M.Sc Electronics and Instrumentation Technology",
        duration: "2 Years",
        description: "Postgraduate program covering sensors, transducers, signal conditioning, process control, microcontrollers and industrial instrumentation. Admission via AP PGCET."
      },
      {
        name: "Ph.D Electronics and Instrumentation",
        duration: "3–5 Years",
        description: "Research in smart sensors, IoT-based measurement systems, biomedical instrumentation and industrial automation."
      }
    ],
    skills: [
      {
        title: "Process Control",
        text: "Design and operate PLC-based and PID control systems.",
        icon: Cpu
      },
      {
        title: "Embedded Instrumentation",
        text: "Build microcontroller-based measurement and monitoring systems.",
        icon: Network
      }
    ],
    facilities: [
      {
        title: "Instrumentation Lab",
        text: "Equipped with oscilloscopes, signal generators and process simulators.",
        icon: Network
      }
    ],
    faculty: [
      {
        name: "Prof. N. Venkata Ramana",
        role: "Professor & Head",
        focus: "Biomedical Instrumentation and Sensors"
      }
    ],
    researchFocus: [
      {
        title: "IoT-Based Monitoring Systems",
        text: "Smart sensor networks for environmental and industrial monitoring.",
        icon: Network,
        lead: "Prof. N. Venkata Ramana",
        projects: "2 active projects"
      }
    ],
    careers: [
      {
        title: "Instrumentation Engineer",
        text: "Calibrate and maintain measurement equipment in process industries.",
        icon: Cpu
      },
      {
        title: "Automation Specialist",
        text: "Design control systems for chemical, oil & gas and manufacturing plants.",
        icon: Network
      }
    ],
    updates: [
      { date: "Apr 08", title: "IoT lab inauguration and hands-on workshop planned", tag: "NEW" }
    ]
  },
  // ─── ARTS, COMMERCE & LAW ────────────────────────────────────────────────────
  english: {
    id: "english",
    slug: "english",
    name: "Department of English",
    shortName: "English",
    purpose: "Cultivating literary analysis, critical thinking and communicative excellence.",
    heroLine: "Words that think — literature, language and communication",
    heroImage: "/departments/english.jpg",
    college: "ANU College of Arts, Commerce & Law",
    imageLabel: "English Department",
    learning: [
      {
        title: "Literary Studies",
        text: "Analyse British, American and postcolonial literature critically.",
        icon: ScrollText
      },
      {
        title: "Language and Linguistics",
        text: "Explore phonology, syntax, semantics and discourse analysis.",
        icon: Users
      }
    ],
    programs: [
      {
        name: "M.A English",
        duration: "2 Years",
        description: "Postgraduate program in British and American literature, Indian writing in English, literary theory, linguistics and communication skills. Admission via AP PGCET."
      },
      {
        name: "Ph.D English",
        duration: "3–5 Years",
        description: "Research in literary theory, postcolonial studies, comparative literature, diaspora writing and applied linguistics."
      }
    ],
    skills: [
      {
        title: "Critical Writing",
        text: "Write clear, analytical and well-structured academic essays.",
        icon: ScrollText
      },
      {
        title: "Communication Skills",
        text: "Develop professional oral and written communication abilities.",
        icon: Users
      }
    ],
    facilities: [
      {
        title: "Language Lab",
        text: "Audio-visual equipment and software for language learning and practice.",
        icon: Network
      },
      {
        title: "Seminar Hall",
        text: "Dedicated space for literary discussions and guest lectures.",
        icon: Users
      }
    ],
    faculty: [
      {
        name: "Prof. P. Murali Krishna",
        role: "Professor & Head",
        focus: "Postcolonial Literature and Literary Theory"
      }
    ],
    researchFocus: [
      {
        title: "Postcolonial and Diaspora Studies",
        text: "Research on identity, migration and cultural representation in literature.",
        icon: ScrollText,
        lead: "Prof. P. Murali Krishna",
        projects: "2 active projects"
      }
    ],
    careers: [
      {
        title: "Lecturer / Academic",
        text: "Teach English at colleges and universities.",
        icon: GraduationCap
      },
      {
        title: "Content Writer / Editor",
        text: "Work in publishing, media and corporate communications.",
        icon: ScrollText
      }
    ],
    updates: [
      {
        date: "May 02",
        title: "Literary fest and creative writing competition announced",
        tag: "NEW"
      }
    ]
  },
  hindi: {
    id: "hindi",
    slug: "hindi",
    name: "Department of Hindi",
    shortName: "Hindi",
    purpose: "Preserving and promoting Hindi language, literature and culture.",
    heroLine: "The voice of a nation — Hindi language and literature",
    heroImage: "/departments/hindi.jpg",
    college: "ANU College of Arts, Commerce & Law",
    imageLabel: "Hindi Department",
    learning: [
      {
        title: "Hindi Literature",
        text: "Study classical, modern and contemporary Hindi literary works.",
        icon: ScrollText
      },
      {
        title: "Translation Studies",
        text: "Develop skills in Hindi-English and Hindi-Telugu translation.",
        icon: Users
      }
    ],
    programs: [
      {
        name: "M.A Hindi",
        duration: "2 Years",
        description: "Postgraduate program in Hindi literature, language history, linguistic analysis, comparative literature and translation studies. Admission via AP PGCET."
      },
      {
        name: "Ph.D Hindi",
        duration: "3–5 Years",
        description: "Research in modern Hindi poetry, prose, dialectal studies, regional literatures and Hindi as a second language."
      }
    ],
    skills: [
      {
        title: "Academic Writing",
        text: "Compose essays, dissertations and research articles in Hindi.",
        icon: ScrollText
      },
      {
        title: "Translation",
        text: "Translate literary and technical texts between Hindi and other languages.",
        icon: Users
      }
    ],
    facilities: [
      {
        title: "Hindi Sahitya Library",
        text: "Collection of Hindi literary works, periodicals and reference material.",
        icon: ScrollText
      }
    ],
    faculty: [
      {
        name: "Prof. R. Madhavi Devi",
        role: "Professor & Head",
        focus: "Modern Hindi Poetry and Comparative Literature"
      }
    ],
    researchFocus: [
      {
        title: "Hindi Dialectal Studies",
        text: "Documentation and analysis of regional Hindi dialects in Andhra Pradesh.",
        icon: ScrollText,
        lead: "Prof. R. Madhavi Devi",
        projects: "1 active project"
      }
    ],
    careers: [
      {
        title: "Hindi Lecturer / Teacher",
        text: "Teach Hindi at schools, colleges and coaching institutes.",
        icon: GraduationCap
      },
      {
        title: "Translator / Interpreter",
        text: "Work with government departments, media and publishing houses.",
        icon: ScrollText
      }
    ],
    updates: [
      {
        date: "Apr 14",
        title: "Hindi week celebrations and essay competition announced",
        tag: "NEW"
      }
    ]
  },
  "history-and-archaeology": {
    id: "history-and-archaeology",
    slug: "history-and-archaeology",
    name: "Department of History and Archaeology",
    shortName: "History & Archaeology",
    purpose: "Recovering and interpreting the human past through texts, artefacts and sites.",
    heroLine: "Digging deeper into the story of civilisation",
    heroImage: "/departments/history.jpg",
    college: "ANU College of Arts, Commerce & Law",
    imageLabel: "History & Archaeology",
    learning: [
      {
        title: "Ancient Indian History",
        text: "Study the political, cultural and social history of ancient India.",
        icon: ScrollText
      },
      {
        title: "Archaeological Methods",
        text: "Learn excavation techniques, artefact analysis and site interpretation.",
        icon: Microscope
      }
    ],
    programs: [
      {
        name: "M.A Ancient History and Archaeology",
        duration: "2 Years",
        description: "Postgraduate program covering prehistoric India, Harappan civilisation, Mauryan and Gupta empires, Buddhist art, epigraphy and archaeological methods. Admission via AP PGCET."
      },
      {
        name: "Ph.D Ancient History and Archaeology",
        duration: "3–5 Years",
        description: "Research in epigraphy, numismatics, temple architecture, trade routes, medieval history and cultural heritage conservation."
      }
    ],
    skills: [
      {
        title: "Archival Research",
        text: "Work with historical manuscripts, inscriptions and official records.",
        icon: ScrollText
      },
      {
        title: "Heritage Documentation",
        text: "Document and conserve monuments and cultural heritage sites.",
        icon: Building2
      }
    ],
    facilities: [
      {
        title: "Archaeology Museum",
        text: "Collection of coins, inscriptions, sculptures and pottery from excavations.",
        icon: Microscope
      }
    ],
    faculty: [
      {
        name: "Prof. G. Srinivasa Rao",
        role: "Professor & Head",
        focus: "Buddhist Archaeology and Epigraphy"
      }
    ],
    researchFocus: [
      {
        title: "Buddhist Heritage of Andhra Pradesh",
        text: "Documentation of Buddhist sites, stupa remains and art in the Krishna-Guntur region.",
        icon: ScrollText,
        lead: "Prof. G. Srinivasa Rao",
        projects: "2 active projects"
      }
    ],
    careers: [
      {
        title: "Archaeologist / Curator",
        text: "Work with ASI, museums and state archaeology departments.",
        icon: Microscope
      },
      {
        title: "Heritage Conservationist",
        text: "Manage and protect historical monuments and cultural sites.",
        icon: Building2
      }
    ],
    updates: [
      { date: "Apr 06", title: "Excavation training camp at Nagarjunakonda announced", tag: "NEW" }
    ]
  },
  "mahayana-buddhist-studies": {
    id: "mahayana-buddhist-studies",
    slug: "mahayana-buddhist-studies",
    name: "Centre for Mahayana Buddhist Studies",
    shortName: "Buddhist Studies",
    purpose: "Offering unique academic study of Mahayana Buddhist philosophy, history and culture.",
    heroLine: "Wisdom traditions of the East — studied with scholarly rigour",
    heroImage: "/departments/buddhist-studies.jpg",
    college: "ANU College of Arts, Commerce & Law",
    imageLabel: "Buddhist Studies",
    learning: [
      {
        title: "Buddhist Philosophy",
        text: "Study Madhyamaka, Yogacara and Prajnaparamita philosophical traditions.",
        icon: ScrollText
      },
      {
        title: "Buddhist History and Culture",
        text: "Trace the spread of Buddhism across Asia and its cultural impact.",
        icon: GraduationCap
      }
    ],
    programs: [
      {
        name: "M.A Mahayana Buddhist Studies",
        duration: "2 Years",
        description: "Postgraduate program in Mahayana and Theravada Buddhist philosophy, Buddhist logic, meditation traditions, Buddhist economics and science. Open to students from South and South-East Asian countries. Admission via AP PGCET."
      },
      {
        name: "Ph.D Mahayana Buddhist Studies",
        duration: "3–5 Years",
        description: "Research in Buddhist meditation, Buddhist applied concepts, comparative religion, Buddhist art and Pali/Sanskrit texts."
      }
    ],
    skills: [
      {
        title: "Pali and Buddhist Texts",
        text: "Read and interpret canonical Buddhist texts in Pali and Sanskrit.",
        icon: ScrollText
      },
      {
        title: "Comparative Religion",
        text: "Analyse Buddhism in relation to Hinduism, Jainism and world religions.",
        icon: Users
      }
    ],
    facilities: [
      {
        title: "Buddhist Studies Library",
        text: "Rare collection of Buddhist texts, translations and manuscripts.",
        icon: ScrollText
      }
    ],
    faculty: [
      {
        name: "Prof. K. T. S. Sarao",
        role: "Professor & Head",
        focus: "Buddhist Logic and Meditation Studies"
      }
    ],
    researchFocus: [
      {
        title: "Buddhist Meditation and Psychology",
        text: "Interdisciplinary research on mindfulness, meditation practices and mental well-being.",
        icon: Brain,
        lead: "Prof. K. T. S. Sarao",
        projects: "2 active projects"
      }
    ],
    careers: [
      {
        title: "Buddhist Studies Researcher",
        text: "Academic career in Buddhist studies departments and research institutes.",
        icon: GraduationCap
      },
      {
        title: "Cultural Liaison Officer",
        text: "Work in diplomatic, cultural exchange and international organisations.",
        icon: Users
      }
    ],
    updates: [
      {
        date: "Apr 04",
        title: "International scholars from Myanmar and Thailand visiting",
        tag: "NOTICE"
      }
    ]
  },
  "journalism-and-mass-communication": {
    id: "journalism-and-mass-communication",
    slug: "journalism-and-mass-communication",
    name: "Department of Journalism and Mass Communication",
    shortName: "Journalism & Mass Comm.",
    purpose: "Training ethical, skilled media professionals for the digital age.",
    heroLine: "Report the truth. Shape the narrative. Lead the conversation.",
    heroImage: "/departments/journalism.jpg",
    college: "ANU College of Arts, Commerce & Law",
    imageLabel: "Journalism & Mass Communication",
    learning: [
      {
        title: "Reporting and Editing",
        text: "Develop news writing, editing and investigative journalism skills.",
        icon: ScrollText
      },
      {
        title: "Digital Media",
        text: "Understand social media strategy, digital content production and media management.",
        icon: Network
      }
    ],
    programs: [
      {
        name: "M.A Journalism and Mass Communication",
        duration: "2 Years",
        description: "Postgraduate program covering print, broadcast and digital journalism, media laws and ethics, public relations, advertising and media research. Admission via AP PGCET."
      },
      {
        name: "Ph.D Journalism and Mass Communication",
        duration: "3–5 Years",
        description: "Research in media studies, digital journalism, political communication, development communication and media effects."
      }
    ],
    skills: [
      {
        title: "News Writing & Editing",
        text: "Produce accurate, concise and ethical news content across media platforms.",
        icon: ScrollText
      },
      {
        title: "Video & Audio Production",
        text: "Script, shoot and edit video packages for broadcast and digital media.",
        icon: Rocket
      }
    ],
    facilities: [
      {
        title: "Media Production Studio",
        text: "Audio recording, video editing suites and a newsroom simulation lab.",
        icon: Network
      }
    ],
    faculty: [
      {
        name: "Prof. K. Nagendra Babu",
        role: "Professor & Head",
        focus: "Media Studies and Digital Journalism"
      }
    ],
    researchFocus: [
      {
        title: "Digital Media and Society",
        text: "Research on social media influence, misinformation and political communication.",
        icon: Network,
        lead: "Prof. K. Nagendra Babu",
        projects: "2 active projects"
      }
    ],
    careers: [
      {
        title: "Journalist / Reporter",
        text: "Work with newspapers, TV channels and online news portals.",
        icon: ScrollText
      },
      {
        title: "PR & Communications Specialist",
        text: "Manage communications for corporate, government and NGO organisations.",
        icon: Users
      }
    ],
    updates: [
      {
        date: "May 04",
        title: "Campus journalism workshop with industry professionals announced",
        tag: "NEW"
      }
    ]
  },
  "commerce-and-business-administration": {
    id: "commerce-and-business-administration",
    slug: "commerce-and-business-administration",
    name: "Department of Commerce and Business Administration",
    shortName: "Commerce & MBA",
    purpose: "Developing business leaders with strong analytical and managerial foundations.",
    heroLine: "Business thinking built for the real world",
    heroImage: "/departments/commerce.jpg",
    college: "ANU College of Arts, Commerce & Law",
    imageLabel: "Commerce & Business Admin",
    learning: [
      {
        title: "Financial Management",
        text: "Understand capital markets, financial analysis and investment decisions.",
        icon: BriefcaseBusiness
      },
      {
        title: "Marketing & Strategy",
        text: "Study consumer behaviour, brand strategy and competitive analysis.",
        icon: Rocket
      }
    ],
    programs: [
      {
        name: "M.Com",
        duration: "2 Years",
        description: "Postgraduate program in advanced accounting, taxation, financial management, business law and research methodology. Admission via AP PGCET."
      },
      {
        name: "MBA – Hospital Administration",
        duration: "2 Years",
        description: "Management program for healthcare sector focusing on hospital operations, health policy, medical records and healthcare finance. Admission via APICET."
      },
      {
        name: "MBA – Tourism and Travel Management",
        duration: "2 Years",
        description: "Specialised MBA in tourism planning, hospitality management, travel agency operations and event management. Admission via APICET."
      },
      {
        name: "MBA – International Business",
        duration: "2 Years",
        description: "MBA program covering global trade, foreign exchange, international marketing and cross-cultural management. Admission via APICET."
      },
      {
        name: "Ph.D Commerce",
        duration: "3–5 Years",
        description: "Research in financial markets, taxation law, corporate governance, marketing management and rural development."
      }
    ],
    skills: [
      {
        title: "Accounting & Taxation",
        text: "Prepare financial statements and navigate GST, income tax frameworks.",
        icon: BriefcaseBusiness
      },
      {
        title: "Business Analytics",
        text: "Use data-driven tools to support management decisions.",
        icon: Database
      }
    ],
    facilities: [
      {
        title: "Business Communication Lab",
        text: "Audio-visual equipment and presentation facilities for managerial communication.",
        icon: Users
      },
      {
        title: "Computer Lab",
        text: "Tally, MS Excel, ERP and accounting simulation software.",
        icon: CodeXml
      }
    ],
    faculty: [
      {
        name: "Prof. B. Naga Raju",
        role: "Professor & Head",
        focus: "Financial Management and Capital Markets"
      }
    ],
    researchFocus: [
      {
        title: "Corporate Governance and Finance",
        text: "Research in capital structure, dividends policy and corporate sustainability.",
        icon: BriefcaseBusiness,
        lead: "Prof. B. Naga Raju",
        projects: "3 active projects"
      }
    ],
    careers: [
      {
        title: "Manager / Business Analyst",
        text: "Lead teams and drive business decisions in corporate organisations.",
        icon: BriefcaseBusiness
      },
      {
        title: "Chartered Accountant / Tax Consultant",
        text: "Manage accounts, audits and tax compliance for businesses.",
        icon: ScrollText
      }
    ],
    updates: [
      { date: "May 10", title: "Management fest and case study competition announced", tag: "NEW" }
    ]
  },
  "dr-b-r-ambedkar-school-of-legal-education-and-research": {
    id: "dr-b-r-ambedkar-school-of-legal-education-and-research",
    slug: "dr-b-r-ambedkar-school-of-legal-education-and-research",
    name: "Dr. B.R. Ambedkar School of Legal Education and Research",
    shortName: "Law School",
    purpose: "Producing competent legal professionals committed to justice and constitutional values.",
    heroLine: "Justice is not a privilege — it is a right worth learning",
    heroImage: "/departments/law.jpg",
    college: "ANU College of Arts, Commerce & Law",
    imageLabel: "Law School",
    learning: [
      {
        title: "Constitutional Law",
        text: "Understand the Constitution of India, fundamental rights and judicial review.",
        icon: ScrollText
      },
      {
        title: "Criminal and Civil Procedure",
        text: "Study the CrPC, CPC and substantive law applied in courtrooms.",
        icon: ShieldCheck
      }
    ],
    programs: [
      {
        name: "BA LLB (Hons)",
        duration: "5 Years",
        description: "Integrated undergraduate law program combining arts subjects with core law papers including contracts, torts, constitutional law and jurisprudence."
      },
      {
        name: "BBA LLB (Hons)",
        duration: "5 Years",
        description: "Integrated program combining business administration with law, ideal for students interested in corporate law and commercial practice."
      },
      {
        name: "LL.M",
        duration: "1 Year",
        description: "Postgraduate law program with specialisations in constitutional law, criminal law, commercial law and human rights law. Admission via AP PGCET."
      },
      {
        name: "Ph.D Law",
        duration: "3–5 Years",
        description: "Research in constitutional jurisprudence, criminal justice, environmental law, intellectual property rights and international law."
      }
    ],
    skills: [
      {
        title: "Legal Drafting",
        text: "Draft pleadings, petitions, contracts and legal opinions.",
        icon: ScrollText
      },
      {
        title: "Moot Court Practice",
        text: "Argue cases and develop advocacy skills in a moot court environment.",
        icon: Users
      }
    ],
    facilities: [
      {
        title: "Moot Court Hall",
        text: "Replica courtroom setup for practice trials and advocacy training.",
        icon: Users
      },
      {
        title: "Legal Research Library",
        text: "Comprehensive collection of law reports, statutes and legal databases.",
        icon: ScrollText
      }
    ],
    faculty: [
      {
        name: "Prof. T. Padmavathi",
        role: "Dean & Head",
        focus: "Constitutional Law and Human Rights"
      }
    ],
    researchFocus: [
      {
        title: "Constitutional and Human Rights Law",
        text: "Research in fundamental rights, judicial review, LGBTQ rights and Dalit jurisprudence.",
        icon: ShieldCheck,
        lead: "Prof. T. Padmavathi",
        projects: "2 active projects"
      }
    ],
    careers: [
      {
        title: "Advocate / Lawyer",
        text: "Practise in district courts, high courts and the Supreme Court.",
        icon: ScrollText
      },
      {
        title: "Legal Advisor / Corporate Counsel",
        text: "Provide legal guidance to companies, NGOs and government bodies.",
        icon: BriefcaseBusiness
      }
    ],
    updates: [
      { date: "May 06", title: "Moot court competition 2025 registrations open", tag: "NEW" }
    ]
  },
  // ─── PHARMACY ────────────────────────────────────────────────────────────────
  pharmaceutics: {
    id: "pharmaceutics",
    slug: "pharmaceutics",
    name: "Department of Pharmaceutics",
    shortName: "Pharmaceutics",
    purpose: "Advancing drug formulation and delivery for better patient outcomes.",
    heroLine: "From molecule to medicine — the art and science of pharmaceutics",
    heroImage: "/departments/pharmaceutics.jpg",
    college: "ANU College of Pharmaceutical Sciences",
    imageLabel: "Pharmaceutics Department",
    learning: [
      {
        title: "Drug Formulation",
        text: "Design tablets, capsules, suspensions and novel drug delivery systems.",
        icon: FlaskConical
      },
      {
        title: "Biopharmaceutics",
        text: "Understand absorption, distribution, metabolism and excretion of drugs.",
        icon: Microscope
      }
    ],
    programs: [
      {
        name: "B.Pharmacy",
        duration: "4 Years",
        description: "Undergraduate pharmacy program covering pharmaceutical chemistry, pharmacology, pharmaceutics, pharmacognosy and clinical pharmacy."
      },
      {
        name: "Pharm.D",
        duration: "6 Years",
        description: "Doctor of Pharmacy — clinical pharmacy program integrating pharmaceutical sciences with patient care, clinical rotations and therapeutics."
      },
      {
        name: "M.Pharmacy Pharmaceutics",
        duration: "2 Years",
        description: "Advanced postgraduate program in novel drug delivery systems, nanotechnology-based formulations, stability testing and biopharmaceutics."
      },
      {
        name: "Ph.D Pharmaceutics",
        duration: "3–5 Years",
        description: "Research in targeted drug delivery, nanomedicine, controlled release systems and transdermal formulations."
      }
    ],
    skills: [
      {
        title: "Formulation Development",
        text: "Develop and optimise drug dosage forms using pre-formulation studies.",
        icon: FlaskConical
      },
      {
        title: "Quality Control",
        text: "Apply pharmacopoeial tests and stability protocols for drug products.",
        icon: ShieldCheck
      }
    ],
    facilities: [
      {
        title: "Pharmaceutics Lab",
        text: "Tablet compression, capsule filling, coating equipment and dissolution apparatus.",
        icon: FlaskConical
      },
      {
        title: "Stability Testing Chamber",
        text: "ICH-compliant chambers for accelerated and long-term drug stability studies.",
        icon: Microscope
      }
    ],
    faculty: [
      {
        name: "Prof. A. Venkat Rao",
        role: "Professor & Head",
        focus: "Novel Drug Delivery and Nanomedicine"
      }
    ],
    researchFocus: [
      {
        title: "Nanotechnology-based Drug Delivery",
        text: "Nanoparticle formulations for cancer targeting and brain drug delivery.",
        icon: FlaskConical,
        lead: "Prof. A. Venkat Rao",
        projects: "3 active projects"
      }
    ],
    careers: [
      {
        title: "Pharmaceutical Formulation Scientist",
        text: "Develop drug products in R&D labs of pharma companies.",
        icon: FlaskConical
      },
      {
        title: "Clinical Pharmacist",
        text: "Work in hospitals and clinics providing pharmaceutical care to patients.",
        icon: ShieldCheck
      }
    ],
    updates: [
      {
        date: "Apr 29",
        title: "Industry interaction session with pharma companies scheduled",
        tag: "NEW"
      }
    ]
  },
  pharmacology: {
    id: "pharmacology",
    slug: "pharmacology",
    name: "Department of Pharmacology",
    shortName: "Pharmacology",
    purpose: "Understanding how drugs interact with biological systems to heal and protect.",
    heroLine: "The science of drugs — mechanisms, effects and therapeutic use",
    heroImage: "/departments/pharmacology.jpg",
    college: "ANU College of Pharmaceutical Sciences",
    imageLabel: "Pharmacology Department",
    learning: [
      {
        title: "Mechanisms of Drug Action",
        text: "Study receptor pharmacology, signal transduction and drug-target interactions.",
        icon: Microscope
      },
      {
        title: "Clinical Pharmacology",
        text: "Understand dosing, drug interactions and pharmacovigilance.",
        icon: ShieldCheck
      }
    ],
    programs: [
      {
        name: "M.Pharmacy Pharmacology",
        duration: "2 Years",
        description: "Postgraduate program covering advanced pharmacology, molecular pharmacology, clinical pharmacology, toxicology and drug regulatory affairs."
      },
      {
        name: "Ph.D Pharmacology",
        duration: "3–5 Years",
        description: "Research in neuropharmacology, oncopharmacology, cardiovascular pharmacology, drug discovery and safety evaluation."
      }
    ],
    skills: [
      {
        title: "Pharmacological Screening",
        text: "Perform in vitro and in vivo experiments to assess drug activity.",
        icon: FlaskConical
      },
      {
        title: "Toxicity Testing",
        text: "Apply acute, sub-acute and chronic toxicity protocols.",
        icon: ShieldCheck
      }
    ],
    facilities: [
      {
        title: "Pharmacology Lab",
        text: "Isolated organ baths, in vivo animal models and cell culture facilities.",
        icon: FlaskConical
      },
      {
        title: "Molecular Pharmacology Lab",
        text: "Western blot, flow cytometry and receptor binding assay setups.",
        icon: Microscope
      }
    ],
    faculty: [
      {
        name: "Prof. R. Chandra Sekhar",
        role: "Professor & Head",
        focus: "Neuropharmacology and Drug Discovery"
      }
    ],
    researchFocus: [
      {
        title: "Anticancer Drug Screening",
        text: "In vitro and in vivo evaluation of plant-based and synthetic anticancer agents.",
        icon: Microscope,
        lead: "Prof. R. Chandra Sekhar",
        projects: "3 active projects"
      }
    ],
    careers: [
      {
        title: "Drug Safety Scientist",
        text: "Work in preclinical safety evaluation in pharmaceutical companies.",
        icon: ShieldCheck
      },
      {
        title: "Clinical Research Associate",
        text: "Manage clinical trial operations and regulatory submissions.",
        icon: ScrollText
      }
    ],
    updates: [
      {
        date: "Apr 26",
        title: "Workshop on drug regulatory affairs and clinical trials",
        tag: "NEW"
      }
    ]
  },
  "pharmaceutical-analysis": {
    id: "pharmaceutical-analysis",
    slug: "pharmaceutical-analysis",
    name: "Department of Pharmaceutical Analysis",
    shortName: "Pharmaceutical Analysis",
    purpose: "Ensuring drug quality and safety through advanced analytical methods.",
    heroLine: "Accuracy in analysis — the backbone of pharmaceutical quality",
    heroImage: "/departments/pharma-analysis.jpg",
    college: "ANU College of Pharmaceutical Sciences",
    imageLabel: "Pharmaceutical Analysis",
    learning: [
      {
        title: "Chromatographic Analysis",
        text: "Apply HPLC, GC and TLC for quantification of drugs and impurities.",
        icon: Microscope
      },
      {
        title: "Spectroscopic Methods",
        text: "Use UV-Vis, IR, NMR and MS for structural characterisation of compounds.",
        icon: FlaskConical
      }
    ],
    programs: [
      {
        name: "M.Pharmacy Pharmaceutical Analysis",
        duration: "2 Years",
        description: "Advanced postgraduate program in modern instrumental analysis, validation of analytical methods, ICH guidelines and quality control of drugs."
      },
      {
        name: "Ph.D Pharmaceutical Analysis",
        duration: "3–5 Years",
        description: "Research in hyphenated analytical techniques, bioanalytical method development, impurity profiling and green analytical chemistry."
      }
    ],
    skills: [
      {
        title: "Instrument Operation",
        text: "Operate HPLC, GC, UV-Vis and atomic absorption spectrophotometers.",
        icon: Microscope
      },
      {
        title: "Method Validation",
        text: "Validate analytical methods per ICH Q2(R1) guidelines.",
        icon: ShieldCheck
      }
    ],
    facilities: [
      {
        title: "Instrumental Analysis Lab",
        text: "HPLC, GC, UV-Vis, FTIR and AAS instruments for analysis.",
        icon: Microscope
      }
    ],
    faculty: [
      {
        name: "Prof. K. Srinivasu",
        role: "Professor & Head",
        focus: "HPLC Method Development and Impurity Profiling"
      }
    ],
    researchFocus: [
      {
        title: "Bioanalytical Methods",
        text: "Development and validation of plasma drug assays for pharmacokinetic studies.",
        icon: FlaskConical,
        lead: "Prof. K. Srinivasu",
        projects: "2 active projects"
      }
    ],
    careers: [
      {
        title: "Quality Control Analyst",
        text: "Perform routine and advanced testing in pharma manufacturing units.",
        icon: ShieldCheck
      },
      {
        title: "Regulatory Affairs Specialist",
        text: "Prepare dossiers and submissions for drug regulatory approvals.",
        icon: ScrollText
      }
    ],
    updates: [{ date: "Apr 21", title: "Hands-on HPLC training workshop scheduled", tag: "NEW" }]
  },
  "pharmaceutical-chemistry": {
    id: "pharmaceutical-chemistry",
    slug: "pharmaceutical-chemistry",
    name: "Department of Pharmaceutical Chemistry",
    shortName: "Pharmaceutical Chemistry",
    purpose: "Designing and synthesising drug molecules for therapeutic use.",
    heroLine: "Designing molecules that heal — pharmaceutical chemistry",
    heroImage: "/departments/pharma-chemistry.jpg",
    college: "ANU College of Pharmaceutical Sciences",
    imageLabel: "Pharmaceutical Chemistry",
    learning: [
      {
        title: "Medicinal Chemistry",
        text: "Understand structure-activity relationships and drug design principles.",
        icon: FlaskConical
      },
      {
        title: "Organic Synthesis",
        text: "Apply multi-step synthetic routes to prepare drug candidates.",
        icon: Microscope
      }
    ],
    programs: [
      {
        name: "M.Pharmacy Pharmaceutical Chemistry",
        duration: "2 Years",
        description: "Postgraduate program covering advanced medicinal chemistry, computer-aided drug design, combinatorial chemistry and drug synthesis."
      },
      {
        name: "Ph.D Pharmaceutical Chemistry",
        duration: "3–5 Years",
        description: "Research in heterocyclic synthesis, molecular docking, QSAR studies, natural product chemistry and anticancer compound design."
      }
    ],
    skills: [
      {
        title: "Organic Synthesis",
        text: "Design and execute multi-step synthesis in organic chemistry.",
        icon: FlaskConical
      },
      {
        title: "Computational Drug Design",
        text: "Use molecular docking and QSAR software for lead optimisation.",
        icon: CodeXml
      }
    ],
    facilities: [
      {
        title: "Organic Chemistry Lab",
        text: "Reflux, distillation, column chromatography and rotary evaporator.",
        icon: FlaskConical
      },
      {
        title: "Molecular Modelling Lab",
        text: "Schrodinger, AutoDock and Discovery Studio for computational chemistry.",
        icon: CodeXml
      }
    ],
    faculty: [
      {
        name: "Prof. M. Raghunath",
        role: "Professor & Head",
        focus: "Medicinal Chemistry and Drug Design"
      }
    ],
    researchFocus: [
      {
        title: "Heterocyclic Synthesis and Anticancer Activity",
        text: "Synthesis and evaluation of heterocyclic compounds as anticancer and antimicrobial agents.",
        icon: FlaskConical,
        lead: "Prof. M. Raghunath",
        projects: "3 active projects"
      }
    ],
    careers: [
      {
        title: "Medicinal Chemist",
        text: "Design and synthesise drug candidates in pharma R&D.",
        icon: FlaskConical
      },
      {
        title: "Process Chemistry Scientist",
        text: "Optimise drug synthesis processes for commercial manufacturing.",
        icon: Microscope
      }
    ],
    updates: [
      {
        date: "Apr 17",
        title: "Workshop on CADD and molecular modelling conducted",
        tag: "NOTICE"
      }
    ]
  },
  "industrial-pharmacy": {
    id: "industrial-pharmacy",
    slug: "industrial-pharmacy",
    name: "Department of Industrial Pharmacy",
    shortName: "Industrial Pharmacy",
    purpose: "Bridging pharmaceutical science and large-scale drug manufacturing.",
    heroLine: "From bench to batch — industrial pharmacy in practice",
    heroImage: "/departments/industrial-pharmacy.jpg",
    college: "ANU College of Pharmaceutical Sciences",
    imageLabel: "Industrial Pharmacy",
    learning: [
      {
        title: "Manufacturing Technology",
        text: "Learn scale-up, GMP compliance and pharmaceutical production processes.",
        icon: Building2
      },
      {
        title: "Quality Assurance",
        text: "Apply QA systems, SOPs and regulatory requirements in drug manufacture.",
        icon: ShieldCheck
      }
    ],
    programs: [
      {
        name: "M.Pharmacy Industrial Pharmacy",
        duration: "2 Years",
        description: "Postgraduate program in GMP, pharmaceutical production scale-up, quality assurance, regulatory affairs, packing technology and validation."
      },
      {
        name: "Ph.D Industrial Pharmacy",
        duration: "3–5 Years",
        description: "Research in process optimisation, continuous manufacturing, industrial scale formulation development and regulatory science."
      }
    ],
    skills: [
      {
        title: "GMP & Regulatory Compliance",
        text: "Implement Good Manufacturing Practices and document SOPs.",
        icon: ShieldCheck
      },
      {
        title: "Process Validation",
        text: "Design and execute validation protocols for pharmaceutical manufacturing.",
        icon: Lightbulb
      }
    ],
    facilities: [
      {
        title: "Pilot Plant",
        text: "Scale-up equipment for tablets, capsules and liquid manufacturing.",
        icon: Building2
      },
      {
        title: "QA/QC Lab",
        text: "Instruments and setups for in-process and finished product quality testing.",
        icon: ShieldCheck
      }
    ],
    faculty: [
      {
        name: "Prof. P. Ravikumar",
        role: "Professor & Head",
        focus: "GMP and Pharmaceutical Process Engineering"
      }
    ],
    researchFocus: [
      {
        title: "Continuous Manufacturing",
        text: "Research on continuous processing technologies for solid oral dosage forms.",
        icon: Building2,
        lead: "Prof. P. Ravikumar",
        projects: "2 active projects"
      }
    ],
    careers: [
      {
        title: "Production Pharmacist",
        text: "Manage manufacturing operations in pharma production facilities.",
        icon: Building2
      },
      {
        title: "Quality Assurance Officer",
        text: "Ensure product quality and regulatory compliance in pharma companies.",
        icon: ShieldCheck
      }
    ],
    updates: [
      {
        date: "Apr 11",
        title: "Pharma industry visit to Hyderabad manufacturing unit arranged",
        tag: "NOTICE"
      }
    ]
  }
};
function getDepartmentPage(departmentId) {
  return departmentPages[departmentId] ?? departmentPages["computer-science-and-engineering"];
}
const $$splitComponentImporter$5 = () => import("./departments._departmentId-3R0AytjR.mjs");
const Route$5 = createFileRoute("/departments/$departmentId")({
  head: ({
    params
  }) => {
    const department = getDepartmentPage(params.departmentId);
    return {
      meta: [{
        title: department ? `${department.name} | Acharya Nagarjuna University` : "Department | Acharya Nagarjuna University"
      }, {
        name: "description",
        content: department?.purpose ?? "Explore department programs, skills, labs, faculty snapshot, career outcomes and updates at Acharya Nagarjuna University."
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./colleges._collegeId-DWmdGEvL.mjs");
const Route$4 = createFileRoute("/colleges/$collegeId")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component"),
  head: () => ({
    meta: [{
      title: "University Colleges | Acharya Nagarjuna University"
    }, {
      name: "description",
      content: "Explore Acharya Nagarjuna University college details, departments, research, updates and student outcomes."
    }]
  })
});
const $$splitComponentImporter$3 = () => import("./campus-life._pageId-2pn72fvg.mjs");
const Route$3 = createFileRoute("/campus-life/$pageId")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./admissions._pageId-BDRlaOvK.mjs");
const Route$2 = createFileRoute("/admissions/$pageId")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./academics._pageId-wzaEDc6V.mjs");
const Route$1 = createFileRoute("/academics/$pageId")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./about._pageId-DN8N_E19.mjs");
const Route = createFileRoute("/about/$pageId")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const JubileeRoute = Route$n.update({
  id: "/jubilee",
  path: "/jubilee",
  getParentRoute: () => Route$o
});
const HistoryRoute = Route$m.update({
  id: "/history",
  path: "/history",
  getParentRoute: () => Route$o
});
const FacultyRoute = Route$l.update({
  id: "/faculty",
  path: "/faculty",
  getParentRoute: () => Route$o
});
const AboutprofileRoute = Route$k.update({
  id: "/aboutprofile",
  path: "/aboutprofile",
  getParentRoute: () => Route$o
});
const IndexRoute = Route$j.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$o
});
const StudentServicesIndexRoute = Route$i.update({
  id: "/student-services/",
  path: "/student-services/",
  getParentRoute: () => Route$o
});
const ResearchIndexRoute = Route$h.update({
  id: "/research/",
  path: "/research/",
  getParentRoute: () => Route$o
});
const RankingsIndexRoute = Route$g.update({
  id: "/rankings/",
  path: "/rankings/",
  getParentRoute: () => Route$o
});
const ProgramsIndexRoute = Route$f.update({
  id: "/programs/",
  path: "/programs/",
  getParentRoute: () => Route$o
});
const EmployeeServicesIndexRoute = Route$e.update({
  id: "/employee-services/",
  path: "/employee-services/",
  getParentRoute: () => Route$o
});
const CampusLifeIndexRoute = Route$d.update({
  id: "/campus-life/",
  path: "/campus-life/",
  getParentRoute: () => Route$o
});
const StudentServicesPageIdRoute = Route$c.update({
  id: "/student-services/$pageId",
  path: "/student-services/$pageId",
  getParentRoute: () => Route$o
});
const ResearchPageIdRoute = Route$b.update({
  id: "/research/$pageId",
  path: "/research/$pageId",
  getParentRoute: () => Route$o
});
const RankingsPageIdRoute = Route$a.update({
  id: "/rankings/$pageId",
  path: "/rankings/$pageId",
  getParentRoute: () => Route$o
});
const ProgramsPageIdRoute = Route$9.update({
  id: "/programs/$pageId",
  path: "/programs/$pageId",
  getParentRoute: () => Route$o
});
const PagesSectionRoute = Route$8.update({
  id: "/pages/$section",
  path: "/pages/$section",
  getParentRoute: () => Route$o
});
const FacultyFacultySlugRoute = Route$7.update({
  id: "/$facultySlug",
  path: "/$facultySlug",
  getParentRoute: () => FacultyRoute
});
const EmployeeServicesPageIdRoute = Route$6.update({
  id: "/employee-services/$pageId",
  path: "/employee-services/$pageId",
  getParentRoute: () => Route$o
});
const DepartmentsDepartmentIdRoute = Route$5.update({
  id: "/departments/$departmentId",
  path: "/departments/$departmentId",
  getParentRoute: () => Route$o
});
const CollegesCollegeIdRoute = Route$4.update({
  id: "/colleges/$collegeId",
  path: "/colleges/$collegeId",
  getParentRoute: () => Route$o
});
const CampusLifePageIdRoute = Route$3.update({
  id: "/campus-life/$pageId",
  path: "/campus-life/$pageId",
  getParentRoute: () => Route$o
});
const AdmissionsPageIdRoute = Route$2.update({
  id: "/admissions/$pageId",
  path: "/admissions/$pageId",
  getParentRoute: () => Route$o
});
const AcademicsPageIdRoute = Route$1.update({
  id: "/academics/$pageId",
  path: "/academics/$pageId",
  getParentRoute: () => Route$o
});
const AboutPageIdRoute = Route.update({
  id: "/about/$pageId",
  path: "/about/$pageId",
  getParentRoute: () => Route$o
});
const FacultyRouteChildren = {
  FacultyFacultySlugRoute
};
const FacultyRouteWithChildren = FacultyRoute._addFileChildren(FacultyRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AboutprofileRoute,
  FacultyRoute: FacultyRouteWithChildren,
  HistoryRoute,
  JubileeRoute,
  AboutPageIdRoute,
  AcademicsPageIdRoute,
  AdmissionsPageIdRoute,
  CampusLifePageIdRoute,
  CollegesCollegeIdRoute,
  DepartmentsDepartmentIdRoute,
  EmployeeServicesPageIdRoute,
  PagesSectionRoute,
  ProgramsPageIdRoute,
  RankingsPageIdRoute,
  ResearchPageIdRoute,
  StudentServicesPageIdRoute,
  CampusLifeIndexRoute,
  EmployeeServicesIndexRoute,
  ProgramsIndexRoute,
  RankingsIndexRoute,
  ResearchIndexRoute,
  StudentServicesIndexRoute
};
const routeTree = Route$o._addFileChildren(rootRouteChildren)._addFileTypes();
function DefaultErrorComponent({ error, reset }) {
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-destructive",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "An unexpected error occurred. Please try again." }),
    false,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$b as $,
  __vite_glob_0_20 as A,
  __vite_glob_0_19 as B,
  __vite_glob_0_18 as C,
  __vite_glob_0_17 as D,
  __vite_glob_0_16 as E,
  __vite_glob_0_15 as F,
  __vite_glob_0_14 as G,
  __vite_glob_0_13 as H,
  __vite_glob_0_12 as I,
  __vite_glob_0_11 as J,
  __vite_glob_0_10 as K,
  __vite_glob_0_9 as L,
  __vite_glob_0_8 as M,
  __vite_glob_0_7 as N,
  __vite_glob_0_6 as O,
  __vite_glob_0_5 as P,
  __vite_glob_0_4 as Q,
  __vite_glob_0_3 as R,
  __vite_glob_0_2 as S,
  __vite_glob_0_1 as T,
  __vite_glob_0_0 as U,
  getStudentServiceTab as V,
  studentServiceTabs as W,
  Route$c as X,
  getResearchTab as Y,
  researchTabs as Z,
  __vite_glob_0_47 as _,
  __vite_glob_0_46 as a,
  getRankingsTab as a0,
  rankingsTabs as a1,
  Route$a as a2,
  getProgramsTab as a3,
  programsTabs as a4,
  Route$9 as a5,
  Route$8 as a6,
  resolvePage as a7,
  getEmployeeServiceTab as a8,
  getCampusLifeTab as a9,
  Route$7 as aa,
  employeeServiceTabs as ab,
  Route$6 as ac,
  Route$5 as ad,
  getDepartmentPage as ae,
  Route$4 as af,
  campusLifeTabs as ag,
  Route$3 as ah,
  Route$2 as ai,
  Route$1 as aj,
  Route as ak,
  cn as al,
  router as am,
  __vite_glob_0_45 as b,
  __vite_glob_0_44 as c,
  __vite_glob_0_43 as d,
  __vite_glob_0_42 as e,
  __vite_glob_0_41 as f,
  __vite_glob_0_40 as g,
  __vite_glob_0_39 as h,
  __vite_glob_0_38 as i,
  __vite_glob_0_37 as j,
  __vite_glob_0_36 as k,
  __vite_glob_0_35 as l,
  __vite_glob_0_34 as m,
  __vite_glob_0_33 as n,
  __vite_glob_0_32 as o,
  __vite_glob_0_31 as p,
  __vite_glob_0_30 as q,
  __vite_glob_0_29 as r,
  __vite_glob_0_28 as s,
  __vite_glob_0_27 as t,
  __vite_glob_0_26 as u,
  __vite_glob_0_25 as v,
  __vite_glob_0_24 as w,
  __vite_glob_0_23 as x,
  __vite_glob_0_22 as y,
  __vite_glob_0_21 as z
};
