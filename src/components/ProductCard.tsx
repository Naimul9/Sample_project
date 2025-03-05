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
        <Star key={`empty-star-${i}`} className="w-4 h-4 text-gray-300" />,
      );
    }

    return stars;
  };

  const handleAddToCart = () => {
    onAddToCart(id);
  };

  return (
    <Card className="w-[280px] h-[400px] flex flex-col overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-40 overflow-hidden bg-gray-100">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <Badge
          variant="secondary"
          className="absolute top-2 right-2 bg-green-100 text-green-800 border-green-200"
        >
          {category}
        </Badge>
      </div>

      <CardHeader className="p-4 pb-0">
        <CardTitle className="text-lg font-semibold text-gray-800 line-clamp-1">
          {name}
        </CardTitle>
        <div className="flex items-center mt-1 space-x-1">
          {renderStars()}
          <span className="text-xs text-gray-500 ml-1">({rating})</span>
        </div>
      </CardHeader>

      <CardContent className="p-4 flex-grow">
        <CardDescription className="text-sm text-gray-600 line-clamp-3">
          {description}
        </CardDescription>
        <div className="mt-2">
          {inStock ? (
            <Badge
              variant="outline"
              className="text-green-600 border-green-200 bg-green-50"
            >
              In Stock
            </Badge>
          ) : (
            <Badge
              variant="outline"
              className="text-red-600 border-red-200 bg-red-50"
            >
              Out of Stock
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="text-lg font-bold text-green-700">
          ${price.toFixed(2)}
        </div>
        <Button
          onClick={handleAddToCart}
          className="bg-green-600 hover:bg-green-700 text-white"
          disabled={!inStock}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
