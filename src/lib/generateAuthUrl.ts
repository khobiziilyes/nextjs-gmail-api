import { oauth2Client } from "@/lib/oauth2Client";

const SCOPES = ["https://www.googleapis.com/auth/gmail.readonly"];

export const generateAuthUrl = () => {
  const authorizeUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });

  return authorizeUrl;
};
