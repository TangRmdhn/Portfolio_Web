import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import FotoProfil from "@/assets/FotoProfil.jpg";
import { useTranslation } from "react-i18next";


export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex items-center pt-16 md:pt-6">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold font-serif leading-tight">
                {t('hero.headline1')}
                <br />
                <span className="text-primary">{t('hero.headline2')}</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                {t('hero.description')}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/about">
                <Button size="lg" className="group" data-testid="button-about-me">
                  {t('hero.buttonAbout')}
                </Button>
              </Link>
              <Link href="/projects">
                <Button size="lg" variant="outline" className="group" data-testid="button-view-projects">
                  {t('hero.buttonProjects')}
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
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
