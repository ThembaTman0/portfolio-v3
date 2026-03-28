export const NAV_LINKS = [
  { href: "#about", key: "about", label: "About" },
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
  { name: "SQL / PostgreSQL", proficiency: "3+ years", category: "Data" },
  { name: "Git & CI/CD", proficiency: "3+ years", category: "DevOps" },
  { name: "Docker", proficiency: "2+ years", category: "DevOps" },
  { name: "AWS", proficiency: "1 year", category: "Cloud" },
  { name: "React", proficiency: "2+ years", category: "Frontend" },
  { name: "TypeScript", proficiency: "2+ years", category: "Frontend" },
  { name: "Next.js", proficiency: "2+ years", category: "Frontend" },
  { name: "Python", proficiency: "Honours Research", category: "AI / ML" },
  { name: "TensorFlow", proficiency: "Honours Research", category: "AI / ML" },
];

export const PROJECTS = [
  {
    id: "01",
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
  },
  {
    id: "03",
    title: "Portfolio V2",
    subtitle: "Next.js · TypeScript · Design",
    description:
      "This portfolio built with Next.js, TypeScript and Tailwind CSS. Dark editorial design with clean typography and minimal animations.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/ThembaTman0/Portfolio-V2",
    demo: "https://thembangobeni.netlify.app",
  },
  {
    id: "04",
    title: "Eataliano v2 — Recipe Discovery Platform",
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
  },
];

export const EXPERIENCE = [
  {
    role: "Java Developer",
    company: "First National Bank (FNB) - Foreign Exchange",
    period: "2023 - Present",
    description:
      "Building backend systems for FNB's foreign exchange division the engine behind currency conversions and international money transfers for millions of customers. Working on modernising older codebases, improving system reliability, scalability, and ease of deployment.",
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
