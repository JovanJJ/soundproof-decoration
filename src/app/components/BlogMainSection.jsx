import Image from "next/image";
import img from "../../../public/fifth.png";
import Link from "next/link";

export default function BlogMainSection() {
    return (
        <section className="w-full abosolute p-5 md:px-18 md:pt-0 mt-20">
            <h1 className="text-2xl md:text-3xl lg:text-4xl">Blog posts</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3  gap-5 mt-5">
                <div className="max-w-xl">
                    <div className="grid grid-cols-1">
                        <Link
                            href="/products?category=all"
                            className="group relative overflow-hidden rounded-2xl"
                        >
                            <Image
                                src={img}
                                alt="Luxury decorative soundproof panels"
                                width={576}
                                height={600}
                                className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />

                            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/60 transition" />

                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <h3 className="text-2xl font-light tracking-wide">
                                    How Layered Sheer Curtains Transform Small Living Rooms
                                </h3>
                                <p className="mt-2 text-sm opacity-90 max-w-sm">
                                    Small living rooms often feel limited by space, light, and layout — but the right window treatment can completely change that....
                                </p>
                                <span className="inline-block mt-4 text-sm uppercase tracking-widest border-b border-white/60 pb-1">
                                    See Post
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="max-w-xl">
                    <div className="grid grid-cols-1">
                        <Link
                            href="/products?category=all"
                            className="group relative overflow-hidden rounded-2xl"
                        >
                            <Image
                                src={img}
                                alt="Luxury decorative soundproof panels"
                                width={576}
                                height={600}
                                className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />

                            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/60 transition" />

                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <h3 className="text-2xl font-light tracking-wide">
                                    Decorative Soundproof Panels & Curtains
                                </h3>
                                <p className="mt-2 text-sm opacity-90 max-w-sm">
                                    Elegant solutions that absorb sound while elevating your interior.
                                </p>
                                <span className="inline-block mt-4 text-sm uppercase tracking-widest border-b border-white/60 pb-1">
                                    See Post
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="max-w-xl">
                    <div className="grid grid-cols-1">
                        <Link
                            href="/products?category=all"
                            className="group relative overflow-hidden rounded-2xl"
                        >
                            <Image
                                src={img}
                                alt="Luxury decorative soundproof panels"
                                width={576}
                                height={600}
                                className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />

                            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/60 transition" />

                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <h3 className="text-2xl font-light tracking-wide">
                                    Decorative Soundproof Panels & Curtains
                                </h3>
                                <p className="mt-2 text-sm opacity-90 max-w-sm">
                                    Elegant solutions that absorb sound while elevating your interior.
                                </p>
                                <span className="inline-block mt-4 text-sm uppercase tracking-widest border-b border-white/60 pb-1">
                                    See Post
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="max-w-xl">
                    <div className="grid grid-cols-1">
                        <Link
                            href="/products?category=all"
                            className="group relative overflow-hidden rounded-2xl"
                        >
                            <Image
                                src={img}
                                alt="Luxury decorative soundproof panels"
                                width={576}
                                height={600}
                                className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />

                            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/60 transition" />

                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <h3 className="text-2xl font-light tracking-wide">
                                    Decorative Soundproof Panels & Curtains
                                </h3>
                                <p className="mt-2 text-sm opacity-90 max-w-sm">
                                    Elegant solutions that absorb sound while elevating your interior.
                                </p>
                                <span className="inline-block mt-4 text-sm uppercase tracking-widest border-b border-white/60 pb-1">
                                    See Post
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}