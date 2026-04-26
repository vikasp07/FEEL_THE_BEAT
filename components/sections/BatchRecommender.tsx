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
    <section className="section-wrap">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: false, amount: 0.35 }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/50 bg-red-500/15 px-3 py-1 text-xs uppercase tracking-[0.2em] text-red-200">
            <Sparkles className="h-4 w-4" />
            Smart Batch Recommender
          </div>
          <h2 className="section-title">Find Your Perfect Batch</h2>
          <p className="section-lead">
            Answer three quick questions and get your ideal class timing instantly.
          </p>
        </motion.div>

        {!recommendation ? (
          <Card className="mx-auto max-w-3xl rounded-3xl p-6 sm:p-8">
            <div className="mb-6">
              <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-white">
                <span>Step {step + 1}</span>
                <span>{Math.round(progress)}% complete</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full bg-gradient-to-r from-red-500 to-red-600"
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
                  className="beat-reactive rounded-xl border border-red-500/35 bg-black/40 px-4 py-3 text-left text-white transition-all hover:border-red-400/50 hover:bg-red-500/15"
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
              <p className="mt-2 text-white/90">Matched for your age, goal, and current skill level.</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-red-500/30 bg-black/50 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-red-300">Batch</p>
                  <p className="mt-1 text-xl font-semibold text-white">{recommendation.name}</p>
                  <p className="mt-1 text-sm text-white">{recommendation.style}</p>
                </div>

                <div className="rounded-xl border border-red-500/30 bg-black/50 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-red-300">Seats Left</p>
                  <p className="mt-1 text-xl font-semibold text-red-200">Only {recommendation.seatsLeft}</p>
                  <p className="mt-1 text-sm text-white">Limited entries this cycle</p>
                </div>
              </div>

              <div className="mt-6 space-y-2 text-sm text-white">
                <p className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-red-300" /> {recommendation.time}</p>
                <p className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-red-300" /> {recommendation.days}</p>
                <p className="flex items-center gap-2"><Users className="h-4 w-4 text-red-300" /> Level: {recommendation.level}</p>
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
