import React from 'react';

const ProcessSection = ({ processSteps }) => {
  return (
    <section className="mt-16 sm:mt-20 lg:mt-[71px] px-4 sm:px-6 lg:px-16 mb-10">
      <div className="w-full max-w-[70rem] mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-[38px]">
          <h2 className="sm:text-[55px]  lg:text-[50px] font-marcellus font-normal leading-tight lg:leading-[63px] text-text-dark-5 capitalize mb-4 sm:mb-6 our-process-heading">
            Our Process – Simple, Fast & Reliable
          </h2>
          <p className="text-[16px] sm:text-[16px] font-lexend font-light leading-tight lg:leading-[25px] text-[#6C6C6C]">
            From site visit to timely delivery, we make lighting hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-[62px]">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className={`flex flex-col items-center text-center gap-6 sm:gap-8 lg:gap-[34px] ${index === 0 || index === 2 ? 'lg:mt-[10px]' : ''}`}
            >
              <div className="flex-shrink-0">
                <img
                  src={step.icon}
                  alt={`Step ${step.id}`}
                  className="w-12 sm:w-14 lg:w-auto h-12 sm:h-14 lg:h-auto object-contain"
                />
              </div>

              <div className="flex flex-col gap-1 sm:gap-2 lg:gap-[6px]">
                <h3 className="text-lg sm:text-xl font-lexend font-semibold leading-tight lg:leading-[25px] text-text-dark-2">
                  {step.title}
                </h3>
                <p className="text-lg sm:text-xl font-lexend font-light leading-tight lg:leading-[25px] text-text-gray-3">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
