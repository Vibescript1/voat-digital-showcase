import { useState } from "react";
import { Send, MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in your services.");
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
          <span className="inline-block px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-accent/10 text-accent text-xs md:text-sm font-medium mb-2 md:mb-4">
            Get in Touch
          </span>
          <h2 className="font-heading text-2xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Let's Build Your <span className="text-gradient">Brand!</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg">
            Ready to transform your digital presence? Let's discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card p-4 md:p-6 rounded-2xl border border-border">
            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs md:text-sm font-medium text-foreground mb-1 md:mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="bg-background border-border focus:border-primary text-xs md:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs md:text-sm font-medium text-foreground mb-1 md:mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    required
                    className="bg-background border-border focus:border-primary text-xs md:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs md:text-sm font-medium text-foreground mb-1 md:mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91"
                  className="bg-background border-border focus:border-primary text-xs md:text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs md:text-sm font-medium text-foreground mb-1 md:mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  required
                  rows={4}
                  className="bg-background border-border focus:border-primary resize-none text-xs md:text-sm"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 md:py-5 text-sm md:text-base flex items-center justify-center"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 w-4 md:w-5 h-4 md:h-5" />
              </Button>
            </form>
          </div>

          {/* Contact Info & WhatsApp */}
          <div className="space-y-4 md:space-y-6">
            <div className="bg-gradient-to-br from-primary to-purple-600 p-4 md:p-6 rounded-2xl text-primary-foreground">
              <h3 className="font-heading text-xl md:text-2xl font-bold mb-2 md:mb-3">
                Quick Response Guaranteed
              </h3>
              <p className="mb-2 md:mb-4 text-xs md:text-sm opacity-90">
                Prefer WhatsApp? Click below for instant communication with our team.
              </p>
              <Button
                onClick={handleWhatsApp}
                className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold py-3 md:py-5 text-sm md:text-base flex items-center justify-center"
              >
                <MessageCircle className="mr-2 w-4 md:w-5 h-4 md:h-5" />
                Chat on WhatsApp
              </Button>
            </div>

            {/* Info Cards */}
            <div className="space-y-3 md:space-y-4">
              {[
                { icon: Mail, title: "Email Us", value: "voatnetwork@gmail.com" },
                { icon: Phone, title: "Call Us", value: "+91 77997 70919" },
                { icon: MapPin, title: "Location", value: "Vishakapatnam, Andhra Pradesh, 531019" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-card rounded-xl border border-border">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 md:w-5 h-4 md:h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm md:text-base text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground text-xs md:text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
