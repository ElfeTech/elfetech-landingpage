import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Cloud, Code2, Server, Globe, Cpu, Zap } from "lucide-react";

export const Services = () => {
  const services = [
    {
      title: "Cloud Consulting",
      description: "Expert guidance for AWS, Azure, and GCP. We help you design, migrate, and optimize your cloud infrastructure for maximum performance and cost-efficiency.",
      icon: <Cloud className="w-8 h-8 text-primary" />,
      features: ["Architecture Design", "Cloud Migration", "Cost Optimization", "Security Audits"],
      accent: "from-blue-500/10 to-transparent"
    },
    {
      title: "Vibe Coding Support",
      description: "Built something with AI but don't know how to scale it? We help you deploy, migrate databases, and validate production readiness for your AI-generated or vibe-coded projects.",
      icon: <Code2 className="w-8 h-8 text-accent" />,
      features: ["Deployment & DevOps", "Database Migration", "Production Validation", "Performance Scaling"],
      accent: "from-emerald-500/10 to-transparent"
    },
  ];

  return (
    <section id="services" className="py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-secondary">Technology Consulting</h3>
          <p className="text-lg text-slate-600">
            Beyond our products, we offer deep technical expertise to solve your most challenging business problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="relative overflow-hidden group border-slate-100 hover:border-primary/20 hover:shadow-2xl transition-all duration-500">
              <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-50`} />
              <CardHeader className="relative z-10 pt-10 px-10">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-3xl font-bold text-secondary mb-4">{service.title}</CardTitle>
                <p className="text-slate-600 text-lg leading-relaxed">{service.description}</p>
              </CardHeader>
              <CardContent className="relative z-10 px-10 pb-10">
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                      <Zap className="w-4 h-4 text-primary" />
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
             { icon: <Server className="w-5 h-5" />, label: "Infrastructure" },
             { icon: <Globe className="w-5 h-5" />, label: "Scalability" },
             { icon: <Cpu className="w-5 h-5" />, label: "Performance" },
             { icon: <Zap className="w-5 h-5" />, label: "Expert Support" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="text-slate-400 group-hover:text-primary transition-colors">
                {item.icon}
              </div>
              <span className="text-sm font-bold text-slate-600 uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

