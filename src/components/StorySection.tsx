import { ArrowRight, ShoppingBag, MapPin, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const StorySection = () => {
  return (
    <section id="platform" className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-zinc-900 to-black relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/3 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
                INNOVATIVE  DIGITAL  PLATFORM
              </h2>
              {/* Main Paragraph */}
              <p className="text-xl text-white/70 leading-relaxed">
                An inclusive, accessible, and holistic digital ecosystem platform-a one-stop solution to democratize menstrual and reproductive health.
              </p>
            </div>
    
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
              {/* Holistic Section */}
              <div className="group h-full bg-gradient-to-br from-zinc-900/80 to-black/80 border border-white/10 rounded-3xl p-10 backdrop-blur-md hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="flex items-center mb-8">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">HOLISTIC EDUCATION</h3>
                  </div>
                </div>
    
                <div className="space-y-6 mb-10">
                  <p className="text-xl text-white/80 leading-relaxed">
                    Curate library of educational resources blending modern medical science with ancient practices like Ayurveda, Unani, Chinese Medicine, Indigenous knowledge & wisdom
                  </p>
                </div>
              </div>
    
              {/* Accessibility Section */}
              <div className="group h-full bg-gradient-to-br from-zinc-900/80 to-black/80 border border-white/10 rounded-3xl p-10 backdrop-blur-md hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="flex items-center mb-8">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">ACCESSIBILITY</h3>
                  </div>
                </div>
    
                <div className="space-y-6 mb-10">
                  <p className="text-xl text-white/80 leading-relaxed">
                    Ensure multilingual support, intuitive navigation, and universal design for individuals with disabilities and those in marginalized communities.
                  </p>
                </div>
              </div>
    
              {/* Super Naari Community Section */}
              <div className="group h-full bg-gradient-to-br from-zinc-900/80 to-black/80 border border-white/10 rounded-3xl p-10 backdrop-blur-md hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="flex items-center mb-8">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">SUPER NAARI COMMUNITY</h3>
                  </div>
                </div>
    
                <div className="space-y-6 mb-10">
                  <p className="text-xl text-white/80 leading-relaxed">
                    Connect with a global multicultural network of &apos;Women, Peace &amp; Security&apos; thought-leaders and change-makers.
                  </p>
                </div>
          </div>
        </div>

        {/* Yellow Highlight */}
        <div className="mt-12 mx-auto max-w-3xl text-center">
          {/* up line */}
          <p className="text-xl md:text-3xl font-bold leading-tight text-white">
            Addressing the pain-points of menstruation:
          </p>
          {/* down line */}
          <p className="mt-1 text-xl md:text-3xl font-semibold leading-tight text-yellow-400">
            Cost, Pain, Stigma, Accessibility
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;