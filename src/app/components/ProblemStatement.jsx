"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Building2 } from "lucide-react";
import { AnimatedBeam } from "@/app/components/magicui/animated-beam";
import { useRef } from "react";

const Circle = ({ children, className, ref }) => {
  return (
    <div
      ref={ref}
      className={`z-10 flex size-16 items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10 p-3 ${className}`}
    >
      {children}
    </div>
  );
};

export default function ProblemStatement() {
  const containerRef = useRef(null);
  const companyRef = useRef(null);
  const llmRef = useRef(null);
  const risk1Ref = useRef(null);
  const risk2Ref = useRef(null);
  const risk3Ref = useRef(null);
  
  const problems = [
    {
      icon: <ShieldAlert className="w-6 h-6 text-red-400" />,
      title: "Data Privacy Risk",
      description: "Traditional LLMs send your sensitive data to external servers, exposing it to potential breaches and unauthorized access."
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-red-400" />,
      title: "Data Sharing",
      description: "Your valuable data could be used to train models that benefit your competitors or be shared with third parties."
    }
  ];

  return (
    <section 
    id="problem"
    className="relative min-h-[600px] flex items-center justify-center pt-20 pb-10 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">The Critical Challenge in Enterprise AI</h2>
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl">
            Companies need AI capabilities but can't risk exposing sensitive data to external LLMs.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          {/* Problems Column */}
          <div className="w-full lg:w-1/2 space-y-8">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/5 rounded-lg">
                    {problem.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                    <p className="text-gray-400">{problem.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Animated Beam Container */}
          <div ref={containerRef} className="relative w-full lg:w-1/2 h-[400px]">
            {/* Beams Layer */}
            <div className="absolute inset-0 z-0">
              {/* Company to LLM Beams - Bidirectional */}
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={companyRef}
                toRef={llmRef}
                pathColor="#3b82f6"
                pathWidth={2}
                pathOpacity={0.2}
                gradientStartColor="#3b82f6"
                gradientStopColor="#2563eb"
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={companyRef}
                toRef={llmRef}
                pathColor="#3b82f6"
                pathWidth={2}
                pathOpacity={0.2}
                gradientStartColor="#3b82f6"
                gradientStopColor="#2563eb"
                reverse
              />

              {/* LLM to Risk Beams - Bidirectional */}
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={llmRef}
                toRef={risk1Ref}
                curvature={-10}
                pathColor="#ff4040"
                pathWidth={2}
                pathOpacity={0.2}
                gradientStartColor="#ff4040"
                gradientStopColor="#ff0000"
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={llmRef}
                toRef={risk1Ref}
                curvature={-10}
                pathColor="#ff4040"
                pathWidth={2}
                pathOpacity={0.2}
                gradientStartColor="#ff4040"
                gradientStopColor="#ff0000"
                reverse
              />

              <AnimatedBeam
                containerRef={containerRef}
                fromRef={llmRef}
                toRef={risk2Ref}
                pathColor="#ff4040"
                pathWidth={2}
                pathOpacity={0.2}
                gradientStartColor="#ff4040"
                gradientStopColor="#ff0000"
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={llmRef}
                toRef={risk2Ref}
                pathColor="#ff4040"
                pathWidth={2}
                pathOpacity={0.2}
                gradientStartColor="#ff4040"
                gradientStopColor="#ff0000"
                reverse
              />

              <AnimatedBeam
                containerRef={containerRef}
                fromRef={llmRef}
                toRef={risk3Ref}
                curvature={10}
                pathColor="#ff4040"
                pathWidth={2}
                pathOpacity={0.2}
                gradientStartColor="#ff4040"
                gradientStopColor="#ff0000"
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={llmRef}
                toRef={risk3Ref}
                curvature={10}
                pathColor="#ff4040"
                pathWidth={2}
                pathOpacity={0.2}
                gradientStartColor="#ff4040"
                gradientStopColor="#ff0000"
                reverse
              />
            </div>

            {/* Icons Layer */}
            <div className="flex size-full max-h-[400px] items-center relative z-10">
              {/* Company Icon - Right */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2">
                <div ref={companyRef} className="flex size-20 items-center justify-center rounded-full bg-[#0D1117] border border-white/10 p-3 shadow-xl">
                  <Building2 className="w-10 h-10 text-blue-400" />
                </div>
              </div>

              {/* ChatGPT/OpenAI Icon - Center */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div ref={llmRef} className="flex size-24 items-center justify-center rounded-full bg-[#0D1117] border border-white/10 p-3 shadow-xl">
                  <svg className="w-14 h-14 text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
                  </svg>
                </div>
              </div>

              {/* Risk Icons - Left */}
              <div className="absolute left-0 flex flex-col gap-8 top-1/2 -translate-y-1/2">
                <div ref={risk1Ref} className="flex size-14 items-center justify-center rounded-full bg-[#0D1117] border border-white/10 p-3 shadow-xl">
                  <ShieldAlert className="w-7 h-7 text-red-400" />
                </div>
                <div ref={risk2Ref} className="flex size-14 items-center justify-center rounded-full bg-[#0D1117] border border-white/10 p-3 shadow-xl">
                  <ShieldAlert className="w-7 h-7 text-red-400" />
                </div>
                <div ref={risk3Ref} className="flex size-14 items-center justify-center rounded-full bg-[#0D1117] border border-white/10 p-3 shadow-xl">
                  <ShieldAlert className="w-7 h-7 text-red-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 