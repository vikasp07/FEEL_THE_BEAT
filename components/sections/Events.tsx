"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock3, PlayCircle, Sparkles, Ticket } from "lucide-react";
import Button from "../ui/Button";
import Card from "../ui/Card";

function getTimeLeft(eventDate: Date) {
  const now = new Date().getTime();
  const diff = Math.max(0, eventDate.getTime() - now);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Events() {
  const eventDate = useMemo(() => new Date("2026-08-15T18:00:00+05:30"), []);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(eventDate));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft(eventDate));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [eventDate]);

  return (
    <section id="events" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-cyan-500/10" />

      <div className="site-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-300/35 bg-pink-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-pink-100">
            <Ticket className="h-4 w-4" />
            Signature Event
          </div>
          <h2 className="font-display text-5xl text-white sm:text-6xl">Dhatingnaach Festival</h2>
          <p className="mt-4 text-slate-300">
            Annual mega showcase where students perform on a professional stage with full production lights and crowd energy.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <Card className="rounded-3xl p-6" gradient>
            <div className="relative h-64 overflow-hidden rounded-2xl border border-white/15">
              <Image src="/images/image_trophy.jpg" alt="Dhatingnaach dance event trophy and stage" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 to-transparent" />
              <div className="absolute bottom-4 left-4 rounded-full border border-cyan-300/35 bg-cyan-500/20 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-100">
                2026 Edition
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["Days", timeLeft.days],
                ["Hours", timeLeft.hours],
                ["Minutes", timeLeft.minutes],
                ["Seconds", timeLeft.seconds],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl border border-white/10 bg-slate-900/60 p-3 text-center">
                  <div className="font-display text-4xl text-white">{String(value).padStart(2, "0")}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-cyan-200">{label}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-2 text-sm text-slate-200">
              <p className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-cyan-200" /> 15 August 2026</p>
              <p className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-cyan-200" /> 6:00 PM onwards</p>
              <p className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-cyan-200" /> Khanda Colony, Panvel</p>
            </div>

            <div className="mt-6 rounded-2xl border border-pink-300/35 bg-pink-500/10 p-4 text-sm text-pink-100">
              Ready to perform on stage? Demo bookings for event prep batches are now live.
            </div>

            <Link href="/book-demo" className="mt-6 block">
              <Button className="w-full" size="lg">Perform on Stage</Button>
            </Link>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {[
              {
                title: "Rehearsal Highlights",
                image: "/images/insta_dance_vedio.jpg",
                link: "https://www.instagram.com",
              },
              {
                title: "Backstage Moments",
                image: "/images/insta_advertise.jpg",
                link: "https://www.instagram.com",
              },
              {
                title: "Audience Reactions",
                image: "/images/insta_advertisement.jpg",
                link: "https://www.instagram.com",
              },
            ].map((item) => (
              <a key={item.title} href={item.link} target="_blank" rel="noopener noreferrer">
                <Card className="group rounded-2xl p-3">
                  <div className="relative h-40 overflow-hidden rounded-xl border border-white/10">
                    <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-2 text-sm text-white">
                      <PlayCircle className="h-4 w-4 text-cyan-200" />
                      {item.title}
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
