import { PersonalInfo } from "@/data/PersonalInfo";
import { Button } from "../ui/button";
import SocialLinks from "../common/SocialLinks";
import Seo from "../seo/Seo";

const HeroSection = () => {
  return (
    <>
      <Seo
        title="Sugam Ghising | Full Stack Developer Portfolio"
        description="Portfolio showcasing React, TypeScript, Node.js, Express, Prisma, and scalable web application projects."
      />
      <section className="py-20 text-center" id="hero">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {PersonalInfo.name}
        </h1>
        <p className="max-w-2xl mx-auto mb-6 text-xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          {PersonalInfo.role}
        </p>
        <p className="max-w-2xl mx-auto mb-6 text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          {PersonalInfo.description}
        </p>
        <div className="flex justify-center gap-4 flex-wrap animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <Button asChild className="transition-transform hover:scale-105">
            <a href="#projects">View Projects</a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="transition-transform hover:scale-105"
          >
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
          <SocialLinks />
        </div>
      </section>
    </>
  );
};

export default HeroSection;