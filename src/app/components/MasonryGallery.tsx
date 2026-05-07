import { ImageWithFallback } from './figma/ImageWithFallback';

type Product = { brand?: false; src: string; name: string; url: string };
type BrandCard = { brand: true; url: string };
type Item = Product | BrandCard;

const items: Item[] = [
  { src: '/aari bed.jpeg',    name: 'Aari Bed',             url: 'https://pelicanessentials.com/products/aari-bed-solid-teak-walnut-oak-wood' },
  { src: '/Mowa bed.jpeg',    name: 'Mowa Bed',             url: 'https://pelicanessentials.com/products/mowa-bed-solid-teak-wood-queen' },
  { src: '/lore1.jpeg',       name: 'Lore 3 Seater',        url: 'https://pelicanessentials.com/products/heranca-3-seater' },
  { src: '/serenity.jpeg',    name: 'Serenity Table',       url: 'https://pelicanessentials.com/products/serenity-table-5x3-feet-solid-teak' },
  { src: '/slumbr.jpeg',      name: 'Slumbr Sofa Cum Bed',  url: 'https://pelicanessentials.com/products/slumbr-sleeper-sofa-sofa-cum-bed-7-feet' },
  { brand: true,                                             url: 'https://pelicanessentials.com' },
  { src: '/palo leather.jpeg',name: 'Palo Sofa — Leather',  url: 'https://pelicanessentials.com/products/palo-sofa-3-seater-7-5-feet-genuine-leather' },
  { src: '/lumo.jpeg',        name: 'Lumo Sofa',            url: 'https://pelicanessentials.com/collections/lumo-sofa-sets' },
  { src: '/kosha.jpeg',       name: 'Kosha Dining Table',   url: 'https://pelicanessentials.com/products/kosha-dining-table-7-feet-solid-teak-walnut-oak-wood-copy' },
  { src: '/anne.jpeg',        name: 'Anne Sofa',            url: 'https://pelicanessentials.com/collections/anne-sofa-sets' },
  { src: '/elan dining.jpeg', name: 'Elan Dining Table',    url: 'https://pelicanessentials.com/products/elan-dining-table-6-feet-solid-teak-walnut-oak-wood' },
  { src: '/Palo.jpeg',        name: 'Palo Sectional',       url: 'https://pelicanessentials.com/products/sectional-wood-legs' },
  { src: '/lore.jpeg',        name: 'Lore Loveseat',        url: 'https://pelicanessentials.com/products/loveseat' },
];

export default function MasonryGallery({ id }: { id?: string }) {
  return (
    <section id={id} className="w-full bg-white py-[40px] md:py-[48px] lg:py-[64px] px-4 md:px-8">
      <div className="max-w-[1300px] mx-auto flex flex-col items-center">
        <div className="w-full mb-[32px] md:mb-[40px] lg:mb-[48px]">
          <div className="masonry-gallery" style={{ columns: '3', columnGap: '8px' }}>
            {items.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden shadow-sm group"
                style={{ breakInside: 'avoid', marginBottom: '8px' }}
              >
                {item.brand ? (
                  /* Pelican Essentials brand card */
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                      backgroundColor: '#1A1A1A',
                      aspectRatio: '4/3',
                    }}
                  >
                    <img
                      src="/pe logo.png"
                      alt="Pelican Essentials"
                      style={{ width: '60%', maxWidth: '180px', height: 'auto', filter: 'invert(1)', display: 'block' }}
                    />
                  </a>
                ) : (
                  /* Regular product card */
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'block', position: 'relative', overflow: 'hidden' }}
                  >
                    <ImageWithFallback
                      src={item.src}
                      alt={item.name}
                      style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease' }}
                      className="group-hover:scale-105"
                    />
                    {/* Darken overlay */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                      style={{ backgroundColor: 'rgba(0,0,0,0.2)', transition: 'opacity 0.35s ease', zIndex: 1 }}
                    />
                    {/* Product name label */}
                    <div
                      className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100"
                      style={{
                        backgroundColor: 'rgba(26,26,26,0.88)',
                        padding: '10px 14px',
                        transition: 'opacity 0.35s ease',
                        zIndex: 2,
                      }}
                    >
                      <p style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '10px',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: '#C9A96E',
                        textAlign: 'center',
                        margin: 0,
                      }}>
                        {item.name}
                      </p>
                    </div>
                  </a>
                )}
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
          <p className="text-[16px] md:text-[17px] lg:text-[18px] leading-[1.9] md:leading-[2] text-[#3a3a3a] tracking-[0.01em]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            We have been a leading furniture brand participating in design and manufacturing of premium functional furniture.
            Today, we are a dynamic and multidisciplinary creative collective, bringing years of experience to bear across specialisms, markets and industries.
          </p>
        </div>
      </div>
    </section>
  );
}
