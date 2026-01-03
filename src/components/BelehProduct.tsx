import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileUp, MessageSquare, BarChart3, CheckCircle2, ArrowRight } from "lucide-react";

export const BelehProduct = () => {
  const steps = [
    {
      icon: <FileUp className="w-6 h-6 text-primary" />,
      title: "Upload Data",
      description: "Simply drag and drop your CSV or Excel files into Beleh's secure interface.",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-primary" />,
      title: "Ask Questions",
      description: "Ask anything about your data in plain English. No complex SQL or formulas needed.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
      title: "Get Insights",
      description: "Instant answers, beautifully visualized charts, and actionable summaries.",
    },
  ];

  return (
    <section id="beleh" className="bg-background-alt py-24">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-accent font-bold tracking-wider uppercase text-sm">Our AI Product</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-secondary leading-tight">
                From Data to Insight — <br />
                <span className="text-primary">Powered by Beleh AI</span>
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Beleh transforms how you interact with your business data. Stop digging through rows of spreadsheets and start having a conversation with your information.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Instant AI-powered data cleaning",
                "Conversational analytics in natural language",
                "Automated visualization generation",
                "Enterprise-grade data security"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="px-10 group" asChild>
              <a href="https://beleh.elfetech.com/signup">
                Try Beleh Free
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          <div className="grid gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="group hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                <CardContent className="p-8 flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {step.icon}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-secondary">{step.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
