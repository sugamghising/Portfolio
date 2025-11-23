import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] h-full flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{project.title}</h3>
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <p className="text-sm mb-3 text-muted-foreground grow">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t: string) => (
            <span 
              key={t} 
              className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground font-medium"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-2 mt-auto">
          {project.repo && (
            <a 
              href={project.repo} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`View ${project.title} repository`}
            >
              <Button size="sm" variant="outline" className="transition-transform hover:scale-105">
                <Github className="h-4 w-4 mr-2" />
                Repo
              </Button>
            </a>
          )}
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`View ${project.title} demo`}
            >
              <Button size="sm" className="transition-transform hover:scale-105">
                <ExternalLink className="h-4 w-4 mr-2" />
                Demo
              </Button>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
