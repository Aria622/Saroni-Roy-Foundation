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

            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
              Super Naari is the flagship &apos;Women, Peace &amp; Security&apos; (WPS) project under the Cultural Diversity Collective by the Saroni Roy Foundation (SRf). Rooted in the Sanskrit word &apos;Naari&apos;, meaning woman, the initiative addresses one of the most urgent yet overlooked global peace-economics crises of our time: period poverty.
            </p>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
              SRf champions the belief that women are central to building non-violent, inclusive, and peaceful societies, which in turn catalyse sustainable and prosperous economies. Ensuring women&apos;s and gender-diverse people&apos;s access to menstrual and reproductive health is not just a health necessity — it is a fundamental human right, essential for gender equity, peacebuilding, and community resilience.
            </p>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
              The Australian Government&apos;s commitment to supporting the human rights of women and girls — particularly in fragile or conflict-affected contexts — underscores the critical role that gender equity plays in economic development, post-crisis stability, and durable peace. Through SRf&apos;s extensive alliance partnerships across Australia and globally, Super Naari aims to scale innovative, community-led solutions that deliver measurable, lasting impact.
            </p>
            <blockquote className="border-l-4 border-yellow-500 pl-6 py-2 my-6 italic text-white/90 text-base md:text-lg">
              &quot;When it comes to Women, Peace &amp; Security, we often talk about sexual crimes and violence against women — but lack of access to menstrual and reproductive health education and products is also a form of gender-based violence. Poverty is not just food insecurity; it is also menstrual poverty. We can keep talking about gender equality and empowerment, but if millions of menstruators lack access to menstrual and reproductive health, we still have a long way to go.&quot;
              <footer className="mt-2 not-italic text-white/70 text-sm">— Saroni Roy, Founder &amp; CEO, SRf</footer>
            </blockquote>
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
