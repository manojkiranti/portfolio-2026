"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Markdown } from "@/components/assistant/Markdown";

import {
  MessageCircle,
  Send,
  RotateCcw,
  FileText,
  Github,
  Linkedin,
  Info,
  GraduationCap,
  Briefcase,
  Code2,
  Mail,
  X,
  Copy,
  Check,
  Sparkles,
  Bot,
} from "lucide-react";

type Msg = {
  id: string;
  role: "user" | "assistant";
  content: string;
  ts: number;
};

const makeId = () => Math.random().toString(36).slice(2);

const DEFAULT_MESSAGES: Msg[] = [
  {
    id: makeId(),
    role: "assistant",
    content:
      "Hi! I'm Manoj's portfolio assistant. Ask me about projects, skills, experience, or request a quick summary.",
    ts: Date.now(),
  },
];

const QUICK_ACTIONS: Array<{
  label: string;
  icon: React.ReactNode;
  query: string;
}> = [
  { label: "About", icon: <Info className="h-3.5 w-3.5" />, query: "Tell me about yourself." },
  { label: "Skills", icon: <Code2 className="h-3.5 w-3.5" />, query: "List your key skills (frontend, backend, cloud, AI) in bullets." },
  { label: "Experience", icon: <Briefcase className="h-3.5 w-3.5" />, query: "Summarize your professional experience with impact highlights." },
  { label: "Education", icon: <GraduationCap className="h-3.5 w-3.5" />, query: "What is your education background?" },
  { label: "Projects", icon: <Sparkles className="h-3.5 w-3.5" />, query: "Show your top 3 projects and what you contributed." },
  { label: "AI", icon: <Bot className="h-3.5 w-3.5" />, query: "Explain your AI/LangChain and Vector DB experience with examples." },
  { label: "Contact", icon: <Mail className="h-3.5 w-3.5" />, query: "How can I contact you? Provide email and links." },
  { label: "Resume", icon: <FileText className="h-3.5 w-3.5" />, query: "Give a short resume-style summary (headline + 6 bullet points)." },
];

