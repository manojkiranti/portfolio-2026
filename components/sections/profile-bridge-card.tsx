import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Mail, FileText } from "lucide-react";

export function ProfileBridgeCard() {
  return (
    <div className="relative w-full max-w-[360px] animate-float">
      {/* Subtle outer glow */}
      <div className="absolute -inset-0.5 rounded-[28px] bg-neutral-300/20 dark:bg-amber-200/5 blur-[10px]" />

      <Card className="relative rounded-[28px] border-neutral-200 dark:border-white/8 bg-white dark:bg-[#1a1a1a] shadow-xl dark:shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
        <div className="p-6 sm:p-7">
          {/* Top row */}
          <div className="flex items-center justify-between gap-3">
            <Badge className="bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 text-xs">
              Available
            </Badge>
            <Badge className="bg-neutral-100 dark:bg-white/6 text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-white/8 text-xs">
              Full-Stack &bull; AI
            </Badge>
          </div>

          {/* Avatar + Name */}
          <div className="mt-5 flex flex-col items-center text-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-neutral-200/50 dark:bg-amber-400/20 blur-md" />
              <Avatar className="relative h-28 w-28 border-[3px] border-white dark:border-[#1a1a1a] shadow-xl ring-1 ring-neutral-200 dark:ring-white/8">
                <AvatarImage src="/me.jpg" alt="Manoj Rai" className="object-cover" />
                <AvatarFallback className="text-3xl font-black bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                  MR
                </AvatarFallback>
              </Avatar>
            </div>

            <h1 className="mt-4 text-3xl font-black tracking-tight text-neutral-900 dark:text-neutral-100">
              Manoj Rai
            </h1>

            <p className="mt-1 text-sm text-neutral-500">
              Senior Software Engineer &bull; 10+ yrs &bull; Kathmandu / Remote
            </p>

            <p className="mt-4 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
              I build production systems: polished UI, robust APIs, and cloud deployments.
              Strong focus on performance, clean architecture, and AI-powered features.
            </p>
          </div>

          <Separator className="my-5 bg-neutral-200 dark:bg-white/6" />

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-2">
            <MiniStat label="Experience" value="10+ yrs" />
            <MiniStat label="Stack" value="Full-Stack" />
            <MiniStat label="Focus" value="Scale" />
          </div>

          {/* CTAs */}
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
            <Link href="#contact">
              <Button className="w-full bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-white font-semibold border-none">
                <Mail className="h-4 w-4 mr-2" />
                Get in touch
              </Button>
            </Link>

            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="w-full bg-transparent dark:bg-white/4 border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-white/8"
              >
                <FileText className="h-4 w-4 mr-2" />
                Resume
              </Button>
            </Link>
          </div>

          <Button
            variant="ghost"
            className="mt-3 w-full text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-white/5"
            asChild
          >
            <a href="#work">
              View featured work <ArrowRight className="h-4 w-4 ml-2" />
            </a>
          </Button>
        </div>
      </Card>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-neutral-200 dark:border-white/6 bg-neutral-50 dark:bg-white/3 px-3 py-2 text-center">
      <div className="text-sm font-bold text-neutral-800 dark:text-neutral-200">{value}</div>
      <div className="text-[11px] text-neutral-500">{label}</div>
    </div>
  );
}
