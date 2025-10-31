import { Code2, Palette, Database, Smartphone, Globe, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const skills = [
  { name: "Frontend Development", icon: Code2, level: 95 },
  { name: "UI/UX Design", icon: Palette, level: 88 },
  { name: "Backend APIs", icon: Database, level: 90 },
  { name: "Mobile Development", icon: Smartphone, level: 82 },
  { name: "Web Technologies", icon: Globe, level: 93 },
  { name: "Performance Optimization", icon: Zap, level: 87 },
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
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                    <div className="w-full bg-muted rounded-full h-1.5">
                      <div
                        className="bg-primary rounded-full h-1.5 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
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
