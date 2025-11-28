const benefits = [
  {
    title: "Trusted Partnership",
    description:
      "Built on foundations of quality, integrity, and responsibility",
  },
  {
    title: "Industry Expertise",
    description: "Decades of combined experience across multiple sectors",
  },
  {
    title: "Comprehensive Solutions",
    description: "End-to-end workforce management and placement services",
  },
  {
    title: "Global Network",
    description: "Strong connections with employers worldwide",
  },
  {
    title: "Ethical Practices",
    description: "Transparent and fair recruitment processes for all",
  },
  {
    title: "Continuous Innovation",
    description: "Always adapting to industry trends and best practices",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-10 sm:py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 sm:mb-4">
            Why Choose Voltech
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Your reliable partner in building a skilled and dedicated workforce
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 lg:p-8 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
