import { PersonalInfo } from "@/data/PersonalInfo";
import { Github, Linkedin, Mail } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="flex gap-4 mt-4 justify-center">
      <a 
        href={PersonalInfo.github} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="GitHub profile"
        className="p-2 rounded-full hover:bg-accent transition-colors duration-200 hover:scale-110 transform"
      >
        <Github className="w-5 h-5" />
      </a>
      {PersonalInfo.linkedin && (
        <a 
          href={PersonalInfo.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="p-2 rounded-full hover:bg-accent transition-colors duration-200 hover:scale-110 transform"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      )}
      <a 
        href={`mailto:${PersonalInfo.email}`}
        aria-label="Send email"
        className="p-2 rounded-full hover:bg-accent transition-colors duration-200 hover:scale-110 transform"
      >
        <Mail className="w-5 h-5" />
      </a>
    </div>
  );
};

export default SocialLinks;
