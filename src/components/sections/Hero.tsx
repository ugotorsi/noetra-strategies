"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Building2, Gavel, ShieldCheck, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { getMessages, type Locale, withLocalePath } from "@/lib/i18n";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const floatingLabelPositions = [
  { top: "10%", left: "6%" },
  { top: "82%", left: "14%" },
  { top: "16%", right: "7%" },
  { top: "78%", right: "10%" },
];

const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 23) % 100}%`,
  delay: (index % 6) * 0.6,
  duration: 8 + (index % 4) * 1.2,
}));

type HeroProps = {
  locale: Locale;
};

export function Hero({ locale }: HeroProps) {
  const dashboardRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 900], [0, 130]);
  const reverseParallaxY = useTransform(scrollY, [0, 900], [0, -95]);
  const messages = getMessages(locale).sections.hero;
  const categoryIcons = [Building2, Gavel, ShieldCheck];

  useEffect(() => {
    if (!dashboardRef.current) {
      return;
    }

    const context = gsap.context(() => {
      gsap.to("[data-node]", {
        opacity: 1,
        scale: 1.22,
        duration: 1.8,
        yoyo: true,
        repeat: -1,
        stagger: 0.15,
        ease: "sine.inOut",
      });

      gsap.to("[data-line]", {
        opacity: 0.85,
        duration: 1.4,
        yoyo: true,
        repeat: -1,
        stagger: 0.12,
        ease: "sine.inOut",
      });
    }, dashboardRef);

    return () => context.revert();
  }, []);

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_20%_18%,rgba(77,163,255,0.18),transparent_38%),radial-gradient(circle_at_82%_16%,rgba(198,169,107,0.16),transparent_42%),linear-gradient(150deg,#0B0F14_0%,#0A111A_55%,#0E1622_100%)]"
    >
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-45" />

      <motion.div
        style={{ y: parallaxY }}
        className="pointer-events-none absolute -left-16 top-16 h-72 w-72 rounded-full bg-[#4DA3FF]/20 blur-[120px]"
      />
      <motion.div
        style={{ y: reverseParallaxY }}
        className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-[#C6A96B]/18 blur-[130px]"
      />

      <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden="true">
        {messages.floatingLabels.map((label, index) => {
          const position = floatingLabelPositions[index % floatingLabelPositions.length];

          return (
            <motion.span
              key={label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: [0.3, 0.9, 0.3], y: [0, -6, 0] }}
              transition={{
                duration: 5 + index * 0.7,
                repeat: Infinity,
                delay: index * 0.4,
                ease: "easeInOut",
              }}
              className="absolute rounded-full border border-white/14 bg-[#0B0F14]/55 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#F5F7FA]/65 backdrop-blur-md"
              style={{ top: position.top, left: position.left, right: position.right }}
            >
              {label}
            </motion.span>
          );
        })}
      </div>

      <div className="pointer-events-none absolute inset-0">
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute h-1.5 w-1.5 rounded-full bg-[#4DA3FF]/45"
            style={{ left: particle.left, top: particle.top }}
            animate={{ y: [-12, 12, -12], opacity: [0.2, 0.85, 0.2] }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <Container className="relative grid min-h-[100svh] items-center gap-14 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-12">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.16, delayChildren: 0.2 }}
          className="space-y-9"
        >
          <motion.p
            variants={reveal}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#F5F7FA]/80 sm:text-xs sm:tracking-[0.26em]"
          >
            <Sparkles size={14} className="text-[#C6A96B]" />
            {messages.eyebrow}
          </motion.p>

          <motion.h1
            variants={reveal}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl text-balance text-4xl font-semibold leading-[1.04] text-[#F5F7FA] sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          >
            {messages.headlineLineOne}
            <br />
            {messages.headlineLineTwo}
          </motion.h1>

          <motion.p
            variants={reveal}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl text-pretty text-base leading-8 text-[#F5F7FA]/78 sm:text-lg"
          >
            {messages.subheadline}
          </motion.p>

          <motion.div
            variants={reveal}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-3"
          >
            <Button href={withLocalePath(locale, "/contact")} variant="gold" size="lg">
              {messages.primaryCta}
            </Button>
            <Button href={withLocalePath(locale, "/services")} variant="outline" size="lg">
              {messages.secondaryCta}
              <ArrowRight size={16} />
            </Button>
          </motion.div>

          <motion.div
            variants={reveal}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid gap-3 sm:grid-cols-2"
          >
            {messages.executiveBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center rounded-full border border-white/14 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[#F5F7FA]/72"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={reveal}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="grid gap-3 sm:grid-cols-3"
          >
            {messages.metrics.map((metric, index) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-white/12 bg-white/[0.03] px-4 py-3 backdrop-blur-xl"
              >
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#F5F7FA]/65">
                  {metric.label}
                </p>
                <p className="mt-2 text-2xl font-semibold text-[#F5F7FA]">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.1 }}
                  >
                    {metric.value}%
                  </motion.span>
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={reveal}
            transition={{ duration: 0.88, ease: "easeOut" }}
            className="grid gap-2 sm:grid-cols-3"
          >
            {messages.operationalIndicators.map((indicator) => (
              <div
                key={indicator.label}
                className="rounded-xl border border-white/12 bg-[#111827]/55 px-3 py-2"
              >
                <p className="text-[10px] uppercase tracking-[0.16em] text-[#F5F7FA]/58">
                  {indicator.label}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[#C6A96B]">
                  {indicator.status}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.p
            variants={reveal}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-xs uppercase tracking-[0.16em] text-[#F5F7FA]/54"
          >
            {messages.premiumMicrocopy}
          </motion.p>

          <motion.ul
            variants={reveal}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="space-y-2 text-sm text-[#F5F7FA]/68"
          >
            {messages.trustIndicators.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#4DA3FF]" />
                {item}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          ref={dashboardRef}
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.35 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#111827]/55 p-5 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.95)] backdrop-blur-2xl sm:p-7">
            <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(77,163,255,0.15),transparent_36%,rgba(198,169,107,0.1))]" />
            <div className="relative space-y-6">
              <div className="flex items-center justify-between">
                <p className="min-w-0 text-xs uppercase tracking-[0.2em] text-[#F5F7FA]/65 sm:tracking-[0.26em]">
                  {messages.dashboard.title}
                </p>
                <span className="rounded-full border border-[#4DA3FF]/40 bg-[#4DA3FF]/10 px-3 py-1 text-[11px] font-medium text-[#4DA3FF]">
                  {messages.dashboard.badge}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                {messages.dashboard.categoryTags.map((tag, index) => {
                  const Icon = categoryIcons[index] ?? Building2;

                  return (
                  <div
                    key={tag}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-[11px] uppercase tracking-[0.14em] text-[#F5F7FA]/72"
                  >
                    <Icon size={13} className="text-[#4DA3FF]" />
                    {tag}
                  </div>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {messages.dashboard.flowCards.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-[#0B0F14]/70 p-3"
                  >
                    <p className="text-[11px] uppercase tracking-[0.18em] text-[#F5F7FA]/55">
                      {item}
                    </p>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-[#4DA3FF] to-[#C6A96B]"
                        initial={{ width: "20%" }}
                        animate={{ width: `${58 + index * 9}%` }}
                        transition={{ duration: 1.5, delay: 0.3 + index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative rounded-2xl border border-white/10 bg-[#0B0F14]/75 p-4">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(77,163,255,0.14),transparent_60%)]" />
                <svg
                  viewBox="0 0 360 170"
                  className="relative h-auto w-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {[28, 60, 92, 124].map((y) => (
                    <line
                      key={`h-${y}`}
                      x1="0"
                      y1={y}
                      x2="360"
                      y2={y}
                      stroke="rgba(245,247,250,0.09)"
                    />
                  ))}
                  {[30, 80, 130, 180, 230, 280, 330].map((x) => (
                    <line
                      key={`v-${x}`}
                      x1={x}
                      y1="0"
                      x2={x}
                      y2="170"
                      stroke="rgba(245,247,250,0.06)"
                    />
                  ))}
                  {["M16 130 C75 80,120 90,172 62", "M170 62 C220 38,268 48,342 20", "M12 152 C68 118,118 124,186 102", "M184 102 C238 86,286 96,344 84"].map(
                    (path, index) => (
                      <path
                        key={path}
                        d={path}
                        data-line
                        stroke={index % 2 === 0 ? "#4DA3FF" : "#C6A96B"}
                        strokeWidth="2"
                        opacity="0.45"
                        className="drop-shadow-[0_0_6px_rgba(77,163,255,0.55)]"
                      />
                    ),
                  )}
                  {[
                    [16, 130],
                    [172, 62],
                    [342, 20],
                    [12, 152],
                    [186, 102],
                    [344, 84],
                  ].map(([x, y], index) => (
                    <circle
                      key={`node-${x}-${y}`}
                      data-node
                      cx={x}
                      cy={y}
                      r="4"
                      fill={index % 2 === 0 ? "#4DA3FF" : "#C6A96B"}
                      opacity="0.5"
                    />
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
