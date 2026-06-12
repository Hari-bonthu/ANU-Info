import { createFileRoute, Link, redirect, useNavigate } from "@tanstack/react-router";
import { Building2, Clock3, Mail, Phone } from "lucide-react";
import { getPublishedPage } from "@/content/page-registry";
import { StudentServicesApp } from "@/components/student-services/student-services-app";
import { EmployeeServicesApp } from "@/components/employee-services/employee-services-app";
import { CampusLifeApp } from "@/components/campus-life/campus-life-app";
import { RankingsApp } from "@/components/rankings/rankings-app";
import { ResearchApp } from "@/components/research/research-app";
import { ProgramsApp } from "@/components/programs/programs-app";
import BreadcrumbTrail from "@/components/BreadcrumbTrail";
import { PageHero, PageSections, SideNavigation } from "@/components/content/page-blocks";
import {
  getStudentServiceTab,
  studentServicePageAliases,
  type StudentServiceTabKey,
} from "@/data/student-services-app";
import {
  getEmployeeServiceTab,
  employeeServicePageAliases,
  type EmployeeServiceTabKey,
} from "@/data/employee-services-app";
import {
  getCampusLifeTab,
  campusLifePageAliases,
  type CampusLifeTabKey,
} from "@/data/campus-life-app";
import { getRankingsTab, rankingsPageAliases, type RankingsTabKey } from "@/data/rankings-app";
import { getResearchTab, researchPageAliases, type ResearchTabKey } from "@/data/research-app";
import { getProgramsTab, programsPageAliases, type ProgramsTabKey } from "@/data/programs-app";

type PlaceholderSearch = {
  page?: string;
};

const pageAliasMap: Record<string, string> = {
  "notifications-timetables": "exam-notifications",
  "downloads-forms": "downloads",
  ...studentServicePageAliases,
  ...employeeServicePageAliases,
  ...campusLifePageAliases,
  ...rankingsPageAliases,
  ...researchPageAliases,
  ...programsPageAliases,
};

function normalizeSlug(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[_\s]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function resolvePage(page?: string) {
  const normalized = normalizeSlug(page ?? "overview");
  return pageAliasMap[normalized] ?? normalized;
}

export const Route = createFileRoute("/pages/$section")({
  validateSearch: (search: Record<string, unknown>): PlaceholderSearch => ({
    page: typeof search.page === "string" ? search.page : undefined,
  }),
  beforeLoad: ({ params, search }) => {
    if (params.section === "about") {
      const resolved = resolvePage(search.page);
      if (resolved === "overview" || resolved === "profile") {
        throw redirect({
          to: "/aboutprofile",
        });
      }
      if (resolved === "history") {
        throw redirect({
          to: "/history",
        });
      }
      if (resolved === "jubilee") {
        throw redirect({
          to: "/jubilee",
        });
      }
      throw redirect({
        to: "/about/$pageId",
        params: { pageId: resolved },
      });
    }

    if (params.section === "student-services") {
      throw redirect({
        to: "/student-services/$pageId",
        params: { pageId: search.page || "overview" },
      });
    }
    if (params.section === "employee-services") {
      throw redirect({
        to: "/employee-services/$pageId",
        params: { pageId: search.page || "overview" },
      });
    }
    if (params.section === "campus-life") {
      throw redirect({
        to: "/campus-life/$pageId",
        params: { pageId: search.page || "overview" },
      });
    }
    if (params.section === "rankings") {
      throw redirect({
        to: "/rankings/$pageId",
        params: { pageId: search.page || "overview" },
      });
    }
    if (params.section === "research") {
      throw redirect({
        to: "/research/$pageId",
        params: { pageId: search.page || "overview" },
      });
    }
    if (params.section === "programs") {
      throw redirect({
        to: "/programs/$pageId",
        params: { pageId: search.page || "overview" },
      });
    }
    if (params.section === "admissions") {
      throw redirect({
        to: "/admissions/$pageId",
        params: { pageId: search.page || "overview" },
      });
    }
    if (params.section === "academics") {
      throw redirect({
        to: "/academics/$pageId",
        params: { pageId: search.page || "overview" },
      });
    }

    const normalizedSection = normalizeSlug(params.section);
    const normalizedPage = resolvePage(search.page);

    if (normalizedSection !== params.section || normalizedPage !== (search.page ?? "overview")) {
      throw redirect({
        to: "/pages/$section",
        params: { section: normalizedSection },
        search: { page: normalizedPage },
        replace: true,
      });
    }
  },
  component: SectionPage,
});

function toReadable(input: string) {
  return input
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}

function PlaceholderPage({ section, page }: { section: string; page: string }) {
  const sectionLabel = toReadable(section);
  const pageLabel = page ? toReadable(page) : "Overview";

  return (
    <main className="min-h-[70vh] anu-page-root">
      <BreadcrumbTrail
        items={[{ label: "Home", href: "/" }, { label: sectionLabel }, { label: pageLabel }]}
      />
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand)]">
            Page in progress
          </p>
          <h1 className="mt-3 text-3xl font-bold text-[oklch(0.22_0.06_265)] md:text-4xl">
            {sectionLabel}: {pageLabel}
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
            This section is being prepared as part of the official ANU website structure. Verified
            details such as eligibility, schedules, contacts, and downloadable documents will be
            added here once approved.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-10 lg:grid-cols-[1.45fr_1fr] lg:px-8">
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground">Template Status</h2>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">
            You are viewing the shared fallback template for incomplete routes using
            <code> /pages/$section?page=$page</code>. Once the final page is ready, this URL can map
            to the full module.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-border/80 bg-background p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Section
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">{sectionLabel}</p>
            </div>
            <div className="rounded-lg border border-border/80 bg-background p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Page
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">{pageLabel}</p>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Back to Home
            </Link>
            <Link
              to="/aboutprofile"
              className="inline-flex items-center justify-center rounded-md border border-border bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              University Profile
            </Link>
          </div>
        </div>

        <aside className="rounded-2xl border border-border bg-white p-6">
          <h2 className="text-base font-semibold text-foreground">Official Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <Building2 className="mt-0.5 h-4 w-4 text-[color:var(--brand)]" aria-hidden />
              <span>
                Acharya Nagarjuna University, Nagarjuna Nagar, Guntur, Andhra Pradesh 522510
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-[color:var(--brand)]" aria-hidden />
              <a href="tel:+918632346114" className="hover:text-foreground">
                +91 863 234 6114
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-[color:var(--brand)]" aria-hidden />
              <a href="mailto:registrar@anu.ac.in" className="hover:text-foreground">
                registrar@anu.ac.in
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock3 className="mt-0.5 h-4 w-4 text-[color:var(--brand)]" aria-hidden />
              <span>
                Working hours and notices are published in the relevant finalized section.
              </span>
            </li>
          </ul>
        </aside>
      </section>
    </main>
  );
}

