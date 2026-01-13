"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Spinner = () => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      }}
      className="h-5 w-5 rounded-full border-2 border-white/20 border-t-white"
    />
  );
};

export const LoadingScreen = ({ 
  children 
}: { 
  children: React.ReactNode 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Delay showing content until exit animation completes
  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 500); // Match the exit animation duration
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <div className="relative min-h-screen bg-black">
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: { duration: 0.5, ease: "easeInOut" }
            }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
          >
            {/* Grid Background */}
            <div
              className={cn(
                "absolute inset-0",
                "[background-size:60px_60px]",
                "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
              )}
            />
            <div className="pointer-events-none absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

            {/* Logo/Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 mb-8 flex flex-col items-center gap-4"
            >
              {/* Portfolio label */}
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <div />
                <h2 className="text-xs font-medium uppercase tracking-[0.4em] text-zinc-500">
                  Portfolio
                </h2>
                <div />
              </motion.div>

              {/* Logo and Name */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-4"
              >
                <img
                  src="logox.png"
                  alt="logo"
                  width={65}
                  height={65}
                  className="opacity-90"
                />
             
                <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                  Xavier
                </h1>
              </motion.div>
            </motion.div>

            {/* Spinner with text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative z-10 flex items-center gap-3"
            >
              <Spinner />
              <p className="text-sm text-zinc-400">
                Preparing for experiences...
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content - always rendered but animated */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: showContent ? 1 : 0,
          y: showContent ? 0 : 20
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative"
      >
        {children}
      </motion.div>
    </div>
  );
};