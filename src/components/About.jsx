import { AiOutlineMail } from "react-icons/ai"; // Email
import { FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa"; // LinkedIn, Instagram, Discord

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0b0b0b] text-white px-4 sm:px-8 md:px-20 py-20 sm:py-28 md:py-32"
    >
      {/* VIGNETTE */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.9))]" />
      </div>

      {/* CROSS LINES */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-[-10%] w-[120%] h-px bg-white/10 rotate-[6deg]" />
        <div className="absolute top-1/2 left-[-10%] w-[120%] h-px bg-white/10 -rotate-[6deg]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center">
        {/* IMAGE CARD */}
        <div className="flex justify-center">
          <div className="relative w-[240px] sm:w-[280px] md:w-[320px] rotate-[-3deg] bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl transition-transform duration-500 hover:rotate-0 hover:scale-[1.03]">
            {/* GLOW STRIP */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs tracking-widest px-4 py-1 rounded-full font-semibold z-20">
              VIDEO EDITOR
            </div>

            {/* IMAGE */}
            <img
              src="/sumit.jpeg"
              alt="Sumit"
              className="w-full h-[300px] sm:h-[340px] md:h-[380px] object-contain rounded-2xl bg-black drop-shadow-[0_25px_40px_rgba(0,0,0,0.8)]"
            />

            {/* BOTTOM GLOW */}
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent rounded-b-2xl" />

            {/* STATUS DOT */}
            <span className="absolute bottom-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
          </div>
        </div>

        {/* TEXT */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-['Bebas_Neue'] tracking-wider text-yellow-400 mb-4">
            Hola 👋
          </h2>

          <p className="text-sm sm:text-base text-white/75 leading-relaxed max-w-xl">
            My name is <span className="text-white font-semibold">Sumit</span>,
            a Video Editor & Motion Designer based in India. I specialize in
            cinematic storytelling, reels, and social media content with clean
            cuts and strong rhythm. Always exploring new creative directions to
            level up visuals.
          </p>

          {/* CONTACT */}
          <div className="mt-10">
            <h3 className="text-yellow-400 mb-4 tracking-widest text-sm">
              CONTACT
            </h3>
            <div className="flex flex-col gap-3 text-white/75 text-sm">
              <a
                href="mailto:isumitmishra15@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
              >
                <AiOutlineMail size={18} /> isumitmishra15@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/sumit-mishra-b916a727a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
              >
                <FaLinkedin size={18} /> linkedin.com/in/sumitmishra
              </a>
              <a
                href="https://x.com/sumiitmiishra?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
              >
                <FaDiscord size={18} /> sumiitmiishra
              </a>
              <a
                href="https://www.instagram.com/bysumiit?igsh=Mm93aHk1djRlZm94"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
              >
                <FaInstagram size={18} /> @bysumit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
