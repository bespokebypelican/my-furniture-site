"use client"
import { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import '../styles/carousel.css';
import RevealText from './components/RevealText';
import AnnouncementBar from './components/AnnouncementBar';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import SofaSketchSection from './components/SofaSketchSection';
import MasonryGallery from './components/MasonryGallery';
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import Footer from './components/Footer';

const ClientLogosCarousel = dynamic(() => import('./components/ClientLogosCarousel'), { ssr: false });

export default function App() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');

  const scrollFired = useRef({ 50: false, 100: false });
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (scrolled >= 50 && !scrollFired.current[50]) {
        scrollFired.current[50] = true;
        window.gtag?.('event', 'scroll_depth_50');
      }
      if (scrolled >= 100 && !scrollFired.current[100]) {
        scrollFired.current[100] = true;
        window.gtag?.('event', 'scroll_depth_100');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    setFormError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setFormStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (err: any) {
      setFormStatus('error');
      setFormError(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="w-full min-h-screen" style={{ backgroundColor: '#F7F4EE', fontFamily: "'Montserrat', sans-serif" }}>
      <AnnouncementBar />
      <Navigation />
      <HeroSection />
      <SofaSketchSection />
      <MasonryGallery id="inspiration" />

      {/* Process Section - Cinematic Editorial Design */}
      <div className="w-full" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        {/* Top Intro Text */}
        <section className="w-full px-4 md:px-8" style={{ backgroundColor: '#F7F4EE', padding: '64px 32px' }}>
          <div className="max-w-[800px] mx-auto flex flex-col items-center text-center">
            <p style={{ color: '#6B6560', fontSize: '17px', lineHeight: 2, letterSpacing: '0.01em', fontWeight: 300 }}>
              We believe every project presents an opportunity for exploration and innovation
              We are committed to enhance your spaces with function & aesthetics, executing with highest level of conduct and a culmination that exceeds expectations.
            </p>
          </div>
        </section>

        {/* Section 1 - DISCOVERY (Text Left) */}
        <section className="w-full">
          {/* Mobile Layout - Stacked */}
          <div className="md:hidden px-4 py-10 bg-white">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#666] mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              01 — The Beginning
            </p>
            <h2 className="uppercase tracking-[0.2em] text-[#1a1a1a] text-[24px] mb-4 leading-tight" style={{ fontFamily: "'Playfair Display SC', serif" }}>
              Discovery
            </h2>
            <div className="w-full mb-5">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1618220179428-22790b461013?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZnVybml0dXJlJTIwZGVzaWduJTIwc2tldGNofGVufDF8fHx8MTc3NzM2MzQ1M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Discovery phase"
                className="w-full h-[240px] object-cover grayscale-[30%]"
              />
            </div>
            <p className="text-[#4a4a4a] text-[16px] leading-[1.9] tracking-[0.01em]">
              The first step is to navigate through the numerous, seemingly infinite, choices of this world. We help you find the right designs that not just fit your space but are more, an extension of self
            </p>
          </div>

          {/* Desktop Layout - Cinematic (unchanged) */}
          <div className="hidden md:block relative min-h-[580px] lg:min-h-[660px] flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1618220179428-22790b461013?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZnVybml0dXJlJTIwZGVzaWduJTIwc2tldGNofGVufDF8fHx8MTc3NzM2MzQ1M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Discovery phase"
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(30%) brightness(0.85)' }}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
            </div>

            {/* Large Faded Number */}
            <div className="absolute left-0 md:left-[5%] top-1/2 -translate-y-1/2 pointer-events-none">
              <span className="text-[280px] lg:text-[380px] leading-none opacity-[0.08] text-white" style={{ fontFamily: "'Playfair Display SC', serif" }}>
                01
              </span>
            </div>

            {/* Content Panel */}
            <div className="relative z-10 w-full px-8 lg:px-16 py-12 flex items-center min-h-[580px] lg:min-h-[660px]">
              <div className="max-w-[600px]">
                {/* Floating Glass Panel */}
                <div className="bg-white/90 backdrop-blur-md p-10 lg:p-12 shadow-lg">
                  {/* Label */}
                  <p className="text-[12px] uppercase tracking-[0.25em] text-[#666] mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    01 — The Beginning
                  </p>

                  {/* Divider */}
                  <div className="w-16 h-[1px] bg-[#ccc] mb-8"></div>

                  {/* Heading */}
                  <h2 className="uppercase tracking-[0.25em] text-[#1a1a1a] text-[28px] lg:text-[32px] mb-6 leading-tight" style={{ fontFamily: "'Playfair Display SC', serif" }}>
                    <RevealText text="Discovery" />
                  </h2>

                  {/* Body Text */}
                  <p className="text-[#4a4a4a] text-[17px] leading-[2] tracking-[0.01em]">
                    The first step is to navigate through the numerous, seemingly infinite, choices of this world. We help you find the right designs that not just fit your space but are more, an extension of self
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 - PRODUCT DESIGN (Text Right) */}
        <section className="w-full">
          {/* Mobile Layout - Stacked */}
          <div className="md:hidden px-4 py-10 bg-white">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#666] mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              02 — Refinement
            </p>
            <h2 className="uppercase tracking-[0.2em] text-[#1a1a1a] text-[24px] mb-4 leading-tight" style={{ fontFamily: "'Playfair Display SC', serif" }}>
              Product Design
            </h2>
            <div className="w-full mb-5">
              <ImageWithFallback
                src="/Product-design.jpg"
                alt="Product design phase"
                className="w-full h-[240px] object-cover grayscale-[25%]"
              />
            </div>
            <p className="text-[#4a4a4a] text-[16px] leading-[1.9] tracking-[0.01em]">
              Product design merges functionality, aesthetics, and user experience to transform abstract ideas into tangible, manageable forms
              It is where creativity meets rigorous technical execution, applying science, mathematics, and engineering principles, as we precisely define the blueprint.
            </p>
          </div>

          {/* Desktop Layout - Cinematic (unchanged) */}
          <div className="hidden md:block relative min-h-[580px] lg:min-h-[660px] flex items-center justify-end overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <ImageWithFallback
                src="/Product-design.jpg"
                alt="Product design phase"
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(25%) brightness(0.88)' }}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/40 to-transparent"></div>
            </div>

            {/* Large Faded Number */}
            <div className="absolute right-0 md:right-[5%] top-1/2 -translate-y-1/2 pointer-events-none">
              <span className="text-[280px] lg:text-[380px] leading-none opacity-[0.08] text-white" style={{ fontFamily: "'Playfair Display SC', serif" }}>
                02
              </span>
            </div>

            {/* Content Panel */}
            <div className="relative z-10 w-full px-8 lg:px-16 py-10 flex items-center justify-end min-h-[580px] lg:min-h-[660px]">
              <div className="max-w-[580px]">
                {/* Floating Glass Panel */}
                <div className="bg-white/90 backdrop-blur-md p-8 lg:p-10 shadow-lg">
                  {/* Label */}
                  <p className="text-[12px] uppercase tracking-[0.25em] text-[#666] mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    02 — Refinement
                  </p>

                  {/* Divider */}
                  <div className="w-16 h-[1px] bg-[#ccc] mb-8"></div>

                  {/* Heading */}
                  <h2 className="uppercase tracking-[0.25em] text-[#1a1a1a] text-[28px] lg:text-[32px] mb-6 leading-tight" style={{ fontFamily: "'Playfair Display SC', serif" }}>
                    Product Design
                  </h2>

                  {/* Body Text */}
                  <p className="text-[#4a4a4a] text-[17px] leading-[2] tracking-[0.01em]">
                    Product design merges functionality, aesthetics, and user experience to transform abstract ideas into tangible, manageable forms
                    It is where creativity meets rigorous technical execution, applying science, mathematics, and engineering principles, as we precisely define the blueprint.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 - DEVELOPMENT (Text Left) */}
        <section className="w-full">
          {/* Mobile Layout - Stacked */}
          <div className="md:hidden px-4 py-10 bg-white">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#666] mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              03 — Realisation
            </p>
            <h2 className="uppercase tracking-[0.2em] text-[#1a1a1a] text-[24px] mb-4 leading-tight" style={{ fontFamily: "'Playfair Display SC', serif" }}>
              Development
            </h2>
            <div className="w-full mb-5">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1768144092684-c1a5dd6c7aad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBsdXh1cnklMjBzb2ZhJTIwbmV1dHJhbCUyMHRvbmVzJTIwZnVybml0dXJlfGVufDF8fHx8MTc3NzM2MzQ1M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Development phase"
                className="w-full h-[240px] object-cover grayscale-[20%]"
              />
            </div>
            <p className="text-[#4a4a4a] text-[16px] leading-[1.9] tracking-[0.01em]">
              Beyond the specification and into the theater of its creation as we bring the design to tangibility.
              When a piece is commissioned rather than "bought," the creation stage ceases to be a linear process of assembly and becomes a balanced blend of technical manufacturing and soulful crafting.
            </p>
          </div>

          {/* Desktop Layout - Cinematic (unchanged) */}
          <div className="hidden md:block relative min-h-[580px] lg:min-h-[660px] flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1768144092684-c1a5dd6c7aad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBsdXh1cnklMjBzb2ZhJTIwbmV1dHJhbCUyMHRvbmVzJTIwZnVybml0dXJlfGVufDF8fHx8MTc3NzM2MzQ1M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Development phase"
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(20%) brightness(0.80)' }}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-transparent"></div>
            </div>

            {/* Large Faded Number */}
            <div className="absolute left-0 md:left-[5%] top-1/2 -translate-y-1/2 pointer-events-none">
              <span className="text-[280px] lg:text-[380px] leading-none opacity-[0.08] text-white" style={{ fontFamily: "'Playfair Display SC', serif" }}>
                03
              </span>
            </div>

            {/* Content Panel */}
            <div className="relative z-10 w-full px-8 lg:px-16 py-10 flex items-center min-h-[580px] lg:min-h-[660px]">
              <div className="max-w-[580px]">
                {/* Floating Glass Panel */}
                <div className="bg-white/90 backdrop-blur-md p-8 lg:p-10 shadow-lg">
                  {/* Label */}
                  <p className="text-[12px] uppercase tracking-[0.25em] text-[#666] mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    03 — Realisation
                  </p>

                  {/* Divider */}
                  <div className="w-16 h-[1px] bg-[#ccc] mb-8"></div>

                  {/* Heading */}
                  <h2 className="uppercase tracking-[0.25em] text-[#1a1a1a] text-[28px] lg:text-[32px] mb-6 leading-tight" style={{ fontFamily: "'Playfair Display SC', serif" }}>
                    <RevealText text="Development" />
                  </h2>

                  {/* Body Text */}
                  <p className="text-[#4a4a4a] text-[17px] leading-[2] tracking-[0.01em]">
                    Beyond the specification and into the theater of its creation as we bring the design to tangibility.
                    When a piece is commissioned rather than "bought," the creation stage ceases to be a linear process of assembly and becomes a balanced blend of technical manufacturing and soulful crafting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <ClientLogosCarousel />

      {/* Contact Form Section */}
      <section id="contact" className="w-full px-4 md:px-8" style={{ backgroundColor: '#EDE9E0', padding: '64px 32px' }}>
        <div className="max-w-[1000px] mx-auto flex flex-col items-center">
          <h2 className="text-center text-[32px] md:text-[42px] lg:text-[48px] mb-[32px] md:mb-[40px] lg:mb-[48px] text-[#2a2a2a] tracking-tight" style={{ fontFamily: "'Playfair Display SC', serif" }}>
            <RevealText text="Contact" />
          </h2>
          <div className="w-full max-w-[800px]">
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { type: 'text', name: 'name', placeholder: 'Name (optional)', required: false },
                { type: 'tel', name: 'phone', placeholder: 'Phone Number *', required: true },
                { type: 'email', name: 'email', placeholder: 'Email (optional)', required: false },
              ].map(({ type, name, placeholder, required }) => (
                <input
                  key={name}
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  value={formData[name as keyof typeof formData]}
                  onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
                  required={required}
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '10px 0',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid #C2BDB8',
                    fontSize: '14px',
                    color: '#1A1A1A',
                    outline: 'none',
                    borderRadius: 0,
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 300,
                    transition: 'border-color 0.3s ease',
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderBottomColor = '#C9A96E'; }}
                  onBlur={(e) => { e.currentTarget.style.borderBottomColor = '#C2BDB8'; }}
                />
              ))}
              <textarea
                name="message"
                placeholder="Message *"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px 0',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid #C2BDB8',
                  fontSize: '14px',
                  color: '#1A1A1A',
                  outline: 'none',
                  borderRadius: 0,
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 300,
                  resize: 'none',
                  transition: 'border-color 0.3s ease',
                }}
                onFocus={(e) => { e.currentTarget.style.borderBottomColor = '#C9A96E'; }}
                onBlur={(e) => { e.currentTarget.style.borderBottomColor = '#C2BDB8'; }}
              />
              {formStatus === 'success' && (
                <p style={{ fontSize: '13px', color: '#2e7d32', textAlign: 'center', fontFamily: "'Montserrat', sans-serif" }}>Message sent! We'll be in touch soon.</p>
              )}
              {formStatus === 'error' && (
                <p style={{ fontSize: '13px', color: '#c62828', textAlign: 'center', fontFamily: "'Montserrat', sans-serif" }}>{formError}</p>
              )}
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                style={{
                  width: '100%',
                  backgroundColor: '#1A1A1A',
                  color: '#C9A96E',
                  border: 'none',
                  borderRadius: 0,
                  padding: '14px 28px',
                  fontSize: '11px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  fontFamily: "'Montserrat', sans-serif",
                  cursor: formStatus === 'submitting' ? 'not-allowed' : 'pointer',
                  opacity: formStatus === 'submitting' ? 0.6 : 1,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  if (formStatus !== 'submitting') {
                    e.currentTarget.style.backgroundColor = '#C9A96E';
                    e.currentTarget.style.color = '#1A1A1A';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#1A1A1A';
                  e.currentTarget.style.color = '#C9A96E';
                }}
              >
                {formStatus === 'submitting' ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}