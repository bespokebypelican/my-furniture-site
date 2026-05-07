"use client"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const clientLogos = [
  'https://images.unsplash.com/photo-1660792734675-63a875d406b3?w=250&h=100&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1769985090420-087bc0a62ba3?w=250&h=100&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1597979732130-9d2ad18df38b?w=250&h=100&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1719716133741-9f8f35b3cb04?w=250&h=100&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1654277041218-84424c78f0ae?w=250&h=100&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1660792734675-63a875d406b3?w=250&h=100&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1769985090420-087bc0a62ba3?w=250&h=100&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1597979732130-9d2ad18df38b?w=250&h=100&fit=crop&auto=format',
];

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white hover:scale-110 p-3 shadow-sm hover:shadow-md transition-all duration-300"
    aria-label="Previous"
  >
    <ChevronLeft size={20} className="text-[#2a2a2a]" strokeWidth={2.5} />
  </button>
);

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white hover:scale-110 p-3 shadow-sm hover:shadow-md transition-all duration-300"
    aria-label="Next"
  >
    <ChevronRight size={20} className="text-[#2a2a2a]" strokeWidth={2.5} />
  </button>
);

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
    { breakpoint: 768,  settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 480,  settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};

export default function ClientLogosCarousel() {
  return (
    <section className="w-full px-4 md:px-8" style={{ backgroundColor: '#F7F4EE', padding: '64px 32px' }}>
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        <h2
          className="text-center text-[32px] md:text-[42px] lg:text-[48px] mb-[32px] md:mb-[40px] lg:mb-[48px] text-[#2a2a2a] tracking-tight"
          style={{ fontFamily: "'Playfair Display SC', serif" }}
        >
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
  );
}
