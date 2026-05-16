"use client";

import { motion, useReducedMotion } from "motion/react";

const revealTransition = {
    duration: 0.75,
    ease: [0.22, 1, 0.36, 1],
};

function MotionReveal({
    children,
    className = "",
    delay = 0,
    fromX = 0,
    fromY = 0,
    amount = 0.25,
}) {
    const shouldReduceMotion = useReducedMotion();
    const hidden = shouldReduceMotion
        ? { opacity: 1, x: 0, y: 0 }
        : { opacity: 0, x: fromX, y: fromY };

    return (
        <motion.div
            className={className}
            initial={hidden}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount }}
            transition={{ ...revealTransition, delay }}
        >
            {children}
        </motion.div>
    );
}

export function SlideFromLeft(props) {
    return <MotionReveal {...props} fromX={-140} />;
}

export function SlideFromRight(props) {
    return <MotionReveal {...props} fromX={140} />;
}

export function RevealUp(props) {
    return <MotionReveal {...props} fromY={70} />;
}
