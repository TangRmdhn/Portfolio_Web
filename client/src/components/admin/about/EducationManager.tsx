
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { Education } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

export function EducationManager() {
    const queryClient = useQueryClient();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [formData, setFormData] = useState<Partial<Education>>({});

    const { data: educations, isLoading } = useQuery({
        queryKey: ["educations"],
        queryFn: async () => {
            const { data, error } = await supabase.from("educations").select("*").order("created_at", { ascending: false });
            if (error) throw error;
            return data as Education[];
        },
    });

    const mutation = useMutation({
        mutationFn: async (data: Partial<Education>) => {
            if (editingId) {
                const { error } = await supabase.from("educations").update(data).eq("id", editingId);
                if (error) throw error;
            } else {
                const { error } = await supabase.from("educations").insert(data);
                if (error) throw error;
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["educations"] });
            setIsDialogOpen(false);
            setEditingId(null);
            setFormData({});
        },
    });

    const deleteMutation = useMutation({
        mutationFn: async (id: string) => {
            const { error } = await supabase.from("educations").delete().eq("id", id);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["educations"] });
        },
    });

    return (
        <div className="space-y-4">
            <div className="flex justify-end">
                <Button onClick={() => { setEditingId(null); setFormData({}); setIsDialogOpen(true); }}>
                    <Plus className="mr-2 h-4 w-4" /> Add Education
                </Button>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Degree</TableHead>
                            <TableHead>Institution</TableHead>
                            <TableHead>Year</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading ? (
                            <TableRow><TableCell colSpan={4}>Loading...</TableCell></TableRow>
                        ) : educations?.map((ed) => (
                            <TableRow key={ed.id}>
                                <TableCell>{ed.degree}</TableCell>
                                <TableCell>{ed.institution}</TableCell>
                                <TableCell>{ed.year}</TableCell>
                                <TableCell className="text-right">
                                    <Button variant="ghost" size="icon" onClick={() => { setEditingId(ed.id); setFormData(ed); setIsDialogOpen(true); }}>
                                        <Pencil className="h-4 w-4" />
                                    </Button>
                                    <Button variant="ghost" size="icon" onClick={() => { if (confirm("Delete?")) deleteMutation.mutate(ed.id); }}>
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
                        <DialogTitle>{editingId ? "Edit Education" : "Add Education"}</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="space-y-2">
                            <Label>Degree</Label>
                            <Input
                                value={formData.degree || ""}
                                onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Institution</Label>
                            <Input
                                value={formData.institution || ""}
                                onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Year (e.g., 2024 - Present)</Label>
                            <Input
                                value={formData.year || ""}
                                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                            />
                        </div>
                        <Button onClick={() => mutation.mutate(formData)} disabled={mutation.isPending}>
                            {mutation.isPending ? "Saving..." : "Save"}
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
