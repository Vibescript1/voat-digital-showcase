import { Instagram, Facebook, Twitter, Linkedin, Youtube, ArrowUp } from "lucide-react";

const socialLinks = [
  { icon: Instagram, url: "https://www.instagram.com/voatnetwork/", label: "Instagram" },
  { icon: Twitter, url: "https://x.com/voatnetwork", label: "Twitter" },
  { icon: Linkedin, url: "https://www.linkedin.com/company/voat-network/posts/?feedView=all&viewAsMember=true", label: "LinkedIn" },
  { icon: Youtube, url: "https://www.youtube.com/@voatnetwork", label: "YouTube" },
];

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Clients", href: "#clients" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Web Development",
  "Digital Marketing",
  "SEO & SMM",
  "Video Editing",
  "Graphic Design",
  "Branding",
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

          {/* Logo + About */}
          <div>
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <img
                src="/voat-network-logo.png"
                alt="VOAT Network Logo"
                className="h-16 md:h-20 w-auto"
              />
            </div>
            <p className="text-secondary-foreground/70 mb-3 md:mb-4 text-xs md:text-sm">
              Building digital success through smart creatives and technology. Your trusted
              partner for web development, marketing, and creative solutions.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-secondary-foreground/10 hover:bg-primary flex items-center justify-center transition-colors duration-200"
                >
                  <social.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm md:text-lg mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-1 md:space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/70 hover:text-accent transition-colors duration-200 text-xs md:text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm md:text-lg mb-3 md:mb-4">Services</h4>
            <ul className="space-y-1 md:space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-secondary-foreground/70 text-xs md:text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Updated */}
          <div>
            <h4 className="font-heading font-semibold text-sm md:text-lg mb-2 md:mb-3">Stay Updated</h4>
            <p className="text-secondary-foreground/70 mb-2 md:mb-3 text-xs md:text-sm">
              Subscribe to our newsletter for the latest updates and insights.
            </p>

            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-2 md:px-3 py-1.5 md:py-2 rounded-lg bg-secondary-foreground/10 border border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50 text-xs md:text-sm focus:outline-none focus:border-primary"
              />

              <button
                type="submit"
                className="px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 text-xs md:text-sm font-medium"
              >
                Join
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
            <p className="text-secondary-foreground/60 text-xs md:text-sm text-center md:text-left">
              © {new Date().getFullYear()} VOAT Network. All rights reserved.
            </p>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-primary hover:bg-primary/90 flex items-center justify-center transition-colors duration-200"
            >
              <ArrowUp className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary-foreground" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
