import React from "react";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Calendar, Clock } from "lucide-react";

interface HerbalistCardProps {
  photo?: string;
  name?: string;
  specialization?: string;
  bio?: string;
  availability?: string;
  experience?: number;
  rating?: number;
  onBookConsultation?: () => void;
}

const HerbalistCard = ({
  photo = "https://api.dicebear.com/7.x/avataaars/svg?seed=herbalist",
  name = "Dr. Sarah Johnson",
  specialization = "Heart & Kidney Specialist",
  bio = "Certified herbalist with over 10 years of experience in natural remedies for cardiovascular and renal health. Specializes in combining Eastern and Western herbal traditions.",
  availability = "Mon-Fri, 9AM-5PM",
  experience = 10,
  rating = 4.8,
  onBookConsultation = () => console.log("Book consultation clicked"),
}: HerbalistCardProps) => {
  return (
    <Card className="w-[350px] h-[450px] overflow-hidden flex flex-col bg-white">
      <div className="relative h-48 overflow-hidden">
        <img
          src={photo}
          alt={`Herbalist ${name}`}
          className="w-full h-full object-cover"
        />
        <Badge
          variant="secondary"
          className="absolute top-3 right-3 bg-green-100 text-green-800 border-green-200"
        >
          {specialization}
        </Badge>
      </div>

      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">{name}</h3>
          <div className="flex items-center">
            <span className="text-yellow-500">★</span>
            <span className="ml-1 text-sm font-medium">{rating}</span>
          </div>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <span>{experience} years experience</span>
        </div>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-sm text-gray-600 line-clamp-4">{bio}</p>

        <div className="mt-4 flex items-center text-sm text-gray-500">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{availability}</span>
        </div>
      </CardContent>

      <CardFooter className="pt-2 border-t">
        <Button
          onClick={onBookConsultation}
          className="w-full bg-green-600 hover:bg-green-700 text-white"
        >
          Book Consultation
        </Button>
      </CardFooter>
    </Card>
  );
};

export default HerbalistCard;
