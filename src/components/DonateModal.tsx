import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonateModal: React.FC<DonateModalProps> = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers and decimal points
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!amount || parseFloat(amount) <= 0) {
      toast({
        title: "Please enter a valid amount",
        description: "Please enter a donation amount greater than 0.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Build PayPal donation link
      const paypalEmail = 'roy.saroni@gmail.com';
      const paypalUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=${encodeURIComponent(paypalEmail)}&amount=${encodeURIComponent(amount)}&currency_code=AUD&item_name=Saroni%20Roy%20Foundation%20Donation`;
      
      // Open PayPal payment page in new window
      window.open(paypalUrl, '_blank', 'noopener,noreferrer');
      
      toast({
        title: "Redirecting to PayPal",
        description: "You will be redirected to PayPal to complete your payment.",
      });

      // Reset form and close modal
      setAmount('');
      setTimeout(() => {
        onClose();
      }, 1000);

    } catch (error) {
      console.error('Error opening PayPal:', error);
      toast({
        title: "Failed to open PayPal",
        description: "Please try again later or visit PayPal directly.",
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
          <h2 className="text-2xl font-bold text-gray-900">Donate</h2>
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
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
              Donation Amount (AUD) *
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
              <Input
                id="amount"
                name="amount"
                type="text"
                value={amount}
                onChange={handleAmountChange}
                className="w-full pl-8"
                placeholder="0.00"
                required
              />
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Your donation will help us continue supporting women's health and equality initiatives.
            </p>
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
              className="flex-1 bg-yellow-400 text-black hover:bg-yellow-500"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Redirecting..." : "Confirm Donation"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DonateModal;

