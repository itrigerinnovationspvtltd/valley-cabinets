import Image from "next/image";
import { CheckCircle, MapPin, DollarSign } from "lucide-react";


export default function Home() {
  return (
    <main className="bg-white text-gray-900 pt-5 sm:pt-10 shadow-2xl">
      {/* Hero Section */}
      <section className="relative h-[70vh] sm:h-[60vh] flex items-center justify-center text-center bg-gray-100">
        {/* Background image */}
        <Image
          src="/Web Images/whitewater-bay/E1-1.jpg" 
          alt="Kitchen cabinets"
          fill
          className="object-cover brightness-75 shadow-2xl"
        />

        {/* Overlay content */}
        <div className="relative z-10 px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl sm:w-[658px] font-bold text-white mb-6 drop-shadow-lg">
            Solid Wood Cabinets at Great Prices
          </h1>
          <div className="flex  sm:flex-row gap-4 justify-center pt-20 sm:pt-0">
            <button className="bg-[#AE9F8F] hover:bg-[#79654F] text-white px-6 py-3 rounded-lg font-medium shadow w-auto text-xs sm:text-lg">
              FREE 3D DESIGN
            </button>
            <button className="bg-white text-[#333333] hover:bg-[#EBEBEB] px-2 sm:px-6 py-3 rounded-lg font-medium shadow w-auto text-xs sm:text-lg">
              ORDER SAMPLES
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 text-center">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:ga8 max-w-5xl mx-auto">
          {/* Feature 1 */}
          <div className="flex flex-col items-center bg-gray-100 rounded-2xl p-6 sm:p-8">
            <div className="text-4xl mb-4 text-[#172128]"><CheckCircle/></div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#172128]">No MDF or Thermofoil</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Our cabinets are constructed from solid wood, with no MDF or thermofoil materials used.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center  bg-gray-100 rounded-2xl p-6 sm:p-8">
            <div className="text-4xl mb-4 text-[#172128]"><MapPin/></div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#172128]">Ottawa Installation Service</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              We provide professional installation services in Ottawa and the surrounding areas.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center  bg-gray-100 rounded-2xl p-6 sm:p-8">
            <div className="text-3xl mb-4 text-[#172128]"><DollarSign/></div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#172128]">Affordable Quality</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Get premium, solid wood cabinetry at prices that won’t break the bank.
            </p>
          </div>
        </div>
      </section>
      {/* Ottawa Installation Section */}
<section className="py-10 px-4 sm:px-6 md:px-12 text-center bg-white">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-[#172128]">
    Proudly Installing In Ottawa
  </h2>
  <p className="text-gray-700 max-w-2xl mx-auto mb-10 text-base sm:text-lg">
    Let us handle the job. We make the cabinet installation process easy with
    experienced Ottawa installers.
  </p>

  <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
    <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px]">
      <Image
        src="/Web Images/whitewater-bay/E1-2.jpg" 
        alt="Ottawa cabinet installation"
        fill
        className="object-cover object-center"
      />
    </div>
  </div>

  <p className="text-[#172128] text-base sm:text-lg font-bold mt-8">
    Solid wood construction. No MDF or Thermafoil.
  </p>
</section>

    </main>
  );
}
