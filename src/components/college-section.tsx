import { useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Bell,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  ChevronDown,
  Code2,
  Download,
  FlaskConical,
  GraduationCap,
  Leaf,
  MapPin,
  Microscope,
  Network,
  Palette,
  Pill,
  Phone,
  ScrollText,
  Sprout,
  Trophy,
  Users,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import campusImage from "@/assets/bgg1.jpg";
import collegeArtsImage from "@/assets/Colleges/College_Arts.jpg";
import collegeArchitectureImage from "@/assets/Colleges/College_Architecture.jpeg";
import collegeEngineeringImage from "@/assets/Colleges/College_Engineering.jpg";
import collegePharmaImage from "@/assets/Colleges/College_Pharma.jpg";
import collegePhysicalEducationImage from "@/assets/Colleges/College_PhysicalEducation.jpg";
import collegeSciencesImage from "@/assets/Colleges/College_Sciences.jpg";
import principalChLingaRajuImage from "@/assets/Principals/ChLingaRaju.jpg";
import principalImage from "@/assets/Principals/principal.jpg";
import principalProfMSureshKumarImage from "@/assets/Principals/principalprofmsureshkumar.jpg";
import principalProfKVeeraiahImage from "@/assets/Principals/profkveeraiahgaaru.jpg";

type Intent = "courses" | "research" | "updates" | "life";

type IntentOption = {
  id: Intent;
  label: string;
  icon: LucideIcon;
};

type Department = {
  name: string;
  summary: string;
  icon: LucideIcon;
  color: string;
};

type CollegeSummary = {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  details: string;
  icon: LucideIcon;
  image: string;
  principalImage: string;
  principalName: string;
};

type StatItem = {
  value: string;
  label: string;
  icon: LucideIcon;
};

type PanelItem = {
  title: string;
  text: string;
  icon: LucideIcon;
};

type UpdateItem = {
  date: string;
  title: string;
  tag: "NEW" | "UPDATED";
};

type CollegePageData = CollegeSummary & {
  description: string;
  established: string;
  stats: StatItem[];
  departments: Department[];
  facilities: PanelItem[];
  campusHighlights: PanelItem[];
  differentiators: PanelItem[];
  updates: UpdateItem[];
};

type School = {
  id: string;
  category: string;
  collegeName: string;
  shortName: string;
  tagline: string;
  description: string;
  programmes: string[];
  established: string;
  location: string;
  icon: LucideIcon;
  /** Bundled image asset resolved by Vite. */
  image: string;
  accent: string;
};

const colleges: CollegeSummary[] = [
  {
    id: "sciences",
    name: "ANU College of Sciences",
    shortName: "Sciences",
    tagline: "Science. Curiosity. Impact.",
    details:
      "Research-led departments in life sciences, physical sciences and computational fields.",
    icon: FlaskConical,
    image: collegeSciencesImage,
    principalImage: principalProfKVeeraiahImage,
    principalName: "Prof. K. Veeraiah",
  },
  {
    id: "engineering",
    name: "ANU College of Engineering & Technology",
    shortName: "Engineering",
    tagline: "Innovate. Engineer. Lead.",
    details: "Programs across CSE, AI/ML, Data Science, ECE, EEE, Mechanical and Civil streams.",
    icon: Code2,
    image: collegeEngineeringImage,
    principalImage: principalChLingaRajuImage,
    principalName: "Ch. Linga Raju",
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
    principalName: "Prof. M. Suresh Kumar",
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
    principalName: "Dr. Karavadi Thejomoorthy",
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
    principalName: "College Principal",
  },
  {
    id: "physical-education-sports",
    name: "ANU College of Physical Education & Sports",
    shortName: "Sports",
    tagline: "Strength of body, spirit and mind.",
    details: "Physical education, coaching and sports sciences with active campus infrastructure.",
    icon: Trophy,
    image: collegePhysicalEducationImage,
    principalImage: principalImage,
    principalName: "Dr. P. Johnson",
  },
];

const schools: School[] = [
  {
    id: "engineering",
    category: "Engineering",
    collegeName: "ANU College of Engineering & Technology",
    shortName: "Dr. YSR ANUCET",
    tagline: "Innovate. Engineer. Lead.",
    description:
      "A premier institution offering cutting-edge programmes across CSE, AI/ML, Data Science, Cyber Security, ECE, EEE, Mechanical and Civil engineering streams.",
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
      "Ph.D Engineering",
    ],
    established: "2007",
    location: "Main Campus, Nagarjuna Nagar",
    icon: Wrench,
    image: collegeEngineeringImage,
    accent: "oklch(0.55 0.18 250)",
  },
  {
    id: "sciences",
    category: "Sciences",
    collegeName: "ANU College of Sciences",
    shortName: "Sciences",
    tagline: "Discover the truth in nature.",
    description:
      "Home to research-intensive departments in Physics, Chemistry, Mathematics, Biotechnology, Botany, Zoology and Environmental Sciences.",
    programmes: [
      "M.Sc Physics",
      "M.Sc Chemistry",
      "M.Sc Mathematics",
      "M.Sc Biotechnology",
      "M.Sc Botany",
      "M.Sc Zoology",
      "M.Sc Environmental Science",
      "Ph.D Sciences",
    ],
    established: "1976",
    location: "Main Campus, Nagarjuna Nagar",
    icon: FlaskConical,
    image: collegeSciencesImage,
    accent: "oklch(0.6 0.16 195)",
  },
  {
    id: "arts-commerce-law",
    category: "Arts, Commerce & Law",
    collegeName: "ANU College of Arts, Commerce & Law",
    shortName: "Arts & Law",
    tagline: "Where humanities meet justice.",
    description:
      "Offering distinguished programmes in Humanities, Languages, Commerce, Business Management, and a renowned three-year LL.B programme.",
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
      "Ph.D Humanities",
    ],
    established: "1976",
    location: "Main Campus, Nagarjuna Nagar",
    icon: Palette,
    image: collegeArtsImage,
    accent: "oklch(0.6 0.18 30)",
  },
  {
    id: "pharmacy",
    category: "Pharmacy",
    collegeName: "ANU College of Pharmaceutical Sciences",
    shortName: "Pharmacy",
    tagline: "Healing through science.",
    description:
      "A NAAC-accredited pharmacy college offering industry-aligned programmes with state-of-the-art research labs and pharmaceutical industry collaborations.",
    programmes: [
      "B.Pharmacy",
      "Pharm.D",
      "M.Pharmacy (Pharmaceutics)",
      "M.Pharmacy (Pharmacology)",
      "M.Pharmacy (Pharmaceutical Analysis)",
      "Ph.D Pharmaceutical Sciences",
    ],
    established: "1982",
    location: "Main Campus, Nagarjuna Nagar",
    icon: Pill,
    image: collegePharmaImage,
    accent: "oklch(0.6 0.16 150)",
  },
  {
    id: "physical-education-sports",
    category: "Physical Education & Sports",
    collegeName: "ANU College of Physical Education & Sports",
    shortName: "Sports Sciences",
    tagline: "Strength of body, spirit and mind.",
    description:
      "Producing national-level athletes, coaches and physical educators with world-class training infrastructure and a dedicated sports sciences research wing.",
    programmes: ["B.P.Ed", "M.P.Ed", "Diploma in Sports Coaching", "Ph.D Physical Education"],
    established: "1985",
    location: "Sports Complex, Nagarjuna Nagar",
    icon: Trophy,
    image: collegePhysicalEducationImage,
    accent: "oklch(0.65 0.17 60)",
  },
  {
    id: "architecture-planning",
    category: "Architecture & Planning",
    collegeName: "ANU College of Architecture & Planning",
    shortName: "Architecture",
    tagline: "Designing tomorrow's cities.",
    description:
      "Council of Architecture approved programmes blending design thinking, sustainable planning and contemporary technology to shape the built environment.",
    programmes: [
      "B.Arch (5 Year)",
      "M.Arch (Urban Design)",
      "M.Plan (Urban Planning)",
      "Ph.D Architecture",
    ],
    established: "2010",
    location: "Architecture Block, Nagarjuna Nagar",
    icon: Building2,
    image: collegeArchitectureImage,
    accent: "oklch(0.55 0.14 290)",
  },
];

