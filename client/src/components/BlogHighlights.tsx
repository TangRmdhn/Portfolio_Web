import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { BlogPost } from "@/lib/types";



export default function BlogHighlights() {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language === 'id' ? 'id' : 'en') as 'en' | 'id';

  const { data: blogPosts, isLoading } = useQuery({
    queryKey: ['highlighted-blogs'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('featured', true)
        .order('published_at', { ascending: false })
        .limit(3);

      if (error) throw error;
      return data as BlogPost[];
    }
  });

  if (isLoading) return null; // Or a skeleton if preferred, but null for highlights is fine to avoid jumping

  if (!blogPosts?.length) return null;

  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between mb-12 md:mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">{t('blog.latestArticles')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('blog.latestDescription')}
            </p>
          </div>
          <Link href="/blog">
            <Button variant="outline" className="hidden md:flex" data-testid="button-view-all-posts">
              {t('blog.viewAll')}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <Card
                className="overflow-hidden hover-elevate transition-all duration-300 group cursor-pointer"
                data-testid={`card-blog-${post.id}`}
              >
                <div className="aspect-video bg-gradient-to-br from-accent/20 via-primary/10 to-muted/20 relative overflow-hidden">
                  {post.image_url ? (
                    <img
                      src={post.image_url}
                      alt={post.title[currentLang]}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs uppercase tracking-wide" data-testid={`badge-category-${post.category.toLowerCase()}`}>
                      {post.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title[currentLang]}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt[currentLang]}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.read_time}</span>
                    </div>
                    <span>{new Date(post.published_at).toLocaleDateString()}</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/blog">
            <Button variant="outline" data-testid="button-view-all-posts-mobile">
              {t('blog.viewAllArticles')}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
