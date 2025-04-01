"use client"
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="bg-yellow-500 w-10 h-10 rounded-full"></div>
          <Link href="/" className="text-2xl font-bold ml-3">
            GreatIndian.com
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
          <li><Link href="/Menu" className="hover:text-yellow-400">Menu</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <ul className={`md:hidden flex flex-col bg-gray-800 text-center transition-all ${menuOpen ? "block" : "hidden"}`}>
      <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
          <li><Link href="/Menu" className="hover:text-yellow-400">Menu</Link></li>
      </ul>
    </nav>
  );
}
