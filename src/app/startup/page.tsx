import { Metadata } from 'next';
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Startup Node | Student Forge Entrepreneurship',
  description: 'Join the Student Forge Startup Node. Incubate your ideas, access mentorship from industry veterans, and utilize our technical infrastructure to build your startup.',
};

export default function StartupPage() {
  return (
    <main className="flex-1 bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-[#fbb03b] border-b border-[#1a3646]/10">
        <div className="relative z-10 w-full max-w-[1200px] mx-auto">
          <h1 className="text-4xl lg:text-6xl font-normal text-[#1a3646] mb-6 tracking-tight leading-tight">
            Innovation & <span className="text-white">Student Forge Startup Node</span>.
          </h1>
          <p className="text-base lg:text-xl text-[#1a3646] opacity-80 max-w-2xl leading-relaxed">
            Incubating ideas into high-impact reality. The Node provides the foundation, industry access, and technical resources for the builders of tomorrow.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 px-6 flex justify-center bg-white border-b border-gray-100">
        <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#1a3646] tracking-tight">Incubating Ideas at <br/><span className="text-[#fbb03b]">Institutional Scale</span></h2>
            <p className="text-base text-gray-500 leading-relaxed font-normal">
              Student Forge identifies high-potential concepts directly from academic nodes. Our incubation process is designed to strip away the complexities of early-stage startups, allowing founders to focus entirely on product and market fit.
            </p>
            <div className="grid grid-cols-2 gap-10 mt-4">
              <div>
                <h4 className="text-2xl font-bold text-[#1a3646]">50+</h4>
                <p className="text-xs uppercase tracking-widest text-[#fbb03b] font-bold">Active Projects</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#1a3646]">12</h4>
                <p className="text-xs uppercase tracking-widest text-[#fbb03b] font-bold">National Nodes</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl order-1 lg:order-2 border-8 border-gray-50">
            <Image 
              src="/Users/rishirohankalapala/.gemini/antigravity/brain/c03e888f-45c9-4292-a927-4da2ddcc425c/startup_incubation_hub_1776721906116.png"
              alt="Startup Hub"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* Three Pillars Section */}
      <section className="py-20 px-6 flex justify-center bg-gray-50">
        <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Technical Incubation", desc: "Structured support for early-stage hardware and software ideas, providing the architecture needed to build robust MVPs." },
            { title: "Direct Mentorship", desc: "Direct access to founders and industry veterans who provide zero-fluff guidance on scaling and sustainability." },
            { title: "Growth Infrastructure", desc: "Access to the technical, operational, and legal tools needed to transition from a project to a formal startup." }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-white border border-gray-100 rounded-[32px] shadow-sm">
              <h3 className="text-lg font-bold text-[#1a3646] mb-3">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed text-[13px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 flex justify-center bg-white">
        <div className="w-full max-w-[1200px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-normal text-[#1a3646] tracking-tight">The Student Forge Pathway</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {["Discovery", "Validation", "Incubation", "Launch"].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-4 group">
                <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-[#1a3646] font-bold text-xl group-hover:bg-[#fbb03b] group-hover:text-white transition-all cursor-default">
                  0{i+1}
                </div>
                <h4 className="text-base font-bold text-[#1a3646]">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-[#1a3646] text-white flex justify-center text-left">
        <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-10">
          <h2 className="text-2xl lg:text-3xl font-normal tracking-tight underline decoration-[#fbb03b] underline-offset-8 decoration-4">Ready to build? <br/> Join the Student Forge Node.</h2>
          <Link 
            href="https://forms.gle/P3jAJgdrLv4UjZt68" 
            target="_blank"
            className="px-10 py-5 bg-[#fbb03b] text-[#1a3646] rounded-full font-bold text-base shadow-xl hover:scale-105 transition-transform"
          >
            Apply Now
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
