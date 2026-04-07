import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  const highlights = [
    { label: "Trusted by", value: "10,000+ Learners" },
    { label: "Powered by", value: "Expert Knowledge" },
    { label: "Zero dependency on", value: "Internet" },
  ];

  return (
    <section className="mb-16">
      <Card className="p-8 md:p-12 text-center bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border-2 border-primary/20">
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
          <Link to="/capsules">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl transition-all">
              Begin Learning Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link to="/about">
            <Button size="lg" variant="outline" className="border-2 hover:border-primary/50">
              Learn More About Us
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {highlights.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
              <div className="text-lg font-bold">{item.value}</div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};

export default CTASection;
