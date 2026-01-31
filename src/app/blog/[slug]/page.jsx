import Image from "next/image";
import img from "../../../../public/hero1.png";
import first from "../../../../public/first.png";
import second from "../../../../public/second.png";
import third from "../../../../public/third.png";
import fourth from "../../../../public/fourth.png";
import fifth from "../../../../public/fifth.png";
import sixth from "../../../../public/sixth.png";
import panels from "../../../../public/panels.png";
import Link from "next/link";

export default function BlogPost() {
    return (
        <>
            <section className="relative h-[60vh] md:h-[70vh] w-full">
                <Image
                    src={img}
                    alt="Soundproof curtains in a modern living room"
                    fill
                    className="object-cover"
                    priority
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute inset-0 flex items-end px-6 pb-10">
                    <h1 className="text-white text-3xl md:text-5xl max-w-2xl">
                        How Soundproof Curtains Transform Modern Living Rooms
                    </h1>
                </div>
            </section>
            <section className="w-full px-5 mt-10 text-gray-700">
                <div className="block text-center max-w-4xl mx-auto text-base lg:text-xl md:text-2xl border-b border-gray-300  pb-5">
                    Living in a busy city often means dealing with unwanted noise. From traffic to neighbors, sound can affect comfort and focus. Soundproof curtains offer a practical way to reduce noise while also adding warmth and style to your living space.
                </div>
                <h2 className="text-3xl mt-10 text-center">
                    Best Soundproof Curtain Solutions for 2026
                </h2>
            </section>
            <section className="w-full mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 h-full px-5 w-full">
                    <div className="border border-gray-300 rounded-3xl">
                        <div className="relative flex-1 aspect-square rounded-xl">
                            <Image src='https://res.cloudinary.com/dg8dv2drk/image/upload/v1769620172/cloudinary_i3jand.png' alt="img" fill className="object-cover rounded-2xl" />
                        </div>
                        <span className="block font-bold text-2xl pl-6 mt-5">
                            Layered Comfort
                        </span>
                        <span className="block  text-xl px-6 py-2 pb-6">
                            Soft soundproof curtains reduce noise while keeping the space light and open. A perfect balance for modern living rooms.
                        </span>
                    </div>
                    <div className="border border-gray-300 rounded-3xl  xl:translate-y-20">
                        <div className="relative flex-1 aspect-square rounded-xl">
                            <Image src='https://res.cloudinary.com/dg8dv2drk/image/upload/v1769620172/cloudinary_i3jand.png' alt="img" fill className="object-cover rounded-2xl" />
                        </div>
                        <span className="block font-bold text-2xl pl-6 mt-5">
                            Quiet Without Compromise
                        </span>
                        <span className="block  text-xl px-6 py-2 pb-6">
                            Thick acoustic fabrics paired with neutral tones create a calm atmosphere without overwhelming small interiors.
                        </span>
                    </div>
                    <div className="border border-gray-300 rounded-3xl md:translate-x-1/2 xl:translate-x-0">
                        <div className="relative flex-1 aspect-square rounded-xl">
                            <Image src='https://res.cloudinary.com/dg8dv2drk/image/upload/v1769620172/cloudinary_i3jand.png' alt="img" fill className="object-cover rounded-2xl" />
                        </div>
                        <span className="block font-bold text-2xl pl-6 mt-5">
                            Layered Comfort
                        </span>
                        <span className="block  text-xl px-6 py-2 pb-6">
                            Soundproof curtains add warmth, texture, and acoustic comfort — proving functionality can also be beautiful.
                        </span>
                    </div>
                </div>
            </section>

            <section className="px-5 text-gray-700  text-base md:text-lg">
            <h2 className="mt-10 xl:mt-30 xl:text-start text-xl">
                Tips how to Style Soundproof Curtains Without Compromising Design
            </h2>
            <ul className="space-y-4 mt-5 pl-5 border-b border-gray-300 pb-5 max-w-3xl">
                <li className="flex">
                    <span>•</span>
                    <span className="pl-1">Mount curtains close to the ceiling to create visual height</span>
                </li>
                
                <li className="flex">
                    <span>•</span>
                    <span className="pl-1">Choose textured fabrics for warmth and depth</span>
                </li>
                <li className="flex">
                    <span>•</span>
                    <span className="pl-1">Stick to neutral tones in small rooms</span>
                </li>
                 <li className="flex">
                    <span>•</span>
                    <span className="pl-1">Combine with acoustic panels for maximum effect</span>
                </li>
            </ul>
            </section>

            <section className="px-5 pt-5 text-gray-700 text-base md:text-lg">
            <h2 className="text-xl xl:text-start ">
                Are Soundproof Curtains Right for Small Living Rooms?
            </h2>
            <ul className="space-y-4 mt-5 pl-5">
                <li className="flex">
                    <span>•</span>
                    <span className="pl-1">Mount curtains close to the ceiling to create visual height</span>
                </li>
                
                <li className="flex">
                    <span>•</span>
                    <span className="pl-1">Choose textured fabrics for warmth and depth</span>
                </li>
                <li className="flex">
                    <span>•</span>
                    <span className="pl-1">Stick to neutral tones in small rooms</span>
                </li>
                 <li className="flex">
                    <span>•</span>
                    <span className="pl-1">Combine with acoustic panels for maximum effect</span>
                </li>
            </ul>
            </section>

            <section className="w-full mt-16 text-gray-700">
                <span className="block mx-auto text-center max-w-5xl text-base lg:text-xl">
                    Soundproof curtains show how thoughtful design choices can improve everyday living. By combining acoustic comfort with soft textures and clean lines, even small living rooms can feel quieter, warmer, and more inviting. It’s a simple change that brings lasting comfort without sacrificing style.
                </span>
            </section>
            <section className="max-w-2xl mx-auto px-4 py-5">
                        <div className="grid grid-cols-1">
                            <Link
                                href="/products?category=curtains"
                                className="group relative overflow-hidden rounded-2xl"
                            >
                                <Image
                                    src={panels}
                                    alt="Luxury decorative soundproof curtains"
                                    width={800}
                                    height={600}
                                    className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    priority
                                />

                                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition" />

                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <h3 className="text-2xl font-light tracking-wide">
                                        Decorative Soundproof Curtains
                                    </h3>
                                    <p className="mt-2 text-sm opacity-90 max-w-sm">
                                        Check our solutions for soundproof curtains
                                    </p>
                                    <span className="inline-block mt-4 text-sm uppercase tracking-widest border-b border-white/60 pb-1">
                                        Explore Collection
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </section>
        </>

    );
}

{
    /*
    Hero (image + H1)
Intro text
H2 – Best solutions 2026
Image grid (3 images)
H2 – Styling tips
H2 – Small space advice
Closing paragraph
*/
}