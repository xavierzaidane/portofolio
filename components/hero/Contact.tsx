"use client";
import { motion, useAnimation } from "motion/react";
import { useRef, useEffect } from "react";
import { useInView } from "motion/react";
import { LiquidButton } from "../animate-ui/components/buttons/liquid";

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  return (
    <div className="flex items-center justify-center h-[40rem]" id="contact">
      <motion.div
        id="contact"
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={controls}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto w-full max-w-5xl px-4 text-center rounded-4xl border  border-white/15 bg-white/5 backdrop-blur-lg py-10   "
      >
        <span className="inline-flex items-center justify-center rounded-full border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 gap-1 text-xs uppercase tracking-[0.3em] border-white/20 bg-transparent text-foreground mb-2 text-white">
          Let's talk
        </span>
        <h2 className="mt-4 font-heading font-heading text-3xl text-white">
          Ready to collaborate?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl items-left text-center text-sm text-muted-foreground md:text-base">
          Send over a short brief with goals, timeline, and team context. I'll
          reply within a day with a plan on how I can help.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 md:flex-row md:flex-wrap">
          <LiquidButton
            variant="ghost"
            size="default"
            asChild
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all bg-white text-white hover:bg-white/90 border border-white/20 h-10 rounded-md px-6 cursor-pointer"
          >
            <a href="mailto:xavierzaidane@gmail.com">Email me</a>
          </LiquidButton>
          <LiquidButton
            variant="default"
            size="default"
            asChild
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all bg-white text-black hover:bg-white/90 h-10 rounded-md px-6 cursor-pointer"
          >
            <a
              target="_blank"
              href="/documents/Xavier_Zaidane_Athaya_Resume.pdf"
            >
              Download My Resume
            </a>
          </LiquidButton>
        </div>
      </motion.div>
    </div>
  );
}
