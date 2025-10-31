import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    imageUrl: null,
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Collaborative task management tool with team collaboration features and real-time updates.",
    technologies: ["TypeScript", "Next.js", "PostgreSQL", "WebSocket"],
    imageUrl: null,
  },
  {
    id: "3",
    title: "Analytics Dashboard",
    description: "Data visualization dashboard for business intelligence with interactive charts and reports.",
    technologies: ["React", "D3.js", "Express", "Redis"],
    imageUrl: null,
  },
  {
    id: "4",
    title: "Social Media Platform",
    description: "A modern social networking application with messaging, posts, and real-time notifications.",
    technologies: ["Vue.js", "Firebase", "TailwindCSS", "WebRTC"],
    imageUrl: null,
  },
];

export default function ProjectHighlights() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between mb-12 md:mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">
              A selection of my recent work and personal projects
            </p>
          </div>
          <Link href="/projects">
            <Button variant="outline" className="hidden md:flex" data-testid="button-view-all-projects">
              View All
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden hover-elevate transition-all duration-300 group cursor-pointer"
              data-testid={`card-project-${project.id}`}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 via-accent/10 to-muted/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="p-2 rounded-lg bg-background/80 backdrop-blur-sm hover-elevate active-elevate-2">
                    <Github className="w-4 h-4" />
                  </div>
                  <div className="p-2 rounded-lg bg-background/80 backdrop-blur-sm hover-elevate active-elevate-2">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-base text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" data-testid={`badge-tech-${tech.toLowerCase()}`}>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/projects">
            <Button variant="outline" data-testid="button-view-all-projects-mobile">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
