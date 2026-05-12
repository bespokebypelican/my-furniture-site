"use client"
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const clientLogos = [
  { src: '/clients/client-raja.png', alt: 'RAJA', url: 'https://www.rajabuilders.in/raja-capital' },
  { src: '/clients/client-pioneer-fil-med.png', alt: 'Pioneer Fil-Med Limited', url: 'https://pioneerfilmed.com/' },
  { src: '/clients/client-great-destinations.png', alt: 'Great Destinations Hotels & Resorts', url: 'https://gdhotels.in/' },
  { src: '/clients/client-rosetta.png', alt: 'Rosetta Hospitality', url: 'https://rosettahospitality.com/' },
  { src: '/clients/client-suyug.png', alt: 'SUYUG', url: 'https://www.suyug.com/' },
  { src: '/clients/client-white-shadows.png', alt: 'White Shadows Design Studio', url: 'https://www.white-shadows.in/' },
  { src: '/clients/client-wesmarc.png', alt: 'Wesmarc Super Doors', url: 'https://wesmarcdoors.com/' },
  { src: '/clients/client-udb.png', alt: 'Universal Design Build', url: 'https://universaldesignbuild.in' },
  { src: '/clients/client-quadri-icon.png', alt: 'Quadri', url: 'https://www.indiaquotient.in/' },
  { src: '/clients/client-house-of-quadri.png', alt: 'House of Quadri', url: 'https://houseofquadri.com/' },
];

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white hover:scale-110 p-2 md:p-3 shadow-sm hover:shadow-md transition-all duration-300"
    aria-label="Previous"
  >
    <ChevronLeft className="text-[#2a2a2a] w-4 h-4 md:w-5 md:h-5" strokeWidth={2.5} />
  </button>
);

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white hover:scale-110 p-2 md:p-3 shadow-sm hover:shadow-md transition-all duration-300"
    aria-label="Next"
  >
    <ChevronRight className="text-[#2a2a2a] w-4 h-4 md:w-5 md:h-5" strokeWidth={2.5} />
  </button>
);

function useSlidesToShow() {
  const [slidesToShow, setSlidesToShow] = useState<number>(() => {
    if (typeof window === 'undefined') return 4;
    const w = window.innerWidth;
    if (w < 640) return 1;
    if (w < 768) return 2;
    return 4;
  });

  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w < 640) setSlidesToShow(1);
      else if (w < 768) setSlidesToShow(2);
      else setSlidesToShow(4);
    }
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return slidesToShow;
}

export default function ClientLogosCarousel() {
  const slidesToShow = useSlidesToShow();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

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
                  <a href={logo.url} target="_blank" rel="noopener noreferrer" className="block" onClick={() => { window.gtag?.('event', 'client_logo_click', { logo_name: logo.alt }); }}>
                    <ImageWithFallback
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-16 md:max-h-20 w-auto object-contain mx-auto filter drop-shadow-sm"
                    />
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
