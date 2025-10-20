import { NextResponse } from "next/server";
import { axiosInstance } from "@/lib/utils";

export async function GET() {
  try {
    const res = await axiosInstance.get("/genre/movie/list", {
      params: { language: "en" },
    });
    return NextResponse.json(res.data);
  } catch {
    return NextResponse.json({ genres: [] }, { status: 500 });
  }
}
