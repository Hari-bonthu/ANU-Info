import { _ as __vite_glob_0_47, a as __vite_glob_0_46, b as __vite_glob_0_45, c as __vite_glob_0_44, d as __vite_glob_0_43, e as __vite_glob_0_42, f as __vite_glob_0_41, g as __vite_glob_0_40, h as __vite_glob_0_39, i as __vite_glob_0_38, j as __vite_glob_0_37, k as __vite_glob_0_36, l as __vite_glob_0_35, m as __vite_glob_0_34, n as __vite_glob_0_33, o as __vite_glob_0_32, p as __vite_glob_0_31, q as __vite_glob_0_30, r as __vite_glob_0_29, s as __vite_glob_0_28, t as __vite_glob_0_27, u as __vite_glob_0_26, v as __vite_glob_0_25, w as __vite_glob_0_24, x as __vite_glob_0_23, y as __vite_glob_0_22, z as __vite_glob_0_21, A as __vite_glob_0_20, B as __vite_glob_0_19, C as __vite_glob_0_18, D as __vite_glob_0_17, E as __vite_glob_0_16, F as __vite_glob_0_15, G as __vite_glob_0_14, H as __vite_glob_0_13, I as __vite_glob_0_12, J as __vite_glob_0_11, K as __vite_glob_0_10, L as __vite_glob_0_9, M as __vite_glob_0_8, N as __vite_glob_0_7, O as __vite_glob_0_6, P as __vite_glob_0_5, Q as __vite_glob_0_4, R as __vite_glob_0_3, S as __vite_glob_0_2, T as __vite_glob_0_1, U as __vite_glob_0_0 } from "./router-Dtgf3qry.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { C as CollegeSection } from "./college-section-hVBB0Snb.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { v as vcImage, r as rector, a as registrar } from "./vice-chancellor-B-RAngZe.mjs";
import { e as ArrowRight, o as Camera, G as GraduationCap, p as BookOpen, U as Users, M as Microscope, q as Bell, r as ArrowUpRight, l as Search, s as Calendar, t as FileText, n as ChevronRight, u as Sparkles, v as Leaf, B as Building2, w as Landmark, g as Award, F as FlaskConical, x as Trophy, y as CircleQuestionMark, f as Mail, P as Phone, z as MessageSquare, H as Plus } from "../_libs/lucide-react.mjs";
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
import "./College_Sciences-CzxKwAeu.mjs";
const faqs = [
  {
    category: "Academics",
    q: "How many PG courses are offered by Acharya Nagarjuna University?",
    a: "ANU offers 100+ postgraduate programmes across Engineering, Sciences, Pharmacy, Arts, Management, Education, Law and Physical Sciences - including M.Tech, M.Sc, M.A, M.Com, MBA, MCA, M.Pharm and integrated dual-degree tracks."
  },
  {
    category: "About",
    q: "How many colleges are affiliated under Acharya Nagarjuna University?",
    a: "Over 450 colleges across the Krishna, Guntur, Bapatla, Palnadu and Prakasam districts are affiliated to ANU, spanning constituent, autonomous and professional institutions."
  },
  {
    category: "About",
    q: "What is the vision of Acharya Nagarjuna University?",
    a: 'To emerge as a globally recognised centre of academic excellence and research, fostering intellectual, social and ethical development guided by the principle "Satye Sarvam Pratishitam" - everything is established in truth.'
  },
  {
    category: "About",
    q: "What is the mission of Acharya Nagarjuna University?",
    a: "To impart quality higher education, promote interdisciplinary research, nurture innovation and entrepreneurship, and develop socially responsible citizens equipped to serve the nation and humanity."
  },
  {
    category: "Admissions",
    q: "Is Acharya Nagarjuna University a government or private institution?",
    a: "ANU is a state public university, established by an Act of the Andhra Pradesh State Legislature in 1976, and is fully recognised by the UGC. It is accredited by NAAC with an A+ grade."
  },
  {
    category: "Admissions",
    q: "How do I apply for admissions at ANU?",
    a: "Admissions are conducted through state-level common entrance tests (AP EAPCET, ICET, PGCET, LAWCET) and direct ANU notifications. Visit the Directorate of Admissions portal during the announced admission window."
  },
  {
    category: "Campus",
    q: "What facilities are available on the ANU campus?",
    a: "The 300-acre campus offers modern hostels, a central library with 3 lakh+ volumes, sports complex, health centre, banks, post office, transport, and dedicated research labs across every school."
  }
];
const categories = ["All", "Admissions", "Academics", "About", "Campus"];
function FaqSection() {
  const [open, setOpen] = reactExports.useState(0);
  const [query, setQuery] = reactExports.useState("");
  const [active, setActive] = reactExports.useState("All");
  const filtered = reactExports.useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs.filter((faq) => {
      const matchCat = active === "All" || faq.category === active;
      const matchQ = !q || faq.q.toLowerCase().includes(q) || faq.a.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [query, active]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "faq",
      className: "relative overflow-hidden bg-[oklch(0.985_0.005_250)] py-20 lg:py-24",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-[360px_1fr] lg:gap-16 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:sticky lg:top-24 lg:self-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-[oklch(0.32_0.12_260)]/20 bg-white px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[oklch(0.32_0.12_260)]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleQuestionMark, { className: "h-3.5 w-3.5", "aria-hidden": true }),
            "Help Centre"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 text-3xl font-semibold leading-tight tracking-tight text-[oklch(0.22_0.06_265)] sm:text-4xl", children: "Get every answer, right here." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base leading-relaxed text-muted-foreground", children: "Search the most common questions about admissions, academics and campus life - or reach out to our team directly." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "mailto:registrar@anu.ac.in",
                className: "group flex items-center gap-3 rounded-xl border border-border bg-white p-4 transition hover:border-[oklch(0.32_0.12_260)]/40 hover:shadow-sm",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-[oklch(0.32_0.12_260)]/8 text-[oklch(0.32_0.12_260)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5", "aria-hidden": true }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs font-medium uppercase tracking-wider text-muted-foreground", children: "Email" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-sm font-medium text-foreground", children: "registrar@anu.ac.in" })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "tel:+918632346114",
                className: "group flex items-center gap-3 rounded-xl border border-border bg-white p-4 transition hover:border-[oklch(0.32_0.12_260)]/40 hover:shadow-sm",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-[oklch(0.32_0.12_260)]/8 text-[oklch(0.32_0.12_260)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5", "aria-hidden": true }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs font-medium uppercase tracking-wider text-muted-foreground", children: "Call" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-sm font-medium text-foreground", children: "+91 863 234 6114" })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "/admissions/helpdesk",
                className: "group flex items-center gap-3 rounded-xl border border-[oklch(0.32_0.12_260)]/20 bg-[oklch(0.32_0.12_260)] p-4 text-white transition hover:bg-[oklch(0.28_0.1_265)]",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-5 w-5", "aria-hidden": true }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs font-medium uppercase tracking-wider text-white/70", children: "Live chat" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-sm font-medium", children: "Talk to a counsellor" })
                  ] })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Search,
              {
                className: "pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground",
                "aria-hidden": true
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "search",
                value: query,
                onChange: (e) => setQuery(e.target.value),
                placeholder: "Search questions - e.g. admissions, hostel, PG courses...",
                className: "h-14 w-full rounded-2xl border border-border bg-white pl-12 pr-4 text-base shadow-sm outline-none ring-0 transition placeholder:text-muted-foreground focus:border-[oklch(0.32_0.12_260)]/40 focus:shadow-md"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap gap-2", children: categories.map((category) => {
            const isActive = active === category;
            return /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setActive(category),
                className: "rounded-full border px-4 py-1.5 text-xs font-medium transition " + (isActive ? "border-[oklch(0.32_0.12_260)] bg-[oklch(0.32_0.12_260)] text-white shadow-sm" : "border-border bg-white text-foreground hover:border-[oklch(0.32_0.12_260)]/40"),
                children: category
              },
              category
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white shadow-sm", children: [
            filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-10 text-center text-sm text-muted-foreground", children: "No questions match your search. Try a different keyword." }),
            filtered.map((faq, index) => {
              const isOpen = open === index;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => setOpen(isOpen ? null : index),
                    className: "flex w-full items-start gap-4 p-5 text-left transition hover:bg-[oklch(0.97_0.02_260)] sm:p-6",
                    "aria-expanded": isOpen,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 inline-flex shrink-0 items-center justify-center rounded-md bg-[oklch(0.32_0.12_260)]/8 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[oklch(0.32_0.12_260)]", children: faq.category }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-[15px] font-medium leading-snug text-foreground sm:text-base", children: faq.q }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-white text-foreground transition-transform duration-300 " + (isOpen ? "rotate-45 border-[oklch(0.32_0.12_260)] bg-[oklch(0.32_0.12_260)] text-white" : "group-hover:border-[oklch(0.32_0.12_260)]/40"),
                          "aria-hidden": true,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" })
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "grid overflow-hidden transition-all duration-300 ease-out",
                    style: { gridTemplateRows: isOpen ? "1fr" : "0fr" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-6 pl-[4.25rem] pr-12 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:pl-[5.25rem]", children: faq.a }) })
                  }
                )
              ] }, faq.q);
            })
          ] })
        ] })
      ] })
    }
  );
}
const stats$1 = [
  {
    icon: Award,
    value: 66,
    label: "Patents",
    caption: "Granted to faculty & researchers",
    suffix: ""
  },
  {
    icon: FlaskConical,
    value: 200,
    suffix: "+",
    label: "Research Projects",
    caption: "Funded by ICSSR, DST, UGC & industry"
  },
  {
    icon: Trophy,
    value: 112,
    label: "National Ranks",
    caption: "Academic & sports achievements",
    suffix: ""
  },
  {
    icon: BookOpen,
    value: 15e3,
    suffix: "+",
    label: "Research Publications",
    caption: "In peer-reviewed journals worldwide"
  }
];
function useCountUp(target, start, duration = 1800) {
  const [value, setValue] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!start) return;
    const startTs = performance.now();
    let raf = 0;
    const tick = (now) => {
      const t = Math.min(1, (now - startTs) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return value;
}
function StatCard({ stat, inView, index }) {
  const Icon = stat.icon;
  const v = useCountUp(stat.value, inView);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "group relative overflow-hidden rounded-2xl border border-border/70 bg-white p-6 text-center shadow-[0_18px_50px_-34px_rgba(15,23,42,0.35)] transition-all duration-500 hover:-translate-y-1 hover:border-[oklch(0.65_0.19_42)]/40 hover:shadow-[0_24px_60px_-34px_rgba(15,23,42,0.45)] sm:p-8",
      style: { transitionDelay: `${index * 80}ms` },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[oklch(0.72_0.18_45)]/60 to-transparent opacity-50" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-11 w-11 items-center justify-center rounded-xl border border-[oklch(0.72_0.18_45)]/30 bg-[oklch(0.72_0.18_45)]/10 text-[oklch(0.78_0.17_45)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5", "aria-hidden": true }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground", children: stat.label })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-6 flex min-h-[64px] items-baseline justify-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl font-semibold leading-none tracking-tight text-[oklch(0.22_0.06_265)] tabular-nums sm:text-6xl", children: v.toLocaleString() }),
          stat.suffix && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-semibold leading-none text-[oklch(0.65_0.19_42)] sm:text-4xl", children: stat.suffix })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative mt-3 text-sm leading-relaxed text-muted-foreground", children: stat.caption })
      ]
    }
  );
}
function StatsSection() {
  const ref = reactExports.useRef(null);
  const [inView, setInView] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([entry]) => entry.isIntersecting && setInView(true), {
      threshold: 0.25
    });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { ref, className: "relative overflow-hidden bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-[oklch(0.72_0.18_45)]/30 bg-[oklch(0.72_0.18_45)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.55_0.16_42)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5", "aria-hidden": true }),
        "By the Numbers"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 text-3xl font-semibold leading-tight text-[oklch(0.22_0.06_265)] sm:text-4xl lg:text-5xl", children: "Five decades of impact, measured in milestones" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base leading-relaxed text-muted-foreground", children: "From pioneering research to national recognition - a snapshot of what Acharya Nagarjuna University delivers, year after year." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4", children: stats$1.map((stat, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { stat, inView, index }, stat.label)) })
  ] }) });
}
const bgImage = "/assets/bgg1-CBQNfSdx.jpg";
const notifications = [
  {
    title: "Notification for Guest Faculty Positions in CSE, AI & ML, Data Science and Cyber Security Departments (AY 2025-26)",
    date: "Apr 28, 2026",
    tag: "New",
    category: "Jobs"
  },
  {
    title: "B.Sc Honours in Fire and Industrial Safety - Admissions Open",
    date: "Apr 24, 2026",
    category: "Admissions"
  },
  {
    title: "B.Tech 2nd Year 1st & 2nd Sem and 3rd Year Examinations Time-Tables, July 2026",
    date: "Apr 18, 2026",
    tag: "Updated",
    category: "Exams"
  },
  {
    title: "Revised Academic Calendar for PG Programmes 2026-27",
    date: "Apr 12, 2026",
    category: "Academics"
  },
  {
    title: "M.Sc. Bio-Technology I Semester Regular Examinations April-2026 Results",
    date: "Apr 26, 2026",
    tag: "New",
    category: "Results"
  },
  {
    title: "M.Voc Horticulture & Landscape Gardening I Semester Results Published",
    date: "Apr 22, 2026",
    category: "Results"
  },
  {
    title: "Admissions Counselling Schedule for PG Programmes Released",
    date: "Apr 20, 2026",
    tag: "Updated",
    category: "Admissions"
  },
  {
    title: "Pre Ph.D Examination Schedule, July 2026",
    date: "Apr 16, 2026",
    category: "Exams"
  }
];
const announcementTabs = ["All", "Admissions", "Exams", "Results", "Jobs", "Academics"];
const aboutStats = [
  { value: "50", label: "Years of Excellence" },
  { value: "300", label: "Acres of Campus" },
  { value: "5,000+", label: "Students Served" },
  { value: "223", label: "Affiliated Colleges" }
];
const campusHighlights = [
  {
    title: "Green Campus",
    text: "A broad 300-acre academic setting with natural spaces and room for student life.",
    icon: Leaf
  },
  {
    title: "Research Spaces",
    text: "Departments, labs and centres built for postgraduate learning and guided research.",
    icon: Building2
  },
  {
    title: "Student Community",
    text: "A lively university environment shaped by academics, clubs, sports and service.",
    icon: Users
  }
];
const leaders = [
  {
    name: "Prof. K. Gangadhara Rao",
    role: "Vice Chancellor",
    image: vcImage,
    quote: "Our vision is to strengthen higher education with integrity, relevance and public purpose.",
    credentials: "Guiding ANU's academic direction, institutional growth and student-centred development."
  },
  {
    name: "Prof. Prof.R,Sivaramprasad",
    role: "Rector",
    image: rector,
    quote: "Engineering education must connect technical depth with practical problem solving.",
    credentials: "Leading professional education with a focus on industry readiness and innovation."
  },
  {
    name: "Prof. G. Simhachalam",
    role: "Registrar ",
    image: registrar,
    quote: "Research culture grows when curiosity, discipline and mentorship work together.",
    credentials: "Supporting research-led learning across science departments and laboratory practice."
  }
];
function TagPill({ tag }) {
  if (!tag) return null;
  const styles = {
    New: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    Updated: "bg-amber-50 text-amber-700 ring-amber-600/20"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: `inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ring-1 ring-inset ${styles[tag]}`,
      children: tag
    }
  );
}
const getNotificationHref = (category) => {
  switch (category) {
    case "Admissions":
      return "/admissions/overview";
    case "Exams":
      return "/student-services/exam-notifications";
    case "Results":
      return "/student-services/results";
    case "Jobs":
      return "/employee-services/careers";
    case "Academics":
      return "/admissions/academic-calendar";
    default:
      return "/student-services/overview";
  }
};
function NotificationsSection() {
  const [activeTab, setActiveTab] = reactExports.useState("All");
  const visibleNotifications = notifications.filter((item) => activeTab === "All" || item.category === activeTab).slice(0, 5);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "notifications", className: "bg-[oklch(0.985_0.005_250)] py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-[oklch(0.32_0.12_260)]/20 bg-white px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[oklch(0.32_0.12_260)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-3.5 w-3.5", "aria-hidden": true }),
          "Notifications"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-2xl font-semibold tracking-tight text-[oklch(0.22_0.06_265)] md:text-3xl", children: "Latest Announcements" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "/student-services/exam-notifications",
          className: "inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[oklch(0.32_0.12_260)] hover:underline",
          children: [
            "View all notifications ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-2xl border border-border/70 bg-white shadow-[0_18px_50px_-34px_rgba(15,23,42,0.25)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 border-b border-border/60 bg-white px-4 py-3 lg:grid-cols-[1fr_auto] lg:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-lg border border-border bg-[oklch(0.985_0.005_250)] px-3 py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4 w-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
            "Showing ",
            activeTab.toLowerCase(),
            " alerts"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: announcementTabs.map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setActiveTab(tab),
            className: `rounded-md border px-3 py-1.5 text-xs font-semibold transition-colors ${activeTab === tab ? "border-[oklch(0.32_0.12_260)] bg-[oklch(0.32_0.12_260)] text-white" : "border-border bg-white text-[oklch(0.22_0.06_265)] hover:bg-[oklch(0.97_0.02_255)]"}`,
            children: tab
          },
          tab
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border/60", children: visibleNotifications.map((item, index) => {
        const Icon = item.category === "Admissions" ? GraduationCap : item.category === "Exams" ? Calendar : item.category === "Results" ? FileText : Bell;
        return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: item.href ?? getNotificationHref(item.category),
            className: "group grid grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3 transition-colors hover:bg-[oklch(0.97_0.02_255)] sm:px-5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[oklch(0.32_0.12_260)]/8 text-[oklch(0.32_0.12_260)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4", "aria-hidden": true }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block truncate text-sm font-medium leading-snug text-foreground group-hover:text-[oklch(0.32_0.12_260)]", children: item.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-1.5 flex items-center gap-2 text-xs text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-[oklch(0.96_0.01_260)] px-2 py-0.5 font-semibold text-[oklch(0.22_0.06_265)]", children: item.category }),
                  item.date,
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TagPill, { tag: item.tag })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-[oklch(0.32_0.12_260)]" })
            ]
          }
        ) }, item.title);
      }) })
    ] })
  ] }) });
}
function WelcomeSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about-university", className: "bg-white px-6 py-12 text-[#1a1a1a] lg:px-8 lg:py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-[#0066cc]/20 bg-[#f5f9ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#0066cc]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
        "Welcome to ANU"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 text-3xl font-semibold leading-[1.1] tracking-tight md:text-4xl", children: [
        "About the ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#0066cc]", children: "University" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(300px,0.95fr)] lg:items-stretch", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "overflow-hidden rounded-lg border border-[#e5e7eb] bg-white shadow-[0_18px_55px_-38px_rgba(15,23,42,0.35)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: bgImage,
            alt: "Acharya Nagarjuna University's 300-acre main campus near Guntur",
            className: "aspect-[21/9] h-full w-full object-cover"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("figcaption", { className: "px-4 py-3 text-xs leading-5 text-[#666666]", children: "ANU's 300-acre main campus near Guntur brings together academic departments, research spaces, student facilities and open green areas." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-[#e5e7eb] bg-white p-5 shadow-[0_16px_45px_-38px_rgba(15,23,42,0.32)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold leading-tight", children: "Our Campus" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2.5 max-w-[560px] text-sm leading-6 text-[#666666]", children: "The campus gives students a complete university environment: classrooms, laboratories, libraries, activity spaces and a setting designed for learning beyond the timetable." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "/pages/about?page=contact",
            className: "mt-3 inline-flex items-center justify-center gap-2 rounded-md bg-[#0066cc] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0052a3] hover:shadow-[0_8px_20px_-12px_rgba(0,102,204,0.8)]",
            children: [
              "Schedule a campus tour ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid gap-2.5", children: campusHighlights.map((item) => {
          const Icon = item.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "article",
            {
              className: "flex gap-3 rounded-lg border border-[#e5e7eb] bg-[#f9f9f9] p-3",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white text-[#0066cc] ring-1 ring-[#eeeeee]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4", "aria-hidden": true }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold", children: item.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-xs leading-5 text-[#666666]", children: item.text })
                ] })
              ]
            },
            item.title
          );
        }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_300px] lg:items-stretch", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "flex h-full flex-col rounded-lg border border-[#e5e7eb] bg-white p-5 shadow-[0_16px_45px_-38px_rgba(15,23,42,0.32)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-md bg-[#eaf3ff] text-[#0066cc]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Landmark, { className: "h-5 w-5", "aria-hidden": true }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-xl font-semibold leading-tight", children: "Our Story" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 max-w-[560px] text-sm leading-6 text-[#1a1a1a]", children: [
          "Founded in ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "1976" }),
          ", Acharya Nagarjuna University has spent nearly five decades expanding access to higher education across Andhra Pradesh."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-[560px] text-sm leading-6 text-[#666666]", children: "From its main campus between Vijayawada and Guntur, ANU serves learners across undergraduate, postgraduate and research programs." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto pt-4 flex flex-wrap items-center gap-x-5 gap-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/history",
              className: "inline-flex items-center gap-1.5 border-b-2 border-[#0066cc] pb-0.5 text-sm font-semibold text-[#0066cc] transition-colors hover:border-[#0052a3] hover:text-[#0052a3]",
              children: [
                "Explore our history ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/jubilee",
              className: "inline-flex items-center gap-1.5 border-b-2 border-amber-600 pb-0.5 text-sm font-semibold text-amber-600 transition-colors hover:border-amber-700 hover:text-amber-700",
              children: [
                "Golden Jubilee (1976-2026) ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "flex h-full flex-col rounded-lg border border-[#e5e7eb] bg-white p-5 shadow-[0_16px_45px_-38px_rgba(15,23,42,0.32)]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-md bg-[#eaf3ff] text-[#0066cc]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-5 w-5", "aria-hidden": true }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-xl font-semibold leading-tight", children: "Our Philosophy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-[560px] text-sm leading-6 text-[#1a1a1a]", children: "Named after the philosopher Acharya Nagarjuna, the university draws inspiration from his pursuit of truth and disciplined inquiry." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-[560px] text-sm leading-6 text-[#666666]", children: "We believe education is not just knowledge acquisition. It is a path to discovering truth within ourselves and applying it with responsibility." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "/pages/about?page=vision-mission",
            className: "mt-auto pt-4 inline-flex items-center gap-1.5 border-b-2 border-[#0066cc] pb-0.5 text-sm font-semibold text-[#0066cc] transition-colors hover:border-[#0052a3] hover:text-[#0052a3]",
            children: [
              "Learn our values ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "flex h-full flex-col rounded-lg border border-[#e5e7eb] bg-[#f9f9f9] p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold leading-tight", children: "Key Numbers" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 grid flex-1 grid-cols-2 gap-2.5", children: aboutStats.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex h-full flex-col justify-center rounded-md bg-white p-2.5 ring-1 ring-[#eeeeee]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "block text-2xl font-semibold leading-none text-[#0066cc]", children: stat.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 block text-xs font-medium leading-4 text-[#666666]", children: stat.label })
            ]
          },
          stat.label
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-10 rounded-lg bg-[#f9f9f9] p-5 md:p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-between gap-4 md:flex-row md:items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-md bg-white text-[#0066cc] ring-1 ring-[#eeeeee]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-5 w-5", "aria-hidden": true }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-xl font-semibold leading-tight", children: "Leadership & Vision" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-[560px] text-sm leading-6 text-[#666666]", children: "ANU's academic leadership connects institutional vision with colleges, departments and student outcomes." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "/pages/about?page=vice-chancellor",
            className: "inline-flex w-fit items-center gap-1.5 border-b-2 border-[#0066cc] pb-0.5 text-sm font-semibold text-[#0066cc] transition-colors hover:border-[#0052a3] hover:text-[#0052a3]",
            children: [
              "Meet the full leadership team ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid gap-4 md:grid-cols-3 md:items-stretch", children: leaders.map((leader) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "article",
        {
          className: "flex h-full flex-col rounded-lg border border-[#eeeeee] bg-white p-4 text-center shadow-[0_16px_42px_-40px_rgba(15,23,42,0.45)]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: leader.image,
                alt: leader.name,
                className: "mx-auto h-24 w-24 rounded-full object-cover object-top ring-4 ring-[#eaf3ff]",
                loading: "lazy"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-4 text-sm font-semibold", children: leader.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#666666]", children: leader.role }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-xs italic leading-5 text-[#0066cc]", children: [
              '"',
              leader.quote,
              '"'
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs leading-5 text-[#666666]", children: leader.credentials })
          ]
        },
        leader.name
      )) })
    ] })
  ] }) });
}
const stats = [
  { icon: GraduationCap, value: "50+", label: "Years of Excellence" },
  { icon: BookOpen, value: "250+", label: "Academic Programs" },
  { icon: Users, value: "30,000+", label: "Students Empowered" },
  { icon: Users, value: "500+", label: "Faculty Members" },
  { icon: Microscope, value: "100+", label: "Research Centres" }
];
function HeroSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen w-full overflow-hidden bg-[#050d1a]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: bgImage,
          alt: "Acharya Nagarjuna University campus gate",
          className: "h-full w-full object-cover object-center",
          style: { filter: "brightness(1.10) saturate(1.22) contrast(1.04)" }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0",
          style: {
            background: "linear-gradient(108deg, rgba(5,13,26,0.95) 0%, rgba(5,13,26,0.80) 26%, rgba(5,13,26,0.38) 48%, rgba(5,13,26,0.08) 66%, rgba(5,13,26,0.02) 100%)"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-x-0 bottom-0 h-52",
          style: { background: "linear-gradient(to top, rgba(5,13,26,0.94) 0%, transparent 100%)" }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent opacity-70" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-[88px] right-5 z-10 hidden md:flex flex-col items-center rounded-sm border border-white/20 bg-white/10 px-3 py-2 text-center backdrop-blur-sm shadow-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold uppercase tracking-widest text-[#c9a84c]", children: "NAAC" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-black leading-none text-white", children: "A+" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold uppercase tracking-wider text-white/80", children: "Grade" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-[9px] leading-tight text-white/60", children: [
        "Excellence in",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Education & Research"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-[104px] flex-1 flex flex-col justify-center max-w-[52%]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-bold uppercase tracking-[0.28em] text-[#c9a84c]", children: "Igniting Knowledge." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "h1",
          {
            className: "mt-3 text-5xl font-black uppercase leading-[1.02] tracking-tight text-white md:text-6xl lg:text-[4.5rem]",
            style: { textShadow: "0 4px 32px rgba(0,0,0,0.55)" },
            children: [
              "Inspiring",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Generations."
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 h-[3px] w-14 rounded-full bg-[#c9a84c]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-sm text-[15px] leading-7 text-white/75", children: "Acharya Nagarjuna University is a hub of academic excellence, innovation and holistic development." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "#about-university",
              className: "group inline-flex items-center gap-2 rounded-sm border-2 border-[#c9a84c] bg-[#c9a84c] px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#050d1a] transition-all hover:bg-transparent hover:text-[#c9a84c]",
              children: [
                "Explore ANU",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "/campus-life",
              className: "group inline-flex items-center gap-2 rounded-sm border-2 border-white/40 bg-white/10 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-all hover:border-white/70 hover:bg-white/20",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-4 w-4" }),
                "Take a Virtual Tour"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[1px] bg-gradient-to-r from-transparent via-[#c9a84c]/50 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-5 lg:grid-cols-[repeat(5,1fr)_auto] items-center bg-gradient-to-r from-[#050d1a]/95 via-[#0a1628]/90 to-[#050d1a]/80 py-5 backdrop-blur-sm", children: [
          stats.map((stat, i) => {
            const Icon = stat.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `flex flex-col items-center gap-1 px-3 text-center sm:px-4 ${i !== stats.length - 1 ? "border-r border-white/10" : ""}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-[#c9a84c]", "aria-hidden": true }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-black leading-none text-[#c9a84c] sm:text-2xl", children: stat.value }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-medium uppercase tracking-wide text-white/60 sm:text-[11px]", children: stat.label })
                ]
              },
              stat.label
            );
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:block border-l border-white/10 pl-5 pr-4 text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "whitespace-nowrap text-[12px] leading-5 text-white/55", children: "Where tradition meets transformation," }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "whitespace-nowrap text-[12px] italic leading-5 text-white/85", children: "we build the future." })
          ] })
        ] })
      ] })
    ] })
  ] });
}
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
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full overflow-hidden border-y border-border bg-[oklch(0.98_0.005_250)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center gap-4 px-6 py-2 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded bg-[oklch(0.72_0.18_145)] px-2 py-0.5 text-xs font-bold text-white", children: "NEW" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-foreground", children: "Advertisement for the post of Research Assistant and Field Investigator for ICSSR funded Major Research Project 2026-2027   ||   EXAMINATION SCHEDULE OF M.PHIL PART-1 / PRE Ph.D EXAMINATION JULY 2026." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "w-full bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(NotificationsSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WelcomeSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CollegeSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatsSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FaqSection, {})
    ] })
  ] });
}
export {
  Index as component
};
