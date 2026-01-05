import PremiumButton from "./PremiumButton";

const MaaSBenefits = () => {
  const benefits = [
    {
      title: "Strategy First",
      desc: "Every tactic is born from deep architectural planning.",
    },
    {
      title: "Agile Execution",
      desc: "Rapid deployment with precision-guided iterations.",
    },
    {
      title: "Full-Stack Agency",
      desc: "From SEO to App Dev, we own the entire stack.",
    },
  ];

  return (
    <section
      id="benefits"
      className="relative z-10 w-full min-h-screen py-32 bg-transparent flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-24">
          <span className="text-blue-500 text-xs font-black tracking-[0.4em] uppercase mb-4 block">
            Why Us // 03
          </span>
          <h2 className="split-title text-4xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-6">
            The MaaS Advantage
          </h2>
          <p className="content-p text-white/40 text-sm md:text-base font-medium max-w-xl leading-relaxed">
            Marketing as a Service redefined for the elite. We provide the
            infrastructure while you focus on the vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="benefit-item flex flex-col gap-6 p-10 border border-white/5 bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.04] transition-all group"
            >
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter group-hover:text-blue-500 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <PremiumButton variant="primary" className="px-16">
            Start Your Transformation
          </PremiumButton>
        </div>
      </div>
    </section>
  );
};

export default MaaSBenefits;
