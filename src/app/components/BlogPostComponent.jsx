import Image from "next/image";
import Link from "next/link";




export default function BlogPostComponent({data}) {
    return(
        <>
            <section className="relative h-[60vh] md:h-[70vh] w-full">
                <Image
                    src="https://res.cloudinary.com/dg8dv2drk/image/upload/v1769973183/card-1_mfpojn.jpg"
                    alt="Soundproof curtains in a modern living room"
                    fill
                    className="object-cover"
                    priority
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute inset-0 flex items-end px-6 pb-10">
                    <h1 className="text-white text-3xl md:text-5xl max-w-2xl">
                        {data[0].title}
                    </h1>
                </div>
            </section>
            <section className="w-full px-5 mt-10 text-gray-700">
                <div className="block text-center max-w-4xl mx-auto text-base lg:text-xl md:text-2xl border-b border-gray-300  pb-5">
                   {data[0].intro}
                </div>
                <h2 className="text-3xl mt-10 text-center">
                    Best Soundproof Curtain Solutions for 2026
                </h2>
            </section>
            <section className="w-full mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 h-full px-5 w-full">
                    <div className="border border-gray-300 rounded-3xl">
                        <div className="relative flex-1 aspect-square rounded-xl">
                            <Image src={data[0].images[0]} alt="img" fill className="object-cover rounded-2xl" />
                        </div>
                        <span className="block font-bold text-2xl pl-6 mt-5">
                            Layered Comfort
                        </span>
                        <span className="block  text-xl px-6 py-2 pb-6">
                            {data[0].imagesText[0]}
                        </span>
                    </div>
                    <div className="border border-gray-300 rounded-3xl  xl:translate-y-20">
                        <div className="relative flex-1 aspect-square rounded-xl">
                            <Image src={data[0].images[1]} alt="img" fill className="object-cover rounded-2xl" />
                        </div>
                        <span className="block font-bold text-2xl pl-6 mt-5">
                            Quiet Without Compromise
                        </span>
                        <span className="block  text-xl px-6 py-2 pb-6">
                            {data[0].imagesText[1]}
                        </span>
                    </div>
                    <div className="border border-gray-300 rounded-3xl md:translate-x-1/2 xl:translate-x-0">
                        <div className="relative flex-1 aspect-square rounded-xl">
                            <Image src={data[0].images[2]} alt="img" fill className="object-cover rounded-2xl" />
                        </div>
                        <span className="block font-bold text-2xl pl-6 mt-5">
                            Layered Comfort
                        </span>
                        <span className="block  text-xl px-6 py-2 pb-6">
                            {data[0].imagesText[2]}
                        </span>
                    </div>
                </div>
            </section>

            <section className="px-5 text-gray-700  text-base md:text-lg">
            <h2 className="mt-10 xl:mt-30 xl:text-start text-xl">
                {data[0].tips1}
            </h2>
            <ul className="space-y-4 mt-5 pl-5 border-b border-gray-300 pb-5 max-w-3xl">
                {data[0].tips1Answer.map((answer) => {
                    return(
                        <li key={answer} className="flex">
                    <span>•</span>
                    <span className="pl-1">{answer}</span>
                </li>
                    );
                })
                }
            </ul>
            </section>

            <section className="px-5 pt-5 text-gray-700 text-base md:text-lg">
            <h2 className="text-xl xl:text-start ">
                {data[0].tips2}
            </h2>
            <ul className="space-y-4 mt-5 pl-5">
               {data[0].tips2Answer.map((answer) => {
                    return(
                        <li key={answer} className="flex">
                    <span>•</span>
                    <span className="pl-1">{answer}</span>
                </li>
                    );
                })
                }
            </ul>
            </section>

            <section className="w-full mt-16 text-gray-700">
                <span className="block mx-auto text-center max-w-5xl text-base lg:text-xl">
                   {data[0].closingParagraph}
                </span>
            </section>
            <section className="max-w-2xl mx-auto px-4 py-5">
                        <div className="grid grid-cols-1">
                            <Link
                                href="/products?category=curtains"
                                className="group relative overflow-hidden rounded-2xl"
                            >
                                <Image
                                    src="https://res.cloudinary.com/dg8dv2drk/image/upload/v1769964436/curtains-square-3_qzmvhk.png"
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