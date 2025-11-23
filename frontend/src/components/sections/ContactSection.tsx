import React from "react";
import SectionTitle from "../common/SectionTitle";
import { PersonalInfo } from "@/data/PersonalInfo";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <SectionTitle>Contact Me</SectionTitle>

      <form
        className="grid gap-4 max-w-lg mx-auto"
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          const name = (form.elements.namedItem("name") as HTMLInputElement)
            .value;
          const message = (
            form.elements.namedItem("message") as HTMLInputElement
          ).value;

          window.location.href = `mailto:${PersonalInfo.email}?subject=Message from ${name}&body=${message}`;
        }}
      >
        <Input name="name" placeholder="Your name" required />
        <Textarea
          name="message"
          rows={5}
          className="border rounded-md p-2"
          placeholder="Your message"
          required
        />
        <Button type="submit">Send</Button>
      </form>
    </section>
  );
};

export default ContactSection;
