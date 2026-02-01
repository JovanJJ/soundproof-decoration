import { NextResponse } from "next/server";
import Blog from "@/lib/models/Blog";
import { connectDB } from "@/lib/connectdb";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get("slug");
    
    await connectDB();
    const blog = await Blog.find({slug});

    return NextResponse.json(blog);
}