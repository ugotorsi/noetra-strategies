"use client";

import dynamic from "next/dynamic";
import { Analytics } from "@vercel/analytics/react";

const MouseGlow = dynamic(
  () => import("@/components/layout/MouseGlow").then((mod) => mod.MouseGlow),
  { ssr: false },
);

const PageIntro = dynamic(
  () => import("@/components/layout/PageIntro").then((mod) => mod.PageIntro),
  { ssr: false },
);

export function RuntimeEffects() {
  return (
    <>
      <MouseGlow />
      <PageIntro />
      <Analytics />
    </>
  );
}
