"use client";

import { motion } from "framer-motion";

type Course = {
  id: string;
  title: string;
  progress: number;
};

export default function CourseCard({ course }: { course: Course }) {
  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800"
    >
      <h2 className="text-lg font-semibold">
        {course.title}
      </h2>

      <p className="mt-2 text-zinc-400">
        Progress: {course.progress}%
      </p>

      <div className="w-full h-2 bg-zinc-800 rounded-full mt-4">
        <div
          className="h-2 rounded-full bg-white"
          style={{
            width: `${course.progress}%`,
          }}
        />
      </div>
    </motion.article>
  );
}