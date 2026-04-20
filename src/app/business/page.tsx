import { Metadata } from 'next';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Business Solutions | Partner with Student Forge',
  description: 'Bridge the gap between corporate requirements and student ingenuity. Launch student-led R&D projects and acquire top talent through Student Forge.',
};

export default function BusinessPage() {
  return (
    <main className="flex-1 bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-[#fbb03b] border-b border-[#1a3646]/10">
        <div className="relative z-10 w-full max-w-[1200px] mx-auto">
          <h1 className="text-4xl lg:text-6xl font-normal text-[#1a3646] mb-6 tracking-tight leading-tight">
            Corporate Solutions with <span className="text-white">Student Forge</span>.
          </h1>
          <p className="text-base lg:text-xl text-[#1a3646] opacity-80 max-w-2xl leading-relaxed">
            Bridging institutional talent with high-impact corporate requirements. Your gateway to verified student ingenuity.
          </p>
        </div>
      </section>

      {/* Main Partnership Blocks */}
      <section className="py-24 px-6 flex justify-center bg-gray-50 overflow-hidden">
        <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square lg:aspect-[5/4] rounded-[48px] overflow-hidden shadow-2xl border-8 border-white">
          </div>
          <div className="flex flex-col gap-10">
            <div className="p-10 bg-white border border-gray-100 rounded-[40px] shadow-sm hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-[#1a3646] mb-6">Talent Acquisition Pipeline</h3>
              <p className="text-base text-gray-500 leading-relaxed mb-6">Direct access to a verified pool of Student Forge high-performers. We standardize skills and evaluate readiness to ensure your talent acquisition is seamless.</p>
              <ul className="flex flex-col gap-4">
                {["Vetted Student Profiles", "Domain-Specific Talent Nodes", "Internship-to-Role Streams"].map((pt, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm font-medium text-[#1a3646]">
                    <div className="w-2 h-2 bg-[#fbb03b] rounded-full" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Impact Section */}
      <section className="py-20 px-6 bg-gray-50 flex justify-center text-center">
        <div className="w-full max-w-[800px] flex flex-col items-center gap-8">
          <h2 className="text-3xl font-normal text-[#1a3646] tracking-tight">Standardized Talent at Scale</h2>
          <p className="text-base text-gray-500 leading-relaxed">
            Student Forge works with corporations to build domain-specific curricula that ensure the talent coming out of our academic nodes is baseline-ready for professional challenges from day one.
          </p>
          <button className="px-10 py-5 bg-[#1a3646] text-white rounded-full font-bold text-base shadow-xl hover:scale-105 transition-transform">
            Request Partnership Data
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
