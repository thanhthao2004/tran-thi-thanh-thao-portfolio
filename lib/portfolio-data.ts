export const personalInfo = {
  name: "Tran Thi Thanh Thao",
  title: "Data Engineer · Data Analyst · Business Analyst",
  tagline: "Building intelligent data systems that turn raw information into strategic decisions.",
  email: "thaotran.analyst@gmail.com",
  phone: "+84 812 794 270",
  linkedin: "https://www.linkedin.com/in/tran-thi-thanh-thao-98b4812a8/",
  github: "https://github.com/thanhthao2004",
  location: "Ho Chi Minh City, Vietnam",
}

export const about = {
  headline: "Turning raw data into decisions that move businesses forward.",
  story: [
    {
      icon: "graduation",
      title: "Final-year @ IUH",
      text: "Information Systems student, GPA 8.4, building a multi-tenant data lakehouse as my thesis project.",
    },
    {
      icon: "code",
      title: "Data pipelines & insights",
      text: "From CDC ingestion to BI dashboards — I own the full lifecycle: design, build, ship.",
    },
    {
      icon: "people",
      title: "Mentor & community builder",
      text: "Python mentor at IUH AI Club; data analytics instructor at MindX — 8+ cohort members, 90% project completion lift.",
    },
  ],
  highlights: [
    { label: "GPA", value: "8.4/10", detail: "Latest semester" },
    { label: "Certifications", value: "8+", detail: "Google, IBM, AWS" },
    { label: "Learners Mentored", value: "8+", detail: "Per cohort at MindX" },
    { label: "Model Accuracy", value: "86%", detail: "Churn prediction" },
  ],
  focus: [
    "Data Engineering & ETL",
    "Business Analysis",
    "Data Warehousing & Lakehouse",
    "Predictive Modeling",
    "BI Dashboards & Reporting",
  ],
}

export const education = {
  university: "Industrial University of Ho Chi Minh City",
  universityShort: "IUH",
  degree: "Bachelor of Information Systems",
  gpa: "8.4/10",
  gpaNote: "Latest semester",
  expectedGraduation: "Aug 2026",
  coursework: [
    "Requirements Management & Analysis",
    "Systems Analysis & Design",
    "Data Mining",
    "Project Management",
    "RDBMS",
    "Enterprise Resource Planning (ERP)",
  ],
}

export const experience = {
  company: "MindX Technology Center",
  role: "Data Analytics Mentor",
  type: "Part-time",
  duration: "Sep 2025 - Present",
  responsibilities: [
    "Facilitated intensive training sessions on core data analytics stacks (SQL, Python, Excel, Power BI) for cohorts of 8+ learners",
    "Engineered business intelligence projects simulating real-world client scenarios, guiding students through data extraction to visualization",
    "Mentored individuals on analytical problem-solving, resulting in high engagement and a 90% improvement in cohort project completion rates",
  ],
}

