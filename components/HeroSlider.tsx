"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
}

export const defaultSlides: Slide[] = [
  {
    id: 1,
    title: "CLASSICAL",
    subtitle:
      "Cultivating wisdom and virtue in students at each developing stage.",
    image: "/headers/header-classical.webp",
    alt: "Classical Christian Education at Citadel Christian School",
  },
  {
    id: 2,
    title: "BIBLICAL",
    subtitle:
      "Discovering God's design throughout every subject.",
    image: "/headers/header-biblical.webp",
    alt: "Biblical Worldview and Scripture at Citadel Christian School",
  },
  {
    id: 3,
    title: "EXCEPTIONAL",
    subtitle:
      "Motivating students to achieve their highest potential.",
    image: "/headers/header-exceptional.webp",
    alt: "Exceptional Christian Community at Citadel Christian School",
  },
];

export default function HeroSlider() {
  const [slides, setSlides] = useState<Slide[]>(defaultSlides);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Check if admin has saved custom slider content in localStorage
  useEffect(() => {
    const saved = localStorage.getItem("ccs_page_content_/");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const heroSection = parsed.sections?.find((s: any) => s.id === "hero_slider");
        if (heroSection && heroSection.fields) {
          const f = (id: string, def: string) =>
            heroSection.fields.find((field: any) => field.id === id)?.value || def;

          setSlides([
            {
              id: 1,
              title: f("slide1_title", "CLASSICAL"),
              subtitle: f("slide1_subtitle", "Cultivating wisdom and virtue in students at each developing stage."),
              image: f("slide1_image", "/headers/header-classical.webp"),
              alt: "Classical Christian Education at Citadel Christian School",
            },
            {
              id: 2,
              title: f("slide2_title", "BIBLICAL"),
              subtitle: f("slide2_subtitle", "Discovering God's design throughout every subject."),
              image: f("slide2_image", "/headers/header-biblical.webp"),
              alt: "Biblical Worldview and Scripture at Citadel Christian School",
            },
            {
              id: 3,
              title: f("slide3_title", "EXCEPTIONAL"),
              subtitle: f("slide3_subtitle", "Motivating students to achieve their highest potential."),
              image: f("slide3_image", "/headers/header-exceptional.webp"),
              alt: "Exceptional Christian Community at Citadel Christian School",
            },
          ]);
        }
      } catch (err) {
        console.error("Error reading saved home slider content:", err);
      }
    }
  }, []);

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative w-full h-[380px] sm:h-[440px] md:h-[500px] lg:h-[540px] overflow-hidden bg-slate-900 group">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={index === 0}
            className="object-cover object-center"
          />
          {/* Dark Overlay for optimal text readability */}
          <div className="absolute inset-0 bg-black/55 backdrop-brightness-90" />
        </div>
      ))}

      {/* Hero Content Overlay (Title & Subtitle only - No CTAs) */}
      <div className="relative z-20 h-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center justify-center text-center">
        <div
          key={currentSlide}
          className="space-y-3 sm:space-y-4 max-w-3xl animate-in fade-in zoom-in-95 duration-500"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-wide uppercase drop-shadow-md">
            {slides[currentSlide].title}
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-white font-normal drop-shadow-md leading-relaxed px-2">
            {slides[currentSlide].subtitle}
          </p>
        </div>

        {/* Previous Arrow */}
        <button
          onClick={handlePrev}
          aria-label="Previous slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 hover:bg-black/60 text-white/80 hover:text-white transition opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Arrow */}
        <button
          onClick={handleNext}
          aria-label="Next slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 hover:bg-black/60 text-white/80 hover:text-white transition opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slider Navigation Dots */}
        <div className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-30">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}: ${slide.title}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                index === currentSlide
                  ? "w-3 h-3 bg-[#581076] ring-2 ring-purple-300 ring-offset-1 ring-offset-black/40 scale-110"
                  : "w-2.5 h-2.5 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
