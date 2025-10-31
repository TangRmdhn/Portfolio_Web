import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar } from "lucide-react";

const blogPosts = [
  {
    id: "1",
    title: "Building Scalable React Applications",
    excerpt: "Learn the best practices for structuring large-scale React applications with proper state management, code organization, and performance optimization techniques.",
    content: "Full article content would go here...",
    category: "React",
    readTime: "8 min read",
    publishedAt: "2024-10-15",
    featured: true,
  },
  {
    id: "2",
    title: "Modern CSS Techniques for 2024",
    excerpt: "Explore the latest CSS features including container queries, cascade layers, subgrid, and modern layout techniques that will transform your web designs.",
    content: "Full article content would go here...",
    category: "CSS",
    readTime: "6 min read",
    publishedAt: "2024-10-08",
    featured: true,
  },
  {
    id: "3",
    title: "TypeScript Best Practices",
    excerpt: "A comprehensive guide to writing type-safe, maintainable TypeScript code for production applications with advanced typing patterns.",
    content: "Full article content would go here...",
    category: "TypeScript",
    readTime: "10 min read",
    publishedAt: "2024-09-28",
    featured: false,
  },
  {
    id: "4",
    title: "State Management in Modern React",
    excerpt: "Comparing different state management solutions including Context API, Redux, Zustand, and Jotai for various application scales.",
    content: "Full article content would go here...",
    category: "React",
    readTime: "12 min read",
    publishedAt: "2024-09-15",
    featured: false,
  },
  {
    id: "5",
    title: "Performance Optimization Strategies",
    excerpt: "Deep dive into web performance optimization techniques including lazy loading, code splitting, and bundle size reduction.",
    content: "Full article content would go here...",
    category: "Performance",
    readTime: "9 min read",
    publishedAt: "2024-09-01",
    featured: false,
  },
  {
    id: "6",
    title: "Understanding Web Accessibility",
    excerpt: "A practical guide to making your web applications accessible to everyone, following WCAG guidelines and best practices.",
    content: "Full article content would go here...",
    category: "Accessibility",
    readTime: "7 min read",
    publishedAt: "2024-08-20",
    featured: false,
  },
];

const categories = ["All", "React", "CSS", "TypeScript", "Performance", "Accessibility"];

export default function Blog() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured || post.id !== featuredPost?.id);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16 md:pt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Articles about web development, design patterns, and the latest in technology
            </p>
          </div>

          {featuredPost && (
            <Card className="mb-12 overflow-hidden hover-elevate transition-all duration-300 cursor-pointer" data-testid="card-featured-post">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="aspect-[21/9] lg:aspect-auto bg-gradient-to-br from-primary/30 via-accent/20 to-muted/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                  <Badge className="absolute top-6 left-6" data-testid="badge-featured">
                    Featured
                  </Badge>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <Badge variant="secondary" className="text-xs uppercase tracking-wide w-fit mb-4" data-testid={`badge-category-${featuredPost.category.toLowerCase()}`}>
                    {featuredPost.category}
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-base text-muted-foreground mb-6">
                    {featuredPost.excerpt}
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
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {regularPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden hover-elevate transition-all duration-300 group cursor-pointer"
                data-testid={`card-blog-${post.id}`}
              >
                <div className="aspect-video bg-gradient-to-br from-accent/20 via-primary/10 to-muted/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <Badge variant="secondary" className="text-xs uppercase tracking-wide mb-3" data-testid={`badge-category-${post.category.toLowerCase()}-${post.id}`}>
                    {post.category}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
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
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
