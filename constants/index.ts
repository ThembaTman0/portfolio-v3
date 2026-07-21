export const NAV_LINKS = [
  { href: "#about", key: "about", label: "About" },
  { href: "#skills", key: "skills", label: "Skills" },
  { href: "#projects", key: "projects", label: "Projects" },
  { href: "#experience", key: "experience", label: "Experience" },
  { href: "#contact", key: "contact", label: "Contact" },
];

export const SKILLS = [
  {
    name: "Java",
    proficiency: "3+ years",
    category: "Backend",
  },
  { name: "Spring Boot", proficiency: "3+ years", category: "Backend" },
  { name: "REST APIs", proficiency: "3+ years", category: "Backend" },
  { name: "SQL / PostgreSQL", proficiency: "3+ years", category: "Data" },
  { name: "Git & CI/CD", proficiency: "3+ years", category: "DevOps" },
  { name: "Docker", proficiency: "2+ years", category: "DevOps" },
  // { name: "AWS", proficiency: "1 year", category: "Cloud" },
  { name: "React", proficiency: "2+ years", category: "Frontend" },
  { name: "TypeScript", proficiency: "2+ years", category: "Frontend" },
  { name: "Next.js", proficiency: "2+ years", category: "Frontend" },
  { name: "Python", proficiency: "Honours Research", category: "AI / ML" },
  { name: "TensorFlow", proficiency: "Honours Research", category: "AI / ML" },
];

export interface Project {
  id: string;
  featured?: boolean;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  github: string | null;
  demo: string | null;
  // Overrides the default "Live" text on the demo link (e.g. "Paper" for a
  // publication rather than a running app).
  demoLabel?: string;
  // Optional real screenshot for the case-study visual; falls back to a
  // generated placeholder frame (see ProjectVisual) when omitted.
  image?: string;
  caseStudy: {
    problem: string;
    approach: string;
    impact: string;
  } | null;
}

