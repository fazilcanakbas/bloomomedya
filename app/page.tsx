import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Capabilities from "@/components/Capabilities";
import ProofInNumbers from "@/components/ProofInNumbers";
import References from "@/components/References";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatWeDo />
      <Capabilities />
      <ProofInNumbers />
      <References />
    </main>
  );
}
