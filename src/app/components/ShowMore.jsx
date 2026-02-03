"use client";

import { useRouter, useSearchParams } from "next/navigation";
import buildProductUrl from "./buildProductUrl";

export default function ShowMore({ paginationData }) {
    const { currentPage, totalPages, totalItems } = paginationData;
    const router = useRouter();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams.toString());
    const page = Number(searchParams.get("page") ?? 1);
    const category = searchParams.get("category");
    const html = [];
    for(let n = 1; n <= totalPages; n++){
        html.push( 
                <span key={n} onClick={() => {router.push(buildProductUrl({category: category, page: String(n)})) }} className={`cursor-pointer ${String(n) == currentPage && "underline"}`}>{n}</span>   
        );
    }

    return (
        <div className="w-full flex justify-center items-center pb-5 pt-3 gap-5">
            <button onClick={() => {router.push(buildProductUrl({category: category, page: page - 1})) }} className="cursor-pointer underline">Show less</button>
                {html}
            <button onClick={() => {router.push(buildProductUrl({category: category, page: page + 1})) }} className="cursor-pointer underline">Show more</button>
        </div>
    );
}