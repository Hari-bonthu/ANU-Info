export type ResearchTabKey =
  | "overview"
  | "r-and-d-cell"
  | "research-cell"
  | "research-policy"
  | "consultancy-policy"
  | "incubators";

type HeroMetric = {
  label: string;
  value: string;
  note: string;
};

type HighlightCard = {
  title: string;
  description: string;
  tone?: "default" | "accent" | "success";
};

type NoticeItem = {
  date: string;
  title: string;
  description: string;
  status: string;
};

type StepItem = {
  title: string;
  description: string;
};

type ResourceItem = {
  title: string;
  channel: string;
  turnaround: string;
  requirements: string;
  href?: string;
};

type FAQItem = {
  question: string;
  answer: string;
};

type ContactItem = {
  label: string;
  value: string;
  href?: string;
};

type SupportPanel = {
  availability: string;
  responseTime: string;
  bestFor: string[];
  notes: string[];
};

export type ResearchTab = {
  key: ResearchTabKey;
  title: string;
  shortTitle: string;
  badge?: string;
  description: string;
  metrics: HeroMetric[];
  highlights: HighlightCard[];
  notices?: NoticeItem[];
  steps?: StepItem[];
  resources?: ResourceItem[];
  faq?: FAQItem[];
  contacts?: ContactItem[];
  supportPanel: SupportPanel;
};

const sharedContacts: ContactItem[] = [
  { label: "R&D Cell Office", value: "+91 863 234 6126", href: "tel:+918632346126" },
  { label: "Research Cell Nodal", value: "research@anu.ac.in", href: "mailto:research@anu.ac.in" },
];

export const researchPageAliases: Record<string, ResearchTabKey> = {
  "rd-cell": "r-and-d-cell",
  "research-cell-info": "research-cell",
  policies: "research-policy",
  consultancy: "consultancy-policy",
  incubation: "incubators",
};

