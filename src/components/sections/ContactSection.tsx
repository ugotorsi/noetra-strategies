"use client";

import { motion } from "framer-motion";
import { CalendarCheck2, Sparkles, Zap } from "lucide-react";
import { type ChangeEvent, type FormEvent, useState } from "react";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";

type InquiryFormData = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const initialFormData: InquiryFormData = {
  name: "",
  email: "",
  company: "",
  message: "",
};

type FormState = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [formData, setFormData] = useState<InquiryFormData>(initialFormData);
  const [formState, setFormState] = useState<FormState>("idle");
  const [feedback, setFeedback] = useState("");

  const isLoading = formState === "loading";

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));

    if (formState === "success" || formState === "error") {
      setFormState("idle");
      setFeedback("");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setFormState("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const payload = (await response.json()) as
        | { error?: string; success?: boolean }
        | undefined;

      if (!response.ok) {
        throw new Error(payload?.error || "Unable to submit your request right now.");
      }

      setFormState("success");
      setFeedback(
        "Your strategic consultation request has been submitted successfully.",
      );
      setFormData(initialFormData);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to submit your request right now.";

      setFormState("error");
      setFeedback(message);
    }
  };

  return (
    <section
      id="contact"
      className="relative border-t border-white/10 bg-[linear-gradient(145deg,#0A0E13_0%,#111827_100%)] py-24 sm:py-28"
    >
      <div className="section-transition-glow absolute inset-x-0 top-0" />
      <div className="orb-drift pointer-events-none absolute -left-12 top-20 h-36 w-36 rounded-full bg-[#C6A96B]/12 blur-[70px]" />
      <Container className="space-y-12">
        <SectionTitle
          eyebrow="Contact"
          title="Request Strategic Consultation"
          description="NOETRA STRATEGIES supports organizations, professionals and investors in strategic operations, innovation initiatives and multidisciplinary coordination activities."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card className="border-[#C6A96B]/35 p-7">
              <p className="text-xs uppercase tracking-[0.2em] text-[#C6A96B]">Executive Inquiry Box</p>
              <h3 className="mt-3 text-xl font-semibold text-[#F5F7FA]">
                Strategic Operations Intake
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#F5F7FA]/75">
                Share your operational context, strategic priorities and expected
                execution horizon to receive an aligned advisory response.
              </p>
              <ul className="mt-4 space-y-2 text-xs uppercase tracking-[0.14em] text-[#F5F7FA]/62">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4DA3FF]" />
                  Strategic intelligence briefing
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4DA3FF]" />
                  Operational coordination scoping
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4DA3FF]" />
                  AI innovation alignment
                </li>
              </ul>
              <div className="mt-5">
                <Button href="/contact" variant="outline" size="md">
                  <CalendarCheck2 size={16} />
                  Schedule Advisory Call
                </Button>
              </div>
            </Card>

            <Card className="relative overflow-hidden p-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(77,163,255,0.18),transparent_55%)]" />
              <div className="relative flex h-56 flex-col justify-between bg-[linear-gradient(130deg,rgba(77,163,255,0.2),rgba(198,169,107,0.12),rgba(11,15,20,0.85))] p-6">
                <div className="hero-grid absolute inset-0 opacity-20" />
                <p className="relative text-xs uppercase tracking-[0.22em] text-[#F5F7FA]/72">
                  Advisory Coordination Interface
                </p>
                <div className="relative inline-flex w-max items-center gap-2 rounded-full border border-white/15 bg-[#0B0F14]/50 px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-[#F5F7FA]/72">
                  <Zap size={12} className="text-[#4DA3FF]" />
                  Priority Response Channel
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            <Card className="p-7 sm:p-8">
              <form className="grid gap-4" onSubmit={handleSubmit}>
                <label className="space-y-2 text-sm text-[#F5F7FA]/80">
                  Name
                  <input
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="h-12 w-full rounded-xl border border-white/15 bg-[#0B0F14]/70 px-4 text-[#F5F7FA] outline-none transition-all duration-300 focus:border-[#C6A96B]/70 focus:shadow-[0_0_0_3px_rgba(198,169,107,0.14)]"
                    placeholder="Full name"
                  />
                </label>

                <label className="space-y-2 text-sm text-[#F5F7FA]/80">
                  Email
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="h-12 w-full rounded-xl border border-white/15 bg-[#0B0F14]/70 px-4 text-[#F5F7FA] outline-none transition-all duration-300 focus:border-[#C6A96B]/70 focus:shadow-[0_0_0_3px_rgba(198,169,107,0.14)]"
                    placeholder="name@company.com"
                  />
                </label>

                <label className="space-y-2 text-sm text-[#F5F7FA]/80">
                  Organization
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="h-12 w-full rounded-xl border border-white/15 bg-[#0B0F14]/70 px-4 text-[#F5F7FA] outline-none transition-all duration-300 focus:border-[#C6A96B]/70 focus:shadow-[0_0_0_3px_rgba(198,169,107,0.14)]"
                    placeholder="Organization name"
                  />
                </label>

                <label className="space-y-2 text-sm text-[#F5F7FA]/80">
                  Message
                  <textarea
                    name="message"
                    required
                    rows={5}
                    minLength={20}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="w-full rounded-xl border border-white/15 bg-[#0B0F14]/70 px-4 py-3 text-[#F5F7FA] outline-none transition-all duration-300 focus:border-[#C6A96B]/70 focus:shadow-[0_0_0_3px_rgba(198,169,107,0.14)]"
                    placeholder="Describe your strategic context, objectives and expected timeline"
                  />
                </label>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs uppercase tracking-[0.14em] text-[#F5F7FA]/62">
                  <Sparkles size={14} className="mr-2 inline text-[#C6A96B]" />
                  Institutional inquiry channel for complex strategic and multidisciplinary assignments.
                </div>

                {feedback ? (
                  <p
                    className={`text-sm leading-7 ${
                      formState === "success" ? "text-[#4DA3FF]" : "text-[#F5F7FA]/78"
                    }`}
                    role="status"
                  >
                    {feedback}
                  </p>
                ) : null}

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="gold"
                    size="lg"
                    className="w-full sm:w-auto"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Schedule Advisory Call"}
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
