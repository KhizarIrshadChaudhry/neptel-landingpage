// components/Footer.jsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B0F14] text-gray-400 py-12 px-6 sm:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Logo & Description */}
        <div className="flex flex-col gap-4 max-w-md">
          <Link href="/">
            <Image
              src="/NeptelHeaderLogo.png"
              alt="Neptel Logo"
              width={140}
              height={40}
              className="object-contain"
            />
          </Link>
          <p className="text-sm">
            Neptel empowers organizations with privacy-first, local AI systems — secure, sovereign, and compliant.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
          <div>
            <h4 className="text-white font-semibold mb-2">Company</h4>
            <ul className="space-y-1">
              <li><Link href="/#about" className="hover:text-white">About</Link></li>
              <li><Link href="/#visionmission" className="hover:text-white">Vision & Mission</Link></li>
              <li><Link href="/#about" className="hover:text-white">Team</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Consultancy</h4>
            <ul className="space-y-1">
              <li><Link href="/#problem" className="hover:text-white">Problem</Link></li>
              <li><Link href="/#solution" className="hover:text-white">Solution</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Contact</h4>
            <ul className="space-y-1">
              <li><a href="mailto:hello@neptel.dk" className="hover:text-white">hello@neptel.dk</a></li>
              <li><Link href="/#Getstarted" className="hover:text-white">Book Meeting</Link></li>
              <li>
                <a href="https://www.linkedin.com/company/neptel-dk/" target="_blank" rel="noopener noreferrer" className="hover:text-white inline-flex items-center gap-1">
                  <Linkedin size={16} /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-12 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Neptel. All rights reserved.
      </div>
    </footer>
  );
}
