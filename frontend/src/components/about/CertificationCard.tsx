import type { Certification } from "@/types";
import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

interface CertificationCardProps {
  certification: Certification;
}

const CertificationCard = ({ certification }: CertificationCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
            <Award className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-1">{certification.name}</h3>
            <p className="text-primary font-medium mb-2">{certification.issuer}</p>
            <p className="text-sm text-muted-foreground mb-3">{certification.date}</p>
            {certification.credentialId && (
              <p className="text-xs text-muted-foreground mb-3">
                Credential ID: {certification.credentialId}
              </p>
            )}
            {certification.credentialUrl && (
              <a
                href={certification.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" variant="outline" className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Verify Credential
                </Button>
              </a>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CertificationCard;

