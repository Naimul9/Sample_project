import React, { useState } from "react";
import { Search, ShoppingCart, Menu, X, User } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

interface HeaderProps {
  logo?: string;
  cartItemCount?: number;
  onCartClick?: () => void;
  onSearchSubmit?: (query: string) => void;
  navigationLinks?: Array<{ label: string; href: string }>;
}

const Header = ({
  logo = "Herbal Remedies",
  cartItemCount = 0,
  onCartClick = () => {},
  onSearchSubmit = () => {},
  navigationLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
}: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearchOnMobile, setShowSearchOnMobile] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit(searchQuery);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMobileSearch = () => {
    setShowSearchOnMobile(!showSearchOnMobile);
  };

  return (
    <header className="w-full h-20 bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-xl font-bold text-green-700">{logo}</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-600 hover:text-green-700 font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
          <form onSubmit={handleSearchSubmit} className="w-full relative">
            <Input
              type="text"
              placeholder="Search for herbs or conditions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pr-10 border-green-200 focus:border-green-500 focus:ring-green-500"
            />
            <Button
              type="submit"
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 text-gray-500 hover:text-green-700"
            >
              <Search className="h-5 w-5" />
            </Button>
          </form>
        </div>

        {/* Cart and Mobile Menu Buttons */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="relative text-gray-600 hover:text-green-700 md:flex hidden"
            onClick={onCartClick}
          >
            <ShoppingCart className="h-6 w-6" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-600 hover:text-green-700"
            onClick={toggleMobileSearch}
          >
            <Search className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="relative text-gray-600 hover:text-green-700 md:hidden"
            onClick={onCartClick}
          >
            <ShoppingCart className="h-6 w-6" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-600 hover:text-green-700"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div
        className={cn(
          "md:hidden bg-white w-full px-4 py-3 border-b border-gray-200 transition-all duration-300",
          showSearchOnMobile ? "block" : "hidden",
        )}
      >
        <form onSubmit={handleSearchSubmit} className="w-full relative">
          <Input
            type="text"
            placeholder="Search for herbs or conditions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pr-10 border-green-200 focus:border-green-500 focus:ring-green-500"
          />
          <Button
            type="submit"
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 text-gray-500 hover:text-green-700"
          >
            <Search className="h-5 w-5" />
          </Button>
        </form>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "md:hidden bg-white w-full absolute left-0 border-b border-gray-200 shadow-lg transition-all duration-300 z-40",
          isMenuOpen ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col p-4 space-y-4">
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-600 hover:text-green-700 font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/account"
            className="flex items-center text-gray-600 hover:text-green-700 font-medium py-2 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <User className="h-5 w-5 mr-2" />
            My Account
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
