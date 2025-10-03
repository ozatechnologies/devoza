import { Code2, Database, Palette, Smartphone, Brain, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const skills = [
  {
    category: "Frontend Development",
    icon: Code2,
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"],
    color: "from-primary to-blue-400"
  },
  {
    category: "Backend & Database",
    icon: Database,
    items: ["Node.js", "PostgreSQL", "MongoDB", "Firebase", "Supabase"],
    color: "from-secondary to-purple-400"
  },
  {
    category: "Mobile Development",
    icon: Smartphone,
    items: ["React Native", "Flutter", "Android", "iOS"],
    color: "from-accent to-pink-400"
  },
  {
    category: "AI & ML",
    icon: Brain,
    items: ["TensorFlow", "OpenAI APIs", "Computer Vision", "NLP"],
    color: "from-cyan-400 to-primary"
  },
  {
    category: "Design & Tools",
    icon: Palette,
    items: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Blender"],
    color: "from-purple-400 to-secondary"
  },
  {
    category: "Web Technologies",
    icon: Globe,
    items: ["SEO", "Web Analytics", "PWA", "Web3", "GraphQL"],
    color: "from-pink-400 to-accent"
  }
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"></div>
      
      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Technical Arsenal</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.category}
                className={`glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-500 group cursor-pointer ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color} glow-primary`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{skill.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-muted/50 border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Hover effect */}
                <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
          {[
            { label: "Projects Completed", value: "50+" },
            { label: "App Downloads", value: "50K+" },
            { label: "Client Satisfaction", value: "4.9/5" },
            { label: "Years Experience", value: "3+" }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center p-6 glass-card rounded-xl ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
