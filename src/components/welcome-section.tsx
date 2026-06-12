import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  Bell,
  BookOpen,
  Building2,
  Calendar,
  ChevronRight,
  FileText,
  GraduationCap,
  Landmark,
  Leaf,
  Search,
  Sparkles,
  Users,
} from "lucide-react";
import vcImage from "@/assets/vice-chancellor.jpg";
import bgImage from "@/assets/bgg1.jpg";
import rector from "@/assets/rector.jpg";
import registrar from "@/assets/registrar.jpg";

type Item = {
  title: string;
  date: string;
  tag?: "New" | "Updated";
  category: "All" | "Admissions" | "Exams" | "Results" | "Jobs" | "Academics";
  href?: string;
};

const notifications: Item[] = [
  {
    title:
      "Notification for Guest Faculty Positions in CSE, AI & ML, Data Science and Cyber Security Departments (AY 2025-26)",
    date: "Apr 28, 2026",
    tag: "New",
    category: "Jobs",
  },
  {
    title: "B.Sc Honours in Fire and Industrial Safety - Admissions Open",
    date: "Apr 24, 2026",
    category: "Admissions",
  },
  {
    title: "B.Tech 2nd Year 1st & 2nd Sem and 3rd Year Examinations Time-Tables, July 2026",
    date: "Apr 18, 2026",
    tag: "Updated",
    category: "Exams",
  },
  {
    title: "Revised Academic Calendar for PG Programmes 2026-27",
    date: "Apr 12, 2026",
    category: "Academics",
  },
  {
    title: "M.Sc. Bio-Technology I Semester Regular Examinations April-2026 Results",
    date: "Apr 26, 2026",
    tag: "New",
    category: "Results",
  },
  {
    title: "M.Voc Horticulture & Landscape Gardening I Semester Results Published",
    date: "Apr 22, 2026",
    category: "Results",
  },
  {
    title: "Admissions Counselling Schedule for PG Programmes Released",
    date: "Apr 20, 2026",
    tag: "Updated",
    category: "Admissions",
  },
  {
    title: "Pre Ph.D Examination Schedule, July 2026",
    date: "Apr 16, 2026",
    category: "Exams",
  },
];

const announcementTabs = ["All", "Admissions", "Exams", "Results", "Jobs", "Academics"] as const;

const aboutStats = [
  { value: "50", label: "Years of Excellence" },
  { value: "300", label: "Acres of Campus" },
  { value: "5,000+", label: "Students Served" },
  { value: "223", label: "Affiliated Colleges" },
];

const campusHighlights = [
  {
    title: "Green Campus",
    text: "A broad 300-acre academic setting with natural spaces and room for student life.",
    icon: Leaf,
  },
  {
    title: "Research Spaces",
    text: "Departments, labs and centres built for postgraduate learning and guided research.",
    icon: Building2,
  },
  {
    title: "Student Community",
    text: "A lively university environment shaped by academics, clubs, sports and service.",
    icon: Users,
  },
];

const leaders = [
  {
    name: "Prof. K. Gangadhara Rao",
    role: "Vice Chancellor",
    image: vcImage,
    quote:
      "Our vision is to strengthen higher education with integrity, relevance and public purpose.",
    credentials:
      "Guiding ANU's academic direction, institutional growth and student-centred development.",
  },
  {
    name: "Prof. Prof.R,Sivaramprasad",
    role: "Rector",
    image: rector,
    quote: "Engineering education must connect technical depth with practical problem solving.",
    credentials:
      "Leading professional education with a focus on industry readiness and innovation.",
  },
  {
    name: "Prof. G. Simhachalam",
    role: "Registrar ",
    image: registrar,
    quote: "Research culture grows when curiosity, discipline and mentorship work together.",
    credentials:
      "Supporting research-led learning across science departments and laboratory practice.",
  },
];

