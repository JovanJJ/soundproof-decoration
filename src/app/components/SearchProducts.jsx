"use client";

import { useRouter, useSearchParams } from "next/navigation";
import buildProductUrl from "./buildProductUrl";

export default function SearchProducts() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const category = searchParams.get("category");
  
  return (
    <div>
      <div className="relative flex flex-col items-center gap-3 h-[270px] border border-gray-200 rounded-4xl justify-center">
        <div className="w-2/3 sm:w-1/2 md:w-[80%] xl:w-[70%] py-2  text-center text-xl rounded cursor-pointer">
          Category
        </div>

        <div className="group w-2/3 sm:w-1/2 md:w-[80%] xl:w-[70%]">
          <div onClick={() => { router.push("/products") }} className="w-full py-2 bg-gray-200 rounded cursor-pointer text-start px-2 group-hover:scale-105 hover:bg-[#654321] hover:text-white active:bg-[#654321] transition">
            All &rarr;
          </div>
        </div>

        <div className="group w-2/3 sm:w-1/2 md:w-[80%] xl:w-[70%]">
          <div onClick={() => { router.push(buildProductUrl({category: "panels", page: page})) }} className="w-full py-2 bg-gray-200 rounded cursor-pointer text-start px-2 group-hover:scale-105 hover:bg-[#654321] hover:text-white active:bg-[#654321] transition">
            Decoration Panels &rarr;
          </div>
        </div>

        <div className="group w-2/3 sm:w-1/2 md:w-[80%] xl:w-[70%]">
          <div onClick={() => { router.push(buildProductUrl({category: "curtains", page: page})) }} className="w-full py-2 bg-gray-200 rounded cursor-pointer text-start px-2 group-hover:scale-105 hover:bg-[#654321] hover:text-white active:bg-[#654321] transition">
            Decoration Curtains &rarr;
          </div>
        </div>

      </div>
    </div>
  );
}