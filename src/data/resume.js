// Single source of truth for portfolio content.
// Mirrors Naina_Premani_Resume.pdf (September 2026). Update this file when
// the resume changes -- the components read from it.

export const profile = {
  name: "Naina Premani",
  role: "Full Stack Developer",
  roles: [
    "Full Stack Developer",
    "React & Next.js Developer",
    "SEO & Design Systems",
  ],
  location: "Pune, India",
  email: "nainapremani9@gmail.com",
  phone: "+91 8055407366",
  github: "https://github.com/NainaPremani",
  linkedin: "https://www.linkedin.com/in/naina-premani-974ba715b/",
  resume: process.env.PUBLIC_URL + "/Naina_Premani_Resume.pdf?v=20260919",
  photo: process.env.PUBLIC_URL + "/profile.jpg",
  summary:
    "Full stack developer with almost 3 years of experience shipping Next.js and React products from Figma design to production, with Node backends, Docker and CI/CD, and AI features.",
  about: [
    "Full stack developer in Pune with almost three years of shipping production Next.js and React applications, currently for an AI property advisory platform and before that for healthcare and CSR products.",
    "The work spans the whole stack: a programmatic SEO system, API specifications written for backend teams, a FHIR appointment backend in Node and Express, GitLab CI/CD and Docker builds, Cypress end-to-end tests, and a design system shared by seven apps.",
    "Claude Code and Cursor are part of the daily workflow, and every change is reviewed before it ships.",
  ],
  stats: [
    { value: "3", label: "Years building for production" },
    { value: "7", label: "Apps sharing one component library" },
    { value: "3", label: "AI features shipped end to end" },
  ],
};

// Each line shows one concrete capability, as in the resume.
export const capabilities = [
  {
    title: "Building real products",
    text: "Almost 3 years shipping Next.js and React apps for an AI real-estate platform, healthcare clients and a CSR platform, taking features from Figma design to production.",
  },
  {
    title: "SEO engineering",
    text: "Built a programmatic SEO system that generates thousands of location and category pages from data, server-rendered so crawlers get the full content. Each page has unique titles and descriptions, canonical URLs and Open Graph tags, plus JSON-LD structured data (FAQ, breadcrumb, item list). Crawl budget is managed by serving thin pages as noindex, follow and keeping them out of the sitemap until they have enough content, with canonical tags consolidating duplicate filter URLs. Discovery is improved with sitemap indexes and accurate lastmod dates, internal linking between related pages, and CDN caching with stale-while-revalidate.",
  },
  {
    title: "API design with backend teams",
    text: "Wrote the API specification that backend engineers built to: the correct HTTP response for every page state (200 OK, 404 not found, 410 gone, 503 unavailable) and data feeds of live and removed content, so search engines index pages correctly.",
  },
  {
    title: "Backend and APIs (FHIR)",
    text: "Built the complete backend for a healthcare appointment app in Node and Express: REST endpoints to list doctors, book, view and cancel appointments on a FHIR server, deployed on Render. Implemented the SMART on FHIR authorization flow (OAuth2 login) for secure access to patient and practitioner data, with the Next.js frontend on Vercel.",
    links: [
      {
        label: "Live app",
        href: "https://fhir-appointment-scheduler-ug5w.vercel.app/",
      },
      {
        label: "Code",
        href: "https://github.com/NainaPremani/FHIRAppointmentScheduler",
      },
    ],
  },
  {
    title: "Docker and CI/CD",
    text: "Built a prebuild stage in the GitLab CI/CD pipeline that caches Turborepo and pnpm between runs, and set up Turborepo remote caching, to speed up builds of a 7-app monorepo. Reworked the Dockerfile so CI reuses the prebuilt output while local Docker builds still compile from scratch.",
  },
  {
    title: "Testing",
    text: "Wrote Cypress end-to-end scripts covering every feature of a full sprint at Metta Social, testing the complete user flow. Wrote unit tests at Altrr for logic that is easy to break, such as search-indexing rules and speech input parsing.",
  },
  {
    title: "CMS backends",
    text: "Built the website backend in Strapi CMS at Metta Social, connected it to the frontend, and worked on the React Native Android app alongside the web platform.",
  },
  {
    title: "AI features",
    text: "Built a streaming AI chat (conversation threads, error and session-expiry handling), a voice-to-form flow that turns speech into a pre-filled form, and AI video generation with shared hooks for long-running jobs.",
  },
  {
    title: "AI-assisted development",
    text: "Claude Code and Cursor used daily for writing, debugging and testing code, with every change reviewed before it ships.",
  },
  {
    title: "Design system and payments",
    text: "Own and maintain the component library shared by 7 apps (Radix and Tailwind, with rules that keep apps from depending on each other's code), and added Razorpay payments with server-side signature verification.",
  },
];

