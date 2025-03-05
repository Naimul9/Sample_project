import React, { useState } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ProductGrid from "./ProductGrid";
import ExpertConsultation from "./ExpertConsultation";
import Footer from "./Footer";

const Home = () => {
  const [cartItems, setCartItems] = useState<string[]>([]);

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

  const handleShopNowClick = () => {
    // In a real implementation, this would scroll to the product grid or navigate to shop page
    const productSection = document.getElementById("product-section");
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header
        cartItemCount={cartItems.length}
        onCartClick={handleCartClick}
        onSearchSubmit={handleSearchSubmit}
      />

      <main className="flex-grow">
        <HeroSection onButtonClick={handleShopNowClick} />

        <section id="product-section" className="py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6 mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-2">
              Our Herbal Remedies
            </h2>
            <p className="text-gray-600 max-w-3xl">
              Discover our carefully selected natural remedies for heart and
              kidney health, backed by traditional wisdom and modern research.
            </p>
          </div>
          <ProductGrid onAddToCart={handleAddToCart} />
        </section>

        <ExpertConsultation />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
