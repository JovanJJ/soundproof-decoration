"use server";

import { connectDB } from "./connectdb";
import Product from "./models/Product";
import Blog from "./models/Blog";
import Users from "./models/Users";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken"
import { cookies } from "next/headers";

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

export async function registerAdmin (formData) {
    const { email, password, repeatedPassword } = await formData;
    if(!email){
        return {message: "Neispravan email"}
    }
    if(password.length < 6){
        return {message: "Sifra mora imati minimum 6 karaktera"}
    }
    if(password !== repeatedPassword){
        return {message: "Lozinke se ne poklapaju"}
    }

    await connectDB();



    const hashedPassword = await bcrypt.hash(password, 10);

    await Users.create({
        email: email,
        password: hashedPassword,
    });

    return {success: true, message: "Uspesno ste kreirali nalog"}
    
}

export async function login(email, password) {

    
    await connectDB();
    // Find user
    const user = await Users.findOne({ email }).select('+password');
    if (!user) {
        return { success: false, message: 'Invalid credentials' };
    }
    
    // Check password
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        return { success: false, message: 'Invalid credentials' };
    }
    
    // Generate token on server
    const token = jwt.sign(
        { userId: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    );
    
    // Set cookie on server
    const cookieStore = await cookies();
    cookieStore.set('authToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000
    });
    
     return { 
        success: true, 
        
    };
}

export async function verifyAuth() {
    const cookieStore = await cookies();
    const token = cookieStore.get('authToken')?.value;
    
    if (!token) {
        return;
    }
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        
        // If you fetch user from DB here, also serialize:
        const user = await Users.findById(decoded.userId);
        
        if (user._id) {
            return {
            success: true
        };
        }
    } catch (error) {
        return null;
    }
}
    
    
