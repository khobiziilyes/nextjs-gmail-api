"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

export default function AuthSuccess() {
  const params = useSearchParams();
  const uuid = params.get("uuid");

  console.log(params);

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
