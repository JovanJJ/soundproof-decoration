import Image from "next/image";
import Link from "next/link";
import first from "../../../public/first.png";
import second from "../../../public/second.png";
import third from "../../../public/third.png";
import fourth from "../../../public/fourth.png";
import fifth from "../../../public/fifth.png";
import sixth from "../../../public/sixth.png";

import curtains from "../../../public/curtains.png";
import panels from "../../../public/panels.png";

export default function Main() {
    return (
        <main className="relative z-10 -mt-[8vh] lg:-mt-[7vh] w-full  bg-gradient-to-b from-[#D3D3D3]/99 via-white to-white rounded-tl-[80px] rounded-tr-[80px] pt-4">
            <div className="w-full">
                <div className="w-fit mx-auto px-5">
                    <h2 className="text-2xl sm:text-4xl md:text-4xl text-gray-900 text-center">
                        R Aesthetics
                    </h2>
                    <p className="mt-3 text-base sm:text-lg md:text-xl text-center">
                        Discover how soundproof panels and acoustic curtains can transform your living or working space without compromising design.
                    </p>
                    <p className="mt-2 text-base sm:text-lg md:text-xl text-center">
                        Our platform guides you in selecting decorative soundproof panels and elegant acoustic curtains that elevate your space while improving comfort and acoustics.
                        Every idea is curated to transform living rooms and workspaces into calm, stylish environments — without compromising on aesthetics.
                    </p>
                </div>
                <div className="w-full  mt-10">
                    <div className="flex flex-col lg:flex-row gap-8 h-full px-10  w-full">
                        <div className="flex-1 aspect-square rounded-xl">
                            <Image src={first} alt="img" className="object-cover rounded-2xl" />
                        </div>
                        <div className="flex-1 aspect-squarerounded-xl lg:translate-y-20">
                            <Image src={second} alt="img" className="object-cover rounded-2xl" />
                        </div>
                        <div className="flex-1 aspect-square rounded-xl">
                            <Image src={third} alt="img" className="object-cover rounded-2xl" />
                        </div>
                    </div>
                </div>
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
                        <div className="flex-1 aspect-square rounded-xl">
                            <Image src={fourth} alt="img" className="object-cover rounded-2xl" />
                        </div>
                        <div className="flex-1 aspect-squarerounded-xl lg:-translate-y-20">
                            <Image src={fifth} alt="img" className="object-cover rounded-2xl" />
                        </div>
                        <div className="flex-1 aspect-square rounded-xl">
                            <Image src={sixth} alt="img" className="object-cover rounded-2xl" />
                        </div>
                    </div>
                </div>
                <div className="w-full pt-20">
                    <h2 className="text-center text-2xl">You can find more examples on <Link href="#" className="underline">blog page</Link></h2>

                    <h2 className="text-center text-3xl mt-20">Check for Solutions</h2>
                    <section className="max-w-6xl mx-auto px-4 py-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                            <Link
                                href="/products/soundproof-panels"
                                className="group relative overflow-hidden rounded-2xl"
                            >
                                <Image
                                    src={panels}
                                    alt="Luxury decorative soundproof panels"
                                    width={800}
                                    height={600}
                                    className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    priority
                                />

                                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition" />

                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <h3 className="text-2xl font-light tracking-wide">
                                        Decorative Soundproof Panels
                                    </h3>
                                    <p className="mt-2 text-sm opacity-90 max-w-sm">
                                        Elegant wall solutions that absorb sound while elevating your interior.
                                    </p>
                                    <span className="inline-block mt-4 text-sm uppercase tracking-widest border-b border-white/60 pb-1">
                                        Explore Collection
                                    </span>
                                </div>
                            </Link>

                            <Link
                                href="/products/acoustic-curtains"
                                className="group relative overflow-hidden rounded-2xl"
                            >
                                <Image
                                    src={curtains}
                                    alt="Luxury acoustic curtains for living room"
                                    width={800}
                                    height={600}
                                    className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/45 transition" />

                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <h3 className="text-2xl font-light tracking-wide">
                                        Acoustic Curtains
                                    </h3>
                                    <p className="mt-2 text-sm opacity-90 max-w-sm">
                                        Soft textures designed to reduce noise without sacrificing style.
                                    </p>
                                    <span className="inline-block mt-4 text-sm uppercase tracking-widest border-b border-white/60 pb-1">
                                        View Designs
                                    </span>
                                </div>
                            </Link>

                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}