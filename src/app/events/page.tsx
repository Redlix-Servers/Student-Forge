import { Metadata } from 'next';
import Footer from "@/components/Footer";
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Events & Summits | Student Forge Bootcamps',
  description: 'Stay updated on upcoming Student Forge events, technical bootcamps, and national leadership summits. Join our flagship Summer Bootcamp 2026.',
};

const pastEvents = [
  "https://ik.imagekit.io/dypkhqxip/IMG_20260308_131425.jpg?updatedAt=1773266169989",
  "https://ik.imagekit.io/dypkhqxip/IMG_20260310_175149.jpg?updatedAt=1773266169978",
  "https://ik.imagekit.io/dypkhqxip/IMG_20260310_175105.jpg?updatedAt=1773266169996",
  "https://ik.imagekit.io/dypkhqxip/IMG_20260310_175035.jpg?updatedAt=1773266169852",
  "https://ik.imagekit.io/dypkhqxip/IMG_20260310_174945.jpg?updatedAt=1773266169831",
  "https://ik.imagekit.io/dypkhqxip/IMG_20260308_131321.jpg?updatedAt=1773266169809",
  "https://ik.imagekit.io/dypkhqxip/IMG_20260227_134707%20(1).jpg?updatedAt=1773266169756",
  "https://ik.imagekit.io/dypkhqxip/IMG_20260308_131351.jpg?updatedAt=1773266168825",
  "https://ik.imagekit.io/dypkhqxip/WhatsApp%20Image%202026-03-10%20at%2018.03.04.jpeg?updatedAt=1773265592482",
  "https://ik.imagekit.io/dypkhqxip/WhatsApp%20Image%202026-03-10%20at%2017.48.20.jpeg?updatedAt=1773265591827",
  "https://ik.imagekit.io/dypkhqxip/Screenshot%202026-03-12%20at%2003.11.30.png?updatedAt=1773265330453"
];

export default function EventsPage() {
  return (
    <main className="flex-1 bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-[#fbb03b] border-b border-[#1a3646]/10">
        <div className="relative z-10 w-full max-w-[1200px] mx-auto">
          <h1 className="text-4xl lg:text-6xl font-normal text-[#1a3646] mb-6 tracking-tight leading-tight">
            Events, Summits & <span className="text-white">Student Forge Work</span>.
          </h1>
          <p className="text-base lg:text-xl text-[#1a3646] opacity-80 max-w-2xl leading-relaxed">
            From technical immersion bootcamps to national leadership summits, we bring the industry to your academic node.
          </p>
        </div>
      </section>

      {/* Flagship Event Card */}
      <section className="py-24 px-6 flex justify-center bg-white">
        <div className="w-full max-w-[1200px]">
          <div className="p-12 md:p-16 bg-[#1a3646] rounded-[48px] flex flex-col lg:flex-row items-center justify-between gap-16 shadow-2xl relative overflow-hidden group">
            {/* Background Banner with Overlay */}
            <div className="absolute inset-0 z-0">
              <Image 
                src="https://ik.imagekit.io/dypkhqxip/Summer%20Bootcamp%20(2).png?updatedAt=1776542583323"
                alt="Summer Bootcamp Banner"
                fill
                className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-[3s]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a3646] via-[#1a3646]/90 to-[#1a3646]/40" />
            </div>

            <div className="relative z-10 flex flex-col gap-6 lg:max-w-xl">
              <div className="px-4 py-1 bg-[#fbb03b] text-[#1a3646] text-[10px] font-bold uppercase tracking-widest rounded-full self-start">
                Flagship Program
              </div>
              <h2 className="text-4xl lg:text-5xl font-normal text-white tracking-tight">Summer Bootcamp <span className="text-[#fbb03b]">2026</span></h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Join our premier national immersion program designed to transform your technical foundation into real-world engineering excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link 
                  href="https://forms.gle/P3jAJgdrLv4UjZt68" 
                  target="_blank"
                  className="px-10 py-5 bg-[#fbb03b] text-[#1a3646] rounded-full font-bold text-base shadow-lg hover:scale-105 transition-transform text-center"
                >
                  Stay Notified
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="py-24 px-6 bg-gray-50 flex justify-center">
        <div className="w-full max-w-[1200px]">
          <div className="mb-16 text-left">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#fbb03b] bg-white px-4 py-2 rounded-full border border-gray-100">National Impact</span>
            <h2 className="text-4xl font-normal text-[#1a3646] tracking-tight mt-6">Snapshots of Excellence</h2>
            <p className="text-sm text-gray-500 mt-4 max-w-xl">A glimpse into our past summits, technical bootcamps, and high-impact innovation cycles across national Student Forge nodes.</p>
          </div>
          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {pastEvents.map((url, i) => (
              <div key={i} className="relative break-inside-avoid rounded-3xl overflow-hidden border-8 border-white shadow-md hover:shadow-xl transition-all hover:scale-[1.02] cursor-pointer">
                <img 
                  src={url} 
                  alt={`Past event ${i + 1}`} 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 px-6 bg-white flex justify-center">
        <div className="w-full max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Leadership Summits", desc: "Gatherings focused on bridging the gap between student aspirations and executive-level mentorship." },
              { title: "Technical Hackathons", desc: "Intensive 48-hour sprints where students build, break, and scale real-world solutions." },
              { title: "Placement Bootcamps", desc: "Standardized readiness programs focused on technical evaluation and interview excellence." }
            ].map((event, i) => (
              <div key={i} className="p-10 bg-gray-50 border border-gray-100 rounded-[40px] shadow-sm">
                <h3 className="text-xl font-bold text-[#1a3646] mb-4">{event.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