export const PROJECTS: Project[] = [
  {
    id: "01",
    featured: true,
    title: "Bankwave V2.0 - Microservices Banking Platform",
    subtitle: "Java · Spring Boot · Microservices",
    description:
      "A microservices-based banking backend built with Spring Boot and Spring Cloud, demonstrating service discovery, centralized configuration, and containerized deployment for scalable financial systems.",
    tags: [
      "Java 17",
      "Spring Boot 3",
      "Spring Cloud",
      "Eureka",
      "Docker",
      "MySQL",
    ],
    github: "https://github.com/ThembaTman0/Bankwave-V-2.0",
    demo: null,
    caseStudy: {
      problem:
        "Monolithic banking backends are hard to scale, deploy, and reason about. A single change risks the whole system, and teams can't ship independently.",
      approach:
        "Decomposed the domain into independently deployable Spring Boot services with Eureka service discovery, centralized configuration via Spring Cloud Config, and Docker-based local orchestration mirroring production topology.",
      impact:
        "Each service builds, tests, and deploys on its own lifecycle. The architecture demonstrates the patterns used in real financial platforms: resilience, discoverability, and configuration as code.",
    },
  },
  {
    id: "02",
    title: "SynthForge - JPA-Aware Data Seeding for Spring Boot",
    subtitle: "Java 21 · Spring Boot · Maven",
    description:
      "A JPA-aware fake data seeding library for Spring Boot: annotate an entity with @Seed, start the app in a dev profile, and the database fills with realistic, relationship-consistent rows. Parent-before-child ordering is correct, seeding is profile-gated so it can never touch production, and it's idempotent across restarts.",
    tags: [
      "Java 21",
      "Spring Boot",
      "JPA / Hibernate",
      "Maven Multi-Module",
      "Datafaker",
    ],
    github: "https://github.com/ThembaTman0/synthforge",
    demo: null,
    caseStudy: {
      problem:
        "Getting realistic, relationally-consistent data into a running Spring Boot app usually means hand-written SQL fixtures or ad hoc seeding code that drifts from the schema and risks leaking into production.",
      approach:
        "Built a JPA-aware seeding library around an @Seed annotation: entity scanning and generator resolution in synthforge-core, a topological seed graph that orders parents before children across owning @ManyToOne/@OneToOne relationships, and Spring Boot autoconfiguration that only activates on explicitly enabled profiles.",
      impact:
        "Startup seeding is idempotent (tables with existing rows are skipped) and constraint-aware (@NotNull, @Size, @Email, unique columns), validated by unit and integration tests against a demo app on H2. A public, gated roadmap only opens further scope once real usage justifies it.",
    },
  },
  {
    id: "03",
    title: "Satellite Image Classification",
    subtitle: "Python · HOG + DAISY · SVM",
    description:
      "An IEEE-published study on classifying satellite land use with a classical feature-descriptor pipeline: global HOG and local DAISY features combined through Bag of Features and classified with an SVM, reaching 81.42% accuracy across 21 scene categories on the UC Merced dataset.",
    tags: [
      "Python",
      "scikit-learn",
      "HOG",
      "DAISY",
      "SVM",
      "Bag of Features",
    ],
    github: "https://github.com/ThembaTman0/SATELLITE-IMAGE-CLASSIFICATION",
    demo: "https://ieeexplore.ieee.org/abstract/document/9988636",
    demoLabel: "Paper",
    caseStudy: {
      problem:
        "High-resolution satellite imagery is collected far faster than it can be labelled by hand. The research question: how well can a classical feature-descriptor pipeline classify land use without the data volume and compute that deep learning demands?",
      approach:
        "Combined global (HOG) and local (DAISY) descriptors through a Bag of Features pipeline (Mini-Batch K-Means encoding with L2 pooling), then classified with an SVM (RBF kernel), validated by 10-fold cross-validation across 21 UC Merced land-use classes.",
      impact:
        "The hybrid model reached 81.42% accuracy and beat an Inception-v3-CapsNet deep-learning baseline at this dataset scale. Published on IEEE Xplore and since cited in subsequent research, it shows a well-tuned classical pipeline can outperform data-hungry deep models when samples are limited.",
    },
  },
  {
    id: "04",
    title: "Eataliano v2 - Recipe Discovery Platform",
    subtitle: "React · Framer Motion · REST API",
    description:
      "A full recipe discovery app rebuilt from the ground up with React 18, featuring a debounced live-search with autocomplete, animated page transitions, and a persistent dark/light theme system. Architected with a clean separation of concerns across custom hooks, a service layer with in-memory TTL caching, and fully lazy-loaded pages. Designed with editorial typography and shimmer skeleton loading states for a polished, production-grade user experience.",
    tags: [
      "React 18",
      "React Router v6",
      "Framer Motion",
      "Styled Components",
      "CSS Variables",
      "REST API",
      "Custom Hooks",
    ],
    github: "https://github.com/ThembaTman0/Eataliano-v2/tree/main",
    demo: "https://eataliano.vercel.app/",
    // Real recipe-detail screenshot (public/projects/eataliano.png).
    image: "/projects/eataliano.png",
    caseStudy: {
      problem:
        "The original app coupled data fetching, state, and presentation, making features slow to add and the UI janky under network latency.",
      approach:
        "Rebuilt on React 18 with a clean separation of concerns: a service layer with in-memory TTL caching, custom hooks for data and debounced search, lazy-loaded routes, and skeleton loading states.",
      impact:
        "Instant-feeling search with autocomplete, smooth page transitions, and a codebase where each layer can change independently: a production-grade frontend architecture.",
    },
  },
];

export const EXPERIENCE = [
  {
    role: "Java Developer",
    company: "First National Bank (FNB) - Foreign Exchange",
    period: "2023 - Present",
    description:
      "Building backend systems for FNB's foreign exchange division, the engine behind currency conversions and international money transfers for millions of customers. Modernising older codebases and improving system reliability, scalability, and ease of deployment.",
    tech: ["Java", "Apache Wicket", "Spring Boot", "REST APIs", "SQL"],
  },
  {
    role: "Full Stack Developer - Internship",
    company: "Avior Labs",
    period: "2022 Nov - 2022 Dec",
    description:
      "Two-month internship contributing to software tooling for autonomous drone systems. Worked on image processing components supporting UAV flight simulation pipelines.",
    tech: ["Python", "OpenCV", "Image Processing", "Computer Vision"],
  },
];

export const SOCIALS = [
  {
    name: "GitHub",
    handle: "@ThembaTman0",
    url: "https://github.com/ThembaTman0",
  },
  {
    name: "LinkedIn",
    handle: "Themba Ngobeni",
    url: "https://www.linkedin.com/in/themba-ngobeni-6a163b164/",
  },
  {
    name: "Email",
    handle: "Get in touch",
    url: "mailto:thembatman0@gmail.com",
  },
];
