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
        miblieTitle: formData.get("mobileTitle"),
        slug: formData.get("slug"),
        shortDescription: formData.get("shortDescription"),
        descriptionIntro: formData.get("descriptionIntro"),
        description: formData.get("description"),
        features: featuresArray,
        image: formData.get("image"),
        category: formData.get("category"),
        color: formData.get("color"),
        brand: formData.get("brand"),
        size: formData.get("size"),
        affiliateUrl: formData.get("affiliateUrl"),
        seo: {
            metaTitle: formData.get("metaTitle"),
            metaDescription: formData.get("metaDescription"),
            canonicalUrl: formData.get("canonicalUrl"),
        }
    });
    
}