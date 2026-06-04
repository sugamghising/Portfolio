import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Container from "@/components/layout/Container";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Seo from "@/components/seo/Seo";

const CaseStudy = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Seo
        title={`${project.title} | Case Study`}
        description={project.description}
        canonical={`https://sugamghising.com.np/project/${project.id}`}
      />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="py-12">
        <Container>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <header className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{project.title}</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-8">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4 flex-wrap">
              {project.repo && (
                <Button asChild variant="outline" size="sm">
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github className="w-4 h-4" /> Code
                  </a>
                </Button>
              )}
              {project.demo && (
                <Button asChild size="sm">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </Button>
              )}
            </div>
          </header>

          <div className="grid grid-cols-1 gap-12">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <span className="text-primary">01.</span> The Challenge
              </h2>
              <div className="p-6 rounded-lg border bg-muted/30 text-muted-foreground leading-relaxed">
                {project.challenge}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <span className="text-primary">02.</span> The Engineering Solution
              </h2>
              <div className="p-6 rounded-lg border bg-muted/30 text-muted-foreground leading-relaxed">
                {project.solution}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <span className="text-primary">03.</span> The Result
              </h2>
              <div className="p-6 rounded-lg border bg-primary/10 text-foreground leading-relaxed font-medium">
                {project.result}
              </div>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default CaseStudy;