export const featuredProject = {
  title: "Lakehouse Integrator — Multi-Tenant Data Lakehouse Platform",
  subtitle: "Thesis Project | End-to-End Data Platform",
  description:
    "A production-style, multi-tenant lakehouse platform that unifies ingestion, transformation, governance and BI under a single control plane. Built with a thesis partner — the repository is private as this is an active thesis submission. The platform ingests from heterogeneous RDBMS sources into a medallion architecture (Bronze → Silver → Gold) on Apache Iceberg, with tenant isolation enforced by identity rather than Kubernetes namespaces.",
  role: "Data Architect & Platform Engineer",
  duration: "2025 — Present",
  impact: "Unifies ingestion, transformation and BI into one self-service platform with tenant isolation by design.",
  privateNote: "This project is a collaborative thesis and the GitHub repository is kept private during the submission period.",
  githubUrl: "https://github.com/thanhthao2004",
  architectureZones: [
    {
      name: "Bronze",
      purpose: "Raw & Landed",
      engine: "SeaTunnel Zeta",
      description: "CDC streams & file uploads land here with minimal normalization.",
    },
    {
      name: "Silver",
      purpose: "Cleaned & Conformed",
      engine: "Apache Spark",
      description: "Validated, deduped data ready for analytics joins.",
    },
    {
      name: "Gold",
      purpose: "Curated Marts",
      engine: "Apache Spark",
      description: "Facts, dimensions, SCD Type 2 and aggregations.",
    },
  ],
  capabilities: [
    {
      title: "Tenant Isolation by Identity",
      description:
        "One user maps to exactly one tenant. Shared K8s namespaces with RBAC, workload labels and Hibernate Filters enforce tenant scoping at the data layer — no per-tenant namespaces required.",
    },
    {
      title: "Iceberg Medallion Architecture",
      description:
        "Canonical addressing: <zone>.<tenant_slug>.<entity>. One catalog per zone, one MinIO bucket per tenant, consistent warehouse paths across Bronze/Silver/Gold.",
    },
    {
      title: "Engine-Derived Pipelines",
      description:
        "Compiler auto-routes: ingestion → Zeta, transform/publish → Spark. Users write manifests (not engine code) and the platform validates zone progression, merge keys and CDC options.",
    },
    {
      title: "Event-Driven Execution",
      description:
        "Unified MinIO webhook with path routing handles file uploads AND Iceberg commit notifications. Async Spring event model returns run IDs in <100ms; WebSocket streams status back.",
    },
    {
      title: "Real-Time Notifications",
      description:
        "STOMP over SockJS delivers 12 categories of live updates — run status, dataset commits, upload progress, quality results — over a tenant-scoped topic hierarchy secured by JWT.",
    },
    {
      title: "Data Quality & Validation",
      description:
        "Reusable Quality Rules (NOT_NULL, RANGE, REGEX, UNIQUENESS, REFERENTIAL_INTEGRITY, FRESHNESS) composed into Profiles with FAIL / SKIP / ROUTE_TO_TABLE error handling.",
    },
    {
      title: "Self-Service Integrations Plane",
      description:
        "Per-tenant provisioning for MinIO buckets, Trino schemas (bronze/silver/gold) and Superset connections with 4-role RBAC (Tenant Admin, Data Engineer, Analyst, BA).",
    },
    {
      title: "SSO-Style Link-Outs",
      description:
        "Short-lived redirects to Superset (JWT login) and MinIO Console (STS credentials, ≤5 min) — no iframe embedding, fully audited.",
    },
  ],
  highlights: [
    "Medallion lakehouse (Bronze/Silver/Gold) on Apache Iceberg with canonical <zone>.<tenant>.<entity> addressing",
    "Ingestion via SeaTunnel Zeta (files + RDBMS CDC); Transform/Publish via Apache Spark with compiler-enforced engine routing",
    "Multi-tenant isolation via RBAC, workload labels and Hibernate Filters — shared K8s namespaces, zero per-tenant overhead",
    "Async pipeline execution (<100ms API response) with Spring events, thread-pool dispatch and WebSocket status streaming",
    "Event-driven dataset registration on Iceberg commit via unified MinIO webhook — streaming-safe, sub-second visibility",
    "Integrations plane with self-service MinIO / Trino / Superset provisioning and SSO-style short-lived link-outs",
    "Data quality framework with reusable rules, profiles and FAIL / SKIP / ROUTE_TO_TABLE error routing",
  ],
  technologies: [
    "Apache Iceberg",
    "Apache Spark",
    "SeaTunnel Zeta",
    "Trino",
    "Apache Superset",
    "MinIO",
    "Kubernetes",
    "Spring Boot",
    "STOMP / WebSocket",
    "Quartz",
    "PostgreSQL",
    "MySQL",
    "SQL Server",
  ],
}

// Career role types
export type CareerRole = "Data Engineer" | "Data Analyst" | "Business Analyst"

