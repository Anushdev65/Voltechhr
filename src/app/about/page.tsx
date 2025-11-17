import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-linear-to-br from-muted to-background border-l-2 sm:border-l-4 border-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 sm:mb-4">
              About Voltech HR
            </h1>
            <p className="text-sm sm:text-base md:text-lg xl:text-xl text-muted-foreground">
              Pioneering workforce solutions with integrity and excellence
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-24">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                  Company Overview
                </h2>
                <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base text-foreground/80">
                  <p>
                    <strong>Voltech Human Resource Pvt. Ltd.</strong> is
                    registered under the Ministry of Industry & Commerce, Office
                    of the Company Registrar with Company Registration No.
                    373373/82/83.
                  </p>
                  <p>
                    Licensed by the Ministry of Labour & Transport Management,
                    Department of Foreign Employment with License No.
                    1799/082/083, we are committed to meeting the highest
                    standards in workforce solutions.
                  </p>
                  <p>
                    As a member of the Nepal Association of Foreign Employment
                    Agencies, Voltech HR operates with PAN No. 622426903,
                    demonstrating our commitment to transparency and compliance.
                  </p>
                </div>
              </div>
              <Image
                src="/voltech-corporate.png"
                alt="Voltech HR Office"
                className="rounded-lg h-64 sm:h-80 md:h-96 object-cover"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="p-6 sm:p-8 bg-card rounded-lg border border-border">
                <h3 className="text-lg sm:text-2xl font-bold text-primary mb-4">
                  Mission
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-foreground/80">
                  To deliver workforce solutions that meet the exact needs of
                  our clients with precision, speed, and reliability. We strive
                  to supply globally competitive manpower, ensuring every
                  candidate matches required skill sets and professional
                  standards.
                </p>
              </div>
              <div className="p-6 sm:p-8 bg-card rounded-lg border border-border">
                <h3 className="text-lg sm:text-2xl font-bold text-primary mb-4">
                  Vision
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-foreground/80">
                  To be recognized as Nepal&apos;s most trusted and progressive
                  manpower provider. We aspire to continuously enhance
                  expertise, expand global footprint, and empower Nepali talent
                  by offering them meaningful career opportunities.
                </p>
              </div>
              <div className="p-6 sm:p-8 bg-card rounded-lg border border-border">
                <h3 className="text-lg sm:text-2xl font-bold text-primary mb-4">
                  Core Values
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-foreground/80">
                  <li className="flex gap-2">
                    <CheckCircle
                      size={16}
                      className="text-primary shrink-0 mt-0.5"
                    />
                    Quality
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle
                      size={16}
                      className="text-primary shrink-0 mt-0.5"
                    />
                    Integrity
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle
                      size={16}
                      className="text-primary shrink-0 mt-0.5"
                    />
                    Responsibility
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle
                      size={16}
                      className="text-primary shrink-0 mt-0.5"
                    />
                    Professionalism
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Objectives */}
        <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-8 sm:mb-12">
              Our Objectives
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                "Provide transparent, ethical, and reliable recruitment services",
                "Supply competent and globally competitive Nepali manpower",
                "Create meaningful overseas employment opportunities for Nepali workers",
                "Support national efforts in reducing unemployment",
                "Meet employer needs with honest, skilled, and dedicated workers",
                "Maintain a strong database for fast and accurate talent matching",
              ].map((objective, index) => (
                <div
                  key={index}
                  className="flex gap-3 sm:gap-4 p-4 sm:p-6 bg-background rounded-lg border border-border"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary flex items-center justify-center shrink-0 font-bold text-primary-foreground text-xs sm:text-sm">
                    {index + 1}
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-foreground/80 pt-0.5">
                    {objective}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chairman's Message */}
        <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                  Chairman&apos;s Message
                </h2>
                <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base text-foreground/80 mb-6 sm:mb-8">
                  <p>
                    As a shareholder of Voltech Human Resource Pvt. Ltd., I am
                    proud to introduce a company built on trust,
                    professionalism, and a strong commitment to serving both our
                    clients and the Nepali workforce. Voltech was established
                    with a clear vision to create a dependable platform that
                    channels the skills of Nepali talent to reputable employers
                    worldwide.
                  </p>
                  <p>
                    Our commitment is grounded in three core principles:
                    quality, integrity, and responsibility. We believe that
                    every client deserves manpower solutions that are timely,
                    precise, and aligned with their operational goals, while
                    every candidate deserves fair opportunities supported by
                    transparent and ethical recruitment practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
