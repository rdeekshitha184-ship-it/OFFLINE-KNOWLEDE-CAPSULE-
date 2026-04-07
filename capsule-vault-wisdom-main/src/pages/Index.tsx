import { Link } from "react-router-dom";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, TrendingUp, Palette, Building2, Heart, Cpu, BookOpen, Info, Mail } from "lucide-react";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import capsulesData from "@/data/capsules.json";

const categoryIcons: Record<string, any> = {
  "Career & Skills": TrendingUp,
  "General Knowledge": Brain,
  "Health & Safety": Heart,
  "Fun & Creativity": Palette,
  "Government & Welfare Schemes": Building2,
  "Science & Technology": Cpu,
};

const Index = () => {
  const categories = capsulesData.categories;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <header className="mb-16">
          {/* Top navigation */}
          <div className="flex justify-end gap-2 mb-12">
            <Link to="/capsules">
              <Button variant="outline">
                <BookOpen className="mr-2 h-4 w-4" />
                Capsules
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline">
                <Info className="mr-2 h-4 w-4" />
                About
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline">
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Button>
            </Link>
          </div>
          
          {/* Centered hero section with logo */}
          <div className="text-center max-w-5xl mx-auto">
            <div className="relative inline-block mb-8 w-full md:w-auto">
              {/* Decorative capsule container */}
              <div className="relative px-4 sm:px-8 md:px-12 py-6 md:py-8 rounded-full border-4 border-primary/30 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 backdrop-blur-sm shadow-2xl">
                {/* Inner glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 blur-xl"></div>
                
                {/* Main heading */}
                <h1 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold italic bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-fade-in leading-tight">
                  OFFLINE KNOWLEDGE CAPSULE
                </h1>
              </div>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-semibold">
              Your comprehensive offline knowledge vault
            </p>
          </div>
        </header>

        <StatsSection />

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Knowledge Capsules
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
            Professional learning modules designed for offline access. Each capsule provides comprehensive coverage of essential topics.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
                const Icon = categoryIcons[category.name] || Brain;
                const backgrounds = [
                  "bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5",
                  "bg-gradient-to-br from-secondary/20 via-secondary/10 to-secondary/5",
                  "bg-gradient-to-br from-accent/20 via-accent/10 to-accent/5",
                  "bg-gradient-to-br from-purple-500/20 via-purple-500/10 to-purple-500/5",
                  "bg-gradient-to-br from-orange-500/20 via-orange-500/10 to-orange-500/5",
                  "bg-gradient-to-br from-teal-500/20 via-teal-500/10 to-teal-500/5",
                ];
                const iconBgs = [
                  "bg-gradient-to-br from-primary to-primary/70",
                  "bg-gradient-to-br from-secondary to-secondary/70",
                  "bg-gradient-to-br from-accent to-accent/70",
                  "bg-gradient-to-br from-purple-500 to-purple-600",
                  "bg-gradient-to-br from-orange-500 to-orange-600",
                  "bg-gradient-to-br from-teal-500 to-teal-600",
                ];
                const background = backgrounds[index % backgrounds.length];
                const iconBg = iconBgs[index % iconBgs.length];
                
                return (
                  <Link key={category.id} to={`/capsule/${category.id}`}>
                    <Card className={`h-full transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50 ${background} backdrop-blur-sm group`}>
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-xl ${iconBg} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="h-8 w-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-xl mb-2 font-bold group-hover:text-primary transition-colors">
                              {category.name}
                            </CardTitle>
                            <CardDescription className="text-base">
                              {category.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </Link>
                );
              })}
          </div>
        </section>

        <FeaturesSection />

        <CTASection />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
