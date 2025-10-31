import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Filter } from "lucide-react";
import { useState } from "react";

const allProjects = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, payment processing via Stripe, and an intuitive admin dashboard for managing products and orders.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    category: "Full-Stack",
    featured: true,
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Collaborative task management tool with team collaboration features, real-time updates via WebSocket, kanban boards, and time tracking capabilities.",
    technologies: ["TypeScript", "Next.js", "PostgreSQL", "WebSocket", "Prisma"],
    category: "Full-Stack",
    featured: true,
  },
  {
    id: "3",
    title: "Analytics Dashboard",
    description: "Data visualization dashboard for business intelligence with interactive charts, real-time data updates, and customizable reporting features.",
    technologies: ["React", "D3.js", "Express", "Redis", "Chart.js"],
    category: "Frontend",
    featured: true,
  },
  {
    id: "4",
    title: "Social Media Platform",
    description: "A modern social networking application with messaging, posts, real-time notifications, and video calling capabilities using WebRTC.",
    technologies: ["Vue.js", "Firebase", "TailwindCSS", "WebRTC"],
    category: "Full-Stack",
    featured: true,
  },
  {
    id: "5",
    title: "Portfolio Website Builder",
    description: "A drag-and-drop website builder that allows users to create stunning portfolio websites without any coding knowledge.",
    technologies: ["React", "TypeScript", "Vite", "TailwindCSS"],
    category: "Frontend",
    featured: false,
  },
  {
    id: "6",
    title: "Weather Dashboard",
    description: "Real-time weather monitoring application with forecasts, maps, and weather alerts for multiple locations worldwide.",
    technologies: ["React", "OpenWeather API", "Leaflet", "Material-UI"],
    category: "Frontend",
    featured: false,
  },
];

const categories = ["All", "Full-Stack", "Frontend", "Backend"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? allProjects 
    : allProjects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16 md:pt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4">All Projects</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              A comprehensive collection of my work, from full-stack applications to frontend experiments
            </p>
          </div>

          <div className="flex items-center gap-4 mb-12 overflow-x-auto pb-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground flex-shrink-0">
              <Filter className="w-4 h-4" />
              <span className="font-medium">Filter:</span>
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  data-testid={`button-filter-${category.toLowerCase()}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover-elevate transition-all duration-300 group"
                data-testid={`card-project-${project.id}`}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-accent/10 to-muted/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                  {project.featured && (
                    <Badge className="absolute top-4 left-4" data-testid={`badge-featured-${project.id}`}>
                      Featured
                    </Badge>
                  )}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-lg"
                      data-testid={`button-github-${project.id}`}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-lg"
                      data-testid={`button-live-${project.id}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" data-testid={`badge-tech-${tech.toLowerCase()}-${project.id}`}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
