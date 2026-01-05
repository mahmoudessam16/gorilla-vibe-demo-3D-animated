import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import PremiumButton from "./PremiumButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef();
  const backdropRef = useRef();
  const linksRef = useRef([]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "expo.inOut", duration: 1 },
      });

      if (isOpen) {
        tl.to(drawerRef.current, { x: 0 })
          .to(backdropRef.current, { opacity: 1, pointerEvents: "auto" }, 0)
          .fromTo(
            linksRef.current,
            { y: 100, opacity: 0, rotate: 2 },
            {
              y: 0,
              opacity: 1,
              rotate: 0,
              stagger: 0.1,
              duration: 1.2,
              ease: "power4.out",
            },
            0.4
          );
      } else {
        tl.to(drawerRef.current, { x: "100%" }).to(
          backdropRef.current,
          { opacity: 0, pointerEvents: "none" },
          0
        );
      }
    },
    { dependencies: [isOpen] }
  );

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Industries", href: "#industries" },
    { name: "Benefits", href: "#benefits" },
    { name: "Team", href: "#team" },
  ];

  return (
    <>
      {/* 1. Global Glass Layer - Z-80 (Behind Drawer) */}
      <div
        className={`fixed top-0 left-0 w-full h-[88px] z-[80] transition-all duration-500 pointer-events-none opacity-100`}
      />

      {/* 2. Nav Content Layer - Z-100 (On Top) */}
      <nav className="fixed top-0 left-0 w-full px-5 py-5 flex justify-between items-center z-[100] pointer-events-none">
        {/* Logo Left - Premium Style */}
        <div className="flex items-center gap-4 transition-opacity duration-500 pointer-events-auto">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center p-2 shadow-lg shadow-blue-500/20">
            <img
              src="/logo.svg"
              alt="logo"
              className="w-full h-full object-contain brightness-0 invert"
            />
          </div>
          <span className="text-white font-black text-xl tracking-tighter uppercase">
            Gorilla Vibe
          </span>
        </div>

        {/* Menu Toggle Right */}
        <button
          onClick={toggleMenu}
          className="flex items-center gap-3 text-white group hover:text-blue-400 transition-all cursor-pointer pointer-events-auto"
        >
          <span className="text-[10px] uppercase font-black tracking-[0.4em] pt-1">
            {isOpen ? "Close" : "Menu"}
          </span>
          <div className="relative w-10 h-10 flex justify-center items-center">
            <div className="absolute inset-0 border border-white/10 rounded-full group-hover:border-blue-500/50 transition-colors"></div>
            <div
              className={`w-4 h-[1px] bg-white transition-transform duration-500 ${
                isOpen ? "rotate-45" : "rotate-0"
              }`}
            ></div>
            <div
              className={`absolute w-4 h-[1px] bg-white transition-transform duration-500 ${
                isOpen ? "-rotate-45" : "rotate-90"
              }`}
            ></div>
          </div>
        </button>
      </nav>

      {/* 3. Side Drawer - Elevated Door Effect */}
      <div
        ref={drawerRef}
        className="fixed top-0 right-0 w-full md:w-[50%] h-screen bg-[#020617] z-[90] translate-x-full flex flex-col px-12 md:px-24 border-l border-white/5 shadow-[-50px_0_100px_rgba(0,0,0,0.5)] pointer-events-auto will-change-transform"
        style={{
          background: "linear-gradient(135deg, #040d21 0%, #020617 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-white"></div>
          <div className="absolute left-2/4 top-0 bottom-0 w-[1px] bg-white"></div>
          <div className="absolute left-3/4 top-0 bottom-0 w-[1px] bg-white"></div>
        </div>

        <div className="h-full flex flex-col justify-center relative z-10">
          <div className="flex flex-col gap-6 md:gap-4">
            {navLinks.map((link, i) => (
              <div key={link.name} className="overflow-hidden">
                <a
                  href={link.href}
                  ref={(el) => (linksRef.current[i] = el)}
                  onClick={() => setIsOpen(false)}
                  className="inline-block text-white text-4xl md:text-6xl font-black hover:text-blue-500 transition-all tracking-tighter opacity-0 leading-[0.9] will-change-transform"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-24 md:mt-32 flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="flex flex-col gap-6">
              <span className="text-blue-500 text-[10px] uppercase tracking-[0.3em] font-black">
                Social Realms
              </span>
              <div className="flex gap-8 text-white/40 text-[11px] font-black tracking-widest">
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors border-b border-transparent hover:border-blue-400 pb-1"
                >
                  INSTAGRAM
                </a>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors border-b border-transparent hover:border-blue-400 pb-1"
                >
                  LINKEDIN
                </a>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors border-b border-transparent hover:border-blue-400 pb-1"
                >
                  X / TWITTER
                </a>
              </div>
            </div>

            <PremiumButton variant="primary">Enter the Quest</PremiumButton>
          </div>
        </div>

        <div className="absolute bottom-12 left-12 md:left-24 right-12 md:right-24 flex justify-between text-[10px] uppercase tracking-[0.4em] text-white/10 font-black">
          <span>©2026 GORILLA VIBE</span>
          <span>Earth // Orbit L2</span>
        </div>
      </div>

      {/* Backdrop - synchronized with GSAP */}
      <div
        ref={backdropRef}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[85] opacity-0 pointer-events-none"
        onClick={() => setIsOpen(false)}
      ></div>
    </>
  );
};

export default Navbar;
