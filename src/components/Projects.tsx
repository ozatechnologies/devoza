import { ExternalLink, Github } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Ash Coal Unified Market",
    description: "Digital marketplace for coal ash trading connecting suppliers, buyers, and logistics providers with real-time analytics and automated order management.",
    tags: ["React", "TypeScript", "Analytics", "E-commerce"],
    link: "https://ozatechnologies.github.io/ash-demo/",
    gradient: "from-primary via-blue-400 to-cyan-400"
  },
  {
    title: "CogiSci Research Platform",
    description: "Web platform connecting scientists and early adopters for collaborative research with project management tools and resource-sharing features.",
    tags: ["React Native", "Firebase", "Chat", "Collaboration"],
    link: "https://galaxystore.samsung.com/detail/cogisci.papers",
    gradient: "from-secondary via-purple-400 to-pink-400"
  },
  {
    title: "KSocial",
    description: "Social networking mobile application with 50K+ downloads and 4.9/5 rating. Features real-time messaging and content sharing.",
    tags: ["Mobile", "Social", "Real-time", "UX/UI"],
    gradient: "from-accent via-pink-400 to-rose-400"
  },
  {
    title: "AIaaS Platform",
    description: "AI-as-a-Service platform providing scalable AI solutions for businesses with focus on usability and integration.",
    tags: ["AI/ML", "SaaS", "APIs", "Cloud"],
    gradient: "from-cyan-400 via-primary to-blue-500"
  },
  {
    title: "Smart Retail Analytics",
    description: "AI-powered dashboard for retail analytics providing insights on customer behavior and inventory optimization.",
    tags: ["AI", "Analytics", "Dashboard", "ML"],
    gradient: "from-purple-400 via-secondary to-indigo-400"
  },
  {
    title: "Healthcare AI System",
    description: "Healthcare-focused AI system for patient data analysis and predictive diagnostics with HIPAA compliance.",
    tags: ["Healthcare", "AI", "Security", "Analytics"],
    gradient: "from-pink-400 via-accent to-red-400"
  }
];

const Projects = () => {
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
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      
      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Innovative solutions that blend creativity with cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group glass-card p-6 rounded-2xl hover:scale-[1.02] transition-all duration-500 relative overflow-hidden ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center glow-primary`}>
                    <span className="text-2xl">💎</span>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-primary/20 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-muted/50 border border-primary/20 group-hover:border-primary/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom gradient line */}
                <div className={`mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r ${project.gradient} rounded-full transition-all duration-700`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-primary/50 hover:bg-primary/10 hover:border-primary group"
          >
            <Github className="mr-2 group-hover:rotate-12 transition-transform" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
