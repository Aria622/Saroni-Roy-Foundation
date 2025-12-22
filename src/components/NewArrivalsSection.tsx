import { ArrowRight, Snowflake, Thermometer, Bath, Cylinder } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

const NewArrivalsSection = () => {
  const scrollerRef = React.useRef<HTMLDivElement | null>(null);

  const scrollByViewport = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = dir === "right" ? el.clientWidth : -el.clientWidth;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="news" className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-black to-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
            Featured Projects
          </h2>
        </div>

        {/* Sliding container */}
        <div className="relative mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {newArrivals.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
          </div>

          {/* Left Arrow */}
          {/* <Button
            aria-label="Previous"
            onClick={() => scrollByViewport("left")}
            className="hidden md:flex items-center justify-center
                       absolute left-0 top-1/2 -translate-y-1/2 z-20
                       h-12 w-12 rounded-full bg-white/10 hover:bg-white/20
                       border border-white/20 backdrop-blur text-white shadow transition"
            variant="ghost"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button> */}

          {/* Right Arrow */}
          {/* <Button
            aria-label="Next"
            onClick={() => scrollByViewport("right")}
            className="hidden md:flex items-center justify-center
                       absolute right-0 top-1/2 -translate-y-1/2 z-20
                       h-12 w-12 rounded-full bg-white/10 hover:bg-white/20
                       border border-white/20 backdrop-blur text-white shadow transition"
            variant="ghost"
          >
            <ChevronRight className="h-6 w-6" />
          </Button> */}
        </div>

        
        {/* <div className="text-center">
          <Link to="/shop">
            <Button className="bg-white text-black hover:bg-white/90 px-12 py-6 rounded-full text-xl font-semibold flex items-center gap-4 mx-auto">
              Explore All News
              <ArrowRight className="w-6 h-6" />
            </Button>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

const ProductCard = ({ product, index }: { product: any; index: number }) => {
  return (
    <div 
      className="group bg-gradient-to-br from-zinc-900/50 to-black/50 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md transform hover:-translate-y-4 transition-all duration-500 hover:border-white/20 hover:shadow-2xl"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
        <img 
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      
      <div className="p-8">     
        <p className="text-white/70 leading-relaxed mb-6">
          {product.description}
        </p>
        
        {/* <Link to="/shop">
          <Button className="bg-white/10 text-white border border-white/20 hover:bg-white hover:text-black w-full py-3 rounded-xl transition-all duration-300">
            Learn More
          </Button>
        </Link> */}
      </div>
    </div>
  );
};

const newArrivals = [
  {
    name: "K2 Contrast Hot/Cold Plunge",
    description: "Menstrual Hygiene Management Donation Drive for Women & Girls Emergency Centre (WAGEC) Sydney.",
    image: "/lovable-uploads/photo1.jpg",
    icon: <Thermometer className="w-5 h-5 text-white" />
  },
  {
    name: "The AirVault (2.0 Hyperbaric Chamber)",
    description: "Menstrual Hygiene Management Donation Drive for Women & Girls Emergency Centre (WAGEC) Sydney.",
    image: "/lovable-uploads/photo2.jpg",
    icon: <Cylinder className="w-5 h-5 text-white" />
  },
  {
    name: "HydroChill",
    description: "Menstrual Hygiene Management Donation Drive for Women & Girls Emergency Centre (WAGEC) Sydney.",
    image: "/lovable-uploads/photo3.jpg", 
    icon: <Bath className="w-5 h-5 text-white" />
  }
];

export default NewArrivalsSection;