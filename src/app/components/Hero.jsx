import Image from "next/image";
import hero1 from "../../../public/hero1.png";
import NavBar from "./NavBar";
import TypeWriter from "./ui/TypeWriter";
import Slide from "./ui/Slide";

export default function Hero() {
    return (
        <div className="w-full h-[87vh] sm:h-[86vh] md:sm:h-[93vh] lg:sm:h-[93vh]">
        <section className="relative w-full h-screen overflow-hidden">
            
            
            <div className="absolute top-35 left-10 z-40 w-full flex flex-col gap-3 text-white">
                <h2 className="text-3xl lg:text-6xl">With us</h2>
                <span className="text-2xl lg:text-5xl"><TypeWriter /></span>
            </div>

            <div className="absolute inset-0 h-[100vh]">
                <Slide />
            </div>
            <div className="absolute inset-0 bg-black/25 z-20"></div>
        </section>
        </div>
    );
}