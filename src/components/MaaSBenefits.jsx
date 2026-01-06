import React, { useRef } from "react";
import PremiumButton from "./PremiumButton";

const benefits = [
  {
    title: "SMART Goal-Oriented Services",
    color: "bg-[#1e3a8a]",
  },
  {
    title: "Subscriptions-Based",
    color: "bg-[#0891b2]",
  },
  {
    title: "Flexible, Scalable, and Agile Frameworks",
    color: "bg-[#0d9488]",
  },
  {
    title: "Access to a Top Tier Cross-Functional Team",
    color: "bg-[#4f46e5]",
  },
  {
    title: "Reduced Operational Costs",
    color: "bg-[#0284c7]",
  },
];

const MaaSBenefits = () => {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      id="benefits"
      className="relative w-full h-screen bg-transparent"
    >
      <div className="w-full h-full max-w-7xl mx-auto px-6 md:px-10 lg:px-20 flex items-center justify-center">
        {/* Heading Area - Centered */}
        <div className="maas-heading-area max-w-4xl text-center">
          <span className="block text-blue-500 text-[10px] md:text-xs font-black tracking-[0.5em] uppercase mb-6">
            Section 4 (How MaaS is your best choice)
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight uppercase tracking-tighter mb-6 md:mb-8">
            Our MaaS Quest Is to Help Your Business Dominate the Jungle
          </h2>
          <p className="text-white/40 text-sm md:text-base lg:text-lg font-medium max-w-2xl mx-auto leading-relaxed border-l border-white/10 pl-6 md:pl-10">
            When a marketing agency builds castles in the sky for a client,
            digital marketing becomes a sweet daydream before it turns into a
            nightmare. Thus, we adhere to stringent criteria to meet our
            clients' marketing and sales needs, guided by a transparent vision
            and well-defined objectives.
          </p>
        </div>

        {/* Benefit Cards - Will be animated from center to scattered positions */}
        <div className="maas-cards-container absolute inset-0 flex items-center justify-center">
          <div className="relative w-full max-w-7xl px-6 md:px-10 lg:px-20">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className={`maas-card maas-card-${i} absolute opacity-0`}
                style={{
                  // All cards start at center
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div
                  className={`h-auto p-8 md:p-10 lg:p-12 ${benefit.color} shadow-2xl flex flex-col gap-6 md:gap-8 w-[280px] md:w-[300px]`}
                >
                  <div className="text-black/10 text-3xl md:text-4xl font-black italic tracking-tighter select-none">
                    0{i + 1}
                  </div>
                  <div className="flex flex-col gap-3 md:gap-4">
                    <h3 className="text-lg md:text-xl font-black text-black/90 uppercase tracking-tighter leading-tight">
                      {benefit.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA - Will appear at the end */}
        <div className="maas-cta absolute bottom-20 left-1/2 -translate-x-1/2 opacity-0">
          <PremiumButton variant="primary" className="px-16 md:px-24">
            Explore Our Plans
          </PremiumButton>
        </div>
      </div>
    </section>
  );
};

export default MaaSBenefits;
