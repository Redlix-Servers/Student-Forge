import { Metadata } from 'next';
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Universities / Institutions | Student Forge Academic Partnerships',
  description: 'Empower your educational institution with Student Forge. Integrate career events, manage student participation, and access exclusive industry resources.',
};

export default function InstitutionsPage() {
  return (
    <main className="flex-1 bg-white">
      <section className="relative pt-20 pb-20 px-6 overflow-hidden bg-[#fbb03b] border-b border-[#1a3646]/10">
        <div className="relative z-10 w-full max-w-[1200px] mx-auto text-left">
          <div className="border border-[#1a3646]/20 text-[#1a3646] px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-widest mb-6 inline-block">
            Institutional Growth
          </div>
          <h1 className="text-3xl lg:text-5xl font-normal text-[#1a3646] mb-6 tracking-tight leading-tight">
            Empowering <span className="text-white">Universities & Institutions</span>.
          </h1>
          <p className="text-base lg:text-lg text-[#1a3646] opacity-70 max-w-2xl leading-relaxed mb-8">
            We understand the evolving needs of educational institutions and the vital role they play in shaping the future of students. Student Forge provides the infrastructure to build high-impact innovation nodes.
          </p>
          <div className="flex items-center gap-4">
            <Link 
              href="https://platform.studentforge.in" 
              className="px-6 py-3 bg-[#1a3646] text-white rounded-full font-bold text-sm hover:opacity-90 transition-all shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 flex justify-center border-b border-gray-100">
        <div className="w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { id: "01", title: "Node Integration", desc: "Designed to integrate with existing systems, allowing effortless event scheduling and student management." },
            { id: "02", title: "Institutional Portal", desc: "A dedicated dashboard for administrators to track student participation and innovation metrics." },
            { id: "03", title: "Tailored Outcomes", desc: "We customize our technical bootcamps based on specific institutional needs for maximum career success." },
            { id: "04", title: "Direct Placement", desc: "Direct pipelines from campus innovation to industry roles through our verified network." }
          ].map((feature, i) => (
            <div key={i} className="p-8 bg-white border border-gray-100 rounded-[40px] hover:border-[#fbb03b]/30 transition-all shadow-sm">
              <span className="text-4xl font-normal text-[#fbb03b] opacity-20 mb-6 block">
                {feature.id}
              </span>
              <h3 className="text-xl font-bold text-[#1a3646] mb-3">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-gray-50 flex justify-center">
        <div className="w-full max-w-[1200px]">
          <div className="mb-16">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#fbb03b] bg-white px-4 py-2 rounded-full">Our Services</span>
            <h2 className="text-4xl font-normal text-[#1a3646] tracking-tight mt-6">Deep Expertise In Student Success</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Career Transformation", desc: "Guiding currently pursuing students in identifying opportunities and setting professional goals through technical immersion." },
              { title: "Technical Immersions", desc: "Transition assistance from education to professional life across various career options in engineering and beyond." },
              { title: "Innovation Hackathons", desc: "Collaborative software development projects within specific industry themes to build real-world solutions." },
              { title: "Code Excellence", desc: "Exhilarating coding competitions to solve real-world problems through innovation and standardized testing." },
              { title: "Internship Pipeline", desc: "Connecting students with relevant professional opportunities and experience through our institutional portal." },
              { title: "Ideation Bootcamps", desc: "Focused on generating and developing innovative ideas and creative problem solving for early-stage founders." }
            ].map((service, i) => (
              <div key={i} className="p-10 bg-white border border-gray-100 rounded-[40px] shadow-sm hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-[#1a3646] mb-4">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm mb-4">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Works Section */}
      <section className="py-24 px-6 flex justify-center bg-white">
        <div className="w-full max-w-[1200px] flex flex-col items-center text-center">
          <div className="mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#fbb03b]">Excellence Delivered</span>
            <h2 className="text-4xl font-normal text-[#1a3646] tracking-tight mt-6">Our Recent Works</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">Explore high-impact events and successful collaborations across our partner institutions.</p>
          </div>
          
          <div className="w-full bg-[#1a3646] rounded-[64px] p-12 md:p-20 flex flex-col items-center gap-10">
            <h3 className="text-3xl lg:text-4xl text-white font-normal leading-tight">
              Dive into the details of our <br className="hidden lg:block" /> national impact and student bootcamps.
            </h3>
            <Link 
              href="/events" 
              className="px-10 py-5 bg-[#fbb03b] text-[#1a3646] rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl"
            >
              View Recent Works
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
