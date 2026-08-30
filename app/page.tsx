import React from "react";
import HeroSlider from "@/components/HeroSlider";
import HomeOverview from "@/components/HomeOverview";
import HomeCalendarSection from "@/components/HomeCalendarSection";
import HomeMissionPillars from "@/components/HomeMissionPillars";
import HomeCampusLife from "@/components/HomeCampusLife";
import HomeLegacyCTA from "@/components/HomeLegacyCTA";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Header Section */}
      <HeroSlider />

      {/* Overview 3-Column Section */}
      <HomeOverview />

      {/* School Calendar Download Section */}
      <HomeCalendarSection />

      {/* Classical Christian Mission & 3 Pillars Section */}
      <HomeMissionPillars />

      {/* Campus Life 3x3 Photo Gallery Section */}
      <HomeCampusLife />

      {/* Legacy of Truth 3-Block Action Section */}
      <HomeLegacyCTA />
    </div>
  );
}
