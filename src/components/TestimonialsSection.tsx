
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight} from "lucide-react";
import { useState } from "react";
import JoinUsModal from "./JoinUsModal";

const TestimonialsSection = () => {
  const [isJoinUsModalOpen, setIsJoinUsModalOpen] = useState(false);

  return (
    <section id="involve" className="py-12 md:py-16 lg:py-20 bg-black border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Collaborate
          </h2>
          <p className="text-2xl text-white/80">
            Let us make a better world together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {involveItems.map((item, index) => (
            <Card
              key={index}
              className="bg-zinc-800/60 border-white/10 hover:border-white/20 transition-all rounded-2xl"
            >
              <CardContent className="p-8">
                {/* Image on top */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="mx-auto mb-6 w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-lg"
                  loading="lazy"
                  draggable={false}
                />

                {/* Title */}
                <h3 className="text-2xl font-bold text-white tracking-tight text-center">
                  {item.title}
                </h3>
                {/* Divider */}
                <div className="mt-2 h-px w-14 bg-white/40 mx-auto" />
                {/* Body */}
                <p className="mt-6 text-white/80 leading-relaxed">
                  {item.body}
                </p>
                </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12" >
          <Button 
            onClick={() => setIsJoinUsModalOpen(true)}
            className="bg-yellow-500 text-black hover:bg-yellow-500/90
            px-12 py-6 rounded-full text-xl font-semibold
            flex items-center gap-4 mx-auto shadow-lg transition">
            Join Us
            <ArrowRight className="w-6 h-6" />
          </Button>
        </div>

      </div>
      
      {/* Join Us Modal */}
      <JoinUsModal 
        isOpen={isJoinUsModalOpen} 
        onClose={() => setIsJoinUsModalOpen(false)} 
      />
    </section>
  );
};

const involveItems = [
  {
    title: "Volunteer",
    body:
      "Passionate about making an on-ground impact? Click here to join our team at the Saroni Roy Foundation and conduct menstrual hygiene workshops while spreading awareness!",
    img: "/lovable-uploads/people.png",
  },
  {
    title: "Sponsors",
    body:
      "Join our network of corporate, media, and NGO sponsors who are committed to advancing women's health and gender equality. Together, we can create meaningful partnerships that drive social change.",
    img: "/lovable-uploads/bag.png",
  },
  {
    title: "Partner",
    body:
      "We value the power of collaboration across all ideas and campaigns — welcoming both individuals and organizations alike.",
    img: "/lovable-uploads/hand.png",
  },
];

export default TestimonialsSection;
