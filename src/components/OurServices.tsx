
import { FaCube, FaLeaf, FaHammer } from 'react-icons/fa';

export default function OurServices() {
  const services = [
    {
      title: 'Free 3D Design',
      description: 'Get a custom 3D kitchen design and quote at no cost.',
      icon: <FaCube className="text-white w-20 h-20" />,
    },
    {
      title: 'Better Build',
      description: 'Solid wood construction and soft-close doors for less.',
      icon: <FaLeaf className="text-white w-20 h-20" />,
    },
    {
      title: 'Pro Installation',
      description: 'Rely on our skilled Ottawa team to install your cabinets.',
      icon: <FaHammer className="text-white w-20 h-20" />,
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center ">
        <h2 className="text-5xl  font-bold text-[#0a2e29] pb-16">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="bg-green-900 p-5 rounded-md">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
              <p className="text-gray-800 max-w-xs">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
