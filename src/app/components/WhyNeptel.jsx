"use client";

import React, { useState, useEffect, useRef } from 'react';
import { BentoGrid, BentoCard } from "@/app/components/magicui/bento-grid";
import { Shield, Server, Smartphone, Cloud, Building2, BarChart, MessageSquare, Files, Construction } from 'lucide-react';
import { IconCloud } from "@/app/components/magicui/icon-cloud";
import Image from 'next/image';
import { Marquee } from "@/app/components/magicui/marquee";
import { AnimatedCircularProgressBar } from "@/app/components/magicui/animated-circular-progress-bar";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/app/components/magicui/terminal";


const files = [
  {
    name: "handbook.pdf",
    body: "This handbook serves as a guide to our values, expectations, and everyday operations at...",
  },
  {
    name: "api_guide.docx",
    body: "Use this document to integrate smoothly with our platform and avoid common implementation issues",
  },
  {
    name: "battlecards.pptx",
    body: "These cards equip sales reps with quick insights to win deals and counter top competitors.",
  },
  {
    name: "audit_list.xlsx",
    body: "Follow this checklist to ensure your team is fully prepared for the upcoming SOC 2 audit.",
  },
  {
    name: "client_faqs.xlsx",
    body: "Compiled from real support tickets, this FAQ helps streamline the onboarding experience for new clients.",
  },
  {
    name: "q4_budget.xlsx",
    body: "This file outlines departmental spend vs. allocation for Q4, along with variance analysis and key financial highlights.",
  },
  {
    name: "arch_overview.pdf",
    body: "This document provides a high-level view of our current infrastructure, including data flow, core services, and security layers.",
  },
  {
    name: "q1_goals.docx",
    body: "The following plan outlines our goals for Q1, together with our mission and vision.",
  },
];


const llmLogos = [
  "/llm-logos/meta.svg",
  "/llm-logos/huggingface.svg",
  "/llm-logos/mistral.svg",
  "/llm-logos/deepseek.svg",
  "/llm-logos/grok.svg",
  "/llm-logos/qwen.svg",
  "/llm-logos/gemma.svg",
  "/llm-logos/google.svg",
  "/llm-logos/phi.svg",
  "/llm-logos/yi.svg",
  "/llm-logos/tii.svg",
  "/llm-logos/ollama.svg",
  "/llm-logos/openchat.svg",
  "/llm-logos/baichun.svg",
];

const NetworkBackground = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      import('vanta/dist/vanta.net.min').then((VANTA) => {
        setVantaEffect(
          VANTA.default({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: true,
            minHeight: 300,
            minWidth: 200,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x0062ff, //rgb(0, 98, 255)
            backgroundColor: 0x0B0F14,
            points: 4,
            maxDistance: 36,
            spacing: 15,
            showDots: true,
            backgroundAlpha: 0
          })
        );
      });
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="absolute inset-0 opacity-50" />;
};

