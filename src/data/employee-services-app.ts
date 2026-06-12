export type EmployeeServiceTabKey =
  | "overview"
  | "hr-payroll"
  | "leave-management"
  | "health-welfare"
  | "service-records"
  | "professional-development"
  | "employee-portal"
  | "staff-grievance-cell"
  | "downloads"
  | "retirees-pensioners";

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

export type EmployeeServiceTab = {
  key: EmployeeServiceTabKey;
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
  { label: "HR Helpdesk", value: "+91 863 234 6115", href: "tel:+918632346115" },
  { label: "Establishment Section", value: "estt@anu.ac.in", href: "mailto:estt@anu.ac.in" },
  { label: "Registrar Office", value: "registrar@anu.ac.in", href: "mailto:registrar@anu.ac.in" },
];

export const employeeServicePageAliases: Record<string, EmployeeServiceTabKey> = {
  "payroll-salary": "hr-payroll",
  "forms-downloads": "downloads",
  pension: "retirees-pensioners",
  careers: "professional-development",
  webmail: "employee-portal",
};

export const employeeServiceTabs: EmployeeServiceTab[] = [
  {
    key: "overview",
    title: "Employee Services Hub",
    shortTitle: "Overview",
    badge: "Primary",
    description:
      "A centralized service hub for teaching and non-teaching staff, covering payroll, leaves, service records, and professional development.",
    metrics: [
      {
        label: "Core service clusters",
        value: "6",
        note: "Payroll, HR, Records, Portal, Welfare, and Pensions",
      },
      {
        label: "Support channels",
        value: "3",
        note: "Phone, email and establishment office guidance",
      },
      {
        label: "Employee tabs",
        value: "10",
        note: "Structured for faster administrative task discovery",
      },
      {
        label: "Location",
        value: "Admin Block",
        note: "Acharya Nagarjuna University, Guntur",
      },
    ],
    highlights: [
      {
        title: "Streamlined administrative workflows",
        description:
          "Each tab groups services based on employee intent, such as applying for leave, checking payroll, or escalating an issue.",
        tone: "accent",
      },
      {
        title: "Clear ownership",
        description:
          "Every service specifies whether the action belongs to the digital portal, establishment section, or finance department.",
      },
      {
        title: "Reduced processing delays",
        description:
          "Requirements and typical turnaround windows are shown upfront to ensure submissions are complete.",
        tone: "success",
      },
    ],
    steps: [
      {
        title: "Select the service area",
        description:
          "Start with HR & Payroll, Leave Management, Service Records, or navigate directly to the Digital Portal.",
      },
      {
        title: "Check submission requirements",
        description:
          "Verify needed documents, approval routing, and deadlines before initiating a formal request.",
      },
      {
        title: "Use the recommended channel",
        description:
          "Contact the mapped extension or email provided for the specific service when clarification is needed.",
      },
    ],
    resources: [
      {
        title: "Payroll and Tax Declarations",
        channel: "HR & Payroll",
        turnaround: "Monthly cycle",
        requirements: "Employee ID and portal authentication",
        href: "/employee-services/hr-payroll",
      },
      {
        title: "Leave Applications",
        channel: "Leave Management",
        turnaround: "Based on leave type",
        requirements: "Managerial approval and leave balance",
        href: "/employee-services/leave-management",
      },
      {
        title: "Service Register Updates",
        channel: "Service Records",
        turnaround: "Administrative cycle",
        requirements: "Supporting documentation and establishment verification",
        href: "/employee-services/service-records",
      },
      {
        title: "Forms and Requisitions",
        channel: "Downloads",
        turnaround: "Varies by form",
        requirements: "Printed, signed and routed through HOD",
        href: "/employee-services/downloads",
      },
    ],
    faq: [
      {
        question: "Where do I find my salary slips and tax forms?",
        answer:
          "Salary slips and tax declarations are managed under the HR & Payroll tab, which links directly to the Employee Portal.",
      },
      {
        question: "How should I report a discrepancy in my service register?",
        answer:
          "Visit the Service Records tab for the correct procedure and contact the Establishment Section with supporting documents.",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability:
        "Use this hub to quickly find the correct department for any administrative request.",
      responseTime:
        "Processing windows vary significantly based on the service type and university calendar.",
      bestFor: [
        "First-time onboarding navigation",
        "Finding the correct administrative office",
        "Understanding workflows for leaves and records",
      ],
      notes: [
        "This module provides guidance. Final approvals depend on official rules and committee decisions.",
        "Always maintain copies of physical submissions submitted to the Establishment Section.",
      ],
    },
  },
  {
    key: "hr-payroll",
    title: "HR & Payroll Services",
    shortTitle: "HR & Payroll",
    badge: "Finance",
    description:
      "Access salary slips, tax declarations, provident fund details, and general human resources documentation.",
    metrics: [
      {
        label: "Key functions",
        value: "4",
        note: "Salary, Tax, PF, and Allowances",
      },
      {
        label: "Primary owner",
        value: "Finance & Accounts",
        note: "Coordinate with the Finance section",
      },
      {
        label: "Critical deadline",
        value: "January-February",
        note: "Annual IT declaration submission window",
      },
      { label: "Digital Access", value: "High", note: "Most payroll tasks are portal-driven" },
    ],
    highlights: [
      {
        title: "Digital Salary Slips",
        description:
          "Monthly payslips are generated digitally and can be downloaded directly from the Employee Portal.",
      },
      {
        title: "Timely Tax Declarations",
        description:
          "Ensure investment proofs are submitted within the notified window to avoid default tax deductions.",
        tone: "accent",
      },
      {
        title: "Provident Fund Updates",
        description:
          "PF statements and loan request procedures are managed through the central finance desk.",
      },
    ],
    steps: [
      {
        title: "Log into the portal",
        description:
          "Use your employee credentials to access the secure HR & Payroll section of the university portal.",
      },
      {
        title: "Review monthly statements",
        description:
          "Regularly check your salary slip for accurate reflection of increments, deductions, and tax withholdings.",
      },
      {
        title: "Submit physical proofs if required",
        description:
          "For certain claims or tax declarations, route physical copies through your department head to Finance.",
      },
    ],
    resources: [
      {
        title: "Income Tax Declaration Form",
        channel: "Downloads / Portal",
        turnaround: "Processed in current financial year",
        requirements: "Investment proofs and PAN details",
        href: "/employee-services/downloads",
      },
      {
        title: "PF Loan Application",
        channel: "Finance Section",
        turnaround: "15-30 days",
        requirements: "Application form, specific reason, and HOD forwarding",
        href: "/employee-services/downloads",
      },
    ],
    faq: [
      {
        question: "When are salary slips usually available?",
        answer:
          "Salary slips are typically generated and available on the portal within the first week of the following month.",
      },
      {
        question: "Who do I contact for a mismatch in my tax deduction?",
        answer:
          "Reach out to the Payroll/Finance section immediately with your latest slip and submitted investment proofs.",
      },
    ],
    contacts: [
      { label: "Finance Officer", value: "finance@anu.ac.in", href: "mailto:finance@anu.ac.in" },
      { label: "Payroll Desk", value: "+91 863 234 6120", href: "tel:+918632346120" },
      ...sharedContacts,
    ],
    supportPanel: {
      availability:
        "Highly active during the end of the financial year and first week of the month.",
      responseTime:
        "Routine slip generation is automatic. Discrepancy resolution takes 3-5 working days.",
      bestFor: ["Salary slip downloads", "Tax declaration planning", "Understanding deductions"],
      notes: [
        "Keep your portal credentials secure.",
        "Always cross-check your bank statements with your official payslip.",
      ],
    },
  },
  {
    key: "leave-management",
    title: "Leave Management",
    shortTitle: "Leaves",
    badge: "Active",
    description:
      "Guidelines and routing for Casual Leave (CL), Earned Leave (EL), Medical Leave, and Special Casual Leave applications.",
    metrics: [
      {
        label: "Leave Types",
        value: "Multiple",
        note: "CL, EL, HPL, ML, SCL, and Maternity/Paternity",
      },
      {
        label: "Primary Owner",
        value: "HOD / Estt.",
        note: "Approval flows through the reporting structure",
      },
      {
        label: "Planning",
        value: "Prior Approval",
        note: "Mandatory for most non-emergency leaves",
      },
      {
        label: "Balance Check",
        value: "Portal",
        note: "View accumulated leaves digitally",
      },
    ],
    highlights: [
      {
        title: "Apply through proper channels",
        description:
          "All leaves must be routed through the Head of Department before reaching the Establishment Section.",
        tone: "accent",
      },
      {
        title: "Track leave balances",
        description:
          "Keep track of your CL and EL balances to ensure applications are not rejected due to insufficient quota.",
      },
      {
        title: "Special Leave considerations",
        description:
          "Medical and Special Casual Leaves require additional documentation, such as medical certificates or event invitations.",
      },
    ],
    steps: [
      {
        title: "Check availability",
        description:
          "Review your current leave balance on the portal or with the department clerk.",
      },
      {
        title: "Submit application",
        description:
          "Fill out the standard leave form or apply via the portal, ensuring dates and alternative arrangements are clear.",
      },
      {
        title: "Obtain endorsement",
        description:
          "Ensure your HOD endorses the application before you proceed on leave, except in sudden emergencies.",
      },
    ],
    resources: [
      {
        title: "Standard Leave Application Form",
        channel: "Downloads",
        turnaround: "Pre-departure",
        requirements: "Dates, type of leave, and HOD signature",
        href: "/employee-services/downloads",
      },
      {
        title: "Medical Certificate Submission",
        channel: "Establishment",
        turnaround: "Upon return",
        requirements: "Registered practitioner certificate for ML",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "Applicable year-round for all teaching and non-teaching staff.",
      responseTime:
        "CLs are typically approved quickly by HODs; ELs and Medical Leaves may require Establishment processing.",
      bestFor: [
        "Applying for time off",
        "Understanding leave rules",
        "Checking required documentation",
      ],
      notes: [
        "Unauthorized absence without prior intimation is treated as a break in service.",
        "Retain copies of long-leave approvals for your personal records.",
      ],
    },
  },
  {
    key: "health-welfare",
    title: "Health & Welfare",
    shortTitle: "Health & Welfare",
    badge: "Support",
    description:
      "Information on employee health insurance schemes, medical reimbursements, and campus wellness facilities.",
    metrics: [
      {
        label: "Focus",
        value: "Employee Wellbeing",
        note: "Medical claims and health coverage",
      },
      {
        label: "Campus Facility",
        value: "Health Centre",
        note: "Primary care available on campus",
      },
      {
        label: "Claim type",
        value: "Reimbursement",
        note: "Follows university medical reimbursement rules",
      },
      {
        label: "Coverage",
        value: "Staff & Dependents",
        note: "As per declared dependent records",
      },
    ],
    highlights: [
      {
        title: "Campus Health Centre",
        description:
          "Utilize the university health centre for primary consultations and minor emergencies during working hours.",
      },
      {
        title: "Medical Reimbursements",
        description:
          "Claims for inpatient treatment at recognized hospitals can be submitted with original bills and discharge summaries.",
        tone: "accent",
      },
      {
        title: "Dependent Declarations",
        description:
          "Ensure your family details are up-to-date in your service record to avoid delays in processing dependent claims.",
      },
    ],
    steps: [
      {
        title: "Seek treatment",
        description:
          "Prefer recognized or empanelled hospitals for smoother reimbursement processing.",
      },
      {
        title: "Gather documentation",
        description:
          "Collect all original bills, prescriptions, diagnostic reports, and the discharge summary.",
      },
      {
        title: "Submit claim form",
        description:
          "Fill out the medical reimbursement form and submit it through your department to the relevant administrative desk.",
      },
    ],
    resources: [
      {
        title: "Medical Reimbursement Form",
        channel: "Downloads",
        turnaround: "30-60 days",
        requirements: "Original bills, discharge summary, dependent proof",
        href: "/employee-services/downloads",
      },
    ],
    contacts: [{ label: "Campus Health Centre", value: "Ext: 250", href: "#" }, ...sharedContacts],
    supportPanel: {
      availability:
        "Health centre is available during campus hours; claims can be submitted year-round.",
      responseTime:
        "Medical reimbursements require thorough verification and committee approval, taking several weeks.",
      bestFor: ["Medical emergencies", "Reimbursement claims", "Updating dependent records"],
      notes: [
        "Keep photocopies of all medical bills submitted for reimbursement.",
        "Always notify the administration early in case of prolonged hospitalization.",
      ],
    },
  },
  {
    key: "service-records",
    title: "Service Records & Career Progression",
    shortTitle: "Service Records",
    badge: "Official",
    description:
      "Management of Service Registers (SR), promotion workflows, annual increments, and probation declarations.",
    metrics: [
      {
        label: "Core Document",
        value: "Service Register",
        note: "The official timeline of an employee's career",
      },
      {
        label: "Key Events",
        value: "Increments & CAS",
        note: "Annual and career advancement milestones",
      },
      {
        label: "Owner",
        value: "Establishment",
        note: "Custodians of the physical and digital records",
      },
      {
        label: "Verification",
        value: "Annual",
        note: "Employees should periodically verify their SR entries",
      },
    ],
    highlights: [
      {
        title: "Career Advancement Scheme (CAS)",
        description:
          "Faculty promotions are governed by UGC/AICTE CAS guidelines requiring structured API scoring and documentation.",
        tone: "accent",
      },
      {
        title: "Annual Increments",
        description:
          "Increments are processed annually based on the date of joining and satisfactory service verification.",
      },
      {
        title: "Service Register Accuracy",
        description:
          "Any change in qualification, marital status, or dependent details must be formally entered into the SR.",
      },
    ],
    steps: [
      {
        title: "Maintain personal copies",
        description:
          "Keep copies of all your joining reports, promotion letters, and acquired degree certificates.",
      },
      {
        title: "Prepare for CAS/Promotions",
        description:
          "Compile your academic, research, and administrative contributions well before the application window opens.",
      },
      {
        title: "Verify entries",
        description:
          "Request a periodic review of your Service Register to ensure recent increments and qualifications are logged.",
      },
    ],
    resources: [
      {
        title: "CAS Application Proforma",
        channel: "Downloads",
        turnaround: "Committee cycle",
        requirements: "API scores, publications, and service details",
        href: "/employee-services/downloads",
      },
      {
        title: "Qualification Addition Request",
        channel: "Establishment",
        turnaround: "15-20 days",
        requirements: "Original degree certificates and HOD forwarding",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "Crucial during promotion cycles and annual increment processing.",
      responseTime:
        "CAS processing depends on external expert availability and committee scheduling.",
      bestFor: [
        "Applying for promotion",
        "Updating educational qualifications",
        "Ensuring increment processing",
      ],
      notes: [
        "Incomplete CAS applications significantly delay the promotion process.",
        "Your Service Register is the ultimate source of truth for pension calculations.",
      ],
    },
  },
  {
    key: "professional-development",
    title: "Professional Development & Research",
    shortTitle: "Development",
    badge: "Growth",
    description:
      "Support for Faculty Development Programs (FDP), conferences, research grants, and duty leave processing.",
    metrics: [
      {
        label: "Target Audience",
        value: "Faculty",
        note: "Primarily for teaching and research staff",
      },
      {
        label: "Support Type",
        value: "Grants & Duty Leave",
        note: "Time and funding for academic growth",
      },
      {
        label: "Approval",
        value: "Prior Sanction",
        note: "Required before attending external events",
      },
      {
        label: "Outcome",
        value: "API Points",
        note: "Contributes to CAS and accreditation metrics",
      },
    ],
    highlights: [
      {
        title: "Duty Leave (On-Duty)",
        description:
          "Faculty can avail duty leave for attending conferences, acting as examiners, or participating in approved FDPs.",
      },
      {
        title: "Research Projects",
        description:
          "Proposals for UGC, DST, or CSIR funding must be routed through the university's research cell and Registrar.",
        tone: "accent",
      },
      {
        title: "Financial Assistance",
        description:
          "Subject to university rules, partial or full funding may be available for presenting papers at reputed international conferences.",
      },
    ],
    steps: [
      {
        title: "Identify the opportunity",
        description:
          "Ensure the conference or FDP is recognized and aligns with your department's goals.",
      },
      {
        title: "Apply for On-Duty leave",
        description:
          "Submit the request with the brochure and invitation letter to the HOD well in advance.",
      },
      {
        title: "Submit the participation report",
        description:
          "Upon return, submit the attendance certificate and a brief report to close the duty leave record.",
      },
    ],
    resources: [
      {
        title: "Duty Leave Application",
        channel: "Downloads",
        turnaround: "3-5 days",
        requirements: "Event brochure, invitation, and alternative class arrangements",
        href: "/employee-services/downloads",
      },
      {
        title: "Research Proposal Forwarding",
        channel: "Research Cell",
        turnaround: "7-10 days",
        requirements: "Complete proposal and ethical clearances if applicable",
      },
    ],
    faq: [
      {
        question: "How many days of Duty Leave can I take in a year?",
        answer:
          "Duty leave limits are governed by university statutes and UGC guidelines, typically capped annually. Check with the Establishment section for the current limit.",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "Plan and apply well ahead of the registration deadline for external events.",
      responseTime:
        "Funding approvals require committee clearance and take longer than standard duty leave approvals.",
      bestFor: ["Attending conferences", "Applying for external grants", "Participating in FDPs"],
      notes: ["Maintain a personal dossier of all attended programs for future CAS applications."],
    },
  },
  {
    key: "employee-portal",
    title: "Employee Portal Services",
    shortTitle: "Digital Portal",
    badge: "Access",
    description:
      "Gateway to digital services, profile management, and online request tracking for university staff.",
    metrics: [
      { label: "Core functions", value: "3", note: "Profile, Payslips, and Leave Tracking" },
      {
        label: "Security",
        value: "Mandatory",
        note: "Keep credentials confidential",
      },
      {
        label: "Best use",
        value: "Self-service",
        note: "Reduce visits to the administrative blocks",
      },
      { label: "Linked workflows", value: "Multiple", note: "Payroll, Leaves, and Notices" },
    ],
    highlights: [
      {
        title: "Centralized Digital Identity",
        description:
          "The portal acts as your primary digital identity for internal university services and communications.",
      },
      {
        title: "Self-Service Convenience",
        description:
          "Download payslips, check leave balances, and update contact information without paper forms.",
        tone: "accent",
      },
      {
        title: "Secure Access",
        description:
          "Access is restricted to active employees. Report any unauthorized access attempts immediately to the IT cell.",
      },
    ],
    steps: [
      {
        title: "Initial Login",
        description: "Use the credentials provided by the Establishment/IT cell upon joining.",
      },
      {
        title: "Verify Profile",
        description:
          "Ensure your designation, department, and reporting manager are correctly mapped in the system.",
      },
      {
        title: "Utilize Services",
        description:
          "Routinely use the portal for tasks like leave applications and reviewing circulars.",
      },
    ],
    faq: [
      {
        question: "What should I do if I forget my portal password?",
        answer:
          "Use the 'Forgot Password' link on the login page or contact the IT Helpdesk for a reset.",
      },
    ],
    contacts: [
      { label: "IT Helpdesk", value: "ithelp@anu.ac.in", href: "mailto:ithelp@anu.ac.in" },
      ...sharedContacts,
    ],
    supportPanel: {
      availability: "Available 24/7. System maintenance is usually scheduled on weekends.",
      responseTime: "Portal access issues are typically resolved by the IT desk within 24 hours.",
      bestFor: ["Downloading payslips", "Checking leave quotas", "Accessing digital circulars"],
      notes: ["Do not share your password with colleagues or subordinates."],
    },
  },
  {
    key: "staff-grievance-cell",
    title: "Staff Grievance Cell",
    shortTitle: "Grievances",
    badge: "Escalation",
    description:
      "A structured pathway for escalating workplace concerns, administrative disputes, and policy clarifications.",
    metrics: [
      {
        label: "Primary Role",
        value: "Dispute Resolution",
        note: "Providing a fair hearing for staff issues",
      },
      {
        label: "Confidentiality",
        value: "Maintained",
        note: "Sensitive issues are handled with discretion",
      },
      {
        label: "Process",
        value: "Tiered",
        note: "HOD → Dean/Principal → Registrar → Grievance Cell",
      },
      {
        label: "Goal",
        value: "Workplace Harmony",
        note: "Ensuring fair treatment per university statutes",
      },
    ],
    highlights: [
      {
        title: "Follow the Chain of Command",
        description:
          "Before approaching the formal grievance cell, attempt to resolve the issue through your immediate HOD or Dean.",
      },
      {
        title: "Document the Issue",
        description:
          "Formal grievances require a clear, factual written representation with supporting evidence or prior correspondence.",
        tone: "accent",
      },
      {
        title: "Impartial Review",
        description:
          "The grievance committee consists of senior officials to ensure a balanced and objective review of the matter.",
      },
    ],
    steps: [
      {
        title: "Attempt local resolution",
        description: "Discuss the concern with your direct supervisor or department head first.",
      },
      {
        title: "Draft a formal representation",
        description:
          "If unresolved, write a clear, objective letter outlining the issue, dates, and what specific resolution you seek.",
      },
      {
        title: "Submit to the Registrar",
        description:
          "Formal grievances should be submitted to the Registrar's office, who will route it to the appropriate committee.",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability:
        "Use when standard administrative channels have failed to resolve a legitimate concern.",
      responseTime:
        "Committees convene periodically; resolution times vary based on the complexity of the case.",
      bestFor: ["Service condition disputes", "Workplace conflicts", "Policy clarification"],
      notes: [
        "Grievances should be factual and respectful in tone.",
        "Anonymous complaints are generally not entertained by formal committees.",
      ],
    },
  },
  {
    key: "downloads",
    title: "Employee Forms & Downloads",
    shortTitle: "Downloads",
    badge: "Forms",
    description:
      "A centralized repository for common administrative forms, applications, and policy documents.",
    metrics: [
      {
        label: "Content",
        value: "Applications",
        note: "Leave, PF, Claims, and CAS forms",
      },
      {
        label: "Format",
        value: "PDF / Word",
        note: "Ready for print and signature",
      },
      {
        label: "Usage",
        value: "High",
        note: "Saves time compared to office visits",
      },
      {
        label: "Updates",
        value: "Periodic",
        note: "Forms change with policy updates",
      },
    ],
    highlights: [
      {
        title: "Print, Sign, Submit",
        description:
          "Most university workflows still require physical signatures. Download the form, complete it, and route it properly.",
      },
      {
        title: "Categorized for Convenience",
        description:
          "Forms are grouped by HR, Finance, Research, and General Administration to help you find them faster.",
        tone: "accent",
      },
      {
        title: "Always use the latest version",
        description:
          "Avoid using old photocopies from colleagues, as form structures and required enclosures occasionally change.",
      },
    ],
    resources: [
      {
        title: "Leave Application Forms (CL/EL/ML)",
        channel: "Department",
        turnaround: "N/A",
        requirements: "Standard form for physical routing",
        href: "/employee-services/leave-management",
      },
      {
        title: "Medical Reimbursement Claim Form",
        channel: "Finance",
        turnaround: "N/A",
        requirements: "Needs original bills attached",
        href: "/employee-services/health-welfare",
      },
      {
        title: "PF Advance/Withdrawal Form",
        channel: "Finance",
        turnaround: "N/A",
        requirements: "Requires balance verification",
        href: "/employee-services/hr-payroll",
      },
      {
        title: "CAS Proforma",
        channel: "Establishment",
        turnaround: "N/A",
        requirements: "Extensive enclosures needed",
        href: "/employee-services/service-records",
      },
    ],
    faq: [
      {
        question: "Can I submit these forms digitally?",
        answer:
          "While some processes are moving online, most critical forms still require a physical signature from your HOD before submission to the administration.",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "Available anytime. Check back before starting a new process.",
      responseTime: "Instant download.",
      bestFor: ["Finding standard templates", "Preparing applications", "Policy reference"],
      notes: ["If a specific form is missing, contact the relevant department directly."],
    },
  },
  {
    key: "retirees-pensioners",
    title: "Retirees & Pensioners Support",
    shortTitle: "Retirees",
    badge: "Pension",
    description:
      "Dedicated guidance for retiring staff, covering final settlements, pension processing, and life certificate submissions.",
    metrics: [
      {
        label: "Audience",
        value: "Superannuating Staff",
        note: "Transitioning from active service",
      },
      {
        label: "Key Process",
        value: "Settlement",
        note: "Gratuity, Leave Encashment, and Pension fixing",
      },
      {
        label: "Annual Task",
        value: "Life Certificate",
        note: "Required every November",
      },
      {
        label: "Contact",
        value: "Pension Section",
        note: "Specialized desk in Finance",
      },
    ],
    highlights: [
      {
        title: "Start Planning Early",
        description:
          "Begin compiling your records and clearing dues at least 6 months before your date of superannuation.",
        tone: "accent",
      },
      {
        title: "No Dues Certificates",
        description:
          "Clearance from the library, department, hostels, and finance is mandatory for processing final settlements.",
      },
      {
        title: "Annual Life Certificate",
        description:
          "Pensioners must submit a physical or digital life certificate annually to ensure uninterrupted pension disbursement.",
      },
    ],
    steps: [
      {
        title: "Initiate No Dues process",
        description:
          "Collect the No Dues form and get clearances from all specified university departments.",
      },
      {
        title: "Submit Pension Papers",
        description:
          "Complete the pension application forms along with joint photographs and nominee details.",
      },
      {
        title: "Stay in Touch",
        description:
          "Ensure your communication address and phone number are updated with the Pension Section.",
      },
    ],
    resources: [
      {
        title: "Pension Application Forms",
        channel: "Downloads / Pension Desk",
        turnaround: "Processed before retirement date",
        requirements: "Service book verification and No Dues",
        href: "/employee-services/downloads",
      },
      {
        title: "Life Certificate Template",
        channel: "Downloads",
        turnaround: "Annual submission (November)",
        requirements: "Signature of gazetted officer or bank manager",
        href: "/employee-services/downloads",
      },
    ],
    contacts: [
      { label: "Pension Desk (Finance)", value: "Ext: 221", href: "#" },
      ...sharedContacts,
    ],
    supportPanel: {
      availability: "Vital during the 6 months prior to retirement and annually thereafter.",
      responseTime:
        "Final settlements require complex auditing. Delays in 'No Dues' directly delay the pension order.",
      bestFor: [
        "Retirement planning",
        "Understanding settlement procedures",
        "Life certificate guidance",
      ],
      notes: [
        "Keep your family informed about nominee procedures and pension documentation.",
        "Retain a photocopy of your finalized Service Register.",
      ],
    },
  },
];

export function resolveEmployeeServiceTabKey(page?: string): EmployeeServiceTabKey {
  const normalized = (page ?? "overview").trim().toLowerCase();
  return employeeServicePageAliases[normalized] ?? (normalized as EmployeeServiceTabKey);
}

export function getEmployeeServiceTab(page?: string) {
  const key = resolveEmployeeServiceTabKey(page);
  return employeeServiceTabs.find((tab) => tab.key === key) ?? employeeServiceTabs[0];
}
