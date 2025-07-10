"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Building2, Lock } from "lucide-react";
import { AnimatedBeam } from "@/app/components/magicui/animated-beam";
import Image from "next/image";
import { useRef } from "react";

export default function SolutionStatement() {
  const containerRef = useRef(null);
  const companyRef = useRef(null);
  const neptelRef = useRef(null);
  
  const benefits = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: "Complete Data Control",
      description: "Keep your data within your infrastructure. No external servers, no data sharing, full sovereignty."
    },
    {
      icon: <Lock className="w-6 h-6 text-emerald-400" />,
      title: "Enterprise Security",
      description: "End-to-end encryption, audit logs, and compliance with industry standards built into the core."
    }
  ];

  return (
    <section 
    id="solution"
    className="relative min-h-[600px] flex items-center justify-center pt-20 pb-10 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">The Neptel Solution</h2>
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl">
            Local AI infrastructure that keeps your data secure while delivering powerful capabilities.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          {/* Animated Beam Container */}
          <div ref={containerRef} className="relative w-full lg:w-1/2 h-[400px]">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute top-8 left-0 right-0 text-center z-10"
            >
              <span className="inline-block px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20 text-emerald-400 font-medium">
                Deployed Within Your Infrastructure
              </span>
            </motion.div>
            
            {/* Animated Border Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ 
                opacity: [0.15, 0.25, 0.15],
                scale: [0.98, 1, 0.98]
              }}
              transition={{
                opacity: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.5, 1]
                },
                scale: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.5, 1]
                }
              }}
              className="absolute inset-0 rounded-2xl border-2 border-emerald-500/20 bg-emerald-500/5"
            />
            
            {/* Beams Layer */}
            <div className="absolute inset-0 z-0">
              {/* Company to Neptel Beams - Bidirectional */}
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={companyRef}
                toRef={neptelRef}
                pathColor="#60a5fa"
                pathWidth={3}
                pathOpacity={0.4}
                gradientStartColor="#60a5fa"
                gradientStopColor="#3b82f6"
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={companyRef}
                toRef={neptelRef}
                pathColor="#60a5fa"
                pathWidth={3}
                pathOpacity={0.4}
                gradientStartColor="#60a5fa"
                gradientStopColor="#3b82f6"
                reverse
              />
            </div>

            {/* Icons Layer */}
            <div className="flex size-full max-h-[400px] items-center justify-center relative z-10">
              {/* Company Icon - Left */}
              <div className="absolute left-1/8 top-1/2 -translate-y-1/2">
                <div ref={companyRef} className="flex size-24 items-center justify-center rounded-full bg-[#0D1117] border border-blue-400/40 p-3 shadow-xl">
                  <Building2 className="w-14 h-14 text-blue-400" />
                </div>
              </div>

              {/* Neptel Icon - Right */}
              <div className="absolute right-1/8 top-1/2 -translate-x-0 -translate-y-1/2">
                <div ref={neptelRef} className="flex size-24 items-center justify-center rounded-full bg-[#0D1117] border border-blue-400/40 p-2 shadow-xl">
                  <Image
                    src="/Neptel1080x.png"
                    alt="Neptel Logo"
                    width={96}
                    height={96}
                    className="w-20 h-20 object-contain"
                    quality={100}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Column */}
          <div className="w-full lg:w-1/2 space-y-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/5 rounded-lg">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 