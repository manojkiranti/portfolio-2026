export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Manoj Rai",
    "url": "https://manoj-rai.vercel.app", // Replace with your actual domain
    "jobTitle": "Senior Full-Stack Software Engineer",
    "description": "Senior Full-stack software engineer with 10+ years building scalable web apps, APIs, cloud infrastructure, and AI-powered features with .NET, Node.js, React, and Vue.",
    "sameAs": [
      "https://github.com/manojkiranti", 
      "https://linkedin.com/in/manoj-kiranti"
    ],
    "knowsAbout": [
      "Software Engineering",
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      ".NET",
      "C#",
      "Vue.js",
      "AI",
      "Cloud Infrastructure",
      "PostgreSQL",
      "Azure",
      "Docker"
    ],
    "mainEntityOfPage": {
      "@type": "WebSite",
      "@id": "https://manoj-rai.vercel.app",
      "name": "Manoj Rai Portfolio"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
