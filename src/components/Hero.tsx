import { ArrowRight, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { openCalendly } from "./WhatDoYouWantToDo";

export const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSolutions = () => {
    const element = document.getElementById("what-to-do");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  /**
   * Path data for the content card - slants from top-right down to bottom-left
   */
  const cardPathData = "M 0,0 L 92,0 C 96,0 99,3 97,10 L 82,90 C 80,97 77,100 72,100 L 0,100 Z";

  return (
    <>
      <section 
        className="relative w-full h-[100vh] min-h-[700px] overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1F2937, #111827, #0f172a)' }}
      >
        {/* Background Pattern Layers */}
        
        {/* 1. White Top Left Area - Housing the Logo */}
        <div 
          className="absolute top-0 left-0 w-1/3 h-[180px] bg-white z-0" 
          style={{ clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0% 100%)' }}
        />
        
        {/* 2. Main Hero Content Container */}
        <div className="absolute left-0 top-[15%] w-[95%] md:w-[85%] lg:w-[75%] h-[70%] z-20 flex items-center">
          
          {/* SVG Background Layer for the Card */}
          <div className="absolute inset-0 pointer-events-none">
            <svg 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none" 
              className="w-full h-full drop-shadow-2xl overflow-visible"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="cardGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#60A5FA" />
                </linearGradient>
              </defs>
              <path 
                d={cardPathData} 
                fill="url(#cardGradient)" 
                stroke="white" 
                strokeWidth="4" 
                strokeLinejoin="round"
                paintOrder="stroke fill"
              />
            </svg>
          </div>

          {/* Foreground Content inside the slanted container */}
          <div 
            className="relative w-full h-full flex flex-col justify-center"
            style={{ clipPath: `path('M 0,0 L 9200,0 C 9600,0 9900,300 9700,1000 L 8200,9000 C 8000,9700 7700,10000 7200,10000 L 0,10000 Z')` }}
          >
            <div className="pl-8 md:pl-20 lg:pl-32 xl:pl-40 pr-12 md:pr-40 lg:pr-64 z-30">
              {/* Main headline */}
              <h1 
                className={`text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#1e1b4b] leading-[1.05] mb-6 uppercase tracking-tighter transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: '200ms' }}
              >
                Build. <br /> Scale. <br /> 
                <span className="text-white">Innovate.</span>
              </h1>
              
              {/* Subtext */}
              <p 
                className={`text-[#1F2937] text-xs md:text-sm lg:text-base font-bold max-w-md mb-10 leading-relaxed opacity-80 transition-all duration-700 ${mounted ? 'opacity-80 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: '350ms' }}
              >
                AI-powered products, expert cloud consulting, and developer support — all under one roof. We help you turn complex challenges into scalable solutions.
              </p>
              
              {/* CTAs */}
              <div 
                className={`flex items-center space-x-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: '450ms' }}
              >
                <button 
                  onClick={scrollToSolutions}
                  className="group flex items-center text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wider shadow-lg hover:brightness-110 transition-all transform hover:-translate-y-1 active:scale-95"
                  style={{ backgroundColor: '#1F2937' }}
                >
                  Explore Solutions
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={openCalendly}
                  className="text-white font-bold text-sm hover:underline transition-all opacity-90"
                >
                  Book a Call
                </button>
              </div>

              {/* Stats row */}
              <div 
                className={`flex flex-wrap gap-8 mt-10 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: '550ms' }}
              >
                <div>
                  <div className="text-2xl md:text-3xl font-extrabold text-[#1e1b4b]">3</div>
                  <div className="text-xs text-[#1F2937] font-semibold opacity-70">Cloud Platforms</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-extrabold text-[#1e1b4b]">AI</div>
                  <div className="text-xs text-[#1F2937] font-semibold opacity-70">Powered Insights</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-extrabold text-white">100%</div>
                  <div className="text-xs text-[#1F2937] font-semibold opacity-70">Client Focused</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Workspace Image/Illustration Area */}
        <div className="absolute right-0 bottom-0 w-1/2 h-[90%] z-10 flex items-end justify-end pointer-events-none opacity-90">
          {/* Workspace illustration */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Glowing background */}
            <div className="absolute bottom-[20%] right-[10%] w-[60%] h-[50%] bg-primary/20 rounded-full blur-[80px]" />
            
            {/* Workspace elements */}
            <div className="relative w-[80%] h-[70%]">
              {/* Monitor */}
              <div className="absolute top-[5%] left-[20%] w-[50%] h-[45%] bg-slate-800 rounded-xl border-2 border-slate-700 shadow-2xl overflow-hidden">
                <div className="absolute inset-2 bg-gradient-to-br from-primary/30 via-blue-900/50 to-slate-900 rounded-lg">
                  <div className="p-4 space-y-2">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-400" />
                      <div className="w-2 h-2 rounded-full bg-yellow-400" />
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                    </div>
                    <div className="space-y-2 pt-3">
                      <div className="h-2 bg-primary/50 rounded w-3/4" />
                      <div className="h-2 bg-accent/40 rounded w-1/2" />
                      <div className="h-2 bg-slate-500/40 rounded w-2/3" />
                      <div className="h-2 bg-primary/30 rounded w-4/5" />
                      <div className="h-2 bg-slate-600/40 rounded w-1/3" />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-8 h-5 bg-slate-700" />
                <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-20 h-2 bg-slate-700 rounded-full" />
              </div>
              
              {/* Laptop */}
              <div className="absolute bottom-[10%] right-[5%] w-[45%] h-[35%]">
                <div className="absolute top-0 w-full h-[70%] bg-slate-800 rounded-t-lg border-2 border-slate-700 border-b-0 overflow-hidden">
                  <div className="absolute inset-2 bg-gradient-to-br from-accent/20 via-emerald-900/40 to-slate-900 rounded">
                    <div className="absolute bottom-4 left-4 right-4 flex items-end gap-1.5 h-[45%]">
                      {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                        <div 
                          key={i} 
                          className="flex-1 bg-gradient-to-t from-accent to-emerald-400 rounded-t opacity-80"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 w-full h-[30%] bg-slate-700 rounded-b-lg border-2 border-slate-600 border-t-slate-800">
                  <div className="absolute inset-x-3 top-2 bottom-2 bg-slate-800/50 rounded grid grid-cols-10 gap-0.5 p-1">
                    {[...Array(20)].map((_, i) => (
                      <div key={i} className="bg-slate-600/50 rounded-sm" />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Coffee mug */}
              <div className="absolute bottom-[15%] left-[10%]">
                <div className="relative w-14 h-16 bg-slate-600 rounded-b-xl border-2 border-slate-500">
                  <div className="absolute -right-4 top-3 w-4 h-7 border-[3px] border-slate-500 rounded-r-full border-l-0" />
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-1">
                    <div className="w-1 h-5 bg-slate-400/30 rounded-full animate-pulse" />
                    <div className="w-1 h-7 bg-slate-400/20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <div className="w-1 h-6 bg-slate-400/25 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  </div>
                  <div className="absolute top-1.5 left-1.5 right-1.5 h-2.5 bg-amber-900/60 rounded-full" />
                </div>
              </div>
              
              {/* Notebook */}
              <div className="absolute top-[10%] right-[10%] w-[25%] h-[35%] bg-white/95 rounded-lg shadow-xl transform rotate-6 border border-slate-200">
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-red-400/50" />
                <div className="p-4 pl-5 space-y-2.5">
                  <div className="h-1.5 bg-slate-300 rounded w-full" />
                  <div className="h-1.5 bg-slate-300 rounded w-3/4" />
                  <div className="h-1.5 bg-primary/40 rounded w-5/6" />
                  <div className="h-1.5 bg-slate-300 rounded w-2/3" />
                  <div className="h-1.5 bg-slate-300 rounded w-full" />
                  <div className="h-1.5 bg-accent/40 rounded w-1/2" />
                </div>
              </div>
              
              {/* Pen */}
              <div className="absolute top-[35%] right-[5%] w-2.5 h-20 bg-gradient-to-b from-primary via-blue-600 to-blue-800 rounded-full transform rotate-[25deg] shadow-lg">
                <div className="absolute bottom-0 w-full h-4 bg-slate-300 rounded-b-full" />
              </div>
              
              {/* Mouse */}
              <div className="absolute bottom-[25%] left-[45%] w-8 h-12 bg-slate-600 rounded-full border border-slate-500 shadow-lg">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-4 bg-slate-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* 4. Bottom Transition - White shelf on the left */}
        <div className="absolute bottom-0 left-0 w-full h-[120px] bg-transparent z-40 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path 
              d="M 0 0 L 680 0 L 550 100 L 0 100 Z" 
              fill="white" 
            />
          </svg>
        </div>
      </section>

      {/* Scroll to Top Floating Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 w-14 h-14 bg-primary text-white rounded-full shadow-xl shadow-primary/30 flex items-center justify-center hover:bg-primary/90 hover:scale-110 transition-all duration-300 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </>
  );
};
