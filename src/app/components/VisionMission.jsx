"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Particles } from "@/app/components/magicui/particles";
import { Eye, Flag } from "lucide-react";

export default function VisionMission() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="visionmission"
      ref={ref}  
      className="relative bg-[#10151B] py-24 px-6 sm:px-12 overflow-hidden"
    >
      {/* Subtle particle field for depth */}
      <Particles
        quantity={80}
        staticity={30}
        color="#0549ff"
        className="absolute inset-0 opacity-20"
      />

      {/* Header */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
          Vision &amp; Mission
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-4" />
      </div>

      {/* Cards */}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={container}
        className="relative z-10 grid gap-12 md:grid-cols-2 max-w-4xl mx-auto"
      >
        {/* Vision Card */}
        <motion.div
          variants={item}
          className="relative p-8 bg-[#161b22]/70 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden"
        >
          {/* Glowing blob behind */}
          <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-30 blur-3xl" />
          <Eye className="relative z-20 h-10 w-10 text-blue-400 mb-4" />
          <h3 className="relative z-20 text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-white">Our Vision</h3>
          <p className="relative z-20 text-gray-300 leading-relaxed">
            To redefine the future of AI by giving every organization full
            sovereignty over their data and digital intelligence—enabling
            innovation without compromise.
          </p>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          variants={item}
          className="relative p-8 bg-[#161b22]/70 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden"
        >
          {/* Glowing blob behind */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-r from-green-400 to-teal-500 opacity-30 blur-3xl" />
          <Flag className="relative z-20 h-10 w-10 text-green-400 mb-4" />
          <h3 className="relative z-20 text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-white">Our Mission</h3>
          <p className="relative z-20 text-gray-300 leading-relaxed">
            We empower teams with local AI systems that guarantee privacy,
            independence, and control—free from Big Tech—and drive meaningful,
            ethical impact across industries.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
