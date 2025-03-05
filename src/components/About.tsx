import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Leaf, Heart, Award, Users, BookOpen, Activity } from "lucide-react";

const About = () => {
  const handleCartClick = () => {
    // In a real implementation, this would navigate to the cart page
    console.log("Navigate to cart");
  };

  const handleSearchSubmit = (query: string) => {
    // In a real implementation, this would perform a search
    console.log("Search for:", query);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header
        cartItemCount={0}
        onCartClick={handleCartClick}
        onSearchSubmit={handleSearchSubmit}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-green-50 py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-green-800 mb-4">About Us</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dedicated to providing natural herbal remedies for heart and
              kidney health, backed by traditional wisdom and modern research.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-green-800 mb-6">
                  Our Story
                </h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2010, Herbal Remedies Co. began with a simple
                  mission: to make traditional herbal knowledge accessible to
                  everyone seeking natural alternatives for heart and kidney
                  health.
                </p>
                <p className="text-gray-600 mb-4">
                  Our founder, Dr. Elizabeth Chen, combined her background in
                  both Western medicine and traditional herbalism to create a
                  line of products that bridge ancient wisdom with modern
                  scientific understanding.
                </p>
                <p className="text-gray-600">
                  Today, we work with a network of certified herbalists,
                  naturopaths, and researchers to develop and refine our
                  formulations, ensuring they meet the highest standards of
                  quality and efficacy.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1542736667-069246bdbc6d?w=800&q=80"
                  alt="Herbal medicine preparation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 px-4 bg-green-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Leaf className="text-green-600 w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  Sustainability
                </h3>
                <p className="text-gray-600">
                  We source our herbs ethically and sustainably, working
                  directly with growers who use organic and regenerative farming
                  practices.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Award className="text-green-600 w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  Quality
                </h3>
                <p className="text-gray-600">
                  Every batch of our products undergoes rigorous testing for
                  purity, potency, and safety before reaching our customers.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <BookOpen className="text-green-600 w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  Education
                </h3>
                <p className="text-gray-600">
                  We believe in empowering our customers with knowledge about
                  herbal remedies and their traditional uses in supporting
                  health.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Expertise */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">
              Our Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col items-center text-center p-6 border border-green-100 rounded-lg">
                <Heart className="text-green-600 w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  Heart Health
                </h3>
                <p className="text-gray-600">
                  Our heart health formulations draw from traditions that have
                  used herbs like hawthorn, garlic, and motherwort for centuries
                  to support cardiovascular function and circulation.
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 border border-green-100 rounded-lg">
                <Activity className="text-green-600 w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  Kidney Health
                </h3>
                <p className="text-gray-600">
                  Our kidney support blends incorporate herbs such as dandelion
                  root, nettle leaf, and marshmallow root, which have been
                  traditionally used to support renal function and urinary
                  health.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 px-4 bg-green-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=elizabeth"
                  alt="Dr. Elizabeth Chen"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-green-800">
                  Dr. Elizabeth Chen
                </h3>
                <p className="text-green-600 mb-3">Founder & Lead Herbalist</p>
                <p className="text-gray-600 text-sm">
                  With over 20 years of experience in both Western medicine and
                  traditional herbalism, Dr. Chen leads our product development
                  team.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=robert"
                  alt="Robert Jackson"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-green-800">
                  Robert Jackson
                </h3>
                <p className="text-green-600 mb-3">Research Director</p>
                <p className="text-gray-600 text-sm">
                  Robert oversees our research partnerships with universities
                  and ensures our formulations are backed by scientific
                  evidence.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=maria"
                  alt="Maria Rodriguez"
                  className="w-32 h-32 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-green-800">
                  Maria Rodriguez
                </h3>
                <p className="text-green-600 mb-3">Quality Assurance Manager</p>
                <p className="text-gray-600 text-sm">
                  Maria ensures that every product meets our strict quality
                  standards through rigorous testing and quality control
                  processes.
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

export default About;
