const quickLinks = ['About Us', 'Assembly and Shipping', 'Solid Wood', 'Kitchen Planning', 'Returns & Exchanges', 'Warranty'];

export default function Footer() {
  return (
    <footer className="bg-[#172128] text-white pt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-3 text-[#AE9F8F]">
              Valley Cabinet Supply
            </h3>
            <p className="text-slate-300 mb-4 max-w-lg leading-relaxed text-base">
              Solid Wood Cabinets at Amazing Prices, Shipped to Your Door. Serving the Ottawa Valley, Ottawa, Toronto, Montreal and most Canadian provinces with premium quality and exceptional service 
               </p>
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-3 text-[#AE9F8F]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-slate-300">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors duration-300 text-base">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-3 text-[#AE9F8F]">
              Contact Info
            </h4>
            <div className="space-y-2 text-slate-300">
              <div className="flex items-center">
                <span className="text-base">613-917-0497</span>
              </div>
              <div className="flex items-center">
                <span className="text-base">info@valleycabinets.ca</span>
              </div>
              <div className="flex items-start">
                <span className="text-base">640 Barnett Blvd, Renfrew, ON, K7V 0A8</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-6 text-center text-slate-400 pb-5">
          <p className="text-lg">
            &copy; 2025 Valley Cabinet Supply. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