export const projects = [
  {
    id: 1,
    title: "Customer Analytics Lakehouse Pipeline",
    description:
      "End-to-end lakehouse pipeline for customer analytics — ingesting, transforming and surfacing insights across the full data lifecycle. Currently in active development.",
    category: "Data Engineering",
    roles: ["Data Engineer", "Data Analyst"] as CareerRole[],
    role: "Data Engineer / Data Analyst",
    year: "2025",
    status: "in-progress" as const,
    githubUrl: "https://github.com/thanhthao2004/Customer-Analytics-Lakehouse-Pipeline",
    technologies: ["Python", "Apache Spark", "PostgreSQL", "MinIO", "Docker"],
    achievements: [
      "End-to-end lakehouse architecture for customer data",
      "Automated ingestion and transformation layers",
      "BI-ready data model for analytics consumers",
      "Active development — implementation in progress",
    ],
  },
  {
    id: 2,
    title: "Automated Data Warehouse & Analytics (VnExpress)",
    description:
      "Engineered an automated ETL pipeline using Docker, Selenium and PySpark to ingest and process 1,000+ daily search records into PostgreSQL with Power BI dashboards.",
    category: "Data Engineering",
    roles: ["Data Engineer"] as CareerRole[],
    role: "Data Engineer / Analyst",
    year: "2024",
    status: "completed" as const,
    githubUrl: "https://github.com/thanhthao2004/Data_Engineer_VnExpress",
    technologies: ["Docker", "Selenium", "PySpark", "PostgreSQL", "Power BI"],
    achievements: [
      "Automated ETL pipeline processing 1,000+ daily records",
      "Power BI executive dashboard for search trend visualization",
      "Identified 'Pediatrics' as primary traffic driver",
      "Data-backed recommendation to increase specialized health content by 20%",
    ],
  },
  {
    id: 3,
    title: "Agentic AI — RAG System with Multiple Agent Strategies",
    description:
      "Implemented three Agentic AI architectures: Single-Agent RAG, Corrective Agent RAG and Adaptive Agent RAG — comparing retrieval accuracy and response quality across strategies.",
    category: "Data Engineering",
    roles: ["Data Engineer"] as CareerRole[],
    role: "AI / Data Engineer",
    year: "2025",
    status: "completed" as const,
    githubUrl: "https://github.com/thanhthao2004/Agentic_AI",
    technologies: ["Python", "LangChain", "RAG", "Vector DB", "Jupyter"],
    achievements: [
      "3 agent architectures: Single, Corrective, Adaptive RAG",
      "Comparative evaluation of retrieval quality",
      "Modular design for swappable LLM backends",
      "Documented performance tradeoffs per strategy",
    ],
  },
  {
    id: 4,
    title: "Customer Churn Prediction & Retention Analysis",
    description:
      "EDA on 10K+ customer records using SQL and Pandas to identify behavioral patterns. Developed ML models for churn prediction, reaching 86% accuracy with XGBoost.",
    category: "Machine Learning",
    roles: ["Data Analyst"] as CareerRole[],
    role: "Data Analyst",
    year: "2024",
    status: "completed" as const,
    githubUrl: "https://github.com/thanhthao2004/Churn_prediction",
    technologies: ["Python", "SQL", "Pandas", "Random Forest", "XGBoost", "Scikit-learn"],
    achievements: [
      "EDA on 10K+ customer records",
      "86% accuracy in predicting customer churn",
      "Identified contract type and tenure as critical churn drivers",
      "Designed targeted retention campaigns for high-risk segments",
    ],
  },
  {
    id: 5,
    title: "Vietnam University Admission Score Prediction",
    description:
      "Applied regression models on crawled admission data to forecast university admission trends and support data-driven decision-making.",
    category: "Data Analysis & Research",
    roles: ["Data Analyst"] as CareerRole[],
    role: "Data Analyst / Researcher",
    year: "2024",
    status: "completed" as const,
    githubUrl: "https://github.com/thanhthao2004/CrawlData_Vietnam_University_Admission_Scores_in2024",
    technologies: ["Python", "Selenium", "Random Forest", "XGBoost", "Pandas", "Matplotlib"],
    achievements: [
      "Web-scraped 2024 university admission score dataset",
      "Applied ML regression models on historical data",
      "Forecasted admission trends with measurable accuracy",
      "Published findings to support prospective students",
    ],
  },
  {
    id: 6,
    title: "Data Analytics Framework for Web3 Campaign Strategies",
    description:
      "Analytical framework for optimizing Web3 marketing campaigns — integrating on-chain data, user behavior metrics and campaign analytics into a unified dashboard.",
    category: "Business Analytics",
    roles: ["Business Analyst", "Data Analyst"] as CareerRole[],
    role: "Business Analyst / Data Analyst",
    year: "2025",
    status: "completed" as const,
    githubUrl: "https://github.com/thanhthao2004/Data-Analytics-Framework-for-Optimizing-Web3-Campaign-Strategies",
    technologies: ["Python", "SQL", "Pandas", "Power BI", "On-chain Data"],
    achievements: [
      "Unified framework across on-chain and off-chain data",
      "Campaign performance KPI dashboard",
      "Segmented audience analysis for targeted Web3 campaigns",
      "Strategy recommendations backed by data evidence",
    ],
  },
  {
    id: 7,
    title: "Middle School Equipment Management System",
    description:
      "Full-stack web application for managing school equipment inventory, purchase orders and maintenance records — designed for real-world institutional use.",
    category: "Business Analysis & Systems",
    roles: ["Business Analyst"] as CareerRole[],
    role: "Business Analyst / Full-stack Developer",
    year: "2025",
    status: "completed" as const,
    githubUrl: "https://github.com/thanhthao2004/middle-school-equipment-management",
    technologies: ["Node.js", "EJS", "PostgreSQL", "Express", "Docker"],
    achievements: [
      "Full requirements analysis and system design (UML)",
      "Role-based access control for admin, staff and viewer",
      "Purchase plan workflow with approval stages",
      "Deployed via Docker for institutional use",
    ],
  },
  {
    id: 8,
    title: "AES-Encrypted Student Management System",
    description:
      "PHP-based student management system with AES encryption to protect sensitive student data — demonstrating security-aware application design and data privacy best practices.",
    category: "Security & Systems",
    roles: ["Business Analyst"] as CareerRole[],
    role: "Developer / Security Implementer",
    year: "2025",
    status: "completed" as const,
    githubUrl: "https://github.com/thanhthao2004/AES-Encrypted-Student-Management-System-by-PHP",
    technologies: ["PHP", "MySQL", "AES Encryption", "Bootstrap"],
    achievements: [
      "AES-256 encryption for sensitive student records",
      "Secure login with session management",
      "CRUD operations with encrypted storage layer",
      "Demonstrated data privacy and security knowledge",
    ],
  },
  {
    id: 9,
    title: "EProject Phase 1 — Microservices & CI/CD",
    description:
      "Microservices-based web project with a fully automated CI/CD pipeline using GitHub Actions — showcasing DevOps practices, containerization and service orchestration.",
    category: "DevOps & Systems",
    roles: ["Business Analyst"] as CareerRole[],
    role: "Developer / DevOps",
    year: "2025",
    status: "completed" as const,
    githubUrl: "https://github.com/thanhthao2004/EProject-Phase-1",
    technologies: ["JavaScript", "Docker", "GitHub Actions", "Microservices", "REST API"],
    achievements: [
      "Microservices architecture with independent service deployment",
      "GitHub Actions CI/CD pipeline — automated build, test, deploy",
      "Containerized services with Docker Compose",
      "API gateway pattern for inter-service communication",
    ],
  },
]

