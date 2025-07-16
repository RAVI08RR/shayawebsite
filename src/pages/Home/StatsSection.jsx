import React from 'react';

const StatsSection = () => {
  return (
    <section className="mt-8 sm:mt-12 lg:mt-[34px] px-4 sm:px-6 lg:px-16">
      <div className="w-full lg:max-w-[1790px] mx-auto">
        <h2 className="lg:hidden text-2xl sm:text-3xl lg:text-[50px] font-marcellus font-[400] leading-tight lg:leading-[64px] text-text-dark-4 text-center lg:text-left mb-6 lg:mb-0 lg:w-[34%]  align-top">
          Trusted Numbers,
          <br className="sm:hidden" /> Timeless Light
        </h2>
        {/* Mobile & Tablet Layout */}
        <div className="block lg:hidden">
          <div className="bg-[#EEF8EF] rounded-xl p-5 flex flex-row items-center justify-between">
            <div className="flex-1 text-center">
              <div className="text-[25px] font-lexend font-[400] text-text-green leading-none">
                60,000+
              </div>
              <div className="text-[14px] font-lexend font-normal text-text-dark-4 mt-1">
                sqft
                <br />
                factory
              </div>
            </div>
            <div className="h-20 w-px bg-[#CFE3D9] mx-2"></div>
            <div className="flex-1 text-center">
              <div className="text-[25px] font-lexend font-[400] text-text-green leading-none">
                25+
              </div>
              <div className="text-[14px] font-lexend font-normal text-text-dark-4 mt-1">
                years
                <br />
                experience
              </div>
            </div>
            <div className="h-20 w-px bg-[#CFE3D9] mx-2"></div>
            <div className="flex-1 text-center">
              <div className="text-[25px] font-lexend font-[400] text-text-green leading-none">
                100+
              </div>
              <div className="text-[14px] font-lexend font-normal text-text-dark-4 mt-1">
                Customer
                <br />
                Support
              </div>
            </div>
          </div>
        </div>
        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-row justify-between items-start lg:items-center gap-0">
          <div className="w-[70%]">
            <h2 className="text-2xl sm:text-3xl lg:text-[50px] font-marcellus font-[400] leading-tight lg:leading-[64px] text-text-dark-4 text-center lg:text-left mb-6 lg:mb-0 lg:w-[75%] lg:inline-block align-top">
              Trusted Numbers,
              <br className="sm:hidden" /> Timeless Light
            </h2>
          </div>
          <div className="w-[50%] bg-[#F4F4F4] rounded-[10px] p-[18px] counter-box lg:h-[136px] flex flex-row items-center justify-between">
            <div className="flex-1">
              <h3 className="text-[25px] font-lexend font-[500]  leading-[53px] text-text-green text-left">
                60,000+
              </h3>
              <p className="text-lg font-lexend font-normal leading-[16px] text-text-dark-4 mt-2 text-left">
                sqft factory
              </p>
            </div>
            <div className="h-20  w-px bg-green-overlay mx-6"></div>
            <div className="flex-1">
              <h3 className="text-[25px] font-lexend font-[500]  leading-[53px] text-text-green text-left">
                25+
              </h3>
              <p className="text-lg font-lexend font-normal leading-[16px] text-text-dark-4 mt-2 text-left">
                years experience
              </p>
            </div>
            <div className="h-20 w-px bg-green-overlay mx-6"></div>
            <div className="flex-1">
              <h3 className="text-[25px] font-lexend font-[500] leading-[53px] text-text-green text-left">
                100+
              </h3>
              <p className="text-lg font-lexend font-normal leading-[16px] text-text-dark-4 mt-2 text-left">
                Customer Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
