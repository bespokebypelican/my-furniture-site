"use client"
import { useState } from 'react';
import AnnouncementBar from '../../src/app/components/AnnouncementBar';
import Navigation from '../../src/app/components/Navigation';
import Footer from '../../src/app/components/Footer';

export default function Page() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', contact: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <AnnouncementBar />
      <Navigation />

      <div className="min-h-screen bg-[#faf9f7]" style={{ fontFamily: "'Inter', sans-serif" }}>

        {/* Compact Banner */}
        <section
          className="relative h-[180px] md:h-[240px] bg-gradient-to-br from-[#ebe9e4] via-[#e0ddd6] to-[#d8d5ce] flex items-center justify-center overflow-hidden py-6"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.03\'/%3E%3C/svg%3E")',
            backgroundBlendMode: 'overlay'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#faf9f7]/30" />

          <div className="text-center px-4 relative z-10">
            <h1
              className="text-[32px] md:text-[40px] mb-2 tracking-[-0.02em]"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, lineHeight: 1, color: '#2a2a2a' }}
            >
              Contact
            </h1>
            <p
              className="text-[11px] md:text-[12px] tracking-[0.16em] uppercase"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, color: '#6a6a6a', lineHeight: 1.4 }}
            >
              We'd love to hear from you
            </p>
          </div>
        </section>

        {/* Contact Section - Bifurcated Layout */}
        <section className="max-w-[1080px] mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Left Side - Contact Details */}
            <div className="space-y-12">

              {/* Addresses */}
              <div className="space-y-9">
                <div className="space-y-1.5">
                  <p className="text-[15px] text-[#2a2a2a]" style={{ fontWeight: 400, lineHeight: 1.6 }}>
                    #201/A, First Floor
                  </p>
                  <p className="text-[14px] text-[#6a6a6a]" style={{ fontWeight: 300, lineHeight: 1.6 }}>
                    Kudlu Main Rd, Hosapalaya
                  </p>
                  <p className="text-[14px] text-[#6a6a6a]" style={{ fontWeight: 300, lineHeight: 1.6 }}>
                    Muneshwara Nagar
                  </p>
                  <p className="text-[14px] text-[#6a6a6a]" style={{ fontWeight: 300, lineHeight: 1.6 }}>
                    Bengaluru, Karnataka 560068
                  </p>
                </div>

                <div className="space-y-1.5">
                  <p className="text-[15px] text-[#2a2a2a]" style={{ fontWeight: 400, lineHeight: 1.6 }}>
                    C.K. Plaza, 3rd Floor
                  </p>
                  <p className="text-[14px] text-[#6a6a6a]" style={{ fontWeight: 300, lineHeight: 1.6 }}>
                    Gangappa Block, No.30
                  </p>
                  <p className="text-[14px] text-[#6a6a6a]" style={{ fontWeight: 300, lineHeight: 1.6 }}>
                    New PDI, Bellary Rd, Gangenahalli
                  </p>
                  <p className="text-[14px] text-[#6a6a6a]" style={{ fontWeight: 300, lineHeight: 1.6 }}>
                    Bengaluru, Karnataka 560006
                  </p>
                </div>
              </div>

              {/* Support Text */}
              <div>
                <p className="text-[14px] text-[#4a4a4a]" style={{ fontWeight: 300, lineHeight: 1.8 }}>
                  Have any doubts, comments, or just like to say Hi,<br />
                  we are here for you — and we are wearing our thinking caps.
                </p>
              </div>

              {/* Contact Details Block */}
              <div className="space-y-8 pt-4">

                {/* Phone */}
                <div className="space-y-2">
                  <p className="text-[10px] tracking-[0.15em] uppercase text-[#8a8a8a]" style={{ fontWeight: 400 }}>
                    CALL US
                  </p>
                  <a
                    href="tel:18008330046"
                    className="block text-[19px] text-[#1a1a1a] transition-all"
                    style={{ fontWeight: 400, textDecoration: 'none' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.textDecoration = 'underline';
                      e.currentTarget.style.textUnderlineOffset = '3px';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.textDecoration = 'none';
                    }}
                  >
                    1800 833 0046
                  </a>
                  <p className="text-[12px] text-[#6a6a6a]" style={{ fontWeight: 300 }}>
                    (Mon–Sun, 9 am – 8 pm)
                  </p>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <p className="text-[10px] tracking-[0.15em] uppercase text-[#8a8a8a]" style={{ fontWeight: 400 }}>
                    EMAIL US
                  </p>
                  <a
                    href="mailto:bespokebypelica@gmail.com"
                    className="block text-[14px] text-[#1a1a1a] transition-all"
                    style={{ fontWeight: 300, textDecoration: 'none' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.textDecoration = 'underline';
                      e.currentTarget.style.textUnderlineOffset = '3px';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.textDecoration = 'none';
                    }}
                  >
                    bespokebypelica@gmail.com
                  </a>
                </div>

              </div>

            </div>

            {/* Right Side - Form */}
            <div>
              <div
                className="p-7 md:p-8 bg-white/60 border border-[#e8e6e1]"
                style={{
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.02), 0 1px 2px rgba(0, 0, 0, 0.01)',
                  borderRadius: 0
                }}
              >
                <form onSubmit={handleSubmit} className="space-y-5">

                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 bg-transparent border border-[#d8d6d1] text-[14px] text-[#1a1a1a] placeholder:text-[#ababab] focus:outline-none focus:border-[#3a3a3a] transition-all"
                      style={{ borderRadius: 0, fontWeight: 300, boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.015)' }}
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="contact"
                      placeholder="Contact Number"
                      value={formData.contact}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 bg-transparent border border-[#d8d6d1] text-[14px] text-[#1a1a1a] placeholder:text-[#ababab] focus:outline-none focus:border-[#3a3a3a] transition-all"
                      style={{ borderRadius: 0, fontWeight: 300, boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.015)' }}
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 bg-transparent border border-[#d8d6d1] text-[14px] text-[#1a1a1a] placeholder:text-[#ababab] focus:outline-none focus:border-[#3a3a3a] transition-all"
                      style={{ borderRadius: 0, fontWeight: 300, boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.015)' }}
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-5 py-3 bg-transparent border border-[#d8d6d1] text-[14px] text-[#1a1a1a] placeholder:text-[#ababab] focus:outline-none focus:border-[#3a3a3a] transition-all resize-none"
                      style={{ borderRadius: 0, fontWeight: 300, boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.015)' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1a1a1a] text-white py-3.5 text-[13px] tracking-[0.12em] uppercase transition-all hover:bg-[#2a2a2a]"
                    style={{
                      borderRadius: 0,
                      fontWeight: 400,
                      boxShadow: '0 1px 4px rgba(0, 0, 0, 0.06)',
                      transform: 'translateY(0)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-1px)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 1px 4px rgba(0, 0, 0, 0.06)';
                    }}
                  >
                    Send Message
                  </button>

                </form>
              </div>
            </div>

          </div>
        </section>

        {/* Store Locator Section */}
        <section className="max-w-[1080px] mx-auto px-6 md:px-10 pb-16 md:pb-20">

          {/* Section Title */}
          <div className="mb-10">
            <h2
              className="text-[24px] md:text-[28px] mb-2 tracking-[-0.01em]"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400, lineHeight: 1.2, color: '#2a2a2a' }}
            >
              Store Locator
            </h2>
            <p className="text-[13px] text-[#6a6a6a]" style={{ fontWeight: 300 }}>
              Visit our flagship experience center or explore our locations below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Left Side - Locations */}
            <div>
              <p className="text-[10px] tracking-[0.16em] uppercase text-[#8a8a8a] mb-8" style={{ fontWeight: 400 }}>
                BENGALURU
              </p>

              <div className="space-y-10">
                {/* Location 1 */}
                <div className="space-y-1.5">
                  <p className="text-[15px] text-[#2a2a2a]" style={{ fontWeight: 400, lineHeight: 1.6 }}>
                    #201/A, First Floor
                  </p>
                  <p className="text-[14px] text-[#6a6a6a]" style={{ fontWeight: 300, lineHeight: 1.6 }}>
                    Kudlu Main Rd, Hosapalaya
                  </p>
                  <p className="text-[14px] text-[#6a6a6a]" style={{ fontWeight: 300, lineHeight: 1.6 }}>
                    Muneshwara Nagar
                  </p>
                  <p className="text-[14px] text-[#6a6a6a]" style={{ fontWeight: 300, lineHeight: 1.6 }}>
                    Bengaluru, Karnataka 560068
                  </p>
                </div>

                {/* Location 2 */}
                <div className="space-y-1.5">
                  <p className="text-[15px] text-[#2a2a2a]" style={{ fontWeight: 400, lineHeight: 1.6 }}>
                    C.K. Plaza, 3rd Floor
                  </p>
                  <p className="text-[14px] text-[#6a6a6a]" style={{ fontWeight: 300, lineHeight: 1.6 }}>
                    Gangappa Block, No.30
                  </p>
                  <p className="text-[14px] text-[#6a6a6a]" style={{ fontWeight: 300, lineHeight: 1.6 }}>
                    New PDI, Bellary Rd, Gangenahalli
                  </p>
                  <p className="text-[14px] text-[#6a6a6a]" style={{ fontWeight: 300, lineHeight: 1.6 }}>
                    Bengaluru, Karnataka 560006
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Map */}
            <div>
              <div className="relative w-full h-[340px] bg-[#e4e2dd] overflow-hidden border border-[#e0ddd6]" style={{ filter: 'grayscale(0.5) contrast(0.95)' }}>
                <div className="absolute inset-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0!2d77.6!3d12.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzAwLjAiTiA3N8KwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location Map"
                  />
                </div>
                <div className="absolute inset-0 bg-[#f5f3ef]/20 pointer-events-none" />
              </div>
            </div>

          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}
