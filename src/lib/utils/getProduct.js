export default async function getProduct(slug){
    const res = await fetch(`http://localhost:3000/api/product?slug=${slug}`);
    const data = await res.json();
    const product = data[0];
    return product;
}