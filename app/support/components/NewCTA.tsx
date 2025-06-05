import Image from 'next/image';

const NewCTA = () => {
  return (
    <div className="relative max-w-7xl mx-auto sm:mx-8 my-16">
      {/* Main container with rounded corners and gradient background */}
      <div className="relative overflow-hidden bg-[#f3f7f0] rounded-[32px] min-h-[300px]">
        {/* Simple radial circles background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Largest, lightest circle */}
          <div className="absolute -top-[40%] -right-[40%] w-[140%] aspect-square rounded-full bg-gradient-radial from-[#e8f2e2] via-[#e8f2e2]/30 to-transparent" />
          {/* Large circle */}
          <div className="absolute -top-[30%] -right-[30%] w-[120%] aspect-square rounded-full bg-gradient-radial from-[#c5e0b4] via-[#c5e0b4]/40 to-transparent" />
          {/* Medium circle */}
          <div className="absolute -top-[20%] -right-[20%] w-[100%] aspect-square rounded-full bg-gradient-radial from-[#92c353] via-[#92c353]/30 to-transparent" />
          {/* Small circle */}
          <div className="absolute -top-[10%] -right-[10%] w-[80%] aspect-square rounded-full bg-gradient-radial from-[#70a831] via-[#70a831]/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="max-w-xl">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Take your Practice to the Next Level!
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Experience the future of dental practice management with Dentech NextGen. Our innovative platform streamlines your workflow, enhances patient care, and boosts your practice efficiency.
              </p>
              <button
                className="inline-flex items-center px-8 py-4 text-base font-semibold rounded-xl text-white bg-[#92c353] hover:bg-[#70a831] transition-colors duration-200"
                onClick={() => window.location.href = '/schedule'}
              >
                Schedule Demo
              </button>
            </div>

            {/* Right side - Image */}
            <div className="relative mt-16 h-80 lg:mt-8">
              <Image
                src="/images/background-hero.webp"
                alt="Dentech Platform Interface"
                width={1824}
                height={1080}
                className="absolute left-0 top-0 w-[57rem] max-w-none rounded-xl bg-white/5 ring-1 ring-white/10"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCTA; 