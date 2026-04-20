import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="w-full bg-white pt-24 md:pt-32 pb-12 px-4 md:px-8 flex justify-center">
      <div className="w-full max-w-[1600px] bg-[#2d414e] rounded-[32px] md:rounded-[48px] overflow-hidden flex flex-col lg:flex-row items-center p-8 md:p-12 lg:px-20 lg:py-6 gap-10 lg:gap-12">
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-start text-white">
          <div className="bg-[#8ecfcb] text-[#1a3646] px-4 py-1 rounded-md text-[10px] font-normal mb-8 uppercase tracking-wider">
            Our Mission
          </div>
          <h2 className="text-4xl lg:text-5xl font-normal leading-tight mb-6 tracking-tight">
            Nurturing Expertise for the Next Generation.
          </h2>
          <p className="text-base font-normal opacity-70 leading-relaxed mb-10 max-w-xl">
            We are committed to bridging the gap between academic theory and industry reality. By providing a platform for mentorship and growth, we ensure every student has the opportunity to become a true innovator.
          </p>
          <div className="flex items-center gap-4">
            <Link 
              href="/about" 
              className="px-10 py-3 border border-white/30 rounded-full text-sm font-normal hover:bg-white/5 transition-all"
            >
              Learn More
            </Link>
            <Link 
              href="https://forms.gle/P3jAJgdrLv4UjZt68" 
              target="_blank"
              className="px-10 py-3 bg-[#fbb03b] text-[#1a3646] rounded-full text-sm font-normal hover:bg-[#e09e35] transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Right Image - Reduced Border Radius */}
        <div className="flex-1 w-full aspect-[4/3] relative rounded-[16px] overflow-hidden">
          <Image 
            src="/about-image.png"
            alt="Student Forge Community Event"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
