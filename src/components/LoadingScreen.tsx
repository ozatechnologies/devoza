import { useEffect, useState } from "react";
import { Terminal, Code2, Zap } from "lucide-react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const texts = [
    "Initializing quantum processors...",
    "Loading neural networks...",
    "Compiling experience data...",
    "Establishing secure connection...",
    "Ready to launch!"
  ];

  useEffect(() => {
    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onLoadingComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Text cycling
    let textIndex = 0;
    const textInterval = setInterval(() => {
      setCurrentText(texts[textIndex]);
      textIndex = (textIndex + 1) % texts.length;
    }, 600);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] animate-pulse-slow"></div>
      
      {/* Rotating hexagons */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 border-2 border-primary/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              animation: `float ${3 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
      
      {/* Main loading content */}
      <div className="relative z-10 text-center space-y-8 px-4">
        {/* Logo/Icon */}
        <div className="flex justify-center mb-8 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-primary/20 animate-ping"></div>
          </div>
          <div className="relative glass-card p-8 rounded-3xl glow-primary">
            <Terminal className="w-16 h-16 text-primary animate-pulse" />
          </div>
        </div>

        {/* Animated title */}
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="text-gradient inline-block animate-shimmer bg-[linear-gradient(110deg,#00d4ff,45%,#a855f7,55%,#00d4ff)] bg-[length:200%_100%] bg-clip-text text-transparent">
              Dev.Oza
            </span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-muted-foreground font-mono text-sm">
            <Code2 className="w-4 h-4 animate-pulse" />
            <span className="min-h-[20px]">{currentText}</span>
            <Zap className="w-4 h-4 animate-pulse" />
          </div>
        </div>

        {/* Progress bar */}
        <div className="max-w-md mx-auto space-y-3">
          <div className="relative h-2 bg-muted/30 rounded-full overflow-hidden backdrop-blur">
            <div
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-300 relative"
              style={{ width: `${progress}%` }}
            >
              {/* Animated shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>
          <div className="text-sm font-mono text-muted-foreground">
            {progress}% Complete
          </div>
        </div>

        {/* Particle dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-primary"
              style={{
                animation: `pulse 1.5s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 border-l-2 border-t-2 border-primary/30 rounded-tl-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 border-r-2 border-b-2 border-secondary/30 rounded-br-3xl"></div>
    </div>
  );
};

export default LoadingScreen;
