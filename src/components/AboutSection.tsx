import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight} from "lucide-react";
import { useState } from "react";
import JoinUsModal from "./JoinUsModal";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-12 md:py-16 lg:py-20 bg-black border-t border-white/5"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              About Super Naari
            </h2>

            <div className="h-1 w-24 bg-yellow-500 mb-8" />

            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              Super Naari is a transformative period-equity initiative committed to closing the
              gender-health gap by championing menstrual and reproductive wellbeing. Through
              education, equitable access, and community-centred solutions, Super Naari empowers
              girls &amp; women, gender-diverse menstruators, and those who need it most—creating
              opportunities, restoring dignity, and advancing gender equality. It builds an
              inclusive ecosystem that empowers individuals, sustains communities, and fosters a
              healthier, fairer world for all.
            </p>
          </div>

          {/* Right: Image */}
          <div className="w-full">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img
                src="/lovable-uploads/naari.jpg"
                alt="Super Naari"
                className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-[1.03]"
                loading="lazy"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
