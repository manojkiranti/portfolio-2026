import { NextRequest } from "next/server";

export const runtime = "nodejs";

const UPSTREAM =
  "https://personal-llm-augjbnemfnd2h6ah.canadacentral-01.azurewebsites.net/api/query";

// Try parsing JSON if it's a JSON string
function tryParseJsonString(value: unknown): any | null {
  if (typeof value !== "string") return null;
  const s = value.trim();
  if (!(s.startsWith("{") || s.startsWith("["))) return null;

  try {
    return JSON.parse(s);
  } catch {
    return null;
  }
}

// Extract best possible "final answer" string from many possible LangChain shapes
function extractFinalAnswer(payload: any): string {
  if (!payload) return "No response received.";

  // If upstream sends { answer: "JSON string" } — unwrap it first
  const maybeInner = tryParseJsonString(payload.answer);
  if (maybeInner) payload = maybeInner;

  // Common patterns
  const r = payload.result ?? payload;

  // If result itself is a string
  if (typeof r === "string" && r.trim()) return r;

  // Typical keys used by chains
  const candidates = [
    r.output,
    r.answer,
    r.response,
    r.text,
    r.final,
    r.content,
    payload.output,
    payload.answer, // (but now should be plain string, not JSON string)
    payload.response,
    payload.text,
  ];

  const found = candidates.find((v) => typeof v === "string" && v.trim().length > 0);
  if (found) return found.trim();

  // Sometimes it nests again, e.g. result.result.output
  if (r?.result) {
    const nested = extractFinalAnswer(r);
    if (nested && nested !== "No response received.") return nested;
  }

  // Last resort: don't dump full context/documents into UI
  return "I received a response, but couldn't find the final answer text.";
}

export async function POST(req: NextRequest) {
  try {
   const { query } = await req.json();
    const q = (query ?? "").toString().trim();

    if (!q) {
      return Response.json({ answer: "Please enter a question." }, { status: 400 });
    }
     const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const upstreamRes = await fetch(UPSTREAM, {
      method: "POST",
      headers: { "Content-Type": "application/json", access_token: apiKey as string, },
      body: JSON.stringify({ query: q, chat_history: [] }),
    });

    const contentType = upstreamRes.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
      const json = await upstreamRes.json();
      const answer = extractFinalAnswer(json);

      return Response.json(
      { answer },
      { status: upstreamRes.status, headers: { "Cache-Control": "no-store" } }
    );
    }


   
  } catch (err) {
    return Response.json(
      { answer: "Server error calling the assistant." },
      { status: 500 }
    );
  }
}
