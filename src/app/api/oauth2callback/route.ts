import type { NextRequest } from "next/server";

import { oauth2Client } from "@/lib/oauth2Client";
import { redirect } from "next/navigation";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get("code");

  if (!code) return Response.redirect("/");

  const { tokens } = await oauth2Client.getToken({ code });

  oauth2Client.setCredentials(tokens);
  redirect("/threads-list");
}
