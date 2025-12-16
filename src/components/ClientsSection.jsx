import { Instagram, BadgeCheck, ArrowRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const clients = [
  {
    name: "Veevibe Events",
    handle: "@veevibe_events",
    url: "https://www.instagram.com/veevibe_events/",
    logo: "images/veevibe-img.png",
    testimonial:
      "VOAT Network boosted our event bookings by 150% with powerful digital marketing.",
    rating: 4,
    industry: "Event Management"
  },
  {
    name: "Veevibe Sports",
    handle: "@veevibesports",
    url: "https://www.instagram.com/veevibesports/",
    logo: "images/veevibe-sports-img.png",
    testimonial:
      "Our engagement rates skyrocketed thanks to their creativity and expertise.",
    rating: 4,
    industry: "Sports & Entertainment"
  },
  {
    name: "Sky Logistics",
    handle: "@sky_travels_and_logistics",
    url: "https://www.instagram.com/sky_travels_and_logistics/",
    logo: "images/skylogistics-img.png",
    testimonial:
      "Our operations improved by 40% with their efficient logistics system.",
    rating: 5,
    industry: "Logistics & Transportation"
  },
  {
    name: "Skyrydr",
    handle: "@skyrydr_",
    url: "https://www.instagram.com/skyrydr_/",
    logo: "images/skyrydr-img.png",
    testimonial:
      "Their mobile app transformed our ride-sharing user experience.",
    rating: 4,
    industry: "Transportation Tech"
  },
  {
    name: "Navya Developers",
    handle: "@navyadevelopers.official",
    url: "https://www.instagram.com/navyadevelopers.official/",
    logo: "images/navya-developers.png",
    testimonial:
      "Working with VOAT Network elevated our brand perception significantly.",
    rating: 5,
    industry: "Real Estate"
  },
  {
    name: "TechNova Solutions",
    handle: "@technova",
    url: "https://www.instagram.com/technova/",
    logo: "images/technova.png",
    testimonial:
      "The AI solutions provided have revolutionized our customer support.",
    rating: 5,
    industry: "Technology"
  },
  {
    name: "EcoStyle Retail",
    handle: "@ecostyle.official",
    url: "https://www.instagram.com/ecostyle.official/",
    logo: "images/ecostyle.png",
    testimonial:
      "Their e-commerce platform is both beautiful and functional.",
    rating: 4,
    industry: "Fashion & Retail"
  },
  {
    name: "FitLife Wellness",
    handle: "@fitlife.app",
    url: "https://www.instagram.com/fitlife.app/",
    logo: "images/fitlife.png",
    testimonial:
      "The fitness tracking app they built has exceptional UI/UX.",
    rating: 5,
    industry: "Health & Fitness"
  }
];

// Responsive rating stars
const Rating = ({ stars }) => {
  return (
    <div className="flex justify-center gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-3 h-3 md:w-4 md:h-4 ${i < stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
};

export const ClientsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredClients, setFilteredClients] = useState(clients);
  const scrollContainer = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredClients(clients);
    } else {
      setFilteredClients(clients.filter((client) => client.rating === 5));
    }
  }, [activeFilter]);

  const startDragging = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainer.current.offsetLeft);
    setScrollLeft(scrollContainer.current.scrollLeft);
  };

  const stopDragging = () => setIsDragging(false);

  const onDragging = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainer.current.scrollLeft = scrollLeft - walk;
  };

  const scroll = (direction) => {
    const container = scrollContainer.current;
    const scrollAmount = 300;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="clients" className="py-16 md:py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-medium mb-3 md:mb-4"
          >
            Trusted Partners
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-heading text-2xl md:text-5xl font-bold text-foreground mb-4 md:mb-6"
          >
            Our <span className="text-gradient">Valued Clients</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto"
          >
            Trusted by innovative brands and growing businesses across various industries
          </motion.p>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 md:gap-3 mt-6 md:mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-3 md:px-5 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${activeFilter === "all"
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                : "bg-accent/10 text-foreground/80 hover:bg-accent/20"
                }`}
            >
              All Clients
            </button>
            <button
              onClick={() => setActiveFilter("featured")}
              className={`px-3 md:px-5 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium flex items-center gap-1 md:gap-2 transition-all duration-300 ${activeFilter === "featured"
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                : "bg-accent/10 text-foreground/80 hover:bg-accent/20"
                }`}
            >
              <Star className="w-3 h-3 md:w-4 md:h-4" />
              Featured (5★)
            </button>
          </motion.div>
        </div>

        {/* Scroll buttons for desktop */}
        <div className="hidden md:flex justify-between items-center mb-4 md:mb-6">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-background border border-border hover:bg-accent/20 text-foreground/70 hover:text-foreground transition-colors"
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <span className="text-xs md:text-sm text-muted-foreground">Swipe or use buttons to navigate</span>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-background border border-border hover:bg-accent/20 text-foreground/70 hover:text-foreground transition-colors"
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Clients Grid */}
        <div
          ref={scrollContainer}
          onMouseDown={startDragging}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
          onMouseMove={onDragging}
          className="flex gap-4 md:gap-6 pb-6 md:pb-8 overflow-x-auto snap-x snap-mandatory cursor-grab active:cursor-grabbing
           [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {filteredClients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex-shrink-0 w-64 md:w-80 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-4 md:p-6">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <div className="relative flex-shrink-0">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-12 h-12 md:w-14 md:h-14 object-cover rounded-xl border-2 border-border group-hover:border-primary transition-colors"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-primary rounded-full flex items-center justify-center border-2 border-card">
                      <BadgeCheck className="w-2 h-2 md:w-3 md:h-3 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="text-left">
                    <h3 className="font-heading font-semibold text-sm md:text-base text-foreground">{client.name}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">{client.handle}</p>
                    <p className="text-[10px] md:text-xs text-primary/80 mt-1">{client.industry}</p>
                  </div>
                </div>

                <Rating stars={client.rating} />

                <div className="relative mb-4 md:mb-6">
                  <Quote className="absolute -top-2 left-0 text-muted-foreground/20 w-6 h-6 md:w-8 md:h-8" />
                  <p className="text-xs md:text-sm text-muted-foreground italic pl-5 md:pl-6">
                    "{client.testimonial}"
                  </p>
                </div>

                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground group/button transition-all"
                >
                  <a href={client.url} target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-3 h-3 md:w-4 md:h-4 mr-2 group-hover/button:scale-110 transition-transform" />
                    Follow on Instagram
                    <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4 opacity-0 group-hover/button:opacity-100 group-hover/button:translate-x-1 transition-all" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};