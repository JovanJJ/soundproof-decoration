import search from "../../../public/search.svg";
import Image from "next/image";

export default function NavBar(){
    
    return(
        <nav className="absolute right-0 left-0 z-50  px-10 h-[60px] flex items-center justify-between">
            <div>
                <h2>Sound proof</h2>
            </div>
            <div>
                <ul className="flex gap-7 text-xl text-gray-600">
                    <li className="hover:text-black cursor-pointer transition">Home</li>
                    <li className="hover:text-black cursor-pointer transition">Products</li>
                    <li className="hover:text-black cursor-pointer transition">Blog</li>
                    <li className="hover:text-black cursor-pointer transition">About</li>
                    <li className="hover:text-black cursor-pointer transition">Contact</li>
                </ul>
            </div>
            <div className="right">
                
            </div>
        </nav>
    );
}