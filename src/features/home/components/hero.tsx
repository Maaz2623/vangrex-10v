"use client";

import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import DrapeBackground from "@/components/kokonutui/drape-background";
import { ThemeSwitcher } from "@/components/theme-switcher";

const Hero = () => {
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <DrapeBackground
      className="z-10"
      children={
        <section className="flex pt-10 z-50 min-h-svh w-full items-center justify-center px-6 py-12 text-center">
          <div className="w-full max-w-4xl pt-10 z-50">
            <motion.h1
              initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl md:text-7xl"
            >
              Build agents.
              <br />
              <span className="text-muted-foreground">Get things done.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease }}
              className="mx-auto mt-6 max-w-md text-sm leading-7 text-muted-foreground sm:text-base"
            >
              Create specialized AI agents, equip them with capabilities, and
              deploy them to do real work.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease }}
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
          </div>
        </section>
      }
    />
  );
};

export default Hero;
