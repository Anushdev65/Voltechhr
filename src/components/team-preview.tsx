import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    name: "M. Umapathi B.E., M.I.E.",
    role: "Chairman & Managing Director",
    description: "Strategic leader with extensive HR management expertise",
  },

  {
    name: "Rajesh Gyawali",
    role: "Director",
    description: "Expert in operational excellence and client management",
  },

  {
    name: "Nabin Chapagain",
    role: "Director",
    description: "Industry specialist in recruitment and workforce solutions",
    image: "/team/director.jpeg",
  },

  {
    name: "Nisha Thapa Magar",
    role: "Shareholder",
    description:
      "Visionary founder committed to creating dependable manpower solutions",
    image: "/team/shareholder.jpeg",
  },
];

export default function TeamPreview() {
  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 sm:gap-8 mb-10 sm:mb-12 lg:mb-16">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
              Leadership Team
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
              Experienced professionals driving our vision
            </p>
          </div>
          <Link
            href="/team"
            className="hidden sm:flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium text-sm md:text-base"
          >
            View All Team <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 lg:p-8 bg-background rounded-lg border border-border hover:border-primary/30 transition-colors text-center flex flex-col items-center"
            >
              {member.image ? (
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full mb-3 sm:mb-4 overflow-hidden border-2 border-primary/20">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-linear-to-br from-primary to-primary/60 rounded-full mb-3 sm:mb-4 flex items-center justify-center">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-foreground">
                    {member.name.charAt(0)}
                  </span>
                </div>
              )}

              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-primary mb-2">
                {member.role}
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {member.description}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="/team"
          className="sm:hidden flex items-center justify-center gap-2 text-primary hover:gap-3 transition-all font-medium text-sm"
        >
          View All Team <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
