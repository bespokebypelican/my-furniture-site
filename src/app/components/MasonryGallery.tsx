import { ImageWithFallback } from './figma/ImageWithFallback';

const images = [
  {
    src: "https://images.unsplash.com/photo-1757262798677-ab4af4455a58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBtb2Rlcm4lMjBzb2ZhJTIwbGl2aW5nJTIwcm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc3NzQwMjQ3NHww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Spacious modern living room",
  },
  {
    src: "https://images.unsplash.com/photo-1586310520462-658e93388399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYmVkcm9vbSUyMGludGVyaW9yJTIwZGVzaWdufGVufDF8fHx8MTc3NzI4ODQzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Minimalist bedroom",
  },
  {
    src: "https://images.unsplash.com/photo-1719716133741-9f8f35b3cb04?w=600&h=600&fit=crop&auto=format",
    alt: "Brand showcase",
  },
  {
    src: "https://images.unsplash.com/photo-1610307522657-8c0304960189?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtaW5pbWFsaXN0JTIwYmVkcm9vbSUyMGludGVyaW9yJTIwZGVzaWdufGVufDF8fHx8MTc3NzI4ODQzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Bedroom interior",
  },
  {
    src: "https://images.unsplash.com/photo-1774551351897-c64cd76a7c22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBtb2Rlcm4lMjBzb2ZhJTIwbGl2aW5nJTIwcm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc3NzQwMjQ3NHww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Modern living room",
  },
  {
    src: "https://images.unsplash.com/photo-1704040686446-428673c1c887?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkaW5pbmclMjByb29tJTIwZnVybml0dXJlfGVufDF8fHx8MTc3NzQwMjQ3NHww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Dining room",
  },
  {
    src: "https://images.unsplash.com/photo-1765766638343-e5f5cc8081d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxsdXh1cnklMjBtb2Rlcm4lMjBzb2ZhJTIwbGl2aW5nJTIwcm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc3NzQwMjQ3NHww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Gray sofa with marble table",
  },
  {
    src: "https://images.unsplash.com/photo-1704040686533-694c5b9c52c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBkaW5pbmclMjByb29tJTIwZnVybml0dXJlfGVufDF8fHx8MTc3NzQwMjQ3NHww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Dining chandelier",
  },
  {
    src: "https://images.unsplash.com/photo-1775241183056-06f3f6c10c76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxtaW5pbWFsaXN0JTIwYmVkcm9vbSUyMGludGVyaW9yJTIwZGVzaWdufGVufDF8fHx8MTc3NzI4ODQzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Modern bedroom",
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwZnVybml0dXJlJTIwc2hvd3Jvb218ZW58MXx8fHwxNzc3MzYzNDUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Furniture showroom",
  },
  {
    src: "https://images.unsplash.com/photo-1757262798677-ab4af4455a58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBtb2Rlcm4lMjBzb2ZhJTIwbGl2aW5nJTIwcm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc3NzQwMjQ3NHww&ixlib=rb-4.1.0&q=80&w=400",
    alt: "Panoramic living room",
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwZnVybml0dXJlJTIwc2hvd3Jvb218ZW58MXx8fHwxNzc3MzYzNDUzfDA&ixlib=rb-4.1.0&q=80&w=400",
    alt: "Minimalist furniture display",
  },
];

export default function MasonryGallery({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full bg-white py-[40px] md:py-[48px] lg:py-[64px] px-4 md:px-8">
      <div className="max-w-[1300px] mx-auto flex flex-col items-center">
        <div className="w-full mb-[32px] md:mb-[40px] lg:mb-[48px]">
          <div className="masonry-gallery" style={{ columns: '3', columnGap: '8px', alignContent: 'start', alignItems: 'start' }}>
            {images.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden shadow-sm group cursor-pointer"
                style={{ breakInside: 'avoid', marginBottom: '8px' }}
              >
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto block grayscale-[15%] transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 768px) {
              .masonry-gallery { columns: 2 !important; }
            }
          `}</style>
        </div>

        <div className="text-center w-full max-w-[750px] px-4">
          <p className="text-[16px] md:text-[17px] lg:text-[18px] leading-[1.9] md:leading-[2] text-[#3a3a3a] tracking-[0.01em]" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
            We have been a leading furniture brand participating in design and manufacturing of premium functional furniture.
            Today, we are a dynamic and multidisciplinary creative collective, bringing years of experience to bear across specialisms, markets and industries.
          </p>
        </div>
      </div>
    </section>
  );
}
