"use client";

import { motion } from "framer-motion";
import { Share2, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    { icon: Share2, href: "https://instagram.com", color: "hover:text-pink-400", label: "Instagram" },
    { icon: Share2, href: "https://youtube.com", color: "hover:text-red-400", label: "YouTube" },
    { icon: MessageCircle, href: "https://wa.me/919876543210", color: "hover:text-green-400", label: "WhatsApp" },
  ];

  return (
    <footer className="relative border-t border-cyan-200/15 bg-slate-950/50 pb-8 pt-16">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-500 to-pink-500 p-[1px]">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">AF</div>
              </div>
              <div>
                <div className="font-display text-2xl leading-none text-white">
                  Feel The Beat
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Khanda Colony&apos;s premium dance academy with energetic classes, stage-ready mentorship, and community-driven growth.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -3 }}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 ${social.color} transition-colors`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Classes", "/classes"],
                ["Events", "/events"],
                ["Book Demo", "/book-demo"],
                ["Contact", "/contact"],
              ].map(([link, href]) => (
                <li key={link}>
                  <Link href={href} className="text-sm text-gray-400 transition-colors hover:text-white">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Classes */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Dance Styles</h3>
            <ul className="space-y-2">
              {["Hip-Hop", "Bollywood", "Contemporary", "Ladies Batch", "Kids Batch", "Self-Defence"].map((style) => (
                <li key={style}>
                  <Link href="/classes" className="text-sm text-gray-400 transition-colors hover:text-white">
                    {style}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Khanda Colony, Panvel, Maharashtra 410206</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@feelthebeat.academy</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2026 Feel The Beat Dance Academy. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/contact" className="transition-colors hover:text-white">Privacy Policy</Link>
            <Link href="/contact" className="transition-colors hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="-z-10 absolute bottom-0 left-0 h-64 w-64 rounded-full bg-pink-500/10 blur-3xl"></div>
      <div className="-z-10 absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl"></div>
    </footer>
  );
}
