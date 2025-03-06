import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartProps {
  items?: CartItem[];
  onUpdateQuantity?: (id: string, quantity: number) => void;
  onRemoveItem?: (id: string) => void;
  onCheckout?: () => void;
}

const Cart = ({
  items = [
    {
      id: "1",
      name: "Hawthorn Berry Extract",
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&q=80",
      price: 24.99,
      quantity: 1,
    },
    {
      id: "3",
      name: "Ashwagandha Root Powder",
      image:
        "https://images.unsplash.com/photo-1567593810070-7a3d471af022?w=400&q=80",
      price: 22.5,
      quantity: 2,
    },
  ],
  onUpdateQuantity = () => {},
  onRemoveItem = () => {},
  onCheckout = () => {},
}: CartProps) => {
  const { t } = useLanguage();
  const [cartItems, setCartItems] = useState<CartItem[]>(items);

  useEffect(() => {
    setCartItems(items);
  }, [items]);

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;

    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item,
    );

    setCartItems(updatedItems);
    onUpdateQuantity(id, newQuantity);
  };

  const handleRemoveItem = (id: string) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    onRemoveItem(id);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.08; // 8% tax
  };

  const calculateShipping = () => {
    return cartItems.length > 0 ? 5.99 : 0; // Flat shipping rate
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax() + calculateShipping();
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Header
        cartItemCount={cartItems.reduce(
          (count, item) => count + item.quantity,
          0,
        )}
        onCartClick={() => {}}
        onSearchSubmit={() => {}}
      />

      <main className="flex-grow py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-green-800 dark:text-green-500 mb-8">
            {t("shopping_cart")}
          </h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-600 mb-4" />
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                {t("cart_empty")}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                {t("cart_empty_message")}
              </p>
              <Button
                onClick={() => (window.location.href = "/shop")}
                className="bg-green-600 hover:bg-green-700 text-white dark:bg-green-700 dark:hover:bg-green-600"
              >
                {t("continue_shopping")}
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                      {t("cart_items")} (
                      {cartItems.reduce(
                        (count, item) => count + item.quantity,
                        0,
                      )}
                      )
                    </h2>

                    <div className="space-y-6">
                      {cartItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
                        >
                          <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div className="flex-grow">
                            <h3 className="text-lg font-medium text-gray-800 dark:text-white">
                              {item.name}
                            </h3>
                            <p className="text-green-700 dark:text-green-500 font-semibold">
                              ${item.price.toFixed(2)}
                            </p>
                          </div>

                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-full"
                              onClick={() =>
                                handleUpdateQuantity(item.id, item.quantity - 1)
                              }
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>

                            <span className="w-8 text-center">
                              {item.quantity}
                            </span>

                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-full"
                              onClick={() =>
                                handleUpdateQuantity(item.id, item.quantity + 1)
                              }
                            >
                              <Plus className="h-4 w-4" />
                            </Button>

                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/20"
                              onClick={() => handleRemoveItem(item.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <Button
                    variant="outline"
                    onClick={() => (window.location.href = "/shop")}
                    className="border-green-600 text-green-600 hover:bg-green-50 dark:border-green-500 dark:text-green-500 dark:hover:bg-green-950/20"
                  >
                    {t("continue_shopping")}
                  </Button>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                      {t("order_summary")}
                    </h2>

                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">
                          {t("subtotal")}
                        </span>
                        <span className="text-gray-800 dark:text-white font-medium">
                          ${calculateSubtotal().toFixed(2)}
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">
                          {t("tax")}
                        </span>
                        <span className="text-gray-800 dark:text-white font-medium">
                          ${calculateTax().toFixed(2)}
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">
                          {t("shipping")}
                        </span>
                        <span className="text-gray-800 dark:text-white font-medium">
                          ${calculateShipping().toFixed(2)}
                        </span>
                      </div>

                      <Separator className="my-2" />

                      <div className="flex justify-between">
                        <span className="text-gray-800 dark:text-white font-semibold">
                          {t("total")}
                        </span>
                        <span className="text-green-700 dark:text-green-500 font-bold text-xl">
                          ${calculateTotal().toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <Button
                      className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white dark:bg-green-700 dark:hover:bg-green-600"
                      onClick={() => (window.location.href = "/checkout")}
                    >
                      {t("proceed_to_checkout")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
