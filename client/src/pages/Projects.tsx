import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";


import trainhubImg from "@/assets/trainhub.png";
import whatsinnewsImg from "@/assets/whatsinnews.png";
import codegraderImg from "@/assets/codegrader.png";
import myfirstragImg from "@/assets/mybacafile.png";
import flowerclassificationImg from "@/assets/flower.png";
import animeclassificationImg from "@/assets/anime.png";
import heartattackclassificationImg from "@/assets/heart.png";
import housepricepredictionImg from "@/assets/house.png";
import sentimentalanalysisImg from "@/assets/sentimental.png";

const allProjects = [
  {
    id: "1",
    title: "TrainHub",
    description: "Web application designed to help users create personalized weekly workout plans using the power of AI.",
    technologies: ["FastAPI", "Gemini API", "Python"],
    category: "AI Integration",
    featured: true,
    links: {
      github: "https://github.com/TangRmdhn/TrainHub",
      demo: "https://trainhub.web.id"
    },
    imageUrl: trainhubImg,
  },
  {
    id: "2",
    title: "WhatsInNews",
    description: "RAG-based web app that allows users to summarize news articles and chat with the content.",
    technologies: ["OpenAI API", "LangChain", "ChromaDB"],
    category: "AI Integration",
    featured: true,
    links: {
      github: "https://github.com/TangRmdhn/WhatsInNews",
      demo: "https://github.com/TangRmdhn/WhatsInNews"
    },
    imageUrl: whatsinnewsImg,
  },
  {
    id: "3",
    title: "CodeGrader",
    description: "A web application to automatically grade programming assignments using Groq AI.",
    technologies: ["Groq API", "PyPDF", "Streamlit"],
    category: "AI Integration",
    featured: true,
    links: {
      github: "https://github.com/TangRmdhn/CodeGrader",
      demo: "https://penilaikode.streamlit.app"
    },
    imageUrl: codegraderImg,
  },
  {
    id: "4",
    title: "MyFirstRAG",
    description: "First end-to-end implementation project for learning and understanding Retrieval-Augmented Generation (RAG).",
    technologies: ["RAG", "OpenAI API", "Streamlit"],
    category: "AI Integration",
    featured: false,
    links: {
      github: "https://github.com/TangRmdhn/MyFirstRAG/tree/main",
      demo: "https://github.com/TangRmdhn/MyFirstRAG/tree/main"
    },
    imageUrl: myfirstragImg,
  },
  {
    id: "5",
    title: "FlowerClassification",
    description: "Flower classification notebook using transfer learning and deep learning.",
    technologies: ["Transfer Learning", "Deep Learning", "Python"],
    category: "Deep Learning",
    featured: false,
    links: {
      github: "https://github.com/TangRmdhn/FlowersClassification",
      demo: "https://github.com/TangRmdhn/FlowersClassification"
    },
    imageUrl: flowerclassificationImg,
  },
  {
    id: "6",
    title: "AnimeRecomendation",
    description: "Anime recomendation using NLP and Machine Learning.",
    technologies: ["NLP", "Machine Learning", "Python"],
    category: "Machine Learning",
    featured: false,
    links: {
      github: "https://github.com/TangRmdhn/Anime-Recommendation",
      demo: "https://github.com/TangRmdhn/Anime-Recommendation"
    },
    imageUrl: animeclassificationImg,
  },
  {
    id: "7",
    title: "HousePricePrediction",
    description: "House price prediction using Machine Learning.",
    technologies: ["Machine Learning", "Python", "Regression"],
    category: "Machine Learning",
    featured: false,
    links: {
      github: "https://github.com/TangRmdhn/HousePricePrediction/tree/main",
      demo: "https://github.com/TangRmdhn/HousePricePrediction/tree/main"
    },
    imageUrl: housepricepredictionImg,
  },
  {
    id: "8",
    title: "HeartAttackClassification",
    description: "Heart attack classification using Machine Learning.",
    technologies: ["Machine Learning", "Python", "Classification"],
    category: "Machine Learning",
    featured: false,
    links: {
      github: "https://github.com/TangRmdhn/HeartAttackClassification/tree/main",
      demo: "https://github.com/TangRmdhn/HeartAttackClassification/tree/main"
    },
    imageUrl: heartattackclassificationImg,
  },
  {
    id: "9",
    title: "SentimentalAnalysis",
    description: "Sentimental analysis using Machine Learning & NLP.",
    technologies: ["Machine Learning", "Python", "NLP"],
    category: "Machine Learning",
    featured: false,
    links: {
      github: "https://github.com/TangRmdhn/SentimentAnalysis",
      demo: "https://github.com/TangRmdhn/SentimentAnalysis"
    },
    imageUrl: sentimentalanalysisImg,
  },
];



export default function Projects() {
  const filteredProjects = allProjects;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16 md:pt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4">All Projects</h1>
            <p className="text-lg text-muted-foreground ">
              Exploring the frontiers of Generative AI and Machine Learning through practical, problem-solving projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover-elevate transition-all duration-300 group"
                data-testid={`card-project-${project.id}`}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-accent/10 to-muted/20 relative overflow-hidden">
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                  )}
                  {project.featured && (
                    <Badge className="absolute top-4 left-4" data-testid={`badge-featured-${project.id}`}>
                      Featured
                    </Badge>
                  )}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-lg"
                      data-testid={`button-github-${project.links.github}`}
                      onClick={() => window.open(project.links.github, "_blank")}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-lg"
                      data-testid={`button-live-${project.links.demo}`}
                      onClick={() => window.open(project.links.demo, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" data-testid={`badge-tech-${tech.toLowerCase()}-${project.id}`}>
                        {tech}
                      </Badge>
                    ))}
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
