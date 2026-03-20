import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { ReactNode } from "react";

export default function FadeIn({ children, delay = 0, className = "", direction = "up" }: {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });
  const variants = {
    up: { opacity: 0, y: 36 },
    left: { opacity: 0, x: -36 },
    right: { opacity: 0, x: 36 },
    none: { opacity: 0 },
  };
  return (
    <motion.div
      ref={ref}
      initial={variants[direction]}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
