import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{project.title}</h3>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-3 text-muted-foreground">
          {project.description}
        </p>
        <div className="flex flex-wrap gap=2 mb-4">
          {project.tech.map((t: string) => (
            <span key={t} className="px-2 py-1 text-xs rounded-md bg-secondary">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          {project.repo && (
            <a href="{project.repo" target="_blank">
              <Button size="sm" variant="outline">
                <Github className="h-4 w-4 mr-2" />
                Repo
              </Button>
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank">
              <Button size="sm">
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
