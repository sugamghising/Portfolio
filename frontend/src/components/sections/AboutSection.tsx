import SectionTitle from "../common/SectionTitle";
import { bio, skills, education, softSkills } from "@/data/about";
import SkillBar from "../about/SkillBar";
import EducationCard from "../about/EducationCard";
// import CertificationCard from "../about/CertificationCard";
import { Card, CardContent } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { User, GraduationCap, Code, Heart } from "lucide-react";

const AboutSection = () => {
  const skillCategories = {
    frontend: skills.filter((s) => s.category === "frontend"),
    backend: skills.filter((s) => s.category === "backend"),
    database: skills.filter((s) => s.category === "database"),
    tools: skills.filter((s) => s.category === "tools"),
  };

  return (
    <section
      id="about"
      className="py-20 animate-in fade-in slide-in-from-bottom-4 duration-700"
    >
      <SectionTitle>About Me</SectionTitle>

      {/* Professional Bio */}
      <div className="mb-12">
        <Card className="border-2">
          <CardContent className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-full bg-primary/10">
                <User className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4">
                  Professional Background
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-base leading-relaxed">
                    {bio.professional}
                  </p>
                  <p className="text-base leading-relaxed">{bio.background}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Education */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <GraduationCap className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-semibold">Education</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {education.map((edu) => (
            <EducationCard key={edu.id} education={edu} />
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <Code className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-semibold">Technical Skills</h3>
        </div>

        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="database">Database</TabsTrigger>
            {/* <TabsTrigger value="tools">Tools</TabsTrigger> */}
          </TabsList>

          <TabsContent value="frontend" className="space-y-4">
            <Card>
              <CardContent className="p-6">
                {skillCategories.frontend.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="backend" className="space-y-4">
            <Card>
              <CardContent className="p-6">
                {skillCategories.backend.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="database" className="space-y-4">
            <Card>
              <CardContent className="p-6">
                {skillCategories.database.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tools" className="space-y-4">
            <Card>
              <CardContent className="p-6">
                {skillCategories.tools.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Soft Skills */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <Heart className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-semibold">Soft Skills</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {softSkills.map((skill) => (
            <Card
              key={skill.name}
              className="hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-4 text-center">
                <h4 className="font-semibold mb-1">{skill.name}</h4>
                {skill.description && (
                  <p className="text-xs text-muted-foreground">
                    {skill.description}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Certifications */}
      {/* <div className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <Award className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-semibold">Certifications</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <CertificationCard key={cert.id} certification={cert} />
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default AboutSection;
