import { useState, useEffect } from "react";
import { ArrowRight, Play, MapPin, Users, TrendingUp, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [statsCounter, setStatsCounter] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setStatsCounter(prev => (prev < 100 ? prev + 1 : 100));
    }, 50);
    setTimeout(() => clearInterval(interval), 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="flex flex-col items-center text-center text-center px-6 pt-12 pb-4 min-h-screen">
        <div className="p-2 rounded-xl">
        <img src="/lovable-uploads/midlogo.png" alt="Super Naari"
          className="mx-auto w-auto
             h-[120px] sm:h-[150px] md:h-[170px]
             lg:h-[120px] xl:h-[130px] 2xl:h-[140px]
             object-contain" />
        </div>

      {/* <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold
               text-yellow-400 leading-tight tracking-tight
               drop-shadow-[0_2px_6px_rgba(0,0,0,.45)]
               pb-1 md:pb-2 text-center">
        A Period Equity Initiative
      </h3> */}

      <p className="text-center max-w-xl md:max-w-2xl mt-1
              text-lg md:text-xl lg:text-2xl
              text-gray-100/90
              leading-snug">
        “Building a digital ecosystem for menstrual health, bridging ancient
        wisdom with modern healthcare”
      </p>
        
        {/* Buttons */}
        <div className="mt-auto w-full px-4
                pb-8 md:pb-10 lg:pb-16
                flex flex-wrap gap-4 md:gap-5 lg:gap-6 justify-center lg:justify-between items-center">
          <div className="flex flex-wrap gap-4 md:gap-5 lg:gap-6 justify-center">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold
            rounded-md lg:rounded-lg xl:rounded-xl shadow-md
            px-6 py-6 text-base
            md:px-6 md:py-6 md:text-[17px]
            lg:px-8 lg:py-8 lg:text-xl
            xl:px-10 xl:py-9 xl:text-2xl" onClick={() => scrollToSection('vision')}>
              Explore Platform
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button onClick={() => scrollToSection('intro')} className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold
            rounded-md lg:rounded-lg xl:rounded-xl shadow-md
            px-6 py-6 text-base
            md:px-6 md:py-6 md:text-[17px]
            lg:px-8 lg:py-8 lg:text-xl
            xl:px-10 xl:py-9 xl:text-2xl">
              Watch Introduction
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          <Button onClick={() => scrollToSection('/')} className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold
            rounded-md lg:rounded-lg xl:rounded-xl shadow-md
            px-6 py-6 text-base
            md:px-6 md:py-6 md:text-[17px]
            lg:px-8 lg:py-8 lg:text-xl
            xl:px-10 xl:py-9 xl:text-2xl">
            Donate
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>
  );
};

export default HeroSection;