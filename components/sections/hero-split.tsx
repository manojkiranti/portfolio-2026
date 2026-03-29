import { Badge } from "@/components/ui/badge";
import { MonitorSmartphone, ServerCog } from "lucide-react";
import { FaBrain, FaDatabase } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiNestjs,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiLangchain,
  SiGraphql,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { ProfileBridgeCard } from "./profile-bridge-card";

type Skill = {
  name: string;
  icon: React.ReactNode;
};

const FRONTEND_SKILLS: Skill[] = [
  { name: "Vue.js", icon: <SiVuedotjs size={28} color="#4FC08D" /> },
  { name: "React & Native", icon: <SiReact size={28} color="#61DAFB" /> },
  { name: "Next.js", icon: <SiNextdotjs size={28} className="text-neutral-900 dark:text-white" /> },
  { name: "TypeScript", icon: <SiTypescript size={28} color="#3178C6" /> },
  { name: "JavaScript", icon: <SiJavascript size={28} color="#F7DF1E" /> },
  { name: "Redux", icon: <SiRedux size={28} color="#764ABC" /> },
  { name: "Tailwind", icon: <SiTailwindcss size={28} color="#06B6D4" /> },
];

const BACKEND_SKILLS: Skill[] = [
  { name: "Node.js", icon: <SiNodedotjs size={28} color="#339933" /> },
  { name: "Nest.js", icon: <SiNestjs size={28} color="#E0234E" /> },
  { name: "Python", icon: <SiPython size={28} color="#3776AB" /> },
  { name: "Django", icon: <SiDjango size={28} color="#092E20" /> },
  { name: "Postgres", icon: <SiPostgresql size={28} color="#4169E1" /> },
  { name: "MySQL", icon: <SiMysql size={28} color="#4479A1" /> },
  { name: "Docker", icon: <SiDocker size={28} color="#2496ED" /> },
  { name: "Azure", icon: <VscAzure size={28} color="#0078D4" /> },
  {
    name: "LangChain",
    icon: <SiLangchain size={24} className="text-purple-500" />,
  },
  { name: "GraphQL", icon: <SiGraphql size={28} color="#E10098" /> },
  {
    name: "Vector DB",
    icon: <FaDatabase size={24} className="text-emerald-500" />,
  },
  { name: "LLMs", icon: <FaBrain size={24} className="text-purple-400" /> },
];

