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
        "Monolithic banking backends are hard to scale, deploy, and reason about - a single change risks the whole system, and teams can't ship independently.",
      approach:
        "Decomposed the domain into independently deployable Spring Boot services with Eureka service discovery, centralized configuration via Spring Cloud Config, and Docker-based local orchestration mirroring production topology.",
      impact:
        "Each service builds, tests, and deploys on its own lifecycle. The architecture demonstrates the patterns used in real financial platforms: resilience, discoverability, and configuration as code.",
    },
  },
  {
    id: "02",
    title: "Satellite Image Classification",
    subtitle: "Python · Deep Learning · Remote Sensing",
    description:
      "Built an end-to-end image classification workflow involving preprocessing, feature extraction, and machine learning model evaluation as part of an honours-level research project.",
    tags: [
      "Python",
      "TensorFlow",
      "CNN",
      "Remote Sensing",
      "Image Classification",
    ],
    github: "https://github.com/ThembaTman0/SATELLITE-IMAGE-CLASSIFICATION",
    demo: null,
    caseStudy: {
      problem:
        "Classifying land cover from satellite imagery by hand is slow and subjective; the research question was whether deep learning could do it reliably at scale.",
      approach:
        "Built an end-to-end pipeline - image preprocessing, feature extraction, CNN model training, and rigorous evaluation across architectures - as an honours-level research project.",
      impact:
        "Produced a reproducible classification workflow and a comparative analysis of model performance, grounding my engineering work in scientific method and measurement.",
    },
  },
  {
    id: "03",
    title: "Portfolio V2",
    subtitle: "Next.js · TypeScript · Design",
    description:
      "The previous iteration of this site, built with Next.js, TypeScript and Tailwind CSS. Dark editorial design with clean typography and minimal animations.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/ThembaTman0/Portfolio-V2",
    demo: "https://thembangobeni.netlify.app",
    caseStudy: {
      problem:
        "Most developer portfolios look like templates - they say nothing about how the developer actually thinks about design, performance, or detail.",
      approach:
        "Designed a dark editorial system from scratch: serif display type, a restrained gold accent, canvas-based ambient animation, and motion that respects user preferences.",
      impact:
        "A personal brand that reads as deliberate craft rather than a theme - every interaction, easing curve, and hairline border is intentional.",
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
    caseStudy: {
      problem:
        "The original app coupled data fetching, state, and presentation, making features slow to add and the UI janky under network latency.",
      approach:
        "Rebuilt on React 18 with a clean separation of concerns: a service layer with in-memory TTL caching, custom hooks for data and debounced search, lazy-loaded routes, and skeleton loading states.",
      impact:
        "Instant-feeling search with autocomplete, smooth page transitions, and a codebase where each layer can change independently - a production-grade frontend architecture.",
    },
  },
];

export const EXPERIENCE = [
  {
    role: "Java Developer",
    company: "First National Bank (FNB) - Foreign Exchange",
    period: "2023 - Present",
    description:
      "Building backend systems for FNB's foreign exchange division - the engine behind currency conversions and international money transfers for millions of customers. Modernising older codebases and improving system reliability, scalability, and ease of deployment.",
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
