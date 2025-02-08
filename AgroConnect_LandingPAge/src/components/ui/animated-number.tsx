import React, { useEffect, useRef } from "react";
import { motion, useSpring, useTransform, useInView } from "framer-motion";

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  className?: string;
}

export function AnimatedNumber({ value, duration = 2000, className }: AnimatedNumberProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const spring = useSpring(0, { mass: 1, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => Math.round(current).toLocaleString());

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [value, spring, isInView]);

  return <motion.span ref={ref} className={className}>{display}</motion.span>;
}
