import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import {
  Check,
  CreditCard,
  ArrowLeft,
  ShoppingBag,
  Truck,
  Shield,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface CheckoutFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  paymentMethod: string;
  cardNumber?: string;
  cardName?: string;
  expiryDate?: string;
  cvv?: string;
  savePaymentInfo?: boolean;
  notes?: string;
}

interface CheckoutProps {
  cartItems?: CartItem[];
}

const Checkout = ({
  cartItems = [
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
}: CheckoutProps) => {
  const { t } = useLanguage();
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const form = useForm<CheckoutFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      country: "United States",
      paymentMethod: "credit_card",
      savePaymentInfo: false,
      notes: "",
    },
  });

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

  const onSubmit = (data: CheckoutFormValues) => {
    console.log("Checkout form submitted:", data);
    // In a real implementation, this would process the payment and create an order

    // Generate a random order number
    const randomOrderNumber = `HRB-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(randomOrderNumber);
    setOrderComplete(true);
  };

  if (orderComplete) {
    return (
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
        <Header
          cartItemCount={0}
          onCartClick={() => {}}
          onSearchSubmit={() => {}}
        />

        <main className="flex-grow py-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="h-10 w-10 text-green-600 dark:text-green-500" />
              </div>

              <h1 className="text-3xl font-bold text-green-800 dark:text-green-500 mb-4">
                {t("order_complete")}
              </h1>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {t("order_confirmation_message")}
              </p>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mb-8">
                <p className="text-gray-700 dark:text-gray-200">
                  {t("order_number")}:{" "}
                  <span className="font-semibold">{orderNumber}</span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  onClick={() => (window.location.href = "/")}
                  className="border-green-600 text-green-600 hover:bg-green-50 dark:border-green-500 dark:text-green-500 dark:hover:bg-green-950/20"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {t("back_to_home")}
                </Button>

                <Button
                  onClick={() => (window.location.href = "/shop")}
                  className="bg-green-600 hover:bg-green-700 text-white dark:bg-green-700 dark:hover:bg-green-600"
                >
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  {t("continue_shopping")}
                </Button>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

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
            {t("checkout")}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-8"
                    >
                      {/* Shipping Information */}
                      <div>
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                          <Truck className="mr-2 h-5 w-5 text-green-600 dark:text-green-500" />
                          {t("shipping_information")}
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="firstName"
                            rules={{ required: "First name is required" }}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="dark:text-gray-300">
                                  {t("first_name")}
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="John"
                                    {...field}
                                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="lastName"
                            rules={{ required: "Last name is required" }}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="dark:text-gray-300">
                                  {t("last_name")}
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Doe"
                                    {...field}
                                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="email"
                            rules={{
                              required: "Email is required",
                              pattern: {
                                value:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address",
                              },
                            }}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="dark:text-gray-300">
                                  {t("email")}
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    type="email"
                                    placeholder="you@example.com"
                                    {...field}
                                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="phone"
                            rules={{ required: "Phone number is required" }}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="dark:text-gray-300">
                                  {t("phone")}
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="(123) 456-7890"
                                    {...field}
                                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="mt-4">
                          <FormField
                            control={form.control}
                            name="address"
                            rules={{ required: "Address is required" }}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="dark:text-gray-300">
                                  {t("address")}
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="123 Main St"
                                    {...field}
                                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                          <FormField
                            control={form.control}
                            name="city"
                            rules={{ required: "City is required" }}
                            render={({ field }) => (
                              <FormItem className="col-span-2">
                                <FormLabel className="dark:text-gray-300">
                                  {t("city")}
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="San Francisco"
                                    {...field}
                                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="state"
                            rules={{ required: "State is required" }}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="dark:text-gray-300">
                                  {t("state")}
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="CA"
                                    {...field}
                                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="zipCode"
                            rules={{ required: "ZIP code is required" }}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="dark:text-gray-300">
                                  {t("zip_code")}
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="94123"
                                    {...field}
                                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="mt-4">
                          <FormField
                            control={form.control}
                            name="country"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="dark:text-gray-300">
                                  {t("country")}
                                </FormLabel>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                      <SelectValue placeholder="Select a country" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                                    <SelectItem
                                      value="United States"
                                      className="dark:text-white"
                                    >
                                      United States
                                    </SelectItem>
                                    <SelectItem
                                      value="Canada"
                                      className="dark:text-white"
                                    >
                                      Canada
                                    </SelectItem>
                                    <SelectItem
                                      value="United Kingdom"
                                      className="dark:text-white"
                                    >
                                      United Kingdom
                                    </SelectItem>
                                    <SelectItem
                                      value="Australia"
                                      className="dark:text-white"
                                    >
                                      Australia
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      <Separator />

                      {/* Payment Information */}
                      <div>
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                          <CreditCard className="mr-2 h-5 w-5 text-green-600 dark:text-green-500" />
                          {t("payment_information")}
                        </h2>

                        <FormField
                          control={form.control}
                          name="paymentMethod"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormLabel className="dark:text-gray-300">
                                {t("payment_method")}
                              </FormLabel>
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="flex flex-col space-y-1"
                                >
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="credit_card" />
                                    </FormControl>
                                    <FormLabel className="font-normal dark:text-gray-300">
                                      {t("credit_card")}
                                    </FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem value="paypal" />
                                    </FormControl>
                                    <FormLabel className="font-normal dark:text-gray-300">
                                      PayPal
                                    </FormLabel>
                                  </FormItem>
                                </RadioGroup>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {form.watch("paymentMethod") === "credit_card" && (
                          <div className="mt-4 space-y-4">
                            <FormField
                              control={form.control}
                              name="cardNumber"
                              rules={{ required: "Card number is required" }}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="dark:text-gray-300">
                                    {t("card_number")}
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="4242 4242 4242 4242"
                                      {...field}
                                      className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="cardName"
                              rules={{ required: "Name on card is required" }}
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="dark:text-gray-300">
                                    {t("name_on_card")}
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="John Doe"
                                      {...field}
                                      className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <div className="grid grid-cols-2 gap-4">
                              <FormField
                                control={form.control}
                                name="expiryDate"
                                rules={{ required: "Expiry date is required" }}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="dark:text-gray-300">
                                      {t("expiry_date")}
                                    </FormLabel>
                                    <FormControl>
                                      <Input
                                        placeholder="MM/YY"
                                        {...field}
                                        className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />

                              <FormField
                                control={form.control}
                                name="cvv"
                                rules={{ required: "CVV is required" }}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel className="dark:text-gray-300">
                                      {t("cvv")}
                                    </FormLabel>
                                    <FormControl>
                                      <Input
                                        placeholder="123"
                                        {...field}
                                        className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>

                            <FormField
                              control={form.control}
                              name="savePaymentInfo"
                              render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0 mt-2">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value}
                                      onCheckedChange={field.onChange}
                                    />
                                  </FormControl>
                                  <div className="space-y-1 leading-none">
                                    <FormLabel className="dark:text-gray-300">
                                      {t("save_payment_info")}
                                    </FormLabel>
                                  </div>
                                </FormItem>
                              )}
                            />
                          </div>
                        )}
                      </div>

                      <Separator />

                      {/* Additional Information */}
                      <div>
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                          {t("additional_information")}
                        </h2>

                        <FormField
                          control={form.control}
                          name="notes"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="dark:text-gray-300">
                                {t("order_notes")}
                              </FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder={t("order_notes_placeholder")}
                                  className="min-h-[100px] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="flex justify-between items-center pt-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => (window.location.href = "/cart")}
                          className="border-green-600 text-green-600 hover:bg-green-50 dark:border-green-500 dark:text-green-500 dark:hover:bg-green-950/20"
                        >
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          {t("back_to_cart")}
                        </Button>

                        <Button
                          type="submit"
                          className="bg-green-600 hover:bg-green-700 text-white dark:bg-green-700 dark:hover:bg-green-600"
                        >
                          {t("place_order")}
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden sticky top-24">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                    {t("order_summary")}
                  </h2>

                  <div className="space-y-4 mb-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <p className="text-sm font-medium text-gray-800 dark:text-white">
                            {item.name}
                          </p>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500 dark:text-gray-400">
                              {item.quantity} x ${item.price.toFixed(2)}
                            </span>
                            <span className="text-gray-800 dark:text-white font-medium">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator className="my-4" />

                  <div className="space-y-2">
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
                  </div>

                  <Separator className="my-4" />

                  <div className="flex justify-between">
                    <span className="text-gray-800 dark:text-white font-semibold">
                      {t("total")}
                    </span>
                    <span className="text-green-700 dark:text-green-500 font-bold text-xl">
                      ${calculateTotal().toFixed(2)}
                    </span>
                  </div>

                  <div className="mt-6 bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <div className="flex items-start">
                      <Shield className="h-5 w-5 text-green-600 dark:text-green-500 mr-2 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-800 dark:text-white">
                          {t("secure_checkout")}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {t("secure_checkout_message")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
