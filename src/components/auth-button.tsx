"use client";

import React from "react";

export default function AuthButton({
  authUrl,
  handleAuthSuccess,
}: {
  authUrl: string;
  handleAuthSuccess: (uuid: string) => void;
}) {
  const handleAuthWindowClose = () => {};

  const handleLoginClick = () => {
    const authWindow = window.open(authUrl, "_blank");

    // TODO: Should be handled.
    if (!authWindow) return;

    authWindow.addEventListener("beforeunload", handleAuthWindowClose);
    authWindow.focus();
  };

  React.useEffect(() => {
    const handleMessage = (event: any) => {
      if (event.data.type === "AUTH_SUCCESS") {
        handleAuthSuccess(event.data.uuid);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <button
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      rel="noopener noreferrer"
      onClick={handleLoginClick}
    >
      <h2 className="mb-3 text-2xl font-semibold">
        Login{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
        Login to your Google account.
      </p>
    </button>
  );
}
