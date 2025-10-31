import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectHighlights from "@/components/ProjectHighlights";
import BlogHighlights from "@/components/BlogHighlights";
import ChatbotPreview from "@/components/ChatbotPreview";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectHighlights />
        <BlogHighlights />
        <ChatbotPreview />
      </main>
      <Footer />
    </div>
  );
}
