import { PersonalInfo } from "@/data/PersonalInfo";
import { Github ,Linkedin,Mail } from "lucide-react";
import React from "react";

const SocialLinks = () => {
  return (
    <div className="flex gap-4 mt-4">
      <a href={PersonalInfo.github} target="_blank">
        <Github />
      </a>
      {PersonalInfo.linkedin && (
        <a href={PersonalInfo.linkedin} target="_blank">
          <Linkedin />
        </a>
      )}
      <a href={`mailto:${PersonalInfo.email}`}><Mail /></a>
    </div>
  );
};

export default SocialLinks;
