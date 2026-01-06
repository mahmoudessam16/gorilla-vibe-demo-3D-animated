import { useRef } from "react";

const Storytelling = () => {
  const sectionRef = useRef(null);

  const concepts = [
    {
      id: "visual-identity",
      title: "Visual Identity",
      desc: "Colors, patterns, styles, and lines are elements that nurture the human eyes. By building your business’s visual identity, we put an end to your audience’s hunger for industry exploration, as they find their calling in your brand.",
      accent: "#3b82f6", // Blue
    },
    {
      id: "packaging-design",
      title: "Packaging Design",
      desc: "Your package affects your sales. A single color, shape, or dimension might consume the customer’s patience and let them change their mind about the purchase. So, we deliver designs that sell more and grab the customer’s attention.",
      accent: "#6366f1", // Indigo
    },
    {
      id: "rebranding",
      title: "Rebranding",
      desc: "Rebranding is not about destructing the previous story; it’s about telling the same story from a different perspective that suits the current needs. Our artists and marketing experts know how to create the new details that put you ahead.",
      accent: "#a855f7", // Purple
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="storytelling"
      className="relative w-full h-auto min-h-fit bg-transparent text-white flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative z-10 py-32">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center min-h-[60vh]">
          <div className="mb-16">
            <span className="story-label text-blue-500 text-[10px] md:text-xs font-black tracking-[0.5em] uppercase mb-4 block opacity-0">
              Subconscious Influence // 05
            </span>
            <h2 className="story-title text-2xl md:text-4xl font-black text-white leading-tight uppercase tracking-tighter mb-8 opacity-0">
              Let Us Tell the Part of <br /> Your Story That Inspires!
            </h2>
            <p className="story-intro text-white/40 text-sm md:text-base font-medium max-w-xl leading-relaxed opacity-0">
              Digital marketing can’t achieve its goals without a dominant brand
              identity that inspires. While marketing sparks the human’s
              conscious and subconscious, our branding mainly impacts your
              audience’s subconscious.
            </p>
          </div>

          {/* Concepts progression area */}
          <div className="relative h-[300px] flex items-center">
            {concepts.map((concept, i) => (
              <div
                key={concept.id}
                className={`concept-block concept-block-${i} absolute top-0 left-0 w-full opacity-0`}
              >
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-6 flex items-center gap-4">
                  <span className="text-blue-500/30 text-lg font-mono">
                    0{i + 1}
                  </span>
                  {concept.title}
                </h3>
                <p className="text-white/30 text-sm md:text-lg leading-relaxed max-w-lg italic font-light border-l border-blue-500/20 pl-8">
                  {concept.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Visual Container */}
        <div className="w-full lg:w-1/2 flex items-center justify-center min-h-[50vh] lg:min-h-0">
          <div className="visual-outer-container relative w-full aspect-square max-w-[500px] bg-white/[0.02] border border-white/5 backdrop-blur-3xl p-1 px-1 overflow-hidden group">
            {/* Structural grid background inside the container */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              ></div>
            </div>

            {/* Visual Content (Abstract Symbolic) */}
            <div className="visual-content relative w-full h-full flex items-center justify-center">
              {/* Visual Identity Abstract */}
              <div className="visual-stage visual-stage-0 absolute inset-0 opacity-0 flex items-center justify-center">
                <div className="w-64 h-64 border-2 border-blue-500/20 rotate-45 transform-gpu"></div>
                <div className="w-48 h-48 border-2 border-blue-500/40 -rotate-12 absolute transform-gpu"></div>
                <div className="w-32 h-32 bg-blue-500/20 blur-xl absolute"></div>
              </div>

              {/* Packaging Design Abstract */}
              <div className="visual-stage visual-stage-1 absolute inset-0 opacity-0 flex items-center justify-center">
                <div className="w-64 h-80 border border-indigo-500/30 transform-gpu translate-y-4"></div>
                <div className="w-64 h-80 border-t-2 border-indigo-500/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform-gpu -skew-x-12"></div>
                <div className="w-40 h-40 bg-indigo-500/20 blur-2xl absolute"></div>
              </div>

              {/* Rebranding Abstract */}
              <div className="visual-stage visual-stage-2 absolute inset-0 opacity-0 flex items-center justify-center">
                <div className="w-72 h-72 rounded-full border border-purple-500/20 absolute transform-gpu"></div>
                <div className="w-48 h-48 rounded-full border-2 border-purple-500/40 absolute scale-110 transform-gpu"></div>
                <div className="w-24 h-24 bg-purple-500/20 blur-3xl absolute"></div>
                <div className="w-1 h-80 bg-gradient-to-t from-transparent via-purple-500/50 to-transparent absolute rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Storytelling;
