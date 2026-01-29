export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center
                 h-[70vh] sm:h-[80vh] md:h-[85vh]
                 overflow-hidden
                 bg-gradient-to-br from-[#7F00FF] via-[#E100FF] to-[#FF8A00]"
    >
      {/* Year badge */}
      <div
        className="absolute top-6 sm:top-8
                   text-[10px] sm:text-xs md:text-sm
                   border border-white/60 text-white
                   px-3 sm:px-4 py-1 rounded-full
                   tracking-widest z-20"
      >
        2026
      </div>

      {/* Ellipse */}
      <div
        className="absolute
                   w-[95%] sm:w-[88%] md:w-[70%]
                   h-[55%] sm:h-[42%]
                   border border-white/50
                   rounded-full"
      />

      {/* Title */}
      <h1
        className="
          relative z-10
          text-[3rem] sm:text-[5rem] md:text-[9rem] lg:text-[10rem]
          font-extrabold tracking-wider
          text-white
          font-['Bebas_Neue']
          leading-none
          drop-shadow-[0_12px_35px_rgba(0,0,0,0.45)]
        "
      >
        PORTFOLIO
      </h1>

      {/* Decorations – hide on phone */}
      <span
        className="hidden sm:block
                   absolute left-10 md:left-28
                   top-1/2 -translate-y-1/2
                   text-2xl md:text-3xl text-white/80"
      >
        ✦
      </span>

      <span
        className="hidden sm:block
                   absolute right-10 md:right-28
                   top-[60%]
                   text-lg md:text-xl text-white/80"
      >
        ◇
      </span>

      {/* Name */}
      <span
        className="
          absolute bottom-10 sm:bottom-16 md:bottom-24
          right-6 sm:right-10 md:right-24
          text-sm sm:text-base md:text-lg
          font-semibold tracking-wide
          text-[#FFE9B0]
          drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)]
        "
      >
        — Sumit
      </span>
    </section>
  );
}
