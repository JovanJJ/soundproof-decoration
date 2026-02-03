import BlogHero from "../components/BlogHero";
import BlogMainSection from "../components/BlogMainSection";

const BASE_URI = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}` // runtime on Vercel
  : "http://localhost:3000";

export default async function BlogPage(){
    const res = await fetch(`${BASE_URI}/api/blog-list/`);
    const data = await res.json();
    
    return(
            <>
            <BlogHero data={data} />
            <BlogMainSection data={data} />
            </>
        
        
    );
}