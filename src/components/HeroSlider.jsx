'use client';
import React from 'react';

const HeroSlider = () => {
  const slides = [
    {
      title: 'Factory.\nFoundation.\nFuture.',
      subtitle: '03',
      description: 'Strong roots behind shining lighting products',
      image: '../../images/slide-1.png',
    },
    {
      title: 'Innovative\nLighting\nSolutions',
      subtitle: '02',
      description: 'Smart and elegant lighting designs for your future',
      image: '../../images/slide-1.png',
    },
    {
      title: 'Inspired\nSignature\nAmbience.',
      subtitle: '01',
      description: 'Creating perfect lighting experiences',
      image: '../../images/slide-1.png',
    },
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-[650px] w-[92.2%] overflow-hidden relative mt-10  rounded-2xl m-auto main-slider-h ">
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat slider-bg-main"
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0" />

              <div className="text-slider-box text-center pt-10  ">
                <div className="left-text-box">
                  <h1 className="text-white text-5xl lg:text-7xl font-light leading-[1.2] tracking-wide whitespace-pre-line custom-gradient-text">
                    INSPIRED <span className="font-semibold">SIGNATURE</span>
                  </h1>
                </div>
                <div className="boder-slider-light"></div>

                <div className="right-text-box">
                  <h1 className="text-white text-5xl lg:text-7xl font-light leading-[1.2] tracking-wide whitespace-pre-line custom-gradient-text">
                    LIGHTING <span className="font-semibold">AMBIENCE.</span>
                  </h1>
                </div>
              </div>

              {/* Heading Text (top-right) */}
              {/* <div className="text-center pt-10">
                <h1 className="text-white text-5xl lg:text-7xl font-light leading-[1.2] tracking-wide whitespace-pre-line custom-gradient-text">
                  INSPIRED <span className="font-semibold">SIGNATURE</span>
                  {'\n'}
                  LIGHTING <span className="font-semibold">AMBIENCE.</span>
                </h1>
              </div> */}
            </div>
          </div>
        ))}
      </div>

      {/* Content Card */}
      <div className="absolute bottom-6 lg:right-6 bg-white rounded-xl shadow-2xl w-auto lg:w-[480px] overflow-hidden m-auto sm:m-10 mb-margin slider-dis-box">
        <div className="flex justify-between p-4 gap-2">
          <h2
            className="text-green-900 text-lg font-semibold  leading-snug "
            style={{ fontSize: '20px' }}
          >
            {slides[currentSlide].title}
          </h2>

          <div className="flex flex-col justify-between items-start slider-flex-box">
            <span className="text-green-800 font-semibold text-sm mb-1">
              {slides[currentSlide].subtitle}
            </span>
            <span className="text-gray-900 font-medium text-sm leading-snug max-w-[180px]">
              {slides[currentSlide].description}
            </span>
          </div>
        </div>

        {/* Dots */}
        <div className="px-6 pb-5">
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3.5 h-3.5 rounded-full border transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-green-800 border-green-800'
                    : 'bg-white border-green-800'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Arrows */}
      {/* <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/30 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/30 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button> */}
    </section>
  );
};

export default HeroSlider;
