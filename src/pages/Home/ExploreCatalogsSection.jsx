import React from 'react';

const ExploreCatalogsSection = ({ catalogs }) => {
  return (
    <section className="bg-black py-16 sm:py-20 lg:py-[100px] mt-5">
      <div className=" mx-auto px-4 sm:px-6 lg:px-16">
        <div className="text-center mb-0">
          <h2 className="text-white text-3xl sm:text-4xl lg:text-[45px] font-marcellus leading-tight mb-2">
            Explore Our Catalogs
          </h2>
          <p className="text-text-gray-6 text-white sm:text-[16px] font-lexend font-light max-w-3xl mx-auto leading-relaxed pb-5 pt-5 ">
            Discover our complete lighting collection, featuring timeless designs, technical specs,
            and innovative solutions for every space. Download the catalog to browse premium
            lighting products at your convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {catalogs.map((catalog) => (
            <div
              key={catalog.id}
              className="bg-[#111111] rounded-2xl p-4 lg:p-10 flex items-center gap-10 lg:gap-5"
            >
              {/* Icon on Left */}
              <div className="flex-shrink-0">
                <img
                  src={catalog.icon}
                  alt={`${catalog.title} Icon`}
                  className="w-[100px] h-[100px] object-contain"
                />
              </div>

              {/* Title + Button on Right */}
              <div className="flex flex-col items-start justify-center text-left flex-grow">
                <h3 className="text-white text-sm sm:text-2xl font-marcellus mb-4 catelog-heading">
                  {catalog.title}
                </h3>
                <button className="bg-white text-green-900 text-base font-semibold px-6 py-2 rounded-full flex items-center gap-3 hover:bg-gray-100 transition p-5 btn-download-catelog">
                  <span>DOWNLOAD</span>
                  <img src={catalog.downloadIcon} alt="Download" className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCatalogsSection;
