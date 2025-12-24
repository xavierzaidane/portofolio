"use client";
import { motion } from "framer-motion";
import React from "react";
import { ExternalLink } from "lucide-react";

const projects = [
	{
		title: "Neurofit AI - Personalized Fitness Coach",
		status: "launched • September, 2025",
		image: "/neurofit.png",
		description:
			"An AI-powered fitness platform that delivers personalized workout and nutrition plans. Built with Next.js, Vapi, and Convex for scalable, real-time recommendations.",
		tech: [
			"next-js",
			"Vapi",
			"convex",
			"tailwindcss",
			"zustand",
		],
		link: "https://neurofit-ai.vercel.app/",
	},
	{
		title: "Resumy - AI-Powered Resume Builder",
		status: "launched • September, 2025",
		image: "/Resumy.png",
		description:
			"A mobile-first gig marketplace connecting workers and customers for daily tasks such as cleaning, delivery, and home repair — built with Next.js, Express.js, PostgreSQL, and Langchain.",
		tech: [
			"Next.js",
			"Express.js",
			"tailwindcss",
			"Langchain",
			
		],
		link: "https://github.com/xavierzaidane/resume-ai",
	},
];

export default function Project() {
	return (
		<motion.section
			id="projects"
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
						Projects
					</span>
					<h2 className="font-heading text-3xl text-white">
						Building calm, maintainable software for fast-moving teams.
					</h2>
					<p className="text-sm text-zinc-400 md:text-base">
						I focus on crafting software that balances speed, stability, and
						maintainability.
					</p>
						<div className="flex justify-end items-center w-full mb-2 ">
					<a
						href="https://github.com/xavierzaidane"
						target="_blank"
						rel="noopener noreferrer"
						className="text-xl text-zinc-400 hover:underline font-medium px-3 py-1 flex items-center gap-1"
					>
						See all <ExternalLink size={18} className="inline-block" />
					</a>
				</div>

				</motion.div>

				

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mt-8">
					{projects.map((project, idx) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.2 }}
							transition={{ duration: 0.5, delay: 0.15 * idx }}
							className="flex h-full"
						>
							<div className="text-card-foreground gap-6 rounded-xl border shadow-sm flex h-full flex-col border-white/15 bg-white/5 backdrop-blur-lg py-0">
								{/* Image */}
								<div className="relative h-48 w-full overflow-hidden rounded-t-xl border-b border-white/10">
									<img
										alt={project.title}
										loading="lazy"
										className="object-cover absolute h-full w-full inset-0"
										src={project.image}
									/>
								</div>
								{/* Card Header */}
								<div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 space-y-3 px-4 pt-6">
									<div className="text-xs uppercase tracking-[0.3em] text-zinc-400">
										{project.status}
									</div>
									<div className="font-semibold text-2xl text-white">
										{project.title}
									</div>
									<div className="text-zinc-400 text-sm">
										{project.description}
									</div>
								</div>
								{/* Card Content */}
								<div className="mt-auto px-4 pb-6">
									<div className="flex flex-wrap gap-2">
										{project.tech.map((tech) => (
											<span
												key={tech}
												data-slot="badge"
												className="inline-flex items-center justify-center rounded-full border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 border-white/15 bg-transparent text-xs text-zinc-400"
											>
												{tech}
											</span>
										))}
									</div>
									<a
										data-slot="button"
										className="inline-flex text-zinc-500 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all underline-offset-4 hover:underline h-9 py-2 mt-4 px-0 text-primary"
										href={project.link}
									>
										Link to Project →
									</a>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</motion.section>
	);
}