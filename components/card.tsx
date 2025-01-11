"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  href?: string;
}

export function Card({ href, className, children, ...props }: CardProps) {
  const content = (
    // @ts-ignore
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            ease: "easeOut",
          },
        },
      }}
      className={cn(
        "overflow-hidden rounded-2xl border bg-card shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="block"
        rel="noopener noreferrer"
        target="_blank"
      >
        {content}
      </a>
    );
  }

  return content;
}
