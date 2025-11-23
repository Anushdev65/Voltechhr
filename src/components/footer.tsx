import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-secondary rounded flex items-center justify-center">
                <span className="font-bold text-foreground text-sm">V</span>
              </div>
              <span className="font-bold text-base sm:text-lg">Voltech HR</span>
            </div>
            <p className="text-xs sm:text-sm opacity-80">
              Nepal&apos;s most trusted manpower provider connecting talent with
              opportunity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm opacity-80">
              <li>
                <Link
                  href="/about"
                  className="hover:opacity-100 transition-opacity"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:opacity-100 transition-opacity"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="hover:opacity-100 transition-opacity"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:opacity-100 transition-opacity"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm opacity-80">
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Recruitment
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Placement
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Manpower Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  International Placement
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              Contact Info
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li className="flex gap-2 opacity-80">
                <MapPin size={16} className="shrink-0 mt-0.5" />
                <span> Tarahall Chowk, Sinamangal-9, Kathmandu, Nepal</span>
              </li>
              <li className="flex gap-2 opacity-80">
                <Mail size={16} className="shrink-0 mt-0.5" />
                <span className="break-all">info@voltechhr.com</span>
              </li>
              <li className="flex gap-2 opacity-80">
                <Phone size={16} className="shrink-0 mt-0.5" />
                <span>+977-01-5928510</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8 text-xs sm:text-sm opacity-80">
          <p>
            &copy; 2025 Voltech Human Resource Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="hover:opacity-100 transition-opacity">
              Privacy Policy
            </a>
            <a href="#" className="hover:opacity-100 transition-opacity">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
