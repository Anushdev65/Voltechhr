import Contact from "@/components/contact";

export default function ContactPage() {
  return (
    <>
      <main>
        {/* Hero */}
        <section className="relative py-16 sm:py-20 bg-linear-to-br from-[#96b975] via-background to-background border-l-4 border-primary overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-transparent via-background/40 to-background/80" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4">
              {/* LEFT VERTICAL BAR */}
              <div className="h-full w-1 bg-primary rounded-full" />
              <div className="h-15 w-1 bg-primary rounded-full" />
              {/* HEADING + UNDERLINE */}
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                  Contact Us
                </h1>

                <div className="mt-2 h-1 w-20 rounded-full bg-primary" />

                <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-2xl">
                  Let&apos;s discuss your workforce needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section (map + form side by side) */}
        <Contact />
      </main>
    </>
  );
}
