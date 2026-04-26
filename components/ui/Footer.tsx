"use client";

import { motion } from "framer-motion";
import { Share2, MessageCircle, Mail, Phone, MapPin, ArrowRight, Heart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);

  const socialLinks = [
    { icon: Share2, href: "https://instagram.com", color: "from-pink-500 to-purple-600", label: "Instagram" },
    { icon: Share2, href: "https://youtube.com", color: "from-red-500 to-red-700", label: "YouTube" },
    { icon: MessageCircle, href: "https://wa.me/919876543210", color: "from-green-400 to-green-600", label: "WhatsApp" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <footer className="relative overflow-hidden border-t border-red-500/20 bg-gradient-to-b from-black/80 via-black/90 to-black pb-8 pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-red-500/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-red-600/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-400/15 blur-3xl"
        />
      </div>

      <div className="site-container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mb-6 flex items-center gap-3"
            >
              <div className="relative h-12 w-12">
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-red-400 via-red-500 to-red-600 opacity-50 blur-md"
                />
                <div className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600 text-lg font-bold text-white shadow-lg">
                  AF
                </div>
              </div>
              <div>
                <div className="font-display text-2xl leading-none text-white">
                  Feel The Beat
                </div>
                <div className="text-xs uppercase tracking-wider text-red-300/70">Dance Academy</div>
              </div>
            </motion.div>
            <p className="mb-6 text-sm leading-relaxed text-white/70">
              Khanda Colony&apos;s premium dance academy with energetic classes, stage-ready mentorship, and community-driven growth.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onHoverStart={() => setHoveredSocial(index)}
                  onHoverEnd={() => setHoveredSocial(null)}
                  whileHover={{ scale: 1.15, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative"
                  aria-label={social.label}
                >
                  <motion.div
                    animate={{
                      opacity: hoveredSocial === index ? 1 : 0,
                      scale: hoveredSocial === index ? 1 : 0.8,
                    }}
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${social.color} blur-lg`}
                  />
                  <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white/80 backdrop-blur-sm transition-colors group-hover:border-white/30 group-hover:text-white">
                    <social.icon className="h-5 w-5" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-6 font-display text-xl text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Classes", "/classes"],
                ["Events", "/events"],
                ["Book Demo", "/book-demo"],
                ["Contact", "/contact"],
              ].map(([link, href]) => (
                <motion.li
                  key={link}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href={href} className="group flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-red-300">
                    <ArrowRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    {link}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Dance Styles */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-6 font-display text-xl text-white">Dance Styles</h3>
            <ul className="space-y-3">
              {["Hip-Hop", "Bollywood", "Contemporary", "Ladies Batch", "Kids Batch", "Self-Defence"].map((style) => (
                <motion.li
                  key={style}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href="/classes" className="group flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-red-300">
                    <ArrowRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                    {style}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="mb-6 font-display text-xl text-white">Get In Touch</h3>
            <ul className="space-y-4">
              <motion.li
                whileHover={{ x: 5 }}
                className="group flex items-start gap-3 text-sm text-white/70 transition-colors hover:text-white"
              >
                <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-red-300 transition-colors group-hover:bg-red-500/20">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="leading-relaxed">Khanda Colony, Panvel, Maharashtra 410206</span>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="group flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-red-300 transition-colors group-hover:bg-red-500/20">
                  <Phone className="h-4 w-4" />
                </div>
                <span>+91 98765 43210</span>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="group flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-white"
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-red-300 transition-colors group-hover:bg-red-500/20">
                  <Mail className="h-4 w-4" />
                </div>
                <span>info@feelthebeat.academy</span>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row"
        >
          <p className="flex items-center gap-2 text-center text-sm text-white/60 md:text-left">
            © 2026 Feel The Beat Dance Academy. Made with <Heart className="h-4 w-4 fill-red-500 text-red-500" /> in Panvel
          </p>
          <div className="flex gap-6 text-sm text-white/60">
            <motion.div whileHover={{ y: -2 }}>
              <Link href="/contact" className="transition-colors hover:text-red-300">Privacy Policy</Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }}>
              <Link href="/contact" className="transition-colors hover:text-red-300">Terms of Service</Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="hero-grid h-full w-full" />
      </div>
    </footer>
  );
}
