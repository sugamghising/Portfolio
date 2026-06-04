import SectionTitle from "../common/SectionTitle";
import { bio, skills, education, softSkills, workExperience } from "@/data/about";
import EducationCard from "../about/EducationCard";
import ExperienceTimeline from "../about/ExperienceTimeline";
import { Card, CardContent } from "../ui/card";
import { User, GraduationCap, Briefcase, Code2, Heart, ShieldCheck, Globe, Database, Terminal, Wrench } from "lucide-react";

const AboutSection = () => {
  const skillCategories = {
    Frontend: skills.filter((s) => s.category === "frontend"),
    Backend: skills.filter((s) => s.category === "backend"),
    Database: skills.filter((s) => s.category === "database"),
    Tools: skills.filter((s) => s.category === "tools"),
  };

  return (
    <section
      id="about"
      className="py-12 animate-in fade-in slide-in-from-bottom-4 duration-700"
    >
      <SectionTitle>About Me</SectionTitle>

      {/* Professional Bio */}
      <div className="mb-8">
        <Card className="border">
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

      {/* Experience */}
      {workExperience.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-semibold">Experience</h3>
          </div>
          <ExperienceTimeline experiences={workExperience} />
        </div>
      )}

      {/* Education */}
      <div className="mb-8">
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

      {/* Engineering Philosophy - NEW */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-6">
          <ShieldCheck className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-semibold">Engineering Philosophy</h3>
        </div>
        <Card className="border">
          <CardContent className="p-6">
            <p className="text-muted-foreground leading-relaxed">
              I don't just build features; I architect systems. My approach is rooted in three non-negotiables:
              <span className="block mt-4 font-medium text-foreground">
                • Type-Safety as a Shield: Strict TypeScript and Zod validation to eliminate runtime crashes.
              </span>
              <span className="block mt-2 font-medium text-foreground">
                • Performance-First Mindset: Query optimization and strategic caching as a foundation, not an afterthought.
              </span>
              <span className="block mt-2 font-medium text-foreground">
                • Deployability: Containerized environments (Docker) and OpenAPI documentation for reliable, scalable deployments.
              </span>
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Technical Arsenal */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-8">
          <Code2 className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-semibold">Technical Arsenal</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(skillCategories).map(([category, catSkills]) => {
            const icons: Record<string, typeof Code2> = {
              Frontend: Globe,
              Backend: Terminal,
              Database,
              Tools: Wrench,
            };
            const Icon = icons[category] || Code2;
            return (
              <div
                key={category}
                className="group relative rounded-xl border bg-card transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 overflow-hidden"
              >
                <div className="h-1.5 bg-gradient-to-r from-primary/60 to-primary/20" />
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold uppercase tracking-wider">
                      {category}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {catSkills.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground border border-border transition-colors duration-200 hover:border-primary/40"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="mb-8">
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
    </section>
  );
};

export default AboutSection;