"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, Sparkles, Users } from "lucide-react";
import Button from "../ui/Button";
import { batches } from "@/data/classes";
import Image from "next/image";
import Link from "next/link";

type HeroProps = {
  compact?: boolean;
};

export default function Hero({ compact = false }: HeroProps) {
  const mostUrgentBatch = [...batches].sort((a, b) => a.seatsLeft - b.seatsLeft)[0];

  return (
    <section className={`relative overflow-hidden ${compact ? "min-h-[70vh] py-20" : "min-h-screen py-24"}`}>
      <div className="hero-grid absolute inset-0 opacity-50" />
      <div className="absolute -left-40 top-14 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-pink-500/20 blur-3xl" />

      <div className="site-container relative z-10 grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-400/10 px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-cyan-100"
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
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-pink-300 bg-clip-text text-transparent">
              FEEL THE BEAT
            </span>
            <span className="block text-3xl tracking-wide text-white/90 sm:text-4xl lg:text-5xl">DANCE ACADEMY</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-base text-slate-200 sm:text-lg"
          >
            Train in Khanda Colony, Panvel with high-energy choreography, personalized coaching,
            and performance-ready batches in Hip-Hop, Bollywood, Contemporary, Kids, Ladies, and Self-Defence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="glass-card neon-ring mt-8 rounded-2xl p-4"
          >
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-200">
              <CalendarCheck className="h-5 w-5 text-pink-300" />
              <span className="font-semibold text-white">Limited Seats Alert:</span>
              <span className="rounded-full bg-pink-500/15 px-3 py-1 text-pink-200">
                Only {mostUrgentBatch.seatsLeft} seats left in {mostUrgentBatch.name}
              </span>
            </div>
          </motion.div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { value: "10+", label: "Years Journey" },
              { value: "500+", label: "Students Trained" },
              { value: "50+", label: "Stage Performances" },
            ].map((item) => (
              <div key={item.label} className="glass-card beat-reactive rounded-xl p-3 text-center">
                <div className="font-display text-4xl text-cyan-200">{item.value}</div>
                <div className="text-xs uppercase tracking-[0.18em] text-slate-300">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="glass-card overflow-hidden rounded-3xl border border-cyan-300/30 p-3">
            <div className="relative h-[400px] overflow-hidden rounded-2xl sm:h-[520px]">
              <Image
                src="/images/insta_dance_vedio.jpg"
                alt="Dance practice at Feel The Beat Dance Academy"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/15 bg-slate-950/55 p-4 backdrop-blur">
                <div className="flex items-center gap-2 text-cyan-200">
                  <Users className="h-4 w-4" />
                  <span className="text-xs uppercase tracking-[0.2em]">Community Driven</span>
                </div>
                <p className="mt-2 text-sm text-slate-200">
                  Your tribe, your rhythm, your stage. Train with dancers who grow together.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
