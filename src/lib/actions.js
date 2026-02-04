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

export async function fetchProducts({ searchParams }) {
    const { category, page } = await searchParams;
    const itemsPerPage = 6;
    const currentPage = Number(page || 1);
    const skipCount = (currentPage - 1) * itemsPerPage;
    const filter = {};
    if (category && category !== "null" && category !== "undefined") {
        filter.category = category;
    }
    await connectDB();
    const data = await Product.find(filter)
        .skip(skipCount)
        .limit(itemsPerPage)
        .lean();

    const safeProducts = data.map((p) => ({
        ...p,
        _id: p._id.toString(),
        createdAt: p.createdAt?.toISOString(),
        updatedAt: p.updatedAt?.toISOString(),
    }));

    const totalItems = await Product.countDocuments(filter);
    const totalPages = Math.ceil(totalItems / itemsPerPage);



    return ({
        products: safeProducts,
        totalItems,
        totalPages,
        currentPage
    });
}

export async function fetchBlogList() {
    await connectDB();
    const blogList = await Blog.find({}).lean();
    const safeList = blogList.map((post) => {
        return {       
                ...post,
                _id: post._id.toString(),
                createdAt: post.createdAt?.toISOString(),
                updatedAt: post.updatedAt?.toISOString(),      
        }
    });

    return ({
        safeList
    });
}

export async function fetchBlogMetaData(slug) {
    await connectDB();
    const blog = await Blog.find({slug});
    
    const safeList = blog.map((post) => {
        return {       
                seo: post.seo    
        }
    });

    return ({
        safeList
    }); 
}

export async function fetchBlogPost(slug) {
    await connectDB();
    const data = await Blog.find({slug}).lean();
    const blog = data.map((post) => {
        return{
            ...post,
            _id: post._id.toString(),
            createdAt: post.createdAt.toISOString(),
            updatedAt: post.updatedAt.toISOString()
        }
    })
    return(
        blog
    );
}

export async function fetchProduct(slug) {
    await connectDB();

    const data = await Product.find({slug}).lean();
    const product = data.map((product) => {
        return{
            ...product,
            _id: product._id.toString,
            createdAt: product.createdAt.toISOString(),
            updatedAt: product.updatedAt.toISOString()
        }
    });
    return(product);
}