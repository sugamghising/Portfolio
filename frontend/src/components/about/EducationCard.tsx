import type { Education } from "@/types";
import { GraduationCap, Award } from "lucide-react";
import { Card, CardContent } from "../ui/card";

interface EducationCardProps {
  education: Education;
}

const EducationCard = ({ education }: EducationCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
            <GraduationCap className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-1">{education.degree}</h3>
            <p className="text-primary font-medium mb-2">{education.institution}</p>
            <p className="text-sm text-muted-foreground mb-3">{education.period}</p>
            {education.description && (
              <p className="text-sm text-muted-foreground mb-2">{education.description}</p>
            )}
            {education.gpa && (
              <div className="flex items-center gap-2 mt-3 pt-3 border-t">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">GPA: {education.gpa}</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EducationCard;

