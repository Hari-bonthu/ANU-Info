export type RankingsTabKey =
  | "overview"
  | "nirf"
  | "iqac"
  | "ssr"
  | "naac"
  | "awards-recognitions"
  | "qs-asia-ranking-2022"
  | "qs-i-gauge-e-leas"
  | "world-ranking"
  | "impact-ranking"
  | "green-metric-ranking"
  | "green-university-award-2021";

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

export type RankingsTab = {
  key: RankingsTabKey;
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
  { label: "IQAC Office", value: "+91 863 234 6125", href: "tel:+918632346125" },
  { label: "Director of IQAC", value: "iqac@anu.ac.in", href: "mailto:iqac@anu.ac.in" },
];

export const rankingsPageAliases: Record<string, RankingsTabKey> = {
  "nirf-rankings": "nirf",
  "naac-accreditation": "naac",
  awards: "awards-recognitions",
  "green-metric": "green-metric-ranking",
};

export const rankingsTabs: RankingsTab[] = [
  {
    key: "overview",
    title: "Quality & Rankings Hub",
    shortTitle: "Overview",
    badge: "Accredited",
    description:
      "Overview of Acharya Nagarjuna University rankings, IQAC processes, and national/global accreditations reflecting our commitment to quality standards.",
    metrics: [
      { label: "NAAC Grade", value: "A+", note: "3.46 Cumulative GPA score" },
      { label: "NIRF Status", value: "Ranked", note: "Regular national participant" },
      { label: "IQAC Audits", value: "Annual", note: "Systematic internal reviews" },
      { label: "Global Presence", value: "QS Ranked", note: "Asia and World category listings" },
    ],
    highlights: [
      {
        title: "Quality Standards",
        description:
          "The IQAC cell continuously audits academic records, faculty profiles, and departmental research output to align with NAAC criteria.",
        tone: "accent",
      },
      {
        title: "Diverse Certifications",
        description:
          "Participating in national registries, green sustainability metrics, and global institutional ranking frameworks.",
      },
    ],
    steps: [
      {
        title: "Check Accreditation Status",
        description: "Verify the current NAAC rating cycle and grading results.",
      },
      {
        title: "Review Annual Reports",
        description: "Access the Self-Study Reports (SSR) and IQAC internal audit records.",
      },
    ],
    resources: [
      {
        title: "NAAC A+ Accreditation Certificate",
        channel: "IQAC Portal",
        turnaround: "Instant download",
        requirements: "None",
      },
      {
        title: "Latest AQAR Document",
        channel: "IQAC Office",
        turnaround: "Instant download",
        requirements: "None",
      },
    ],
    faq: [
      {
        question: "What is NAAC grading status for ANU?",
        answer:
          "Acharya Nagarjuna University has been accredited with an 'A+' grade by NAAC with an outstanding CGPA of 3.46.",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability:
        "IQAC administration is available Monday through Saturday from 10:00 AM to 5:00 PM.",
      responseTime: "Standard queries are addressed in 3 business days.",
      bestFor: [
        "Accreditation certificate requests",
        "AQAR submission updates",
        "Institutional rankings verification",
      ],
      notes: [
        "All data published here matches certified submissions to NIRF, NAAC, and other registries.",
      ],
    },
  },
  {
    key: "nirf",
    title: "NIRF India Rankings",
    shortTitle: "NIRF",
    badge: "National",
    description:
      "Annual institutional performance and parameter-level details submitted under the National Institutional Ranking Framework (NIRF), Ministry of Education.",
    metrics: [
      { label: "Registry", value: "NIRF", note: "Ministry of Education, Govt of India" },
      {
        label: "Parameters",
        value: "5",
        note: "Teaching, learning, research, graduation, perception",
      },
      { label: "Participation", value: "Annual", note: "Submitted across multiple streams" },
      { label: "Verification", value: "Public", note: "All data uploads are audited and verified" },
    ],
    highlights: [
      {
        title: "Submission Transparency",
        description:
          "In compliance with MHRD norms, all data points uploaded for NIRF evaluation are made publicly available for verification.",
        tone: "accent",
      },
    ],
    steps: [
      {
        title: "Access NIRF Data Sheets",
        description:
          "Download the complete submission dossier covering student strength, placements, and financial resources.",
      },
    ],
    resources: [
      {
        title: "NIRF 2026 Overall Submission Dossier",
        channel: "IQAC Office / NIRF",
        turnaround: "Immediate",
        requirements: "None",
      },
    ],
    faq: [
      {
        question: "Where can I view parameter breakdowns?",
        answer:
          "The full breakdown of parameter scores (TLR, RPC, GO, OI, PR) is available in the official NIRF submission document.",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "NIRF cell coordinators operate inside the IQAC office block.",
      responseTime: "Dossier corrections and reviews require Registrar sign-off.",
      bestFor: ["Reading NIRF submissions", "Understanding parameter scoring"],
      notes: [
        "Official NIRF publications follow the calendar released by the Ministry of Education.",
      ],
    },
  },
  {
    key: "iqac",
    title: "Internal Quality Assurance Cell",
    shortTitle: "IQAC",
    badge: "Quality",
    description:
      "Internal Quality Assurance Cell (IQAC) coordinates all quality assurance benchmarks, planning systems, and academic performance indicators (API).",
    metrics: [
      { label: "Role", value: "QA Auditing", note: "Academic and administrative parameters" },
      { label: "Meetings", value: "Quarterly", note: "Chaired by the Vice Chancellor" },
      { label: "AQARs File", value: "Annual", note: "Submitted to NAAC online portal" },
      { label: "Feedback", value: "360 Deg", note: "Collected from students, parents, and alumni" },
    ],
    highlights: [
      {
        title: "Academic Audits",
        description:
          "Periodic evaluations of department syllabus, student feedback patterns, and laboratory capabilities.",
        tone: "success",
      },
    ],
    steps: [
      {
        title: "Submit API Score Sheet",
        description:
          "Faculty members submit their Annual API appraisal proforma to IQAC for verification.",
      },
    ],
    resources: [
      {
        title: "Annual Quality Assurance Report (AQAR)",
        channel: "IQAC Portal",
        turnaround: "Immediate",
        requirements: "None",
      },
    ],
    faq: [
      {
        question: "How do I submit student feedback?",
        answer:
          "Student feedback forms are sent out digitally at the end of each semester and are directly tabulated by the IQAC cell.",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "OPD hours of IQAC counter match standard administrative working hours.",
      responseTime: "Routine letters and reports take 2-4 working days.",
      bestFor: ["Quality assurance guidelines", "API appraisal queries", "AQAR downloads"],
      notes: [
        "All constituent colleges must submit their internal quality reports to the central cell annually.",
      ],
    },
  },
  {
    key: "ssr",
    title: "Self-Study Report (SSR)",
    shortTitle: "SSR",
    badge: "Audit Docs",
    description:
      "The complete documentation and data files compiled for the National Assessment and Accreditation Council (NAAC) Self-Study Report (SSR).",
    metrics: [
      { label: "Criteria", value: "7", note: "Core focus areas of NAAC evaluation" },
      { label: "Cycle", value: "4th Cycle", note: "Current institutional assessment phase" },
      { label: "Data Sheets", value: "80+", note: "Metrics verified under DVV" },
      { label: "Status", value: "Accredited", note: "Dossier closed after peer team visit" },
    ],
    highlights: [
      {
        title: "DVV Cleared Data",
        description:
          "All quantitative metrics presented in the SSR have cleared the rigorous Data Validation and Verification (DVV) phase.",
        tone: "accent",
      },
    ],
    steps: [
      {
        title: "Download SSR Volumes",
        description:
          "Choose the criterion-wise documentation links below to check specific academic and support dossiers.",
      },
    ],
    resources: [
      {
        title: "Complete NAAC Self-Study Report Volume",
        channel: "IQAC Archive",
        turnaround: "Immediate",
        requirements: "None",
      },
    ],
    faq: [
      {
        question: "What are the 7 criteria evaluated in the SSR?",
        answer:
          "They are Curricular Aspects; Teaching-Learning; Research-Innovations; Infrastructure; Student Support; Governance-Leadership; and Institutional Values.",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "SSR digital archives are accessible 24/7.",
      responseTime: "Inquiries regarding DVV datasets are handled via the IQAC director.",
      bestFor: ["Criterion-wise data checks", "DVV verification details"],
      notes: [
        "These documents represent the exhaustive quality profile submitted for accreditation reviews.",
      ],
    },
  },
  {
    key: "naac",
    title: "NAAC Accreditation Profile",
    shortTitle: "NAAC",
    badge: "A+ Grade",
    description:
      "Details of NAAC accreditation results, cumulative scores, peer team reports, and certificates awarded over successive assessment cycles.",
    metrics: [
      { label: "Latest Grade", value: "A+ Grade", note: "3.46 score out of 4.0" },
      { label: "Validity", value: "5 Years", note: "Accreditation period" },
      { label: "First Cycle", value: "2003", note: "First accredited state university in AP" },
      { label: "Assessors", value: "Peer Team", note: "Senior academicians and Vice Chancellors" },
    ],
    highlights: [
      {
        title: "Accredited with Distinction",
        description:
          "Acharya Nagarjuna University has consistently maintained high grades, positioning it as a leading state university in South India.",
        tone: "success",
      },
    ],
    steps: [
      {
        title: "Check Peer Team Report",
        description:
          "Download the official qualitative feedback document released by the NAAC Peer Team.",
      },
    ],
    resources: [
      {
        title: "NAAC Peer Team Assessment Report",
        channel: "IQAC Office",
        turnaround: "Immediate",
        requirements: "None",
      },
    ],
    faq: [
      {
        question: "When is the next NAAC assessment cycle scheduled?",
        answer:
          "The university is preparing its SSR and documentation for the upcoming assessment cycle in alignment with standard validity timelines.",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "Standard office hours at the IQAC division.",
      responseTime: "Credential queries are verified within 2 business days.",
      bestFor: ["NAAC certificate copies", "Peer Team feedback reports"],
      notes: [
        "Accreditation status determines eligibility for central funding under RUSA and UGC.",
      ],
    },
  },
  {
    key: "awards-recognitions",
    title: "Institutional Awards & Recognitions",
    shortTitle: "Awards",
    badge: "Honours",
    description:
      "Summary of accolades, national distinctions, green awards, and rankings received by the university from state, national, and global organizations.",
    metrics: [
      { label: "State Rank", value: "Top Tier", note: "In state university rankings" },
      { label: "Green Award", value: "Gold", note: "Recognising eco-friendly practices" },
      { label: "Research Medals", value: "50+", note: "Awarded to faculty members" },
      { label: "Estd", value: "1976", note: "Over 50 years of educational service" },
    ],
    highlights: [
      {
        title: "State and National Honours",
        description:
          "Accolades celebrating community outreach, academic innovation, and digital governance on campus.",
        tone: "accent",
      },
    ],
    steps: [
      {
        title: "Access Awards Archive",
        description: "Browse documented honours and recognitions catalogued by the PR cell.",
      },
    ],
    resources: [
      {
        title: "ANU Awards & Recognitions Dossier",
        channel: "Public Relations Cell",
        turnaround: "Immediate",
        requirements: "None",
      },
    ],
    faq: [
      {
        question: "Where can I view individual faculty awards?",
        answer:
          "Faculty distinctions are logged on the individual profiles page or the research cell index.",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "Maintained by the Public Relations and Media cell.",
      responseTime: "Press clarifications are addressed via email.",
      bestFor: ["Press releases and media records", "Historical awards documentation"],
      notes: ["Accolades are verified by the institutional public relations officer."],
    },
  },
  {
    key: "qs-asia-ranking-2022",
    title: "QS Asia Ranking 2022 Details",
    shortTitle: "QS Asia",
    badge: "Global",
    description:
      "Performance details and parameters assessed under the Quacquarelli Symonds (QS) Asia University Rankings 2022.",
    metrics: [
      { label: "QS Category", value: "Asia", note: "Evaluating global benchmarks" },
      { label: "Staff Phd", value: "High", note: "Reflecting faculty qualification metrics" },
      { label: "Citations", value: "Scopus", note: "Evaluated using verified scopus datasets" },
      { label: "Papers", value: "Indexed", note: "Reflecting international publications" },
    ],
    highlights: [
      {
        title: "International Citations",
        description:
          "Strong performance in citation frequency and research papers per faculty under the QS methodology.",
        tone: "accent",
      },
    ],
    steps: [
      {
        title: "Check QS Profile",
        description: "View the official rankings overview published on the topuniversities portal.",
      },
    ],
    resources: [
      {
        title: "QS Asia 2022 Parameters Sheet",
        channel: "IQAC / QS Portal",
        turnaround: "Immediate",
        requirements: "None",
      },
    ],
    faq: [
      {
        question: "How are QS rankings determined?",
        answer:
          "Criteria include Academic Reputation, Employer Reputation, Faculty/Student Ratio, Staff with PhD, and Citations per paper.",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "Data sheets are archived and managed by the IQAC cell.",
      responseTime: "Clarifications take 3 working days.",
      bestFor: ["QS ranking criteria details", "Faculty publication metrics"],
      notes: ["QS rankings are updated annually. Historical data is preserved for comparison."],
    },
  },
  {
    key: "qs-i-gauge-e-leas",
    title: "QS I-Gauge E-LEAD Certification",
    shortTitle: "QS I-Gauge",
    badge: "E-Learning",
    description:
      "E-Learning Excellence for Academic Digitisation (E-LEAD) certification awarded by QS I-Gauge for digitized campus infrastructure.",
    metrics: [
      { label: "Audit Type", value: "E-LEAD", note: "E-learning audit framework" },
      {
        label: "Infrastructure",
        value: "Excellent",
        note: "Digital classrooms and learning systems",
      },
      { label: "Bandwidth", value: "1 Gbps+", note: "Central campus fiber backbone connectivity" },
      { label: "Classrooms", value: "Digital", note: "Fitted with smart boards and cameras" },
    ],
    highlights: [
      {
        title: "Certified Digitisation",
        description:
          "Acharya Nagarjuna University is among select institutions certified for seamless online teaching, learning, and assessment.",
        tone: "success",
      },
    ],
    steps: [
      {
        title: "Review Smart Facilities",
        description:
          "Check the digital classroom mapping and online examination software capabilities.",
      },
    ],
    resources: [
      {
        title: "QS I-Gauge E-LEAD Certificate Copy",
        channel: "IT Cell Office",
        turnaround: "Immediate",
        requirements: "None",
      },
    ],
    faq: [
      {
        question: "What does the E-LEAD certificate evaluate?",
        answer:
          "It audits the university’s IT infrastructure, online course delivery software, LMS system, and online examination security.",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "IT infrastructure audits are managed under the computer centre.",
      responseTime: "Service portal updates are processed in 24 hours.",
      bestFor: ["Digitisation audit sheets", "Smart classroom capabilities"],
      notes: [
        "The certification confirms our alignment with modern, hybrid learning expectations.",
      ],
    },
  },
  {
    key: "world-ranking",
    title: "World University Rankings",
    shortTitle: "World Rank",
    badge: "International",
    description:
      "ANU global ranking records, citations indicators, and research collaboration networks indexed in international systems.",
    metrics: [
      { label: "Index", value: "World Cat", note: "Global university parameters" },
      { label: "Publications", value: "Scopus", note: "High impact factor entries" },
      { label: "Citations/Faculty", value: "High", note: "Exceeding regional baselines" },
      {
        label: "Collaborations",
        value: "Global",
        note: "Joint projects with foreign universities",
      },
    ],
    highlights: [
      {
        title: "Global Citations Footprint",
        description:
          "Our faculty’s publication trail in international chemistry, physics, and life science journals supports global rankings.",
        tone: "accent",
      },
    ],
    steps: [
      {
        title: "Check Citation Analytics",
        description: "Refer to the Research Cell database for the latest index statistics.",
      },
    ],
    resources: [
      {
        title: "ANU International Citations & Papers Index",
        channel: "Research Cell",
        turnaround: "Immediate",
        requirements: "None",
      },
    ],
    faq: [
      {
        question: "How do I access Scopus/Web of Science analytics?",
        answer:
          "Access the campus network portal and navigate to library e-resource listings to query verified indices.",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "Analyzed and maintained under the central library administration.",
      responseTime: "Index checks take 2 business days.",
      bestFor: ["Querying international rankings", "Library e-resources access"],
      notes: [
        "Students and faculty must use university email credentials for premium e-journal access.",
      ],
    },
  },
  {
    key: "impact-ranking",
    title: "THE Impact Rankings",
    shortTitle: "Impact Rank",
    badge: "THE Impact",
    description:
      "Assessment details and results reflecting the UN Sustainable Development Goals (SDGs) evaluated under Times Higher Education (THE) Impact Rankings.",
    metrics: [
      { label: "Methodology", value: "THE Impact", note: "Evaluating UN SDG parameters" },
      { label: "SDG 3 Status", value: "Ranked", note: "Good Health & Wellbeing initiatives" },
      { label: "SDG 4 Status", value: "Ranked", note: "Quality Education parameters" },
      { label: "Sustainability", value: "High", note: "Aligned with campus green policies" },
    ],
    highlights: [
      {
        title: "Sustainable Development Goals",
        description:
          "Acharya Nagarjuna University actively reports and aligns operations with global environmental, health, and gender equality goals.",
        tone: "success",
      },
    ],
    steps: [
      {
        title: "Check SDG Report Sheets",
        description:
          "Download the compliance reports submitted to the Times Higher Education portal.",
      },
    ],
    resources: [
      {
        title: "THE Impact Rankings SDG Submission File",
        channel: "IQAC Office",
        turnaround: "Immediate",
        requirements: "None",
      },
    ],
    faq: [
      {
        question: "Why does the university participate in THE Impact rankings?",
        answer:
          "It measures our real social contribution, community health service, and environmental policies against the UN Sustainable Development Goals.",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "SDG coordination is handled within the IQAC planning cell.",
      responseTime: "Reports are compiled and updated annually.",
      bestFor: ["THE Impact parameters check", "SDG compliance documentation"],
      notes: ["Volunteering with NSS village adoption counts toward SDG 3 and SDG 4 criteria."],
    },
  },
  {
    key: "green-metric-ranking",
    title: "UI GreenMetric Rankings",
    shortTitle: "GreenMetric",
    badge: "Eco-Friendly",
    description:
      "Rankings performance assessed under the UI GreenMetric World University Rankings, focusing on campus sustainability, water conservation, and carbon footprint.",
    metrics: [
      { label: "Registry", value: "GreenMetric", note: "World university sustainability index" },
      { label: "Campus Setting", value: "300 Ac", note: "Over 60% green coverage" },
      { label: "Water Recycle", value: "Yes", note: "Rainwater harvesting and reuse systems" },
      { label: "Waste Audit", value: "Plastic Free", note: "Strict ban on single-use plastics" },
    ],
    highlights: [
      {
        title: "Sustainable Green Campus",
        description:
          "High ranking indicators in waste recycling, energy-efficient smart grids, and water harvesting structures across the Guntur campus.",
        tone: "success",
      },
    ],
    steps: [
      {
        title: "Check Green Metrics Dossier",
        description:
          "Review the carbon emission, energy efficiency, and organic farming logs compiled by campus development cells.",
      },
    ],
    resources: [
      {
        title: "UI GreenMetric Assessment Report",
        channel: "Campus Development Office",
        turnaround: "Immediate",
        requirements: "None",
      },
    ],
    faq: [
      {
        question: "What are the core parameters of the GreenMetric ranking?",
        answer:
          "Setting & Infrastructure, Energy & Climate Change, Waste, Water, Transportation, and Education & Research.",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability: "Maintained under the campus garden and estate office.",
      responseTime: "Reports are updated in alignment with the annual ranking cycle.",
      bestFor: ["Sustainability audit sheets", "Campus botanical plans"],
      notes: ["Students must keep the campus plastic-free to support carbon reduction goals."],
    },
  },
  {
    key: "green-university-award-2021",
    title: "Green University Award 2021",
    shortTitle: "Green Award",
    badge: "Awarded",
    description:
      "Accolades and peer recognitions celebrating the university's green policies, organic farming plots, solar grid installations, and botanical conservation.",
    metrics: [
      { label: "Award Type", value: "Green Uni", note: "National level recognition" },
      { label: "Solar Energy", value: "Smart Grid", note: "Significant campus lighting offset" },
      { label: "Campus Green", value: "High Density", note: "Native forestry and botanical parks" },
      {
        label: "Compliance",
        value: "Zero Plastic",
        note: "Maintained across cafeteria and hostels",
      },
    ],
    highlights: [
      {
        title: "Ecological Excellence",
        description:
          "Acharya Nagarjuna University was recognized for its green energy transition, water recharging shafts, and plastic-free policy implementation.",
        tone: "success",
      },
    ],
    steps: [
      {
        title: "Review Green Policies",
        description: "Check the solar grid output graphs and wastewater recycling parameters.",
      },
    ],
    resources: [
      {
        title: "Green University Award Certificate",
        channel: "PR Cell Office",
        turnaround: "Immediate",
        requirements: "None",
      },
    ],
    faq: [
      {
        question: "Who sponsored the Green University Award?",
        answer:
          "The award was presented by national ecological forums recognizing institutional excellence in green technology.",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability:
        "Welfare and campus greenery details are coordinated by the Botany and Garden cells.",
      responseTime: "Routine info takes 2 working days.",
      bestFor: ["Solar grid data sheets", "Wastewater recycling details"],
      notes: [
        "The award acknowledges our commitment to climate action and environmental education.",
      ],
    },
  },
];

export function getRankingsTab(pageId?: string): RankingsTab {
  const resolved = pageId ? rankingsPageAliases[pageId] || pageId : "overview";
  const found = rankingsTabs.find((t) => t.key === resolved);
  return found || rankingsTabs[0];
}
