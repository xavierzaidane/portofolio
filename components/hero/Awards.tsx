"use client";

import { motion } from 'motion/react';
import { a } from 'motion/react-client';
import React, { useState } from 'react';

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Awards() {
    const awards = [
        {
            title: "2nd Place 2025 4th International Student Innovation Contest in Liaoning Province",
            status: "launched • November, 2025",
            image: "/genxtra2.jpg",
            carousel: [
                "/genxtra2.jpg",
                "/genxtra.jpeg"
            ],
            description:
                "Winning 2nd place among 100+ teams for Resumy AI at the 4th International Student Innovation Contest in Liaoning Province, showcasing excellence in AI-driven resume building solutions.",
            tech: [
                "next.js",
                "LangChain",
                "OpenAI API",
                "tailwindcss",
                "zustand",
            ],
        },
    ];

    const [openCarouselIdx, setOpenCarouselIdx] = useState<number | null>(null);

    const handleImageClick = (idx: number) => {
        setOpenCarouselIdx(idx);
    };

    const closeCarousel = () => setOpenCarouselIdx(null);

    return (
        <motion.section
            id="awards"
            className="py-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-0">
                <motion.div
                    className="flex-1 space-y-4 relative"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center rounded-full border px-3 py-1 font-medium w-fit whitespace-nowrap shrink-0 text-xs uppercase tracking-[0.3em] border-white/20 bg-gradient-to-r from-white/3 to-transparent text-white"
                    >
                        awards
                    </span>
                    <h2 className="font-heading text-3xl text-white">
                        Building calm, maintainable software for fast-moving teams.
                    </h2>
                    <p className="text-sm text-zinc-400 md:text-base">
                        I focus on crafting software that balances speed, stability, and
                        maintainability.
                    </p>
                    <div className="flex justify-end items-center w-full mb-2 ">
                    </div>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mt-8">
                    {awards.map((award, idx) => (
                        <motion.div
                            key={award.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: 0.15 * idx }}
                            className="flex h-full"
                        >
                            <div className="text-card-foreground gap-6 rounded-xl border shadow-sm flex h-full flex-col border-white/15 bg-white/5 backdrop-blur-lg py-0 w-full max-w-2xl mx-auto">
                                {/* Image */}
                                <div
                                    className="relative h-72 w-full overflow-hidden rounded-t-xl border-b border-white/10 cursor-pointer"
                                    onClick={() => handleImageClick(idx)}
                                    title="Click to view gallery"
                                >
                                    <img
                                        alt={award.title}
                                        loading="lazy"
                                        className="object-cover absolute h-full w-full inset-0 transition-transform hover:scale-105"
                                        src={award.image}
                                    />
                                    <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity">
                                        <span className="text-white text-lg font-semibold">View Gallery</span>
                                    </div>
                                </div>
                                {/* Card Header */}
                                <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 space-y-3 px-6 pt-8">
                                    <div className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                                        {award.status}
                                    </div>
                                    <div className="font-semibold text-2xl text-white">
                                        {award.title}
                                    </div>
                                    <div className="text-zinc-400 text-sm">
                                        {award.description}
                                    </div>
                                </div>
                                {/* Card Content */}
                                <div className="mt-auto px-6 pb-8">
                                    <div className="flex flex-wrap gap-2">
                                        {award.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                data-slot="badge"
                                                className="inline-flex items-center justify-center rounded-full border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 border-white/15 bg-transparent text-xs text-zinc-400"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* Carousel Modal */}
                            {openCarouselIdx === idx && (
                                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
                                    <button
                                            className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900/80 border border-zinc-700/60 text-white hover:bg-zinc-800 hover:text-red-400 transition-colors shadow-lg"
                                            onClick={closeCarousel}
                                            aria-label="Close"
                                            type="button"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    <div className="relative rounded-lg shadow-lg max-w-2xl w-full p-6 flex flex-col items-center">
                                        
                                        <Carousel className="w-full max-w-2xl">
                                            <CarouselContent>
                                                {award.carousel.map((imgSrc, imgIdx) => (
                                                    <CarouselItem key={imgIdx}>
                                                        <div className="flex aspect-[4/3] items-center justify-center p-8">
                                                            <img
                                                                src={imgSrc}
                                                                alt={`Award image ${imgIdx + 1}`}
                                                                className="max-h-[28rem] w-auto rounded"
                                                            />
                                                        </div>
                                                    </CarouselItem>
                                                ))}
                                            </CarouselContent>
                                            <CarouselPrevious />
                                            <CarouselNext />
                                        </Carousel>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

export default Awards;