import { Brain, Target, TrendingUp, Zap, Code, Palette } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Solutions",
    description: "Leveraging cutting-edge AI to deliver smarter digital experiences",
  },
  {
    icon: Target,
    title: "Strategic Approach",
    description: "Data-driven strategies tailored to your business objectives",
  },
  {
    icon: TrendingUp,
    title: "Digital Growth",
    description: "Accelerating your brand's online presence and engagement",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Modern, responsive websites built with latest technologies",
  },
  {
    icon: Palette,
    title: "Creative Design",
    description: "Stunning visuals that capture attention and drive conversions",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Quick turnaround without compromising on quality",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
          <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium mb-2 md:mb-4">
            About Us
          </span>
          <h2 className="font-heading text-2xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
            We Are <span className="text-gradient">VOAT Network</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg">
            A full-service digital agency specializing in web development, digital marketing,
            branding, and creative solutions. We help businesses transform their digital
            presence and achieve measurable growth through innovative technology and
            strategic thinking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-4 md:p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-4 h-4 md:w-6 md:h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading text-base md:text-xl font-semibold text-foreground mb-2 md:mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
