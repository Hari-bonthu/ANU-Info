export type CampusLifeTabKey =
  | "overview"
  | "hostel"
  | "health-center"
  | "sports"
  | "nss"
  | "ncc"
  | "elc"
  | "news"
  | "events"
  | "anu-radio-91-2"
  | "herbal-garden";

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

export type CampusLifeTab = {
  key: CampusLifeTabKey;
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
  { label: "Student Affairs Office", value: "+91 863 234 6116", href: "tel:+918632346116" },
  { label: "Campus Health Helpdesk", value: "+91 863 234 6117", href: "tel:+918632346117" },
  { label: "Public Relations Cell", value: "press@anu.ac.in", href: "mailto:press@anu.ac.in" },
];

export const campusLifePageAliases: Record<string, CampusLifeTabKey> = {
  hostels: "hostel",
  "health-centre": "health-center",
  radio: "anu-radio-91-2",
  garden: "herbal-garden",
};

export const campusLifeTabs: CampusLifeTab[] = [
  {
    key: "overview",
    title: "Campus Life Hub",
    shortTitle: "Overview",
    badge: "Active",
    description:
      "Discover a vibrant 300-acre green campus hosting hostels, healthcare, competitive sports, NSS/NCC chapters, FM radio, and student engagement circles.",
    metrics: [
      { label: "Campus Area", value: "300 Ac", note: "Lush green, plastic-free environment" },
      { label: "Hostel Blocks", value: "8+", note: "Separate housing for men and women" },
      { label: "NSS Volunteers", value: "5000+", note: "Active across constituent units" },
      { label: "Radio Station", value: "91.2 FM", note: "ANU Community Radio broadcasting daily" },
    ],
    highlights: [
      {
        title: "Diverse Engagement Spaces",
        description:
          "Engage in social service, military training, sports programs, electoral literacy, or community broadcasting.",
        tone: "accent",
      },
      {
        title: "Centralized Amenities",
        description:
          "Access 24/7 medical care, hostel counseling, sporting complexes, and digital student notifications from this single view.",
      },
      {
        title: "Sustainability & Environment",
        description:
          "Participate in regular campus cleaning, plastic-free campaigns, and biological conservation at our Herbal Garden.",
        tone: "success",
      },
    ],
    steps: [
      {
        title: "Explore Campus Facilities",
        description: "Learn about residential blocks, medical care, and physical sports amenities.",
      },
      {
        title: "Join Student Corps & Clubs",
        description:
          "Register for NSS, NCC, or the Electoral Literacy Club to build leadership and service skills.",
      },
      {
        title: "Participate in Events",
        description:
          "Stay updated on youth festivals, cultural programs, and community radio broadcasts.",
      },
    ],
    resources: [
      {
        title: "Hostel Registration Form",
        channel: "Hostel Office",
        turnaround: "Admission day",
        requirements: "Student ID, admission fee receipt, identity proofs",
        href: "/campus-life/hostel",
      },
      {
        title: "NCC Enrollment Form",
        channel: "NCC Unit Office",
        turnaround: "Semester start",
        requirements: "Physical fitness certificate, academic card",
        href: "/campus-life/ncc",
      },
      {
        title: "Health Centre Policy Booklet",
        channel: "Health Centre Counter",
        turnaround: "Instant download",
        requirements: "None",
        href: "/campus-life/health-center",
      },
    ],
    faq: [
      {
        question: "How do I register for on-campus hostels?",
        answer:
          "Hostel registration is managed at the hostel administrative office block. Submit the registration forms along with academic admission documents and fee clearances.",
      },
      {
        question: "Is campus radio accessible to students?",
        answer:
          "Yes. ANU Radio 91.2 FM encourages students to participate in production, broadcasting, and educational talks.",
      },
    ],
    contacts: sharedContacts,
    supportPanel: {
      availability:
        "Student affairs coordinators are available Monday through Saturday from 10:00 AM to 5:00 PM.",
      responseTime: "Routine applications are processed within 3-5 business days.",
      bestFor: [
        "Campus navigation and facilities",
        "Joining student organizations",
        "Cultural calendar coordination",
      ],
      notes: [
        "Students are expected to adhere to the code of conduct across all facilities.",
        "Ensure plastic-free compliance while in recreational areas.",
      ],
    },
  },
  {
    key: "hostel",
    title: "Hostel & Residential Life",
    shortTitle: "Hostels",
    badge: "Residential",
    description:
      "Comfortable and secure residential accommodation for national and international students with dining, security, and recreational facilities.",
    metrics: [
      { label: "Boys Hostels", value: "4 Blocks", note: "Equipped with libraries and gyms" },
      { label: "Girls Hostels", value: "4 Blocks", note: "24/7 security and high surveillance" },
      { label: "Mess Model", value: "Co-op", note: "Healthy vegetarian and non-vegetarian food" },
      { label: "Counseling", value: "24/7", note: "Resident wardens and counselors on duty" },
    ],
    highlights: [
      {
        title: "Secure Environment",
        description:
          "CCTV surveillance, regular night patrols, and biometric entry systems keep students safe.",
        tone: "accent",
      },
      {
        title: "Recreational Zones",
        description:
          "Every hostel block contains common reading rooms, television halls, and indoor sports tables.",
      },
      {
        title: "Cooperatively Run Dining",
        description:
          "Student mess committees oversee weekly menus, raw material procurement, and quality audits.",
      },
    ],
    steps: [
      {
        title: "Apply for Seat Allocation",
        description:
          "Submit your academic seat details and choice of room type online or at the Hostel office.",
      },
      {
        title: "Clear Admission Fees",
        description:
          "Pay the required hostel and caution deposits through the authorized bank counter.",
      },
      {
        title: "Complete Room Check-In",
        description: "Submit payment challans and retrieve room keys from the resident warden.",
      },
    ],
    resources: [
      {
        title: "Hostel Handbook & Rules",
        channel: "Hostel Office",
        turnaround: "Immediate",
        requirements: "None",
      },
      {
        title: "Mess Fee Structure Slip",
        channel: "Mess Office",
        turnaround: "Semester-wise",
        requirements: "Student Registration Details",
      },
    ],
    faq: [
      {
        question: "Can I choose my roommates?",
        answer:
          "Roommate preferences can be submitted during registration and will be allocated based on availability.",
      },
      {
        question: "What is the curfew timing for hostels?",
        answer:
          "Standard curfew is 7:30 PM for all residential blocks, unless prior permission is acquired for academic labs or events.",
      },
    ],
    contacts: [
      { label: "Chief Warden Office", value: "+91 863 234 6130", href: "tel:+918632346130" },
      ...sharedContacts,
    ],
    supportPanel: {
      availability: "Hostel wardens and security officers are available 24/7 on campus.",
      responseTime: "Immediate response for security and medical emergencies.",
      bestFor: [
        "Room allocations and maintenance",
        "Mess queries and feedback",
        "Discipline and security reports",
      ],
      notes: [
        "Strict anti-ragging policies are maintained inside hostels.",
        "Possession of prohibited items leads to immediate expulsion.",
      ],
    },
  },
  {
    key: "health-center",
    title: "University Health Centre",
    shortTitle: "Health Centre",
    badge: "Medical",
    description:
      "Central medical care facility offering free diagnostic services, primary consultations, emergency aid, and pharmacy access to students and staff.",
    metrics: [
      { label: "Resident Doctors", value: "3", note: "Available for shifts and emergencies" },
      { label: "Ambulance", value: "24/7", note: "On-call emergency transport" },
      { label: "Free Meds", value: "100%", note: "Standard dispensary items provided" },
      { label: "Beds Available", value: "6", note: "Primary observation ward" },
    ],
    highlights: [
      {
        title: "Free Consultations",
        description:
          "All registered students and employees receive free consultations and standard medicines.",
        tone: "success",
      },
      {
        title: "Emergency Evacuation",
        description:
          "Dedicated ambulance on standby for quick transport to empanelled super-specialty hospitals.",
      },
      {
        title: "Specialist Visits",
        description:
          "Weekly visits by gynecologists, ophthalmologists, and psychological counselors.",
      },
    ],
    steps: [
      {
        title: "Present Student ID",
        description:
          "Register your details at the outpatient counter using your university identity card.",
      },
      {
        title: "Consult Medical Officer",
        description:
          "Undergo examination, diagnostics, or counseling as recommended by the doctor.",
      },
      {
        title: "Collect Dispensary Items",
        description:
          "Present the medical slip to the pharmacy counter to collect free prescribed medicines.",
      },
    ],
    resources: [
      {
        title: "Emergency Contact Directory",
        channel: "Health Centre Office",
        turnaround: "Immediate",
        requirements: "None",
      },
      {
        title: "Counseling Registration Form",
        channel: "Counseling Cell",
        turnaround: "1-2 days schedule",
        requirements: "Student ID",
      },
    ],
    faq: [
      {
        question: "Are diagnostic checkups free?",
        answer:
          "Basic blood tests, ECG, and blood pressure checks are free for students at the health centre.",
      },
      {
        question: "How do I reach the ambulance at night?",
        answer:
          "Call the emergency health centre helpline at +91 863 234 6117 for immediate assistance.",
      },
    ],
    contacts: [
      { label: "Medical Officer", value: "health@anu.ac.in", href: "mailto:health@anu.ac.in" },
      { label: "Ambulance Standby", value: "+91 863 234 6117", href: "tel:+918632346117" },
      ...sharedContacts,
    ],
    supportPanel: {
      availability:
        "OPD runs daily from 8:00 AM to 6:00 PM. Emergency and ambulance services are open 24/7.",
      responseTime: "Ambulance dispatch is handled within 5 minutes of calling.",
      bestFor: ["Primary medical care", "Dispensary prescriptions", "Mental health counseling"],
      notes: [
        "In case of severe injuries, first responders will stabilize the patient and transport them to Guntur General Hospital.",
      ],
    },
  },
  {
    key: "sports",
    title: "Physical Education & Sports",
    shortTitle: "Sports",
    badge: "Athletics",
    description:
      "State-of-the-art sports complexes, athletic tracks, gymnasiums, and playfields designed to support physical fitness and competitive representation.",
    metrics: [
      { label: "Athletic Track", value: "400m", note: "Standard synthetic layout" },
      { label: "Playfields", value: "10+", note: "Cricket, football, kabaddi, volleyball" },
      { label: "Indoor Gyms", value: "2", note: "Fully equipped multi-gym structures" },
      { label: "Tournaments", value: "12+", note: "Inter-university events hosted annually" },
    ],
    highlights: [
      {
        title: "Elite Coaching Program",
        description:
          "Professional training modules for athletics, weightlifting, volleyball, and yoga.",
        tone: "accent",
      },
      {
        title: "Indoor Sporting Arena",
        description:
          "Wood-floored courts for badminton, basketball, and table tennis championships.",
      },
      {
        title: "Fitness & Wellness Gyms",
        description:
          "Accessible to hostellers during morning and evening sessions under trainer guidance.",
      },
    ],
    steps: [
      {
        title: "Register for Sports Club",
        description:
          "Submit your nomination and selected athletic specialty at the Physical Education block.",
      },
      {
        title: "Undergo Fitness Trial",
        description: "Attend coach evaluations for university team selection profiles.",
      },
      {
        title: "Obtain Sports Kit",
        description:
          "Selected players are provided with standard equipment, kits, and training gear.",
      },
    ],
    resources: [
      {
        title: "Sports Facility Schedule",
        channel: "Physical Education Office",
        turnaround: "Annual calendar",
        requirements: "None",
      },
      {
        title: "Inter-University Trial Form",
        channel: "Sports Coordinator",
        turnaround: "Before tournament cycle",
        requirements: "Student status verification, fit certificate",
      },
    ],
    faq: [
      {
        question: "Can non-athletes use the gymnasiums?",
        answer:
          "Yes. Gyms are open to all university students during designated general hours (6:00 AM - 8:30 AM and 4:30 PM - 7:00 PM).",
      },
      {
        question: "Are there travel allowances for outer tournaments?",
        answer:
          "Yes. Students representing ANU in national or inter-university matches are provided with travel, boarding, and kit allowances.",
      },
    ],
    contacts: [
      {
        label: "Director of Physical Education",
        value: "sports@anu.ac.in",
        href: "mailto:sports@anu.ac.in",
      },
      ...sharedContacts,
    ],
    supportPanel: {
      availability:
        "Playfields and gyms are active from 5:30 AM to 8:30 AM, and 4:00 PM to 7:30 PM.",
      responseTime: "Facility booking requests are processed in 24 hours.",
      bestFor: ["University team selections", "Gymnasium access", "Booking sports grounds"],
      notes: [
        "Prior approval is mandatory for using primary indoor court lighting.",
        "Appropriate sports shoes and attire are mandatory in gyms and tracks.",
      ],
    },
  },
  {
    key: "nss",
    title: "National Service Scheme (NSS)",
    shortTitle: "NSS",
    badge: "Service",
    description:
      "Developing student personality through community service, village adoption camps, blood donation drives, and national integration campaigns.",
    metrics: [
      { label: "Active Units", value: "50+", note: "Across constituent and affiliated units" },
      { label: "Camps Held", value: "30+", note: "Special rural adoption camps annually" },
      { label: "Blood Drives", value: "10+", note: "Collaborations with Red Cross" },
      { label: "Hours/Year", value: "120 Hr", note: "Standard volunteer service quota" },
    ],
    highlights: [
      {
        title: "Community Village Adoption",
        description:
          "Units adopt rural areas to educate, construct sanitation checks, and conduct health surveys.",
        tone: "success",
      },
      {
        title: "Special Merit Certificates",
        description:
          "Volunteers completing two years and 240 service hours are awarded priority admission quotas.",
      },
      {
        title: "National Integration Camps",
        description:
          "Opportunities to represent ANU at national camps, youth festivals, and Republic Day selections.",
      },
    ],
    steps: [
      {
        title: "Register with Unit Lead",
        description: "Sign up at your department or the central NSS block at the semester start.",
      },
      {
        title: "Attend Weekly Sessions",
        description:
          "Participate in weekend social service campaigns and campus cleanliness drives.",
      },
      {
        title: "Join adoption camps",
        description:
          "Attend the mandatory 7-day rural camp during semester break for certification.",
      },
    ],
    resources: [
      {
        title: "NSS Volunteer Enrollment Card",
        channel: "NSS Office",
        turnaround: "Semester-wise",
        requirements: "Academic records, ID proof",
      },
      {
        title: "Rural Camp Clearance Form",
        channel: "NSS Programme Officer",
        turnaround: "Post-camp week",
        requirements: "Participation diary, signatures of coordinator",
      },
    ],
    faq: [
      {
        question: "Who is eligible to join NSS?",
        answer:
          "Any undergraduate or postgraduate student registered in constituent or affiliated colleges can join.",
      },
      {
        question: "Does NSS give extra credits?",
        answer:
          "NSS participation adds to your extra-curricular record and provides valuable quota points during higher admissions.",
      },
    ],
    contacts: [
      { label: "NSS Program Coordinator", value: "nss@anu.ac.in", href: "mailto:nss@anu.ac.in" },
      ...sharedContacts,
    ],
    supportPanel: {
      availability:
        "NSS coordinators are available from 10:00 AM to 5:00 PM at the student activity block.",
      responseTime: "Enrollment cards are issued within 10 days of registration.",
      bestFor: ["Joining NSS chapters", "Rural camp schedules", "NSS merit certificates"],
      notes: ["Volunteers must log their service hours carefully in the official NSS diary."],
    },
  },
  {
    key: "ncc",
    title: "National Cadet Corps (NCC)",
    shortTitle: "NCC",
    badge: "Discipline",
    description:
      "Providing military training, adventure learning, and disaster management exposure to build character, comradeship, and leadership among students.",
    metrics: [
      { label: "Cadet Capacity", value: "160+", note: "Active boys and girls wings" },
      { label: "Parades/Year", value: "35+", note: "Conducted on university parade grounds" },
      { label: "A, B, C Certs", value: "C-Cert", note: "Highest cadet certification level" },
      { label: "RDC Cadets", value: "Recent", note: "ANU representation in Delhi parades" },
    ],
    highlights: [
      {
        title: "SSB Career Coaching",
        description:
          "Special training for NCC C-certificate holders aiming for direct commission in Armed Forces.",
        tone: "accent",
      },
      {
        title: "Adventure Programs",
        description:
          "Trekking camps, obstacle courses, shooting training, and river rafting expeditions.",
      },
      {
        title: "Parade Ground Training",
        description: "Professional drills and training led by senior military officers and ANOs.",
      },
    ],
    steps: [
      {
        title: "Pass Physical Fitness Trial",
        description:
          "Attend physical endurance and run tests conducted by the NCC unit during induction week.",
      },
      {
        title: "Complete Documentation",
        description:
          "Submit personal profiles, medical fitness certificates, and guardian consent slips.",
      },
      {
        title: "Attend Routine Parades",
        description:
          "Log regular attendance in weekly training parades to qualify for certificate exams.",
      },
    ],
    resources: [
      {
        title: "NCC Cadet Admission Form",
        channel: "NCC Office",
        turnaround: "Induction week",
        requirements: "Physical fitness certificate, class verification card",
      },
      {
        title: "Camp Leave Request Form",
        channel: "ANO Office",
        turnaround: "3 days before camp",
        requirements: "Official camp order copy, alternate academic approvals",
      },
    ],
    faq: [
      {
        question: "Is there a girls' wing in ANU NCC?",
        answer:
          "Yes. ANU has fully integrated wings offering training and camps to both male and female cadets.",
      },
      {
        question: "What benefit does the C-Certificate hold?",
        answer:
          "Cadets securing 'B' grade or higher in C-Certificate are exempt from written exams for direct SSB army commissions.",
      },
    ],
    contacts: [
      {
        label: "Associate NCC Officer (ANO)",
        value: "ncc@anu.ac.in",
        href: "mailto:ncc@anu.ac.in",
      },
      ...sharedContacts,
    ],
    supportPanel: {
      availability: "Parades are held every Saturday from 6:30 AM to 11:30 AM.",
      responseTime: "Induction results are posted within 3 days of fitness trials.",
      bestFor: [
        "NCC selections",
        "Camp schedules (ATC, RDC, TSC)",
        "Armed forces career guidelines",
      ],
      notes: ["Cadets must maintain their uniforms, boots, and drill gear in pristine condition."],
    },
  },
  {
    key: "elc",
    title: "Electoral Literacy Club (ELC)",
    shortTitle: "ELC",
    badge: "Awareness",
    description:
      "Creating awareness about democratic values, voter registration, ethical voting practices, and electoral processes among campus youths.",
    metrics: [
      { label: "Events Organized", value: "8+", note: "Seminars and quiz meets per year" },
      { label: "Voters Registered", value: "600+", note: "New registrations verified annually" },
      { label: "Core Members", value: "40+", note: "Student ambassadors across departments" },
      { label: "Special Day", value: "Jan 25", note: "National Voters Day celebrations" },
    ],
    highlights: [
      {
        title: "Voter Helpdesk Campaigns",
        description:
          "Student ambassadors set up portals to help peers register, download voter slips, and check voter rolls.",
        tone: "success",
      },
      {
        title: "Debates & Quizzes",
        description:
          "Regular inter-departmental speech contests, model parliaments, and essay writing campaigns.",
      },
      {
        title: "Collaborative Focus",
        description:
          "Coordinating directly with Guntur District Election Authority for mock poll training.",
      },
    ],
    steps: [
      {
        title: "Join ELC as Ambassador",
        description: "Register at your department and attend the ELC orientation meet.",
      },
      {
        title: "Register as Voter",
        description:
          "Submit online registrations via Guntur District Voter Portal under ELC guidance.",
      },
      {
        title: "Promote Ethical Voting",
        description:
          "Participate in rallies, street plays, and signature campaigns before general elections.",
      },
    ],
    resources: [
      {
        title: "Voter Registration Guide (Form 6)",
        channel: "ELC Desk / NVSP Portal",
        turnaround: "NVSP timeline",
        requirements: "Address proof, age proof, passport photo",
      },
    ],
    faq: [
      {
        question: "How do I become an ELC student ambassador?",
        answer:
          "ELC selects 2-3 active student representatives from each department based on nominations at the semester start.",
      },
    ],
    contacts: [
      { label: "ELC Nodal Officer", value: "elc@anu.ac.in", href: "mailto:elc@anu.ac.in" },
      ...sharedContacts,
    ],
    supportPanel: {
      availability: "ELC helpdesk runs in the library lobby on select Wednesdays.",
      responseTime: "New registrations take 30-45 days for district office verification.",
      bestFor: [
        "Voter ID corrections and applications",
        "Participating in democracy quizzes",
        "Electoral literacy campaigns",
      ],
      notes: [
        "Voter registration is open to all students aged 18 or above who are Indian citizens.",
      ],
    },
  },
  {
    key: "news",
    title: "Campus News & Announcements",
    shortTitle: "News",
    badge: "Updates",
    description:
      "Chronology of recent announcements, academic press releases, administrative orders, and campus milestones.",
    metrics: [
      { label: "Press Releases", value: "120+", note: "Circulated to regional media annually" },
      { label: "Update Freq", value: "Daily", note: "New notices and events uploaded regularly" },
      { label: "Source", value: "PR Cell", note: "Official media wing of university" },
      { label: "Archived Years", value: "5+", note: "Prior news logs accessible online" },
    ],
    highlights: [
      {
        title: "Official Press Releases",
        description:
          "Verified news drafts detailing research achievements, vice-chancellor statements, and sports medals.",
        tone: "accent",
      },
      {
        title: "Convocation Bulletins",
        description: "Schedule announcements and dress code norms for graduation convocations.",
      },
    ],
    steps: [
      {
        title: "Check News Stream",
        description:
          "Visit the central news portal regularly to avoid missing important event alerts.",
      },
    ],
    resources: [
      {
        title: "ANU Monthly Newsletter",
        channel: "PR Cell Office",
        turnaround: "Monthly",
        requirements: "None",
      },
    ],
    faq: [
      {
        question: "Where can I submit department news?",
        answer:
          "Department coordinators should email approved reports and photographs to press@anu.ac.in for newsletter inclusion.",
      },
    ],
    contacts: [
      {
        label: "Public Relations Officer (PRO)",
        value: "press@anu.ac.in",
        href: "mailto:press@anu.ac.in",
      },
      ...sharedContacts,
    ],
    supportPanel: {
      availability: "The media office is active during standard administrative hours.",
      responseTime: "News updates are reviewed and uploaded within 24-48 hours.",
      bestFor: [
        "Submitting event coverage",
        "Official press clarifications",
        "Newsletter archiving",
      ],
      notes: [
        "All news reports must be authenticated by the respective HOD or Dean prior to submission.",
      ],
    },
  },
  {
    key: "events",
    title: "Campus Events & Culture",
    shortTitle: "Events",
    badge: "Culture",
    description:
      "Vibrant details of youth festivals, national seminars, international conferences, and departmental cultural clubs.",
    metrics: [
      { label: "Youth Festivals", value: "2", note: "Inter-collegiate events annually" },
      { label: "Seminars hosted", value: "30+", note: "Across departments each year" },
      { label: "Auditoriums", value: "3", note: "Dr. H.H. Deichmann and open-air arenas" },
      { label: "Cultural clubs", value: "6+", note: "Drama, music, photography, literature" },
    ],
    highlights: [
      {
        title: "Dr. H.H. Deichmann Auditorium",
        description:
          "A centralized, fully air-conditioned auditorium hosting major academic and cultural convocations.",
        tone: "accent",
      },
      {
        title: "Inter-Collegiate Youth Fest",
        description:
          "Annual cultural competition gathering over 1500 participants across Guntur and Prakasam districts.",
      },
    ],
    steps: [
      {
        title: "Select Club/Event",
        description: "Review upcoming activities in the cultural event stream.",
      },
      {
        title: "Submit Registration",
        description: "Join as participant or organizer via student union coordinators.",
      },
    ],
    resources: [
      {
        title: "Cultural Club Enrolment Form",
        channel: "Student Affairs Office",
        turnaround: "Semester start",
        requirements: "Student ID card",
      },
    ],
    faq: [
      {
        question: "How do I book an auditorium for departmental seminars?",
        answer:
          "Submit reservation requests endorsed by your Dean/Principal to the Registrar Office at least 15 days in advance.",
      },
    ],
    contacts: [
      {
        label: "Dean of Student Affairs",
        value: "dean_student@anu.ac.in",
        href: "mailto:dean_student@anu.ac.in",
      },
      ...sharedContacts,
    ],
    supportPanel: {
      availability: "Cultural clubs coordinate meetings during evening hours (4:30 PM - 6:00 PM).",
      responseTime: "Auditorium booking approvals take 7-10 working days.",
      bestFor: [
        "Registering for youth fests",
        "Booking event venues",
        "Joining cultural student clubs",
      ],
      notes: ["Events must maintain silence in surrounding library and examination zones."],
    },
  },
  {
    key: "anu-radio-91-2",
    title: "ANU Radio 91.2 FM",
    shortTitle: "ANU Radio",
    badge: "Media",
    description:
      "ANU Community Radio station broadcasting educational talks, youth development content, health awareness, and traditional songs to nearby villages.",
    metrics: [
      { label: "Frequency", value: "91.2 MHz", note: "Authorized FM community band" },
      { label: "Broadcast Range", value: "15 km", note: "Covers Nagarjuna Nagar and Guntur outer" },
      { label: "Daily Shows", value: "6 Hours", note: "Educational and cultural programming" },
      { label: "Student Hosts", value: "25+", note: "RJs and voice-over creators" },
    ],
    highlights: [
      {
        title: "Community Outreach",
        description:
          "Broadcasting crucial agricultural guidelines, rural health initiatives, and weather bulletins.",
        tone: "success",
      },
      {
        title: "Student Voice Platform",
        description:
          "Providing opportunities for students to act as RJs, script writers, and audio editors.",
      },
      {
        title: "Digital Recording Studio",
        description:
          "Advanced audio mixing consoles, soundproof recording booths, and digital editing suites.",
      },
    ],
    steps: [
      {
        title: "Apply for Voice Trial",
        description:
          "Register for announcer auditions at the ANU Radio studio during induction weeks.",
      },
      {
        title: "Record Script Draft",
        description:
          "Prepare and record educational or campus news scripts under coordinator mentorship.",
      },
    ],
    resources: [
      {
        title: "Radio Intern Request",
        channel: "Radio Station Block",
        turnaround: "Semester-wise",
        requirements: "Communication background or domain interest, sample script",
      },
    ],
    faq: [
      {
        question: "Can I host a show on ANU Radio?",
        answer:
          "Yes, students with good communication skills and script ideas are selected as RJs after a voice test.",
      },
    ],
    contacts: [
      { label: "Radio Station Manager", value: "radio@anu.ac.in", href: "mailto:radio@anu.ac.in" },
      ...sharedContacts,
    ],
    supportPanel: {
      availability: "The radio studio is open from 9:30 AM to 5:30 PM on workdays.",
      responseTime: "Voice trial schedules are announced within 5 days of submission.",
      bestFor: ["RJ auditions", "Proposing educational programs", "Studio visit coordinates"],
      notes: [
        "Broadcast scripts must be approved by the station manager and avoid politically sensitive subjects.",
      ],
    },
  },
  {
    key: "herbal-garden",
    title: "Botanical & Herbal Garden",
    shortTitle: "Herbal Garden",
    badge: "Eco",
    description:
      "A specialized biological conservation zone housing rare medicinal plants, taxons, and local flora to support botanical research and environmental wellness.",
    metrics: [
      { label: "Plant Species", value: "350+", note: "Rare medicinal and aromatic shrubs" },
      { label: "Greenhouse", value: "1", note: "Maintained climate for delicate specimens" },
      { label: "Academic Visits", value: "20+", note: "Schools and researcher tours annually" },
      { label: "Garden Area", value: "5 Ac", note: "Dedicated biological park zone" },
    ],
    highlights: [
      {
        title: "Rare Taxon Preservation",
        description:
          "Conserving endangered plants and local medicinal species for research reference.",
        tone: "success",
      },
      {
        title: "Bio-Research Field",
        description:
          "Practical field training and research plot allocation for Botany and Biotechnology students.",
      },
    ],
    steps: [
      {
        title: "Request Visit Permit",
        description:
          "Academic classes or external groups must request visiting permits at the Botany department.",
      },
    ],
    resources: [
      {
        title: "Plant Taxonomy Catalog",
        channel: "Botany Dept Office",
        turnaround: "Immediate",
        requirements: "None",
      },
    ],
    faq: [
      {
        question: "Is the Herbal Garden open to general public?",
        answer:
          "Yes, visitors are allowed during morning and evening hours under guided pathways, provided they respect the biological conservation rules.",
      },
    ],
    contacts: [
      { label: "Botany Dept Head", value: "botany@anu.ac.in", href: "mailto:botany@anu.ac.in" },
      ...sharedContacts,
    ],
    supportPanel: {
      availability: "Open daily from 6:00 AM to 9:00 AM, and 4:00 PM to 6:00 PM.",
      responseTime: "Group visit approvals take 2 working days.",
      bestFor: ["Medicinal plant identification", "Botanical research plots", "Eco-wellness walks"],
      notes: [
        "Plucking leaves, flowers, or damaging labels is strictly prohibited and attracts fines.",
      ],
    },
  },
];

export function getCampusLifeTab(pageId?: string): CampusLifeTab {
  const resolved = pageId ? campusLifePageAliases[pageId] || pageId : "overview";
  const found = campusLifeTabs.find((t) => t.key === resolved);
  return found || campusLifeTabs[0];
}
