import { Metadata } from 'next';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Contact Us | Student Forge HQ',
  description: 'Get in touch with the Student Forge national portal team. Reach out for collaborations, institutional nodes, or technical support.',
};

export default function ContactPage() {
  return (
    <main className="flex-1 bg-white">
      <section className="relative pt-32 pb-20 px-6 bg-[#fbb03b] border-b border-[#1a3646]/10">
        <div className="relative z-10 w-full max-w-[1200px] mx-auto">
          <h1 className="text-4xl lg:text-5xl font-normal text-[#1a3646] mb-6 tracking-tight leading-tight">
            Connect with <span className="text-white">Student Forge</span>.
          </h1>
          <p className="text-base lg:text-lg text-[#1a3646] opacity-70 max-w-2xl leading-relaxed">
            Reach out to our national portal team for collaborations, institutional nodes, or support.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 flex justify-center">
        <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#fbb03b]">Email</h3>
              <p className="text-lg font-medium text-[#1a3646]">info@studentforge.in</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#fbb03b]">Phone</h3>
              <p className="text-lg font-medium text-[#1a3646]">+91 6304218064</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#fbb03b]">HQ Node</h3>
              <p className="text-lg font-medium text-[#1a3646] leading-relaxed">
                HF2R+CCV, Devender Colony, Kompally,<br />
                Hyderabad, Telangana 500100
              </p>
            </div>
          </div>
          
          <div className="w-full h-[1100px] bg-gray-50 rounded-[32px] overflow-hidden flex justify-center border border-gray-100 shadow-sm">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSexG7oXTb4FzfStG3I-AdaNwlBZmr4pPQCsZZHK3lfrUupGgg/viewform?embedded=true" 
              width="100%" 
              height="1096" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              className="w-full"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
