import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Target, Users, Zap, Shield } from "lucide-react";
import Footer from "@/components/Footer";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "100% Offline",
      description: "All content preloaded locally. Works completely offline without any internet dependency.",
    },
    {
      icon: Zap,
      title: "Instant Access",
      description: "No loading times, no buffering. Access knowledge instantly anytime, anywhere.",
    },
    {
      icon: Target,
      title: "Structured Learning",
      description: "Content organized across 6 capsules with clear, concise articles and bullet points.",
    },
    {
      icon: Users,
      title: "Student Friendly",
      description: "Designed specifically for students with distraction-free, focused content.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="outline" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              About Offline Knowledge Capsule
            </h1>
            <p className="text-xl text-muted-foreground">
              Your comprehensive offline educational companion
            </p>
          </div>

          <Card className="mb-8 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-foreground">
                Offline Knowledge Capsule is designed to provide students with instant access to essential knowledge without any internet dependency. We believe that education should be accessible anytime, anywhere, even in areas with limited or no internet connectivity.
              </p>
              <p className="text-foreground">
                Our platform offers structured information across six comprehensive capsules covering Career & Skills, General Knowledge, Health & Safety, Fun & Creativity, Government & Welfare Schemes, and Science & Technology. Each article is crafted with clear explanations and key takeaways to facilitate effective learning.
              </p>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-card/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border-2 border-primary/20">
            <CardContent className="pt-6">
              <p className="text-center text-lg font-medium">
                Start your offline learning journey today and access comprehensive knowledge anytime, anywhere!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
