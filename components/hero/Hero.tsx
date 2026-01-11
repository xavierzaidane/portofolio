"use client";

import React from "react";
import { motion } from "framer-motion";
import { CometCard } from "../ui/comet-card";

export default function Hero() {
  const handleNavClick = (e: React.MouseEvent<HTMLElement>, link: string) => {
    e.preventDefault();
    const targetId = link.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div 
    id="hero"
    className="mx-auto min-h-screen max-w-6xl pt-1">
      <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:gap-16">
        {/* Left side - Content */}
        <div className="flex-1 space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span
              data-slot="badge"
              className="inline-flex items-center justify-center rounded-full border px-3 py-1 font-medium w-fit whitespace-nowrap shrink-0 border-white/20 bg-white/5 uppercase tracking-[0.4em] text-[0.65rem] text-white"
            >
              Frontend Developer
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="font-heading text-4xl leading-tight text-white md:text-5xl">
              Crafting intuitive user interfaces with modern frontend technologies.
            </h1>
            <p className="max-w-2xl text-sm text-zinc-400 md:text-base">
              I'm Xavier Zaidane—undergraduate student from State Polytechnic of Malang and Frontend Developer with{" "}
              <span className="text-white">1+</span> years of experience specializing in React, Next.js, and responsive design. I focus on building engaging, accessible, and high-performance web applications that deliver exceptional user experiences.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all bg-white text-black hover:bg-white/90 h-10 rounded-md px-6 cursor-pointer"
              type="button"
            >
              Start a project
            </button>
            <button
              onClick={(e) => handleNavClick(e, "#projects")}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all border border-white/30 bg-transparent text-white hover:bg-white/10 h-10 rounded-md px-6 cursor-pointer"
              type="button"
            >
              View projects
            </button>
          </motion.div>
        </div>

        {/* Right side - Image card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <CometCard showGlare={false}>
            <div className="my-10 flex w-96 flex-col items-stretch rounded-[16px] border border-white/15 bg-zinc-900 backdrop-blur-xl p-3 shadow-lg transition-transform hover:-translate-y-1 hover:shadow-2xl md:my-20 md:w-[420px] md:p-5 lg:w-[450px]">
              <div className="mx-2 flex-1">
                <div className="relative mt-2 w-full">
                  <img
                    loading="lazy" 
                    className="h-auto w-full rounded-[16px]"
                    alt="Xavier"
                    src="/duduk.jpg"
                  />
                </div>
              </div>
              <div className="mt-3 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
                <div className="text-sm">Xavier Zaidane Athaya</div>
                <div className="text-sm text-zinc-500">Malang, Indonesia</div>
              </div>
            </div>
          </CometCard>
        </motion.div>
      </div>
    </div>
  );
}
