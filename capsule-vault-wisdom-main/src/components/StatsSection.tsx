import { Card } from "@/components/ui/card";

const StatsSection = () => {
  const stats = [
    { value: "500+", label: "Learning Modules" },
    { value: "100%", label: "Offline Access" },
    { value: "6", label: "Expert Categories" },
  ];

  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-8 text-center bg-gradient-to-br from-secondary/10 to-accent/5 border-2 hover:border-primary/30 transition-colors">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-2">
              {stat.value}
            </div>
            <div className="text-muted-foreground font-medium">{stat.label}</div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
