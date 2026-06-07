"use client";

import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { motion } from "framer-motion";
const pieData = [
  { name: "Study", value: 60 },
  { name: "Practice", value: 25 },
  { name: "Break", value: 15 },
];

const lineData = [
  { day: "Mon", progress: 20 },
  { day: "Tue", progress: 40 },
  { day: "Wed", progress: 35 },
  { day: "Thu", progress: 60 },
  { day: "Fri", progress: 80 },
  { day: "Sat", progress: 70 },
  { day: "Sun", progress: 90 },
];

const COLORS = ["#60A5FA", "#34D399", "#FBBF24"];
export default function ActivityTile() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-zinc-900 rounded-3xl p-5 border border-zinc-800 "
    >
      <h2 className="text-xl font-semibold mb-4">
        Activity
      </h2>

      {/* PIE CHART */}
      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={pieData} dataKey="value" outerRadius={60}>
              {pieData.map((_, i) => (
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* LINE CHART */}
      <div className="h-40 mt-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={lineData}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="progress"
              stroke="#A78BFA"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

  
      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: 35 }).map((_, i) => (
          <div
            key={i}
            className="h-4 w-4 rounded bg-zinc-700"
          />
        ))}
      </div>
    </motion.article>
  );
}