"use client";

import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { useEffect, useRef } from "react";
import Hero from "@/components/hero/Hero";
import AppNavbar from "@/components/navigations/Navbar";
import { LoadingScreen } from "@/components/ui/loading-screen";
import About from "@/components/hero/About";
import Experience from "@/components/hero/experience";
import Skills from "@/components/hero/Skills";
import Footer from "@/components/navigations/Footer";
import { cn } from "@/lib/utils";
import { cancelFrame, frame } from "motion/react";
import Project from "@/components/hero/Project";
import { Contact } from "@/components/hero/Contact";
import Education from "@/components/hero/Education";

export default function HomePage() {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      <LoadingScreen>
        <div className="relative min-h-screen w-full bg-black">
          {/* Grid Background */}
          <div
            className={cn(
              "absolute inset-0",
              "[background-size:60px_60px]",
              "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
            )}
          />
          <div className="pointer-events-none absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          <div className="relative z-10">
            <AppNavbar />
            <main className="flex-1 px-6 md:px-12">
              <Hero />
              <About />
              <Experience />
              <Education />
              <Skills />
              <Project />
              <Contact />
            </main>
          </div>
          <Footer />
        </div>
      </LoadingScreen>
    </ReactLenis>
  );
}
