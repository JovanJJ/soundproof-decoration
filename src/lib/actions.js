"use server";

import { connectDB } from "./connectdb";
import Product from "./models/Product";

export default async function addProduct(formData) {
    await connectDB();

    const features = formData.get("features") || "";
    const featuresArray = features
        .split(",")
        .map(f => f.trim())
        .filter(Boolean)

    const product = await Product.create({
        title: formData.get("title"),
        slug: formData.get("slug"),
        shortDescription: formData.get("shortDescription"),
        description: formData.get("description"),
        features: featuresArray,
        image: formData.get("image"),
        category: formData.get("category"),
        brand: formData.get("brand"),
        affiliateUrl: formData.get("affiliateUrl"),
        seo: {
            metaTitle: formData.get("metaTitle"),
            metaDescription: formData.get("metaDescription"),
            canonicalUrl: formData.get("canonicalUrl"),
        }
    });
    console.log(product);
}