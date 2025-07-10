import React from 'react';
import Button from '../../components/ui/Button';

const WhoWeAreSection = ({ certifications }) => {
  return (
    <section className="mt-12 sm:mt-16 lg:mt-[133px] px-4 sm:px-6 lg:px-16">
      <div className="w-full lg:max-w-[1790px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
          {/* Video/Image Section */}
          <div className="w-full lg:w-[52%] relative">
            <div className="relative rounded-lg lg:rounded-[20px] overflow-hidden">
              <img
                src="/images/img_image_1_1.png"
                alt="Shaya Lighting Interior"
                className="w-full h-[300px] sm:h-[400px] lg:h-[570px] object-cover"
              />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className="w-16 sm:w-20 lg:w-[124px] h-16 sm:h-20 lg:h-[124px] bg-overlay-1 rounded-full flex items-center justify-center hover:bg-opacity-60 transition-all duration-200"
                  aria-label="Play video"
                >
                  <img
                    src="/images/img_polygon_1.svg"
                    alt="Play"
                    className="w-4 sm:w-5 lg:w-[18px] h-4 sm:h-5 lg:h-[26px] ml-1"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-[44%] lg:mt-[30px]">
            <h2 className="text-3xl sm:text-4xl lg:text-[60px] font-marcellus font-normal leading-tight lg:leading-[64px] text-text-dark-4 uppercase">
              Who We Are: <br />
              Passion for Design
            </h2>

            <p className="text-base sm:text-lg font-lexend font-light leading-relaxed lg:leading-[24px] text-text-dark-11 mt-4 sm:mt-5 lg:mt-[18px] lg:w-[68%]">
              Shaya Lighting delivers innovative, premium lighting solutions for modern spaces,
              blending design, efficiency, functionality, and exceptional craftsmanship.
            </p>

            <Button className="bg-green-800 text-white rounded-[18px] px-6 sm:px-8 lg:px-[34px] py-1.5 sm:py-2 lg:py-[6px] text-lg sm:text-xl font-medium font-lexend mt-8 sm:mt-10 lg:mt-[40px]">
              EXPLORE
            </Button>

            {/* Certifications */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-[18px] mt-12 sm:mt-16 lg:mt-[30px]">
              {certifications.map((cert, index) => (
                <img
                  key={index}
                  src={cert}
                  alt={`Certification ${index + 1}`}
                  className="w-10 sm:w-20 lg:w-20 h-10 sm:h-20 lg:h-20 object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
