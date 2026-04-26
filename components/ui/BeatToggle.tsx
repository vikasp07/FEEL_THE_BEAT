"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Pause, Play, Waves } from "lucide-react";

type AudioState = {
  context: AudioContext;
  gain: GainNode;
  intervalId: number;
};

function scheduleBeat(context: AudioContext, gain: GainNode, accent: boolean) {
  const osc = context.createOscillator();
  const beatGain = context.createGain();

  osc.type = accent ? "triangle" : "sine";
  osc.frequency.value = accent ? 110 : 170;
  beatGain.gain.value = accent ? 0.13 : 0.08;

  osc.connect(beatGain);
  beatGain.connect(gain);

  const now = context.currentTime;
  beatGain.gain.setValueAtTime(beatGain.gain.value, now);
  beatGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);
  osc.start(now);
  osc.stop(now + 0.23);
}

export default function BeatToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<AudioState | null>(null);
  const beatStepRef = useRef(0);

  const stopBeat = useCallback(() => {
    const state = audioRef.current;
    if (!state) {
      return;
    }

    window.clearInterval(state.intervalId);
    state.gain.disconnect();
    state.context.close().catch(() => undefined);
    audioRef.current = null;
    beatStepRef.current = 0;

    document.documentElement.classList.remove("beat-active");
    setIsPlaying(false);
  }, []);

  const startBeat = useCallback(async () => {
    if (audioRef.current) {
      return;
    }

    const context = new window.AudioContext();
    await context.resume();

    const gain = context.createGain();
    gain.gain.value = 0.18;
    gain.connect(context.destination);

    document.documentElement.classList.add("beat-active");

    scheduleBeat(context, gain, true);
    const intervalId = window.setInterval(() => {
      beatStepRef.current += 1;
      const accent = beatStepRef.current % 4 === 0;
      scheduleBeat(context, gain, accent);
    }, 580);

    audioRef.current = { context, gain, intervalId };
    setIsPlaying(true);
  }, []);

  const toggle = useCallback(async () => {
    if (isPlaying) {
      stopBeat();
      return;
    }

    try {
      await startBeat();
    } catch {
      stopBeat();
    }
  }, [isPlaying, startBeat, stopBeat]);

  useEffect(() => {
    return () => {
      stopBeat();
    };
  }, [stopBeat]);

  return (
    <motion.button
      type="button"
      onClick={toggle}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.04 }}
      className="beat-reactive fixed left-4 top-24 z-[60] inline-flex items-center gap-2 rounded-full border border-red-500/35 bg-black/70 px-4 py-2 text-sm text-white shadow-lg shadow-red-500/20 backdrop-blur md:left-6 md:top-28"
      aria-label={isPlaying ? "Pause beat background audio" : "Play beat background audio"}
    >
      <Waves className="h-4 w-4 text-red-300" />
      <span className="hidden sm:inline">Beat Mode</span>
      {isPlaying ? <Pause className="h-4 w-4 text-red-300" /> : <Play className="h-4 w-4 text-red-300" />}
    </motion.button>
  );
}
