import ProductImageTitle from "@/app/components/ProductImageTitle";
import { getNeonProduct, getNeonMetadata } from "@/lib/actions";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const metadataResult = await getNeonMetadata(slug);

    if (!metadataResult || metadataResult.length === 0) {
        return {
            title: "Product not found",
            description: "This product does not exist.",
        };
    }
    return {
        title: metadataResult[0].meta_title,
        description: metadataResult[0].meta_description,
    };
}

export default async function ProductPage({ params }) {
    const { slug } = await params;
    const product = await getNeonProduct(slug);

    return (
        <section className="max-w-7xl mx-auto pt-6 md:pt-30 text-gray-800">
            <ProductImageTitle data={product} />
        </section>
    );
}