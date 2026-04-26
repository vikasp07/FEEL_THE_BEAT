"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Classes", href: "/classes" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed left-0 right-0 top-0 z-50"
    >
      <div className="site-container">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <Link href="/" className="inline-flex items-center">
              <div className="relative h-16 w-40 md:h-20 md:w-48">
                <Image 
                  src="/images/logo.webp" 
                  alt="Feel The Beat Dance Academy" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  pathname === link.href ? "text-red-300" : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/book-demo">
              <Button>Book Demo</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="text-white md:hidden"
            aria-label="Open navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-card mb-4 rounded-2xl border border-red-500/25 p-4 md:hidden"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-lg px-3 py-3 text-sm ${
                    pathname === link.href
                      ? "bg-red-400/10 text-red-200"
                      : "text-white/80 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <Link href="/book-demo" className="mt-4 block" onClick={() => setIsOpen(false)}>
              <Button className="w-full">Book Demo</Button>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
