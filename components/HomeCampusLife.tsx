"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

const galleryImages = [
  {
    src: "/campus-life/campus01.webp",
    alt: "Citadel Christian School students hugging teacher outdoors",
    caption: "Loving community and mentorship between teachers and students",
  },
  {
    src: "/campus-life/campus02.webp",
    alt: "Elementary student displaying science solar system project",
    caption: "Hands-on classical science and discovery projects",
  },
  {
    src: "/campus-life/campus03.webp",
    alt: "Young students smiling in wooden playground structure",
    caption: "Joyful recess and outdoor campus fellowship",
  },
  {
    src: "/campus-life/campus04.webp",
    alt: "Secondary students enjoying campus outdoors",
    caption: "Upper school students building lifelong friendships",
  },
  {
    src: "/campus-life/campus05.webp",
    alt: "Teacher guiding hands-on nature and plant discovery",
    caption: "Exploring God's creation in our outdoor learning spaces",
  },
  {
    src: "/campus-life/campus06.webp",
    alt: "Student exploring geography and globe in classroom",
    caption: "Classical geography and world history exploration",
  },
  {
    src: "/campus-life/campus07.webp",
    alt: "Student having fun on the playground slide",
    caption: "Safe, cheerful recreation for younger grades",
  },
  {
    src: "/campus-life/campus08.webp",
    alt: "Students on the playground geometric climbing dome",
    caption: "Active play and physical development on our playground",
  },
  {
    src: "/campus-life/campus09.webp",
    alt: "Teacher providing personalized classroom support to student",
    caption: "Individual attention and caring instruction in every classroom",
  },
];

export default function HomeCampusLife() {
  const [gallery, setGallery] = useState(galleryImages);
  const [title, setTitle] = useState("Campus Life");
  const [quote, setQuote] = useState(
    "Dream big, work hard, stay focused, and surround yourself with good people—“whoever walks with the wise becomes wise” (Proverbs 13:20)"
  );
  const [btnText, setBtnText] = useState("KNOW MORE");
  const [btnUrl, setBtnUrl] = useState("/campus-life");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Load custom content saved by admin in localStorage
  useEffect(() => {
    const saved = localStorage.getItem("ccs_page_content_/");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const clSection = parsed.sections?.find((s: { id: string }) => s.id === "campus_life");
        if (clSection && clSection.fields) {
          const f = (id: string, def: string) =>
            clSection.fields.find((field: { id: string; value: string }) => field.id === id)?.value || def;

          setTitle(f("cl_title", "Campus Life"));
          setQuote(
            f(
              "cl_quote",
              "Dream big, work hard, stay focused, and surround yourself with good people—“whoever walks with the wise becomes wise” (Proverbs 13:20)"
            )
          );
          setBtnText(f("cl_btn_text", "KNOW MORE"));
          setBtnUrl(f("cl_btn_url", "/campus-life"));

          const updatedImages = galleryImages.map((defImg, idx) => {
            const num = idx + 1;
            return {
              src: f(`img${num}_src`, defImg.src),
              alt: f(`img${num}_alt`, defImg.alt),
              caption: f(`img${num}_caption`, defImg.caption),
            };
          });
          setGallery(updatedImages);
        }
      } catch {
        // Fallback to default
      }
    }
  }, []);

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + gallery.length) % gallery.length
    );
  }, [lightboxIndex, gallery.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % gallery.length
    );
  }, [lightboxIndex, gallery.length]);

  const handleClose = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  // Keyboard navigation (Esc to close, Left/Right arrows to navigate)
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    // Prevent background scrolling while lightbox is active
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [lightboxIndex, handleClose, handleNext, handlePrev]);

  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#581076] tracking-tight">
            {title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            {quote}
          </p>
        </div>

        {/* 3x3 Photo Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 mb-12">
          {gallery.map((item, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setLightboxIndex(index)}
              aria-label={`View photo ${index + 1}: ${item.alt}`}
              className="relative aspect-[4/3] w-full overflow-hidden rounded bg-slate-100 shadow-sm group text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#581076] focus:ring-offset-2"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Hover Overlay with Zoom Icon */}
              <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/90 text-[#581076] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Know More CTA Button */}
        <div className="flex justify-center">
          <Link
            href={btnUrl}
            className="inline-flex items-center justify-center px-9 py-2.5 rounded-full border-2 border-[#581076] text-[#581076] font-bold text-xs uppercase tracking-wider hover:bg-[#581076] hover:text-white transition-all duration-200 shadow-sm"
          >
            {btnText}
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-between p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={handleClose}
        >
          {/* Top Bar: Counter & Close */}
          <div
            className="w-full max-w-6xl flex items-center justify-between text-white py-2 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-xs sm:text-sm font-medium tracking-wide text-slate-300">
              {lightboxIndex + 1} / {galleryImages.length}
            </span>
            <button
              onClick={handleClose}
              aria-label="Close Lightbox"
              className="p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Photo Area with Left/Right Arrows */}
          <div
            className="relative w-full max-w-5xl flex-1 flex items-center justify-center my-2"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Arrow */}
            <button
              onClick={handlePrev}
              aria-label="Previous image"
              className="absolute left-2 sm:left-4 z-20 p-2.5 sm:p-3 rounded-full bg-black/50 hover:bg-black/80 text-white transition border border-white/10 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Current Large Image */}
            <div className="relative w-full h-[60vh] sm:h-[70vh] max-h-[750px]">
              <Image
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Next Arrow */}
            <button
              onClick={handleNext}
              aria-label="Next image"
              className="absolute right-2 sm:right-4 z-20 p-2.5 sm:p-3 rounded-full bg-black/50 hover:bg-black/80 text-white transition border border-white/10 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Caption & Thumbnail Strip */}
          <div
            className="w-full max-w-4xl text-center space-y-3 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-white text-sm sm:text-base font-medium drop-shadow">
              {galleryImages[lightboxIndex].caption}
            </p>

            {/* Thumbnail Navigation Strip */}
            <div className="flex items-center justify-center gap-2 overflow-x-auto py-2">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setLightboxIndex(idx)}
                  className={`relative w-12 h-9 rounded overflow-hidden flex-shrink-0 transition-all cursor-pointer ${
                    idx === lightboxIndex
                      ? "ring-2 ring-purple-400 opacity-100 scale-105"
                      : "opacity-40 hover:opacity-80"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
