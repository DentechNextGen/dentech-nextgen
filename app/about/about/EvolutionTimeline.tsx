import React from "react";
import Image from "next/image";

interface TimelineEntryProps {
  year: string;
  imageSrc?: string;
  alignment: "left" | "right";
  headline?: string;
  description?: string;
  imageCaption?: string;
}

const TimelineEntry: React.FC<TimelineEntryProps> = ({
  year,
  imageSrc,
  alignment,
  headline = "Headline",
  description,
  imageCaption,
}) => {
  const defaultText = `Over four decades ago, our founder Raymond F. Kaminski saw the growing need for innovation in dental practice management software. He was committed to making his vision a reality—a world in which computer technology and dentistry functioned seamlessly, improving the lives of doctors and patients alike.`;

  return (
    <div className="flex flex-col md:flex-row my-8 md:my-12 w-full p-4 md:p-0">
      {/* MOBILE VIEW - Screenshot section always first on mobile */}
      <div
        className={`w-full md:hidden ${
          alignment === "left" ? "bg-slate-900" : "bg-brandGreen"
        } flex flex-col justify-center rounded-t-xl shadow-lg`}
      >
        <div className="flex flex-col items-center py-6 px-4">
          <h2 className="text-white text-5xl font-bold mb-6">{year}</h2>
          <div className="bg-white p-4 rounded w-full max-w-xs">
            <div className="h-40 w-[250px] mx-auto flex items-center justify-center border border-gray-200 rounded-sm p-3">
              {imageSrc ? (
                <div className="relative h-full w-full">
                  <Image
                    src={imageSrc}
                    alt={`Screenshot of Dentech in ${year}`}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              ) : (
                <p className="text-slate-400 text-center">
                  Screenshot of Dentech in Designated Year
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE VIEW - Content section always second on mobile */}
      <div className="w-full md:hidden p-6 flex flex-col justify-center bg-white rounded-b-xl shadow-lg mb-8">
        <h3 className="text-2xl font-dela-gothic font-bold mb-4">{headline}</h3>
        <p className="text-base">{description || defaultText}</p>
      </div>

      {/* DESKTOP VIEW - Left side */}
      {alignment === "left" && (
        <div className="hidden my-12 md:flex md:w-1/2 bg-slate-900 flex-col justify-center rounded-r-xl shadow-lg">
          <div className="flex flex-row items-center justify-evenly py-8">
            <h2 className="text-white text-7xl font-bold mr-6">{year}</h2>
            <div className="bg-white p-4 rounded max-w-xs">
              <div className="h-48 w-[280px] mx-auto flex items-center justify-center border border-gray-200 rounded-sm p-4">
                {imageSrc ? (
                  <div className="relative h-full w-full">
                    <Image
                      src={imageSrc}
                      alt={`Screenshot of Dentech in ${year}`}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                ) : (
                  <p className="text-slate-400 text-center">{imageCaption}</p>
                )}
              </div>
              <p className="text-center text-sm mt-3 text-black">
                {imageCaption}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* DESKTOP VIEW - Content (can be on left or right) */}
      <div
        className={`hidden md:flex md:w-1/2 p-12 lg:p-20 flex-col justify-center`}
      >
        <h3 className="text-3xl lg:text-4xl font-dela-gothic font-bold mb-4">
          {headline}
        </h3>
        <p className="text-lg">{description || defaultText}</p>
      </div>

      {/* DESKTOP VIEW - Right side */}
      {alignment === "right" && (
        <div className="hidden md:flex md:w-1/2 bg-brandGreen flex-col justify-center rounded-l-3xl shadow-lg">
          <div className="flex flex-row items-center justify-evenly py-8">
            <div className="bg-white p-4 rounded max-w-md mr-6">
              <div className="h-48 w-[280px] mx-auto flex items-center justify-center border border-gray-200 rounded-sm p-4">
                {imageSrc ? (
                  <div className="relative h-full w-full">
                    <Image
                      src={imageSrc}
                      alt={`Screenshot of Dentech in ${year}`}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                ) : (
                  <p className="text-slate-400 text-center">
                    Screenshot of Dentech in Designated Year
                  </p>
                )}
              </div>
              <p className="text-center text-sm mt-3 text-black">
                Screenshot of Dentech in Designated Year
              </p>
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
      year: "1977",
      alignment: "left" as const,
      headline: "The Beginning",
      description:
        "Dentech was founded by Raymond F. Kaminski, beginning development of the first DOCS system on IBM Sys. 34. This marked the birth of a dental technology pioneer with a vision to revolutionize dental practice management software.",
      imageSrc: "/images/timeline/1977.png",
      imageCaption: "Dentech DOCS System on IBM Sys. 34",
    },
    {
      year: "1994",
      alignment: "right" as const,
      headline: "Digital Revolution",
      description:
        "Introduction of Dentech for Windows brought dental practices into the modern computing era, allowing offices to leverage graphical interfaces and improved workflows for better patient care and practice efficiency.",
      imageSrc: "/images/timeline/1994.jpg",
      imageCaption: "Dentech for Windows",
    },
    {
      year: "2009",
      alignment: "left" as const,
      headline: "Voice Innovation",
      description:
        "Released DenChart Perio Dental Charting Software with VOICE THAT WORKS! technology, transforming how dentists record patient information through hands-free voice commands, dramatically improving chairside efficiency.",
      imageSrc: "/images/timeline/2009.jpg",
      imageCaption:
        "DenChart Perio Dental Charting Software with VOICE THAT WORKS! technology",
    },
    {
      year: "2014",
      alignment: "right" as const,
      headline: "Cloud Transformation",
      description:
        "Launched Cloud-Based Dentech Communicator, bringing dental practices into the connected digital age with secure, accessible cloud technology for improved team communication and patient engagement.",
      imageSrc: "/images/timeline/2014.jpg",
      imageCaption: "Dentech Communicator",
    },
    {
      year: "2018",
      alignment: "left" as const,
      headline: "Brand Evolution",
      description:
        "Completed comprehensive rebranding to reflect Dentech's evolution into a full-spectrum dental technology provider, reinforcing our commitment to innovation while honoring our heritage as the industry's pioneer.",
      imageSrc: "/images/timeline/2018.png",
      imageCaption: "Dentech Brand Evolution",
    },
    {
      year: "2022",
      alignment: "right" as const,
      headline: "Next Generation Platform",
      description:
        "Introduced our NEW Practice Management Solution for both Server and Cloud-Based Systems, designed to meet the evolving needs of modern dental practices with greater flexibility, enhanced features and performance.",
      imageSrc: "/images/timeline/2022.png",
      imageCaption: "Dentech NextGen",
    },
  ];

  return (
    <div className="w-full">
      <div className="container mx-auto text-center py-10 px-4">
        <h1 className="text-3xl md:text-4xl font-dela-gothic font-bold mb-2">
          The Evolution of Dentech
        </h1>
        <div className="w-full max-w-md mx-auto border-b border-gray-300 mb-10"></div>
        <p className="max-w-3xl mx-auto text-base md:text-lg">
          Over four decades ago, our founder Raymond F. Kaminski saw the growing
          need for innovation in dental practice management software. He was
          committed to making his vision a reality—a world in which computer
          technology and dentistry functioned seamlessly, improving the lives of
          doctors and patients alike.
        </p>
      </div>

      <div className="w-full">
        {timelineEntries.map((entry) => (
          <TimelineEntry
            key={entry.year}
            year={entry.year}
            alignment={entry.alignment}
            headline={entry.headline}
            description={entry.description}
            imageSrc={entry.imageSrc}
            imageCaption={entry.imageCaption}
          />
        ))}
      </div>
    </div>
  );
};

export default EvolutionTimeline;
