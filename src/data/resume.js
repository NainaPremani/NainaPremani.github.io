// Single source of truth for portfolio content.
// Mirrors Naina_Premani_Resume.pdf (September 2026). Update this file when
// the resume changes -- the components read from it.

export const profile = {
  name: "Naina Premani",
  role: "Frontend Engineer — AI Products",
  roles: [
    "Frontend Engineer — AI Products",
    "React & Next.js Developer",
    "Design Systems Engineer",
  ],
  location: "Pune, India",
  email: "nainapremani9@gmail.com",
  phone: "+91 8055407366",
  github: "https://github.com/NainaPremani",
  linkedin: "https://www.linkedin.com/in/naina-premani-974ba715b/",
  resume: process.env.PUBLIC_URL + "/Naina_Premani_Resume.pdf?v=20260917",
  photo: process.env.PUBLIC_URL + "/profile.jpg",
  summary:
    "Frontend engineer with nearly 3 years of experience building production React and Next.js applications for AI-powered real estate and healthcare platforms.",
  about: [
    "I am a frontend engineer in Pune with nearly three years building production React and Next.js applications — currently for an AI property advisory platform, and before that across healthcare and enterprise product work.",
    "Most of what I do sits where component architecture meets AI product surfaces: I own the shared design system behind a seven-app monorepo, build streaming and voice-driven interfaces, integrate payments, and ship the SEO infrastructure underneath it all.",
    "I like owning features end-to-end — working from Figma alongside design, backend and QA, and staying accountable for what happens after the merge.",
  ],
  stats: [
    { value: "3", label: "Years building for production" },
    { value: "7", label: "Apps in the monorepo I support" },
    { value: "3", label: "AI features shipped end-to-end" },
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
    blurb: "AI property advisory platform for Indian real estate.",
    highlights: [
      "Design system ownership: own and maintain the shared component library used across all seven apps in the monorepo, built on Radix primitives and Tailwind with an enforced export API that keeps zones decoupled.",
      "Programmatic SEO: built landing pages generated automatically from city, locality and property-type combinations, rendered server-side with canonical URLs, JSON-LD, OpenGraph tags and auto-generated sitemaps.",
      "Indexing rules: wrote content-quality checks, backed by unit tests, that keep thin pages out of the sitemap and mark them “noindex, follow.”",
      "AI chat: built the streaming chat UI, including threaded conversations and handling for errors and expired sessions.",
      "Voice-driven data entry: delivered a voice-to-form flow — users describe a property aloud and get a pre-filled, editable listing form.",
      "AI video generation: built the AI video feature end-to-end — upload, preview and library screens for turning photos into short marketing videos.",
      "Background jobs: built shared hooks for long-running jobs like video generation, with progress stored outside the triggering component so it survives navigation.",
      "Home screen redesign: led the redesign of the authenticated home, including AI search entry, personalized activity and insight cards, and subscription management.",
      "Payments: integrated Razorpay for paid document downloads, including order creation and server-side payment signature verification.",
    ],
    stack: [
      "Next.js 15",
      "TypeScript",
      "Turborepo",
      "Tailwind CSS",
      "Radix UI",
      "Zustand",
      "Razorpay",
    ],
  },
  {
    company: "Mindbowser",
    title: "Software Engineer",
    period: "Dec 2024 — Aug 2025",
    location: "Pune, India",
    blurb: "Digital product studio; healthcare and enterprise client projects.",
    highlights: [
      "Built and maintained React/Next.js UI features across multiple concurrent client engagements, working from Figma designs alongside backend and QA.",
      "Shipped features under strict delivery and compliance deadlines across concurrent projects, collaborating with cross-functional teams.",
      "Worked within healthcare product constraints, gaining exposure to Medplum and FHIR-based data models.",
    ],
    stack: ["React", "Next.js", "TypeScript", "Figma", "Medplum", "FHIR"],
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
      "React 19",
      "Next.js 15 (App Router)",
      "SSR / ISR",
      "TypeScript",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "DOM APIs",
      "Responsive Design",
    ],
  },
  {
    group: "AI Product Engineering",
    items: [
      "Streaming LLM response rendering",
      "Conversation threading",
      "Voice-to-form flows",
      "AI-assisted development (Claude Code, Cursor)",
    ],
  },
  {
    group: "State & Data",
    items: [
      "Zustand",
      "TanStack Query",
      "Redux Toolkit",
      "React Context",
      "GraphQL",
    ],
  },
  {
    group: "UI & Design Systems",
    items: [
      "Tailwind CSS v4",
      "shadcn/ui",
      "Radix UI",
      "MUI",
      "Framer Motion",
      "Figma",
      "Component library architecture",
      "Enforced export APIs",
    ],
  },
  {
    group: "SEO & Performance",
    items: [
      "Programmatic SEO",
      "JSON-LD structured data",
      "Canonical strategy",
      "Dynamic sitemaps",
      "Indexation control",
      "OpenGraph",
      "CDN caching",
    ],
  },
  {
    group: "Build & Tooling",
    items: [
      "Turborepo",
      "pnpm workspaces",
      "Vite",
      "Webpack",
      "Turbopack",
      "Docker",
      "Git",
      "GitLab",
    ],
  },
  {
    group: "Backend & Integrations",
    items: ["Node.js", "Express", "REST APIs", "NextAuth", "Razorpay"],
  },
  {
    group: "Testing",
    items: ["Cypress", "E2E automation", "Unit testing (Vitest / Jest)"],
  },
  {
    group: "Ways of Working",
    items: [
      "Agile / Scrum",
      "Code reviews",
      "Merge request workflow",
      "Cross-functional collaboration",
    ],
  },
];

