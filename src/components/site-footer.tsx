import { Link, useRouterState } from "@tanstack/react-router";
import {
  ArrowUp,
  ExternalLink,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

type FooterNavItem = {
  label: string;
  href: string;
  external?: boolean;
};

type FooterContext = {
  aboutTitle: string;
  aboutText: string;
  contextualTitle: string;
  contextualLinks: FooterNavItem[];
  commonLinks: FooterNavItem[];
};

const baseCommonLinks: FooterNavItem[] = [
  { label: "Admissions", href: "/admissions/overview" },
  { label: "Exam Notifications", href: "/student-services/exam-notifications" },
  { label: "Results", href: "/student-services/results" },
  { label: "Placements", href: "/student-services/placements" },
  { label: "Contact", href: "mailto:registrar@anu.ac.in", external: true },
];

const routeAwareLinks: Record<string, FooterNavItem[]> = {
  home: [
    { label: "Top", href: "#top" },
    { label: "Notifications", href: "#notifications" },
    { label: "About University", href: "#about-university" },
    { label: "Colleges", href: "#colleges" },
    { label: "FAQs", href: "#faq" },
  ],
  faculty: [
    { label: "Faculty List", href: "/faculty" },
    { label: "Featured Faculty", href: "/faculty" },
    { label: "Computer Science Department", href: "/departments/computer-science" },
    { label: "University Colleges", href: "/colleges/sciences" },
    { label: "Home", href: "/" },
  ],
  colleges: [
    { label: "Sciences", href: "/colleges/sciences" },
    { label: "Engineering", href: "/colleges/engineering" },
    { label: "Arts, Commerce & Law", href: "/colleges/arts-commerce-law" },
    { label: "Pharmacy", href: "/colleges/pharmacy" },
    { label: "Architecture & Planning", href: "/colleges/architecture-planning" },
  ],
  departments: [
    { label: "Computer Science", href: "/departments/computer-science" },
    { label: "Faculty", href: "/faculty" },
    { label: "Colleges", href: "/colleges/sciences" },
    { label: "Golden Jubilee", href: "/jubilee" },
    { label: "Home", href: "/" },
  ],
  jubilee: [
    { label: "Jubilee Hero", href: "/jubilee" },
    { label: "Timeline", href: "/jubilee#timeline" },
    { label: "University Home", href: "/" },
    { label: "Colleges", href: "/colleges/sciences" },
    { label: "Faculty", href: "/faculty" },
  ],
};

const socialLinks = [
  { label: "Facebook", icon: Facebook, href: "/pages/about?page=facebook" },
  { label: "Instagram", icon: Instagram, href: "/pages/about?page=instagram" },
  { label: "Twitter", icon: Twitter, href: "/pages/about?page=twitter" },
];

function getSectionFromPath(pathname: string) {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/faculty")) return "faculty";
  if (pathname.startsWith("/colleges")) return "colleges";
  if (pathname.startsWith("/departments")) return "departments";
  if (pathname.startsWith("/jubilee")) return "jubilee";
  return "home";
}

function toReadable(input: string) {
  return input
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}

function getFooterContext(pathname: string, searchStr: string): FooterContext {
  const section = getSectionFromPath(pathname);
  const defaultContext: FooterContext = {
    aboutTitle: "About University",
    aboutText:
      "Acharya Nagarjuna University, established in 1976, continues to serve students with strong academics, research culture and inclusive campus growth across Andhra Pradesh.",
    contextualTitle: "On This Page",
    contextualLinks: routeAwareLinks[section] ?? routeAwareLinks.home,
    commonLinks: baseCommonLinks,
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
        { label: "Faculty", href: "/faculty" },
      ],
      commonLinks: [
        { label: "Apply Now", href: "/admissions/how-to-apply" },
        { label: "Scholarships", href: "/admissions/scholarships" },
        { label: "Academic Regulations", href: "/pages/academics?page=ordinances" },
        { label: "Results", href: "/pages/student-services?page=results" },
        { label: "Contact", href: "mailto:registrar@anu.ac.in", external: true },
      ],
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
        { label: "Research", href: "#research" },
      ],
      commonLinks: baseCommonLinks,
    };
  }

  if (pathname.startsWith("/faculty/") && pathname !== "/faculty") {
    return {
      ...defaultContext,
      aboutTitle: "Faculty Profile",
      aboutText:
        "Detailed faculty page with profile, academic contributions, publications and contact information for the selected member.",
      contextualTitle: "Profile Navigation",
      contextualLinks: [
        { label: "Overview", href: "#overview" },
        { label: "Research", href: "#research" },
        { label: "Publications", href: "#publications" },
        { label: "Achievements", href: "#achievements" },
        { label: "Contact", href: "#contact" },
      ],
      commonLinks: [
        { label: "All Faculty", href: "/faculty" },
        { label: "Departments", href: "/colleges/sciences#departments" },
        { label: "Research Cell", href: "/pages/research?page=research-cell" },
        { label: "Consultancy Policy", href: "/pages/research?page=consultancy-policy" },
        { label: "Contact", href: "mailto:registrar@anu.ac.in", external: true },
      ],
    };
  }

  if (pathname.startsWith("/student-services/")) {
    return {
      ...defaultContext,
      aboutTitle: "Student Services Application",
      aboutText:
        "This student-services area now works as a real application shell with task-based tabs, classified workflows and dedicated support-cell guidance.",
      contextualTitle: "Student Service Tabs",
      contextualLinks: [
        { label: "Overview", href: "/student-services/overview" },
        { label: "Exam Section", href: "/student-services/exam-section" },
        { label: "Results", href: "/student-services/results" },
        { label: "Downloads", href: "/student-services/downloads" },
        { label: "Student Portal", href: "/student-services/student-portal" },
      ],
      commonLinks: baseCommonLinks,
    };
  }

  if (pathname.startsWith("/employee-services/")) {
    return {
      ...defaultContext,
      aboutTitle: "Employee Services Application",
      aboutText:
        "This employee-services area operates as a dedicated module with task-based tabs, administrative workflows and support guidance for university staff.",
      contextualTitle: "Employee Service Tabs",
      contextualLinks: [
        { label: "Overview", href: "/employee-services/overview" },
        { label: "HR & Payroll", href: "/employee-services/hr-payroll" },
        { label: "Leave Management", href: "/employee-services/leave-management" },
        { label: "Downloads & Forms", href: "/employee-services/downloads" },
        { label: "Employee Portal", href: "/employee-services/employee-portal" },
      ],
      commonLinks: baseCommonLinks,
    };
  }

  if (pathname.startsWith("/campus-life/")) {
    return {
      ...defaultContext,
      aboutTitle: "Campus Life Application",
      aboutText:
        "This campus-life area now works as a real application shell with task-based tabs, classified amenities and dedicated student affairs guidance.",
      contextualTitle: "Campus Life Tabs",
      contextualLinks: [
        { label: "Overview", href: "/campus-life/overview" },
        { label: "Hostels", href: "/campus-life/hostel" },
        { label: "Health Centre", href: "/campus-life/health-center" },
        { label: "Sports", href: "/campus-life/sports" },
        { label: "NSS Cell", href: "/campus-life/nss" },
      ],
      commonLinks: baseCommonLinks,
    };
  }

  if (pathname.startsWith("/rankings/")) {
    return {
      ...defaultContext,
      aboutTitle: "Rankings & Quality Application",
      aboutText:
        "This rankings and quality assurance area operates as a dedicated module displaying national rankings, NAAC status, and IQAC processes.",
      contextualTitle: "Rankings Tabs",
      contextualLinks: [
        { label: "Overview", href: "/rankings/overview" },
        { label: "NIRF", href: "/rankings/nirf" },
        { label: "IQAC", href: "/rankings/iqac" },
        { label: "NAAC", href: "/rankings/naac" },
        { label: "SSR Reports", href: "/rankings/ssr" },
      ],
      commonLinks: baseCommonLinks,
    };
  }

  if (pathname.startsWith("/research/")) {
    return {
      ...defaultContext,
      aboutTitle: "Research & Development Application",
      aboutText:
        "This research area coordinates and displays active projects, doctoral studies, ethics/consultancy policies, and business incubation.",
      contextualTitle: "Research Tabs",
      contextualLinks: [
        { label: "Overview", href: "/research/overview" },
        { label: "R&D Cell", href: "/research/r-and-d-cell" },
        { label: "Research Cell", href: "/research/research-cell" },
        { label: "Research Policy", href: "/research/research-policy" },
        { label: "Incubators", href: "/research/incubators" },
      ],
      commonLinks: baseCommonLinks,
    };
  }

  if (pathname.startsWith("/programs/")) {
    return {
      ...defaultContext,
      aboutTitle: "Academic Programs Application",
      aboutText:
        "This programs directory details undergraduate, postgraduate, integrated, and distance education coursework offered by the university.",
      contextualTitle: "Programs Tabs",
      contextualLinks: [
        { label: "Overview", href: "/programs/overview" },
        { label: "UG Programs", href: "/programs/ug-programs" },
        { label: "PG Programs", href: "/programs/pg-programs" },
        { label: "Integrated", href: "/programs/integrated-programs" },
        { label: "Distance Education", href: "/programs/distance-education-anucde" },
      ],
      commonLinks: baseCommonLinks,
    };
  }

  if (pathname.startsWith("/pages/")) {
    const routeSection = pathname.split("/")[2] ?? "section";
    const page = new URLSearchParams(searchStr).get("page") ?? "overview";
    if (routeSection === "student-services") {
      return {
        ...defaultContext,
        aboutTitle: "Student Services Application",
        aboutText:
          "This student-services area now works as a real application shell with task-based tabs, classified workflows and dedicated support-cell guidance.",
        contextualTitle: "Student Service Tabs",
        contextualLinks: [
          { label: "Overview", href: "/student-services/overview" },
          { label: "Exam Section", href: "/student-services/exam-section" },
          { label: "Results", href: "/student-services/results" },
          { label: "Downloads", href: "/student-services/downloads" },
          { label: "Student Portal", href: "/student-services/student-portal" },
        ],
        commonLinks: baseCommonLinks,
      };
    }
    if (routeSection === "employee-services") {
      return {
        ...defaultContext,
        aboutTitle: "Employee Services Application",
        aboutText:
          "This employee-services area operates as a dedicated module with task-based tabs, administrative workflows and support guidance for university staff.",
        contextualTitle: "Employee Service Tabs",
        contextualLinks: [
          { label: "Overview", href: "/employee-services/overview" },
          { label: "HR & Payroll", href: "/employee-services/hr-payroll" },
          { label: "Leave Management", href: "/employee-services/leave-management" },
          { label: "Downloads & Forms", href: "/employee-services/downloads" },
          { label: "Employee Portal", href: "/employee-services/employee-portal" },
        ],
        commonLinks: baseCommonLinks,
      };
    }
    if (routeSection === "campus-life") {
      return {
        ...defaultContext,
        aboutTitle: "Campus Life Application",
        aboutText:
          "This campus-life area now works as a real application shell with task-based tabs, classified amenities and dedicated student affairs guidance.",
        contextualTitle: "Campus Life Tabs",
        contextualLinks: [
          { label: "Overview", href: "/campus-life/overview" },
          { label: "Hostels", href: "/campus-life/hostel" },
          { label: "Health Centre", href: "/campus-life/health-center" },
          { label: "Sports", href: "/campus-life/sports" },
          { label: "NSS Cell", href: "/campus-life/nss" },
        ],
        commonLinks: baseCommonLinks,
      };
    }
    if (routeSection === "rankings") {
      return {
        ...defaultContext,
        aboutTitle: "Rankings & Quality Application",
        aboutText:
          "This rankings and quality assurance area operates as a dedicated module displaying national rankings, NAAC status, and IQAC processes.",
        contextualTitle: "Rankings Tabs",
        contextualLinks: [
          { label: "Overview", href: "/rankings/overview" },
          { label: "NIRF", href: "/rankings/nirf" },
          { label: "IQAC", href: "/rankings/iqac" },
          { label: "NAAC", href: "/rankings/naac" },
          { label: "SSR Reports", href: "/rankings/ssr" },
        ],
        commonLinks: baseCommonLinks,
      };
    }
    if (routeSection === "research") {
      return {
        ...defaultContext,
        aboutTitle: "Research & Development Application",
        aboutText:
          "This research area coordinates and displays active projects, doctoral studies, ethics/consultancy policies, and business incubation.",
        contextualTitle: "Research Tabs",
        contextualLinks: [
          { label: "Overview", href: "/research/overview" },
          { label: "R&D Cell", href: "/research/r-and-d-cell" },
          { label: "Research Cell", href: "/research/research-cell" },
          { label: "Research Policy", href: "/research/research-policy" },
          { label: "Incubators", href: "/research/incubators" },
        ],
        commonLinks: baseCommonLinks,
      };
    }
    if (routeSection === "programs") {
      return {
        ...defaultContext,
        aboutTitle: "Academic Programs Application",
        aboutText:
          "This programs directory details undergraduate, postgraduate, integrated, and distance education coursework offered by the university.",
        contextualTitle: "Programs Tabs",
        contextualLinks: [
          { label: "Overview", href: "/programs/overview" },
          { label: "UG Programs", href: "/programs/ug-programs" },
          { label: "PG Programs", href: "/programs/pg-programs" },
          { label: "Integrated", href: "/programs/integrated-programs" },
          { label: "Distance Education", href: "/programs/distance-education-anucde" },
        ],
        commonLinks: baseCommonLinks,
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
        { label: "University Home", href: "/" },
      ],
      commonLinks: baseCommonLinks,
    };
  }

  return defaultContext;
}

