"use client";

import Image from "next/image";

const team = [
  {
    name: "M. Umapathi B.E., M.I.E.",
    role: "Chairman & Managing Director",
    description:
      "Strategic leader with extensive HR management expertise. Committed to professionalism, integrity, and delivering excellence in all operations.",
    focus: "Operations, Strategic Leadership",
  },
  {
    name: "Nabin Chapagain",
    role: "Director",
    description:
      "Industry specialist bringing years of collective experience in human resource management, international placement, and industry-specific recruitment.",
    focus: "Recruitment, Industry Relations",
  },
  {
    name: "Rajesh Gyawali",
    role: "Director",
    description:
      "Expert in operational excellence and client management. Dedicated to supporting businesses with efficient, transparent, and dedicated workforce solutions.",
    focus: "Client Management, Operations",
  },
  {
    name: "Nisha Thapa Magar",
    role: "Shareholder",
    description:
      "Committed to creating dependable manpower solutions and connecting Nepali talent with global opportunities.",
    focus: "Strategic Vision, Company Direction",
  },
];

function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-6 sm:mb-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
        {title}
      </h2>
      <div className="mt-2 h-1 w-16 rounded-full bg-primary" />
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default function TeamPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-linear-to-br from-[#96b975] via-white to-[#eefaf3] border-l-4 border-primary">
        {/* Decorative blobs */}
        <div className="absolute -top-20 -left-16 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-10 -right-24 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl" />

        {/* Diagonal texture */}
        <div />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-primary pl-6">
            <h1 className="text-3xl sm:text-2xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Our Leadership Team
            </h1>

            <div className="mt-3 h-1 w-16 bg-primary rounded-full" />

            <p className="mt-4 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Experienced professionals dedicated to integrity, growth, and
              long-term partnership.
            </p>
          </div>
        </div>
      </section>

      {/* Chairman image + message */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* IMAGE */}
            <div>
              <Image
                src="/team/chairman.png"
                alt="Chairman"
                width={800}
                height={600}
                className="w-full rounded-2xl object-cover shadow-md"
              />

              <div className="mt-4">
                <p className="text-xs uppercase tracking-[0.25em] text-primary">
                  Chairman&apos;s Message
                </p>
                <h3 className="text-2xl font-bold text-foreground">
                  M. Umapathi B.E., M.I.E.
                </h3>
                <p className="text-sm text-muted-foreground">
                  Chairman & Managing Director
                </p>
              </div>
            </div>

            {/* MESSAGE */}
            <div className="bg-muted/40 border border-border rounded-2xl p-6 sm:p-8">
              <div className="space-y-4 text-base leading-relaxed text-foreground/80">
                <p>
                  We are pleased to present Voltech on this company profile,
                  designed to provide up-to-date information about our
                  organization, experience, capabilities, and technical
                  expertise. In today&apos;s rapidly changing world, more
                  sophisticated national and global structures demand innovative
                  and reliable manpower solutions.
                </p>
                <p>
                  At Voltech, we formulate short- and long-term plans that
                  contribute to the development of key industries, particularly
                  in Human Resource Management. Our journey has been shaped by
                  hard work, persistence, an obsession for quality, and a
                  never-say-die attitude. This approach has led to continuous
                  growth in both sales and profitability, while ensuring maximum
                  satisfaction at reasonable cost for our clients.
                </p>
                <p>
                  As we move ahead to the next frontier of growth and integrated
                  excellence, we remain committed to building on our strengths
                  and achievements while staying true to our core values of
                  integrity, trust, and responsibility. We look forward to being
                  associated with you and inviting you to experience our
                  services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership profiles */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-28 bg-background border-t border-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Leadership Profiles" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {team.map((member) => (
              <article
                key={member.name}
                className="flex gap-4 sm:gap-6 bg-muted/40 border border-border rounded-2xl p-5 sm:p-6"
              >
                {/* Initial avatar (smaller, not huge square) */}
                <div className="shrink-0">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-linear-to-br from-primary to-primary/70 flex items-center justify-center text-xl sm:text-2xl font-bold text-primary-foreground">
                    {member.name.charAt(0)}
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 text-sm sm:text-base font-semibold text-primary">
                    {member.role}
                  </p>
                  <p className="mt-2 text-xs sm:text-sm md:text-base text-foreground/80 leading-relaxed">
                    {member.description}
                  </p>
                  <div className="mt-3 inline-block px-3 sm:px-4 py-1.5 bg-primary/10 rounded-full">
                    <p className="text-xs sm:text-sm font-medium text-primary">
                      {member.focus}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Directors' message */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-28 bg-muted border-l-2 sm:border-l-4 border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Message from the Directors" />
          <div className="bg-background rounded-2xl border border-border p-6 sm:p-8 lg:p-10">
            <div className="space-y-4 text-sm sm:text-base md:text-lg text-foreground/80 leading-relaxed">
              <p>
                We are delighted to welcome you to Voltech Human Resource Pvt.
                Ltd. As industries continue to evolve at an unprecedented pace,
                the need for reliable, skilled, and adaptable manpower has never
                been greater. At Voltech, we are committed to meeting these
                demands with professionalism, integrity, and a deep
                understanding of the modern workforce landscape.
              </p>
              <p>
                Our team brings together years of collective experience in human
                resource management, international placement, and
                industry-specific recruitment. This combined expertise enables
                us to identify the right talent, streamline the hiring process,
                and deliver workforce solutions that genuinely support our
                clients&apos; operational and strategic goals.
              </p>
              <p>
                We take pride in being a trusted partner to businesses that seek
                not just workers, but capable individuals who contribute to
                productivity, performance, and long-term success. Whether you
                are expanding your operations, strengthening your team, or
                preparing for new opportunities, we are here to support you with
                efficiency, transparency, and dedication.
              </p>
              <p>
                Thank you for considering Voltech HR. We look forward to
                building a strong and rewarding partnership with you.
              </p>
            </div>
            <div className="mt-6">
              <p className="font-bold text-sm sm:text-base text-foreground">
                Nabin Chapagain &amp; Rajesh Gyawali
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Directors, Voltech Human Resource Pvt. Ltd.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shareholder message */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Message from the Shareholder" />
          <div className="bg-muted/40 rounded-2xl border border-border p-6 sm:p-8 lg:p-10">
            <div className="space-y-4 text-sm sm:text-base md:text-lg text-foreground/80 leading-relaxed">
              <p>
                As a shareholder of Voltech Human Resource Pvt. Ltd., I am proud
                to introduce a company built on trust, professionalism, and a
                strong commitment to serving both our clients and the Nepali
                workforce. Voltech was founded with a clear vision to create a
                dependable platform that channels the skills of Nepali talent to
                reputable employers worldwide.
              </p>
              <p>
                Our commitment is grounded in quality, integrity, and
                responsibility. We believe every client deserves manpower
                solutions that are timely, precise, and aligned with their
                goals, and every candidate deserves fair opportunities supported
                by transparent and ethical recruitment practices.
              </p>
              <p>
                Looking ahead, we remain focused on adapting to industry trends
                and strengthening our commitment to excellence. Voltech stands
                ready to be a reliable partner for businesses seeking capable
                manpower and a gateway for Nepali professionals pursuing
                meaningful opportunities abroad.
              </p>
              <p>
                I look forward to supporting the continued growth, reputation,
                and success of our company, our clients, and the individuals we
                proudly serve.
              </p>
            </div>
            <div className="mt-6">
              <p className="font-bold text-sm sm:text-base text-foreground">
                Nisha Thapa Magar
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Shareholder, Voltech Human Resource Pvt. Ltd.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
