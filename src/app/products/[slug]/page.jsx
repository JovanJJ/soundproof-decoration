import ProductImageTitle from "@/app/components/ProductImageTitle";
import { fetchProduct } from "@/lib/actions";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const product = await fetchProduct(slug);
    
    if (!product) {
        return {
            title: "Product not found",
            description: "This product does not exist.",
        };
    }
    return {
        title: product[0].seo.metaTitle,
        description: product[0].seo.metaDescription,
    };
    
}

export default async function ProductPage({ params }) {
    const { slug } = await params;
    const product = await fetchProduct(slug);
    
    return (
        <section className="max-w-7xl mx-auto pt-6 md:pt-30 text-gray-800">
            <ProductImageTitle data={product} />
        </section>
    );
}