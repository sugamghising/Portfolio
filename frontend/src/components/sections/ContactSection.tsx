import { useState } from "react";
import SectionTitle from "../common/SectionTitle";
import { PersonalInfo } from "@/data/PersonalInfo";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value || "";

    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`${message}${email ? `\n\nContact: ${email}` : ''}`);
    
    window.location.href = `mailto:${PersonalInfo.email}?subject=${subject}&body=${body}`;
    
    // Reset form after a short delay
    setTimeout(() => {
      form.reset();
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <section id="contact" className="py-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <SectionTitle>Contact Me</SectionTitle>

      <form
        className="grid gap-4 max-w-lg mx-auto"
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
    </section>
  );
};

export default ContactSection;
