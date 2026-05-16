"use client";

import React, { useState } from "react";
import { RevealUp } from "./ui/MotionWrappers";

const faqData = [
    {
        q: "Do decorative soundproof panels actually reduce noise?",
        a: "Decorative soundproof panels help absorb echo and soften unwanted sound reflections, creating a calmer and more comfortable atmosphere indoors."
    },
    {
        q: "Are the panels difficult to install?",
        a: "Most decorative panels are designed for simple and straightforward installation, making them suitable for a variety of interior spaces."
    },
    {
        q: "Will the panels fit modern interiors?",
        a: "Yes. The clean textures and contemporary finishes are designed to complement modern, minimalist, and creative spaces naturally."
    },
    {
        q: "Are the curtains blackout or light-filtering?",
        a: "Depending on the fabric style, the curtains can provide either soft light filtering or enhanced room darkening for additional comfort and privacy."
    },
    {
        q: "Can decorative panels and curtains work together?",
        a: "Absolutely. Combining both helps create a more balanced, comfortable, and visually refined interior environment."
    },
    {
        q: "Are the materials suitable for everyday use?",
        a: "Yes. Both the panels and curtains are designed with durable materials intended for long-term everyday use and comfort."
    },
    {
        q: "Which spaces are best for decorative panels?",
        a: "They work especially well in home offices, living rooms, gaming setups, studios, and other spaces where comfort and atmosphere matter."
    },
    {
        q: "How do I choose the right style for my room?",
        a: "Neutral tones and textured finishes are usually the easiest to integrate into existing interiors while maintaining a clean modern look."
    }
];

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    return (
        <section className="mx-auto my-20 w-full max-w-4xl px-5 sm:px-10">
            <RevealUp>
                <h2 className="text-3xl sm:text-4xl font-medium bg-gradient-to-r from-[#C08552] to-[#C1785A] bg-clip-text text-transparent text-center mb-12">
                    Frequently Asked Questions
                </h2>
            </RevealUp>
            <div className="flex flex-col gap-4">
                {faqData.map((item, index) => (
                    <RevealUp key={index} delay={index * 0.1}>
                        <div 
                            className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all hover:shadow-md cursor-pointer hover:border-[#C08552]/30"
                            onClick={() => toggle(index)}
                        >
                            <div className="flex justify-between items-center p-6">
                                <h3 className={`text-lg sm:text-xl font-medium transition-colors duration-300 ${openIndex === index ? 'text-[#C08552]' : 'text-gray-800'}`}>
                                    {item.q}
                                </h3>
                                <span className="text-emerald-500 text-3xl font-light ml-4 select-none pb-1">
                                    {openIndex === index ? "x" : "+"}
                                </span>
                            </div>
                            <div 
                                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                                    {item.a}
                                </div>
                            </div>
                        </div>
                    </RevealUp>
                ))}
            </div>
        </section>
    );
}
