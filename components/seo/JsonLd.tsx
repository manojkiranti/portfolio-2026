export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Manoj Rai",
    "url": "https://manoj-rai.vercel.app", // Replace with your actual domain
    "jobTitle": "Senior Full-Stack Software Engineer",
    "description": "Full-stack engineer with 10+ years experience building scalable web apps, APIs, cloud infrastructure, and AI-powered features.",
    "sameAs": [
      "https://github.com/manojkiranti", // Replace with your actual GitHub
      "https://linkedin.com/in/manoj-kiranti" // Replace with your actual LinkedIn
    ],
    "knowsAbout": [
      "Software Engineering",
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "AI",
      "Cloud Infrastructure"
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
