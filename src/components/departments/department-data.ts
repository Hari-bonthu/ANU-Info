import {
  Brain,
  BriefcaseBusiness,
  Building2,
  Code2,
  Cpu,
  Database,
  FlaskConical,
  GraduationCap,
  Lightbulb,
  Microscope,
  Network,
  Rocket,
  ScrollText,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type DepartmentCardItem = {
  title: string;
  text: string;
  icon: LucideIcon;
};
export type ProgramItem = {
  name: string;
  duration: string;
  description: string;
};

export type FacultyItem = {
  name: string;
  role: string;
  focus: string;
};

export type FacilityItem = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export type ResearchFocusItem = {
  title: string;
  text: string;
  icon: LucideIcon;
  lead: string;
  projects: string;
};

export type UpdateItem = {
  date: string;
  title: string;
  tag: string;
};
export type DepartmentPageData = {
  id: string;
  slug: string;
  name: string;
  shortName?: string;
  purpose: string;
  heroLine: string;
  heroImage: string;
  college: string;
  imageLabel: string;
  learning: DepartmentCardItem[];
  programs: ProgramItem[];
  skills: DepartmentCardItem[];
  facilities: FacilityItem[];
  faculty: FacultyItem[];
  researchFocus: ResearchFocusItem[];
  careers: DepartmentCardItem[];
  updates: UpdateItem[];
};

export const departmentPages: Record<string, DepartmentPageData> = {
  // ─── ENGINEERING ────────────────────────────────────────────────────────────

  "computer-science-and-engineering": {
    id: "computer-science-and-engineering",
    slug: "computer-science-and-engineering",
    name: "Department of Computer Science and Engineering",
    shortName: "CSE Department",
    purpose: "Designing practical, reliable and intelligent digital systems.",
    heroLine: "Building intelligent systems for tomorrow",
    heroImage: "/departments/cse.jpg",
    college: "ANU College of Sciences",
    imageLabel: "CSE Department",
    learning: [
      {
        title: "Programming & Problem Solving",
        text: "Write clean code and reason through computational problems.",
        icon: Code2,
      },
      {
        title: "AI & Machine Learning",
        text: "Apply intelligent models to real-world systems.",
        icon: Brain,
      },
    ],
    programs: [
      {
        name: "MCA",
        duration: "2 Years",
        description:
          "Postgraduate program in software engineering, data structures, web technologies, cloud fundamentals and application development.",
      },
      {
        name: "M.Sc Computer Science",
        duration: "2 Years",
        description:
          "Postgraduate program covering advanced algorithms, operating systems, database systems, distributed computing and machine learning foundations.",
      },
      {
        name: "M.Sc Data Science",
        duration: "2 Years",
        description:
          "Postgraduate specialization in statistics, predictive modelling, big data processing and applied analytics for industry and research.",
      },
    ],
    skills: [
      {
        title: "Industry-ready Coding",
        text: "Use modern development tools, frameworks and CI/CD workflows.",
        icon: Code2,
      },
      {
        title: "Data Analysis",
        text: "Work with large datasets and extract actionable insights.",
        icon: Database,
      },
    ],
    facilities: [
      {
        title: "Programming Labs",
        text: "High-spec workstations with the latest development environments and cloud access.",
        icon: Code2,
      },
      {
        title: "AI & Data Science Lab",
        text: "GPU-enabled lab for deep learning, model training and data visualisation.",
        icon: Brain,
      },
    ],
    faculty: [
      {
        name: "Prof. V. Ramachandra Rao",
        role: "Professor & Head",
        focus: "Algorithms and Software Systems",
      },
    ],
    researchFocus: [
      {
        title: "Artificial Intelligence",
        text: "Research in machine learning, NLP and intelligent systems.",
        icon: Brain,
        lead: "Prof. V. Ramachandra Rao",
        projects: "3 active projects",
      },
    ],
    careers: [
      {
        title: "Software Engineer",
        text: "Build modern applications and scalable digital platforms.",
        icon: Code2,
      },
      {
        title: "Data Scientist",
        text: "Analyse complex datasets and build predictive models.",
        icon: Database,
      },
    ],
    updates: [
      { date: "May 12", title: "Department seminar schedule released for 2025–26", tag: "NEW" },
    ],
  },

  "mechanical-engineering": {
    id: "mechanical-engineering",
    slug: "mechanical-engineering",
    name: "Department of Mechanical Engineering",
    shortName: "Mechanical Department",
    purpose: "Building engineering excellence in manufacturing and mechanical systems.",
    heroLine: "Driving innovation through mechanical engineering",
    heroImage: "/departments/mechanical.jpg",
    college: "ANU College of Engineering & Technology",
    imageLabel: "Mechanical Engineering",
    learning: [
      {
        title: "Machine Design",
        text: "Design and analyse mechanical components and assemblies.",
        icon: Cpu,
      },
      {
        title: "Thermal Sciences",
        text: "Study heat transfer, thermodynamics and fluid mechanics.",
        icon: Lightbulb,
      },
    ],
    programs: [
      {
        name: "B.Tech Mechanical Engineering",
        duration: "4 Years",
        description:
          "Undergraduate program covering machine design, manufacturing, thermodynamics and materials science.",
      },
    ],
    skills: [
      {
        title: "Industrial Design",
        text: "Apply CAD tools and engineering analysis to real-world mechanical systems.",
        icon: Lightbulb,
      },
      {
        title: "Manufacturing Processes",
        text: "Understand CNC machining, casting, welding and modern production techniques.",
        icon: Cpu,
      },
    ],
    facilities: [
      {
        title: "Mechanical Workshop",
        text: "Fully equipped workshop for machining, welding and fabrication training.",
        icon: Building2,
      },
      {
        title: "Thermal Lab",
        text: "Experimental setups for heat exchangers, IC engines and refrigeration.",
        icon: FlaskConical,
      },
    ],
    faculty: [{ name: "Prof. K. Raghava", role: "Professor & Head", focus: "Thermal Engineering" }],
    researchFocus: [
      {
        title: "Advanced Manufacturing",
        text: "Research in modern production technologies and materials.",
        icon: Cpu,
        lead: "Prof. K. Raghava",
        projects: "2 active projects",
      },
    ],
    careers: [
      {
        title: "Mechanical Engineer",
        text: "Design and develop industrial mechanical systems and components.",
        icon: Cpu,
      },
      {
        title: "Production Engineer",
        text: "Optimise manufacturing lines and implement lean processes.",
        icon: Building2,
      },
    ],
    updates: [
      { date: "May 09", title: "Industrial visit schedule released for 2025–26", tag: "NOTICE" },
    ],
  },

  "electronics-and-communication-engineering": {
    id: "electronics-and-communication-engineering",
    slug: "electronics-and-communication-engineering",
    name: "Department of Electronics and Communication Engineering",
    shortName: "ECE Department",
    purpose: "Advancing communication systems and electronic circuit design.",
    heroLine: "Connecting the world through intelligent electronics",
    heroImage: "/departments/ece.jpg",
    college: "ANU College of Engineering & Technology",
    imageLabel: "ECE Department",
    learning: [
      {
        title: "Circuit Design",
        text: "Design and analyse analog and digital electronic circuits.",
        icon: Network,
      },
      {
        title: "Communication Systems",
        text: "Understand signal processing, wireless and optical communications.",
        icon: Rocket,
      },
    ],
    programs: [
      {
        name: "B.Tech Electronics and Communication Engineering",
        duration: "4 Years",
        description:
          "Undergraduate program covering analog/digital electronics, communication systems, VLSI design and embedded systems.",
      },
    ],
    skills: [
      {
        title: "Embedded Systems",
        text: "Programme microcontrollers and design real-time embedded applications.",
        icon: Cpu,
      },
      {
        title: "Signal Processing",
        text: "Apply DSP algorithms to audio, image and communication signals.",
        icon: Network,
      },
    ],
    facilities: [
      {
        title: "Electronics Lab",
        text: "Benches equipped with oscilloscopes, function generators and PCB prototyping tools.",
        icon: Network,
      },
      {
        title: "VLSI & Simulation Lab",
        text: "Cadence and Xilinx environments for IC and FPGA design.",
        icon: Code2,
      },
    ],
    faculty: [
      {
        name: "Prof. S. Venkata Krishna",
        role: "Professor & Head",
        focus: "Signal Processing and Communications",
      },
    ],
    researchFocus: [
      {
        title: "Wireless Communications",
        text: "Research in 5G systems, antenna arrays and spectrum management.",
        icon: Network,
        lead: "Prof. S. Venkata Krishna",
        projects: "2 active projects",
      },
    ],
    careers: [
      {
        title: "Electronics Engineer",
        text: "Design circuits, PCBs and embedded systems for industry.",
        icon: Cpu,
      },
      {
        title: "Communication Systems Engineer",
        text: "Build and maintain wireless and satellite communication infrastructure.",
        icon: Network,
      },
    ],
    updates: [{ date: "May 07", title: "VLSI Design workshop registrations open", tag: "NEW" }],
  },

  "civil-engineering": {
    id: "civil-engineering",
    slug: "civil-engineering",
    name: "Department of Civil Engineering",
    shortName: "Civil Department",
    purpose: "Building sustainable infrastructure for a growing nation.",
    heroLine: "Shaping the built environment with engineering precision",
    heroImage: "/departments/civil.jpg",
    college: "ANU College of Engineering & Technology",
    imageLabel: "Civil Engineering",
    learning: [
      {
        title: "Structural Analysis",
        text: "Analyse loads, stresses and deformations in structures.",
        icon: Building2,
      },
      {
        title: "Environmental Engineering",
        text: "Design systems for water supply, sanitation and waste management.",
        icon: FlaskConical,
      },
    ],
    programs: [
      {
        name: "B.Tech Civil Engineering",
        duration: "4 Years",
        description:
          "Undergraduate program in structural engineering, geotechnics, transportation, water resources and construction management.",
      },
    ],
    skills: [
      {
        title: "AutoCAD & Structural Design",
        text: "Use design software to plan and evaluate civil infrastructure.",
        icon: Building2,
      },
      {
        title: "Site Management",
        text: "Coordinate construction activities, safety and quality on site.",
        icon: Lightbulb,
      },
    ],
    facilities: [
      {
        title: "Structural Lab",
        text: "Compressive strength, UTM and non-destructive testing equipment.",
        icon: Building2,
      },
      {
        title: "Geotechnical Lab",
        text: "Soil classification, consolidation and shear strength testing setups.",
        icon: FlaskConical,
      },
    ],
    faculty: [
      { name: "Prof. B. Ranga Rao", role: "Professor & Head", focus: "Structural Engineering" },
    ],
    researchFocus: [
      {
        title: "Earthquake Resistant Design",
        text: "Research in seismic analysis and retrofitting of structures.",
        icon: Building2,
        lead: "Prof. B. Ranga Rao",
        projects: "2 active projects",
      },
    ],
    careers: [
      {
        title: "Structural Engineer",
        text: "Design and supervise construction of buildings and bridges.",
        icon: Building2,
      },
      {
        title: "Site/Project Engineer",
        text: "Manage civil infrastructure projects from planning to delivery.",
        icon: Lightbulb,
      },
    ],
    updates: [
      { date: "May 05", title: "AutoCAD and STAAD training programme announced", tag: "NEW" },
    ],
  },

  "electrical-and-electronics-engineering": {
    id: "electrical-and-electronics-engineering",
    slug: "electrical-and-electronics-engineering",
    name: "Department of Electrical and Electronics Engineering",
    shortName: "EEE Department",
    purpose: "Powering the future through electrical systems and smart grids.",
    heroLine: "Engineering the power systems of tomorrow",
    heroImage: "/departments/eee.jpg",
    college: "ANU College of Engineering & Technology",
    imageLabel: "EEE Department",
    learning: [
      {
        title: "Power Systems",
        text: "Study generation, transmission and distribution of electrical energy.",
        icon: Cpu,
      },
      {
        title: "Control Systems",
        text: "Design and analyse feedback control loops for industrial automation.",
        icon: Network,
      },
    ],
    programs: [
      {
        name: "B.Tech Electrical and Electronics Engineering",
        duration: "4 Years",
        description:
          "Undergraduate program covering power systems, electrical machines, control systems and power electronics.",
      },
    ],
    skills: [
      {
        title: "Electrical Machine Design",
        text: "Analyse transformers, motors and generators for industrial use.",
        icon: Cpu,
      },
      {
        title: "Power Electronics",
        text: "Design converters, inverters and drives for modern power systems.",
        icon: Lightbulb,
      },
    ],
    facilities: [
      {
        title: "Electrical Machines Lab",
        text: "Experimental setups for DC and AC machines, transformers and drives.",
        icon: Cpu,
      },
      {
        title: "Power Electronics Lab",
        text: "Converter, inverter and PLC simulation benches.",
        icon: Network,
      },
    ],
    faculty: [
      {
        name: "Prof. R. Srinivasa Rao",
        role: "Professor & Head",
        focus: "Power Systems and Smart Grids",
      },
    ],
    researchFocus: [
      {
        title: "Renewable Energy Integration",
        text: "Research in solar, wind and smart grid technologies.",
        icon: Rocket,
        lead: "Prof. R. Srinivasa Rao",
        projects: "2 active projects",
      },
    ],
    careers: [
      {
        title: "Power Systems Engineer",
        text: "Design and operate electrical power networks and substations.",
        icon: Cpu,
      },
      {
        title: "Automation Engineer",
        text: "Implement control systems and automation in manufacturing.",
        icon: Network,
      },
    ],
    updates: [
      { date: "May 03", title: "Renewable energy lab inauguration scheduled", tag: "NOTICE" },
    ],
  },

  // ─── SCIENCES ────────────────────────────────────────────────────────────────

  physics: {
    id: "physics",
    slug: "physics",
    name: "Department of Physics",
    shortName: "Physics",
    purpose: "Exploring the fundamental laws of nature through experiment and theory.",
    heroLine: "Unravelling the universe one experiment at a time",
    heroImage: "/departments/physics.jpg",
    college: "ANU College of Sciences",
    imageLabel: "Physics Department",
    learning: [
      {
        title: "Quantum Mechanics",
        text: "Understand the behaviour of matter at atomic and subatomic scales.",
        icon: Microscope,
      },
      {
        title: "Condensed Matter Physics",
        text: "Study solid-state systems, semiconductors and nanomaterials.",
        icon: FlaskConical,
      },
    ],
    programs: [
      {
        name: "M.Sc Physics",
        duration: "2 Years",
        description:
          "Postgraduate program covering classical mechanics, quantum physics, electrodynamics, statistical mechanics and spectroscopy. Admission via AP PGCET.",
      },
      {
        name: "Ph.D Physics",
        duration: "3–5 Years",
        description:
          "Research in condensed matter, nuclear physics, laser spectroscopy, nanotechnology and astrophysics.",
      },
    ],
    skills: [
      {
        title: "Experimental Physics",
        text: "Operate spectroscopy, optics and vacuum instruments.",
        icon: Microscope,
      },
      {
        title: "Computational Modelling",
        text: "Simulate physical systems using numerical methods.",
        icon: Code2,
      },
    ],
    facilities: [
      {
        title: "Advanced Physics Lab",
        text: "Setups for optics, spectroscopy, X-ray diffraction and low-temperature experiments.",
        icon: FlaskConical,
      },
      {
        title: "Computational Physics Lab",
        text: "Workstations with MATLAB, Python and simulation software.",
        icon: Code2,
      },
    ],
    faculty: [
      {
        name: "Prof. G. Nageswara Rao",
        role: "Professor & Head",
        focus: "Condensed Matter Physics",
      },
    ],
    researchFocus: [
      {
        title: "Nanomaterials and Thin Films",
        text: "Synthesis and characterisation of nano-scale materials for device applications.",
        icon: Microscope,
        lead: "Prof. G. Nageswara Rao",
        projects: "2 active projects",
      },
    ],
    careers: [
      {
        title: "Research Scientist",
        text: "Conduct experiments and publish research in national and international journals.",
        icon: Microscope,
      },
      {
        title: "Academic / Lecturer",
        text: "Teach physics at college and university level.",
        icon: GraduationCap,
      },
    ],
    updates: [
      {
        date: "Apr 30",
        title: "National seminar on condensed matter physics announced",
        tag: "NEW",
      },
    ],
  },

  chemistry: {
    id: "chemistry",
    slug: "chemistry",
    name: "Department of Chemistry",
    shortName: "Chemistry",
    purpose: "Advancing chemical knowledge from molecules to materials.",
    heroLine: "From atoms to applications — chemistry at its core",
    heroImage: "/departments/chemistry.jpg",
    college: "ANU College of Sciences",
    imageLabel: "Chemistry Department",
    learning: [
      {
        title: "Organic & Inorganic Chemistry",
        text: "Study reaction mechanisms, synthesis and properties of compounds.",
        icon: FlaskConical,
      },
      {
        title: "Analytical Techniques",
        text: "Master chromatography, spectroscopy and electrochemical methods.",
        icon: Microscope,
      },
    ],
    programs: [
      {
        name: "M.Sc Chemistry",
        duration: "2 Years",
        description:
          "Postgraduate program in organic, inorganic, physical and analytical chemistry with laboratory practicals. Admission via AP PGCET.",
      },
      {
        name: "Ph.D Chemistry",
        duration: "3–5 Years",
        description:
          "Research in synthetic chemistry, materials, catalysis, environmental chemistry and pharmaceutical applications.",
      },
    ],
    skills: [
      {
        title: "Laboratory Techniques",
        text: "Conduct synthesis, titration, chromatography and spectroscopic analysis.",
        icon: FlaskConical,
      },
      {
        title: "Chemical Safety",
        text: "Handle hazardous materials following standard laboratory protocols.",
        icon: ShieldCheck,
      },
    ],
    facilities: [
      {
        title: "Organic Chemistry Lab",
        text: "Equipped for synthesis, reflux and distillation experiments.",
        icon: FlaskConical,
      },
      {
        title: "Instrumentation Lab",
        text: "UV-Vis, IR, AAS and HPLC instruments for advanced analysis.",
        icon: Microscope,
      },
    ],
    faculty: [
      {
        name: "Prof. T. Srinivas",
        role: "Professor & Head",
        focus: "Organic and Medicinal Chemistry",
      },
    ],
    researchFocus: [
      {
        title: "Green Chemistry & Catalysis",
        text: "Research in sustainable synthesis routes and heterogeneous catalysts.",
        icon: FlaskConical,
        lead: "Prof. T. Srinivas",
        projects: "3 active projects",
      },
    ],
    careers: [
      {
        title: "Chemist / Analyst",
        text: "Work in quality control, R&D and testing in pharmaceutical or chemical industries.",
        icon: FlaskConical,
      },
      {
        title: "Research Scientist",
        text: "Pursue fundamental or applied research in chemistry.",
        icon: Microscope,
      },
    ],
    updates: [
      {
        date: "Apr 25",
        title: "Research publications from Chemistry dept recognised nationally",
        tag: "NOTICE",
      },
    ],
  },

  mathematics: {
    id: "mathematics",
    slug: "mathematics",
    name: "Department of Mathematics",
    shortName: "Mathematics",
    purpose: "Building rigorous analytical and problem-solving foundations.",
    heroLine: "The language of the universe — studied with precision",
    heroImage: "/departments/mathematics.jpg",
    college: "ANU College of Sciences",
    imageLabel: "Mathematics Department",
    learning: [
      {
        title: "Pure Mathematics",
        text: "Study algebra, analysis, topology and number theory.",
        icon: ScrollText,
      },
      {
        title: "Applied Mathematics",
        text: "Model real-world phenomena using differential equations and optimisation.",
        icon: Network,
      },
    ],
    programs: [
      {
        name: "M.Sc Mathematics",
        duration: "2 Years",
        description:
          "Postgraduate program covering real analysis, algebra, topology, numerical methods and mathematical statistics. Admission via AP PGCET.",
      },
      {
        name: "Ph.D Mathematics",
        duration: "3–5 Years",
        description:
          "Research in pure and applied mathematics including fluid dynamics, graph theory, cryptography and functional analysis.",
      },
    ],
    skills: [
      {
        title: "Mathematical Modelling",
        text: "Formulate and solve complex real-world problems mathematically.",
        icon: Network,
      },
      {
        title: "Computational Methods",
        text: "Implement numerical algorithms using Python and MATLAB.",
        icon: Code2,
      },
    ],
    facilities: [
      {
        title: "Computer Lab",
        text: "Workstations with MATLAB, Python and statistical computing software.",
        icon: Code2,
      },
      {
        title: "Seminar Room",
        text: "Dedicated space for colloquia, workshops and student presentations.",
        icon: Users,
      },
    ],
    faculty: [
      {
        name: "Prof. K. Srinivasa Rao",
        role: "Professor & Head",
        focus: "Differential Equations and Fluid Dynamics",
      },
    ],
    researchFocus: [
      {
        title: "Graph Theory and Combinatorics",
        text: "Research in network structures, algorithms and combinatorial optimisation.",
        icon: Network,
        lead: "Prof. K. Srinivasa Rao",
        projects: "2 active projects",
      },
    ],
    careers: [
      {
        title: "Data Analyst / Actuary",
        text: "Apply mathematical models in finance, insurance and data science.",
        icon: Database,
      },
      {
        title: "Academic / Lecturer",
        text: "Teach mathematics at college and university level.",
        icon: GraduationCap,
      },
    ],
    updates: [{ date: "Apr 28", title: "Maths olympiad coaching sessions begin", tag: "NEW" }],
  },

  statistics: {
    id: "statistics",
    slug: "statistics",
    name: "Department of Statistics",
    shortName: "Statistics",
    purpose: "Turning data into knowledge through rigorous statistical science.",
    heroLine: "Making sense of data — one distribution at a time",
    heroImage: "/departments/statistics.jpg",
    college: "ANU College of Sciences",
    imageLabel: "Statistics Department",
    learning: [
      {
        title: "Probability Theory",
        text: "Understand distributions, random variables and stochastic processes.",
        icon: Network,
      },
      {
        title: "Statistical Inference",
        text: "Apply estimation, hypothesis testing and regression to real data.",
        icon: Database,
      },
    ],
    programs: [
      {
        name: "M.Sc Statistics",
        duration: "2 Years",
        description:
          "Postgraduate program covering probability, mathematical statistics, design of experiments, regression and time series analysis. Admission via AP PGCET.",
      },
      {
        name: "Ph.D Statistics",
        duration: "3–5 Years",
        description:
          "Research in biostatistics, reliability theory, multivariate analysis, Bayesian inference and statistical computing.",
      },
    ],
    skills: [
      {
        title: "Statistical Computing",
        text: "Analyse datasets using R, SPSS and Python libraries.",
        icon: Code2,
      },
      {
        title: "Survey Design",
        text: "Plan and execute sampling surveys and interpret results.",
        icon: ScrollText,
      },
    ],
    facilities: [
      {
        title: "Statistical Computing Lab",
        text: "Workstations with R, SPSS, SAS and Python for data analysis.",
        icon: Code2,
      },
    ],
    faculty: [
      {
        name: "Prof. M. Bhaskara Rao",
        role: "Professor & Head",
        focus: "Multivariate Analysis and Reliability",
      },
    ],
    researchFocus: [
      {
        title: "Biostatistics and Clinical Trials",
        text: "Statistical methods for medical data analysis and clinical research.",
        icon: Microscope,
        lead: "Prof. M. Bhaskara Rao",
        projects: "2 active projects",
      },
    ],
    careers: [
      {
        title: "Statistician / Data Analyst",
        text: "Analyse data in pharma, government, finance and research institutions.",
        icon: Database,
      },
      {
        title: "Research Officer",
        text: "Design surveys and interpret data for policy and academic research.",
        icon: ScrollText,
      },
    ],
    updates: [
      {
        date: "Apr 20",
        title: "Workshop on R programming and data visualisation announced",
        tag: "NEW",
      },
    ],
  },

  "bio-technology": {
    id: "bio-technology",
    slug: "bio-technology",
    name: "Department of Bio Technology",
    shortName: "Biotechnology",
    purpose: "Harnessing biological systems for innovation in health, food and environment.",
    heroLine: "Life science meets engineering — biotechnology at ANU",
    heroImage: "/departments/biotechnology.jpg",
    college: "ANU College of Sciences",
    imageLabel: "Biotechnology Department",
    learning: [
      {
        title: "Molecular Biology",
        text: "Study DNA, RNA, gene expression and molecular mechanisms of life.",
        icon: Microscope,
      },
      {
        title: "Genetic Engineering",
        text: "Learn recombinant DNA technology, cloning and gene editing techniques.",
        icon: FlaskConical,
      },
    ],
    programs: [
      {
        name: "M.Sc Biotechnology",
        duration: "2 Years",
        description:
          "Postgraduate program in molecular biology, cell biology, microbiology, immunology and genetic engineering. Admission via AP PGCET.",
      },
      {
        name: "M.Tech Biotechnology",
        duration: "2 Years",
        description:
          "Engineering-oriented postgraduate program covering bioprocess engineering, bioinformatics and pharmaceutical biotechnology.",
      },
      {
        name: "Ph.D Biotechnology",
        duration: "3–5 Years",
        description:
          "Research in genomics, proteomics, nanobiotechnology, agricultural biotechnology and bioremediation.",
      },
    ],
    skills: [
      {
        title: "Laboratory Techniques",
        text: "PCR, gel electrophoresis, cell culture and ELISA protocols.",
        icon: FlaskConical,
      },
      {
        title: "Bioinformatics",
        text: "Analyse biological sequences and structural data using computational tools.",
        icon: Code2,
      },
    ],
    facilities: [
      {
        title: "Molecular Biology Lab",
        text: "PCR, gel documentation, laminar flow hoods and centrifuges.",
        icon: FlaskConical,
      },
      {
        title: "Tissue Culture Lab",
        text: "Plant and animal cell culture facilities with CO₂ incubators.",
        icon: Microscope,
      },
    ],
    faculty: [
      {
        name: "Prof. P. Siva Prasad",
        role: "Professor & Head",
        focus: "Molecular Biology and Genomics",
      },
    ],
    researchFocus: [
      {
        title: "Nanobiotechnology",
        text: "Development of nano-carriers for drug delivery and diagnostics.",
        icon: Microscope,
        lead: "Prof. P. Siva Prasad",
        projects: "3 active projects",
      },
    ],
    careers: [
      {
        title: "Research Scientist",
        text: "Work in biotech and pharma R&D on drug discovery and diagnostics.",
        icon: Microscope,
      },
      {
        title: "Bioprocess Engineer",
        text: "Design and scale fermentation and downstream bioprocessing units.",
        icon: FlaskConical,
      },
    ],
    updates: [
      { date: "May 01", title: "State-level biotechnology symposium hosted by ANU", tag: "NEW" },
    ],
  },

  "bio-chemistry": {
    id: "bio-chemistry",
    slug: "bio-chemistry",
    name: "Department of Bio Chemistry",
    shortName: "Biochemistry",
    purpose: "Exploring life at the molecular and biochemical level.",
    heroLine: "Chemistry of life — decoded in our labs",
    heroImage: "/departments/biochemistry.jpg",
    college: "ANU College of Sciences",
    imageLabel: "Biochemistry Department",
    learning: [
      {
        title: "Enzymology",
        text: "Study enzyme kinetics, mechanisms and industrial applications.",
        icon: FlaskConical,
      },
      {
        title: "Metabolism",
        text: "Understand carbohydrate, lipid, protein and nucleic acid metabolism.",
        icon: Microscope,
      },
    ],
    programs: [
      {
        name: "M.Sc Biochemistry",
        duration: "2 Years",
        description:
          "Postgraduate program in biochemistry covering metabolism, enzymology, molecular biology, clinical biochemistry and biotechnology. Admission via AP PGCET.",
      },
      {
        name: "Ph.D Biochemistry",
        duration: "3–5 Years",
        description:
          "Research in structural biochemistry, clinical and medical biochemistry, bioinformatics and protein engineering.",
      },
    ],
    skills: [
      {
        title: "Spectroscopic Analysis",
        text: "Use UV-Vis, fluorescence and NMR spectroscopy for biochemical assays.",
        icon: Microscope,
      },
      {
        title: "Clinical Biochemistry",
        text: "Perform diagnostic tests for metabolic and disease-related parameters.",
        icon: ShieldCheck,
      },
    ],
    facilities: [
      {
        title: "Biochemistry Research Lab",
        text: "UV-Vis spectrophotometer, HPLC and centrifuge equipment.",
        icon: FlaskConical,
      },
    ],
    faculty: [
      {
        name: "Prof. V. Umamaheswara Rao",
        role: "Professor & Head",
        focus: "Clinical Biochemistry and Enzymology",
      },
    ],
    researchFocus: [
      {
        title: "Metabolic Diseases",
        text: "Biochemical basis of diabetes, cardiovascular and neurological disorders.",
        icon: Microscope,
        lead: "Prof. V. Umamaheswara Rao",
        projects: "2 active projects",
      },
    ],
    careers: [
      {
        title: "Clinical Biochemist",
        text: "Work in hospitals and diagnostic labs on metabolic and disease testing.",
        icon: ShieldCheck,
      },
      {
        title: "Research Associate",
        text: "Support biochemistry research in academia and biotech companies.",
        icon: Microscope,
      },
    ],
    updates: [
      {
        date: "Apr 18",
        title: "Workshop on clinical diagnostic techniques conducted",
        tag: "NOTICE",
      },
    ],
  },

  "botany-and-microbiology": {
    id: "botany-and-microbiology",
    slug: "botany-and-microbiology",
    name: "Department of Botany and Microbiology",
    shortName: "Botany & Microbiology",
    purpose: "Studying plant life and microbial systems for science and sustainability.",
    heroLine: "From cells to ecosystems — understanding life in all its forms",
    heroImage: "/departments/botany.jpg",
    college: "ANU College of Sciences",
    imageLabel: "Botany & Microbiology",
    learning: [
      {
        title: "Plant Biology",
        text: "Study plant anatomy, physiology, taxonomy and ecology.",
        icon: FlaskConical,
      },
      {
        title: "Microbiology",
        text: "Understand bacteria, fungi, viruses and their applications.",
        icon: Microscope,
      },
    ],
    programs: [
      {
        name: "M.Sc Botany",
        duration: "2 Years",
        description:
          "Postgraduate program covering plant systematics, physiology, genetics, ecology and economic botany. Admission via AP PGCET.",
      },
      {
        name: "M.Sc Microbiology",
        duration: "2 Years",
        description:
          "Postgraduate program in bacteriology, virology, mycology, immunology and industrial microbiology. Admission via AP PGCET.",
      },
      {
        name: "Ph.D Botany",
        duration: "3–5 Years",
        description:
          "Research in plant biotechnology, ethnobotany, phytochemistry, algology and environmental botany.",
      },
    ],
    skills: [
      {
        title: "Microscopy Techniques",
        text: "Use light, fluorescence and electron microscopy to study cells.",
        icon: Microscope,
      },
      {
        title: "Microbial Culture",
        text: "Isolate, culture and characterise bacteria and fungi.",
        icon: FlaskConical,
      },
    ],
    facilities: [
      {
        title: "Plant Sciences Lab",
        text: "Herbarium, plant tissue culture and growth chambers.",
        icon: FlaskConical,
      },
      {
        title: "Microbiology Lab",
        text: "Autoclaves, biosafety cabinets and anaerobic culture equipment.",
        icon: Microscope,
      },
    ],
    faculty: [
      {
        name: "Prof. A. Jayaraj",
        role: "Professor & Head",
        focus: "Plant Biotechnology and Ecology",
      },
    ],
    researchFocus: [
      {
        title: "Ethnobotany and Phytochemistry",
        text: "Documenting and studying medicinal plant uses and active compounds.",
        icon: FlaskConical,
        lead: "Prof. A. Jayaraj",
        projects: "2 active projects",
      },
    ],
    careers: [
      {
        title: "Botanist / Ecologist",
        text: "Work in biodiversity research, conservation and environmental agencies.",
        icon: FlaskConical,
      },
      {
        title: "Microbiologist",
        text: "Pursue careers in food, pharma and diagnostic laboratories.",
        icon: Microscope,
      },
    ],
    updates: [
      {
        date: "Apr 15",
        title: "Nature trail and biodiversity camp announced for students",
        tag: "NEW",
      },
    ],
  },

  "zoology-and-aquaculture": {
    id: "zoology-and-aquaculture",
    slug: "zoology-and-aquaculture",
    name: "Department of Zoology and Aquaculture",
    shortName: "Zoology & Aquaculture",
    purpose: "Advancing knowledge in animal sciences and sustainable aquatic production.",
    heroLine: "Understanding animal life from oceans to ecosystems",
    heroImage: "/departments/zoology.jpg",
    college: "ANU College of Sciences",
    imageLabel: "Zoology & Aquaculture",
    learning: [
      {
        title: "Animal Physiology",
        text: "Study organ systems, homeostasis and comparative physiology.",
        icon: Microscope,
      },
      {
        title: "Aquaculture Technology",
        text: "Learn fish farming, hatchery management and aquatic ecosystem management.",
        icon: FlaskConical,
      },
    ],
    programs: [
      {
        name: "M.Sc Zoology",
        duration: "2 Years",
        description:
          "Postgraduate program covering invertebrate and vertebrate zoology, genetics, cell biology, ecology and wildlife biology. Admission via AP PGCET.",
      },
      {
        name: "M.Sc Aquaculture",
        duration: "2 Years",
        description:
          "Specialised program in fish production, hatchery management, feed technology, aquatic health and marine biology. Admission via AP PGCET.",
      },
      {
        name: "Ph.D Zoology",
        duration: "3–5 Years",
        description:
          "Research in taxonomy, wildlife conservation, parasitology, reproductive biology and aquatic ecology.",
      },
    ],
    skills: [
      {
        title: "Wildlife Identification",
        text: "Classify and study animal species in field and laboratory settings.",
        icon: Microscope,
      },
      {
        title: "Hatchery Management",
        text: "Manage fish and prawn breeding and rearing systems.",
        icon: FlaskConical,
      },
    ],
    facilities: [
      {
        title: "Zoology Museum",
        text: "Preserved specimens, skeletal mounts and reference collections.",
        icon: Microscope,
      },
      {
        title: "Aquaculture Unit",
        text: "Functional hatchery tanks and water quality analysis equipment.",
        icon: FlaskConical,
      },
    ],
    faculty: [
      {
        name: "Prof. C. Ramachandra Reddy",
        role: "Professor & Head",
        focus: "Aquaculture and Fish Biology",
      },
    ],
    researchFocus: [
      {
        title: "Aquatic Ecology",
        text: "Research on freshwater biodiversity, pollution and sustainable aquaculture.",
        icon: FlaskConical,
        lead: "Prof. C. Ramachandra Reddy",
        projects: "2 active projects",
      },
    ],
    careers: [
      {
        title: "Aquaculture Specialist",
        text: "Manage fish farms and hatcheries in the aquaculture industry.",
        icon: FlaskConical,
      },
      {
        title: "Wildlife Conservationist",
        text: "Work with government bodies and NGOs on conservation projects.",
        icon: Microscope,
      },
    ],
    updates: [
      {
        date: "Apr 22",
        title: "Field study trip to Krishna river estuary scheduled",
        tag: "NOTICE",
      },
    ],
  },

  geology: {
    id: "geology",
    slug: "geology",
    name: "Department of Geology",
    shortName: "Geology",
    purpose: "Understanding Earth's processes, history and natural resources.",
    heroLine: "Reading the history of the Earth through rock and time",
    heroImage: "/departments/geology.jpg",
    college: "ANU College of Sciences",
    imageLabel: "Geology Department",
    learning: [
      {
        title: "Mineralogy & Petrology",
        text: "Identify minerals and classify rocks from igneous, sedimentary and metamorphic origins.",
        icon: Microscope,
      },
      {
        title: "Structural Geology",
        text: "Analyse folds, faults and tectonic features to understand Earth's crust.",
        icon: Network,
      },
    ],
    programs: [
      {
        name: "M.Sc Geology",
        duration: "2 Years",
        description:
          "Postgraduate program covering mineralogy, petrology, stratigraphy, structural geology, hydrogeology and economic geology. Admission via AP PGCET.",
      },
      {
        name: "Ph.D Geology",
        duration: "3–5 Years",
        description:
          "Research in igneous petrology, groundwater geology, remote sensing, geochemistry and ore deposit studies.",
      },
    ],
    skills: [
      {
        title: "Field Geology",
        text: "Map geological formations, collect samples and interpret stratigraphy.",
        icon: Network,
      },
      {
        title: "GIS & Remote Sensing",
        text: "Use spatial data tools for geological mapping and resource exploration.",
        icon: Code2,
      },
    ],
    facilities: [
      {
        title: "Geology Museum",
        text: "Rock, mineral and fossil collections for identification and study.",
        icon: Microscope,
      },
      {
        title: "GIS & Remote Sensing Lab",
        text: "Workstations with ArcGIS and ERDAS Imagine for spatial analysis.",
        icon: Code2,
      },
    ],
    faculty: [
      {
        name: "Prof. D. Siva Prasad",
        role: "Professor & Head",
        focus: "Structural Geology and Geochemistry",
      },
    ],
    researchFocus: [
      {
        title: "Groundwater Studies",
        text: "Assessment and management of groundwater resources in Andhra Pradesh.",
        icon: FlaskConical,
        lead: "Prof. D. Siva Prasad",
        projects: "2 active projects",
      },
    ],
    careers: [
      {
        title: "Geologist",
        text: "Work in mining, oil & gas, groundwater exploration and environmental surveys.",
        icon: Microscope,
      },
      {
        title: "Hydrogeologist",
        text: "Assess and manage groundwater resources for government and industry.",
        icon: Network,
      },
    ],
    updates: [
      { date: "Apr 10", title: "Annual geology field camp to Eastern Ghats announced", tag: "NEW" },
    ],
  },

  "food-and-nutritional-science": {
    id: "food-and-nutritional-science",
    slug: "food-and-nutritional-science",
    name: "Department of Food and Nutritional Science",
    shortName: "Food Science",
    purpose: "Advancing food safety, nutrition and public health through science.",
    heroLine: "Science that nourishes — food and nutrition for a healthier world",
    heroImage: "/departments/food-science.jpg",
    college: "ANU College of Sciences",
    imageLabel: "Food & Nutritional Science",
    learning: [
      {
        title: "Food Chemistry",
        text: "Study the composition, structure and reactions of food components.",
        icon: FlaskConical,
      },
      {
        title: "Human Nutrition",
        text: "Understand macronutrients, micronutrients and dietary requirements.",
        icon: ShieldCheck,
      },
    ],
    programs: [
      {
        name: "M.Sc Food and Nutritional Science",
        duration: "2 Years",
        description:
          "Postgraduate program covering food chemistry, food microbiology, nutrition, food processing technology and food safety. Admission via AP PGCET.",
      },
      {
        name: "Ph.D Food Science",
        duration: "3–5 Years",
        description:
          "Research in food fortification, nutraceuticals, food safety regulations, packaging and functional foods.",
      },
    ],
    skills: [
      {
        title: "Food Analysis",
        text: "Determine proximate composition and nutritional quality of food products.",
        icon: FlaskConical,
      },
      {
        title: "Food Safety",
        text: "Apply HACCP and food safety standards in processing and manufacturing.",
        icon: ShieldCheck,
      },
    ],
    facilities: [
      {
        title: "Food Processing Lab",
        text: "Equipment for extrusion, pasteurisation, drying and fermentation.",
        icon: FlaskConical,
      },
      {
        title: "Nutrition Analysis Lab",
        text: "Instruments for proximate analysis and micronutrient profiling.",
        icon: Microscope,
      },
    ],
    faculty: [
      {
        name: "Prof. S. Anuradha",
        role: "Professor & Head",
        focus: "Human Nutrition and Food Safety",
      },
    ],
    researchFocus: [
      {
        title: "Functional Foods and Nutraceuticals",
        text: "Development of health-promoting foods enriched with bioactive compounds.",
        icon: FlaskConical,
        lead: "Prof. S. Anuradha",
        projects: "2 active projects",
      },
    ],
    careers: [
      {
        title: "Food Technologist",
        text: "Work in food processing, quality control and product development.",
        icon: FlaskConical,
      },
      {
        title: "Nutritionist / Dietitian",
        text: "Provide nutritional guidance in hospitals, schools and community health.",
        icon: ShieldCheck,
      },
    ],
    updates: [
      {
        date: "Apr 16",
        title: "Guest lecture on functional foods and health benefits scheduled",
        tag: "NEW",
      },
    ],
  },

  "electronics-and-instrumentation": {
    id: "electronics-and-instrumentation",
    slug: "electronics-and-instrumentation",
    name: "Department of Electronics and Instrumentation",
    shortName: "Electronics & Instrumentation",
    purpose: "Designing precision measurement and control systems for science and industry.",
    heroLine: "Measuring the world with precision and intelligence",
    heroImage: "/departments/instrumentation.jpg",
    college: "ANU College of Sciences",
    imageLabel: "Electronics & Instrumentation",
    learning: [
      {
        title: "Sensors and Transducers",
        text: "Understand measurement devices for temperature, pressure and flow.",
        icon: Network,
      },
      {
        title: "Control Instrumentation",
        text: "Design feedback systems and automated process control circuits.",
        icon: Cpu,
      },
    ],
    programs: [
      {
        name: "M.Sc Electronics and Instrumentation Technology",
        duration: "2 Years",
        description:
          "Postgraduate program covering sensors, transducers, signal conditioning, process control, microcontrollers and industrial instrumentation. Admission via AP PGCET.",
      },
      {
        name: "Ph.D Electronics and Instrumentation",
        duration: "3–5 Years",
        description:
          "Research in smart sensors, IoT-based measurement systems, biomedical instrumentation and industrial automation.",
      },
    ],
    skills: [
      {
        title: "Process Control",
        text: "Design and operate PLC-based and PID control systems.",
        icon: Cpu,
      },
      {
        title: "Embedded Instrumentation",
        text: "Build microcontroller-based measurement and monitoring systems.",
        icon: Network,
      },
    ],
    facilities: [
      {
        title: "Instrumentation Lab",
        text: "Equipped with oscilloscopes, signal generators and process simulators.",
        icon: Network,
      },
    ],
    faculty: [
      {
        name: "Prof. N. Venkata Ramana",
        role: "Professor & Head",
        focus: "Biomedical Instrumentation and Sensors",
      },
    ],
    researchFocus: [
      {
        title: "IoT-Based Monitoring Systems",
        text: "Smart sensor networks for environmental and industrial monitoring.",
        icon: Network,
        lead: "Prof. N. Venkata Ramana",
        projects: "2 active projects",
      },
    ],
    careers: [
      {
        title: "Instrumentation Engineer",
        text: "Calibrate and maintain measurement equipment in process industries.",
        icon: Cpu,
      },
      {
        title: "Automation Specialist",
        text: "Design control systems for chemical, oil & gas and manufacturing plants.",
        icon: Network,
      },
    ],
    updates: [
      { date: "Apr 08", title: "IoT lab inauguration and hands-on workshop planned", tag: "NEW" },
    ],
  },

  // ─── ARTS, COMMERCE & LAW ────────────────────────────────────────────────────

  english: {
    id: "english",
    slug: "english",
    name: "Department of English",
    shortName: "English",
    purpose: "Cultivating literary analysis, critical thinking and communicative excellence.",
    heroLine: "Words that think — literature, language and communication",
    heroImage: "/departments/english.jpg",
    college: "ANU College of Arts, Commerce & Law",
    imageLabel: "English Department",
    learning: [
      {
        title: "Literary Studies",
        text: "Analyse British, American and postcolonial literature critically.",
        icon: ScrollText,
      },
      {
        title: "Language and Linguistics",
        text: "Explore phonology, syntax, semantics and discourse analysis.",
        icon: Users,
      },
    ],
    programs: [
      {
        name: "M.A English",
        duration: "2 Years",
        description:
          "Postgraduate program in British and American literature, Indian writing in English, literary theory, linguistics and communication skills. Admission via AP PGCET.",
      },
      {
        name: "Ph.D English",
        duration: "3–5 Years",
        description:
          "Research in literary theory, postcolonial studies, comparative literature, diaspora writing and applied linguistics.",
      },
    ],
    skills: [
      {
        title: "Critical Writing",
        text: "Write clear, analytical and well-structured academic essays.",
        icon: ScrollText,
      },
      {
        title: "Communication Skills",
        text: "Develop professional oral and written communication abilities.",
        icon: Users,
      },
    ],
    facilities: [
      {
        title: "Language Lab",
        text: "Audio-visual equipment and software for language learning and practice.",
        icon: Network,
      },
      {
        title: "Seminar Hall",
        text: "Dedicated space for literary discussions and guest lectures.",
        icon: Users,
      },
    ],
    faculty: [
      {
        name: "Prof. P. Murali Krishna",
        role: "Professor & Head",
        focus: "Postcolonial Literature and Literary Theory",
      },
    ],
    researchFocus: [
      {
        title: "Postcolonial and Diaspora Studies",
        text: "Research on identity, migration and cultural representation in literature.",
        icon: ScrollText,
        lead: "Prof. P. Murali Krishna",
        projects: "2 active projects",
      },
    ],
    careers: [
      {
        title: "Lecturer / Academic",
        text: "Teach English at colleges and universities.",
        icon: GraduationCap,
      },
      {
        title: "Content Writer / Editor",
        text: "Work in publishing, media and corporate communications.",
        icon: ScrollText,
      },
    ],
    updates: [
      {
        date: "May 02",
        title: "Literary fest and creative writing competition announced",
        tag: "NEW",
      },
    ],
  },

  hindi: {
    id: "hindi",
    slug: "hindi",
    name: "Department of Hindi",
    shortName: "Hindi",
    purpose: "Preserving and promoting Hindi language, literature and culture.",
    heroLine: "The voice of a nation — Hindi language and literature",
    heroImage: "/departments/hindi.jpg",
    college: "ANU College of Arts, Commerce & Law",
    imageLabel: "Hindi Department",
    learning: [
      {
        title: "Hindi Literature",
        text: "Study classical, modern and contemporary Hindi literary works.",
        icon: ScrollText,
      },
      {
        title: "Translation Studies",
        text: "Develop skills in Hindi-English and Hindi-Telugu translation.",
        icon: Users,
      },
    ],
    programs: [
      {
        name: "M.A Hindi",
        duration: "2 Years",
        description:
          "Postgraduate program in Hindi literature, language history, linguistic analysis, comparative literature and translation studies. Admission via AP PGCET.",
      },
      {
        name: "Ph.D Hindi",
        duration: "3–5 Years",
        description:
          "Research in modern Hindi poetry, prose, dialectal studies, regional literatures and Hindi as a second language.",
      },
    ],
    skills: [
      {
        title: "Academic Writing",
        text: "Compose essays, dissertations and research articles in Hindi.",
        icon: ScrollText,
      },
      {
        title: "Translation",
        text: "Translate literary and technical texts between Hindi and other languages.",
        icon: Users,
      },
    ],
    facilities: [
      {
        title: "Hindi Sahitya Library",
        text: "Collection of Hindi literary works, periodicals and reference material.",
        icon: ScrollText,
      },
    ],
    faculty: [
      {
        name: "Prof. R. Madhavi Devi",
        role: "Professor & Head",
        focus: "Modern Hindi Poetry and Comparative Literature",
      },
    ],
    researchFocus: [
      {
        title: "Hindi Dialectal Studies",
        text: "Documentation and analysis of regional Hindi dialects in Andhra Pradesh.",
        icon: ScrollText,
        lead: "Prof. R. Madhavi Devi",
        projects: "1 active project",
      },
    ],
    careers: [
      {
        title: "Hindi Lecturer / Teacher",
        text: "Teach Hindi at schools, colleges and coaching institutes.",
        icon: GraduationCap,
      },
      {
        title: "Translator / Interpreter",
        text: "Work with government departments, media and publishing houses.",
        icon: ScrollText,
      },
    ],
    updates: [
      {
        date: "Apr 14",
        title: "Hindi week celebrations and essay competition announced",
        tag: "NEW",
      },
    ],
  },

  "history-and-archaeology": {
    id: "history-and-archaeology",
    slug: "history-and-archaeology",
    name: "Department of History and Archaeology",
    shortName: "History & Archaeology",
    purpose: "Recovering and interpreting the human past through texts, artefacts and sites.",
    heroLine: "Digging deeper into the story of civilisation",
    heroImage: "/departments/history.jpg",
    college: "ANU College of Arts, Commerce & Law",
    imageLabel: "History & Archaeology",
    learning: [
      {
        title: "Ancient Indian History",
        text: "Study the political, cultural and social history of ancient India.",
        icon: ScrollText,
      },
      {
        title: "Archaeological Methods",
        text: "Learn excavation techniques, artefact analysis and site interpretation.",
        icon: Microscope,
      },
    ],
    programs: [
      {
        name: "M.A Ancient History and Archaeology",
        duration: "2 Years",
        description:
          "Postgraduate program covering prehistoric India, Harappan civilisation, Mauryan and Gupta empires, Buddhist art, epigraphy and archaeological methods. Admission via AP PGCET.",
      },
      {
        name: "Ph.D Ancient History and Archaeology",
        duration: "3–5 Years",
        description:
          "Research in epigraphy, numismatics, temple architecture, trade routes, medieval history and cultural heritage conservation.",
      },
    ],
    skills: [
      {
        title: "Archival Research",
        text: "Work with historical manuscripts, inscriptions and official records.",
        icon: ScrollText,
      },
      {
        title: "Heritage Documentation",
        text: "Document and conserve monuments and cultural heritage sites.",
        icon: Building2,
      },
    ],
    facilities: [
      {
        title: "Archaeology Museum",
        text: "Collection of coins, inscriptions, sculptures and pottery from excavations.",
        icon: Microscope,
      },
    ],
    faculty: [
      {
        name: "Prof. G. Srinivasa Rao",
        role: "Professor & Head",
        focus: "Buddhist Archaeology and Epigraphy",
      },
    ],
    researchFocus: [
      {
        title: "Buddhist Heritage of Andhra Pradesh",
        text: "Documentation of Buddhist sites, stupa remains and art in the Krishna-Guntur region.",
        icon: ScrollText,
        lead: "Prof. G. Srinivasa Rao",
        projects: "2 active projects",
      },
    ],
    careers: [
      {
        title: "Archaeologist / Curator",
        text: "Work with ASI, museums and state archaeology departments.",
        icon: Microscope,
      },
      {
        title: "Heritage Conservationist",
        text: "Manage and protect historical monuments and cultural sites.",
        icon: Building2,
      },
    ],
    updates: [
      { date: "Apr 06", title: "Excavation training camp at Nagarjunakonda announced", tag: "NEW" },
    ],
  },

  "mahayana-buddhist-studies": {
    id: "mahayana-buddhist-studies",
    slug: "mahayana-buddhist-studies",
    name: "Centre for Mahayana Buddhist Studies",
    shortName: "Buddhist Studies",
    purpose: "Offering unique academic study of Mahayana Buddhist philosophy, history and culture.",
    heroLine: "Wisdom traditions of the East — studied with scholarly rigour",
    heroImage: "/departments/buddhist-studies.jpg",
    college: "ANU College of Arts, Commerce & Law",
    imageLabel: "Buddhist Studies",
    learning: [
      {
        title: "Buddhist Philosophy",
        text: "Study Madhyamaka, Yogacara and Prajnaparamita philosophical traditions.",
        icon: ScrollText,
      },
      {
        title: "Buddhist History and Culture",
        text: "Trace the spread of Buddhism across Asia and its cultural impact.",
        icon: GraduationCap,
      },
    ],
    programs: [
      {
        name: "M.A Mahayana Buddhist Studies",
        duration: "2 Years",
        description:
          "Postgraduate program in Mahayana and Theravada Buddhist philosophy, Buddhist logic, meditation traditions, Buddhist economics and science. Open to students from South and South-East Asian countries. Admission via AP PGCET.",
      },
      {
        name: "Ph.D Mahayana Buddhist Studies",
        duration: "3–5 Years",
        description:
          "Research in Buddhist meditation, Buddhist applied concepts, comparative religion, Buddhist art and Pali/Sanskrit texts.",
      },
    ],
    skills: [
      {
        title: "Pali and Buddhist Texts",
        text: "Read and interpret canonical Buddhist texts in Pali and Sanskrit.",
        icon: ScrollText,
      },
      {
        title: "Comparative Religion",
        text: "Analyse Buddhism in relation to Hinduism, Jainism and world religions.",
        icon: Users,
      },
    ],
    facilities: [
      {
        title: "Buddhist Studies Library",
        text: "Rare collection of Buddhist texts, translations and manuscripts.",
        icon: ScrollText,
      },
    ],
    faculty: [
      {
        name: "Prof. K. T. S. Sarao",
        role: "Professor & Head",
        focus: "Buddhist Logic and Meditation Studies",
      },
    ],
    researchFocus: [
      {
        title: "Buddhist Meditation and Psychology",
        text: "Interdisciplinary research on mindfulness, meditation practices and mental well-being.",
        icon: Brain,
        lead: "Prof. K. T. S. Sarao",
        projects: "2 active projects",
      },
    ],
    careers: [
      {
        title: "Buddhist Studies Researcher",
        text: "Academic career in Buddhist studies departments and research institutes.",
        icon: GraduationCap,
      },
      {
        title: "Cultural Liaison Officer",
        text: "Work in diplomatic, cultural exchange and international organisations.",
        icon: Users,
      },
    ],
    updates: [
      {
        date: "Apr 04",
        title: "International scholars from Myanmar and Thailand visiting",
        tag: "NOTICE",
      },
    ],
  },

  "journalism-and-mass-communication": {
    id: "journalism-and-mass-communication",
    slug: "journalism-and-mass-communication",
    name: "Department of Journalism and Mass Communication",
    shortName: "Journalism & Mass Comm.",
    purpose: "Training ethical, skilled media professionals for the digital age.",
    heroLine: "Report the truth. Shape the narrative. Lead the conversation.",
    heroImage: "/departments/journalism.jpg",
    college: "ANU College of Arts, Commerce & Law",
    imageLabel: "Journalism & Mass Communication",
    learning: [
      {
        title: "Reporting and Editing",
        text: "Develop news writing, editing and investigative journalism skills.",
        icon: ScrollText,
      },
      {
        title: "Digital Media",
        text: "Understand social media strategy, digital content production and media management.",
        icon: Network,
      },
    ],
    programs: [
      {
        name: "M.A Journalism and Mass Communication",
        duration: "2 Years",
        description:
          "Postgraduate program covering print, broadcast and digital journalism, media laws and ethics, public relations, advertising and media research. Admission via AP PGCET.",
      },
      {
        name: "Ph.D Journalism and Mass Communication",
        duration: "3–5 Years",
        description:
          "Research in media studies, digital journalism, political communication, development communication and media effects.",
      },
    ],
    skills: [
      {
        title: "News Writing & Editing",
        text: "Produce accurate, concise and ethical news content across media platforms.",
        icon: ScrollText,
      },
      {
        title: "Video & Audio Production",
        text: "Script, shoot and edit video packages for broadcast and digital media.",
        icon: Rocket,
      },
    ],
    facilities: [
      {
        title: "Media Production Studio",
        text: "Audio recording, video editing suites and a newsroom simulation lab.",
        icon: Network,
      },
    ],
    faculty: [
      {
        name: "Prof. K. Nagendra Babu",
        role: "Professor & Head",
        focus: "Media Studies and Digital Journalism",
      },
    ],
    researchFocus: [
      {
        title: "Digital Media and Society",
        text: "Research on social media influence, misinformation and political communication.",
        icon: Network,
        lead: "Prof. K. Nagendra Babu",
        projects: "2 active projects",
      },
    ],
    careers: [
      {
        title: "Journalist / Reporter",
        text: "Work with newspapers, TV channels and online news portals.",
        icon: ScrollText,
      },
      {
        title: "PR & Communications Specialist",
        text: "Manage communications for corporate, government and NGO organisations.",
        icon: Users,
      },
    ],
    updates: [
      {
        date: "May 04",
        title: "Campus journalism workshop with industry professionals announced",
        tag: "NEW",
      },
    ],
  },

  "commerce-and-business-administration": {
    id: "commerce-and-business-administration",
    slug: "commerce-and-business-administration",
    name: "Department of Commerce and Business Administration",
    shortName: "Commerce & MBA",
    purpose: "Developing business leaders with strong analytical and managerial foundations.",
    heroLine: "Business thinking built for the real world",
    heroImage: "/departments/commerce.jpg",
    college: "ANU College of Arts, Commerce & Law",
    imageLabel: "Commerce & Business Admin",
    learning: [
      {
        title: "Financial Management",
        text: "Understand capital markets, financial analysis and investment decisions.",
        icon: BriefcaseBusiness,
      },
      {
        title: "Marketing & Strategy",
        text: "Study consumer behaviour, brand strategy and competitive analysis.",
        icon: Rocket,
      },
    ],
    programs: [
      {
        name: "M.Com",
        duration: "2 Years",
        description:
          "Postgraduate program in advanced accounting, taxation, financial management, business law and research methodology. Admission via AP PGCET.",
      },
      {
        name: "MBA – Hospital Administration",
        duration: "2 Years",
        description:
          "Management program for healthcare sector focusing on hospital operations, health policy, medical records and healthcare finance. Admission via APICET.",
      },
      {
        name: "MBA – Tourism and Travel Management",
        duration: "2 Years",
        description:
          "Specialised MBA in tourism planning, hospitality management, travel agency operations and event management. Admission via APICET.",
      },
      {
        name: "MBA – International Business",
        duration: "2 Years",
        description:
          "MBA program covering global trade, foreign exchange, international marketing and cross-cultural management. Admission via APICET.",
      },
      {
        name: "Ph.D Commerce",
        duration: "3–5 Years",
        description:
          "Research in financial markets, taxation law, corporate governance, marketing management and rural development.",
      },
    ],
    skills: [
      {
        title: "Accounting & Taxation",
        text: "Prepare financial statements and navigate GST, income tax frameworks.",
        icon: BriefcaseBusiness,
      },
      {
        title: "Business Analytics",
        text: "Use data-driven tools to support management decisions.",
        icon: Database,
      },
    ],
    facilities: [
      {
        title: "Business Communication Lab",
        text: "Audio-visual equipment and presentation facilities for managerial communication.",
        icon: Users,
      },
      {
        title: "Computer Lab",
        text: "Tally, MS Excel, ERP and accounting simulation software.",
        icon: Code2,
      },
    ],
    faculty: [
      {
        name: "Prof. B. Naga Raju",
        role: "Professor & Head",
        focus: "Financial Management and Capital Markets",
      },
    ],
    researchFocus: [
      {
        title: "Corporate Governance and Finance",
        text: "Research in capital structure, dividends policy and corporate sustainability.",
        icon: BriefcaseBusiness,
        lead: "Prof. B. Naga Raju",
        projects: "3 active projects",
      },
    ],
    careers: [
      {
        title: "Manager / Business Analyst",
        text: "Lead teams and drive business decisions in corporate organisations.",
        icon: BriefcaseBusiness,
      },
      {
        title: "Chartered Accountant / Tax Consultant",
        text: "Manage accounts, audits and tax compliance for businesses.",
        icon: ScrollText,
      },
    ],
    updates: [
      { date: "May 10", title: "Management fest and case study competition announced", tag: "NEW" },
    ],
  },

  "dr-b-r-ambedkar-school-of-legal-education-and-research": {
    id: "dr-b-r-ambedkar-school-of-legal-education-and-research",
    slug: "dr-b-r-ambedkar-school-of-legal-education-and-research",
    name: "Dr. B.R. Ambedkar School of Legal Education and Research",
    shortName: "Law School",
    purpose:
      "Producing competent legal professionals committed to justice and constitutional values.",
    heroLine: "Justice is not a privilege — it is a right worth learning",
    heroImage: "/departments/law.jpg",
    college: "ANU College of Arts, Commerce & Law",
    imageLabel: "Law School",
    learning: [
      {
        title: "Constitutional Law",
        text: "Understand the Constitution of India, fundamental rights and judicial review.",
        icon: ScrollText,
      },
      {
        title: "Criminal and Civil Procedure",
        text: "Study the CrPC, CPC and substantive law applied in courtrooms.",
        icon: ShieldCheck,
      },
    ],
    programs: [
      {
        name: "BA LLB (Hons)",
        duration: "5 Years",
        description:
          "Integrated undergraduate law program combining arts subjects with core law papers including contracts, torts, constitutional law and jurisprudence.",
      },
      {
        name: "BBA LLB (Hons)",
        duration: "5 Years",
        description:
          "Integrated program combining business administration with law, ideal for students interested in corporate law and commercial practice.",
      },
      {
        name: "LL.M",
        duration: "1 Year",
        description:
          "Postgraduate law program with specialisations in constitutional law, criminal law, commercial law and human rights law. Admission via AP PGCET.",
      },
      {
        name: "Ph.D Law",
        duration: "3–5 Years",
        description:
          "Research in constitutional jurisprudence, criminal justice, environmental law, intellectual property rights and international law.",
      },
    ],
    skills: [
      {
        title: "Legal Drafting",
        text: "Draft pleadings, petitions, contracts and legal opinions.",
        icon: ScrollText,
      },
      {
        title: "Moot Court Practice",
        text: "Argue cases and develop advocacy skills in a moot court environment.",
        icon: Users,
      },
    ],
    facilities: [
      {
        title: "Moot Court Hall",
        text: "Replica courtroom setup for practice trials and advocacy training.",
        icon: Users,
      },
      {
        title: "Legal Research Library",
        text: "Comprehensive collection of law reports, statutes and legal databases.",
        icon: ScrollText,
      },
    ],
    faculty: [
      {
        name: "Prof. T. Padmavathi",
        role: "Dean & Head",
        focus: "Constitutional Law and Human Rights",
      },
    ],
    researchFocus: [
      {
        title: "Constitutional and Human Rights Law",
        text: "Research in fundamental rights, judicial review, LGBTQ rights and Dalit jurisprudence.",
        icon: ShieldCheck,
        lead: "Prof. T. Padmavathi",
        projects: "2 active projects",
      },
    ],
    careers: [
      {
        title: "Advocate / Lawyer",
        text: "Practise in district courts, high courts and the Supreme Court.",
        icon: ScrollText,
      },
      {
        title: "Legal Advisor / Corporate Counsel",
        text: "Provide legal guidance to companies, NGOs and government bodies.",
        icon: BriefcaseBusiness,
      },
    ],
    updates: [
      { date: "May 06", title: "Moot court competition 2025 registrations open", tag: "NEW" },
    ],
  },

  // ─── PHARMACY ────────────────────────────────────────────────────────────────

  pharmaceutics: {
    id: "pharmaceutics",
    slug: "pharmaceutics",
    name: "Department of Pharmaceutics",
    shortName: "Pharmaceutics",
    purpose: "Advancing drug formulation and delivery for better patient outcomes.",
    heroLine: "From molecule to medicine — the art and science of pharmaceutics",
    heroImage: "/departments/pharmaceutics.jpg",
    college: "ANU College of Pharmaceutical Sciences",
    imageLabel: "Pharmaceutics Department",
    learning: [
      {
        title: "Drug Formulation",
        text: "Design tablets, capsules, suspensions and novel drug delivery systems.",
        icon: FlaskConical,
      },
      {
        title: "Biopharmaceutics",
        text: "Understand absorption, distribution, metabolism and excretion of drugs.",
        icon: Microscope,
      },
    ],
    programs: [
      {
        name: "B.Pharmacy",
        duration: "4 Years",
        description:
          "Undergraduate pharmacy program covering pharmaceutical chemistry, pharmacology, pharmaceutics, pharmacognosy and clinical pharmacy.",
      },
      {
        name: "Pharm.D",
        duration: "6 Years",
        description:
          "Doctor of Pharmacy — clinical pharmacy program integrating pharmaceutical sciences with patient care, clinical rotations and therapeutics.",
      },
      {
        name: "M.Pharmacy Pharmaceutics",
        duration: "2 Years",
        description:
          "Advanced postgraduate program in novel drug delivery systems, nanotechnology-based formulations, stability testing and biopharmaceutics.",
      },
      {
        name: "Ph.D Pharmaceutics",
        duration: "3–5 Years",
        description:
          "Research in targeted drug delivery, nanomedicine, controlled release systems and transdermal formulations.",
      },
    ],
    skills: [
      {
        title: "Formulation Development",
        text: "Develop and optimise drug dosage forms using pre-formulation studies.",
        icon: FlaskConical,
      },
      {
        title: "Quality Control",
        text: "Apply pharmacopoeial tests and stability protocols for drug products.",
        icon: ShieldCheck,
      },
    ],
    facilities: [
      {
        title: "Pharmaceutics Lab",
        text: "Tablet compression, capsule filling, coating equipment and dissolution apparatus.",
        icon: FlaskConical,
      },
      {
        title: "Stability Testing Chamber",
        text: "ICH-compliant chambers for accelerated and long-term drug stability studies.",
        icon: Microscope,
      },
    ],
    faculty: [
      {
        name: "Prof. A. Venkat Rao",
        role: "Professor & Head",
        focus: "Novel Drug Delivery and Nanomedicine",
      },
    ],
    researchFocus: [
      {
        title: "Nanotechnology-based Drug Delivery",
        text: "Nanoparticle formulations for cancer targeting and brain drug delivery.",
        icon: FlaskConical,
        lead: "Prof. A. Venkat Rao",
        projects: "3 active projects",
      },
    ],
    careers: [
      {
        title: "Pharmaceutical Formulation Scientist",
        text: "Develop drug products in R&D labs of pharma companies.",
        icon: FlaskConical,
      },
      {
        title: "Clinical Pharmacist",
        text: "Work in hospitals and clinics providing pharmaceutical care to patients.",
        icon: ShieldCheck,
      },
    ],
    updates: [
      {
        date: "Apr 29",
        title: "Industry interaction session with pharma companies scheduled",
        tag: "NEW",
      },
    ],
  },

  pharmacology: {
    id: "pharmacology",
    slug: "pharmacology",
    name: "Department of Pharmacology",
    shortName: "Pharmacology",
    purpose: "Understanding how drugs interact with biological systems to heal and protect.",
    heroLine: "The science of drugs — mechanisms, effects and therapeutic use",
    heroImage: "/departments/pharmacology.jpg",
    college: "ANU College of Pharmaceutical Sciences",
    imageLabel: "Pharmacology Department",
    learning: [
      {
        title: "Mechanisms of Drug Action",
        text: "Study receptor pharmacology, signal transduction and drug-target interactions.",
        icon: Microscope,
      },
      {
        title: "Clinical Pharmacology",
        text: "Understand dosing, drug interactions and pharmacovigilance.",
        icon: ShieldCheck,
      },
    ],
    programs: [
      {
        name: "M.Pharmacy Pharmacology",
        duration: "2 Years",
        description:
          "Postgraduate program covering advanced pharmacology, molecular pharmacology, clinical pharmacology, toxicology and drug regulatory affairs.",
      },
      {
        name: "Ph.D Pharmacology",
        duration: "3–5 Years",
        description:
          "Research in neuropharmacology, oncopharmacology, cardiovascular pharmacology, drug discovery and safety evaluation.",
      },
    ],
    skills: [
      {
        title: "Pharmacological Screening",
        text: "Perform in vitro and in vivo experiments to assess drug activity.",
        icon: FlaskConical,
      },
      {
        title: "Toxicity Testing",
        text: "Apply acute, sub-acute and chronic toxicity protocols.",
        icon: ShieldCheck,
      },
    ],
    facilities: [
      {
        title: "Pharmacology Lab",
        text: "Isolated organ baths, in vivo animal models and cell culture facilities.",
        icon: FlaskConical,
      },
      {
        title: "Molecular Pharmacology Lab",
        text: "Western blot, flow cytometry and receptor binding assay setups.",
        icon: Microscope,
      },
    ],
    faculty: [
      {
        name: "Prof. R. Chandra Sekhar",
        role: "Professor & Head",
        focus: "Neuropharmacology and Drug Discovery",
      },
    ],
    researchFocus: [
      {
        title: "Anticancer Drug Screening",
        text: "In vitro and in vivo evaluation of plant-based and synthetic anticancer agents.",
        icon: Microscope,
        lead: "Prof. R. Chandra Sekhar",
        projects: "3 active projects",
      },
    ],
    careers: [
      {
        title: "Drug Safety Scientist",
        text: "Work in preclinical safety evaluation in pharmaceutical companies.",
        icon: ShieldCheck,
      },
      {
        title: "Clinical Research Associate",
        text: "Manage clinical trial operations and regulatory submissions.",
        icon: ScrollText,
      },
    ],
    updates: [
      {
        date: "Apr 26",
        title: "Workshop on drug regulatory affairs and clinical trials",
        tag: "NEW",
      },
    ],
  },

  "pharmaceutical-analysis": {
    id: "pharmaceutical-analysis",
    slug: "pharmaceutical-analysis",
    name: "Department of Pharmaceutical Analysis",
    shortName: "Pharmaceutical Analysis",
    purpose: "Ensuring drug quality and safety through advanced analytical methods.",
    heroLine: "Accuracy in analysis — the backbone of pharmaceutical quality",
    heroImage: "/departments/pharma-analysis.jpg",
    college: "ANU College of Pharmaceutical Sciences",
    imageLabel: "Pharmaceutical Analysis",
    learning: [
      {
        title: "Chromatographic Analysis",
        text: "Apply HPLC, GC and TLC for quantification of drugs and impurities.",
        icon: Microscope,
      },
      {
        title: "Spectroscopic Methods",
        text: "Use UV-Vis, IR, NMR and MS for structural characterisation of compounds.",
        icon: FlaskConical,
      },
    ],
    programs: [
      {
        name: "M.Pharmacy Pharmaceutical Analysis",
        duration: "2 Years",
        description:
          "Advanced postgraduate program in modern instrumental analysis, validation of analytical methods, ICH guidelines and quality control of drugs.",
      },
      {
        name: "Ph.D Pharmaceutical Analysis",
        duration: "3–5 Years",
        description:
          "Research in hyphenated analytical techniques, bioanalytical method development, impurity profiling and green analytical chemistry.",
      },
    ],
    skills: [
      {
        title: "Instrument Operation",
        text: "Operate HPLC, GC, UV-Vis and atomic absorption spectrophotometers.",
        icon: Microscope,
      },
      {
        title: "Method Validation",
        text: "Validate analytical methods per ICH Q2(R1) guidelines.",
        icon: ShieldCheck,
      },
    ],
    facilities: [
      {
        title: "Instrumental Analysis Lab",
        text: "HPLC, GC, UV-Vis, FTIR and AAS instruments for analysis.",
        icon: Microscope,
      },
    ],
    faculty: [
      {
        name: "Prof. K. Srinivasu",
        role: "Professor & Head",
        focus: "HPLC Method Development and Impurity Profiling",
      },
    ],
    researchFocus: [
      {
        title: "Bioanalytical Methods",
        text: "Development and validation of plasma drug assays for pharmacokinetic studies.",
        icon: FlaskConical,
        lead: "Prof. K. Srinivasu",
        projects: "2 active projects",
      },
    ],
    careers: [
      {
        title: "Quality Control Analyst",
        text: "Perform routine and advanced testing in pharma manufacturing units.",
        icon: ShieldCheck,
      },
      {
        title: "Regulatory Affairs Specialist",
        text: "Prepare dossiers and submissions for drug regulatory approvals.",
        icon: ScrollText,
      },
    ],
    updates: [{ date: "Apr 21", title: "Hands-on HPLC training workshop scheduled", tag: "NEW" }],
  },

  "pharmaceutical-chemistry": {
    id: "pharmaceutical-chemistry",
    slug: "pharmaceutical-chemistry",
    name: "Department of Pharmaceutical Chemistry",
    shortName: "Pharmaceutical Chemistry",
    purpose: "Designing and synthesising drug molecules for therapeutic use.",
    heroLine: "Designing molecules that heal — pharmaceutical chemistry",
    heroImage: "/departments/pharma-chemistry.jpg",
    college: "ANU College of Pharmaceutical Sciences",
    imageLabel: "Pharmaceutical Chemistry",
    learning: [
      {
        title: "Medicinal Chemistry",
        text: "Understand structure-activity relationships and drug design principles.",
        icon: FlaskConical,
      },
      {
        title: "Organic Synthesis",
        text: "Apply multi-step synthetic routes to prepare drug candidates.",
        icon: Microscope,
      },
    ],
    programs: [
      {
        name: "M.Pharmacy Pharmaceutical Chemistry",
        duration: "2 Years",
        description:
          "Postgraduate program covering advanced medicinal chemistry, computer-aided drug design, combinatorial chemistry and drug synthesis.",
      },
      {
        name: "Ph.D Pharmaceutical Chemistry",
        duration: "3–5 Years",
        description:
          "Research in heterocyclic synthesis, molecular docking, QSAR studies, natural product chemistry and anticancer compound design.",
      },
    ],
    skills: [
      {
        title: "Organic Synthesis",
        text: "Design and execute multi-step synthesis in organic chemistry.",
        icon: FlaskConical,
      },
      {
        title: "Computational Drug Design",
        text: "Use molecular docking and QSAR software for lead optimisation.",
        icon: Code2,
      },
    ],
    facilities: [
      {
        title: "Organic Chemistry Lab",
        text: "Reflux, distillation, column chromatography and rotary evaporator.",
        icon: FlaskConical,
      },
      {
        title: "Molecular Modelling Lab",
        text: "Schrodinger, AutoDock and Discovery Studio for computational chemistry.",
        icon: Code2,
      },
    ],
    faculty: [
      {
        name: "Prof. M. Raghunath",
        role: "Professor & Head",
        focus: "Medicinal Chemistry and Drug Design",
      },
    ],
    researchFocus: [
      {
        title: "Heterocyclic Synthesis and Anticancer Activity",
        text: "Synthesis and evaluation of heterocyclic compounds as anticancer and antimicrobial agents.",
        icon: FlaskConical,
        lead: "Prof. M. Raghunath",
        projects: "3 active projects",
      },
    ],
    careers: [
      {
        title: "Medicinal Chemist",
        text: "Design and synthesise drug candidates in pharma R&D.",
        icon: FlaskConical,
      },
      {
        title: "Process Chemistry Scientist",
        text: "Optimise drug synthesis processes for commercial manufacturing.",
        icon: Microscope,
      },
    ],
    updates: [
      {
        date: "Apr 17",
        title: "Workshop on CADD and molecular modelling conducted",
        tag: "NOTICE",
      },
    ],
  },

  "industrial-pharmacy": {
    id: "industrial-pharmacy",
    slug: "industrial-pharmacy",
    name: "Department of Industrial Pharmacy",
    shortName: "Industrial Pharmacy",
    purpose: "Bridging pharmaceutical science and large-scale drug manufacturing.",
    heroLine: "From bench to batch — industrial pharmacy in practice",
    heroImage: "/departments/industrial-pharmacy.jpg",
    college: "ANU College of Pharmaceutical Sciences",
    imageLabel: "Industrial Pharmacy",
    learning: [
      {
        title: "Manufacturing Technology",
        text: "Learn scale-up, GMP compliance and pharmaceutical production processes.",
        icon: Building2,
      },
      {
        title: "Quality Assurance",
        text: "Apply QA systems, SOPs and regulatory requirements in drug manufacture.",
        icon: ShieldCheck,
      },
    ],
    programs: [
      {
        name: "M.Pharmacy Industrial Pharmacy",
        duration: "2 Years",
        description:
          "Postgraduate program in GMP, pharmaceutical production scale-up, quality assurance, regulatory affairs, packing technology and validation.",
      },
      {
        name: "Ph.D Industrial Pharmacy",
        duration: "3–5 Years",
        description:
          "Research in process optimisation, continuous manufacturing, industrial scale formulation development and regulatory science.",
      },
    ],
    skills: [
      {
        title: "GMP & Regulatory Compliance",
        text: "Implement Good Manufacturing Practices and document SOPs.",
        icon: ShieldCheck,
      },
      {
        title: "Process Validation",
        text: "Design and execute validation protocols for pharmaceutical manufacturing.",
        icon: Lightbulb,
      },
    ],
    facilities: [
      {
        title: "Pilot Plant",
        text: "Scale-up equipment for tablets, capsules and liquid manufacturing.",
        icon: Building2,
      },
      {
        title: "QA/QC Lab",
        text: "Instruments and setups for in-process and finished product quality testing.",
        icon: ShieldCheck,
      },
    ],
    faculty: [
      {
        name: "Prof. P. Ravikumar",
        role: "Professor & Head",
        focus: "GMP and Pharmaceutical Process Engineering",
      },
    ],
    researchFocus: [
      {
        title: "Continuous Manufacturing",
        text: "Research on continuous processing technologies for solid oral dosage forms.",
        icon: Building2,
        lead: "Prof. P. Ravikumar",
        projects: "2 active projects",
      },
    ],
    careers: [
      {
        title: "Production Pharmacist",
        text: "Manage manufacturing operations in pharma production facilities.",
        icon: Building2,
      },
      {
        title: "Quality Assurance Officer",
        text: "Ensure product quality and regulatory compliance in pharma companies.",
        icon: ShieldCheck,
      },
    ],
    updates: [
      {
        date: "Apr 11",
        title: "Pharma industry visit to Hyderabad manufacturing unit arranged",
        tag: "NOTICE",
      },
    ],
  },
};

export function getDepartmentPage(departmentId: string): DepartmentPageData {
  return departmentPages[departmentId] ?? departmentPages["computer-science-and-engineering"];
}

export function slugFromDepartmentName(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
