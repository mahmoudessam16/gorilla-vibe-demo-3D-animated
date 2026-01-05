import { useRef } from "react";
import PremiumButton from "./PremiumButton";

const Services = () => {
  const scrollContainerRef = useRef();

  const editorialPillars = [
    {
      title: "AI SEO",
      subtitle: "Organic Authority",
      desc: "GEO, AEO, LLMO, and AIO are all faces of the same dice: Accumulating Brand Authority through structural intent.",
      image: "/service- 1.png",
      id: "01",
    },
    {
      title: "Content",
      subtitle: "Branded Narrative",
      desc: "Curating ecosystems that educate and entertain, ensuring your brand story leads with cultural capital.",
      image: "/service-2.png",
      id: "02",
    },
    {
      title: "Social Realms",
      subtitle: "Strategic Connection",
      desc: "Managing multi-channel consistency with white-glove attentiveness across the digital social fabric.",
      image: "/service-3.png",
      id: "03",
    },
    {
      title: "PPC & CRO",
      subtitle: "ROI Architecture",
      desc: "Surgical performance marketing driven by buyer persona logic and precision ROI mapping.",
      image: "/service-4.png",
      id: "04",
    },
    {
      title: "Email Flows",
      subtitle: "Logical Lifecycle",
      desc: "Personalized buyer journeys automated to stimulate leads and guide prospects to the next phase.",
      image: "/earth.jpg",
      id: "05",
    },
    {
      title: "Web / App",
      subtitle: "Full-Stack Design",
      desc: "Robust techniques satisfying user journeys in an unforgettable, high-performance digital experience.",
      image: "/moon.jpg",
      id: "06",
    },
  ];

  return (
    <section
      id="services"
      className="services-section relative z-10 w-full min-h-screen flex flex-col items-center bg-transparent overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-10 pt-32 pb-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="max-w-3xl">
            <span className="text-blue-500 text-[10px] font-black tracking-[0.5em] uppercase mb-4 block">
              Portfolio // 02
            </span>
            <h2 className="split-title text-4xl md:text-6xl font-black text-white leading-[0.9] tracking-tighter uppercase whitespace-pre-wrap">
              Strategic Services{"\n"}
              for the Digital Elite
            </h2>
          </div>
          <p className="text-white/30 text-[10px] font-black tracking-widest max-w-xs uppercase leading-relaxed border-l border-white/5 pl-8">
            Orchestrating total dominance through bespoke marketing
            infrastructure.
          </p>
        </div>
      </div>

      {/* Horizontal Track Container */}
      <div className="services-horizontal-container w-full relative h-[70vh] flex items-center">
        <div
          ref={scrollContainerRef}
          className="services-track flex gap-0 px-[10vw]"
        >
          {editorialPillars.map((service) => (
            <div
              key={service.id}
              className="editorial-card flex-shrink-0 w-[85vw] md:w-[33.33vw] h-[65vh] flex flex-col border-l border-white/5 group hover:bg-white/[0.02] transition-colors duration-700 pointer-events-auto cursor-pointer overflow-hidden"
            >
              {/* Full-width Editorial Image Header (Top 1/3) */}
              <div className="relative w-full h-1/3 overflow-hidden bg-black/60 border-b border-white/5">
                <img
                  src={service.image}
                  alt=""
                  className="w-full h-full object-cover grayscale opacity-50 contrast-75 brightness-75 group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-105 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-1000 ease-out"
                />
                <div className="absolute top-6 left-10 text-white/5 text-7xl font-black italic tracking-tighter select-none z-10">
                  {service.id}
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020617]/40"></div>
              </div>

              {/* Typography Content Area (Bottom 2/3) */}
              <div className="flex-1 flex flex-col justify-between p-10 md:p-14">
                <div className="mt-auto">
                  <span className="text-blue-600 text-[9px] font-black tracking-[0.4em] uppercase mb-4 block">
                    {service.subtitle}
                  </span>
                  <h3 className="text-4xl md:text-5xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-8 group-hover:text-blue-400 transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-white/40 text-[11px] md:text-xs font-medium leading-relaxed max-w-[260px]">
                    {service.desc}
                  </p>

                  <div className="mt-10 flex items-center gap-4 group/btn">
                    <div className="h-[1px] w-6 bg-blue-900 group-hover:w-10 group-hover:bg-blue-600 transition-all duration-500"></div>
                    <span className="text-[9px] text-white/40 font-black tracking-[0.3em] uppercase group-hover:text-white transition-colors">
                      Brief
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Line and CTA */}
      <div className="w-full max-w-7xl mx-auto px-10 pt-16 flex flex-col items-center gap-12">
        <div className="h-[1px] w-full bg-white/5 relative overflow-hidden">
          <div className="services-progress-bar absolute top-0 left-0 h-full w-full bg-blue-600 origin-left scale-x-0"></div>
        </div>

        <PremiumButton variant="outline" className="px-20">
          Explore All Capabilities
        </PremiumButton>
      </div>
    </section>
  );
};

export default Services;
