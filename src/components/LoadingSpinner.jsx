import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="flex flex-col items-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
          <img
            src="/loader.png"
            alt="Loading..."
            className="w-24 h-24 md:w-32 md:h-32 animate-spin [animation-duration:3s] [animation-timing-function:linear]"
          />
        </div>
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">
            VOAT Network
          </h2>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;