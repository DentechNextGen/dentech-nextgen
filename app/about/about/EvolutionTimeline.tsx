import React from 'react';
import Image from 'next/image';

interface TimelineEntryProps {
  year: string;
  imageSrc?: string;
  alignment: 'left' | 'right';
  headline?: string;
  description?: string;
}

const TimelineEntry: React.FC<TimelineEntryProps> = ({ 
  year, 
  imageSrc, 
  alignment,
  headline = "Headline",
  description 
}) => {
  const defaultText = `Over four decades ago, our founder Raymond F. Kaminski saw the growing need for innovation in dental practice management software. He was committed to making his vision a reality—a world in which computer technology and dentistry functioned seamlessly, improving the lives of doctors and patients alike.`;

  return (
    <div className="flex flex-col md:flex-row my-8 md:my-12 w-full">
      {/* MOBILE VIEW - Screenshot section always first on mobile */}
      <div className={`w-full md:hidden ${alignment === 'left' ? 'bg-slate-900' : 'bg-green-700'} flex flex-col justify-center rounded-t-xl shadow-lg`}>
        <div className="flex flex-col items-center py-6 px-4">
          <h2 className="text-white text-5xl font-bold mb-6">{year}</h2>
          <div className="bg-white p-2 rounded w-full max-w-xs">
            <div className="h-40 w-full flex items-center justify-center border">
              {imageSrc ? (
                <div className="relative h-full w-full">
                  <Image 
                    src={imageSrc} 
                    alt={`Screenshot of Dentech in ${year}`} 
                    fill 
                    style={{objectFit: 'contain'}}
                  />
                </div>
              ) : (
                <p className="text-slate-400 text-center">Screenshot of Dentech in Designated Year</p>
              )}
            </div>
            <p className="text-center text-sm mt-2 text-black">Screenshot of Dentech in Designated Year</p>
          </div>
        </div>
      </div>

      {/* MOBILE VIEW - Content section always second on mobile */}
      <div className="w-full md:hidden p-6 flex flex-col justify-center bg-white rounded-b-xl shadow-lg mb-8">
        <h3 className="text-2xl font-bold mb-4">{headline}</h3>
        <p className="text-base">{description || defaultText}</p>
      </div>
      
      {/* DESKTOP VIEW - Left side */}
      {alignment === 'left' && (
        <div className="hidden md:flex md:w-1/2 bg-slate-900 flex-col justify-center rounded-r-xl shadow-lg">
          <div className="flex flex-row items-center justify-evenly py-8">
            <h2 className="text-white text-7xl font-bold mr-6">{year}</h2>
            <div className="bg-white p-2 rounded max-w-xs">
              <div className="h-48 w-full flex items-center justify-center border">
                {imageSrc ? (
                  <div className="relative h-full w-full">
                    <Image 
                      src={imageSrc} 
                      alt={`Screenshot of Dentech in ${year}`} 
                      fill 
                      style={{objectFit: 'contain'}}
                    />
                  </div>
                ) : (
                  <p className="text-slate-400 text-center">Screenshot of Dentech in Designated Year</p>
                )}
              </div>
              <p className="text-center text-sm mt-2 text-black">Screenshot of Dentech in Designated Year</p>
            </div>
          </div>
        </div>
      )}

      {/* DESKTOP VIEW - Content (can be on left or right) */}
      <div className={`hidden md:flex md:w-1/2 p-12 lg:p-20 flex-col justify-center`}>
        <h3 className="text-3xl lg:text-4xl font-bold mb-4">{headline}</h3>
        <p className="text-lg">{description || defaultText}</p>
      </div>

      {/* DESKTOP VIEW - Right side */}
      {alignment === 'right' && (
        <div className="hidden md:flex md:w-1/2 bg-green-700 flex-col justify-center rounded-l-3xl shadow-lg">
          <div className="flex flex-row items-center justify-evenly py-8">
            <div className="bg-white p-2 rounded max-w-md mr-6">
              <div className="h-48 w-full flex items-center justify-center border">
                {imageSrc ? (
                  <div className="relative h-full w-full">
                    <Image 
                      src={imageSrc} 
                      alt={`Screenshot of Dentech in ${year}`} 
                      fill 
                      style={{objectFit: 'contain'}}
                    />
                  </div>
                ) : (
                  <p className="text-slate-400 text-center">Screenshot of Dentech in Designated Year</p>
                )}
              </div>
              <p className="text-center text-sm mt-2 text-black">Screenshot of Dentech in Designated Year</p>
            </div>
            <h2 className="text-white text-7xl font-bold">{year}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

const EvolutionTimeline = () => {
  const timelineEntries = [
    { 
      year: '1985', 
      alignment: 'left' as const,
      headline: 'Headline'
    },
    { 
      year: '1992', 
      alignment: 'right' as const,
      headline: 'Headline'
    },
    { 
      year: '1999', 
      alignment: 'left' as const,
      headline: 'Headline'
    },
    { 
      year: '2002', 
      alignment: 'right' as const,
      headline: 'Headline'
    },
  ];

  return (
    <div className="w-full">
      <div className="container mx-auto text-center py-10 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">The Evolution of Dentech</h1>
        <div className="w-full max-w-md mx-auto border-b border-gray-300 mb-10"></div>
        <p className="max-w-3xl mx-auto text-base md:text-lg">
          Over four decades ago, our founder Raymond F. Kaminski saw the growing need for innovation in dental
          practice management software. He was committed to making his vision a reality—a world in which computer
          technology and dentistry functioned seamlessly, improving the lives of doctors and patients alike.
        </p>
      </div>
      
      <div className="w-full">
        {timelineEntries.map((entry) => (
          <TimelineEntry 
            key={entry.year}
            year={entry.year}
            alignment={entry.alignment}
            headline={entry.headline}
          />
        ))}
      </div>
    </div>
  );
};

export default EvolutionTimeline;