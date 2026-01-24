import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
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
        features: [
            {
                type: String,
            }
        ],
        images: [
            {
                type: String,
                trim: true,
            }
        ],
        category: {
            type: String,
        },
        brand: {
            type: String,
        },
        affiliateUrl: {
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