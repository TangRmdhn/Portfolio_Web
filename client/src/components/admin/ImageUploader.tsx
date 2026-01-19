
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';

interface ImageUploaderProps {
    onUpload: (url: string) => void;
    defaultValue?: string;
}

export function ImageUploader({ onUpload, defaultValue }: ImageUploaderProps) {
    const [uploading, setUploading] = useState(false);
    const [preview, setPreview] = useState<string | undefined>(defaultValue);

    const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        try {
            setUploading(true);
            if (!event.target.files || event.target.files.length === 0) {
                throw new Error('You must select an image to upload.');
            }

            const file = event.target.files[0];
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random()}.${fileExt}`;
            const filePath = `${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from('portfolio')
                .upload(filePath, file);

            if (uploadError) {
                throw uploadError;
            }

            const { data } = supabase.storage.from('portfolio').getPublicUrl(filePath);

            setPreview(data.publicUrl);
            onUpload(data.publicUrl);
        } catch (error) {
            alert((error as Error).message);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-4">
                {preview && (
                    <img
                        src={preview}
                        alt="Preview"
                        className="w-24 h-24 object-cover rounded-md border"
                    />
                )}
                <div className="w-full max-w-sm items-center gap-1.5">
                    <Input
                        type="file"
                        accept="image/*"
                        onChange={handleUpload}
                        disabled={uploading}
                    />
                </div>
            </div>
            {uploading && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Loader2 className="h-4 w-4 animate-spin" /> Uploading...
                </div>
            )}
        </div>
    );
}
