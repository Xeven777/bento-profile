"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState, useMemo } from "react";
import { useWindowSize } from "@/hooks/useWindowSize";

export function ContributionGraph() {
  // 1. All useState hooks
  const [contributions, setContributions] = useState<number[]>([]);
  const [totalContributions, setTotalContributions] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 2. useWindowSize hook
  const { width } = useWindowSize();

  // 3. useMemo for calculations
  const { visibleContributions, periodTotal } = useMemo(() => {
    let slicedContributions;
    if (width < 640) {
      slicedContributions = contributions.slice(-91);
    } else if (width < 768) {
      slicedContributions = contributions.slice(-182);
    } else {
      slicedContributions = contributions;
    }

    const total = slicedContributions.reduce((sum, count) => sum + count, 0);

    return {
      visibleContributions: slicedContributions,
      periodTotal: total,
    };
  }, [contributions, width]);

  // 4. useEffect for data fetching
  useEffect(() => {
    async function fetchContributions() {
      try {
        const response = await fetch("/api/github", {
          cache: "force-cache",
          next: { revalidate: 36000 },
        });
        const data = await response.json();

        const contributionCalendar =
          data.data.user.contributionsCollection.contributionCalendar;
        const contributionDays = contributionCalendar.weeks.flatMap(
          (week: any) =>
            week.contributionDays.map((day: any) => day.contributionCount)
        );

        setContributions(contributionDays);
        setTotalContributions(contributionCalendar.totalContributions);
      } catch (err) {
        setError("Failed to load contributions");
      } finally {
        setLoading(false);
      }
    }

    fetchContributions();
  }, []);
  if (loading)
    return (
      <div className="relative w-full rounded-xl h-52 bg-muted animate-pulse">
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-light text-center tracking-widest text-muted-foreground">
          Loading...
        </h2>
      </div>
    );
  if (error)
    return (
      <div className="relative w-full rounded-xl h-52 bg-rose-800/10">
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-light text-center tracking-widest text-rose-500">
          Ooops. Error!
        </h2>
      </div>
    );

  const getContributionLevel = (count: number) => {
    if (count === 0) return 0;
    if (count <= 5) return 1;
    if (count <= 9) return 2;
    return 3;
  };

  return (
    <div className="overflow-hidden">
      <div className="flex flex-wrap gap-1">
        {visibleContributions.map((count, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: i * 0.003,
              duration: 0.2,
            }}
            className={cn(
              "size-3 rounded-[3px]",
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
      <p className="text-sm text-muted-foreground mt-4 text-center">
        {periodTotal.toLocaleString()} contributions in the last{" "}
        {width < 640 ? "3 months" : width < 768 ? "6 months" : "year"}
      </p>
    </div>
  );
}