function PublishedPage({ section, page }: { section: string; page: string }) {
  const published = getPublishedPage(section, page);
  if (!published) return null;
  const { content } = published;

  return (
    <main className="min-h-[70vh] anu-page-root pb-24">
      <BreadcrumbTrail items={content.breadcrumbs} />
      <PageHero content={content} />
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-10 lg:grid-cols-[1.55fr_1fr] lg:px-8">
        <PageSections sections={content.sections} />
        <SideNavigation content={content} />
      </section>
    </main>
  );
}

function StudentServicesPage({ page }: { page: string }) {
  const navigate = useNavigate({ from: "/pages/$section" });
  const currentTab = getStudentServiceTab(page);

  return (
    <StudentServicesApp
      page={currentTab.key}
      onPageChange={(nextPage: StudentServiceTabKey) => {
        navigate({
          to: "/pages/$section",
          params: { section: "student-services" },
          search: { page: nextPage },
        });
      }}
    />
  );
}

function EmployeeServicesPage({ page }: { page: string }) {
  const navigate = useNavigate({ from: "/pages/$section" });
  const currentTab = getEmployeeServiceTab(page);

  return (
    <EmployeeServicesApp
      page={currentTab.key}
      onPageChange={(nextPage: EmployeeServiceTabKey) => {
        navigate({
          to: "/pages/$section",
          params: { section: "employee-services" },
          search: { page: nextPage },
        });
      }}
    />
  );
}

function CampusLifePage({ page }: { page: string }) {
  const navigate = useNavigate({ from: "/pages/$section" });
  const currentTab = getCampusLifeTab(page);

  return (
    <CampusLifeApp
      page={currentTab.key}
      onPageChange={(nextPage: CampusLifeTabKey) => {
        navigate({
          to: "/pages/$section",
          params: { section: "campus-life" },
          search: { page: nextPage },
        });
      }}
    />
  );
}

function RankingsPage({ page }: { page: string }) {
  const navigate = useNavigate({ from: "/pages/$section" });
  const currentTab = getRankingsTab(page);

  return (
    <RankingsApp
      page={currentTab.key}
      onPageChange={(nextPage: RankingsTabKey) => {
        navigate({
          to: "/pages/$section",
          params: { section: "rankings" },
          search: { page: nextPage },
        });
      }}
    />
  );
}

function ResearchPage({ page }: { page: string }) {
  const navigate = useNavigate({ from: "/pages/$section" });
  const currentTab = getResearchTab(page);

  return (
    <ResearchApp
      page={currentTab.key}
      onPageChange={(nextPage: ResearchTabKey) => {
        navigate({
          to: "/pages/$section",
          params: { section: "research" },
          search: { page: nextPage },
        });
      }}
    />
  );
}

function ProgramsPage({ page }: { page: string }) {
  const navigate = useNavigate({ from: "/pages/$section" });
  const currentTab = getProgramsTab(page);

  return (
    <ProgramsApp
      page={currentTab.key}
      onPageChange={(nextPage: ProgramsTabKey) => {
        navigate({
          to: "/pages/$section",
          params: { section: "programs" },
          search: { page: nextPage },
        });
      }}
    />
  );
}

function SectionPage() {
  const { section } = Route.useParams();
  const { page } = Route.useSearch();
  const resolvedPage = resolvePage(page);

  if (section === "student-services") {
    return <StudentServicesPage page={resolvedPage} />;
  }

  if (section === "employee-services") {
    return <EmployeeServicesPage page={resolvedPage} />;
  }

  if (section === "campus-life") {
    return <CampusLifePage page={resolvedPage} />;
  }

  if (section === "rankings") {
    return <RankingsPage page={resolvedPage} />;
  }

  if (section === "research") {
    return <ResearchPage page={resolvedPage} />;
  }

  if (section === "programs") {
    return <ProgramsPage page={resolvedPage} />;
  }

  const published = getPublishedPage(section, resolvedPage);
  if (published) {
    return <PublishedPage section={section} page={resolvedPage} />;
  }

  return <PlaceholderPage section={section} page={resolvedPage} />;
}
