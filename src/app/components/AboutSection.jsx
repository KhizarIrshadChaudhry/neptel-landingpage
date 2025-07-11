"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { AuroraText } from "@/app/components/magicui/aurora-text";
import { Globe, Linkedin as LinkedinIcon } from "lucide-react";
import { Particles } from "@/app/components/magicui/particles";

export default function AboutSection() {
  const carouselImages = [
    "/NeptelAIImages/a.png",
    "/NeptelAIImages/b.png",
    "/NeptelAIImages/c.png",
    "/NeptelAIImages/d.png",
    ...Array.from({ length: 26 }, (_, i) => `/NeptelAIImages/d (${i + 2}).png`),
  ];

  const coFounders = [
    {
      name: "Khizar Irshad Chaudhry",
      role: "Chief Executive Officer (CEO)",
      img: "/Staff_images/CEO.jpeg",
      desc: "High school student passionate about leadership and innovation, driving the team with fresh ideas and dedication.",
      linkedin: "https://www.linkedin.com/in/khizar-irshad-chaudhry/",
    },
    {
      name: "Siamul Omar",
      role: "Chief Technology Officer (CTO)",
      img: "/Staff_images/CTO.jpeg",
      desc: "Engineering student at Denmarks Technical University dedicated to building solutions that  solve real-world problems.",
      linkedin: "https://www.linkedin.com/in/siams10/",
    },
    {
      name: "Zohaib Asgher",
      role: "Chief Financial Officer (CFO)",
      img: "/Staff_images/CFO.jpeg",
      desc: "Enrolled at Denmarks Technical University ensuring operational and financial excellence while ensuring client success.",
      linkedin: "https://linkedin.com/in/zohaibasgher",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // Preload all carousel frames
    carouselImages.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
    // Super-fast swap: 100ms
    const iv = setInterval(() => {
      setCurrent((p) => (p + 1) % carouselImages.length);
    }, 200);
    return () => clearInterval(iv);
  }, []);

  return (
    <section
      id="about"
      className="relative bg-[#13181f] py-24 px-6 sm:px-12 text-white overflow-hidden"
    >
      {/* Particle backdrop */}
      <Particles
        quantity={60}
        staticity={40}
        color="#0549ff"
        className="absolute inset-0 opacity-10"
      />

      {/* Header */}
      <div className="relative z-10 mb-16 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
          About <AuroraText>Neptel</AuroraText>
        </h2>
      </div>

      {/* Who We Are + Instant‐swap Carousel */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 mb-16">
        <motion.div
          className="md:w-1/2 text-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 text-blue-400 mb-4">
            <Globe className="w-6 h-6" />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold">Who We Are</h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            We pioneer a new era of AI, empowering organizations with
            privacy-first, sovereign intelligence. Our mission is to ensure
            innovation and autonomy without compromise, building secure,
            independent AI systems free from Big Tech dependency.
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-[320px] h-[200px] rounded-xl overflow-hidden border border-white/20 shadow-lg">
            {carouselImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Slide ${i + 1}`}
                className={`absolute inset-0 w-full h-full object-cover ${i === current ? "block" : "hidden"} scale-[1.015]`}
              />
            ))}
            <div className="hidden">
              {current + 1} / {carouselImages.length}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Co-founders */}
      <motion.div
        className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {coFounders.map((c, i) => (
          <motion.div
            key={c.name}
            className="bg-[#181F29] rounded-2xl p-6 flex flex-col items-center shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: i * 0.15 },
              },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Image
              src={c.img}
              alt={c.name}
              width={96}
              height={96}
              className="rounded-full object-cover mb-4 border-4 border-[#232B36] shadow-md"
            />
            <h4 className="text-lg sm:text-xl font-semibold mb-1">{c.name}</h4>
            <span className="text-blue-400 font-medium mb-3">{c.role}</span>
            <p className="text-gray-400 text-sm text-center">{c.desc}</p>
            <Link
              href={c.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-gray-400 hover:text-blue-400 transition"
            >
              <LinkedinIcon size={24} />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}