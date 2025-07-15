import React from 'react';

const StatsSection = () => {
  return (
    <section className="mt-8 sm:mt-12 lg:mt-[34px] px-4 sm:px-6 lg:px-16">
      <div className="w-full lg:max-w-[1790px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-0">
          <div className="w-full lg:w-[34%]">
            <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-marcellus font-[400] leading-tight lg:leading-[64px] text-text-dark-4">
              Trusted Numbers, Timeless Light
            </h2>
          </div>

          <div className="w-full lg:w-[50%] bg-[#F4F4F4] rounded-[10px] p-5 sm:p-5 lg:p-[18px] counter-box lg:h-[136px]">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-[32px]">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-[32px] flex-1">
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl lg:text-[25px]  font-lexend font-[600] leading-tight lg:leading-[53px] text-text-green uppercase text-center sm:text-left">
                    60,000+
                  </h3>
                  <p className="text-base sm:text-lg font-lexend font-light leading-tight lg:leading-[16px] text-text-dark-12 mt-1 sm:mt-2 text-center sm:text-left  ">
                    sqft factory
                  </p>
                </div>

                <div className="w-full sm:w-px h-px sm:h-[92px] bg-green-overlay self-center"></div>

                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl lg:text-[25px] font-lexend font-[600] leading-tight lg:leading-[58px] text-text-green uppercase text-center sm:text-left">
                    25+
                  </h3>
                  <p className="text-base sm:text-lg font-lexend font-light leading-tight lg:leading-[16px] text-text-dark-12 mt-1 sm:mt-2 text-center sm:text-left">
                    years experience
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-[38px]">
                <div className="w-full sm:w-px h-px sm:h-[92px] bg-green-overlay"></div>

                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl lg:text-[25px] font-lexend font-[600] leading-tight lg:leading-[58px] text-text-green uppercase text-center sm:text-left">
                    100+
                  </h3>
                  <p className="text-base sm:text-lg font-lexend font-light leading-tight lg:leading-[16px] text-text-dark-12 mt-1 sm:mt-2 text-center sm:text-left">
                    Customer Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
