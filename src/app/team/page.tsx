"use client";

import Image from "next/image";
import { ReactNode } from "react";

const team = [
  {
    name: "M. Umapathi B.E., M.I.E.",
    role: "Chairman & Managing Director",
    description:
      "Strategic leader with extensive HR management expertise. Committed to professionalism, integrity, and delivering excellence in all operations.",
    focus: "Operations, Strategic Leadership",
    image: null,
  },
  {
    name: "Nabin Chapagain",
    role: "Director",
    description:
      "Industry specialist bringing years of collective experience in human resource management, international placement, and industry-specific recruitment.",
    focus: "Recruitment, Industry Relations",
    image: "/team/director.jpeg", // Added director image path
  },
  {
    name: "Rajesh Gyawali",
    role: "Director",
    description:
      "Expert in operational excellence and client management. Dedicated to supporting businesses with efficient, transparent, and dedicated workforce solutions.",
    focus: "Client Management, Operations",
    image: null,
  },
  {
    name: "Nisha Thapa Magar",
    role: "Shareholder",
    description:
      "Committed to creating dependable manpower solutions and connecting Nepali talent with global opportunities.",
    focus: "Strategic Vision, Company Direction",
    image: "/team/shareholder.jpeg", // Added shareholder image path
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

// 💌 Reusable message card
function MessageCard({
  body,
  name,
  designation,
}: {
  body: ReactNode;
  name: string;
  designation: string;
}) {
  return (
    <div className="group relative rounded-3xl border border-border bg-background overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Hover overlay (primary fill) */}
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary transition-colors duration-300" />

      {/* Content */}
      <div className="relative p-6 sm:p-8 lg:p-10">
        {/* Quote badge / label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-primary/40 bg-primary/5 flex items-center justify-center text-primary text-2xl font-serif group-hover:bg-white/10 group-hover:border-white/50 group-hover:text-primary-foreground transition-colors duration-300">
            &ldquo;
          </div>
          <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.18em] text-primary/80 group-hover:text-primary-foreground/80 transition-colors duration-300">
            Official Message
          </p>
        </div>

        {/* Body text */}
        <div className="space-y-4 text-sm sm:text-base md:text-lg leading-relaxed text-foreground/80 group-hover:text-primary-foreground/90 transition-colors duration-300">
          {body}
        </div>

        {/* Signature */}
        <div className="mt-6 pt-4 border-t border-border/70 group-hover:border-white/40 transition-colors duration-300">
          <p className="font-semibold text-sm sm:text-base text-foreground group-hover:text-primary-foreground transition-colors duration-300">
            {name}
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground group-hover:text-primary-foreground/80 transition-colors duration-300">
            {designation}
          </p>
        </div>
      </div>
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

      {/* Leadership Profiles Grid */}
      <section className="py-16 md:py-24 lg:py-32 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Leadership Team"
            subtitle="Meet the professionals driving excellence at Voltech"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {team.map((member) => (
              <article
                key={member.name}
                className="group relative rounded-2xl border border-border bg-muted/40 p-5 sm:p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/60"
              >
                {/* Hover overlay (primary fill) */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary transition-colors duration-300" />

                {/* Actual content */}
                <div className="relative flex gap-4 sm:gap-6 items-start">
                  {/* Avatar */}
                  <div className="shrink-0">
                    {member.image ? (
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full object-cover border-2 border-primary/30 transition-all duration-300 group-hover:border-primary-foreground/80 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full bg-linear-to-br from-primary to-primary/70 flex items-center justify-center text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground shadow-sm transition-all duration-300 group-hover:bg-primary-foreground/15 group-hover:text-primary-foreground group-hover:shadow-lg group-hover:scale-[1.03]">
                        {member.name.charAt(0)}
                      </div>
                    )}
                  </div>

                  {/* Text content */}
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary-foreground">
                      {member.name}
                    </h3>
                    <p className="mt-0.5 text-sm sm:text-base font-semibold text-primary transition-colors duration-300 group-hover:text-primary-foreground/90">
                      {member.role}
                    </p>
                    <p className="mt-2 text-xs sm:text-sm md:text-base text-foreground/80 leading-relaxed transition-colors duration-300 group-hover:text-primary-foreground/90">
                      {member.description}
                    </p>

                    <div className="mt-3 inline-block rounded-full px-3 sm:px-4 py-1.5 bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary-foreground/20 group-hover:text-primary-foreground">
                      <p className="text-xs sm:text-sm font-medium">
                        {member.focus}
                      </p>
                    </div>
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

          <MessageCard
            name="Nabin Chapagain & Rajesh Gyawali"
            designation="Directors, Voltech Human Resource Pvt. Ltd."
            body={
              <>
                <p>
                  We are delighted to welcome you to Voltech Human Resource Pvt.
                  Ltd. As industries continue to evolve at an unprecedented
                  pace, the need for reliable, skilled, and adaptable manpower
                  has never been greater. At Voltech, we are committed to
                  meeting these demands with professionalism, integrity, and a
                  deep understanding of the modern workforce landscape.
                </p>
                <p>
                  Our team brings together years of collective experience in
                  human resource management, international placement, and
                  industry-specific recruitment. This combined expertise enables
                  us to identify the right talent, streamline the hiring
                  process, and deliver workforce solutions that genuinely
                  support our clients&apos; operational and strategic goals.
                </p>
                <p>
                  We take pride in being a trusted partner to businesses that
                  seek not just workers, but capable individuals who contribute
                  to productivity, performance, and long-term success. Whether
                  you are expanding your operations, strengthening your team, or
                  preparing for new opportunities, we are here to support you
                  with efficiency, transparency, and dedication.
                </p>
                <p>
                  Thank you for considering Voltech HR. We look forward to
                  building a strong and rewarding partnership with you.
                </p>
              </>
            }
          />
        </div>
      </section>

      {/* Shareholder message */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Message from the Shareholder" />

          <MessageCard
            name="Nisha Thapa Magar"
            designation="Shareholder, Voltech Human Resource Pvt. Ltd."
            body={
              <>
                <p>
                  As a shareholder of Voltech Human Resource Pvt. Ltd., I am
                  proud to introduce a company built on trust, professionalism,
                  and a strong commitment to serving both our clients and the
                  Nepali workforce. Voltech was founded with a clear vision to
                  create a dependable platform that channels the skills of
                  Nepali talent to reputable employers worldwide.
                </p>
                <p>
                  Our commitment is grounded in quality, integrity, and
                  responsibility. We believe every client deserves manpower
                  solutions that are timely, precise, and aligned with their
                  goals, and every candidate deserves fair opportunities
                  supported by transparent and ethical recruitment practices.
                </p>
                <p>
                  Looking ahead, we remain focused on adapting to industry
                  trends and strengthening our commitment to excellence. Voltech
                  stands ready to be a reliable partner for businesses seeking
                  capable manpower and a gateway for Nepali professionals
                  pursuing meaningful opportunities abroad.
                </p>
                <p>
                  I look forward to supporting the continued growth, reputation,
                  and success of our company, our clients, and the individuals
                  we proudly serve.
                </p>
              </>
            }
          />
        </div>
      </section>
    </main>
  );
}
