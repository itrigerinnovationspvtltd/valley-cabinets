import Image from 'next/image';

const cabinets = [
  {
    name: 'Ivory Shaker',
    sampleImage: '/Web Images/ivory-shaker/S8-White-Maple-Front.jpg',
    kitchenImage: '/Web Images/ivory-shaker/ivory-1.jpg',
    description: 'Classic and versatile'
  },
  {
    name: 'Chateau Blanc',
    sampleImage: '/Web Images/chateau-blanc/H9-B-1.jpg',
    kitchenImage: '/Web Images/chateau-blanc/chateau-1.jpg',
    description: 'Elegant and timeless'
  },
  {
    name: 'Stone Harbour',
    sampleImage: '/Web Images/stone-harbour/E2-Charcoal-Front.jpg',
    kitchenImage: '/Web Images/stone-harbour/E2-1.jpg',
    description: 'Sophisticated dark finish'
  },
  {
    name: 'Pebble Beach',
    sampleImage: '/Web Images/pebble-beach/K3-Greige-Maple-Front.jpg',
    kitchenImage: '/Web Images/pebble-beach/K3-A-1.jpg',
    description: 'Modern and warm'
  }
];

export default function SolidWoodCabinets() {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#172128] mb-6">
            Solid Wood Cabinets at Great Prices
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
            No MDF or Thermofoil here. Just modern kitchen cabinets with premium features to fit any budget.
          </p>
          <a href="#contact">
          <button className="bg-slate-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-700 transition-all duration-300 shadow-xl hover:shadow-2xl">
            SHOP KITCHEN & BATHROOM CABINETS
          </button>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cabinets.map((cabinet, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative mb-4">
                {/* Cabinet Sample Overlay */}
                  <div className="absolute top-4 left-4 z-10 w-24 h-32 rounded-lg overflow-hidden shadow-2xl border-2 border-white">
                  <Image
                    src={cabinet.sampleImage}
                    alt={`${cabinet.name} sample`}
                    width={96}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Kitchen Scene */}
                <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <Image
                    src={cabinet.kitchenImage}
                    alt={`${cabinet.name} kitchen`}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-800/40 to-transparent">
                    <div className="absolute bottom-4 right-4 text-white">
                      <p className="text-sm text-slate-100">{cabinet.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-[#172128] mb-2">{cabinet.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
