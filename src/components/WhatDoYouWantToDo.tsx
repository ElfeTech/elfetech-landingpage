import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Cloud, Code2, ArrowRight, Sparkles, Server, Zap, Calendar } from "lucide-react";

// Declare Calendly on window for TypeScript
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export const openCalendly = () => {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/kaleab-girma/15-minute-expert-consultation?hide_event_type_details=1'
    });
  }
};

export const WhatDoYouWantToDo = () => {
  const offerings = [
    {
      type: "product",
      icon: <BarChart3 className="w-8 h-8" />,
      badge: "AI Product",
      title: "Beleh",
      tagline: "Chat with your data",
      description: "Upload CSV or Excel files and ask questions in plain English. Get instant insights, visualizations, and answers — no technical skills required.",
      features: ["Natural language queries", "Instant visualizations", "Data cleaning & prep", "Export reports"],
      cta: "Try Beleh Free",
      ctaLink: "https://beleh.elfetech.com/signup",
      gradient: "from-primary to-blue-600",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      type: "service",
      icon: <Cloud className="w-8 h-8" />,
      badge: "Consulting",
      title: "Cloud Services",
      tagline: "AWS • Azure • GCP",
      description: "From architecture design to migration and optimization. Our certified experts help you build secure, scalable, and cost-efficient cloud infrastructure.",
      features: ["Architecture design", "Cloud migration", "Cost optimization", "Security audits"],
      cta: "Get Cloud Help",
      ctaLink: "#services",
      gradient: "from-accent to-emerald-600",
      iconBg: "bg-accent/10",
      iconColor: "text-accent",
    },
    {
      type: "service",
      icon: <Code2 className="w-8 h-8" />,
      badge: "Production Ready",
      title: "Vibe Coding Support",
      tagline: "From prototype to production",
      description: "Built something with AI but don't know how to scale it? We help you deploy, migrate databases, and validate production readiness for your AI-generated or vibe-coded projects.",
      features: ["Deployment & DevOps", "Database migration", "Production validation", "Performance scaling"],
      cta: "Ship to Production",
      ctaLink: "#services",
      gradient: "from-secondary to-slate-700",
      iconBg: "bg-secondary/10",
      iconColor: "text-secondary",
    },
  ];

  return (
    <section id="what-to-do" className="py-24 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" />
            How Can We Help?
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-secondary">
            What do you want to do?
          </h3>
          <p className="text-lg text-slate-600">
            Whether you need an AI tool, cloud expertise, or developer support — we've got you covered.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {offerings.map((item, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Top gradient bar */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.gradient}`} />
              
              <CardContent className="p-8 pt-10">
                {/* Badge */}
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 ${item.iconBg} ${item.iconColor}`}>
                  {item.type === "product" ? <Sparkles className="w-3 h-3" /> : <Server className="w-3 h-3" />}
                  {item.badge}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl ${item.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={item.iconColor}>{item.icon}</div>
                </div>

                {/* Content */}
                <h4 className="text-2xl font-bold text-secondary mb-1">{item.title}</h4>
                <p className={`text-sm font-semibold ${item.iconColor} mb-4`}>{item.tagline}</p>
                <p className="text-slate-600 leading-relaxed mb-6">{item.description}</p>

                {/* Features */}
                <div className="space-y-2 mb-8">
                  {item.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                      <Zap className={`w-4 h-4 ${item.iconColor}`} />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  className={`w-full group/btn bg-gradient-to-r ${item.gradient} hover:opacity-90 text-white shadow-lg`}
                  asChild
                >
                  <a href={item.ctaLink}>
                    {item.cta}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA - Calendly */}
        <div className="text-center mt-16">
          <p className="text-slate-500 mb-4">Not sure what you need?</p>
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            onClick={openCalendly}
          >
            <Calendar className="mr-2 w-4 h-4" />
            15 Minutes Expert Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};
