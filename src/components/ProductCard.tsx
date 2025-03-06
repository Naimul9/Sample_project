import React from "react";
import { Star, ShoppingCart } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/LanguageContext";

interface ProductCardProps {
  id?: string;
  name?: string;
  image?: string;
  description?: string;
  price?: number;
  rating?: number;
  category?: string;
  inStock?: boolean;
  onAddToCart?: (id: string) => void;
}

const ProductCard = ({
  id = "1",
  name = "Hawthorn Berry Extract",
  image = "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&q=80",
  description = "Traditional herb used to support heart health and improve circulation.",
  price = 24.99,
  rating = 4.5,
  category = "Heart Remedies",
  inStock = true,
  onAddToCart = () => {},
}: ProductCardProps) => {
  const { t } = useLanguage();

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`star-${i}`}
          className="w-4 h-4 fill-yellow-400 text-yellow-400"
        />,
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half-star" className="relative">
          <Star className="w-4 h-4 text-yellow-400" />
          <div className="absolute top-0 left-0 overflow-hidden w-1/2">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          </div>
        </div>,
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star
          key={`empty-star-${i}`}
          className="w-4 h-4 text-gray-300 dark:text-gray-600"
        />,
      );
    }

    return stars;
  };

  const handleAddToCart = () => {
    onAddToCart(id);
  };

  // Translate category if it matches one of our known categories
  const translatedCategory =
    category === "Heart Remedies"
      ? t("heart_remedies")
      : category === "Kidney Remedies"
        ? t("kidney_remedies")
        : category === "General Wellness"
          ? t("general_wellness")
          : category;

  return (
    <Card className="w-full sm:w-[280px] h-auto min-h-[450px] sm:h-[400px] flex flex-col overflow-hidden bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 sm:h-40 overflow-hidden bg-gray-100 dark:bg-gray-700">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center"
        />
        <Badge
          variant="secondary"
          className="absolute top-2 right-2 bg-green-100 text-green-800 border-green-200 dark:bg-green-800/70 dark:text-green-100 dark:border-green-700 font-medium shadow-sm"
        >
          {translatedCategory}
        </Badge>
      </div>

      <CardHeader className="p-4 pb-0">
        <CardTitle className="text-lg font-semibold text-gray-800 dark:text-white line-clamp-1">
          {name}
        </CardTitle>
        <div className="flex items-center mt-1 space-x-1">
          {renderStars()}
          <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
            ({rating})
          </span>
        </div>
      </CardHeader>

      <CardContent className="p-4 flex-grow">
        <CardDescription className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
          {description}
        </CardDescription>
        <div className="mt-2">
          {inStock ? (
            <Badge
              variant="outline"
              className="text-green-600 border-green-200 bg-green-50 dark:text-green-400 dark:border-green-800 dark:bg-green-900/20"
            >
              {t("in_stock")}
            </Badge>
          ) : (
            <Badge
              variant="outline"
              className="text-red-600 border-red-200 bg-red-50 dark:text-red-400 dark:border-red-800 dark:bg-red-900/20"
            >
              {t("out_of_stock")}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="text-lg font-bold text-green-700 dark:text-green-500">
          ${price.toFixed(2)}
        </div>
        <Button
          onClick={handleAddToCart}
          className="bg-green-600 hover:bg-green-700 text-white dark:bg-green-700 dark:hover:bg-green-600"
          disabled={!inStock}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          {t("add")}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
