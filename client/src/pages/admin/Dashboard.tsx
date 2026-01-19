
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Plus, Pencil, Trash2 } from 'lucide-react';

// Types
interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    category: string;
    featured: boolean;
    github_link: string;
    demo_link: string;
    image_url: string;
}

interface BlogPost {
    id: string;
    title: { en: string; id: string };
    excerpt: { en: string; id: string };
    content: { en: string; id: string };
    category: string;
    read_time: string;
    published_at: string;
    featured: boolean;
    image_url: string;
}

const Dashboard = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    // Project Form State
    const [isProjectOpen, setIsProjectOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState<Partial<Project>>({});
    // Blog Form State
    const [isBlogOpen, setIsBlogOpen] = useState(false);
    const [currentBlog, setCurrentBlog] = useState<Partial<BlogPost>>({
        title: { en: '', id: '' },
        excerpt: { en: '', id: '' },
        content: { en: '', id: '' },
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        const { data: projectsData } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
        const { data: blogsData } = await supabase.from('blogs').select('*').order('created_at', { ascending: false });

        if (projectsData) setProjects(projectsData);
        if (blogsData) setBlogs(blogsData);
        setLoading(false);
    };

    // --- Project Handlers ---
    const handleSaveProject = async () => {
        const payload = {
            ...currentProject,
            technologies: typeof currentProject.technologies === 'string'
                ? (currentProject.technologies as string).split(',').map((t: string) => t.trim())
                : currentProject.technologies
        };

        if (currentProject.id) {
            await supabase.from('projects').update(payload).eq('id', currentProject.id);
        } else {
            await supabase.from('projects').insert(payload);
        }
        setIsProjectOpen(false);
        fetchData();
    };

    const handleDeleteProject = async (id: string) => {
        if (!confirm('Are you sure?')) return;
        await supabase.from('projects').delete().eq('id', id);
        fetchData();
    };

    const openProjectModal = (project?: Project) => {
        setCurrentProject(project || {
            title: '', description: '', technologies: [], category: '', featured: false, github_link: '', demo_link: '', image_url: ''
        });
        setIsProjectOpen(true);
    };

    // --- Blog Handlers ---
    const handleSaveBlog = async () => {
        if (currentBlog.id) {
            await supabase.from('blogs').update(currentBlog).eq('id', currentBlog.id);
        } else {
            await supabase.from('blogs').insert(currentBlog);
        }
        setIsBlogOpen(false);
        fetchData();
    };

    const handleDeleteBlog = async (id: string) => {
        if (!confirm('Are you sure?')) return;
        await supabase.from('blogs').delete().eq('id', id);
        fetchData();
    };

    const openBlogModal = (blog?: BlogPost) => {
        setCurrentBlog(blog || {
            title: { en: '', id: '' },
            excerpt: { en: '', id: '' },
            content: { en: '', id: '' },
            category: '',
            read_time: '',
            published_at: new Date().toISOString().split('T')[0],
            featured: false,
            image_url: ''
        });
        setIsBlogOpen(true);
    };

    if (loading) return <div className="flex justify-center p-8"><Loader2 className="animate-spin" /></div>;

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

            <Tabs defaultValue="projects">
                <TabsList>
                    <TabsTrigger value="projects">Projects</TabsTrigger>
                    <TabsTrigger value="blogs">Blogs</TabsTrigger>
                </TabsList>

                {/* PROJECTS TAB */}
                <TabsContent value="projects">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Projects List</h2>
                        <Button onClick={() => openProjectModal()}>
                            <Plus className="mr-2 h-4 w-4" /> Add Project
                        </Button>
                    </div>

                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Title</TableHead>
                                    <TableHead>Category</TableHead>
                                    <TableHead>Featured</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {projects.map((project) => (
                                    <TableRow key={project.id}>
                                        <TableCell className="font-medium">{project.title}</TableCell>
                                        <TableCell>{project.category}</TableCell>
                                        <TableCell>{project.featured ? 'Yes' : 'No'}</TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="icon" onClick={() => openProjectModal(project)}>
                                                <Pencil className="h-4 w-4" />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="text-red-500" onClick={() => handleDeleteProject(project.id)}>
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                    <Dialog open={isProjectOpen} onOpenChange={setIsProjectOpen}>
                        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                                <DialogTitle>{currentProject.id ? 'Edit Project' : 'Add Project'}</DialogTitle>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid w-full items-center gap-1.5">
                                    <Label>Title</Label>
                                    <Input value={currentProject.title} onChange={e => setCurrentProject({ ...currentProject, title: e.target.value })} />
                                </div>
                                <div className="grid w-full items-center gap-1.5">
                                    <Label>Description</Label>
                                    <Textarea value={currentProject.description} onChange={e => setCurrentProject({ ...currentProject, description: e.target.value })} />
                                </div>
                                <div className="grid w-full items-center gap-1.5">
                                    <Label>Technologies (comma separated)</Label>
                                    <Input value={Array.isArray(currentProject.technologies) ? currentProject.technologies.join(', ') : currentProject.technologies}
                                        onChange={e => setCurrentProject({ ...currentProject, technologies: e.target.value as any })} />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="grid w-full items-center gap-1.5">
                                        <Label>Category</Label>
                                        <Input value={currentProject.category} onChange={e => setCurrentProject({ ...currentProject, category: e.target.value })} />
                                    </div>
                                    <div className="grid w-full items-center gap-1.5">
                                        <Label>Image URL</Label>
                                        <Input value={currentProject.image_url} onChange={e => setCurrentProject({ ...currentProject, image_url: e.target.value })} />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="grid w-full items-center gap-1.5">
                                        <Label>GitHub Link</Label>
                                        <Input value={currentProject.github_link} onChange={e => setCurrentProject({ ...currentProject, github_link: e.target.value })} />
                                    </div>
                                    <div className="grid w-full items-center gap-1.5">
                                        <Label>Demo Link</Label>
                                        <Input value={currentProject.demo_link} onChange={e => setCurrentProject({ ...currentProject, demo_link: e.target.value })} />
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="featured" checked={currentProject.featured} onChange={e => setCurrentProject({ ...currentProject, featured: e.target.checked })} className="h-4 w-4" />
                                    <Label htmlFor="featured">Featured Project</Label>
                                </div>
                                <Button onClick={handleSaveProject}>Save Project</Button>
                            </div>
                        </DialogContent>
                    </Dialog>
                </TabsContent>

                {/* BLOGS TAB */}
                <TabsContent value="blogs">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Blogs List</h2>
                        <Button onClick={() => openBlogModal()}>
                            <Plus className="mr-2 h-4 w-4" /> Add Blog
                        </Button>
                    </div>

                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Title (EN)</TableHead>
                                    <TableHead>Category</TableHead>
                                    <TableHead>Published</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {blogs.map((blog) => (
                                    <TableRow key={blog.id}>
                                        <TableCell className="font-medium">{blog.title?.en}</TableCell>
                                        <TableCell>{blog.category}</TableCell>
                                        <TableCell>{blog.published_at}</TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="icon" onClick={() => openBlogModal(blog)}>
                                                <Pencil className="h-4 w-4" />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="text-red-500" onClick={() => handleDeleteBlog(blog.id)}>
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>

                    <Dialog open={isBlogOpen} onOpenChange={setIsBlogOpen}>
                        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                                <DialogTitle>{currentBlog.id ? 'Edit Blog' : 'Add Blog'}</DialogTitle>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>Title (EN)</Label>
                                        <Input value={currentBlog.title?.en} onChange={e => setCurrentBlog({ ...currentBlog, title: { ...currentBlog.title!, en: e.target.value } })} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Title (ID)</Label>
                                        <Input value={currentBlog.title?.id} onChange={e => setCurrentBlog({ ...currentBlog, title: { ...currentBlog.title!, id: e.target.value } })} />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>Excerpt (EN)</Label>
                                        <Textarea value={currentBlog.excerpt?.en} onChange={e => setCurrentBlog({ ...currentBlog, excerpt: { ...currentBlog.excerpt!, en: e.target.value } })} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Excerpt (ID)</Label>
                                        <Textarea value={currentBlog.excerpt?.id} onChange={e => setCurrentBlog({ ...currentBlog, excerpt: { ...currentBlog.excerpt!, id: e.target.value } })} />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>Content (EN - HTML)</Label>
                                        <Textarea className="min-h-[200px] font-mono text-xs" value={currentBlog.content?.en} onChange={e => setCurrentBlog({ ...currentBlog, content: { ...currentBlog.content!, en: e.target.value } })} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Content (ID - HTML)</Label>
                                        <Textarea className="min-h-[200px] font-mono text-xs" value={currentBlog.content?.id} onChange={e => setCurrentBlog({ ...currentBlog, content: { ...currentBlog.content!, id: e.target.value } })} />
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="space-y-2">
                                        <Label>Category</Label>
                                        <Input value={currentBlog.category} onChange={e => setCurrentBlog({ ...currentBlog, category: e.target.value })} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Read Time</Label>
                                        <Input value={currentBlog.read_time} onChange={e => setCurrentBlog({ ...currentBlog, read_time: e.target.value })} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Published At</Label>
                                        <Input type="date" value={currentBlog.published_at} onChange={e => setCurrentBlog({ ...currentBlog, published_at: e.target.value })} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>Image URL</Label>
                                    <Input value={currentBlog.image_url} onChange={e => setCurrentBlog({ ...currentBlog, image_url: e.target.value })} />
                                </div>
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="featured-blog" checked={currentBlog.featured} onChange={e => setCurrentBlog({ ...currentBlog, featured: e.target.checked })} className="h-4 w-4" />
                                    <Label htmlFor="featured-blog">Featured Blog</Label>
                                </div>
                                <Button onClick={handleSaveBlog}>Save Blog</Button>
                            </div>
                        </DialogContent>
                    </Dialog>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default Dashboard;
