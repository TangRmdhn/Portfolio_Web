
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExperienceManager } from "./about/ExperienceManager";
import { EducationManager } from "./about/EducationManager";
import { CertificationManager } from "./about/CertificationManager";
import { AwardManager } from "./about/AwardManager";

export function AboutManager() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Profile Management</h2>
            </div>

            <Tabs defaultValue="experience" className="w-full">
                <TabsList>
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="certifications">Certifications</TabsTrigger>
                    <TabsTrigger value="awards">Awards</TabsTrigger>
                </TabsList>

                <TabsContent value="experience" className="mt-4">
                    <ExperienceManager />
                </TabsContent>
                <TabsContent value="education" className="mt-4">
                    <EducationManager />
                </TabsContent>
                <TabsContent value="certifications" className="mt-4">
                    <CertificationManager />
                </TabsContent>
                <TabsContent value="awards" className="mt-4">
                    <AwardManager />
                </TabsContent>
            </Tabs>
        </div>
    );
}
