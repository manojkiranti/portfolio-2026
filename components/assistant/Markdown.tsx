"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = { content: string };

export function Markdown({ content }: Props) {
  return (
    <div className="prose prose-sm prose-neutral dark:prose-invert max-w-none prose-p:leading-relaxed prose-p:my-1.5 prose-pre:bg-neutral-100 dark:prose-pre:bg-white/6 prose-pre:rounded-lg prose-pre:p-3 prose-pre:text-sm prose-code:before:content-none prose-code:after:content-none prose-headings:text-sm prose-headings:font-semibold prose-headings:mt-3 prose-headings:mb-1">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ node, ...props }) => (
            <a
              {...props}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4 text-neutral-900 dark:text-neutral-100"
            />
          ),
          code: ({ className, children, ...props }) => {
            const isBlock = /language-/.test(className ?? "");
            if (!isBlock) {
              return (
                <code
                  className="rounded bg-neutral-100 dark:bg-white/10 px-1 py-0.5 text-[0.85em] text-neutral-800 dark:text-neutral-200"
                  {...props}
                >
                  {children}
                </code>
              );
            }

            return (
              <pre className="overflow-x-auto">
                <code className={className} {...props}>
                  {children}
                </code>
              </pre>
            );
          },
          ul: ({ children }) => (
            <ul className="my-1.5 list-disc pl-5 space-y-0.5">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="my-1.5 list-decimal pl-5 space-y-0.5">{children}</ol>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-2 border-neutral-300 dark:border-neutral-600 pl-3 italic text-neutral-500 dark:text-neutral-400">
              {children}
            </blockquote>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
