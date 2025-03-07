import React, { useState, useEffect } from "react";
import CategoryFilter from "./CategoryFilter";
import ProductCard from "./ProductCard";
import { Loader2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  rating: number;
  category: string;
  inStock: boolean;
}

interface ProductGridProps {
  products?: Product[];
  isLoading?: boolean;
  error?: string;
  onAddToCart?: (productId: string) => void;
}

const ProductGrid = ({
  products = [
    {
      id: "1",
      name: "Hawthorn Berry Extract",
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&q=80",
      description:
        "Traditional herb used to support heart health and improve circulation.",
      price: 24.99,
      rating: 4.5,
      category: "Heart Remedies",
      inStock: true,
    },
    {
      id: "2",
      name: "Dandelion Root Tincture",
      image:
        "https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=400&q=80",
      description:
        "Supports kidney function and natural detoxification processes.",
      price: 19.99,
      rating: 4.2,
      category: "Kidney Remedies",
      inStock: true,
    },
    {
      id: "3",
      name: "Ashwagandha Root Powder",
      image:
        "https://images.unsplash.com/photo-1567593810070-7a3d471af022?w=400&q=80",
      description:
        "Adaptogenic herb that helps the body manage stress and supports overall wellness.",
      price: 22.5,
      rating: 4.8,
      category: "General Wellness",
      inStock: true,
    },
    {
      id: "4",
      name: "Hibiscus Flower Tea",
      image:
        "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=400&q=80",
      description:
        "Naturally supports healthy blood pressure and cardiovascular function.",
      price: 15.99,
      rating: 4.3,
      category: "Heart Remedies",
      inStock: true,
    },
    {
      id: "5",
      name: "Milk Thistle Extract",
      image:
        "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=400&q=80",
      description:
        "Supports liver and kidney health with powerful antioxidant properties.",
      price: 27.99,
      rating: 4.6,
      category: "Kidney Remedies",
      inStock: false,
    },
    {
      id: "6",
      name: "Turmeric & Ginger Blend",
      image:
        "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&q=80",
      description:
        "Anti-inflammatory blend that supports heart health and overall wellness.",
      price: 18.5,
      rating: 4.7,
      category: "General Wellness",
      inStock: true,
    },
  ],
  isLoading = false,
  error = "",
  onAddToCart = () => {},
}: ProductGridProps) => {
  const { t } = useLanguage();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSort, setSelectedSort] = useState("Newest");

  // Map translated sort options to original sort options for internal logic
  const sortOptionMap = {
    [t("newest")]: "Newest",
    [t("price_low_high")]: "Price: Low to High",
    [t("price_high_low")]: "Price: High to Low",
    [t("most_popular")]: "Most Popular",
  };

  // Map translated categories to original categories for internal logic
  const categoryMap = {
    [t("all")]: "All",
    [t("heart_remedies")]: "Heart Remedies",
    [t("kidney_remedies")]: "Kidney Remedies",
    [t("general_wellness")]: "General Wellness",
  };

  useEffect(() => {
    let result = [...products];

    // Apply category filter - use the original category name for filtering
    const originalCategory =
      Object.entries(categoryMap).find(
        ([translated]) => translated === selectedCategory,
      )?.[1] || selectedCategory;

    if (originalCategory !== "All") {
      result = result.filter(
        (product) => product.category === originalCategory,
      );
    }

    // Apply sorting - use the original sort option for sorting logic
    const originalSort =
      Object.entries(sortOptionMap).find(
        ([translated]) => translated === selectedSort,
      )?.[1] || selectedSort;

    switch (originalSort) {
      case "Price: Low to High":
        result.sort((a, b) => a.price - b.price);
        break;
      case "Price: High to Low":
        result.sort((a, b) => b.price - a.price);
        break;
      case "Most Popular":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "Newest":
      default:
        // Assuming id correlates with newness in this demo
        result.sort((a, b) => parseInt(b.id) - parseInt(a.id));
        break;
    }

    setFilteredProducts(result);
  }, [products, selectedCategory, selectedSort, t]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (sort: string) => {
    setSelectedSort(sort);
  };

  const handleAddToCart = (productId: string) => {
    onAddToCart(productId);
  };

  if (isLoading) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center bg-white dark:bg-gray-900">
        <Loader2 className="h-12 w-12 text-green-600 dark:text-green-500 animate-spin" />
        <span className="ml-2 text-lg text-gray-600 dark:text-gray-300">
          Loading products...
        </span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full p-8 text-center bg-white dark:bg-gray-900">
        <p className="text-red-500 dark:text-red-400">{error}</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-50 dark:bg-gray-800">
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        selectedSort={selectedSort}
        onSortChange={handleSortChange}
      />

      {filteredProducts.length === 0 ? (
        <div className="w-full py-16 text-center bg-white dark:bg-gray-900">
          <p className="text-gray-500 dark:text-gray-400">{t("no_products")}</p>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto py-8 px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                description={product.description}
                price={product.price}
                rating={product.rating}
                category={product.category}
                inStock={product.inStock}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
