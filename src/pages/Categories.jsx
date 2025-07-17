import React from 'react';

const categories = [
  {
    name: 'Petit',
    subtitle: 'Fixed Spotlight',
    image: '/images/petit.png',
    link: '/products/spotlights/petit',
  },
  {
    name: 'Omado',
    subtitle: 'Fixed Spotlight',
    image: '/images/omado.png',
    link: '/products/spotlights/omado',
  },
  {
    name: 'Olev',
    subtitle: 'Fixed Spotlight',
    image: '/images/olev.png',
    link: '/products/spotlights/olev',
  },
  {
    name: 'Atala',
    subtitle: 'Fixed Spotlight',
    image: '/images/atala.png',
    link: '/products/spotlights/atala',
  },
  {
    name: 'Thea',
    subtitle: 'Fixed Spotlight',
    image: '/images/thea.png',
    link: '/products/spotlights/thea',
  },
  {
    name: 'Nur',
    subtitle: 'Fixed Spotlight',
    image: '/images/nur.png',
    link: '/products/spotlights/nur',
  },
];

export default function Categories() {
  return (
    <div className="bg-white min-h-screen w-full lg:max-w-[1790px]  mx-auto lg:px-[56px] px-[20px] pb-16">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 lg:px-4 pt-8 max-w-7xl mx-auto">
        <ol className="list-reset flex items-center space-x-1">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <span className="mx-1">&gt;</span>
          </li>
          <li>
            <a href="/products" className="hover:underline">
              Products
            </a>
          </li>
          <li>
            <span className="mx-1">&gt;</span>
          </li>
          <li>
            <a href="/products/spotlights/indoor" className="hover:underline">
              Indoor
            </a>
          </li>
          <li>
            <span className="mx-1">&gt;</span>
          </li>
          <li className="text-black">Spotlights & Downlights</li>
        </ol>
      </nav>

      {/* Main Heading */}
      <h1 className="text-4xl font-marcellus text-center mt-8 mb-12">Spotlights & Downlights</h1>

      {/* Cards Grid */}
      <div className="w-full lg:max-w-[1790px]  mx-auto  pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <a
              href={cat.link}
              key={idx}
              className="group bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center  relative min-h-[300px]"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-[200px] h-[200px] object-contain mb-6"
              />
              <div className="w-full flex flex-col items-start">
                <span className="absolute bottom-10 left-4  font-[300] text-[16px] text-[#1F1F1F] font-lexend">
                  {cat.name}
                </span>
                <span className="absolute bottom-4 left-4 text-gray-400 text-sm font-[400]">
                  {cat.subtitle}
                </span>
                <span className="absolute bottom-4 right-4 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                  <button className="bg-green-800 rounded-md p-2">
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </span>
              </div>
              {/* Hover Arrow Button */}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
