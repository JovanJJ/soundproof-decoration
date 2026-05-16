import Image from "next/image";
import Link from "next/link";
import { RevealUp } from "./ui/MotionWrappers";

export default function ExploreSection() {
    return (
        <section className="max-w-5xl mx-auto px-4 py-10">
            <div className="w-fit mx-auto mt-10">
                <h2 className="text-xl text-center lg:text-2xl text-gray-700">
                    Explore our products and read the latest guides for a quieter, more comfortable space.
                </h2>
            </div>
            <RevealUp className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <Link
                    href="/products"
                    className="group relative overflow-hidden rounded-2xl h-full"
                >
                    <Image
                        src="/fifth.png"
                        alt="Luxury decorative soundproof panels"
                        width={800}
                        height={600}
                        className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                    />

                    <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition" />

                    <div className="absolute bottom-8 left-8 right-8 text-white">
                        <h3 className="text-xl lg:text-2xl font-light tracking-wide">
                            Decorative Soundproof Panels & Curtains
                        </h3>
                        <p className="mt-2 text-sm opacity-90 max-w-sm">
                            Elegant solutions that absorb sound while elevating your interior.
                        </p>
                        <span className="inline-block mt-4 text-sm uppercase tracking-widest border-b border-white/60 pb-1">
                            Explore Collection
                        </span>
                    </div>
                </Link>

                <Link
                    href="/blog"
                    className="group relative overflow-hidden rounded-2xl h-full"
                >
                    <Image
                        src="/sixth.png"
                        alt="Soundproof decoration blog and guides"
                        width={800}
                        height={600}
                        className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                    />

                    <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition" />

                    <div className="absolute bottom-8 left-8 right-8 text-white">
                        <h3 className="text-xl lg:text-2xl font-light tracking-wide">
                            Read Our Blog
                        </h3>
                        <p className="mt-2 text-sm opacity-90 max-w-sm">
                            Discover tips, guides, and inspiration for a quieter space.
                        </p>
                        <span className="inline-block mt-4 text-sm uppercase tracking-widest border-b border-white/60 pb-1">
                            Explore Topics
                        </span>
                    </div>
                </Link>
            </RevealUp>
        </section>
    );
}
