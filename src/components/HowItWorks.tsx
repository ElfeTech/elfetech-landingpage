export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description: "We analyze your current challenges, data landscape, and technical goals.",
    },
    {
      number: "02",
      title: "Design",
      description: "Our experts architect a custom solution tailored to your specific needs.",
    },
    {
      number: "03",
      title: "Implement",
      description: "Rapid deployment and integration with your existing workflows.",
    },
    {
      number: "04",
      title: "Optimize",
      description: "Continuous monitoring and improvements to ensure long-term success.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-secondary py-24 text-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm">Our Process</h2>
          <h3 className="text-4xl md:text-5xl font-bold">How We Work</h3>
          <p className="text-lg text-slate-400">
            A proven, systematic approach to delivering high-impact technological solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative space-y-6 group">
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-slate-700 -z-0" />
              )}
              
              <div className="relative z-10 w-20 h-20 rounded-3xl bg-slate-800 border border-slate-700 flex items-center justify-center text-3xl font-bold text-primary shadow-xl group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {step.number}
              </div>
              
              <div className="space-y-3">
                <h4 className="text-2xl font-bold">{step.title}</h4>
                <p className="text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

