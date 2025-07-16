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
    name: 'Raj Hosseini',
    title: 'CEO and Founder at Milanco',
    image: '../../../images/profile.png',
    rating: 5,
    testimonial:
      'Shaya Lighting completely transformed our space. From the initial consultation to final delivery, everything was smooth, professional, and on time. Their team understood exactly what we needed and delivered lighting solutions that elevated both the function and style of our interiors. Truly a partner you can trust!',
  },
  {
    id: 3,
    name: 'Mustfa Khan',
    title: 'CEO and Founder at Milanco',
    image: '../../../images/profile.png',
    rating: 5,
    testimonial:
      'Shaya Lighting completely transformed our space. From the initial consultation to final delivery, everything was smooth, professional, and on time. Their team understood exactly what we needed and delivered lighting solutions that elevated both the function and style of our interiors. Truly a partner you can trust!',
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
    <div className="relative min-h-[50vh] bg-black overflow-hidden bg-testimonials">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      </div> */}

      {/* Subtle Wave Pattern */}
      {/* <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <path d="M0,400 Q300,200 600,400 T1200,400 L1200,800 L0,800 Z" fill="white" />
          <path d="M0,500 Q300,300 600,500 T1200,500 L1200,800 L0,800 Z" fill="white" />
        </svg>
      </div> */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-white mb-4 tracking-wide">
            Trusted By Designers & Builders
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-4xl mx-auto ">
          <div className=" rounded-2xl p-8 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-sm bg-testimonial">
            <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
              {/* Profile Image */}
              <div className="flex-shrink-0 mx-auto sm:mx-0">
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden shadow-lg ring-4 ring-white profile-testimonial">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover "
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
                        className="w-2 h-2 sm:w-7 sm:h-7 fill-green-500 text-green-500"
                      />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-normal testimonial-pera">
                  {currentTestimonial.testimonial}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-12 gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 buttlets-testimonail  ${
                index === currentIndex
                  ? 'bg-white scale-125 '
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
