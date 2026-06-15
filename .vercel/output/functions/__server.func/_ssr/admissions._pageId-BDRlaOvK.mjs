import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as BreadcrumbTrail } from "./BreadcrumbTrail-CqCFC3Ty.mjs";
import { ai as Route$2 } from "./router-Dtgf3qry.mjs";
import { n as ChevronRight, G as GraduationCap, p as BookOpen, g as Award, M as Microscope, U as Users, S as ShieldCheck, O as CalendarDays, a4 as Clock, a5 as CircleAlert, a6 as Info, a7 as Globe, t as FileText, e as ArrowRight, a8 as FileCheck, a9 as CircleCheckBig, i as MapPin, B as Building2, y as CircleQuestionMark, P as Phone, f as Mail, aa as ChevronUp, k as ChevronDown, ab as LoaderCircle, ac as CircleCheck, Y as Download } from "../_libs/lucide-react.mjs";
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
const ADMISSIONS_MENU = [
  { id: "overview", label: "Admissions Overview" },
  { id: "why-choose-us", label: "Why Choose Us" },
  { id: "academic-calendar", label: "Academic Calendar" },
  { id: "fee-structure", label: "Fee Structure" },
  { id: "scholarships", label: "Scholarships" },
  { id: "how-to-apply", label: "How to Apply" },
  { id: "eligibility-criteria", label: "Eligibility Criteria" },
  { id: "affiliated-colleges", label: "Affiliated Colleges" },
  { id: "helpdesk", label: "Admission Helpdesk" },
  { id: "faqs", label: "Admissions FAQ" },
  { id: "brochure", label: "Brochure Downloads" }
];
function AdmissionsShell({
  pageId,
  children
}) {
  const activeLabel = ADMISSIONS_MENU.find((item) => item.id === pageId)?.label ?? "Admissions";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
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

        .admissions-root {
          background-color: var(--parchment);
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          min-height: 100vh;
          font-family: 'Source Serif 4', Georgia, serif;
          color: var(--ink);
        }

        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-serif { font-family: 'Source Serif 4', Georgia, serif; }
        .font-garamond { font-family: 'EB Garamond', serif; }

        /* ┤ Masthead ┤ **/
        .admissions-masthead {
          background-color: var(--ink);
          background-image: linear-gradient(135deg, #0a1628 0%, #12213a 50%, #1a3060 100%);
          position: relative;
          overflow: hidden;
        }

        .admissions-masthead::before {
          content: 'ADMIT';
          position: absolute;
          right: -2rem;
          top: 50%;
          transform: translateY(-50%);
          font-family: 'Playfair Display', serif;
          font-size: 14rem;
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
      ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "admissions-root pb-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "admissions-masthead py-16 text-center text-white lg:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-4xl px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-playfair text-4xl font-bold tracking-tight md:text-6xl", children: "Admissions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-garamond mx-auto mt-6 max-w-2xl text-lg italic tracking-wide text-[var(--gold-light)] md:text-xl", children: '"Fostering academic excellence and regional inclusion for the next generation of scholars."' })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gold-rule" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1400px] px-6 py-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        BreadcrumbTrail,
        {
          items: [
            { label: "Home", href: "/" },
            { label: "Admissions", href: "/admissions/overview" },
            { label: activeLabel }
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1400px] px-6 py-8 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-10 lg:grid-cols-[300px_1fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:sticky lg:top-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "sidebar-menu", "aria-label": "Admissions Navigation", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[var(--parchment-dark)] px-6 py-4 border-b border-[var(--rule)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-playfair text-lg font-bold text-[var(--ink)]", children: "Admissions Guide" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col", children: ADMISSIONS_MENU.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: `/admissions/${item.id}`,
              className: "sidebar-link",
              "data-active": pageId === item.id,
              children: [
                item.label,
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "sidebar-icon h-4 w-4 opacity-50" })
              ]
            },
            item.id
          )) })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-w-0", id: "admissions-content", children: [
          children,
          "(* Helpdesk Banner inside main content *)",
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 rounded border border-[var(--gold)]/30 bg-[var(--gold)]/5 p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-playfair text-2xl font-bold text-[var(--ink)]", children: "Admissions Helpdesk" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif mt-2 text-lg text-[var(--muted)]", children: "Need assistance with the application process? Our counselors are here to help." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 flex-col items-center gap-4 sm:flex-row md:items-end", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "tel:,918632346114",
                  className: "flex items-center gap-2 rounded border border-[var(--rule)] bg-white px-6 py-3 font-serif text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--parchment)] hover:text-[var(--gold)]",
                  children: "Call: +91 863 234 6114"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "mailto:admissions@anu.ac.in",
                  className: "flex items-center gap-2 rounded bg-[var(--ink)] px-6 py-3 font-serif text-sm font-semibold text-white transition hover:bg-[var(--ink-mid)]",
                  children: "Email Admissions"
                }
              )
            ] })
          ] }) })
        ] })
      ] }) })
    ] })
  ] });
}
function AdmissionsOverview() {
  const stats = [
    { value: "150+", label: "Programs", note: "Across UG, PG & PhD" },
    { value: "50+", label: "Countries", note: "International students" },
    { value: "12,000+", label: "Students", note: "On-campus enrollment" },
    { value: "A+", label: "NAAC Grade", note: "3.46 CGPA" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-playfair text-3xl font-bold text-[var(--ink)]", children: "Welcome to Admissions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 h-1 w-20 bg-[var(--gold)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 rounded border border-[var(--rule)] bg-white p-8 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-lg leading-relaxed text-[#4a4235]", children: "Acharya Nagarjuna University invites applications from bright, motivated individuals ready to engage in rigorous academic programs. Our admissions process is designed to identify students who will thrive in our research-oriented, inclusive environment." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif mt-4 text-lg leading-relaxed text-[#4a4235]", children: "Whether you are pursuing an undergraduate degree, a specialized postgraduate program, or doctoral research, ANU offers the resources, faculty expertise, and campus life to support your academic journey." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-playfair text-2xl font-bold text-[var(--ink)]", children: "University at a Glance" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-6 sm:grid-cols-2", children: stats.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "group relative overflow-hidden rounded border border-[var(--rule)] bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-playfair text-4xl font-bold text-[var(--ink)]", children: stat.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif mt-2 text-xs font-bold uppercase tracking-widest text-[var(--muted)]", children: stat.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-garamond mt-1 text-sm italic text-[var(--gold)]", children: stat.note })
          ]
        },
        i
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-playfair text-2xl font-bold text-[var(--ink)]", children: "Key Admission Areas" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-6 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded border border-[var(--rule)] bg-[var(--ink)] bg-gradient-to-br from-[#0a1628] to-[#12213a] p-8 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "mb-4 h-8 w-8 text-[var(--gold)]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-playfair text-xl font-bold", children: "Undergraduate & Postgraduate" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif mt-3 text-sm leading-relaxed text-white/70", children: "Direct admissions through central counseling (OAMDC, APPGCET) and university-level entrance tests. Programs cover Arts, Sciences, Engineering, Pharmacy, and Law." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded border border-[var(--rule)] bg-white p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "mb-4 h-8 w-8 text-[var(--gold)]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-playfair text-xl font-bold text-[var(--ink)]", children: "Research (M.Phil & PhD)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif mt-3 text-sm leading-relaxed text-[var(--muted)]", children: "Admissions to research programs are conducted via APRCET and university interviews, focusing on candidates with strong foundational knowledge and research aptitude." })
        ] })
      ] })
    ] })
  ] });
}
function WhyChooseUs() {
  const highlights = [
    {
      icon: Award,
      title: "NAAC 'A+' Grade Accreditation",
      description: "Recognised by the National Assessment and Accreditation Council with an A+ Grade (3.46 CGPA), ranking among the top state public universities in India."
    },
    {
      icon: Microscope,
      title: "Research & Innovation Focus",
      description: "Home to 100+ research centres, advanced labs, and state-funded projects. Our faculty and scholars hold 66+ patents and publish thousands of papers annually."
    },
    {
      icon: GraduationCap,
      title: "Diverse Programme Portfolio",
      description: "Offering 150+ undergraduate, postgraduate, and doctoral programmes across six constituent colleges: Engineering, Sciences, Arts, Pharmacy, Architecture, and Sports."
    },
    {
      icon: Users,
      title: "Lively Campus Ecosystem",
      description: "A 300-acre residential campus hosting 5,000+ on-campus students, modern hostels, sports complexes, and a vibrant community of clubs and societies."
    },
    {
      icon: ShieldCheck,
      title: "Affordable & Inclusive",
      description: "Combining low fee structures, state fee-reimbursement schemes (JVD), and merit scholarships to provide quality higher education accessible to everyone."
    },
    {
      icon: BookOpen,
      title: "Global Central Library",
      description: "Access to a state-of-the-art Central Library housing over 3 lakh volumes, digital resource portals, and international journals."
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-playfair text-3xl font-bold text-[var(--ink)]", children: "Why Choose Acharya Nagarjuna University?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 h-1 w-20 bg-[var(--gold)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 rounded border border-[var(--rule)] bg-white p-8 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-lg leading-relaxed text-[#4a4235]", children: "Established in 1976, Acharya Nagarjuna University has built nearly five decades of legacy in coastal Andhra Pradesh. We bring together academic rigor, modern research laboratories, active campus life, and strong industry linkages to shape global careers." }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "grid gap-6 md:grid-cols-2", children: highlights.map((item, index) => {
      const Icon = item.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "group relative rounded border border-[var(--rule)] bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 right-0 h-1 bg-[var(--gold)] opacity-0 transition-opacity group-hover:opacity-100" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--parchment)] text-[var(--gold)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-playfair text-xl font-bold text-[var(--ink)]", children: item.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif mt-2 text-sm leading-relaxed text-[var(--muted)]", children: item.description })
              ] })
            ] })
          ]
        },
        index
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded border border-[var(--rule)] bg-[var(--ink)] bg-gradient-to-br from-[#0a1628] to-[#12213a] p-8 text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-playfair text-2xl font-bold", children: "A Launchpad for Global Careers" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif mt-2 text-white/80", children: "Our alumni serve at top tech firms, academic research centres, government services, and professional organizations globally. At ANU, we help you connect academic learning with practical, industry-ready skills." })
    ] })
  ] });
}
function HowToApply() {
  const steps = [
    {
      title: "Identify Your Program",
      description: "Review our program offerings, verify eligibility criteria, and ensure you meet the academic requirements for your chosen course."
    },
    {
      title: "Register on the Portal",
      description: "Create an account on the Directorate of Admissions portal or the State Common Entrance Test portal (APPECET, ICET, etc.) depending on your program."
    },
    {
      title: "Submit Application & Documents",
      description: "Fill out the online application form and upload scanned copies of your academic transcripts, caste certificate (if applicable), and passport-size photographs."
    },
    {
      title: "Pay Application Fee",
      description: "Complete the process by paying the required application fee via the secure payment gateway (Net Banking, Credit/Debit Card, or UPI)."
    },
    {
      title: "Entrance Test & Counseling",
      description: "Download your hall ticket, appear for the entrance examination, and participate in the web counseling phase to secure your seat."
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-playfair text-3xl font-bold text-[var(--ink)]", children: "How to Apply" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 h-1 w-20 bg-[var(--gold)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-lg leading-relaxed text-[#4a4235]", children: "The application process at Acharya Nagarjuna University is fully digitized to ensure transparency and efficiency. Depending on your level of study, admission is either through state-level common entrance tests or university-specific admission drives." }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded border border-[var(--rule)] bg-white p-8 shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-playfair text-2xl font-bold text-[var(--ink)]", children: "Step-by-Step Guide" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 space-y-8", children: steps.map((step, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex gap-6", children: [
        index !== steps.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-[1.15rem] top-10 bottom-[-2rem] w-px bg-[var(--rule)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--gold)] text-white shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-playfair font-bold", children: index + 1 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-playfair text-xl font-bold text-[var(--ink)]", children: step.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif mt-2 text-sm leading-relaxed text-[var(--muted)]", children: step.description })
        ] })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded border border-[var(--rule)] bg-[var(--parchment-dark)] p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-playfair text-xl font-bold text-[var(--ink)]", children: "Ready to Begin?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif mt-2 text-sm text-[var(--muted)]", children: "Ensure you have all documents ready in digital format before starting your application." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex items-center gap-2 rounded bg-[var(--ink)] px-6 py-3 font-serif text-sm font-semibold text-white transition hover:bg-[var(--ink-mid)]", children: [
          "Open Admission Portal",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "flex items-center gap-2 rounded border border-[var(--rule)] bg-white px-6 py-3 font-serif text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--parchment)]", children: "Download Prospectus" })
      ] })
    ] })
  ] });
}
function FeeStructure() {
  const fees = [
    {
      category: "Undergraduate Programs (B.A, B.Sc, B.Com)",
      tuition: "₹ 15,000 - ₹ 25,000",
      special: "₹ 2,000",
      total: "₹ 17,000 - ₹ 27,000"
    },
    {
      category: "Engineering (B.Tech / B.Arch)",
      tuition: "₹ 60,000 - ₹ 85,000",
      special: "₹ 5,000",
      total: "₹ 65,000 - ₹ 90,000"
    },
    {
      category: "Postgraduate Programs (M.A, M.Sc, M.Com)",
      tuition: "₹ 20,000 - ₹ 45,000",
      special: "₹ 3,000",
      total: "₹ 23,000 - ₹ 48,000"
    },
    {
      category: "Professional Courses (MBA / MCA)",
      tuition: "₹ 55,000 - ₹ 75,000",
      special: "₹ 4,500",
      total: "₹ 59,500 - ₹ 79,500"
    },
    {
      category: "Research Programs (Ph.D / M.Phil)",
      tuition: "₹ 30,000 - ₹ 40,000",
      special: "₹ 5,000",
      total: "₹ 35,000 - ₹ 45,000"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-playfair text-3xl font-bold text-[var(--ink)]", children: "Fee Structure" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 h-1 w-20 bg-[var(--gold)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 rounded border border-[var(--rule)] bg-white p-8 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-lg leading-relaxed text-[#4a4235]", children: "Acharya Nagarjuna University is committed to providing high-quality education at an accessible cost. The fee structure varies based on the level of study, specific program, and the mode of admission (Regular vs. Self-Financed)." }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-playfair text-2xl font-bold text-[var(--ink)]", children: "Indicative Annual Fees" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif mt-2 text-sm text-[var(--muted)]", children: "* Note: Values represent typical ranges per annum and may change based on academic year and university notifications." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 overflow-hidden rounded border border-[var(--rule)] bg-white shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-[var(--parchment-dark)] font-serif text-[var(--ink)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border-b border-[var(--rule)] px-6 py-4 font-bold", children: "Program Category" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border-b border-[var(--rule)] px-6 py-4 font-bold", children: "Tuition Fee" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border-b border-[var(--rule)] px-6 py-4 font-bold", children: "Special/Lab Fee" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border-b border-[var(--rule)] px-6 py-4 font-bold text-[var(--gold-light)]", children: "Estimated Total" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-[var(--rule)] font-serif", children: fees.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "transition-colors hover:bg-[var(--parchment)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 font-semibold text-[var(--ink)]", children: row.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 text-[var(--muted)]", children: row.tuition }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 text-[var(--muted)]", children: row.special }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 font-bold text-[var(--ink)]", children: row.total })
        ] }, i)) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "flex items-start gap-4 rounded border border-[var(--gold)]/30 bg-[var(--gold)]/5 p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "mt-0.5 h-6 w-6 shrink-0 text-[var(--gold)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-playfair text-lg font-bold text-[var(--ink)]", children: "Important Information" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "font-serif mt-2 list-inside list-disc space-y-2 text-sm leading-relaxed text-[var(--muted)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Examination fees, hostel accommodation, and mess charges are collected separately." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Self-financed (SF) courses carry a different fee structure compared to regular courses." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Students eligible for State Government fee reimbursement (JVD) must submit relevant certificates during admission." })
        ] })
      ] })
    ] })
  ] });
}
function Scholarships() {
  const scholarships = [
    {
      icon: Award,
      title: "State Government Schemes",
      description: "Jagananna Vidya Deevena (JVD) and Vasathi Deevena covering full tuition fees and hostel/mess charges for eligible SC/ST/BC/EBC/Minority students of Andhra Pradesh."
    },
    {
      icon: Globe,
      title: "National Fellowship Programs",
      description: "UGC NET/JRF, CSIR, and DST-INSPIRE fellowships specifically for Ph.D. scholars pursuing advanced research in sciences and humanities."
    },
    {
      icon: FileText,
      title: "University Merit Scholarships",
      description: "Endowment scholarships and merit-based fee waivers offered by Acharya Nagarjuna University for university rank holders and exceptional performers."
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-playfair text-3xl font-bold text-[var(--ink)]", children: "Scholarships & Financial Aid" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 h-1 w-20 bg-[var(--gold)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 rounded border border-[var(--rule)] bg-white p-8 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-lg leading-relaxed text-[#4a4235]", children: "Acharya Nagarjuna University believes that financial constraints should never be a barrier to quality education. We facilitate various state, national, and university-level scholarship schemes to support meritorious and economically disadvantaged students." }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "grid gap-6 md:grid-cols-3", children: scholarships.map((item, index) => {
      const Icon = item.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "group relative rounded border border-[var(--rule)] bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 right-0 h-1 bg-[var(--gold)] opacity-0 transition-opacity group-hover:opacity-100" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--parchment)] text-[var(--gold)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-playfair text-xl font-bold text-[var(--ink)]", children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif mt-3 text-sm leading-relaxed text-[var(--muted)]", children: item.description })
          ]
        },
        index
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded border border-[var(--rule)] bg-[var(--ink)] bg-gradient-to-br from-[#0a1628] to-[#12213a] p-8 text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-playfair text-2xl font-bold", children: "How to Claim" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif mt-2 text-white/80", children: "Process for applying to State Government (JVD) Scholarships:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "font-serif mt-6 list-inside list-decimal space-y-3 text-sm leading-relaxed text-white/90", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Ensure your Aadhaar is linked to your active bank account." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Possess a valid Income Certificate and Caste Certificate issued by the AP Government." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Submit these details to the College Office / Scholarship Cell during the admission confirmation process." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Complete the biometric authentication (Navasakam) as notified by the university." })
      ] })
    ] })
  ] });
}
function AcademicCalendar() {
  const terms = [
    {
      name: "Odd Semester (July - December)",
      events: [
        { date: "July 15, 2026", event: "Commencement of Classes for Senior Students" },
        { date: "August 01, 2026", event: "Orientation & Classes for First Year Students" },
        { date: "September 15-20, 2026", event: "First Mid-Term Examinations" },
        { date: "November 05-10, 2026", event: "Second Mid-Term Examinations" },
        { date: "November 30, 2026", event: "Last Instruction Day" },
        { date: "December 05-20, 2026", event: "End Semester Examinations" }
      ]
    },
    {
      name: "Even Semester (January - June)",
      events: [
        { date: "January 04, 2027", event: "Commencement of Classes" },
        { date: "February 20-25, 2027", event: "First Mid-Term Examinations" },
        { date: "April 15-20, 2027", event: "Second Mid-Term Examinations" },
        { date: "May 05, 2027", event: "Last Instruction Day" },
        { date: "May 10-25, 2027", event: "End Semester Examinations" },
        { date: "June 01 - July 10, 2027", event: "Summer Vacation" }
      ]
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-playfair text-3xl font-bold text-[var(--ink)]", children: "Academic Calendar 2026-2027" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 h-1 w-20 bg-[var(--gold)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 rounded border border-[var(--rule)] bg-white p-8 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-lg leading-relaxed text-[#4a4235]", children: "The academic calendar outlines the critical dates for the upcoming academic year. Students are advised to align their study plans, travel, and project submissions according to the timelines provided below." }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "space-y-8", children: terms.map((term, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded border border-[var(--rule)] bg-white shadow-sm overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-[var(--ink)] px-8 py-5 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-6 w-6 text-[var(--gold)]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-playfair text-xl font-bold", children: term.name })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-[var(--rule)]", children: term.events.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex flex-col sm:flex-row p-6 hover:bg-[var(--parchment)] transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:w-1/3 flex items-start gap-2 mb-2 sm:mb-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 mt-1 text-[var(--gold)] shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif font-bold text-[var(--ink)]", children: item.date })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:w-2/3 sm:pl-4 border-[var(--rule)] sm:border-l", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-[var(--muted)]", children: item.event }) })
              ]
            },
            i
          )) })
        ]
      },
      index
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "flex items-start gap-4 rounded border border-[var(--rule)] bg-[var(--parchment-dark)] p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "mt-0.5 h-6 w-6 shrink-0 text-[var(--gold)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-playfair text-lg font-bold text-[var(--ink)]", children: "Disclaimers" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "font-serif mt-2 list-inside list-disc space-y-2 text-sm leading-relaxed text-[var(--muted)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "The university reserves the right to modify these dates in case of unforeseen circumstances." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Specific department-level schedules for practicals and vivas will be communicated by respective Heads of Departments." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Holidays will be observed as per the official state government notifications." })
        ] })
      ] })
    ] })
  ] });
}
function EligibilityCriteria() {
  const criteria = [
    {
      course: "B.Tech (Bachelor of Technology)",
      specializations: "CSE, AI & ML, Data Science, Cyber Security, ECE, EEE, Mechanical, Civil",
      qualification: "Passed 10+2 (Intermediate) examination with Physics, Chemistry, and Mathematics (PCM) as core subjects.",
      minMarks: "Minimum 45% aggregate marks (40% for reserved categories SC/ST/BC) in PCM subjects.",
      pathway: "Qualifying rank in AP EAPCET entrance exam followed by web counseling."
    },
    {
      course: "MBA (Master of Business Administration)",
      specializations: "General, Finance, HR, Marketing, International Business, Hospital Administration",
      qualification: "Bachelor's degree of minimum 3 years duration in any discipline (except BFA/BOL). Must have studied Mathematics at 10th or 12th level.",
      minMarks: "Minimum 50% aggregate marks (45% for SC/ST/BC categories) in the qualifying degree.",
      pathway: "Valid rank in AP ICET entrance exam."
    },
    {
      course: "MCA (Master of Computer Applications)",
      specializations: "Software Development, Systems Management, Computing Technologies",
      qualification: "Bachelor's degree of minimum 3 years duration in any discipline. Must have studied Mathematics at 10+2 or graduation level.",
      minMarks: "Minimum 50% aggregate marks (45% for SC/ST/BC categories) in the qualifying degree.",
      pathway: "Valid rank in AP ICET entrance exam."
    },
    {
      course: "B.Pharmacy (Bachelor of Pharmacy)",
      specializations: "Pharmaceutical Chemistry, Pharmaceutics, Pharmacology, Analysis",
      qualification: "Passed 10+2 examination with Physics, Chemistry, and Mathematics or Biology (PCM/PCB) from a recognized board.",
      minMarks: "Passed qualifying 10+2 board exam with core science subjects.",
      pathway: "Valid rank in AP EAPCET science stream counseling."
    },
    {
      course: "B.Arch (Bachelor of Architecture)",
      specializations: "Architecture Design, Town Planning, Built Environment",
      qualification: "Passed 10+2 examination with Physics, Chemistry, and Mathematics as mandatory subjects.",
      minMarks: "Minimum 50% aggregate marks in the qualifying examination.",
      pathway: "Valid NATA score or rank in JEE Main Paper-II."
    },
    {
      course: "M.Sc (Master of Science)",
      specializations: "Physics, Chemistry, Mathematics, Statistics, Biotechnology, Botany, Zoology, Environmental Science",
      qualification: "B.Sc degree in relevant subjects (e.g. Physics & Maths for M.Sc Physics; Chemistry for M.Sc Chemistry).",
      minMarks: "Minimum 50% marks in the relevant B.Sc major/optional subjects.",
      pathway: "Valid rank in APPGCET state counseling."
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-playfair text-3xl font-bold text-[var(--ink)]", children: "Programme Eligibility Criteria" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 h-1 w-20 bg-[var(--gold)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 rounded border border-[var(--rule)] bg-white p-8 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-lg leading-relaxed text-[#4a4235]", children: "Admissions to various constituent colleges at Acharya Nagarjuna University follow statutory guidelines set by the Government of Andhra Pradesh and the UGC. Please check the specific academic requirements and entrance test requirements for your chosen course below." }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "space-y-6", children: criteria.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded border border-[var(--rule)] bg-white p-6 shadow-sm transition hover:shadow-md",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-4 md:flex-row md:items-start md:justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-[var(--parchment)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--gold)]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-3.5 w-3.5" }),
              item.course
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-serif mt-2 text-sm italic text-[var(--muted)]", children: [
              "Specializations: ",
              item.specializations
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-4 md:grid-cols-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded border border-[var(--rule)]/60 bg-[var(--parchment)]/30 p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "flex items-center gap-2 font-playfair text-sm font-bold text-[var(--ink)]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FileCheck, { className: "h-4 w-4 text-[var(--gold)]" }),
                "Qualifying Exam"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif mt-2 text-xs leading-relaxed text-[#4a4235]", children: item.qualification })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded border border-[var(--rule)]/60 bg-[var(--parchment)]/30 p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "flex items-center gap-2 font-playfair text-sm font-bold text-[var(--ink)]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-4 w-4 text-[var(--gold)]" }),
                "Minimum Marks"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif mt-2 text-xs leading-relaxed text-[#4a4235]", children: item.minMarks })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded border border-[var(--rule)]/60 bg-[var(--parchment)]/30 p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "flex items-center gap-2 font-playfair text-sm font-bold text-[var(--ink)]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "h-4 w-4 text-[var(--gold)]" }),
                "Admission Channel"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif mt-2 text-xs leading-relaxed text-[#4a4235]", children: item.pathway })
            ] })
          ] })
        ]
      },
      index
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded border border-[var(--rule)] bg-[var(--ink)] bg-gradient-to-br from-[#0a1628] to-[#12213a] p-8 text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-playfair text-2xl font-bold", children: "Important Note on Local Status" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif mt-2 text-white/80", children: "Candidates must satisfy local/non-local status requirements as per the Andhra Pradesh Educational Institutions (Regulation of Admissions) Order, 1974. Scanned Study Certificates from class 6 to Intermediate (or graduation for PG) are required to establish local status." })
    ] })
  ] });
}
function AffiliatedColleges() {
  const stats = [
    { value: "300+", label: "Total Colleges", note: "Under ANU Affiliation" },
    { value: "3", label: "Districts", note: "Guntur, Palnadu & Bapatla" },
    { value: "50,000+", label: "Enrolled Students", note: "Across various courses" },
    { value: "10+", label: "Professional Fields", note: "Engg, Pharm, Law, Ed, etc." }
  ];
  const collegeCategories = [
    {
      title: "Engineering & Architecture",
      colleges: [
        {
          name: "R.V.R. & J.C. College of Engineering",
          location: "Chowdavaram, Guntur",
          type: "Private Autonomous",
          established: "1985",
          highlight: "NAAC 'A+' Grade, Ranked top in AP"
        },
        {
          name: "Bapatla Engineering College",
          location: "Bapatla",
          type: "Private Autonomous",
          established: "1981",
          highlight: "One of the oldest private engg colleges in AP"
        },
        {
          name: "ANU College of Engineering & Technology",
          location: "ANU Campus, Guntur",
          type: "University Constituent",
          established: "2009",
          highlight: "State-of-the-art campus infrastructure"
        }
      ]
    },
    {
      title: "Pharmacy Colleges",
      colleges: [
        {
          name: "Chalapathi Institute of Pharmaceutical Sciences",
          location: "Lam, Guntur",
          type: "Private Autonomous",
          established: "2004",
          highlight: "NAAC 'A' Grade, NBA Accredited"
        },
        {
          name: "KVSR Siddhartha College of Pharmaceutical Sciences",
          location: "Vijayawada Road, Guntur Region",
          type: "Private",
          established: "1994",
          highlight: "Pioneer in pharmacy education"
        },
        {
          name: "ANU College of Pharmaceutical Sciences",
          location: "ANU Campus, Guntur",
          type: "University Constituent",
          established: "2010",
          highlight: "Advanced research labs and PG programs"
        }
      ]
    },
    {
      title: "Degree (Arts & Sciences) & Law",
      colleges: [
        {
          name: "Hindu College",
          location: "Guntur",
          type: "Aided College",
          established: "1935",
          highlight: "90-year legacy of educational excellence"
        },
        {
          name: "J.K.C. College (Jagarlamudi Kuppuswamy Choudary)",
          location: "Guntur",
          type: "Aided Autonomous",
          established: "1968",
          highlight: "NAAC 'A' Grade, Top placements in degree courses"
        },
        {
          name: "Dr. B.R. Ambedkar School of Legal Education",
          location: "ANU Campus, Guntur",
          type: "University Constituent",
          established: "2015",
          highlight: "Premium 5-year integrated law programs"
        }
      ]
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-playfair text-3xl font-bold text-[var(--ink)]", children: "Affiliated Colleges" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 h-1 w-20 bg-[var(--gold)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 rounded border border-[var(--rule)] bg-white p-8 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-lg leading-relaxed text-[#4a4235]", children: "Acharya Nagarjuna University governs a massive network of affiliated, autonomous, and constituent institutions across three key districts of coastal Andhra Pradesh. Following the reorganization of districts and university boundaries, our colleges focus on regional upliftment and industry-aligned skill building." }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: stats.map((stat, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded border border-[var(--rule)] bg-white p-6 text-center shadow-sm hover:shadow-md transition-shadow",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-playfair text-3xl font-bold text-[var(--gold)]", children: stat.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif mt-2 text-xs font-bold uppercase tracking-widest text-[var(--muted)]", children: stat.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-garamond mt-1 text-sm italic text-[var(--muted)]/80", children: stat.note })
        ]
      },
      idx
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "rounded border border-[var(--rule)] bg-[var(--parchment-dark)] p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-6 w-6 text-[var(--gold)] shrink-0 mt-1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-playfair text-lg font-bold text-[var(--ink)]", children: "Geographical Jurisdiction" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-serif mt-2 text-sm leading-relaxed text-[var(--muted)]", children: [
          "Following the state-wide administrative restructuring, ANU's primary jurisdiction spans",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " Guntur, Palnadu, and Bapatla" }),
          " districts. Please note that all affiliated colleges in the erstwhile Prakasam district have been officially transferred under the governance of the newly established",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: " Andhra Kesari University" }),
          ", Ongole."
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "space-y-10", children: collegeCategories.map((category, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-playfair text-2xl font-bold text-[var(--ink)] border-b border-[var(--rule)] pb-2 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "h-5 w-5 text-[var(--gold)]" }),
        category.title
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-3", children: category.colleges.map((college, collegeIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded border border-[var(--rule)] bg-white p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded bg-[var(--parchment)] px-2.5 py-0.5 text-xs font-semibold text-[var(--gold)]", children: [
                "Est. ",
                college.established
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-playfair text-lg font-bold text-[var(--ink)] mt-3", children: college.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-serif mt-2 text-xs italic text-[var(--muted)]", children: [
                college.type,
                " • ",
                college.location
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-4 border-t border-[var(--rule)]/60 flex items-start gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-4 w-4 text-[var(--gold)] shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-xs text-[#4a4235] leading-relaxed", children: college.highlight })
            ] })
          ]
        },
        collegeIdx
      )) })
    ] }, idx)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "flex items-start gap-4 rounded border border-[var(--gold)]/30 bg-[var(--gold)]/5 p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleQuestionMark, { className: "mt-0.5 h-6 w-6 shrink-0 text-[var(--gold)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-playfair text-lg font-bold text-[var(--ink)]", children: "Looking for the Complete Directory?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif mt-1 text-sm text-[var(--muted)]", children: "The university publishes a detailed district-wise and college-wise directory including fee structures, sanctioned seat intakes, and course codes annually. You can download the complete list of affiliated institutions on the official university portal or request it from the College Development Council (CDC) office." })
      ] })
    ] })
  ] });
}
function Helpdesk() {
  const sections = [
    {
      title: "Directorate of Admissions (DOA)",
      description: "For general campus admissions, web counseling, on-campus PG programs, and professional course approvals.",
      location: "Directorate of Admissions Building, 1st Floor, Main Campus, Guntur",
      contacts: [
        { label: "General Helpline Hotline", value: "+91 9030088685", type: "tel" },
        { label: "Office Landline 1", value: "0863-2346171", type: "tel" },
        { label: "Office Landline 2", value: "0863-2346138", type: "tel" },
        { label: "Office Landline 3 (Main)", value: "0863-2346114", type: "tel" },
        { label: "DOA Extension Lines", value: "Ext: 170 or 171 (via 0863-2346)", type: "text" }
      ],
      emails: [
        { label: "Director's Email", value: "diranuadmissions@gmail.com" },
        { label: "Technical Helpdesk", value: "helpcenter@anu.ac.in" }
      ]
    },
    {
      title: "Centre for Distance Education (CDE)",
      description: "For distance learning enrollments, student registry, study materials, and distance exams queries.",
      location: "Centre for Distance Education Block, Main Campus, Guntur",
      contacts: [
        { label: "General CDE Inquiries", value: "0863-2346222", type: "tel" },
        { label: "Director's Office Phone", value: "0863-2346323", type: "tel" },
        { label: "Online Portal Tech Support", value: "0863-2346208", type: "tel" }
      ],
      emails: [
        { label: "General Info", value: "info@anucde.ac.in" },
        { label: "Director's Office", value: "anucdedirector@gmail.com" }
      ]
    },
    {
      title: "International Students Cell",
      description: "For foreign national admissions, NRI enrollments, eligibility conversion certificates, and international scholarships.",
      location: "International Students Relations Office, Main Campus, Guntur",
      contacts: [
        { label: "International Cell Phone", value: "+91 863-2346596", type: "tel" },
        { label: "Cell Hotline Helpline", value: "+91 7093526596", type: "tel" },
        { label: "Student Care Desk", value: "+91 8555050042", type: "tel" }
      ],
      emails: [{ label: "International Inquiries", value: "moocs@anuonline.ac.in" }]
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-playfair text-3xl font-bold text-[var(--ink)]", children: "Admissions Helpdesk" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 h-1 w-20 bg-[var(--gold)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 rounded border border-[var(--rule)] bg-white p-8 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-lg leading-relaxed text-[#4a4235]", children: "If you have questions about the online application process, course eligibility, seat allocations, or documentation requirements, please reach out to the appropriate department. Our counseling staff are available during administrative office hours." }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid gap-6 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded border border-[var(--rule)] bg-white p-6 shadow-sm flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-6 w-6 text-[var(--gold)] shrink-0 mt-1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-playfair text-lg font-bold text-[var(--ink)]", children: "Office Hours" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-serif mt-2 text-sm leading-relaxed text-[var(--muted)]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "10:00 AM to 5:30 PM" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Monday through Friday.",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "The office is closed on Saturdays, Sundays, and official public holidays."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded border border-[var(--rule)] bg-white p-6 shadow-sm flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-6 w-6 text-[var(--gold)] shrink-0 mt-1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-playfair text-lg font-bold text-[var(--ink)]", children: "Physical Campus Address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-serif mt-2 text-sm leading-relaxed text-[var(--muted)]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Directorate of Admissions Building" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Acharya Nagarjuna University, NH16, Nagarjuna Nagar,",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Guntur, Andhra Pradesh, Pin - 522510, India."
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "space-y-10", children: sections.map((section, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded border border-[var(--rule)] bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[var(--ink)] px-8 py-5 text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-playfair text-xl font-bold", children: section.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-xs text-white/70 mt-1", children: section.description })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 text-sm text-[var(--muted)]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 text-[var(--gold)] shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-serif", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Office Desk Location:" }),
                " ",
                section.location
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2 pt-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-playfair text-sm font-bold text-[var(--ink)] border-b border-[var(--rule)]/60 pb-1 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 text-[var(--gold)]" }),
                  "Phone Numbers"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: section.contacts.map((contact, contactIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "li",
                  {
                    className: "font-serif text-xs flex justify-between gap-4",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[var(--muted)]", children: [
                        contact.label,
                        ":"
                      ] }),
                      contact.type === "tel" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "a",
                        {
                          href: `tel:${contact.value.replace(/[-\s]/g, "")}`,
                          className: "font-bold text-[var(--ink)] hover:text-[var(--gold)] transition-colors",
                          children: contact.value
                        }
                      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[var(--ink)]", children: contact.value })
                    ]
                  },
                  contactIdx
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-playfair text-sm font-bold text-[var(--ink)] border-b border-[var(--rule)]/60 pb-1 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 text-[var(--gold)]" }),
                  "Email Directory"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: section.emails.map((email, emailIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "font-serif text-xs flex justify-between gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[var(--muted)]", children: [
                    email.label,
                    ":"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: `mailto:${email.value}`,
                      className: "font-bold text-[var(--ink)] hover:text-[var(--gold)] transition-colors break-all",
                      children: email.value
                    }
                  )
                ] }, emailIdx)) })
              ] })
            ] })
          ] })
        ]
      },
      idx
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "flex items-start gap-4 rounded border border-[var(--rule)] bg-[var(--parchment-dark)] p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "mt-0.5 h-6 w-6 shrink-0 text-[var(--gold)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-playfair text-lg font-bold text-[var(--ink)]", children: "Security Advisory" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif mt-1 text-sm leading-relaxed text-[var(--muted)]", children: "Acharya Nagarjuna University does not authorize any external consultants, agents, or websites to accept admission fees or secure seats on behalf of the university. Always utilize the official payment pathways linked within the secure admissions portal." })
      ] })
    ] })
  ] });
}
function Faqs() {
  const faqItems = [
    {
      question: "How do I apply for regular UG/PG admission at ANU?",
      answer: "Applications for regular on-campus programs are submitted online. For undergraduate courses, admissions are generally managed through the AP state-level OAMDC counseling. For postgraduate courses, students must qualify in the APPGCET exam and participate in state-level counseling. Specialized and self-financed courses can be applied for directly on the ANU admission portal."
    },
    {
      question: "Are there entrance examinations for engineering and pharmacy?",
      answer: "Yes, admissions to B.Tech (Bachelor of Technology) and B.Pharmacy courses are primarily based on the rank obtained in the Andhra Pradesh Engineering, Agriculture and Pharmacy Common Entrance Test (AP EAPCET). Students must participate in the web counseling conducted by the AP State Council of Higher Education (APSCHE) to secure seat allocation."
    },
    {
      question: "What are the eligibility requirements for MBA and MCA courses?",
      answer: "Candidates seeking admission into MBA or MCA programs must possess a recognized 3-year Bachelor's degree with a minimum of 50% aggregate marks (45% for SC/ST/BC categories). Additionally, candidates must studied Mathematics at the 10th or 10+2 level (for MCA) and obtain a qualifying rank in the AP ICET entrance exam."
    },
    {
      question: "Does ANU offer distance education programs?",
      answer: "Yes, Acharya Nagarjuna University Centre for Distance Education (ANUCDE) offers a wide selection of undergraduate, postgraduate, and diploma programs. The admissions for distance learning are conducted twice a year (Calendar year and Academic year batches). Interested candidates can apply online directly through the ANUCDE portal."
    },
    {
      question: "Is Acharya Nagarjuna University recognized by UGC?",
      answer: "Yes, Acharya Nagarjuna University is a public state university established by Act 43 of 1976 of the Andhra Pradesh State Legislature. It is fully recognized under Section 2(f) and 12(B) of the UGC Act and accredited by the National Assessment and Accreditation Council (NAAC) with an 'A+' grade (3.46 CGPA)."
    },
    {
      question: "How do international students apply for courses?",
      answer: "International students must apply through the International Students Cell. Admissions are based on the candidate's academic credentials, equivalence verification of certificates, English language proficiency, and student visa approvals. A dedicated support team handles foreign national admissions."
    }
  ];
  const [activeIndex, setActiveIndex] = reactExports.useState(null);
  const toggleFaq = (idx) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-playfair text-3xl font-bold text-[var(--ink)]", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 h-1 w-20 bg-[var(--gold)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 rounded border border-[var(--rule)] bg-white p-8 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-lg leading-relaxed text-[#4a4235]", children: "Find quick answers to common queries regarding academic cycles, online application pathways, accreditation, and entrance requirements at Acharya Nagarjuna University." }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "space-y-4", children: faqItems.map((item, idx) => {
      const isOpen = activeIndex === idx;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded border border-[var(--rule)] bg-white overflow-hidden shadow-sm transition-all",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => toggleFaq(idx),
                className: "w-full text-left px-6 py-5 flex items-center justify-between gap-4 bg-white hover:bg-[var(--parchment)]/30 transition-colors focus:outline-none",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-playfair font-bold text-lg text-[var(--ink)] flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleQuestionMark, { className: "h-5 w-5 text-[var(--gold)] shrink-0" }),
                    item.question
                  ] }),
                  isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-5 w-5 text-[var(--gold)] shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-5 w-5 text-[var(--gold)] shrink-0" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `transition-all duration-300 ease-in-out border-t border-[var(--rule)]/40 ${isOpen ? "max-h-[500px] opacity-100 p-6" : "max-h-0 opacity-0 pointer-events-none"}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-sm leading-relaxed text-[#4a4235]", children: item.answer })
              }
            )
          ]
        },
        idx
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded border border-[var(--rule)] bg-[var(--parchment-dark)] p-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-playfair text-xl font-bold text-[var(--ink)]", children: "Have a different question?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif mt-2 text-sm text-[var(--muted)] max-w-xl mx-auto", children: "If you cannot find the answer to your inquiry here, please contact the Directorate of Admissions helpline or write directly to our helpdesk." })
    ] })
  ] });
}
function Brochure() {
  const brochures = [
    {
      id: "general-pg",
      title: "ANU General Prospectus (PG & Professional)",
      size: "4.5 MB",
      format: "PDF Document",
      description: "Comprehensive guide for postgraduate admissions, constituent college details, course seat matrices, and syllabus codes.",
      fileName: "ANU_General_Prospectus_2026-27.pdf"
    },
    {
      id: "btech-barch",
      title: "B.Tech & B.Arch Admission Booklet",
      size: "2.8 MB",
      format: "PDF Document",
      description: "Dedicated brochure for engineering and architecture admissions, campus labs facilities, and recent placements records.",
      fileName: "ANU_Engineering_Prospectus_2026-27.pdf"
    },
    {
      id: "distance-cde",
      title: "CDE Prospectus & Course Guide",
      size: "3.2 MB",
      format: "PDF Document",
      description: "Distance learning course guidelines, list of recognized regional study centers, fee payment schedules, and exams guidelines.",
      fileName: "ANUCDE_Admissions_Guide_2026.pdf"
    },
    {
      id: "intl-admissions",
      title: "International Students Leaflet",
      size: "1.9 MB",
      format: "PDF Document",
      description: "Application guidelines for foreign nationals, NRI candidate fee charts, English proficiency rules, and campus hostel manuals.",
      fileName: "ANU_International_Admissions_2026.pdf"
    }
  ];
  const [downloadStates, setDownloadStates] = reactExports.useState(
    {}
  );
  const handleDownload = (id, fileName) => {
    setDownloadStates((prev) => ({ ...prev, [id]: "loading" }));
    setTimeout(() => {
      setDownloadStates((prev) => ({ ...prev, [id]: "done" }));
      setTimeout(() => {
        setDownloadStates((prev) => ({ ...prev, [id]: "idle" }));
      }, 3e3);
    }, 1500);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-playfair text-3xl font-bold text-[var(--ink)]", children: "Brochure & Prospectus Downloads" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 h-1 w-20 bg-[var(--gold)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 rounded border border-[var(--rule)] bg-white p-8 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-lg leading-relaxed text-[#4a4235]", children: "Download our latest official publications to understand our academic structures, fee setups, and on-campus facilities. Always refer to the active admissions portal for the most up-to-date schedule changes." }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "grid gap-6 md:grid-cols-2", children: brochures.map((brochure) => {
      const downloadState = downloadStates[brochure.id] || "idle";
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded border border-[var(--rule)] bg-white p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group relative overflow-hidden",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 right-0 h-1 bg-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded bg-[var(--parchment)] flex items-center justify-center text-[var(--gold)] shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-5 w-5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-playfair text-lg font-bold text-[var(--ink)] group-hover:text-[var(--gold)] transition-colors", children: brochure.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-serif text-xs text-[var(--muted)] mt-0.5", children: [
                    brochure.format,
                    " • ",
                    brochure.size
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif mt-4 text-xs leading-relaxed text-[#4a4235]", children: brochure.description })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-4 border-t border-[var(--rule)]/60 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-xs text-[var(--muted)] italic", children: "Release: 2026 Cycle" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: () => handleDownload(brochure.id, brochure.fileName),
                  disabled: downloadState === "loading",
                  className: `flex items-center gap-2 rounded px-4 py-2 font-serif text-xs font-semibold transition-all focus:outline-none ${downloadState === "loading" ? "bg-[var(--parchment-dark)] text-[var(--muted)] cursor-not-allowed" : downloadState === "done" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-[var(--ink)] text-white hover:bg-[var(--ink-mid)]"}`,
                  children: [
                    downloadState === "loading" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin" }),
                      "Downloading..."
                    ] }),
                    downloadState === "done" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5 text-emerald-600" }),
                      "Downloaded!"
                    ] }),
                    downloadState === "idle" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-3.5 w-3.5" }),
                      "Download Brochure"
                    ] })
                  ]
                }
              )
            ] })
          ]
        },
        brochure.id
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "flex items-start gap-4 rounded border border-[var(--rule)] bg-[var(--parchment-dark)] p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "mt-0.5 h-6 w-6 shrink-0 text-[var(--gold)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-playfair text-lg font-bold text-[var(--ink)]", children: "Information Integrity Notice" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif mt-1 text-sm text-[var(--muted)] leading-relaxed", children: "The fee structures, seats allocation guidelines, and course requirements listed inside the brochures are subject to UGC regulations and government orders. Please double-check all active notifications on the university's primary admissions feed prior to final payment submission." })
      ] })
    ] })
  ] });
}
const VALID_PAGES = ["overview", "why-choose-us", "academic-calendar", "fee-structure", "scholarships", "how-to-apply", "eligibility-criteria", "affiliated-colleges", "helpdesk", "faqs", "brochure"];
function AdmissionsPage() {
  const {
    pageId
  } = Route$2.useParams();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(AdmissionsShell, { pageId, children: [
    pageId === "overview" && /* @__PURE__ */ jsxRuntimeExports.jsx(AdmissionsOverview, {}),
    pageId === "why-choose-us" && /* @__PURE__ */ jsxRuntimeExports.jsx(WhyChooseUs, {}),
    pageId === "academic-calendar" && /* @__PURE__ */ jsxRuntimeExports.jsx(AcademicCalendar, {}),
    pageId === "fee-structure" && /* @__PURE__ */ jsxRuntimeExports.jsx(FeeStructure, {}),
    pageId === "scholarships" && /* @__PURE__ */ jsxRuntimeExports.jsx(Scholarships, {}),
    pageId === "how-to-apply" && /* @__PURE__ */ jsxRuntimeExports.jsx(HowToApply, {}),
    pageId === "eligibility-criteria" && /* @__PURE__ */ jsxRuntimeExports.jsx(EligibilityCriteria, {}),
    pageId === "affiliated-colleges" && /* @__PURE__ */ jsxRuntimeExports.jsx(AffiliatedColleges, {}),
    pageId === "helpdesk" && /* @__PURE__ */ jsxRuntimeExports.jsx(Helpdesk, {}),
    pageId === "faqs" && /* @__PURE__ */ jsxRuntimeExports.jsx(Faqs, {}),
    pageId === "brochure" && /* @__PURE__ */ jsxRuntimeExports.jsx(Brochure, {}),
    !VALID_PAGES.includes(pageId) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-[40vh] items-center justify-center rounded border border-[var(--rule)] bg-white p-8 text-center shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-playfair text-2xl font-bold text-[var(--ink)]", children: "Page Under Construction" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 font-serif text-[var(--muted)]", children: [
        'The content for "',
        pageId.replace(/-/g, " "),
        '" is currently being prepared.'
      ] })
    ] }) })
  ] });
}
export {
  AdmissionsPage as component
};
