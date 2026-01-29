import { NextResponse } from "next/server";
import { connectDB } from "@/lib/connectdb";
import Product from "@/lib/models/Product";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const slug = searchParams.get('slug');
    await connectDB();
    const data = await Product.find({slug}).lean();

    return NextResponse.json(data);
}