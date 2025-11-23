"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Get In Touch
          </h2>

          {/* Underline */}
          <div className="mt-2 h-1 w-20 bg-primary rounded-full mx-auto" />

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mt-3">
            Ready to find the right talent? Contact us today.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="text-base font-semibold text-foreground mb-1">
                  Address
                </h3>
                <p className="text-sm text-muted-foreground">
                  Tarahall Chowk, Sinamangal-9, Kathmandu, Nepal
                </p>
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
                <p className="text-sm text-muted-foreground">+977-01-5928510</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://formsubmit.co/info@voltechhr.com"
            method="POST"
            className="lg:col-span-2 space-y-4"
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
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
