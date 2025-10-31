import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { FaImdb } from "react-icons/fa";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { newsletterService } from "@/lib/supabase";

const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email) {
      toast({
        title: "Please fill in all fields",
        description: "Please make sure to fill in your name and email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Check if email already exists
      const emailExists = await newsletterService.checkEmailExists(formData.email);
      
      if (emailExists) {
        toast({
          title: "Email already exists",
          description: "This email address has already subscribed to our newsletter.",
          variant: "destructive",
        });
        return;
      }

      // Add new subscriber to Supabase
      await newsletterService.addSubscriber({
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
      });
      
      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing! We'll be in touch soon.",
      });

      // Clear form
      setFormData({
        firstName: '',
        lastName: '',
        email: ''
      });

    } catch (error) {
      console.error('Storage error:', error);
      toast({
        title: "Subscription failed",
        description: error instanceof Error ? error.message : "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-20 lg:gap-x-28">
          <div>
            <h2 className="text-xl font-bold mb-6 text-white tracking-tight">Super Naari</h2>
            <p className="text-white/70 mb-6">
              Connect With us on
            </p>
            <div className="flex space-x-4">
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/saroni.roy" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="Facebook">
                  <Facebook size={20} />
                </a>          
                <a href="https://www.instagram.com/saroroy/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="Instagram">   
                  <Instagram size={20} />     
                </a>     
                <a href="https://x.com/roysaroni" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="Twitter">
                  <Twitter size={20} />  
                </a>    
                <a href="https://www.linkedin.com/in/saroniroy/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://imdb.me/SaroniRoy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/70 hover:text-white transition-colors" 
                  aria-label="IMDb"
                >
                  <FaImdb size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* <div>
            <h3 className="text-xl font-bold mb-6 text-white tracking-tight">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-opacity">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-opacity">License Opportunities</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-opacity">Products</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-opacity">Locations</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-opacity">Contact</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-opacity">Press</a></li>
            </ul>
          </div> */}
          
          {/* <div>
            <h3 className="text-xl font-bold mb-6 text-white tracking-tight">Legal</h3>
            <ul className="space-y-3">
              <li><a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-opacity">Privacy Policy</a></li>
              <li><a href="/terms-of-service" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-opacity">Terms of Service</a></li>
              <li><a href="/license-disclosure" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-opacity">License Disclosure</a></li>
              <li><a href="/accessibility" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-opacity">Accessibility</a></li>
              <li><a href="/cookie-policy" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-opacity">Cookie Policy</a></li>
            </ul>
          </div> */}
          
          <div className="w-full max-w-[420px] mx-auto">
            {/* <h3 className="text-xl font-bold mb-6 text-white tracking-tight">Subscribe for our newsletter.</h3> */}
            
            {/* LinkedIn Newsletter Link */}
            {/* <div className="mb-6">
              <Button 
                type="button"
                onClick={() => window.open("https://www.linkedin.com/company/saroni-roy-foundation/", "_blank")}
                className="bg-[#c9a300] text-black hover:bg-white/90 rounded-full w-full mb-4"
              >
                Subscribe to LinkedIn Newsletter
              </Button>
              <p className="text-white/60 text-sm text-center">Or fill out the form below for direct updates</p>
            </div> */}
            
            {/* <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
              <Input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="bg-white/5 border-white/10 placeholder:text-white/50 text-white"
                required
              />
              <Input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="bg-white/5 border-white/10 placeholder:text-white/50 text-white"
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-white/5 border-white/10 placeholder:text-white/50 text-white"
                required
              /> */}
              {/* <Button 
                type="submit"
                variant="secondary" 
                className="bg-white text-black hover:bg-white/90 rounded-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button> */}
               <Button 
                type="button"
                onClick={() => window.open("https://www.linkedin.com/company/saroni-roy-foundation/", "_blank")}
                className="bg-[#c9a300] text-black hover:bg-white/90 rounded-full w-full mb-4"
              >
                Subscribe
              </Button>
            {/* </form> */}
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center space-y-4">
          <p className="text-white/70 max-w-5xl mx-auto leading-relaxed">
            We acknowledge the Traditional Owners of Country throughout Australia and recognise their continuing connection to lands, waters and communities. We pay our respects to Aboriginal and Torres Strait Islander cultures and Elders past and present.
          </p>
          <p className="text-white/70">
            &copy; {new Date().getFullYear()} Saroni Roy Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
