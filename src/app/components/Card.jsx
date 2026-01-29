"use client";

import Image from "next/image";
import img from "../../../public/panels.png";
import { useRouter } from "next/navigation";

export default function Card({ product }) {
    const router = useRouter();
    return (
        <div className="group w-full">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-3 border md:h-[200px] border-gray-300 rounded-bl-xl rounded-br-xl sm:rounded-bl-none sm:rounded-tr-2xl sm:rounded-br-2xl shadow-xl group-hover:scale-105 transition ">
                <div className="h-[300px] sm:h-[450px] md:h-full relative">
                    <Image src={product.image[0]} fill alt="product image" className="h-full" />
                </div>
                <div className="flex flex-col gap-2 sm:gap-1  md:text-[14px]  p-2 sm:pl-0 w-full">
                    <span className="text-[18px]">{product.title}</span>
                    <span>{product.shortDescription}</span>

                    <div className="h-full flex items-end md:pb-1">
                        <button onClick={() => router.push(`/products/${product.slug}`)} className="border border-gray-500 py-2 px-3 rounded-xl cursor-pointer hover:bg-[#654321] hover:text-white transition active:bg-[#654321]">See Product</button>
                    </div>
                </div>

            </div>
        </div>
    );
}