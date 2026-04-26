"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PlayCircle, Ticket } from "lucide-react";
import Card from "../ui/Card";

export default function Events() {
  return (
    <section id="events" className="section-wrap overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-red-600/10" />

      <div className="site-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: false, amount: 0.35 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/50 bg-red-500/15 px-3 py-1 text-xs uppercase tracking-[0.2em] text-red-200">
            <Ticket className="h-4 w-4" />
            Signature Event
          </div>
          <h2 className="section-title">Dhatingnaach Festival</h2>
          <p className="section-lead text-white">
            Annual mega showcase where students perform on a professional stage with full production lights and crowd energy.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="rounded-3xl p-6" gradient>
            <div className="relative h-80 overflow-hidden rounded-2xl border border-white/15">
              <Image src="/images/Dhatingnaach.jpg" alt="Dhatingnaach dance event trophy and stage" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
              <div className="absolute bottom-4 left-4 rounded-full border border-red-500/50 bg-red-500/20 px-3 py-1 text-xs uppercase tracking-[0.2em] text-red-100">
                2026 Edition
              </div>
            </div>
          </Card>

          <Card className="rounded-3xl p-6" gradient>
            <div className="relative h-80 overflow-hidden rounded-2xl border border-white/15">
              <Image src="/images/Dhatingnaach_4.jpg" alt="Dhatingnaach event highlights" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
            </div>
          </Card>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Rehearsal Highlights",
              image: "/images/Dhatingnaach1.webp",
              link: "https://www.instagram.com",
            },
            {
              title: "Backstage Moments",
              image: "/images/Dhatingnaach2.webp",
              link: "https://www.instagram.com",
            },
            {
              title: "Audience Reactions",
              image: "/images/Dhatingnaach3.jpg",
              link: "https://www.instagram.com",
            },
          ].map((item) => (
            <a key={item.title} href={item.link} target="_blank" rel="noopener noreferrer">
              <Card className="group rounded-2xl p-3">
                <div className="relative h-64 overflow-hidden rounded-xl border border-white/10">
                  <Image src={item.image} alt={item.title} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-contain transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 text-sm text-white">
                    <PlayCircle className="h-4 w-4 text-red-300" />
                    {item.title}
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