function renderFooterLink(item: FooterNavItem) {
  const isAnchorOnly = item.href.startsWith("#");
  const isMailOrExternal =
    item.external || item.href.startsWith("mailto:") || item.href.startsWith("tel:");

  if (isMailOrExternal) {
    return (
      <a
        href={item.href}
        className="group inline-flex items-center gap-1.5 text-white/78 transition hover:text-[color:var(--utility-bar-accent)]"
      >
        <span>{item.label}</span>
        {item.external && <ExternalLink className="h-3.5 w-3.5 opacity-80" aria-hidden />}
      </a>
    );
  }

  if (isAnchorOnly) {
    return (
      <a
        href={item.href}
        className="text-white/78 transition hover:text-[color:var(--utility-bar-accent)]"
      >
        {item.label}
      </a>
    );
  }

  return (
    <Link
      to={item.href}
      className="text-white/78 transition hover:text-[color:var(--utility-bar-accent)]"
    >
      {item.label}
    </Link>
  );
}

export function SiteFooter() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const searchStr = useRouterState({ select: (state) => state.location.searchStr });
  const context = getFooterContext(pathname, searchStr);

  return (
    <footer className="relative overflow-hidden bg-[oklch(0.18_0.05_265)] text-[oklch(0.96_0.01_250)]">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-36 h-[420px] w-[420px] rounded-full border border-white/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -bottom-40 h-[420px] w-[420px] rounded-full border border-white/10"
      />

      <div className="relative mx-auto grid max-w-[1400px] gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.1fr] lg:px-8 lg:py-16">
        <section>
          <FooterHeading>{context.aboutTitle}</FooterHeading>
          <p className="mt-6 max-w-xl text-sm leading-7 text-white/80">{context.aboutText}</p>
          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/14 text-white transition hover:bg-[color:var(--utility-bar-accent)] hover:text-[oklch(0.18_0.05_265)]"
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              );
            })}
          </div>
        </section>

        <nav aria-label="Contextual footer links">
          <FooterHeading>{context.contextualTitle}</FooterHeading>
          <ul className="mt-6 space-y-3 text-sm">
            {context.contextualLinks.map((item) => (
              <li key={item.label}>{renderFooterLink(item)}</li>
            ))}
          </ul>
        </nav>

        <nav aria-label="University quick links">
          <FooterHeading>University Links</FooterHeading>
          <ul className="mt-6 space-y-3 text-sm">
            {context.commonLinks.map((item) => (
              <li key={item.label}>{renderFooterLink(item)}</li>
            ))}
          </ul>
        </nav>

        <section>
          <FooterHeading>Contact</FooterHeading>
          <div className="mt-6 space-y-6 text-sm text-white/82">
            <ContactItem icon={Phone}>
              <a href="tel:+918632346114" className="block transition hover:text-white">
                +91 863 234 6114
              </a>
              <a href="tel:+918632346118" className="mt-1 block transition hover:text-white">
                +91 863 234 6118
              </a>
            </ContactItem>
            <ContactItem icon={Mail}>
              <a href="mailto:registrar@anu.ac.in" className="transition hover:text-white">
                registrar@anu.ac.in
              </a>
            </ContactItem>
            <ContactItem icon={MapPin}>
              <address className="not-italic leading-6">
                Acharya Nagarjuna University
                <br />
                Nagarjuna Nagar, Guntur
                <br />
                Andhra Pradesh 522510
              </address>
            </ContactItem>
          </div>
        </section>
      </div>

      <a
        href="#top"
        aria-label="Back to top"
        className="absolute bottom-20 right-6 hidden h-12 w-12 items-center justify-center rounded-full bg-[oklch(0.65_0.19_42)] text-[oklch(0.18_0.05_265)] shadow-lg transition hover:-translate-y-1 hover:bg-[color:var(--utility-bar-accent)] lg:flex"
      >
        <ArrowUp className="h-5 w-5" aria-hidden />
      </a>

      <div className="relative bg-[oklch(0.65_0.19_42)] text-[oklch(0.18_0.05_265)]">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-2 px-6 py-4 text-center text-sm font-semibold md:flex-row lg:px-8">
          <p>ACHARYA NAGARJUNA UNIVERSITY</p>
          <p>Copyright (c) ANU 2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-lg font-bold tracking-tight text-white">{children}</h2>
      <div className="mt-2 h-px w-14 bg-[color:var(--utility-bar-accent)]" />
    </div>
  );
}

function ContactItem({ children, icon: Icon }: { children: React.ReactNode; icon: typeof Phone }) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[oklch(0.65_0.19_42)] text-[oklch(0.18_0.05_265)]">
        <Icon className="h-4 w-4" aria-hidden />
      </span>
      <div className="pt-1">{children}</div>
    </div>
  );
}
