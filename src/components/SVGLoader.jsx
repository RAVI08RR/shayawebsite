import React, { useState, useEffect } from 'react';

const SVGLoader = ({ duration = 3000, onComplete }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          setIsComplete(true);
          if (onComplete) onComplete();
          return 100;
        }
        return prev + 1;
      });
    }, duration / 100);

    return () => clearInterval(interval);
  }, [duration, onComplete]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="flex flex-col items-center space-y-6">
        {/* SVG Logo with Animation */}
        <div className="relative">
          <div
            className="transform transition-all duration-300 "
            style={{
              transform: `scale(${0.8 + (loadingProgress / 100) * 0.4})`,
              opacity: 0.3 + (loadingProgress / 100) * 0.7,
            }}
          >
            <img
              src="../../images/white-logo.svg"
              alt="Shaya Lighting Logo"
              className="w-100 sm:w-40 lg:w-[300px] h-auto mt-2 mb-10"
            />
          </div>
          {/* Animated overlay effect */}
          {/* <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 mt-5"
            style={{
              transform: `translateX(${(loadingProgress / 100) * 300 - 150}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          /> */}
        </div>
        {/* Loading Progress Bar */}
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mt-10">
          <div
            className="h-full bg-gradient-to-r from-green-800 to-white-900 transition-all duration-100 ease-out"
            style={{ width: `${loadingProgress}%` }}
          />
        </div>
        {/* Loading Text and Percentage */}
        <div className="text-center space-y-2">
          <div className="text-2xl font-bold  text-white">
            {isComplete ? 'Complete!' : 'Loading...'}
          </div>
          <div className="text-lg text-white">{loadingProgress}%</div>
        </div>
        {/* Spinning dots */}
        <div className="flex space-x-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-white rounded-full animate-bounce"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1s',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SVGLoader;
