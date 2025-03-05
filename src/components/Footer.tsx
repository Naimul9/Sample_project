import React from "react";
import { Separator } from "./ui/separator";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

interface FooterProps {
  companyName?: string;
  address?: string;
  phone?: string;
  email?: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
  quickLinks?: Array<{ label: string; href: string }>;
  categories?: Array<{ label: string; href: string }>;
}

const Footer = ({
  companyName = "Herbal Remedies Co.",
  address = "123 Nature Way, Wellness Valley, CA 94123",
  phone = "+1 (555) 123-4567",
  email = "info@herbalremedies.com",
  socialLinks = {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
  },
  quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Shipping Policy", href: "/shipping" },
    { label: "Return Policy", href: "/returns" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
  categories = [
    { label: "Heart Remedies", href: "/category/heart" },
    { label: "Kidney Remedies", href: "/category/kidney" },
    { label: "General Wellness", href: "/category/wellness" },
    { label: "Herbal Teas", href: "/category/teas" },
    { label: "Supplements", href: "/category/supplements" },
  ],
}: FooterProps) => {
  return (
    <footer className="w-full bg-green-50 border-t border-green-100">
      <div className="max-w-7xl mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-green-800 mb-4">
              {companyName}
            </h3>
            <p className="text-gray-600 mb-4">
              Your trusted source for natural herbal remedies to support heart
              and kidney health.
            </p>
            <div className="flex space-x-4">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:text-green-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:text-green-500 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:text-green-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-green-800 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-green-700 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold text-green-800 mb-4">
              Categories
            </h3>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <a
                    href={category.href}
                    className="text-gray-600 hover:text-green-700 transition-colors"
                  >
                    {category.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-green-800 mb-4">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-green-700 mr-2 mt-0.5" />
                <span className="text-gray-600">{address}</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-green-700 mr-2" />
                <span className="text-gray-600">{phone}</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-green-700 mr-2" />
                <a
                  href={`mailto:${email}`}
                  className="text-gray-600 hover:text-green-700 transition-colors"
                >
                  {email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-green-200" />

        <div className="text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} {companyName}. All rights
            reserved.
          </p>
          <p className="mt-1">
            Herbal remedies are not intended to diagnose, treat, cure, or
            prevent any disease.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
