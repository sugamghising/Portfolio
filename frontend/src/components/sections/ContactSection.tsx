import { useState } from "react";
import SectionTitle from "../common/SectionTitle";
import { PersonalInfo } from "@/data/PersonalInfo";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Github, Mail, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLInputElement)
      .value;
    const email =
      (form.elements.namedItem("email") as HTMLInputElement)?.value || "";

    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(
      `${message}${email ? `\n\nContact: ${email}` : ""}`
    );

    window.location.href = `mailto:${PersonalInfo.email}?subject=${subject}&body=${body}`;

    // Reset form after a short delay
    setTimeout(() => {
      form.reset();
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <section
      id="contact"
      className="py-20 animate-in fade-in slide-in-from-bottom-4 duration-700"
    >
      <SectionTitle>Contact Me</SectionTitle>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border rounded-lg p-6">
        {/* Left Side - Information */}
        <div className="space-y-6">
          <div>
            <h3 className="text-3xl font-bold mb-4">Have a question?</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm here to help! Fill out the form or reach me via email. I'm
              available to help you get the best experience whether you have a
              question about my work or are looking to collaborate.
            </p>
            {/* <p className="text-sm text-muted-foreground">
              Everyone gets a personalized response, so please allow 24 hours during business hours for a reply. My business hours are M-F from 9am to 5pm.
            </p> */}
          </div>

          <div className="space-y-4">
            <a
              href={`mailto:${PersonalInfo.email}`}
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
            >
              <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium">{PersonalInfo.email}</span>
            </a>

            {PersonalInfo.linkedin && (
              <a
                href={PersonalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">Connect on LinkedIn</span>
              </a>
            )}

            <a
              href={PersonalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
            >
              <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Github className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium">View My GitHub</span>
            </a>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="h-full">
          <form
            className="grid gap-4"
            onSubmit={handleSubmit}
            aria-label="Contact form"
          >
            <Input
              name="name"
              placeholder="Your name"
              required
              aria-label="Your name"
              className="transition-all focus:ring-2 focus:ring-primary"
            />
            <Input
              name="email"
              type="email"
              placeholder="Your email (optional)"
              aria-label="Your email"
              className="transition-all focus:ring-2 focus:ring-primary"
            />
            <Textarea
              name="message"
              rows={5}
              className="border rounded-md p-2 transition-all focus:ring-2 focus:ring-primary"
              placeholder="Your message"
              required
              aria-label="Your message"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="transition-transform hover:scale-105 disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
