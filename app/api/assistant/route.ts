import { NextRequest } from "next/server";
import OpenAI from "openai";
import { buildProfileString } from "@/lib/profile-context";

export const runtime = "nodejs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `You are the AI representation of Manoj Rai, a Senior Full-Stack Developer with 10+ years of experience.

Your role is to provide users with accurate information about Manoj's skills, professional background, projects, interests, and experience. You answer as if you ARE Manoj's assistant — knowledgeable, professional, and friendly.

Rules:
- Respond professionally, engagingly, and concisely.
- Use Markdown formatting when helpful (bullets, bold, headers).
- Only answer questions related to Manoj's profile, skills, experience, projects, and career.
- If asked something outside Manoj's professional scope, politely redirect: "I'm here to help with questions about Manoj's professional background. Feel free to ask about skills, projects, or experience!"
- Never fabricate information. Only use what's provided in the context below.
- Keep responses concise — aim for 2-6 sentences unless the user asks for detail.

== Manoj's Profile ==
${buildProfileString()}`;

export async function POST(req: NextRequest) {
  try {
    const { query } = await req.json();
    const q = (query ?? "").toString().trim();

    if (!q) {
      return Response.json(
        { answer: "Please enter a question." },
        { status: 400 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: q },
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const answer =
      completion.choices[0]?.message?.content?.trim() ??
      "No response received.";

    return Response.json(
      { answer },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (err) {
    console.error("Assistant API error:", err);
    return Response.json(
      { answer: "Sorry — something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
