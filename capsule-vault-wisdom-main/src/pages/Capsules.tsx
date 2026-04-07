import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Brain, Heart, TrendingUp, Palette, Building2, Cpu } from "lucide-react";
import capsulesData from "@/data/capsules.json";
import Footer from "@/components/Footer";

const categoryIcons: Record<string, any> = {
  "Career & Skills": TrendingUp,
  "General Knowledge": Brain,
  "Health & Safety": Heart,
  "Fun & Creativity": Palette,
  "Government & Welfare Schemes": Building2,
  "Science & Technology": Cpu,
};

const Capsules = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="outline" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Knowledge Capsules
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive collection of offline educational content organized into six specialized capsules
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {capsulesData.categories.map((category, index) => {
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
                        <div className="mt-3 text-sm text-muted-foreground">
                          {category.articles.length} Articles
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Capsules;
