export default function CTA() {
  return (
    <section className="pt-24 bg-[#0a2e29] relative overflow-hidden">
      <div className="absolute inset-0 "></div>
      <div className="relative max-w-5xl mx-auto text-center px-4">
        <h2 className="text-5xl font-bold text-white mb-4">
          Ready to Transform Your Kitchen?
        </h2>
        <p className="text-xl text-slate-100 mb-4 max-w-3xl mx-auto leading-relaxed">
          Get a free consultation and design within 48 hours. Our experts will help you create the kitchen of your dreams with premium cabinets at unbeatable prices
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-white text-slate-800 hover:bg-slate-100 px-10 py-3 rounded-xl text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-white/25">
            FREE 3D DESIGN
          </button>
          <button className="border-2 border-white/80 text-white hover:bg-white hover:text-slate-800 px-10 py-3 rounded-xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
            ORDER SAMPLES
          </button>
        </div>
      </div>
    </section>
  );
}
