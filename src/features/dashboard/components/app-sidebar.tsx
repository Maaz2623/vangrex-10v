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
  SlidersHorizontal,
  BrainCircuit,
  Wrench,
  Database,
  FlaskConical,
  LayoutDashboard,
  GaugeIcon,
} from "lucide-react";

import { usePathname } from "next/navigation";

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

  platform: [
    {
      title: "Overview",
      url: "/dashboard/overview",
      icon: GaugeIcon,
    },
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

  agentBuilder: [
    {
      title: "Overview",
      url: "/dashboard/agent-builder",
      icon: LayoutDashboard,
    },
    {
      title: "Instructions",
      url: "/dashboard/agent-builder/instructions",
      icon: BookOpen,
    },
    {
      title: "Models",
      url: "/dashboard/agent-builder/models",
      icon: BrainCircuit,
    },
    {
      title: "Capabilities",
      url: "/dashboard/agent-builder/capabilities",
      icon: Wrench,
    },
    {
      title: "Knowledge",
      url: "/dashboard/agent-builder/knowledge",
      icon: Database,
    },
    {
      title: "Playground",
      url: "/dashboard/agent-builder/playground",
      icon: FlaskConical,
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
  const pathname = usePathname();

  const isAgentBuilder = pathname.startsWith("/dashboard/agent-builder");

  const navigation = isAgentBuilder ? data.agentBuilder : data.platform;

  return (
    <MotionConfig reducedMotion="user">
      <Sidebar collapsible="icon" {...props}>
        <motion.div
          key={isAgentBuilder ? "agent-builder" : "platform"}
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
              <NavMain
                key={isAgentBuilder ? "agent-builder" : "platform"}
                items={navigation}
                label={isAgentBuilder ? "Agent Configuration" : "Platform"}
              />
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
