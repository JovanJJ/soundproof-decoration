"use client";

import menu from "../../../public/menu.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const isBlog = pathname.startsWith("/blog/");
    const isAbout = pathname.startsWith("/about");
    const isContact = pathname.startsWith("/contact");
    const isProduct = pathname.startsWith("/products");
    return (
        <nav className="relative">
            <div className="hidden md:absolute right-0 left-0 z-50 px-10 h-[60px] md:flex items-center justify-between overflow-hidden">
                <div>
                    <h2>Sound proof</h2>
                </div>
                <div>
                    <ul className={`flex gap-7 text-xl ${isAbout || isContact || isBlog ? 'text-white' : 'text-gray-600'}`}>
                        <Link href="/" className={`hover:text-black cursor-pointer transition ${pathname === "/" ? 'underline' : ""}`}>Home</Link>
                        <Link href="/products?category=all" className={`hover:text-black cursor-pointer transition ${isProduct ? 'underline' : ""}`}>Products</Link>
                        <Link href="/blog" className={`hover:text-black cursor-pointer transition ${isBlog ? 'underline' : ""}`}>Blog</Link>
                        <Link href="/about" className={`hover:text-black cursor-pointer transition ${pathname === "/about" ? 'underline' : ""}`}>About</Link>
                        <Link href="/contact" className={`hover:text-black cursor-pointer transition ${pathname === "/contact" ? 'underline' : ""}`}>Contact</Link>
                    </ul>
                </div>
                <div className="right">

                </div>
            </div>
            <div className="w-full h-[60px] md:hidden  flex items-center">
                <div>
                    <Image onClick={() => setOpen(prev => !prev)} src={menu} width={40} height={40} alt="menu" className="ml-2 cursor-pointer" />
                </div>
            </div>
            {open &&
            <div className="absolute md:hidden top-[60px] flex flex-col items-center justify-center gap-10 text-xl left-0 right-0 h-[60vh] bg-white/90 z-50 rounded-bl-4xl rounded-br-4xl border-b border-gray-500">
                <Link onClick={() => setOpen(false)} href="/" className={`${pathname === "/" ? 'underline' : ""}`}>Home</Link>
                <Link onClick={() => setOpen(false)} href="/products?category=all" className={`${isProduct ? 'underline' : ""}`}>Products</Link>
                <Link onClick={() => setOpen(false)} href="/blog" className={`${isBlog ? 'underline' : ""}`}>Blog</Link>
                <Link onClick={() => setOpen(false)} href="/about" className={`${pathname === "/about" ? 'underline' : ""}`}>About</Link>
                <Link onClick={() => setOpen(false)} href="/contact" className={`${pathname === "/contact" ? 'underline' : ""}`}>Contact</Link>
            </div>
            }
        </nav>
    );
}