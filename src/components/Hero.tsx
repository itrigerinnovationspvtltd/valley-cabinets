'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const heroImages = [
  {
    src: '/Web Images/ivory-shaker/ivory-1.jpg',
    alt: 'Ivory Shaker Kitchen Cabinets',
    title: 'Your Dream Kitchen, Delivered',
    subtitle: 'Premium solid wood cabinets and countertops at factory-direct prices'
  },
  {
    src: '/Web Images/chateau-blanc/chateau-1.jpg',
    alt: 'Chateau Blanc Kitchen Cabinets',
    title: 'Crafted for Life, Designed for You',
    subtitle: 'Experience the perfect blend of style, durability, and affordability'
  },
  {
    src: '/Web Images/stone-harbour/E2-1.jpg',
    alt: 'Stone Harbour Kitchen Cabinets',
    title: 'Transform Your Home with Valley Cabinet Supply',
    subtitle: 'From design to installation, we make your vision a reality'
  },
  {
    src: '/Web Images/pebble-beach/K3-A-1.jpg',
    alt: 'Pebble Beach Kitchen Cabinets',
    title: 'Premium Quality, Exceptional Value',
    subtitle: 'Beautiful cabinets that stand the test of time'
  }
];

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-white via-slate-50 to-blue-50">
      {/* Always Visible Content */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center text-slate-800 max-w-5xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Your Dream Kitchen, Delivered
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-600 max-w-3xl mx-auto">
            Premium solid wood cabinets and countertops at factory-direct prices
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-900 hover:to-slate-800 text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-slate-500/25">
              Book Free Consultation
              <ChevronRight className="ml-2" size={20} />
            </button>
            <button className="border-2 border-slate-800/80 text-slate-800 hover:bg-slate-800 hover:text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
              Order Samples
            </button>
          </div>
        </div>
      </div>

      {/* Background Images */}
      <div className="absolute inset-0 z-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="w-full h-full"
        >
          {heroImages.map((image, index) => (
            <SwiperSlide key={index}>
                <div className="relative w-full h-full bg-gradient-to-br from-white via-slate-50 to-blue-50">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  onError={(e) => {
                    console.log('Image failed to load:', image.src);
                    e.currentTarget.style.display = 'none';
                  }}
                />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-blue-50/60" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
