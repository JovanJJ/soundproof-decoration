import SearchProducts from "../components/SearchProducts";
import ProductsList from "../components/ProductsList";

export const metadata = {
  title: "Products | Acoustic Curtains & Soundproof Panels",
  description:
    "Explore decorative acoustic curtains and soundproof panels designed to enhance comfort, style, and sound quality.",
};

export default async function ProductsPage({ searchParams }) {
    const params = await searchParams;
    console.log(params.category);
    const response = await fetch(`${process.env.BASE_URI}/api/products?category=${params.category}&page=${params.page}`,{
      cache: 'no-store',
    });
    const data = await response.json();
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