"use client";

import { motion } from "framer-motion";

export default function HeroTile() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
      }}
      className="w-full bg-zinc-900 rounded-3xl p-10 md:p-12 lg:p-14 mb-6 border border-zinc-800"    >
      <h1 className="text-4xl md:text-5xl font-bold">
        Welcome Back, Chahat 👋
      </h1>

      <p className="mt-4 text-zinc-400">
        🔥 12 Day Learning Streak
      </p>
    </motion.section>
  );
}