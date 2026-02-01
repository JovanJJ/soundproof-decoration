import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        mobileTitle: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        },
        shortDescription: {
            type: String,
            required: true,
        },
        descriptionInto: {
            type: String,
        },
        description: {
            type: String,
        },
        features: [
            {
                type: String,
            }
        ],
        image: [
            {
                type: String,
                trim: true,
            }
        ],
        category: {
            type: String,
        },
        color: {
            type: String,
        },
        brand: {
            type: String,
        },
        affiliateUrl: {
            type: String,
        },
        size: {
            type: String,
        },
        seo: {
            metaTitle: {
                type: String,
                trim: true,
                required: true,
            },
            metaDescription: {
                type: String,
                required: true,
                trim: true,
            },
            canonicalUrl: {
                type: String,
                required: true,
                trim: true,
            },
        }   
    },
    {timestamps: true}
);

export default mongoose.models.Product ||
mongoose.model("Product", ProductSchema);