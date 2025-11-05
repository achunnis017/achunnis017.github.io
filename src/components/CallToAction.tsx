import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 gradient-soft" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <Heart className="w-16 h-16 mx-auto mb-6 text-primary animate-float" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Ready to Find Love?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join LoveConnect today and start your journey to finding meaningful connections
          </p>
          <Button 
            size="lg"
            className="gradient-romantic text-primary-foreground shadow-romantic hover:opacity-90 transition-smooth px-12 py-6 text-lg"
          >
            Get Started for Free
          </Button>
          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required • Join in 2 minutes
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
