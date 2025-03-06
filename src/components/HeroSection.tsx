import React from "react";
import { Button } from "./ui/button";
import { useLanguage } from "@/context/LanguageContext";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const HeroSection = ({
  title,
  subtitle,
  backgroundImage = "https://images.unsplash.com/photo-1546074177-31bfa593f731?w=1200&q=80",
  buttonText,
  onButtonClick = () => console.log("Shop now clicked"),
}: HeroSectionProps) => {
  const { t } = useLanguage();

  // Use translated text or fallback to props
  const heroTitle = title || t("hero_title");
  const heroSubtitle = subtitle || t("hero_subtitle");
  const heroButtonText = buttonText || t("shop_now");

  return (
    <div className="relative w-full h-[500px] md:h-[600px] bg-green-50 dark:bg-green-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={backgroundImage}
          alt="Natural herbs background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-transparent dark:from-green-950/80" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {heroTitle}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-green-50 mb-8 leading-relaxed">
            {heroSubtitle}
          </p>
          <Button
            onClick={onButtonClick}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 sm:px-8 py-2 sm:py-3 rounded-md transition-colors duration-300"
          >
            {heroButtonText}
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/4 sm:w-1/3 h-16 sm:h-24 bg-white/10 backdrop-blur-sm rounded-tl-3xl" />
      <div className="absolute top-12 right-12 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-green-500/20 backdrop-blur-sm hidden sm:block" />
    </div>
  );
};

export default HeroSection;
