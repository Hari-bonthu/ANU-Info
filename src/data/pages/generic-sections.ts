import type { PageContent } from "@/content/page-schema";
import { validatePageContent } from "@/content/page-schema";

type PageDef = {
  page: string;
  title: string;
  summary: string;
  owner: string;
};

const sectionPages: Record<string, PageDef[]> = {
  about: [
    {
      page: "overview",
      title: "About",
      summary: "Institutional overview, governance and identity resources.",
      owner: "Registrar Office",
    },
    {
      page: "contact",
      title: "Contact",
      summary: "Official communication points and institutional contact channels.",
      owner: "Public Relations Cell",
    },
    {
      page: "vision-mission",
      title: "Vision & Mission",
      summary: "Institutional vision, mission and development direction.",
      owner: "Planning and Development Cell",
    },
    {
      page: "emblem",
      title: "University Emblem",
      summary: "Context and official usage notes for the ANU emblem.",
      owner: "Public Relations Cell",
    },
    {
      page: "chancellor",
      title: "Chancellor",
      summary: "Role-level information and institutional office context.",
      owner: "Administration Section",
    },
    {
      page: "vice-chancellor",
      title: "Vice Chancellor",
      summary: "Leadership office information and institutional responsibilities.",
      owner: "Administration Section",
    },
    {
      page: "rector",
      title: "Rector",
      summary: "Academic administration office role and responsibilities.",
      owner: "Administration Section",
    },
    {
      page: "registrar",
      title: "Registrar",
      summary: "Registrar office responsibilities and service channels.",
      owner: "Registrar Office",
    },
    {
      page: "executive-council",
      title: "Executive Council",
      summary: "Policy and governance body overview.",
      owner: "Administration Section",
    },
    {
      page: "organization-structure",
      title: "Organization Structure",
      summary: "Institutional structure and administrative hierarchy reference.",
      owner: "Administration Section",
    },
    {
      page: "statutory-committees",
      title: "Statutory Committees",
      summary: "Committee structures and governance role references.",
      owner: "Administration Section",
    },
    {
      page: "strategic-plan",
      title: "Strategic Plan",
      summary: "Strategic direction and implementation priorities.",
      owner: "Planning and Development Cell",
    },
    {
      page: "facebook",
      title: "Facebook",
      summary: "Official social channel reference and communication guidance.",
      owner: "Public Relations Cell",
    },
    {
      page: "instagram",
      title: "Instagram",
      summary: "Official social channel reference and communication guidance.",
      owner: "Public Relations Cell",
    },
    {
      page: "twitter",
      title: "Twitter",
      summary: "Official social channel reference and communication guidance.",
      owner: "Public Relations Cell",
    },
  ],
  admissions: [
    {
      page: "overview",
      title: "Admissions",
      summary: "Admissions process overview and applicant guidance.",
      owner: "Admissions Cell",
    },
    {
      page: "why-choose-us",
      title: "Why Choose Us",
      summary: "Academic ecosystem highlights and student value proposition.",
      owner: "Admissions Cell",
    },
    {
      page: "academic-calendar",
      title: "Academic Calendar",
      summary: "Academic milestones and cycle-level planning guidance.",
      owner: "Academic Section",
    },
    {
      page: "fee-structure",
      title: "Fee Structure",
      summary: "Fee structure guidance across programmes and categories.",
      owner: "Admissions Cell",
    },
    {
      page: "scholarships",
      title: "Scholarships",
      summary: "Scholarship pathways and support references.",
      owner: "Scholarship Cell",
    },
    {
      page: "how-to-apply",
      title: "How to Apply",
      summary: "Step-by-step admission application workflow.",
      owner: "Admissions Cell",
    },
    {
      page: "eligibility-criteria",
      title: "Eligibility Criteria",
      summary: "Programme-level eligibility reference guidance.",
      owner: "Admissions Cell",
    },
    {
      page: "affiliated-colleges",
      title: "Affiliated Colleges",
      summary: "Affiliated institutions and admission context.",
      owner: "Affiliation Section",
    },
    {
      page: "helpdesk",
      title: "Admission Helpdesk",
      summary: "Helpdesk channels for admission-related support.",
      owner: "Admissions Cell",
    },
    {
      page: "faqs",
      title: "Admissions FAQ",
      summary: "Frequently asked admissions support queries.",
      owner: "Admissions Cell",
    },
    {
      page: "brochure",
      title: "Admissions Brochure",
      summary: "Prospectus access and programme-information guidance.",
      owner: "Admissions Cell",
    },
  ],
  academics: [
    {
      page: "overview",
      title: "Academics",
      summary: "Academic units, frameworks and educational pathways.",
      owner: "Academic Section",
    },
    {
      page: "anucde",
      title: "ANUCDE",
      summary: "Distance education unit reference and learner support scope.",
      owner: "ANUCDE Office",
    },
    {
      page: "library",
      title: "Library",
      summary: "Central library resources and usage guidance.",
      owner: "Central Library",
    },
    {
      page: "ambedkar-chair",
      title: "Dr. B.R. Ambedkar Chair",
      summary: "Special chair initiatives and activities overview.",
      owner: "Academic Section",
    },
    {
      page: "women-studies",
      title: "Centre for Women Studies",
      summary: "Centre mission and programme scope.",
      owner: "Centre for Women Studies",
    },
    {
      page: "csr-centre",
      title: "Centre for CSR",
      summary: "CSR-focused research and engagement initiatives.",
      owner: "Centre for CSR",
    },
    {
      page: "phule-centre",
      title: "Phule Centre",
      summary: "Centre profile and thematic academic initiatives.",
      owner: "Academic Section",
    },
    {
      page: "mahatma-gandhi-centre",
      title: "Mahatma Gandhi Centre",
      summary: "Centre profile and social thought engagement.",
      owner: "Academic Section",
    },
    {
      page: "jagjivan-ram-centre",
      title: "Babu Jagjivan Ram Centre",
      summary: "Centre profile and social equity initiatives.",
      owner: "Academic Section",
    },
    {
      page: "computer-centre",
      title: "Computer Centre",
      summary: "Institutional computing support and services.",
      owner: "Computer Centre",
    },
    {
      page: "anu-code",
      title: "ANU Code",
      summary: "Academic and institutional code reference.",
      owner: "Academic Section",
    },
    {
      page: "ordinances",
      title: "Ordinances",
      summary: "Academic ordinance references and governance rules.",
      owner: "Academic Section",
    },
    {
      page: "code-of-conduct",
      title: "Code of Conduct",
      summary: "Conduct expectations across institutional stakeholders.",
      owner: "Academic Section",
    },
  ],
  research: [
    {
      page: "overview",
      title: "Research",
      summary: "Research ecosystem overview, policies and opportunities.",
      owner: "Research Cell",
    },
    {
      page: "r-and-d-cell",
      title: "R&D Cell",
      summary: "R&D coordination scope and support pathways.",
      owner: "R&D Cell",
    },
    {
      page: "research-cell",
      title: "Research Cell",
      summary: "Research administration and project support services.",
      owner: "Research Cell",
    },
    {
      page: "research-policy",
      title: "Research Policy",
      summary: "Research policy framework and implementation guidance.",
      owner: "Research Cell",
    },
    {
      page: "consultancy-policy",
      title: "Consultancy Policy",
      summary: "Consultancy policy principles and process guidance.",
      owner: "Research Cell",
    },
    {
      page: "incubators",
      title: "Incubators",
      summary: "Innovation support and incubation linkages.",
      owner: "Innovation Cell",
    },
  ],
  programs: [
    {
      page: "overview",
      title: "Programs",
      summary: "Programme pathways across UG, PG and research streams.",
      owner: "Academic Section",
    },
    {
      page: "ug-programs",
      title: "UG Programs",
      summary: "Undergraduate programme categories and guidance.",
      owner: "Academic Section",
    },
    {
      page: "integrated-programs",
      title: "Integrated Programs",
      summary: "Integrated programme structure and progression context.",
      owner: "Academic Section",
    },
    {
      page: "diploma-courses",
      title: "Diploma Courses",
      summary: "Diploma course orientation and enrollment guidance.",
      owner: "Academic Section",
    },
    {
      page: "pg-programs",
      title: "PG Programs",
      summary: "Postgraduate programme opportunities and structure.",
      owner: "Academic Section",
    },
    {
      page: "pg-diploma",
      title: "PG Diploma",
      summary: "PG diploma pathways and programme context.",
      owner: "Academic Section",
    },
    {
      page: "distance-education-anucde",
      title: "Distance Education (ANUCDE)",
      summary: "Distance learning options through ANUCDE.",
      owner: "ANUCDE Office",
    },
    {
      page: "phd-programs",
      title: "PhD Programs",
      summary: "Doctoral programme pathways and research entry guidance.",
      owner: "Research Cell",
    },
    {
      page: "m-phil-programs",
      title: "M.Phil Programs",
      summary: "M.Phil pathway references and guidance information.",
      owner: "Academic Section",
    },
    {
      page: "post-doctoral-fellowships",
      title: "Post-Doctoral Fellowships",
      summary: "Post-doctoral engagement scope and support notes.",
      owner: "Research Cell",
    },
  ],
  rankings: [
    {
      page: "overview",
      title: "Rankings",
      summary: "Quality, rankings and accreditation overview.",
      owner: "IQAC",
    },
    {
      page: "nirf",
      title: "NIRF",
      summary: "NIRF participation and ranking reference area.",
      owner: "IQAC",
    },
    {
      page: "iqac",
      title: "IQAC",
      summary: "Internal quality assurance processes and references.",
      owner: "IQAC",
    },
    {
      page: "ssr",
      title: "SSR",
      summary: "Self-study report related quality documentation context.",
      owner: "IQAC",
    },
    {
      page: "naac",
      title: "NAAC",
      summary: "NAAC accreditation profile and quality framework references.",
      owner: "IQAC",
    },
    {
      page: "awards-recognitions",
      title: "Awards & Recognitions",
      summary: "Institutional recognitions and distinctions overview.",
      owner: "Public Relations Cell",
    },
    {
      page: "qs-asia-ranking-2022",
      title: "QS Asia Ranking 2022",
      summary: "QS ranking reference and context.",
      owner: "IQAC",
    },
    {
      page: "qs-i-gauge-e-leas",
      title: "QS I-Gauge E-Leas",
      summary: "QS I-Gauge related profile and references.",
      owner: "IQAC",
    },
    {
      page: "world-ranking",
      title: "World Ranking",
      summary: "Global ranking reference overview.",
      owner: "IQAC",
    },
    {
      page: "impact-ranking",
      title: "Impact Ranking",
      summary: "Impact ranking perspective and context.",
      owner: "IQAC",
    },
    {
      page: "green-metric-ranking",
      title: "Green Metric Ranking",
      summary: "Sustainability and green ranking context.",
      owner: "IQAC",
    },
    {
      page: "green-university-award-2021",
      title: "Green University Award 2021",
      summary: "Award reference and sustainability focus context.",
      owner: "IQAC",
    },
  ],
  "campus-life": [
    {
      page: "overview",
      title: "Campus Life",
      summary: "Campus life ecosystem and student engagement spaces.",
      owner: "Student Affairs",
    },
    {
      page: "hostel",
      title: "Hostel",
      summary: "Residential facilities and student accommodation guidance.",
      owner: "Hostel Administration",
    },
    {
      page: "health-center",
      title: "Health Center",
      summary: "Campus health support and primary care services.",
      owner: "Health Center",
    },
    {
      page: "sports",
      title: "Sports",
      summary: "Sports infrastructure and student athletic development support.",
      owner: "Sports Section",
    },
    {
      page: "nss",
      title: "NSS",
      summary: "National Service Scheme initiatives and engagement opportunities.",
      owner: "NSS Unit",
    },
    {
      page: "ncc",
      title: "NCC",
      summary: "National Cadet Corps activities and participation pathways.",
      owner: "NCC Unit",
    },
    {
      page: "elc",
      title: "ELC",
      summary: "Electoral literacy and civic engagement initiatives.",
      owner: "Student Affairs",
    },
    {
      page: "news",
      title: "News",
      summary: "Institutional news stream and public updates.",
      owner: "Public Relations Cell",
    },
    {
      page: "events",
      title: "Events",
      summary: "Academic and cultural event channels.",
      owner: "Public Relations Cell",
    },
    {
      page: "anu-radio-91-2",
      title: "ANU Radio 91.2",
      summary: "Campus radio channel reference and outreach context.",
      owner: "Media and Outreach",
    },
    {
      page: "herbal-garden",
      title: "Herbal Garden",
      summary: "Campus herbal garden and environmental awareness initiatives.",
      owner: "Campus Development",
    },
  ],
  "employee-services": [
    {
      page: "overview",
      title: "Employee Services",
      summary: "Policy, regulation and support channels for faculty and staff.",
      owner: "Administration Section",
    },
    {
      page: "careers",
      title: "Careers",
      summary: "Institutional recruitment and career opportunities reference area.",
      owner: "Recruitment Cell",
    },
    {
      page: "employee-portal",
      title: "Employee Portal",
      summary: "Employee portal support and service access guidance.",
      owner: "e-Governance Cell",
    },
    {
      page: "webmail",
      title: "WebMail",
      summary: "Official communication system access and usage guidance.",
      owner: "Computer Centre",
    },
    {
      page: "it-policy",
      title: "IT Policy",
      summary: "Information technology policy references and expectations.",
      owner: "Computer Centre",
    },
    {
      page: "green-policy",
      title: "Green Policy",
      summary: "Institutional sustainability policy framework.",
      owner: "Administration Section",
    },
    {
      page: "plastic-free-policy",
      title: "Plastic Free Policy",
      summary: "Plastic-free campus policy and implementation guidance.",
      owner: "Administration Section",
    },
    {
      page: "ordinances-orders",
      title: "Ordinances & Orders",
      summary: "Administrative orders and ordinance references.",
      owner: "Administration Section",
    },
    {
      page: "statutory-bodies",
      title: "Statutory Bodies",
      summary: "Statutory governance bodies and institutional roles.",
      owner: "Administration Section",
    },
    {
      page: "faculty-portal",
      title: "Faculty Portal",
      summary: "Faculty portal access support and guidance.",
      owner: "e-Governance Cell",
    },
    {
      page: "pensioner-details",
      title: "Pensioner Details",
      summary: "Pensioner service support and reference information.",
      owner: "Administration Section",
    },
    {
      page: "holiday-list",
      title: "Holiday List",
      summary: "Institutional holiday and closure reference.",
      owner: "Administration Section",
    },
  ],
  "student-services": [
    {
      page: "exam-section",
      title: "Exam Section",
      summary: "Examination section operations and student support information.",
      owner: "Examination Section",
    },
    {
      page: "notifications-timetables",
      title: "Notifications & Timetables",
      summary: "Notifications and timetable references for students.",
      owner: "Examination Section",
    },
    {
      page: "downloads-forms",
      title: "Downloads (Forms)",
      summary: "Form templates and service document access guidance.",
      owner: "Student Services Cell",
    },
    {
      page: "alumni",
      title: "Alumni",
      summary: "Alumni engagement channels and institutional networks.",
      owner: "Alumni Relations",
    },
    {
      page: "services",
      title: "Services",
      summary: "General student service portfolio and support channels.",
      owner: "Student Services Cell",
    },
    {
      page: "anti-ragging-cell",
      title: "Anti-Ragging Cell",
      summary: "Anti-ragging support, policy and reporting channels.",
      owner: "Student Affairs",
    },
    {
      page: "women-grievance-cell",
      title: "Women Grievance Cell",
      summary: "Women grievance redressal support pathways.",
      owner: "Student Affairs",
    },
    {
      page: "sc-st-cell",
      title: "SC/ST Cell",
      summary: "SC/ST student support and inclusion framework.",
      owner: "Student Affairs",
    },
    {
      page: "differently-abled-cell",
      title: "Differently Abled Cell",
      summary: "Accessibility support and inclusive service channels.",
      owner: "Student Affairs",
    },
    {
      page: "student-grievance-cell",
      title: "Student Grievance Cell",
      summary: "Student grievance intake and resolution pathways.",
      owner: "Student Affairs",
    },
  ],
};

