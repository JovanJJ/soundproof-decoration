import { NextResponse } from "next/server";
import { connectDB } from "@/lib/connectdb";
import Product from "@/lib/models/Product";

export async function GET(req){
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");

    await connectDB();

    let data;
    if(category === "all") {
        data = await Product.find();
    }

    if(category === "panels") {
        data = await Product.find({category});
    }

    if(category === "curtains") {
        data = await Product.find({category});
    }

    return NextResponse.json(data);
}