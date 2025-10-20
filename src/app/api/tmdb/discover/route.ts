import { NextResponse } from "next/server";
import { axiosInstance } from "@/lib/utils";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const genreId = searchParams.get("genreId") ?? "";
  const page = Number(searchParams.get("page") ?? "1");

  if (!genreId) return NextResponse.json({ results: [] });

  try {
    const res = await axiosInstance.get("/discover/movie", {
      params: { language: "en", with_genres: genreId, page },
    });
    return NextResponse.json(res.data);
  } catch {
    return NextResponse.json({ results: [] }, { status: 500 });
  }
}
