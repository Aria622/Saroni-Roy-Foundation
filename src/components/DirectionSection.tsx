import { ArrowRight, ShoppingBag, MapPin, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DirectionSection = () => {
  return (
    <section id="vision" className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-zinc-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/3 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
            Our Vision 
          </h2>
          {/* Main Paragraph */}
          <p className="text-xl text-white/70 leading-relaxed">
            To establish Super Naari as an inclusive, accessible digital ecosystem—a one-stop solution for menstrual and reproductive health.
          </p>
          {/* Yellow Highlight */}
          <blockquote className="mt-6 mx-auto max-w-3xl">
            <div className="rounded-2xl bg-[#8c8c8c]/30 p-1">
              <div className="rounded-xl border border-[#c9a300] bg-black/60 px-6 py-5 text-center">
                <p className="text-lg md:text-2xl text-white/70 leading-relaxed">
                  In the ‘Women, Peace & Security’ agenda, ‘period poverty’ is a global peace economics crisis.
                </p>
              </div>
            </div>
          </blockquote>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {/* Digital Section */}
          <div className="group h-full bg-gradient-to-br from-zinc-900/80 to-black/80 border border-white/10 rounded-3xl p-10 backdrop-blur-md hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mr-6">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">Digital Platform</h3>
              </div>
            </div>

            <div className="space-y-6 mb-10">
              <p className="text-2xl text-white/80 leading-relaxed">
                Integrating modern healthcare with ancient wisdom through accessible technology.
              </p>
            </div>
          </div>

          {/* Educational Section */}
          <div className="group h-full bg-gradient-to-br from-zinc-900/80 to-black/80 border border-white/10 rounded-3xl p-10 backdrop-blur-md hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mr-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">Educational Empowerment</h3>
              </div>
            </div>

            <div className="space-y-6 mb-10">
              <p className="text-2xl text-white/80 leading-relaxed">
                Breaking taboos through comprehensive menstrual health literacy.
              </p>
            </div>
          </div>

          {/* Sustainable Section */}
          <div className="group h-full bg-gradient-to-br from-zinc-900/80 to-black/80 border border-white/10 rounded-3xl p-10 backdrop-blur-md hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mr-6">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">Sustainable Solutions</h3>
              </div>
            </div>

            <div className="space-y-6 mb-10">
              <p className="text-2xl text-white/80 leading-relaxed">
                Promoting eco-friendly products and circular economy models.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectionSection;