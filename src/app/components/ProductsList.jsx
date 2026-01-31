import Image from "next/image";
import Card from "./Card";

export default function ProductsList({ products }) {
    return (
        <div className="w-full flex flex-col border border-gray-200 rounded-xl shadow-xl">
            
            <div className="flex flex-col gap-2">

                <h2 className="text-2xl mt-10 pl-5">Products</h2>
                <div className="px-5">
                <div className="italic text-[14px] border border-gray-200 p-2 rounded-xl">
                    Disclaimer:
                    Product images shown on this website are not original photographs taken by us. Images are provided for illustrative purposes only and belong to their respective owners.
                    Some links on this website are affiliate links, which means we may earn a small commission if you make a purchase through them, at no additional cost to you.
                </div>
                </div>
                
                <div className="mt-15 p-5 overflow-y-auto h-[800px]">
                <div className="flex flex-col gap-10 pb-5">
                                    
                    {
                        products.map((product) => {
                            return (
                                <Card key={product._id} product={product} />
                            )})
                    }
                       
                </div>
                </div> 

            </div>
           
        </div>
    );
}