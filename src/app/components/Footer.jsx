import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-300 mt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        
        
        <div className="flex flex-col gap-3 w-fit mx-auto text-center">
          <span className="text-lg font-semibold text-gray-800">
            Soundproof Creations
          </span>
          <p className="text-sm text-gray-600 max-w-xs">
            Decorative acoustic panels and curtains designed to improve sound
            comfort and elevate modern interiors.
          </p>
        </div>

        
        <div className="flex flex-col gap-3 w-fit mx-auto text-center">
          <span className="text-sm font-semibold text-gray-800">
            Navigation
          </span>
          <nav className="flex flex-col gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900">Home</Link>
            <Link href="/products" className="hover:text-gray-900">Products</Link>
            <Link href="/blog" className="hover:text-gray-900">Blog</Link>
            <Link href="/about" className="hover:text-gray-900">About</Link>
            <Link href="/contact" className="hover:text-gray-900">Contact</Link>
          </nav>
        </div>

        
        <div className="flex flex-col gap-3 w-fit mx-auto text-center">
          <span className="text-sm font-semibold text-gray-800">
            Our Focus
          </span>
          <ul className="text-sm text-gray-600 flex flex-col gap-2">
            <li>• Sound Absorbing Panels</li>
            <li>• Blackout & Acoustic Curtains</li>
            <li>• Home & Studio Solutions</li>
          </ul>
        </div>

      </div>

      
      <div className="border-t border-gray-200">
        
          <span className="block text-center py-2">© {new Date().getFullYear()} Soundproof Creations. All rights reserved.</span>
        
      </div>
    </footer>
  );
}