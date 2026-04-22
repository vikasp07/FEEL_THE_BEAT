"use client";

import { motion } from "framer-motion";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import Card from "../ui/Card";
import Button from "../ui/Button";

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <h2 className="font-display text-5xl text-white sm:text-6xl">Contact Us</h2>
          <p className="mt-4 text-slate-300">
            Visit our academy in Khanda Colony, Panvel, call us, or book your demo directly.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-4">
            <Card className="rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-cyan-200" />
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">Address</p>
                  <p className="mt-1 text-white">Aniket&apos;s Feel The Beat Dance Academy, Khanda Colony, Panvel, Maharashtra 410206</p>
                </div>
              </div>
            </Card>

            <Card className="rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-cyan-200" />
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">Phone</p>
                  <p className="mt-1 text-white">+91 98765 43210, +91 97654 32109</p>
                </div>
              </div>
            </Card>

            <Card className="rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-cyan-200" />
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">Email</p>
                  <p className="mt-1 text-white">info@feelthebeat.academy</p>
                </div>
              </div>
            </Card>

            <Card className="rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <Clock3 className="mt-0.5 h-5 w-5 text-cyan-200" />
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">Working Hours</p>
                  <p className="mt-1 text-white">Monday to Saturday: 6:00 AM - 9:00 PM</p>
                  <p className="text-slate-300">Sunday: 8:00 AM - 2:00 PM</p>
                </div>
              </div>
            </Card>

            <a href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20join%20Feel%20The%20Beat%20Dance%20Academy" target="_blank" rel="noopener noreferrer">
              <Button className="w-full" size="lg">Chat on WhatsApp</Button>
            </a>
          </div>

          <Card className="rounded-2xl p-4" gradient>
            <div className="overflow-hidden rounded-xl border border-white/15">
              <iframe
                title="Feel The Beat Dance Academy location in Khanda Colony Panvel"
                src="https://www.google.com/maps?q=Khanda+Colony,+Panvel,+Maharashtra&output=embed"
                className="h-[520px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
