"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const message = encodeURIComponent("Hi, I want to join Feel The Beat Dance Academy");
  const phoneNumber = "919876543210";

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="beat-reactive group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg shadow-green-500/40"
      aria-label="Open WhatsApp chat"
    >
      <MessageCircle className="h-7 w-7 text-white" />
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-full mr-4 whitespace-nowrap rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-gray-900 opacity-0 shadow-lg transition-opacity group-hover:opacity-100"
      >
        Join via WhatsApp
      </motion.div>
    </motion.a>
  );
}
