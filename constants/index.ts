export const NAV_LINKS = [
  { href: "#about", key: "about", label: "About" },
  { href: "#skills", key: "skills", label: "Skills" },
  { href: "#projects", key: "projects", label: "Projects" },
  { href: "#contact", key: "contact", label: "Contact" },
];

export const SKILLS = [
  { name: "Java", proficiency: "Expert", category: "Backend" },
  { name: "Spring Boot", proficiency: "Expert", category: "Backend" },
  { name: "REST APIs", proficiency: "Expert", category: "Backend" },
  { name: "React", proficiency: "Advanced", category: "Frontend" },
  { name: "TypeScript", proficiency: "Advanced", category: "Frontend" },
  { name: "Next.js", proficiency: "Advanced", category: "Frontend" },
  { name: "Python", proficiency: "Advanced", category: "AI / ML" },
  { name: "TensorFlow", proficiency: "Proficient", category: "AI / ML" },
  { name: "SQL / PostgreSQL", proficiency: "Expert", category: "Data" },
  { name: "Docker", proficiency: "Advanced", category: "DevOps" },
  { name: "Git & CI/CD", proficiency: "Expert", category: "DevOps" },
  { name: "AWS", proficiency: "Proficient", category: "Cloud" },
];

export const PROJECTS = [
  {
    id: "01",
    title: "Bankwave V2.0",
    subtitle: "Java · Spring Boot · Microservices",
    description:
      "Production-ready cloud-native banking backend. Five independently deployable microservices (Accounts, Loans, Cards, Config Server, Eureka Registry), each with its own MySQL database, containerised with Docker Compose.",
    tags: ["Java 17", "Spring Boot 3", "Spring Cloud", "Eureka", "Docker", "MySQL"],
    github: "https://github.com/ThembaTman0/Bankwave-V-2.0",
    demo: null,
  },
  {
    id: "02",
    title: "Satellite Image Classification",
    subtitle: "Python · Deep Learning · Remote Sensing",
    description:
      "A deep learning pipeline for classifying satellite imagery. Trained convolutional models to distinguish land-use categories from high-resolution remote sensing data.",
    tags: ["Python", "TensorFlow", "CNN", "Remote Sensing", "Image Classification"],
    github: "https://github.com/ThembaTman0/SATELLITE-IMAGE-CLASSIFICATION",
    demo: null,
  },
  {
    id: "03",
    title: "Portfolio V3",
    subtitle: "Next.js · TypeScript · Design",
    description:
      "This portfolio — built with Next.js, TypeScript and Tailwind CSS. Dark editorial design with clean typography and minimal animations.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/ThembaTman0/Portfolio-V2",
    demo: "https://thembangobeni.netlify.app",
  },
];

export const EXPERIENCE = [
  {
    role: "Java Developer",
    company: "First National Bank (FNB)",
    period: "2023 — Present",
    description:
      "Shaping the future of banking at FNB, building scalable Java microservices and crafting innovative solutions in financial technology for millions of customers.",
    tech: ["Java", "Spring Boot", "REST APIs", "SQL"],
  },
];

export const SOCIALS = [
  { name: "GitHub", handle: "@ThembaTman0", url: "https://github.com/ThembaTman0" },
  { name: "LinkedIn", handle: "Themba Ngobeni", url: "#" },
  { name: "Email", handle: "Get in touch", url: "mailto:thembangobeni@email.com" },
];
