import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative h-[260px] sm:h-80 md:h-[380px] lg:h-[420px] overflow-hidden">
        {/* Background image */}
        <Image
          src="/about.png" // <- new plain image
          alt="Voltech HR – global workforce background"
          fill
          priority
          className="object-cover"
        />

        {/* Dark gradient overlay so text pops */}
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/55 to-black/20" />

        {/* Text overlay */}
        <div className="relative z-10 h-full">
          <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            {/* <p className="text-xs sm:text-sm tracking-[0.35em] text-primary/90 uppercase mb-3">
                About Us
              </p> */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
              About Voltech HR
            </h1>
            <p className="max-w-2xl text-sm sm:text-base md:text-lg text-white/85">
              Pioneering workforce solutions with integrity, transparency, and a
              commitment to globally competitive Nepali talent.
            </p>
          </div>
        </div>
      </section>

      {/* rest of your sections stay the same */}
      {/* Company Overview + Mission/Vision */}

      {/* Company Overview */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                Company Overview
              </h2>
              <div className="h-1 w-16 bg-primary mb-6" />

              <div className="space-y-4 text-sm sm:text-base text-foreground/80 leading-relaxed">
                <p>
                  <strong>Voltech Human Resource Pvt. Ltd.</strong> is
                  registered under the Ministry of Industry & Commerce, Office
                  of the Company Registrar, with Company Registration No.
                  373373/82/83.
                </p>
                <p>
                  The company is licensed by the Ministry of Labour & Transport
                  Management, Department of Foreign Employment, with License No.
                  1799/082/083. This authorization empowers us to supply
                  professional manpower to international markets while
                  maintaining strict compliance with national regulations.
                </p>
                <p>
                  Voltech HR is a proud member of the Nepal Association of
                  Foreign Employment Agencies and operates with PAN No.
                  622426903, reflecting our commitment to transparency,
                  accountability, and responsible business practices.
                </p>
              </div>
            </div>

            <div className="relative w-full">
              <Image
                src="/voltech-corporate.png"
                alt="Modern corporate building representing Voltech HR"
                width={900}
                height={600}
                className="w-full h-auto rounded-xl shadow-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Our Company (from brochure) */}
      <section className="py-12 sm:py-16 md:py-24 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
              About Our Company
            </h2>
            <div className="h-1 w-20 bg-primary mb-6" />

            <div className="space-y-4 text-sm sm:text-base text-foreground/80 leading-relaxed">
              <p>
                In today&apos;s fast-paced world, where efficiency and
                adaptability define success, every industry demands timely,
                cost-effective, and reliable workforce solutions. As markets
                grow more competitive and business environments evolve,
                organizations must stay aligned with emerging trends, especially
                in securing talent equipped with the right skills to maintain
                seamless operations and achieve peak productivity.
              </p>
              <p>
                Voltech Human Resource Private Limited, based in Kathmandu,
                Nepal, is a forward-thinking HR and workforce placement
                consultancy dedicated to solving these modern challenges. We
                understand the need for a dependable, comprehensive, and
                professionally managed platform to channel Nepal&apos;s vast and
                diverse talent pool.
              </p>
              <p>
                By combining local expertise with global insight, we provide
                end-to-end manpower solutions tailored to the requirements of
                today&apos;s dynamic industries connecting reputable
                international employers with qualified Nepali professionals who
                are ready to contribute and grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-12 sm:py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Mission */}
            <div className="p-6 sm:p-7 bg-white rounded-xl border border-border shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3">
                Mission
              </h3>
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                Our mission is to deliver workforce solutions that meet the
                exact needs of our clients with precision, speed, and
                reliability. We strive to supply globally competitive manpower
                where every candidate matches the required skill set and
                professional standards of our clients.
              </p>
            </div>

            {/* Vision */}
            <div className="p-6 sm:p-7 bg-white rounded-xl border border-border shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3">
                Vision
              </h3>
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                Our vision is to be recognized as Nepal&apos;s most trusted and
                progressive manpower provider, known for connecting the right
                people to the right opportunities across global industries. We
                aim to continually enhance our expertise, expand our global
                footprint, and empower Nepali talent by offering meaningful
                career opportunities.
              </p>
            </div>

            {/* Core Values */}
            <div className="p-6 sm:p-7 bg-white rounded-xl border border-border shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3">
                Core Values
              </h3>
              <ul className="space-y-2 text-sm sm:text-base text-foreground/80">
                {[
                  "Quality",
                  "Integrity",
                  "Transparency",
                  "Professionalism",
                  "Long-term partnership",
                ].map((value) => (
                  <li key={value} className="flex items-start gap-2">
                    <CheckCircle
                      size={16}
                      className="text-primary mt-0.5 shrink-0"
                    />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
              Our Objectives
            </h2>
            <div className="h-1 w-20 bg-primary mb-5" />
            <p className="text-sm sm:text-base text-foreground/80">
              Guided by clear objectives, Voltech HR aims to be a dependable
              bridge between Nepali talent and reputed employers across the
              globe.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              "Provide transparent, ethical, and reliable recruitment services.",
              "Supply competent and globally competitive Nepali manpower.",
              "Create meaningful overseas employment opportunities for Nepali workers.",
              "Support national efforts in reducing unemployment.",
              "Meet employer needs with honest, skilled, and dedicated workers.",
              "Maintain a strong database for fast and accurate talent matching.",
            ].map((objective, index) => (
              <div
                key={index}
                className="flex gap-3 sm:gap-4 p-4 sm:p-6 bg-background rounded-lg border border-border"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary flex items-center justify-center shrink-0 font-semibold text-primary-foreground text-xs sm:text-sm">
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
    </main>
  );
}