export function PortfolioAssistant() {
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [messages, setMessages] = React.useState<Msg[]>(DEFAULT_MESSAGES);

  const bottomRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!open) return;
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  function resetChat() {
    setMessages(
      DEFAULT_MESSAGES.map((m) => ({ ...m, id: makeId(), ts: Date.now() }))
    );
    setInput("");
  }

  async function send(query?: string) {
    const text = (query ?? input).trim();
    if (!text || loading) return;

    setLoading(true);
    setInput("");

    const userMsg: Msg = {
      id: makeId(),
      role: "user",
      content: text,
      ts: Date.now(),
    };
    setMessages((prev) => [...prev, userMsg]);

    const typingId = makeId();
    setMessages((prev) => [
      ...prev,
      { id: typingId, role: "assistant", content: "__TYPING__", ts: Date.now() },
    ]);

    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: text }),
      });

      const data = (await res.json()) as { answer?: string };
      const answer = data?.answer?.trim() || "No response received.";

      setMessages((prev) =>
        prev.map((m) =>
          m.id === typingId ? { ...m, content: answer } : m
        )
      );
    } catch {
      setMessages((prev) =>
        prev.map((m) =>
          m.id === typingId
            ? {
                ...m,
                content: "Sorry — something went wrong. Please try again.",
              }
            : m
        )
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* ── Floating launcher ── */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-[0_4px_20px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="w-[94vw] sm:w-[440px] p-0 overflow-hidden border-l border-neutral-200 dark:border-white/8 bg-neutral-50 dark:bg-[#111111] flex flex-col">
          {/* ── Header ── */}
          <div className="shrink-0 bg-white dark:bg-[#1a1a1a] px-4 py-4 border-b border-neutral-200 dark:border-white/8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-neutral-900 dark:bg-white flex items-center justify-center">
                  <Bot className="h-4 w-4 text-white dark:text-neutral-900" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm text-neutral-900 dark:text-neutral-100">
                      Portfolio Assistant
                    </span>
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs text-neutral-500">
                    Ask about skills, projects & experience
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-0.5">
                <button
                  onClick={resetChat}
                  className="h-8 w-8 rounded-lg flex items-center justify-center text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-white/8 transition"
                  title="Reset chat"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="h-8 w-8 rounded-lg flex items-center justify-center text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-white/8 transition"
                  title="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Quick links */}
            <div className="mt-3 flex gap-1.5">
              <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <button className="h-7 px-2.5 rounded-md text-xs font-medium text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-white/6 hover:bg-neutral-200 dark:hover:bg-white/10 transition flex items-center gap-1.5">
                  <FileText className="h-3 w-3" />
                  Resume
                </button>
              </Link>
              <Link href="https://github.com/manojkiranti" target="_blank" rel="noopener noreferrer">
                <button className="h-7 px-2.5 rounded-md text-xs font-medium text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-white/6 hover:bg-neutral-200 dark:hover:bg-white/10 transition flex items-center gap-1.5">
                  <Github className="h-3 w-3" />
                  GitHub
                </button>
              </Link>
              <Link href="https://linkedin.com/in/manoj-kiranti" target="_blank" rel="noopener noreferrer">
                <button className="h-7 px-2.5 rounded-md text-xs font-medium text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-white/6 hover:bg-neutral-200 dark:hover:bg-white/10 transition flex items-center gap-1.5">
                  <Linkedin className="h-3 w-3" />
                  LinkedIn
                </button>
              </Link>
            </div>
          </div>

          {/* ── Quick actions (shown when few messages) ── */}
          {messages.length <= 1 && (
            <div className="shrink-0 px-4 py-3 border-b border-neutral-200 dark:border-white/8">
              <p className="text-[11px] font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-2">
                Quick questions
              </p>
              <div className="flex flex-wrap gap-1.5">
                {QUICK_ACTIONS.map((a) => (
                  <button
                    key={a.label}
                    onClick={() => send(a.query)}
                    disabled={loading}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 dark:border-white/8 bg-white dark:bg-white/4 px-2.5 py-1.5 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-white/8 transition disabled:opacity-50"
                  >
                    {a.icon}
                    {a.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── Messages ── */}
          <ScrollArea className="flex-1 min-h-0">
            <div className="px-4 py-4 space-y-4">
              {messages.map((m) => (
                <MessageBubble key={m.id} role={m.role} content={m.content} />
              ))}
              <div ref={bottomRef} />
            </div>
          </ScrollArea>

          {/* ── Composer ── */}
          <div className="shrink-0 p-3 bg-white dark:bg-[#1a1a1a] border-t border-neutral-200 dark:border-white/8">
            <div className="flex gap-2 items-end">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything…"
                className="min-h-[42px] max-h-[120px] rounded-xl bg-neutral-100 dark:bg-white/6 border-transparent focus-visible:border-neutral-300 dark:focus-visible:border-white/15 focus-visible:ring-0 text-sm resize-none"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    send();
                  }
                }}
              />
              <Button
                onClick={() => send()}
                disabled={loading || !input.trim()}
                className="h-[42px] w-[42px] shrink-0 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 disabled:opacity-40"
                size="icon"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="mt-1.5 text-center text-[10px] text-neutral-400 dark:text-neutral-600">
              {loading ? "Thinking…" : "Enter to send · Shift+Enter new line"}
            </p>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

function MessageBubble({
  role,
  content,
}: {
  role: "user" | "assistant";
  content: string;
}) {
  const isUser = role === "user";

  return (
    <div className={isUser ? "flex justify-end" : "flex justify-start"}>
      <div className="flex gap-2 max-w-[88%]">
        {!isUser && (
          <div className="shrink-0 h-7 w-7 rounded-full bg-neutral-200 dark:bg-white/10 flex items-center justify-center mt-0.5">
            <Bot className="h-3.5 w-3.5 text-neutral-600 dark:text-neutral-400" />
          </div>
        )}
        <div
          className={[
            "rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
            isUser
              ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-br-md"
              : "bg-white dark:bg-white/6 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-white/8 rounded-bl-md",
          ].join(" ")}
        >
          {isUser ? (
            <div className="whitespace-pre-wrap">{content}</div>
          ) : content === "__TYPING__" ? (
            <TypingIndicator />
          ) : (
            <AssistantMessage content={content} />
          )}
        </div>
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1.5 py-1 px-1">
      <span className="h-2 w-2 rounded-full bg-neutral-400 dark:bg-neutral-500 animate-bounce [animation-delay:0ms]" />
      <span className="h-2 w-2 rounded-full bg-neutral-400 dark:bg-neutral-500 animate-bounce [animation-delay:150ms]" />
      <span className="h-2 w-2 rounded-full bg-neutral-400 dark:bg-neutral-500 animate-bounce [animation-delay:300ms]" />
    </div>
  );
}

function AssistantMessage({ content }: { content: string }) {
  const [copied, setCopied] = React.useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore
    }
  }

  return (
    <div className="space-y-1.5">
      <Markdown content={content} />

      <div className="flex justify-end">
        <button
          onClick={copy}
          className="inline-flex items-center gap-1 text-[11px] text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition"
          title="Copy"
        >
          {copied ? (
            <Check className="h-3 w-3" />
          ) : (
            <Copy className="h-3 w-3" />
          )}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
}
