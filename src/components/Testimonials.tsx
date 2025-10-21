'use client';

import { useState } from 'react';

const testimonials = [
  {
    name: 'Theodore Blake',
    title: 'Brand Manager, Vellox',
    rating: 5,
    text: 'From design to installation, Valley Cabinet Supply brought our kitchen to life with precision and soul. Couldn\'t have asked for a better partner.',
    avatar: '/images/testimonial-1.jpg'
  },
  {
    name: 'Marina Cristofferson',
    title: 'CEO, Lemmon',
    rating: 5,
    text: 'The Valley Cabinet team felt like an extension of our own. They brought clarity and creativity to every step of the process. We get compliments on our kitchen almost daily now!',
    avatar: '/images/testimonial-2.jpg'
  },
  {
    name: 'Damian Bennett',
    title: 'Founder, LINX',
    rating: 5,
    text: 'Our kitchen renovation doubled our home value in less than a month after Valley Cabinet Supply took over our project. Their eye for design and strategic planning is unmatched.',
    avatar: '/images/testimonial-3.jpg'
  },
  {
    name: 'Mia Patakis',
    title: 'Design Director, Summa',
    rating: 5,
    text: 'As a startup, we needed fast, smart, and beautiful. Valley Cabinet Supply delivered all three, and then some. We\'ll be back for round two soon. Incredible!',
    avatar: '/images/testimonial-4.jpg'
  },
  {
    name: 'Jennifer Smith',
    title: 'Homeowner, Calgary',
    rating: 5,
    text: 'From consultation to installation, Valley Cabinet Supply exceeded our expectations. The quality is outstanding and the customer service is top-notch.',
    avatar: '/images/testimonial-5.jpg'
  },
  {
    name: 'Robert Wilson',
    title: 'Contractor, Halifax',
    rating: 5,
    text: 'The custom design process was seamless and the final result is exactly what we envisioned. Worth every penny!',
    avatar: '/images/testimonial-6.jpg'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getCurrentTestimonials = () => {
    const start = currentIndex * itemsPerPage;
    return testimonials.slice(start, start + itemsPerPage);
  };

  const StarIcon = () => (
    <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
      
         <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#172128] text-center pb-10 sm:pb-14'>What Our Customers Are Saying</h1>
        {/* Testimonials Grid - 1 Row Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-10 p-4 sm:p-6 md:p-9">
          {getCurrentTestimonials().slice(0, 4).map((testimonial, index) => (
            <div key={index} className="flex flex-col justify-between bg-gray-100 py-6 px-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              
              
              {/* Rating */}
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              
              {/* Review Text */}
              <p className="text-black leading-relaxed italic text-center font-medium text-sm sm:text-base">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className='flex gap-3 pt-7 items-center justify-center sm:justify-start'>
              {/* Profile Picture */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#172128] flex items-center justify-center mb-0 sm:mb-6">
                <span className="text-base sm:text-xl font-bold text-white">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              
              {/* Name and Title */}
              <div className="text-left sm:text-center mb-2 sm:mb-4">
                <h4 className="text-sm sm:text-base font-bold text-[#172128] mb-1">{testimonial.name}</h4>
                <p className="text-slate-500 text-xs font-medium">{testimonial.title}</p>
              </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0">
          {/* Previous/Next Controls */}
          <div className="flex items-center space-x-6 sm:pl-10">
            <button
              onClick={prevSlide}
              className="text-slate-600 hover:text-slate-800 transition-colors duration-300 font-medium"
            >
              Previous
            </button>
            <button
              onClick={nextSlide}
              className="text-slate-600 hover:text-slate-800 transition-colors duration-300 font-medium flex items-center"
            >
              Next
              <div className="w-2 h-2 bg-slate-800 rounded-full ml-2"></div>
            </button>
          </div>

          {/* Pagination Dots - Centered */}
          <div className="flex items-center space-x-3">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-slate-800' : 'bg-slate-300'
                }`}
              />
            ))}
          </div>

          {/* Customer Avatars */}
          <div className="hidden sm:flex items-center space-x-3 sm:pr-10">
            <div className="flex -space-x-1">
              {testimonials.slice(0, 3).map((_, index) => (
                <div key={index} className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 border-2 border-white flex items-center justify-center">
                  <span className="text-xs font-bold text-slate-600">
                    {testimonials[index].name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              ))}
            </div>
            <span className="text-slate-600 font-medium">25+</span>
          </div>
        </div>
      </div>
    </section>
  );
}
