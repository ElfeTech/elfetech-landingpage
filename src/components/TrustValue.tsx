import { ShieldCheck, Users, TrendingUp, Cpu } from "lucide-react";

export const TrustValue = () => {
  const benefits = [
    {
      icon: <Users className="w-10 h-10" />,
      title: "Expert-Led",
      description: "Our team consists of veteran cloud architects and AI researchers with decades of combined experience.",
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Scalable Solutions",
      description: "Everything we build is designed to grow with your business, from startup to enterprise scale.",
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: "Practical AI",
      description: "We focus on real-world utility, not just hype. Our AI products solve actual business bottlenecks.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: "Client-First",
      description: "Your success is our priority. We listen, adapt, and deliver solutions tailored to your unique business needs.",
    },
  ];

  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-primary font-bold tracking-wider uppercase text-sm">Why Choose Us</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-secondary leading-tight">
                Built on Trust, <br />
                Driven by <span className="text-primary">Innovation</span>
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Elfetech means "My Infinite Technology". We believe that with the right expertise and tools, the possibilities for your business are truly limitless.
              </p>
            </div>
            
            <div className="flex items-center gap-6 p-6 rounded-2xl bg-primary/5 border border-primary/10">
              <div className="text-4xl font-bold text-primary">10+</div>
              <div className="text-sm font-medium text-slate-600">
                Years of industry expertise <br /> delivered across 50+ projects
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="space-y-4 p-6 rounded-2xl hover:bg-slate-50 transition-colors duration-300">
                <div className="text-primary">{benefit.icon}</div>
                <h4 className="text-xl font-bold text-secondary">{benefit.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

