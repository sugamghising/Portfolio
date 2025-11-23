import type { Skill } from "@/types";

interface SkillBarProps {
  skill: Skill;
}

const SkillBar = ({ skill }: SkillBarProps) => {
  const getProficiencyColor = (proficiency: number) => {
    if (proficiency >= 85) return "bg-primary";
    if (proficiency >= 70) return "bg-secondary";
    return "bg-muted";
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-xs text-muted-foreground">{skill.proficiency}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <div
          className={`h-full ${getProficiencyColor(skill.proficiency)} transition-all duration-1000 ease-out rounded-full`}
          style={{ width: `${skill.proficiency}%` }}
          role="progressbar"
          aria-valuenow={skill.proficiency}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
};

export default SkillBar;

