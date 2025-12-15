import { useState } from "react";
import { ExternalLink, Eye, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const websites = [
  {
    name: "VeeVibes",
    url: "https://veevibes.netlify.app/",
    image: "images/veevibe-img.png",
    category: "Events",
    year: "2023",
    description:
      "A modern event management platform built for seamless event creation, ticketing, and attendee engagement.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    overview:
      "VeeVibes is an end-to-end event management platform designed to help organizers create, promote, and manage events effortlessly. It supports event listings, secure ticket payments, and attendee tracking in real time.",
    skillsDescription:
      "The project required strong frontend skills using React for UI, Node.js for backend APIs, MongoDB for flexible event data storage, and Stripe integration for secure online payments.",
  },

  {
    name: "VOAT Network",
    url: "https://voatnetwork.com",
    image: "images/voatnetwork-img.png",
    category: "Agency",
    year: "2023",
    description:
      "A digital agency website showcasing services, portfolio, and brand credibility.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Contentful"],
    overview:
      "VOAT Network is a high-performance agency website focused on conversions and brand storytelling. It highlights services, case studies, and client trust through a modern and responsive design.",
    skillsDescription:
      "This project demonstrates expertise in Next.js for SEO-optimized pages, Tailwind CSS for scalable UI design, Framer Motion for smooth animations, and Contentful for easy content management.",
  },

  {
    name: "ManaHire",
    url: "https://manahire.com",
    image: "images/manahire-img.png",
    category: "HR Tech",
    year: "2022",
    description:
      "An HR platform that simplifies hiring, onboarding, and employee management.",
    tags: ["React", "NestJS", "PostgreSQL", "AWS"],
    overview:
      "ManaHire streamlines the hiring lifecycle by managing job postings, candidate tracking, onboarding workflows, and employee records through a centralized dashboard.",
    skillsDescription:
      "Built using React for an interactive frontend, NestJS for scalable backend architecture, PostgreSQL for relational data integrity, and AWS for cloud hosting and security.",
  },

  {
    name: "Skyrydr",
    url: "https://skyrydr.com",
    image: "images/skyrydr-img.png",
    category: "Transportation",
    year: "2023",
    description:
      "A ride-sharing platform connecting users with fast and reliable transportation.",
    tags: ["React Native", "Node.js", "MongoDB", "Google Maps API"],
    overview:
      "Skyrydr is a ride-sharing solution focused on real-time location tracking, ride booking, and driver-rider coordination across urban areas.",
    skillsDescription:
      "This project showcases mobile app development using React Native, backend services with Node.js, MongoDB for real-time ride data, and Google Maps API for navigation and tracking.",
  },

  {
    name: "Sky Logistics Hub",
    url: "https://www.skylogisticshub.com",
    image: "images/skylogistics-img.png",
    category: "Logistics",
    year: "2022",
    description:
      "A logistics management system with real-time shipment tracking.",
    tags: ["Vue.js", "Django", "PostgreSQL", "Docker"],
    overview:
      "Sky Logistics Hub provides businesses with tools to manage shipments, track deliveries, and optimize logistics operations through a centralized dashboard.",
    skillsDescription:
      "Developed using Vue.js for a responsive frontend, Django for backend processing, PostgreSQL for data accuracy, and Docker for scalable deployment.",
  },
  // {
  //   name: "Foodie Express",
  //   url: "#",
  //   image: "https://images.unsplash.com/photo-1504674900247-087703934569?w=1200&h=800&fit=crop",
  //   category: "Food",
  //   description:
  //     "Food delivery platform connecting local restaurants with customers through a seamless ordering experience.",
  //   tags: ["React", "Express", "MongoDB", "Stripe"],
  //   github: "#",
  //   year: "2023",
  // },
];

export const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="portfolio" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 px-4">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium mb-4">
            Our Work
          </span>
          <h2 className="font-heading text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg">
            Explore our diverse range of projects, each crafted with precision and innovation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {websites.map((site, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={site.image}
                  alt={site.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                  <Button
                    onClick={() => openModal(site)}
                    variant="outline"
                    className="bg-background/80 backdrop-blur-sm text-xs md:text-sm"
                  >
                    <Eye className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    View Details
                  </Button>

                  {site.url && (
                    <Button asChild className="text-xs md:text-sm">
                      <a href={site.url} target="_blank" rel="noopener noreferrer">
                        Live Demo
                        <ExternalLink className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <div className="p-4 md:p-6 flex flex-col gap-3 flex-1">
                <span className="text-xs md:text-sm text-muted-foreground">{site.year}</span>

                <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground">
                  {site.name}
                </h3>

                <p className="text-muted-foreground text-xs md:text-sm line-clamp-2">
                  {site.description}
                </p>

                <div className="mt-auto pt-3 md:pt-4 border-t border-border/50">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {site.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs md:text-sm px-2 py-1 bg-muted/50 rounded-md text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button
                    onClick={() => openModal(site)}
                    variant="ghost"
                    size="sm"
                    className="text-primary w-full group text-xs md:text-sm"
                  >
                    View Project
                    <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 bg-background/90 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative bg-card rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-border/50">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors z-[10000]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 md:w-6 md:h-6 text-muted-foreground" />
            </button>

            <div className="relative h-64 md:h-80 w-full">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = "/images/fallback.png";
                }}
              />
            </div>

            <div className="p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
                      {selectedProject.name}
                    </h3>
                    <span className="px-2 py-1 md:px-3 md:py-1.5 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium">
                      {selectedProject.category}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground">{selectedProject.year}</p>
                </div>

                {selectedProject.url && (
                  <Button asChild size="sm" className="gap-2 text-xs md:text-sm">
                    <a href={selectedProject.url} target="_blank" rel="noopener noreferrer">
                      Live Demo
                      <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                    </a>
                  </Button>
                )}
              </div>

              <div className="prose prose-sm md:prose md:prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="text-foreground mb-4">{selectedProject.description}</p>

                <div className="mb-6">
                  <h4 className="font-medium text-foreground mb-3 text-sm md:text-base">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-block px-3 py-1.5 md:px-3 md:py-1.5 bg-muted/50 rounded-md text-xs md:text-sm text-foreground/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-border/50">
                  <h4 className="font-medium text-foreground mb-4 text-sm md:text-base">Project Overview</h4>
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
