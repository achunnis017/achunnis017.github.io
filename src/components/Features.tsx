import { Heart, Users, Shield, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Heart,
    title: "Authentic Connections",
    description: "Our algorithm matches you based on genuine compatibility, not just swipes"
  },
  {
    icon: Users,
    title: "Quality Community",
    description: "Join thousands of singles looking for meaningful, long-lasting relationships"
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Your privacy and safety are our top priorities with verified profiles"
  },
  {
    icon: Sparkles,
    title: "Smart Matching",
    description: "AI-powered suggestions that learn and improve with every interaction"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why Choose LoveConnect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience dating reimagined with features designed to help you find lasting love
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border-border/50 shadow-soft hover:shadow-romantic transition-smooth bg-card/80 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full gradient-romantic flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
