import { useRef } from "react";

const team = [
  {
    name: "Alex Vibe",
    role: "Chief Executive Officer",
    image: "/team-pic-1.jpg", // You'll need to add these images
  },
  {
    name: "Mahmoud Essam",
    role: "Strategy Director",
    image: "/team-pic-1.jpg",
  },
  {
    name: "Ahmed Mohamed",
    role: "Creative Lead",
    image: "/team-pic-4.jpg",
  },
  {
    name: "Mohamed Elsayed",
    role: "Tech Architect",
    image: "/team-pic-4.jpg",
  },
];

const Team = () => {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      id="team"
      className="relative z-10 w-full h-auto min-h-fit py-32 bg-transparent flex flex-col items-center justify-center"
    >
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 text-center mx-auto">
          <span className="team-label text-blue-500 text-[10px] md:text-xs font-black tracking-[0.5em] uppercase mb-4 block">
            Elite Operators // 04
          </span>
          <h2 className="split-title text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight uppercase tracking-tighter mb-6">
            Leading Brands Out of the Woods
          </h2>
          <p className="content-p text-white/40 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            A specialized unit of digital strategists, creatives, and architects
            dedicated to delivering absolute market dominance.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {team.map((member, i) => (
            <div key={i} className="team-node group flex flex-col items-center">
              {/* Image Container with Glassmorphism Background */}
              <div className="relative w-full aspect-[4/5] mb-6 overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg hover:border-blue-400/40 transition-all duration-500">
                {/* Placeholder for transparent team image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center opacity-20 hover:opacity-100 hover:scale-110 transition-all duration-500"
                />
              </div>

              {/* Member Info */}
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight leading-none mb-2 group-hover:text-blue-500 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-white/40 text-xs md:text-sm font-medium uppercase tracking-wider">
                  {member.role}
                </p>
              </div>

              {/* Accent Line */}
              <div className="mt-4 h-[2px] w-12 bg-white/10 group-hover:w-full group-hover:bg-blue-500/40 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
