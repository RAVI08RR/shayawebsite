'use client';
import { useState, useRef, useEffect } from 'react';
import Button from './ui/Button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null); // null or 'projects'
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const productsMenuRef = useRef(null);

  // Close mega menu on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (productsMenuRef.current && !productsMenuRef.current.contains(event.target)) {
        setIsMegaMenuOpen(false);
      }
    }
    if (isMegaMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMegaMenuOpen]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setMenuOpen(false);
    }
  };

  const megaMenuData = {
    indoor: {
      title: 'Indoor',
      image: '/images/indoor-menu.png',
      categories: [
        {
          title: 'Spotlights & Downlights',
          items: ['Petit', 'Omado', 'Olev'],
          link: '/products/spotlights',
        },
        {
          title: 'Surface & Modular',
          items: ['Luere', 'Visesa'],
          link: '/category/surface',
        },
        {
          title: 'Linear Profiles',
          items: ['Lanky', 'Lerida'],
        },
        {
          title: 'AC & magnetic track',
          items: ['Piste', 'Beck'],
        },
        {
          title: 'Strip & Neon',
          items: ['Corda', 'Zahi', 'Ravine'],
        },
      ],
    },
    outdoor: {
      title: 'Outdoor',
      image: '/images/ourdoor-menu.png',

      categories: [
        {
          title: 'Street Lighting',
          items: ['Bollard', 'Inground', 'Spotlights'],
          link: '/category/street-lighting',
        },
        {
          title: 'Flood & high mast',
          items: ['Bollard', 'Inground', 'Spotlights'],
        },
        {
          title: 'Landscape lighting',
          items: ['Bollard', 'Inground', 'Spotlights'],
        },
        {
          title: 'Facade & wall lighting',
          items: ['Bollard', 'Inground', 'Spotlights'],
        },
      ],
    },
    lightingControls: {
      title: 'Lighting Controls',
      image: '/images/lighting-control-menu.png',
      categories: [
        {
          title: 'Street Lighting',
          items: ['Bollard', 'Inground', 'Spotlights'],
        },
        {
          title: 'Flood & high mast',
          items: ['Bollard', 'Inground', 'Spotlights'],
        },
        {
          title: 'Landscape lighting',
          items: ['Bollard', 'Inground', 'Spotlights'],
        },
        {
          title: 'Facade & wall lighting',
          items: ['Bollard', 'Inground', 'Spotlights'],
        },
      ],
    },
  };

  return (
    <header className="px-4 sm:px-6 lg:px-16 pt-4 sm:pt-5 lg:pt-[8px] relative">
      <div className="w-full lg:max-w-[1790px] mx-auto">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <div className="flex justify-start items-center">
            <a href="/" className="logo cursor-pointer">
              <img
                src="/images/img_group_111.svg"
                alt="Shaya Lighting Logo"
                className="w-[100px] sm:w-[140px] lg:w-[120px] h-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <span className="lg:text-[14px] sm:text-lg font-medium text-text-dark-3 font-lexend">
              <Link to="/about">ABOUT</Link>
            </span>

            {/* PRODUCTS */}
            <div className="relative" ref={productsMenuRef}>
              <span
                className="lg:text-[14px] sm:text-lg font-medium text-text-dark-3 font-lexend cursor-pointer flex items-center gap-1 py-4"
                onClick={() => setIsMegaMenuOpen((prev) => !prev)}
                aria-haspopup="true"
                aria-expanded={isMegaMenuOpen}
              >
                PRODUCTS
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>

              {/* Full Width Mega Menu for Products */}
              {isMegaMenuOpen && (
                <div className="fixed left-0 right-0 top-[79px] z-50 transition-all duration-300 ease-in-out h-[86vh]">
                  <div className="bg-white shadow-xl border-t w-full h-full overflow-y-auto">
                    <div className="max-w-[90%] mx-auto  py-4">
                      <div className="space-y-2">
                        {/* Indoor Section */}
                        <div className="flex flex-row items-start mb-0">
                          <div className="w-48 flex-shrink-0 mr-8">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">
                              {megaMenuData.indoor.title}
                            </h3>
                            <img
                              src={megaMenuData.indoor.image || '/placeholder.svg'}
                              alt="Indoor lighting"
                              className="w-full h-32 object-cover rounded-lg"
                            />
                          </div>
                          <div className="flex flex-row gap-x-12 flex-1 mt-[2rem]">
                            {megaMenuData.indoor.categories.map((category, index) => (
                              <div key={index}>
                                <a href={category.link} className="cursor-pointer">
                                  <h4 className="font-semibold text-gray-900 mb-2 text-base">
                                    {category.title}
                                  </h4>
                                </a>
                                <ul className="space-y-1">
                                  {category.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                      <a
                                        href="#"
                                        className="text-gray-700 hover:text-gray-900 text-sm"
                                      >
                                        {item}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* Outdoor Section */}
                        <div className="flex flex-row items-start mb-10">
                          <div className="w-48 flex-shrink-0 mr-8">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">
                              {megaMenuData.outdoor.title}
                            </h3>
                            <img
                              src={megaMenuData.outdoor.image || '/placeholder.svg'}
                              alt="Outdoor lighting"
                              className="w-full h-32 object-cover rounded-lg"
                            />
                          </div>
                          <div className="flex flex-row gap-x-12 flex-1 mt-[2rem]">
                            {megaMenuData.outdoor.categories.map((category, index) => (
                              <div key={index}>
                                <h4 className="font-semibold text-gray-900 mb-2 text-base">
                                  {category.title}
                                </h4>
                                <ul className="space-y-1">
                                  {category.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                      <a
                                        href="#"
                                        className="text-gray-700 hover:text-gray-900 text-sm"
                                      >
                                        {item}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* Lighting Controls Section */}
                        <div className="flex flex-row items-start">
                          <div className="w-48 flex-shrink-0 mr-8">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">
                              {megaMenuData.lightingControls.title}
                            </h3>
                            <img
                              src={megaMenuData.lightingControls.image || '/placeholder.svg'}
                              alt="Lighting controls"
                              className="w-full h-32 object-cover rounded-lg"
                            />
                          </div>
                          <div className="flex flex-row gap-x-12 flex-1 mt-[2rem]">
                            {megaMenuData.lightingControls.categories.map((category, index) => (
                              <div key={index}>
                                <h4 className="font-semibold text-gray-900 mb-2 text-base">
                                  {category.title}
                                </h4>
                                <ul className="space-y-1">
                                  {category.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                      <a
                                        href="#"
                                        className="text-gray-700 hover:text-gray-900 text-sm"
                                      >
                                        {item}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* PROJECTS */}
            <div className="relative group">
              <Link to="/projects">
                <span className="lg:text-[14px] sm:text-lg font-medium text-text-dark-3 font-lexend cursor-pointer flex items-center gap-1 py-4">
                  PRODUCTS
                </span>
              </Link>
              {/* Mega Menu for Projects */}
            </div>

            <span className="lg:text-[14px] sm:text-lg font-medium text-text-dark-3 font-lexend">
              <Link to="/blog">BLOG</Link>
            </span>

            <Button className="lg:text-[14px] bg-button text-white rounded-[22px] px-6 sm:px-7 py-2 text-base sm:text-lg font-medium font-lexend">
              GET A FREE CONSULTATION
            </Button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2"
            style={{ border: '1px solid', borderRadius: '5px' }}
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

      {/* Mobile Drawer - keeping your existing mobile code unchanged */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col h-full w-full animate-slide-in-top">
          {/* Logo always at the top */}
          <div className="flex items-center justify-between px-4 pt-4 pb-2 sticky top-0 bg-white z-10">
            <img
              src="/images/img_group_111.svg"
              alt="Shaya Lighting Logo"
              className="w-[120px] h-auto"
            />
            {activeSubMenu ? (
              <button
                className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg text-2xl text-black ml-2"
                onClick={() => setActiveSubMenu(null)}
                aria-label="Back to main menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            ) : (
              <button
                className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg text-3xl text-black focus:outline-none"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                &times;
              </button>
            )}
          </div>

          {activeSubMenu === 'projects' ? (
            <div className="flex flex-col h-full w-full">
              {/* Submenu Title */}
              <div className="px-6 pt-2 pb-4">
                <span className="text-[25px] font-[800] tracking-wide text-[#3C3C3C] uppercase">
                  PRODUCTS
                </span>
              </div>
              <div className="flex-1 overflow-y-auto px-4 pb-4">
                {/* INDOOR */}
                <div className="mb-6">
                  <div className="uppercase text-[15px] text-gray-700 font-bold mb-2">Indoor</div>
                  <img
                    src="/images/indoor-menu.png"
                    alt="Indoor"
                    className="rounded-xl w-full h-50 object-cover mb-2"
                  />
                  <div className="flex flex-col divide-y divide-gray-200">
                    {/* <button className="py-4 flex justify-between items-center font-bold text-[17px] text-gray-800"> */}
                    <a
                      className="py-4 flex justify-between items-center font-bold text-[17px] text-gray-800"
                      href="/products/spotlights"
                    >
                      SPOTLIGHTS & DOWNLIGHTS{' '}
                      <span className="text-2xl">
                        <img src="/images/submenu-arrow.svg" className="arrow-icon" />
                      </span>
                    </a>
                    {/* </button> */}
                    <button className="py-4 flex justify-between items-center font-bold text-[17px] text-gray-800">
                      SURFACE & MODULAR{' '}
                      <span className="text-2xl">
                        {' '}
                        <img src="/images/submenu-arrow.svg" className="arrow-icon" />
                      </span>
                    </button>
                    <button className="py-4 flex justify-between items-center font-bold text-[17px] text-gray-800">
                      LINEAR PROFILES{' '}
                      <span className="text-2xl">
                        {' '}
                        <img src="/images/submenu-arrow.svg" className="arrow-icon" />
                      </span>
                    </button>
                    <button className="py-4 flex justify-between items-center font-bold text-[17px] text-gray-800">
                      AC & MAGNETIC TRACK{' '}
                      <span className="text-2xl">
                        {' '}
                        <img src="/images/submenu-arrow.svg" className="arrow-icon" />
                      </span>
                    </button>
                    <button className="py-4 flex justify-between items-center font-bold text-[17px] text-gray-800">
                      STRIP & NEON{' '}
                      <span className="text-2xl">
                        {' '}
                        <img src="/images/submenu-arrow.svg" className="arrow-icon" />
                      </span>
                    </button>
                  </div>
                </div>

                {/* OUTDOOR */}
                <div className="mb-6">
                  <div className="uppercase text-[15px] text-gray-700 font-bold mb-2">Outdoor</div>
                  <img
                    src="/images/ourdoor-menu.png"
                    alt="Outdoor"
                    className="rounded-xl w-full h-50 object-cover mb-2"
                  />
                  <div className="flex flex-col divide-y divide-gray-200">
                    <button className="py-4 flex justify-between items-center font-bold text-[17px] text-gray-800">
                      STREET LIGHTING
                    </button>
                    <button className="py-4 flex justify-between items-center font-bold text-[17px] text-gray-800">
                      FLOOD & HIGH MAST
                    </button>
                    <button className="py-4 flex justify-between items-center font-bold text-[17px] text-gray-800">
                      LANDSCAPE LIGHTING
                    </button>
                    <button className="py-4 flex justify-between items-center font-bold text-[17px] text-gray-800">
                      FACADE & WALL LIGHTING
                    </button>
                  </div>
                </div>

                {/* LIGHTING CONTROLS */}
                <div className="mb-6">
                  <div className="uppercase text-[15px] text-gray-700 font-bold mb-2">
                    Lighting Controls
                  </div>
                  <img
                    src="/images/lighting-control-menu.png"
                    alt="Lighting Controls"
                    className="rounded-xl w-full h-50 object-cover mb-2"
                  />
                  <div className="flex flex-col divide-y divide-gray-200">
                    <button className="py-4 flex justify-between items-center font-bold text-[17px] text-gray-800">
                      STREET LIGHTING
                    </button>
                    <button className="py-4 flex justify-between items-center font-bold text-[17px] text-gray-800">
                      FLOOD & HIGH MAST
                    </button>
                    <button className="py-4 flex justify-between items-center font-bold text-[17px] text-gray-800">
                      LANDSCAPE LIGHTING
                    </button>
                    <button className="py-4 flex justify-between items-center font-bold text-[17px] text-gray-800">
                      FACADE & WALL LIGHTING
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Menu Title */}
              <div className="px-6 pt-2 pb-4">
                <span className="text-[25px] font-[800] tracking-wide text-[#3C3C3C] uppercase">
                  Menu
                </span>
              </div>

              {/* Menu Items */}
              <nav className="flex-1 flex flex-col gap-0 px-6">
                <button className="w-full text-left py-4 border-b border-gray-200 font-bold text-[17px] text-[#3C3C3C] tracking-wide">
                  <a href="/">HOME</a>
                </button>

                <button className="w-full text-left py-4 border-b border-gray-200 font-bold text-[17px] text-[#3C3C3C] tracking-wide">
                  <a href="/about">ABOUT</a>
                </button>
                <button
                  className="w-full text-left py-4 border-b border-gray-200 font-bold text-[17px] text-[#3C3C3C] tracking-wide flex items-center justify-between"
                  onClick={() => setActiveSubMenu('projects')}
                >
                  PRODUCTS
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button className="w-full text-left py-4 border-b border-gray-200 font-bold text-[17px] text-[#3C3C3C] tracking-wide">
                  <a href="/projects">PROJECTS</a>
                </button>

                <button className="w-full text-left py-4 border-b border-gray-200 font-bold text-[17px] text-[#3C3C3C] tracking-wide">
                  <a href="/blog">BLOG</a>
                </button>
                <button className="w-full text-left py-4 border-b border-gray-200 font-bold text-[17px] text-[#3C3C3C] tracking-wide">
                  CONTACT
                </button>
                <button className="w-full bg-black text-white rounded-full py-4 text-base font-bold tracking-wide mt-5">
                  GET A FREE CONSULTATION
                </button>
              </nav>
            </>
          )}
        </div>
      )}

      {/* Drawer Animation */}
      <style>{`
  @keyframes slide-in-top {
    from { transform: translateY(-100%); }
    to { transform: translateY(0); }
  }
  .animate-slide-in-top {
    animation: slide-in-top 0.3s cubic-bezier(0.4,0,0.2,1);
  }
  
  /* Ensure no horizontal scroll and proper mega menu display */
  body {
    overflow-x: hidden;
  }
  
  /* Ensure mega menu appears above other content */
  .group:hover .fixed {
    display: block;
  }
`}</style>
    </header>
  );
};

export default Header;
