"use server";

import { connectDB } from "./connectdb";
import Product from "./models/Product";
import Blog from "./models/Blog";
import Users from "./models/Users";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import { cookies } from "next/headers";
import { Pool } from "pg";
import nodemailer from "nodemailer";

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    //ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : undefined,
    ssl: { rejectUnauthorized: false },
});

export async function addProduct(formData) {
    console.log(formData);
    await connectDB();

    const features = formData.get("features") || "";
    const featuresArray = features
        .split(",")
        .map(f => f.trim())
        .filter(Boolean)

    const product = await Product.create({
        title: formData.get("title"),
        mobileTitle: formData.get("mobileTitle"),
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
    const blog = await Blog.find({ slug });

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
    const data = await Blog.find({ slug }).lean();
    const blog = data.map((post) => {
        return {
            ...post,
            _id: post._id.toString(),
            createdAt: post.createdAt.toISOString(),
            updatedAt: post.updatedAt.toISOString()
        }
    })
    return (
        blog
    );
}

export async function fetchProduct(slug) {
    await connectDB();

    const data = await Product.find({ slug }).lean();
    const product = data.map((product) => {
        return {
            ...product,
            _id: product._id.toString,
            createdAt: product.createdAt.toISOString(),
            updatedAt: product.updatedAt.toISOString()
        }
    });
    return (product);
}

export async function registerAdmin(formData) {
    const { email, password, repeatedPassword } = await formData;
    if (!email) {
        return { message: "Neispravan email" }
    }
    if (password.length < 6) {
        return { message: "Sifra mora imati minimum 6 karaktera" }
    }
    if (password !== repeatedPassword) {
        return { message: "Lozinke se ne poklapaju" }
    }

    await connectDB();



    const hashedPassword = await bcrypt.hash(password, 10);

    await Users.create({
        email: email,
        password: hashedPassword,
    });

    return { success: true, message: "Uspesno ste kreirali nalog" }

}

export async function login(email, password) {


    await connectDB();
    // Find user
    const user = await Users.findOne({ email }).select('+password');
    if (!user) {
        return { success: false, message: 'Invalid credentials' };
    }


    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        return { success: false, message: 'Invalid credentials' };
    }


    const token = jwt.sign(
        { userId: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    );


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
        await connectDB();
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


//Neon db

export async function getNeonCategories() {
    try {
        const sql = `SELECT * FROM categories`;
        const result = await pool.query(sql);
        return result.rows;
    } catch (error) {
        console.error(error);
        throw new Error("Server ERROR");
    }
}

export async function addNeonProduct(inputData) {
    try {
        let data = {};

        if (inputData instanceof FormData) {
            const f1 = inputData.get("feature1");
            const f2 = inputData.get("feature2");
            const f3 = inputData.get("feature3");
            const f4 = inputData.get("feature4");
            const formFeatures = [f1, f2, f3, f4].filter(f => f && f.trim() !== "");

            data = {
                productTitle: inputData.get("productTitle"),
                productCardTitle: inputData.get("productCardTitle"),
                slug: inputData.get("slug"),
                shortDescription: inputData.get("shortDescription"),
                descriptionIntro: inputData.get("descriptionIntro"),
                description: inputData.get("description"),
                features: formFeatures,
                category: inputData.get("category"),
                brand: inputData.get("brand"),
                size: inputData.get("size"),
                color: inputData.get("color"),
                images: inputData.get("images"),
                metaTitle: inputData.get("metaTitle"),
                metaDescription: inputData.get("metaDescription"),
                canonicalUrl: inputData.get("canonicalUrl")
            };
        } else {
            data = inputData || {};
        }

        const { productTitle, productCardTitle, slug, shortDescription,
            descriptionIntro, description, features, category, brand, size,
            color, images, metaTitle, metaDescription, canonicalUrl } = data;

        const featuresArray = Array.isArray(features) ? features : (typeof features === 'string' ? features.split(",") : []);

        if (!productTitle || !productCardTitle || !slug || !shortDescription ||
            !descriptionIntro || !description || !featuresArray || !category || !brand ||
            !color || !images || !metaTitle || !metaDescription || !canonicalUrl) {
            return { success: false, message: "All fields are required" };
        }

        const sql = `INSERT INTO products (title, mobile_title, short_description, description_intro, description, color, size, slug, meta_title, meta_description, canonical_url, category_id, brand_id)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
        RETURNING id`;
        const result = await pool.query(sql, [productTitle, productCardTitle, shortDescription, descriptionIntro, description, color, size, slug, metaTitle, metaDescription, canonicalUrl, category, brand]);
        const { id } = result.rows[0];

        const imagesSql = `INSERT INTO product_images(product_id, url) VALUES($1, $2)`;
        const imageResult = await pool.query(imagesSql, [id, images]);

        const featuresSql = `INSERT INTO product_features (product_id, feature) VALUES($1, $2)`;
        let featuresResult = [];
        for (let i = 0; i < featuresArray.length; i++) {
            const res = await pool.query(featuresSql, [id, featuresArray[i]]);
            featuresResult.push(res.rowCount);
        }

        if (featuresResult.includes(0)) {
            return { success: false, message: "Server Error" };
        }

        if (result.rowCount < 1 || imageResult.rowCount < 1) {
            return { success: false, message: "Server Error" };
        }

        return { success: true, message: "Successfully added product" };

    } catch (error) {
        console.error(error);
        return { success: false, message: "Server Error" };
    }
}

export async function getNeonProducts({ page, category }) {
    const pageNumber = Number(page) || 1;
    const categoryValue = (category === "undefined" || !category || category === "null") ? null : category;
    const limit = 6;
    const offset = (pageNumber - 1) * limit;

    try {
        const sql = `SELECT p.*, c.name AS category_name, JSON_AGG(f.feature) AS features, i.url AS image_url FROM products p 
        LEFT JOIN categories c ON p.category_id = c.id
        LEFT JOIN product_features f ON p.id = f.product_id
        LEFT JOIN product_images i ON p.id = i.product_id
        WHERE ($3::text IS NULL OR c.name = $3)
        GROUP BY p.id, c.name, i.url
        LIMIT ($1) OFFSET ($2)`;

        const countSql = `SELECT COUNT(*) AS total
        FROM products p
        LEFT JOIN categories c ON p.category_id = c.id
        WHERE ($1::text IS NULL OR c.name = $1)`;

        const response = await pool.query(sql, [limit, offset, categoryValue]);
        const count = await pool.query(countSql, [categoryValue]);
        const totalItems = count.rows[0].total;
        const totalPages = Math.ceil(Number(totalItems) / Number(limit));

        const data = response.rows.map(row => ({
            ...row,
            _id: row.id,
            shortDescription: row.short_description,
            image: [row.image_url]
        }));

        return {
            products: data,
            pagination: {
                totalItems: Number(totalItems),
                totalPages,
                currentPage: pageNumber,
                itemsPerPage: limit
            }
        };
    } catch (error) {
        console.error(error);
        throw new Error("Internal server error");
    }
}

export async function getNeonProduct(slug) {
    try {
        const sql = `SELECT p.title, p.short_description, p.description_intro, p.description, p.color, p.affiliate_url,
        p.size, JSON_AGG(f.feature) AS features, i.url AS product_image FROM products p
        LEFT JOIN product_features f ON f.product_id = p.id
        LEFT JOIN product_images i ON i.product_id = p.id
        WHERE p.slug = $1
        GROUP BY p.id, i.url`;

        const response = await pool.query(sql, [slug]);
        const productData = response.rows.map(row => ({
            ...row,
            image: [row.product_image],
            shortDescription: row.short_description,
            descriptionIntro: row.description_intro,
        }));

        return productData;
    } catch (error) {
        console.error(error);
        throw new Error("Internal server error");
    }
}

export async function getNeonMetadata(slug) {
    try {
        const sql = `SELECT p.meta_title, p.meta_description FROM products p WHERE p.slug = $1`;
        const response = await pool.query(sql, [slug]);
        const metaData = response.rows;
        return metaData;
    } catch (error) {
        console.error(error);
        throw new Error("Internal server error");
    }
}


export async function submitContactForm(formData) {

    try {
        const name = formData.name;
        const email = formData.email;
        const message = formData.message;

        if (!name || !email || !message) {
            return { success: false, message: "All fields are required." };
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.NODE_MAILER_EMAIL,
                pass: process.env.NODE_MAILER_PW,
            },
        });

        await transporter.sendMail({
            from: `"${name}" <${process.env.NODE_MAILER_EMAIL}>`,
            replyTo: email,
            to: process.env.NODE_MAILER_EMAIL,
            subject: `New Contact Request from ${name}. (soundproof contact)`,
            text: `You have received a new message from ${name} (${email}):\n\n${message}`,
            html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`
        });

        return { success: true, message: "Your message has been sent successfully!" };
    } catch (error) {
        console.error("Error sending contact email:", error);
        return { success: false, message: "Failed to send message. Please try again." };
    }
}
