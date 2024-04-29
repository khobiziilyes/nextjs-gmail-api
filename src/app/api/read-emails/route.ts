import type { NextRequest } from "next/server";

import sql from "@/utils/supabase/db";

import { oauth2Client } from "@/lib/oauth2Client";
import { getThreadsList } from "@/lib/getThreadsList";

const userNotFoundResponse = new Response(`User not found.`, {
  status: 400,
});

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const uuid = searchParams.get("uuid");

  if (!uuid) return userNotFoundResponse;

  const [row] = (await sql`
    SELECT refresh_token FROM users WHERE uuid = ${uuid} LIMIT 1;
  `) as { refresh_token: string }[];

  if (!row) return userNotFoundResponse;

  const threads = await getThreadsList(row);

  return Response.json(threads);
}
