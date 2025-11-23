import { Briefcase, Users, Globe, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Recruitment & Placement",
    description:
      "Expert matching of qualified candidates with employer requirements across all sectors",
  },
  {
    icon: Users,
    title: "Manpower Solutions",
    description:
      "Comprehensive workforce solutions tailored to your organizational needs",
  },
  {
    icon: Globe,
    title: "International Placement",
    description:
      "Gateway to overseas employment opportunities for Nepali professionals",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description:
      "Rigorous screening and skill validation ensuring best-fit placements",
  },
];

export default function Services() {
  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Our Services
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            End-to-end manpower solutions designed to meet your unique business
            requirements
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-4 sm:p-6 lg:p-8 rounded-lg bg-card border border-border hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <Icon className="w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 text-primary mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
