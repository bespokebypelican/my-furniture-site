"use client"
import { useState } from 'react';
import AnnouncementBar from './AnnouncementBar';
import Navigation from './Navigation';
import Footer from './Footer';

export default function ContactPageClient() {
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

      <div className="min-h-screen" style={{ backgroundColor: '#F7F4EE', fontFamily: "'Montserrat', sans-serif" }}>

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

        {/* Contact Section */}
        <section className="max-w-[1080px] mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Left Side */}
            <div className="space-y-12">
              <div className="space-y-9">
                <div className="space-y-1.5">
                  <p style={{ fontSize: '15px', color: '#1A1A1A', fontWeight: 400, lineHeight: 1.6 }}>#201/A, First Floor</p>
                  <p style={{ fontSize: '14px', color: '#6B6560', fontWeight: 300, lineHeight: 1.6 }}>Kudlu Main Rd, Hosapalaya</p>
                  <p style={{ fontSize: '14px', color: '#6B6560', fontWeight: 300, lineHeight: 1.6 }}>Muneshwara Nagar</p>
                  <p style={{ fontSize: '14px', color: '#6B6560', fontWeight: 300, lineHeight: 1.6 }}>Bengaluru, Karnataka 560068</p>
                </div>
                <div className="space-y-1.5">
                  <p style={{ fontSize: '15px', color: '#1A1A1A', fontWeight: 400, lineHeight: 1.6 }}>C.K. Plaza, 3rd Floor</p>
                  <p style={{ fontSize: '14px', color: '#6B6560', fontWeight: 300, lineHeight: 1.6 }}>Gangappa Block, No.30</p>
                  <p style={{ fontSize: '14px', color: '#6B6560', fontWeight: 300, lineHeight: 1.6 }}>New PDI, Bellary Rd, Gangenahalli</p>
                  <p style={{ fontSize: '14px', color: '#6B6560', fontWeight: 300, lineHeight: 1.6 }}>Bengaluru, Karnataka 560006</p>
                </div>
              </div>

              <div>
                <p style={{ fontSize: '14px', color: '#6B6560', fontWeight: 300, lineHeight: 1.8 }}>
                  Have any doubts, comments, or just like to say Hi,<br />
                  we are here for you — and we are wearing our thinking caps.
                </p>
              </div>

              <div className="space-y-8 pt-4">
                <div className="space-y-2">
                  <p style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6B6560', fontWeight: 400 }}>CALL US</p>
                  <a
                    href="tel:18008330046"
                    style={{ display: 'block', fontSize: '19px', color: '#1A1A1A', fontWeight: 400, textDecoration: 'none' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#C9A96E'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#1A1A1A'; }}
                  >
                    1800 833 0046
                  </a>
                  <p style={{ fontSize: '12px', color: '#6B6560', fontWeight: 300 }}>(Mon–Sun, 9 am – 8 pm)</p>
                </div>
                <div className="space-y-2">
                  <p style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6B6560', fontWeight: 400 }}>EMAIL US</p>
                  <a
                    href="mailto:bespokebypelica@gmail.com"
                    style={{ display: 'block', fontSize: '14px', color: '#1A1A1A', fontWeight: 300, textDecoration: 'none' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#C9A96E'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#1A1A1A'; }}
                  >
                    bespokebypelica@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {(['name:text:Name (optional)', 'phone:tel:Phone Number *', 'email:email:Email (optional)'] as const).map((field) => {
                  const [name, type, placeholder] = field.split(':');
                  return (
                    <input
                      key={name}
                      type={type}
                      name={name}
                      placeholder={placeholder}
                      value={formData[name as keyof typeof formData]}
                      onChange={handleChange}
                      required={name === 'phone'}
                      style={{
                        display: 'block', width: '100%', padding: '10px 0',
                        background: 'transparent', border: 'none',
                        borderBottom: '1px solid #C2BDB8', fontSize: '14px',
                        color: '#1A1A1A', outline: 'none', borderRadius: 0,
                        fontFamily: "'Montserrat', sans-serif", fontWeight: 300,
                        transition: 'border-color 0.3s ease',
                      }}
                      onFocus={(e) => { e.currentTarget.style.borderBottomColor = '#C9A96E'; }}
                      onBlur={(e) => { e.currentTarget.style.borderBottomColor = '#C2BDB8'; }}
                    />
                  );
                })}
                <textarea
                  name="message" placeholder="Message *"
                  value={formData.message} onChange={handleChange}
                  required rows={4}
                  style={{
                    display: 'block', width: '100%', padding: '10px 0',
                    background: 'transparent', border: 'none',
                    borderBottom: '1px solid #C2BDB8', fontSize: '14px',
                    color: '#1A1A1A', outline: 'none', borderRadius: 0,
                    fontFamily: "'Montserrat', sans-serif", fontWeight: 300,
                    resize: 'none', transition: 'border-color 0.3s ease',
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderBottomColor = '#C9A96E'; }}
                  onBlur={(e) => { e.currentTarget.style.borderBottomColor = '#C2BDB8'; }}
                />

                {status === 'success' && (
                  <p style={{ fontSize: '13px', color: '#2e7d32', textAlign: 'center', fontFamily: "'Montserrat', sans-serif" }}>
                    Message sent! We'll be in touch soon.
                  </p>
                )}
                {status === 'error' && (
                  <p style={{ fontSize: '13px', color: '#c62828', textAlign: 'center', fontFamily: "'Montserrat', sans-serif" }}>{errorMsg}</p>
                )}

                <button
                  type="submit" disabled={status === 'submitting'}
                  style={{
                    width: '100%', backgroundColor: '#1A1A1A', color: '#C9A96E',
                    border: 'none', borderRadius: 0, padding: '14px 28px',
                    fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase',
                    fontFamily: "'Montserrat', sans-serif",
                    cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                    opacity: status === 'submitting' ? 0.6 : 1,
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (status !== 'submitting') {
                      e.currentTarget.style.backgroundColor = '#C9A96E';
                      e.currentTarget.style.color = '#1A1A1A';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#1A1A1A';
                    e.currentTarget.style.color = '#C9A96E';
                  }}
                >
                  {status === 'submitting' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Store Locator */}
        <section className="max-w-[1080px] mx-auto px-6 md:px-10 pb-16 md:pb-20">
          <div className="mb-8">
            <h2
              className="text-[24px] md:text-[28px] mb-2 tracking-[-0.01em]"
              style={{ fontFamily: "'Playfair Display SC', serif", fontWeight: 400, lineHeight: 1.2, color: '#2a2a2a' }}
            >
              Store Locator
            </h2>
            <p className="text-[13px]" style={{ color: '#6B6560', fontWeight: 300 }}>
              Visit our flagship experience center or explore our locations below.
            </p>
          </div>

          <div className="flex gap-8 border-b border-[#e0ddd6] mb-8">
            {(['kudlu', 'mekhri'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  paddingBottom: '10px', fontSize: '13px', fontWeight: 400,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  background: 'none', border: 'none', cursor: 'pointer',
                  borderBottom: activeTab === tab ? '2px solid #C9A96E' : '2px solid transparent',
                  color: activeTab === tab ? '#1A1A1A' : '#6B6560',
                  marginBottom: '-1px', transition: 'color 0.2s ease',
                }}
              >
                {tab === 'kudlu' ? 'Kudlu' : 'Mekhri Circle'}
              </button>
            ))}
          </div>

          <div className="w-full overflow-hidden border border-[#e0ddd6] mb-6" style={{ height: '340px', filter: 'grayscale(0.4) contrast(0.95)' }}>
            <iframe
              key={activeTab}
              src={
                activeTab === 'kudlu'
                  ? 'https://maps.google.com/maps?q=Pelican+Essentials%2C+Kudlu+Road%2C+Bengaluru+560068&output=embed'
                  : 'https://maps.google.com/maps?q=C.K.+Plaza+3rd+Floor%2C+Gangappa+Block+No.30%2C+New+PDI%2C+Bellary+Rd%2C+Gangenahalli%2C+Bengaluru+560006&output=embed'
              }
              width="100%" height="100%"
              style={{ border: 0 }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={activeTab === 'kudlu' ? 'Kudlu Store' : 'Mekhri Circle Store'}
            />
          </div>

          {activeTab === 'kudlu' ? (
            <div className="space-y-1">
              <p style={{ fontSize: '15px', color: '#1A1A1A', fontWeight: 400, lineHeight: 1.6 }}>Pelican Essentials</p>
              <p style={{ fontSize: '14px', color: '#6B6560', fontWeight: 300, lineHeight: 1.6 }}>Kudlu Road, Bengaluru 560068</p>
              <p style={{ fontSize: '14px', color: '#6B6560', fontWeight: 300, lineHeight: 1.6 }}>
                <a href="tel:18008330046" style={{ textDecoration: 'none', color: 'inherit' }}>1800 833 0046</a>
              </p>
            </div>
          ) : (
            <div className="space-y-1">
              <p style={{ fontSize: '15px', color: '#1A1A1A', fontWeight: 400, lineHeight: 1.6 }}>C.K. Plaza, 3rd Floor</p>
              <p style={{ fontSize: '14px', color: '#6B6560', fontWeight: 300, lineHeight: 1.6 }}>Gangappa Block, No.30</p>
              <p style={{ fontSize: '14px', color: '#6B6560', fontWeight: 300, lineHeight: 1.6 }}>New PDI, Bellary Rd, Gangenahalli</p>
              <p style={{ fontSize: '14px', color: '#6B6560', fontWeight: 300, lineHeight: 1.6 }}>Bengaluru 560006</p>
            </div>
          )}
        </section>
      </div>

      <Footer />
    </>
  );
}
