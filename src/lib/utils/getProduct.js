export default async function getProduct(slug){
    const BASE_URI = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}` 
  : "http://localhost:3000";
    const res = await fetch(`${BASE_URI}/api/product?slug=${slug}`);
    const data = await res.json();
    const product = data[0];
    return product;
}