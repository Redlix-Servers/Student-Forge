export default function QuoteSection() {
  return (
    <section className="w-full bg-gray-50 py-12 px-6 flex justify-center border-y border-gray-100">
      <div className="w-full max-w-4xl flex flex-col items-center text-center">
        {/* Decorative Quote Mark */}
        <div className="mb-12 text-[#fbb03b] opacity-20">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21L14.017 18C14.017 16.895 14.912 16 16.017 16H19.017V11H14.017V5H22.017V16C22.017 18.761 19.778 21 17.017 21H14.017ZM3.017 21L3.017 18C3.017 16.895 3.912 16 5.017 16H8.017V11H3.017V5H11.017V16C11.017 18.761 8.778 21 6.017 21H3.017Z" />
          </svg>
        </div>

        <blockquote className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight text-[#1a3646] mb-12 tracking-tight max-w-4xl italic">
          "Redefining the journey from student to innovator through global mentorship and practical excellence."
        </blockquote>

        <div className="flex flex-col items-center">
          <div className="w-12 h-px bg-[#fbb03b] mb-8"></div>
          <cite className="text-xl font-normal not-italic tracking-wide text-[#1a3646]">
            The Student Forge Team
          </cite>
          <span className="text-[10px] font-normal opacity-40 uppercase tracking-[0.4em] mt-3">
            Core Philosophy
          </span>
        </div>
      </div>
    </section>
  );
}
