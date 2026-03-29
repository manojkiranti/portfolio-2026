import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-neutral-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/70 backdrop-blur-md px-5 py-3 shadow-lg shadow-black/5 dark:shadow-black/10">
          <Link href="/" className="text-xl font-black tracking-tighter text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-white/80 transition">
            MR.
          </Link>

          <nav className="flex items-center gap-1">
            <Link href="https://github.com/manojkiranti" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="GitHub" className="text-neutral-600 dark:text-white/70 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/10">
                <Github className="h-5 w-5" />
              </Button>
            </Link>

            <Link href="https://linkedin.com/in/manoj-kiranti" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="LinkedIn" className="text-neutral-600 dark:text-white/70 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/10">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>

            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2 border-neutral-200 dark:border-white/15 bg-transparent dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10">
                <FileText className="h-4 w-4" />
                Resume
              </Button>
            </Link>

            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
