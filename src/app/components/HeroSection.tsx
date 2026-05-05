import { ImageWithFallback } from './figma/ImageWithFallback';

export default function HeroSection() {
  return (
    <section style={{ width: '100%', backgroundColor: '#F7F4EE', padding: '64px 32px', minHeight: '85vh', display: 'flex', alignItems: 'center' }}>
      <div className="max-w-[1200px] mx-auto flex flex-col items-center w-full">
        <div className="w-full mb-[32px] md:mb-[40px] overflow-hidden" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758448755778-90ebf4d0f1e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBtb2Rlcm4lMjBzb2ZhJTIwbGl2aW5nJTIwcm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc3NzQwMjQ3NHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Luxury modern sectional sofa"
            className="w-full h-[280px] md:h-[400px] lg:h-[480px] object-cover grayscale-[25%] contrast-105 hover:grayscale-0 transition-all duration-700"
          />
        </div>

        <div className="text-center w-full max-w-[780px] flex flex-col px-4" style={{ gap: '32px' }}>
          <h1
            style={{
              fontFamily: "'Playfair Display SC', serif",
              fontSize: 'clamp(28px, 5vw, 54px)',
              letterSpacing: '-0.01em',
              lineHeight: 1.15,
              color: '#1A1A1A',
            }}
          >
            At Bespoke by Pelican,
          </h1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', color: '#6B6560', fontFamily: "'Montserrat', sans-serif" }}>
            <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', lineHeight: 1.9, letterSpacing: '0.01em' }}>
              we aim to demonstrate our expertise in creating furniture solutions fine tuned to your environment.
              We curate product design as experience — global in perspective, bespoke in execution, and rooted in narrative.
            </p>

            <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', lineHeight: 1.9, letterSpacing: '0.01em' }}>
              We give form to your ideas redefining how stories are told through a blend of engineering and craftsmanship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