export const skillCategories = [
  {
    title: "Data Engineering",
    skills: [
      "Apache Spark",
      "Apache Iceberg",
      "SeaTunnel (CDC)",
      "Trino",
      "PySpark",
      "Docker & Kubernetes",
      "Apache Kafka",
      "MinIO / S3",
      "ETL / ELT Pipelines",
      "Medallion Architecture",
      "Spring Boot",
      "WebSocket / STOMP",
    ],
  },
  {
    title: "Data Analysis & BI",
    skills: [
      "SQL (CTEs, Window Functions)",
      "Python (Pandas, NumPy)",
      "Scikit-learn / XGBoost",
      "Power BI (DAX)",
      "Advanced Excel",
      "Exploratory Data Analysis",
      "Predictive Modeling",
      "A/B Testing Concepts",
      "Statistical Analysis",
      "Data Storytelling",
    ],
  },
  {
    title: "Business Analysis",
    skills: [
      "Requirements Elicitation",
      "Systems Analysis & Design",
      "UML / BPMN Diagrams",
      "User Story Mapping",
      "Stakeholder Management",
      "Agile / Scrum",
      "Project Management",
      "ERP Concepts",
      "Data Governance",
      "Process Optimization",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git & GitHub",
      "GitHub Actions (CI/CD)",
      "PostgreSQL",
      "MySQL / SQL Server",
      "MongoDB",
      "AWS (S3, RDS)",
      "Azure SQL",
      "Jupyter Notebook",
      "Apache Superset",
      "JIRA / Notion",
    ],
  },
]

