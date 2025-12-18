import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { projectData } from "@/lib/projectData";

export default function ProjectHighlights() {
  const highlightedProjects = projectData.filter(p => p.featured);
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
          {highlightedProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden hover-elevate transition-all duration-300 group cursor-pointer"
              data-testid={`card-project-${project.id}`}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 via-accent/10 to-muted/20 relative overflow-hidden">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                )}
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="p-2 rounded-lg bg-background/80 backdrop-blur-sm hover-elevate active-elevate-2">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-lg"
                      data-testid={`button-github-${project.id}`}
                      onClick={() => window.open(project.links.github, "_blank")}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="p-2 rounded-lg bg-background/80 backdrop-blur-sm hover-elevate active-elevate-2">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-lg"
                      data-testid={`button-live-${project.links.demo}`}
                      onClick={() => window.open(project.links.demo, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-5 md:p-8">
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
