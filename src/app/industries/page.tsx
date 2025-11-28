"use client";

import {
  Laptop,
  Wrench,
  Droplet,
  Beaker,
  Hammer,
  Stethoscope,
  DollarSign,
  Factory,
  UtensilsCrossed,
  Truck,
  BookOpen,
  Signal,
  Car,
  Plane,
  Pill,
  Film,
} from "lucide-react";

const industries = [
  {
    name: "Information Technology",
    description:
      "Software developers, IT professionals, technical support specialists",
    icon: Laptop,
    image: "IT professionals working at computer desks in modern office",
  },
  {
    name: "Engineering",
    description:
      "Civil engineers, mechanical engineers, electrical engineers, technicians",
    icon: Wrench,
    image: "engineers reviewing technical blueprints and design plans",
  },
  {
    name: "Oil & Gas",
    description:
      "Field engineers, technicians, safety officers, operational staff",
    icon: Droplet,
    image: "oil and gas industry platform with professional workers",
  },
  {
    name: "Petrochemicals",
    description: "Process engineers, plant operators, maintenance technicians",
    icon: Beaker,
    image: "petrochemical plant with industrial machinery and workers",
  },
  {
    name: "Construction",
    description:
      "Project managers, site engineers, skilled laborers, safety personnel",
    icon: Hammer,
    image: "construction site with workers building modern structure",
  },
  {
    name: "Healthcare",
    description:
      "Doctors, nurses, paramedics, hospital administrators, support staff",
    icon: Stethoscope,
    image: "medical professionals in hospital providing patient care",
  },
  {
    name: "Finance & Banking",
    description:
      "Financial analysts, account managers, compliance officers, administrators",
    icon: DollarSign,
    image: "finance professionals working in modern bank office",
  },
  {
    name: "Manufacturing",
    description:
      "Production managers, quality control specialists, assembly line workers",
    icon: Factory,
    image: "modern manufacturing plant with industrial production line",
  },
  {
    name: "Hospitality",
    description: "Hotel managers, chefs, hospitality staff, event coordinators",
    icon: UtensilsCrossed,
    image: "luxury hotel lobby with professional hospitality staff",
  },
  {
    name: "Logistics & Supply Chain",
    description:
      "Supply chain managers, logistics coordinators, warehouse staff",
    icon: Truck,
    image: "warehouse and logistics center with shipping containers",
  },
  {
    name: "Education",
    description:
      "Teachers, administrators, training coordinators, support staff",
    icon: BookOpen,
    image: "classroom with teachers and students in modern school",
  },
  {
    name: "Telecommunications",
    description:
      "Network engineers, technicians, customer service representatives",
    icon: Signal,
    image: "telecommunications center with network infrastructure",
  },
  {
    name: "Automotive",
    description: "Mechanics, technicians, engineers, manufacturing specialists",
    icon: Car,
    image: "automotive manufacturing plant producing vehicles",
  },
  {
    name: "Aerospace",
    description:
      "Engineers, technicians, quality assurance specialists, maintenance staff",
    icon: Plane,
    image: "aerospace facility with aircraft maintenance and engineering",
  },
  {
    name: "Pharmaceuticals",
    description:
      "Quality assurance officers, production specialists, laboratory technicians",
    icon: Pill,
    image: "pharmaceutical laboratory with scientists conducting research",
  },
  {
    name: "Media & Entertainment",
    description:
      "Content creators, producers, technical support, administrative staff",
    icon: Film,
    image: "media production studio with creative professionals working",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden py-16 md:py-24 bg-linear-to-br from-[#96b975] via-white to-[#ecfdf3]">
          {/* Decorative gradient blobs */}
          <div className="absolute -top-24 -left-16 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute top-10 -right-24 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl" />

          {/* Subtle diagonal pattern overlay */}
          <div />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-l-4 border-primary pl-6">
              <h1 className="text-3xl sm:text-2xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-3">
                Industries We Serve
              </h1>

              <div className="mt-2 h-1 w-20 bg-primary rounded-full" />
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Expertise across 16+ major sectors, connecting skilled
                professionals with the right opportunities worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-12 md:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {industries.map((industry, index) => {
                const IconComponent = industry.icon;
                return (
                  <div
                    key={index}
                    className="group overflow-hidden rounded-lg border border-border hover:shadow-lg hover:border-primary/30 transition-all bg-card flex flex-col h-full"
                  >
                    <div className="p-4 md:p-6 lg:p-8 flex-1 flex flex-col">
                      <div className="mb-3 md:mb-4 lg:mb-6 flex items-center justify-center w-10 md:w-12 lg:w-16 h-10 md:h-12 lg:h-16 rounded-lg bg-primary/10 mx-auto">
                        <IconComponent className="w-5 md:w-6 lg:w-8 h-5 md:h-6 lg:h-8 text-primary" />
                      </div>
                      <h3 className="text-base md:text-lg lg:text-xl font-bold text-primary mb-2 md:mb-3 lg:mb-4 text-center">
                        {industry.name}
                      </h3>
                      <p className="text-xs md:text-sm lg:text-base text-foreground/80 text-center flex-1">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 md:py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8 md:mb-12">
              Our Industry Expertise
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {[
                "Deep sector-specific knowledge and networks",
                "Understanding of industry-specific skill requirements",
                "Connections with leading employers in each sector",
                "Up-to-date knowledge of market trends and demands",
                "Ability to source niche and specialized talent",
                "Compliance with industry-specific regulations",
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-4 md:p-6 lg:p-8 bg-background rounded-lg border border-border"
                >
                  <div className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 text-primary-foreground text-sm font-bold">
                      ✓
                    </div>
                    <p className="text-sm md:text-base lg:text-lg text-foreground/80">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
