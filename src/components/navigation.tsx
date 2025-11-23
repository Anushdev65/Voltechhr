"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Team", href: "/team" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          {/* LOGO (shift slightly left) */}
          <Link href="/" className="mr-6 shrink-0">
            <Image
              src="/voltech-logo.png"
              alt="Voltech Logo"
              width={300}
              height={150}
              className="transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-6 ml-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-2 py-2 text-lg font-semibold text-gray-600 hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA BUTTON - aligned far right */}
          <div className="ml-auto">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all text-sm font-semibold"
            >
              Get Started
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden ml-auto p-2 text-gray-700 hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1 bg-gray-50 border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 bg-primary text-white text-center rounded-md text-sm font-semibold mt-3 hover:bg-primary/90"
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
