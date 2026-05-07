"use client"
import { useState } from 'react';

const montserrat = { fontFamily: "'Montserrat', sans-serif" };
const playfair = { fontFamily: "'Playfair Display SC', serif" };

const footerLink = {
  fontSize: '13px',
  color: '#6B6560',
  textDecoration: 'none',
  letterSpacing: '0.01em',
  transition: 'color 0.3s ease',
  ...montserrat,
} as React.CSSProperties;

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterEmail('');
  };

  const hoverGold = (e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.color = '#C9A96E'; };
  const unhoverGold = (e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.color = '#6B6560'; };

  return (
    <footer style={{ backgroundColor: '#1A1A1A', borderTop: '1px solid #C9A96E', width: '100%', padding: '60px 40px' }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[48px] lg:gap-[56px] mb-[48px] md:mb-[56px]">

          {/* Column 1 */}
          <div className="flex flex-col gap-[20px]">
            <h3 style={{ ...montserrat, fontSize: '13px', color: '#EDE9E0', letterSpacing: '0.02em', lineHeight: 1.6 }}>
              Other brands and offerings from Pelican:
            </h3>
            <div className="flex flex-col gap-[12px]">
              <div className="w-[140px] h-[60px] bg-[#222] flex items-center justify-center">
                <span style={{ ...montserrat, fontSize: '11px', color: '#888', letterSpacing: '0.06em' }}>LOGO</span>
              </div>
              <p style={{ ...montserrat, fontSize: '13px', color: '#6B6560', letterSpacing: '0.01em' }}>
                Category defining sofas
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-[16px]">
            <h3 style={{ ...playfair, fontSize: '16px', color: '#EDE9E0', letterSpacing: '0.05em' }}>
              Bespoke By Pelican
            </h3>
            <p style={{ ...montserrat, fontSize: '14px', color: '#EDE9E0', fontStyle: 'italic', letterSpacing: '0.02em' }}>
              Never Ordinary
            </p>
            <p style={{ ...montserrat, fontSize: '13px', color: '#6B6560', lineHeight: 1.7, letterSpacing: '0.01em' }}>
              An internet-first brand of home furniture solutions designed & developed to customer's requirement.
            </p>
            <div style={{ ...montserrat, fontSize: '12px', color: '#6B6560', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <p>Constellate Manufacturing Private Limited</p>
              <p>bespokebypelican@gmail.com</p>
              <p style={{ marginTop: '6px' }}>CIN: U74999KA2018PTC112703</p>
              <p>GST No.: 29AAHCC5490Q1ZS</p>
              <p style={{ marginTop: '6px' }}>Delivery Partner: Delhivery Logistics</p>
              <p style={{ marginTop: '6px', color: '#EDE9E0', fontWeight: 500 }}>1800-833-0046</p>
              <p style={{ fontSize: '11px', color: '#888' }}>(9am–8pm)</p>
            </div>
          </div>

          {/* Column 3 - Links */}
          <div className="flex flex-col gap-[20px]">
            <nav className="flex flex-col gap-[10px]">
              {[['/about', 'About Us'], ['/blogs', 'Blogs'], ['/terms', 'Terms of Service'], ['/privacy', 'Privacy Policy'], ['/shipping', 'Shipping Policy'], ['/warranty', 'Warranty'], ['/faqs', 'FAQs'], ['/contact', 'Contact Us']].map(([href, label]) => (
                <a key={label} href={href} style={footerLink} onMouseEnter={hoverGold} onMouseLeave={unhoverGold}>
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 4 - Newsletter */}
          <div className="flex flex-col gap-[16px]">
            <h3 style={{ ...playfair, fontSize: '16px', color: '#EDE9E0', letterSpacing: '0.05em' }}>
              Newsletter
            </h3>
            <p style={{ ...montserrat, fontSize: '13px', color: '#6B6560', lineHeight: 1.7, letterSpacing: '0.01em' }}>
              Sign up to our newsletter to receive exclusive offers
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-[10px]">
              <input
                type="email"
                placeholder="E-mail"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                style={{
                  ...montserrat,
                  width: '100%',
                  padding: '12px 14px',
                  border: '1px solid #333',
                  backgroundColor: '#111',
                  color: '#EDE9E0',
                  fontSize: '13px',
                  outline: 'none',
                  borderRadius: 0,
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = '#C9A96E'; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = '#333'; }}
              />
              <button
                type="submit"
                style={{
                  ...montserrat,
                  width: '100%',
                  backgroundColor: '#1A1A1A',
                  color: '#C9A96E',
                  border: '1px solid #C9A96E',
                  padding: '12px 16px',
                  fontSize: '11px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  borderRadius: 0,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#C9A96E'; e.currentTarget.style.color = '#1A1A1A'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#1A1A1A'; e.currentTarget.style.color = '#C9A96E'; }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-[24px] pt-[32px] md:pt-[40px]" style={{ borderTop: '1px solid #2a2a2a' }}>
          {[
            <svg key="ig" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>,
            <svg key="pin" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M17 8l-5-5-5 5"/><path d="M12 3v12"/><path d="M3.5 21h17"/></svg>,
            <svg key="li" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
            <svg key="yt" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>,
          ].map((icon) => (
            <a
              key={(icon as React.ReactElement).key}
              href="#"
              style={{ color: '#6B6560', transition: 'color 0.3s ease' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#C9A96E'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#6B6560'; }}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
