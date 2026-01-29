"use client";

import { useRouter } from "next/navigation";

export default function SearchProducts(){
    const router = useRouter();
    return(
        <div>
          <div className="relative flex flex-col items-center gap-3  h-[210px] border border-gray-200 rounded-4xl justify-center">
            <div className="w-2/3 sm:w-1/2 md:w-[80%] xl:w-[70%] py-2  text-center text-xl rounded cursor-pointer">
              Category
            </div>  
            
            <div className="group w-2/3 sm:w-1/2 md:w-[80%] xl:w-[70%]">
            <div onClick={() => {router.push("/products?category=panels")}} className="w-full py-2 bg-gray-200 rounded cursor-pointer text-start px-2 group-hover:scale-105 hover:bg-[#654321] hover:text-white active:bg-[#654321] transition">
              Decoration Panels &rarr;
            </div>
            </div>

            <div className="group w-2/3 sm:w-1/2 md:w-[80%] xl:w-[70%]">
            <div onClick={() => {router.push("/products?category=curtains")}} className="w-full py-2 bg-gray-200 rounded cursor-pointer text-start px-2 group-hover:scale-105 hover:bg-[#654321] hover:text-white active:bg-[#654321] transition">
              Decoration Curtains &rarr;
            </div>
            </div>
            
          </div>
        </div>
    );
}