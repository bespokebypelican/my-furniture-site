import { useState } from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

const CustomPrevArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all"
    aria-label="Previous"
  >
    <ChevronLeft size={24} className="text-gray-700" />
  </button>
);

const CustomNextArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all"
    aria-label="Next"
  >
    <ChevronRight size={24} className="text-gray-700" />
  </button>
);

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    newsletterEmail: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', formData.newsletterEmail);
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
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Client Logos Carousel Section */}
      <section className="py-24 px-8">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-center text-3xl mb-16 text-gray-700" style={{ fontFamily: 'Georgia, serif' }}>
            Our Esteemed Clientele
          </h2>
          <div className="relative px-12">
            <Slider {...sliderSettings}>
              {clientLogos.map((logo, index) => (
                <div key={index} className="px-4">
                  <div className="grayscale opacity-60 hover:opacity-100 transition-opacity flex items-center justify-center h-24">
                    <ImageWithFallback
                      src={logo}
                      alt={`Client logo ${index + 1}`}
                      className="max-h-20 w-auto object-contain mx-auto"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-8">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-center text-3xl mb-12 text-gray-700">Contact</h2>
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="px-5 py-4 border border-[#e0e0e0] bg-white focus:outline-none focus:border-gray-400 transition-colors"
                style={{ borderRadius: '4px' }}
              />
              <input
                type="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="px-5 py-4 border border-[#e0e0e0] bg-white focus:outline-none focus:border-gray-400 transition-colors"
                style={{ borderRadius: '4px' }}
              />
            </div>
            <textarea
              placeholder="Message"
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-5 py-4 border border-[#e0e0e0] bg-white focus:outline-none focus:border-gray-400 resize-none transition-colors"
              style={{ borderRadius: '4px' }}
            />
            <button
              type="submit"
              className="w-full bg-[#111] text-white py-4 px-6 hover:bg-black transition-colors uppercase tracking-wide"
              style={{ borderRadius: '4px' }}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#e8e8e8] py-16 px-8">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Company Description */}
            <div>
              <p className="text-sm text-gray-600 leading-relaxed">
                We are a leading company dedicated to providing exceptional services and solutions to our clients worldwide. Our commitment to excellence drives everything we do.
              </p>
            </div>

            {/* Address Details */}
            <div>
              <h3 className="text-sm mb-4 text-gray-800">Address Details</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p>123 Business Street</p>
                <p>Suite 456</p>
                <p>New York, NY 10001</p>
                <p>United States</p>
                <p className="pt-2">Phone: (555) 123-4567</p>
                <p>Email: info@company.com</p>
              </div>
            </div>

            {/* Menu Links */}
            <div>
              <h3 className="text-sm mb-4 text-gray-800">Menu</h3>
              <nav className="flex flex-col space-y-2">
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Home</a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">About</a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Services</a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Blog</a>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
              </nav>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-sm mb-4 text-gray-800">Newsletter</h3>
              <p className="text-sm text-gray-600 mb-4">
                Subscribe to our newsletter to receive updates and exclusive offers.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email"
                  value={formData.newsletterEmail}
                  onChange={(e) => setFormData({ ...formData, newsletterEmail: e.target.value })}
                  className="w-full px-4 py-3 border border-[#e0e0e0] bg-white text-sm focus:outline-none focus:border-gray-400 transition-colors"
                  style={{ borderRadius: '4px' }}
                />
                <button
                  type="submit"
                  className="w-full bg-[#111] text-white py-3 px-4 text-sm hover:bg-black transition-colors uppercase tracking-wide"
                  style={{ borderRadius: '4px' }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                {/* Facebook */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                {/* Twitter / X */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l16 16M4 20L20 4"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                {/* Instagram */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                {/* LinkedIn */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
            {/* Copyright */}
            <div className="text-sm text-gray-600">
              © 2026 Your Company. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}