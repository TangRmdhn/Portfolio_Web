import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Award, Mail, Linkedin, Github, Phone, GraduationCap, Briefcase, Calendar } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { Experience, Education, Certification, Award as AwardType } from "@/lib/types";

export default function About() {
    const { data: experiences } = useQuery({
        queryKey: ["experiences"],
        queryFn: async () => {
            const { data } = await supabase.from("experiences").select("*").order("created_at", { ascending: false });
            return data as Experience[] || [];
        },
    });

    const { data: educations } = useQuery({
        queryKey: ["educations"],
        queryFn: async () => {
            const { data } = await supabase.from("educations").select("*").order("created_at", { ascending: false });
            return data as Education[] || [];
        },
    });

    const { data: certifications } = useQuery({
        queryKey: ["certifications"],
        queryFn: async () => {
            const { data } = await supabase.from("certifications").select("*").order("created_at", { ascending: false });
            return data as Certification[] || [];
        },
    });

    const { data: awards } = useQuery({
        queryKey: ["awards"],
        queryFn: async () => {
            const { data } = await supabase.from("awards").select("*").order("created_at", { ascending: false });
            return data as AwardType[] || [];
        },
    });

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
            <Navigation />

            <main className="pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto space-y-16 md:space-y-20">
                {/* Header Section */}
                <section className="space-y-6 text-center max-w-3xl mx-auto">
                    <h1 className="text-3xl md:text-5xl font-bold font-serif">About Me</h1>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        My journey in Artificial Intelligence and Software Engineering.
                    </p>
                </section>

                {/* Bio Section */}
                <section className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-8 md:space-y-10">
                        <h2 className="text-3xl md:text-4xl font-bold font-serif">Who I Am</h2>
                        <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                            <p>
                                I am Bintang Ramadhan, an aspiring AI Engineer driven by the potential of Generative AI and Machine Learning. My focus goes beyond theory, I love building intelligent systems that solve real-world problems.
                            </p>
                            <p>
                                With a strong foundation in Python and the TensorFlow ecosystem, I specialize in developing scalable solutions involving Deep Learning, Computer Vision, and RAG (Retrieval-Augmented Generation). Whether it's fine-tuning LLMs or building API-driven applications with FastAPI, I aim to deliver software that creates tangible value.
                            </p>
                            <p>
                                Currently, I am actively seeking internship opportunities or challenging collaborations where I can apply my skills, learn from experienced professionals, and contribute to innovative projects.
                            </p>
                        </div>
                    </div>
                    <div className="bg-accent/50 rounded-2xl p-6 md:p-8 border border-border/50">
                        <h3 className="text-lg md:text-xl font-semibold mb-4">Quick Facts</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-primary rounded-full" />
                                <span>Based in Indonesia</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-primary rounded-full" />
                                <span>Focus: GenAI & Large Language Models</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-primary rounded-full" />
                                <span>Open to Internship / Junior Position</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Education & Experience Section */}
                <section className="grid md:grid-cols-2 gap-6 md:gap-8">
                    {/* Education */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-primary/10 rounded-lg">
                                <GraduationCap className="w-6 h-6 text-primary" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold font-serif">Education</h2>
                        </div>
                        {educations?.map((edu) => (
                            <Card key={edu.id} className="bg-card hover:border-primary/50 transition-colors">
                                <CardContent className="p-6 space-y-4">
                                    <div>
                                        <h3 className="text-xl font-semibold">{edu.degree}</h3>
                                        <p className="text-primary font-medium">
                                            {edu.institution}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                        <Calendar className="w-4 h-4" />
                                        <span>{edu.year}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Experience - FIXED: Added mt-12 for mobile spacing */}
                    <div className="space-y-6 mt-12 md:mt-0">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-primary/10 rounded-lg">
                                <Briefcase className="w-6 h-6 text-primary" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold font-serif">Experience</h2>
                        </div>
                        {experiences?.map((exp) => (
                            <Card key={exp.id} className="bg-card hover:border-primary/50 transition-colors">
                                <CardContent className="p-6 space-y-4">
                                    <div>
                                        <h3 className="text-xl font-semibold">{exp.position}</h3>
                                        <p className="text-primary font-medium">{exp.company}</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                        <Calendar className="w-4 h-4" />
                                        <span>{exp.duration}</span>
                                    </div>
                                    <p className="text-muted-foreground">
                                        {exp.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Certifications Section */}
                <section className="space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-center">Certifications</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {certifications?.map((cert) => (
                            <Card key={cert.id} className="bg-card hover:border-primary/50 transition-colors">
                                <CardContent className="p-6 flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                                        <Award className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg md:text-xl font-semibold mb-1 leading-tight">{cert.name}</h3>
                                        <p className="text-sm md:text-base text-muted-foreground">{cert.issuer} • {cert.year}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Awards Section */}
                <section className="space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-center">Awards & Achievements</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {awards?.map((award) => (
                            <Card key={award.id} className="bg-card hover:border-primary/50 transition-colors">
                                <CardContent className="p-6 flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                                        <Trophy className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg md:text-xl font-semibold mb-1 leading-tight">{award.name}</h3>
                                        <p className="text-sm md:text-base text-muted-foreground">{award.description}</p>
                                        <p className="text-xs text-muted-foreground mt-1">{award.issuer} • {award.year}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Contact Section */}
                <section className="text-center space-y-8 py-12 bg-accent/30 rounded-3xl border border-border/50">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif">Let's Connect</h2>
                    <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto px-4">
                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>
                    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 px-6">
                        <a href="mailto:bintangramadhan0710@gmail.com" className="w-full sm:w-auto">
                            <Button size="lg" className="gap-2 w-full sm:w-auto">
                                <Mail className="w-4 h-4" />
                                Email Me
                            </Button>
                        </a>
                        <a href="https://wa.me/62889638790525" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                            <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                                <Phone className="w-4 h-4" />
                                +62 889-638-790-525
                            </Button>
                        </a>
                        <a href="https://www.linkedin.com/in/tang-ramadhan/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                            <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                                <Linkedin className="w-4 h-4" />
                                LinkedIn
                            </Button>
                        </a>
                        <a href="https://github.com/TangRmdhn" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                            <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                                <Github className="w-4 h-4" />
                                GitHub
                            </Button>
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}