const intentOptions: IntentOption[] = [
  { id: "courses", label: "Explore Courses", icon: BookOpen },
  { id: "research", label: "Research & Labs", icon: FlaskConical },
  { id: "updates", label: "Latest Updates", icon: Bell },
  { id: "life", label: "Campus Life", icon: Users },
];

const stats = [
  { value: "1976", label: "Established" },
  { value: "A+ Grade", label: "NAAC Accredited" },
  { value: "3,000+", label: "Students" },
  { value: "25+", label: "Well-equipped Labs" },
  { value: "150+", label: "Faculty Members" },
];

const departmentsByCollege: Record<string, Department[]> = {
  sciences: [
    {
      name: "Food and Nutritional Science",
      summary: "Nutrition, food science and health research.",
      icon: Leaf,
      color: "text-green-600",
    },
    {
      name: "Mathematics",
      summary: "Pure and applied mathematical sciences.",
      icon: BookOpen,
      color: "text-blue-600",
    },
    {
      name: "Physics",
      summary: "Matter, energy and advanced physics research.",
      icon: Microscope,
      color: "text-cyan-600",
    },
    {
      name: "Geology",
      summary: "Earth sciences and geological exploration.",
      icon: MapPin,
      color: "text-yellow-700",
    },
    {
      name: "Nano Technology",
      summary: "Advanced nanoscience and applications.",
      icon: Microscope,
      color: "text-violet-600",
    },
    {
      name: "Statistics",
      summary: "Data analysis and statistical modeling.",
      icon: Network,
      color: "text-indigo-600",
    },
    {
      name: "Electronics & Instrumentation",
      summary: "Instrumentation and electronics systems.",
      icon: Network,
      color: "text-purple-600",
    },
    {
      name: "Psychology",
      summary: "Human behavior and mental sciences.",
      icon: Users,
      color: "text-pink-600",
    },
    {
      name: "Zoology & Aquaculture",
      summary: "Animal sciences and aquaculture studies.",
      icon: Sprout,
      color: "text-emerald-600",
    },
    {
      name: "Bio Technology",
      summary: "Biological innovation and genetic sciences.",
      icon: FlaskConical,
      color: "text-green-700",
    },
    {
      name: "Chemistry",
      summary: "Chemical sciences and laboratory research.",
      icon: FlaskConical,
      color: "text-orange-600",
    },
    {
      name: "Computer Science & Engineering",
      summary: "Software systems and computational technologies.",
      icon: Code2,
      color: "text-sky-600",
    },
    {
      name: "Bio Chemistry",
      summary: "Life sciences at molecular level.",
      icon: Microscope,
      color: "text-red-600",
    },
    {
      name: "Botany and Microbiology",
      summary: "Plant sciences and microorganisms.",
      icon: Leaf,
      color: "text-lime-600",
    },
  ],

  "arts-commerce-law": [
    {
      name: "Dr. B.R. Ambedkar School of Legal Education and Research",
      summary: "Legal education and judicial studies.",
      icon: ScrollText,
      color: "text-slate-700",
    },
    {
      name: "Education",
      summary: "Teaching methodologies and educational sciences.",
      icon: GraduationCap,
      color: "text-blue-600",
    },
    {
      name: "Hindi",
      summary: "Hindi language and literature studies.",
      icon: BookOpen,
      color: "text-orange-600",
    },
    {
      name: "History and Archaeology",
      summary: "Historical studies and archaeology research.",
      icon: ScrollText,
      color: "text-amber-700",
    },
    {
      name: "Political Science and Public Administration",
      summary: "Politics, governance and administration.",
      icon: BriefcaseBusiness,
      color: "text-indigo-600",
    },
    {
      name: "Commerce & Business Administration",
      summary: "Business, finance and management studies.",
      icon: BriefcaseBusiness,
      color: "text-green-700",
    },
    {
      name: "Economics",
      summary: "Economic systems and policy studies.",
      icon: BriefcaseBusiness,
      color: "text-yellow-700",
    },
    {
      name: "English",
      summary: "English language and literary studies.",
      icon: BookOpen,
      color: "text-sky-700",
    },
    {
      name: "Journalism & Mass Communication",
      summary: "Media, journalism and communication studies.",
      icon: Bell,
      color: "text-red-600",
    },
    {
      name: "Telugu",
      summary: "Telugu language and cultural studies.",
      icon: BookOpen,
      color: "text-pink-700",
    },
    {
      name: "Mahayana Buddhist Studies",
      summary: "Buddhist philosophy, culture and historical studies.",
      icon: ScrollText,
      color: "text-orange-700",
    },
    {
      name: "MBA Hospital Administration",
      summary: "Healthcare systems and hospital management.",
      icon: BriefcaseBusiness,
      color: "text-red-600",
    },
    {
      name: "Department of Rural Development",
      summary: "Rural growth, policy and development studies.",
      icon: Users,
      color: "text-green-700",
    },
    {
      name: "Sociology and Social",
      summary: "Society, communities and social sciences.",
      icon: Users,
      color: "text-pink-600",
    },
    {
      name: "International Business Studies",
      summary: "Global business and international trade.",
      icon: BriefcaseBusiness,
      color: "text-indigo-700",
    },
    {
      name: "Department of Tourism and Hospitality Management",
      summary: "Tourism, hospitality and service management.",
      icon: MapPin,
      color: "text-cyan-700",
    },
    {
      name: "Human Resource Management",
      summary: "Workforce planning and organizational management.",
      icon: Users,
      color: "text-violet-700",
    },
  ],

  engineering: [
    {
      name: "Mechanical Engineering",
      summary: "Machines, manufacturing and mechanics.",
      icon: Wrench,
      color: "text-gray-700",
    },
    {
      name: "Electronics and Communication Engineering",
      summary: "Communication systems and electronics.",
      icon: Network,
      color: "text-violet-600",
    },
    {
      name: "Civil Engineering",
      summary: "Infrastructure and structural engineering.",
      icon: Building2,
      color: "text-yellow-700",
    },
    {
      name: "Basic Science and Humanities",
      summary: "Core sciences and humanities foundation.",
      icon: GraduationCap,
      color: "text-indigo-600",
    },
    {
      name: "Electrical and Electronics Engineering",
      summary: "Electrical systems and power engineering.",
      icon: Microscope,
      color: "text-orange-600",
    },
  ],

  pharmacy: [
    {
      name: "Pharmaceutical Analysis",
      summary: "Drug quality and analytical techniques.",
      icon: Pill,
      color: "text-blue-600",
    },
    {
      name: "Pharmaceutical Chemistry",
      summary: "Medicinal and pharmaceutical chemistry.",
      icon: FlaskConical,
      color: "text-purple-600",
    },
    {
      name: "Pharmaceutics",
      summary: "Drug formulation and delivery systems.",
      icon: Pill,
      color: "text-pink-600",
    },
    {
      name: "Pharmacology",
      summary: "Drug action and biological systems.",
      icon: Microscope,
      color: "text-red-600",
    },
    {
      name: "Industrial Pharmacy",
      summary: "Pharmaceutical manufacturing and production.",
      icon: Building2,
      color: "text-green-700",
    },
  ],

  "physical-education-sports": [],

  "architecture-planning": [],
};

