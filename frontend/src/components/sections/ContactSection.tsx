import { useState } from "react";
import SectionTitle from "../common/SectionTitle";
import { PersonalInfo } from "@/data/PersonalInfo";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Github, Globe, Mail, MessageCircle, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as
  | string
  | undefined;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as
  | string
  | undefined;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as
  | string
  | undefined;

const EMAILJS_READY =
  !!EMAILJS_SERVICE_ID && !!EMAILJS_TEMPLATE_ID && !!EMAILJS_PUBLIC_KEY;

const getEmailJSErrorMessage = (error: unknown) => {
  if (typeof error === "string") return error;
  if (error && typeof error === "object") {
    const maybeStatus =
      "status" in error && error.status != null ? String(error.status) : "";
    const maybeText =
      "text" in error && error.text != null ? String(error.text) : "";
    const maybeMessage =
      "message" in error && error.message != null
        ? String(error.message)
        : "";

    const detail = maybeText || maybeMessage;
    if (maybeStatus && detail) return `${maybeStatus}: ${detail}`;
    if (detail) return detail;
    if (maybeStatus) return `status ${maybeStatus}`;
  }
  return "Unknown EmailJS error";
};

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitState("idle");
    setSubmitMessage("");

    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLInputElement)
      .value;
    const rawEmail =
      (form.elements.namedItem("email") as HTMLInputElement)?.value || "";
    const email = rawEmail.trim();
    const senderEmail = email || "Not provided";

    if (!EMAILJS_READY) {
      setSubmitState("error");
      setSubmitMessage(
        "Contact form is not configured yet. Please set EmailJS environment variables and restart dev server."
      );
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          // Recipient should always be the portfolio owner's email.
          to_email: PersonalInfo.email,
          to_name: PersonalInfo.name,

          // Sender details from the form.
          from_name: name,
          from_email: email || "no-reply@example.com",
          sender_email: senderEmail,
          reply_to: email || PersonalInfo.email,
          message,

          // Backward compatibility for templates that still use {{email}}.
          email: PersonalInfo.email,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      form.reset();
      setSubmitState("success");
      setSubmitMessage("Message sent successfully. I will get back to you soon.");
    } catch (error) {
      const errorDetail = getEmailJSErrorMessage(error);
      console.error("EmailJS send failed:", error);
      setSubmitState("error");
      setSubmitMessage(
        `Failed to send the message (${errorDetail}).`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 animate-in fade-in slide-in-from-bottom-4 duration-700"
    >
      <SectionTitle>Contact Me</SectionTitle>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start border bg-card rounded-lg p-6 shadow-sm">
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

            {PersonalInfo.phone && (
              <a
                href={`tel:${PersonalInfo.phone}`}
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">{PersonalInfo.phone}</span>
              </a>
            )}

            {PersonalInfo.website && (
              <a
                href={PersonalInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">{PersonalInfo.website}</span>
              </a>
            )}

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

            {submitState !== "idle" && (
              <p
                aria-live="polite"
                className={
                  submitState === "success"
                    ? "text-sm text-green-600"
                    : "text-sm text-red-600"
                }
              >
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
