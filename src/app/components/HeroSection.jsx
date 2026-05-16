import Image from "next/image";
import first from "../../../public/first.png";
import second from "../../../public/second.png";
import third from "../../../public/third.png";
import FirstImageContainer from "./ui/FirstImagesContainer";
import { RevealUp } from "./ui/MotionWrappers";

export default function HeroSection() {
    return (
        <>
            <div className="w-fit mx-auto px-5">
                <h2 className="text-2xl sm:text-4xl md:text-4xl text-gray-600 text-center">
                    Soundproof Creations
                </h2>
                <p className="mt-3 text-base sm:text-lg md:text-xl text-center">
                    Discover how soundproof panels and acoustic curtains can transform your living or working space without compromising design.
                </p>
                <p className="mt-2 text-base sm:text-lg md:text-xl text-center">
                    Our platform guides you in selecting decorative soundproof panels and elegant acoustic curtains that elevate your space while improving comfort and acoustics.
                    Every idea is curated to transform living rooms and workspaces into calm, stylish environments — without compromising on aesthetics.
                </p>
            </div>
            <FirstImageContainer />
            <div className="w-full mt-10">
                <div className="flex flex-col lg:flex-row gap-8 h-full px-10 w-full">
                    <RevealUp className="flex-1 aspect-square rounded-xl">
                        <Image src={first} alt="img" className="object-cover rounded-2xl" />
                    </RevealUp>
                    <RevealUp className="flex-1 aspect-square rounded-xl" delay={0.15}>
                        <div className="lg:translate-y-20">
                            <Image src={second} alt="img" className="object-cover rounded-2xl" />
                        </div>
                    </RevealUp>
                    <RevealUp className="flex-1 aspect-square rounded-xl" delay={0.3}>
                        <Image src={third} alt="img" className="object-cover rounded-2xl" />
                    </RevealUp>
                </div>
            </div>
        </>
    );
}
