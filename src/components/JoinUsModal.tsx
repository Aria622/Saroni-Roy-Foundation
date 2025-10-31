import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface JoinUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const JoinUsModal: React.FC<JoinUsModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    areaOfInterest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.areaOfInterest) {
      toast({
        title: "Please fill in required fields",
        description: "Please make sure to fill in your name, email, and area of interest.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Create mailto link with form data
      const subject = `Join Us Request - ${formData.fullName}`;
      const body = `
Name: ${formData.fullName}
Email: ${formData.email}
Area of Interest: ${formData.areaOfInterest}
Message: ${formData.message || 'No additional message provided'}

---
This message was sent from the Saroni Roy Foundation website.
      `.trim();

      const mailtoLink = `mailto:info@saroniroy.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      toast({
        title: "Email client opened!",
        description: "Please send the email to complete your application.",
      });

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        areaOfInterest: '',
        message: ''
      });

      // Close modal after a short delay
      setTimeout(() => {
        onClose();
      }, 2000);

    } catch (error) {
      console.error('Error opening email client:', error);
      toast({
        title: "Error opening email client",
        description: "Please try again or contact us directly at info@saroniroy.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Join Us</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <Input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div>
            <label htmlFor="areaOfInterest" className="block text-sm font-medium text-gray-700 mb-1">
              Area of Interest *
            </label>
            <select
              id="areaOfInterest"
              name="areaOfInterest"
              value={formData.areaOfInterest}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c9a300] focus:border-transparent"
              required
            >
              <option value="">Select an area of interest</option>
              <option value="Volunteering">Volunteering</option>
              <option value="Partnership">Partnership</option>
              <option value="Sponsorship">Sponsorship</option>
              <option value="Media & Communications">Media & Communications</option>
              <option value="Event Planning">Event Planning</option>
              <option value="Research & Development">Research & Development</option>
              <option value="Fundraising">Fundraising</option>
              <option value="Education & Training">Education & Training</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message (Optional)
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full"
              placeholder="Tell us more about how you'd like to get involved..."
              rows={4}
            />
          </div>

          <div className="flex space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-[#c9a300] text-black hover:bg-[#b89400]"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Opening Email..." : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinUsModal;
