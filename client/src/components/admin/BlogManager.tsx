
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { BlogPost } from "@/lib/types";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2 } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ImageUploader } from "./ImageUploader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function BlogManager() {
    const { toast } = useToast();
    const queryClient = useQueryClient();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);

    // --- Queries ---
    const { data: blogs, isLoading } = useQuery({
        queryKey: ["blogs"],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("blogs")
                .select("*")
                .order("published_at", { ascending: false });
            if (error) throw error;
            return data as BlogPost[];
        },
    });

    // --- Mutations ---
    const toggleFeaturedMutation = useMutation({
        mutationFn: async ({ id, featured }: { id: string; featured: boolean }) => {
            const { error } = await supabase
                .from("blogs")
                .update({ featured })
                .eq("id", id);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["blogs"] });
            toast({ title: "Success", description: "Updated featured status" });
        },
        onError: (error) => {
            toast({ title: "Error", description: error.message, variant: "destructive" });
        },
    });

    const deleteBlogMutation = useMutation({
        mutationFn: async (id: string) => {
            const { error } = await supabase.from("blogs").delete().eq("id", id);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["blogs"] });
            toast({ title: "Success", description: "Blog deleted" });
        },
    });

    const saveBlogMutation = useMutation({
        mutationFn: async (blog: Partial<BlogPost>) => {
            if (editingBlog) {
                // Update
                const { error } = await supabase
                    .from("blogs")
                    .update(blog)
                    .eq("id", editingBlog.id);
                if (error) throw error;
            } else {
                // Insert
                const { error } = await supabase.from("blogs").insert(blog);
                if (error) throw error;
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["blogs"] });
            setIsDialogOpen(false);
            setEditingBlog(null);
            toast({ title: "Success", description: "Blog saved successfully" });
        },
        onError: (error) => {
            toast({ title: "Error", description: error.message, variant: "destructive" });
        },
    });

    // --- Handlers ---
    const handleDelete = (id: string) => {
        if (confirm("Are you sure you want to delete this blog?")) {
            deleteBlogMutation.mutate(id);
        }
    };

    const [formData, setFormData] = useState<Partial<BlogPost>>({
        featured: false,
        title: { en: "", id: "" },
        excerpt: { en: "", id: "" },
        content: { en: "", id: "" },
    });

    const openDialog = (blog?: BlogPost) => {
        if (blog) {
            setEditingBlog(blog);
            setFormData(blog);
        } else {
            setEditingBlog(null);
            setFormData({
                featured: false,
                title: { en: "", id: "" },
                excerpt: { en: "", id: "" },
                content: { en: "", id: "" },
                image_url: ""
            });
        }
        setIsDialogOpen(true);
    }

    const handleSave = () => {
        saveBlogMutation.mutate(formData);
    }

    const updateLangField = (field: 'title' | 'excerpt' | 'content', lang: 'en' | 'id', value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: {
                ...prev[field],
                [lang]: value
            }
        }));
    }

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Blogs</h2>
                <Button onClick={() => openDialog()}>
                    <Plus className="mr-2 h-4 w-4" /> Add New
                </Button>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Image</TableHead>
                            <TableHead>Title (EN)</TableHead>
                            <TableHead>Published</TableHead>
                            <TableHead>Featured</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading ? (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center h-24">Loading...</TableCell>
                            </TableRow>
                        ) : blogs?.map((blog) => (
                            <TableRow key={blog.id}>
                                <TableCell>
                                    <img src={blog.image_url || "https://placehold.co/50"} alt="Blog" className="w-10 h-10 object-cover rounded" />
                                </TableCell>
                                <TableCell className="font-medium">{blog.title.en}</TableCell>
                                <TableCell>{new Date(blog.published_at).toLocaleDateString()}</TableCell>
                                <TableCell>
                                    <Switch
                                        checked={blog.featured}
                                        onCheckedChange={(checked) =>
                                            toggleFeaturedMutation.mutate({ id: blog.id, featured: checked })
                                        }
                                    />
                                </TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end gap-2">
                                        <Button variant="ghost" size="icon" onClick={() => openDialog(blog)}>
                                            <Pencil className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" onClick={() => handleDelete(blog.id)}>
                                            <Trash2 className="h-4 w-4 text-red-500" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>{editingBlog ? "Edit Blog" : "Add New Blog"}</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">

                        <Tabs defaultValue="en" className="w-full">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="en">English (EN)</TabsTrigger>
                                <TabsTrigger value="id">Bahasa Indonesia (ID)</TabsTrigger>
                            </TabsList>

                            <TabsContent value="en" className="space-y-4 pt-4">
                                <div className="space-y-2">
                                    <Label>Title (EN)</Label>
                                    <Input
                                        value={formData.title?.en || ""}
                                        onChange={(e) => updateLangField('title', 'en', e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Excerpt (EN)</Label>
                                    <Textarea
                                        rows={3}
                                        value={formData.excerpt?.en || ""}
                                        onChange={(e) => updateLangField('excerpt', 'en', e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Content (EN) - HTML Support</Label>
                                    <Textarea
                                        rows={10}
                                        className="font-mono text-sm"
                                        value={formData.content?.en || ""}
                                        onChange={(e) => updateLangField('content', 'en', e.target.value)}
                                    />
                                    <p className="text-xs text-muted-foreground">Note: Basic Textarea used due to installation issues with react-quill. Works with HTML input.</p>
                                </div>
                            </TabsContent>

                            <TabsContent value="id" className="space-y-4 pt-4">
                                <div className="space-y-2">
                                    <Label>Judul (ID)</Label>
                                    <Input
                                        value={formData.title?.id || ""}
                                        onChange={(e) => updateLangField('title', 'id', e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Ringkasan (ID)</Label>
                                    <Textarea
                                        rows={3}
                                        value={formData.excerpt?.id || ""}
                                        onChange={(e) => updateLangField('excerpt', 'id', e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Konten (ID) - HTML Support</Label>
                                    <Textarea
                                        rows={10}
                                        className="font-mono text-sm"
                                        value={formData.content?.id || ""}
                                        onChange={(e) => updateLangField('content', 'id', e.target.value)}
                                    />
                                </div>
                            </TabsContent>
                        </Tabs>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Category</Label>
                                <Input
                                    value={formData.category || ""}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Read Time</Label>
                                <Input
                                    value={formData.read_time || ""}
                                    onChange={(e) => setFormData({ ...formData, read_time: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Published Date</Label>
                                <Input
                                    type="date"
                                    value={formData.published_at || ""}
                                    onChange={(e) => setFormData({ ...formData, published_at: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <ImageUploader
                                    defaultValue={formData.image_url}
                                    onUpload={(url) => setFormData({ ...formData, image_url: url })}
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <Label>Featured?</Label>
                            <Switch
                                checked={formData.featured || false}
                                onCheckedChange={(checked) => setFormData({ ...formData, featured: checked })}
                            />
                        </div>

                        <div className="flex justify-end gap-2 mt-4">
                            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                            <Button onClick={handleSave}>Save Blog</Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
