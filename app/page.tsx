import HeroSection from "@/components/home/HeroSection";
import WhySection from "@/components/home/Projects";
import WhatWeBuild from "@/components/home/WhatWeBuild";
import ProofOfProcess from "@/components/home/ProofOfProcess";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export default function Home() {
  return (
    <div className="font-poppins">
      <HeroSection />
      <WhatWeBuild />
      <WhySection />
    </div>
  );
}