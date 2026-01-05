import React from "react";

const industries = [
  {
    id: "01",
    name: "E-commerce",
    desc: "Can't bear more shopping cart abandonments? A more decisive buyer won't do that. We let your customers know what they need through automated personalized emails and retargeting campaigns that win your customers back. For social proof, we organize UGC campaigns.",
  },
  {
    id: "02",
    name: "Tourism & Hospitality",
    desc: "If you aim to achieve a fully booked sign for your business, our efforts will introduce off-season guests. We help you establish a solid Google Business Profile supported with local SEO to enable any tourist seeking the geographic location to easily find your business.",
  },
  {
    id: "03",
    name: "Finance & Banking",
    desc: "Traditional tracks for attracting leads might have worked in the past. In the case of Gen Z and Gen Alpha, it's quite different. We enrich their screen with high-value content that enriches their personal finance awareness. We also develop robust software that roars.",
  },
  {
    id: "04",
    name: "Healthcare",
    desc: "Health isn't a topic someone can gamble on. Building trust is our major role, where we deliver informational content that enriches the patient's knowledge and their confidence in the facility as well. Sometimes, the brand needs to show more empathy, so we rebrand.",
  },
  {
    id: "05",
    name: "Luxury Retail",
    desc: "A rule of thumb: A luxury brand can't exist without a luxury website! Even if your brand has been in the jungle for generations, its values and exclusivity need support in the digital space. We assist your customer in having an elite UX carrying your brand signature.",
  },
  {
    id: "06",
    name: "Tech",
    desc: "IT, green energy, cloud computing, and every subsector where we find technology at the heart, we know that client acquisition isn't that difficult, but its retention is. So, we provide all channels with post-selling content that keeps users loyal and engaged.",
  },
  {
    id: "07",
    name: "Real Estate",
    desc: "\"I'm not interested anymore!\" A simple sentence that might break your agent's motivation. To prevent a competitor from grabbing your lead's decision, we push more. We enhance brand visibility through hyperlocal content marketing and nurturing campaigns.",
  },
  {
    id: "08",
    name: "Education",
    desc: "A crowded market that has too many similar alternatives limits your business capabilities to stand out. We consider ourselves explorers who excavate for USPs and showcase them to the targeted audience using the most suitable innovative marketing strategies.",
  },
  {
    id: "09",
    name: "Automotive",
    desc: "We are in a continuous quest to discover the customers' evolving behaviors and needs. To let your customers' engines roar, we build story plots that adapt to the buying journey shifts. Thus, we develop messages to sustain conversion processes for your business.",
  },
];

const Industries = () => {
  return (
    <section
      id="industries"
      className="industries-section relative w-full h-screen bg-transparent z-30 overflow-hidden"
    >
      {/* Dynamic Cinematic Backdrop Word */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
        <h4 className="text-[35vw] font-black text-white uppercase tracking-tighter select-none rotate-[-5deg] blur-sm">
          STRATEGY
        </h4>
      </div>

      <div className="w-full h-full max-w-[1440px] mx-auto px-10 md:px-20 flex flex-col md:flex-row items-center py-20">
        {/* Left Column */}
        <div className="w-full md:w-[45%] flex flex-col justify-center gap-12 md:gap-16 relative z-10 flex-shrink-0">
          {/* Static Header */}
          <div className="industries-static-head flex flex-col gap-6">
            <span className="text-blue-500 text-[10px] font-black tracking-[0.4em] uppercase">
              Industries We Serve
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight uppercase tracking-tighter mb-2">
              We Led +100 Brands <br className="hidden md:block" /> Out of the
              Woods
            </h2>
            <p className="text-white/40 text-[10px] md:text-xs font-black tracking-widest max-w-sm leading-relaxed uppercase border-l border-white/10 pl-8">
              Regardless of the industry-related challenges, we help our client
              to meet their goal efficiently. Every industry landed in had its
              distinctive characteristics. A deep discovery phase leads to the
              gratitude moment.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {/* Dynamic Counter */}
            <div className="industry-counter flex items-center gap-4">
              <span className="text-blue-500 text-sm font-black tracking-[0.3em]">
                01 / 09
              </span>
              <div className="h-[2px] w-20 bg-blue-500/20"></div>
            </div>

            {/* Dynamic Industry Titles */}
            <div className="relative h-24 md:h-32">
              {industries.map((ind, i) => (
                <div
                  key={ind.id}
                  className="industry-title-block absolute inset-0 flex items-center"
                >
                  <h3 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-none">
                    {ind.name.split(" & ").map((part, idx) => (
                      <React.Fragment key={idx}>
                        {part}
                        {idx === 0 && ind.name.includes("&") && (
                          <br className="md:hidden" />
                        )}
                        {idx === 0 && ind.name.includes("&") && " & "}
                      </React.Fragment>
                    ))}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Markers */}
          <div className="flex gap-2 md:gap-3">
            {industries.map((_, i) => (
              <div
                key={i}
                className="industry-progress-item h-[3px] w-8 md:w-10 bg-white/10 rounded-full transition-all duration-300 origin-left"
              />
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-[55%] h-full flex items-center justify-center mt-12 md:mt-0 md:pl-20 md:border-l border-white/5 relative flex-shrink-0">
          <div className="relative w-full max-w-xl h-80 flex items-center">
            {industries.map((ind, i) => (
              <div
                key={ind.id}
                className="industry-desc-block absolute inset-0 flex flex-col justify-center"
              >
                <div className="relative p-8 md:p-14 bg-white/[0.03] backdrop-blur-3xl border border-white/5 shadow-2xl">
                  <div className="absolute -top-[1px] -left-[1px] w-8 h-8 border-t-[2px] border-l-[2px] border-blue-600"></div>
                  <div className="absolute -bottom-[1px] -right-[1px] w-8 h-8 border-b-[2px] border-r-[2px] border-blue-600 opacity-50"></div>

                  <div className="absolute top-4 right-8 text-white/5 text-8xl md:text-9xl font-black select-none pointer-events-none italic">
                    {ind.id}
                  </div>

                  <p className="text-white/70 text-lg md:text-2xl font-medium leading-relaxed italic relative z-10">
                    "{ind.desc}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
