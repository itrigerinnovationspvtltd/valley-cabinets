// 'use client';

// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import { ChevronRight } from 'lucide-react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const heroImages = [
//   {
//     src: '/Web Images/ivory-shaker/ivory-1.jpg',
//     alt: 'Ivory Shaker Kitchen Cabinets',
//     title: 'Your Dream Kitchen, Delivered',
//     subtitle: 'Premium solid wood cabinets and countertops at factory-direct prices'
//   },
//   {
//     src: '/Web Images/chateau-blanc/chateau-1.jpg',
//     alt: 'Chateau Blanc Kitchen Cabinets',
//     title: 'Crafted for Life, Designed for You',
//     subtitle: 'Experience the perfect blend of style, durability, and affordability'
//   },
//   {
//     src: '/Web Images/stone-harbour/E2-1.jpg',
//     alt: 'Stone Harbour Kitchen Cabinets',
//     title: 'Transform Your Home with Valley Cabinet Supply',
//     subtitle: 'From design to installation, we make your vision a reality'
//   },
//   {
//     src: '/Web Images/pebble-beach/K3-A-1.jpg',
//     alt: 'Pebble Beach Kitchen Cabinets',
//     title: 'Premium Quality, Exceptional Value',
//     subtitle: 'Beautiful cabinets that stand the test of time'
//   }
// ];

// export default function Hero() {
//   return (
//     <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-white via-slate-50 to-blue-50">
//       {/* Always Visible Content */}
//       <div className="absolute inset-0 flex items-center justify-center z-20">
//         <div className="text-center text-slate-800 max-w-5xl mx-auto px-4">
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
//             Your Dream Kitchen, Delivered
//           </h1>
//           <p className="text-xl md:text-2xl mb-8 text-slate-600 max-w-3xl mx-auto">
//             Premium solid wood cabinets and countertops at factory-direct prices
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-900 hover:to-slate-800 text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-slate-500/25">
//               Book Free Consultation
//               <ChevronRight className="ml-2" size={20} />
//             </button>
//             <button className="border-2 border-slate-800/80 text-slate-800 hover:bg-slate-800 hover:text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
//               Order Samples
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Background Images */}
//       <div className="absolute inset-0 z-10">
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={0}
//           slidesPerView={1}
//           navigation
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 5000, disableOnInteraction: false }}
//           loop={true}
//           className="w-full h-full"
//         >
//           {heroImages.map((image, index) => (
//             <SwiperSlide key={index}>
//                 <div className="relative w-full h-full bg-gradient-to-br from-white via-slate-50 to-blue-50">
//                 <Image
//                   src={image.src}
//                   alt={image.alt}
//                   fill
//                   className="object-cover"
//                   priority={index === 0}
//                   onError={(e) => {
//                     console.log('Image failed to load:', image.src);
//                     e.currentTarget.style.display = 'none';
//                   }}
//                 />
//                   <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-blue-50/60" />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }

"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [showPopup, setShowPopup] = useState(false);

  // Show popup after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white flex flex-col justify-center items-center pt-28 sm:pt-20">
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3">
          {/* Left Side - Text Content */}
          <div className="md:col-span-1 flex flex-col justify-center space-y-6 px-6 sm:px-12 md:px-28 text-center md:text-left">
            <h1 className="text-3xl sm:text-5xl md:text-5xl font-bold text-[#172128]">
              Solid Wood Cabinets at Great Prices.
            </h1>
            <p className="text-gray-700 text-base sm:text-lg">
              <span className="font-bold text-[#172128]">
                No MDF or thermofoil.
              </span>{" "}
              Plywood boxes, dovetail drawers, soft-close hardware—and
              professional Ottawa-area installation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 justify-center md:justify-start">
              <a href="#contact">
                <button className="bg-[#AE9F8F] text-white px-4 py-2 rounded hover:bg-[#79654f] transition w-full sm:w-auto">
                  BOOK A CONSULTATION
                </button>
              </a>
            </div>
          </div>

          {/* Right Side - Form with Background */}
          <div className="col-span-2 h-full bg-cover bg-center rounded flex items-center justify-center sm:justify-end p-0 sm:pr-16 bg-[url('/Web%20Images/whitewater-bay/E1-1.jpg')] mt-8 sm:mt-0">

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full sm:w-auto px-6 sm:px-0">
              
              <div className="text-center ">
                <h2 className="text-4xl sm:text-5xl font-extrabold sm:text-white sm:opacity-90 text-[#172128] ">
                  Starting from $4999
                </h2>
                
              </div>

            <div className="bg-white shadow-md flex flex-col items-center m-4 sm:m-8 p-6 sm:p-8 border border-gray-200 w-full max-w-sm sm:max-w-md rounded-3xl">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#172128]">
                Free 3D Design
              </h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault(); // stop page refresh
                  alert("Form submitted successfully!");
                  e.currentTarget.reset();
                }}
                className="space-y-3 w-full"
              >
                <label className="text-base text-gray-700">Name</label>
                <input
                  type="text"
                  required
                  className="w-full border rounded px-3 py-2"
                />
                <label className="text-base text-gray-700">Email</label>
                <input
                  type="email"
                  required
                  className="w-full border rounded px-3 py-2"
                />
                <label className="text-base text-gray-700">Phone</label>
                <input
                  type="tel"
                  required
                  className="w-full border rounded px-3 py-2"
                />
                <label className="text-base text-gray-700">
                  City / Neighbourhood
                </label>
                <input
                  type="text"
                  required
                  className="w-full border rounded px-3 py-2"
                />
                <label className="text-base text-gray-700">
                  Installation Needed?
                </label>
                <select className="w-full border rounded px-3 py-2">
                  <option>Yes</option>
                  <option>No</option>
                </select>
                <label className="text-base text-gray-700">
                  Upload Rough Layout / Photos
                </label>
                <input
                  type="file"
                  className="w-full text-xs border rounded px-2 py-2"
                />
                <label className="text-base text-gray-700">Notes</label>
                <textarea className="w-full border rounded px-3 py-2 h-20" />
                <div className="flex justify-center pt-2">
                  <button
                    type="submit"
                    className="text-white bg-[#AE9F8F] hover:bg-[#79654f] px-6 py-2 rounded transition"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg w-[90%] max-w-md p-6 relative animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl md:text-3xl font-bold text-[#172128]  md:mb-4 text-center">
              Request a Design Consultation
            </h2>
            <p className="text-gray-600 text-center text-sm mb-4 md:mb-8">
              Fill out the form below and our design expert will reach out to
              you.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault(); // stop page refresh
                alert("Form submitted successfully!");
                setShowPopup(false);
              }}
              className="space-y-2"
            >
              <label className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="Name"
                required
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
              <label className="block text-sm font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="Email"
                required
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
              <label className="block text-sm font-medium mb-2">
                Phone
              </label>
              <input
                type="tel"
                name="tel"
                required
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="Message"
                required
                placeholder="Tell us about your project..."
                className="w-full border border-gray-300 rounded-lg py-3 px-4 h-26 md:h-32 resize-none focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
              <button
                type="submit"
                className="w-full bg-[#AE9F8F] text-white py-2 rounded hover:bg-[#79654f] transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
