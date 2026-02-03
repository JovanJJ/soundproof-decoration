import BlogPostComponent from "../../components/BlogPostComponent";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const res = await fetch(`/api/blog-page?slug=${slug}`);
    const data = await res.json();
    const product = data[0];
    
    if (!product) {
        return {
            title: "Product not found",
            description: "This product does not exist.",
        };
    }
    return {
        title: product.seo.metaTitle,
        description: product.seo.metaDescription,
        
    };
    
}

export default async function BlogPost({params}) {
    const { slug } = await params;
    const res = await fetch(`/api/blog-page?slug=${slug}`);
    const data = await res.json();
    return (
        <BlogPostComponent data={data} /> 
    );
}

