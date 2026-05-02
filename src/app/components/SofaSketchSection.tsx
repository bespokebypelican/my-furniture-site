import { ImageWithFallback } from './figma/ImageWithFallback';

export default function SofaSketchSection() {
  return (
    <section className="w-full bg-gradient-to-b from-[#f5f5f3] to-[#fafafa] py-[32px] md:py-[40px] lg:py-[56px] px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        <div className="w-full mb-[28px] md:mb-[36px] lg:mb-[44px] overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwZnVybml0dXJlJTIwc2hvd3Jvb218ZW58MXx8fHwxNzc3MzYzNDUzfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Minimalist furniture showroom"
            className="w-full h-[300px] md:h-[400px] lg:h-[460px] object-cover grayscale-[20%] contrast-105"
          />
        </div>

        <div className="text-center w-full max-w-[700px] px-4">
          <p className="text-[16px] md:text-[17px] lg:text-[18px] leading-[1.9] md:leading-[2] text-[#3a3a3a] tracking-[0.01em]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
            As an experienced furniture manufacturer and multidisciplinary creative
            collective, we transform architectural visions into tangible reality. Our
            design language speaks through clean lines, precise joinery, and materials
            chosen for their inherent beauty and longevity.
          </p>
        </div>
      </div>
    </section>
  );
}
