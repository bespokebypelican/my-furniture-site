import { Ruler, Hammer, Paintbrush, Package } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      icon: Ruler,
      title: 'Design & Planning',
      description: 'Detailed consultation to understand your vision and space requirements',
    },
    {
      icon: Hammer,
      title: 'Expert Craftsmanship',
      description: 'Handcrafted using premium materials and traditional techniques',
    },
    {
      icon: Paintbrush,
      title: 'Finishing Touches',
      description: 'Meticulous attention to every detail and surface treatment',
    },
    {
      icon: Package,
      title: 'Delivery & Installation',
      description: 'White-glove service ensuring perfect placement in your space',
    },
  ];

  return (
    <section className="w-full bg-[#f5f5f3] py-24 px-8">
      <div className="max-w-[1200px] mx-auto">
        <h2
          className="text-center text-5xl mb-4 tracking-tight"
          style={{ fontFamily: "'Playfair Display SC', serif" }}
        >
          Our Process
        </h2>
        <p className="text-center text-[#4a4a4a] mb-16 max-w-[600px] mx-auto">
          From concept to creation, every step is guided by our commitment to excellence
        </p>

        <div className="grid grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 border-2 border-black flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-black group-hover:scale-105">
                <step.icon className="w-10 h-10 transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="mb-3 tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {step.title}
              </h3>
              <p className="text-sm text-[#666] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
