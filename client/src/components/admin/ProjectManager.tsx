
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { Project } from "@/lib/types";
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
import { useToast } from "@/hooks/use-toast"; // Assuming toast exists
import { ImageUploader } from "./ImageUploader";

export function ProjectManager() {
    const { toast } = useToast();
    const queryClient = useQueryClient();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editingProject, setEditingProject] = useState<Project | null>(null);

    // --- Queries ---
    const { data: projects, isLoading } = useQuery({
        queryKey: ["projects"],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("projects")
                .select("*")
                .order("created_at", { ascending: false });
            if (error) throw error;
            return data as Project[];
        },
    });

    // --- Mutations ---
    const toggleFeaturedMutation = useMutation({
        mutationFn: async ({ id, featured }: { id: string; featured: boolean }) => {
            const { error } = await supabase
                .from("projects")
                .update({ featured })
                .eq("id", id);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["projects"] });
            toast({ title: "Success", description: "Updated featured status" });
        },
        onError: (error) => {
            toast({ title: "Error", description: error.message, variant: "destructive" });
        },
    });

    const deleteProjectMutation = useMutation({
        mutationFn: async (id: string) => {
            const { error } = await supabase.from("projects").delete().eq("id", id);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["projects"] });
            toast({ title: "Success", description: "Project deleted" });
        },
    });

    const saveProjectMutation = useMutation({
        mutationFn: async (project: Partial<Project>) => {
            if (editingProject) {
                // Update
                const { error } = await supabase
                    .from("projects")
                    .update(project)
                    .eq("id", editingProject.id);
                if (error) throw error;
            } else {
                // Insert
                const { error } = await supabase.from("projects").insert(project);
                if (error) throw error;
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["projects"] });
            setIsDialogOpen(false);
            setEditingProject(null);
            toast({ title: "Success", description: "Project saved successfully" });
        },
        onError: (error) => {
            toast({ title: "Error", description: error.message, variant: "destructive" });
        },
    });


    // --- Handlers ---
    const handleDelete = (id: string) => {
        if (confirm("Are you sure you want to delete this project?")) {
            deleteProjectMutation.mutate(id);
        }
    };

    // Re-implementing Form using state for simpler handling of arrays and images
    const [formData, setFormData] = useState<Partial<Project>>({ featured: false });

    // Reset form when dialog opens
    const openDialog = (project?: Project) => {
        if (project) {
            setEditingProject(project);
            setFormData(project);
        } else {
            setEditingProject(null);
            setFormData({ featured: false, technologies: [], image_url: "" });
        }
        setIsDialogOpen(true);
    }

    const handleSave = () => {
        saveProjectMutation.mutate({
            ...formData,
            // technologies is already array in state
        });
    }

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Projects</h2>
                <Button onClick={() => openDialog()}>
                    <Plus className="mr-2 h-4 w-4" /> Add New
                </Button>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Image</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Featured</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading ? (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center h-24">Loading...</TableCell>
                            </TableRow>
                        ) : projects?.map((project) => (
                            <TableRow key={project.id}>
                                <TableCell>
                                    <img src={project.image_url || "https://placehold.co/50"} alt={project.title} className="w-10 h-10 object-cover rounded" />
                                </TableCell>
                                <TableCell className="font-medium">{project.title}</TableCell>
                                <TableCell>{project.category}</TableCell>
                                <TableCell>
                                    <Switch
                                        checked={project.featured}
                                        onCheckedChange={(checked) =>
                                            toggleFeaturedMutation.mutate({ id: project.id, featured: checked })
                                        }
                                    />
                                </TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end gap-2">
                                        <Button variant="ghost" size="icon" onClick={() => openDialog(project)}>
                                            <Pencil className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" onClick={() => handleDelete(project.id)}>
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
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>{editingProject ? "Edit Project" : "Add New Project"}</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Title</Label>
                                <Input
                                    value={formData.title || ""}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Category</Label>
                                <Input
                                    value={formData.category || ""}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label>Description</Label>
                            <Textarea
                                value={formData.description || ""}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label>Technologies (comma separated)</Label>
                            <Input
                                value={formData.technologies?.join(", ") || ""}
                                onChange={(e) => setFormData({ ...formData, technologies: e.target.value.split(",").map(s => s.trim()) })}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>GitHub Link</Label>
                                <Input
                                    value={formData.github_link || ""}
                                    onChange={(e) => setFormData({ ...formData, github_link: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Demo Link</Label>
                                <Input
                                    value={formData.demo_link || ""}
                                    onChange={(e) => setFormData({ ...formData, demo_link: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label>Image</Label>
                            <ImageUploader
                                defaultValue={formData.image_url}
                                onUpload={(url) => setFormData({ ...formData, image_url: url })}
                            />
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
                            <Button onClick={handleSave}>Save Project</Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
