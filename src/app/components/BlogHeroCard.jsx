import Image from "next/image";
import img from "../../../public/card-1.jpg";
import Link from "next/link";

export default function BlogHeroCard({title, description, slug}) {
    return (
        <div className="relative w-full h-[90vh]">
            <div className="absolute inset-0 md:inset-18">
                <Image
                    src={img}
                    alt="Beautiful living room with decorative wall panels"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover md:rounded-3xl"
                />
                <div className="absolute inset-0 bg-black/50 md:rounded-3xl"></div>
            </div>

            <div className="absolute top-0 py-25 lg:py-40 left-0 right-0 bottom-0 text-center flex flex-col justify-between text-white">
                <div className="">
                    <span className="text-xl lg:text-3xl underline  text-gray-200">Recent blog posts:</span>
                    <h1 className="text-center text-2xl lg:text-4xl lg:px-20 text-white font-bold">{title}</h1>
                </div>

                <div className="px-10 md:px-25 flex flex-col">
                    <span className="text-xl">
                       {description}
                    </span>
                    <div className="mt-5">
                    <Link href={`/blog/${slug}`} className="px-6 py-2 bg-white text-black text-xl rounded-xl border cursor-pointer hover:bg-[#654321] hover:text-white transition active:bg-[#654321]">See Post</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}