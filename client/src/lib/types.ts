
export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    category: string;
    featured: boolean;
    github_link?: string;
    demo_link?: string;
    image_url: string;
    created_at?: string;
}

export interface BlogPost {
    id: string;
    title: { en: string; id: string };
    excerpt: { en: string; id: string };
    content: { en: string; id: string };
    category: string;
    read_time: string;
    published_at: string;
    featured: boolean;
    image_url: string;
    created_at?: string;
}

export interface Experience {
    id: string;
    position: string;
    company: string;
    duration: string;
    description?: string;
}

export interface Education {
    id: string;
    degree: string;
    institution: string;
    year: string;
}

export interface Certification {
    id: string;
    name: string;
    issuer: string;
    year: string;
    link?: string;
}

export interface Award {
    id: string;
    name: string;
    issuer: string;
    year: string;
    description?: string;
}
