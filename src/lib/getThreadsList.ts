import { google } from "googleapis";
import { oauth2Client } from "./oauth2Client";

export async function getThreadsList() {
  // Since we are on the same request context, credentials are kept, but ideally, they should be cached.
  // Pagination & Error handling are not implemented, but they should be.

  const gmail = google.gmail({ version: "v1", auth: oauth2Client });
  const res = await gmail.users.threads.list({
    userId: "me",
    maxResults: 10,
  });

  return res.data.threads || [];
}
