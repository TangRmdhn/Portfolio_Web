import { useRoute } from "wouter";
import { blogPosts } from "@/lib/blogData";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

export default function BlogPost() {
    const [match, params] = useRoute("/blog/:id");
    const { t, i18n } = useTranslation();
    const currentLang = (i18n.language === 'id' ? 'id' : 'en') as 'en' | 'id';

    // If we are not on the correct route (shouldn't happen if properly routed), return null
    if (!match) return null;

    const post = blogPosts.find((p) => p.id === params.id);

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col">
                <Navigation />
                <main className="flex-1 flex flex-col items-center justify-center pt-16">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl font-bold">{t('blog.postNotFound')}</h1>
                        <p className="text-muted-foreground text-lg font-medium" style={{ marginBottom: "1rem" }}>{t('blog.postNotFoundDescription')}</p>
                        <Link href="/blog" className="mt-4">
                            <Button>{t('blog.backToBlog')}</Button>
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1 pt-16 md:pt-20">
                <article className="max-w-4xl mx-auto px-6 md:px-8 py-12">
                    {/* Back button */}
                    <Link href="/blog">
                        <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all gap-2">
                            <ArrowLeft className="h-4 w-4" /> {t('blog.backToBlog')}
                        </Button>
                    </Link>

                    {/* Header */}
                    <div className="mb-8">
                        <Badge variant="secondary" className="mb-4">
                            {post.category}
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6 leading-tight">
                            {post.title[currentLang]}
                        </h1>
                        <div className="flex items-center gap-6 text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="aspect-[21/9] w-full bg-muted rounded-xl overflow-hidden mb-12 relative">
                        {post.img ? (
                            <img
                                src={post.img}
                                alt={post.title[currentLang]}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <>
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-muted/20" />
                                {/* Decorative element to make it look less empty */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                                    <span className="text-9xl font-serif font-bold text-foreground">
                                        {post.category.charAt(0)}
                                    </span>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Content */}
                    <div
                        className="prose prose-lg dark:prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: post.content[currentLang] }}
                    />
                </article>
            </main>
            <Footer />
        </div>
    );
}
