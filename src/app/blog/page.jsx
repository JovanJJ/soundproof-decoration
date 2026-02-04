import BlogHero from "../components/BlogHero";
import BlogMainSection from "../components/BlogMainSection";
import { fetchBlogList } from "@/lib/actions";


export default async function BlogPage(){

    const data = await fetchBlogList();
    
    
    return(
            <>
            <BlogHero data={data} />
            <BlogMainSection data={data} />
            </>
    );
}