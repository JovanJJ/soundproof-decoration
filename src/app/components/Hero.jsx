import Image from "next/image";
import heroImg from "../../../public/hero3.jpg";

export default function Hero(){
    return(
        <section className="relative w-full h-[60vh] text-black">
            <div className="absolute inset-0 w-full h-full ">
            <Image src={heroImg} alt="img" fill className="object-cover" />
            </div>
            <div className='w-full h-full absolute left-0 right-0 bg-black/50'></div>
            <div className="relative z-100 w-full flex">
                <div className="w-1/3">
                <span className="text-xl text-gray-100 font-medium">Make you living room sound proof wiht a style</span>
                </div>
            </div>
        </section>
    );
}