export default function buildProductUrl({ category, page }) {
    const params = new URLSearchParams();

    if (category) params.set("category", category);
    if (page && page > 1) params.set("page", page);

    return `/products?${params.toString()}`;
}