import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    mobileTitle: {
        type: String,
        required: true
    },
    mobileDescription: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    intro: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    images: [
        {
            type: String,
            required: true,
            trim: true,
        },
    ],
    imagesText: [
        {
            type: String,
            required: true,
        }
    ],
    imagesTextTitle: [
        {
            type: String,
            required: true,
        }
    ],
    tips1: {
        type: String,
        required: true,
    },
    tips1Answer: [
        {
            type: String,
            required: true,
        }
    ],
    tips2: {
        type: String,
        required: true,
    },
    tips2Answer: [
        {
            type: String,
            required: true,
        }
    ],
    closingParagraph: {
        required: true,
        type: String,
    },
    seo: {
        metaTitle: {
            required: true,
            type: String,
        },
        metaDescription: {
            required: true,
            type: String,
        },
        canonicalUrl: {
            required: true,
            type: String,
        }
    },
},
    { timestamps: true },
);
export default mongoose.models.Blog ||
    mongoose.model("Blog", BlogSchema);