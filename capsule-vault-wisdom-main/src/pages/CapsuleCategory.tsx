import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, FileText, Brain } from "lucide-react";
import capsulesData from "@/data/capsules.json";
import Footer from "@/components/Footer";
import Quiz from "@/components/Quiz";

const CapsuleCategory = () => {
  const { categoryId } = useParams();
  const category = capsulesData.categories.find((cat) => cat.id === categoryId);

  if (!category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 flex items-center justify-center">
        <Card>
          <CardHeader>
            <CardTitle>Category Not Found</CardTitle>
            <CardDescription>The requested category could not be found.</CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-3 mb-8">
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Home
            </Button>
          </Link>
          <Link to="/capsules">
            <Button variant="ghost">
              Back to Capsules
            </Button>
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            {category.name}
          </h1>
          <p className="text-muted-foreground text-lg">{category.description}</p>
        </div>

        <Tabs defaultValue="articles" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="articles" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Articles ({category.articles.length})
            </TabsTrigger>
            <TabsTrigger value="quiz" className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              Quiz
            </TabsTrigger>
          </TabsList>

          <TabsContent value="articles">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {category.articles.map((article) => (
                <Link key={article.id} to={`/capsule/${categoryId}/article/${article.id}`}>
                  <Card className="h-full transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/50 bg-card/50 backdrop-blur-sm group">
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent group-hover:scale-110 transition-transform">
                          <FileText className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                            {article.title}
                          </CardTitle>
                          <CardDescription className="line-clamp-2">
                            {article.content.split('\n\n')[0].substring(0, 100)}...
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="quiz">
            <div className="max-w-3xl mx-auto mb-12">
              {category.quiz ? (
                <Quiz categoryName={category.name} questions={category.quiz} />
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>No Quiz Available</CardTitle>
                    <CardDescription>
                      Quiz for this category is coming soon!
                    </CardDescription>
                  </CardHeader>
                </Card>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default CapsuleCategory;
