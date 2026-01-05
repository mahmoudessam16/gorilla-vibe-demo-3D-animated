import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import PremiumButton from "./PremiumButton";

const FloatingTags = () => {
  const containerRef = useRef();
  const text = "Gorilla Vibe";

  useEffect(() => {
    const spawnTag = () => {
      if (!containerRef.current) return;

      const tag = document.createElement("div");
      tag.innerText = text;
      tag.className =
        "fixed pointer-events-none font-black uppercase tracking-[0.3em] text-[14px] md:text-[16px] select-none";

      const x = Math.random() * 80 + 10;
      const y = Math.random() * 80 + 10;
      const opacityTarget = Math.random() * 0.3 + 0.1;
      const color = Math.random() > 0.6 ? "#ffffff" : "#64748b";

      Object.assign(tag.style, {
        left: `${x}%`,
        top: `${y}%`,
        color: color,
        opacity: 0,
        zIndex: 0,
        transform: "translateY(20px) scale(0.9)",
      });

      containerRef.current.appendChild(tag);

      const tl = gsap.timeline({
        onComplete: () => {
          if (tag.parentNode) tag.parentNode.removeChild(tag);
        },
      });

      tl.to(tag, {
        opacity: opacityTarget,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
      }).to(tag, {
        y: -20,
        opacity: 0,
        duration: 2,
        ease: "power2.in",
        delay: 1,
      });
    };

    spawnTag();
    const interval = setInterval(spawnTag, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
    />
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 w-full min-h-screen flex flex-col justify-center items-start overflow-hidden px-10 md:px-20"
    >
      <FloatingTags />

      <div className="hero-content-wrapper relative z-10 max-w-5xl mt-20">
        <span className="text-blue-500 text-xs font-black tracking-[0.4em] uppercase mb-6 block opacity-0 hero-fade-in translate-y-4">
          The Strategy-First Agency
        </span>

        <h1 className="split-title text-4xl md:text-7xl font-black text-white leading-[1] tracking-tighter uppercase whitespace-pre-wrap">
          We Architect{"\n"}
          Digital Dominance{"\n"}
          For Elite Brands
        </h1>

        <div className="mt-12 flex flex-col md:flex-row items-start md:items-center gap-10 opacity-0 hero-fade-in translate-y-4">
          <p className="max-w-md text-white/40 text-[11px] md:text-xs font-black tracking-widest leading-relaxed uppercase border-l border-white/10 pl-8">
            Our mission is surgical: we eliminate digital friction and build
            unrivaled authority through data-orchestrated brand ecosystems.
          </p>

          <PremiumButton variant="primary">Start The Mission</PremiumButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
