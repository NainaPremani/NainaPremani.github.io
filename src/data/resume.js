// Single source of truth for portfolio content.
// Update this file when the resume changes -- the components read from it.

export const profile = {
  name: "Naina Premani",
  role: "Frontend Engineer",
  roles: [
    "Frontend Engineer",
    "React & Next.js Developer",
    "Design Systems Engineer",
  ],
  location: "Pune, India",
  email: "nainapremani9@gmail.com",
  phone: "+91 8055407366",
  github: "https://github.com/NainaPremani",
  linkedin: "https://www.linkedin.com/in/naina-premani-974ba715b/",
  resume: process.env.PUBLIC_URL + "/Naina_Premani_Resume.pdf",
  photo: process.env.PUBLIC_URL + "/MyPicture.jpg",
  summary:
    "Frontend engineer with nearly 3 years building production React and Next.js applications for AI-powered real estate and healthcare platforms.",
  about: [
    "I am a frontend engineer based in Pune, with nearly three years spent building production React and Next.js applications — most recently for AI-powered real estate, and before that healthcare.",
    "My work sits where component architecture meets product: I maintain the shared design system behind a seven-zone Next.js monorepo, build real-time and AI-driven interfaces, integrate payments, and ship SEO infrastructure at scale.",
    "I like owning features end to end — working from Figma alongside design, backend and QA, and staying accountable for what happens after the merge.",
  ],
  stats: [
    { value: "3", label: "Years building for production" },
    { value: "7", label: "Apps in the monorepo I support" },
    { value: "1,131", label: "SEO pages shipped" },
  ],
};

export const experience = [
  {
    company: "Altrr Software Services",
    title: "Software Engineer",
    period: "Sep 2025 — Present",
    location: "Pune, India",
    link: "https://trythat.ai",
    linkLabel: "trythat.ai",
    blurb:
      "AI-powered property advisory platform for the Indian real estate market — a 7-zone Next.js monorepo built on Turborepo and pnpm workspaces.",
    highlights: [
      "Maintain the shared component library used across all seven apps — Radix primitives, Tailwind, and an enforced export API that keeps zones decoupled.",
      "Built AI video generation: users upload photos and receive short marketing videos, across create, preview and library screens.",
      "Delivered voice-driven data entry — describe a property aloud, get a pre-filled editable form.",
      "Led the authenticated home screen redesign: AI search entry, personalized activity and insight cards, subscription management.",
      "Built ~1,131 server-rendered landing pages from a city/locality/category taxonomy with canonical URLs, OpenGraph and JSON-LD, CDN-cached, with indexing rules that keep thin pages out of search.",
      "Built reusable hooks for long-running background jobs, keeping progress state consistent across views and surviving navigation.",
      "Integrated Razorpay checkout for paid document downloads — order creation, server-side verification, secure delivery.",
      "Contributed to the AI chat interface: streaming response rendering, conversation threading, error and session-expiry handling.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Turborepo",
      "Tailwind CSS",
      "Radix UI",
      "Zustand",
    ],
  },
  {
    company: "Mindbowser",
    title: "Software Engineer",
    period: "Dec 2024 — Aug 2025",
    location: "Pune, India",
    blurb: "Healthcare appointment scheduling platform.",
    highlights: [
      "Integrated SMART on FHIR with OAuth2 authentication for secure patient and practitioner data access.",
      "Built Node.js/Express REST endpoints for appointment lifecycle management.",
      "Developed the React/Next.js scheduling UI for booking and cancelling appointments.",
      "Shipped features across multiple healthcare projects under strict compliance deadlines, working with cross-functional teams.",
    ],
    stack: ["React", "Next.js", "TypeScript", "Node.js", "Express", "FHIR"],
  },
  {
    company: "Metta Social",
    title: "Junior Development Analyst",
    period: "Jan 2024 — Nov 2024",
    location: "Pune, India",
    blurb: "CSR platform for corporate clients.",
    highlights: [
      "Developed reusable React components and integrated Strapi CMS.",
      "Built responsive layouts and accessible UI patterns, improving mobile engagement.",
      "Contributed to the React Native Android app alongside the Next.js web platform.",
      "Implemented Cypress end-to-end test coverage.",
    ],
    stack: ["React", "Next.js", "React Native", "Strapi", "Cypress"],
  },
];

