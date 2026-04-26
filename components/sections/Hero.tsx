"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Button from "../ui/Button";
import Link from "next/link";

type HeroProps = {
  compact?: boolean;
};

export default function Hero({ compact = false }: HeroProps) {
  return (
    <section className={`relative overflow-hidden ${compact ? "min-h-[70vh] pt-32" : "min-h-screen pt-32"}`}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/background.png')" }}
      />
      <div className="absolute inset-0 " />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(125,18,18,0.24),transparent_52%),radial-gradient(circle_at_82%_18%,rgba(210,45,45,0.14),transparent_44%),linear-gradient(120deg,rgba(0,0,0,0.54)_0%,rgba(0,0,0,0.34)_44%,rgba(0,0,0,0.18)_100%)]" />
      <div className="hero-grid absolute inset-0 opacity-30" />
      <div className="absolute -left-40 top-14 h-72 w-72 rounded-full bg-red-500/30 blur-3xl   " />
      <div className="absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-red-600/20 blur-3xl" />

      <div className="site-container relative z-10 grid items-center gap-12">
        <div className="max-w-4xl pt-8 text-left lg:max-w-3xl lg:pl-2 xl:pl-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-500/50 bg-red-500/15 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-red-200"
          >
            <Sparkles className="h-4 w-4" />
            Panvel&apos;s Premium Dance Academy
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl leading-[0.95] text-white sm:text-6xl lg:text-8xl"
          >
            ANIKET&apos;S
            <span className="block bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
              FEEL THE BEAT
            </span>
            <span className="block text-3xl tracking-wide text-white/90 sm:text-4xl lg:text-5xl">DANCE ACADEMY</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-base text-white sm:text-lg"
          >
            Signature training in Khanda Colony, Panvel for dancers who want precision, confidence,
            and stage-level polish across every batch.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:justify-start"
          >
            <Link href="/book-demo">
              <Button size="lg" className="w-full sm:w-auto">
                Book Your Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/classes">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Explore Batches
              </Button>
            </Link>
          </motion.div>

          <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
            {[
              { value: "10+", label: "Years Journey" },
              { value: "500+", label: "Students Trained" },
              { value: "50+", label: "Stage Performances" },
            ].map((item) => (
              <div key={item.label} className="glass-card beat-reactive rounded-xl p-3 text-left sm:text-center">
                <div className="font-display text-4xl text-red-400">{item.value}</div>
                <div className="text-xs uppercase tracking-[0.18em] text-white">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