export function HeroSplit() {
  return (
    <div
      id="content"
      className="grow relative overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row">
      {/* LEFT: FRONTEND */}
      <section className="w-full z-1 lg:w-1/2 bg-slate-50 dark:bg-[radial-gradient(ellipse_at_top_left,#0f172a,#0f172a,#1e1b4b)] text-neutral-900 dark:text-white p-8 sm:p-12 lg:py-24 lg:pl-24 lg:pr-56 flex flex-col justify-center relative min-h-[68vh] lg:min-h-screen">
        {/* grid glow — dark only */}
        <div className="hidden dark:block absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        {/* soft gradient blobs */}
        <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-blue-400/5 dark:bg-blue-600/8 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-indigo-400/5 dark:bg-purple-600/8 blur-3xl" />

        <div className="relative z-10 flex flex-col items-center lg:items-end text-center lg:text-right space-y-7 pt-24 lg:pt-0 animate-fade-in-up">
          <div className="space-y-3">
            <div className="flex items-center justify-center lg:justify-end gap-2">
              <Badge className="bg-neutral-900/5 dark:bg-white/10 text-neutral-700 dark:text-white border border-neutral-200 dark:border-white/15 hover:bg-neutral-100 dark:hover:bg-white/15">
                Frontend
              </Badge>
              <Badge className="bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-100 border border-blue-200 dark:border-blue-400/20 hover:bg-blue-100 dark:hover:bg-blue-500/15">
                UI Systems
              </Badge>
            </div>

            <h3 className="text-indigo-600 dark:text-indigo-300 font-medium tracking-widest uppercase flex items-center justify-center lg:justify-end gap-2">
              The Interface <MonitorSmartphone className="w-5 h-5" />
            </h3>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Frontend
              <br />
              Architect.
            </h2>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 lg:ml-auto">
            {FRONTEND_SKILLS.map((s) => (
              <SkillCard key={s.name} icon={s.icon} name={s.name} side="frontend" />
            ))}
          </div>

          <p className="text-neutral-600 dark:text-slate-300/90 max-w-sm text-sm lg:text-base leading-relaxed">
            I build fast, accessible, and scalable interfaces — design systems,
            complex forms, performance-first UX, and polished animations.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2">
            <Pill label="Design Systems" />
            <Pill label="Performance" />
            <Pill label="Accessibility" />
            <Pill label="Mobile-first" />
          </div>
        </div>
      </section>

      {/* RIGHT: BACKEND */}
      <section className="w-full lg:w-1/2 z-1 bg-white dark:bg-[radial-gradient(ellipse_at_bottom_right,#0f172a,#0f172a,#3b0764)] text-neutral-900 dark:text-white p-8 sm:p-12 lg:py-24 lg:pr-24 lg:pl-56 flex flex-col justify-center relative min-h-[68vh] lg:min-h-screen">
        {/* circuit dots */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] bg-[radial-gradient(#a5a5a5_1px,transparent_1px)] [background-size:20px_20px]" />
        {/* soft gradient blobs */}
        <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-purple-400/5 dark:bg-purple-600/8 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-blue-400/5 dark:bg-blue-600/6 blur-3xl" />

        <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left space-y-7 pt-10 animate-fade-in-up delay-200">
          <div className="space-y-3">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <Badge className="bg-neutral-900/5 dark:bg-white/10 text-neutral-700 dark:text-white border border-neutral-200 dark:border-white/15 hover:bg-neutral-100 dark:hover:bg-white/15">
                Backend
              </Badge>
              <Badge className="bg-purple-50 dark:bg-purple-500/15 text-purple-700 dark:text-purple-200 border border-purple-200 dark:border-purple-400/20 hover:bg-purple-100 dark:hover:bg-purple-500/20">
                Cloud & Data
              </Badge>
            </div>

            <h3 className="text-purple-600 dark:text-purple-300 font-medium tracking-widest uppercase flex items-center justify-center lg:justify-start gap-2">
              <ServerCog className="w-5 h-5" /> The Engine
            </h3>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Backend
              <br />
              Engineer.
            </h2>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 lg:mr-auto">
            {BACKEND_SKILLS.map((s) => (
              <SkillCard
                key={s.name}
                icon={s.icon}
                name={s.name}
                side="backend"
              />
            ))}
          </div>

          <p className="text-neutral-600 dark:text-slate-300/90 max-w-sm text-sm lg:text-base leading-relaxed">
            I design resilient services — clean architecture, fast databases,
            secure APIs, background processing, and predictable deployments.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
            <Pill label="API Design" />
            <Pill label="Databases" />
            <Pill label="Queues" />
            <Pill label="CI/CD" />
          </div>
        </div>
      </section>
      {/* Profile card — mobile: first in flow, desktop: absolute center overlay */}
      <div className="order-first lg:absolute lg:inset-0 z-20 flex items-center justify-center pointer-events-none py-10 pt-24 lg:py-0 lg:pt-0 bg-slate-50 dark:bg-[#0f172a] lg:bg-transparent lg:dark:bg-transparent">
        <div className="pointer-events-auto">
          <ProfileBridgeCard />
        </div>
      </div>
      </div>
    </div>
  );
}

function SkillCard({
  icon,
  name,
  side,
}: {
  icon: React.ReactNode;
  name: string;
  side: "frontend" | "backend";
}) {
  return (
    <div
      className={[
        "flex flex-col items-center justify-center p-3 rounded-xl border transition-all duration-300 hover:scale-[1.03] hover:shadow-lg group",
        side === "frontend"
          ? "bg-white dark:bg-slate-800/50 border-neutral-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500/40 hover:bg-blue-50 dark:hover:bg-slate-800"
          : "bg-white dark:bg-slate-800/50 border-neutral-200 dark:border-slate-700 hover:border-purple-400 dark:hover:border-purple-500/40 hover:bg-purple-50 dark:hover:bg-slate-800",
      ].join(" ")}
    >
      <div className="mb-2 transition-transform group-hover:-translate-y-1 duration-300">
        {icon}
      </div>
      <span className="text-[11px] sm:text-xs font-semibold text-center leading-tight text-neutral-600 dark:text-slate-300 group-hover:text-neutral-900 dark:group-hover:text-white">
        {name}
      </span>
    </div>
  );
}

function Pill({ label }: { label: string }) {
  return (
    <span className="rounded-full px-3 py-1 text-xs border bg-neutral-100 dark:bg-white/5 text-neutral-600 dark:text-white/80 border-neutral-200 dark:border-white/10">
      {label}
    </span>
  );
}
