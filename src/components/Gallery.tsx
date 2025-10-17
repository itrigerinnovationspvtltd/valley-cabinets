import Image from 'next/image';

const galleryItems = [
  {
    src: '/Web Images/ivory-shaker/ivory-2.jpg',
    alt: 'Ivory Shaker Kitchen',
    title: 'Ivory Shaker Kitchen',
    description: 'Classic and versatile design'
  },
  {
    src: '/Web Images/chateau-blanc/chateau-2.jpg',
    alt: 'Chateau Blanc Kitchen',
    title: 'Chateau Blanc Kitchen',
    description: 'Elegant and sophisticated'
  },
  {
    src: '/Web Images/stone-harbour/E2-2.jpg',
    alt: 'Stone Harbour Kitchen',
    title: 'Stone Harbour Kitchen',
    description: 'Rich and dramatic finish'
  },
  {
    src: '/Web Images/pebble-beach/K3-A-2.jpg',
    alt: 'Pebble Beach Kitchen',
    title: 'Pebble Beach Kitchen',
    description: 'Modern warmth and style'
  },
  {
    src: '/Web Images/whitewater-bay/E1-2.jpg',
    alt: 'Whitewater Bay Kitchen',
    title: 'Whitewater Bay Kitchen',
    description: 'Clean and bright finish'
  },
  {
    src: '/Web Images/Sage Green/sage2.png',
    alt: 'Sage Green Kitchen',
    title: 'Sage Green Kitchen',
    description: 'Fresh and contemporary look'
  },
  {
    src: '/Web Images/whitewater-bay/E1-1.jpg',
    alt: 'whitewater-bay Kitchen',
    title: 'WhiteWater bay Kitchen',
    description: 'Rich and dramatic finish'
  },
  {
    src: '/Web Images/Apline Mist/Alpine3.jpeg',
    alt: 'Apline Mist Kitchen',
    title: 'Apline Mist Kitchen',
    description: 'Fresh and contemporary look'
  },
  {
    src: '/Web Images/Maple Vale/maple2.jpeg',
    alt: 'Maple vale Kitchen',
    title: 'Maple Vale Kitchen',
    description: 'Clean and Bright Finish'
  }
];

export default function Gallery() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-slate-800 mb-6">
            Our Premium Cabinet Gallery
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Explore our stunning collection of kitchen and bathroom cabinets. Each piece is crafted with precision and designed to transform your space
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-4 shadow-xl hover:shadow-2xl transition-all duration-300">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-100">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