// Company entries describe the product only; the work itself is above.
export const experience = [
  {
    company: "Altrr Software Services",
    title: "Software Engineer",
    period: "Sep 2025 — Present",
    location: "Pune, India",
    link: "https://trythat.ai",
    linkLabel: "trythat.ai",
    blurb:
      "trythat.ai is an AI property advisory platform for people buying, renting or listing property in India, with an AI chat advisor, property search, market briefs, FAQs and AI-generated marketing videos. Built as a 7-app Next.js monorepo.",
    stack: [
      "Next.js 15",
      "TypeScript",
      "Turborepo",
      "Tailwind CSS",
      "Radix UI",
      "GitLab CI/CD",
      "Docker",
    ],
  },
  {
    company: "Mindbowser",
    title: "Software Engineer",
    period: "Dec 2024 — Aug 2025",
    location: "Pune, India",
    blurb:
      "A digital product studio building software for healthcare and enterprise clients. The healthcare work involved Medplum, an open-source platform built on the FHIR standard for health data.",
    stack: ["React", "Next.js", "TypeScript", "Medplum", "FHIR"],
  },
  {
    company: "Metta Social",
    title: "Junior Development Analyst",
    period: "Jan 2024 — Nov 2024",
    location: "Pune, India",
    blurb:
      "A CSR platform for corporate clients, made up of a Next.js website with a Strapi backend and a React Native Android app.",
    stack: ["Next.js", "Strapi", "React Native", "Cypress"],
  },
];

export const skills = [
  {
    group: "Frontend",
    items: [
      "React 19",
      "Next.js 15 (App Router, SSR/ISR)",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "shadcn/ui",
      "Framer Motion",
    ],
  },
  {
    group: "State & Data",
    items: ["TanStack Query", "Zustand", "Redux Toolkit", "GraphQL"],
  },
  {
    group: "Backend & APIs",
    items: [
      "Node.js",
      "Express",
      "REST API design",
      "Strapi CMS",
      "SMART on FHIR / OAuth2",
      "NextAuth",
      "Razorpay",
    ],
  },
  {
    group: "DevOps",
    items: [
      "Docker",
      "GitLab CI/CD",
      "Turborepo",
      "pnpm",
      "Git",
      "Vercel",
      "Render",
    ],
  },
  {
    group: "Testing",
    items: ["Cypress", "Vitest / Jest", "Unit and end-to-end testing"],
  },
  {
    group: "AI & SEO",
    items: [
      "Streaming LLM interfaces",
      "OpenAI API",
      "Claude Code",
      "Cursor",
      "Programmatic SEO",
      "JSON-LD",
      "Sitemaps",
      "Canonical tags",
    ],
  },
];

export const projects = [
  {
    title: "Healthcare Appointment Scheduling",
    note: "SMART on FHIR",
    description:
      "A full-stack scheduling app: Node and Express backend deployed on Render, SMART on FHIR authorization with OAuth2, and a Next.js frontend on Vercel for listing doctors and booking, viewing and cancelling appointments.",
    stack: ["Next.js", "TypeScript", "Node.js", "Express", "SMART on FHIR", "OAuth2"],
    live: "https://fhir-appointment-scheduler-ug5w.vercel.app/",
    code: "https://github.com/NainaPremani/FHIRAppointmentScheduler",
  },
  {
    title: "BuyC Corp",
    description:
      "A MERN marketplace where dealers list used cars for buyers, with a React frontend and a Node, Express and MongoDB backend.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://buyc-corp-nine.vercel.app",
    code: "https://github.com/NainaPremani/BUYC_Corp",
  },
  {
    title: "Story Generator",
    description:
      "A story generator built on the OpenAI API that turns a handful of keywords into short, humorous stories.",
    stack: ["React", "OpenAI API", "JavaScript"],
    live: "https://storygeneratorai.onrender.com",
    code: "https://github.com/NainaPremani/StoryGenerator",
  },
  {
    title: "World of Currency",
    description:
      "A search interface for finding the countries associated with any given currency, built around a clean and fast lookup.",
    stack: ["React", "JavaScript", "REST API"],
    live: "https://metta-social-worldofcurrency.vercel.app/",
    code: "https://github.com/NainaPremani/WorldOfCurrency",
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
