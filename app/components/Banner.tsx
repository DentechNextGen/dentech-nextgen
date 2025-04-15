import React from 'react';

interface BannerProps {
  title: string;
  content: string;
}

const Banner: React.FC<BannerProps> = ({
  title,
  content,
}) => {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 mt-8 sm:mt-12 mb-8 sm:mb-10">
      {/* Main container with rounded corners */}
      <div className="bg-slate-900 rounded-b-3xl sm:rounded-tr-3xl overflow-hidden">
        <div className="flex flex-col sm:flex-row">
          {/* Left side with title and curved edge */}
          <div className="relative">
            <div className="bg-white py-6 px-6 sm:py-8 sm:px-10 md:py-4 md:px-16 rounded-br-[25px] sm:rounded-br-[50px]">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900">{title}</h1>
            </div>
          </div>

          {/* Right side with content on solid background */}
          <div className="flex-1 py-8 px-6 sm:py-10 sm:px-10 md:py-8 md:px-16">
            <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
