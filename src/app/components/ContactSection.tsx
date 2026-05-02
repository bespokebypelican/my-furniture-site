import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="w-full bg-[#f5f5f3] py-24 px-8">
      <div className="max-w-[1000px] mx-auto">
        <h2
          className="text-center text-5xl mb-4 tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Get in Touch
        </h2>
        <p className="text-center text-[#4a4a4a] mb-16 max-w-[600px] mx-auto">
          Let's discuss how we can bring your vision to life
        </p>

        <div className="grid grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl mb-8 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
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
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white border border-[#d0d0d0] rounded-lg px-4 py-6 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white border border-[#d0d0d0] rounded-lg px-4 py-6 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-white border border-[#d0d0d0] rounded-lg px-4 py-6 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <textarea
                  placeholder="Tell us about your project"
                  className="w-full bg-white border border-[#d0d0d0] rounded-lg px-4 py-3 min-h-[120px] resize-none focus:outline-none focus:ring-2 focus:ring-black"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-6 uppercase tracking-[0.2em] text-sm hover:bg-[#2a2a2a] transition-colors duration-300 rounded-lg"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
