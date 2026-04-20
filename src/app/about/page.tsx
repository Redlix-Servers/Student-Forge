import { Metadata } from 'next';
import Footer from "@/components/Footer";
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Student Forge | Mission & Vision',
  description: 'Explore the mission, vision, and core values of Student Forge. We are dedicated to nurturing the next generation of technical and entrepreneurial leaders.',
};

export default function AboutPage() {
  return (
    <main className="flex-1 bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-[#fbb03b] border-b border-[#1a3646]/10">
        <div className="relative z-10 w-full max-w-[1200px] mx-auto">
          <h1 className="text-4xl lg:text-6xl font-normal text-[#1a3646] mb-6 tracking-tight leading-tight">
            Our Mission & <span className="text-white">Student Forge</span>.
          </h1>
          <p className="text-base lg:text-xl text-[#1a3646] opacity-80 max-w-2xl leading-relaxed">
            Student Forge is a dedicated national portal and initiative designed to bridge the gap between academic foundations and professional success.
          </p>
        </div>
      </section>

      {/* Visual Identity Section */}
      <section className="py-20 px-6 flex justify-center bg-gray-50 overflow-hidden">
        <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square lg:aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl border-8 border-white">
            <Image
              src="https://thumbs.dreamstime.com/b/male-college-student-good-looking-african-sitting-steps-52806036.jpg"
              alt="Innovation Lab"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-normal text-[#1a3646] tracking-tight underline decoration-[#fbb03b] decoration-4 underline-offset-8">Our Core Vision</h2>
              <p className="text-base text-gray-500 leading-relaxed font-normal">
                To create a global ecosystem where every student has the mentorship, tools, and community support needed to transition from being a learner to an industry pioneer. We envision a world where technical expertise is standardized and accessible.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-normal text-[#1a3646] tracking-tight underline decoration-[#fbb03b] decoration-4 underline-offset-8">Our Core Mission</h2>
              <p className="text-base text-gray-500 leading-relaxed font-normal">
                By working with academic institutions and industry leaders, Student Forge establishes high-impact nodes of innovation that provide verified assistance to students across all domains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 flex justify-center">
        <div className="w-full max-w-[1200px]">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#fbb03b] bg-gray-50 px-4 py-2 rounded-full">Our Values</span>
            <h2 className="text-4xl font-normal text-[#1a3646] tracking-tight mt-6">The Pillars of Student Forge</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Standardized Excellence", desc: "Ensuring every student has access to the same high-tier technical resources and mentorship, regardless of location." },
              { title: "Direct Assistance", desc: "Moving beyond theory to provide verified, hands-on support in internships, projects, and entrepreneurship." },
              { title: "National Growth", desc: "Building a interconnected network of nodes that uplift the entire student community simultaneously." }
            ].map((value, i) => (
              <div key={i} className="p-10 bg-white border border-gray-100 rounded-[40px] shadow-sm hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-[#fbb03b]/10 rounded-2xl flex items-center justify-center mb-6 text-[#fbb03b] font-bold text-xl group-hover:bg-[#fbb03b] group-hover:text-white transition-colors">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-bold text-[#1a3646] mb-4">{value.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
