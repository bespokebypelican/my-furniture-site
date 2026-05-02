"use client"
import { useState } from 'react';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', newsletterEmail);
    setNewsletterEmail('');
  };

  return (
    <footer className="w-full bg-black py-[60px] md:py-[70px] lg:py-[80px] px-[40px] md:px-[50px] lg:px-[60px]">
      <div className="max-w-[1400px] mx-auto">
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[48px] lg:gap-[56px] mb-[48px] md:mb-[56px]">

          {/* Column 1 - Pelican Essentials */}
          <div className="flex flex-col gap-[20px]">
            <h3 className="text-[13px] md:text-[14px] text-white tracking-[0.02em] leading-[1.6]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              Other brands and offerings from Pelican:
            </h3>
            <div className="flex flex-col gap-[12px]">
              <div className="w-[140px] h-[60px] bg-[#222] flex items-center justify-center">
                <span className="text-[11px] text-[#888] tracking-wide" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>LOGO</span>
              </div>
              <p className="text-[13px] text-[#a0a0a0] tracking-[0.01em]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                Category defining sofas
              </p>
            </div>
          </div>

          {/* Column 2 - Bespoke By Pelican */}
          <div className="flex flex-col gap-[16px]">
            <h3 className="text-[16px] md:text-[17px] text-white tracking-[0.05em] mb-[4px]" style={{ fontFamily: "'Playfair Display SC', serif" }}>
              Bespoke By Pelican
            </h3>
            <p className="text-[14px] text-[#d0d0d0] italic tracking-[0.02em] mb-[8px]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              Never Ordinary
            </p>
            <p className="text-[13px] text-[#a0a0a0] leading-[1.7] tracking-[0.01em] mb-[12px]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              An internet-first brand of home furniture solutions designed & developed to customer's requirement.
            </p>
            <div className="text-[12px] text-[#a0a0a0] leading-[1.8] tracking-[0.005em] flex flex-col gap-[4px]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              <p>Constellate Manufacturing Private Limited</p>
              <p>bespokebypelican@gmail.com</p>
              <p className="mt-[6px]">CIN: U74999KA2018PTC112703</p>
              <p>GST No.: 29AAHCC5490Q1ZS</p>
              <p className="mt-[6px]">Delivery Partner: Delhivery Logistics</p>
              <p className="mt-[6px] font-medium text-white">1800-833-0046</p>
              <p className="text-[11px] text-[#888]">(9am–8pm)</p>
            </div>
          </div>

          {/* Column 3 - Links */}
          <div className="flex flex-col gap-[20px]">
            <nav className="flex flex-col gap-[10px]">
              <a href="#" className="text-[13px] text-[#a0a0a0] hover:text-white transition-colors duration-300 tracking-[0.01em]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                About Us
              </a>
              <a href="#" className="text-[13px] text-[#a0a0a0] hover:text-white transition-colors duration-300 tracking-[0.01em]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                Blogs
              </a>
              <a href="#" className="text-[13px] text-[#a0a0a0] hover:text-white transition-colors duration-300 tracking-[0.01em]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                Terms of Service
              </a>
              <a href="#" className="text-[13px] text-[#a0a0a0] hover:text-white transition-colors duration-300 tracking-[0.01em]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                Privacy Policy
              </a>
              <a href="#" className="text-[13px] text-[#a0a0a0] hover:text-white transition-colors duration-300 tracking-[0.01em]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                Shipping Policy
              </a>
              <a href="#" className="text-[13px] text-[#a0a0a0] hover:text-white transition-colors duration-300 tracking-[0.01em]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                Warranty
              </a>
              <a href="#" className="text-[13px] text-[#a0a0a0] hover:text-white transition-colors duration-300 tracking-[0.01em]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                FAQs
              </a>
              <a href="/contact" className="text-[13px] text-[#a0a0a0] hover:text-white transition-colors duration-300 tracking-[0.01em]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                Contact Us
              </a>
            </nav>
          </div>

          {/* Column 4 - Newsletter */}
          <div className="flex flex-col gap-[16px]">
            <h3 className="text-[16px] md:text-[17px] text-white tracking-[0.05em]" style={{ fontFamily: "'Playfair Display SC', serif" }}>
              Newsletter
            </h3>
            <p className="text-[13px] text-[#a0a0a0] leading-[1.7] tracking-[0.01em]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              Sign up to our newsletter to receive exclusive offers
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-[10px]">
              <input
                type="email"
                placeholder="E-mail"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="w-full px-[14px] py-[12px] border border-[#444] bg-[#111] text-white text-[13px] focus:outline-none focus:border-white transition-all duration-300 placeholder:text-[#666]"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              />
              <button
                type="submit"
                className="w-full bg-white text-black py-[12px] px-[16px] text-[13px] hover:bg-[#e0e0e0] transition-all duration-300 uppercase tracking-[0.12em] font-medium"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Icons - Bottom Row */}
        <div className="flex justify-center items-center gap-[24px] pt-[32px] md:pt-[40px]">
          <a href="#" className="text-[#a0a0a0] hover:text-white transition-all duration-300 hover:scale-110">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <a href="#" className="text-[#a0a0a0] hover:text-white transition-all duration-300 hover:scale-110">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <path d="M17 8l-5-5-5 5"/>
              <path d="M12 3v12"/>
              <path d="M3.5 21h17"/>
            </svg>
          </a>
          <a href="#" className="text-[#a0a0a0] hover:text-white transition-all duration-300 hover:scale-110">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
          <a href="#" className="text-[#a0a0a0] hover:text-white transition-all duration-300 hover:scale-110">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
