import { google } from "googleapis";
import credentials from "@/credentials.json";

const { web: webCredentials } = credentials;

export const oauth2Client = new google.auth.OAuth2(
  webCredentials.client_id,
  webCredentials.client_secret,
  webCredentials.redirect_uris[0],
);
