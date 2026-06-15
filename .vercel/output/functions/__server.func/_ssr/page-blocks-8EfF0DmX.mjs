import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { E as ExternalLink, Y as Download } from "../_libs/lucide-react.mjs";
import { o as objectType, a as arrayType, s as stringType, d as discriminatedUnionType, l as literalType } from "../_libs/zod.mjs";
const linkItemSchema = objectType({
  label: stringType().min(1),
  href: stringType().min(1)
});
const pageMetaSchema = objectType({
  title: stringType().min(1),
  description: stringType().min(1),
  keywords: arrayType(stringType().min(1)).default([]),
  owner: stringType().min(1),
  lastUpdated: stringType().min(1),
  canonicalUrl: stringType().min(1)
});
const heroSchema = objectType({
  heading: stringType().min(1),
  subheading: stringType().min(1),
  ctaLabel: stringType().optional(),
  ctaLink: stringType().optional()
});
const governanceSchema = objectType({
  sourceRef: stringType().min(1),
  approvedBy: stringType().min(1),
  approvedOn: stringType().min(1)
});
const richTextSectionSchema = objectType({
  id: stringType().min(1),
  type: literalType("richText"),
  title: stringType().min(1),
  paragraphs: arrayType(stringType().min(1)).min(1)
});
const cardsSectionSchema = objectType({
  id: stringType().min(1),
  type: literalType("cards"),
  title: stringType().min(1),
  items: arrayType(
    objectType({
      title: stringType().min(1),
      description: stringType().min(1)
    })
  )
});
const noticesSectionSchema = objectType({
  id: stringType().min(1),
  type: literalType("notices"),
  title: stringType().min(1),
  items: arrayType(
    objectType({
      date: stringType().min(1),
      title: stringType().min(1),
      details: stringType().min(1),
      href: stringType().optional()
    })
  )
});
const downloadsSectionSchema = objectType({
  id: stringType().min(1),
  type: literalType("downloads"),
  title: stringType().min(1),
  items: arrayType(
    objectType({
      name: stringType().min(1),
      format: stringType().min(1),
      href: stringType().min(1),
      note: stringType().optional()
    })
  )
});
const faqSectionSchema = objectType({
  id: stringType().min(1),
  type: literalType("faq"),
  title: stringType().min(1),
  items: arrayType(
    objectType({
      question: stringType().min(1),
      answer: stringType().min(1)
    })
  )
});
const contactSectionSchema = objectType({
  id: stringType().min(1),
  type: literalType("contact"),
  title: stringType().min(1),
  items: arrayType(
    objectType({
      label: stringType().min(1),
      value: stringType().min(1),
      href: stringType().optional()
    })
  )
});
const timelineSectionSchema = objectType({
  id: stringType().min(1),
  type: literalType("timeline"),
  title: stringType().min(1),
  items: arrayType(
    objectType({
      period: stringType().min(1),
      title: stringType().min(1),
      description: stringType().min(1)
    })
  )
});
const tableSectionSchema = objectType({
  id: stringType().min(1),
  type: literalType("table"),
  title: stringType().min(1),
  columns: arrayType(stringType().min(1)).min(1),
  rows: arrayType(arrayType(stringType().min(1))).min(1)
});
const pageSectionSchema = discriminatedUnionType("type", [
  richTextSectionSchema,
  cardsSectionSchema,
  noticesSectionSchema,
  downloadsSectionSchema,
  faqSectionSchema,
  contactSectionSchema,
  timelineSectionSchema,
  tableSectionSchema
]);
const pageContentSchema = objectType({
  meta: pageMetaSchema,
  hero: heroSchema,
  governance: governanceSchema,
  breadcrumbs: arrayType(linkItemSchema).min(1),
  relatedLinks: arrayType(linkItemSchema).default([]),
  onThisPage: arrayType(linkItemSchema).default([]),
  sections: arrayType(pageSectionSchema).min(1)
});
function validatePageContent(content) {
  return pageContentSchema.parse(content);
}
const sharedContact = {
  id: "contact",
  type: "contact",
  title: "Support Contacts",
  items: [
    { label: "Examination Section", value: "+91 863 234 6140", href: "tel:+918632346140" },
    { label: "Student Services Helpdesk", value: "+91 863 234 6114", href: "tel:+918632346114" },
    { label: "Registrar Office", value: "registrar@anu.ac.in", href: "mailto:registrar@anu.ac.in" }
  ]
};
const pages = {
  overview: validatePageContent({
    meta: {
      title: "Student Services Overview | Acharya Nagarjuna University",
      description: "Central student services hub for examinations, results, forms, placements and student portal access.",
      keywords: ["ANU student services", "exam notifications", "results", "forms", "placements"],
      owner: "Student Services Cell, ANU",
      lastUpdated: "June 1, 2026",
      canonicalUrl: "/pages/student-services?page=overview"
    },
    hero: {
      heading: "Student Services",
      subheading: "Access examination schedules, results updates, student forms, placement resources and official service channels from one consolidated service hub.",
      ctaLabel: "Go to Exam Notifications",
      ctaLink: "/pages/student-services?page=exam-notifications"
    },
    governance: {
      sourceRef: "ANU Student Service Circular Consolidation 2026",
      approvedBy: "Registrar Office",
      approvedOn: "May 28, 2026"
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Student Services", href: "/pages/student-services?page=overview" }
    ],
    relatedLinks: [
      { label: "Admissions Helpdesk", href: "/pages/admissions?page=helpdesk" },
      { label: "Academic Calendar", href: "/pages/academics?page=academic-calendar" },
      { label: "University Profile", href: "/aboutprofile" }
    ],
    onThisPage: [
      { label: "Service Desk", href: "#service-desk" },
      { label: "Quick Access", href: "#quick-access" },
      { label: "Service Timelines", href: "#service-timelines" },
      { label: "Support Contacts", href: "#contact" }
    ],
    sections: [
      {
        id: "service-desk",
        type: "richText",
        title: "Service Desk",
        paragraphs: [
          "The Student Services framework supports enrolled learners across core administrative milestones, including examinations, result publication, form downloads, and campus placement touchpoints.",
          "Services are coordinated through the Examination Section, designated student service counters and official communication channels to ensure consistency, timely updates and transparent processes."
        ]
      },
      {
        id: "quick-access",
        type: "cards",
        title: "Quick Access",
        items: [
          {
            title: "Exam Notifications",
            description: "Latest schedules, hall-ticket timelines and circulars related to semester and supplementary examinations."
          },
          {
            title: "Results",
            description: "Result release windows, revaluation guidance and post-result process information."
          },
          {
            title: "Downloads",
            description: "Student forms, request templates and official document formats required by service workflows."
          },
          {
            title: "Placements",
            description: "Placement activity stream, eligibility support and internship/career orientation pathways."
          }
        ]
      },
      {
        id: "service-timelines",
        type: "timeline",
        title: "Typical Student Service Cycle",
        items: [
          {
            period: "Pre-Examination",
            title: "Notification & Registration",
            description: "Exam circulars and registration windows are published with deadline checkpoints."
          },
          {
            period: "Examination Week",
            title: "Hall Ticket & Exam Conduct",
            description: "Hall ticket timelines, examination support notices and centre-level updates are shared."
          },
          {
            period: "Post Examination",
            title: "Results & Requests",
            description: "Result publication, revaluation request windows and mark memo support are activated."
          }
        ]
      },
      sharedContact
    ]
  }),
  "exam-notifications": validatePageContent({
    meta: {
      title: "Exam Notifications | Acharya Nagarjuna University",
      description: "Official examination notices, timetable updates and hall-ticket related announcements.",
      keywords: ["ANU exam notifications", "timetable", "hall ticket", "exam schedule"],
      owner: "Examination Section, ANU",
      lastUpdated: "June 1, 2026",
      canonicalUrl: "/pages/student-services?page=exam-notifications"
    },
    hero: {
      heading: "Exam Notifications",
      subheading: "Track official examination announcements, updated schedules and instructions relevant to regular, supplementary and special examinations.",
      ctaLabel: "View Result Page",
      ctaLink: "/pages/student-services?page=results"
    },
    governance: {
      sourceRef: "Examination Section Notice Board Digest 2026",
      approvedBy: "Controller of Examinations Office",
      approvedOn: "May 30, 2026"
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Student Services", href: "/pages/student-services?page=overview" },
      { label: "Exam Notifications", href: "/pages/student-services?page=exam-notifications" }
    ],
    relatedLinks: [
      { label: "Results", href: "/pages/student-services?page=results" },
      { label: "Downloads", href: "/pages/student-services?page=downloads" },
      { label: "Academic Calendar", href: "/pages/academics?page=academic-calendar" }
    ],
    onThisPage: [
      { label: "Latest Notices", href: "#latest-notices" },
      { label: "Exam Guidance", href: "#exam-guidance" },
      { label: "Important Dates", href: "#important-dates" },
      { label: "Support Contacts", href: "#contact" }
    ],
    sections: [
      {
        id: "latest-notices",
        type: "notices",
        title: "Latest Notifications",
        items: [
          {
            date: "May 2026",
            title: "Semester End Examination Schedule (UG/PG)",
            details: "Revised timetable publication cycle for main semester examinations across constituent colleges.",
            href: "/pages/student-services?page=downloads"
          },
          {
            date: "May 2026",
            title: "Hall Ticket Availability Window",
            details: "Hall tickets are published section-wise after fee clearance and registration verification."
          },
          {
            date: "April 2026",
            title: "Supplementary Examination Circular",
            details: "Notification includes registration timeline, fee schedule and subject paper mapping."
          }
        ]
      },
      {
        id: "exam-guidance",
        type: "richText",
        title: "Exam Guidance",
        paragraphs: [
          "Students are advised to verify programme, semester and subject mapping before appearing for examinations.",
          "The official notice publication sequence is circular release, department communication, hall-ticket issue, and examination centre support advisory."
        ]
      },
      {
        id: "important-dates",
        type: "table",
        title: "Important Date Windows",
        columns: ["Activity", "Timeline", "Channel"],
        rows: [
          ["Main Examination Notice", "4-6 weeks before exam", "Examination Section / Department"],
          ["Hall Ticket Release", "7-10 days before exam", "Portal / Department Notice"],
          ["Supplementary Notification", "Post result window", "Examination Circular"]
        ]
      },
      sharedContact
    ]
  }),
  results: validatePageContent({
    meta: {
      title: "Results | Acharya Nagarjuna University",
      description: "Result publication guidance, revaluation workflow and marksheet support for students.",
      keywords: ["ANU results", "revaluation", "marks memo", "exam result"],
      owner: "Examination Section, ANU",
      lastUpdated: "June 1, 2026",
      canonicalUrl: "/pages/student-services?page=results"
    },
    hero: {
      heading: "Results & Post-Result Services",
      subheading: "Understand result publication timelines, revaluation process, and mark memo support channels for all student categories.",
      ctaLabel: "Open Downloads",
      ctaLink: "/pages/student-services?page=downloads"
    },
    governance: {
      sourceRef: "Result Processing and Revaluation SOP 2026",
      approvedBy: "Controller of Examinations Office",
      approvedOn: "May 30, 2026"
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Student Services", href: "/pages/student-services?page=overview" },
      { label: "Results", href: "/pages/student-services?page=results" }
    ],
    relatedLinks: [
      { label: "Exam Notifications", href: "/pages/student-services?page=exam-notifications" },
      { label: "Downloads", href: "/pages/student-services?page=downloads" },
      { label: "Helpdesk", href: "/pages/admissions?page=helpdesk" }
    ],
    onThisPage: [
      { label: "Result Updates", href: "#result-updates" },
      { label: "Revaluation Workflow", href: "#revaluation-workflow" },
      { label: "FAQ", href: "#result-faq" },
      { label: "Support Contacts", href: "#contact" }
    ],
    sections: [
      {
        id: "result-updates",
        type: "notices",
        title: "Result Updates",
        items: [
          {
            date: "June 2026",
            title: "UG/PG Result Publication Window",
            details: "Results are released in programme batches after tabulation and verification closure."
          },
          {
            date: "June 2026",
            title: "Mark Memo Issue Advisory",
            details: "Digital memos are available first; physical issue schedule follows college-level communication."
          }
        ]
      },
      {
        id: "revaluation-workflow",
        type: "timeline",
        title: "Revaluation Workflow",
        items: [
          {
            period: "Step 1",
            title: "Result Announcement",
            description: "Students verify marks and identify subjects for revaluation or recounting."
          },
          {
            period: "Step 2",
            title: "Application Submission",
            description: "Submit revaluation request within notified deadline with required fee and documents."
          },
          {
            period: "Step 3",
            title: "Revaluation Outcome",
            description: "Revaluation outcomes are released through official channels and reflected in final memo updates."
          }
        ]
      },
      {
        id: "result-faq",
        type: "faq",
        title: "Results FAQ",
        items: [
          {
            question: "Where are official results announced?",
            answer: "Results are announced through official university channels and verified department communications."
          },
          {
            question: "Can I apply for revaluation for multiple subjects?",
            answer: "Yes, subject to eligibility and timelines announced in the specific result notification."
          },
          {
            question: "How do I correct details in a memo?",
            answer: "Use the official correction request process through examination and department helpdesks."
          }
        ]
      },
      sharedContact
    ]
  }),
  downloads: validatePageContent({
    meta: {
      title: "Student Downloads | Acharya Nagarjuna University",
      description: "Official student forms, request templates and document downloads for examination and service workflows.",
      keywords: ["ANU downloads", "student forms", "application forms", "exam forms"],
      owner: "Student Services Cell, ANU",
      lastUpdated: "June 1, 2026",
      canonicalUrl: "/pages/student-services?page=downloads"
    },
    hero: {
      heading: "Student Forms & Downloads",
      subheading: "Access commonly used student service forms, request templates and supporting document formats used in ANU administrative workflows.",
      ctaLabel: "Go to Student Portal",
      ctaLink: "/pages/student-services?page=student-portal"
    },
    governance: {
      sourceRef: "Student Form Repository Register 2026",
      approvedBy: "Student Services Cell Coordinator",
      approvedOn: "May 27, 2026"
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Student Services", href: "/pages/student-services?page=overview" },
      { label: "Downloads", href: "/pages/student-services?page=downloads" }
    ],
    relatedLinks: [
      { label: "Exam Notifications", href: "/pages/student-services?page=exam-notifications" },
      { label: "Results", href: "/pages/student-services?page=results" },
      { label: "Student Portal", href: "/pages/student-services?page=student-portal" }
    ],
    onThisPage: [
      { label: "Download Centre", href: "#download-centre" },
      { label: "Form Usage Guide", href: "#usage-guide" },
      { label: "Support Contacts", href: "#contact" }
    ],
    sections: [
      {
        id: "download-centre",
        type: "downloads",
        title: "Download Centre",
        items: [
          {
            name: "Revaluation Application Form",
            format: "PDF",
            href: "/pages/student-services?page=results",
            note: "Use within notified window"
          },
          {
            name: "Duplicate Mark Memo Request",
            format: "PDF",
            href: "/pages/student-services?page=results",
            note: "Attach identity proof"
          },
          {
            name: "Bonafide Certificate Request",
            format: "PDF",
            href: "/pages/student-services?page=student-portal",
            note: "Submit through department"
          },
          {
            name: "Migration Certificate Request",
            format: "PDF",
            href: "/pages/student-services?page=student-portal",
            note: "For external admission use"
          }
        ]
      },
      {
        id: "usage-guide",
        type: "cards",
        title: "Form Usage Guide",
        items: [
          {
            title: "Step 1: Identify Form",
            description: "Choose the exact form based on service requirement and programme category."
          },
          {
            title: "Step 2: Verify Attachments",
            description: "Prepare mandatory annexures such as ID proof, fee receipt and prior memo copies."
          },
          {
            title: "Step 3: Submit Through Correct Channel",
            description: "Submit through department office, examination section counter or official portal as applicable."
          }
        ]
      },
      sharedContact
    ]
  }),
  placements: validatePageContent({
    meta: {
      title: "Placements | Acharya Nagarjuna University",
      description: "Placement support, internship pathways and career readiness services for ANU students.",
      keywords: ["ANU placements", "career support", "internships", "campus recruitment"],
      owner: "Career & Placement Cell, ANU",
      lastUpdated: "June 1, 2026",
      canonicalUrl: "/pages/student-services?page=placements"
    },
    hero: {
      heading: "Placements & Career Services",
      subheading: "Career-oriented support for internships, employability readiness and campus recruitment pathways coordinated through ANU placement channels.",
      ctaLabel: "Student Portal Access",
      ctaLink: "/pages/student-services?page=student-portal"
    },
    governance: {
      sourceRef: "Career and Placement Program Note 2026",
      approvedBy: "Placement Cell Coordinator",
      approvedOn: "May 25, 2026"
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Student Services", href: "/pages/student-services?page=overview" },
      { label: "Placements", href: "/pages/student-services?page=placements" }
    ],
    relatedLinks: [
      { label: "Student Services Overview", href: "/pages/student-services?page=overview" },
      { label: "Downloads", href: "/pages/student-services?page=downloads" },
      { label: "University Colleges", href: "/colleges/sciences" }
    ],
    onThisPage: [
      { label: "Placement Support", href: "#placement-support" },
      { label: "Career Readiness", href: "#career-readiness" },
      { label: "Current Cycle", href: "#current-cycle" },
      { label: "Support Contacts", href: "#contact" }
    ],
    sections: [
      {
        id: "placement-support",
        type: "richText",
        title: "Placement Support",
        paragraphs: [
          "The placement support framework is designed to connect students with employability opportunities through coordinated communication between departments, placement officers and recruiters.",
          "Services include orientation, resume support, recruitment readiness sessions and employer interaction workflows."
        ]
      },
      {
        id: "career-readiness",
        type: "cards",
        title: "Career Readiness Tracks",
        items: [
          {
            title: "Resume and Profile Clinics",
            description: "Guided review sessions to align resumes with sector expectations and role requirements."
          },
          {
            title: "Aptitude and Interview Preparation",
            description: "Structured preparation sessions covering aptitude, communication and interview simulations."
          },
          {
            title: "Internship and Project Pathway",
            description: "Support for identifying internships and project opportunities aligned to academic specialization."
          }
        ]
      },
      {
        id: "current-cycle",
        type: "table",
        title: "Placement Cycle Touchpoints",
        columns: ["Phase", "Typical Window", "Activity"],
        rows: [
          [
            "Pre-Placement Orientation",
            "Start of semester",
            "Eligibility briefing and registration"
          ],
          ["Skill Readiness Sessions", "Mid semester", "Aptitude and interview preparation"],
          ["Recruitment Drives", "As notified", "Company engagement and candidate selection"]
        ]
      },
      sharedContact
    ]
  }),
  "student-portal": validatePageContent({
    meta: {
      title: "Student Portal Services | Acharya Nagarjuna University",
      description: "Portal-linked student service access including records, requests, and status tracking guidance.",
      keywords: ["ANU student portal", "student login", "service requests", "records access"],
      owner: "e-Governance Cell, ANU",
      lastUpdated: "June 1, 2026",
      canonicalUrl: "/pages/student-services?page=student-portal"
    },
    hero: {
      heading: "Student Portal Services",
      subheading: "Portal-centered access for student service records, request tracking and communication workflows across ANU academic and administrative units.",
      ctaLabel: "Open Student Services Overview",
      ctaLink: "/pages/student-services?page=overview"
    },
    governance: {
      sourceRef: "ANU e-Governance Student Access Note 2026",
      approvedBy: "e-Governance Cell Administrator",
      approvedOn: "May 29, 2026"
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Student Services", href: "/pages/student-services?page=overview" },
      { label: "Student Portal", href: "/pages/student-services?page=student-portal" }
    ],
    relatedLinks: [
      { label: "Downloads", href: "/pages/student-services?page=downloads" },
      { label: "Results", href: "/pages/student-services?page=results" },
      { label: "Exam Notifications", href: "/pages/student-services?page=exam-notifications" }
    ],
    onThisPage: [
      { label: "Portal Scope", href: "#portal-scope" },
      { label: "Service Functions", href: "#service-functions" },
      { label: "Portal FAQ", href: "#portal-faq" },
      { label: "Support Contacts", href: "#contact" }
    ],
    sections: [
      {
        id: "portal-scope",
        type: "richText",
        title: "Portal Scope",
        paragraphs: [
          "The student portal acts as an access and tracking layer for academic service processes, including personal records verification, request initiation and status follow-up.",
          "Students should use only official university channels and authenticated credentials for all service interactions."
        ]
      },
      {
        id: "service-functions",
        type: "cards",
        title: "Service Functions",
        items: [
          {
            title: "Student Profile and Records",
            description: "View and verify student profile data aligned with institutional records."
          },
          {
            title: "Request Tracking",
            description: "Track service requests and status progression for submitted student applications."
          },
          {
            title: "Notice and Alert Access",
            description: "Access service-related updates aligned to examinations, documents and process milestones."
          }
        ]
      },
      {
        id: "portal-faq",
        type: "faq",
        title: "Student Portal FAQ",
        items: [
          {
            question: "Whom should I contact for credential issues?",
            answer: "Please contact the designated support channels listed below with student identification details."
          },
          {
            question: "Can I track all requests online?",
            answer: "Most standard requests support status tracking; some processes may require additional in-person verification."
          },
          {
            question: "Are portal notices considered official?",
            answer: "Yes, when published through official university channels and corresponding department communications."
          }
        ]
      },
      sharedContact
    ]
  })
};
function getStudentServicesPage(page) {
  return pages[page];
}
const sectionPages = {
  about: [
    {
      page: "overview",
      title: "About",
      summary: "Institutional overview, governance and identity resources.",
      owner: "Registrar Office"
    },
    {
      page: "contact",
      title: "Contact",
      summary: "Official communication points and institutional contact channels.",
      owner: "Public Relations Cell"
    },
    {
      page: "vision-mission",
      title: "Vision & Mission",
      summary: "Institutional vision, mission and development direction.",
      owner: "Planning and Development Cell"
    },
    {
      page: "emblem",
      title: "University Emblem",
      summary: "Context and official usage notes for the ANU emblem.",
      owner: "Public Relations Cell"
    },
    {
      page: "chancellor",
      title: "Chancellor",
      summary: "Role-level information and institutional office context.",
      owner: "Administration Section"
    },
    {
      page: "vice-chancellor",
      title: "Vice Chancellor",
      summary: "Leadership office information and institutional responsibilities.",
      owner: "Administration Section"
    },
    {
      page: "rector",
      title: "Rector",
      summary: "Academic administration office role and responsibilities.",
      owner: "Administration Section"
    },
    {
      page: "registrar",
      title: "Registrar",
      summary: "Registrar office responsibilities and service channels.",
      owner: "Registrar Office"
    },
    {
      page: "executive-council",
      title: "Executive Council",
      summary: "Policy and governance body overview.",
      owner: "Administration Section"
    },
    {
      page: "organization-structure",
      title: "Organization Structure",
      summary: "Institutional structure and administrative hierarchy reference.",
      owner: "Administration Section"
    },
    {
      page: "statutory-committees",
      title: "Statutory Committees",
      summary: "Committee structures and governance role references.",
      owner: "Administration Section"
    },
    {
      page: "strategic-plan",
      title: "Strategic Plan",
      summary: "Strategic direction and implementation priorities.",
      owner: "Planning and Development Cell"
    },
    {
      page: "facebook",
      title: "Facebook",
      summary: "Official social channel reference and communication guidance.",
      owner: "Public Relations Cell"
    },
    {
      page: "instagram",
      title: "Instagram",
      summary: "Official social channel reference and communication guidance.",
      owner: "Public Relations Cell"
    },
    {
      page: "twitter",
      title: "Twitter",
      summary: "Official social channel reference and communication guidance.",
      owner: "Public Relations Cell"
    }
  ],
  admissions: [
    {
      page: "overview",
      title: "Admissions",
      summary: "Admissions process overview and applicant guidance.",
      owner: "Admissions Cell"
    },
    {
      page: "why-choose-us",
      title: "Why Choose Us",
      summary: "Academic ecosystem highlights and student value proposition.",
      owner: "Admissions Cell"
    },
    {
      page: "academic-calendar",
      title: "Academic Calendar",
      summary: "Academic milestones and cycle-level planning guidance.",
      owner: "Academic Section"
    },
    {
      page: "fee-structure",
      title: "Fee Structure",
      summary: "Fee structure guidance across programmes and categories.",
      owner: "Admissions Cell"
    },
    {
      page: "scholarships",
      title: "Scholarships",
      summary: "Scholarship pathways and support references.",
      owner: "Scholarship Cell"
    },
    {
      page: "how-to-apply",
      title: "How to Apply",
      summary: "Step-by-step admission application workflow.",
      owner: "Admissions Cell"
    },
    {
      page: "eligibility-criteria",
      title: "Eligibility Criteria",
      summary: "Programme-level eligibility reference guidance.",
      owner: "Admissions Cell"
    },
    {
      page: "affiliated-colleges",
      title: "Affiliated Colleges",
      summary: "Affiliated institutions and admission context.",
      owner: "Affiliation Section"
    },
    {
      page: "helpdesk",
      title: "Admission Helpdesk",
      summary: "Helpdesk channels for admission-related support.",
      owner: "Admissions Cell"
    },
    {
      page: "faqs",
      title: "Admissions FAQ",
      summary: "Frequently asked admissions support queries.",
      owner: "Admissions Cell"
    },
    {
      page: "brochure",
      title: "Admissions Brochure",
      summary: "Prospectus access and programme-information guidance.",
      owner: "Admissions Cell"
    }
  ],
  academics: [
    {
      page: "overview",
      title: "Academics",
      summary: "Academic units, frameworks and educational pathways.",
      owner: "Academic Section"
    },
    {
      page: "anucde",
      title: "ANUCDE",
      summary: "Distance education unit reference and learner support scope.",
      owner: "ANUCDE Office"
    },
    {
      page: "library",
      title: "Library",
      summary: "Central library resources and usage guidance.",
      owner: "Central Library"
    },
    {
      page: "ambedkar-chair",
      title: "Dr. B.R. Ambedkar Chair",
      summary: "Special chair initiatives and activities overview.",
      owner: "Academic Section"
    },
    {
      page: "women-studies",
      title: "Centre for Women Studies",
      summary: "Centre mission and programme scope.",
      owner: "Centre for Women Studies"
    },
    {
      page: "csr-centre",
      title: "Centre for CSR",
      summary: "CSR-focused research and engagement initiatives.",
      owner: "Centre for CSR"
    },
    {
      page: "phule-centre",
      title: "Phule Centre",
      summary: "Centre profile and thematic academic initiatives.",
      owner: "Academic Section"
    },
    {
      page: "mahatma-gandhi-centre",
      title: "Mahatma Gandhi Centre",
      summary: "Centre profile and social thought engagement.",
      owner: "Academic Section"
    },
    {
      page: "jagjivan-ram-centre",
      title: "Babu Jagjivan Ram Centre",
      summary: "Centre profile and social equity initiatives.",
      owner: "Academic Section"
    },
    {
      page: "computer-centre",
      title: "Computer Centre",
      summary: "Institutional computing support and services.",
      owner: "Computer Centre"
    },
    {
      page: "anu-code",
      title: "ANU Code",
      summary: "Academic and institutional code reference.",
      owner: "Academic Section"
    },
    {
      page: "ordinances",
      title: "Ordinances",
      summary: "Academic ordinance references and governance rules.",
      owner: "Academic Section"
    },
    {
      page: "code-of-conduct",
      title: "Code of Conduct",
      summary: "Conduct expectations across institutional stakeholders.",
      owner: "Academic Section"
    }
  ],
  research: [
    {
      page: "overview",
      title: "Research",
      summary: "Research ecosystem overview, policies and opportunities.",
      owner: "Research Cell"
    },
    {
      page: "r-and-d-cell",
      title: "R&D Cell",
      summary: "R&D coordination scope and support pathways.",
      owner: "R&D Cell"
    },
    {
      page: "research-cell",
      title: "Research Cell",
      summary: "Research administration and project support services.",
      owner: "Research Cell"
    },
    {
      page: "research-policy",
      title: "Research Policy",
      summary: "Research policy framework and implementation guidance.",
      owner: "Research Cell"
    },
    {
      page: "consultancy-policy",
      title: "Consultancy Policy",
      summary: "Consultancy policy principles and process guidance.",
      owner: "Research Cell"
    },
    {
      page: "incubators",
      title: "Incubators",
      summary: "Innovation support and incubation linkages.",
      owner: "Innovation Cell"
    }
  ],
  programs: [
    {
      page: "overview",
      title: "Programs",
      summary: "Programme pathways across UG, PG and research streams.",
      owner: "Academic Section"
    },
    {
      page: "ug-programs",
      title: "UG Programs",
      summary: "Undergraduate programme categories and guidance.",
      owner: "Academic Section"
    },
    {
      page: "integrated-programs",
      title: "Integrated Programs",
      summary: "Integrated programme structure and progression context.",
      owner: "Academic Section"
    },
    {
      page: "diploma-courses",
      title: "Diploma Courses",
      summary: "Diploma course orientation and enrollment guidance.",
      owner: "Academic Section"
    },
    {
      page: "pg-programs",
      title: "PG Programs",
      summary: "Postgraduate programme opportunities and structure.",
      owner: "Academic Section"
    },
    {
      page: "pg-diploma",
      title: "PG Diploma",
      summary: "PG diploma pathways and programme context.",
      owner: "Academic Section"
    },
    {
      page: "distance-education-anucde",
      title: "Distance Education (ANUCDE)",
      summary: "Distance learning options through ANUCDE.",
      owner: "ANUCDE Office"
    },
    {
      page: "phd-programs",
      title: "PhD Programs",
      summary: "Doctoral programme pathways and research entry guidance.",
      owner: "Research Cell"
    },
    {
      page: "m-phil-programs",
      title: "M.Phil Programs",
      summary: "M.Phil pathway references and guidance information.",
      owner: "Academic Section"
    },
    {
      page: "post-doctoral-fellowships",
      title: "Post-Doctoral Fellowships",
      summary: "Post-doctoral engagement scope and support notes.",
      owner: "Research Cell"
    }
  ],
  rankings: [
    {
      page: "overview",
      title: "Rankings",
      summary: "Quality, rankings and accreditation overview.",
      owner: "IQAC"
    },
    {
      page: "nirf",
      title: "NIRF",
      summary: "NIRF participation and ranking reference area.",
      owner: "IQAC"
    },
    {
      page: "iqac",
      title: "IQAC",
      summary: "Internal quality assurance processes and references.",
      owner: "IQAC"
    },
    {
      page: "ssr",
      title: "SSR",
      summary: "Self-study report related quality documentation context.",
      owner: "IQAC"
    },
    {
      page: "naac",
      title: "NAAC",
      summary: "NAAC accreditation profile and quality framework references.",
      owner: "IQAC"
    },
    {
      page: "awards-recognitions",
      title: "Awards & Recognitions",
      summary: "Institutional recognitions and distinctions overview.",
      owner: "Public Relations Cell"
    },
    {
      page: "qs-asia-ranking-2022",
      title: "QS Asia Ranking 2022",
      summary: "QS ranking reference and context.",
      owner: "IQAC"
    },
    {
      page: "qs-i-gauge-e-leas",
      title: "QS I-Gauge E-Leas",
      summary: "QS I-Gauge related profile and references.",
      owner: "IQAC"
    },
    {
      page: "world-ranking",
      title: "World Ranking",
      summary: "Global ranking reference overview.",
      owner: "IQAC"
    },
    {
      page: "impact-ranking",
      title: "Impact Ranking",
      summary: "Impact ranking perspective and context.",
      owner: "IQAC"
    },
    {
      page: "green-metric-ranking",
      title: "Green Metric Ranking",
      summary: "Sustainability and green ranking context.",
      owner: "IQAC"
    },
    {
      page: "green-university-award-2021",
      title: "Green University Award 2021",
      summary: "Award reference and sustainability focus context.",
      owner: "IQAC"
    }
  ],
  "campus-life": [
    {
      page: "overview",
      title: "Campus Life",
      summary: "Campus life ecosystem and student engagement spaces.",
      owner: "Student Affairs"
    },
    {
      page: "hostel",
      title: "Hostel",
      summary: "Residential facilities and student accommodation guidance.",
      owner: "Hostel Administration"
    },
    {
      page: "health-center",
      title: "Health Center",
      summary: "Campus health support and primary care services.",
      owner: "Health Center"
    },
    {
      page: "sports",
      title: "Sports",
      summary: "Sports infrastructure and student athletic development support.",
      owner: "Sports Section"
    },
    {
      page: "nss",
      title: "NSS",
      summary: "National Service Scheme initiatives and engagement opportunities.",
      owner: "NSS Unit"
    },
    {
      page: "ncc",
      title: "NCC",
      summary: "National Cadet Corps activities and participation pathways.",
      owner: "NCC Unit"
    },
    {
      page: "elc",
      title: "ELC",
      summary: "Electoral literacy and civic engagement initiatives.",
      owner: "Student Affairs"
    },
    {
      page: "news",
      title: "News",
      summary: "Institutional news stream and public updates.",
      owner: "Public Relations Cell"
    },
    {
      page: "events",
      title: "Events",
      summary: "Academic and cultural event channels.",
      owner: "Public Relations Cell"
    },
    {
      page: "anu-radio-91-2",
      title: "ANU Radio 91.2",
      summary: "Campus radio channel reference and outreach context.",
      owner: "Media and Outreach"
    },
    {
      page: "herbal-garden",
      title: "Herbal Garden",
      summary: "Campus herbal garden and environmental awareness initiatives.",
      owner: "Campus Development"
    }
  ],
  "employee-services": [
    {
      page: "overview",
      title: "Employee Services",
      summary: "Policy, regulation and support channels for faculty and staff.",
      owner: "Administration Section"
    },
    {
      page: "careers",
      title: "Careers",
      summary: "Institutional recruitment and career opportunities reference area.",
      owner: "Recruitment Cell"
    },
    {
      page: "employee-portal",
      title: "Employee Portal",
      summary: "Employee portal support and service access guidance.",
      owner: "e-Governance Cell"
    },
    {
      page: "webmail",
      title: "WebMail",
      summary: "Official communication system access and usage guidance.",
      owner: "Computer Centre"
    },
    {
      page: "it-policy",
      title: "IT Policy",
      summary: "Information technology policy references and expectations.",
      owner: "Computer Centre"
    },
    {
      page: "green-policy",
      title: "Green Policy",
      summary: "Institutional sustainability policy framework.",
      owner: "Administration Section"
    },
    {
      page: "plastic-free-policy",
      title: "Plastic Free Policy",
      summary: "Plastic-free campus policy and implementation guidance.",
      owner: "Administration Section"
    },
    {
      page: "ordinances-orders",
      title: "Ordinances & Orders",
      summary: "Administrative orders and ordinance references.",
      owner: "Administration Section"
    },
    {
      page: "statutory-bodies",
      title: "Statutory Bodies",
      summary: "Statutory governance bodies and institutional roles.",
      owner: "Administration Section"
    },
    {
      page: "faculty-portal",
      title: "Faculty Portal",
      summary: "Faculty portal access support and guidance.",
      owner: "e-Governance Cell"
    },
    {
      page: "pensioner-details",
      title: "Pensioner Details",
      summary: "Pensioner service support and reference information.",
      owner: "Administration Section"
    },
    {
      page: "holiday-list",
      title: "Holiday List",
      summary: "Institutional holiday and closure reference.",
      owner: "Administration Section"
    }
  ],
  "student-services": [
    {
      page: "exam-section",
      title: "Exam Section",
      summary: "Examination section operations and student support information.",
      owner: "Examination Section"
    },
    {
      page: "notifications-timetables",
      title: "Notifications & Timetables",
      summary: "Notifications and timetable references for students.",
      owner: "Examination Section"
    },
    {
      page: "downloads-forms",
      title: "Downloads (Forms)",
      summary: "Form templates and service document access guidance.",
      owner: "Student Services Cell"
    },
    {
      page: "alumni",
      title: "Alumni",
      summary: "Alumni engagement channels and institutional networks.",
      owner: "Alumni Relations"
    },
    {
      page: "services",
      title: "Services",
      summary: "General student service portfolio and support channels.",
      owner: "Student Services Cell"
    },
    {
      page: "anti-ragging-cell",
      title: "Anti-Ragging Cell",
      summary: "Anti-ragging support, policy and reporting channels.",
      owner: "Student Affairs"
    },
    {
      page: "women-grievance-cell",
      title: "Women Grievance Cell",
      summary: "Women grievance redressal support pathways.",
      owner: "Student Affairs"
    },
    {
      page: "sc-st-cell",
      title: "SC/ST Cell",
      summary: "SC/ST student support and inclusion framework.",
      owner: "Student Affairs"
    },
    {
      page: "differently-abled-cell",
      title: "Differently Abled Cell",
      summary: "Accessibility support and inclusive service channels.",
      owner: "Student Affairs"
    },
    {
      page: "student-grievance-cell",
      title: "Student Grievance Cell",
      summary: "Student grievance intake and resolution pathways.",
      owner: "Student Affairs"
    }
  ]
};
function sectionLabel(section) {
  return section.split("-").map((x) => x.charAt(0).toUpperCase() + x.slice(1)).join(" ");
}
function buildPage(section, def) {
  const sectionTitle = sectionLabel(section);
  return validatePageContent({
    meta: {
      title: `${def.title} | Acharya Nagarjuna University`,
      description: def.summary,
      keywords: [sectionTitle, def.title, "Acharya Nagarjuna University"],
      owner: def.owner,
      lastUpdated: "June 1, 2026",
      canonicalUrl: `/pages/${section}?page=${def.page}`
    },
    hero: {
      heading: def.title,
      subheading: def.summary,
      ctaLabel: "Back to Home",
      ctaLink: "/"
    },
    governance: {
      sourceRef: "ANU Internal Content Consolidation 2026",
      approvedBy: "Registrar Office",
      approvedOn: "June 1, 2026"
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: sectionTitle, href: `/pages/${section}?page=overview` },
      { label: def.title, href: `/pages/${section}?page=${def.page}` }
    ],
    relatedLinks: [
      { label: `${sectionTitle} Overview`, href: `/pages/${section}?page=overview` },
      { label: "Student Services", href: "/pages/student-services?page=overview" },
      { label: "Admissions", href: "/pages/admissions?page=overview" }
    ],
    onThisPage: [
      { label: "Overview", href: "#overview" },
      { label: "Service Areas", href: "#service-areas" },
      { label: "Reference Downloads", href: "#reference-downloads" },
      { label: "Contact", href: "#contact" }
    ],
    sections: [
      {
        id: "overview",
        type: "richText",
        title: `${def.title} Overview`,
        paragraphs: [
          `This page provides the official ANU reference scope for ${def.title}.`,
          "Information is maintained in a structured format to support consistent student and stakeholder navigation across the university website."
        ]
      },
      {
        id: "service-areas",
        type: "cards",
        title: "Key Service Areas",
        items: [
          {
            title: "Policy & Process",
            description: "Procedural references and policy-linked guidance for this page area."
          },
          {
            title: "Support Channels",
            description: "Helpdesk and institutional communication pathways mapped for users."
          },
          {
            title: "Academic/Administrative Linkage",
            description: "Cross-links to related university services and academic units."
          }
        ]
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
            note: "Updated document index"
          },
          {
            name: `${def.title} Workflow Note`,
            format: "PDF",
            href: `/pages/${section}?page=${def.page}`,
            note: "Process reference"
          }
        ]
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
            href: "mailto:registrar@anu.ac.in"
          },
          {
            label: "Campus Address",
            value: "Acharya Nagarjuna University, Nagarjuna Nagar, Guntur, Andhra Pradesh 522510"
          }
        ]
      }
    ]
  });
}
function getGenericSectionPage(section, page) {
  const sectionDefs = sectionPages[section];
  if (!sectionDefs) return void 0;
  const def = sectionDefs.find((item) => item.page === page);
  if (!def) return void 0;
  return buildPage(section, def);
}
function getGenericSectionEntries() {
  return Object.entries(sectionPages).flatMap(
    ([section, defs]) => defs.map((def) => ({
      section,
      page: def.page,
      title: def.title
    }))
  );
}
const studentServicesCoreRegistry = [
  {
    section: "student-services",
    page: "overview",
    status: "published",
    title: "Student Services",
    dataPath: "src/data/pages/student-services/index.ts#overview",
    getContent: () => getStudentServicesPage("overview")
  },
  {
    section: "student-services",
    page: "exam-notifications",
    status: "published",
    title: "Exam Notifications",
    dataPath: "src/data/pages/student-services/index.ts#exam-notifications",
    getContent: () => getStudentServicesPage("exam-notifications")
  },
  {
    section: "student-services",
    page: "results",
    status: "published",
    title: "Results",
    dataPath: "src/data/pages/student-services/index.ts#results",
    getContent: () => getStudentServicesPage("results")
  },
  {
    section: "student-services",
    page: "downloads",
    status: "published",
    title: "Downloads",
    dataPath: "src/data/pages/student-services/index.ts#downloads",
    getContent: () => getStudentServicesPage("downloads")
  },
  {
    section: "student-services",
    page: "placements",
    status: "published",
    title: "Placements",
    dataPath: "src/data/pages/student-services/index.ts#placements",
    getContent: () => getStudentServicesPage("placements")
  },
  {
    section: "student-services",
    page: "student-portal",
    status: "published",
    title: "Student Portal",
    dataPath: "src/data/pages/student-services/index.ts#student-portal",
    getContent: () => getStudentServicesPage("student-portal")
  }
];
const generatedRegistry = getGenericSectionEntries().map((entry) => ({
  section: entry.section,
  page: entry.page,
  status: "published",
  title: entry.title,
  dataPath: `src/data/pages/generic-sections.ts#${entry.section}/${entry.page}`,
  getContent: () => getGenericSectionPage(entry.section, entry.page)
}));
const registry = [...studentServicesCoreRegistry, ...generatedRegistry];
function key(section, page) {
  return `${section}/${page}`;
}
const registryMap = new Map(registry.map((entry) => [key(entry.section, entry.page), entry]));
function getPage(section, page) {
  return registryMap.get(key(section, page));
}
function getPublishedPage(section, page) {
  const entry = getPage(section, page);
  if (!entry || entry.status !== "published") return void 0;
  const content = entry.getContent?.();
  if (!content) return void 0;
  return { entry, content };
}
function renderLink(href, label) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  if (isExternal) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href,
        className: "inline-flex items-center gap-1.5 text-[var(--gold)] hover:text-[var(--gold-light)] font-semibold transition-colors hover:underline",
        children: [
          label,
          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3.5 w-3.5", "aria-hidden": true })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Link,
    {
      to: href,
      className: "text-[var(--gold)] hover:text-[var(--gold-light)] font-semibold transition-colors hover:underline",
      children: label
    }
  );
}
function PageHero({ content }) {
  const sectionName = content.breadcrumbs[1]?.label || content.breadcrumbs[0]?.label || "University";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;1,8..60,300;1,8..60,400&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap');

        .anu-page-root {
          --ink: #12213a;
          --ink-mid: #1e3558;
          --gold: #b8860b;
          --gold-light: #d4a017;
          --parchment: #faf7f2;
          --parchment-dark: #f0ebe0;
          --cream: #f5f0e8;
          --rule: #d9d0bf;
          --muted: #6b6352;
          background-color: var(--parchment);
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          min-height: 100vh;
          font-family: 'Source Serif 4', Georgia, serif;
          color: var(--ink);
        }

        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-serif { font-family: 'Source Serif 4', Georgia, serif; }
        .font-garamond { font-family: 'EB Garamond', serif; }

        .anu-hero-masthead {
          background-color: var(--ink);
          background-image: linear-gradient(135deg, #0a1628 0%, #12213a 50%, #1a3060 100%);
          position: relative;
          overflow: hidden;
        }

        .anu-hero-masthead::before {
          content: 'ANU';
          position: absolute;
          right: -2rem;
          top: 50%;
          transform: translateY(-50%);
          font-family: 'Playfair Display', serif;
          font-size: 14rem;
          font-weight: 700;
          color: rgba(184,134,11,0.04);
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }

        .anu-gold-rule {
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--gold), var(--gold-light), var(--gold), transparent);
        }
      ` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "anu-hero-masthead py-16 text-center text-white lg:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-4xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-xs font-bold uppercase tracking-widest text-[var(--gold-light)]", children: sectionName }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-playfair mt-3 text-4xl font-bold tracking-tight md:text-5xl text-white", children: content.hero.heading }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-garamond mx-auto mt-4 max-w-3xl text-base italic leading-relaxed text-white/80 md:text-lg", children: content.hero.subheading }),
      content.hero.ctaLabel && content.hero.ctaLink ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: renderLink(content.hero.ctaLink, content.hero.ctaLabel) }) : null
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "anu-gold-rule" })
  ] });
}
function RichTextSection({ section }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: section.id, className: "rounded border border-[var(--rule)] bg-white p-8 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-playfair text-2xl font-bold text-[var(--ink)] border-b border-[var(--rule)]/60 pb-3", children: section.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-serif mt-5 space-y-4 text-base leading-relaxed text-[#4a4235]", children: section.paragraphs.map((paragraph, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: paragraph }, `${section.id}-${index}`)) })
  ] });
}
function CardsSection({ section }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: section.id, className: "rounded border border-[var(--rule)] bg-white p-8 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-playfair text-2xl font-bold text-[var(--ink)] border-b border-[var(--rule)]/60 pb-3", children: section.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-6 md:grid-cols-2", children: section.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "article",
      {
        className: "rounded border border-[var(--rule)] bg-[var(--parchment)]/10 p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 right-0 h-1 bg-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-playfair text-lg font-bold text-[var(--ink)] group-hover:text-[var(--gold)] transition-colors", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif mt-2.5 text-sm leading-relaxed text-[var(--muted)]", children: item.description })
        ]
      },
      item.title
    )) })
  ] });
}
function NoticesSection({ section }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: section.id, className: "rounded border border-[var(--rule)] bg-white p-8 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-playfair text-2xl font-bold text-[var(--ink)] border-b border-[var(--rule)]/60 pb-3", children: section.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-5", children: section.items.map((item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "li",
      {
        className: "rounded border border-[var(--rule)] bg-[var(--parchment)]/10 p-5 shadow-sm hover:shadow-md transition-shadow relative",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-xs font-bold uppercase tracking-wider text-[var(--gold)]", children: item.date }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-playfair text-base font-bold text-[var(--ink)] mt-1.5", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif mt-2 text-sm leading-relaxed text-[var(--muted)]", children: item.details }),
          item.href ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3", children: renderLink(item.href, "View details") }) : null
        ]
      },
      `${item.title}-${index}`
    )) })
  ] });
}
function DownloadsSection({ section }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: section.id, className: "rounded border border-[var(--rule)] bg-white p-8 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-playfair text-2xl font-bold text-[var(--ink)] border-b border-[var(--rule)]/60 pb-3", children: section.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-4", children: section.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "li",
      {
        className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded border border-[var(--rule)] bg-[var(--parchment)]/10 p-4 shadow-sm",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-playfair text-sm font-bold text-[var(--ink)]", children: item.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-serif text-xs text-[var(--muted)] mt-0.5", children: [
              item.format,
              item.note ? ` · ${item.note}` : ""
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: item.href,
              className: "flex items-center justify-center gap-1.5 rounded bg-[var(--ink)] px-4 py-2 font-serif text-xs font-semibold text-white transition hover:bg-[var(--ink-mid)] shrink-0",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-3.5 w-3.5", "aria-hidden": true }),
                "Download Document"
              ]
            }
          )
        ]
      },
      item.name
    )) })
  ] });
}
function FAQSection({ section }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: section.id, className: "rounded border border-[var(--rule)] bg-white p-8 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-playfair text-2xl font-bold text-[var(--ink)] border-b border-[var(--rule)]/60 pb-3", children: section.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-5", children: section.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "article",
      {
        className: "rounded border border-[var(--rule)] bg-[var(--parchment)]/10 p-5 shadow-sm",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-playfair text-base font-bold text-[var(--ink)]", children: item.question }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif mt-2.5 text-sm leading-relaxed text-[#4a4235]", children: item.answer })
        ]
      },
      item.question
    )) })
  ] });
}
function ContactSection({ section }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: section.id, className: "rounded border border-[var(--rule)] bg-white p-8 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-playfair text-2xl font-bold text-[var(--ink)] border-b border-[var(--rule)]/60 pb-3", children: section.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 divide-y divide-[var(--rule)]/40", children: section.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "li",
      {
        className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-4",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-playfair text-sm font-bold text-[var(--ink)]", children: item.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-sm text-[var(--muted)]", children: item.href ? renderLink(item.href, item.value) : item.value })
        ]
      },
      item.label
    )) })
  ] });
}
function TimelineSection({ section }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: section.id, className: "rounded border border-[var(--rule)] bg-white p-8 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-playfair text-2xl font-bold text-[var(--ink)] border-b border-[var(--rule)]/60 pb-3", children: section.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "mt-6 space-y-5", children: section.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "li",
      {
        className: "rounded border border-[var(--rule)] bg-[var(--parchment)]/10 p-5 shadow-sm",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-xs font-bold uppercase tracking-wider text-[var(--gold)]", children: item.period }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-playfair text-base font-bold text-[var(--ink)] mt-1", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif mt-2.5 text-sm leading-relaxed text-[var(--muted)]", children: item.description })
        ]
      },
      `${item.period}-${item.title}`
    )) })
  ] });
}
function TableSection({ section }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: section.id, className: "rounded border border-[var(--rule)] bg-white p-8 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-playfair text-2xl font-bold text-[var(--ink)] border-b border-[var(--rule)]/60 pb-3", children: section.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 overflow-x-auto rounded border border-[var(--rule)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full bg-white text-left text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-[var(--parchment-dark)] text-[var(--ink)] font-playfair font-bold", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-[var(--rule)]", children: section.columns.map((column) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 font-semibold tracking-wider", children: column }, column)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-[var(--rule)]/60", children: section.rows.map((row, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "tr",
        {
          className: "hover:bg-[var(--parchment)]/30 transition-colors",
          children: row.map((cell, cellIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "td",
            {
              className: "px-4 py-3 font-serif text-[#4a4235]",
              children: cell
            },
            `${section.id}-${index}-${cellIndex}`
          ))
        },
        `${section.id}-${index}`
      )) })
    ] }) })
  ] });
}
function PageSections({ sections }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700", children: sections.map((section) => {
    switch (section.type) {
      case "richText":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(RichTextSection, { section }, section.id);
      case "cards":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(CardsSection, { section }, section.id);
      case "notices":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(NoticesSection, { section }, section.id);
      case "downloads":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(DownloadsSection, { section }, section.id);
      case "faq":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(FAQSection, { section }, section.id);
      case "contact":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ContactSection, { section }, section.id);
      case "timeline":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(TimelineSection, { section }, section.id);
      case "table":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(TableSection, { section }, section.id);
      default:
        return null;
    }
  }) });
}
function SideNavigation({ content }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded border border-[var(--rule)] bg-white p-5 shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-playfair text-sm font-bold uppercase tracking-wider text-[var(--ink)] border-b border-[var(--rule)]/60 pb-1.5", children: "On this page" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-2 text-sm font-serif", children: content.onThisPage.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: renderLink(item.href, item.label) }, item.label)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded border border-[var(--rule)] bg-white p-5 shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-playfair text-sm font-bold uppercase tracking-wider text-[var(--ink)] border-b border-[var(--rule)]/60 pb-1.5", children: "Related links" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-2 text-sm font-serif", children: content.relatedLinks.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: renderLink(item.href, item.label) }, item.label)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "rounded border border-[var(--rule)] bg-white p-5 shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-playfair text-sm font-bold uppercase tracking-wider text-[var(--ink)] border-b border-[var(--rule)]/60 pb-1.5", children: "Content Governance" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-2.5 text-xs text-[var(--muted)] font-serif", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[var(--ink)]", children: "Office:" }),
          " ",
          content.meta.owner
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[var(--ink)]", children: "Last updated:" }),
          " ",
          content.meta.lastUpdated
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[var(--ink)]", children: "Approved by:" }),
          " ",
          content.governance.approvedBy
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-[var(--ink)]", children: "Approved on:" }),
          " ",
          content.governance.approvedOn
        ] })
      ] })
    ] })
  ] });
}
export {
  PageHero as P,
  SideNavigation as S,
  PageSections as a,
  getPublishedPage as g
};
