import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

const slides = [
  {
    title: "Transform Your Vision Into Reality",
    subtitle: "DIGITAL EXCELLENCE",
    description: "We craft high-quality digital experiences that help brands grow, scale, and lead in competitive markets.",
    buttonText: "View Portfolio",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1920&q=80",
  },
  {
    title: "Innovative Solutions That Scale",
    subtitle: "CUTTING-EDGE TECHNOLOGY",
    description: "From startups to enterprises, we build modern web solutions that evolve with your business.",
    buttonText: "View Portfolio",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80",
  },
  {
    title: "Partner With Industry Experts",
    subtitle: "TRUSTED BY BRANDS",
    description: "Work with professionals who understand design, technology, and long-term business growth.",
    buttonText: "View Portfolio",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1920&q=80",
  },
];

const DotButton = ({ selected, onClick }) => (
  <button
    onClick={onClick}
    className={`w-2.5 h-2.5 rounded-full transition-all ${selected ? "bg-white scale-125" : "bg-white/40"
      }`}
  />
);

export const HeroSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Carousel */}
      <div ref={emblaRef} className="h-full">
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] relative">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />

              {/* Background Mask */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/75 to-gray-900/40" />

              {/* Content */}
              <div className="relative z-10 min-h-screen flex items-center">
                <div className="container mx-auto px-8 md:px-12 lg:px-20">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-xl text-left"
                  >
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 text-white">
                      <Sparkles className="w-4 h-3" />
                      <span className="text-xs tracking-wider font-semibold">
                        {slide.subtitle}
                      </span>
                    </div>

                    <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold text-white leading-tight mb-6">
                      {slide.title}
                    </h1>

                    <p className="text-gray-200 text-base md:text-lg mb-8">
                      {slide.description}
                    </p>

                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 rounded-lg shadow-lg"
                    >
                      {slide.buttonText}
                      <ArrowRight className="ml-3 w-4 h-4" />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
        {slides.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </section>
  );
};
