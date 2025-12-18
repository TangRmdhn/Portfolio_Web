import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar } from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

import { blogPosts } from "@/lib/blogData";



export default function Blog() {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language === 'id' ? 'id' : 'en') as 'en' | 'id';

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured || post.id !== featuredPost?.id);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16 md:pt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4">{t('blog.blogPageTitle')}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              {t('blog.blogPageDescription')}
            </p>
          </div>

          {featuredPost && (
            <Link href={`/blog/${featuredPost.id}`}>
              <Card className="mb-12 overflow-hidden hover-elevate transition-all duration-300 cursor-pointer" data-testid="card-featured-post">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="aspect-[21/9] lg:aspect-auto bg-gradient-to-br from-primary/30 via-accent/20 to-muted/20 relative overflow-hidden">
                    {featuredPost.img ? (
                      <img
                        src={featuredPost.img}
                        alt={featuredPost.title[currentLang]}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                    )}
                    <Badge className="absolute top-6 left-6" data-testid="badge-featured">
                      {t('blog.featured')}
                    </Badge>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <Badge variant="secondary" className="text-xs uppercase tracking-wide w-fit mb-4" data-testid={`badge-category-${featuredPost.category.toLowerCase()}`}>
                      {featuredPost.category}
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                      {featuredPost.title[currentLang]}
                    </h2>
                    <p className="text-base text-muted-foreground mb-6">
                      {featuredPost.excerpt[currentLang]}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredPost.publishedAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {regularPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <Card
                  className="overflow-hidden hover-elevate transition-all duration-300 group cursor-pointer"
                  data-testid={`card-blog-${post.id}`}
                >
                  <div className="aspect-video bg-gradient-to-br from-accent/20 via-primary/10 to-muted/20 relative overflow-hidden">
                    {post.img ? (
                      <img
                        src={post.img}
                        alt={post.title[currentLang]}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                    )}
                  </div>
                  <div className="p-6">
                    <Badge variant="secondary" className="text-xs uppercase tracking-wide mb-3" data-testid={`badge-category-${post.category.toLowerCase()}-${post.id}`}>
                      {post.category}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title[currentLang]}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt[currentLang]}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
