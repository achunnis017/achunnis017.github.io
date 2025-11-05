import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import heroImage from "@/assets/hero-romantic.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Romantic background with soft bokeh lights"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>
      
      {/* Floating Hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <Heart className="absolute top-20 left-10 text-primary/20 w-8 h-8 animate-float" style={{ animationDelay: "0s" }} />
        <Heart className="absolute top-40 right-20 text-secondary/20 w-6 h-6 animate-float" style={{ animationDelay: "1s" }} />
        <Heart className="absolute bottom-32 left-1/4 text-primary/20 w-10 h-10 animate-float" style={{ animationDelay: "2s" }} />
        <Heart className="absolute bottom-20 right-1/3 text-secondary/20 w-7 h-7 animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 relative">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight">
            Find Your
            <span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Perfect Match
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover meaningful connections built on authenticity, shared values, and genuine chemistry
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="gradient-romantic text-primary-foreground shadow-romantic hover:opacity-90 transition-smooth px-8 py-6 text-lg"
            >
              Start Your Journey
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary/30 hover:bg-accent px-8 py-6 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
