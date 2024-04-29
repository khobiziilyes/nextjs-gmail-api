import type { NextApiRequest, NextApiResponse } from "next";

import sql from "@/utils/supabase/db";

import { getThreadsList } from "@/lib/getThreadsList";

const userNotFoundResponse = new Response(`User not found.`, {
  status: 400,
});

type ResponseData = Awaited<ReturnType<typeof getThreadsList>>;

export default async function GET(
  request: NextApiRequest,
  response: NextApiResponse<ResponseData>,
) {
  const { uuid } = request.query as { uuid: string };
  if (!uuid) return userNotFoundResponse;

  const [row] = (await sql`
    SELECT refresh_token FROM users WHERE uuid = ${uuid} LIMIT 1;
  `) as { refresh_token: string }[];

  if (!row) return userNotFoundResponse;

  const threads = await getThreadsList(row);

  return response.json(threads);
}
