import { useRef, useEffect } from "react";
import Background from "./three/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Industries from "./components/Industries";
import MaaSBenefits from "./components/MaaSBenefits";
import Team from "./components/Team";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef();

  // Initialize Smooth Scrolling (Lenis) - The "Camera Update" for the whole page
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.1,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Sync Lenis with ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  useGSAP(
    () => {
      // Global control object for Three.js synchronization
      window.heroCameraSettle = 0;

      // 1. Text Splitting
      const titles = gsap.utils.toArray(".split-title");
      titles.forEach((title) => {
        if (title.querySelector("span")) return;
        const text = title.innerText;
        title.innerHTML = text
          .split(/\s+/)
          .map(
            (word) =>
              `<span class="inline-block opacity-0 translate-y-4 will-change-transform">${word}&nbsp;</span>`
          )
          .join("");
      });

      // --- HERO ORCHESTRATION ---
      const heroSection = document.querySelector("#home");
      if (heroSection) {
        const words = heroSection.querySelectorAll(".split-title span");
        const fades = heroSection.querySelectorAll(".hero-fade-in");

        const heroTl = gsap.timeline({
          scrollTrigger: {
            trigger: heroSection,
            start: "top top",
            end: "+=120%",
            pin: true,
            scrub: 1.5, // Added cushioning
            anticipatePin: 1,
            onUpdate: (self) => {
              // Smoothly update the global property
              window.heroCameraSettle = self.progress;
            },
          },
        });

        heroTl
          .to(words, {
            opacity: 1,
            y: 0,
            stagger: 0.05,
            duration: 1,
            ease: "expo.out",
          })
          .to(
            fades,
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "expo.out",
            },
            "-=0.5"
          );
      }

      // --- SERVICES HORIZONTAL ---
      const servicesSection = document.querySelector("#services");
      if (servicesSection) {
        const track = servicesSection.querySelector(".services-track");
        const cards = servicesSection.querySelectorAll(".editorial-card");
        const progressBar = servicesSection.querySelector(
          ".services-progress-bar"
        );
        const serviceWords =
          servicesSection.querySelectorAll(".split-title span");

        gsap.to(serviceWords, {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 0.8,
          ease: "expo.out",
          scrollTrigger: {
            trigger: servicesSection,
            start: "top 80%",
          },
        });

        const horizontalTl = gsap.timeline({
          scrollTrigger: {
            trigger: servicesSection,
            start: "top top",
            end: () => `+=${track.scrollWidth - window.innerWidth}`,
            pin: true,
            scrub: 1.5, // Cushioned scrub
            pinSpacing: true,
            invalidateOnRefresh: true,
          },
        });

        horizontalTl.to(track, {
          x: () => -(track.scrollWidth - window.innerWidth),
          ease: "none",
        });

        gsap.to(progressBar, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: servicesSection,
            start: "top top",
            end: () => `+=${track.scrollWidth - window.innerWidth}`,
            scrub: 1.5,
          },
        });

        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0.3, scale: 0.98 },
            {
              opacity: 1,
              scale: 1,
              scrollTrigger: {
                trigger: card,
                containerAnimation: horizontalTl,
                start: "left 60%",
                end: "left 40%",
                scrub: 1.5,
              },
            }
          );
        });
      }

      // --- INDUSTRIES PINNED CONTENT progression ---
      const targetIndustries = document.querySelector("#industries");
      if (targetIndustries) {
        const titleBlocks = targetIndustries.querySelectorAll(
          ".industry-title-block"
        );
        const descBlocks = targetIndustries.querySelectorAll(
          ".industry-desc-block"
        );
        const progressItems = targetIndustries.querySelectorAll(
          ".industry-progress-item"
        );
        const counterSpan = targetIndustries.querySelector(
          ".industry-counter span"
        );
        const backdropWord = targetIndustries.querySelector("h4"); // The "STRATEGY" word

        gsap.set(titleBlocks, { opacity: 0, y: 60, scale: 0.9 });
        gsap.set(descBlocks, { opacity: 0, y: 40, scale: 0.95 });

        const industriesTl = gsap.timeline({
          scrollTrigger: {
            trigger: targetIndustries,
            start: "top top",
            end: "+=600%",
            pin: true,
            scrub: 1.5,
            pinSpacing: true,
          },
        });

        // Parallax the backdrop word during the entire pinned duration
        industriesTl.to(
          backdropWord,
          {
            y: -100,
            rotate: -2,
            ease: "none",
          },
          0
        );

        titleBlocks.forEach((_, i) => {
          const isFirst = i === 0;
          const isLast = i === titleBlocks.length - 1;
          const label = `ind-${i}`;

          industriesTl.add(label);

          // Focus Entrance (The "Camera Lens" switch feel)
          industriesTl.to(
            titleBlocks[i],
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "power4.out",
            },
            label
          );

          industriesTl.to(
            descBlocks[i],
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1,
              ease: "power3.out",
            },
            `${label}+=0.1`
          );

          industriesTl.to(
            progressItems[i],
            {
              backgroundColor: "#3b82f6",
              scaleX: 1.2,
              duration: 0.5,
              ease: "power2.out",
              onStart: () => {
                if (counterSpan) counterSpan.innerText = `0${i + 1} / 09`;
              },
            },
            label
          );

          // Deep Hold for kinetic stability
          industriesTl.to({}, { duration: 2 });

          if (!isLast) {
            // Exit with weight
            industriesTl.to(titleBlocks[i], {
              opacity: 0,
              y: -60,
              scale: 0.9,
              duration: 0.8,
              ease: "power4.in",
            });

            industriesTl.to(
              descBlocks[i],
              {
                opacity: 0,
                y: -40,
                scale: 0.95,
                duration: 0.8,
                ease: "power3.in",
              },
              "<"
            );

            industriesTl.to(
              progressItems[i],
              {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                scaleX: 1,
                duration: 0.4,
                ease: "power2.in",
              },
              "<"
            );
          }
        });
      }

      // --- REMAINING REVEALS ---
      const revealSections = gsap.utils.toArray(["#benefits", "#team"]);
      revealSections.forEach((section) => {
        const words = section.querySelectorAll(".split-title span");
        const contents = section.querySelectorAll(
          ".benefit-item, .team-node, .content-p, .cta-button"
        );

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        if (words.length)
          tl.to(words, {
            opacity: 1,
            y: 0,
            stagger: 0.05,
            duration: 1,
            ease: "expo.out",
          });
        if (contents.length)
          tl.fromTo(
            contents,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, stagger: 0.1, duration: 1, ease: "expo.out" },
            "-=0.7"
          );
      });

      ScrollTrigger.refresh();

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative bg-[#020617] text-white overflow-x-hidden selection:bg-blue-600 selection:text-white"
    >
      <Background />

      <div className="relative z-20 w-full pointer-events-none">
        <div className="navbar-container fixed top-0 w-full z-[500] pointer-events-auto">
          <Navbar />
        </div>

        <main className="w-full relative pointer-events-auto">
          <Hero />
          <Services />
          <Industries />
          <MaaSBenefits />
          <Team />
        </main>

        <div className="h-[20vh] bg-[#020617] flex items-center justify-center opacity-30 text-[10px] tracking-[0.4em] uppercase border-t border-white/5">
          &copy; 2026 The Gorilla Vibe. Orchestrated with Inertia.
        </div>
      </div>
    </div>
  );
}

export default App;
