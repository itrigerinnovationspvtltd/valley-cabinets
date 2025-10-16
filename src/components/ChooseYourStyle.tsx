import Image from 'next/image';

const styles = [
  {
    id: 'ivory-shaker',
    name: 'Ivory Shaker',
    image: '/Web Images/ivory-shaker/ivory-1.jpg',
    description: 'Timeless design with clean lines',
    price: '$1200/linear ft'
  },
  {
    id: 'chateau-blanc',
    name: 'Chateau Blanc',
    image: '/Web Images/chateau-blanc/chateau-1.jpg',
    description: 'Elegant and sophisticated look',
    price: '$1350/linear ft'
  },
  {
    id: 'stone-harbour',
    name: 'Stone Harbour',
    image: '/Web Images/stone-harbour/E2-1.jpg',
    description: 'Rich and dramatic finish',
    price: '$1400/linear ft'
  },
  {
    id: 'pebble-beach',
    name: 'Pebble Beach',
    image: '/Web Images/pebble-beach/K3-A-1.jpg',
    description: 'Modern warmth and style',
    price: '$1250/linear ft'
  },
  {
    id: 'sage-green',
    name: 'Sage Green',
    image: '/Web Images/Sage Green/sage-hero-edit.jpg',
    description: 'Fresh and contemporary',
    price: '$1300/linear ft'
  },
  {
    id: 'whitewater-bay',
    name: 'Whitewater Bay',
    image: '/Web Images/whitewater-bay/E1-1.jpg',
    description: 'Clean and bright finish',
    price: '$1150/linear ft'
  }
];

export default function ChooseYourStyle() {
  return (
    <section id="kitchen" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-slate-800 mb-6">
            Choose Your Style
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Select from our wide range of cabinet styles to match your home&apos;s aesthetic.
            Each style is crafted with attention to detail and premium materials.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {styles.map((style) => (
            <div key={style.id} className="cursor-pointer transition-all duration-300 group">
              <div className="relative overflow-hidden rounded-2xl mb-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                <Image
                  src={style.image}
                  alt={style.name}
                  width={300}
                  height={200}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-slate-900">{style.price}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">
                {style.name}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {style.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
