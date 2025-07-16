import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const FeaturedProduct = () => {
  const featuredProducts = [
    { id: 1, name: 'INDOOR', image: '/images/img_mask_group.png' },
    { id: 2, name: 'OUTDOOR', image: '/images/outdoor.png' },
    { id: 3, name: 'CONTROLS', image: '/images/control.png' },
  ];

  return (
    <>
      {/* Featured Products */}
      <section className="mt-10 sm:mt-20 lg:mt-[68px] px-4 sm:px-6 lg:px-16">
        <div className="w-full lg:max-w-[1790px] mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-marcellus font-normal leading-tight lg:leading-[55px] text-text-dark-4 text-center mb-2 sm:mb-12 lg:mb-[30px]">
            Featured Products
          </h2>

          {/* Mobile Carousel */}
          <div className="block sm:hidden">
            <Swiper
              modules={[Pagination]}
              spaceBetween={15}
              slidesPerView={1.2}
              centeredSlides={true}
              pagination={{ clickable: true }}
              className="pb-8"
            >
              {featuredProducts.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="flex flex-col gap-3">
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-base font-lexend text-center font-light leading-tight text-text-dark-11">
                      {product.name}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Tablet/Desktop Grid */}
          <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-[20px]">
            {featuredProducts.map((product) => (
              <div key={product.id} className="flex flex-col gap-3 sm:gap-4 lg:gap-[14px]">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[250px] lg:h-[362px] object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-[16px] font-lexend font-light leading-tight lg:leading-[23px] text-text-dark-11">
                  {product.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProduct;
