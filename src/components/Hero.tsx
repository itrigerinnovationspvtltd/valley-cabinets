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

export default function Hero() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center  pt-20">
      <div className="w-full max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 ">
        
        {/* Left Side - Text Content (1 part) */}
        <div className="md:col-span-1 flex flex-col justify-center space-y-8 px-28">
          <h1 className="text-5xl font-bold text-[#0a2e29]">
            Solid Wood Cabinets at Great Prices.
          </h1>
          <p className="text-gray-700">
            <span className="font-bold">No MDF or thermofoil.</span> Plywood boxes, dovetail drawers, soft-close hardware— and professional Ottawa-area installation.
          </p>
          <div className="flex space-x-2">
            <button className="bg-green-900 text-white px-2 py-2 rounded hover:bg-green-800 transition ">
              FREE 3D DESIGN
            </button>
            <button className="border border-green-900 text-green-900 px-2 py-2 rounded hover:bg-green-50 transition">
              ORDER SAMPLES
            </button>
          </div>
        </div>

        {/* Right Side - Form with Background (2 parts) */}
        <div
          className="col-span-2 h-full bg-cover bg-center rounded flex items-center justify-end pr-16 shadow-l-[100px] shadow-[0_0_20px] shadow-green-400/20 bg-[url('/Web%20Images/whitewater-bay/E1-1.jpg')] "
        >
          
          <div className="bg-white shadow-md flex flex-col items-center m-8 p-8 border border-gray-200 w-full max-w-md rounded-4xl">
            <h2 className="text-2xl font-semibold mb-4">Free 3D Design</h2>
            <form className="space-y-3 w-full">
              <label className="mb-1 text-base text-gray-700">Name</label>
              <input type="text" className="w-full border rounded px-4 py-1" />

              <label className="mb-1 text-base text-gray-700">Email</label>
              <input type="email" className="w-full border rounded px-4 py-1" />

              <label className="mb-1 text-base text-gray-700">Phone</label>
              <input type="tel" className="w-full border rounded px-4 py-1" />

              <label className="mb-1 text-base text-gray-700">City / Neighbourhood</label>
              <input type="text" className="w-full border rounded px-4 py-1" />

              <label className="mb-1 text-base text-gray-700">Installation Needed?</label>
              <select className="w-full border rounded px-4 py-1">
                <option>Yes</option>
                <option>No</option>
              </select>

              <label className="mb-1 text-base text-gray-700">Upload Rough Layout / Photos</label>
              <input type="file" className="w-full border rounded px-4 py-1" />

              <label className="mb-1 text-base text-gray-700">Notes</label>
              <textarea className="w-full border rounded px-4 py-1 h-9" />

              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="text-white bg-[#ae8c67] hover:bg-[#9b7c5b] px-6 py-3 rounded transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
