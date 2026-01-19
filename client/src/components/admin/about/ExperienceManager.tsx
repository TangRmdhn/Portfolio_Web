
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { Experience } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Assuming you have this or use standard textarea
import { Plus, Pencil, Trash2 } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Label } from "@/components/ui/label";

export function ExperienceManager() {
    const queryClient = useQueryClient();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [formData, setFormData] = useState<Partial<Experience>>({});

    const { data: experiences, isLoading } = useQuery({
        queryKey: ["experiences"],
        queryFn: async () => {
            const { data, error } = await supabase
                .from("experiences")
                .select("*")
                .order("created_at", { ascending: false });
            if (error) throw error;
            return data as Experience[];
        },
    });

    const mutation = useMutation({
        mutationFn: async (data: Partial<Experience>) => {
            if (editingId) {
                const { error } = await supabase
                    .from("experiences")
                    .update(data)
                    .eq("id", editingId);
                if (error) throw error;
            } else {
                const { error } = await supabase.from("experiences").insert(data);
                if (error) throw error;
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["experiences"] });
            setIsDialogOpen(false);
            setEditingId(null);
            setFormData({});
        },
    });

    const deleteMutation = useMutation({
        mutationFn: async (id: string) => {
            const { error } = await supabase.from("experiences").delete().eq("id", id);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["experiences"] });
        },
    });

    const handleEdit = (item: Experience) => {
        setEditingId(item.id);
        setFormData(item);
        setIsDialogOpen(true);
    };

    const handleDelete = (id: string) => {
        if (confirm("Delete this experience?")) {
            deleteMutation.mutate(id);
        }
    };

    const handleSave = () => {
        mutation.mutate(formData);
    };

    return (
        <div className="space-y-4">
            <div className="flex justify-end">
                <Button onClick={() => { setEditingId(null); setFormData({}); setIsDialogOpen(true); }}>
                    <Plus className="mr-2 h-4 w-4" /> Add Experience
                </Button>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Position</TableHead>
                            <TableHead>Company</TableHead>
                            <TableHead>Duration</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading ? (
                            <TableRow><TableCell colSpan={4}>Loading...</TableCell></TableRow>
                        ) : experiences?.map((ex) => (
                            <TableRow key={ex.id}>
                                <TableCell>{ex.position}</TableCell>
                                <TableCell>{ex.company}</TableCell>
                                <TableCell>{ex.duration}</TableCell>
                                <TableCell className="text-right">
                                    <Button variant="ghost" size="icon" onClick={() => handleEdit(ex)}>
                                        <Pencil className="h-4 w-4" />
                                    </Button>
                                    <Button variant="ghost" size="icon" onClick={() => handleDelete(ex.id)}>
                                        <Trash2 className="h-4 w-4 text-red-500" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{editingId ? "Edit Experience" : "Add Experience"}</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="space-y-2">
                            <Label>Position</Label>
                            <Input
                                value={formData.position || ""}
                                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Company</Label>
                            <Input
                                value={formData.company || ""}
                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Duration</Label>
                            <Input
                                value={formData.duration || ""}
                                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Description</Label>
                            <Textarea
                                value={formData.description || ""}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            />
                        </div>
                        <Button onClick={handleSave} disabled={mutation.isPending}>
                            {mutation.isPending ? "Saving..." : "Save"}
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