export const researchTabs: ResearchTab[] = [
  {
    key: "overview",
    title: "Research & Development Hub",
    shortTitle: "Overview",
    badge: "DST-Funded",
    description:
      "Welcome to the central research and development hub of Acharya Nagarjuna University. Explore funded projects, R&D cells, patent filing support, consultancy services, and institutional incubators.",
    metrics: [
      { label: "Funded Projects", value: "35+", note: "DST, UGC, CSIR, and ISRO sponsored" },
      { label: "Patents Filed", value: "12+", note: "By faculty and scholars recently" },
      { label: "Research Scholars", value: "450+", note: "Active PhD and PDF researchers" },
      { label: "Incubators", value: "2", note: "Innovation and startup incubation cells" },
    ],
    highlights: [
      {
        title: "Active DST-Funded Labs",
        description:
          "Our state-of-the-art laboratory infrastructure is funded by the Department of Science and Technology (DST) under FIST programs.",
        tone: "accent",
      },
      {
        title: "Patent and IPR Cell",
        description:
          "Centralized support to help university researchers draft patents, perform searches, and submit intellectual property applications.",
      },
      {
        title: "Consultancy Opportunities",
        description:
          "Connecting industry demands with academic expertise under structured consultancy and technology transfer policies.",
        tone: "success",
      },
    ],
    steps: [
      {
        title: "Select Research Area",
        description:
          "Browse the R&D cell, research policies, or consultancy cells based on your current project phase.",
      },
      {
        title: "Review Research Policy",
        description:
          "Check plagiarism limits, ethics clearances, and submission formats prior to writing papers.",
      },
      {
        title: "Register Project Proposal",
        description:
          "Route external grant proposals through the central R&D cell for official Registrar endorsement.",
      },
    ],
    resources: [
      {
        title: "ANU Research Policy Manual",
        channel: "Research Cell",
        turnaround: "Instant download",
        requirements: "None",
      },
      {
        title: "Patent Application Guidelines",
        channel: "IPR Cell Desk",
        turnaround: "Instant download",
        requirements: "None",
      },
    ],
    faq: [
      {
        question: "How do I route external research proposals?",
        answer:
          "Draft proposals should be submitted along with HOD recommendation to the R&D Cell for financial and administrative verification.",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability:
        "The R&D and Research cell offices are open Monday through Saturday from 10:00 AM to 5:00 PM.",
      responseTime: "Routine proposal clearances are processed in 5 business days.",
      bestFor: [
        "External research proposals forwarding",
        "Patent filing guidance",
        "Consultancy agreements review",
      ],
      notes: [
        "Ethical clearances for animal or human subjects must be completed before project commencement.",
      ],
    },
  },
  {
    key: "r-and-d-cell",
    title: "R&D Cell Operations",
    shortTitle: "R&D Cell",
    badge: "Projects",
    description:
      "R&D Cell coordinates and monitors all sponsored projects, university research grants, and technology transfer activities.",
    metrics: [
      { label: "Active Grants", value: "INR 12 Cr+", note: "Combined project budget allocation" },
      { label: "Funding Agencies", value: "DST, DBT, UGC", note: "Central government departments" },
      { label: "Audit cycle", value: "Bi-Annual", note: "Financial utilization certifications" },
      { label: "IPR Support", value: "Central", note: "Facilitating patents and tech transfer" },
    ],
    highlights: [
      {
        title: "Sponsored Project Monitoring",
        description:
          "Unified assistance for recruitment of project fellows, procurement of equipment, and submission of utilization certificates.",
        tone: "accent",
      },
    ],
    steps: [
      {
        title: "Submit UC Documents",
        description:
          "Project investigators must submit audited Utilization Certificates (UC) through the R&D cell before the financial year closure.",
      },
    ],
    resources: [
      {
        title: "Project Fellow Appointment Forms",
        channel: "R&D Cell",
        turnaround: "7-10 days",
        requirements: "Selection committee minutes, advertisement approval copy",
      },
    ],
    faq: [
      {
        question: "How are project fellow advertisements processed?",
        answer:
          "Principal investigators submit draft advertisements to the R&D cell. Once approved, circulars are posted on the university website.",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "R&D coordinators run desks in the administrative block.",
      responseTime: "Financial clearances take 4-7 working days.",
      bestFor: ["Utilization certificate verification", "Project staff appointments"],
      notes: [
        "Carry all purchase bills and stock register listings when presenting final project audit sheets.",
      ],
    },
  },
  {
    key: "research-cell",
    title: "Research Cell & Doctoral Studies",
    shortTitle: "Research Cell",
    badge: "Ph.D.",
    description:
      "Doctoral research administration, covering Ph.D. registration cycles, coursework exams, pre-submission presentations, and thesis evaluation.",
    metrics: [
      { label: "Ph.D. Intake", value: "Annual", note: "Through APRCET or UGC qualification" },
      {
        label: "Coursework",
        value: "Mandatory",
        note: "Syllabus, examinations, and research methodology",
      },
      { label: "Plagiarism", value: "<10%", note: "Standard Urkund/Turnitin clearance threshold" },
      { label: "Evaluators", value: "External", note: "National and international examiners" },
    ],
    highlights: [
      {
        title: "Rigorous DVV Processes",
        description:
          "Checking research credentials, journal index status, and thesis plagiarism using premium Urkund/Turnitin tools.",
        tone: "success",
      },
    ],
    steps: [
      {
        title: "Apply for Coursework Exams",
        description:
          "Enroll for Ph.D. coursework exams after completing initial registration and coursework cycles.",
      },
      {
        title: "Verify Plagiarism Report",
        description:
          "Submit draft thesis to the library cell for anti-plagiarism verification and certification.",
      },
      {
        title: "Submit Thesis for Review",
        description:
          "Submit final bound copies along with publication proofs, fee challans, and supervisor signature.",
      },
    ],
    resources: [
      {
        title: "Ph.D. Synopsis Submission Proforma",
        channel: "Research Cell",
        turnaround: "10-15 days",
        requirements: "Pre-talk minutes copy, fee receipt, publication list",
      },
      {
        title: "Thesis Plagiarism Clearance Request",
        channel: "Central Library",
        turnaround: "2-3 business days",
        requirements: "Soft copy of thesis (Word/PDF format)",
      },
    ],
    faq: [
      {
        question: "What is the fee structure for Ph.D. scholars?",
        answer:
          "Ph.D. tuition and laboratory fees are paid annually. Check the detailed research fee card available in the downloads section.",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "The doctoral studies counter runs from 10:30 AM to 4:30 PM.",
      responseTime: "Thesis evaluation reports are subject to examiner response windows.",
      bestFor: [
        "Coursework registration",
        "Plagiarism certification",
        "Ph.D. synopsis submissions",
      ],
      notes: [
        "Scholars must publish at least two papers in UGC-CARE list journals prior to final submission.",
      ],
    },
  },
  {
    key: "research-policy",
    title: "University Research Policy",
    shortTitle: "Research Policy",
    badge: "Guidelines",
    description:
      "Code of ethics, anti-plagiarism guidelines, research publication parameters, and financial support policies for faculty and scholars.",
    metrics: [
      { label: "Ethics Committee", value: "Active", note: "Institutional approval bodies" },
      { label: "Plagiarism Limit", value: "10%", note: "Maximum allowable text matching" },
      { label: "CARE List", value: "UGC", note: "Mandatory journal registry" },
      {
        label: "Travel Grant",
        value: "Yes",
        note: "Support for international paper presentations",
      },
    ],
    highlights: [
      {
        title: "Zero Tolerance for Plagiarism",
        description:
          "Strict compliance checks on thesis data, journals, and project files. Mismatches attract academic disciplinary steps.",
        tone: "accent",
      },
    ],
    steps: [
      {
        title: "Review Publication Rules",
        description:
          "Confirm target journals match the UGC-CARE list or Scopus/Web of Science index.",
      },
    ],
    resources: [
      {
        title: "Institutional Research Ethics Policy Booklet",
        channel: "Research Cell / Portal",
        turnaround: "Immediate",
        requirements: "None",
      },
    ],
    faq: [
      {
        question: "Does the university fund patent filing?",
        answer:
          "Yes. Under the university IPR policy, financial and legal support can be provided for approved inventions.",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "Policies are managed and updated by the Academic Senate and Research Cell.",
      responseTime: "Ethics committee evaluations take 15-30 days.",
      bestFor: ["Research ethic approvals", "Plagiarism regulations"],
      notes: [
        "Research proposals involving human participants or chemical hazards require prior biosafety committee approval.",
      ],
    },
  },
  {
    key: "consultancy-policy",
    title: "Consultancy & Technology Transfer",
    shortTitle: "Consultancy",
    badge: "Policy",
    description:
      "Guidelines, technology sharing models, revenue sharing ratios, and consultancy contract validation systems for ANU faculty.",
    metrics: [
      { label: "Share Ratio", value: "60:40", note: "Revenue division model (Faculty:University)" },
      {
        label: "Consultancy Type",
        value: "Ind/Inst",
        note: "Individual and institutional agreements",
      },
      { label: "Contract Law", value: "Standard", note: "Approved legal formats" },
      {
        label: "Tech Transfer",
        value: "Active",
        note: "Commercializing campus research prototypes",
      },
    ],
    highlights: [
      {
        title: "Industry Collaboration",
        description:
          "Opportunities to offer technical solutions, laboratory testing services, and training to external industries.",
        tone: "success",
      },
    ],
    steps: [
      {
        title: "Register Consultancy Agreement",
        description:
          "Submit draft MOU or service order copies to the R&D cell for administrative approval.",
      },
    ],
    resources: [
      {
        title: "Standard Consultancy MOU Template",
        channel: "R&D Cell",
        turnaround: "Immediate",
        requirements: "None",
      },
    ],
    faq: [
      {
        question: "How is consultancy revenue distributed?",
        answer:
          "Revenue distribution follows the ANU Consultancy Code (typically 60% to the investigating faculty and 40% to the university development fund).",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability:
        "Legal and financial reviews are coordinated by the finance officer and R&D cell.",
      responseTime: "MOU reviews are completed in 10 working days.",
      bestFor: ["Consultancy contracts", "MOU drafting templates"],
      notes: [
        "Use of university laboratory facilities during consultancy must be logged and audited.",
      ],
    },
  },
  {
    key: "incubators",
    title: "Innovation & Business Incubators",
    shortTitle: "Incubators",
    badge: "Startups",
    description:
      "Incubators providing student startups and inventors with office space, mentoring, initial funding channels, and industry linkages.",
    metrics: [
      { label: "Incubation Space", value: "Active", note: "Office space and smart labs" },
      { label: "Startups", value: "5+", note: "Incubated student and alumni units" },
      { label: "Patents", value: "IPR Cell", note: "Connected patent filing services" },
      { label: "Sponsorship", value: "Govt/Pvt", note: "Access to startup funding cycles" },
    ],
    highlights: [
      {
        title: "Campus Incubation Facilities",
        description:
          "Access high-speed internet, smart workstations, and collaborative laboratories to test your product prototypes.",
        tone: "success",
      },
    ],
    steps: [
      {
        title: "Submit Startup Proposal",
        description:
          "Present your business plan or technical prototype to the Innovation Cell selection committee.",
      },
    ],
    resources: [
      {
        title: "Incubation Space Request Proforma",
        channel: "Innovation Cell",
        turnaround: "15-20 days",
        requirements: "Technical write-up, team details, business projection",
      },
    ],
    faq: [
      {
        question: "Who can apply for incubation space?",
        answer:
          "Any active student, alumnus, or faculty member with a viable technology prototype or business model can apply.",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "The Innovation Cell is located inside the technology block.",
      responseTime: "Proposal reviews are conducted in monthly cycles.",
      bestFor: ["Incubation requests", "Mentoring connections", "Patent link support"],
      notes: ["Incubates must periodically present progress to the startup evaluation committee."],
    },
  },
];

export function getResearchTab(pageId?: string): ResearchTab {
  const resolved = pageId ? researchPageAliases[pageId] || pageId : "overview";
  const found = researchTabs.find((t) => t.key === resolved);
  return found || researchTabs[0];
}
