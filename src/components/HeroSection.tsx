import React from "react";
import { Button } from "./ui/button";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const HeroSection = ({
  title = "Natural Remedies for Heart & Kidney Health",
  subtitle = "Discover our carefully selected herbal remedies backed by traditional wisdom and modern research to support your cardiovascular and renal health naturally.",
  backgroundImage = "https://images.unsplash.com/photo-1546074177-31bfa593f731?w=1200&q=80",
  buttonText = "Shop Now",
  onButtonClick = () => console.log("Shop now clicked"),
}: HeroSectionProps) => {
  return (
    <div className="relative w-full h-[500px] bg-green-50">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={backgroundImage}
          alt="Natural herbs background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-green-50 mb-8 leading-relaxed">
            {subtitle}
          </p>
          <Button
            onClick={onButtonClick}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3 rounded-md transition-colors duration-300"
          >
            {buttonText}
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-24 bg-white/10 backdrop-blur-sm rounded-tl-3xl" />
      <div className="absolute top-12 right-12 w-24 h-24 rounded-full bg-green-500/20 backdrop-blur-sm hidden md:block" />
    </div>
  );
};

export default HeroSection;
