"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BlogPreviewCard from "../BlogPreviewCard";
import arrowLeft from "../../../../public/arrow-left.png";
import arrowRight from "../../../../public/arrow-right.png";

function buildDesktopTrack(posts, minimumItems = 6) {
    if (!posts.length) {
        return [];
    }

    const repeatedPosts = [];
    const repetitions = Math.max(1, Math.ceil(minimumItems / posts.length));

    for (let cycle = 0; cycle < repetitions; cycle += 1) {
        for (const post of posts) {
            repeatedPosts.push({
                ...post,
                tickerKey: `${post._id}-${cycle}`,
            });
        }
    }

    return repeatedPosts;
}

export default function InfiniteScrollTicker({ posts = [] }) {
    const [mobileSwiper, setMobileSwiper] = useState(null);

    if (!posts.length) {
        return null;
    }

    const mobileLoop = posts.length > 1;
    const desktopPosts = buildDesktopTrack(posts, 6);

    return (
        <>
            <section className="mt-12 overflow-hidden">
                <div className="lg:hidden">
                    <Swiper
                        onSwiper={setMobileSwiper}
                        loop={mobileLoop}
                        spaceBetween={16}
                        slidesPerView={1.08}
                        className="!overflow-visible px-5"
                        breakpoints={{
                            640: {
                                slidesPerView: 1.2,
                            },
                            768: {
                                slidesPerView: 1.35,
                            },
                        }}
                    >
                        {posts.map((blog, index) => (
                            <SwiperSlide key={blog._id} className="pb-2">
                                <BlogPreviewCard
                                    blog={blog}
                                    priority={index === 0}
                                    imageHeightClassName="h-[360px] sm:h-[420px]"
                                    imageSizes="(min-width: 768px) 65vw, 85vw"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {posts.length > 1 ? (
                        <div className="mt-5 flex items-center justify-center gap-4 px-5">
                            <button
                                type="button"
                                onClick={() => mobileSwiper?.slidePrev()}
                                className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 bg-white shadow-sm transition-transform duration-200 hover:scale-105"
                                aria-label="Previous blog post"
                            >
                                <Image src="/arrow-left.svg" alt='left' width={20} height={20} />
                            </button>
                            <button
                                type="button"
                                onClick={() => mobileSwiper?.slideNext()}
                                className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 bg-white shadow-sm transition-transform duration-200 hover:scale-105"
                                aria-label="Next blog post"
                            >
                                <Image src="/arrow-right.svg" alt='left' width={20} height={20} />
                            </button>
                        </div>
                    ) : null}
                </div>

                <div className="desktop-ticker-shell hidden overflow-hidden py-4 lg:block">
                    <div className="desktop-ticker-track flex w-max items-stretch">
                        {[0, 1].map((copyIndex) => (
                            <div
                                key={copyIndex}
                                aria-hidden={copyIndex === 1}
                                className="flex shrink-0 items-stretch gap-5 pr-5"
                            >
                                {desktopPosts.map((blog) => (
                                    <div
                                        key={`${copyIndex}-${blog.tickerKey}`}
                                        className="w-[360px] shrink-0 transition-transform duration-300 ease-out hover:scale-[1.02] xl:w-[400px]"
                                    >
                                        <BlogPreviewCard
                                            blog={blog}
                                            imageHeightClassName="h-[420px]"
                                            imageSizes="(min-width: 1280px) 400px, 360px"
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style jsx>{`
                .desktop-ticker-track {
                    animation: desktop-ticker-scroll 62s linear infinite;
                    will-change: transform;
                }

                .desktop-ticker-shell:hover .desktop-ticker-track,
                .desktop-ticker-shell:focus-within .desktop-ticker-track {
                    animation-play-state: paused;
                }

                @keyframes desktop-ticker-scroll {
                    from {
                        transform: translate3d(0, 0, 0);
                    }

                    to {
                        transform: translate3d(-50%, 0, 0);
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .desktop-ticker-track {
                        animation: none;
                    }
                }
            `}</style>
        </>
    );
}