const pillars = [
  {
    title: "Innovation",
    text: "Curriculum and labs built around practical scientific problem solving.",
    icon: GraduationCap,
  },
  {
    title: "Research",
    text: "Faculty-led projects, publications and interdisciplinary lab access.",
    icon: Microscope,
  },
  {
    title: "Career Outcomes",
    text: "Internships, industry exposure and placement preparation from day one.",
    icon: BriefcaseBusiness,
  },
];

const updates = [
  {
    date: "Apr 28",
    title: "Guest Faculty Positions in CSE, AI & ML, Data Science and Cyber Security",
    tag: "New",
  },
  {
    date: "Apr 24",
    title: "B.Sc Honours in Fire and Industrial Safety - Admissions Open",
    tag: "New",
  },
  {
    date: "Apr 18",
    title: "B.Tech 2nd Year and 3rd Year Examinations Time-Table, July 2026",
    tag: "Exam",
  },
  {
    date: "Apr 12",
    title: "Revised Academic Calendar for PG Programmes 2026-27",
    tag: "Updated",
  },
];

const quickLinks = [
  { label: "Results", icon: Trophy },
  { label: "Notifications", icon: Bell },
  { label: "Syllabus", icon: BookOpen },
  { label: "Time Tables", icon: CalendarDays },
  { label: "Examinations", icon: ScrollText },
  { label: "Admissions", icon: GraduationCap },
  { label: "Downloads", icon: Download },
  { label: "Contact Us", icon: Phone },
];

const intentContent = {
  courses: {
    eyebrow: "Programs",
    title: "Choose your field of interest",
    text: "Start with the most requested departments, then expand only when you need the full list.",
  },
  research: {
    eyebrow: "Research & Labs",
    title: "Work where ideas become evidence",
    text: "Research groups, instrumentation labs and guided projects support scientific inquiry across disciplines.",
  },
  updates: {
    eyebrow: "Latest Updates",
    title: "Everything important, ordered by time",
    text: "Admissions, results, examinations and academic notices appear as a simple timeline.",
  },
  life: {
    eyebrow: "Campus Life",
    title: "A campus built for learning beyond classrooms",
    text: "Libraries, clubs, sports, seminars and student support create a fuller university experience.",
  },
} satisfies Record<Intent, { eyebrow: string; title: string; text: string }>;

