import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import capsulesData from "@/data/capsules.json";
import Footer from "@/components/Footer";

const Article = () => {
  const { categoryId, articleId } = useParams();
  const category = capsulesData.categories.find((cat) => cat.id === categoryId);
  const article = category?.articles.find((art) => art.id === articleId);

  if (!category || !article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 flex items-center justify-center">
        <Card>
          <CardHeader>
            <CardTitle>Article Not Found</CardTitle>
          </CardHeader>
        </Card>
      </div>
    );
  }

  // Split content into paragraphs and bullet points
  const contentParts = article.content.split('\n\n');

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex gap-3 mb-6">
          <Link to="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Home
            </Button>
          </Link>
          <Link to="/capsules">
            <Button variant="ghost" size="sm">
              All Capsules
            </Button>
          </Link>
          <Link to={`/capsule/${categoryId}`}>
            <Button variant="ghost" size="sm">
              {category.name}
            </Button>
          </Link>
        </div>

        <Card className="bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <Badge variant="secondary" className="w-fit mb-3">
              {category.name}
            </Badge>
            <CardTitle className="text-3xl md:text-4xl mb-4">{article.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              {contentParts.map((part, index) => {
                // Check if this part contains bullet points
                if (part.includes('•')) {
                  const lines = part.split('\n');
                  const heading = lines[0];
                  const bullets = lines.slice(1);

                  return (
                    <div key={index} className="mb-6">
                      {heading && <h3 className="text-xl font-bold mb-3 text-foreground">{heading}</h3>}
                      <ul className="space-y-2 list-none pl-0">
                        {bullets.map((bullet, bulletIndex) => {
                          const cleanBullet = bullet.replace('•', '').trim();
                          if (!cleanBullet) return null;
                          return (
                            <li key={bulletIndex} className="flex items-start gap-3">
                              <span className="text-primary text-xl mt-0.5">•</span>
                              <span className="text-foreground flex-1">{cleanBullet}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                } else {
                  // Regular paragraph
                  return (
                    <p key={index} className="mb-4 text-foreground leading-relaxed">
                      {part}
                    </p>
                  );
                }
              })}
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Article;
