"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import Image from "next/image";
import { Brain, RefreshCcw, Sparkles } from "lucide-react";
import { quizQuestions, quizResults } from "@/data/quiz";
import Card from "../ui/Card";
import Button from "../ui/Button";

type QuizKey = keyof typeof quizResults;

export default function DanceQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<QuizKey | null>(null);
  const [started, setStarted] = useState(false);

  const progress = useMemo(
    () => ((currentQuestion + 1) / quizQuestions.length) * 100,
    [currentQuestion],
  );

  const choose = (value: string) => {
    const nextAnswers = [...answers, value];
    setAnswers(nextAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      return;
    }

    const counts = nextAnswers.reduce<Record<string, number>>((acc, answer) => {
      acc[answer] = (acc[answer] || 0) + 1;
      return acc;
    }, {});

    const winner = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] as QuizKey | undefined;
    setResult(winner ?? "bollywood");
  };

  const reset = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
    setStarted(false);
  };

  if (!started && !result) {
    return (
      <section className="section-wrap">
        <div className="site-container">
          <Card className="mx-auto max-w-3xl rounded-3xl p-8 text-center" gradient>
            <Brain className="mx-auto h-10 w-10 text-red-300" />
            <h2 className="section-title mt-4">Dance Style Quiz</h2>
            <p className="section-lead mt-3 text-white/90">
              Six rapid-fire questions to discover your signature style and suggested batch.
            </p>
            <Button onClick={() => setStarted(true)} className="mt-8" size="lg">
              <Sparkles className="mr-2 h-4 w-4" /> Start Quiz
            </Button>
          </Card>
        </div>
      </section>
    );
  }

  if (result) {
    const quizResult = quizResults[result];

    return (
      <section className="section-wrap">
        <div className="site-container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-4xl">
            <Card className="rounded-3xl p-6 sm:p-8">
              <div className="grid gap-6 md:grid-cols-[1fr_1.1fr] md:items-center">
                <div className="relative h-64 overflow-hidden rounded-2xl border border-white/10">
                  <Image src={quizResult.image} alt={`${quizResult.style} dance style result`} fill sizes="(max-width: 768px) 100vw, 45vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-red-300">Your Style Match</p>
                  <h3 className="mt-2 text-4xl font-semibold text-white">{quizResult.style}</h3>
                  <p className="mt-3 text-sm text-white/80">{quizResult.description}</p>

                  <div className="mt-4 rounded-xl border border-red-500/40 bg-red-500/15 p-3 text-sm text-red-200">
                    Suggested Batch: {quizResult.recommendedBatch}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button onClick={reset} variant="ghost">
                      <RefreshCcw className="mr-2 h-4 w-4" /> Retake Quiz
                    </Button>
                    <Button onClick={() => (window.location.href = "/book-demo")}>Book Demo For This Style</Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-wrap">
      <div className="site-container">
        <Card className="mx-auto max-w-3xl rounded-3xl p-6 sm:p-8">
          <div className="mb-6">
            <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/80">
              <span>Question {currentQuestion + 1}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-red-400 via-red-500 to-red-600"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={quizQuestions[currentQuestion].id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="text-2xl font-semibold text-white">{quizQuestions[currentQuestion].question}</h3>
              <div className="mt-6 space-y-3">
                {quizQuestions[currentQuestion].options.map((option) => (
                  <button
                    key={option.text}
                    type="button"
                    onClick={() => choose(option.value)}
                    className="beat-reactive w-full rounded-xl border border-red-500/30 bg-black/40 px-4 py-3 text-left text-white transition-all hover:border-red-400/50 hover:bg-red-500/15"
                  >
                    <span className="mr-2">{option.emoji}</span>
                    {option.text}
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </Card>
      </div>
    </section>
  );
}
