"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function ContributionGraph() {
  const [contributions, setContributions] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchContributions() {
      try {
        const response = await fetch("/api/github", {
          cache: "force-cache",
          next: {
            revalidate: 36000,
          },
        });
        const data = await response.json();

        const contributionDays =
          data.data.user.contributionsCollection.contributionCalendar.weeks.flatMap(
            (week: any) =>
              week.contributionDays.map((day: any) => day.contributionCount)
          );

        setContributions(contributionDays);
      } catch (err) {
        setError("Failed to load contributions");
      } finally {
        setLoading(false);
      }
    }

    fetchContributions();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const getContributionLevel = (count: number) => {
    if (count === 0) return 0;
    if (count <= 3) return 1;
    if (count <= 6) return 2;
    return 3;
  };

  return (
    <div className="overflow-hidden">
      <div className="flex flex-wrap gap-1">
        {contributions.map((count, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: i * 0.003,
              duration: 0.2,
            }}
            className={cn(
              "size-3 rounded-sm",
              getContributionLevel(count) === 0 &&
                "bg-zinc-100 dark:bg-zinc-800",
              getContributionLevel(count) === 1 &&
                "bg-green-200 dark:bg-green-900/60",
              getContributionLevel(count) === 2 &&
                "bg-green-300 dark:bg-green-700/80",
              getContributionLevel(count) === 3 &&
                "bg-green-400 dark:bg-green-500/90"
            )}
          />
        ))}
      </div>
    </div>
  );
}
