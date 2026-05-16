import React from "react";
import { RevealUp } from "./ui/MotionWrappers";
import ContactForm from "./ContactForm";

export default function ContactSection() {
    return (
        <section className="max-w-5xl mx-auto px-4 py-20">
            <RevealUp>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-gray-50 border border-gray-200 rounded-[2rem] p-8 lg:p-12 shadow-sm">

                    <div className="flex flex-col justify-between">
                        <div>
                            <span className="block text-sm uppercase tracking-widest text-[#C1785A] font-medium mb-2">Contact</span>
                            <h2 className="text-3xl lg:text-4xl font-medium text-gray-800 mb-4">
                                Do you have any questions ?
                            </h2>
                            <p className="text-gray-600 leading-relaxed max-w-sm">
                                Send a message directly from the site, or reach out through one of the links below.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 mt-10">
                            <span className="flex items-center justify-between p-5 bg-white border border-gray-200 rounded-2xl hover:border-[#C08552]/40 transition-colors group shadow-sm hover:shadow-md">
                                <div className="flex flex-col">
                                    <span className="text-xs uppercase tracking-wider text-gray-500 mb-1 font-medium">Email</span>
                                    <span className="text-gray-800 font-medium group-hover:text-[#C08552] transition-colors">jovanjj99@gmail.com</span>
                                </div>

                            </span>

                            <a href="https://github.com/JovanJJ" target="_blank" rel="noreferrer" className="flex items-center justify-between p-5 bg-white border border-gray-200 rounded-2xl hover:border-[#C08552]/40 transition-colors group shadow-sm hover:shadow-md">
                                <div className="flex flex-col">
                                    <span className="text-xs uppercase tracking-wider text-gray-500 mb-1 font-medium">GitHub</span>
                                    <span className="text-gray-800 font-medium group-hover:text-[#C08552] transition-colors">github.com/JovanJJ</span>
                                </div>
                                <span className="text-gray-400 group-hover:text-[#C08552] transition-colors text-lg">→</span>
                            </a>

                            <a href="https://www.upwork.com/freelancers/~01e9755d9bf9b9d4b9" target="_blank" rel="noreferrer" className="flex items-center justify-between p-5 bg-white border border-gray-200 rounded-2xl hover:border-[#C08552]/40 transition-colors group shadow-sm hover:shadow-md">
                                <div className="flex flex-col">
                                    <span className="text-xs uppercase tracking-wider text-gray-500 mb-1 font-medium">Upwork</span>
                                    <span className="text-gray-800 font-medium group-hover:text-[#C08552] transition-colors">View profile</span>
                                </div>
                                <span className="text-gray-400 group-hover:text-[#C08552] transition-colors text-lg">→</span>
                            </a>
                        </div>
                    </div>


                    <div className="flex flex-col bg-white p-8 rounded-[1.5rem] border border-[#C08552]/20 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#C08552] to-[#C1785A]" />
                        <ContactForm />
                    </div>
                </div>
            </RevealUp>
        </section>
    );
}
