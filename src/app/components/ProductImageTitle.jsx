import Image from "next/image";

export default function ProductImageTitle(product) {
    
    
    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 border border-gray-200 rounded-4xl">
            <div className="relative flex items-center min-h-[400px]">
                <Image src={product.data.image[0]} fill alt="product-image" className="rounded-4xl object-cover   md:px-0" />   
            </div>
            <div className="p-10">
                <div className="flex flex-col gap-5">
                    <h1 className="text-2xl">{product.data.title}</h1>
                    <span className="text-xl">
                        {product.data.shortDescription}
                    </span>

                    <ul className="space-y-2">
                        {product.data.features.map((feature) => {
                            return(
                                <li key={feature}>-{feature}</li>
                            );
                        })}
                        
                        
                    </ul>
                    <div>
                        <button className="py-3 bg-[#654321] hover:bg-[#C4A484] hover:text-black transition px-3 text-white rounded-xl cursor-pointer">Check on Amazon</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full border border-gray-200 rounded-4xl  mt-5">
                <span className="block p-10 text-xl pb-2">6 PCS Acoustic Panels 23.6×23.6</span>
                <span className="block p-10 pt-0">{product.data.description}</span>
            </div>
        </>

    );
}