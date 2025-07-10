// 'use client';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import { Star } from 'lucide-react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const testimonials = [
//   {
//     id: 1,
//     name: 'Ali Hosseini',
//     title: 'CEO and Founder at Milanco',
// image: '../../../images/profile.png',
//     rating: 5,
//     testimonial:
//       'Shaya Lighting completely transformed our space. From the initial consultation to final delivery, everything was smooth, professional, and on time. Their team understood exactly what we needed and delivered lighting solutions that elevated both the function and style of our interiors. Truly a partner you can trust!',
//   },
//   {
//     id: 2,
//     name: 'Sarah Johnson',
//     title: 'Interior Designer at ModernSpaces',
//     image: '../../../images/profile.png',
//     rating: 5,
//     testimonial:
//       'Working with Shaya Lighting has been an absolute pleasure. Their attention to detail and innovative lighting solutions have consistently exceeded our expectations. They bring creativity and professionalism to every project, making them our go-to lighting partner.',
//   },
//   {
//     id: 3,
//     name: 'Michael Chen',
//     title: 'Architect at Urban Design Co.',
//     image: '../../../images/profile.png',
//     rating: 5,
//     testimonial:
//       'The quality of work and customer service from Shaya Lighting is unmatched. They understand the architectural vision and translate it into stunning lighting designs that enhance every space. Highly recommended for any serious design project.',
//   },
// ];

// const TestimonialSection = () => {
//   return (
//     <div className="bg-testimonail">
//       <div className="relative max-w-4xl mx-auto">
//         <h2 className="text-2xl sm:text-3xl lg:text-[50px] font-serif font-normal text-center lg:leading-[63px] text-white capitalize mb-8 sm:mb-12 lg:mb-[72px]">
//           Trusted by Designers & Builders
//         </h2>
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={30}
//           slidesPerView={1}
//           pagination={{
//             clickable: true,
//             bulletClass: 'swiper-pagination-bullet testimonial-bullet text-white',
//             bulletActiveClass: 'swiper-pagination-bullet-active testimonial-bullet-active',
//             renderBullet: (index, className) => `<span class="${className}"></span>`,
//           }}
//           autoplay={{
//             delay: 5000,
//             disableOnInteraction: false,
//           }}
//           loop={true}
//           className="testimonial-swiper"
//         >
//           {testimonials.map((testimonial) => (
//             <SwiperSlide key={testimonial.id}>
//               {/* Testimonial Card with Horizontal Layout */}
//               <div className="bg-white rounded-lg p-4 sm:p-6 lg:p-[32px] text-left max-w-4xl mx-auto">
//                 <div className="flex items-start gap-4 sm:gap-6 lg:gap-8">
//                   {/* Profile Image - Left Side */}
//                   <div className="flex-shrink-0 w-16 sm:w-20 lg:w-[100px] h-16 sm:h-20 lg:h-[100px] bg-gray-200 rounded-full overflow-hidden">
//                     <img
//                       src={testimonial.image || '/placeholder.svg'}
//                       alt={testimonial.name}
//                       className="w-full h-full object-cover testimonail-profile"
//                     />
//                   </div>

//                   {/* Content - Right Side */}
//                   <div className="flex-1 min-w-0">
//                     {/* Name and Stars Row */}
//                     <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-2">
//                       <div>
//                         <h3 className="text-xl sm:text-2xl lg:text-[32px] font-semibold leading-tight text-gray-900 mb-1">
//                           {testimonial.name}
//                         </h3>
//                         <p className="text-sm sm:text-base lg:text-[16px] font-normal text-gray-600">
//                           {testimonial.title}
//                         </p>
//                       </div>
//                       <div className="flex gap-1 sm:gap-2 flex-shrink-0">
//                         {Array.from({ length: testimonial.rating }).map((_, index) => (
//                           <Star
//                             key={index}
//                             className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 fill-green-500 text-green-500"
//                           />
//                         ))}
//                       </div>
//                     </div>

//                     {/* Testimonial Text */}
//                     <p className="text-sm sm:text-base lg:text-[16px] font-normal leading-relaxed text-gray-700 mt-4">
//                       {testimonial.testimonial}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default TestimonialSection;

import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Ali Hosseini',
    title: 'CEO and Founder at Milanco',
    image: '../../../images/profile.png',
    rating: 5,
    testimonial:
      'Shaya Lighting completely transformed our space. From the initial consultation to final delivery, everything was smooth, professional, and on time. Their team understood exactly what we needed and delivered lighting solutions that elevated both the function and style of our interiors. Truly a partner you can trust!',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    title: 'Interior Designer at ModernSpaces',
    image: '../../../images/profile.png',
    rating: 5,
    testimonial:
      'Working with Shaya Lighting has been an absolute pleasure. Their attention to detail and innovative lighting solutions have consistently exceeded our expectations. They bring creativity and professionalism to every project, making them our go-to lighting partner.',
  },
  {
    id: 3,
    name: 'Michael Chen',
    title: 'Architect at Urban Design Co.',
    image: '../../../images/profile.png',
    rating: 5,
    testimonial:
      'The quality of work and customer service from Shaya Lighting is unmatched. They understand the architectural vision and translate it into stunning lighting designs that enhance every space. Highly recommended for any serious design project.',
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      </div>

      {/* Subtle Wave Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <path d="M0,400 Q300,200 600,400 T1200,400 L1200,800 L0,800 Z" fill="white" />
          <path d="M0,500 Q300,300 600,500 T1200,500 L1200,800 L0,800 Z" fill="white" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-white mb-4 tracking-wide">
            Trusted By Designers & Builders
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
              {/* Profile Image */}
              <div className="flex-shrink-0 mx-auto sm:mx-0">
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden shadow-lg ring-4 ring-white">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center sm:text-left">
                {/* Name and Title */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                      {currentTestimonial.name}
                    </h3>
                    <p className="text-lg sm:text-xl text-gray-600 font-medium">
                      {currentTestimonial.title}
                    </p>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 justify-center sm:justify-start">
                    {Array.from({ length: currentTestimonial.rating }).map((_, index) => (
                      <Star
                        key={index}
                        className="w-6 h-6 sm:w-7 sm:h-7 fill-green-500 text-green-500"
                      />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-normal">
                  {currentTestimonial.testimonial}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 group"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:text-gray-200" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 group"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:text-gray-200" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white scale-125'
                  : 'bg-white bg-opacity-40 hover:bg-opacity-60'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
