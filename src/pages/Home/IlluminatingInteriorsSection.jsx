import React from 'react';

const IlluminatingInteriorsSection = ({ projects }) => {
  return (
    <section className="mt-16 sm:mt-20 lg:mt-[51px] px-4 sm:px-6 lg:px-16">
      <div className="w-full lg:max-w-[1790px] mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-[38px] max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-[60px] font-marcellus font-normal leading-tight lg:leading-[76px] text-text-dark-4 mb-4 sm:mb-6">
            Illuminating Interiors, Enhancing Moods.
          </h2>
          <p className="text-base sm:text-lg font-lexend font-light leading-relaxed lg:leading-[24px] text-text-gray-2 lg:w-[68%] mx-auto">
            Explore our standout lighting installations across residential, commercial, and
            architectural spaces — where design meets illumination.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-[42px]">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col gap-4 sm:gap-6 lg:gap-[24px]">
              <div className="relative overflow-hidden rounded-lg lg:rounded-[20px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[250px] sm:h-[350px] lg:h-[498px] object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col gap-1 sm:gap-2 lg:gap-[4px]">
                <p className="text-lg sm:text-xl font-lexend font-light leading-tight lg:leading-[25px] text-text-dark-8">
                  {project.type}
                </p>
                <h3 className="text-xl sm:text-2xl lg:text-[32px] font-lexend font-normal leading-tight lg:leading-[40px] text-text-dark-2">
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
