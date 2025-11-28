// components/initial-loader.tsx
"use client";

import { useEffect, useState } from "react";
import SiteLoader from "./site-loader";

export default function InitialLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader && <SiteLoader />}

      <div
        className={`transition-opacity duration-500 ${
          showLoader ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </>
  );
}
