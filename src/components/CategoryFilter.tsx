import React, { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { SlidersHorizontal, Filter } from "lucide-react";

interface CategoryFilterProps {
  categories?: string[];
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
  sortOptions?: string[];
  selectedSort?: string;
  onSortChange?: (sort: string) => void;
}

const CategoryFilter = ({
  categories = ["All", "Heart Remedies", "Kidney Remedies", "General Wellness"],
  selectedCategory = "All",
  onCategoryChange = () => {},
  sortOptions = [
    "Newest",
    "Price: Low to High",
    "Price: High to Low",
    "Most Popular",
  ],
  selectedSort = "Newest",
  onSortChange = () => {},
}: CategoryFilterProps) => {
  const [activeCategory, setActiveCategory] = useState(selectedCategory);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  const handleSortChange = (value: string) => {
    onSortChange(value);
  };

  return (
    <div className="w-full bg-white border-b border-gray-200 py-4 px-4 md:px-6 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-green-700" />
            <h3 className="text-sm font-medium text-gray-700">Filter by:</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  className={`cursor-pointer ${activeCategory === category ? "bg-green-600 hover:bg-green-700" : "bg-white text-gray-700 hover:bg-gray-100"}`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <SlidersHorizontal className="h-5 w-5 text-green-700" />
            <span className="text-sm font-medium text-gray-700">Sort by:</span>
            <Select value={selectedSort} onValueChange={handleSortChange}>
              <SelectTrigger className="w-[180px] border-green-200 focus:ring-green-500">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
