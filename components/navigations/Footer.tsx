"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-zinc-400">
          <span className="opacity-70">Xavier Zaidane Athaya</span>
          <span className="hidden md:inline">·</span>
          <span className="opacity-70">© {new Date().getFullYear()}</span>
        </div>
        <nav className="flex gap-6 text-zinc-400">
          <Link
            href="https://github.com/xavierzaidane"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </Link>
          <Link
            href="https://linkedin.com/in/xavierzaidane"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </Link>
          <Link
            href="mailto:xavierzaidane@gmail.com"
            className="hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </Link>
        </nav>
      </div>
    </footer>
  );
}