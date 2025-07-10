"use client";

import { VelocityScroll } from "@/app/components/magicui/scroll-based-velocity";

export default function VelocityScrollingData() {
  return (
    <section className="relative bg-[#0D1117]">
      {/* Velocity Scroll Text - Full width container */}
      <div className="relative w-full overflow-hidden">
        <VelocityScroll
          className="text-5xl sm:text-7xl font-bold"
          defaultVelocity={0.5}
          numRows={2}
        >
          <span>Your Data</span> in Your Hands -
        </VelocityScroll>
      </div>
    </section>
  );
} 