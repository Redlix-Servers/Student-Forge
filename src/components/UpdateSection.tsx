import Link from 'next/link';

export default function UpdateSection() {
  return (
    <section className="w-full bg-white pb-24 px-4 md:px-8 flex justify-center">
      <div className="w-full max-w-[1600px] bg-[#e3e8ee] rounded-[32px] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-12">
        {/* Left Side - Logo */}
        <div className="flex-1 flex flex-col items-start gap-6">
          <img 
            src="https://ik.imagekit.io/dypkhqxip/learngrid?updatedAt=1775552006855" 
            alt="Learn Grid Logo" 
            className="h-10 mb-2"
          />
          <h2 className="text-3xl lg:text-4xl font-normal text-[#1a3646] tracking-tight">
            Learn Grid Initiative
          </h2>
        </div>

        {/* Right Side - Content */}
        <div className="flex-1 flex flex-col items-start gap-6">
          <p className="text-base font-normal text-[#1a3646] opacity-80 leading-relaxed">
            A strategic initiative by Student Forge to empower interns from diverse colleges through specialized training across multiple professional domains and industry-relevant skills.
          </p>
          <Link 
            href="/learn-grid" 
            className="px-10 py-3 bg-[#2d414e] text-white rounded-full text-xs font-normal hover:bg-[#1a3646] transition-all"
          >
            Learn More About the Program
          </Link>
        </div>
      </div>
    </section>
  );
}