const collegePages: Record<string, CollegePageData> = Object.fromEntries(
  colleges.map((college) => [
    college.id,
    {
      ...college,
      description:
        "A focused academic environment built around strong teaching, guided research, modern laboratories and career-ready learning.",
      established: "1976",
      stats: [
        { value: "1976", label: "Established", icon: CalendarDays },
        { value: "A+ Grade", label: "NAAC Accredited", icon: Trophy },
        { value: "3,000+", label: "Students", icon: Users },
        { value: "25+", label: "Labs", icon: FlaskConical },
        { value: "150+", label: "Faculty", icon: GraduationCap },
      ],
      departments: departmentsByCollege[college.id] ?? [],
      facilities: [
        {
          title: "Advanced Labs",
          text: "Specialized lab spaces for practical learning and guided experimentation.",
          icon: FlaskConical,
        },
        {
          title: "Research Facilities",
          text: "Instrumentation, project support and faculty-led research mentoring.",
          icon: Microscope,
        },
        {
          title: "Digital Learning",
          text: "Technology-enabled classrooms and academic resources for flexible learning.",
          icon: Code2,
        },
        {
          title: "Collaboration Spaces",
          text: "Seminar rooms and shared spaces for workshops, projects and peer learning.",
          icon: Network,
        },
      ],
      campusHighlights: [
        {
          title: "Labs",
          text: "Hands-on learning spaces for experiments and demonstrations.",
          icon: FlaskConical,
        },
        {
          title: "Library",
          text: "Study resources, journals and quiet academic spaces.",
          icon: BookOpen,
        },
        {
          title: "Student Life",
          text: "Clubs, mentoring and student-led academic communities.",
          icon: Users,
        },
        {
          title: "Activities",
          text: "Seminars, workshops, competitions and campus events.",
          icon: CalendarDays,
        },
      ],
      differentiators: [
        {
          title: "Academic Excellence",
          text: "Strong curriculum with continuous learning support.",
          icon: GraduationCap,
        },
        {
          title: "Research & Innovation",
          text: "Faculty-guided projects connected to real problems.",
          icon: Microscope,
        },
        {
          title: "Infrastructure",
          text: "Modern labs and learning spaces for practical work.",
          icon: Building2,
        },
        {
          title: "Career Outcomes",
          text: "Internships, placements and skill-building support.",
          icon: BriefcaseBusiness,
        },
      ],
      updates: [
        { date: "Apr 28", title: "Guest faculty notification released for 2026-27", tag: "NEW" },
        { date: "Apr 24", title: "Admissions open for selected honors programs", tag: "NEW" },
        {
          date: "Apr 18",
          title: "Examination time tables published for July 2026",
          tag: "UPDATED",
        },
        { date: "Apr 12", title: "Revised academic calendar for PG programmes", tag: "UPDATED" },
      ],
    },
  ]),
) as Record<string, CollegePageData>;

export function getCollegePage(collegeId: string): CollegePageData {
  return collegePages[collegeId] ?? collegePages.sciences;
}

