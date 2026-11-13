"use client";

import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import DrapeBackground from "@/components/kokonutui/drape-background";

const Hero = () => {
  const ease = [0.22, 1, 0.36, 1] as const;

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 45,
      filter: "blur(8px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
  };

  return (
    <DrapeBackground className="z-10">
      <section className="relative select-none z-50 flex min-h-svh w-full items-center justify-center overflow-hidden px-6 py-12 text-center">
        <motion.div
          className="z-50 w-full max-w-4xl pt-10"
          initial="hidden"
          animate="visible"
          transition={{
            staggerChildren: 0.22,
            delayChildren: 2.7,
          }}
        >
          {/* Heading */}
          <motion.h1
            variants={contentVariants}
            transition={{
              duration: 1.3,
              ease,
            }}
            className="text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl md:text-7xl"
          >
            Build agents.
            <br />
            <span className="text-muted-foreground">Get things done.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={contentVariants}
            transition={{
              duration: 1.2,
              ease,
            }}
            className="mx-auto mt-6 max-w-md text-sm leading-7 text-muted-foreground sm:text-base"
          >
            Create specialized AI agents, equip them with capabilities, and
            deploy them to do real work.
          </motion.p>

          {/* Actions */}
          <motion.div
            variants={contentVariants}
            transition={{
              duration: 1.2,
              ease,
            }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <button className="group flex h-11 items-center gap-3 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-all hover:gap-5">
              Start building
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button className="flex h-11 items-center gap-2 rounded-full px-5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              <Play className="h-4 w-4" />
              Discover 10vy
            </button>
          </motion.div>
        </motion.div>
      </section>
    </DrapeBackground>
  );
};

export default Hero;
