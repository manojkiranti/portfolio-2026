import { ArrowRight, Briefcase, ExternalLink, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

type Project = {
  title: string;
  description: string;
  stack: string[];
  href: string;
  highlight?: string;
};

const FEATURED_PROJECTS: Project[] = [
  {
    title: "AI-Powered Loan Automation",
    description:
      "Intelligent pipeline leveraging LLMs and OCR to process, categorize, and relabel documents — extracting customer data to drastically cut manual review times.",
    stack: ["React", "NestJS", "Python", "LLMs", "OCR"],
    href: "/projects",
    highlight: "AI + Automation",
  },
  {
    title: "Omni Bank Online Banking",
    description:
      "Architected and led development of an online banking platform serving 1M+ customers, reducing branch visits by 25% with advanced Redis caching for high-traffic scalability.",
    stack: ["React", "Next.js", "Node.js", "TypeScript", "MySQL", "Redis"],
    href: "/projects",
    highlight: "Scale + Lead",
  },
  {
    title: "Digital Customer Service Desk",
    description:
      "Centralized application deployed across ~200 bank branches handling 10,000+ daily customers with biometric auth and automated services.",
    stack: ["Core Banking", "Biometrics", "PDF Generator"],
    href: "/projects",
    highlight: "Enterprise Impact",
  },
];

export function ProjectContact() {
  return (
    <section className="bg-neutral-50 dark:bg-slate-950 text-neutral-900 dark:text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        {/* PROJECTS HEADER */}
        <div className="flex flex-col gap-3 text-center animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 text-neutral-500 dark:text-white/70">
            <Briefcase className="h-5 w-5" />
            <span className="text-sm font-medium tracking-wide uppercase">
              Selected work
            </span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-black tracking-tight">
            Building products end-to-end.
          </h3>
          <p className="text-neutral-500 dark:text-white/60 max-w-2xl mx-auto">
            Highlights from real-world projects — focused on impact, clean
            architecture, and shipping fast.
          </p>
        </div>

        {/* PROJECT CARDS */}
        <div
          id="work"
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {FEATURED_PROJECTS.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-3">
          <Link href="/projects">
            <Button
              variant="outline"
              className="bg-transparent dark:bg-white/5 border-neutral-200 dark:border-white/20 hover:bg-neutral-50 dark:hover:bg-white/15"
            >
              View all projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="#contact">
            <Button className="bg-neutral-900 dark:bg-white text-white dark:text-slate-900 hover:bg-neutral-800 dark:hover:bg-white/90">
              Let&apos;s build something{" "}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <Separator className="my-14 bg-neutral-200 dark:bg-white/10" />

        {/* SERVICES */}
        <div id="services" className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ServiceCard
            title="Frontend Systems"
            desc="Design systems, complex forms, responsive layouts, performance-first UX."
            bullets={["React/Next UI", "Accessibility", "State management"]}
          />
          <ServiceCard
            title="Backend & APIs"
            desc="Production-grade APIs with secure auth, clean architecture, and fast data."
            bullets={["NestJS", "Postgres", "Queues/jobs"]}
          />
          <ServiceCard
            title="Cloud & Delivery"
            desc="Containerized deployments, CI/CD, reliability patterns, and observability."
            bullets={["Docker", "Azure/AWS", "Automation"]}
          />
        </div>

        <Separator className="my-14 bg-neutral-200 dark:bg-white/10" />

        {/* CONTACT */}
        <div
          id="contact"
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch"
        >
          <Card className="bg-white dark:bg-white/5 border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-neutral-500 dark:text-white/70">
                Want to collaborate, hire, or just say hi? Email works best.
              </p>

              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 text-neutral-600 dark:text-white/80">
                  <Mail className="h-4 w-4" />
                  <a
                    className="hover:underline"
                    href="mailto:manoj.kiranti@gmail.com"
                  >
                    manoj.kiranti@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-neutral-600 dark:text-white/80">
                  <MapPin className="h-4 w-4" />
                  Kathmandu &bull; Remote
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a href="mailto:manoj.kiranti@gmail.com">
                  <Button className="bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-white border-none">
                    Email me <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <Link href="/resume.pdf" target="_blank">
                  <Button
                    variant="outline"
                    className="bg-transparent dark:bg-white/5 border-neutral-200 dark:border-white/20 hover:bg-neutral-50 dark:hover:bg-white/15"
                  >
                    Resume <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-white/5 border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white">
            <CardHeader>
              <CardTitle className="text-2xl">What you&apos;ll get</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <ValueTile
                  title="Clarity"
                  desc="Simple solutions, clean code, no fluff."
                />
                <ValueTile
                  title="Speed"
                  desc="Fast iteration without breaking quality."
                />
                <ValueTile
                  title="Ownership"
                  desc="Product thinking + engineering rigor."
                />
                <ValueTile
                  title="Reliability"
                  desc="Predictable delivery and maintainability."
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <footer className="mt-16 text-center text-xs text-neutral-400 dark:text-white/50">
          &copy; {new Date().getFullYear()} Manoj Rai &bull; Built with Next.js
          + shadcn
        </footer>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="bg-white dark:bg-white/5 border-neutral-200 dark:border-white/10 hover:bg-neutral-50 dark:hover:bg-white/[0.07] transition group">
      <CardHeader className="space-y-2">
        <div className="flex items-center justify-between gap-3">
          <CardTitle className="text-lg">{project.title}</CardTitle>
          {project.highlight ? (
            <Badge className="bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-white border border-neutral-200 dark:border-white/15 shrink-0">
              {project.highlight}
            </Badge>
          ) : null}
        </div>
        <p className="text-sm text-neutral-500 dark:text-white/70">{project.description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
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

        <Link href={project.href} className="inline-flex">
          <Button
            variant="outline"
            className="bg-transparent dark:bg-white/5 border-neutral-200 dark:border-white/15 hover:bg-neutral-50 dark:hover:bg-white/15"
          >
            View <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

function ServiceCard({
  title,
  desc,
  bullets,
}: {
  title: string;
  desc: string;
  bullets: string[];
}) {
  return (
    <Card className="bg-white dark:bg-white/5 border-neutral-200 dark:border-white/10">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <p className="text-sm text-neutral-500 dark:text-white/70">{desc}</p>
      </CardHeader>
      <CardContent className="space-y-2">
        {bullets.map((b) => (
          <div
            key={b}
            className="text-sm text-neutral-600 dark:text-white/80 flex items-center gap-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-white/50" />
            {b}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function ValueTile({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-white/5 px-4 py-3">
      <div className="font-semibold">{title}</div>
      <div className="text-sm text-neutral-500 dark:text-white/60">{desc}</div>
    </div>
  );
}
