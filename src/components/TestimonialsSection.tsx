'use client';

import React from 'react';

const testimonialsRow1 = [
  { name: "Tikaigari Anirudh", college: "CMR Institute of Technology", feedback: "The mentorship at Student Forge is life-changing. It helped me bridge the gap between college and the real world." },
  { name: "Vanshika", college: "CMR Institute of Technology", feedback: "I've gained immense practical knowledge through the structured programs and community initiatives here." },
  { name: "Manchikatla Sai Charan", college: "CMR Institute of Technology", feedback: "A truly user-friendly platform that provides perfect guidance for students transitioning into the tech industry." },
  { name: "Bandari ramu", college: "Kamala Institute of Technology", feedback: "Student Forge offers a unique ecosystem for learning that you simply can't find anywhere else. Highly recommended." },
  { name: "Sreeja Reddy Yalam", college: "CMR Institute of Technology", feedback: "The programs are well-balanced and clearly structured, providing a solid foundation for any aspiring innovator." },
  { name: "Pasala George Joseph", college: "CMR Institute of Technology", feedback: "I feel much more confident in my professional skills thanks to the constant support from the SF community." },
];

const testimonialsRow2 = [
  { name: "Kacham shanmukh", college: "CMR Institute of Technology", feedback: "One of the best professional development platforms. I've enjoyed every moment of my journey here." },
  { name: "Sanjana Guntuka", college: "Kamala Institute of Technology", feedback: "Extremely helpful in evaluating my true potential and identifying the right career path in technical domains." },
  { name: "Kalyan Janjirala", college: "Other Institutions", feedback: "This platform perfectly exposes us to the competitive world and gives us the skills to thrive in it." },
  { name: "Vishwanath Arnitha", college: "KIT Karimnagar", feedback: "Everything about Student Forge is designed to help students grow. It's been a truly transformative experience." },
  { name: "Akshitha Mandala", college: "KIT Karimnagar", feedback: "The perfect place to strengthen full stack fundamentals while working on real projects and global mentorship." },
  { name: "Navadeep", college: "KIT Karimnagar", feedback: "Student Forge provides incredible resources for mastering Next.js, AI/ML, and everything in between." },
];

const cardColors = [
  'bg-[#eef2ff]', // Soft Blue
  'bg-[#fff7ed]', // Soft Orange
  'bg-[#f0fdf4]', // Soft Green
  'bg-[#fdf2f8]', // Soft Pink
];

function TestimonialCard({ name, college, feedback, colorIndex }: { name: string, college: string, feedback: string, colorIndex: number }) {
  const bgColor = cardColors[colorIndex % cardColors.length];
  
  return (
    <div className={`w-[300px] flex-shrink-0 ${bgColor} rounded-[20px] p-7 transition-all duration-500 hover:scale-[1.02] whitespace-normal`}>
      <p className="text-[14px] font-normal text-[#1a3646] leading-relaxed mb-6 italic opacity-80">
        "{feedback}"
      </p>
      <div className="flex flex-col">
        <span className="text-[14px] font-semibold text-[#1a3646]">{name}</span>
        <span className="text-[10px] font-normal text-[#1a3646] opacity-40 uppercase tracking-widest mt-1">{college}</span>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-white py-12 flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-4xl text-center mb-10 px-6">
        <h2 className="text-2xl lg:text-3xl font-normal text-[#1a3646] tracking-tight mb-2">
          Community Feedback
        </h2>
        <p className="text-xs font-normal text-[#1a3646] opacity-50">
          Voices from our interns across various institutions.
        </p>
      </div>

      {/* Row 1 - Scroll Left */}
      <div className="relative w-full flex overflow-hidden group mb-2">
        <div className="flex animate-scroll-left whitespace-nowrap gap-4 items-center min-w-max">
          {[...testimonialsRow1, ...testimonialsRow1].map((t, index) => (
            <TestimonialCard key={index} {...t} colorIndex={index} />
          ))}
        </div>
      </div>

      {/* Row 2 - Scroll Right */}
      <div className="relative w-full flex overflow-hidden group">
        <div className="flex animate-scroll-right whitespace-nowrap gap-4 items-center min-w-max">
          {[...testimonialsRow2, ...testimonialsRow2].map((t, index) => (
            <TestimonialCard key={index} {...t} colorIndex={index + 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
