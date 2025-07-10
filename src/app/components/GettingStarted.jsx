"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Server, Rocket } from "lucide-react";

export default function GettingStarted() {
  const steps = [
    {
      icon: <Calendar className="w-8 h-8 text-blue-400" />,
      title: "1. Initial Consultation",
      description:
        "We'll meet to understand your needs, data requirements, and infrastructure setup to design the perfect solution for your organization.",
      highlight: "Free consultation and assessment",
    },
    {
      icon: <Server className="w-8 h-8 text-blue-400" />,
      title: "2. Infrastructure Setup",
      description:
        "Our team will help deploy Neptel within your infrastructure, ensuring seamless integration with your existing systems and security protocols.",
      highlight: "Secure deployment within your environment",
    },
    {
      icon: <Rocket className="w-8 h-8 text-blue-400" />,
      title: "3. Launch and Support",
      description:
        "Start using your private AI infrastructure with full training and ongoing support from our expert team.",
      highlight: "Comprehensive training included",
    },
  ];

  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const listenersRef = useRef([]);
  const [calendlyReady, setCalendlyReady] = useState(false);

  // IntersectionObserver to sequence card animations
  useEffect(() => {
    const cards = cardRefs.current;
    const listeners = listenersRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cards.forEach((c) => c.classList.remove("active"));
          listeners.forEach(({ card, fn }) => card.removeEventListener("animationend", fn));
          listeners.length = 0;

          const startCard = (i) => {
            if (i >= cards.length) return;
            const card = cards[i];
            card.classList.add("active");
            const onEnd = () => {
              card.removeEventListener("animationend", onEnd);
              startCard(i + 1);
            };
            card.addEventListener("animationend", onEnd);
            listeners.push({ card, fn: onEnd });
          };
          startCard(0);
        } else {
          cards.forEach((c) => c.classList.remove("active"));
          listeners.forEach(({ card, fn }) => card.removeEventListener("animationend", fn));
          listeners.length = 0;
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      observer.disconnect();
      listenersRef.current.forEach(({ card, fn }) => card.removeEventListener("animationend", fn));
    };
  }, []);

  // Load Calendly CSS & JS dynamically
  useEffect(() => {
    // CSS
    if (!document.getElementById("calendly-css")) {
      const link = document.createElement("link");
      link.id = "calendly-css";
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }
    // JS
    if (!document.getElementById("calendly-js")) {
      const script = document.createElement("script");
      script.id = "calendly-js";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.onload = () => setCalendlyReady(true);
      document.body.appendChild(script);
    } else {
      // Already loaded
      setCalendlyReady(true);
    }
  }, []);

  // Opens Calendly popup
  const openCalendly = () => {
    if (calendlyReady && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/neptel-dk", // ← your link
        parentElement: document.body,
      });
    } else {
      console.warn("Calendly not ready yet");
    }
  };

  return (
    <section
      id="Getstarted"
      ref={containerRef}
      className="relative py-24 px-6 sm:px-12 bg-[#0B0F14]"
    >
      {/* Background Gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"
        style={{
          maskImage: "radial-gradient(circle at center, black, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle at center, black, transparent 80%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Just 3 Steps to Get Started
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Begin your journey to secure, private AI infrastructure with our
            straightforward onboarding process
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              ref={(el) => (cardRefs.current[idx] = el)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="step-card group bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 h-full transition-all duration-300 hover:border-blue-500/50 hover:bg-white/[0.07] relative"
            >
              {/* Connector Line */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-[2px] bg-gradient-to-r from-blue-500/20 to-transparent -z-10 transform translate-x-4" />
              )}

              <div>
                <div className="bg-blue-500/10 rounded-lg p-3 inline-block mb-6 group-hover:bg-blue-500/20 transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-400 mb-4">{step.description}</p>
                <div className="text-blue-400 text-sm font-medium">
                  {step.highlight}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Calendly CTA */}
        <div className="text-center mt-16">
          <button
            onClick={openCalendly}
            className="inline-flex items-center justify-center px-12 py-4 rounded-full bg-blue-500 disabled:opacity-50 text-white text-lg font-semibold hover:bg-blue-600 transition-colors"
            disabled={!calendlyReady}
          >
            {calendlyReady
              ? "Schedule Your Free Consultation"
              : "Loading…"}
          </button>
        </div>
      </div>
    </section>
  );
}
