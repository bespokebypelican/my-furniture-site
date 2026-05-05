import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ClientCarousel() {
  const testimonials = [
    {
      quote: 'Bespoke by Pelican transformed our living room with a custom sectional that perfectly captures our aesthetic. The attention to detail is unmatched.',
      author: 'Priya Sharma',
      role: 'Interior Designer',
    },
    {
      quote: 'Working with this team was an absolute pleasure. They understood our vision and delivered furniture that exceeded all expectations.',
      author: 'Rajesh Verma',
      role: 'Architect',
    },
    {
      quote: 'The craftsmanship is extraordinary. Every piece feels like a work of art, perfectly tailored to our space and lifestyle.',
      author: 'Ananya Kapoor',
      role: 'Homeowner',
    },
    {
      quote: 'From the initial consultation to final installation, the process was seamless. The quality speaks for itself.',
      author: 'Vikram Singh',
      role: 'Hotel Owner',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <section className="w-full px-8" style={{ backgroundColor: '#F7F4EE', padding: '64px 32px' }}>
      <div className="max-w-[900px] mx-auto">
        <h2
          className="text-center text-5xl mb-16 tracking-tight"
          style={{ fontFamily: "'Playfair Display SC', serif" }}
        >
          Client Testimonials
        </h2>

        <div className="testimonial-slider">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-8">
                <div className="text-center py-12">
                  <p
                    className="text-2xl leading-relaxed mb-8 text-[#2a2a2a] italic"
                    style={{ fontFamily: "'Playfair Display SC', serif" }}
                  >
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-[#e0e0e0] pt-6 inline-block px-12">
                    <p className="tracking-wide mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-[#666] tracking-wide uppercase">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style>{`
        .testimonial-slider .slick-dots {
          bottom: -40px;
        }
        .testimonial-slider .slick-dots li button:before {
          font-size: 10px;
          color: #2a2a2a;
          opacity: 0.3;
        }
        .testimonial-slider .slick-dots li.slick-active button:before {
          opacity: 1;
          color: #2a2a2a;
        }
      `}</style>
    </section>
  );
}
