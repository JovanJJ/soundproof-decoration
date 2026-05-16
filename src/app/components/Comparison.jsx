import React from "react";
import { RevealUp } from "./ui/MotionWrappers";
import Image from "next/image";

const comparisonData = [
    {
        mainTitle: "Decorative Soundproof Panels vs Classic Panels",
        classic: {
            title: "Classic Panels",
            items: [
                "Basic appearance with purely functional design.",
                "Plain surfaces with limited design flexibility.",
                "Noise reduction without visual enhancement."
            ]
        },
        modern: {
            title: "Decorative Panels",
            items: [
                {
                    bold: "Better Sound. Better Atmosphere.",
                    text: "Stylish, modern, visually integrated into the room."
                },
                {
                    bold: "Built for Modern Spaces.",
                    text: "Premium finishes and contemporary textures."
                },
                {
                    bold: "Comfort Beyond Noise Reduction.",
                    text: "Acoustic control with aesthetic value."
                }
            ]
        }
    },
    {
        mainTitle: "Premium Curtains vs Standard Curtains",
        classic: {
            title: "Standard Curtains",
            items: [
                "Basic functionality with minimal visual impact.",
                "Limited control over lighting and visibility.",
                "Faster wear and less refined material quality."
            ]
        },
        modern: {
            title: "Premium Curtains",
            items: [
                {
                    bold: "Designed to Elevate the Room.",
                    text: "Elegant appearance with refined texture and flow."
                },
                {
                    bold: "Better Light and Privacy Control.",
                    text: "Balanced light control and improved comfort."
                },
                {
                    bold: "Made for Everyday Living.",
                    text: "Durable fabric with long-lasting appearance."
                }
            ]
        }
    }
];



export default function Comparison() {
    return (
        <section className="mx-auto mb-16 w-full max-w-7xl px-5 sm:px-10">
            {comparisonData.map((section, idx) => (
                <div key={idx} className={idx > 0 ? "mt-20" : ""}>
                    <RevealUp>
                        <h2 className="text-2xl lg:text-3xl font-medium bg-gradient-to-r from-[#C08552] to-[#C1785A] bg-clip-text text-transparent text-center mb-10">
                            {section.mainTitle}
                        </h2>
                    </RevealUp>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                        <RevealUp delay={0.1} className="h-full">
                            <div className="flex flex-col h-full bg-gray-50 border border-gray-200 rounded-2xl p-8 transition-shadow hover:shadow-md">
                                <h3 className="text-xl font-medium text-gray-600 mb-8 pb-4 border-b border-gray-200 text-center">
                                    {section.classic.title}
                                </h3>
                                <div className="flex flex-col gap-6 flex-grow">
                                    {section.classic.items.map((item, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            <div className="flex-shrink-0 mt-0.5 p-1 bg-red-100/50 rounded-full">
                                                <Image src="/red-x.svg" alt="x" width={20} height={20}></Image>
                                            </div>
                                            <p className="text-gray-600 leading-relaxed">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </RevealUp>


                        <RevealUp delay={0.2} className="h-full">
                            <div className="flex flex-col h-full bg-white border border-[#C08552]/30 shadow-sm rounded-2xl p-8 relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#C08552]/60">
                                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#C08552] to-[#C1785A]" />
                                <h3 className="text-xl font-medium text-gray-800 mb-8 pb-4 border-b border-gray-100 text-center">
                                    {section.modern.title}
                                </h3>
                                <div className="flex flex-col gap-6 flex-grow">
                                    {section.modern.items.map((item, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            <div className="flex-shrink-0 mt-0.5 p-1 bg-emerald-100/50 rounded-full">
                                                <Image src="/done.svg" alt="x" width={20} height={20}></Image>
                                            </div>
                                            <p className="text-gray-700 leading-relaxed">
                                                <span className="font-semibold text-gray-900 block mb-1">{item.bold}</span>
                                                {item.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </RevealUp>
                    </div>
                </div>
            ))}
        </section>
    );
}
