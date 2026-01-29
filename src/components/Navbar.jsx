import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-40">
      <nav
        className="mx-auto max-w-7xl
                   flex items-center justify-between
                   px-4 sm:px-6 md:px-10
                   py-3
                   bg-black/20 backdrop-blur-md
                   text-white"
      >
        {/* LOGO */}
        <div className="flex items-center gap-2 sm:gap-3 cursor-pointer">
          <img
            src="/sumit.png"
            alt="Sumit"
            className="w-9 h-9 sm:w-10 sm:h-10
                       rounded-full object-cover
                       grayscale hover:grayscale-0
                       transition"
          />
          <h1 className="text-lg sm:text-xl tracking-wide font-extrabold uppercase font-['Bebas_Neue']">
            SUMIT
          </h1>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden sm:flex gap-8 text-xs sm:text-sm tracking-[0.3em]">
          <a href="#about" className="hover:opacity-70 transition">
            ABOUT
          </a>
          <a href="#work" className="hover:opacity-70 transition">
            WORK
          </a>
          <a href="#contact" className="hover:opacity-70 transition">
            CONTACT
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden flex flex-col gap-1"
        >
          <span className="w-5 h-[2px] bg-white" />
          <span className="w-5 h-[2px] bg-white" />
          <span className="w-5 h-[2px] bg-white" />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="sm:hidden bg-black/90 backdrop-blur-md text-white">
          <div className="flex flex-col items-center gap-6 py-6 tracking-widest text-sm">
            <a href="#about" onClick={() => setOpen(false)}>
              ABOUT
            </a>
            <a href="#work" onClick={() => setOpen(false)}>
              WORK
            </a>
            <a href="#contact" onClick={() => setOpen(false)}>
              CONTACT
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
