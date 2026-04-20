import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full bg-[#fbb03b] pt-32 md:pt-48 flex flex-col items-center overflow-hidden">
      {/* Hero Content */}
      <div className="relative z-30 px-6 text-center max-w-5xl text-[#1a3646] mb-12">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-normal leading-[1.1] mb-6 tracking-tight lg:whitespace-nowrap">
          Empowering Next-Gen <br className="md:hidden" />
          <span className="relative inline-block mt-2 md:mt-0">
            Innovators
            <svg
              className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-3 md:h-4 text-[#1a3646]/20"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M1 5 Q 25 2 50 5 T 99 5"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>
        <p className="text-sm md:text-base lg:text-lg font-normal opacity-80 max-w-2xl mx-auto leading-relaxed px-4">
          Student Forge provides the tools, mentorship, and global network needed to turn your academic foundation into a professional legacy.
        </p>
      </div>

      {/* Hero Image Card - Elevated Visibility */}
      <div className="relative w-full max-w-[1600px] px-4 md:px-8 z-20 mb-[-60px] md:mb-[-100px] lg:mb-[-140px]">
        <div className="relative aspect-[16/10] md:aspect-[21/9] lg:aspect-[24/9] rounded-[24px] md:rounded-[40px] overflow-hidden shadow-2xl border border-white/10 mx-auto transform transition-transform duration-700 hover:scale-[1.01]">
          <Image
            src="https://ik.imagekit.io/dypkhqxip/Screenshot%202026-03-12%20at%2003.11.30.png?updatedAt=1773265330453"
            alt="Student Forge Community"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Bottom Transition - Refined Curve */}
      <div className="relative w-full h-20 md:h-32 bg-[#fbb03b] z-10 flex items-end">
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-[2px]">
          <svg className="relative block w-[150%] md:w-full h-[60px] md:h-[100px] left-[-25%] md:left-0" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z" fill="#ffffff"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
