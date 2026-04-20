import { Metadata } from 'next';
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'For Institutions | Student Forge Academic Partnerships',
  description: 'Empower your educational institution with Student Forge. Integrate career events, manage student participation, and access exclusive industry resources.',
};

export default function InstitutionsPage() {
  return (
    <main className="flex-1 bg-white">
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-[#fbb03b] border-b border-[#1a3646]/10">
        <div className="relative z-10 w-full max-w-[1200px] mx-auto text-left">
          <h1 className="text-3xl lg:text-5xl font-normal text-[#1a3646] mb-6 tracking-tight leading-tight">
            Empowering Educational <br className="hidden lg:block" /> Institutions with <span className="text-white">Student Forge</span>.
          </h1>
          <p className="text-base lg:text-lg text-[#1a3646] opacity-70 max-w-2xl leading-relaxed mb-8">
            We understand the evolving needs of educational institutions and the vital role they play in shaping the future of students.
          </p>
          <div className="flex items-center gap-4">
            <Link 
              href="https://forms.gle/P3jAJgdrLv4UjZt68" 
              target="_blank"
              className="px-6 py-3 bg-[#1a3646] text-white rounded-full font-bold text-sm hover:opacity-90 transition-all shadow-lg"
            >
              Schedule Demo
            </Link>
            <button className="px-6 py-3 border border-[#1a3646]/20 text-[#1a3646] rounded-full font-bold text-sm hover:bg-[#1a3646]/5 transition-all">
              Details
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 flex justify-center border-b border-gray-100">
        <div className="w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { id: "01", title: "Seamless Integration", desc: "Designed to integrate with existing systems, allowing effortless event scheduling and student management." },
            { id: "02", title: "Student-Centric", desc: "With our Mobile App, students can register for events, interact with mentors, and access internships." },
            { id: "03", title: "Tailored Support", desc: "We customize offerings based on specific institutional needs for maximum career success." },
            { id: "04", title: "Comprehensive", desc: "From internships and startups to higher education, we cover all aspects of career development." }
          ].map((feature, i) => (
            <div key={i} className="p-6 bg-white border border-gray-100 rounded-3xl hover:border-[#fbb03b]/30">
              <span className="text-2xl font-bold text-[#fbb03b] opacity-20 mb-4 block">
                {feature.id}
              </span>
              <h3 className="text-lg font-bold text-[#1a3646] mb-2">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed text-xs">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50 flex justify-center">
        <div className="w-full max-w-[1200px]">
          <div className="mb-10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#fbb03b]">Our Services</span>
            <h2 className="text-2xl lg:text-4xl font-normal text-[#1a3646] tracking-tight mt-2">Deep Expertise In Student Success</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Career In Engineering", desc: "Guide currently pursuing students in identifying opportunities and setting professional goals." },
              { title: "Career After Engineering", desc: "Transition assistance from education to professional life across various career options." },
              { title: "Hack-a-thon", desc: "Collaborative software development projects within specific industry themes." },
              { title: "Code-a-thon", desc: "Exhilarating coding competitions to solve real-world problems through innovation." },
              { title: "Internship Assistance", desc: "Connecting students with relevant professional opportunities and experience." },
              { title: "Idea-a-thon", desc: "Focused on generating and developing innovative ideas and creative problem solving." }
            ].map((service, i) => (
              <div key={i} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                <h3 className="text-base font-bold text-[#1a3646] mb-2">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed text-[13px] mb-4">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 flex justify-center bg-white">
        <div className="w-full max-w-[1200px]">
          <div className="text-center mb-10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#fbb03b]">Tailored Pricing</span>
            <h2 className="text-2xl lg:text-4xl font-normal text-[#1a3646] tracking-tight mt-2">Optimized Plans for Universities</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="p-8 border border-gray-100 rounded-[32px] bg-gray-50 flex flex-col">
              <h3 className="text-xl font-bold text-[#1a3646] mb-1">Pilot</h3>
              <p className="text-gray-500 text-xs mb-6">Explore basic Student Forge services.</p>
              <ul className="flex flex-col gap-3 text-[#1a3646] mb-8 text-xs">
                <li className="flex items-center gap-2 font-medium">3 Months duration</li>
                <li className="flex items-center gap-2">Access to Career Events</li>
                <li className="flex items-center gap-2">Professional Networking</li>
                <li className="flex items-center gap-2">Mobile App Access</li>
              </ul>
              <Link 
                href="https://forms.gle/P3jAJgdrLv4UjZt68" 
                target="_blank"
                className="w-full py-3 border border-[#1a3646] text-[#1a3646] rounded-xl font-bold text-xs hover:bg-[#1a3646] hover:text-white transition-all mt-auto text-center"
              >
                Start Now
              </Link>
            </div>

            <div className="p-8 border-2 border-[#fbb03b] rounded-[32px] bg-[#1a3646] text-white flex flex-col relative">
              <h3 className="text-xl font-bold mb-1">Full Access</h3>
              <p className="text-white/60 text-xs mb-6">Maximize student career engagement.</p>
              <ul className="flex flex-col gap-3 mb-8 text-xs">
                <li className="flex items-center gap-2 font-medium text-[#fbb03b]">12 Months duration</li>
                <li className="flex items-center gap-2">Unlimited Career Events</li>
                <li className="flex items-center gap-2">Full Internship & Job Support</li>
                <li className="flex items-center gap-2">Startup & Bootcamp Support</li>
              </ul>
              <Link 
                href="https://forms.gle/P3jAJgdrLv4UjZt68" 
                target="_blank"
                className="w-full py-3 bg-[#fbb03b] text-[#1a3646] rounded-xl font-bold text-xs hover:opacity-90 transition-all mt-auto text-center"
              >
                Start Today
              </Link>
            </div>

            <div className="p-8 border border-gray-100 rounded-[32px] bg-gray-50 flex flex-col">
              <h3 className="text-xl font-bold text-[#1a3646] mb-1">Launchpad</h3>
              <p className="text-gray-500 text-xs mb-6">Early adopter advantage for nodes.</p>
              <ul className="flex flex-col gap-3 text-[#1a3646] mb-8 text-xs">
                <li className="flex items-center gap-2 font-medium">6 Months duration</li>
                <li className="flex items-center gap-2">Specialized Networking</li>
                <li className="flex items-center gap-2">Job Assistance access</li>
                <li className="flex items-center gap-2">Ideation Support Node</li>
              </ul>
              <Link 
                href="https://forms.gle/P3jAJgdrLv4UjZt68" 
                target="_blank"
                className="w-full py-3 border border-[#1a3646] text-[#1a3646] rounded-xl font-bold text-xs hover:bg-[#1a3646] hover:text-white transition-all mt-auto text-center"
              >
                Select Plan
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
