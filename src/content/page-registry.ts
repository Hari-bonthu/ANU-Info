import type { PageContent } from "@/content/page-schema";
import { getStudentServicesPage } from "@/data/pages/student-services";
import { getGenericSectionEntries, getGenericSectionPage } from "@/data/pages/generic-sections";

export type PageStatus = "draft" | "review" | "published";

export type PageRegistryEntry = {
  section: string;
  page: string;
  status: PageStatus;
  title: string;
  dataPath?: string;
  getContent?: () => PageContent | undefined;
};

const studentServicesCoreRegistry: PageRegistryEntry[] = [
  {
    section: "student-services",
    page: "overview",
    status: "published",
    title: "Student Services",
    dataPath: "src/data/pages/student-services/index.ts#overview",
    getContent: () => getStudentServicesPage("overview"),
  },
  {
    section: "student-services",
    page: "exam-notifications",
    status: "published",
    title: "Exam Notifications",
    dataPath: "src/data/pages/student-services/index.ts#exam-notifications",
    getContent: () => getStudentServicesPage("exam-notifications"),
  },
  {
    section: "student-services",
    page: "results",
    status: "published",
    title: "Results",
    dataPath: "src/data/pages/student-services/index.ts#results",
    getContent: () => getStudentServicesPage("results"),
  },
  {
    section: "student-services",
    page: "downloads",
    status: "published",
    title: "Downloads",
    dataPath: "src/data/pages/student-services/index.ts#downloads",
    getContent: () => getStudentServicesPage("downloads"),
  },
  {
    section: "student-services",
    page: "placements",
    status: "published",
    title: "Placements",
    dataPath: "src/data/pages/student-services/index.ts#placements",
    getContent: () => getStudentServicesPage("placements"),
  },
  {
    section: "student-services",
    page: "student-portal",
    status: "published",
    title: "Student Portal",
    dataPath: "src/data/pages/student-services/index.ts#student-portal",
    getContent: () => getStudentServicesPage("student-portal"),
  },
];

const generatedRegistry: PageRegistryEntry[] = getGenericSectionEntries().map((entry) => ({
  section: entry.section,
  page: entry.page,
  status: "published",
  title: entry.title,
  dataPath: `src/data/pages/generic-sections.ts#${entry.section}/${entry.page}`,
  getContent: () => getGenericSectionPage(entry.section, entry.page),
}));

const registry: PageRegistryEntry[] = [...studentServicesCoreRegistry, ...generatedRegistry];

function key(section: string, page: string) {
  return `${section}/${page}`;
}

const registryMap = new Map(registry.map((entry) => [key(entry.section, entry.page), entry]));

export function getPage(section: string, page: string) {
  return registryMap.get(key(section, page));
}

export function getPublishedPage(section: string, page: string) {
  const entry = getPage(section, page);
  if (!entry || entry.status !== "published") return undefined;
  const content = entry.getContent?.();
  if (!content) return undefined;
  return { entry, content };
}

export function getPageStatus(section: string, page: string): PageStatus | undefined {
  return getPage(section, page)?.status;
}

export function getAllPages() {
  return registry;
}
