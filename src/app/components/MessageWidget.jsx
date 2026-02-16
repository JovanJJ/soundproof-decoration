"use client";
import { useState } from "react";
import Link from "next/link";

export default function MessageWidget() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-4 right-4 lg:bottom-10 lg:right-10 z-50 flex flex-col items-end">
            {/* Message Container */}
            <div
                className={`shadow-2xl rounded-2xl overflow-hidden transition-all duration-500 ease-in-out transform origin-bottom-right ${isOpen
                    ? "w-[calc(100vw-32px)] h-[calc(100vh-100px)] lg:w-80 lg:h-[568px] opacity-100 scale-100 mb-4 lg:mb-6"
                    : "w-0 h-0 opacity-0 scale-0 mb-0"
                    }`}
            >
                <div className="w-full h-full flex flex-col items-center justify-center p-6 lg:p-8 text-center bg-gradient-to-br from-[#EFEBE9] to-[#D7CCC8] border border-[#A1887F]/30 relative">

                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 text-[#5D4037]/60 hover:text-[#5D4037] transition-colors p-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 lg:size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="mb-4 lg:mb-6 p-3 bg-white/50 rounded-full shadow-inner">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 lg:size-10 text-[#654321]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg>
                    </div>

                    <h3 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-3 text-[#3E2723] font-serif">New Creations</h3>
                    <p className="text-[#4E342E] mb-6 lg:mb-8 leading-relaxed text-sm lg:text-base">We have newly designed soundproof solutions that bring elegance to silence.</p>

                    <Link
                        href="/products"
                        className="bg-[#654321] text-white font-semibold py-2 lg:py-3 px-6 lg:px-8 rounded-full shadow-lg hover:shadow-xl hover:bg-[#4E342E] transition-all duration-300 uppercase tracking-wide text-xs lg:text-sm"
                    >
                        Discover More
                    </Link>
                </div>
            </div>

            {/* Toggle Button */}
            <div className="relative">
                {!isOpen && (
                    <div className="absolute -top-1 -right-1 z-10 flex h-4 w-4 lg:h-5 lg:w-5 items-center justify-center rounded-full bg-red-600 text-[10px] lg:text-xs font-bold text-white shadow-sm ring-2 ring-white animate-bounce-short">
                        1
                    </div>
                )}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`p-3 lg:p-4 rounded-full shadow-xl transition-all duration-300 border-2 border-white/20 ${isOpen
                        ? "bg-[#D7CCC8] text-[#3E2723] rotate-90 scale-90"
                        : "bg-[#654321] text-white hover:scale-110 hover:shadow-[#654321]/40"
                        }`}
                >
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 lg:size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 lg:size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
}
