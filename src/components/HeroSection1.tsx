import { useState, useEffect } from "react";
import { ArrowRight, Play, MapPin, Users, TrendingUp, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import DonateModal from "./DonateModal";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [statsCounter, setStatsCounter] = useState(0);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const navigate = useNavigate();

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
    <>
      <section id="home" className="flex flex-col items-center text-center px-6 pt-12 pb-4 min-h-screen">
        <div className="p-2 rounded-xl">
          
          <img src="/lovable-uploads/Black-Gold1.png" alt="Super Naari"
            className="mx-auto w-auto
               h-[220px] sm:h-[260px] md:h-[300px]
               lg:h-[340px] xl:h-[380px] 2xl:h-[420px] scale-110
               object-contain" />
        </div>

        <h1 className="sr-only">
          Super Naari
        </h1>

        <p className="sr-only">
          Super Naari (Supernaari) is a global initiative by Saroni Roy Foundation focused on menstrual health awareness, women's wellness, and period equity.
        </p>

        {/* <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold
                 text-yellow-400 leading-tight tracking-tight
                 drop-shadow-[0_2px_6px_rgba(0,0,0,.45)]
                 pb-1 md:pb-2 text-center">
          A Period Equity Initiative
        </h3> */}

        <p className="w-full text-center max-w-5xl mt-1
                text-lg md:text-xl lg:text-2xl
                text-gray-100/90
                leading-snug">
          A global multicultural community-centered digital ecosystem, bridging the gender-health gap through menstrual & reproductive wellbeing
        </p>
      </section>
      
      {/* Donate Modal */}
      <DonateModal 
        isOpen={isDonateModalOpen} 
        onClose={() => setIsDonateModalOpen(false)} 
      />
    </>
  );
};

export default HeroSection;