export const activities = [
  {
    organization: "AI Club - IUH",
    role: "Active Member & Python Mentor",
    duration: "2023 - Present",
    description: "Active member of the AI Club, engaging in academic activities and sharing knowledge on artificial intelligence.",
    highlights: [
      "Engaging in academic AI activities",
      "Mentor for Python courses",
      "Assisting peers in learning and applying Python programming",
      "Knowledge sharing on artificial intelligence",
    ],
  },
]

export const certifications = [
  {
    title: "Google Agile Essentials",
    issuer: "Google",
    year: "Dec 2025",
    credential: "Agile Methodology",
    link: "https://coursera.org/share/2b098dc03152404e910370bda814cdb9",
  },
  {
    title: "Foundations of Data Science",
    issuer: "Google",
    year: "Dec 2025",
    credential: "Data Science",
    link: "https://coursera.org/share/9347eba21aa4b3e52e2c4af457e0f7fc",
  },
  {
    title: "Assessment for Data Analysis and Visualization Foundation",
    issuer: "Google",
    year: "Jan 2025",
    credential: "Data Analysis",
    link: "https://coursera.org/share/b9b64e5e487af8ca61bd1253a79c41bd",
  },
  {
    title: "Machine Learning with Python",
    issuer: "IBM",
    year: "Jan 2025",
    credential: "Machine Learning",
    link: "https://coursera.org/share/04593a3828c7ac9477935f44ad68576c",
  },
  {
    title: "Data Visualization & Dashboards with Excel and Cognos",
    issuer: "IBM",
    year: "Jan 2025",
    credential: "Data Visualization",
    link: "https://coursera.org/share/0076287cb4a22c7d3a4eaf10aa235b99",
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
    year: "Dec 2024",
    credential: "Python & AI",
    link: "https://coursera.org/share/916722cd11c10b6d429cbc1b8e729c74",
  },
  {
    title: "Data Analytics & Databases on AWS",
    issuer: "Amazon Web Services",
    year: "Dec 2024",
    credential: "AWS Analytics",
    link: "https://coursera.org/share/092cd0aa58e1c9809f568b545f429190",
  },
  {
    title: "Advanced Relational Database and SQL",
    issuer: "Coursera Project Network",
    year: "Dec 2024",
    credential: "SQL & Databases",
    link: "https://coursera.org/share/5e4d011f5acfe26b8ac6c8479620edee",
  },
]

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#featured", label: "Featured" },
  { href: "#career", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
]

export const careerRoles = [
  {
    id: "Data Engineer",
    label: "Data Engineer",
    iconName: "database",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    summary: "I design and build scalable data infrastructure — from CDC ingestion pipelines to multi-tenant lakehouse platforms. I work across the full stack: orchestration, transformation engines, storage formats and real-time streaming.",
    keySkills: ["Apache Spark", "Apache Iceberg", "SeaTunnel CDC", "PySpark", "Trino", "Docker / Kubernetes", "ETL Pipelines", "MinIO / S3"],
  },
  {
    id: "Data Analyst",
    label: "Data Analyst",
    iconName: "chart",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    summary: "I turn messy, real-world data into clear, actionable insights. From exploratory analysis to predictive modeling, I use SQL, Python and Power BI to surface the patterns that drive business decisions.",
    keySkills: ["SQL (Window Functions, CTEs)", "Python (Pandas, Scikit-learn)", "Power BI (DAX)", "EDA", "XGBoost / Random Forest", "Statistical Analysis", "Data Storytelling"],
  },
  {
    id: "Business Analyst",
    label: "Business Analyst",
    iconName: "briefcase",
    color: "text-violet-400",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/30",
    summary: "I bridge the gap between business needs and technical solutions. With a background in systems analysis, requirements management and Agile, I translate stakeholder goals into clear system specifications and data strategies.",
    keySkills: ["Requirements Analysis", "Systems Design & UML", "User Story Mapping", "Agile / Scrum", "Process Optimization", "Data Governance", "Stakeholder Communication"],
  },
]
