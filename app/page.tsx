import { PortfolioAssistant } from "@/components/assistant/PortfolioAssistant";
import { SiteHeader } from "@/components/site-header";
import { HeroSplit } from "@/components/sections/hero-split";
import { ProjectContact } from "@/components/sections/project-contact";

export default function ModernPortfolioSplit() {
  return (
    <main className="min-h-screen flex flex-col relative font-sans">
      {/* Skip link (small accessibility win) */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999] focus:rounded-md focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      {/* ================= GLOBAL FLOATING HEADER ================= */}
      <SiteHeader />
      <HeroSplit />

      <ProjectContact />

      <PortfolioAssistant />
    </main>
  );
}
