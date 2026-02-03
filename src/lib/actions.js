"use server";

import { connectDB } from "./connectdb";
import Product from "./models/Product";
import Blog from "./models/Blog";

export async function addProduct(formData) {
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

export async function addBlogPost(formData) {
    await connectDB();
    const images = formData.get("images")
        .split("*")
        .map(i => i.trim())
        .filter(Boolean)

    const imagesText = formData.get("imagesText")
        .split("*")
        .map(t => t.trim())
        .filter(Boolean)

    const tipsAnswer = formData.get("tipsAnswers")
        .split("*")
        .map(t => t.trim())
        .filter(Boolean)

    const tipsAnswer2 = formData.get("tips2Answers")
        .split("*")
        .map(t => t.trim())
        .filter(Boolean)    

    const imagesTextTitle = formData.get("imagesTextTitle")
        .split("*")
        .map(t => t.trim())
        .filter(Boolean)     

    const blog = await Blog.create({
        readingTime: formData.get("readingTime"),
        mobileTitle: formData.get("mobileTitle"),
        mobileDescription: formData.get("mobileDescription"),
        title: formData.get("title"),
        intro: formData.get("intro"),
        slug: formData.get("slug"),
        blogHeroImage: formData.get("blogHeroImage"),
        cardPreviewImage: formData.get("cardPrevierwImage"),
        images: images,
        imagesText: imagesText,
        imagesTextTitle: imagesTextTitle,
        tips1: formData.get("tips"),
        tips1Answer: tipsAnswer,
        tips2: formData.get("tips2"),
        tips2Answer: tipsAnswer2,
        closingParagraph: formData.get("closingParagraph"),
        seo: {
            metaTitle: formData.get("metaTitle"),
            metaDescription: formData.get("metaDescription"),
            canonicalUrl: formData.get("canonicalUrl"),
        }
    });
}