"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const companies = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  name: `Company ${i + 1}`,
  logo: `/companies-logo/company${i + 1}.png`,
}));

export default function ClientsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % companies.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + companies.length) % companies.length);
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % companies.length);
    setAutoPlay(false);
  };

  const itemsPerView = 4;
  // const visibleCompanies = Array.from({ length: itemsPerView }).map(
  //   (_, i) => companies[(currentIndex + i) % companies.length]
  // );

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-2">
            Our Valuable Clients
          </h2>
          <p className="text-muted-foreground">
            Trusted by industry leaders worldwide
          </p>
        </div>

        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex gap-8 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${
                  (currentIndex * 100) / itemsPerView
                }%)`,
              }}
            >
              {companies.map((company) => (
                <div
                  key={company.id}
                  className="shrink-0 w-1/4 flex items-center justify-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center justify-center h-24 w-full">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={160}
                      height={80}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 p-2 hover:bg-primary/10 rounded-full transition-colors duration-200"
            aria-label="Previous clients"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 p-2 hover:bg-primary/10 rounded-full transition-colors duration-200"
            aria-label="Next clients"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({
              length: companies.length,
            }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentIndex(i);
                  setAutoPlay(false);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "bg-primary w-8" : "bg-primary/30"
                }`}
                aria-label={`Go to company ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
