import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold font-serif leading-tight">
                Creative
                <br />
                <span className="text-primary">Developer</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Crafting elegant solutions at the intersection of design and technology. 
                Specializing in modern web applications with a focus on user experience.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/projects">
                <Button size="lg" className="group" data-testid="button-view-projects">
                  View Projects
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" data-testid="button-download-resume">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-muted/20 backdrop-blur-sm border border-border overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/30 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent/30 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
