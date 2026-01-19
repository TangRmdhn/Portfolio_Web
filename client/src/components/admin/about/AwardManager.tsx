
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { Award } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

export function AwardManager() {
    const queryClient = useQueryClient();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [formData, setFormData] = useState<Partial<Award>>({});

    const { data: awards, isLoading } = useQuery({
        queryKey: ["awards"],
        queryFn: async () => {
            const { data, error } = await supabase.from("awards").select("*").order("created_at", { ascending: false });
            if (error) throw error;
            return data as Award[];
        },
    });

    const mutation = useMutation({
        mutationFn: async (data: Partial<Award>) => {
            if (editingId) {
                const { error } = await supabase.from("awards").update(data).eq("id", editingId);
                if (error) throw error;
            } else {
                const { error } = await supabase.from("awards").insert(data);
                if (error) throw error;
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["awards"] });
            setIsDialogOpen(false);
            setEditingId(null);
            setFormData({});
        },
    });

    const deleteMutation = useMutation({
        mutationFn: async (id: string) => {
            const { error } = await supabase.from("awards").delete().eq("id", id);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["awards"] });
        },
    });

    return (
        <div className="space-y-4">
            <div className="flex justify-end">
                <Button onClick={() => { setEditingId(null); setFormData({}); setIsDialogOpen(true); }}>
                    <Plus className="mr-2 h-4 w-4" /> Add Award
                </Button>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Award Name</TableHead>
                            <TableHead>Issuer</TableHead>
                            <TableHead>Year</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading ? (
                            <TableRow><TableCell colSpan={4}>Loading...</TableCell></TableRow>
                        ) : awards?.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.issuer}</TableCell>
                                <TableCell>{item.year}</TableCell>
                                <TableCell className="text-right">
                                    <Button variant="ghost" size="icon" onClick={() => { setEditingId(item.id); setFormData(item); setIsDialogOpen(true); }}>
                                        <Pencil className="h-4 w-4" />
                                    </Button>
                                    <Button variant="ghost" size="icon" onClick={() => { if (confirm("Delete?")) deleteMutation.mutate(item.id); }}>
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
                        <DialogTitle>{editingId ? "Edit Award" : "Add Award"}</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="space-y-2">
                            <Label>Name</Label>
                            <Input
                                value={formData.name || ""}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Issuer</Label>
                            <Input
                                value={formData.issuer || ""}
                                onChange={(e) => setFormData({ ...formData, issuer: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Year</Label>
                            <Input
                                value={formData.year || ""}
                                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Description</Label>
                            <Textarea
                                value={formData.description || ""}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
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
