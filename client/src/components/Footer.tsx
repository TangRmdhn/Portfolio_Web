import { Link } from "wouter";
import { Github, Linkedin, Instagram, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: Github, href: "https://github.com/TangRmdhn", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/tang-ramadhan", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/tangrmdhn", label: "Instagram" },
    { icon: Mail, href: "mailto:bintangramadhan0710@gmail.com", label: "Email" },
    { icon: Phone, href: "https://wa.me/6281286666666", label: "WhatsApp" },
  ];

  const quickLinks = [
    { path: "/", label: t('nav.home') },
    { path: "/about", label: t('nav.about') },
    { path: "/projects", label: t('nav.projects') },
    { path: "/blog", label: t('nav.blog') },
    { path: "/chatbot", label: t('nav.chatbot') },
  ];

  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-2">Portfolio</h3>
            <p className="text-sm text-muted-foreground">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">{t('footer.quickLinks')}</h4>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link key={link.path} href={link.path}>
                  <a
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 inline-block px-2 py-1 rounded-md"
                    data-testid={`link-footer-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide mb-4">{t('footer.connect')}</h4>
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    data-testid={`link-social-${social.label.toLowerCase()}`}
                  >
                    <Button size="icon" variant="ghost">
                      <Icon className="w-5 h-5" />
                    </Button>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {t('footer.copyright')}
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">

          </p>
        </div>
      </div>
    </footer>
  );
}
