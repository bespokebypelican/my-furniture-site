"use client"
import { useState } from 'react';
import Link from 'next/link';
import { Search, Menu, X } from 'lucide-react';
const logoImage = '/Untitled_design_(5).png';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white px-4 md:px-8 py-4 md:py-5 shadow-sm">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo Image */}
        <div className="h-8 md:h-10">
          <img
            src={logoImage}
            alt="Brand Logo"
            className="h-full w-auto object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          <Link
            href="/"
            className="text-[13px] tracking-wide transition-all duration-300 hover:text-gray-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            Home
          </Link>
          <Link
            href="/inspiration"
            className="text-[13px] tracking-wide transition-all duration-300 hover:text-gray-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            Inspiration
          </Link>
          <Link
            href="/contact"
            className="text-[13px] tracking-wide transition-all duration-300 hover:text-gray-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            style={{ fontFamily: "'Nunito Sans', sans-serif" }}
          >
            Contact Us
          </Link>
          <button
            className="transition-all duration-300 hover:text-gray-300 hover:scale-110"
            aria-label="Search"
          >
            <Search size={17} strokeWidth={2} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden transition-all duration-300 hover:text-gray-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-6 pt-6 border-t border-white/10">
          <div className="flex flex-col gap-5">
            <Link
              href="/"
              className="text-[13px] tracking-wide transition-all duration-300 hover:text-gray-300 py-2"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/inspiration"
              className="text-[13px] tracking-wide transition-all duration-300 hover:text-gray-300 py-2"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Inspiration
            </Link>
            <Link
              href="/contact"
              className="text-[13px] tracking-wide transition-all duration-300 hover:text-gray-300 py-2"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <button
              className="text-left flex items-center gap-2 text-[13px] tracking-wide transition-all duration-300 hover:text-gray-300 py-2"
              aria-label="Search"
            >
              <Search size={17} strokeWidth={2} />
              Search
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
