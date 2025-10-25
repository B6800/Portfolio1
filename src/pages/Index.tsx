import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      
      <footer className="py-8 px-6 border-t border-border bg-muted/10">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Alex Johnson. Built with ❤️ using React, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Crafted with attention to detail and passion for great design.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
//
