import React from 'react';

const FeaturedProduct = () => {
  const featuredProducts = [
    { id: 1, name: 'INDOOR', image: '/images/img_mask_group.png' },
    { id: 2, name: 'OUTDOOR', image: '/images/outdoor.png' },
    { id: 3, name: 'CONTROLS', image: '/images/control.png' },
  ];

  return (
    <>
      {' '}
      {/* Featured Products */}
      <section className="mt-10 sm:mt-20 lg:mt-[68px] px-4 sm:px-6 lg:px-16">
        <div className="w-full lg:max-w-[1790px] mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-[60px] font-marcellus font-normal leading-tight lg:leading-[76px] text-text-dark-4 text-center mb-2 sm:mb-12 lg:mb-[30px]">
            Featured Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-[20px]">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="flex flex-col gap-3 sm:gap-4 lg:gap-[14px]">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[250px] sm:h-[300px] lg:h-[462px] object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-base sm:text-lg font-lexend font-light leading-tight lg:leading-[23px] text-text-dark-11">
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
