import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import { ArrowRight, Calendar, Users } from "lucide-react";
import HerbalistCard from "./HerbalistCard";
import BookingForm from "./BookingForm";

interface ExpertConsultationProps {
  title?: string;
  description?: string;
  herbalists?: Array<{
    id: string;
    name: string;
    photo: string;
    specialization: string;
    bio: string;
    availability: string;
    experience: number;
    rating: number;
  }>;
}

const ExpertConsultation = ({
  title = "Expert Consultation",
  description = "Connect with our certified herbalists for personalized advice on natural remedies for heart and kidney health. Our experts combine traditional knowledge with modern research to provide you with the best guidance for your specific needs.",
  herbalists = [
    {
      id: "1",
      name: "Dr. Sarah Johnson",
      photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      specialization: "Heart Health Specialist",
      bio: "Certified herbalist with over 10 years of experience in natural remedies for cardiovascular health. Specializes in combining Eastern and Western herbal traditions.",
      availability: "Mon-Fri, 9AM-5PM",
      experience: 10,
      rating: 4.8,
    },
    {
      id: "2",
      name: "Dr. Michael Chen",
      photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      specialization: "Kidney Health Specialist",
      bio: "Specialized in herbal remedies for kidney and urinary tract health. Combines traditional Chinese medicine with modern nutritional approaches for holistic treatment.",
      availability: "Tue-Sat, 10AM-6PM",
      experience: 15,
      rating: 4.9,
    },
    {
      id: "3",
      name: "Dr. Emily Rodriguez",
      photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
      specialization: "General Wellness Expert",
      bio: "Holistic practitioner focusing on overall wellness through herbal medicine. Specializes in creating personalized herbal regimens for chronic conditions and preventative care.",
      availability: "Mon-Wed, Fri, 8AM-4PM",
      experience: 8,
      rating: 4.7,
    },
  ],
}: ExpertConsultationProps) => {
  const [selectedHerbalist, setSelectedHerbalist] = useState<string | null>(
    null,
  );
  const [activeTab, setActiveTab] = useState("herbalists");

  const handleBookConsultation = (herbalistId: string) => {
    setSelectedHerbalist(herbalistId);
    setActiveTab("booking");
  };

  const selectedHerbalistData =
    herbalists.find((h) => h.id === selectedHerbalist) || herbalists[0];

  return (
    <section className="w-full py-16 px-4 md:px-6 bg-green-50 dark:bg-green-950/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-green-800 dark:text-green-500 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {description}
          </motion.p>
        </div>

        <Tabs
          defaultValue="herbalists"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="bg-green-100 dark:bg-green-900/50">
              <TabsTrigger
                value="herbalists"
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
              >
                <Users className="mr-2 h-4 w-4" />
                Our Herbalists
              </TabsTrigger>
              <TabsTrigger
                value="booking"
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Book Consultation
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="herbalists" className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {herbalists.map((herbalist) => (
                <motion.div
                  key={herbalist.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 * parseInt(herbalist.id),
                  }}
                >
                  <HerbalistCard
                    photo={herbalist.photo}
                    name={herbalist.name}
                    specialization={herbalist.specialization}
                    bio={herbalist.bio}
                    availability={herbalist.availability}
                    experience={herbalist.experience}
                    rating={herbalist.rating}
                    onBookConsultation={() =>
                      handleBookConsultation(herbalist.id)
                    }
                  />
                </motion.div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button
                onClick={() => setActiveTab("booking")}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="booking" className="w-full flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <BookingForm
                herbalistId={selectedHerbalistData.id}
                herbalistName={selectedHerbalistData.name}
                onSubmit={(data) => {
                  console.log("Booking submitted:", data);
                  // In a real app, this would submit the booking data to a server
                  alert(
                    `Consultation booked with ${selectedHerbalistData.name}!`,
                  );
                  setActiveTab("herbalists");
                }}
              />
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ExpertConsultation;
