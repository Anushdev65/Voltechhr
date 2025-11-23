"use client";

import Image from "next/image";
import {
  Zap,
  Wrench,
  Briefcase,
  UtensilsCrossed,
  Shield,
  Sparkles,
  Flame,
  Shirt,
  Stethoscope,
  Building2,
  Leaf,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export default function ServicesPage() {
  const categoryIcons: Record<string, LucideIcon> = {
    Electrical: Zap,
    Mechanical: Wrench,
    Administration: Briefcase,
    "Hotel & Hospitality": UtensilsCrossed,
    Security: Shield,
    "Beauty & Spa": Sparkles,
    Welding: Flame,
    "Garments & Textiles": Shirt,
    "Medical/Paramedical": Stethoscope,
    "Civil/Architecture": Building2,
    "Agriculture & Plantation": Leaf,
  };

  const categories: Record<string, string[]> = {
    Electrical: [
      "General Electrician",
      "Electrical Line Maint.",
      "Industrial",
      "AC & Refrigeration",
      "Motor Welding",
    ],
    Mechanical: [
      "Automobile (Diesel & Petrol)",
      "Auto Electrician",
      "Machinist (Turner)",
      "Industrial Pipe Fitting",
      "Steel Fabrication",
      "Scaffolders",
    ],
    Administration: [
      "Project Manager",
      "Public Relation Manager",
      "Chartered Accountants",
      "Accountant/Cashier",
      "Secretary/Executives",
      "Clerk/Typist",
      "Receptionist",
      "Sales Personnel",
      "Store Keeper",
      "Computer Operator",
    ],
    "Hotel & Hospitality": [
      "Western, Italian, Chinese",
      "Food Production",
      "Cooking and Preservation",
      "Food & Beverage Service",
      "Waiter, Bartender",
      "Front Office Management",
      "Receptionist Call Operator",
      "Room Boy/Laundry man",
      "Cleaners",
    ],
    Security: [
      "Residential/Private Security",
      "Official/Bank Security",
      "Industrial/Security",
    ],
    "Beauty & Spa": [
      "Beautician/Hair Artist",
      "Barbers",
      "Spa Artist",
      "Manicure and Pedicure",
      "Tattoo Artist",
    ],
    Welding: [
      "Normal Welding",
      "Arc & Gas",
      "Welding IG to 4G",
      "Welding 6G",
      "Welding TIG/MIG",
    ],
    "Garments & Textiles": [
      "Patron Maker",
      "Cutting Master",
      "Production Manager",
      "Supervisor",
      "Tailors",
      "Checker/Helper",
    ],
    "Medical/Paramedical": [
      "Consultants",
      "Doctors",
      "Surgical",
      "Nurses",
      "Technicians",
    ],
    "Civil/Architecture": [
      "Mason (Plaster, Block)",
      "Mason (Tiles)",
      "Rod Binder (Steel Fixer)",
      "Shuttering Carpenter",
      "Plumbing (Pipe Fitting Sanitary)",
      "Aluminium Fabrication",
      "Gypsum Ceiling",
      "Labour",
    ],
    "Agriculture & Plantation": [
      "Farming",
      "Livestock",
      "Fishery",
      "Poultry",
      "Bee Keeping",
      "Floriculture",
    ],
  };

  const categoryImageSrc: Record<string, string> = {
    Electrical: "/jobs/electrical.jpg",
    Mechanical: "/jobs/mechanical.jpg",
    Administration: "/jobs/administration.jpg",
    "Hotel & Hospitality": "/jobs/hospitality.jpg",
    Security: "/jobs/security.jpg",
    "Beauty & Spa": "/jobs/spa.jpg",
    Welding: "/jobs/welding.jpg",
    "Garments & Textiles": "/jobs/garment.jpg",
    "Medical/Paramedical": "/jobs/medical.jpg",
    "Civil/Architecture": "/jobs/civil.jpg",
    "Agriculture & Plantation": "/jobs/agriculture.jpg",
  };

  return (
    <main>
      {/* Header */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-linear-to-br from-[#96b975] via-white to-[#f7fbff]">
        {/* Decorative gradient blobs */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

        {/* Subtle diagonal pattern overlay */}

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="border-l-4 border-primary pl-6">
            <h1 className="text-3xl sm:text-2xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              Our Services
            </h1>
            <div className="mt-2 h-1 w-20 bg-primary rounded-full" />
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Comprehensive workforce solutions across diverse sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold">Job Categories We Supply</h2>
          <div className="mt-3 h-1 w-20 bg-primary rounded-full" />

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {Object.entries(categories).map(([category, roles]) => {
              const Icon = categoryIcons[category];
              const imageSrc = categoryImageSrc[category];

              return (
                <article
                  key={category}
                  className="group overflow-hidden rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  {/* Image band (fixed height) */}
                  <div className="relative w-full overflow-hidden bg-muted h-48 sm:h-56 md:h-56 lg:h-64 rounded-t-xl">
                    {imageSrc && (
                      <Image
                        src={imageSrc}
                        alt={category}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-background/60 via-background/10 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col rounded-b-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                      <h3 className="text-2xl font-bold text-primary">
                        {category}
                      </h3>
                    </div>

                    <ul className="space-y-2">
                      {roles.map((role) => (
                        <li
                          key={role}
                          className="text-sm text-foreground/80 flex gap-2"
                        >
                          <span className="text-primary">›</span>
                          {role}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
