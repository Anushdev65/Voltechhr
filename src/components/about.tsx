import Image from "next/image";

export default function About() {
  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-muted border-l-2 sm:border-l-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
                About Voltech HR
              </h2>
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-3 sm:mb-4">
                Voltech Human Resource Pvt. Ltd., based in Kathmandu, Nepal, is
                a forward-thinking HR and workforce placement consultancy
                dedicated to meeting modern challenges.
              </p>
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                Built on the collective expertise of our founders and team
                members, each bringing years of specialized knowledge, we
                deliver workforce services that are efficient,
                industry-relevant, and future-ready.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6">
              <div className="flex gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-primary-foreground text-xs sm:text-sm font-bold">
                    ✓
                  </span>
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-foreground">
                    Quality First
                  </h4>
                  <p className="text-xs sm:text-sm text-foreground/70">
                    Rigorous screening and skill validation
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-primary-foreground text-xs sm:text-sm font-bold">
                    ✓
                  </span>
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-foreground">
                    Ethical Practices
                  </h4>
                  <p className="text-xs sm:text-sm text-foreground/70">
                    Transparent and responsible recruitment
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-primary-foreground text-xs sm:text-sm font-bold">
                    ✓
                  </span>
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-foreground">
                    Global Standards
                  </h4>
                  <p className="text-xs sm:text-sm text-foreground/70">
                    International best practices and expertise
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px]">
            <Image
              src="/professional-hr-consultation.png"
              alt="About Voltech HR"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw,
           (max-width: 1024px) 50vw,
           33vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
