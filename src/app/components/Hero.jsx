import Image from "next/image";
import hero1 from "../../../public/hero1.png";
import NavBar from "./NavBar";
import TypeWriter from "./ui/TypeWriter";
import Slide from "./ui/Slide";

export default function Hero() {
    return (
        <div className="w-full h-screen ">
        <section className="relative w-full h-screen overflow-hidden">
            
            {/*<div className="absolute inset-0 bg-black/10 z-100"></div>*/}
            <div className="absolute top-35 left-10 z-50 w-full flex flex-col gap-3  text-gray-700">
                <h2 className="text-4xl lg:text-6xl">With us</h2>
                <span className="text-3xl lg:text-5xl"><TypeWriter /></span>
            </div>

            <div className="absolute inset-0 h-[100vh]">
                <Slide />
            </div>
            <div className="absolute inset-0 bg-black/50"></div>
        </section>
        </div>
    );
}