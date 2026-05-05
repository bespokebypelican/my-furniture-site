"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
const logoImage = '/Untitled_design_(5).png';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkStyle = (href: string): React.CSSProperties => ({
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '11px',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: '#1A1A1A',
    textDecoration: 'none',
    paddingBottom: '4px',
    borderBottom: pathname === href ? '1px solid #C9A96E' : '1px solid transparent',
    transition: 'border-color 0.3s ease',
  });

  return (
    <nav
      style={{
        width: '100%',
        backgroundColor: '#F7F4EE',
        borderBottom: '1px solid #EDE9E0',
        padding: '16px 32px',
        boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.06)' : 'none',
        transition: 'box-shadow 0.3s ease',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <div className="h-8 md:h-10">
          <img src={logoImage} alt="Brand Logo" className="h-full w-auto object-contain" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {[['/', 'Home'], ['/inspiration', 'Inspiration'], ['/contact', 'Contact Us']].map(([href, label]) => (
            <Link
              key={href}
              href={href}
              style={linkStyle(href)}
              onMouseEnter={(e) => { if (pathname !== href) e.currentTarget.style.borderBottomColor = '#C9A96E'; }}
              onMouseLeave={(e) => { if (pathname !== href) e.currentTarget.style.borderBottomColor = 'transparent'; }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          style={{ color: '#1A1A1A', background: 'none', border: 'none', cursor: 'pointer' }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-5 pt-5" style={{ borderTop: '1px solid #EDE9E0' }}>
          <div className="flex flex-col gap-5">
            {[['/', 'Home'], ['/inspiration', 'Inspiration'], ['/contact', 'Contact Us']].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                style={linkStyle(href)}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
