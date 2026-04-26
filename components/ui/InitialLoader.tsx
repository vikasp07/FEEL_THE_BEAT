"use client";

import { useEffect, useState } from "react";
import LoadingAnimation from "./LoadingAnimation";

type InitialLoaderProps = {
  children: React.ReactNode;
  durationMs?: number;
};

export default function InitialLoader({ children, durationMs = 2600 }: InitialLoaderProps) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowLoader(false);
    }, durationMs);

    return () => window.clearTimeout(timer);
  }, [durationMs]);

  if (showLoader) {
    return <LoadingAnimation />;
  }

  return <>{children}</>;
}
