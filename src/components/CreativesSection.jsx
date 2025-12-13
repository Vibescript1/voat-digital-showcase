import { useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const creatives = [
  {
    title: "Veevibe Creative",
    url: "https://www.canva.com/design/DAG0iunSy9w/B3fptxMnY-29CyttHQeshA",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    category: "Branding",
  },
  {
    title: "VOATFolio",
    url: "https://www.canva.com/design/DAGyoWr5LSo/MI5--00i-3y6C1p3CUY4Zg",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop",
    category: "Portfolio",
  },
  {
    title: "DGP Event",
    url: "https://www.canva.com/design/DAG12cpIsvU/ZGfDBQDrOqf-J0al9PIpkw",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    category: "Event Design",
  },
  {
    title: "Creative Gallery",
    url: "https://www.canva.com/design/DAG5Yh4Pluw/GxApzMz46N8jr-H19Z90lA",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
    category: "Marketing",
  },
];

export const CreativesSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? creatives.length - 1 : selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === creatives.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <section id="creatives" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Creative Work
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            Graphic <span className="text-gradient">Creativity</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Stunning marketing designs and creative assets that captivate audiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {creatives.map((creative, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={creative.image}
                  alt={creative.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-xs text-accent font-medium uppercase tracking-wider">
                    {creative.category}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-secondary-foreground mt-1">
                    {creative.title}
                  </h3>
                </div>

                <div className="absolute inset-0 flex items-center justify-center bg-secondary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-secondary-foreground font-medium">View Details</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={selectedIndex !== null} onOpenChange={() => setSelectedIndex(null)}>
          <DialogContent className="max-w-4xl bg-card border-border p-0">
            {selectedIndex !== null && (
              <div className="relative">
                <img
                  src={creatives[selectedIndex].image}
                  alt={creatives[selectedIndex].title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary/80 flex items-center justify-center text-secondary-foreground hover:bg-secondary transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary/80 flex items-center justify-center text-secondary-foreground hover:bg-secondary transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                <div className="p-6 bg-card">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">
                    {creatives[selectedIndex].category}
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-foreground mt-2 mb-4">
                    {creatives[selectedIndex].title}
                  </h3>
                  <Button
                    asChild
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <a href={creatives[selectedIndex].url} target="_blank" rel="noopener noreferrer">
                      View on Canva
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};