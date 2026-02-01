import BlogCardsSlider from "./ui/BlogCardsSlider";

export default function BlogHero({data}){
    return(
        <section className="relative w-full h-[80vh]">
            <BlogCardsSlider data={data} />
        </section>
    );
}