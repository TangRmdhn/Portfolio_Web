import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  featured: boolean;
  github_link: string;
  demo_link: string;
  image_url: string;
}

export default function Projects() {
  const { data: projects, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as Project[];
    }
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16 md:pt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4">All Projects</h1>
            <p className="text-lg text-muted-foreground ">
              Exploring the frontiers of Generative AI and Machine Learning through practical, problem-solving projects.
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="h-10 w-10 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {projects?.map((project) => (
                <Card
                  key={project.id}
                  className="overflow-hidden hover-elevate transition-all duration-300 group"
                  data-testid={`card-project-${project.id}`}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/20 via-accent/10 to-muted/20 relative overflow-hidden">
                    {project.image_url ? (
                      <img
                        src={project.image_url}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                    )}
                    {project.featured && (
                      <Badge className="absolute top-4 left-4" data-testid={`badge-featured-${project.id}`}>
                        Featured
                      </Badge>
                    )}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {project.github_link && (
                        <Button
                          size="icon"
                          variant="secondary"
                          className="rounded-lg"
                          data-testid={`button-github-${project.github_link}`}
                          onClick={() => window.open(project.github_link, "_blank")}
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      )}
                      {project.demo_link && (
                        <Button
                          size="icon"
                          variant="secondary"
                          className="rounded-lg"
                          data-testid={`button-live-${project.demo_link}`}
                          onClick={() => window.open(project.demo_link, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                  <div className="p-5 md:p-6">
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
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
