import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import BackgroundEffects from "@/components/BackgroundEffects";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      <div className={`min-h-screen bg-background transition-opacity duration-1000 ${
        showContent ? 'opacity-100' : 'opacity-0'
      }`}>
        <BackgroundEffects />
        <Navbar />
        <main className="relative z-10">
          <div id="home">
            <Hero />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
