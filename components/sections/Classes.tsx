"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import Image from "next/image";
import { Clock3, Signal, Users } from "lucide-react";
import { batches, classes } from "@/data/classes";

export default function Classes() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const seatsByStyle = useMemo(() => {
    return batches.reduce<Record<string, number>>((acc, batch) => {
      if (!acc[batch.style]) {
        acc[batch.style] = batch.seatsLeft;
      } else {
        acc[batch.style] = Math.min(acc[batch.style], batch.seatsLeft);
      }
      return acc;
    }, {});
  }, []);

  return (
    <section id="classes" className="relative py-20">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2 className="font-display text-5xl text-white sm:text-6xl">Classes & Batches</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Pick your style, lock your batch, and train with structured progression.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {classes.map((danceClass, index) => {
            const seatLabel = seatsByStyle[danceClass.name] ?? seatsByStyle["Bollywood"];
            return (
              <motion.div
                key={danceClass.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="perspective-1000 h-[390px]"
                onMouseEnter={() => setActiveId(danceClass.id)}
                onMouseLeave={() => setActiveId(null)}
                onClick={() => setActiveId((prev) => (prev === danceClass.id ? null : danceClass.id))}
              >
                <motion.div
                  animate={{ rotateY: activeId === danceClass.id ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  className="preserve-3d relative h-full w-full"
                >
                  <div className="backface-hidden glass-card absolute inset-0 overflow-hidden rounded-3xl border border-cyan-200/20 p-2">
                    <div className="relative h-44 overflow-hidden rounded-2xl">
                      <Image
                        src={danceClass.image}
                        alt={`${danceClass.name} class preview`}
                        fill
                        className="object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${danceClass.color} opacity-45`} />
                    </div>
                    <div className="p-4">
                      <h3 className="text-2xl font-semibold text-white">{danceClass.name}</h3>
                      <p className="mt-2 text-sm text-slate-300">{danceClass.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-200">
                        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">{danceClass.ageGroup} Years</span>
                        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">{danceClass.duration}</span>
                      </div>
                      <div className="mt-4 rounded-xl bg-pink-500/10 px-3 py-2 text-xs text-pink-100">
                        Only {seatLabel} seats left in active batch
                      </div>
                    </div>
                  </div>

                  <div className="glass-card rotate-y-180 backface-hidden absolute inset-0 rounded-3xl border border-pink-200/25 p-6">
                    <h4 className="text-lg font-semibold text-white">Batch Highlights</h4>
                    <ul className="mt-4 space-y-3 text-sm text-slate-200">
                      <li className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-cyan-200" /> Structured timing & discipline</li>
                      <li className="flex items-center gap-2"><Signal className="h-4 w-4 text-cyan-200" /> Level-based training plans</li>
                      <li className="flex items-center gap-2"><Users className="h-4 w-4 text-cyan-200" /> Community performances</li>
                    </ul>
                    <div className="mt-5 rounded-2xl border border-cyan-300/25 bg-cyan-400/10 p-3 text-xs text-cyan-100">
                      Tap card to flip. Mobile friendly interaction enabled.
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {danceClass.levels.map((level) => (
                        <span key={level} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">
                          {level}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
