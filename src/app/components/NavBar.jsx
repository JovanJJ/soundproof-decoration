"use client";

import search from "../../../public/search.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar(){
    const pathname = usePathname();
    const isBlog = pathname.startsWith("/blog");
    const isAbout = pathname.startsWith("/about");
    const isContact = pathname.startsWith("/contact");
    return(
        <nav className="absolute right-0 left-0 z-50 px-10 h-[60px] flex items-center justify-between overflow-hidden">
            <div>
                <h2>Sound proof</h2>
            </div>
            <div>
                <ul className={`flex gap-7 text-xl ${isAbout || isContact ?'text-white' :'text-gray-600'}`}>
                    <Link href="/" className={`hover:text-black cursor-pointer transition ${pathname === "/"?'underline':""}`}>Home</Link>
                    <Link href="/products?category=all" className={`hover:text-black cursor-pointer transition ${pathname === "/products"?'underline':""}`}>Products</Link>
                    <Link href="/blog" className={`hover:text-black cursor-pointer transition ${pathname === "/blog"?'underline':""}`}>Blog</Link>
                    <Link href="/about" className={`hover:text-black cursor-pointer transition ${pathname === "/about"?'underline':""}`}>About</Link>
                    <Link href="/contact" className={`hover:text-black cursor-pointer transition ${pathname === "/contact"?'underline':""}`}>Contact</Link>
                </ul>
            </div>
            <div className="right">
                
            </div>
        </nav>
    );
}