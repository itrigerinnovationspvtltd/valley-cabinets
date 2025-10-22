export default function Contact() {
  return (
    <div id="contact" className="min-h-screen bg-white flex flex-col justify-center items-center pt-28 sm:pt-20">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side - Text Content */}
        
        <div className="flex flex-col justify-center space-y-6 px-6 sm:px-12 md:px-20 text-center md:text-left">
          <h1 className="text-3xl sm:text-5xl font-bold text-[#172128] sm:py-3">
            Free Kitchen Design and Consultation Services
          </h1>
          <p className="text-gray-700 text-base sm:text-lg sm:pb-3">
            In-Home consultation and installation services are available for anyone in the Ottawa Valley and the city and suburbs of Ottawa.
          </p>
          <p className="text-gray-700 text-base sm:text-lg sm:pb-3">
            Virtual consultation is available Canada wide.
          </p>
          <span className="font-bold text-[#172128]">
            Already have a design? Email us at design@valleycabinets.ca or call us at 613-917-0497
          </span>
        </div>

        {/* Right Side - Form with Background */}
        <div className="h-full bg-cover bg-center rounded flex items-center justify-center p-4 sm:p-8 shadow-[0_0_30px] shadow-gray-500 bg-[url('/Web%20Images/whitewater-bay/E1-5.jpg')]">
          <div className="bg-white shadow-md flex flex-col items-center p-6 sm:p-8 border border-gray-200 w-full max-w-sm sm:max-w-md rounded-3xl">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#172128]">Free 3D Design</h2>
            <form className="space-y-3 w-full">
              <label className="text-base text-gray-700">Name</label>
              <input type="text" className="w-full border rounded px-3 py-2" />

              <label className="text-base text-gray-700">Email</label>
              <input type="email" className="w-full border rounded px-3 py-2" />

              <label className="text-base text-gray-700">Phone</label>
              <input type="tel" className="w-full border rounded px-3 py-2" />

              <label className="text-base text-gray-700">Address</label>
              <textarea className="w-full border rounded px-3 py-2 h-20" />

              <label className="text-base text-gray-700">How do you hear about us?</label>
              <select className="w-full border rounded px-3 py-2">
                <option>Internet Search</option>
                <option>Radio</option>
                <option>Social Media</option>
              </select>

              <label className="text-base text-gray-700">I Need Help</label>
              <select className="w-full border rounded px-3 py-2">
                <option>Designing my new kitchen</option>
                <option>Purchasing the correct cabinets</option>
                <option>Other</option>
              </select>

              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="text-white bg-[#AE9F8F] hover:bg-[#79654f] px-6 py-2 rounded transition"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
