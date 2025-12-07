import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "wouter";
import FotoProfil from "@/assets/FotoProfil.jpg";


export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold font-serif leading-tight">
                AI Engineer &
                <br />
                <span className="text-primary">Machine Learning Enthusiast</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                I am an AI Engineer (Student) with a keen focus on Machine Learning and cutting-edge technologies like Generative AI.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/projects">
                <Button size="lg" className="group" data-testid="button-view-projects">
                  View Projects
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <a href="mailto:bintangramadhan0710@gmail.com">
                <Button size="lg" variant="outline" data-testid="button-contact-me">
                  Contact Me
                </Button>
              </a>
            </div>
          </div>

          <div className="relative">
            <img 
              src={FotoProfil} 
              alt="Bintang Ramadhan" 
              className="aspect-square rounded-2xl object-cover border-2 border-primary/20 shadow-2xl" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
