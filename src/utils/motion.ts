import type { Transition, Variants } from "framer-motion";

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const defaultTransition: Transition = {
  duration: 0.3,
  ease: "easeInOut",
};
