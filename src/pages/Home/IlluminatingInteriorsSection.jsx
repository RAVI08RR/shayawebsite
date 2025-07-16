import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const IlluminatingInteriorsSection = ({ projects }) => {
  // Custom navigation refs
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="mt-16 sm:mt-20 lg:mt-[51px] px-4 sm:px-6 lg:px-16">
      <div className="w-full lg:max-w-[1790px] mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-[38px] max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-marcellus font-[400] leading-tight lg:leading-[76px] text-text-dark-4 mb-4 sm:mb-6">
            Illuminating Interiors, Enhancing Moods.
          </h2>
          <p className="text-[16px] sm:text-[16px] font-light leading-relaxed lg:leading-[24px] text-[#6C6C6C] lg:w-[68%] mx-auto font-lexend">
            Explore our standout lighting installations across residential, commercial, and
            architectural spaces — where design meets illumination.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="block lg:hidden relative">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className="pb-8"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="flex flex-col gap-4">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-lg font-lexend font-light leading-tight text-text-dark-8">
                      {project.type}
                    </p>
                    <h3 className="text-xl font-lexend font-normal leading-tight text-text-dark-2">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {/* Custom Arrows */}
            <button
              ref={prevRef}
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md mt-[-40px]"
            >
              <svg
                className="w-5 h-5 text-gray-800"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              ref={nextRef}
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md mt-[-40px]"
            >
              <svg
                className="w-5 h-5 text-gray-800"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-2 gap-6 lg:gap-[42px]">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col gap-4 lg:gap-[24px]">
              <div className="relative overflow-hidden rounded-lg lg:rounded-[20px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[350px] object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col gap-1 lg:gap-[4px]">
                <p className="text-[16px] font-lexend font-light leading-tight lg:leading-[25px] text-[#303030]">
                  {project.type}
                </p>
                <h3 className="text-[32px] lg:text-[20px] font-lexend font-normal leading-tight lg:leading-[40px] text-text-dark-2">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IlluminatingInteriorsSection;
