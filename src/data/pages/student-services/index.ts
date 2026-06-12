import type { PageContent } from "@/content/page-schema";
import { validatePageContent } from "@/content/page-schema";

type StudentServicesPageKey =
  | "overview"
  | "exam-notifications"
  | "results"
  | "downloads"
  | "placements"
  | "student-portal";

const sharedContact = {
  id: "contact",
  type: "contact" as const,
  title: "Support Contacts",
  items: [
    { label: "Examination Section", value: "+91 863 234 6140", href: "tel:+918632346140" },
    { label: "Student Services Helpdesk", value: "+91 863 234 6114", href: "tel:+918632346114" },
    { label: "Registrar Office", value: "registrar@anu.ac.in", href: "mailto:registrar@anu.ac.in" },
  ],
};

const pages: Record<StudentServicesPageKey, PageContent> = {
  overview: validatePageContent({
    meta: {
      title: "Student Services Overview | Acharya Nagarjuna University",
      description:
        "Central student services hub for examinations, results, forms, placements and student portal access.",
      keywords: ["ANU student services", "exam notifications", "results", "forms", "placements"],
      owner: "Student Services Cell, ANU",
      lastUpdated: "June 1, 2026",
      canonicalUrl: "/pages/student-services?page=overview",
    },
    hero: {
      heading: "Student Services",
      subheading:
        "Access examination schedules, results updates, student forms, placement resources and official service channels from one consolidated service hub.",
      ctaLabel: "Go to Exam Notifications",
      ctaLink: "/pages/student-services?page=exam-notifications",
    },
    governance: {
      sourceRef: "ANU Student Service Circular Consolidation 2026",
      approvedBy: "Registrar Office",
      approvedOn: "May 28, 2026",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Student Services", href: "/pages/student-services?page=overview" },
    ],
    relatedLinks: [
      { label: "Admissions Helpdesk", href: "/pages/admissions?page=helpdesk" },
      { label: "Academic Calendar", href: "/pages/academics?page=academic-calendar" },
      { label: "University Profile", href: "/aboutprofile" },
    ],
    onThisPage: [
      { label: "Service Desk", href: "#service-desk" },
      { label: "Quick Access", href: "#quick-access" },
      { label: "Service Timelines", href: "#service-timelines" },
      { label: "Support Contacts", href: "#contact" },
    ],
    sections: [
      {
        id: "service-desk",
        type: "richText",
        title: "Service Desk",
        paragraphs: [
          "The Student Services framework supports enrolled learners across core administrative milestones, including examinations, result publication, form downloads, and campus placement touchpoints.",
          "Services are coordinated through the Examination Section, designated student service counters and official communication channels to ensure consistency, timely updates and transparent processes.",
        ],
      },
      {
        id: "quick-access",
        type: "cards",
        title: "Quick Access",
        items: [
          {
            title: "Exam Notifications",
            description:
              "Latest schedules, hall-ticket timelines and circulars related to semester and supplementary examinations.",
          },
          {
            title: "Results",
            description:
              "Result release windows, revaluation guidance and post-result process information.",
          },
          {
            title: "Downloads",
            description:
              "Student forms, request templates and official document formats required by service workflows.",
          },
          {
            title: "Placements",
            description:
              "Placement activity stream, eligibility support and internship/career orientation pathways.",
          },
        ],
      },
      {
        id: "service-timelines",
        type: "timeline",
        title: "Typical Student Service Cycle",
        items: [
          {
            period: "Pre-Examination",
            title: "Notification & Registration",
            description:
              "Exam circulars and registration windows are published with deadline checkpoints.",
          },
          {
            period: "Examination Week",
            title: "Hall Ticket & Exam Conduct",
            description:
              "Hall ticket timelines, examination support notices and centre-level updates are shared.",
          },
          {
            period: "Post Examination",
            title: "Results & Requests",
            description:
              "Result publication, revaluation request windows and mark memo support are activated.",
          },
        ],
      },
      sharedContact,
    ],
  }),
  "exam-notifications": validatePageContent({
    meta: {
      title: "Exam Notifications | Acharya Nagarjuna University",
      description:
        "Official examination notices, timetable updates and hall-ticket related announcements.",
      keywords: ["ANU exam notifications", "timetable", "hall ticket", "exam schedule"],
      owner: "Examination Section, ANU",
      lastUpdated: "June 1, 2026",
      canonicalUrl: "/pages/student-services?page=exam-notifications",
    },
    hero: {
      heading: "Exam Notifications",
      subheading:
        "Track official examination announcements, updated schedules and instructions relevant to regular, supplementary and special examinations.",
      ctaLabel: "View Result Page",
      ctaLink: "/pages/student-services?page=results",
    },
    governance: {
      sourceRef: "Examination Section Notice Board Digest 2026",
      approvedBy: "Controller of Examinations Office",
      approvedOn: "May 30, 2026",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Student Services", href: "/pages/student-services?page=overview" },
      { label: "Exam Notifications", href: "/pages/student-services?page=exam-notifications" },
    ],
    relatedLinks: [
      { label: "Results", href: "/pages/student-services?page=results" },
      { label: "Downloads", href: "/pages/student-services?page=downloads" },
      { label: "Academic Calendar", href: "/pages/academics?page=academic-calendar" },
    ],
    onThisPage: [
      { label: "Latest Notices", href: "#latest-notices" },
      { label: "Exam Guidance", href: "#exam-guidance" },
      { label: "Important Dates", href: "#important-dates" },
      { label: "Support Contacts", href: "#contact" },
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
            details:
              "Revised timetable publication cycle for main semester examinations across constituent colleges.",
            href: "/pages/student-services?page=downloads",
          },
          {
            date: "May 2026",
            title: "Hall Ticket Availability Window",
            details:
              "Hall tickets are published section-wise after fee clearance and registration verification.",
          },
          {
            date: "April 2026",
            title: "Supplementary Examination Circular",
            details:
              "Notification includes registration timeline, fee schedule and subject paper mapping.",
          },
        ],
      },
      {
        id: "exam-guidance",
        type: "richText",
        title: "Exam Guidance",
        paragraphs: [
          "Students are advised to verify programme, semester and subject mapping before appearing for examinations.",
          "The official notice publication sequence is circular release, department communication, hall-ticket issue, and examination centre support advisory.",
        ],
      },
      {
        id: "important-dates",
        type: "table",
        title: "Important Date Windows",
        columns: ["Activity", "Timeline", "Channel"],
        rows: [
          ["Main Examination Notice", "4-6 weeks before exam", "Examination Section / Department"],
          ["Hall Ticket Release", "7-10 days before exam", "Portal / Department Notice"],
          ["Supplementary Notification", "Post result window", "Examination Circular"],
        ],
      },
      sharedContact,
    ],
  }),
  results: validatePageContent({
    meta: {
      title: "Results | Acharya Nagarjuna University",
      description:
        "Result publication guidance, revaluation workflow and marksheet support for students.",
      keywords: ["ANU results", "revaluation", "marks memo", "exam result"],
      owner: "Examination Section, ANU",
      lastUpdated: "June 1, 2026",
      canonicalUrl: "/pages/student-services?page=results",
    },
    hero: {
      heading: "Results & Post-Result Services",
      subheading:
        "Understand result publication timelines, revaluation process, and mark memo support channels for all student categories.",
      ctaLabel: "Open Downloads",
      ctaLink: "/pages/student-services?page=downloads",
    },
    governance: {
      sourceRef: "Result Processing and Revaluation SOP 2026",
      approvedBy: "Controller of Examinations Office",
      approvedOn: "May 30, 2026",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Student Services", href: "/pages/student-services?page=overview" },
      { label: "Results", href: "/pages/student-services?page=results" },
    ],
    relatedLinks: [
      { label: "Exam Notifications", href: "/pages/student-services?page=exam-notifications" },
      { label: "Downloads", href: "/pages/student-services?page=downloads" },
      { label: "Helpdesk", href: "/pages/admissions?page=helpdesk" },
    ],
    onThisPage: [
      { label: "Result Updates", href: "#result-updates" },
      { label: "Revaluation Workflow", href: "#revaluation-workflow" },
      { label: "FAQ", href: "#result-faq" },
      { label: "Support Contacts", href: "#contact" },
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
            details:
              "Results are released in programme batches after tabulation and verification closure.",
          },
          {
            date: "June 2026",
            title: "Mark Memo Issue Advisory",
            details:
              "Digital memos are available first; physical issue schedule follows college-level communication.",
          },
        ],
      },
      {
        id: "revaluation-workflow",
        type: "timeline",
        title: "Revaluation Workflow",
        items: [
          {
            period: "Step 1",
            title: "Result Announcement",
            description:
              "Students verify marks and identify subjects for revaluation or recounting.",
          },
          {
            period: "Step 2",
            title: "Application Submission",
            description:
              "Submit revaluation request within notified deadline with required fee and documents.",
          },
          {
            period: "Step 3",
            title: "Revaluation Outcome",
            description:
              "Revaluation outcomes are released through official channels and reflected in final memo updates.",
          },
        ],
      },
      {
        id: "result-faq",
        type: "faq",
        title: "Results FAQ",
        items: [
          {
            question: "Where are official results announced?",
            answer:
              "Results are announced through official university channels and verified department communications.",
          },
          {
            question: "Can I apply for revaluation for multiple subjects?",
            answer:
              "Yes, subject to eligibility and timelines announced in the specific result notification.",
          },
          {
            question: "How do I correct details in a memo?",
            answer:
              "Use the official correction request process through examination and department helpdesks.",
          },
        ],
      },
      sharedContact,
    ],
  }),
  downloads: validatePageContent({
    meta: {
      title: "Student Downloads | Acharya Nagarjuna University",
      description:
        "Official student forms, request templates and document downloads for examination and service workflows.",
      keywords: ["ANU downloads", "student forms", "application forms", "exam forms"],
      owner: "Student Services Cell, ANU",
      lastUpdated: "June 1, 2026",
      canonicalUrl: "/pages/student-services?page=downloads",
    },
    hero: {
      heading: "Student Forms & Downloads",
      subheading:
        "Access commonly used student service forms, request templates and supporting document formats used in ANU administrative workflows.",
      ctaLabel: "Go to Student Portal",
      ctaLink: "/pages/student-services?page=student-portal",
    },
    governance: {
      sourceRef: "Student Form Repository Register 2026",
      approvedBy: "Student Services Cell Coordinator",
      approvedOn: "May 27, 2026",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Student Services", href: "/pages/student-services?page=overview" },
      { label: "Downloads", href: "/pages/student-services?page=downloads" },
    ],
    relatedLinks: [
      { label: "Exam Notifications", href: "/pages/student-services?page=exam-notifications" },
      { label: "Results", href: "/pages/student-services?page=results" },
      { label: "Student Portal", href: "/pages/student-services?page=student-portal" },
    ],
    onThisPage: [
      { label: "Download Centre", href: "#download-centre" },
      { label: "Form Usage Guide", href: "#usage-guide" },
      { label: "Support Contacts", href: "#contact" },
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
            note: "Use within notified window",
          },
          {
            name: "Duplicate Mark Memo Request",
            format: "PDF",
            href: "/pages/student-services?page=results",
            note: "Attach identity proof",
          },
          {
            name: "Bonafide Certificate Request",
            format: "PDF",
            href: "/pages/student-services?page=student-portal",
            note: "Submit through department",
          },
          {
            name: "Migration Certificate Request",
            format: "PDF",
            href: "/pages/student-services?page=student-portal",
            note: "For external admission use",
          },
        ],
      },
      {
        id: "usage-guide",
        type: "cards",
        title: "Form Usage Guide",
        items: [
          {
            title: "Step 1: Identify Form",
            description:
              "Choose the exact form based on service requirement and programme category.",
          },
          {
            title: "Step 2: Verify Attachments",
            description:
              "Prepare mandatory annexures such as ID proof, fee receipt and prior memo copies.",
          },
          {
            title: "Step 3: Submit Through Correct Channel",
            description:
              "Submit through department office, examination section counter or official portal as applicable.",
          },
        ],
      },
      sharedContact,
    ],
  }),
  placements: validatePageContent({
    meta: {
      title: "Placements | Acharya Nagarjuna University",
      description:
        "Placement support, internship pathways and career readiness services for ANU students.",
      keywords: ["ANU placements", "career support", "internships", "campus recruitment"],
      owner: "Career & Placement Cell, ANU",
      lastUpdated: "June 1, 2026",
      canonicalUrl: "/pages/student-services?page=placements",
    },
    hero: {
      heading: "Placements & Career Services",
      subheading:
        "Career-oriented support for internships, employability readiness and campus recruitment pathways coordinated through ANU placement channels.",
      ctaLabel: "Student Portal Access",
      ctaLink: "/pages/student-services?page=student-portal",
    },
    governance: {
      sourceRef: "Career and Placement Program Note 2026",
      approvedBy: "Placement Cell Coordinator",
      approvedOn: "May 25, 2026",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Student Services", href: "/pages/student-services?page=overview" },
      { label: "Placements", href: "/pages/student-services?page=placements" },
    ],
    relatedLinks: [
      { label: "Student Services Overview", href: "/pages/student-services?page=overview" },
      { label: "Downloads", href: "/pages/student-services?page=downloads" },
      { label: "University Colleges", href: "/colleges/sciences" },
    ],
    onThisPage: [
      { label: "Placement Support", href: "#placement-support" },
      { label: "Career Readiness", href: "#career-readiness" },
      { label: "Current Cycle", href: "#current-cycle" },
      { label: "Support Contacts", href: "#contact" },
    ],
    sections: [
      {
        id: "placement-support",
        type: "richText",
        title: "Placement Support",
        paragraphs: [
          "The placement support framework is designed to connect students with employability opportunities through coordinated communication between departments, placement officers and recruiters.",
          "Services include orientation, resume support, recruitment readiness sessions and employer interaction workflows.",
        ],
      },
      {
        id: "career-readiness",
        type: "cards",
        title: "Career Readiness Tracks",
        items: [
          {
            title: "Resume and Profile Clinics",
            description:
              "Guided review sessions to align resumes with sector expectations and role requirements.",
          },
          {
            title: "Aptitude and Interview Preparation",
            description:
              "Structured preparation sessions covering aptitude, communication and interview simulations.",
          },
          {
            title: "Internship and Project Pathway",
            description:
              "Support for identifying internships and project opportunities aligned to academic specialization.",
          },
        ],
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
            "Eligibility briefing and registration",
          ],
          ["Skill Readiness Sessions", "Mid semester", "Aptitude and interview preparation"],
          ["Recruitment Drives", "As notified", "Company engagement and candidate selection"],
        ],
      },
      sharedContact,
    ],
  }),
  "student-portal": validatePageContent({
    meta: {
      title: "Student Portal Services | Acharya Nagarjuna University",
      description:
        "Portal-linked student service access including records, requests, and status tracking guidance.",
      keywords: ["ANU student portal", "student login", "service requests", "records access"],
      owner: "e-Governance Cell, ANU",
      lastUpdated: "June 1, 2026",
      canonicalUrl: "/pages/student-services?page=student-portal",
    },
    hero: {
      heading: "Student Portal Services",
      subheading:
        "Portal-centered access for student service records, request tracking and communication workflows across ANU academic and administrative units.",
      ctaLabel: "Open Student Services Overview",
      ctaLink: "/pages/student-services?page=overview",
    },
    governance: {
      sourceRef: "ANU e-Governance Student Access Note 2026",
      approvedBy: "e-Governance Cell Administrator",
      approvedOn: "May 29, 2026",
    },
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Student Services", href: "/pages/student-services?page=overview" },
      { label: "Student Portal", href: "/pages/student-services?page=student-portal" },
    ],
    relatedLinks: [
      { label: "Downloads", href: "/pages/student-services?page=downloads" },
      { label: "Results", href: "/pages/student-services?page=results" },
      { label: "Exam Notifications", href: "/pages/student-services?page=exam-notifications" },
    ],
    onThisPage: [
      { label: "Portal Scope", href: "#portal-scope" },
      { label: "Service Functions", href: "#service-functions" },
      { label: "Portal FAQ", href: "#portal-faq" },
      { label: "Support Contacts", href: "#contact" },
    ],
    sections: [
      {
        id: "portal-scope",
        type: "richText",
        title: "Portal Scope",
        paragraphs: [
          "The student portal acts as an access and tracking layer for academic service processes, including personal records verification, request initiation and status follow-up.",
          "Students should use only official university channels and authenticated credentials for all service interactions.",
        ],
      },
      {
        id: "service-functions",
        type: "cards",
        title: "Service Functions",
        items: [
          {
            title: "Student Profile and Records",
            description: "View and verify student profile data aligned with institutional records.",
          },
          {
            title: "Request Tracking",
            description:
              "Track service requests and status progression for submitted student applications.",
          },
          {
            title: "Notice and Alert Access",
            description:
              "Access service-related updates aligned to examinations, documents and process milestones.",
          },
        ],
      },
      {
        id: "portal-faq",
        type: "faq",
        title: "Student Portal FAQ",
        items: [
          {
            question: "Whom should I contact for credential issues?",
            answer:
              "Please contact the designated support channels listed below with student identification details.",
          },
          {
            question: "Can I track all requests online?",
            answer:
              "Most standard requests support status tracking; some processes may require additional in-person verification.",
          },
          {
            question: "Are portal notices considered official?",
            answer:
              "Yes, when published through official university channels and corresponding department communications.",
          },
        ],
      },
      sharedContact,
    ],
  }),
};

export function getStudentServicesPage(page: string): PageContent | undefined {
  return pages[page as StudentServicesPageKey];
}
