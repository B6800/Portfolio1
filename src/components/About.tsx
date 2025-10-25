import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Rocket, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable solutions"
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Creating beautiful, intuitive interfaces"
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing for speed and efficiency"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with diverse teams"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate developer with 5+ years of experience creating digital solutions
            that make a difference. I love turning complex problems into simple, elegant designs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <p className="text-muted-foreground mb-4">
              Started as a curious student who fell in love with code, I've evolved into a
              full-stack developer who bridges the gap between technical excellence and
              human-centered design.
            </p>
            <p className="text-muted-foreground mb-4">
              I believe great software is not just about functionality—it's about creating
              experiences that feel natural, look beautiful, and solve real problems.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you'll find me exploring new technologies, contributing
              to open source projects, or sharing knowledge with the dev community.
            </p>
          </div>
          
          <div className="card-gradient rounded-lg p-8 animate-fade-in-up border border-border">
            <h4 className="text-lg font-semibold mb-4">Quick Facts</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>🌍 Based in San Francisco, CA</li>
              <li>💼 5+ years of professional experience</li>
              <li>🎓 Computer Science & Design background</li>
              <li>🚀 20+ successful projects delivered</li>
              <li>☕ Powered by coffee and curiosity</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card key={index} className="card-gradient border-border transition-smooth hover:glow-primary animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <highlight.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-semibold mb-2">{highlight.title}</h4>
                <p className="text-muted-foreground text-sm">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
 {/* ADD */}
