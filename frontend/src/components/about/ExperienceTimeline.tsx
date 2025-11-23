import type { WorkExperience } from "@/types";
import { Calendar, MapPin, Code } from "lucide-react";
import { Badge } from "../ui/badge";

interface ExperienceTimelineProps {
  experiences: WorkExperience[];
}

const ExperienceTimeline = ({ experiences }: ExperienceTimelineProps) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

      <div className="space-y-8">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative pl-12 md:pl-0">
            {/* Timeline dot */}
            <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary border-4 border-background hidden md:flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary-foreground" />
            </div>

            <div className="md:ml-12">
              <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                    <p className="text-lg text-primary font-medium">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  {exp.location && (
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  )}
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t">
                    <Code className="w-4 h-4 text-muted-foreground mt-1" />
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
