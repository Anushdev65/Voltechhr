"use client";

const steps = [
  { number: 1, title: "Marketing", icon: "📢" },
  { number: 2, title: "Demand Letter Review & Confirmation", icon: "📝" },
  {
    number: 3,
    title: "Demand Letter Online Approval by Embassy of Nepal",
    icon: "🏛️",
  },
  { number: 4, title: "Pre Approval by DoFE", icon: "✓" },
  { number: 5, title: "Demand Letter Advertisement", icon: "📣" },
  { number: 6, title: "Pre-Recruitment Orientation", icon: "📖" },
  { number: 7, title: "Application Form Registration", icon: "📋" },
  { number: 8, title: "Interview & Selection", icon: "👥" },
  { number: 9, title: "Employment Contract Briefing & Handover", icon: "📄" },
  { number: 10, title: "Medical Screening", icon: "⚕️" },
  { number: 11, title: "Calling Visa Approval", icon: "📞" },
  { number: 12, title: "Entry Visa Approval", icon: "🛫" },
  { number: 13, title: "Signing Employment Contract", icon: "✍️" },
  { number: 14, title: "Orientation as per Government Policy", icon: "🎓" },
  { number: 15, title: "Labor Approval (DoFE)", icon: "✅" },
  { number: 16, title: "Pre-Departure Orientation", icon: "🧳" },
  { number: 17, title: "Air Ticket", icon: "🎫" },
  { number: 18, title: "Departure", icon: "✈️" },
  { number: 19, title: "Job Placement", icon: "💼" },
  { number: 20, title: "Feedback & Management", icon: "📊" },
];

export default function RecruitmentProcess() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-2">
            Our Recruitment Process
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group"
              style={{
                animation: `slideInUp 0.6s ease-out ${index * 50}ms forwards`,
                opacity: 0,
              }}
            >
              <div className="relative bg-secondary/20 rounded-lg p-6 hover:bg-secondary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                {/* Step Number Circle */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>

                <div className="text-3xl mb-3 text-center group-hover:scale-125 transition-transform duration-300">
                  {step.icon}
                </div>

                <p className="text-sm font-medium text-center text-foreground group-hover:text-primary transition-colors">
                  {step.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/10">
          <p className="text-center text-muted-foreground">
            Our comprehensive 20-step recruitment process ensures quality
            placements and excellent outcomes for both clients and candidates.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
