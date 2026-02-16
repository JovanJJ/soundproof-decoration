"use client";

import { useRouter, useSearchParams } from "next/navigation";
import buildProductUrl from "./buildProductUrl";
import { useTransition } from "react";
import Spinner from "./ui/Spinner";

export default function ShowMore({ paginationData }) {
    const { currentPage, totalPages, totalItems } = paginationData;
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams.toString());
    const page = Number(searchParams.get("page") ?? 1);
    const category = searchParams.get("category");
    const html = [];
    const handlePageChange = (n) => {
    startTransition(() => {
      router.push(buildProductUrl({category: category, page: String(n)}))
    });
  };

  const handleShowMore = () => {
    startTransition(() => {
      router.push(buildProductUrl({category: category, page: page + 1}))
    });
  }

  const handleShowLess = () => {
    startTransition(() => {
      router.push(buildProductUrl({category: category, page: page - 1}))
    });
  }

    for(let n = 1; n <= totalPages; n++){
        html.push( 
                <span key={n} onClick={() => {handlePageChange(n)}} className={`cursor-pointer ${String(n) == currentPage && "underline"}`}>{n}</span>   
        );
    }


    

    return (
        <>
        {isPending && <Spinner />}
        <div className="w-full flex justify-center items-center pb-5 pt-3 gap-5">
            <button onClick={() => {handleShowLess()}} className="cursor-pointer underline">Show less</button>
                {html}
            <button onClick={() => {handleShowMore()}} className="cursor-pointer underline">Show more</button>
        </div>
        </>
    );
}