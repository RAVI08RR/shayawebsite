import React from 'react';
import Button from '../../components/ui/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const ModernLightingDubaiSection = ({ roomTypes }) => {
  return (
    <section className="mt-16 sm:mt-20 lg:mt-[70px] bg-light-gray py-12 sm:py-16 lg:py-[78px]">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
          {/* Left Content */}
          <div className="w-full lg:w-[22%] lg:mt-[28px]">
            <h2 className="text-2xl sm:text-3xl lg:text-[50px] font-marcellus font-normal leading-tight lg:leading-[56px] text-text-dark-4 capitalize mb-4 sm:mb-6 lg:mb-[12px]">
              Modern Lighting
              <br />
              designed in <br />
              Dubai
            </h2>

            <p className="text-base sm:text-lg font-lexend font-light leading-relaxed lg:leading-[22px] text-text-dark-10 mb-6 sm:mb-8 lg:mb-[32px]">
              Where innovation meets
              <br />
              timelees design to create
              <br />
              contemporary lightting concepts
              <br />
              for any space.
            </p>

            <Button className="bg-text-green text-white rounded-[18px] px-6 sm:px-8 lg:px-[34px] py-1.5 sm:py-2 lg:py-[6px] text-lg sm:text-xl font-medium font-lexend">
              EXPLORE
            </Button>
          </div>

          {/* Right Swiper/Grid */}
          <div className="w-full lg:w-[74%] lg:self-center">
            {/* Swiper for mobile/tablet, grid for large screens */}
            <div className="block lg:hidden">
              <Swiper
                modules={[Pagination]}
                spaceBetween={24}
                slidesPerView={1.2}
                pagination={{ clickable: true }}
                breakpoints={{
                  640: { slidesPerView: 2, spaceBetween: 24 },
                  1024: { slidesPerView: 4, spaceBetween: 24 },
                }}
                className="pb-8"
              >
                {roomTypes.map((room, index) => (
                  <SwiperSlide key={room.id}>
                    <div className={`flex flex-col gap-3 sm:gap-4 lg:gap-[16px]`}>
                      <div className="relative overflow-hidden rounded-lg lg:rounded-[20px]">
                        <img
                          src={room.image}
                          alt={room.name}
                          className="w-full object-cover h-[250px] sm:h-[300px] lg:h-[472px] hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-lg sm:text-xl lg:text-[24px] font-lexend font-medium leading-tight lg:leading-[30px] text-text-dark-1">
                        {room.name}
                      </h3>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="hidden lg:grid grid-cols-4 gap-[24px]">
              {roomTypes.map((room, index) => (
                <div
                  key={room.id}
                  className={`flex flex-col gap-3 sm:gap-4 lg:gap-[16px] ${index === 0 ? 'lg:mt-[6px]' : ''}`}
                >
                  <div className="relative overflow-hidden rounded-lg lg:rounded-[20px]">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full object-cover h-[250px] sm:h-[300px] lg:h-[472px] hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-[24px] font-lexend font-medium leading-tight lg:leading-[30px] text-text-dark-1">
                    {room.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernLightingDubaiSection;
