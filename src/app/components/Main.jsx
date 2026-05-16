import { fetchBlogList } from "@/lib/actions";
import Trust from "./Trust";
import Comparison from "./Comparison";
import Faq from "./Faq";
import ContactSection from "./ContactSection";
import HeroSection from "./HeroSection";
import MissionSection from "./MissionSection";
import WhoIsThisFor from "./WhoIsThisFor";
import BlogTickerSection from "./BlogTickerSection";
import ExploreSection from "./ExploreSection";

export default async function Main() {
    const blogData = await fetchBlogList();
    const featuredPosts = blogData.safeList.slice(0, 6);

    return (
        <main className="relative z-50 w-full -mt-[29%] sm:-mt-[9%] md:-mt-[7%] lg:-mt-[5.7%] 2xl:-mt-[3.7%] bg-white rounded-tl-[50px] rounded-tr-[50px] pt-4">
            <div className="w-full">
                <HeroSection />
                
                <MissionSection />

                <div className="w-full mt-12 lg:mt-20">
                    <Trust />
                </div>

                <WhoIsThisFor />

                <div className="w-full pt-20">
                    <Comparison />

                    <div className="w-full mt-10">
                        <Faq />
                    </div>

                    <BlogTickerSection posts={featuredPosts} />

                    <ExploreSection />
                    
                    <ContactSection />
                </div>
            </div>
        </main>
    );
}
