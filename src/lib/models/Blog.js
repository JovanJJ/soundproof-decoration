import mongoose from "mongoose";
import { type } from "os";
import { title } from "process";
import { images } from "../../../next.config";

const BlogSchema = new mongoose.Schema({
    cardTitle: {
        type: String,
        required: true
    },
    cardDescription: {
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
    },
    images: [
        {
            type: String,
            required: true,
            trim: true,
        },
    ],
    imageText: [
        {
            type: String,
            required: true,
        }
    ],
    tips1: {
        type: String,
        required: true,
    },
    tips1Anwswer: [
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
    }
});
export default mongoose.models.Blog ||
mongoose.model("Blog", BlogSchema);