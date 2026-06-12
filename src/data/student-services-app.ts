export type StudentServiceTabKey =
  | "overview"
  | "exam-section"
  | "exam-notifications"
  | "results"
  | "downloads"
  | "placements"
  | "alumni"
  | "services"
  | "anti-ragging-cell"
  | "women-grievance-cell"
  | "sc-st-cell"
  | "differently-abled-cell"
  | "student-grievance-cell"
  | "student-portal";

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

export type StudentServiceTab = {
  key: StudentServiceTabKey;
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
  { label: "Student Services Helpdesk", value: "+91 863 234 6114", href: "tel:+918632346114" },
  { label: "Examination Section", value: "+91 863 234 6140", href: "tel:+918632346140" },
  { label: "Registrar Office", value: "registrar@anu.ac.in", href: "mailto:registrar@anu.ac.in" },
];

export const studentServicePageAliases: Record<string, StudentServiceTabKey> = {
  "notifications-timetables": "exam-notifications",
  "downloads-forms": "downloads",
};

export const studentServiceTabs: StudentServiceTab[] = [
  {
    key: "overview",
    title: "Student Services Hub",
    shortTitle: "Overview",
    badge: "Primary",
    description:
      "A single classified service hub for examinations, certificates, digital access, placements and student support cells.",
    metrics: [
      {
        label: "Core service clusters",
        value: "6",
        note: "Exams, records, portal, placements, alumni and welfare",
      },
      { label: "Support channels", value: "3", note: "Phone, email and office counter guidance" },
      {
        label: "Student-facing tabs",
        value: "14",
        note: "Structured for faster navigation and task discovery",
      },
      {
        label: "Campus address",
        value: "ANU",
        note: "Nagarjuna Nagar, Guntur, Andhra Pradesh 522510",
      },
    ],
    highlights: [
      {
        title: "Find the right service faster",
        description:
          "Each tab is grouped by what a student is trying to do: write exams, access results, request records or raise support issues.",
        tone: "accent",
      },
      {
        title: "Use the correct channel",
        description:
          "Every service view explains whether the next step belongs to the portal, examination section, department office or support cell.",
      },
      {
        title: "Reduce avoidable back-and-forth",
        description:
          "Requirements, expected turnaround windows and the usual action order are surfaced before a student reaches the office counter.",
        tone: "success",
      },
    ],
    steps: [
      {
        title: "Choose your service area",
        description:
          "Start with exams, results, downloads, placements, portal support or a dedicated student support cell.",
      },
      {
        title: "Review requirements",
        description:
          "Check the listed documents, deadlines and submission channel before moving ahead.",
      },
      {
        title: "Use the right contact path",
        description:
          "If a task needs clarification, use the mapped phone, email or office escalation shown for that tab.",
      },
    ],
    resources: [
      {
        title: "Exam schedules and hall-ticket flow",
        channel: "Exam Notifications",
        turnaround: "Published as notified",
        requirements: "Programme, semester and fee status",
        href: "/student-services/exam-notifications",
      },
      {
        title: "Result and revaluation guidance",
        channel: "Results",
        turnaround: "After tabulation closure",
        requirements: "Hall-ticket details and result notification",
        href: "/student-services/results",
      },
      {
        title: "Certificates and service requests",
        channel: "Downloads and Portal",
        turnaround: "Varies by document",
        requirements: "Student ID, memo copies, fee receipt when applicable",
        href: "/student-services/downloads",
      },
      {
        title: "Placement readiness and drives",
        channel: "Placements",
        turnaround: "Cycle-based",
        requirements: "Eligibility confirmation and profile readiness",
        href: "/student-services/placements",
      },
    ],
    faq: [
      {
        question: "Where should I start if I am not sure which office handles my request?",
        answer:
          "Start with the Overview or Services tab. They classify requests by purpose and point you to the correct office or digital channel.",
      },
      {
        question: "Do all services happen through the portal?",
        answer:
          "No. Some steps are portal-enabled, while others still depend on the department office, examination section or a specific support cell.",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "Use this hub anytime for navigation and classified service guidance.",
      responseTime:
        "Escalation and processing windows vary by service type and official notification.",
      bestFor: [
        "First-time student navigation",
        "Understanding which office owns a request",
        "Comparing exam, records and support workflows",
      ],
      notes: [
        "This module improves navigation and service clarity; official deadlines still follow university notifications.",
        "Students should rely on authenticated university communication for final submission instructions.",
      ],
    },
  },
  {
    key: "exam-section",
    title: "Exam Section",
    shortTitle: "Exam Section",
    badge: "Academic",
    description:
      "Operational guidance for the examination section, including registration flow, hall-ticket readiness and post-exam service touchpoints.",
    metrics: [
      {
        label: "Key functions",
        value: "4",
        note: "Registration, timetables, hall-tickets and memo support",
      },
      {
        label: "Primary owner",
        value: "COE Office",
        note: "Controller of Examinations process owner",
      },
      {
        label: "Best visit time",
        value: "Before deadlines",
        note: "Resolve mismatches before hall-ticket release windows",
      },
      { label: "Linked tabs", value: "3", note: "Notifications, results and downloads" },
    ],
    highlights: [
      {
        title: "Registration verification",
        description:
          "Students should verify programme, semester and subject mapping before examination registration closes.",
      },
      {
        title: "Hall-ticket dependency",
        description:
          "Hall-ticket issuance generally follows fee clearance, data validation and schedule publication.",
        tone: "accent",
      },
      {
        title: "Post-exam requests",
        description:
          "Memo corrections, duplicate requests and revaluation guidance continue through linked service tabs.",
      },
    ],
    steps: [
      {
        title: "Confirm eligibility",
        description:
          "Check registration completion, fee status and paper mapping with your department.",
      },
      {
        title: "Track official schedule",
        description:
          "Watch notification releases for revised dates, instructions and hall-ticket timing.",
      },
      {
        title: "Retain exam records",
        description:
          "Keep hall-ticket and acknowledgement details ready for result and revaluation follow-up.",
      },
    ],
    resources: [
      {
        title: "Examination registration guidance",
        channel: "Department + Exam Section",
        turnaround: "Before exam cycle closes",
        requirements: "Programme details and fee clearance",
      },
      {
        title: "Hall-ticket support",
        channel: "Portal / Department Notice",
        turnaround: "7-10 days before exam in typical cycles",
        requirements: "Approved registration and identity details",
        href: "/student-services/student-portal",
      },
      {
        title: "Post-exam correction workflow",
        channel: "Results / Downloads",
        turnaround: "After result release",
        requirements: "Hall-ticket number, memo copy and request reason",
        href: "/student-services/results",
      },
    ],
    faq: [
      {
        question: "What should I do if my subject combination looks incorrect?",
        answer:
          "Raise the mismatch with your department before the exam window closes so the examination section receives the correction in time.",
      },
      {
        question: "Who handles hall-ticket issues on the exam week?",
        answer:
          "Start with the department notice desk or designated exam support channel, then escalate to the examination section if the issue is unresolved.",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability:
        "Most useful before registration deadlines and during hall-ticket release week.",
      responseTime:
        "Time-sensitive issues move fastest when raised before the final examination week.",
      bestFor: [
        "Registration verification",
        "Hall-ticket questions",
        "Understanding exam office responsibilities",
      ],
      notes: [
        "Carry programme and semester details when contacting the examination section.",
        "Late escalations may need department endorsement first.",
      ],
    },
  },
  {
    key: "exam-notifications",
    title: "Exam Notifications & Timetables",
    shortTitle: "Notifications",
    badge: "Updated",
    description:
      "A classified view of examination announcements so students can separate schedule releases, hall-ticket alerts and supplementary notices quickly.",
    metrics: [
      {
        label: "Notice groups",
        value: "3",
        note: "Main exams, hall-ticket updates and supplementary notices",
      },
      {
        label: "Recommended check",
        value: "Weekly",
        note: "Increase frequency near exam cycle dates",
      },
      {
        label: "Alert source",
        value: "Exam Section",
        note: "Cross-check with department notice circulation",
      },
      {
        label: "Action path",
        value: "Read → verify → escalate",
        note: "Use the listed channel if details do not match your records",
      },
    ],
    highlights: [
      {
        title: "Separate critical from routine notices",
        description:
          "Students can identify whether a notice changes dates, unlocks hall-tickets or announces a supplementary cycle.",
      },
      {
        title: "Act before the last date",
        description:
          "The page focuses on actionability by surfacing what to verify immediately after a notification is posted.",
        tone: "accent",
      },
      {
        title: "Stay aligned with department notices",
        description:
          "Timetables and exam instructions should be checked against both the central release and programme-specific communication.",
      },
    ],
    notices: [
      {
        date: "May 2026",
        title: "Semester End Examination Schedule (UG/PG)",
        description:
          "Revised timetable publication cycle for main semester examinations across constituent colleges.",
        status: "Revised timetable",
      },
      {
        date: "May 2026",
        title: "Hall Ticket Availability Window",
        description:
          "Hall tickets are released after fee clearance and registration verification are completed.",
        status: "Action required",
      },
      {
        date: "April 2026",
        title: "Supplementary Examination Circular",
        description:
          "Notification includes registration timeline, fee schedule and subject-paper mapping guidance.",
        status: "Registration window",
      },
    ],
    steps: [
      {
        title: "Read the latest notice first",
        description:
          "Do not rely on previous-cycle assumptions if a revised timetable or special instruction is posted.",
      },
      {
        title: "Match your record set",
        description:
          "Verify programme, semester, paper titles and hall-ticket availability against your registration details.",
      },
      {
        title: "Escalate mismatches quickly",
        description:
          "Use the examination section or department office before the last working day in the notification window.",
      },
    ],
    resources: [
      {
        title: "Hall-ticket release guidance",
        channel: "Student Portal",
        turnaround: "Closer to the exam week",
        requirements: "Registration approval and fee clearance",
        href: "/student-services/student-portal",
      },
      {
        title: "Supplementary cycle instructions",
        channel: "Exam Section",
        turnaround: "Post-result window",
        requirements: "Subject list and fee schedule review",
        href: "/student-services/exam-section",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "Check more frequently in the 4-6 weeks before examinations.",
      responseTime:
        "Schedule clarifications should be raised immediately after a revised notice appears.",
      bestFor: [
        "Timetable changes",
        "Hall-ticket publication windows",
        "Supplementary cycle alerts",
      ],
      notes: [
        "Notification dates shown here are presentation references from the current project content.",
        "Students should treat official notice documents as the final authoritative source.",
      ],
    },
  },
  {
    key: "results",
    title: "Results & Revaluation",
    shortTitle: "Results",
    badge: "Popular",
    description:
      "Clear next steps for students after results are published, including memo access, recounting and revaluation decision points.",
    metrics: [
      {
        label: "Service stages",
        value: "3",
        note: "Result release, review decision and post-result update",
      },
      {
        label: "Linked requests",
        value: "4",
        note: "Revaluation, recounting, duplicate memo and corrections",
      },
      {
        label: "Best preparation",
        value: "Keep records ready",
        note: "Hall-ticket, subject list and prior memo copies",
      },
      {
        label: "Route after results",
        value: "Downloads",
        note: "Use the forms/services catalogue for follow-up requests",
      },
    ],
    highlights: [
      {
        title: "Use result release as a checkpoint",
        description:
          "Students should first verify subject coverage and score accuracy before choosing any follow-up request.",
      },
      {
        title: "Avoid rushed applications",
        description:
          "Review deadlines, fee requirements and paper eligibility before submitting revaluation or memo requests.",
        tone: "accent",
      },
      {
        title: "Keep a clean record trail",
        description:
          "Saving hall-ticket and memo references reduces turnaround friction in correction and duplicate requests.",
      },
    ],
    notices: [
      {
        date: "June 2026",
        title: "UG/PG Result Publication Window",
        description:
          "Results are released in programme batches after tabulation and verification closure.",
        status: "Batch-wise release",
      },
      {
        date: "June 2026",
        title: "Digital Memo Issue Advisory",
        description:
          "Digital memos are usually available first, followed by the physical issue schedule through college communication.",
        status: "Memo guidance",
      },
    ],
    steps: [
      {
        title: "Review the result carefully",
        description:
          "Check marks, subject presence and whether any paper requires recounting or revaluation.",
      },
      {
        title: "Choose the right request path",
        description:
          "Use the request that matches the issue: revaluation, duplicate memo, correction or certificate follow-up.",
      },
      {
        title: "Track the updated outcome",
        description:
          "Watch official communication channels for revised result publication or memo updates.",
      },
    ],
    resources: [
      {
        title: "Revaluation application readiness",
        channel: "Results + Downloads",
        turnaround: "Within notified window",
        requirements: "Memo copy, subject details and fee compliance",
        href: "/student-services/downloads",
      },
      {
        title: "Duplicate mark memo support",
        channel: "Downloads / Examination Section",
        turnaround: "Administrative processing window",
        requirements: "Identity proof and existing record details",
        href: "/student-services/downloads",
      },
      {
        title: "Correction requests",
        channel: "Department + Exam Section",
        turnaround: "Case-based",
        requirements: "Supporting evidence for the correction",
        href: "/student-services/services",
      },
    ],
    faq: [
      {
        question: "How do I know whether I need revaluation or another request?",
        answer:
          "Start by identifying whether the issue is about marks, a missing paper, a document copy or a data mismatch. Each path has a different follow-up workflow.",
      },
      {
        question: "Are digital memos enough for immediate use?",
        answer:
          "They are often the first available reference, but students should still follow the official guidance for physical memo issuance when required.",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "Most useful immediately after result publication windows open.",
      responseTime:
        "Revaluation and memo-related requests are usually deadline-driven and should not be delayed.",
      bestFor: ["Result interpretation", "Memo support", "Revaluation preparation"],
      notes: [
        "Always use the exact result notification window announced for your programme.",
        "Keep digital and printed references aligned when submitting follow-up requests.",
      ],
    },
  },
  {
    key: "downloads",
    title: "Forms, Certificates & Downloads",
    shortTitle: "Downloads",
    badge: "Forms",
    description:
      "A service catalogue for student request forms and certificate workflows, organized by what the student needs rather than by internal office labels.",
    metrics: [
      {
        label: "Common request types",
        value: "6+",
        note: "Revaluation, memo, bonafide, migration and related certificates",
      },
      {
        label: "Submission models",
        value: "3",
        note: "Portal, department office or examination section",
      },
      {
        label: "Student value",
        value: "High clarity",
        note: "Requirements and turnaround intent are visible up front",
      },
      {
        label: "Best companion tab",
        value: "Services",
        note: "Use together to choose the correct administrative channel",
      },
    ],
    highlights: [
      {
        title: "Think in outcomes, not office names",
        description:
          "Students can start from the document they need and then follow the mapped channel.",
        tone: "accent",
      },
      {
        title: "Reduce incomplete submissions",
        description:
          "Each item states the likely requirements so students are less likely to miss identity, memo or fee references.",
      },
      {
        title: "Bridge paper and digital workflows",
        description:
          "Where a portal is involved, this page directs students to the digital access tab instead of leaving the path ambiguous.",
      },
    ],
    resources: [
      {
        title: "Revaluation application",
        channel: "Examination follow-up",
        turnaround: "Within notified result window",
        requirements: "Memo copy, subject details and fee receipt",
        href: "/student-services/results",
      },
      {
        title: "Duplicate mark memo request",
        channel: "Examination section",
        turnaround: "Administrative processing",
        requirements: "Identity proof and prior academic record",
        href: "/student-services/results",
      },
      {
        title: "Bonafide certificate request",
        channel: "Department / Student Portal",
        turnaround: "Departmental verification based",
        requirements: "Current student ID and purpose statement",
        href: "/student-services/student-portal",
      },
      {
        title: "Migration certificate request",
        channel: "Student records support",
        turnaround: "Case-based",
        requirements: "Programme completion details and destination use case",
        href: "/student-services/services",
      },
      {
        title: "Student grievance submission",
        channel: "Support cell",
        turnaround: "Acknowledgement first, resolution later",
        requirements: "Issue summary and supporting references",
        href: "/student-services/student-grievance-cell",
      },
    ],
    faq: [
      {
        question: "Why are there no direct PDF files on every card?",
        answer:
          "This page is built as a real service catalogue first. Where a document is tied to another workflow, it sends you to the correct page instead of showing a dead template link.",
      },
      {
        question: "What if my request needs both a form and a department signature?",
        answer:
          "Use the listed channel and requirements together. Most certificate or correction workflows require both the request template and the right validating office.",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "Useful before any certificate, memo or post-result request submission.",
      responseTime: "Incomplete requests usually slow processing more than queue volume does.",
      bestFor: [
        "Certificate planning",
        "Finding document requirements",
        "Selecting the right submission channel",
      ],
      notes: [
        "Where the project does not yet include a live PDF asset, the catalogue routes students to the real workflow tab instead.",
        "This keeps the experience functional while the broader institute conversion continues.",
      ],
    },
  },
  {
    key: "placements",
    title: "Placements & Career Readiness",
    shortTitle: "Placements",
    badge: "Career",
    description:
      "Placement support presented as a student workflow: readiness, eligibility, employer interaction and post-drive follow-through.",
    metrics: [
      {
        label: "Readiness tracks",
        value: "3",
        note: "Resume, aptitude and internship/project path",
      },
      {
        label: "Typical cycle phases",
        value: "3",
        note: "Orientation, readiness and recruitment drives",
      },
      {
        label: "Primary audience",
        value: "Final-year + interns",
        note: "Also helpful for earlier preparation",
      },
      {
        label: "Connected tab",
        value: "Alumni",
        note: "Career support extends beyond active drive notices",
      },
    ],
    highlights: [
      {
        title: "Build readiness before a drive opens",
        description:
          "The strongest placement outcomes usually start with early profile preparation, not last-minute registration.",
      },
      {
        title: "Match eligibility before applying",
        description:
          "Students should confirm branch, semester and academic conditions before joining a drive.",
        tone: "accent",
      },
      {
        title: "Use placement support as a cycle",
        description:
          "Resume review, skill readiness and employer interaction are presented as one connected workflow.",
      },
    ],
    steps: [
      {
        title: "Complete your profile basics",
        description:
          "Keep your resume, academic record summary and contact details ready before opportunities are announced.",
      },
      {
        title: "Join readiness sessions",
        description:
          "Use orientation, aptitude practice and interview sessions to qualify with more confidence.",
      },
      {
        title: "Track drive outcomes",
        description:
          "After a drive, follow the placement cell’s official updates for next rounds or closure.",
      },
    ],
    resources: [
      {
        title: "Resume and profile clinic",
        channel: "Placement Cell",
        turnaround: "Cycle-based support",
        requirements: "Current resume and academic summary",
      },
      {
        title: "Aptitude and interview preparation",
        channel: "Career readiness sessions",
        turnaround: "Scheduled throughout the cycle",
        requirements: "Registration with readiness sessions",
      },
      {
        title: "Internship and project support",
        channel: "Placement / Department coordination",
        turnaround: "Opportunity dependent",
        requirements: "Domain interest and faculty coordination",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability:
        "Most relevant from mid-programme onward, especially during active recruitment cycles.",
      responseTime:
        "Recruitment and interview communication often moves faster than academic service cycles.",
      bestFor: ["Career preparation", "Placement-cycle navigation", "Internship readiness"],
      notes: [
        "Students should keep placement profiles current even outside live drive periods.",
        "Use the Alumni tab for longer-horizon networking and career continuity.",
      ],
    },
  },
  {
    key: "alumni",
    title: "Alumni & Professional Network",
    shortTitle: "Alumni",
    badge: "Network",
    description:
      "A real alumni-facing information page that connects graduating students with future networking, mentoring and institutional engagement channels.",
    metrics: [
      {
        label: "Core functions",
        value: "3",
        note: "Stay connected, mentor students and support professional networking",
      },
      {
        label: "Best stage",
        value: "Final year onward",
        note: "Useful for graduating students planning long-term engagement",
      },
      { label: "Related areas", value: "2", note: "Placements and student services records" },
      {
        label: "Primary outcome",
        value: "Continuity",
        note: "Keep ANU relationships active beyond graduation",
      },
    ],
    highlights: [
      {
        title: "Support graduates after campus",
        description:
          "This area explains how alumni remain connected to the university ecosystem after leaving active student status.",
      },
      {
        title: "Create mentoring loops",
        description:
          "Alumni can add value to students through experience-sharing, referrals and community connections.",
        tone: "success",
      },
      {
        title: "Keep records and network aligned",
        description:
          "Graduating students should resolve academic records and certificate needs while also preparing for alumni engagement.",
      },
    ],
    steps: [
      {
        title: "Close academic records cleanly",
        description:
          "Before transition, make sure certificates, memo support and identity-linked records are in order.",
      },
      {
        title: "Keep professional contact details ready",
        description:
          "Use updated contact information for future alumni communication and networking.",
      },
      {
        title: "Re-engage through events and mentoring",
        description:
          "Join alumni-facing outreach or offer support to new student cohorts where relevant.",
      },
    ],
    resources: [
      {
        title: "Graduation transition checklist",
        channel: "Student Services + Alumni",
        turnaround: "Before completion",
        requirements: "Academic records and contact details",
      },
      {
        title: "Placement-to-alumni continuity",
        channel: "Career and alumni coordination",
        turnaround: "Post-selection / post-graduation",
        requirements: "Professional profile readiness",
        href: "/student-services/placements",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "Best used by outgoing students and recent graduates.",
      responseTime: "Engagement timing depends on event, outreach and alumni programme schedules.",
      bestFor: ["Graduation transition", "Networking continuity", "Mentoring pathways"],
      notes: [
        "This page focuses on alumni workflow clarity; a fuller alumni programme expansion can follow in a later project phase.",
      ],
    },
  },
  {
    key: "services",
    title: "Administrative Student Services",
    shortTitle: "Services",
    badge: "Catalog",
    description:
      "A classified service map for students who need the right administrative path for records, certificates, corrections, welfare or digital support.",
    metrics: [
      {
        label: "Service families",
        value: "5",
        note: "Records, certificates, exam follow-up, welfare and digital access",
      },
      {
        label: "Goal",
        value: "Correct routing",
        note: "Reduce confusion between offices and counters",
      },
      {
        label: "Useful with",
        value: "Downloads",
        note: "Pair with forms for the cleanest next step",
      },
      {
        label: "Escalation model",
        value: "Layered",
        note: "Department → central office → special cell when relevant",
      },
    ],
    highlights: [
      {
        title: "Route by need, not by guesswork",
        description:
          "Students can classify whether a request is academic, administrative, digital or grievance-based.",
      },
      {
        title: "Prepare before you queue",
        description:
          "The catalog reduces avoidable delays by telling students what each service usually needs.",
        tone: "accent",
      },
      {
        title: "Keep support cells visible",
        description:
          "Welfare and grievance routes are placed beside academic services so they do not remain hidden.",
      },
    ],
    resources: [
      {
        title: "Academic records support",
        channel: "Department / Exam Section",
        turnaround: "Case-based",
        requirements: "Hall-ticket, memo or programme details",
      },
      {
        title: "Certificate requests",
        channel: "Downloads / Portal",
        turnaround: "Administrative processing",
        requirements: "Identity proof and purpose",
        href: "/student-services/downloads",
      },
      {
        title: "Portal-linked requests",
        channel: "Student Portal",
        turnaround: "Depends on the transaction type",
        requirements: "Authenticated access and record match",
        href: "/student-services/student-portal",
      },
      {
        title: "Special support and grievance cases",
        channel: "Dedicated support cell",
        turnaround: "Acknowledgement first",
        requirements: "Issue summary and support evidence",
        href: "/student-services/student-grievance-cell",
      },
    ],
    faq: [
      {
        question: "Should I start with the department or the university office?",
        answer:
          "If the issue is programme-specific or needs verification, start with the department. If it is a central exam or institutional record issue, use the relevant central channel.",
      },
      {
        question: "Where do support cells fit into student services?",
        answer:
          "Support cells handle welfare, safety, inclusion and grievance matters that are not just academic record workflows.",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "Ideal when a student knows the problem but not the right office.",
      responseTime:
        "Routing correctly at the start improves turnaround more than repeated follow-up does.",
      bestFor: [
        "Choosing the right office",
        "Understanding escalation paths",
        "Connecting forms to the right workflow",
      ],
      notes: ["This is the service classifier for the entire student-services section."],
    },
  },
  {
    key: "anti-ragging-cell",
    title: "Anti-Ragging Cell",
    shortTitle: "Anti-Ragging",
    badge: "Support Cell",
    description:
      "Safety-first support information for reporting, documenting and escalating ragging-related issues in a clearer and less intimidating way.",
    metrics: [
      {
        label: "Primary focus",
        value: "Campus safety",
        note: "Prevention, reporting and escalation support",
      },
      {
        label: "When to use",
        value: "Immediately",
        note: "Do not wait for informal resolution if student safety is affected",
      },
      {
        label: "Submission mode",
        value: "Confidential first",
        note: "Use safe reporting channels and supporting references",
      },
      {
        label: "Linked area",
        value: "Student Grievance",
        note: "Escalation can intersect depending on the case",
      },
    ],
    highlights: [
      {
        title: "Act early",
        description:
          "Students should reach the cell at the earliest sign of ragging, intimidation or repeated hostile conduct.",
        tone: "accent",
      },
      {
        title: "Keep the reporting path clear",
        description:
          "This page clarifies that safety concerns belong to a dedicated support workflow, not only informal peer resolution.",
      },
      {
        title: "Preserve confidentiality",
        description:
          "Students can prepare a factual summary and any evidence before speaking with the support channel.",
      },
    ],
    steps: [
      {
        title: "Ensure immediate safety",
        description:
          "Move to a safe environment and seek support from trusted faculty or administration if the situation is urgent.",
      },
      {
        title: "Record the incident clearly",
        description: "Note what happened, when it happened and who was involved or present.",
      },
      {
        title: "Use the support and escalation path",
        description:
          "Contact the designated cell or official university channel for guided next steps.",
      },
    ],
    faq: [
      {
        question: "Should students wait to see if the issue stops?",
        answer:
          "No. Early reporting is safer and gives the university a better chance to intervene appropriately.",
      },
      {
        question: "Can I report if I witnessed the incident?",
        answer:
          "Yes. Witness reporting can help protect affected students and improve factual review.",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "Use immediately when safety or dignity is affected.",
      responseTime: "Safety cases should be treated as urgent and not deferred.",
      bestFor: ["Ragging concerns", "Witness reporting", "Safety-focused escalation"],
      notes: [
        "If a situation involves immediate risk, on-campus escalation should happen without delay.",
      ],
    },
  },
  {
    key: "women-grievance-cell",
    title: "Women Grievance Cell",
    shortTitle: "Women Grievance",
    badge: "Support Cell",
    description:
      "A dedicated support page for women students seeking a clearer, safer route for grievance reporting and response.",
    metrics: [
      {
        label: "Focus",
        value: "Support + redressal",
        note: "For harassment, dignity and grievance-related concerns",
      },
      {
        label: "Recommended approach",
        value: "Confidential reporting",
        note: "Use official channels and supporting detail",
      },
      {
        label: "Useful outcome",
        value: "Safe escalation",
        note: "Students should not need to decode office ownership themselves",
      },
      {
        label: "Related area",
        value: "Student Grievance Cell",
        note: "Some issues may intersect administratively",
      },
    ],
    highlights: [
      {
        title: "Make the first step easier",
        description:
          "The page focuses on reducing uncertainty when a student needs to report a sensitive concern.",
      },
      {
        title: "Protect dignity and clarity",
        description:
          "Students are guided toward a factual report with the right context, rather than being left to navigate multiple offices.",
        tone: "accent",
      },
      {
        title: "Keep support visible",
        description:
          "Dedicated student support is treated as a core service, not a hidden secondary link.",
      },
    ],
    steps: [
      {
        title: "Document the concern",
        description:
          "Write down the issue, dates, involved parties and any available supporting references.",
      },
      {
        title: "Choose the official reporting channel",
        description:
          "Use the designated cell or institutional contact path listed by the university.",
      },
      {
        title: "Track acknowledgement and support",
        description: "Keep a record of the submission and any follow-up communication.",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "Use when a student needs a dedicated support channel for sensitive concerns.",
      responseTime: "Acknowledgement should be captured early so follow-up is trackable.",
      bestFor: [
        "Sensitive grievance routing",
        "Clarifying where to report",
        "Support-first escalation",
      ],
      notes: [
        "Students should preserve any relevant communication or documentation that supports the issue summary.",
      ],
    },
  },
  {
    key: "sc-st-cell",
    title: "SC/ST Cell",
    shortTitle: "SC/ST Cell",
    badge: "Inclusion",
    description:
      "Information and routing support for inclusion, student welfare and issue escalation related to SC/ST student support.",
    metrics: [
      {
        label: "Primary scope",
        value: "Inclusion support",
        note: "Welfare, representation and issue escalation",
      },
      {
        label: "Student benefit",
        value: "Clearer access",
        note: "Makes the support route visible and understandable",
      },
      {
        label: "Use case",
        value: "Support + grievance",
        note: "For concerns that need a dedicated institutional channel",
      },
      {
        label: "Related tabs",
        value: "Services / Grievance",
        note: "Administrative and support routes can intersect",
      },
    ],
    highlights: [
      {
        title: "Bring support channels into the main student flow",
        description:
          "Students should not have to search separately to find equity-related support.",
      },
      {
        title: "Clarify when to escalate",
        description:
          "The cell is presented as a formal support path for issues needing institutional review.",
        tone: "accent",
      },
      {
        title: "Support inclusive access",
        description:
          "This section keeps administrative guidance and inclusion guidance in one consistent experience.",
      },
    ],
    steps: [
      {
        title: "Identify the concern clearly",
        description:
          "Define whether the issue is about access, treatment, administrative support or grievance follow-up.",
      },
      {
        title: "Prepare relevant references",
        description:
          "Keep any documents, communication history or context that helps explain the issue.",
      },
      {
        title: "Use the dedicated support channel",
        description:
          "Contact the relevant institutional route so the concern is not lost inside a general request queue.",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability:
        "Use whenever a student needs dedicated support or escalation under this cell’s scope.",
      responseTime:
        "Concerns are easier to progress when the issue summary is structured from the start.",
      bestFor: ["Inclusion support", "Formal escalation", "Student welfare clarification"],
      notes: [
        "Students may still need linked academic or administrative documents depending on the issue type.",
      ],
    },
  },
  {
    key: "differently-abled-cell",
    title: "Differently Abled Cell",
    shortTitle: "Accessibility",
    badge: "Accessibility",
    description:
      "Accessibility-oriented guidance so students can identify support channels for accommodation, access and inclusive service needs.",
    metrics: [
      {
        label: "Core theme",
        value: "Access",
        note: "Learning, movement and service accessibility support",
      },
      {
        label: "Priority",
        value: "Early planning",
        note: "Support works best when requested before a high-pressure deadline",
      },
      {
        label: "Connected workflows",
        value: "Exams + services",
        note: "Accommodation needs may intersect with academic cycles",
      },
      {
        label: "Outcome",
        value: "Inclusive routing",
        note: "Students can identify the right help path sooner",
      },
    ],
    highlights: [
      {
        title: "Plan support early",
        description:
          "Where accommodations affect exams or administrative processes, earlier coordination gives better outcomes.",
        tone: "accent",
      },
      {
        title: "Keep accessibility in the main app",
        description:
          "Accessibility support is part of core student services, not a hidden secondary page.",
      },
      {
        title: "Reduce coordination ambiguity",
        description:
          "The page helps students see when to involve a dedicated support cell and when to connect a department or exam office.",
      },
    ],
    steps: [
      {
        title: "Identify the access need",
        description:
          "Clarify whether the support request affects classes, records, mobility, digital access or examinations.",
      },
      {
        title: "Document the requirement",
        description:
          "Prepare the request context and any supporting records the university needs for accommodation planning.",
      },
      {
        title: "Coordinate with the right office",
        description: "Use the support cell and any linked academic office before key deadlines.",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability:
        "Most effective when used ahead of deadlines, exam weeks or major academic milestones.",
      responseTime:
        "Accommodation planning usually improves when started early, not after an exam or submission window begins.",
      bestFor: [
        "Accessibility planning",
        "Accommodation clarification",
        "Support routing across offices",
      ],
      notes: ["When access needs affect exams, use this page together with the Exam Section tab."],
    },
  },
  {
    key: "student-grievance-cell",
    title: "Student Grievance Cell",
    shortTitle: "Grievances",
    badge: "Escalation",
    description:
      "A structured escalation page for student complaints or unresolved service issues that need formal acknowledgement and follow-up.",
    metrics: [
      {
        label: "Primary role",
        value: "Formal grievance intake",
        note: "For unresolved or sensitive student issues",
      },
      {
        label: "Best use",
        value: "After classification",
        note: "Know whether the issue is academic, administrative or welfare related",
      },
      {
        label: "Tracking mindset",
        value: "Documented",
        note: "Keep acknowledgement and follow-up records",
      },
      {
        label: "Shared with",
        value: "Support cells",
        note: "Some cases intersect with dedicated welfare channels",
      },
    ],
    highlights: [
      {
        title: "Turn confusion into a case record",
        description:
          "Students can move from an unresolved issue to a formal, trackable escalation path.",
      },
      {
        title: "Help when earlier routing fails",
        description:
          "If a department or office path does not resolve the issue, the grievance route provides a clearer next step.",
        tone: "accent",
      },
      {
        title: "Keep welfare visible inside administration",
        description: "The page connects process discipline with empathy and support.",
      },
    ],
    steps: [
      {
        title: "Summarize the issue factually",
        description:
          "Write the problem clearly, including what has already been tried and what remains unresolved.",
      },
      {
        title: "Attach supporting references",
        description:
          "Add acknowledgement records, communication history or documents relevant to the grievance.",
      },
      {
        title: "Retain follow-up records",
        description: "Keep the submission acknowledgement and later responses for continuity.",
      },
    ],
    faq: [
      {
        question: "Should I go straight to the grievance cell for every issue?",
        answer:
          "Not always. First classify the issue with the Services tab unless it is clearly serious, unresolved or sensitive enough to need formal escalation.",
      },
      {
        question: "What makes a grievance easier to resolve?",
        answer:
          "A clear timeline, specific request, supporting records and evidence of earlier follow-up help the review process.",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability:
        "Use when an issue needs formal acknowledgement, escalation or structured follow-up.",
      responseTime:
        "Clear documentation usually improves acknowledgement quality and review speed.",
      bestFor: ["Unresolved student issues", "Formal escalation", "Trackable complaint submission"],
      notes: [
        "Sensitive matters may also belong to a dedicated support cell depending on the issue type.",
      ],
    },
  },
  {
    key: "student-portal",
    title: "Student Portal Services",
    shortTitle: "Student Portal",
    badge: "Digital",
    description:
      "Portal-linked service access explained as a real student workflow: records, request tracking, alerts and digital hygiene.",
    metrics: [
      { label: "Core functions", value: "3", note: "Records, tracking and alerts" },
      {
        label: "Digital dependency",
        value: "High",
        note: "Students should maintain correct credentials and verified data",
      },
      {
        label: "Best use",
        value: "Self-service first",
        note: "Check the portal before visiting a counter for routine status queries",
      },
      { label: "Linked tabs", value: "4", note: "Exams, downloads, services and results" },
    ],
    highlights: [
      {
        title: "Use the portal as a status layer",
        description:
          "Students should first check what is already available digitally before making a physical visit.",
      },
      {
        title: "Protect credential hygiene",
        description:
          "Portal access only works as a reliable service channel when profile data and credentials stay accurate.",
        tone: "accent",
      },
      {
        title: "Support tracking, not guesswork",
        description:
          "This tab positions the portal as a record-check and request-follow-up tool rather than a vague generic link.",
      },
    ],
    steps: [
      {
        title: "Sign in through the official route",
        description: "Use only authenticated university access points and keep credentials secure.",
      },
      {
        title: "Verify profile and records",
        description:
          "Check whether your personal data, result references and service-linked records match university records.",
      },
      {
        title: "Track service progress",
        description:
          "Use portal visibility for alerts, request status or digital memo availability where supported.",
      },
    ],
    faq: [
      {
        question: "What should I do if the portal data does not match my records?",
        answer:
          "Use the linked academic or administrative service tab that matches the issue, then escalate with your identifying details and supporting records.",
      },
      {
        question: "Can the portal replace every office visit?",
        answer:
          "No. It is strongest for access, visibility and status tracking, but many formal workflows still need departmental or institutional verification.",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "Use for regular self-checks during exam, result and certificate cycles.",
      responseTime:
        "Digital issues should be raised with exact error context and identifying details.",
      bestFor: ["Record verification", "Status checks", "Digital service access"],
      notes: [
        "Do not share portal credentials. Use only official university channels for authentication and support.",
      ],
    },
  },
];

export function resolveStudentServiceTabKey(page?: string): StudentServiceTabKey {
  const normalized = (page ?? "overview").trim().toLowerCase();
  return studentServicePageAliases[normalized] ?? (normalized as StudentServiceTabKey);
}

export function getStudentServiceTab(page?: string) {
  const key = resolveStudentServiceTabKey(page);
  return studentServiceTabs.find((tab) => tab.key === key) ?? studentServiceTabs[0];
}
