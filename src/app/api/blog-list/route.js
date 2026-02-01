import { NextResponse } from "next/server";
import Blog from "@/lib/models/Blog";
import { connectDB } from "@/lib/connectdb";

export async function GET() {
    await connectDB();
    const blogList = await Blog.find({}).lean();
    return NextResponse.json(blogList);
}