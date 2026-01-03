import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Calendar } from "lucide-react";
import { openCalendly } from "./WhatDoYouWantToDo";

export const CTASection = () => {
  return (
    <section className="py-24">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary via-blue-600 to-indigo-700 p-12 md:p-24 text-center text-white shadow-2xl">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-accent/20 rounded-full blur-[60px]" />
          
          <div className="relative z-10 space-y-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              <span>Ready to scale your intelligence?</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Ready to build the future of your business?
            </h2>
            
            <p className="text-xl text-blue-100 leading-relaxed">
              Join dozens of forward-thinking companies already using Elfetech to unlock their infinite technological potential.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
              <Button size="xl" className="bg-white text-primary hover:bg-slate-50 w-full sm:w-auto shadow-xl group rounded-full" asChild>
                <a href="https://beleh.elfetech.com/signup">
                  Get Started with Beleh
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                size="xl" 
                className="border-2 border-white/50 bg-white/10 text-white hover:bg-white hover:text-primary w-full sm:w-auto rounded-full transition-all duration-300"
                onClick={openCalendly}
              >
                <Calendar className="mr-2 w-5 h-5" />
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
