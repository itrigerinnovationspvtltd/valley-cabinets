import Image from 'next/image';

export default function HowItWorks() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          {/* How it Works */}
          <div className="group flex flex-col h-full">
            <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300 mb-8">
              <Image
                src="/Web Images/ivory-shaker/ivory-3.jpg"
                alt="Modern kitchen with ivory shaker cabinets"
                width={600}
                height={400}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-800/40 to-transparent">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm text-slate-100">Professional installation or DIY options available</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-4xl font-bold text-slate-800 mb-6">
                  How it Works
                </h3>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Save time by having us install the cabinets or save money by installing them yourself
                </p>
              </div>
              <button className="border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                LEARN WHAT&apos;S BEST FOR YOU
              </button>
            </div>
          </div>

          {/* Wood vs MDF */}
          <div className="group flex flex-col h-full">
            <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300 mb-8">
              <Image
                src="/Web Images/stone-harbour/E2-Charcoal-Gallery1.jpg"
                alt="Stone Harbour cabinets with marble countertops"
                width={600}
                height={400}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-800/40 to-transparent">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm text-slate-100">Premium solid wood construction</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-4xl font-bold text-slate-800 mb-6">
                  Wood vs MDF
                </h3>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  There are several reasons high-end homes are outfitted with solid wood cabinets, from a premium appearance and better resale value to durability and repairability
                </p>
              </div>

              <button className="border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                READ ABOUT OUR CABINETS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
