"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/landing-one.png",
    "/landing-two.png",
    "/landing-three.png",
    "/landing-four.png",
    "/landing-five.png",
  ];

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % slides.length),
      5000
    );

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[680px] lg:min-h-[720px] flex items-center overflow-hidden pt-20">
      {/* Carousel background */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide}
              alt={`Landing slide ${index + 1}`}
              fill
              // Slightly “zoomed out” feel by keeping the full frame centered
              className="object-cover object-[50%_35%] md:object-center"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* NOTE: left green border removed */}

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 text-balance leading-tight drop-shadow-lg">
                Nepal&apos;s Most Trusted{" "}
                <span className="text-primary">Manpower Provider</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-xl text-white/90 text-balance leading-relaxed drop-shadow-md max-w-xl">
                Connecting qualified Nepali talent with reputable employers
                worldwide. Quality, integrity, and reliability in every
                placement.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              {/* Primary CTA */}
              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-2 rounded-full px-6 sm:px-7 py-2.5 sm:py-3 bg-white text-primary text-sm sm:text-base font-semibold shadow-lg shadow-black/20 transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-primary/40 hover:scale-[1.04]"
              >
                <span>Explore Services</span>

                {/* Circle arrow with smooth change */}
                <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-white/20 group-hover:text-white">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 sm:px-7 py-2.5 sm:py-3 border border-white/80 bg-white text-primary text-sm sm:text-base font-medium backdrop-blur-[1px] transition-all duration-300 hover:bg-primary hover:border-primary hover:text-white hover:scale-[1.04] hover:shadow-primary/40"
              >
                Contact Us
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
                  15+
                </div>
                <p className="text-xs sm:text-sm text-white/80 mt-1">
                  Industries Served
                </p>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
                  50+
                </div>
                <p className="text-xs sm:text-sm text-white/80 mt-1">
                  Job Categories
                </p>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
                  Global
                </div>
                <p className="text-xs sm:text-sm text-white/80 mt-1">Reach</p>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex justify-center gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-primary w-8"
                  : "bg-white/50 hover:bg-white/80 w-2"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