const ProgressCircle = ({ delay = 0 }) => {
  const [value, setValue] = useState(delay);

  useEffect(() => {
    const handleIncrement = (prev) => {
      if (prev >= 99) {
        return 0;
      }
      return prev + 1;
    };
    
    const interval = setInterval(() => setValue(handleIncrement), 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="scale-75 sm:scale-65 md:scale-60 lg:scale-50 translate-y-[50%]">
      <AnimatedCircularProgressBar
        max={100}
        min={0}
        value={value}
        gaugePrimaryColor="rgb(0, 98, 255)"
        gaugeSecondaryColor="transparent"
      />
    </div>
  );
};

const LoopingTerminal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [key, setKey] = useState(0);
  const terminalRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (terminalRef.current) {
      observer.observe(terminalRef.current);
    }

    return () => {
      if (terminalRef.current) {
        observer.unobserve(terminalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setKey(prev => prev + 1);
      }, 20000); // Reset every 20 seconds (after animation completes)

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  if (!isVisible) {
    return <div ref={terminalRef} className="h-full" />;
  }

  return (
    <div ref={terminalRef}>
      <Terminal key={key} className="scale-85 sm:scale-85">
        <TypingAnimation>&gt; install @neptel/core</TypingAnimation>
        <AnimatedSpan delay={4000} className="text-blue-500">
          <span>ℹ Initializing secure environment</span>
        </AnimatedSpan>
        <AnimatedSpan delay={7000} className="text-green-500">
          <span>✔ Configuring end-to-end encryption</span>
        </AnimatedSpan>
        <TypingAnimation delay={10000} className="text-muted-foreground">
          Environment secured. Your data stays in your infrastructure.
        </TypingAnimation>
      </Terminal>
    </div>
  );
};

const features = [
  {
    Icon: () => <Server className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors" />,
    name: "Your Servers, Your Control",
    description: "Neptel deploys enterprise-grade AI within your infrastructure. Zero external dependencies, complete data sovereignty and absolute control.",
    href: "/#Getstarted",
    cta: "Get Started",
    background: (
      <div className="relative w-full h-full">
        <NetworkBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F14]/80 to-transparent transition-all duration-300 group-hover:from-[#0B0F14]/70">
        </div>
      </div>
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 backdrop-blur-sm border border-white/[0.08] group hover:border-white/[0.15] transition-colors",
  },
  {
    Icon: () => <Files className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors" />,
    name: "AI-Powered Knowledge Vault",
    description: "Transform internal documents into a knowledge base — fully secured within your infrastructure.",
    href: "/#Getstarted",
    cta: "Get Started",
    background: (
      <div className="relative w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent transition-all duration-300 group-hover:from-white/[0.12] group-hover:to-white/[0.04]">
          <Marquee
            pauseOnHover
            className="absolute top-1 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
          >
            {files.map((file, idx) => (
              <figure
                key={idx}
                className="relative w-35 cursor-pointer overflow-hidden rounded-xl border p-4 mx-2
                  border-white/[0.1] bg-white/[0.01] hover:bg-white/[0.05]
                  transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
              >
                <div className="flex flex-row items-center gap-2">
                  <div className="flex flex-col">
                    <figcaption className="text-sm font-medium text-white">
                      {file.name}
                    </figcaption>
                  </div>
                </div>
                <blockquote className="mt-2 text-xs text-gray-400">{file.body}</blockquote>
              </figure>
            ))}
          </Marquee>
        </div>
      </div>
    ),
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 backdrop-blur-sm border border-white/[0.08] group hover:border-white/[0.15] transition-colors",
  },
  {
    Icon: () => <MessageSquare className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors" />,
    name: "Extensive LLM Library",
    description: "Choose from hundreds of open-source and enterprise LLMs, all running privately in your infrastructure.",
    href: "/#Getstarted",
    cta: "Get Started",
    background: (
      <div className="relative w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent transition-all duration-300 group-hover:from-white/[0.12] group-hover:to-white/[0.04]" />
        <div className="absolute inset-0 flex items-center justify-center pt-35">
          <IconCloud 
            images={llmLogos}
            backgroundOpacity={100}
            speed={100}
          />
        </div>
      </div>
    ),
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3 backdrop-blur-sm border border-white/[0.08] group hover:border-white/[0.15] transition-colors overflow-hidden",
  },
  {
    Icon: () => <Construction className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors" />,
    name: "LLMs Built Just for You",
    description: "Neptel offers fine-tuned LLMs, tailored to your exact domain, securely and on-premises.",
    href: "/#Getstarted",
    cta: "Get Started",
    background: (
      <div className="relative w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent transition-all duration-300 group-hover:from-white/[0.12] group-hover:to-white/[0.04]">
          <div className="absolute top-1/2 -translate-y-1/2 inset-x-0 flex justify-center sm:justify-end sm:top-1/3 sm:-translate-y-2/3 sm:right-4 md:right-0 lg:-right-20 sm:pr-8 md:pr-12 lg:pr-16">
            <ProgressCircle delay={0} />
          </div>
        </div>
      </div>
    ),
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3 backdrop-blur-sm border border-white/[0.08] group hover:border-white/[0.15] transition-colors",
  },
  {
    Icon: () => <Shield className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors" />,
    name: "Robust Data Protection",
    description: "All data is encrypted end-to-end and stored privately on your servers. Nothing leaves your infrastructure, ever.",
    href: "/#Getstarted",
    cta: "Get Started",
    background: (
      <div className="relative w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent transition-all duration-300 group-hover:from-white/[0.12] group-hover:to-white/[0.04]">
          <div className="flex justify-center lg:justify-start lg:pl-[55%] items-start pt-1 lg:items-center">
            <div className="w-[280px] sm:w-[380px] md:w-[480px]">
              <LoopingTerminal />
            </div>
          </div>
        </div>
      </div>
    ),
    className: "lg:col-span-3 lg:row-start-3 lg:row-end-4 backdrop-blur-sm border border-white/[0.08] group hover:border-white/[0.15] transition-colors",
  },
];

const WhyNeptel = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.6
      }
    );

    const section = document.getElementById('why-neptel-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="why-neptel-section" className="w-full py-24 px-6 sm:px-12 bg-[#0B0F14] relative isolate">
      <div 
        className="absolute inset-0 -top-24 transition-opacity duration-1000" 
        style={{
          background: 'radial-gradient(circle at 50% 100%, rgba(59, 130, 246, 0.90), rgba(11, 15, 20, 0.05) 65%,transparent 90%)',
          pointerEvents: 'none',
          opacity: isVisible ? 1 : 0,
          zIndex: -1
        }}
      />
      <div className="text-center mb-16 relative">
        <h2 className="text-4xl font-bold text-white mb-4">
          Why Choose Neptel?
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Enterprise-grade AI infrastructure that puts you in control
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <BentoGrid className="lg:grid-rows-3 gap-4">
          {features.map((feature) => (
            <BentoCard 
              key={feature.name} 
              {...feature}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default WhyNeptel;