export const work = [
  {
    title: "Streaming AI Chat",
    context: "Altrr — trythat.ai",
    description:
      "The conversational surface of the platform: streaming response rendering, threaded conversations, and the error and expired-session handling that keeps a long chat from breaking mid-answer.",
    stack: ["Next.js 15", "TypeScript", "Streaming", "Zustand"],
  },
  {
    title: "Voice-Driven Data Entry",
    context: "Altrr — trythat.ai",
    description:
      "A voice-to-form flow: users describe a property aloud and get back a pre-filled, editable listing form — taking the typing out of getting a property onto the platform.",
    stack: ["Next.js 15", "TypeScript", "Speech APIs"],
  },
  {
    title: "AI Video Generation",
    context: "Altrr — trythat.ai",
    description:
      "Built end-to-end: upload, preview and library screens that turn a set of photos into a short marketing video, plus shared hooks that keep long-running job progress alive across navigation.",
    stack: ["Next.js 15", "TypeScript", "Background jobs", "Tailwind CSS"],
  },
  {
    title: "Programmatic SEO Platform",
    context: "Altrr — trythat.ai",
    description:
      "Landing pages generated automatically from city, locality and property-type combinations — server-rendered with canonical URLs, JSON-LD and OpenGraph, with unit-tested content-quality checks that keep thin pages out of the sitemap.",
    stack: ["Next.js 15", "SSR", "JSON-LD", "CDN caching"],
    live: "https://trythat.ai",
  },
  {
    title: "Shared Design System",
    context: "Altrr — 7-app monorepo",
    description:
      "The component library every app in the monorepo builds on. Radix primitives and Tailwind behind an enforced export API that keeps the zones decoupled as they evolve independently.",
    stack: ["Turborepo", "Radix UI", "Tailwind CSS", "pnpm"],
  },
];

export const projects = [
  {
    title: "Healthcare Appointment Scheduling",
    note: "Independent build",
    description:
      "A full-stack scheduling app built on SMART on FHIR with OAuth2 for secure patient and practitioner data access — Node.js/Express endpoints for the appointment lifecycle, and a React/Next.js UI for booking and cancelling.",
    stack: ["Next.js", "TypeScript", "SMART on FHIR", "OAuth2", "Express"],
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
