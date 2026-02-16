import BlogPostComponent from "../../components/BlogPostComponent";
import { fetchBlogMetaData } from "@/lib/actions";
import { fetchBlogPost } from "@/lib/actions";
import MessageWidget from "../../components/MessageWidget";

export async function generateMetadata({ params }) {

    const { slug } = await params;

    const data = await fetchBlogMetaData(slug);

    if (!data) {
        return {
            title: "Product not found",
            description: "This product does not exist.",
        };
    }

    return {
        title: data.safeList[0].seo.metaTitle,
        description: data.safeList[0].seo.metaDescription,

    };

}

export default async function BlogPost({ params }) {

    const { slug } = await params;
    const data = await fetchBlogPost(slug)


    return (
        <>
            <BlogPostComponent data={data} />
            <MessageWidget />
        </>
    );
}

