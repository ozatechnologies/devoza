import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    company: "Syst",
    role: "AI & Web Development Executive - II",
    period: "Jan 2023 - Jan 2025",
    location: "Rajkot",
    description: "Built and deployed scalable web applications and mobile apps with focus on performance and usability. Developed front-end and back-end solutions with interactive features, APIs, and databases.",
    achievements: [
      "Deployed multiple client applications with high performance metrics",
      "Implemented interactive features and RESTful APIs",
      "Maintained and optimized existing platforms"
    ]
  },
  {
    company: "Aqizo International",
    role: "Digital Product, Marketing & Web Development",
    period: "Jan 2024 - Present",
    location: "Morbi, Gujarat",
    description: "Led digital advertising campaigns and web development initiatives, creating high-impact graphics and responsive applications.",
    achievements: [
      "Increased client reach through targeted campaigns",
      "Designed promotional assets for branding initiatives",
      "Implemented SEO strategies and analytics tracking"
    ]
  },
  {
    company: "The Knowledge Society (TKS)",
    role: "Lead Developer",
    period: "Jan 2022 - Jan 2024",
    location: "Morbi, Gujarat",
    description: "Supported the launch of CogiSci, a research collaboration platform connecting scientists and users.",
    achievements: [
      "Led product positioning and market outreach",
      "Developed core platform features",
      "Facilitated early adoption strategies"
    ]
  },
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    period: "2021 - Present",
    location: "Remote",
    description: "Developed and launched mobile applications with 50K+ downloads. Built SaaS and AI-based solutions focusing on scalability.",
    achievements: [
      "Achieved 4.9/5 average rating across apps",
      "Delivered branding campaigns for startups",
      "Built AI-powered retail and healthcare systems"
    ]
  }
];

const Experience = () => {
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
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20"></div>
      
      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Professional Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building innovative solutions across multiple domains
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-accent hidden md:block"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`flex flex-col md:flex-row gap-8 items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Content */}
                <div className="flex-1 glass-card p-6 rounded-2xl hover:scale-[1.02] transition-all duration-500 group">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1 group-hover:text-gradient transition-all">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-semibold">{exp.company}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-secondary glow-primary">
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">▹</span>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom gradient */}
                  <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-700"></div>
                </div>

                {/* Timeline dot (hidden on mobile) */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary glow-primary"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
