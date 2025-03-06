import React from "react";
import Header from "./Header";
import CategoryFilter from "./CategoryFilter";
import ProductGrid from "./ProductGrid";
import Footer from "./Footer";

const Shop = () => {
  const [cartItems, setCartItems] = React.useState<string[]>([]);

  const handleAddToCart = (productId: string) => {
    setCartItems((prevItems) => [...prevItems, productId]);
  };

  const handleCartClick = () => {
    // In a real implementation, this would navigate to the cart page
    console.log("Navigate to cart");
  };

  const handleSearchSubmit = (query: string) => {
    // In a real implementation, this would perform a search
    console.log("Search for:", query);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Header
        cartItemCount={cartItems.length}
        onCartClick={handleCartClick}
        onSearchSubmit={handleSearchSubmit}
      />

      <main className="flex-grow">
        <div className="bg-green-50 dark:bg-green-950/30 py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-green-800 dark:text-green-500 mb-4">
              Our Herbal Remedies
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover our carefully selected natural remedies for heart and
              kidney health, backed by traditional wisdom and modern research.
            </p>
          </div>
        </div>

        <ProductGrid onAddToCart={handleAddToCart} />
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
