import search from "../../../public/search.svg";
import Image from "next/image";

export default function NavBar(){
    
    return(
        <nav className="bg-white px-10 h-[60px] flex items-center justify-between">
            <div className="left">
                <h2>Sound proof</h2>
            </div>
            <div className="middle relative">
                <input type="text" className="border border-gray-300  outline-none px-5 py-2 rounded-full text-xl " />
                <Image src={search} alt="img" className="w-[30px] absolute right-5 top-2.5 cursor-pointer" />
            </div>
            <div className="right">
                
            </div>
        </nav>
    );
}