export function CollegeSection() {
  const [activeId, setActiveId] = useState<string>(schools[0].id);
  const active = schools.find((s) => s.id === activeId)!;

  return (
    <section
      id="colleges"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[oklch(0.985_0.005_250)] via-background to-[oklch(0.97_0.01_255)] py-20"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.22 0.06 265) 1px, transparent 1px), linear-gradient(90deg, oklch(0.22 0.06 265) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.84_0.08_45)] bg-[oklch(0.97_0.035_45)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[oklch(0.52_0.16_42)]">
            <GraduationCap className="h-3.5 w-3.5" />
            College &amp; Programmes
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[oklch(0.22_0.06_265)] md:text-4xl lg:text-5xl">
            Explore Our Constituent Colleges
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Six premier colleges. Sixty plus programmes. One legacy of academic excellence - select
            a discipline to dive into the courses, faculty and infrastructure that define it.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {schools.map((s) => {
            const Icon = s.icon;
            const isActive = s.id === activeId;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveId(s.id)}
                className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "border-transparent text-white shadow-lg"
                    : "border-border bg-white/70 text-foreground hover:border-[oklch(0.84_0.08_45)] hover:bg-white"
                }`}
                style={
                  isActive
                    ? {
                        backgroundColor: s.accent,
                        boxShadow: `0 10px 30px -10px ${s.accent}`,
                      }
                    : undefined
                }
              >
                <Icon className="h-4 w-4" />
                <span>{s.category}</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-[0_20px_60px_-20px_oklch(0.22_0.06_265/0.25)]">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                <img
                  src={active.image}
                  alt={active.collegeName}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                <div
                  className="absolute inset-0 -z-10"
                  style={{
                    background: `linear-gradient(135deg, ${active.accent}, oklch(0.22 0.06 265))`,
                  }}
                  aria-hidden
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[oklch(0.22_0.06_265)] backdrop-blur">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: active.accent }}
                  />
                  Established {active.established}
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
                  <p className="text-sm font-medium uppercase tracking-wider text-white/80">
                    {active.shortName}
                  </p>
                  <h3 className="mt-1 text-2xl font-bold leading-tight md:text-3xl">
                    {active.collegeName}
                  </h3>
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-white/85">
                    <MapPin className="h-3.5 w-3.5" />
                    {active.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="flex h-full flex-col rounded-3xl border border-border bg-white p-6 shadow-[0_20px_60px_-20px_oklch(0.22_0.06_265/0.15)] md:p-8">
              <p className="text-sm font-semibold italic" style={{ color: active.accent }}>
                "{active.tagline}"
              </p>
              <p className="mt-3 text-base leading-relaxed text-foreground">{active.description}</p>

              <div className="mt-6">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-[oklch(0.22_0.06_265)]">
                  <BookOpen className="h-4 w-4" />
                  Programmes Offered
                  <span className="ml-auto rounded-full bg-[oklch(0.96_0.01_260)] px-2 py-0.5 text-xs font-bold text-[oklch(0.22_0.06_265)]">
                    {active.programmes.length}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {active.programmes.map((p) => (
                    <span
                      key={p}
                      className="rounded-lg border border-border bg-[oklch(0.985_0.005_250)] px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-[oklch(0.84_0.08_45)] hover:bg-[oklch(0.98_0.025_45)]"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex flex-col gap-3 pt-8 sm:flex-row">
                <a
                  href={`/colleges/${active.id}`}
                  className="group inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition-all hover:translate-y-[-1px]"
                  style={{
                    backgroundColor: active.accent,
                    boxShadow: `0 10px 25px -10px ${active.accent}`,
                  }}
                >
                  Visit College
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="/admissions/how-to-apply"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-white px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-[oklch(0.97_0.01_260)]"
                >
                  Apply for Admission
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 rounded-2xl border border-border bg-white/80 px-6 py-4 text-sm text-muted-foreground backdrop-blur">
          <span>
            <strong className="text-[oklch(0.22_0.06_265)]">6</strong> Constituent Colleges
          </span>
          <span className="hidden h-4 w-px bg-border md:block" />
          <span>
            <strong className="text-[oklch(0.22_0.06_265)]">60+</strong> Programmes
          </span>
          <span className="hidden h-4 w-px bg-border md:block" />
          <span>
            <strong className="text-[oklch(0.22_0.06_265)]">200+</strong> Specializations
          </span>
          <span className="hidden h-4 w-px bg-border md:block" />
          <span>
            <strong className="text-[oklch(0.22_0.06_265)]">NAAC A+</strong> Accredited
          </span>
        </div>
      </div>
    </section>
  );
}

export function CollegeDetailPage({ collegeId = "sciences" }: { collegeId?: string }) {
  const college = getCollegePage(collegeId);
  const featuredDepartments = college.departments;

  return (
    <section className="bg-white text-[#0B1F3A]">
      <div className="relative overflow-hidden text-white">
        <img
          src={college.image}
          alt={`${college.name} campus banner`}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div
          className="absolute inset-0 bg-[linear-gradient(110deg,rgba(7,20,40,0.9)_0%,rgba(10,35,70,0.76)_45%,rgba(15,118,110,0.28)_100%)]"
          aria-hidden
        />

        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.18),transparent_30%)]"
          aria-hidden
        />

        <div className="relative mx-auto grid min-h-[460px] max-w-7xl items-end gap-10 px-6 py-14 lg:px-8 lg:py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#FDBA74] backdrop-blur-sm">
              {college.shortName}
            </div>

            <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight md:text-6xl">
              {college.name}
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
              {college.tagline}
            </p>

            <p className="mt-4 text-sm font-semibold tracking-wide text-[#FDBA74] md:text-base">
              {college.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#departments"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#F97316] px-5 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#fb923c]"
              >
                Browse Departments
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#admissions"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                Apply Now
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <nav className="sticky top-0 z-20 border-b border-black/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-4 overflow-x-auto px-6 py-3 text-sm font-semibold text-[#0B1F3A] lg:px-8">
          <a href="#departments" className="whitespace-nowrap hover:text-[#F97316]">Departments</a>
          <a href="#admissions" className="whitespace-nowrap hover:text-[#F97316]">Admissions</a>
          <a href="#leadership" className="whitespace-nowrap hover:text-[#F97316]">Leadership</a>
        </div>
      </nav> */}

      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <section
          id="leadership"
          className="scroll-mt-24 overflow-hidden bg-white px-6 py-12 md:px-8 md:py-16"
        >
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:items-center">
              {/* Image Side */}
              <div className="relative mx-auto w-full max-w-xs">
                <div className="relative overflow-hidden rounded-[24px] border border-[#E2E8F0] shadow-[0_12px_40px_-10px_rgba(11,31,58,0.15)]">
                  <img
                    src={college.principalImage}
                    alt={college.principalName}
                    className="h-[360px] w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/40 to-transparent px-5 py-5">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#60A5FA]">
                      Principal
                    </p>
                    <h3 className="mt-1.5 text-lg font-bold text-white">{college.principalName}</h3>
                    <p className="mt-0.5 text-xs text-blue-100">{college.shortName}</p>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="relative space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#BFDBFE] bg-[#F0F9FF] px-3.5 py-1.5 w-fit">
                  <GraduationCap className="h-3.5 w-3.5 text-[#3B82F6]" />
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1E40AF]">
                    Leadership Message
                  </span>
                </div>

                <div>
                  <h2 className="text-3xl font-bold leading-tight text-[#0B1F3A] md:text-3.5xl">
                    Message from Our Principal
                  </h2>
                </div>

                <div className="space-y-3 border-l-4 border-[#F97316] pl-5">
                  <p className="text-base font-semibold leading-7 text-[#1F2937]">
                    {college.description ||
                      "Our institution is committed to building an academic environment rooted in excellence, discipline, innovation and student growth."}
                  </p>
                  <p className="text-sm leading-6 text-[#6B7280]">
                    We continuously strive to empower learners with knowledge, research
                    opportunities and values that prepare them to contribute meaningfully to
                    society.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="departments" className="mt-10 scroll-mt-24">
          <div className="flex items-end justify-between gap-5">
            <div>
              <SectionEyebrow>Departments</SectionEyebrow>
              <h2 className="mt-2 text-2xl font-semibold">Academic departments</h2>
              <p className="mt-1 text-sm text-[#6B7280]">
                {college.departments.length} Departments
              </p>
            </div>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {" "}
            {featuredDepartments.map((department) => (
              <DepartmentPreview key={department.name} department={department} />
            ))}
          </div>
        </section>

        <section
          id="admissions"
          className="mt-8 scroll-mt-24 rounded-lg bg-[#0B1F3A] px-6 py-6 text-white md:flex md:items-center md:justify-between md:gap-8"
        >
          <div>
            <h2 className="text-2xl font-semibold">Ready to take the next step?</h2>
            <p className="mt-2 text-sm text-white/70">
              Start your admission journey or schedule a campus conversation.
            </p>
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row md:mt-0">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#F97316] px-5 py-2.5 text-sm font-semibold text-[#0B1F3A]"
            >
              Apply Now <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/35 px-5 py-2.5 text-sm font-semibold text-white"
            >
              Schedule Tour <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}

function InteractionPanel({
  activeIntent,
  college,
}: {
  activeIntent: Intent;
  college: CollegePageData;
}) {
  const panelTitle = intentContent[activeIntent].title;
  const panelText = intentContent[activeIntent].text;
  const items =
    activeIntent === "courses"
      ? college.departments.slice(0, 4).map((department) => ({
          title: department.name,
          text: department.summary,
          icon: department.icon,
        }))
      : activeIntent === "research"
        ? college.facilities
        : activeIntent === "life"
          ? college.campusHighlights
          : college.updates.map((update) => ({
              title: update.title,
              text: `${update.date}, 2026 - ${update.tag}`,
              icon: Bell,
            }));

  return (
    <section className="-mt-28 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_28px_90px_-52px_rgba(11,31,58,0.65)]">
      <div className="h-1.5 bg-[linear-gradient(90deg,#0B1F3A,#F97316,#0B1F3A)]" aria-hidden />
      <div className="p-6 md:p-8">
        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-stretch">
          <div>
            <span className="inline-flex rounded-full bg-[#F8F6F2] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0B1F3A]/70">
              Selected pathway
            </span>
            <SectionEyebrow>{intentContent[activeIntent].eyebrow}</SectionEyebrow>
            <h2 className="mt-3 text-3xl font-semibold">{panelTitle}</h2>
            <p className="mt-3 text-sm leading-7 text-[#6B7280]">{panelText}</p>
          </div>
          <div
            key={activeIntent}
            className="grid gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300 sm:grid-cols-2 sm:items-stretch"
          >
            {items.map((item) => (
              <InfoTile key={item.title} item={item} compact />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar({ stats }: { stats: StatItem[] }) {
  return (
    <section className="mt-8 grid overflow-hidden rounded-2xl border border-black/10 bg-white/70 shadow-[0_24px_70px_-58px_rgba(11,31,58,0.45)] backdrop-blur md:grid-cols-5">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="flex items-center justify-center gap-3 border-b border-black/10 px-4 py-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B1F3A] text-[#FDBA74]">
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-lg font-semibold text-[#0B1F3A]">{stat.value}</p>
              <p className="text-xs text-[#6B7280]">{stat.label}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

function InfoTile({ item, compact = false }: { item: PanelItem; compact?: boolean }) {
  const Icon = item.icon;
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-lg border border-black/10 bg-white shadow-[0_18px_45px_-40px_rgba(11,31,58,0.45)] transition-all hover:-translate-y-0.5 hover:border-[#F97316]/70 ${compact ? "p-4" : "p-5"}`}
    >
      <span
        className="absolute inset-x-0 top-0 h-1 bg-[#F97316] opacity-0 transition-opacity group-hover:opacity-100"
        aria-hidden
      />
      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[#FFF7ED] text-[#F97316]">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-3 text-sm font-semibold text-[#0B1F3A]">{item.title}</h3>
      <p className="mt-1.5 text-xs leading-5 text-[#6B7280]">{item.text}</p>
    </article>
  );
}

function DepartmentPreview({ department }: { department: Department }) {
  const departmentSlug = department.name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  return (
    <a
      href={`/departments/${departmentSlug}`}
      className="group flex h-full flex-col rounded-lg border border-black/10 bg-white p-3 shadow-[0_18px_45px_-40px_rgba(11,31,58,0.45)] transition-all hover:-translate-y-0.5 hover:border-[#F97316]/70 hover:shadow-[0_22px_50px_-38px_rgba(11,31,58,0.55)]"
    >
      <ImagePlaceholder label={department.name} className="aspect-[16/10] w-full bg-[#D1D5DB]" />
      <span className="mt-3 block text-center text-base font-semibold text-[#0B1F3A]">
        {department.name}
      </span>
    </a>
  );
}

function MediaTile({ item }: { item: PanelItem }) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-black/10 bg-white p-3 shadow-[0_18px_45px_-38px_rgba(11,31,58,0.45)] transition-all hover:-translate-y-0.5 hover:border-[#F97316]/70">
      <ImagePlaceholder label={item.title} className="aspect-[4/3] bg-[#D1D5DB]" />
      <h3 className="mt-4 text-base font-semibold text-[#0B1F3A]">{item.title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#6B7280]">{item.text}</p>
    </article>
  );
}

function AnnouncementsTimeline({ updates }: { updates: UpdateItem[] }) {
  return (
    <section className="rounded-lg border border-black/10 bg-white p-6">
      <div className="flex items-center justify-between gap-4">
        <SectionEyebrow>Announcements</SectionEyebrow>
        <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B1F3A]">
          View All Updates <ArrowRight className="h-4 w-4" />
        </a>
      </div>
      <ol className="mt-6 space-y-5">
        {updates.slice(0, 4).map((update) => (
          <li key={update.title} className="grid grid-cols-[76px_1fr_auto] gap-4">
            <time className="text-sm font-semibold text-[#F97316]">{update.date}</time>
            <p className="border-l border-black/10 pl-5 text-sm font-medium leading-6 text-[#0B1F3A]">
              {update.title}
            </p>
            <span className="h-fit rounded-full bg-[#F8F6F2] px-2 py-1 text-[10px] font-bold text-[#0B1F3A]">
              {update.tag}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}

function QuickActions() {
  const actions = [
    { label: "Results", icon: Trophy },
    { label: "Notifications", icon: Bell },
    { label: "Syllabus", icon: BookOpen },
    { label: "Admissions", icon: GraduationCap },
    { label: "Time Tables", icon: CalendarDays },
    { label: "Contact", icon: Phone },
  ];

  return (
    <section className="rounded-lg border border-black/10 bg-white p-6">
      <SectionEyebrow>Quick Actions</SectionEyebrow>
      <div className="mt-5 grid grid-cols-2 gap-3">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <a
              key={action.label}
              href="#"
              className="flex min-h-20 flex-col items-center justify-center gap-2 rounded-md border border-black/10 text-center text-sm font-semibold text-[#0B1F3A] transition-colors hover:border-[#F97316] hover:bg-[#FFF7ED]"
            >
              <Icon className="h-5 w-5 text-[#F97316]" />
              {action.label}
            </a>
          );
        })}
      </div>
    </section>
  );
}

function ImagePlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-lg border border-dashed border-black/20 bg-[#E5E7EB] text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280] ${className}`}
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(255,255,255,0.55) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.55) 50%, rgba(255,255,255,0.55) 75%, transparent 75%, transparent)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden
      />
      <span className="relative rounded-full border border-black/10 bg-white/72 px-4 py-2 shadow-sm backdrop-blur">
        {label}
      </span>
    </div>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F97316]">{children}</p>
  );
}
/*
          {intentOptions.map((option) => {
            const Icon = option.icon;
            const isActive = activeIntent === option.id;

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setActiveIntent(option.id)}
                className={`group flex min-h-[64px] items-center justify-between rounded-lg border px-5 text-left transition-colors ${
                  isActive
                    ? "border-[oklch(0.72_0.13_75)] bg-[oklch(0.985_0.025_75)] text-[oklch(0.43_0.12_75)]"
                    : "border-border bg-white text-[oklch(0.18_0.06_265)] hover:border-[oklch(0.72_0.13_75)]"
                }`}
              >
                <span className="flex items-center gap-4">
                  <Icon className="h-6 w-6" aria-hidden />
                  <span className="text-sm font-semibold">{option.label}</span>
                </span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid rounded-lg border border-border bg-white md:grid-cols-5">
          {stats.map((item) => (
            <div
              key={item.label}
              className="border-b border-border px-5 py-5 text-center last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <p className="text-2xl font-semibold text-[oklch(0.18_0.06_265)]">{item.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-9 grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[oklch(0.55_0.14_75)]">
              Who we are
            </p>
            <h3 className="mt-3 text-3xl font-semibold leading-tight text-[oklch(0.18_0.06_265)]">
              {college.tagline}
            </h3>
            <p className="mt-5 text-sm leading-7 text-[oklch(0.28_0.05_265)]">
              We nurture curiosity, encourage innovation and empower students to solve real-world problems. Our
              supportive community, excellent faculty and modern infrastructure create the ideal environment for
              academic and personal growth.
            </p>
            <a href="#" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[oklch(0.43_0.12_75)]">
              Discover our story <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid rounded-lg border border-border bg-white md:grid-cols-2">
            {[
              ["Academic Excellence", "Rigorous curriculum designed to build strong foundations and future-ready skills.", GraduationCap],
              ["Innovative Research", "Driving discoveries through cutting-edge research and collaborations.", Microscope],
              ["Modern Infrastructure", "State-of-the-art facilities that enhance learning and exploration.", Building2],
              ["Holistic Development", "Encouraging leadership, creativity and community engagement beyond academics.", Users],
            ].map(([title, text, Icon]) => (
              <div
                key={title as string}
                className="border-b border-border p-6 last:border-b-0 md:border-r md:even:border-r-0 md:[&:nth-last-child(-n+2)]:border-b-0"
              >
                <div className="flex gap-5">
                  <Icon className="h-8 w-8 shrink-0 text-[oklch(0.55_0.14_75)]" />
                  <div>
                    <h4 className="text-sm font-semibold text-[oklch(0.18_0.06_265)]">{title as string}</h4>
                    <p className="mt-2 text-xs leading-6 text-muted-foreground">{text as string}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[oklch(0.55_0.14_75)]">
                Explore departments
              </p>
              <h3 className="mt-2 text-3xl font-semibold leading-tight text-[oklch(0.18_0.06_265)]">
                Choose your field of interest
              </h3>
            </div>
            <button type="button" className="hidden items-center gap-2 text-xs font-semibold text-[oklch(0.43_0.12_75)] sm:inline-flex">
              View all departments <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {departments.map((department) => {
              const Icon = department.icon;
              return (
                <article key={department.name} className="rounded-lg border border-border bg-white p-5">
                  <Icon className={`mx-auto h-9 w-9 ${department.color}`} />
                  <h4 className="mt-5 min-h-10 text-center text-sm font-semibold leading-5 text-[oklch(0.18_0.06_265)]">
                    {department.name}
                  </h4>
                  <p className="mt-3 min-h-20 text-sm leading-6 text-muted-foreground">{department.summary}</p>
                  <a href="#" className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[oklch(0.18_0.06_265)]">
                    View Details <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-9">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[oklch(0.55_0.14_75)]">
            Why choose ANU College of Sciences?
          </p>
          <div className="mt-3 grid rounded-lg border border-border bg-white md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="border-b border-border p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
                  <div className="flex gap-5">
                    <Icon className="h-9 w-9 shrink-0 text-[oklch(0.32_0.12_260)]" />
                    <div>
                      <h4 className="text-sm font-semibold text-[oklch(0.18_0.06_265)]">{pillar.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{pillar.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {activeIntent !== "courses" && (
          <div className="mt-9 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[oklch(0.55_0.14_75)]">
                {intentContent[activeIntent].eyebrow}
              </p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight text-[oklch(0.18_0.06_265)]">
                {intentContent[activeIntent].title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{intentContent[activeIntent].text}</p>
            </div>
            <DynamicIntentPanel
              activeIntent={activeIntent}
              visibleDepartments={departments.slice(0, 4)}
              showAllDepartments={false}
              onToggleDepartments={() => undefined}
            />
          </div>
        )}

        <div className="mt-9 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-lg border border-border p-5">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[oklch(0.55_0.14_75)]">
                Latest updates
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-xs font-semibold text-[oklch(0.32_0.12_260)]">
                View all updates <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
            <ol className="mt-5 space-y-4">
              {updates.map((item, index) => {
                const updateStyles = [
                  "bg-blue-50 text-blue-600",
                  "bg-green-50 text-green-600",
                  "bg-violet-50 text-violet-600",
                  "bg-orange-50 text-orange-600",
                ];
                return (
                  <li key={item.title} className="grid grid-cols-[44px_1fr_auto_auto] items-center gap-4">
                    <span className={`flex h-9 w-9 items-center justify-center rounded-full ${updateStyles[index]}`}>
                      <CalendarDays className="h-4 w-4" />
                    </span>
                    <p className="text-sm font-medium leading-6 text-[oklch(0.18_0.06_265)]">{item.title}</p>
                    <time className="hidden text-xs text-muted-foreground md:block">{item.date}, 2026</time>
                    <span className="rounded-full bg-[oklch(0.96_0.03_145)] px-2 py-0.5 text-[10px] font-semibold text-[oklch(0.45_0.13_145)]">
                      {item.tag}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="rounded-lg border border-border p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[oklch(0.55_0.14_75)]">
              Quick access
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href="#"
                    className="flex min-h-16 flex-col items-center justify-center gap-2 rounded-lg border border-border text-center text-xs font-semibold text-[oklch(0.18_0.06_265)] transition-colors hover:border-[oklch(0.72_0.13_75)] hover:bg-[oklch(0.985_0.025_75)]"
                  >
                    <Icon className="h-5 w-5" />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-lg bg-[oklch(0.18_0.06_265)] px-7 py-6 text-white md:flex md:items-center md:justify-between md:gap-8">
          <div className="flex items-center gap-5">
            <span className="hidden h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[oklch(0.78_0.13_75)] sm:flex">
              <GraduationCap className="h-6 w-6" />
            </span>
            <div>
              <p className="text-2xl font-semibold">Ready to take the next step?</p>
              <p className="mt-1 text-sm text-white/75">Join a community of learners, researchers and future leaders.</p>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-0">
            <a href="#" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[oklch(0.78_0.13_75)] px-6 py-3 text-sm font-semibold text-[oklch(0.18_0.06_265)]">
              Apply Now <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/35 px-6 py-3 text-sm font-semibold text-white">
              Talk to Us <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
*/

