import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as collegeEngineeringImage, a as collegeSciencesImage, b as collegeArtsImage, d as collegePharmaImage, e as collegePhysicalEducationImage, f as collegeArchitectureImage } from "./College_Sciences-CzxKwAeu.mjs";
import { W as Wrench, F as FlaskConical, J as Palette, K as Pill, x as Trophy, B as Building2, G as GraduationCap, i as MapPin, p as BookOpen, r as ArrowUpRight, e as ArrowRight, C as CodeXml, M as Microscope, b as BriefcaseBusiness, U as Users, O as CalendarDays, N as Network, a as ScrollText, q as Bell, v as Leaf, Q as Sprout } from "../_libs/lucide-react.mjs";
const principalChLingaRajuImage = "/assets/ChLingaRaju-CnjHacSs.jpg";
const principalImage = "/assets/principal-DkPXCPRF.jpg";
const principalProfMSureshKumarImage = "/assets/principalprofmsureshkumar-CZB_fWwa.jpg";
const principalProfKVeeraiahImage = "/assets/profkveeraiahgaaru-BIHro07g.jpg";
const colleges = [
  {
    id: "sciences",
    name: "ANU College of Sciences",
    shortName: "Sciences",
    tagline: "Science. Curiosity. Impact.",
    details: "Research-led departments in life sciences, physical sciences and computational fields.",
    icon: FlaskConical,
    image: collegeSciencesImage,
    principalImage: principalProfKVeeraiahImage,
    principalName: "Prof. K. Veeraiah"
  },
  {
    id: "engineering",
    name: "ANU College of Engineering & Technology",
    shortName: "Engineering",
    tagline: "Innovate. Engineer. Lead.",
    details: "Programs across CSE, AI/ML, Data Science, ECE, EEE, Mechanical and Civil streams.",
    icon: CodeXml,
    image: collegeEngineeringImage,
    principalImage: principalChLingaRajuImage,
    principalName: "Ch. Linga Raju"
  },
  {
    id: "arts-commerce-law",
    name: "ANU College of Arts, Commerce & Law",
    shortName: "Arts & Law",
    tagline: "Humanities, commerce and justice.",
    details: "A broad academic home for languages, social sciences, commerce, management and law.",
    icon: GraduationCap,
    image: collegeArtsImage,
    principalImage: principalProfMSureshKumarImage,
    principalName: "Prof. M. Suresh Kumar"
  },
  {
    id: "pharmacy",
    name: "ANU College of Pharmaceutical Sciences",
    shortName: "Pharmacy",
    tagline: "Healing through science.",
    details: "Industry-aligned pharmacy education with modern laboratories and research pathways.",
    icon: Microscope,
    image: collegePharmaImage,
    principalImage: "None",
    principalName: "Dr. Karavadi Thejomoorthy"
  },
  {
    id: "architecture-planning",
    name: "ANU College of Architecture & Planning",
    shortName: "Architecture",
    tagline: "Designing tomorrow's cities.",
    details: "Design, planning and sustainable built-environment programs.",
    icon: Building2,
    image: collegeArchitectureImage,
    principalImage: "None",
    principalName: "College Principal"
  },
  {
    id: "physical-education-sports",
    name: "ANU College of Physical Education & Sports",
    shortName: "Sports",
    tagline: "Strength of body, spirit and mind.",
    details: "Physical education, coaching and sports sciences with active campus infrastructure.",
    icon: Trophy,
    image: collegePhysicalEducationImage,
    principalImage,
    principalName: "Dr. P. Johnson"
  }
];
const schools = [
  {
    id: "engineering",
    category: "Engineering",
    collegeName: "ANU College of Engineering & Technology",
    shortName: "Dr. YSR ANUCET",
    tagline: "Innovate. Engineer. Lead.",
    description: "A premier institution offering cutting-edge programmes across CSE, AI/ML, Data Science, Cyber Security, ECE, EEE, Mechanical and Civil engineering streams.",
    programmes: [
      "B.Tech CSE",
      "B.Tech AI & ML",
      "B.Tech Data Science",
      "B.Tech Cyber Security",
      "B.Tech ECE",
      "B.Tech EEE",
      "B.Tech Mechanical",
      "B.Tech Civil",
      "M.Tech (All Specializations)",
      "Ph.D Engineering"
    ],
    established: "2007",
    location: "Main Campus, Nagarjuna Nagar",
    icon: Wrench,
    image: collegeEngineeringImage,
    accent: "oklch(0.55 0.18 250)"
  },
  {
    id: "sciences",
    category: "Sciences",
    collegeName: "ANU College of Sciences",
    shortName: "Sciences",
    tagline: "Discover the truth in nature.",
    description: "Home to research-intensive departments in Physics, Chemistry, Mathematics, Biotechnology, Botany, Zoology and Environmental Sciences.",
    programmes: [
      "M.Sc Physics",
      "M.Sc Chemistry",
      "M.Sc Mathematics",
      "M.Sc Biotechnology",
      "M.Sc Botany",
      "M.Sc Zoology",
      "M.Sc Environmental Science",
      "Ph.D Sciences"
    ],
    established: "1976",
    location: "Main Campus, Nagarjuna Nagar",
    icon: FlaskConical,
    image: collegeSciencesImage,
    accent: "oklch(0.6 0.16 195)"
  },
  {
    id: "arts-commerce-law",
    category: "Arts, Commerce & Law",
    collegeName: "ANU College of Arts, Commerce & Law",
    shortName: "Arts & Law",
    tagline: "Where humanities meet justice.",
    description: "Offering distinguished programmes in Humanities, Languages, Commerce, Business Management, and a renowned three-year LL.B programme.",
    programmes: [
      "B.A Honours",
      "B.Com Honours",
      "M.A English",
      "M.A Telugu",
      "M.A Economics",
      "M.Com",
      "MBA",
      "LL.B (3 Year)",
      "LL.M",
      "Ph.D Humanities"
    ],
    established: "1976",
    location: "Main Campus, Nagarjuna Nagar",
    icon: Palette,
    image: collegeArtsImage,
    accent: "oklch(0.6 0.18 30)"
  },
  {
    id: "pharmacy",
    category: "Pharmacy",
    collegeName: "ANU College of Pharmaceutical Sciences",
    shortName: "Pharmacy",
    tagline: "Healing through science.",
    description: "A NAAC-accredited pharmacy college offering industry-aligned programmes with state-of-the-art research labs and pharmaceutical industry collaborations.",
    programmes: [
      "B.Pharmacy",
      "Pharm.D",
      "M.Pharmacy (Pharmaceutics)",
      "M.Pharmacy (Pharmacology)",
      "M.Pharmacy (Pharmaceutical Analysis)",
      "Ph.D Pharmaceutical Sciences"
    ],
    established: "1982",
    location: "Main Campus, Nagarjuna Nagar",
    icon: Pill,
    image: collegePharmaImage,
    accent: "oklch(0.6 0.16 150)"
  },
  {
    id: "physical-education-sports",
    category: "Physical Education & Sports",
    collegeName: "ANU College of Physical Education & Sports",
    shortName: "Sports Sciences",
    tagline: "Strength of body, spirit and mind.",
    description: "Producing national-level athletes, coaches and physical educators with world-class training infrastructure and a dedicated sports sciences research wing.",
    programmes: ["B.P.Ed", "M.P.Ed", "Diploma in Sports Coaching", "Ph.D Physical Education"],
    established: "1985",
    location: "Sports Complex, Nagarjuna Nagar",
    icon: Trophy,
    image: collegePhysicalEducationImage,
    accent: "oklch(0.65 0.17 60)"
  },
  {
    id: "architecture-planning",
    category: "Architecture & Planning",
    collegeName: "ANU College of Architecture & Planning",
    shortName: "Architecture",
    tagline: "Designing tomorrow's cities.",
    description: "Council of Architecture approved programmes blending design thinking, sustainable planning and contemporary technology to shape the built environment.",
    programmes: [
      "B.Arch (5 Year)",
      "M.Arch (Urban Design)",
      "M.Plan (Urban Planning)",
      "Ph.D Architecture"
    ],
    established: "2010",
    location: "Architecture Block, Nagarjuna Nagar",
    icon: Building2,
    image: collegeArchitectureImage,
    accent: "oklch(0.55 0.14 290)"
  }
];
const departmentsByCollege = {
  sciences: [
    {
      name: "Food and Nutritional Science",
      summary: "Nutrition, food science and health research.",
      icon: Leaf,
      color: "text-green-600"
    },
    {
      name: "Mathematics",
      summary: "Pure and applied mathematical sciences.",
      icon: BookOpen,
      color: "text-blue-600"
    },
    {
      name: "Physics",
      summary: "Matter, energy and advanced physics research.",
      icon: Microscope,
      color: "text-cyan-600"
    },
    {
      name: "Geology",
      summary: "Earth sciences and geological exploration.",
      icon: MapPin,
      color: "text-yellow-700"
    },
    {
      name: "Nano Technology",
      summary: "Advanced nanoscience and applications.",
      icon: Microscope,
      color: "text-violet-600"
    },
    {
      name: "Statistics",
      summary: "Data analysis and statistical modeling.",
      icon: Network,
      color: "text-indigo-600"
    },
    {
      name: "Electronics & Instrumentation",
      summary: "Instrumentation and electronics systems.",
      icon: Network,
      color: "text-purple-600"
    },
    {
      name: "Psychology",
      summary: "Human behavior and mental sciences.",
      icon: Users,
      color: "text-pink-600"
    },
    {
      name: "Zoology & Aquaculture",
      summary: "Animal sciences and aquaculture studies.",
      icon: Sprout,
      color: "text-emerald-600"
    },
    {
      name: "Bio Technology",
      summary: "Biological innovation and genetic sciences.",
      icon: FlaskConical,
      color: "text-green-700"
    },
    {
      name: "Chemistry",
      summary: "Chemical sciences and laboratory research.",
      icon: FlaskConical,
      color: "text-orange-600"
    },
    {
      name: "Computer Science & Engineering",
      summary: "Software systems and computational technologies.",
      icon: CodeXml,
      color: "text-sky-600"
    },
    {
      name: "Bio Chemistry",
      summary: "Life sciences at molecular level.",
      icon: Microscope,
      color: "text-red-600"
    },
    {
      name: "Botany and Microbiology",
      summary: "Plant sciences and microorganisms.",
      icon: Leaf,
      color: "text-lime-600"
    }
  ],
  "arts-commerce-law": [
    {
      name: "Dr. B.R. Ambedkar School of Legal Education and Research",
      summary: "Legal education and judicial studies.",
      icon: ScrollText,
      color: "text-slate-700"
    },
    {
      name: "Education",
      summary: "Teaching methodologies and educational sciences.",
      icon: GraduationCap,
      color: "text-blue-600"
    },
    {
      name: "Hindi",
      summary: "Hindi language and literature studies.",
      icon: BookOpen,
      color: "text-orange-600"
    },
    {
      name: "History and Archaeology",
      summary: "Historical studies and archaeology research.",
      icon: ScrollText,
      color: "text-amber-700"
    },
    {
      name: "Political Science and Public Administration",
      summary: "Politics, governance and administration.",
      icon: BriefcaseBusiness,
      color: "text-indigo-600"
    },
    {
      name: "Commerce & Business Administration",
      summary: "Business, finance and management studies.",
      icon: BriefcaseBusiness,
      color: "text-green-700"
    },
    {
      name: "Economics",
      summary: "Economic systems and policy studies.",
      icon: BriefcaseBusiness,
      color: "text-yellow-700"
    },
    {
      name: "English",
      summary: "English language and literary studies.",
      icon: BookOpen,
      color: "text-sky-700"
    },
    {
      name: "Journalism & Mass Communication",
      summary: "Media, journalism and communication studies.",
      icon: Bell,
      color: "text-red-600"
    },
    {
      name: "Telugu",
      summary: "Telugu language and cultural studies.",
      icon: BookOpen,
      color: "text-pink-700"
    },
    {
      name: "Mahayana Buddhist Studies",
      summary: "Buddhist philosophy, culture and historical studies.",
      icon: ScrollText,
      color: "text-orange-700"
    },
    {
      name: "MBA Hospital Administration",
      summary: "Healthcare systems and hospital management.",
      icon: BriefcaseBusiness,
      color: "text-red-600"
    },
    {
      name: "Department of Rural Development",
      summary: "Rural growth, policy and development studies.",
      icon: Users,
      color: "text-green-700"
    },
    {
      name: "Sociology and Social",
      summary: "Society, communities and social sciences.",
      icon: Users,
      color: "text-pink-600"
    },
    {
      name: "International Business Studies",
      summary: "Global business and international trade.",
      icon: BriefcaseBusiness,
      color: "text-indigo-700"
    },
    {
      name: "Department of Tourism and Hospitality Management",
      summary: "Tourism, hospitality and service management.",
      icon: MapPin,
      color: "text-cyan-700"
    },
    {
      name: "Human Resource Management",
      summary: "Workforce planning and organizational management.",
      icon: Users,
      color: "text-violet-700"
    }
  ],
  engineering: [
    {
      name: "Mechanical Engineering",
      summary: "Machines, manufacturing and mechanics.",
      icon: Wrench,
      color: "text-gray-700"
    },
    {
      name: "Electronics and Communication Engineering",
      summary: "Communication systems and electronics.",
      icon: Network,
      color: "text-violet-600"
    },
    {
      name: "Civil Engineering",
      summary: "Infrastructure and structural engineering.",
      icon: Building2,
      color: "text-yellow-700"
    },
    {
      name: "Basic Science and Humanities",
      summary: "Core sciences and humanities foundation.",
      icon: GraduationCap,
      color: "text-indigo-600"
    },
    {
      name: "Electrical and Electronics Engineering",
      summary: "Electrical systems and power engineering.",
      icon: Microscope,
      color: "text-orange-600"
    }
  ],
  pharmacy: [
    {
      name: "Pharmaceutical Analysis",
      summary: "Drug quality and analytical techniques.",
      icon: Pill,
      color: "text-blue-600"
    },
    {
      name: "Pharmaceutical Chemistry",
      summary: "Medicinal and pharmaceutical chemistry.",
      icon: FlaskConical,
      color: "text-purple-600"
    },
    {
      name: "Pharmaceutics",
      summary: "Drug formulation and delivery systems.",
      icon: Pill,
      color: "text-pink-600"
    },
    {
      name: "Pharmacology",
      summary: "Drug action and biological systems.",
      icon: Microscope,
      color: "text-red-600"
    },
    {
      name: "Industrial Pharmacy",
      summary: "Pharmaceutical manufacturing and production.",
      icon: Building2,
      color: "text-green-700"
    }
  ],
  "physical-education-sports": [],
  "architecture-planning": []
};
const collegePages = Object.fromEntries(
  colleges.map((college) => [
    college.id,
    {
      ...college,
      description: "A focused academic environment built around strong teaching, guided research, modern laboratories and career-ready learning.",
      established: "1976",
      stats: [
        { value: "1976", label: "Established", icon: CalendarDays },
        { value: "A+ Grade", label: "NAAC Accredited", icon: Trophy },
        { value: "3,000+", label: "Students", icon: Users },
        { value: "25+", label: "Labs", icon: FlaskConical },
        { value: "150+", label: "Faculty", icon: GraduationCap }
      ],
      departments: departmentsByCollege[college.id] ?? [],
      facilities: [
        {
          title: "Advanced Labs",
          text: "Specialized lab spaces for practical learning and guided experimentation.",
          icon: FlaskConical
        },
        {
          title: "Research Facilities",
          text: "Instrumentation, project support and faculty-led research mentoring.",
          icon: Microscope
        },
        {
          title: "Digital Learning",
          text: "Technology-enabled classrooms and academic resources for flexible learning.",
          icon: CodeXml
        },
        {
          title: "Collaboration Spaces",
          text: "Seminar rooms and shared spaces for workshops, projects and peer learning.",
          icon: Network
        }
      ],
      campusHighlights: [
        {
          title: "Labs",
          text: "Hands-on learning spaces for experiments and demonstrations.",
          icon: FlaskConical
        },
        {
          title: "Library",
          text: "Study resources, journals and quiet academic spaces.",
          icon: BookOpen
        },
        {
          title: "Student Life",
          text: "Clubs, mentoring and student-led academic communities.",
          icon: Users
        },
        {
          title: "Activities",
          text: "Seminars, workshops, competitions and campus events.",
          icon: CalendarDays
        }
      ],
      differentiators: [
        {
          title: "Academic Excellence",
          text: "Strong curriculum with continuous learning support.",
          icon: GraduationCap
        },
        {
          title: "Research & Innovation",
          text: "Faculty-guided projects connected to real problems.",
          icon: Microscope
        },
        {
          title: "Infrastructure",
          text: "Modern labs and learning spaces for practical work.",
          icon: Building2
        },
        {
          title: "Career Outcomes",
          text: "Internships, placements and skill-building support.",
          icon: BriefcaseBusiness
        }
      ],
      updates: [
        { date: "Apr 28", title: "Guest faculty notification released for 2026-27", tag: "NEW" },
        { date: "Apr 24", title: "Admissions open for selected honors programs", tag: "NEW" },
        {
          date: "Apr 18",
          title: "Examination time tables published for July 2026",
          tag: "UPDATED"
        },
        { date: "Apr 12", title: "Revised academic calendar for PG programmes", tag: "UPDATED" }
      ]
    }
  ])
);
function getCollegePage(collegeId) {
  return collegePages[collegeId] ?? collegePages.sciences;
}
function CollegeSection() {
  const [activeId, setActiveId] = reactExports.useState(schools[0].id);
  const active = schools.find((s) => s.id === activeId);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "colleges",
      className: "relative w-full overflow-hidden bg-gradient-to-b from-[oklch(0.985_0.005_250)] via-background to-[oklch(0.97_0.01_255)] py-20",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "pointer-events-none absolute inset-0 opacity-[0.035]",
            style: {
              backgroundImage: "linear-gradient(oklch(0.22 0.06 265) 1px, transparent 1px), linear-gradient(90deg, oklch(0.22 0.06 265) 1px, transparent 1px)",
              backgroundSize: "48px 48px"
            },
            "aria-hidden": true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mb-12 max-w-3xl text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-[oklch(0.84_0.08_45)] bg-[oklch(0.97_0.035_45)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[oklch(0.52_0.16_42)]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-3.5 w-3.5" }),
              "College & Programmes"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl font-bold tracking-tight text-[oklch(0.22_0.06_265)] md:text-4xl lg:text-5xl", children: "Explore Our Constituent Colleges" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base text-muted-foreground md:text-lg", children: "Six premier colleges. Sixty plus programmes. One legacy of academic excellence - select a discipline to dive into the courses, faculty and infrastructure that define it." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8 flex flex-wrap items-center justify-center gap-2 md:gap-3", children: schools.map((s) => {
            const Icon = s.icon;
            const isActive = s.id === activeId;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => setActiveId(s.id),
                className: `group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${isActive ? "border-transparent text-white shadow-lg" : "border-border bg-white/70 text-foreground hover:border-[oklch(0.84_0.08_45)] hover:bg-white"}`,
                style: isActive ? {
                  backgroundColor: s.accent,
                  boxShadow: `0 10px 30px -10px ${s.accent}`
                } : void 0,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s.category })
                ]
              },
              s.id
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-6 lg:grid-cols-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group relative overflow-hidden rounded-3xl border border-border bg-card shadow-[0_20px_60px_-20px_oklch(0.22_0.06_265/0.25)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] w-full overflow-hidden bg-muted", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: active.image,
                  alt: active.collegeName,
                  className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]",
                  onError: (e) => {
                    e.currentTarget.style.display = "none";
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-0 -z-10",
                  style: {
                    background: `linear-gradient(135deg, ${active.accent}, oklch(0.22 0.06 265))`
                  },
                  "aria-hidden": true
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[oklch(0.22_0.06_265)] backdrop-blur", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "h-2 w-2 rounded-full",
                    style: { backgroundColor: active.accent }
                  }
                ),
                "Established ",
                active.established
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 p-6 text-white md:p-8", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium uppercase tracking-wider text-white/80", children: active.shortName }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 text-2xl font-bold leading-tight md:text-3xl", children: active.collegeName }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 flex items-center gap-1.5 text-sm text-white/85", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5" }),
                  active.location
                ] })
              ] })
            ] }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col rounded-3xl border border-border bg-white p-6 shadow-[0_20px_60px_-20px_oklch(0.22_0.06_265/0.15)] md:p-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold italic", style: { color: active.accent }, children: [
                '"',
                active.tagline,
                '"'
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-base leading-relaxed text-foreground", children: active.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center gap-2 text-sm font-semibold text-[oklch(0.22_0.06_265)]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-4 w-4" }),
                  "Programmes Offered",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto rounded-full bg-[oklch(0.96_0.01_260)] px-2 py-0.5 text-xs font-bold text-[oklch(0.22_0.06_265)]", children: active.programmes.length })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: active.programmes.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "rounded-lg border border-border bg-[oklch(0.985_0.005_250)] px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-[oklch(0.84_0.08_45)] hover:bg-[oklch(0.98_0.025_45)]",
                    children: p
                  },
                  p
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex flex-col gap-3 pt-8 sm:flex-row", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: `/colleges/${active.id}`,
                    className: "group inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition-all hover:translate-y-[-1px]",
                    style: {
                      backgroundColor: active.accent,
                      boxShadow: `0 10px 25px -10px ${active.accent}`
                    },
                    children: [
                      "Visit College",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "/admissions/how-to-apply",
                    className: "inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-white px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-[oklch(0.97_0.01_260)]",
                    children: "Apply for Admission"
                  }
                )
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 rounded-2xl border border-border bg-white/80 px-6 py-4 text-sm text-muted-foreground backdrop-blur", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-[oklch(0.22_0.06_265)]", children: "6" }),
              " Constituent Colleges"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden h-4 w-px bg-border md:block" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-[oklch(0.22_0.06_265)]", children: "60+" }),
              " Programmes"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden h-4 w-px bg-border md:block" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-[oklch(0.22_0.06_265)]", children: "200+" }),
              " Specializations"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden h-4 w-px bg-border md:block" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-[oklch(0.22_0.06_265)]", children: "NAAC A+" }),
              " Accredited"
            ] })
          ] })
        ] })
      ]
    }
  );
}
function CollegeDetailPage({ collegeId = "sciences" }) {
  const college = getCollegePage(collegeId);
  const featuredDepartments = college.departments;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-white text-[#0B1F3A]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: college.image,
          alt: `${college.name} campus banner`,
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto grid min-h-[460px] max-w-7xl items-end gap-10 px-6 py-14 lg:px-8 lg:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#FDBA74] backdrop-blur-sm", children: college.shortName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-5 text-4xl font-black leading-tight tracking-tight md:text-6xl", children: college.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-base leading-7 text-white/80 md:text-lg", children: college.tagline }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm font-semibold tracking-wide text-[#FDBA74] md:text-base", children: college.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col gap-3 sm:flex-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "#departments",
              className: "inline-flex items-center justify-center gap-2 rounded-md bg-[#F97316] px-5 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#fb923c]",
              children: [
                "Browse Departments",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "#admissions",
              className: "inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10",
              children: [
                "Apply Now",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
              ]
            }
          )
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-8 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "section",
        {
          id: "leadership",
          className: "scroll-mt-24 overflow-hidden bg-white px-6 py-12 md:px-8 md:py-16",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-5xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 lg:grid-cols-[280px_1fr] lg:items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto w-full max-w-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-[24px] border border-[#E2E8F0] shadow-[0_12px_40px_-10px_rgba(11,31,58,0.15)]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: college.principalImage,
                  alt: college.principalName,
                  className: "h-[360px] w-full object-cover object-center transition-transform duration-700 hover:scale-105",
                  loading: "lazy"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/40 to-transparent px-5 py-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-[0.18em] text-[#60A5FA]", children: "Principal" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1.5 text-lg font-bold text-white", children: college.principalName }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-xs text-blue-100", children: college.shortName })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative space-y-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-[#BFDBFE] bg-[#F0F9FF] px-3.5 py-1.5 w-fit", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-3.5 w-3.5 text-[#3B82F6]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.14em] text-[#1E40AF]", children: "Leadership Message" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold leading-tight text-[#0B1F3A] md:text-3.5xl", children: "Message from Our Principal" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 border-l-4 border-[#F97316] pl-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-semibold leading-7 text-[#1F2937]", children: college.description || "Our institution is committed to building an academic environment rooted in excellence, discipline, innovation and student growth." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-6 text-[#6B7280]", children: "We continuously strive to empower learners with knowledge, research opportunities and values that prepare them to contribute meaningfully to society." })
              ] })
            ] })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "departments", className: "mt-10 scroll-mt-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end justify-between gap-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SectionEyebrow, { children: "Departments" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-2xl font-semibold", children: "Academic departments" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-[#6B7280]", children: [
            college.departments.length,
            " Departments"
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3", children: [
          " ",
          featuredDepartments.map((department) => /* @__PURE__ */ jsxRuntimeExports.jsx(DepartmentPreview, { department }, department.name))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "section",
        {
          id: "admissions",
          className: "mt-8 scroll-mt-24 rounded-lg bg-[#0B1F3A] px-6 py-6 text-white md:flex md:items-center md:justify-between md:gap-8",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold", children: "Ready to take the next step?" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-white/70", children: "Start your admission journey or schedule a campus conversation." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex flex-col gap-3 sm:flex-row md:mt-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "#",
                  className: "inline-flex items-center justify-center gap-2 rounded-md bg-[#F97316] px-5 py-2.5 text-sm font-semibold text-[#0B1F3A]",
                  children: [
                    "Apply Now ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "#",
                  className: "inline-flex items-center justify-center gap-2 rounded-md border border-white/35 px-5 py-2.5 text-sm font-semibold text-white",
                  children: [
                    "Schedule Tour ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                  ]
                }
              )
            ] })
          ]
        }
      )
    ] })
  ] });
}
function DepartmentPreview({ department }) {
  const departmentSlug = department.name.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href: `/departments/${departmentSlug}`,
      className: "group flex h-full flex-col rounded-lg border border-black/10 bg-white p-3 shadow-[0_18px_45px_-40px_rgba(11,31,58,0.45)] transition-all hover:-translate-y-0.5 hover:border-[#F97316]/70 hover:shadow-[0_22px_50px_-38px_rgba(11,31,58,0.55)]",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ImagePlaceholder, { label: department.name, className: "aspect-[16/10] w-full bg-[#D1D5DB]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-3 block text-center text-base font-semibold text-[#0B1F3A]", children: department.name })
      ]
    }
  );
}
function ImagePlaceholder({ label, className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `relative flex items-center justify-center overflow-hidden rounded-lg border border-dashed border-black/20 bg-[#E5E7EB] text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] ${className}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 opacity-60",
            style: {
              backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.55) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.55) 50%, rgba(255,255,255,0.55) 75%, transparent 75%, transparent)",
              backgroundSize: "22px 22px"
            },
            "aria-hidden": true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative rounded-full border border-black/10 bg-white/72 px-4 py-2 shadow-sm backdrop-blur", children: label })
      ]
    }
  );
}
function SectionEyebrow({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-[#F97316]", children });
}
export {
  CollegeSection as C,
  CollegeDetailPage as a,
  getCollegePage as g
};
