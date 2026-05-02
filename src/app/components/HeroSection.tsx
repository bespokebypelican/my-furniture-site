import { ImageWithFallback } from './figma/ImageWithFallback';

export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-b from-[#f8f8f6] to-[#f5f5f3] py-[40px] md:py-[48px] lg:py-[64px] px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        <div className="w-full mb-[32px] md:mb-[40px] lg:mb-[48px] overflow-hidden shadow-sm">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758448755778-90ebf4d0f1e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBtb2Rlcm4lMjBzb2ZhJTIwbGl2aW5nJTIwcm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc3NzQwMjQ3NHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Luxury modern sectional sofa"
            className="w-full h-[280px] md:h-[400px] lg:h-[480px] object-cover grayscale-[25%] contrast-105 hover:grayscale-0 transition-all duration-700"
          />
        </div>

        <div className="text-center w-full max-w-[780px] flex flex-col gap-[32px] md:gap-[40px] px-4">
          <h1
            className="text-[40px] md:text-[56px] lg:text-[68px] tracking-tight leading-[1.15] text-[#1a1a1a]"
            style={{ fontFamily: "'Playfair Display SC', serif" }}
          >
            At Bespoke by Pelican,
          </h1>

          <div className="flex flex-col gap-[24px] md:gap-[28px] text-[#3a3a3a]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
            <p className="text-[16px] md:text-[17px] lg:text-[18px] leading-[1.9] md:leading-[2] tracking-[0.01em]">
              we aim to demonstrate our expertise in creating furniture solutions fine tuned to your environment.
              We curate product design as experience — global in perspective, bespoke in execution, and rooted in narrative.
            </p>

            <p className="text-[16px] md:text-[17px] lg:text-[18px] leading-[1.9] md:leading-[2] tracking-[0.01em]">
              We give form to your ideas redefining how stories are told through a blend of engineering and craftsmanship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
