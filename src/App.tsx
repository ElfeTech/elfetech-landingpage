import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhatDoYouWantToDo } from "@/components/WhatDoYouWantToDo";
import { BelehProduct } from "@/components/BelehProduct";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { TrustValue } from "@/components/TrustValue";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <main className="min-h-screen selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <Hero />
      <WhatDoYouWantToDo />
      <BelehProduct />
      <Services />
      <HowItWorks />
      <TrustValue />
      <CTASection />
      <Footer />
    </main>
  );
}

export default App;
