import { NextResponse } from "next/server";
import { axiosInstance } from "@/lib/utils";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q")?.trim() ?? "";
  const page = Number(searchParams.get("page") ?? "1");

  if (!q) return NextResponse.json({ results: [] });

  try {
    const res = await axiosInstance.get("/search/movie", {
      params: { query: q, language: "en-US", page },
    });
    return NextResponse.json(res.data);
  } catch (e: any) {
    return NextResponse.json(
      { results: [], error: "TMDB search failed" },
      { status: 500 }
    );
  }
}
