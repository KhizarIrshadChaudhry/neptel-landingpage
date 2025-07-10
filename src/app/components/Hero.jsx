"use client";

import { Particles } from "@/app/components/magicui/particles";
import { AuroraText } from "@/app/components/magicui/aurora-text";
import { ShimmerButton } from "@/app/components/magicui/shimmer-button";
import { ChevronRight } from "lucide-react";


export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-start justify-center px-4 sm:px-6 lg:px-12 text-center overflow-hidden pt-28 sm:pt-36 lg:pt-44">
      <Particles
        className="absolute inset-0 -z-0"
        quantity={300}
        staticity={20}
        color="#ffffff"
        ease={20}
        size={1}
      />
      <div className="max-w-5xl relative z-10">
        <div className="flex flex-col items-center gap-2">
          <span className="text-3xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight">
            Privacy-first <AuroraText colors={["#0549ff", "#5d3ac7", "#0549ff", "#0549ff", "#5d3ac7", "#0549ff"]} speed={2}>AI</AuroraText> for <br className="hidden sm:block"/> 
            <span className="text-2xl sm:text-4xl lg:text-6xl xl:text-7xl tracking-wider block mt-2 sm:mt-3">Modern Organizations</span>
          </span>
  
          <h1 className="text-base sm:text-lg lg:text-xl max-w-3xl mt-4 mb-8 text-gray-300">
            Neptel empoweres businesses with secure, local AI tools that protect data sovereignty and ensure compliance.
          </h1>
        </div>

        <div className="flex justify-center gap-4 flex-wrap">
          <a href="#Getstarted">
            <ShimmerButton 
              className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-gray-200 transition text-sm sm:text-base" 
              shimmerColor="#0549ff"
              background="white"
              shimmerSize="0.2em"
              shimmerDuration="2s"
            >
              <span className="text-black">Get in Touch</span>
            </ShimmerButton>
          </a>
  
          <button 
            onClick={() => {
              document.querySelector('section:nth-of-type(2)').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }}
            className="border border-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-white hover:text-black transition text-sm sm:text-base inline-flex items-center gap-2">
            Learn More
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
