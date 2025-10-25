import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative hero-gradient">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-primary">
            Alex Johnson
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Full Stack Developer & UI/UX Designer
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I craft beautiful, functional digital experiences that solve real problems
            and delight users. Welcome to my creative journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="default" size="lg" className="glow-primary">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="transition-bounce hover:scale-105">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110 transform">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-smooth hover:scale-110 transform">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110 transform">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
 {/* ADD */}
