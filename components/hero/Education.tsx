"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <motion.section
      id="education"
      className="py-20 border-t border-white/6"
      aria-labelledby="education-heading"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          className="mb-8 max-w-3xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] border-white/20 bg-gradient-to-r from-white/3 to-transparent text-white">
            Education
          </span>

          <h2 id="education-heading" className="mt-4 font-heading text-3xl text-white">
            Academic foundations that drive my passion
          </h2>

          <p className="mt-3 max-w-2xl text-zinc-400">
            A concise timeline of my academic journey, highlighting key milestones and achievements that have shaped my knowledge and skills in computer science and engineering.
          </p>
        </motion.div>

        <div className="relative mt-16">
          {/* Vertical timeline line */}
          <motion.div
            className="absolute left-5 top-6 h-[calc(100%-24px)] w-px bg-white/20 md:left-6"
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          <div className="space-y-16">
            {/* education Item 1 */}
            <motion.div
              className="relative pl-16 md:pl-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Icon */}
              <motion.span
                className="absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: 0.3, type: "spring", stiffness: 200 }}
              >
                <img src="/SAU.png" alt="Purple Box AI Logo" className="rounded-full" />
              </motion.span>

              <span className="text-xs uppercase tracking-widest text-zinc-500">
                August 2025 – Present
              </span>

              <h3 className="mt-2 text-xl font-semibold text-white">
                Shenyang Aerospace University
              </h3>

              <p className="text-sm font-medium text-zinc-300">
                Computer Science
              </p>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">
                Currently pursuing a Bachelor's degree in Computer Science, focusing on
                software development, algorithms, and data structures, with an expected
                graduation date in 2027.
              </p>
            </motion.div>

            {/* education Item 2 */}
            <motion.div
              className="relative pl-16 md:pl-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              {/* Icon */}
              <motion.span
                className="absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-zinc-900"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: 0.45, type: "spring", stiffness: 200 }}
              >
                <img src="/polinema.png" alt="anastasya bouquet" className="rounded-full" />
              </motion.span>

              <span className="text-xs uppercase tracking-widest text-zinc-500">
                February 2024 – August 2025
              </span>

              <h3 className="mt-2 text-xl font-semibold text-white">
                State Polytechnic of Malang
              </h3>

              <p className="text-sm font-medium text-zinc-300">
                Informatics Engineering
              </p>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">
                Currently pursuing foundational coursework in informatics engineering,
                covering programming, data structures, and database management,
                preparing for advanced studies in computer science.
              </p>
            </motion.div>

            {/* Education Item 3 */}
            <motion.div
              className="relative pl-16 md:pl-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              {/* Icon */}
              <motion.span
                className="absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-zinc-900"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: 0.45, type: "spring", stiffness: 200 }}
              >
                <img src="/stetsa.jpg" alt="anastasya bouquet" className="rounded-full" />
              </motion.span>

              <span className="text-xs uppercase tracking-widest text-zinc-500">
                February 2024 – August 2025
              </span>

              <h3 className="mt-2 text-xl font-semibold text-white">
                SMAN 4 Malang
              </h3>

              <p className="text-sm font-medium text-zinc-300">
                Science Major
              </p>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">
                Graduated with a focus on science subjects, laying a strong foundation
                for future studies in computer science and engineering.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}