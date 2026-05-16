import Image from "next/image";
import fourth from "../../../public/fourth.png";
import fifth from "../../../public/fifth.png";
import sixth from "../../../public/sixth.png";
import { RevealUp } from "./ui/MotionWrappers";

export default function MissionSection() {
    return (
        <>
            <div className="w-fit mx-auto lg:mt-30 px-10 py-5">
                <p className=" text-base sm:text-lg md:text-xl text-center">
                    Choosing soundproof solutions shouldn’t feel technical or intrusive.
                </p>
                <p className=" text-base sm:text-lg md:text-xl text-center">
                    We simplify the process by showcasing carefully selected panels and curtains that combine acoustic performance with luxury finishes, textures, and colors.
                </p>
                <p className=" text-base sm:text-lg md:text-xl text-center">
                    Whether you’re refining a home office or redesigning a living area, we help you make confident choices that enhance both sound and style.
                </p>
            </div>
            <div className="w-full">
                <div className="flex flex-col lg:flex-row gap-8 h-full px-10 w-full lg:mt-30">
                    <RevealUp className="flex-1 aspect-square rounded-xl" delay={0.3}>
                        <Image src={fourth} alt="img" className="object-cover rounded-2xl" />
                    </RevealUp>
                    <RevealUp className="flex-1 aspect-square rounded-xl" delay={0.15}>
                        <div className="lg:-translate-y-20">
                            <Image src={fifth} alt="img" className="object-cover rounded-2xl" />
                        </div>
                    </RevealUp>
                    <RevealUp className="flex-1 aspect-square rounded-xl">
                        <Image src={sixth} alt="img" className="object-cover rounded-2xl" />
                    </RevealUp>
                </div>
            </div>
        </>
    );
}
