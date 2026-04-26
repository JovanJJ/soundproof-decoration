"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const content = [
    {
        image: "/drums-and-football.png",
        alt: "Decorative acoustic treatment in a lively home",
        copy: "Loud environments can quickly become overwhelming, especially at home. Our soundproof panels and acoustic curtains help reduce noise by absorbing sound and minimizing echoes. You can enjoy a calmer, more comfortable space without sacrificing style.",
        direction: -1,
    },
    {
        image: "/woman-and-laptop.png",
        alt: "Quiet workspace with acoustic decor",
        copy: "Turn your home office into a calm, distraction-free space with decorative soundproof panels and curtains. They soften external noise, improve room acoustics while enhancing the look of your workspace.",
        direction: 1,
    },
];

function getRevealStyle(progress, direction) {
    const distance = 140;
    const translateX = (1 - progress) * distance * direction;
    const opacity = 0.2 + progress * 0.8;

    return {
        transform: `translate3d(${translateX}px, 0, 0)`,
        opacity,
        willChange: "transform, opacity",
    };
}

export default function FirstImageContainer() {
    const sectionRef = useRef(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) {
            return undefined;
        }

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

        let frameId = 0;

        const updateProgress = () => {
            frameId = 0;

            if (reduceMotion.matches) {
                setProgress(1);
                return;
            }

            const rect = section.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const startPoint = viewportHeight * 0.9;
            const endPoint = viewportHeight * 0.5;
            const nextProgress = Math.min(
                1,
                Math.max(0, (startPoint - rect.top) / (startPoint - endPoint))
            );

            setProgress((current) =>
                Math.abs(current - nextProgress) < 0.01 ? current : nextProgress
            );
        };

        const requestUpdate = () => {
            if (frameId) {
                return;
            }

            frameId = window.requestAnimationFrame(updateProgress);
        };

        requestUpdate();

        window.addEventListener("scroll", requestUpdate, { passive: true });
        window.addEventListener("resize", requestUpdate);

        return () => {
            if (frameId) {
                window.cancelAnimationFrame(frameId);
            }

            window.removeEventListener("scroll", requestUpdate);
            window.removeEventListener("resize", requestUpdate);
        };
    }, []);

    return (
        <div
            ref={sectionRef}
            className="mt-10 grid w-full gap-5 overflow-x-clip px-10 lg:grid-cols-2"
        >
            {content.map(({ image, alt, copy, direction }) => (
                <div
                    key={image}
                    className="flex w-full flex-col items-center gap-5"
                    style={getRevealStyle(progress, direction)}
                >
                    <div className="relative aspect-video w-full max-w-3xl">
                        <Image
                            src={image}
                            alt={alt}
                            fill
                            sizes="(min-width: 1024px) 44vw, 100vw"
                            className="rounded-2xl object-cover"
                        />
                    </div>
                    <div className="flex max-w-3xl items-center">
                        <p>{copy}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
