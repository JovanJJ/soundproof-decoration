"use client";

import Image from "next/image";
import { SlideFromLeft, SlideFromRight } from "./MotionWrappers";

const content = [
    {
        image: "/drums-and-football.png",
        alt: "Decorative acoustic treatment in a lively home",
        copy: "Loud environments can quickly become overwhelming, especially at home. Our soundproof panels and acoustic curtains help reduce noise by absorbing sound and minimizing echoes. You can enjoy a calmer, more comfortable space without sacrificing style.",
    },
    {
        image: "/woman-and-laptop.png",
        alt: "Quiet workspace with acoustic decor",
        copy: "Turn your home office into a calm, distraction-free space with decorative soundproof panels and curtains. They soften external noise, improve room acoustics while enhancing the look of your workspace.",
    },
];

export default function FirstImageContainer() {
    return (
        <div className="mt-10 grid w-full gap-5 overflow-x-clip px-10 lg:grid-cols-2">
            {content.map(({ image, alt, copy }, index) => {
                const Wrapper = index === 0 ? SlideFromLeft : SlideFromRight;

                return (
                    <Wrapper
                        key={image}
                        className="flex w-full flex-col items-center gap-5"
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
                    </Wrapper>
                );
            })}
        </div>
    );
}
