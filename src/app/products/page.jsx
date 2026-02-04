import SearchProducts from "../components/SearchProducts";
import ProductsList from "../components/ProductsList";
import { fetchProducts } from "@/lib/actions";

export const metadata = {
  title: "Products | Acoustic Curtains & Soundproof Panels",
  description:
    "Explore decorative acoustic curtains and soundproof panels designed to enhance comfort, style, and sound quality.",
};

export default async function ProductsPage({ searchParams }) {
  const data = await fetchProducts({searchParams});

    const paginationData = {
      totalItems: data.totalItems,
      totalPages: data.totalPages,
      currentPage: data.currentPage
    }

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 pt-30 text-gray-800">
      <div className="mx-auto text-center md:px-15">
        <span className="block text-2xl">
          We selected best for you
        </span>
        
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-3 mt-10 ">
        <SearchProducts/>
        <ProductsList products={data.products} paginationData={paginationData} />
      </div>
    </section>
  );
}