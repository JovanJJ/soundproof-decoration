import { RevealUp } from "./ui/MotionWrappers";

export default function WhoIsThisFor() {
    return (
        <div className="w-full pt-16 pb-10">
            <section className="mx-auto w-full max-w-7xl px-5 sm:px-10">
                <RevealUp>
                    <h2 className="text-3xl sm:text-4xl font-medium bg-gradient-to-r from-[#C08552] to-[#C1785A] bg-clip-text text-transparent text-center mb-12">
                        Who Is This For?
                    </h2>
                </RevealUp>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <RevealUp delay={0.1} className="h-full">
                        <div className="group flex flex-col border border-gray-200 p-8 rounded-2xl shadow-sm h-full bg-white transition-all duration-300 hover:shadow-lg hover:border-[#C08552]/40 hover:-translate-y-1">
                            <h3 className="text-xl lg:text-2xl font-medium text-gray-800 mb-4 group-hover:text-[#C08552] transition-colors">For Home Workspaces</h3>
                            <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                                Create a calmer and more focused environment with decorative soundproof panels and elegant curtains that help reduce distractions while making the room feel modern and comfortable.
                            </p>
                            <div className="flex flex-col gap-4 mt-auto border-t border-gray-100 pt-6">
                                <div>
                                    <span className="block text-xs uppercase tracking-widest text-[#C1785A] font-medium mb-2">Best for</span>
                                    <p className="text-sm text-gray-700">Home offices, study rooms, and productivity-focused spaces.</p>
                                </div>
                                <div>
                                    <span className="block text-xs uppercase tracking-widest text-[#C1785A] font-medium mb-2">The Vibe</span>
                                    <p className="text-sm text-gray-700">Clean, quiet, and professionally styled.</p>
                                </div>
                            </div>
                        </div>
                    </RevealUp>

                    <RevealUp delay={0.2} className="h-full">
                        <div className="group flex flex-col border border-gray-200 p-8 rounded-2xl shadow-sm h-full bg-white transition-all duration-300 hover:shadow-lg hover:border-[#C08552]/40 hover:-translate-y-1">
                            <h3 className="text-xl lg:text-2xl font-medium text-gray-800 mb-4 group-hover:text-[#C08552] transition-colors">For Modern Living Spaces</h3>
                            <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                                Upgrade everyday interiors with textures and materials that add warmth, softness, and visual depth without overwhelming the space.
                            </p>
                            <div className="flex flex-col gap-4 mt-auto border-t border-gray-100 pt-6">
                                <div>
                                    <span className="block text-xs uppercase tracking-widest text-[#C1785A] font-medium mb-2">Best for</span>
                                    <p className="text-sm text-gray-700">Living rooms, apartments, and contemporary interiors.</p>
                                </div>
                                <div>
                                    <span className="block text-xs uppercase tracking-widest text-[#C1785A] font-medium mb-2">The Vibe</span>
                                    <p className="text-sm text-gray-700">Minimal, cozy, and refined.</p>
                                </div>
                            </div>
                        </div>
                    </RevealUp>

                    <RevealUp delay={0.3} className="h-full">
                        <div className="group flex flex-col border border-gray-200 p-8 rounded-2xl shadow-sm h-full bg-white transition-all duration-300 hover:shadow-lg hover:border-[#C08552]/40 hover:-translate-y-1">
                            <h3 className="text-xl lg:text-2xl font-medium text-gray-800 mb-4 group-hover:text-[#C08552] transition-colors">For Creative & Relaxing Environments</h3>
                            <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                                Whether it’s a gaming setup, studio corner, or personal retreat, these pieces help shape a more immersive and relaxing atmosphere.
                            </p>
                            <div className="flex flex-col gap-4 mt-auto border-t border-gray-100 pt-6">
                                <div>
                                    <span className="block text-xs uppercase tracking-widest text-[#C1785A] font-medium mb-2">Best for</span>
                                    <p className="text-sm text-gray-700">Studios, gaming rooms, media spaces, and creative setups.</p>
                                </div>
                                <div>
                                    <span className="block text-xs uppercase tracking-widest text-[#C1785A] font-medium mb-2">The Vibe</span>
                                    <p className="text-sm text-gray-700">Stylish, immersive, and thoughtfully designed.</p>
                                </div>
                            </div>
                        </div>
                    </RevealUp>
                </div>
            </section>
        </div>
    );
}
