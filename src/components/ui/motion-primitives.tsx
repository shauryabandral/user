
"use client"

import { motion, HTMLMotionProps } from "framer-motion"
import { fadeUp, staggerContainer, confidencePulse, TRANSITION } from "@/lib/motion"
import { cn } from "@/lib/utils"
import React from "react"

// --- Page Transition Wrapper ---
export const MotionPage = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={fadeUp}
            className={cn("w-full h-full", className)}
        >
            {children}
        </motion.div>
    )
}

// --- Staggered List Wrapper ---
interface MotionListProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode
}
export const MotionList = ({ children, className, ...props }: MotionListProps) => {
    return (
        <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    )
}

// --- List Item Wrapper ---
export const MotionItem = ({ children, className, ...props }: HTMLMotionProps<"div">) => {
    const itemVariants = {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0, transition: TRANSITION.default }
    }
    return (
        <motion.div variants={itemVariants} className={className} {...props}>
            {children}
        </motion.div>
    )
}

// --- Card Wrapper (for hover effects) ---
export const MotionCardWrapper = ({ children, className, onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) => {
    return (
        <motion.div
            whileHover={{ y: -4, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)" }}
            transition={TRANSITION.default}
            className={className}
            onClick={onClick}
        >
            {children}
        </motion.div>
    )
}

// --- Button with Micro-interaction ---
export const MotionButtonWrapper = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <motion.div
            variants={confidencePulse}
            whileHover="hover"
            whileTap="tap"
            className={className}
        >
            {children}
        </motion.div>
    )
}

// --- Animated Counter ---
export const AnimatedCounter = ({ value, className }: { value: number, className?: string }) => {
    // A simple implementation, for advanced use we'd use useSpring/useTransform
    // Here we just fade it in for v1, preventing hydration mismatch usually requires useEffect
    return (
        <motion.span
            key={value}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className={className}
        >
            {value}
        </motion.span>
    )
}

// --- Progress Bar ---
export const AnimatedProgressBar = ({ value, className }: { value: number, className?: string }) => {
    return (
        <div className={cn("h-full bg-green-500 rounded-full", className)} style={{ width: 0 }}>
            <motion.div
                className="h-full w-full bg-inherit rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: `${value}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
            />
        </div>
    )
}

export { AnimatePresence } from "framer-motion"
