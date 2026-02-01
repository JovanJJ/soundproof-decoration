import ProductImageTitle from "@/app/components/ProductImageTitle";
import getProduct from "@/lib/utils/getProduct";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const product = await getProduct(slug);

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

export default async function ProductPage({ params }) {
    const { slug } = await params;
    const product = await getProduct(slug);

    return (
        <section className="max-w-7xl mx-auto pt-30 text-gray-800">
            <ProductImageTitle data={product} />
        </section>
    );
}