import SearchProducts from "../components/SearchProducts";
import ProductsList from "../components/ProductsList";

export const metadata = {
  title: "Products | Acoustic Curtains & Soundproof Panels",
  description:
    "Explore decorative acoustic curtains and soundproof panels designed to enhance comfort, style, and sound quality.",
};

export default async function ProductsPage({ searchParams }) {
    const params = await searchParams;
    const response = await fetch(`http://localhost:3000/api/products?category=${params.category}`);
    const data = await response.json();
  
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 pt-30 text-gray-800">
      <div className="mx-auto text-center md:px-15">
        <span className="block text-xl">
          Curated decoration panels and curtains
        </span>
        <span>
          We analyze design trends, product quality, reviews, and pricing to curate a selection of decoration panels and curtains that offer the best balance of style and value — all in one place.
        </span>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-3 mt-10 md:min-h-screen">
        <SearchProducts/>
        <ProductsList products={data} />
      </div>
    </section>
  );
}