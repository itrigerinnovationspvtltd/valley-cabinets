const quickLinks = ['About Us', 'Assembly and Shipping', 'Solid Wood', 'Kitchen Planning', 'Returns & Exchanges', 'Warranty'];

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-6 text-white">
              Valley Cabinet Supply
            </h3>
            <p className="text-slate-300 mb-8 max-w-lg leading-relaxed text-lg">
              Solid Wood Cabinets at Amazing Prices, Shipped to Your Door. Serving the Ottawa Valley, Ottawa, Toronto, Montreal and most Canadian provinces with premium quality and exceptional service
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-slate-300">
              Quick Links
            </h4>
            <ul className="space-y-3 text-slate-300">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors duration-300 text-lg">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-white">
              Contact Info
            </h4>
            <div className="space-y-4 text-slate-300">
              <div className="flex items-center">
                <span className="text-lg">613-917-0497</span>
              </div>
              <div className="flex items-center">
                <span className="text-lg">info@valleycabinets.ca</span>
              </div>
              <div className="flex items-start">
                <span className="text-lg">640 Barnett Blvd, Renfrew, ON, K7V 0A8</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-16 pt-8 text-center text-slate-400">
          <p className="text-lg">
            &copy; 2025 Valley Cabinet Supply. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
