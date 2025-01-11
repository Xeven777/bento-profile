"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function ContributionGraph() {
  const contributions = Array.from({ length: 52 * 7 }, () =>
    Math.floor(Math.random() * 4)
  )

  return (
    <div className="overflow-hidden">
      <div className="flex flex-wrap gap-1">
        {contributions.map((level, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: i * 0.001,
              duration: 0.2,
            }}
            className={cn(
              "h-3 w-3 rounded-sm",
              level === 0 && "bg-zinc-100",
              level === 1 && "bg-green-200",
              level === 2 && "bg-green-300",
              level === 3 && "bg-green-400"
            )}
          />
        ))}
      </div>
    </div>
  )
}