function sectionLabel(section: string) {
  return section
    .split("-")
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
    .join(" ");
}

function buildPage(section: string, def: PageDef): PageContent {
  const sectionTitle = sectionLabel(section);
  return validatePageContent({
    meta: {
      title: `${def.title} | Acharya Nagarjuna University`,
      description: def.summary,
      keywords: [sectionTitle, def.title, "Acharya Nagarjuna University"],
      owner: def.owner,
      lastUpdated: "June 1, 2026",
      canonicalUrl: `/pages/${section}?page=${def.page}`,
    },
    hero: {
      heading: def.title,
      subheading: def.summary,
      ctaLabel: "Back to Home",
      ctaLink: "/",
    },
    governance: {
      sourceRef: "ANU Internal Content Consolidation 2026",
      approvedBy: "Registrar Office",
      approvedOn: "June 1, 2026",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: sectionTitle, href: `/pages/${section}?page=overview` },
      { label: def.title, href: `/pages/${section}?page=${def.page}` },
    ],
    relatedLinks: [
      { label: `${sectionTitle} Overview`, href: `/pages/${section}?page=overview` },
      { label: "Student Services", href: "/pages/student-services?page=overview" },
      { label: "Admissions", href: "/pages/admissions?page=overview" },
    ],
    onThisPage: [
      { label: "Overview", href: "#overview" },
      { label: "Service Areas", href: "#service-areas" },
      { label: "Reference Downloads", href: "#reference-downloads" },
      { label: "Contact", href: "#contact" },
    ],
    sections: [
      {
        id: "overview",
        type: "richText",
        title: `${def.title} Overview`,
        paragraphs: [
          `This page provides the official ANU reference scope for ${def.title}.`,
          "Information is maintained in a structured format to support consistent student and stakeholder navigation across the university website.",
        ],
      },
      {
        id: "service-areas",
        type: "cards",
        title: "Key Service Areas",
        items: [
          {
            title: "Policy & Process",
            description: "Procedural references and policy-linked guidance for this page area.",
          },
          {
            title: "Support Channels",
            description: "Helpdesk and institutional communication pathways mapped for users.",
          },
          {
            title: "Academic/Administrative Linkage",
            description: "Cross-links to related university services and academic units.",
          },
        ],
      },
      {
        id: "reference-downloads",
        type: "downloads",
        title: "Reference Downloads",
        items: [
          {
            name: `${def.title} Information Sheet`,
            format: "PDF",
            href: `/pages/${section}?page=${def.page}`,
            note: "Updated document index",
          },
          {
            name: `${def.title} Workflow Note`,
            format: "PDF",
            href: `/pages/${section}?page=${def.page}`,
            note: "Process reference",
          },
        ],
      },
      {
        id: "contact",
        type: "contact",
        title: "Contact",
        items: [
          { label: "University Main Line", value: "+91 863 234 6114", href: "tel:+918632346114" },
          {
            label: "Registrar Office",
            value: "registrar@anu.ac.in",
            href: "mailto:registrar@anu.ac.in",
          },
          {
            label: "Campus Address",
            value: "Acharya Nagarjuna University, Nagarjuna Nagar, Guntur, Andhra Pradesh 522510",
          },
        ],
      },
    ],
  });
}

export function getGenericSectionPage(section: string, page: string): PageContent | undefined {
  const sectionDefs = sectionPages[section];
  if (!sectionDefs) return undefined;
  const def = sectionDefs.find((item) => item.page === page);
  if (!def) return undefined;
  return buildPage(section, def);
}

export function getGenericSectionEntries() {
  return Object.entries(sectionPages).flatMap(([section, defs]) =>
    defs.map((def) => ({
      section,
      page: def.page,
      title: def.title,
    })),
  );
}
