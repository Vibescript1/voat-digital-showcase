import React from "react";

const LoadingSpinner = () => {
    return (
        <div
            className="
        absolute
        left-1/2 top-1/2
        -translate-x-1/2 -translate-y-1/2
        z-[99999]
        pointer-events-none
      "
        >
            <div className="flex flex-col items-center gap-3">

                <div className="relative">
                    <div className="absolute inset-0 bg-black-500 rounded-full blur-xl opacity-30 animate-pulse"></div>

                    <img
                        src="/loader.png"
                        alt="Loading..."
                        className="
              w-20 h-20
              sm:w-24 sm:h-24
              md:w-32 md:h-32
              animate-spin
            "
                        style={{
                            animationDuration: "2s",
                            animationTimingFunction: "linear"
                        }}
                    />
                </div>

                <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-yellow-400">
                    VOAT Network
                </h2>
            </div>
        </div>
    );
};

export default LoadingSpinner;
