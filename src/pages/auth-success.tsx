"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

export default function AuthSuccess() {
  const searchParams = useSearchParams();
  const uuid = searchParams?.get("uuid");

  console.log(uuid);

  React.useEffect(() => {
    // TODO: Should be handled.
    if (!uuid) return;

    window.opener.postMessage(
      { type: "AUTH_SUCCESS", uuid },
      window.opener.origin,
    );

    window.close();
  }, [uuid]);

  return <h1>Authentication Success</h1>;
}
