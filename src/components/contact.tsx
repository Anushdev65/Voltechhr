import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            Visit Our Office & Get In Touch
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mt-3">
            Located in the heart of Kathmandu, we&apos;re ready to meet your
            workforce needs. Reach out to us using the form or visit us in
            person.
          </p>
        </div>

        {/* Map + Form Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* LEFT: Map + Contact Info */}
          <div className="space-y-6">
            {/* Map Card */}
            <div className="rounded-xl overflow-hidden shadow-lg border border-border bg-card h-80 sm:h-96 md:h-[420px]">
              <iframe
                // Search-based embed so it always points to Voltech
                src="https://www.google.com/maps?q=Voltech+Human+Resource+Pvt+Ltd,+Sinamangal-9,+Kathmandu,+Nepal&output=embed&z=16"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Contact Info */}
            <div className="space-y-5">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1">
                    Address
                  </h3>
                  <a
                    href="https://maps.app.goo.gl/33duJSifRRhA46a58"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary underline-offset-2 hover:underline"
                  >
                    Sinamangal-9, Kathmandu 44600, Nepal
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1">
                    Email
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    info@voltechhr.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1">
                    Phone
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    +977-01-5928510
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <form
            action="https://formsubmit.co/info@voltechhr.com"
            method="POST"
            className="
                rounded-xl shadow-lg border border-border bg-card
                h-80 sm:h-96 md:h-[420px]
                p-4 sm:p-6
                flex flex-col space-y-4
"
          >
            {/* Hidden settings for FormSubmit */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://voltechhr.com/contact?success=true"
            />
            <input
              type="hidden"
              name="_subject"
              value="New Contact Form Submission"
            />

            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                autoComplete="name"
                className="px-4 py-3 text-base bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                autoComplete="email"
                className="px-4 py-3 text-base bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                required
              />
            </div>

            {/* Phone + Subject */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                autoComplete="tel"
                className="px-4 py-3 text-base bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                autoComplete="off"
                className="px-4 py-3 text-base bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            {/* Message box */}
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              autoComplete="off"
              className="w-full px-4 py-3 text-base bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none resize-none"
              required
            />

            {/* Submit button */}
            <button
              type="submit"
              className="
    w-full sm:w-auto
    px-10 py-3 
    bg-primary text-primary-foreground 
    rounded-lg 
    hover:bg-primary/90 
    transition-all 
    font-medium text-lg 
    mx-auto block 
    mt-4
  "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
