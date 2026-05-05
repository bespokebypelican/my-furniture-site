"use client"
import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section className="w-full bg-[#f5f5f3] py-24 px-8">
      <div className="max-w-[1000px] mx-auto">
        <h2
          className="text-center text-5xl mb-4 tracking-tight"
          style={{ fontFamily: "'Playfair Display SC', serif" }}
        >
          Get in Touch
        </h2>
        <p className="text-center text-[#4a4a4a] mb-16 max-w-[600px] mx-auto">
          Let's discuss how we can bring your vision to life
        </p>

        <div className="grid grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl mb-8 tracking-tight" style={{ fontFamily: "'Playfair Display SC', serif" }}>
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 mt-1" />
                <div>
                  <p className="mb-1">Phone</p>
                  <p className="text-[#666]">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 mt-1" />
                <div>
                  <p className="mb-1">Email</p>
                  <p className="text-[#666]">info@bespokebypelican.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 mt-1" />
                <div>
                  <p className="mb-1">Studio</p>
                  <p className="text-[#666]">
                    123 Design District
                    <br />
                    Mumbai, Maharashtra 400001
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              className="p-7 md:p-8 bg-white/60 border border-[#e8e6e1]"
              style={{
                backdropFilter: 'blur(12px)',
                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.02), 0 1px 2px rgba(0, 0, 0, 0.01)',
                borderRadius: 0,
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
                    transition: 'all 0.3s ease',
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
      </div>
    </section>
  );
}
