import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Bot, User } from "lucide-react";
import { Link } from "wouter";

const sampleMessages = [
  { role: "user", content: "What is your main focus in AI?" },
  { role: "assistant", content: "I focus on Machine Learning and Generative AI, bridging the gap between complex algorithms and practical web applications." },
  { role: "user", content: "Tell me about your latest project, TrainHub." },
  { role: "assistant", content: "TrainHub is an AI-powered workout planner I built using FastAPI and the Gemini API to create personalized schedules." },
];

export default function ChatbotPreview() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-card">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 mb-4">
            <MessageSquare className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">AI Assistant</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chat with my AI assistant to learn more about my experience, skills, and projects
          </p>
        </div>

        <Card className="p-6 md:p-8 mb-8">
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {sampleMessages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                data-testid={`message-${message.role}-${index}`}
              >
                {message.role === 'assistant' && (
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                )}
                <div
                  className={`rounded-xl px-4 py-3 max-w-[80%] ${message.role === 'user'
                      ? 'bg-primary text-white font-medium shadow-sm'
                      : 'bg-muted text-foreground'
                    }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
                {message.role === 'user' && (
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                    <User className="w-4 h-4 text-accent-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>

        <div className="text-center">
          <Link href="/chatbot">
            <Button size="lg" className="rounded-full px-8 py-4 font-bold" data-testid="button-try-chatbot">
              Try the Chatbot
              <MessageSquare className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
