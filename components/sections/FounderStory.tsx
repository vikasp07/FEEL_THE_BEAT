"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Sparkles, Trophy, Users } from "lucide-react";
import Card from "../ui/Card";

const timeline = [
  { year: "2015", title: "Started with a small class setup", icon: Sparkles },
  { year: "2017", title: "First full-stage student showcase", icon: Users },
  { year: "2019", title: "Launched Feel The Beat Dance Academy", icon: Award },
  { year: "2021", title: "Introduced Dhatingnaach annual event", icon: Trophy },
  { year: "2026", title: "10+ year teaching journey milestone", icon: Award },
];

export default function FounderStory() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <h2 className="font-display text-5xl text-white sm:text-6xl">Founder Story</h2>
          <p className="mt-4 text-slate-300">
            Aniket Gaikwad&apos;s journey from a single room in 2015 to one of Panvel&apos;s most energetic dance communities.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <Card className="rounded-3xl p-6" gradient>
            <div className="relative h-72 overflow-hidden rounded-2xl border border-white/15">
              <Image src="/images/Logo.jpg" alt="Aniket Gaikwad founder profile" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-white">Aniket Gaikwad</h3>
            <p className="mt-2 text-sm text-slate-300">
              Founder & Lead Choreographer. Focused on discipline-first training with expressive stage confidence.
            </p>
            <div className="mt-4 rounded-xl border border-cyan-300/35 bg-cyan-500/10 p-3 text-xs uppercase tracking-[0.18em] text-cyan-100">
              Started in 2015 • 10+ Years Journey
            </div>
          </Card>

          <Card className="rounded-3xl p-6">
            <div className="relative pl-6">
              <div className="absolute left-2 top-2 h-[92%] w-px bg-gradient-to-b from-cyan-300/60 via-pink-300/50 to-transparent" />
              <div className="space-y-5">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.07 }}
                    viewport={{ once: true }}
                    className="relative rounded-2xl border border-white/10 bg-slate-900/45 p-4"
                  >
                    <span className="absolute -left-[1.42rem] top-5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-pink-400" />
                    <div className="flex items-center gap-2 text-cyan-200">
                      <item.icon className="h-4 w-4" />
                      <span className="text-xs uppercase tracking-[0.2em]">{item.year}</span>
                    </div>
                    <p className="mt-2 text-sm text-white">{item.title}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
