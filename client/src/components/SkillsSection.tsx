import { Code2, Database, Sparkles, Brain, Bot, LineChart } from "lucide-react";
import { Card } from "@/components/ui/card";

const skills = [
  { name: "Generative AI", icon: Sparkles, description: "RAG, Prompt Engineering, & LLM Integration" },
  { name: "Machine Learning", icon: Brain, description: "Scikit-learn, Model Evaluation & Deployment" },
  { name: "Python & FastAPI", icon: Code2, description: "Backend API development for AI Services" },
  { name: "RAG & LangChain", icon: Database, description: "Building context-aware AI applications" },
  { name: "Agentic AI", icon: Bot, description: "Building agentic AI applications" },
  { name: "Data Science", icon: LineChart, description: "Pandas, NumPy, & Data Visualization" },
];

export default function SkillsSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A diverse skill set built through years of experience and continuous learning
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <Card
                key={skill.name}
                className="p-6 hover-elevate transition-all duration-300 cursor-pointer"
                data-testid={`card-skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
