"use client"
import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const inputStyle: React.CSSProperties = {
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
};

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

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderBottomColor = '#C9A96E';
  };
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderBottomColor = '#C2BDB8';
  };

  return (
    <section style={{ width: '100%', backgroundColor: '#EDE9E0', padding: '64px 32px' }}>
      <div className="max-w-[1000px] mx-auto">
        <h2
          className="text-center text-5xl mb-4 tracking-tight"
          style={{ fontFamily: "'Playfair Display SC', serif", color: '#1A1A1A' }}
        >
          Get in Touch
        </h2>
        <p className="text-center mb-16 max-w-[600px] mx-auto" style={{ color: '#6B6560', fontFamily: "'Montserrat', sans-serif" }}>
          Let's discuss how we can bring your vision to life
        </p>

        <div className="grid grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl mb-8 tracking-tight" style={{ fontFamily: "'Playfair Display SC', serif", color: '#1A1A1A' }}>
              Contact Information
            </h3>

            <div className="space-y-6">
              {[
                { Icon: Phone, label: 'Phone', value: '+91 98765 43210' },
                { Icon: Mail, label: 'Email', value: 'info@bespokebypelican.com' },
                { Icon: MapPin, label: 'Studio', value: '123 Design District\nMumbai, Maharashtra 400001' },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <Icon className="w-5 h-5 mt-1" style={{ color: '#1A1A1A' }} />
                  <div>
                    <p className="mb-1" style={{ color: '#1A1A1A', fontFamily: "'Montserrat', sans-serif" }}>{label}</p>
                    <p style={{ color: '#6B6560', fontFamily: "'Montserrat', sans-serif", whiteSpace: 'pre-line' }}>{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" name="name" placeholder="Name (optional)" value={formData.name} onChange={handleChange}
                style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
              <input type="tel" name="phone" placeholder="Phone Number *" value={formData.phone} onChange={handleChange}
                required style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
              <input type="email" name="email" placeholder="Email (optional)" value={formData.email} onChange={handleChange}
                style={inputStyle} onFocus={onFocus} onBlur={onBlur} />
              <textarea name="message" placeholder="Message *" value={formData.message} onChange={handleChange}
                required rows={4}
                style={{ ...inputStyle, resize: 'none' }}
                onFocus={onFocus} onBlur={onBlur}
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
                type="submit"
                disabled={status === 'submitting'}
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
      </div>
    </section>
  );
}
