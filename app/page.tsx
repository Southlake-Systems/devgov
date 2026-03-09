import HeroSection from "@/components/home/HeroSection";
import WhySection from "@/components/home/WhySection";
import WhatWeBuild from "@/components/home/WhatWeBuild";
import ProofOfProcess from "@/components/home/ProofOfProcess";

export default function Home() {
  return (
    <div className="font-poppins">
      <HeroSection />
      <WhySection />
      <WhatWeBuild />
      <ProofOfProcess />
    </div>
  );
}