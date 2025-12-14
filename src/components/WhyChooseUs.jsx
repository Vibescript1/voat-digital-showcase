import { Shield, Rocket, BarChart3, Clock, Award, Users } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Trusted by Fast-Growing Brands",
    description:
      "We've helped numerous startups and established brands scale their digital presence",
  },
  {
    icon: Rocket,
    title: "End-to-End Solutions",
    description:
      "From strategy to execution, we handle everything - marketing, tech, and creative",
  },
  {
    icon: BarChart3,
    title: "Performance-Driven Design",
    description:
      "Every pixel is optimized for conversions and measurable business results",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "We respect deadlines and deliver quality work within agreed timelines",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "Industry-leading standards in design, development, and digital marketing",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description:
      "Personalized attention and ongoing support for all our clients",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
          <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium mb-2 md:mb-4">
            Why Us
          </span>
          <h2 className="font-heading text-2xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Why Choose <span className="text-gradient">VOAT Network</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg">
            Partner with a team that's committed to your success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative p-4 md:p-6 bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />

              <div className="relative z-10">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                  <reason.icon className="w-4 h-4 md:w-6 md:h-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-base md:text-xl font-semibold text-foreground mb-2 md:mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
