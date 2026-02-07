
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
// import Shop from "./pages/Shop";
// import Licensee from "./pages/Licensee";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import LicenseDisclosure from "./pages/LicenseDisclosure";
import Accessibility from "./pages/Accessibility";
import CookiePolicy from "./pages/CookiePolicy";
import Redirect from "./pages/Redirect";
import { VideoPage } from "./pages/VideoPage";
import ImpactStories from "./pages/ImpactStories";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Index />} />
          {/* <Route path="/shop" element={<Shop />} /> */}
          {/* <Route path="/licensee" element={<Licensee />} /> */}
          <Route path="/redirect" element={<Redirect />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/license-disclosure" element={<LicenseDisclosure />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/impact-stories" element={<ImpactStories />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
