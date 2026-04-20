'use client';

import React from 'react';

export default function PartnersSection() {
  const companies = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png" },
    { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1280px-Meta_Platforms_Inc._logo.svg.png" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" },
    { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/1280px-Accenture.svg.png" },
    { name: "TCS", logo: "https://i.logos-download.com/113971/29583-s2560-9598f09d0f40cf2bc3d3c47217493980.png/Tata_Consultancy_Services_Logo_2020-s2560.png?dl" },
    { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png" },
    { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/3840px-Wipro_Primary_Logo_Color_RGB.svg.png" }
  ];

  return (
    <section className="w-full bg-white py-10 flex flex-col items-center overflow-hidden border-y border-gray-50">
      <div className="w-full max-w-4xl text-center mb-8 px-6">
        <h2 className="text-xl lg:text-2xl font-normal text-[#1a3646]/50 tracking-tight">
          Mentors from Leading Global Companies
        </h2>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative w-full flex overflow-hidden group">
        <div className="flex animate-scroll-left whitespace-nowrap gap-12 py-4 items-center min-w-max">
          {/* Double the list for seamless loop */}
          {[...companies, ...companies].map((company, index) => (
            <div key={index} className="flex-shrink-0 flex items-center justify-center px-4 transition-transform duration-300 hover:scale-110">
              <img
                src={company.logo}
                alt={company.name}
                className="h-8 lg:h-10 w-auto object-contain block"
                loading="eager"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
