"use client";

import { motion } from "framer-motion";
import { FormEvent, useMemo, useState } from "react";
import { CalendarDays, CheckCircle2, Clock3, Phone, UserRound } from "lucide-react";
import { batches } from "@/data/classes";
import Button from "../ui/Button";
import Card from "../ui/Card";

type Booking = {
  name: string;
  phone: string;
  email: string;
  date: string;
  slot: string;
  batchStyle: string;
};

export default function BookDemo() {
  const slots = useMemo(
    () =>
      batches.map((batch) => ({
        id: batch.id,
        label: `${batch.time} (${batch.style})`,
        style: batch.style,
        seatsLeft: batch.seatsLeft,
        available: batch.seatsLeft > 0,
      })),
    [],
  );

  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
  });
  const [bookingId, setBookingId] = useState<string | null>(null);

  const selected = slots.find((slot) => slot.id === selectedSlot) ?? null;

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selected || !formData.name || !formData.phone || !formData.date) {
      return;
    }

    const payload: Booking = {
      ...formData,
      slot: selected.label,
      batchStyle: selected.style,
    };

    const id = `FTB-${Date.now().toString().slice(-6)}`;
    const key = "ftb-demo-bookings";
    const existing = window.localStorage.getItem(key);
    const parsed = existing ? (JSON.parse(existing) as Array<Booking & { id: string }>) : [];

    parsed.push({ ...payload, id });
    window.localStorage.setItem(key, JSON.stringify(parsed));

    setBookingId(id);
    setFormData({ name: "", phone: "", email: "", date: "" });
    setSelectedSlot(null);
  };

  if (bookingId) {
    return (
      <section id="book-demo" className="relative py-20">
        <div className="site-container">
          <Card className="mx-auto max-w-3xl rounded-3xl p-8 text-center" gradient>
            <CheckCircle2 className="mx-auto h-12 w-12 text-green-300" />
            <h2 className="mt-4 text-3xl font-semibold text-white">Demo Slot Reserved</h2>
            <p className="mt-2 text-slate-200">Booking ID: {bookingId}</p>
            <p className="mt-1 text-sm text-slate-300">
              Our team will call you shortly to confirm your class orientation details.
            </p>
            <Button className="mt-6" onClick={() => setBookingId(null)}>
              Book Another Demo
            </Button>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="book-demo" className="relative py-20">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <h2 className="font-display text-5xl text-white sm:text-6xl">Book Your Demo Class</h2>
          <p className="mt-4 text-slate-300">
            Choose your preferred slot and confirm in under a minute.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <Card className="rounded-3xl p-6">
            <h3 className="text-xl font-semibold text-white">Select Available Slot</h3>
            <div className="mt-5 grid gap-3">
              {slots.map((slot) => (
                <button
                  key={slot.id}
                  type="button"
                  disabled={!slot.available}
                  onClick={() => setSelectedSlot(slot.id)}
                  className={`rounded-xl border px-4 py-3 text-left transition-all ${
                    selectedSlot === slot.id
                      ? "border-cyan-300 bg-cyan-500/20 text-white"
                      : "border-white/15 bg-slate-900/45 text-slate-200 hover:border-white/35"
                  } ${!slot.available ? "cursor-not-allowed opacity-40" : ""}`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-medium">{slot.label}</p>
                    <p className="text-xs text-pink-200">{slot.seatsLeft} seats left</p>
                  </div>
                </button>
              ))}
            </div>
          </Card>

          <Card className="rounded-3xl p-6" gradient>
            <h3 className="text-xl font-semibold text-white">Your Details</h3>
            <form className="mt-5 space-y-4" onSubmit={submit}>
              <label className="block text-sm text-slate-200">
                Full Name
                <div className="mt-1 flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/55 px-3 py-2">
                  <UserRound className="h-4 w-4 text-cyan-200" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                    className="w-full bg-transparent text-white outline-none"
                    placeholder="Enter your name"
                    required
                  />
                </div>
              </label>

              <label className="block text-sm text-slate-200">
                Phone Number
                <div className="mt-1 flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/55 px-3 py-2">
                  <Phone className="h-4 w-4 text-cyan-200" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
                    className="w-full bg-transparent text-white outline-none"
                    placeholder="Enter phone number"
                    required
                  />
                </div>
              </label>

              <label className="block text-sm text-slate-200">
                Email (optional)
                <input
                  type="email"
                  value={formData.email}
                  onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                  className="mt-1 w-full rounded-xl border border-white/10 bg-slate-900/55 px-3 py-2 text-white outline-none"
                  placeholder="Enter email"
                />
              </label>

              <label className="block text-sm text-slate-200">
                Preferred Date
                <div className="mt-1 flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/55 px-3 py-2">
                  <CalendarDays className="h-4 w-4 text-cyan-200" />
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(event) => setFormData({ ...formData, date: event.target.value })}
                    className="w-full bg-transparent text-white outline-none"
                    required
                  />
                </div>
              </label>

              <div className="rounded-xl border border-cyan-300/30 bg-cyan-500/10 p-3 text-xs text-cyan-100">
                <Clock3 className="mr-1 inline h-3.5 w-3.5" />
                {selected ? `Selected slot: ${selected.label}` : "Select a slot to continue"}
              </div>

              <Button type="submit" className="w-full" disabled={!selected}>
                Confirm Demo Booking
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
