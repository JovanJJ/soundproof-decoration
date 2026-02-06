import Image from "next/image";
import hero from "../../../public/hero1.png";

   export const metadata = {
  title: "About",
  description: "Learn more about Soundproof Creations and our mission to create effective, well-designed acoustic and soundproofing solutions for everyday spaces.",
};

export default function AboutPage() {

    return (
        <>
            
            <section className="relative h-[50vh] md:h-[60vh] w-full">
                <Image
                    src={hero}
                    alt="Modern living room with acoustic curtains and panels"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute inset-0 flex items-end px-6 pb-10 md:px-12">
                    <h1 className="text-white text-3xl md:text-5xl max-w-3xl">
                        Designed for Comfort. Built for Everyday Living.
                    </h1>
                </div>
            </section>

            
            <section className="px-5 mt-12 text-gray-700">
                <p className="max-w-3xl mx-auto text-xl md:text-2xl text-center">
                    We believe great interiors are about more than looks.
                    They should improve comfort, reduce noise, and create
                    spaces where people truly feel at home.
                </p>
            </section>

            
            <section className="px-5 mt-16 max-w-5xl mx-auto text-gray-700 space-y-14">
                <div>
                    <h2 className="text-2xl md:text-3xl mb-4">
                        Thoughtful Design for Real Homes
                    </h2>
                    <p className="text-lg leading-relaxed">
                        Modern homes face real challenges — urban noise,
                        limited space, and the need for flexibility.
                        Our collections focus on solutions that feel natural,
                        blending sound control with clean, contemporary design.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl md:text-3xl mb-4">
                        Where Function Meets Style
                    </h2>
                    <p className="text-lg leading-relaxed">
                        From soundproof curtains to decorative acoustic panels,
                        every product is selected to balance performance and
                        aesthetics. Soft textures, neutral tones, and durable
                        materials ensure timeless interiors that work in both
                        small and large spaces.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl md:text-3xl mb-4">
                        Inspired by Modern Living
                    </h2>
                    <p className="text-lg leading-relaxed">
                        Our inspiration comes from how people actually live.
                        Calm mornings, focused workdays, and relaxed evenings
                        shape the way we think about interior design.
                        That philosophy extends into the content we share,
                        helping you make confident design decisions.
                    </p>
                </div>
            </section>

            
            <section className="mt-20 px-5 bg-gray-100 py-16">
                <div className="max-w-4xl mx-auto text-center text-gray-700">
                    <h2 className="text-2xl md:text-3xl mb-6">
                        Our Philosophy
                    </h2>

                    <ul className="space-y-4 text-lg">
                        <li>✔ Design should be practical</li>
                        <li>✔ Comfort is essential, not optional</li>
                        <li>✔ Small details make the biggest difference</li>
                    </ul>
                </div>
            </section>

            
            <section className="px-5 mt-20 mb-24 text-gray-700">
                <p className="max-w-4xl mx-auto text-xl md:text-2xl text-center">
                    Your home should work for you.
                    We’re here to help you create spaces that feel quieter,
                    warmer, and more inviting — one thoughtful detail at a time.
                </p>
            </section>
        </>
    );
}
