
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { FaImdb } from "react-icons/fa";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] =
    useState<'home' | 'vision' | 'platform' | 'news' | 'involve'>('home');

  const scrollToSection = (sectionId: string) => {
    try {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    } catch (error) {
      console.error(`Error scrolling to ${sectionId}:`, error);
      // Fallback for cross-origin issues
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({top: yOffset, behavior: 'smooth'});
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between h-30 px-8">
        <div className="flex items-center space-x-3">
          {/* Updated logo - clickable to go home */}
          <Link to="/">
            <img 
              src="/lovable-uploads/SRFlogo.png" 
              alt="SRF Logo" 
              className="h-[90px] md:h-[90px] w-auto object-contain hover:opacity-80 transition-opacity cursor-pointer"
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
              setActive('home');
            }}
            className={`font-semibold text-lg lg:text-xl transition-colors relative
              ${active === 'home'
                ? 'text-[#c9a300] after:content-[""] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-10 after:bg-[#c9a300] after:rounded'
                : 'text-white/80 hover:text-white'}`}
          >
            Home
          </a>

          <a
            href="#vision"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('vision');
              setActive('vision');
            }}
            className={`font-semibold text-lg lg:text-xl transition-colors relative
              ${active === 'vision'
                ? 'text-[#c9a300] after:content-[""] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-10 after:bg-[#c9a300] after:rounded'
                : 'text-white/80 hover:text-white'}`}
          >
            Vision
          </a>

          <a
            href="#platform"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('platform');
              setActive('platform');
            }}
            className={`font-semibold text-lg lg:text-xl transition-colors relative
              ${active === 'platform'
                ? 'text-[#c9a300] after:content-[""] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-10 after:bg-[#c9a300] after:rounded'
                : 'text-white/80 hover:text-white'}`}
          >
            Platform
          </a>

          <a
            href="#news"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('news');
              setActive('news');
            }}
            className={`font-semibold text-lg lg:text-xl transition-colors relative
              ${active === 'news'
                ? 'text-[#c9a300] after:content-[""] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-10 after:bg-[#c9a300] after:rounded'
                : 'text-white/80 hover:text-white'}`}
          >
            Projects
          </a>
          
          <a
            href="#involve"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('involve');
              setActive('involve');
            }}
            className={`font-semibold text-lg lg:text-xl transition-colors relative
              ${active === 'involve'
                ? 'text-[#c9a300] after:content-[""] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-10 after:bg-[#c9a300] after:rounded'
                : 'text-white/80 hover:text-white'}`}
          >
            Get Involved
          </a>
        </nav>

        {/* Desktop Subscribe Button */}
        <div className="hidden md:block">
          <Button 
            type="button"
            onClick={() => window.open("https://www.linkedin.com/company/saroni-roy-foundation/", "_blank")}
            className="bg-[#c9a300] text-black hover:bg-white/90 text-lg lg:text-xl rounded-full px-6"
          >
            Subscribe
          </Button>
        </div>

        {/* Social Media */}
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/saroniroyfoundationindiaausgoodwillambassador/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="Facebook">
            <Facebook size={28} />
          </a>          
          <a href="https://www.instagram.com/saroniroyfoundation/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="Instagram">   
            <Instagram size={28} />     
          </a>     
          <a href="https://x.com/roysaroni" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="Twitter">
                        <Twitter size={28} />  
          </a>    
          <a href="https://www.linkedin.com/company/saroni-roy-foundation/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="LinkedIn">
                        <Linkedin size={28} />
          </a>
          {/* <a 
            href="https://imdb.me/SaroniRoy" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white/70 hover:text-white transition-colors" 
            aria-label="IMDb"
          >
            <FaImdb size={28} />
          </a> */}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg w-full shadow-lg py-6 border-t border-white/10 animate-fade-in">
          <div className="container mx-auto flex flex-col space-y-2 px-4">
            <Link 
              to="/"
              className="font-medium text-white/90 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg px-4 py-3 transition-colors text-lg block"
            >
              Home
            </Link>
            <Link 
              to="/licensee"
              className="font-medium text-white/90 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg px-4 py-3 transition-colors text-lg block"
            >
              Licensee
            </Link>
            <Link 
              to="/shop"
              className="font-medium text-white/90 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg px-4 py-3 transition-colors text-lg block"
            >
              Shop
            </Link>
            {/* Mobile Locations */}
            {/* <div className="bg-white/5 rounded-lg px-4 py-3">
              <p className="font-medium text-white/90 text-lg mb-2">Locations</p>
              <div className="grid grid-cols-1 gap-1 max-h-48 overflow-y-auto">
                {webLocations.map((location, idx) => (
                  <a
                    key={idx}
                    href={location.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-2 py-1 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded transition-colors"
                  >
                    {location.city}, {location.state}
                  </a>
                ))}
                <div className="block px-2 py-1 text-sm text-white/60 rounded">
                  Louisiana - Coming 2026
                </div>
                <div className="block px-2 py-1 text-sm text-white/60 rounded">
                  New York - Coming 2026
                </div>
                <div className="block px-2 py-1 text-sm text-white/60 rounded">
                  South Carolina - Coming 2026
                </div>
                <div className="block px-2 py-1 text-sm text-white/60 rounded">
                  Chicago, IL - Coming 2026
                </div>
              </div>
            </div> */}
            <Button 
              className="bg-white text-black hover:bg-white/90 rounded-full w-full mt-2 py-4 text-lg"
              onClick={() => scrollToSection('contact')}
            >
              Contact Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
