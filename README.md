This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

This project uses [Google OAuth2](https://developers.google.com/identity/protocols/oauth2) for authentication.
To run this project you need to:

1. Create a project in the [Google Cloud Console](https://console.cloud.google.com/).
2. [Enable the Gmail API in the Google Cloud Console](https://console.cloud.google.com/flows/enableapi?apiid=gmail.googleapis.com).
3. Configure the OAuth consent screen in the [Google Cloud Console](https://console.cloud.google.com/apis/credentials/consent) [Read here](https://developers.google.com/workspace/guides/configure-oauth-consent#configure_oauth_consent).
4. [Create OAuth 2.0 credentials](https://developers.google.com/identity/protocols/oauth2/web-server#creatingcred) in the [Google Cloud Console](https://console.cloud.google.com/apis/credentials).
5. Add the `http://localhost:3000/api/oauth2callback` redirect URI to the OAuth 2.0 credentials.
6. Download the credentials as a JSON file and save it as `credentials.json` in the `src` folder (Can be omitted in case you're using a .env file).
7. Install the dependencies by running `npm install`.
8. Run the development server by running `npm run dev`.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
