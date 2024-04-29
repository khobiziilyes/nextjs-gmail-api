import { google } from "googleapis";
import { oauth2Client } from "./oauth2Client";

export async function getThreadsList({
  refresh_token,
}: {
  refresh_token: string;
}) {
  // Since we are on the same request context, credentials are kept, but ideally, they should be cached.
  // Pagination & Error handling are not implemented, but they should be.

  oauth2Client.setCredentials({ refresh_token });

  const gmail = google.gmail({
    version: "v1",
    auth: oauth2Client,
  });
  const res = await gmail.users.threads.list({
    userId: "me",
    maxResults: 10,
  });

  return res.data.threads || [];
}
