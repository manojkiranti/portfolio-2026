export const PROFILE_CONTEXT = {
  name: "Manoj Rai",
  title: "Senior Full-Stack Developer",
  location: "Kathmandu, Nepal (Open to Remote)",
  email: "manoj.kiranti@gmail.com",
  phone: "(977) 9804971130",
  website: "manoj-rai.vercel.app",
  github: "github.com/manojkiranti",
  linkedin: "linkedin.com/in/manoj-kiranti",

  summary:
    "Dynamic Software Engineer with 10+ years of experience in full-stack development, specializing in creating high-quality web and mobile applications. Expertise in C#, JavaScript, TypeScript, React, React Native, Vue, Node.js, .NET, SQL, and NoSQL. Proficient in AI/LLM integration using LangChain, LangGraph, and vector databases. Experienced in Azure cloud services. Combines robust backend functionalities with user-friendly interfaces, emphasizing innovative problem-solving and superior user experience. Committed to continuous learning and adeptly adapts to new technologies.",

  skills: {
    backend: [
      "Node.js",
      "Nest.js",
      "Express",
      "Python",
      "Django",
      "C#",
      ".NET",
      "REST APIs",
      "WebSockets",
      "Queue Management",
    ],
    frontend: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Vue.js",
      "Redux",
      "Vuex",
      "React Native",
      "RTK Query",
      "HTML5",
      "CSS3",
      "SCSS",
    ],
    database: ["MySQL", "PostgreSQL", "Redis", "SQL", "NoSQL"],
    ai: ["LangChain", "LangGraph", "LLMs", "OCR", "Vector Databases", "Prompt Engineering", "RAG"],
    cloud: ["Azure", "Docker", "CI/CD", "Linux", "GitHub Actions"],
    testing: ["Jest", "Cypress", "Unit Testing", "E2E Testing", "TDD"],
    tools: ["Git", "GitHub", "Jira", "Agile"],
  },

  experience: [
    {
      company: "NIC ASIA BANK",
      location: "Kathmandu, Nepal",
      role: "Full-Stack Developer",
      period: "06/2020 - Present (5+ years)",
      highlights: [
        "Developed and maintained robust applications using Node.js (Nest.js), Python (Django), and React, ensuring high performance and scalability.",
        "Designed and implemented real-time payment systems capable of handling high transaction volumes across banks and wallet applications.",
        "Managed API integrations with the Core Banking System, optimizing performance using Redis, caching, WebSockets, and background processing.",
        "Led the development of a cross-platform mobile app for bank employees, improving workflow efficiency by 50% and achieving 15,000+ downloads.",
        "Engineered a highly efficient online banking service portal serving over 1 million customers.",
        "Built AI-powered loan process automation using LLMs and OCR to process, categorize, and relabel documents, drastically reducing manual review times.",
        "Authored technical documentation and provided training to developers.",
      ],
    },
    {
      company: "Chuchuro",
      location: "Kathmandu, Nepal",
      role: "Front-End Developer",
      period: "06/2014 - 06/2020 (6 years)",
      highlights: [
        "Spearheaded the transition from jQuery to Vue.js, enhancing application maintainability and performance.",
        "Built reusable UI components and a custom grid component in Vue.js, handling large datasets efficiently (similar to MS Excel).",
        "Developed responsive web applications using HTML5, CSS3, JavaScript, Vue.js, and Bootstrap.",
        "Managed Agile development workflows using Jira and deployed updates through CI/CD pipelines.",
        "Conducted rigorous testing and debugging to ensure application stability before production deployment.",
      ],
    },
  ],

  education: [
    {
      degree: "Master of Computer Application",
      faculty: "Science & Technology",
      university: "Purbanchal University",
      year: 2024,
    },
    {
      degree: "Bachelor of Computer Application",
      faculty: "Science & Technology",
      university: "Purbanchal University",
      year: 2016,
    },
  ],

  projects: [
    {
      title: "AI-Powered Loan Process Automation",
      stack: ["React", "NestJS", "Python", "LLMs", "OCR"],
      description:
        "Intelligent automation pipeline leveraging AI and OCR to process, categorize, and relabel documents, extracting exact customer information to drastically reduce manual review times.",
    },
    {
      title: "Digital Wallet Application",
      stack: ["React Native"],
      description:
        "Cross-platform mobile wallet application designed for seamless, secure user transactions and financial management.",
    },
    {
      title: "Omni Bank Online Banking Platform",
      stack: ["React", "Redux", "Next.js", "Node.js", "Express.js", "TypeScript", "MySQL", "Redis", "GitHub Actions"],
      description:
        "Online banking platform serving 1M+ customers. Reduced physical branch visits by 25% with advanced Redis caching for high-traffic scalability.",
    },
    {
      title: "Online Loan Application System",
      stack: ["React", "Redux", "Next.js", "TypeScript", "C#", ".NET", "SQL"],
      description:
        "User-friendly loan application platform with secure admin portal. Instant disbursement for loans under 2 million.",
    },
    {
      title: "Digital Customer Service Desk",
      stack: ["Core Banking Integrations", "Biometrics", "Custom PDF Generator"],
      description:
        "Centralized application across ~200 bank branches handling 10,000+ daily customers with biometric auth.",
    },
    {
      title: "Quick Pay System",
      stack: ["React", "Payment APIs"],
      description:
        "Link-based payment system integrating 20+ banks, cards, mobile, and internet banking into a single unified gateway.",
    },
    {
      title: "Expense Management System",
      stack: ["Node.js", "NestJS", "Express.js", "MySQL"],
      description:
        "Replaced paper-based expense management with core-integrated bill payment system. 40% reduction in manual paperwork.",
    },
    {
      title: "Saathi App (Staff Digital Assistant)",
      stack: ["React Native", "Expo", "Google Maps API"],
      description:
        "Cross-platform mobile app for bank employees — leave requests, pay slips, training. Google Maps integration for loan residence verification. 15,000+ downloads.",
    },
    {
      title: "Online Customer Help Desk (AI Integration)",
      stack: ["Vue.js", "Node.js", "Express.js", "MySQL", "Google Dialogflow"],
      description:
        "Ticketing system with an integrated AI chatbot handling basic customer queries autonomously.",
    },
    {
      title: "Doc Vault & Deal Vault",
      stack: ["Vue.js", "Vuex", "Custom UI Framework"],
      description:
        "Document and property management portals. Custom DataGrid for large datasets, auto-filling forms with text/image extraction. Migrated jQuery to Vue.js SPA.",
    },
  ],
};

export function buildProfileString(): string {
  const p = PROFILE_CONTEXT;

  const skillsStr = Object.entries(p.skills)
    .map(([category, items]) => `  ${category}: ${items.join(", ")}`)
    .join("\n");

  const expStr = p.experience
    .map(
      (e) =>
        `${e.role} at ${e.company} (${e.period})\n${e.highlights.map((h) => `  - ${h}`).join("\n")}`
    )
    .join("\n\n");

  const eduStr = p.education
    .map((e) => `${e.degree} — ${e.university} (${e.year})`)
    .join("\n");

  const projStr = p.projects
    .map((pr) => `- ${pr.title} [${pr.stack.join(", ")}]: ${pr.description}`)
    .join("\n");

  return `
Name: ${p.name}
Title: ${p.title}
Location: ${p.location}
Email: ${p.email}
Website: ${p.website}
GitHub: ${p.github}
LinkedIn: ${p.linkedin}

== Summary ==
${p.summary}

== Skills ==
${skillsStr}

== Experience ==
${expStr}

== Education ==
${eduStr}

== Projects ==
${projStr}
`.trim();
}
