"use client";

import menu from "../../../public/menu.svg";
import logo from "../../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const isBlog = pathname.startsWith("/blog");
    const isBlogPost = pathname.startsWith("/blog/");
    const isAbout = pathname.startsWith("/about");
    const isContact = pathname.startsWith("/contact");
    const isProduct = pathname.startsWith("/products");
    
    return (
        <nav className="relative">
            <div className="hidden md:absolute right-0 left-0 z-50 px-10 h-[60px] md:flex items-center justify-between overflow-hidden">
                <div className="relative h-full w-[200px]">
                    <Link href={"/"}>
                    <Image src={logo} fill alt="logo-picture" className="object-cover"  />
                    </Link>
                </div>
                <div>
                    <ul className={`flex gap-7 z-50 text-xl ${isBlogPost && "text-white"}  ${isBlog || isProduct ? 'text-gray-700' : 'text-white'}`}>
                        <Link href="/" className={` cursor-pointer transition  ${pathname === "/" ? 'underline' : ""}`}>Home</Link>
                        <Link href="/products" className={`hover:text-black ${isBlogPost && "hover:text-gray-300"} cursor-pointer transition ${isProduct ? 'underline' : ""}`}>Products</Link>
                        <Link href="/blog" className={`hover:text-black ${isBlogPost && "hover:text-gray-300"} cursor-pointer transition ${isBlog ? 'underline' : ""}`}>Blog</Link>
                        <Link href="/about" className={`hover:text-black ${isBlogPost && "hover:text-gray-300"} cursor-pointer transition ${pathname === "/about" ? 'underline' : ""}`}>About</Link>
                        <Link href="/contact" className={`hover:text-black ${isBlogPost && "hover:text-gray-300"} cursor-pointer transition ${pathname === "/contact" ? 'underline' : ""}`}>Contact</Link>
                    </ul>
                </div> 
                <div className="right w-[200px]">

                </div>
            </div>
            <div className="w-full h-[60px] md:hidden flex items-center justify-between">
                <div>
                    <Image onClick={() => setOpen(prev => !prev)} src={menu} width={30} height={30} alt="menu" className="ml-2 cursor-pointer" />
                </div>
                <Link href={"/"} className="relative h-full w-[100px]">
                    <Image src={logo} fill alt="logo-image" className="object-cover" />
                </Link>
            </div>
            {open &&
            <div className="absolute md:hidden top-[60px] flex flex-col items-center justify-center gap-10 text-xl left-0 right-0 h-[60vh] bg-white/90 z-50 rounded-bl-4xl rounded-br-4xl border-b border-gray-500">
                <Link onClick={() => setOpen(false)} href="/" className={`${pathname === "/" ? 'underline' : ""}`}>Home</Link>
                <Link onClick={() => setOpen(false)} href="/products" className={`${isProduct ? 'underline' : ""}`}>Products</Link>
                <Link onClick={() => setOpen(false)} href="/blog" className={`${isBlog ? 'underline' : ""}`}>Blog</Link>
                <Link onClick={() => setOpen(false)} href="/about" className={`${pathname === "/about" ? 'underline' : ""}`}>About</Link>
                <Link onClick={() => setOpen(false)} href="/contact" className={`${pathname === "/contact" ? 'underline' : ""}`}>Contact</Link>
            </div>
            }
        </nav>
    );
}