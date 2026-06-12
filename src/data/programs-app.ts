export type ProgramsTabKey =
  | "overview"
  | "ug-programs"
  | "integrated-programs"
  | "diploma-courses"
  | "pg-programs"
  | "pg-diploma"
  | "distance-education-anucde"
  | "phd-programs"
  | "m-phil-programs"
  | "post-doctoral-fellowships";

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

export type ProgramsTab = {
  key: ProgramsTabKey;
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
  { label: "Academic Section", value: "+91 863 234 6127", href: "tel:+918632346127" },
  {
    label: "Admissions Directorate",
    value: "diradmission@anu.ac.in",
    href: "mailto:diradmission@anu.ac.in",
  },
];

export const programsPageAliases: Record<string, ProgramsTabKey> = {
  "undergraduate-programs": "ug-programs",
  "postgraduate-programs": "pg-programs",
  "doctoral-programs": "phd-programs",
  "distance-learning": "distance-education-anucde",
  fellowships: "post-doctoral-fellowships",
};

export const programsTabs: ProgramsTab[] = [
  {
    key: "overview",
    title: "Programs Offered",
    shortTitle: "Overview",
    badge: "Diverse Courses",
    description:
      "Acharya Nagarjuna University offers over 150 undergraduate, postgraduate, diploma, and doctoral programs across constituent colleges, departments, and distance mode (ANUCDE).",
    metrics: [
      { label: "Total Programs", value: "150+", note: "Across multiple disciplines" },
      { label: "Colleges", value: "6", note: "Arts, Science, Engg, Pharmacy, Arch, P.E." },
      {
        label: "Distance Learning",
        value: "ANUCDE",
        note: "Centralized distance education support",
      },
      { label: "Research Tracks", value: "30+", note: "PhD specialization areas" },
    ],
    highlights: [
      {
        title: "Comprehensive Course Catalogue",
        description:
          "Choose from standard UG/PG courses, integrated programs, vocational diplomas, or professional doctorates.",
        tone: "accent",
      },
      {
        title: "Approved Curriculum",
        description:
          "All courses are approved by UGC, AICTE, PCI, and standard regulatory Councils to ensure degree validity.",
      },
      {
        title: "Central Distance Mode",
        description:
          "ANUCDE offers flexible study modules, digital study materials, and regional examination centres.",
        tone: "success",
      },
    ],
    steps: [
      {
        title: "Discover Study Track",
        description:
          "Explore the different study levels: UG, PG, Integrated, Diplomas, or Doctoral programs.",
      },
      {
        title: "Check Course Regulations",
        description:
          "Review specific eligibility requirements, semesters, fees, and credits before applying.",
      },
      {
        title: "Complete Admission Process",
        description:
          "Submit forms through the Admissions Cell or through entrance exams (APRCET, APPGCET).",
      },
    ],
    resources: [
      {
        title: "ANU Admission Prospectus",
        channel: "Admissions Office",
        turnaround: "Instant download",
        requirements: "None",
      },
      {
        title: "Academic Regulations Booklet",
        channel: "Academic Section",
        turnaround: "Instant download",
        requirements: "None",
      },
    ],
    faq: [
      {
        question: "How do I check course fees?",
        answer:
          "Detailed fee structures for each course category are listed under the Admissions fee structure page or in the prospectus.",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability:
        "Academic section officers are available Monday through Saturday from 10:00 AM to 5:00 PM.",
      responseTime: "Academic query responses take 3 business days.",
      bestFor: [
        "Course details and criteria",
        "Syllabus structures checking",
        "Degree equivalence requests",
      ],
      notes: ["Curriculum is updated periodically under Board of Studies (BOS) resolutions."],
    },
  },
  {
    key: "ug-programs",
    title: "Undergraduate Programs",
    shortTitle: "UG Programs",
    badge: "Bachelor Degree",
    description:
      "Explore undergraduate programs in Science, Arts, Engineering, Architecture, Pharmacy, and Physical Education offered across constituent units.",
    metrics: [
      { label: "B.Tech Streams", value: "6+", note: "CSE, ECE, EEE, Civil, Mechanical, Biotech" },
      { label: "Duration", value: "3-4 Years", note: "In semesters" },
      { label: "B.Arch Track", value: "5 Years", note: "Approved by Council of Architecture" },
      { label: "Pharmacy (B.Pharm)", value: "4 Years", note: "Approved by PCI" },
    ],
    highlights: [
      {
        title: "Professional Graduation",
        description:
          "Structured B.Tech, B.Arch, and B.Pharm courses designed for industrial readiness and licensing examinations.",
        tone: "accent",
      },
    ],
    steps: [
      {
        title: "Check Entrance Criteria",
        description:
          "Most UG courses require ranking in AP EAPCET, NATA, or equivalent national tests.",
      },
    ],
    resources: [
      {
        title: "UG Courses List & Intake Seats",
        channel: "Academic Section",
        turnaround: "Immediate",
        requirements: "None",
      },
    ],
    faq: [
      {
        question: "Is there a lateral entry for B.Tech?",
        answer:
          "Yes. Lateral entry admissions into 2nd year B.Tech are open to diploma holders through ECET rankings.",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "UG admissions counseling operates inside the main admissions cell block.",
      responseTime: "All admissions updates are posted on the university website.",
      bestFor: ["UG program inquiries", "Lateral entry questions"],
      notes: ["Maintain all intermediate or diploma certificates ready for verification."],
    },
  },
  {
    key: "integrated-programs",
    title: "Integrated Programs",
    shortTitle: "Integrated",
    badge: "5-Year Course",
    description:
      "Centralized 5-year integrated postgraduate programs offering seamless transition from intermediate to master's level in Sciences and Humanities.",
    metrics: [
      { label: "Duration", value: "5 Years", note: "Continuous semester structure" },
      { label: "Exit Options", value: "Yes", note: "As per National Education Policy guidelines" },
      {
        label: "Specialty",
        value: "Science/Arts",
        note: "Chemistry, Biotechnology, and English tracks",
      },
      { label: "Linked Degrees", value: "B.Sc + M.Sc", note: "Awarded together upon completion" },
    ],
    highlights: [
      {
        title: "Seamless Masters Pathway",
        description:
          "Save transition time and secure PG enrollment immediately after intermediate (+2) cycles.",
        tone: "success",
      },
    ],
    steps: [
      {
        title: "Review NEP Exit Rules",
        description:
          "Check intermediate exits, credit transfers, and bachelor degree certificates provisions.",
      },
    ],
    resources: [
      {
        title: "Integrated Courses Structure Sheet",
        channel: "Academic Section",
        turnaround: "Immediate",
        requirements: "None",
      },
    ],
    faq: [
      {
        question: "Is there an exit option after 3 years?",
        answer:
          "Yes. Under modern NEP regulations, exit provisions with a bachelor's degree are available for registered students.",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "Regular updates are managed by the constituent science college office.",
      responseTime: "Registration queries take 3 business days.",
      bestFor: ["Integrated course details", "NEP exit rules information"],
      notes: ["Admission depends on intermediate (+2) aggregate marks or entrance tests."],
    },
  },
  {
    key: "diploma-courses",
    title: "Diploma & Vocational Courses",
    shortTitle: "Diplomas",
    badge: "Vocational",
    description:
      "Short-term diploma and PG diploma courses designed for skill enhancement, professional certification, and immediate job readiness.",
    metrics: [
      { label: "Duration", value: "1 Year", note: "Two semesters" },
      { label: "Type", value: "Skill / PG Dip", note: "For intermediate and graduate entry" },
      { label: "Core Areas", value: "Yoga, Biotech", note: "Focusing on vocational applications" },
      { label: "Evening Batches", value: "Yes", note: "Flexible slots for working professionals" },
    ],
    highlights: [
      {
        title: "Industry Skill Sets",
        description:
          "Practical training modules focusing on laboratory skills, yoga therapy, languages, and IT tools.",
        tone: "accent",
      },
    ],
    steps: [
      {
        title: "Check Evening Classes",
        description:
          "Verify if your selected diploma offers flexible timing slots for working professionals.",
      },
    ],
    resources: [
      {
        title: "Vocational Diplomas Syllabus Index",
        channel: "Academic Section",
        turnaround: "Immediate",
        requirements: "None",
      },
    ],
    faq: [
      {
        question: "Can I join a PG Diploma while doing PG?",
        answer:
          "Yes, dual registration rules under UGC guidelines allow joining select diploma courses simultaneously.",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "Managed by the respective department or central counseling cell.",
      responseTime: "Enrollment updates are processed in 3 working days.",
      bestFor: ["Diploma course choices", "Evening batch coordinates"],
      notes: ["Examinations are conducted at the end of the 1-year study period."],
    },
  },
  {
    key: "pg-programs",
    title: "Postgraduate Programs",
    shortTitle: "PG Programs",
    badge: "Masters Degree",
    description:
      "Postgraduate master's degrees (M.Sc, M.A, M.Com, MBA, MCA, M.Pharm, M.Tech) delivering specialization and advanced research entry.",
    metrics: [
      { label: "M.Sc Streams", value: "15+", note: "Physics, chemistry, math, biotech, etc." },
      { label: "Duration", value: "2 Years", note: "4 semesters" },
      { label: "MBA/MCA Track", value: "Approved", note: "By AICTE" },
      { label: "Graduation rate", value: "High", note: "Excellent placement track record" },
    ],
    highlights: [
      {
        title: "Advanced Specializations",
        description:
          "Rigorous academic curriculums designed to support research entry, CSIR-NET preparation, and industry placements.",
        tone: "accent",
      },
    ],
    steps: [
      {
        title: "Qualify APPGCET / ICET",
        description: "Admissions to PG courses require valid state-level entrance rankings.",
      },
    ],
    resources: [
      {
        title: "PG Course Catalogue & Seat Matrix",
        channel: "Academic Section",
        turnaround: "Immediate",
        requirements: "None",
      },
    ],
    faq: [
      {
        question: "When does PG counseling commence?",
        answer:
          "Counseling dates are announced by the state council (APSCHE) and follow APPGCET/ICET result releases.",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "The college principal offices handle PG counseling registers.",
      responseTime: "Seat confirmation verification takes 2 business days.",
      bestFor: ["PG course details", "AP ICET/PGCET counseling"],
      notes: ["Keep your original degree marks memos ready for verification."],
    },
  },
  {
    key: "pg-diploma",
    title: "Postgraduate Diploma",
    shortTitle: "PG Diploma",
    badge: "Specialized",
    description:
      "Post-graduate diploma programs structured for specialized academic certification after bachelor graduation.",
    metrics: [
      { label: "Duration", value: "1 Year", note: "2 semesters" },
      { label: "Entry", value: "Graduate", note: "Requires Bachelor Degree completion" },
      { label: "Subjects", value: "HR, IT, Yoga", note: "Specialized streams" },
      { label: "Credits", value: "Standard", note: "Approved under academic regulations" },
    ],
    highlights: [
      {
        title: "Fast-Track Specialization",
        description:
          "Obtain specialized professional credentials in accounting, management, or IT systems within a year.",
        tone: "success",
      },
    ],
    steps: [
      {
        title: "Verify Graduation Status",
        description: "Confirm you have cleared your undergraduate bachelor degree before applying.",
      },
    ],
    resources: [
      {
        title: "PG Diploma Regulations Proforma",
        channel: "Academic Section",
        turnaround: "Immediate",
        requirements: "None",
      },
    ],
    faq: [
      {
        question: "Is PG Diploma equivalent to a Masters degree?",
        answer:
          "No. It is a 1-year specialized diploma certificate, not a full 2-year master's degree, but holds high value in employment sectors.",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "Coordinated at the administrative block registration windows.",
      responseTime: "Application reviews take 3 working days.",
      bestFor: ["PG Diploma requirements", "Fee payments verification"],
      notes: ["Incomplete bachelor dossiers will lead to rejection of PG Diploma registration."],
    },
  },
  {
    key: "distance-education-anucde",
    title: "Centre for Distance Education (ANUCDE)",
    shortTitle: "CDE",
    badge: "Distance Mode",
    description:
      "UGC-DEB approved distance education programs offering UG, PG, and PG Diploma opportunities with flexible study schedules and online support.",
    metrics: [
      { label: "Approval", value: "UGC-DEB", note: "Approved distance education bureau" },
      { label: "Study Centres", value: "Statewide", note: "Widespread examination networks" },
      { label: "Courses", value: "Multiple", note: "B.A, B.Com, M.A, M.Com, MBA, MCA" },
      { label: "E-Resources", value: "Portal", note: "Digital study material access" },
    ],
    highlights: [
      {
        title: "Flexible Learner Support",
        description:
          "Study at your own pace with digital content, weekend contact classes, and local examination coordination.",
        tone: "success",
      },
    ],
    steps: [
      {
        title: "Register on CDE Portal",
        description:
          "Complete online distance admission registration and select your preferred study center.",
      },
    ],
    resources: [
      {
        title: "CDE Admission Notification Booklet",
        channel: "ANUCDE Office",
        turnaround: "Immediate",
        requirements: "None",
      },
    ],
    faq: [
      {
        question: "Are ANUCDE degrees recognized for govt jobs?",
        answer:
          "Yes. All degrees awarded by ANUCDE are approved by UGC-DEB and are equivalent to regular degrees for employment and higher studies.",
      },
    ],
    contacts: [
      {
        label: "Director of ANUCDE",
        value: "anucdedirector@gmail.com",
        href: "mailto:anucdedirector@gmail.com",
      },
      { label: "CDE Helpdesk", value: "+91 863 234 6250", href: "tel:+918632346250" },
      ...sharedContacts,
    ],
    supportPanel: {
      availability: "CDE administrative desks operate from 10:00 AM to 5:00 PM.",
      responseTime: "Study materials are dispatched within 15 days of admission clearance.",
      bestFor: [
        "Distance degree admissions",
        "E-learning syllabus lookup",
        "Exam center allocation",
      ],
      notes: ["Keep your CDE enrollment identity card safe for all examination halls entry."],
    },
  },
  {
    key: "phd-programs",
    title: "Ph.D. Programs",
    shortTitle: "Ph.D.",
    badge: "Research Degree",
    description:
      "Doctoral research programs (Ph.D.) offered across science, arts, engineering, pharmacy, and commerce streams under verified research guides.",
    metrics: [
      { label: "Admissions", value: "APRCET", note: "State-level research entrance exam" },
      { label: "Coursework", value: "1 Semester", note: "Followed by examinations" },
      { label: "Duration", value: "3-6 Years", note: "As per UGC regulations" },
      { label: "Scholarships", value: "CSIR/UGC", note: "For JRF qualified scholars" },
    ],
    highlights: [
      {
        title: "Research and Scholarship",
        description:
          "Focus on original research contribution, mandatory publications, and thesis defense overseen by senior external examiners.",
        tone: "accent",
      },
    ],
    steps: [
      {
        title: "Check Guide Vacancy",
        description:
          "Review current Ph.D. seat matrices and guide vacancies published by the research cell.",
      },
    ],
    resources: [
      {
        title: "APRCET Counseling Seat Matrix",
        channel: "Research Cell",
        turnaround: "Immediate",
        requirements: "None",
      },
    ],
    faq: [
      {
        question: "Is a coursework exam mandatory?",
        answer:
          "Yes. Every registered research scholar must clear the Ph.D. coursework examinations to qualify for thesis registration.",
      },
    ],
    contacts: [
      {
        label: "Director of Research Cell",
        value: "research@anu.ac.in",
        href: "mailto:research@anu.ac.in",
      },
      ...sharedContacts,
    ],
    supportPanel: {
      availability: "Research section desk operates inside the administration block.",
      responseTime: "Synopsis approvals take 15 working days.",
      bestFor: ["Guide vacancy checks", "APRCET seat details"],
      notes: ["All doctoral guidelines strictly follow UGC 2016 regulations and amendments."],
    },
  },
  {
    key: "m-phil-programs",
    title: "M.Phil. Programs Archive",
    shortTitle: "M.Phil.",
    badge: "Archived",
    description:
      "Reference page for historical M.Phil. guidelines, course structures, and evaluation records (admissions discontinued per UGC norms).",
    metrics: [
      { label: "Status", value: "Discontinued", note: "In compliance with UGC norms" },
      { label: "Duration", value: "1.5 Years", note: "Prior course timeline" },
      { label: "Records", value: "Archived", note: "For students registered in previous cycles" },
      { label: "Evaluation", value: "Closed", note: "Except for ongoing pending clearances" },
    ],
    highlights: [
      {
        title: "Historical Records",
        description:
          "Academic guidelines and transcript references for scholars who completed their M.Phil. in prior cycles.",
        tone: "default",
      },
    ],
    steps: [
      {
        title: "Request M.Phil Certificate",
        description:
          "Alumni from prior batches can request duplicate memos and degrees through the exam downloads counter.",
      },
    ],
    resources: [
      {
        title: "Legacy M.Phil Regulations File",
        channel: "Research Cell Archive",
        turnaround: "Immediate",
        requirements: "None",
      },
    ],
    faq: [
      {
        question: "Can I still apply for M.Phil?",
        answer:
          "No. M.Phil admissions have been permanently discontinued in accordance with the National Education Policy and UGC directives.",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "Historical registries are managed by the examination section archives.",
      responseTime: "Legacy transcript checks take 5 business days.",
      bestFor: ["Duplicate M.Phil certificates", "Syllabus reference copies"],
      notes: ["Scholars wishing to pursue research must now apply directly to Ph.D. programs."],
    },
  },
  {
    key: "post-doctoral-fellowships",
    title: "Post-Doctoral Fellowships (PDF)",
    shortTitle: "Fellowships",
    badge: "Post-Doc",
    description:
      "Post-doctoral engagement (PDF) opportunities, CSIR/UGC fellowship routing, and temporary research scientist placements.",
    metrics: [
      { label: "Fellowship Type", value: "PDF / DST", note: "National level fellowships" },
      { label: "Contingency", value: "Yes", note: "In accordance with funding agency norms" },
      { label: "Facilities", value: "Full Access", note: "Advanced campus instrumentation labs" },
      {
        label: "Mentor Link",
        value: "Mandatory",
        note: "Must coordinate with senior university guide",
      },
    ],
    highlights: [
      {
        title: "Independent Research",
        description:
          "Engage in advanced research tracks, publish high impact factor papers, and mentor Ph.D. scholars under a senior guide.",
        tone: "accent",
      },
    ],
    steps: [
      {
        title: "Obtain Mentor Consent",
        description:
          "Request a formal research guide consent letter before applying to the central funding agency.",
      },
    ],
    resources: [
      {
        title: "PDF Joining Report Format",
        channel: "Research Cell",
        turnaround: "Immediate",
        requirements: "None",
      },
    ],
    faq: [
      {
        question: "How is the contingency grant managed?",
        answer:
          "Contingency grants are processed through university finance counters in accordance with CSIR/UGC guidelines.",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "Fellowship logs are updated and managed under the central R&D coordinator.",
      responseTime: "Joining paperwork takes 3 business days.",
      bestFor: ["PDF joining reports", "Contingency bills clearance"],
      notes: ["All fellowship renewals require annual progress reports verified by the mentor."],
    },
  },
];

export function getProgramsTab(pageId?: string): ProgramsTab {
  const resolved = pageId ? programsPageAliases[pageId] || pageId : "overview";
  const found = programsTabs.find((t) => t.key === resolved);
  return found || programsTabs[0];
}
