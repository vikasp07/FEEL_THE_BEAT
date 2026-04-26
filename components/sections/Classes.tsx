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
    <section id="classes" className="section-wrap">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: false, amount: 0.35 }}
          className="mb-14 text-center"
        >
          <h2 className="section-title">Classes & Batches</h2>
          <p className="section-lead">
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
                  <div className="backface-hidden glass-card absolute inset-0 overflow-hidden rounded-3xl border border-red-500/30 p-2">
                    <div className="relative h-44 overflow-hidden rounded-2xl">
                      <Image
                        src={danceClass.image}
                        alt={`${danceClass.name} class preview`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${danceClass.color} opacity-45`} />
                    </div>
                    <div className="p-4">
                      <h3 className="text-2xl font-semibold text-white">{danceClass.name}</h3>
                      <p className="mt-2 text-sm text-white">{danceClass.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2 text-xs text-white">
                        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">{danceClass.ageGroup} Years</span>
                        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">{danceClass.duration}</span>
                      </div>
                      <div className="mt-4 rounded-xl bg-red-500/20 px-3 py-2 text-xs text-red-200">
                        Only {seatLabel} seats left in active batch
                      </div>
                    </div>
                  </div>

                  <div className="glass-card rotate-y-180 backface-hidden absolute inset-0 rounded-3xl border border-red-500/30 p-6">
                    <h4 className="text-lg font-semibold text-white">Batch Highlights</h4>
                    <ul className="mt-4 space-y-3 text-sm text-white">
                      <li className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-red-300" /> Structured timing & discipline</li>
                      <li className="flex items-center gap-2"><Signal className="h-4 w-4 text-red-300" /> Level-based training plans</li>
                      <li className="flex items-center gap-2"><Users className="h-4 w-4 text-red-300" /> Community performances</li>
                    </ul>
                    <div className="mt-5 rounded-2xl border border-red-500/40 bg-red-500/15 p-3 text-xs text-red-200">
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
