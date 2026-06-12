import { useEffect, useRef, useState, useMemo } from "react";
import { ChevronDown, Menu, X, Search, Phone, Mail, ArrowRight } from "lucide-react";
import emblem from "@/assets/university-emblem.png";

/**
 * University Navbar — light theme with mega menu
 * Inspired by leading public university sites (ANU style).
 * - Top utility bar: contact info (left), quick links (right) with orange accent
 * - Main bar: logo + estd line, centered nav, search + Apply Now CTA
 * - Mega menu: left "Explore" promo card + multi-column grouped links with subtitles
 */

type LinkItem = { label: string; href: string; subtitle?: string };
type Column = { title: string; items: LinkItem[] };
type MenuItem = {
  label: string;
  eyebrow: string; // small EXPLORE label
  heading: string; // big heading inside promo
  promo: { badge: string; description: string };
  columns: Column[];
};

const pendingPage = (section: string, page: string) => {
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
const toSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const TOP_LEFT = [
  { icon: Phone, label: "+91 863 234 6114", href: "tel:+918632346114" },
  { icon: Mail, label: "registrar@anu.ac.in", href: "mailto:registrar@anu.ac.in" },
];

const TOP_RIGHT_ACCENT = [
  { label: "Placements", href: pendingPage("student-services", "placements") },
  { label: "Careers", href: pendingPage("employee-services", "careers") },
  { label: "Contact", href: pendingPage("about", "contact") },
];

const TOP_RIGHT_PORTAL = [
  { label: "Student Portal", href: pendingPage("student-services", "student-portal") },
  { label: "Employee Portal", href: pendingPage("employee-services", "employee-portal") },
  { label: "WebMail", href: pendingPage("employee-services", "webmail") },
];

const MENU: MenuItem[] = [
  {
    label: "About",
    eyebrow: "DISCOVER",
    heading: "About the University",
    promo: {
      badge: "ESTD. 1976 · NAAC A+",
      description:
        "A legacy of academic excellence, research and inclusive growth across South India.",
    },
    columns: [
      {
        title: "OVERVIEW",
        items: [
          { label: "Profile", href: "/aboutprofile" },
          { label: "History", href: "/history" },
          { label: "Vision & Mission", href: pendingPage("about", "vision-mission") },
          { label: "Emblem", href: pendingPage("about", "emblem") },
        ],
      },
      {
        title: "LEADERSHIP",
        items: [
          { label: "Chancellor", href: pendingPage("about", "chancellor") },
          { label: "Vice Chancellor", href: pendingPage("about", "vice-chancellor") },
          { label: "Rector", href: pendingPage("about", "rector") },
          { label: "Registrar", href: pendingPage("about", "registrar") },
        ],
      },
      {
        title: "GOVERNANCE",
        items: [
          { label: "Executive Council", href: pendingPage("about", "executive-council") },
          { label: "Organization Structure", href: pendingPage("about", "organization-structure") },
          { label: "Statutory Committees", href: pendingPage("about", "statutory-committees") },
          { label: "Strategic Plan", href: pendingPage("about", "strategic-plan") },
        ],
      },
    ],
  },
  {
    label: "Academics",
    eyebrow: "LEARN",
    heading: "Academics",
    promo: {
      badge: "150+ PROGRAMS",
      description:
        "World-class colleges, departments and centres delivering UG, PG and doctoral education.",
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
          { label: "Architecture & Planning", href: "/colleges/architecture-planning" },
        ],
      },
      {
        title: "ACADEMIC UNITS",
        items: [
          { label: "Faculty", href: "/faculty" },
          { label: "ANUCDE", href: pendingPage("academics", "anucde") },
          { label: "Library", href: pendingPage("academics", "library") },
        ],
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
            href: pendingPage("academics", "mahatma-gandhi-centre"),
          },
          {
            label: "Babu Jagjivan Ram Centre",
            href: pendingPage("academics", "jagjivan-ram-centre"),
          },
          { label: "Computer Centre", href: pendingPage("academics", "computer-centre") },
        ],
      },
      {
        title: "REGULATIONS",
        items: [
          { label: "ANU Code", href: pendingPage("academics", "anu-code") },
          { label: "Ordinances", href: pendingPage("academics", "ordinances") },
          { label: "Code of Conduct", href: pendingPage("academics", "code-of-conduct") },
        ],
      },
    ],
  },
  {
    label: "Admissions",
    eyebrow: "JOIN",
    heading: "Admissions",
    promo: {
      badge: "APPLICATIONS OPEN",
      description:
        "Discover programs, eligibility, fee structure and scholarships for the upcoming academic year.",
    },
    columns: [
      {
        title: "GETTING STARTED",
        items: [
          { label: "Why Choose Us", href: pendingPage("admissions", "why-choose-us") },
          { label: "Academic Calendar", href: pendingPage("admissions", "academic-calendar") },
          { label: "Fee Structure", href: pendingPage("admissions", "fee-structure") },
          { label: "Scholarships", href: pendingPage("admissions", "scholarships") },
        ],
      },
      {
        title: "PROCESS",
        items: [
          { label: "How to Apply", href: pendingPage("admissions", "how-to-apply") },
          {
            label: "Eligibility Criteria",
            href: pendingPage("admissions", "eligibility-criteria"),
          },
          { label: "Affiliated Colleges", href: pendingPage("admissions", "affiliated-colleges") },
        ],
      },
      {
        title: "SUPPORT",
        items: [
          { label: "Admission Helpdesk", href: pendingPage("admissions", "helpdesk") },
          { label: "FAQs", href: pendingPage("admissions", "faqs") },
          { label: "Brochure", href: pendingPage("admissions", "brochure") },
        ],
      },
    ],
  },
  {
    label: "Programs",
    eyebrow: "STUDY",
    heading: "Programs Offered",
    promo: {
      badge: "150+ COURSES",
      description:
        "Explore undergraduate, postgraduate and doctoral programs across colleges and centres.",
    },
    columns: [
      {
        title: "UNDERGRADUATE",
        items: [
          { label: "UG Programs", href: "#" },
          { label: "Integrated Programs", href: "#" },
          { label: "Diploma Courses", href: "#" },
        ],
      },
      {
        title: "POSTGRADUATE",
        items: [
          { label: "PG Programs", href: "#" },
          { label: "PG Diploma", href: "#" },
          { label: "Distance Education (ANUCDE)", href: "#" },
        ],
      },
      {
        title: "RESEARCH & DOCTORAL",
        items: [
          { label: "PhD Programs", href: "#" },
          { label: "M.Phil Programs", href: "#" },
          { label: "Post-Doctoral Fellowships", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Research",
    eyebrow: "EXPLORE",
    heading: "Research",
    promo: {
      badge: "DST-FUNDED LABS",
      description:
        "Funded projects, doctoral scholarship, policies and incubation across departments.",
    },
    columns: [
      {
        title: "RESEARCH",
        items: [
          { label: "R&D Cell", href: "#" },
          { label: "Research Cell", href: "#" },
          { label: "Research Policy", href: "#" },
          { label: "Consultancy Policy", href: "#" },
          { label: "Incubators", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Rankings",
    eyebrow: "RECOGNITION",
    heading: "Rankings",
    promo: {
      badge: "NAAC A+ ACCREDITED",
      description:
        "A portfolio of national and global rankings recognising academic and research excellence.",
    },
    columns: [
      {
        title: "QUALITY & ACCREDITATION",
        items: [
          { label: "NIRF", href: "#" },
          { label: "IQAC", href: "#" },
          { label: "SSR", href: "#" },
          { label: "NAAC", href: "#" },
          { label: "Awards & Recognitions", href: "#" },
        ],
      },
      {
        title: "NATIONAL & GLOBAL RANKINGS",
        items: [
          { label: "QS Asia Ranking 2022", href: "#" },
          { label: "QS I-Gauge E-Leas", href: "#" },
          { label: "World Ranking", href: "#" },
          { label: "Impact Ranking", href: "#" },
          { label: "Green Metric Ranking", href: "#" },
          { label: "Green University Award 2021", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Student Services",
    eyebrow: "SUPPORT",
    heading: "Student Services",
    promo: {
      badge: "STUDENT-FIRST",
      description:
        "Examinations, placements, scholarships and dedicated support cells for every learner.",
    },
    columns: [
      {
        title: "EXAMINATIONS",
        items: [
          { label: "Exam Section", href: pendingPage("student-services", "exam-section") },
          {
            label: "Notifications & Timetables",
            href: pendingPage("student-services", "exam-notifications"),
          },
          { label: "Results", href: pendingPage("student-services", "results") },
          { label: "Downloads (Forms)", href: pendingPage("student-services", "downloads") },
        ],
      },
      {
        title: "CAREER",
        items: [
          { label: "Placements", href: pendingPage("student-services", "placements") },
          { label: "Alumni", href: pendingPage("student-services", "alumni") },
          { label: "Services", href: pendingPage("student-services", "services") },
        ],
      },
      {
        title: "SUPPORT CELLS",
        items: [
          {
            label: "Anti-Ragging Cell",
            href: pendingPage("student-services", "anti-ragging-cell"),
          },
          {
            label: "Women Grievance Cell",
            href: pendingPage("student-services", "women-grievance-cell"),
          },
          { label: "SC/ST Cell", href: pendingPage("student-services", "sc-st-cell") },
          {
            label: "Differently Abled Cell",
            href: pendingPage("student-services", "differently-abled-cell"),
          },
          {
            label: "Student Grievance Cell",
            href: pendingPage("student-services", "student-grievance-cell"),
          },
        ],
      },
    ],
  },
  {
    label: "Campus Life",
    eyebrow: "EXPERIENCE",
    heading: "Campus Life",
    promo: {
      badge: "VIBRANT CAMPUS",
      description:
        "Hostels, sports, NSS, NCC and a thriving cultural calendar across a green 300-acre campus.",
    },
    columns: [
      {
        title: "LIVE & PLAY",
        items: [
          { label: "Hostel", href: "#" },
          { label: "Health Center", href: "#" },
          { label: "Sports", href: "#" },
        ],
      },
      {
        title: "STUDENT BODIES",
        items: [
          { label: "NSS", href: "#" },
          { label: "NCC", href: "#" },
          { label: "ELC", href: "#" },
        ],
      },
      {
        title: "MEDIA & OUTREACH",
        items: [
          { label: "News", href: "#" },
          { label: "Events", href: "#" },
          { label: "ANU Radio 91.2", href: "#" },
          { label: "Herbal Garden", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Employee Services",
    eyebrow: "ADMINISTRATION",
    heading: "Employee Services",
    promo: {
      badge: "FACULTY & STAFF",
      description: "Policies, regulations and quick links for faculty, employees and pensioners.",
    },
    columns: [
      {
        title: "HR & ADMINISTRATION",
        items: [
          { label: "Overview", href: pendingPage("employee-services", "overview") },
          { label: "HR & Payroll", href: pendingPage("employee-services", "hr-payroll") },
          { label: "Leave Management", href: pendingPage("employee-services", "leave-management") },
          { label: "Service Records", href: pendingPage("employee-services", "service-records") },
        ],
      },
      {
        title: "WELFARE & DEVELOPMENT",
        items: [
          { label: "Health & Welfare", href: pendingPage("employee-services", "health-welfare") },
          {
            label: "Professional Development",
            href: pendingPage("employee-services", "professional-development"),
          },
          {
            label: "Retirees & Pensioners",
            href: pendingPage("employee-services", "retirees-pensioners"),
          },
        ],
      },
      {
        title: "SUPPORT & PORTALS",
        items: [
          { label: "Employee Portal", href: pendingPage("employee-services", "employee-portal") },
          {
            label: "Staff Grievance Cell",
            href: pendingPage("employee-services", "staff-grievance-cell"),
          },
          { label: "Downloads & Forms", href: pendingPage("employee-services", "downloads") },
        ],
      },
    ],
  },
];

export function UniversityNavbar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<number | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<number | null>(null);

  const [searchQuery, setSearchQuery] = useState("");

  const searchableItems = useMemo(() => {
    const items: { label: string; href: string; category: string; subtitle?: string }[] = [];
    MENU.forEach((menu) => {
      menu.columns.forEach((col) => {
        col.items.forEach((item) => {
          const href =
            item.href === "#" ? pendingPage(toSlug(menu.label), toSlug(item.label)) : item.href;
          items.push({
            label: item.label,
            href,
            category: menu.label,
            subtitle: col.title,
          });
        });
      });
    });
    // Add specific common pages
    items.push(
      { label: "Home", href: "/", category: "General" },
      { label: "University Profile", href: "/aboutprofile", category: "About" },
      { label: "Golden Jubilee Scroll", href: "/jubilee", category: "About" },
      { label: "History", href: "/history", category: "About" },
    );
    return items;
  }, []);

  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return searchableItems.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.subtitle?.toLowerCase().includes(q),
    );
  }, [searchQuery, searchableItems]);

  // Close on outside click / Escape
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!navRef.current?.contains(e.target as Node)) {
        setOpenIndex(null);
        setSearchOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
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

  useEffect(() => {
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

  const openMenu = (i: number) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpenIndex(i);
  };
  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenIndex(null), 120);
  };

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 w-full"
      style={{ boxShadow: "var(--nav-shadow)" }}
    >
      {/* Utility bar */}
      {/* Utility bar moved to top of page in src/routes/index.tsx */}

      {/* Main bar */}
      <div
        className="border-b"
        style={{
          backgroundColor: "var(--utility-bar)",
          borderColor: "oklch(1 0 0 / 0.12)",
          color: "var(--utility-bar-foreground)",
        }}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 lg:px-8">
          <a
            href="/"
            className={`hidden shrink-0 items-center gap-3 py-2 lg:flex transition-all duration-500 ease-in-out origin-left ${
              isScrolled
                ? "opacity-100 max-w-[400px] scale-100"
                : "opacity-0 max-w-0 scale-95 overflow-hidden pointer-events-none"
            }`}
            aria-label="Acharya Nagarjuna University Home"
          >
            <img src={emblem} alt="ANU emblem" className="h-14 w-14 object-contain shrink-0" />
            <span className="text-sm font-semibold tracking-wide text-white/95 whitespace-nowrap">
              Acharya Nagarjuna University
            </span>
          </a>

          {/* Desktop nav */}
          <nav aria-label="Main" className="hidden lg:block flex-1">
            <ul className="flex items-stretch">
              <li className="relative">
                <a
                  href="/"
                  className="relative flex h-full items-center gap-1 px-4 py-6 text-[13px] font-medium tracking-wide transition-colors hover:text-[color:var(--utility-bar-accent)] focus:outline-none"
                >
                  Home
                </a>
              </li>
              {MENU.map((item, i) => {
                const active = openIndex === i;
                return (
                  <li
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => openMenu(i)}
                    onMouseLeave={scheduleClose}
                  >
                    <button
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={active}
                      onClick={() => setOpenIndex(active ? null : i)}
                      onFocus={() => openMenu(i)}
                      className="relative flex h-full items-center gap-1 px-4 py-6 text-[13px] font-medium tracking-wide transition-colors hover:text-[color:var(--utility-bar-accent)] focus:outline-none"
                    >
                      {item.label}
                      <ChevronDown
                        className="h-3.5 w-3.5 transition-transform"
                        style={{ transform: active ? "rotate(180deg)" : "none" }}
                      />
                      <span
                        className="pointer-events-none absolute bottom-3 left-4 right-4 h-[2px] origin-left rounded-full transition-transform duration-200"
                        style={{
                          backgroundColor: "var(--gold-strong)",
                          transform: active ? "scaleX(1)" : "scaleX(0)",
                        }}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              type="button"
              aria-label="Search"
              onClick={() =>
                setSearchOpen((v) => {
                  if (v) setSearchQuery("");
                  return !v;
                })
              }
              className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white/10"
            >
              <Search className="h-4 w-4" />
            </button>
          </div>

          {/* Mobile toggle */}
          <a
            href="/"
            className={`flex items-center gap-2 py-2 lg:hidden transition-all duration-500 ease-in-out origin-left ${
              isScrolled
                ? "opacity-100 max-w-[300px] scale-100"
                : "opacity-0 max-w-0 scale-95 overflow-hidden pointer-events-none"
            }`}
            aria-label="Acharya Nagarjuna University Home"
          >
            <img src={emblem} alt="ANU emblem" className="h-13 w-13 object-contain shrink-0" />
            <span className="text-sm font-bold tracking-[0.05em] text-[color:var(--utility-bar-accent)] whitespace-nowrap">
              Acharya Nagarjuna University
            </span>
          </a>

          <button
            type="button"
            className="-mr-2 p-2 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Search panel */}
        {searchOpen && (
          <div className="border-t border-border bg-background shadow-lg max-h-[60vh] overflow-y-auto transition-all duration-300">
            <div className="mx-auto max-w-[1400px] px-8 py-4">
              <div className="flex items-center gap-3 border-b border-border pb-3">
                <Search className="h-4 w-4 text-muted-foreground" />
                <input
                  autoFocus
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search programs, departments, notifications…"
                  className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSearchOpen(false);
                  }}
                  className="text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground"
                >
                  Close
                </button>
              </div>

              {/* Results */}
              <div className="mt-4">
                {searchQuery.trim() === "" ? (
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Popular Links
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { label: "Fee Structure", href: "/admissions/fee-structure" },
                        { label: "UG Programs", href: "/programs/ug-programs" },
                        { label: "Hostels", href: "/campus-life/hostel" },
                        {
                          label: "Exam Notifications",
                          href: "/student-services/exam-notifications",
                        },
                        { label: "Results", href: "/student-services/results" },
                        { label: "R&D Cell", href: "/research/r-and-d-cell" },
                      ].map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={() => {
                            setSearchQuery("");
                            setSearchOpen(false);
                          }}
                          className="rounded-full bg-muted/60 px-3.5 py-1.5 text-xs text-foreground/80 hover:bg-muted hover:text-foreground transition"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : filteredResults.length > 0 ? (
                  <div className="space-y-2">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Matches Found ({filteredResults.length})
                    </div>
                    <ul className="divide-y divide-border/60">
                      {filteredResults.slice(0, 10).map((res) => (
                        <li key={`${res.category}-${res.label}-${res.href}`} className="py-2.5">
                          <a
                            href={res.href}
                            onClick={() => {
                              setSearchQuery("");
                              setSearchOpen(false);
                            }}
                            className="flex items-center justify-between group"
                          >
                            <div>
                              <span className="text-sm font-semibold text-foreground group-hover:text-[color:var(--brand)] transition-colors">
                                {res.label}
                              </span>
                              {res.subtitle && (
                                <span className="ml-2 text-xs text-muted-foreground">
                                  in {res.subtitle}
                                </span>
                              )}
                            </div>
                            <span className="text-xs uppercase tracking-wider text-muted-foreground bg-muted/40 px-2 py-0.5 rounded group-hover:bg-brand/10 group-hover:text-brand transition-colors">
                              {res.category}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="py-6 text-center text-sm text-muted-foreground">
                    No results found for{" "}
                    <span className="font-semibold text-foreground">"{searchQuery}"</span>. Try
                    searching for admissions, exam, programs, or cell.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Mega menu panel (desktop) */}
        {openIndex !== null && (
          <div
            className="absolute left-0 right-0 hidden lg:block"
            onMouseEnter={() => openMenu(openIndex)}
            onMouseLeave={scheduleClose}
          >
            {/*
              openIndex is guaranteed non-null in this branch.
              Keep a stable reference to avoid scope mistakes in nested maps.
            */}
            {(() => {
              const activeMenu = MENU[openIndex];
              return (
                <div
                  className="border-t border-border bg-background animate-in fade-in slide-in-from-top-1 duration-150"
                  style={{ boxShadow: "var(--mega-shadow)" }}
                >
                  <div className="mx-auto max-w-[1400px] px-8 py-10">
                    <div className="grid grid-cols-12 gap-8">
                      {/* Promo / Explore card */}
                      <div className="col-span-3">
                        <div
                          className="text-[11px] font-semibold tracking-[0.2em]"
                          style={{ color: "var(--gold-strong)" }}
                        >
                          {activeMenu.eyebrow}
                        </div>
                        <h3
                          className="mt-2 text-3xl font-semibold leading-tight"
                          style={{ color: "var(--brand)" }}
                        >
                          {activeMenu.heading}
                        </h3>
                        <div
                          className="mt-3 h-[2px] w-12 rounded-full"
                          style={{ backgroundColor: "var(--gold-strong)" }}
                        />
                        <div
                          className="mt-6 rounded-2xl p-5"
                          style={{ backgroundColor: "var(--brand-soft)" }}
                        >
                          <div
                            className="inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-wider"
                            style={{
                              backgroundColor: "var(--brand)",
                              color: "var(--brand-foreground)",
                            }}
                          >
                            {activeMenu.promo.badge}
                          </div>
                          <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                            {activeMenu.promo.description}
                          </p>
                          <a
                            href={pendingPage(toSlug(activeMenu.label), "overview")}
                            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold transition-colors"
                            style={{ color: "var(--brand)" }}
                          >
                            Learn more
                            <ArrowRight className="h-3.5 w-3.5" />
                          </a>
                        </div>
                      </div>

                      {/* Columns */}
                      <div className="col-span-9 grid grid-cols-3 gap-8">
                        {activeMenu.columns.map((col) => (
                          <div key={col.title}>
                            <div
                              className="mb-4 text-[11px] font-semibold tracking-[0.18em]"
                              style={{ color: "var(--brand)" }}
                            >
                              {col.title}
                            </div>
                            <ul className="space-y-3">
                              {col.items.map((c) => (
                                <li key={c.label}>
                                  <a
                                    href={
                                      c.href === "#"
                                        ? pendingPage(toSlug(activeMenu.label), toSlug(c.label))
                                        : c.href
                                    }
                                    className="group block"
                                  >
                                    <div className="text-sm font-medium text-foreground transition-colors group-hover:text-[color:var(--brand)]">
                                      {c.label}
                                    </div>
                                    {c.subtitle && (
                                      <div className="mt-0.5 text-xs text-muted-foreground">
                                        {c.subtitle}
                                      </div>
                                    )}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-background text-foreground lg:hidden">
          <nav aria-label="Mobile" className="max-h-[80vh] overflow-y-auto">
            <ul className="divide-y divide-border">
              <li>
                <a
                  href="/"
                  className="block px-4 py-3 text-sm font-medium text-foreground/90 hover:text-foreground"
                >
                  Home
                </a>
              </li>
              {MENU.map((item, i) => (
                <li key={item.label}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium"
                    aria-expanded={mobileSection === i}
                    onClick={() => setMobileSection(mobileSection === i ? null : i)}
                  >
                    {item.label}
                    <ChevronDown
                      className="h-4 w-4 transition-transform"
                      style={{
                        transform: mobileSection === i ? "rotate(180deg)" : "none",
                      }}
                    />
                  </button>
                  {mobileSection === i && (
                    <div className="bg-muted/40 px-4 pb-4 pt-1">
                      {item.columns.map((col) => (
                        <div key={col.title} className="mt-3">
                          <div
                            className="mb-1 text-[11px] font-semibold tracking-[0.18em]"
                            style={{ color: "var(--brand)" }}
                          >
                            {col.title}
                          </div>
                          <ul className="space-y-1 pl-1">
                            {col.items.map((c) => (
                              <li key={c.label}>
                                <a
                                  href={
                                    c.href === "#"
                                      ? pendingPage(toSlug(item.label), toSlug(c.label))
                                      : c.href
                                  }
                                  className="block py-1 text-sm text-foreground/80 hover:text-foreground"
                                >
                                  {c.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div className="border-t border-border p-4">
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Quick Links
              </div>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                {[...TOP_RIGHT_ACCENT, ...TOP_RIGHT_PORTAL].map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="block py-1 hover:underline">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
