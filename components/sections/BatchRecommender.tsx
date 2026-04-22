"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { CalendarDays, Clock3, RotateCcw, Sparkles, Users } from "lucide-react";
import { recommendBatch, RecommendationInput } from "@/utils/batchRecommender";
import Button from "../ui/Button";
import Card from "../ui/Card";
import { Batch } from "@/data/classes";

const questions: Array<{
  field: keyof RecommendationInput;
  question: string;
  options: string[];
}> = [
  {
    field: "ageGroup",
    question: "What is your age group?",
    options: ["5-12", "12-18", "18-35", "35-50", "50+"],
  },
  {
    field: "skillLevel",
    question: "What is your skill level?",
    options: ["Beginner", "Intermediate", "Advanced"],
  },
  {
    field: "goal",
    question: "What is your primary goal?",
    options: ["Fitness", "Stage", "Fun"],
  },
];

const initialState: RecommendationInput = {
  ageGroup: "",
  skillLevel: "",
  goal: "",
};

export default function BatchRecommender() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<RecommendationInput>(initialState);
  const [recommendation, setRecommendation] = useState<Batch | null>(null);

  const progress = useMemo(() => ((step + 1) / questions.length) * 100, [step]);

  const handleSelect = (value: string) => {
    const question = questions[step];
    const nextData = { ...formData, [question.field]: value };
    setFormData(nextData);

    if (step < questions.length - 1) {
      setStep(step + 1);
      return;
    }

    setRecommendation(recommendBatch(nextData));
  };

  const reset = () => {
    setStep(0);
    setFormData(initialState);
    setRecommendation(null);
  };

  return (
    <section className="relative py-20">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-100">
            <Sparkles className="h-4 w-4" />
            Smart Batch Recommender
          </div>
          <h2 className="font-display text-5xl text-white sm:text-6xl">Find Your Perfect Batch</h2>
          <p className="mt-4 text-slate-300">
            Answer three quick questions and get your ideal class timing instantly.
          </p>
        </motion.div>

        {!recommendation ? (
          <Card className="mx-auto max-w-3xl rounded-3xl p-6 sm:p-8">
            <div className="mb-6">
              <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-slate-300">
                <span>Step {step + 1}</span>
                <span>{Math.round(progress)}% complete</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-400 to-pink-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-white">{questions[step].question}</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {questions[step].options.map((option) => (
                <motion.button
                  key={option}
                  type="button"
                  whileTap={{ scale: 0.98 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => handleSelect(option)}
                  className="beat-reactive rounded-xl border border-cyan-300/25 bg-slate-900/40 px-4 py-3 text-left text-white transition-all hover:border-pink-300/35 hover:bg-pink-500/10"
                >
                  {option}
                </motion.button>
              ))}
            </div>
          </Card>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl"
          >
            <Card className="rounded-3xl p-7" gradient>
              <h3 className="text-3xl font-semibold text-white">Your Recommended Batch</h3>
              <p className="mt-2 text-slate-200">Matched for your age, goal, and current skill level.</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/15 bg-slate-900/55 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">Batch</p>
                  <p className="mt-1 text-xl font-semibold text-white">{recommendation.name}</p>
                  <p className="mt-1 text-sm text-slate-300">{recommendation.style}</p>
                </div>

                <div className="rounded-xl border border-white/15 bg-slate-900/55 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">Seats Left</p>
                  <p className="mt-1 text-xl font-semibold text-pink-200">Only {recommendation.seatsLeft}</p>
                  <p className="mt-1 text-sm text-slate-300">Limited entries this cycle</p>
                </div>
              </div>

              <div className="mt-6 space-y-2 text-sm text-slate-200">
                <p className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-cyan-200" /> {recommendation.time}</p>
                <p className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-cyan-200" /> {recommendation.days}</p>
                <p className="flex items-center gap-2"><Users className="h-4 w-4 text-cyan-200" /> Level: {recommendation.level}</p>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button onClick={reset} variant="ghost">
                  <RotateCcw className="mr-2 h-4 w-4" /> Recalculate
                </Button>
                <Button onClick={() => (window.location.href = "/book-demo")}>Book This Batch</Button>
              </div>
            </Card>
          </motion.div>
        )}
      </div>
    </section>
  );
}
