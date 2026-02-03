import { NextResponse } from "next/server";
import { connectDB } from "@/lib/connectdb";
import Product from "@/lib/models/Product";

const itemsPerPage = 6;

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const category = searchParams.get("category");
  
  const currentPage = Number(searchParams.get("page") || 1);

  const skipCount = (currentPage - 1) * itemsPerPage;
  console.log(category);
  const filter = {};

  if (category && category !== "null" && category !== "undefined") {
  filter.category = category;
}
  

  await connectDB();

  const data = await Product.find(filter)
    .skip(skipCount)
    .limit(itemsPerPage);

  const totalItems = await Product.countDocuments(filter);
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  return NextResponse.json({
    products: data,
    totalItems,
    totalPages,
    currentPage
  });
}
