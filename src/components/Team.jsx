const Team = () => {
  const team = [
    { name: "Alex Vibe", role: "Chief Architect", id: "01" },
    { name: "Sarah Orbit", role: "Strategy Lead", id: "02" },
    { name: "Marcus Prime", role: "Creative Director", id: "03" },
  ];

  return (
    <section
      id="team"
      className="relative z-10 w-full min-h-screen py-32 bg-transparent flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-24">
          <span className="text-blue-500 text-xs font-black tracking-[0.4em] uppercase mb-4 block">
            The Crew // 04
          </span>
          <h2 className="split-title text-4xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-6">
            Elite Operators
          </h2>
          <p className="content-p text-white/40 text-sm md:text-base font-medium max-w-xl leading-relaxed">
            A specialized unit of digital architects dedicated to one single
            objective: Your brand's absolute market dominance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-white/5 border border-white/5">
          {team.map((member, i) => (
            <div
              key={i}
              className="team-node flex flex-col gap-6 p-12 bg-black/20 backdrop-blur-xl hover:bg-blue-600/10 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>

              <span className="text-blue-500/30 text-6xl font-black italic tracking-tighter select-none">
                {member.id}
              </span>

              <div className="flex flex-col gap-2">
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter group-hover:text-blue-500 transition-colors">
                  {member.name}
                </h3>
                <span className="text-white/20 text-[10px] uppercase tracking-[0.4em] font-black">
                  {member.role}
                </span>
              </div>

              <div className="mt-8 h-[1px] w-12 bg-white/10 group-hover:w-full group-hover:bg-blue-500/20 transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
