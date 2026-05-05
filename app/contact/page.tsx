"use client"
import { useState } from 'react';
import AnnouncementBar from '../../src/app/components/AnnouncementBar';
import Navigation from '../../src/app/components/Navigation';
import Footer from '../../src/app/components/Footer';

export default function Page() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [activeTab, setActiveTab] = useState<'kudlu' | 'mekhri'>('kudlu');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AnnouncementBar />
      <Navigation />

      <div className="min-h-screen bg-[#faf9f7]" style={{ fontFamily: "'Montserrat', sans-serif" }}>

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
              style={{ fontFamily: "'Playfair Display SC', serif", fontWeight: 400, lineHeight: 1, color: '#2a2a2a' }}
            >
              Contact
            </h1>
            <p
              className="text-[11px] md:text-[12px] tracking-[0.16em] uppercase"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300, color: '#6a6a6a', lineHeight: 1.4 }}
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
                      placeholder="Name (optional)"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-3 bg-transparent border border-[#d8d6d1] text-[14px] text-[#1a1a1a] placeholder:text-[#ababab] focus:outline-none focus:border-[#3a3a3a] transition-all"
                      style={{ borderRadius: 0, fontWeight: 300, boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.015)' }}
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number *"
                      value={formData.phone}
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
                      placeholder="Email (optional)"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-3 bg-transparent border border-[#d8d6d1] text-[14px] text-[#1a1a1a] placeholder:text-[#ababab] focus:outline-none focus:border-[#3a3a3a] transition-all"
                      style={{ borderRadius: 0, fontWeight: 300, boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.015)' }}
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      placeholder="Message *"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-5 py-3 bg-transparent border border-[#d8d6d1] text-[14px] text-[#1a1a1a] placeholder:text-[#ababab] focus:outline-none focus:border-[#3a3a3a] transition-all resize-none"
                      style={{ borderRadius: 0, fontWeight: 300, boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.015)' }}
                    />
                  </div>

                  {status === 'success' && (
                    <p className="text-[13px] text-green-700 text-center">
                      Message sent! We'll be in touch soon.
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="text-[13px] text-red-600 text-center">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-[#1a1a1a] text-white py-3.5 text-[13px] tracking-[0.12em] uppercase transition-all hover:bg-[#2a2a2a] disabled:opacity-60 disabled:cursor-not-allowed"
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
                    {status === 'submitting' ? 'Sending…' : 'Send Message'}
                  </button>

                </form>
              </div>
            </div>

          </div>
        </section>

        {/* Store Locator Section */}
        <section className="max-w-[1080px] mx-auto px-6 md:px-10 pb-16 md:pb-20">

          {/* Section Title */}
          <div className="mb-8">
            <h2
              className="text-[24px] md:text-[28px] mb-2 tracking-[-0.01em]"
              style={{ fontFamily: "'Playfair Display SC', serif", fontWeight: 400, lineHeight: 1.2, color: '#2a2a2a' }}
            >
              Store Locator
            </h2>
            <p className="text-[13px] text-[#6a6a6a]" style={{ fontWeight: 300 }}>
              Visit our flagship experience center or explore our locations below.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-8 border-b border-[#e0ddd6] mb-8">
            {(['kudlu', 'mekhri'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  paddingBottom: '10px',
                  fontSize: '13px',
                  fontWeight: 400,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  borderBottom: activeTab === tab ? '2px solid #1a1a1a' : '2px solid transparent',
                  color: activeTab === tab ? '#1a1a1a' : '#8a8a8a',
                  marginBottom: '-1px',
                  transition: 'color 0.2s ease',
                }}
              >
                {tab === 'kudlu' ? 'Kudlu' : 'Mekhri Circle'}
              </button>
            ))}
          </div>

          {/* Map */}
          <div className="w-full overflow-hidden border border-[#e0ddd6] mb-6" style={{ height: '340px', filter: 'grayscale(0.4) contrast(0.95)' }}>
            <iframe
              key={activeTab}
              src={
                activeTab === 'kudlu'
                  ? 'https://maps.google.com/maps?q=Pelican+Essentials%2C+Kudlu+Road%2C+Bengaluru+560068&output=embed'
                  : 'https://maps.google.com/maps?q=C.K.+Plaza+3rd+Floor%2C+Gangappa+Block+No.30%2C+New+PDI%2C+Bellary+Rd%2C+Gangenahalli%2C+Bengaluru+560006&output=embed'
              }
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={activeTab === 'kudlu' ? 'Kudlu Store' : 'Mekhri Circle Store'}
            />
          </div>

          {/* Address + phone below map */}
          {activeTab === 'kudlu' ? (
            <div className="space-y-1">
              <p className="text-[15px] text-[#2a2a2a]" style={{ fontWeight: 400, lineHeight: 1.6 }}>Pelican Essentials</p>
              <p className="text-[14px] text-[#6a6a6a]" style={{ fontWeight: 300, lineHeight: 1.6 }}>Kudlu Road, Bengaluru 560068</p>
              <p className="text-[14px] text-[#6a6a6a]" style={{ fontWeight: 300, lineHeight: 1.6 }}>
                <a href="tel:18008330046" style={{ textDecoration: 'none', color: 'inherit' }}>1800 833 0046</a>
              </p>
            </div>
          ) : (
            <div className="space-y-1">
              <p className="text-[15px] text-[#2a2a2a]" style={{ fontWeight: 400, lineHeight: 1.6 }}>C.K. Plaza, 3rd Floor</p>
              <p className="text-[14px] text-[#6a6a6a]" style={{ fontWeight: 300, lineHeight: 1.6 }}>Gangappa Block, No.30</p>
              <p className="text-[14px] text-[#6a6a6a]" style={{ fontWeight: 300, lineHeight: 1.6 }}>New PDI, Bellary Rd, Gangenahalli</p>
              <p className="text-[14px] text-[#6a6a6a]" style={{ fontWeight: 300, lineHeight: 1.6 }}>Bengaluru 560006</p>
            </div>
          )}

        </section>

      </div>

      <Footer />
    </>
  );
}
