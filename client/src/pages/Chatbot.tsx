import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, User, Send, Sparkles } from "lucide-react";
import { useState } from "react";

const samplePrompts = [
  "Tell me about your experience with React",
  "What projects have you worked on?",
  "What are your strongest skills?",
  "How can I contact you?",
];

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! I'm an AI assistant that can answer questions about my portfolio, skills, and projects. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const responses = [
        "I have extensive experience with React, including building complex single-page applications with hooks, context, and modern state management solutions.",
        "I've worked on various projects including e-commerce platforms, task management apps, and analytics dashboards. Each project showcases different aspects of my skill set.",
        "My strongest skills include frontend development with React and TypeScript, UI/UX design, and building RESTful APIs with Node.js and Express.",
        "You can reach me through the contact information in my portfolio, or connect with me on LinkedIn, GitHub, or via email.",
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      setMessages(prev => [...prev, { role: "assistant", content: randomResponse }]);
      setIsTyping(false);
    }, 1000);
  };

  const handlePromptClick = (prompt: string) => {
    setInput(prompt);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16 md:pt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 md:py-12 h-[calc(100vh-5rem)] md:h-[calc(100vh-6rem)]">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-full">
            <div className="lg:col-span-1 space-y-6">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-lg font-semibold">AI Assistant</h2>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Ask me anything about my portfolio, skills, or projects. I'm here to help!
                </p>
              </Card>

              <Card className="p-6 hidden lg:block">
                <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">
                  Sample Prompts
                </h3>
                <div className="space-y-2">
                  {samplePrompts.map((prompt, index) => (
                    <button
                      key={index}
                      onClick={() => handlePromptClick(prompt)}
                      className="w-full text-left text-sm p-3 rounded-lg bg-muted/50 hover-elevate active-elevate-2 transition-all"
                      data-testid={`button-prompt-${index}`}
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </Card>
            </div>

            <div className="lg:col-span-3 flex flex-col h-full">
              <Card className="flex-1 flex flex-col overflow-hidden">
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      data-testid={`message-${message.role}-${index}`}
                    >
                      {message.role === 'assistant' && (
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Bot className="w-5 h-5 text-primary" />
                        </div>
                      )}
                      <div
                        className={`rounded-xl px-4 py-3 max-w-[85%] ${
                          message.role === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-foreground'
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{message.content}</p>
                      </div>
                      {message.role === 'user' && (
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                          <User className="w-5 h-5 text-accent-foreground" />
                        </div>
                      )}
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Bot className="w-5 h-5 text-primary" />
                      </div>
                      <div className="rounded-xl px-4 py-3 bg-muted">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 rounded-full bg-muted-foreground animate-pulse" />
                          <div className="w-2 h-2 rounded-full bg-muted-foreground animate-pulse delay-75" />
                          <div className="w-2 h-2 rounded-full bg-muted-foreground animate-pulse delay-150" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="border-t border-border p-4">
                  <div className="flex gap-2">
                    <Input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                      placeholder="Type your message..."
                      className="flex-1"
                      data-testid="input-chat-message"
                    />
                    <Button
                      onClick={handleSend}
                      disabled={!input.trim() || isTyping}
                      data-testid="button-send-message"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