function DynamicIntentPanel({
  activeIntent,
  visibleDepartments,
  showAllDepartments,
  onToggleDepartments,
}: {
  activeIntent: Intent;
  visibleDepartments: Department[];
  showAllDepartments: boolean;
  onToggleDepartments: () => void;
}) {
  if (activeIntent === "updates") {
    return (
      <div className="rounded-xl border border-border p-6">
        <ol className="space-y-5">
          {updates.map((item) => (
            <li key={item.title} className="grid grid-cols-[72px_1fr] gap-4">
              <time className="text-sm font-semibold text-[oklch(0.55_0.14_75)]">{item.date}</time>
              <div className="border-l border-border pl-5">
                <p className="text-sm font-semibold text-[oklch(0.18_0.06_265)]">{item.title}</p>
                <span className="mt-2 inline-flex rounded-full bg-[oklch(0.96_0.03_145)] px-2 py-0.5 text-[10px] font-semibold text-[oklch(0.45_0.13_145)]">
                  {item.tag}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  if (activeIntent === "research") {
    return (
      <div className="grid gap-4 sm:grid-cols-2 sm:items-stretch">
        {[
          ["Instrumentation Labs", "Advanced tools for measurement, testing and experimentation."],
          ["Research Projects", "Mentored student work connected to real scientific questions."],
          ["Publications", "Faculty and scholar output across core and applied sciences."],
          ["Collaborations", "Interdisciplinary work with departments and external partners."],
        ].map(([title, text]) => (
          <div key={title} className="flex h-full flex-col rounded-xl border border-border p-5">
            <Microscope className="h-7 w-7 text-[oklch(0.55_0.14_75)]" />
            <h4 className="mt-4 font-semibold text-[oklch(0.18_0.06_265)]">{title}</h4>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
    );
  }

  if (activeIntent === "life") {
    return (
      <div className="grid gap-4 sm:grid-cols-2 sm:items-stretch">
        {[
          ["Library & Learning", "Quiet study spaces, journals and guided academic resources."],
          ["Clubs & Committees", "Student-led communities that build confidence and leadership."],
          ["Sports & Wellness", "Open grounds, events and wellness support for balanced growth."],
          ["Student Support", "Mentoring, counselling and academic help when students need it."],
        ].map(([title, text]) => (
          <div key={title} className="flex h-full flex-col rounded-xl border border-border p-5">
            <Building2 className="h-7 w-7 text-[oklch(0.55_0.14_75)]" />
            <h4 className="mt-4 font-semibold text-[oklch(0.18_0.06_265)]">{title}</h4>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 sm:items-stretch xl:grid-cols-4">
        {visibleDepartments.map((department) => {
          const Icon = department.icon;

          return (
            <article
              key={department.name}
              className="flex h-full flex-col rounded-xl border border-border p-5"
            >
              <Icon className={`h-8 w-8 ${department.color}`} />
              <h4 className="mt-5 min-h-10 text-sm font-semibold leading-5 text-[oklch(0.18_0.06_265)]">
                {department.name}
              </h4>
              <p className="mt-3 min-h-16 text-sm leading-6 text-muted-foreground">
                {department.summary}
              </p>
              <a
                href="#"
                className="mt-auto pt-5 inline-flex items-center gap-2 text-xs font-semibold text-[oklch(0.18_0.06_265)]"
              >
                View Details <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </article>
          );
        })}
      </div>
      <button
        type="button"
        onClick={onToggleDepartments}
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[oklch(0.43_0.12_75)]"
      >
        {showAllDepartments ? "Show fewer departments" : "View all departments"}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${showAllDepartments ? "rotate-180" : ""}`}
        />
      </button>
    </div>
  );
}
