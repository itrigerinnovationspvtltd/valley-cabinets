import Image from 'next/image';

const steps = [
  {
    step: '1',
    title: 'Initial Consultation',
    description: 'Book an in-home or virtual consultation to discuss your vision and requirements',
    image: '/Web Images/chateau-blanc/chateau-3.jpg'
  },
  {
    step: '2',
    title: 'Design Development',
    description: 'Our experts create detailed 3D renderings and layouts tailored to your space',
    image: '/Web Images/pebble-beach/K3-A-3.jpg'
  },
  {
    step: '3',
    title: 'Final Approval',
    description: 'Review and approve your custom design within 48 hours of consultation',
    image: '/Web Images/whitewater-bay/E1-3.jpg'
  }
];

export default function FreeKitchenDesign() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#172128] mb-8">
            Free Kitchen Design
          </h2>
        </div>

        {/* 3-Step Process */}
        <div className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <Image
                    src={step.image}
                    alt={`Step ${step.step}`}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-800/60 to-transparent">
                    <div className="absolute top-4 left-4 w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-[#172128] mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-12">
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Ottawa Valley kitchen cabinets: book an in-home or virtual consultation and within 48 hours we will have a <strong className="text-slate-800">free design ready for your approval</strong>
          </p>
          <button className="bg-[#AE9F8F] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#79654F] transition-all duration-300 shadow-xl hover:shadow-2xl">
            BOOK A CONSULTATION
          </button>
        </div>
      </div>
    </section>
  );
}
