import { Link, useLocation } from "wouter";
import { Home, FolderOpen, FileText, MessageSquare, Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { LanguageToggle } from "./language-toggle";
import { useTranslation } from "react-i18next";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { path: "/", label: t('nav.home'), icon: Home },
    { path: "/about", label: t('nav.about'), icon: User },
    { path: "/projects", label: t('nav.projects'), icon: FolderOpen },
    { path: "/blog", label: t('nav.blog'), icon: FileText },
    { path: "/chatbot", label: t('nav.chatbot'), icon: MessageSquare },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/">
            <a className="text-xl md:text-2xl font-serif font-bold hover-elevate active-elevate-2 px-2 py-1 rounded-md transition-colors" data-testid="link-home-logo">
              Portfolio
            </a>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location === item.path;
              return (
                <Link key={item.path} href={item.path}>
                  <a
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors hover-elevate active-elevate-2 ${isActive ? "bg-accent text-accent-foreground" : "text-foreground"
                      }`}
                    data-testid={`link-nav-${item.label.toLowerCase()}`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </a>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ModeToggle />
            <Button
              size="icon"
              variant="ghost"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location === item.path;
              return (
                <Link key={item.path} href={item.path}>
                  <a
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors hover-elevate active-elevate-2 ${isActive ? "bg-accent text-accent-foreground" : "text-foreground"
                      }`}
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`link-mobile-${item.label.toLowerCase()}`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
