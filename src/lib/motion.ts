
import { Variants, Transition } from "framer-motion"

// --- Principles ---
// 1. Communicate state, don't decorate
// 2. Micro-interactions > Flashy effects
// 3. Calm, professional, reassuring

// --- Tokens ---

export const EASING = {
    default: [0.22, 1, 0.36, 1], // ease-out-cubic equivalent
    gentle: [0.4, 0, 0.2, 1],
    bouncy: [0.34, 1.56, 0.64, 1], // Use sparingly, only for "pop"
} as const

export const DURATION = {
    fast: 0.2,
    default: 0.4,
    slow: 0.6,
    story: 1.2, // For complex storytelling/onboarding
}

export const TRANSITION = {
    default: { duration: DURATION.default, ease: EASING.default } as Transition,
    fast: { duration: DURATION.fast, ease: EASING.default } as Transition,
    spring: { type: "spring", stiffness: 300, damping: 30 } as Transition,
}

// --- Variants ---

export const fadeUp: Variants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: TRANSITION.default },
    exit: { opacity: 0, y: 10, transition: TRANSITION.fast },
}

export const fadeIn: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: TRANSITION.default },
    exit: { opacity: 0, transition: TRANSITION.fast },
}

export const scaleIn: Variants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1, transition: TRANSITION.default },
    exit: { opacity: 0, scale: 0.95, transition: TRANSITION.fast },
}

export const staggerContainer: Variants = {
    animate: {
        transition: {
            staggerChildren: 0.05,
        },
    },
}

export const listChild: Variants = {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0, transition: TRANSITION.default },
}

// Special: "Confidence Pulse" for Apply buttons
export const confidencePulse: Variants = {
    hover: { scale: 1.02, transition: TRANSITION.fast },
    tap: { scale: 0.98, transition: TRANSITION.fast },
}
