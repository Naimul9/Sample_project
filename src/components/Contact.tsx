import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const handleCartClick = () => {
    // In a real implementation, this would navigate to the cart page
    console.log("Navigate to cart");
  };

  const handleSearchSubmit = (query: string) => {
    // In a real implementation, this would perform a search
    console.log("Search for:", query);
  };

  const onSubmit = (data: ContactFormValues) => {
    console.log("Contact form submitted:", data);
    // In a real implementation, this would send the data to a server
    alert("Thank you for your message! We'll get back to you soon.");
    form.reset();
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Header
        cartItemCount={0}
        onCartClick={handleCartClick}
        onSearchSubmit={handleSearchSubmit}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-green-50 dark:bg-green-950/30 py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-green-800 dark:text-green-500 mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Have questions about our herbal remedies? We're here to help!
              Reach out to our team for personalized assistance.
            </p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-green-800 dark:text-green-500 mb-6">
                  Send Us a Message
                </h2>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="dark:text-gray-300">
                            Your Name
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

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="dark:text-gray-300">
                            Email Address
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
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="dark:text-gray-300">
                            Subject
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="How can we help you?"
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
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="dark:text-gray-300">
                            Your Message
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Please provide details about your inquiry..."
                              className="min-h-[150px] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 text-white"
                    >
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </Button>
                  </form>
                </Form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-semibold text-green-800 dark:text-green-500 mb-6">
                  Contact Information
                </h2>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-green-600 dark:text-green-500 mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-1">
                        Our Location
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        123 Nature Way, Wellness Valley, CA 94123
                        <br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-green-600 dark:text-green-500 mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-1">
                        Phone Number
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        +1 (555) 123-4567
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                        Monday to Friday, 9AM to 5PM PST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-green-600 dark:text-green-500 mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-1">
                        Email Address
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        info@herbalremedies.com
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                        We aim to respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-green-600 dark:text-green-500 mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-1">
                        Business Hours
                      </h3>
                      <div className="text-gray-600 dark:text-gray-300">
                        <p>Monday - Friday: 9AM - 5PM</p>
                        <p>Saturday: 10AM - 2PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-8 rounded-lg overflow-hidden h-[300px] bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <div className="text-center p-4">
                    <p className="text-gray-500 dark:text-gray-400">
                      Map would be embedded here
                    </p>
                    <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                      (In a real implementation, this would be a Google Maps or
                      similar embed)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-green-50 dark:bg-green-950/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-green-800 dark:text-green-500 mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-green-800 dark:text-green-500 mb-3">
                  How quickly will I receive my order?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We process orders within 1-2 business days. Standard shipping
                  typically takes 3-5 business days, while express shipping is
                  1-2 business days.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-green-800 dark:text-green-500 mb-3">
                  Are your products organic?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, we prioritize organic sourcing for all our herbs. Each
                  product page specifies the organic certification status of the
                  ingredients used.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-green-800 dark:text-green-500 mb-3">
                  Do you offer international shipping?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes, we ship to most countries worldwide. International
                  shipping times vary by location, typically ranging from 7-14
                  business days.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-green-800 dark:text-green-500 mb-3">
                  What is your return policy?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We offer a 30-day satisfaction guarantee. If you're not
                  completely satisfied, you can return unopened products for a
                  full refund.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
