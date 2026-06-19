
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection1";
import DonateModal from "@/components/DonateModal";
import StorySection from "@/components/StorySection";
import NewArrivalsSection from "@/components/NewArrivalsSection";
import DirectionSection from "@/components/DirectionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FullScreenCarousel from "@/components/FullScreenCarousel";

const Index = () => {
  const [showCarouselControls, setShowCarouselControls] = useState(true);
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      // Debounce the scroll event handling
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const heroSection = document.getElementById('home');
        if (heroSection) {
          const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          
          // show controls only when in hero section
          setShowCarouselControls(scrollTop < (300));
        }
      }, 10);
    };

    // setup scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // initial check
    handleScroll();

    // cleanup listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-black" >
      {/* full screen carousel background */}
      <div className="absolute inset-0 z-0">
        <FullScreenCarousel />
      </div>
      
      {/* carousel control buttons - independent layer */}
      <div className={`fixed inset-0 z-50 pointer-events-none transition-opacity duration-300 ${
        showCarouselControls ? 'opacity-100' : 'opacity-0'
      }`}>
        {/* left arrow */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-auto">
          <button
            onClick={() => {
              const carousel = document.querySelector('[data-carousel="true"]');
              if (carousel) {
                const prevBtn = carousel.querySelector('[data-action="prev"]');
                if (prevBtn) (prevBtn as HTMLButtonElement).click();
              }
            }}
            className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-200"
            aria-label="previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        {/* right arrow */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-auto">
          <button
            onClick={() => {
              const carousel = document.querySelector('[data-carousel="true"]');
              if (carousel) {
                const nextBtn = carousel.querySelector('[data-action="next"]');
                if (nextBtn) (nextBtn as HTMLButtonElement).click();
              }
            }}
            className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-200"
            aria-label="next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* bottom indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 pointer-events-auto">
          <button
            onClick={() => {
              const carousel = document.querySelector('[data-carousel="true"]');
              if (carousel) {
                const indicators = carousel.querySelectorAll('[data-slide]');
                if (indicators[0]) (indicators[0] as HTMLButtonElement).click();
              }
            }}
            className="w-3 h-3 rounded-full bg-white bg-opacity-50 hover:bg-opacity-70 transition-all duration-200"
            aria-label="jump to the 1st image"
          />
          <button
            onClick={() => {
              const carousel = document.querySelector('[data-carousel="true"]');
              if (carousel) {
                const indicators = carousel.querySelectorAll('[data-slide]');
                if (indicators[1]) (indicators[1] as HTMLButtonElement).click();
              }
            }}
            className="w-3 h-3 rounded-full bg-white bg-opacity-50 hover:bg-opacity-70 transition-all duration-200"
            aria-label="jump to the 2nd image"
          />
        </div>
      </div>
      
      <div className="relative z-10 min-h-screen flex flex-col justify-between">
        <Navbar />
        <main >
          <HeroSection />
          {/* Key impact stat – Tata Trusts–inspired focus on scale of the issue */}
          <section className="relative z-10 py-6 md:py-8 bg-black/80 border-b border-white/5">
            <div className="container mx-auto px-4 text-center">
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                <span className="text-yellow-400 font-semibold">500 million women</span> globally lack adequate access to menstrual products and facilities. Super Naari is scaling community-led solutions for lasting impact.
              </p>
            </div>
          </section>
          <div className="pt-6 md:pt-8 lg:pt-10 w-full px-4 pb-8 md:pb-10 lg:pb-16 flex flex-col items-center gap-4 md:gap-5 lg:gap-6 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-between">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold w-full sm:w-auto rounded-md lg:rounded-lg xl:rounded-xl shadow-md px-6 py-6 text-base md:px-6 md:py-6 md:text-[17px] lg:px-8 lg:py-8 lg:text-xl xl:px-10 xl:py-9 xl:text-2xl" onClick={() => scrollToSection('vision')}>
              Explore Platform
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button onClick={() => navigate('/impact-stories')} className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold w-full sm:w-auto rounded-md lg:rounded-lg xl:rounded-xl shadow-md px-6 py-6 text-base md:px-6 md:py-6 md:text-[17px] lg:px-8 lg:py-8 lg:text-xl xl:px-10 xl:py-9 xl:text-2xl">
              Impact Stories
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button onClick={() => setIsDonateModalOpen(true)} className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold w-full sm:w-auto rounded-md lg:rounded-lg xl:rounded-xl shadow-md px-6 py-6 text-base md:px-6 md:py-6 md:text-[17px] lg:px-8 lg:py-8 lg:text-xl xl:px-10 xl:py-9 xl:text-2xl">
              Donate
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          <DirectionSection />
          <StorySection />
          <AboutSection />
          <TestimonialsSection />   {/* Collaborate */}
          <NewArrivalsSection />   {/* Featured Projects */}
          <ContactSection />
        </main>
        <Footer />
        <DonateModal 
          isOpen={isDonateModalOpen} 
          onClose={() => setIsDonateModalOpen(false)} 
        />
      </div>
    </div>
  );
};

export default Index;
