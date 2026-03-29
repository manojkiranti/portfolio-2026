import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { JsonLd } from "@/components/seo/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = "https://manoj-rai.vercel.app"; // Replace with your actual domain

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Manoj Rai — Senior Full-Stack Software Engineer",
    template: "%s | Manoj Rai",
  },
  description:
    "Portfolio of Manoj Rai — Senior Full-Stack Engineer with 10+ years building scalable apps, APIs, cloud infrastructure, and AI features using .NET, Node, and React.",
  keywords: [
    // Core Identity & Location
    "Manoj Rai",
    "Senior Software Engineer",
    "Full-Stack Engineer",
    "Kathmandu",
    "Remote Developer",
    
    // Frontend
    "React Developer",
    "Next.js Developer",
    "Vue.js Developer",
    
    // Backend & API
    "Node.js Expert",
    "NestJS",
    "C#",
    ".NET Developer",
    "PostgreSQL",
    
    // Cloud, DevOps & AI
    "Azure",
    "Docker",
    "CI/CD",
    "AI Engineer",
    "LangChain"
  ],
  authors: [{ name: "Manoj Rai", url: baseUrl }],
  creator: "Manoj Rai",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Manoj Rai — Senior Full-Stack Software Engineer",
    description:
      "Full-stack engineer building scalable web apps, APIs, cloud infrastructure, and AI-powered features with .NET, Node.js, React, and Vue.",
    siteName: "Manoj Rai Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Create this image in public/
        width: 1200,
        height: 630,
        alt: "Manoj Rai — Senior Full-Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manoj Rai — Senior Full-Stack Software Engineer",
    description:
      "Full-stack engineer building scalable web apps, APIs, cloud infrastructure, and AI-powered features with .NET, Node.js, React, and Vue.",
    images: ["/og-image.jpg"],
    creator: "@manojrai", // Replace with your actual twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  verification: {
    google: "JSbRTaIOBEcgVwqxMIoZf140tB-ihgn3oRVWTddvp10",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
          <JsonLd />
        </ThemeProvider>
      </body>
    </html>
  );
}