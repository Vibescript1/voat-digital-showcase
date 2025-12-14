import { useState } from "react";
import { ExternalLink, Eye, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const creatives = [
  {
    name: "Veevibe Creative",
    url: "https://www.canva.com/design/DAG0iunSy9w/B3fptxMnY-29CyttHQeshA",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop",
    category: "Branding",
    description:
      "A bold branding concept designed to establish a strong visual identity through cohesive color systems, typography, and marketing creatives.",
    tags: ["Brand Identity", "Canva", "Social Media"],
    year: "2024",
  },
  {
    name: "VOATFolio",
    url: "https://www.canva.com/design/DAGyoWr5LSo/MI5--00i-3y6C1p3CUY4Zg",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&h=800&fit=crop",
    category: "Portfolio",
    description:
      "A clean and modern portfolio design showcasing projects, case studies, and creative storytelling for a digital-first brand.",
    tags: ["Portfolio Design", "UI", "Canva"],
    year: "2024",
  },
  {
    name: "DGP Event",
    url: "https://www.canva.com/design/DAG12cpIsvU/ZGfDBQDrOqf-J0al9PIpkw",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop",
    category: "Event Design",
    description:
      "Event creatives designed to drive engagement, featuring posters, banners, and social media assets for promotions.",
    tags: ["Event Posters", "Marketing", "Creatives"],
    year: "2023",
  },
  {
    name: "Creative Gallery",
    url: "https://www.canva.com/design/DAG5Yh4Pluw/GxApzMz46N8jr-H19Z90lA",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&h=800&fit=crop",
    category: "Marketing",
    description:
      "A curated gallery of marketing creatives crafted to enhance brand reach and visual storytelling across platforms.",
    tags: ["Marketing Design", "Campaigns", "Visuals"],
    year: "2024",
  },
];

export const CreativesSection = () => {
  const [selectedCreative, setSelectedCreative] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (creative) => {
    setSelectedCreative(creative);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="creatives" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 px-4">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium mb-4">
            Creative Work
          </span>
          <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Graphic <span className="text-gradient">Creativity</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg">
            Visual designs and creative assets crafted to elevate brand identity
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {creatives.map((creative, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={creative.image}
                  alt={creative.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                  <Button
                    onClick={() => openModal(creative)}
                    variant="outline"
                    className="bg-background/80 backdrop-blur-sm text-xs md:text-sm"
                  >
                    <Eye className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    View Details
                  </Button>

                  <Button asChild className="text-xs md:text-sm">
                    <a href={creative.url} target="_blank" rel="noopener noreferrer">
                      View on Canva
                      <ExternalLink className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                    </a>
                  </Button>
                </div>
              </div>

              <div className="p-4 md:p-6 flex flex-col gap-3 flex-1">
                <span className="text-xs md:text-sm text-muted-foreground">{creative.year}</span>

                <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground">
                  {creative.name}
                </h3>

                <p className="text-muted-foreground text-xs md:text-sm line-clamp-2">
                  {creative.description}
                </p>

                <div className="mt-auto pt-3 md:pt-4 border-t border-border/50">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {creative.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs md:text-sm px-2 py-1 bg-muted/50 rounded-md text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button
                    onClick={() => openModal(creative)}
                    variant="ghost"
                    size="sm"
                    className="text-primary w-full group text-xs md:text-sm"
                  >
                    View Creative
                    <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedCreative && (
        <div className="fixed inset-0 bg-background/90 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative bg-card rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-border/50">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors z-[10000]"
            >
              <X className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground" />
            </button>

            <div className="relative h-64 md:h-80 w-full">
              <img
                src={selectedCreative.image}
                alt={selectedCreative.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
                      {selectedCreative.name}
                    </h3>
                    <span className="px-2 py-1 md:px-3 md:py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium">
                      {selectedCreative.category}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground">{selectedCreative.year}</p>
                </div>

                <Button asChild size="sm" className="gap-2 text-xs md:text-sm">
                  <a href={selectedCreative.url} target="_blank" rel="noopener noreferrer">
                    View on Canva
                    <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                </Button>
              </div>

              <div className="prose prose-sm md:prose md:prose-lg max-w-none text-muted-foreground">
                <p className="text-foreground mb-4">
                  {selectedCreative.description}
                </p>

                <h4 className="font-medium text-foreground mb-3 text-sm md:text-base">Creative Tools & Focus</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCreative.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-block px-3 py-1.5 md:px-3 md:py-1.5 bg-muted/50 rounded-md text-xs md:text-sm text-foreground/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
