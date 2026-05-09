"use client";
import { motion } from "framer-motion";

interface RevealTextProps {
  text: string;
  className?: string;
  staggerDelay?: number;
  duration?: number;
  delay?: number;
  amount?: number;
}

export default function RevealText({
  text,
  className = "",
  staggerDelay = 0.08,
  duration = 0.7,
  delay = 0,
  amount = 0.3,
}: RevealTextProps) {
  const words = text.split(" ");

  return (
    <motion.span
      className={`inline-block ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block mr-[0.25em]"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
