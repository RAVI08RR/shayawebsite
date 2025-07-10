import React, { useState } from 'react';
import Button from './ui/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setMenuOpen(false);
    }
  };

  return (
    <header className="px-4 sm:px-6 lg:px-16 pt-4 sm:pt-5 lg:pt-[18px]">
      <div className="w-full lg:max-w-[1790px] mx-auto">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <div className="flex justify-start items-center">
            <img
              src="/images/img_group_111.svg"
              alt="Shaya Lighting Logo"
              className="w-[120px] sm:w-[140px] lg:w-[170px] h-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <span className="text-base sm:text-lg font-medium text-text-dark-3 font-lexend">
              ABOUT
            </span>
            <span className="text-base sm:text-lg font-medium text-text-dark-3 font-lexend">
              PRODUCTS
            </span>
            <span className="text-base sm:text-lg font-medium text-text-dark-3 font-lexend">
              PROJECTS
            </span>
            <span className="text-base sm:text-lg font-medium text-text-dark-3 font-lexend">
              BLOG
            </span>
            <Button className="bg-button text-white rounded-[22px] px-6 sm:px-7 py-2 text-base sm:text-lg font-medium font-lexend">
              GET A FREE CONSULTATION
            </Button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className="w-full h-0.5 bg-black mb-1"></span>
              <span className="w-full h-0.5 bg-black mb-1"></span>
              <span className="w-full h-0.5 bg-black"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 flex"
          style={{ transition: 'background 0.3s' }}
          onClick={handleOverlayClick}
        >
          {/* Overlay */}
          <div className="fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-300" />

          {/* Drawer */}
          <div
            className="ml-auto w-3/4 max-w-xs h-full bg-white shadow-lg p-6 flex flex-col gap-8 animate-slide-in-right relative"
            style={{ minWidth: '260px' }}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-2xl text-gray-700 focus:outline-none"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>

            <nav className="flex flex-col gap-6 mt-8">
              <span className="text-base sm:text-lg font-medium text-text-dark-3 font-lexend">
                ABOUT
              </span>
              <span className="text-base sm:text-lg font-medium text-text-dark-3 font-lexend">
                PRODUCTS
              </span>
              <span className="text-base sm:text-lg font-medium text-text-dark-3 font-lexend">
                PROJECTS
              </span>
              <span className="text-base sm:text-lg font-medium text-text-dark-3 font-lexend">
                BLOG
              </span>
              <Button className="bg-button text-white rounded-[22px] px-6 py-2 text-base font-medium font-lexend mt-4">
                GET A FREE CONSULTATION
              </Button>
            </nav>
          </div>
        </div>
      )}

      {/* Drawer Animation */}
      <style>{`
        @keyframes slide-in-right {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </header>
  );
};

export default Header;
