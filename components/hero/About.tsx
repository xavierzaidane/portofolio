"use client";
import { motion } from "motion/react";
import React from "react";


export default function About() {
  return (
    <motion.section
      id="about"
      className="py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-0 lg:flex-row">
        <motion.div
          className="flex-1 space-y-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span
            data-slot="badge"
            className="inline-flex items-center justify-center rounded-full border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 text-xs uppercase tracking-[0.3em] border-white/20 bg-transparent text-white"
          >
            About
          </span>

          <h2 className="font-heading text-3xl text-white">
            Crafting reliable software that scales with your team
          </h2>

          <p className="text-sm text-zinc-400 md:text-base">
            I specialize in building robust, maintainable software solutions that empower teams to move quickly without sacrificing quality. My approach combines best practices in software engineering with a deep understanding of product needs, ensuring that every line of code serves a purpose and drives real value.
          </p>
        </motion.div>

        <div className="flex-1 grid items-stretch gap-4 sm:grid-cols-2">
          {[
            {
              title: "Frontend Delivery",
              desc: "Develop user-friendly interfaces with React, Next.js, and Tailwind CSS that prioritize performance.",
            },
            {
              title: "Team Enablement",
              desc: "Empower teams with clear documentation, code reviews, and best practices to foster collaboration.",
            },
            {
              title: "Reliable Systems",
              desc: "Design and implement backend services with Node.js, Express, and PostgreSQL.",
            },
            {
              title: "Product Thinking",
              desc: "Align technical solutions with business goals through user-centric design and iterative development.",
            },
          ].map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.15 * idx }}
            >
              <div className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm h-full border-white/15 bg-white/5 backdrop-blur-md transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="px-4">
                  <div className="font-semibold text-lg text-white">{card.title}</div>
                  <div className="text-zinc-400 text-sm">{card.desc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}