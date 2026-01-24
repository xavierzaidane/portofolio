"use client"

import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import * as React from 'react'
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiLaravel,
  SiShopify,
  SiWordpress,
  SiBootstrap,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function Skills() {
    return (
        <motion.section
            id="skills"
            className="py-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
                <motion.div
                    className="text-left mb-12"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <span className="inline-flex items-left rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] border-white/20 bg-gradient-to-r from-white/10 to-transparent text-white">
                        Skills
                    </span>
                    <h2 id="experience-heading" className="mt-4 font-heading text-3xl text-white">
                        Integrations that enhance functionality
                    </h2>
                    <p className="text-zinc-400 mt-6">
                        Connect seamlessly with popular platforms and services to enhance your workflow.
                    </p>
                </motion.div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
                    {[
                        {
                            title: "Next.js",
                            description: "Production-grade React framework for building fast, scalable web apps.",
                            icon: <SiNextdotjs className="size-10 text-white" />,
                        },
                        {
                            title: "React.js",
                            description: "Component-based UI library for building interactive user interfaces.",
                            icon: <SiReact className="size-10 text-cyan-400" />,
                        },
                        {
                            title: "Tailwind CSS",
                            description: "Utility-first CSS framework for rapid UI development.",
                            icon: <SiTailwindcss className="size-10 text-sky-400" />,
                        },
                        {
                            title: "PostgreSQL",
                            description: "Powerful, open source object-relational database system.",
                            icon: <SiPostgresql className="size-10 text-blue-400" />,
                        },
                        {
                            title: "MySQL",
                            description: "Reliable, widely-used open source relational database.",
                            icon: <SiMysql className="size-10 text-blue-300" />,
                        },
                        {
                            title: "Laravel",
                            description: "Elegant PHP framework for web artisans.",
                            icon: <SiLaravel className="size-10 text-rose-500" />,
                        },
                        {
                            title: "Shopify",
                            description: "E-commerce platform for online stores and retail point-of-sale systems.",
                            icon: <SiShopify className="size-10 text-green-400" />,
                        },
                        {
                            title: "WordPress",
                            description: "Content management system for creating websites and blogs.",
                            icon: <SiWordpress className="size-10 text-blue-200" />,
                        },
                        {
                            title: "Bootstrap",
                            description: "Collaborative interface design tool.",
                            icon: <SiBootstrap className="size-10 text-purple-400" />,
                        },
                    ].map((skill, idx) => (
                        <motion.div
                            key={skill.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: 0.1 * idx }}
                        >
                            <IntegrationCard
                                title={skill.title}
                                description={skill.description}
                                icon={skill.icon}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}

const IntegrationCard = ({
    title,
    description,
    icon,
    link = 'https://github.com/meschacirung/cnblocks'
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    link?: string;
}) => {
    return (
        <div className="rounded-xl border border-white/15 bg-white/5 backdrop-blur-xl p-6 shadow-lg transition-transform hover:-translate-y-1 hover:shadow-2xl flex flex-col h-full">
            <div className="relative">
                <div className="mb-4 flex items-center justify-left">{icon}</div>
                <div className="space-y-2 py-2">
                    <h3 className="text-base font-medium text-white">{title}</h3>
                    <p className="text-zinc-400 line-clamp-2 text-sm">{description}</p>
                </div>
                <div className="flex gap-3 border-t border-dashed border-white/10 pt-6">
                    <Button
                        asChild
                        variant="secondary"
                        size="sm"
                        className="gap-1 pr-2 shadow-none bg-white/10 text-white hover:bg-white/20 border border-white/10"
                    >
                        <Link href={link}>
                            Learn More
                            <ChevronRight className="ml-0 !size-3.5 opacity-50" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}