function TagPill({ tag }: { tag?: Item["tag"] }) {
  if (!tag) return null;

  const styles = {
    New: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
    Updated: "bg-amber-50 text-amber-700 ring-amber-600/20",
  } satisfies Record<NonNullable<Item["tag"]>, string>;

  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ring-1 ring-inset ${styles[tag]}`}
    >
      {tag}
    </span>
  );
}

const getNotificationHref = (category: string) => {
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

export function NotificationsSection() {
  const [activeTab, setActiveTab] = useState<(typeof announcementTabs)[number]>("All");
  const visibleNotifications = notifications
    .filter((item) => activeTab === "All" || item.category === activeTab)
    .slice(0, 5);

  return (
    <section id="notifications" className="bg-[oklch(0.985_0.005_250)] py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.32_0.12_260)]/20 bg-white px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[oklch(0.32_0.12_260)]">
              <Bell className="h-3.5 w-3.5" aria-hidden />
              Notifications
            </span>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[oklch(0.22_0.06_265)] md:text-3xl">
              Latest Announcements
            </h2>
          </div>
          <a
            href="/student-services/exam-notifications"
            className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[oklch(0.32_0.12_260)] hover:underline"
          >
            View all notifications <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border/70 bg-white shadow-[0_18px_50px_-34px_rgba(15,23,42,0.25)]">
          <div className="grid gap-3 border-b border-border/60 bg-white px-4 py-3 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="flex items-center gap-2 rounded-lg border border-border bg-[oklch(0.985_0.005_250)] px-3 py-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Showing {activeTab.toLowerCase()} alerts
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {announcementTabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-md border px-3 py-1.5 text-xs font-semibold transition-colors ${
                    activeTab === tab
                      ? "border-[oklch(0.32_0.12_260)] bg-[oklch(0.32_0.12_260)] text-white"
                      : "border-border bg-white text-[oklch(0.22_0.06_265)] hover:bg-[oklch(0.97_0.02_255)]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <ul className="divide-y divide-border/60">
            {visibleNotifications.map((item, index) => {
              const Icon =
                item.category === "Admissions"
                  ? GraduationCap
                  : item.category === "Exams"
                    ? Calendar
                    : item.category === "Results"
                      ? FileText
                      : Bell;

              return (
                <li key={item.title}>
                  <a
                    href={item.href ?? getNotificationHref(item.category)}
                    className="group grid grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3 transition-colors hover:bg-[oklch(0.97_0.02_255)] sm:px-5"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[oklch(0.32_0.12_260)]/8 text-[oklch(0.32_0.12_260)]">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-medium leading-snug text-foreground group-hover:text-[oklch(0.32_0.12_260)]">
                        {item.title}
                      </span>
                      <span className="mt-1.5 flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="rounded-full bg-[oklch(0.96_0.01_260)] px-2 py-0.5 font-semibold text-[oklch(0.22_0.06_265)]">
                          {item.category}
                        </span>
                        {item.date}
                        <TagPill tag={item.tag} />
                      </span>
                    </span>
                    <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-[oklch(0.32_0.12_260)]" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function WelcomeSection() {
  return (
    <section id="about-university" className="bg-white px-6 py-12 text-[#1a1a1a] lg:px-8 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0066cc]/20 bg-[#f5f9ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#0066cc]">
            <Sparkles className="h-3.5 w-3.5" />
            Welcome to ANU
          </div>

          <h2 className="mt-3 text-3xl font-semibold leading-[1.1] tracking-tight md:text-4xl">
            About the <span className="text-[#0066cc]">University</span>
          </h2>
        </div>
        <section className="mt-4">
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(300px,0.95fr)] lg:items-stretch">
            <figure className="overflow-hidden rounded-lg border border-[#e5e7eb] bg-white shadow-[0_18px_55px_-38px_rgba(15,23,42,0.35)]">
              <img
                src={bgImage}
                alt="Acharya Nagarjuna University's 300-acre main campus near Guntur"
                className="aspect-[21/9] h-full w-full object-cover"
              />
              <figcaption className="px-4 py-3 text-xs leading-5 text-[#666666]">
                ANU's 300-acre main campus near Guntur brings together academic departments,
                research spaces, student facilities and open green areas.
              </figcaption>
            </figure>

            <div className="rounded-lg border border-[#e5e7eb] bg-white p-5 shadow-[0_16px_45px_-38px_rgba(15,23,42,0.32)]">
              <h3 className="text-xl font-semibold leading-tight">Our Campus</h3>
              <p className="mt-2.5 max-w-[560px] text-sm leading-6 text-[#666666]">
                The campus gives students a complete university environment: classrooms,
                laboratories, libraries, activity spaces and a setting designed for learning beyond
                the timetable.
              </p>
              <a
                href="/pages/about?page=contact"
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-md bg-[#0066cc] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0052a3] hover:shadow-[0_8px_20px_-12px_rgba(0,102,204,0.8)]"
              >
                Schedule a campus tour <ArrowUpRight className="h-4 w-4" />
              </a>

              <div className="mt-4 grid gap-2.5">
                {campusHighlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="flex gap-3 rounded-lg border border-[#e5e7eb] bg-[#f9f9f9] p-3"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white text-[#0066cc] ring-1 ring-[#eeeeee]">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold">{item.title}</h4>
                        <p className="mt-0.5 text-xs leading-5 text-[#666666]">{item.text}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_300px] lg:items-stretch">
          <article className="flex h-full flex-col rounded-lg border border-[#e5e7eb] bg-white p-5 shadow-[0_16px_45px_-38px_rgba(15,23,42,0.32)]">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#eaf3ff] text-[#0066cc]">
              <Landmark className="h-5 w-5" aria-hidden />
            </div>
            <h3 className="mt-4 text-xl font-semibold leading-tight">Our Story</h3>
            <p className="mt-3 max-w-[560px] text-sm leading-6 text-[#1a1a1a]">
              Founded in <strong>1976</strong>, Acharya Nagarjuna University has spent nearly five
              decades expanding access to higher education across Andhra Pradesh.
            </p>
            <p className="mt-2 max-w-[560px] text-sm leading-6 text-[#666666]">
              From its main campus between Vijayawada and Guntur, ANU serves learners across
              undergraduate, postgraduate and research programs.
            </p>
            <div className="mt-auto pt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
              <Link
                to="/history"
                className="inline-flex items-center gap-1.5 border-b-2 border-[#0066cc] pb-0.5 text-sm font-semibold text-[#0066cc] transition-colors hover:border-[#0052a3] hover:text-[#0052a3]"
              >
                Explore our history <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/jubilee"
                className="inline-flex items-center gap-1.5 border-b-2 border-amber-600 pb-0.5 text-sm font-semibold text-amber-600 transition-colors hover:border-amber-700 hover:text-amber-700"
              >
                Golden Jubilee (1976-2026) <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </article>

          <article className="flex h-full flex-col rounded-lg border border-[#e5e7eb] bg-white p-5 shadow-[0_16px_45px_-38px_rgba(15,23,42,0.32)]">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#eaf3ff] text-[#0066cc]">
              <BookOpen className="h-5 w-5" aria-hidden />
            </div>
            <h3 className="mt-4 text-xl font-semibold leading-tight">Our Philosophy</h3>
            <p className="mt-3 max-w-[560px] text-sm leading-6 text-[#1a1a1a]">
              Named after the philosopher Acharya Nagarjuna, the university draws inspiration from
              his pursuit of truth and disciplined inquiry.
            </p>
            <p className="mt-2 max-w-[560px] text-sm leading-6 text-[#666666]">
              We believe education is not just knowledge acquisition. It is a path to discovering
              truth within ourselves and applying it with responsibility.
            </p>
            <a
              href="/pages/about?page=vision-mission"
              className="mt-auto pt-4 inline-flex items-center gap-1.5 border-b-2 border-[#0066cc] pb-0.5 text-sm font-semibold text-[#0066cc] transition-colors hover:border-[#0052a3] hover:text-[#0052a3]"
            >
              Learn our values <ArrowUpRight className="h-4 w-4" />
            </a>
          </article>

          <aside className="flex h-full flex-col rounded-lg border border-[#e5e7eb] bg-[#f9f9f9] p-4">
            <h3 className="text-xl font-semibold leading-tight">Key Numbers</h3>
            <div className="mt-3 grid flex-1 grid-cols-2 gap-2.5">
              {aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex h-full flex-col justify-center rounded-md bg-white p-2.5 ring-1 ring-[#eeeeee]"
                >
                  <strong className="block text-2xl font-semibold leading-none text-[#0066cc]">
                    {stat.value}
                  </strong>
                  <span className="mt-1.5 block text-xs font-medium leading-4 text-[#666666]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <section className="mt-10 rounded-lg bg-[#f9f9f9] p-5 md:p-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-[#0066cc] ring-1 ring-[#eeeeee]">
                <GraduationCap className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="mt-4 text-xl font-semibold leading-tight">Leadership &amp; Vision</h3>
              <p className="mt-2 max-w-[560px] text-sm leading-6 text-[#666666]">
                ANU's academic leadership connects institutional vision with colleges, departments
                and student outcomes.
              </p>
            </div>
            <a
              href="/pages/about?page=vice-chancellor"
              className="inline-flex w-fit items-center gap-1.5 border-b-2 border-[#0066cc] pb-0.5 text-sm font-semibold text-[#0066cc] transition-colors hover:border-[#0052a3] hover:text-[#0052a3]"
            >
              Meet the full leadership team <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-3 md:items-stretch">
            {leaders.map((leader) => (
              <article
                key={leader.name}
                className="flex h-full flex-col rounded-lg border border-[#eeeeee] bg-white p-4 text-center shadow-[0_16px_42px_-40px_rgba(15,23,42,0.45)]"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="mx-auto h-24 w-24 rounded-full object-cover object-top ring-4 ring-[#eaf3ff]"
                  loading="lazy"
                />
                <h4 className="mt-4 text-sm font-semibold">{leader.name}</h4>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#666666]">
                  {leader.role}
                </p>
                <p className="mt-3 text-xs italic leading-5 text-[#0066cc]">"{leader.quote}"</p>
                <p className="mt-3 text-xs leading-5 text-[#666666]">{leader.credentials}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
