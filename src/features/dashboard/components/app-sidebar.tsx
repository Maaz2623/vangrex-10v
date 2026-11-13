"use client";

import * as React from "react";
import { motion, MotionConfig } from "motion/react";

import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  GalleryVerticalEnd,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

import { TeamSwitcher } from "./teams-switcher";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

// Sidebar data
const data = {
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],

  navMain: [
    {
      title: "Agent Builder",
      url: "/dashboard/agent-builder",
      icon: SquareTerminal,
    },
    {
      title: "Models",
      url: "/dashboard/models",
      icon: Bot,
    },
    {
      title: "Documentation",
      url: "/dashboard/documentation",
      icon: BookOpen,
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings2,
    },
  ],
};

// Animation variants
const sidebarVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <MotionConfig reducedMotion="user">
      <Sidebar collapsible="icon" {...props}>
        <motion.div
          className="flex min-h-0 flex-1 flex-col"
          variants={sidebarVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <SidebarHeader>
            <motion.div variants={itemVariants}>
              <TeamSwitcher teams={data.teams} />
            </motion.div>
          </SidebarHeader>

          {/* Navigation */}
          <SidebarContent>
            <motion.div variants={itemVariants}>
              <NavMain items={data.navMain} />
            </motion.div>
          </SidebarContent>

          {/* Footer */}
          <SidebarFooter>
            <motion.div variants={itemVariants}>
              <NavUser />
            </motion.div>
          </SidebarFooter>
        </motion.div>

        <SidebarRail />
      </Sidebar>
    </MotionConfig>
  );
}
