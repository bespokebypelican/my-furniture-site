"use client"
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/carousel.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AnnouncementBar from './components/AnnouncementBar';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import SofaSketchSection from './components/SofaSketchSection';
import MasonryGallery from './components/MasonryGallery';
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import Footer from './components/Footer';

const CustomPrevArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white hover:scale-110 p-3 shadow-sm hover:shadow-md transition-all duration-300"
    aria-label="Previous"
  >
    <ChevronLeft size={20} className="text-[#2a2a2a]" strokeWidth={2.5} />
  </button>
);

const CustomNextArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white hover:scale-110 p-3 shadow-sm hover:shadow-md transition-all duration-300"
    aria-label="Next"
  >
    <ChevronRight size={20} className="text-[#2a2a2a]" strokeWidth={2.5} />
  </button>
);

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const clientLogos = [
    'https://images.unsplash.com/photo-1660792734675-63a875d406b3?w=250&h=100&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1769985090420-087bc0a62ba3?w=250&h=100&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1597979732130-9d2ad18df38b?w=250&h=100&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1719716133741-9f8f35b3cb04?w=250&h=100&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1654277041218-84424c78f0ae?w=250&h=100&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1660792734675-63a875d406b3?w=250&h=100&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1769985090420-087bc0a62ba3?w=250&h=100&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1597979732130-9d2ad18df38b?w=250&h=100&fit=crop&auto=format'
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="w-full min-h-screen" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
      <AnnouncementBar />
      <Navigation />
      <HeroSection />
      <SofaSketchSection />
      <MasonryGallery id="inspiration" />

      {/* Process Section - Cinematic Editorial Design */}
      <div className="w-full" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
        {/* Top Intro Text */}
        <section className="w-full px-4 md:px-8 pt-[40px] md:pt-[48px] lg:pt-[64px] pb-[32px] md:pb-[40px] lg:pb-[56px] bg-gradient-to-b from-[#f5f5f3] to-[#fafafa]">
          <div className="max-w-[800px] mx-auto flex flex-col items-center text-center">
            <p className="text-[#3a3a3a] text-[16px] md:text-[17px] lg:text-[18px] leading-[1.9] md:leading-[2] tracking-[0.01em] font-light">
              We believe every project presents an opportunity for exploration and innovation
              We are committed to enhance your spaces with function & aesthetics, executing with highest level of conduct and a culmination that exceeds expectations.
            </p>
          </div>
        </section>

        {/* Section 1 - DISCOVERY (Text Left) */}
        <section className="w-full">
          {/* Mobile Layout - Stacked */}
          <div className="md:hidden px-4 py-10 bg-white">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#666] mb-3" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
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
                  <p className="text-[12px] uppercase tracking-[0.25em] text-[#666] mb-6" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                    01 — The Beginning
                  </p>

                  {/* Divider */}
                  <div className="w-16 h-[1px] bg-[#ccc] mb-8"></div>

                  {/* Heading */}
                  <h2 className="uppercase tracking-[0.25em] text-[#1a1a1a] text-[28px] lg:text-[32px] mb-6 leading-tight" style={{ fontFamily: "'Playfair Display SC', serif" }}>
                    Discovery
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
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#666] mb-3" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
              02 — Refinement
            </p>
            <h2 className="uppercase tracking-[0.2em] text-[#1a1a1a] text-[24px] mb-4 leading-tight" style={{ fontFamily: "'Playfair Display SC', serif" }}>
              Product Design
            </h2>
            <div className="w-full mb-5">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1581858726788-75bc0f1a4471?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmdXJuaXR1cmUlMjBkZXNpZ24lMjB0ZWNobmljYWx8ZW58MXx8fHwxNzc3MzYzNDUzfDA&ixlib=rb-4.1.0&q=80&w=1080"
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
                src="https://images.unsplash.com/photo-1581858726788-75bc0f1a4471?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmdXJuaXR1cmUlMjBkZXNpZ24lMjB0ZWNobmljYWx8ZW58MXx8fHwxNzc3MzYzNDUzfDA&ixlib=rb-4.1.0&q=80&w=1080"
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
                  <p className="text-[12px] uppercase tracking-[0.25em] text-[#666] mb-6" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
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
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#666] mb-3" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
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
                  <p className="text-[12px] uppercase tracking-[0.25em] text-[#666] mb-6" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
                    03 — Realisation
                  </p>

                  {/* Divider */}
                  <div className="w-16 h-[1px] bg-[#ccc] mb-8"></div>

                  {/* Heading */}
                  <h2 className="uppercase tracking-[0.25em] text-[#1a1a1a] text-[28px] lg:text-[32px] mb-6 leading-tight" style={{ fontFamily: "'Playfair Display SC', serif" }}>
                    Development
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

      {/* Client Logos Carousel Section */}
      <section className="w-full py-[40px] md:py-[48px] lg:py-[64px] px-4 md:px-8 bg-gradient-to-b from-[#fafafa] to-[#f5f5f5]">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center">
          <h2 className="text-center text-[32px] md:text-[42px] lg:text-[48px] mb-[32px] md:mb-[40px] lg:mb-[48px] text-[#2a2a2a] tracking-tight" style={{ fontFamily: "'Playfair Display SC', serif" }}>
            Our Esteemed Clientele
          </h2>
          <div className="w-full relative px-8 md:px-14">
            <Slider {...sliderSettings}>
              {clientLogos.map((logo, index) => (
                <div key={index} className="px-2 md:px-4">
                  <div className="grayscale opacity-50 hover:opacity-90 hover:grayscale-0 transition-all duration-500 flex items-center justify-center h-20 md:h-24">
                    <ImageWithFallback
                      src={logo}
                      alt={`Client logo ${index + 1}`}
                      className="max-h-16 md:max-h-20 w-auto object-contain mx-auto filter drop-shadow-sm"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="w-full py-[40px] md:py-[48px] lg:py-[64px] px-4 md:px-8 bg-[#f5f5f5]">
        <div className="max-w-[1000px] mx-auto flex flex-col items-center">
          <h2 className="text-center text-[32px] md:text-[42px] lg:text-[48px] mb-[32px] md:mb-[40px] lg:mb-[48px] text-[#2a2a2a] tracking-tight" style={{ fontFamily: "'Playfair Display SC', serif" }}>
            Contact
          </h2>
          <form onSubmit={handleSubmit} className="w-full max-w-[800px] flex flex-col gap-[18px] md:gap-[20px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] md:gap-[20px]">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="px-4 md:px-5 py-3.5 md:py-4 border border-[#d8d8d8] bg-white focus:outline-none focus:border-[#2a2a2a] focus:shadow-sm transition-all duration-300 text-[#2a2a2a]"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              />
              <input
                type="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="px-4 md:px-5 py-3.5 md:py-4 border border-[#d8d8d8] bg-white focus:outline-none focus:border-[#2a2a2a] focus:shadow-sm transition-all duration-300 text-[#2a2a2a]"
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              />
            </div>
            <textarea
              placeholder="Message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 md:px-5 py-3.5 md:py-4 border border-[#d8d8d8] bg-white focus:outline-none focus:border-[#2a2a2a] focus:shadow-sm resize-none transition-all duration-300 text-[#2a2a2a]"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            />
            <button
              type="submit"
              className="w-full bg-[#1a1a1a] text-white py-3.5 md:py-4 px-5 md:px-6 hover:bg-black hover:shadow-md transition-all duration-300 uppercase tracking-[0.15em] text-sm"
              style={{ fontFamily: "'Nunito Sans', sans-serif" }}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}