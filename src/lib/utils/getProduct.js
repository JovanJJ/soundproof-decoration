export default async function getProduct(slug){
    const res = await fetch(`${process.env.BASE_URI}/api/product?slug=${slug}`);
    const data = await res.json();
    const product = data[0];
    return product;
}