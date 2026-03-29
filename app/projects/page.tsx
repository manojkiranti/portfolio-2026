import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A curated list of projects by Manoj Rai — spanning AI automation, enterprise banking, fintech platforms, and internal tools.",
};

type Project = {
  title: string;
  description: string;
  stack: string[];
  role?: string;
  impact?: string;
  category: string;
};

const PROJECTS: { category: string; items: Project[] }[] = [
  {
    category: "AI & Innovation",
    items: [
      {
        title: "AI-Powered Loan Process Automation",
        description:
          "Intelligent automation pipeline to modernize the loan approval workflow. Leveraged AI and OCR to automatically process, categorize, and relabel documents, extracting exact customer information to drastically reduce manual review times.",
        stack: ["React", "NestJS", "Python", "LLMs", "OCR"],
        category: "AI & Innovation",
        impact: "Drastically reduced manual document review times",
      },
      {
        title: "Digital Wallet Application",
        description:
          "Cross-platform mobile wallet application designed for seamless, secure user transactions and financial management.",
        stack: ["React Native"],
        category: "AI & Innovation",
      },
      {
        title: "Online Customer Help Desk (AI Integration)",
        description:
          "Comprehensive ticketing system with an integrated AI chatbot capable of autonomously handling basic customer queries.",
        stack: ["Vue.js", "Node.js", "Express.js", "MySQL", "Dialogflow"],
        role: "Full-Stack Developer",
        category: "AI & Innovation",
      },
    ],
  },
  {
    category: "Fintech & Enterprise Banking",
    items: [
      {
        title: "Omni Bank Online Banking Platform",
        description:
          "Architected and led the development of an online banking platform catering to over 1 million customers. Implemented advanced Redis caching to handle high-traffic user requests with maximum scalability.",
        stack: [
          "React",
          "Redux",
          "Next.js",
          "Node.js",
          "Express.js",
          "TypeScript",
          "MySQL",
          "Redis",
          "GitHub Actions",
        ],
        role: "Lead Developer",
        category: "Fintech & Enterprise Banking",
        impact: "Reduced physical branch visits by 25%",
      },
      {
        title: "Online Loan Application System",
        description:
          "User-friendly loan application platform with a secure admin portal for bank administrators. Implemented instant disbursement for loans under 2 million, streamlining processing times.",
        stack: ["React", "Redux", "Next.js", "TypeScript", "C#", ".NET", "SQL"],
        category: "Fintech & Enterprise Banking",
        impact: "Instant loan disbursement, boosted customer satisfaction",
      },
      {
        title: "Digital Customer Service Desk",
        description:
          "Centralized application deployed across ~200 bank branches handling a daily volume of 10,000+ customers. Integrated biometric authentication and automated key services, minimizing manual paperwork.",
        stack: ["Core Banking Integrations", "Biometrics", "Custom PDF Generator"],
        category: "Fintech & Enterprise Banking",
        impact: "Reduced customer wait times across 200+ branches",
      },
      {
        title: "Quick Pay System",
        description:
          "Versatile, link-based payment system empowering small business e-commerce. Integrated over 20 different banks, cards, mobile, and internet banking options into a single unified payment gateway.",
        stack: ["React", "Payment APIs"],
        role: "Lead Front-End Developer",
        category: "Fintech & Enterprise Banking",
        impact: "20+ banks unified into one payment gateway",
      },
      {
        title: "Expense Management System",
        description:
          "Modernized the bank's internal expense management by replacing paper-based systems with an instantaneous, core-integrated bill payment system.",
        stack: ["Node.js", "NestJS", "Express.js", "MySQL"],
        role: "Full-Stack Developer",
        category: "Fintech & Enterprise Banking",
        impact: "40% reduction in manual paperwork",
      },
    ],
  },
  {
    category: "Internal Tools & Portals",
    items: [
      {
        title: "Saathi App (Staff Digital Assistant)",
        description:
          "Cross-platform internal mobile app for bank employees to manage leave requests, access pay slips, and track training. Integrated Google Maps for rapid residence verification in the loan process.",
        stack: ["React Native", "Expo", "Google Maps API"],
        role: "Lead Developer",
        category: "Internal Tools & Portals",
        impact: "Streamlined employee workflows and loan verification",
      },
      {
        title: "Doc Vault & Deal Vault",
        description:
          "Robust document and property management portals. Built a custom DataGrid for large datasets, implemented auto-filling forms with text/image extraction, and migrated legacy jQuery architecture to modern Vue.js SPA.",
        stack: ["Vue.js", "Vuex", "Custom UI Framework"],
        category: "Internal Tools & Portals",
        impact: "Migrated legacy jQuery to modern Vue.js SPA",
      },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-slate-950 text-neutral-900 dark:text-white">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:py-28">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-neutral-500 dark:text-white/60 hover:text-neutral-900 dark:hover:text-white transition mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        {/* Page header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            Projects
          </h1>
          <p className="mt-3 text-neutral-500 dark:text-white/60 max-w-2xl text-lg">
            A curated collection of work spanning AI automation, enterprise
            banking, fintech platforms, and internal tools.
          </p>
        </div>

        {/* Project sections */}
        <div className="space-y-16">
          {PROJECTS.map((section) => (
            <section key={section.category}>
              <h2 className="text-2xl font-bold tracking-tight mb-6">
                {section.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.items.map((project) => (
                  <Card
                    key={project.title}
                    className="bg-white dark:bg-white/5 border-neutral-200 dark:border-white/10 hover:bg-neutral-50 dark:hover:bg-white/[0.07] transition"
                  >
                    <CardHeader className="space-y-2">
                      <div className="flex items-start justify-between gap-3">
                        <CardTitle className="text-lg">
                          {project.title}
                        </CardTitle>
                        {project.role && (
                          <Badge className="bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-white border border-neutral-200 dark:border-white/15 shrink-0 text-xs">
                            {project.role}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-neutral-500 dark:text-white/70">
                        {project.description}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((s) => (
                          <span
                            key={s}
                            className="rounded-full border border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-white/5 px-3 py-1 text-xs text-neutral-600 dark:text-white/80"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                      {project.impact && (
                        <p className="text-xs text-neutral-500 dark:text-white/50 italic">
                          Impact: {project.impact}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-neutral-500 dark:text-white/60 mb-4">
            Interested in working together?
          </p>
          <Link href="/#contact">
            <Button className="bg-neutral-900 dark:bg-white text-white dark:text-slate-900 hover:bg-neutral-800 dark:hover:bg-white/90">
              Get in touch
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <footer className="mt-16 text-center text-xs text-neutral-400 dark:text-white/50">
          &copy; {new Date().getFullYear()} Manoj Rai &bull; Built with Next.js
          + shadcn
        </footer>
      </div>
    </main>
  );
}
