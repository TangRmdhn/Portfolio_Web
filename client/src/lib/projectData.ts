import trainhubImg from "@/assets/trainhub.png";
import whatsinnewsImg from "@/assets/whatsinnews.png";
import codegraderImg from "@/assets/codegrader.png";
import myfirstragImg from "@/assets/mybacafile.png";
import flowerclassificationImg from "@/assets/flower.png";
import animeclassificationImg from "@/assets/anime.png";
import heartattackclassificationImg from "@/assets/heart.png";
import housepricepredictionImg from "@/assets/house.png";
import sentimentalanalysisImg from "@/assets/sentimental.png";

export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    category: string;
    featured: boolean
    links: {
        github: string;
        demo: string;
    };
    imageUrl: string;
}

export const projectData: Project[] = [
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
        featured: false,
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
