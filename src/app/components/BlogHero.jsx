import Image from "next/image";
import img from "../../../public/hero2.png";
import BlogCardsSlider from "./ui/BlogCardsSlider";

export default function BlogHero(){
    return(
        <section className="relative w-full h-[80vh]">
            <BlogCardsSlider />
        </section>
    );
}