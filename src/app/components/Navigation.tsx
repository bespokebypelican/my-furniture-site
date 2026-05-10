"use client"
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  ['/', 'Home'],
  ['/inspiration', 'Inspiration'],
  ['/contact', 'Contact Us'],
] as const;

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <style>{`
        .nav-link {
          position: relative;
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          padding-bottom: 4px;
          color: #E8E6E0;
          transition: color 0.25s ease;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background-color: #C9A96E;
          transition: width 0.25s ease;
        }
        .nav-link:hover {
          color: #C9A96E;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-link.active {
          color: #C9A96E;
        }
        .nav-link.active::after {
          width: 100%;
        }
      `}</style>

      <nav
        style={{
          width: '100%',
          backgroundColor: '#111111',
          borderBottom: '1px solid #222222',
          padding: '16px 32px',
          position: 'sticky',
          top: 0,
          zIndex: 50,
        }}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <Link href="/" className="block">
            <span className="hidden md:block">
              <img src="/Navbar-logo.png" alt="Bespoke By Pelican" className="h-10 w-auto object-contain" />
            </span>
            <span className="block md:hidden">
              <img src="/logophonenew.png" alt="Bespoke By Pelican" style={{ height: '40px', width: 'auto', objectFit: 'contain', filter: 'brightness(1.1) contrast(1.1)' }} />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className={`nav-link${isActive(href) ? ' active' : ''}`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            style={{ color: '#E8E6E0', background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-5 pt-5" style={{ borderTop: '1px solid #222222' }}>
            <div className="flex flex-col gap-5">
              {navLinks.map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  className={`nav-link${isActive(href) ? ' active' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
