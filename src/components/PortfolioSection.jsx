import { useState } from 'react';
import { ExternalLink, Github, Eye, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const websites = [
  {
    name: "VeeVibes",
    url: "https://veevibes.netlify.app/",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=800&fit=crop",
    category: "Events",
    description: "A modern event management platform that helps organizers create and manage events with advanced ticketing and attendee engagement features.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    year: "2023"
  },
  {
    name: "VOAT Network",
    url: "https://voatnetwork.com",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    category: "Agency",
    description: "Digital agency website showcasing our services, portfolio, and expertise in web development and digital marketing solutions.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Contentful"],
    github: "#",
    year: "2023"
  },
  {
    name: "ManaHire",
    url: "https://manahire.com",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    category: "HR Tech",
    description: "Comprehensive HR platform that streamlines recruitment, onboarding, and employee management for modern businesses.",
    tags: ["React", "NestJS", "PostgreSQL", "AWS"],
    github: "#",
    year: "2022"
  },
  {
    name: "Skyrydr",
    url: "https://skyrydr.com",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800&fit=crop",
    category: "Transportation",
    description: "Ride-sharing platform connecting commuters with reliable transportation services across major cities.",
    tags: ["React Native", "Node.js", "MongoDB", "Google Maps API"],
    github: "#",
    year: "2023"
  },
  {
    name: "Sky Logistics Hub",
    url: "https://www.skylogisticshub.com",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop",
    category: "Logistics",
    description: "End-to-end logistics management system providing real-time tracking and optimization for shipping and delivery services.",
    tags: ["Vue.js", "Django", "PostgreSQL", "Docker"],
    github: "#",
    year: "2022"
  },
  {
    name: "Foodie Express",
    url: "#",
    image: "https://images.unsplash.com/photo-1504674900247-087703934569?w=1200&h=800&fit=crop",
    category: "Food",
    description: "Food delivery platform connecting local restaurants with customers through a seamless ordering experience.",
    tags: ["React", "Express", "MongoDB", "Stripe"],
    github: "#",
    year: "2023"
  },
];

const categories = ["All", ...new Set(websites.map(item => item.category))];

export const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredWebsites = selectedCategory === "All" 
    ? websites 
    : websites.filter(project => project.category === selectedCategory);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="portfolio" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 px-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Work
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            Featured <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our diverse range of projects, each crafted with precision and innovation to deliver exceptional digital experiences.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                  : 'bg-card text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {filteredWebsites.map((site, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 h-full flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={site.image}
                  alt={site.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    onClick={() => openModal(site)}
                    variant="outline"
                    className="bg-background/80 backdrop-blur-sm hover:bg-background hover:scale-105 transition-transform"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  {site.url && (
                    <Button
                      asChild
                      className="bg-primary/90 hover:bg-primary text-primary-foreground hover:scale-105 transition-transform"
                    >
                      <a href={site.url} target="_blank" rel="noopener noreferrer">
                        Live Demo
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {site.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{site.year}</span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {site.name}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {site.description}
                </p>
                <div className="mt-4 pt-4 border-t border-border/50">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {site.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-muted/50 rounded-md text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                    {site.tags.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-muted/50 rounded-md text-muted-foreground">
                        +{site.tags.length - 3}
                      </span>
                    )}
                  </div>
                  <Button 
                    onClick={() => openModal(site)}
                    variant="ghost" 
                    size="sm" 
                    className="text-primary hover:bg-primary/10 w-full group"
                  >
                    View Project
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            View All Projects
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-background/90 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative bg-card rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-border/50">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors z-[10000]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
            
            <div className="relative h-64 md:h-80 w-full">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6 md:p-8 space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-heading text-2xl font-bold text-foreground">
                      {selectedProject.name}
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {selectedProject.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{selectedProject.year}</p>
                </div>
                
                <div className="flex gap-3">
                  {selectedProject.github && (
                    <Button asChild variant="outline" size="sm">
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {selectedProject.url && (
                    <Button asChild size="sm" className="gap-2">
                      <a href={selectedProject.url} target="_blank" rel="noopener noreferrer">
                        Live Demo
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              
              <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
                <p className="text-foreground mb-4">{selectedProject.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-medium text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="inline-block px-3 py-1.5 bg-muted/50 rounded-md text-sm text-foreground/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-6 border-t border-border/50">
                  <h4 className="font-medium text-foreground mb-4">Project Overview</h4>
                  <p className="mb-4">
                    This project was developed to address the growing need for efficient urban transportation solutions. 
                    The platform connects commuters with reliable ride-sharing options, featuring real-time tracking, 
                    secure payments, and an intuitive user interface.
                  </p>
                  <p>
                    Key achievements include serving over 50,000 users with a 4.8/5 rating on app stores. 
                    The project's most challenging aspect was implementing real-time location tracking, 
                    which we successfully overcame using WebSockets and geofencing technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};