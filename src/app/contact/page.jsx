import Image from "next/image";
import hero from "../../../public/hero1.png";

export const metadata = {
  title: "Contact",
  description: "Contact Soundproof Creations to get advice on soundproofing solutions, product questions, or help choosing the right acoustic treatment.",
};

export default function ContactPage() {
    return (
        <>
            
            <section className="relative h-[40vh] md:h-[60vh] w-full">
                <Image
                    src={hero}
                    alt="Modern interior with curtains and acoustic panels"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute inset-0 flex items-end px-6 pb-10 md:px-12">
                    <h1 className="text-white text-3xl md:text-5xl max-w-2xl">
                        Let’s Talk About Your Space
                    </h1>
                </div>
            </section>

            
            <section className="px-5 mt-12 text-gray-700">
                <p className="max-w-3xl mx-auto text-xl md:text-2xl text-center">
                    Have a question about our products or need help choosing
                    the right solution for your home?  
                    We’re here to help.
                </p>
            </section>

            
            <section className="px-5 mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 text-gray-700">
                
                <div>
                    <h2 className="text-2xl md:text-3xl mb-6">
                        Contact Information
                    </h2>

                    <ul className="space-y-4 text-lg">
                        <li>
                            <span className="font-medium">Email:</span>{" "}
                            jovanjj99@gmail.com
                        </li>
                        <li>
                            <span className="font-medium">Phone:</span>{" "}
                            +381 61 631 56 03
                        </li>
                    </ul>

                    <p className="mt-6 text-lg">
                        We aim to respond to all inquiries within 24 hours
                        on business days.
                    </p>
                </div>

                
                <div>
                    <h2 className="text-2xl md:text-3xl mb-6">
                        Send Us a Message
                    </h2>

                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your name"
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />

                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />

                        <textarea
                            rows={5}
                            placeholder="Your message"
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        />

                        <button
                            type="submit"
                            className="inline-block bg-[#654321] text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

            
            <section className="px-5 mt-24 mb-24 text-gray-700">
                <p className="max-w-4xl mx-auto text-xl md:text-2xl text-center">
                    Whether you’re designing a quiet living room or upgrading
                    a modern workspace, we’d love to hear from you.
                </p>
            </section>
        </>
    );
}
