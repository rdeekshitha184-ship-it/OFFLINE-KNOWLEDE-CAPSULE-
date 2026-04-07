import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wifi, Tablet, Users, Clock, Shield, Globe } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Wifi,
      title: "Completely Offline",
      description: "Once installed, access all content without any internet connectivity. Perfect for remote areas or unreliable connections.",
    },
    {
      icon: Tablet,
      title: "Multi-Device Support",
      description: "Works seamlessly across desktop, tablet, and mobile devices. Sync your progress across all platforms.",
    },
    {
      icon: Users,
      title: "Community Verified",
      description: "Content curated and verified by experts and community members to ensure accuracy and quality.",
    },
    {
      icon: Clock,
      title: "Self-Paced Learning",
      description: "Learn at your own pace with structured modules that you can start and stop anytime.",
    },
    {
      icon: Shield,
      title: "Privacy Focused",
      description: "Your learning data stays on your device. No tracking, no data collection, complete privacy.",
    },
    {
      icon: Globe,
      title: "Comprehensive Content",
      description: "Access detailed articles, interactive quizzes, and curated knowledge across multiple domains.",
    },
  ];

  return (
    <section className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          Why Choose Knowledge Capsules?
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Built for learners who demand reliable access to premium educational content, anywhere and anytime, without compromise.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30 bg-gradient-to-br from-card to-secondary/5">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturesSection;
