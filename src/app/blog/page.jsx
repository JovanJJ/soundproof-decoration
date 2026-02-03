import BlogHero from "../components/BlogHero";
import BlogMainSection from "../components/BlogMainSection";

export default async function BlogPage(){
    const res = await fetch(`${process.env.BASE_URI}/api/blog-list/`);
    const data = await res.json();
    
    return(
            <>
            <BlogHero data={data} />
            <BlogMainSection data={data} />
            </>
        
        
    );
}