import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { H as notFound } from "../_libs/tanstack__router-core.mjs";
import { B as BreadcrumbTrail } from "./BreadcrumbTrail-CqCFC3Ty.mjs";
import { f as collegeArchitectureImage, e as collegePhysicalEducationImage, d as collegePharmaImage, b as collegeArtsImage, c as collegeEngineeringImage, a as collegeSciencesImage } from "./College_Sciences-CzxKwAeu.mjs";
import { l as getFacultySlugByName, j as __vite_glob_0_0, i as __vite_glob_0_1, h as __vite_glob_0_2, g as __vite_glob_0_3, e as __vite_glob_0_4, d as __vite_glob_0_5, c as __vite_glob_0_6, b as __vite_glob_0_7, a as __vite_glob_0_8, _ as __vite_glob_0_9 } from "./facultyProfiles-0C3lXWFY.mjs";
import { ad as Route$5, ae as getDepartmentPage } from "./router-Dtgf3qry.mjs";
import { u as Sparkles, e as ArrowRight, f as Mail, G as GraduationCap, V as Clock3, a3 as ChevronLeft, n as ChevronRight } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/embla-carousel-react.mjs";
import "../_libs/embla-carousel-reactive-utils.mjs";
import "../_libs/embla-carousel.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/class-variance-authority.mjs";
function DepartmentHero({ department }) {
  const bannerImageByCollege = {
    "ANU College of Sciences": collegeSciencesImage,
    "ANU College of Engineering & Technology": collegeEngineeringImage,
    "ANU College of Arts, Commerce & Law": collegeArtsImage,
    "ANU College of Pharmaceutical Sciences": collegePharmaImage,
    "ANU College of Physical Education & Sports": collegePhysicalEducationImage,
    "ANU College of Architecture & Planning": collegeArchitectureImage
  };
  const bannerImage = bannerImageByCollege[department.college] ?? collegeSciencesImage;
  [
    { label: "Programs", value: String(department.programs.length) },
    { label: "Faculty", value: String(department.faculty.length) },
    { label: "Research Areas", value: String(department.researchFocus.length) }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative isolate overflow-hidden text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: bannerImage,
        alt: `${department.name} campus banner`,
        className: "absolute inset-0 h-full w-full object-cover"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 bg-[linear-gradient(110deg,rgba(7,20,40,0.9)_0%,rgba(10,35,70,0.76)_45%,rgba(15,118,110,0.28)_100%)]",
        "aria-hidden": true
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.18),transparent_30%)]",
        "aria-hidden": true
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto grid min-h-[460px] max-w-7xl items-end gap-10 px-6 py-14 lg:grid-cols-[1.4fr_0.6fr] lg:px-8 lg:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#FDBA74] backdrop-blur-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
        department.college
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-5 text-4xl font-black leading-tight tracking-tight md:text-6xl", children: department.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-base leading-7 text-white/80 md:text-lg", children: department.purpose }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm font-semibold tracking-wide text-[#FDBA74] md:text-base", children: department.heroLine }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col gap-3 sm:flex-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "#programs",
            className: "inline-flex items-center justify-center gap-2 rounded-md bg-[#F97316] px-5 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#fb923c]",
            children: [
              "Explore Programs",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "#contact",
            className: "inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10",
            children: [
              "Contact Department",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" })
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
function SectionShell({
  eyebrow,
  title,
  children,
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: `mx-auto max-w-7xl px-6 py-10 lg:py-12 ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-[oklch(0.58_0.15_45)]", children: eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-2xl font-bold tracking-tight text-[oklch(0.22_0.06_265)] md:text-3xl", children: title })
    ] }),
    children
  ] });
}
function FacilitiesSection({ items }) {
  const gridPatterns = [
    "md:col-span-2 md:row-span-2",
    // Large
    "md:col-span-1 md:row-span-1",
    // Small
    "md:col-span-1 md:row-span-1",
    // Small
    "md:col-span-1 md:row-span-2"
    // Tall
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    SectionShell,
    {
      eyebrow: "Facilities / labs",
      title: "Infrastructure for learning",
      className: "bg-white",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-6 max-w-3xl text-sm leading-6 text-slate-600", children: "Modern labs, research centers, and learning spaces equipped with industry-standard tools and technology to support hands-on education." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:hidden", children: items.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "article",
          {
            className: "group overflow-hidden rounded-lg bg-white shadow-[0_16px_40px_-40px_oklch(0.22_0.06_265/0.5)] ring-1 ring-black/5 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_52px_-36px_oklch(0.22_0.06_265/0.55)]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] overflow-hidden bg-[oklch(0.91_0.01_260)]", children: [
                item.image ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: item.image,
                    alt: item.title,
                    className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute inset-0 opacity-40",
                    style: {
                      backgroundImage: "linear-gradient(135deg, rgba(15,35,69,0.08) 25%, transparent 25%, transparent 50%, rgba(15,35,69,0.08) 50%, rgba(15,35,69,0.08) 75%, transparent 75%, transparent)",
                      backgroundSize: "20px 20px"
                    },
                    "aria-hidden": true
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[oklch(0.22_0.06_265)]/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold leading-6 text-[oklch(0.22_0.06_265)] transition-colors group-hover:text-[oklch(0.52_0.14_45)]", children: item.title }),
                item.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 line-clamp-2 text-sm leading-5 text-muted-foreground", children: item.description }),
                item.capacity && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-xs font-semibold text-[oklch(0.52_0.14_45)]", children: [
                  "Capacity: ",
                  item.capacity
                ] })
              ] })
            ]
          },
          `${item.title}-${index}`
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden auto-rows-[180px] grid-cols-3 gap-4 md:grid", children: items.map((item, index) => {
          const sizeClass = gridPatterns[index % gridPatterns.length];
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "article",
            {
              className: `group relative overflow-hidden rounded-lg bg-white shadow-[0_18px_45px_-40px_oklch(0.22_0.06_265/0.45)] ring-1 ring-black/5 transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_52px_-36px_oklch(0.22_0.06_265/0.55)] ${sizeClass}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full w-full overflow-hidden bg-[oklch(0.91_0.01_260)]", children: [
                item.image ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: item.image,
                    alt: item.title,
                    className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute inset-0 opacity-40",
                    style: {
                      backgroundImage: "linear-gradient(135deg, rgba(15,35,69,0.08) 25%, transparent 25%, transparent 50%, rgba(15,35,69,0.08) 50%, rgba(15,35,69,0.08) 75%, transparent 75%, transparent)",
                      backgroundSize: "20px 20px"
                    },
                    "aria-hidden": true
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[oklch(0.22_0.06_265)]/80 via-[oklch(0.22_0.06_265)]/20 to-transparent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex flex-col justify-end p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "translate-y-1 transition-transform duration-300 group-hover:translate-y-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold leading-6 text-white drop-shadow-lg", children: item.title }),
                  item.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-5 text-white/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100 line-clamp-2", children: item.description }),
                  item.capacity && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 inline-flex items-center gap-1.5 rounded-full bg-[oklch(0.97_0.035_45)] px-2.5 py-1 text-xs font-semibold text-[oklch(0.5_0.14_45)] opacity-0 transition-opacity duration-300 group-hover:opacity-100", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "svg",
                      {
                        className: "h-3.5 w-3.5",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        strokeWidth: 2,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "path",
                          {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          }
                        )
                      }
                    ),
                    item.capacity
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-4 top-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-full bg-white/20 p-2 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "svg",
                  {
                    className: "h-4 w-4 text-white",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                      }
                    )
                  }
                ) }) })
              ] })
            },
            `${item.title}-${index}`
          );
        }) })
      ]
    }
  );
}
const facultyImages = Object.values(
  [
    __vite_glob_0_0,
    __vite_glob_0_1,
    __vite_glob_0_2,
    __vite_glob_0_3,
    __vite_glob_0_4,
    __vite_glob_0_5,
    __vite_glob_0_6,
    __vite_glob_0_7,
    __vite_glob_0_8,
    __vite_glob_0_9
  ]
);
function FacultyPreview({
  faculty,
  departmentId,
  departmentName,
  collegeName
}) {
  const featuredFaculty = faculty.slice(0, 3);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    SectionShell,
    {
      eyebrow: "Faculty",
      title: "Learn from mentors with academic depth and practical perspective",
      className: "bg-white",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5 flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/faculty",
            className: "inline-flex items-center gap-2 rounded-md border border-[oklch(0.22_0.06_265)] bg-white px-5 py-3 text-sm font-semibold text-[oklch(0.22_0.06_265)] transition hover:bg-[oklch(0.97_0.01_260)]",
            children: [
              "View All Faculty",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 lg:grid-cols-3", children: featuredFaculty.map((member) => {
          const facultySlug = getFacultySlugByName(member.name) ?? "prof-v-ramachandra-rao";
          const demoImage = facultyImages.length ? facultyImages[featuredFaculty.indexOf(member) % facultyImages.length] : "";
          const initial = member.name.trim().split(" ").slice(-1)[0]?.charAt(0).toUpperCase() ?? "F";
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: `/faculty/${facultySlug}?fromDepartmentId=${encodeURIComponent(departmentId)}&fromDepartmentName=${encodeURIComponent(departmentName)}&fromCollegeName=${encodeURIComponent(collegeName)}`,
              className: "group rounded-2xl border border-slate-200 bg-[oklch(0.995_0.002_260)] p-5 shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-md",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[92px_1fr] gap-4", children: [
                demoImage ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: demoImage,
                    alt: member.name,
                    className: "h-[112px] w-[92px] rounded-2xl object-cover object-top",
                    loading: "lazy"
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-[112px] w-[92px] items-center justify-center rounded-2xl bg-[oklch(0.92_0.01_260)] text-3xl font-black text-[oklch(0.22_0.06_265)] transition group-hover:bg-[oklch(0.52_0.14_45)] group-hover:text-white", children: initial }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold leading-6 text-slate-900", children: member.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm font-medium text-[oklch(0.52_0.14_45)]", children: member.role }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 line-clamp-3 text-sm leading-6 text-slate-600", children: member.focus })
                ] })
              ] })
            },
            member.name
          );
        }) })
      ]
    }
  );
}
function ProgramsSection({ programs }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SectionShell,
    {
      eyebrow: "Programs offered",
      title: "Study options designed for progression and specialization",
      className: "bg-[oklch(0.985_0.004_250)]",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-2 xl:grid-cols-3", children: programs.map((program, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "article",
        {
          className: "group rounded-2xl border border-black/5 bg-white p-5 shadow-[0_18px_45px_-40px_rgba(15,23,42,0.28)] transition hover:-translate-y-1 hover:shadow-[0_24px_55px_-34px_rgba(15,23,42,0.35)]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[oklch(0.97_0.035_45)] text-[oklch(0.5_0.14_45)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold tracking-wide text-slate-500", children: String(index + 1).padStart(2, "0") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-lg font-bold leading-6 text-slate-900", children: program.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 inline-flex items-center gap-1 rounded-full bg-[oklch(0.97_0.035_45)] px-3 py-1.5 text-xs font-semibold text-[oklch(0.5_0.14_45)]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock3, { className: "h-3.5 w-3.5" }),
              program.duration
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-6 text-slate-600", children: program.description })
          ]
        },
        program.name
      )) })
    }
  );
}
function ResearchFocusSection({ items }) {
  const scrollerRef = reactExports.useRef(null);
  if (!items.length) return null;
  const scrollByCard = (direction) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const firstCard = scroller.querySelector("[data-research-card]");
    const cardWidth = firstCard?.offsetWidth ?? 340;
    const gap = 16;
    scroller.scrollBy({
      left: direction === "next" ? cardWidth + gap : -(cardWidth + gap),
      behavior: "smooth"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    SectionShell,
    {
      eyebrow: "Research focus",
      title: "Themes shaping inquiry, innovation, and advanced study",
      className: "bg-[oklch(0.985_0.004_250)]",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-3xl text-sm leading-6 text-slate-600", children: "Faculty-led research areas that open opportunities for postgraduate work, doctoral study, publications, and interdisciplinary projects." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => scrollByCard("prev"),
                "aria-label": "Previous research focus",
                className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:border-slate-400 hover:bg-slate-50",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-5 w-5" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => scrollByCard("next"),
                "aria-label": "Next research focus",
                className: "inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:border-slate-400 hover:bg-slate-50",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-5 w-5" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            ref: scrollerRef,
            className: "-mx-6 overflow-x-auto px-6 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex snap-x snap-mandatory gap-5", children: items.map((item, index) => {
              const Icon = item.icon;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "article",
                {
                  "data-research-card": true,
                  className: "flex min-h-[320px] w-[84vw] max-w-[360px] shrink-0 snap-start flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_20px_50px_-38px_rgba(15,23,42,0.28)] transition hover:border-orange-200 sm:w-[340px]",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[oklch(0.22_0.06_265)] text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold tracking-[0.18em] text-slate-300", children: String(index + 1).padStart(2, "0") })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-lg font-black leading-6 tracking-tight text-slate-900", children: item.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-6 text-slate-600", children: item.text })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 border-t border-slate-200 pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm leading-6 text-slate-600", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-slate-900", children: item.lead }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2 text-slate-300", children: "•" }),
                      item.projects
                    ] }) })
                  ]
                },
                item.title
              );
            }) })
          }
        )
      ]
    }
  );
}
function DepartmentPage({ department }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DepartmentHero, { department }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "programs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProgramsSection, { programs: department.programs }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "faculty", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      FacultyPreview,
      {
        faculty: department.faculty,
        departmentId: department.id,
        departmentName: department.name,
        collegeName: department.college
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "facilities", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FacilitiesSection, { items: department.facilities.slice(0, 4) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "research", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResearchFocusSection, { items: department.researchFocus }) })
  ] });
}
const collegeIdByName = {
  "ANU College of Engineering & Technology": "engineering",
  "ANU College of Sciences": "sciences",
  "ANU College of Arts, Commerce & Law": "arts-commerce-law",
  "ANU College of Pharmaceutical Sciences": "pharmacy",
  "ANU College of Architecture & Planning": "architecture-planning",
  "ANU College of Physical Education & Sports": "physical-education-sports"
};
function DepartmentRoute() {
  const {
    departmentId
  } = Route$5.useParams();
  const department = getDepartmentPage(departmentId);
  if (!department) {
    throw notFound();
  }
  const collegeId = collegeIdByName[department.college];
  const collegeHref = collegeId ? `/colleges/${collegeId}` : void 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(BreadcrumbTrail, { items: [{
      label: "Home",
      href: "/"
    }, {
      label: "Colleges"
    }, {
      label: department.college,
      href: collegeHref
    }, {
      label: department.name
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DepartmentPage, { department })
  ] });
}
export {
  DepartmentRoute as component
};
