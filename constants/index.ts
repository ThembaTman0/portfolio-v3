// Keep in page order (app/page.tsx): Navbar's active-link highlight picks the
// first visible section in this array's order.
export const NAV_LINKS = [
  { href: "#about", key: "about", label: "About" },
  { href: "#experience", key: "experience", label: "Experience" },
  { href: "#skills", key: "skills", label: "Skills" },
  { href: "#projects", key: "projects", label: "Projects" },
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
  { name: "SQL / MySQL", proficiency: "3+ years", category: "Data" },
  { name: "Git & CI/CD", proficiency: "3+ years", category: "DevOps" },
  { name: "Docker", proficiency: "2+ years", category: "DevOps" },
  // { name: "AWS", proficiency: "1 year", category: "Cloud" },
  { name: "React", proficiency: "2+ years", category: "Frontend" },
  { name: "TypeScript", proficiency: "2+ years", category: "Frontend" },
  { name: "Next.js", proficiency: "2+ years", category: "Frontend" },
  { name: "Python", proficiency: "Honours Research", category: "AI / ML" },
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
  // Optional third link: a long-form technical writeup about the project.
  writeup?: string;
  writeupLabel?: string;
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
    title: "SynthForge",
    subtitle: "Java 21 · Spring Boot · Maven Central",
    description:
      "A JPA-aware fake data seeding library for Spring Boot, published to Maven Central. Faker generates realistic values but has no idea your entities are related. SynthForge reads JPA relationships directly and seeds a valid, correctly ordered object graph from a single annotation, with no seed script to write or maintain.",
    tags: [
      "Java 21",
      "Spring Boot",
      "JPA / Hibernate",
      "Datafaker",
      "Maven Central",
    ],
    github: "https://github.com/ThembaTman0/synthforge",
    demo: "https://central.sonatype.com/artifact/io.github.thembatman0/synthforge-spring",
    demoLabel: "Maven Central",
    writeup:
      "https://dev.to/themba/faker-doesnt-know-your-entities-are-related-so-i-built-something-that-does-2jgn",
    writeupLabel: "Article",
    caseStudy: {
      problem:
        "Most fake-data libraries generate convincing values in isolation. The moment one entity depends on another, like a payment referencing a counterparty, you're back to hand-writing a seed script: create parents first, hold their IDs, wire children to them, and hope nothing violates a constraint along the way. That script rots the first time the schema changes.",
      approach:
        "SynthForge reads JPA entities the way Hibernate does, through the jakarta.persistence.metamodel.Metamodel API, and builds a dependency graph from owning-side relationships. A topological sort guarantees parent rows exist before any child is generated to reference them. Constraint-aware generation handles @NotNull, @Size and unique columns with a bounded retry loop rather than a thrown exception, so what comes out is structurally valid, not just plausible-looking.",
      impact:
        "The entity becomes the seed script: annotate it with @Seed(count = 50), start the app in a dev profile, and the tables populate in the correct order on every restart. Published to Maven Central after being proven against two independent Spring Boot projects, with a longer technical writeup on the design decisions behind it.",
    },
  },
  {
    id: "02",
    title: "Bankwave V2.0 - Microservices Banking Platform",
    subtitle: "Java · Spring Boot · Microservices",
    description:
      "A microservices-based banking backend built with Spring Boot and Spring Cloud, demonstrating centralised configuration and containerised deployment for scalable financial systems.",
    tags: [
      "Java 21",
      "Spring Boot 3",
      "Spring Cloud",
      "Docker",
      "MySQL",
    ],
    github: "https://github.com/ThembaTman0/Bankwave-V-2.0",
    demo: null,
    caseStudy: {
      problem:
        "Monolithic banking backends are hard to scale, deploy, and reason about. A single change risks the whole system, and teams can't ship independently.",
      approach:
        "Decomposed the domain into independently deployable Spring Boot services with centralised configuration via Spring Cloud Config and Docker-based local orchestration mirroring production topology.",
      impact:
        "Each service ships as its own container image with its own MySQL database. The same images run under the default, QA and prod profiles, pulling their settings from the Config Server, and Docker Compose health checks hold each service back until its database and the Config Server are ready.",
    },
  },
  {
    id: "03",
    title: "Satellite Image Classification",
    subtitle: "Python · HOG + DAISY · SVM",
    description:
      "An IEEE-published study, co-authored with Ritesh Ajoodha, on classifying satellite land use with a classical feature-descriptor pipeline: global HOG and local DAISY features combined through Bag of Features and classified with an SVM, reaching 81.76% accuracy across 21 scene categories on the UC Merced dataset.",
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
        "The hybrid model reached 81.76% accuracy, ahead of the 80.00% previously reported for an Inception-v3-CapsNet deep-learning approach on the same dataset. Published on IEEE Xplore and since cited in subsequent research.",
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
      "Working on TCIB, a real-time cross-border payments platform for the SADC region, integrated with three regional banking partners and live since 2024. Built Spring Boot transformation microservices for the SWIFT MT to ISO 20022 MX migration, with XSD validation enforced at the inbound boundary. The integrations with the legacy bank systems run over SOAP web services. Built the Spring Boot API connecting the Illicit Flow Fraud Model into the live payments pipeline, and support it in production as part of the on-call rotation.",
    tech: [
      "Java",
      "Java EE",
      "Apache Wicket",
      "Spring Boot",
      "JPA/Hibernate",
      "Apache ActiveMQ",
      "MySQL",
      "Oracle SQL",
      "XML/XSD",
      "REST",
      "SOAP",
    ],
  },
  {
    role: "Full Stack Developer - Internship",
    company: "Avior Labs",
    period: "2022 Nov - 2022 Dec",
    description:
      "Two-month internship contributing to software tooling for autonomous drone systems. Worked on image processing components supporting UAV flight simulation pipelines. Also worked on a React document storage system that let managers filter and sort the specific clients they work with, using an internal sorting system.",
    tech: ["Python", "OpenCV", "Image Processing", "Computer Vision", "React"],
  },
];

export const EDUCATION = [
  {
    degree: "BSc Honours in Mathematical Sciences",
    institution: "University of the Witwatersrand",
    period: "2022",
    description:
      "Built a strong foundation in pure and applied mathematics alongside computer science fundamentals covering data structures, algorithms, and software engineering, with a specialisation in applied machine learning.",
    tags: ["Algorithms", "ML", "Software Engineering"],
  },
  {
    degree: "BSc Computer Science",
    institution: "University of the Witwatersrand",
    period: "2020",
    description:
      "Undergraduate degree in computer science, covering programming, data structures, and algorithms.",
    tags: ["Programming", "Data Structures", "Algorithms"],
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
