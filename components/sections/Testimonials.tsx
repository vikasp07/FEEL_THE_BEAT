"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, PlayCircle, Star, Volume2 } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import Card from "../ui/Card";
import Button from "../ui/Button";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  const current = testimonials[index];

  return (
    <section className="relative py-20">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <h2 className="font-display text-5xl text-white sm:text-6xl">Testimonials</h2>
          <p className="mt-4 text-slate-300">Stories from dancers, parents, and performers in our academy community.</p>
        </motion.div>

        <Card className="mx-auto max-w-5xl rounded-3xl p-6 sm:p-8" gradient>
          <motion.div
            key={current.id}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 md:grid-cols-[280px_1fr]"
          >
            <div>
              <div className="relative h-64 overflow-hidden rounded-2xl border border-white/15">
                <Image src={current.image} alt={`${current.name} testimonial`} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
              </div>

              <div className="mt-4 rounded-xl border border-white/15 bg-slate-900/55 p-3 text-sm text-slate-200">
                {current.video ? (
                  <span className="inline-flex items-center gap-2 text-pink-200"><PlayCircle className="h-4 w-4" /> Video-style review</span>
                ) : (
                  <span className="inline-flex items-center gap-2 text-cyan-200"><Volume2 className="h-4 w-4" /> Voice-style review</span>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1">
                {Array.from({ length: current.rating }).map((_, starIndex) => (
                  <Star key={`${current.id}-${starIndex}`} className="h-4 w-4 fill-yellow-400 text-yellow-300" />
                ))}
              </div>

              <blockquote className="mt-4 text-lg leading-relaxed text-white sm:text-xl">
                {`"${current.content}"`}
              </blockquote>

              <div className="mt-5">
                <p className="text-lg font-semibold text-white">{current.name}</p>
                <p className="text-sm text-slate-300">{current.role}</p>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <Button variant="ghost" onClick={() => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}>
                  <ChevronLeft className="mr-1 h-4 w-4" /> Prev
                </Button>
                <Button variant="ghost" onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}>
                  Next <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((item, dotIndex) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setIndex(dotIndex)}
                className={`h-2.5 rounded-full transition-all ${dotIndex === index ? "w-8 bg-cyan-300" : "w-2.5 bg-white/30"}`}
                aria-label={`Go to testimonial ${dotIndex + 1}`}
              />
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
