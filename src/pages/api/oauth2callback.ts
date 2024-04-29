import type { NextApiRequest, NextApiResponse } from "next";
import { redirect } from "next/navigation";

import { oauth2Client } from "@/lib/oauth2Client";
import sql from "@/utils/supabase/db";

export default async function GET(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const { code } = request.query as { code: string };
  if (!code) return Response.redirect("/");

  const { tokens } = await oauth2Client.getToken({ code });

  const {
    id_token,
    refresh_token,
    access_token,
    expiry_date,
    token_type,
    scope,
  } = {
    id_token: tokens.id_token || null,
    refresh_token: tokens.refresh_token || null,
    access_token: tokens.access_token || null,
    expiry_date: tokens.expiry_date || null,
    token_type: tokens.token_type || null,
    scope: tokens.scope || null,
  };

  // oauth2Client.setCredentials(tokens);

  const result = await sql`
    INSERT INTO users
      (id_token, refresh_token, access_token, expiry_date, token_type, scope)
    VALUES
      (${id_token}, ${refresh_token}, ${access_token}, ${expiry_date}, ${token_type}, ${scope})
    RETURNING uuid;
  `;

  const { uuid } = result[0];

  return response.redirect(307, "/auth-success?uuid=" + uuid);
}