export const skills = [
  {
    group: "React & Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "DOM APIs",
      "Responsive Design",
    ],
  },
  {
    group: "State & Data",
    items: ["Zustand", "TanStack Query", "Redux Toolkit", "React Context"],
  },
  {
    group: "UI & Design Systems",
    items: [
      "Tailwind CSS",
      "shadcn/ui",
      "Radix UI",
      "MUI",
      "Figma",
      "Component Library Architecture",
    ],
  },
  {
    group: "Build & Tooling",
    items: [
      "Turborepo",
      "pnpm Workspaces",
      "Vite",
      "Webpack",
      "Turbopack",
      "Git",
      "GitLab",
    ],
  },
  {
    group: "Testing",
    items: ["Cypress", "E2E Automation", "Unit Testing"],
  },
  {
    group: "Ways of Working",
    items: [
      "Agile / Scrum",
      "Code Reviews",
      "Merge Request Workflow",
      "Cross-Functional Collaboration",
    ],
  },
];

export const work = [
  {
    title: "AI Video Generation",
    context: "Altrr — trythat.ai",
    description:
      "Users upload property photos and get back a short marketing video. I built the create, preview and library screens, plus the hooks that keep long-running job progress consistent across views and alive through navigation.",
    stack: ["Next.js", "TypeScript", "Zustand", "Tailwind CSS"],
  },
  {
    title: "Programmatic SEO Platform",
    context: "Altrr — trythat.ai",
    description:
      "~1,131 server-rendered landing pages generated from a city/locality/category taxonomy, with canonical URLs, OpenGraph tags and JSON-LD structured data. CDN-cached, with indexing rules that keep thin pages out of search.",
    stack: ["Next.js", "SSR", "JSON-LD", "CDN Caching"],
    live: "https://trythat.ai",
  },
  {
    title: "Voice-Driven Data Entry",
    context: "Altrr — trythat.ai",
    description:
      "A flow where users describe a property out loud and receive a pre-filled, editable form — cutting manual typing out of the listing process.",
    stack: ["Next.js", "TypeScript", "Speech APIs"],
  },
  {
    title: "Shared Design System",
    context: "Altrr — 7-zone monorepo",
    description:
      "The component library every app in the monorepo builds on. Radix primitives and Tailwind under an enforced export API that keeps the seven zones decoupled as they evolve independently.",
    stack: ["Turborepo", "Radix UI", "Tailwind CSS", "pnpm"],
  },
];

export const projects = [
  {
    title: "FHIR Appointment Scheduler",
    description:
      "A healthcare scheduling app built on SMART on FHIR with OAuth2, covering the appointment lifecycle from booking through cancellation.",
    stack: ["TypeScript", "Next.js", "FHIR", "OAuth2"],
    live: "https://fhir-appointment-scheduler-ug5w.vercel.app/",
    code: "https://github.com/NainaPremani/FHIRAppointmentScheduler",
  },
  {
    title: "BuyC Corp",
    description:
      "A marketplace where dealers list second-hand cars for buyers. A full MERN build integrating a React frontend with a Node/Express and MongoDB backend.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://buyc-corp-nine.vercel.app",
    code: "https://github.com/NainaPremani/BUYC_Corp",
  },
  {
    title: "World of Currency",
    description:
      "A search interface for finding the countries associated with any given currency, built around a clean and fast lookup experience.",
    stack: ["React", "JavaScript", "REST API"],
    live: "https://metta-social-worldofcurrency.vercel.app/",
    code: "https://github.com/NainaPremani/WorldOfCurrency",
  },
  {
    title: "Story Generator",
    description:
      "A React frontend that uses the OpenAI API to generate humorous short stories from a handful of keywords.",
    stack: ["React", "OpenAI API", "JavaScript"],
    live: "https://storygeneratorai.onrender.com",
    code: "https://github.com/NainaPremani/StoryGenerator",
  },
];

export const education = [
  {
    course: "Full Stack Web Development (Full-Time)",
    school: "Masai School, Bengaluru",
    period: "2022 — 2023",
  },
  {
    course: "BSc Computer Science",
    school: "Fergusson College, Pune",
    period: "2021",
  },
];
