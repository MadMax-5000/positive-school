import React from 'react';

const MerchHero = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4 bg-black mt-20">
      <h1 className="text-5xl font-extrabold text-white mb-8 font-akira">
        Check Out Our Merch
      </h1>
      <video
        src="/videos/merch-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full max-w-4xl rounded-2xl shadow-lg"
      />
    </div>
  );
};

export default MerchHero;
