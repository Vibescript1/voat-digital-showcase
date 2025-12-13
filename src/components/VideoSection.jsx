import { Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const videos = [
  {
    title: "Dandiya Night",
    url: "https://www.instagram.com/reel/DOvV8mFEwa8",
    thumbnail: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=600&fit=crop",
    category: "Event",
  },
  {
    title: "DGP Edit",
    url: "https://www.instagram.com/reel/DQYSArmDC3X",
    thumbnail: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=600&fit=crop",
    category: "Promo",
  },
  {
    title: "New Year Edit",
    url: "https://www.instagram.com/reel/DRjCJXjEwe0",
    thumbnail: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=400&h=600&fit=crop",
    category: "Celebration",
  },
  {
    title: "Glowfest Edit 1",
    url: "https://www.instagram.com/reel/DPrAVQFDRPA",
    thumbnail: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=600&fit=crop",
    category: "Festival",
  },
  {
    title: "Glowfest Edit 2",
    url: "https://www.instagram.com/reel/DPwMaqJk-mD",
    thumbnail: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=600&fit=crop",
    category: "Festival",
  },
  {
    title: "Pottery Workshop",
    url: "https://www.instagram.com/reel/DPn9A-wE600",
    thumbnail: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&h=600&fit=crop",
    category: "Workshop",
  },
];

export const VideoSection = () => {
  return (
    <section id="videos" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Video Production
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            Video <span className="text-gradient">Showcase</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional video editing that tells your story and engages your audience
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {videos.map((video, index) => (
            <a
              key={index}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[9/16] bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/20 to-transparent" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-primary/80 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                  <Play className="w-4 h-4 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-3">
                <span className="text-xs text-accent font-medium uppercase tracking-wider">
                  {video.category}
                </span>
                <h3 className="font-heading text-sm font-semibold text-secondary-foreground mt-1 line-clamp-2">
                  {video.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <a href="https://www.instagram.com/voatnetwork/" target="_blank" rel="noopener noreferrer">
              View All Reels
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};