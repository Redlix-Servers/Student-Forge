import React from 'react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="w-full bg-white py-12 px-6 flex justify-center">
      <div className="w-full max-w-[1600px] bg-[#fbb03b] rounded-[48px] p-10 lg:p-16 flex flex-col items-center text-center text-[#1a3646]">
        <h2 className="text-4xl lg:text-5xl font-normal tracking-tight mb-6 leading-tight">
          Ready to Forge Your Future?
        </h2>
        <p className="text-lg lg:text-xl font-normal opacity-80 mb-12 max-w-2xl leading-relaxed">
          Join thousands of students who are already bridging the gap between academic theory and industry excellence.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Link 
            href="https://platform.studentforge.in" 
            className="px-12 py-5 bg-[#1a3646] text-white rounded-full text-sm font-normal hover:bg-[#2d414e] transition-all shadow-xl hover:scale-105"
          >
            Get Started Now
          </Link>
          <Link 
            href="/contact" 
            className="px-12 py-5 border border-[#1a3646]/20 rounded-full text-sm font-normal hover:bg-[#1a3646]/5 transition-all"
          >
            Contact Admissions
          </Link>
        </div>
      </div>
    </section>
  );
}
