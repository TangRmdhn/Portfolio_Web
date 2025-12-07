import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

import { blogPosts as allBlogPosts } from "@/lib/blogData";

const blogPosts = allBlogPosts.filter(post => post.featured);

export default function BlogHighlights() {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between mb-12 md:mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">Latest Articles</h2>
            <p className="text-lg text-muted-foreground">
              Thoughts on web development, design, and technology
            </p>
          </div>
          <Link href="/blog">
            <Button variant="outline" className="hidden md:flex" data-testid="button-view-all-posts">
              View All
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
                  {post.img ? (
                    <img
                      src={post.img}
                      alt={post.title}
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
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                    <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/blog">
            <Button variant="outline" data-testid="button-view-all-posts-mobile">
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
