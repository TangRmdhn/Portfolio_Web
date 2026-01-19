
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectManager } from "../../components/admin/ProjectManager";
import { BlogManager } from "../../components/admin/BlogManager";
import { AboutManager } from "../../components/admin/AboutManager";

export default function Dashboard() {
    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
            <Tabs defaultValue="projects" className="w-full">
                <TabsList className="mb-4">
                    <TabsTrigger value="projects">Projects</TabsTrigger>
                    <TabsTrigger value="blogs">Blogs</TabsTrigger>
                    <TabsTrigger value="profile">Profile</TabsTrigger>
                </TabsList>
                <TabsContent value="projects">
                    <ProjectManager />
                </TabsContent>
                <TabsContent value="blogs">
                    <BlogManager />
                </TabsContent>
                <TabsContent value="profile">
                    <AboutManager />
                </TabsContent>
            </Tabs>
        </div>
    );
}
