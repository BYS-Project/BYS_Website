"use client";

import { HeroSection, Mission, StoSection } from "@/components/pages/Homepage";

export default function Home() {
  return (
    <div className="relative w-full h-full">
      <HeroSection />
      <Mission />
      <StoSection />
    </div>
  );
}
