import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white px-4 sm:px-6 lg:px-16 py-12">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">
        {/* Left: Navigation, Description, Logo */}
        <div>
          <h2 className="text-[2.2rem] md:text-[2.5rem] lg:text-[2rem] font-marcellus font-normal leading-tight text-text-dark-4 mb-4">
            Home, Products, Projects,
            <br />
            Blog, About, Contact.
          </h2>
          <p className="text-base md:text-lg font-lexend font-normal text-text-gray-3 mb-8 max-w-lg">
            We are a leading lighting solutions brand, offering a full spectrum of premium lighting
            products for every space and style.
          </p>
          <img
            src="/images/img_group_118.svg"
            alt="Shaya Lighting Logo"
            className="w-32 sm:w-40 lg:w-[200px] h-auto mt-2"
          />
        </div>

        {/* Center: Contact Info & Address */}
        <div className="flex flex-col gap-6 md:items-start">
          <div>
            <span className="block text-gray-700 text-lg font-lexend font-normal mb-1">
              Call us
            </span>
            <a
              target="_blank"
              href="tel:+97143977274"
              className="block text-black text-lg font-lexend font-normal cursor-pointer"
            >
              +971 4 3977274
            </a>
          </div>
          <div>
            <span className="block text-gray-700 text-lg font-lexend font-normal mb-1">Email</span>
            <a
              href="mailto:sales@shayalighting.com"
              className="block text-black text-lg font-lexend font-normal"
            >
              sales@shayalighting.com
            </a>
          </div>
          <div className="mt-2">
            <span className="block text-black text-lg font-lexend font-normal">
              Show room #G1, Al Marri 7 building besides
              <br />
              Dewa Power Station, Manama Street 51, Ras-
              <br />
              Al-Khor Industrial area -1, Dubai – UAE
            </span>
          </div>
        </div>

        {/* Right: Social Links */}
        <div className="flex flex-col gap-4 md:items-end md:text-right">
          <span className="text-gray-700 text-lg font-lexend font-normal mb-1">Follow us</span>
          <div className="flex flex-col gap-1 text-black text-lg font-lexend font-normal md:items-end">
            <a href="#" className="hover:underline">
              Instagram
            </a>
            <a href="#" className="hover:underline">
              LinkedIn
            </a>
            <a href="#" className="hover:underline">
              Youtube
            </a>
            <a href="#" className="hover:underline">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
