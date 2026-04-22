"use client";

import { motion } from "framer-motion";

export default function LoadingAnimation() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950">
      <div className="text-center">
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, 8, -8, 0],
          }}
          transition={{
            duration: 1.7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mx-auto mb-6 h-20 w-20 rounded-full bg-gradient-to-br from-cyan-500 to-pink-500 p-[2px]"
        >
          <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950 font-display text-4xl text-white">AF</div>
        </motion.div>
        <motion.h2
          animate={{
            opacity: [0.45, 1, 0.45],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="font-display text-5xl text-white"
        >
          FEEL THE BEAT
        </motion.h2>
        <p className="mt-2 text-xs uppercase tracking-[0.28em] text-cyan-200/70">Khanda Colony, Panvel</p>
        <div className="mt-6 flex justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -14, 0],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.16,
              }}
              className="h-2.5 w-2.5 rounded-full bg-cyan-400"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
