const PremiumButton = ({
  children,
  onClick,
  className = "",
  variant = "primary",
}) => {
  const baseStyles =
    "cursor-pointer group relative px-10 py-5 rounded-sm font-black text-[10px] md:text-xs uppercase tracking-[0.2em] overflow-hidden transition-all duration-500 ease-out shadow-2xl active:scale-95";

  const variants = {
    primary: "bg-blue-600 text-white shadow-blue-500/20 border-transparent",
    outline:
      "bg-transparent text-white border border-white/10 shadow-none hover:border-blue-500/50",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10 transition-colors duration-500 group-hover:text-blue-600">
        {children}
      </span>
      {/* Animated Slide Layer */}
      <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>

      {/* Subtle Glow - following current space theme */}
      <div className="absolute inset-0 bg-blue-400/0 group-hover:bg-blue-400/10 blur-xl transition-all duration-700"></div>
    </button>
  );
};

export default PremiumButton;
