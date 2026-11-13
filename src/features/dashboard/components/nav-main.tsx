"use client";

import { type LucideIcon } from "lucide-react";
import { motion, LayoutGroup } from "motion/react";
import { usePathname, useRouter } from "next/navigation";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

type NavItem = {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: {
    title: string;
    url: string;
  }[];
};

type NavMainProps = {
  items: NavItem[];
  label?: string;
};

export function NavMain({ items, label = "Platform" }: NavMainProps) {
  const router = useRouter();
  const pathname = usePathname();

  // Find the most specific matching route
  const activeItem = [...items]
    .filter(
      (item) =>
        pathname === item.url ||
        (item.url !== "/" && pathname.startsWith(`${item.url}/`)),
    )
    .sort((a, b) => b.url.length - a.url.length)[0];

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">
        {label}
      </SidebarGroupLabel>

      <SidebarMenu className="gap-1">
        <LayoutGroup id="sidebar-navigation">
          {items.map((item) => {
            const isActive = activeItem?.url === item.url;
            const Icon = item.icon;

            return (
              <SidebarMenuItem key={item.url}>
                <SidebarMenuButton
                  onClick={() => router.push(item.url)}
                  isActive={isActive}
                  tooltip={item.title}
                  className="
                    relative h-10 cursor-pointer overflow-hidden
                    rounded-md px-3
                    text-muted-foreground
                    transition-colors duration-200
                    hover:bg-sidebar-accent/70
                    hover:text-sidebar-accent-foreground
                    data-[active=true]:bg-sidebar-accent
                    data-[active=true]:font-medium
                    data-[active=true]:text-sidebar-accent-foreground
                  "
                >
                  {/* Animated left border */}
                  {isActive && (
                    <motion.span
                      layoutId="sidebar-active-indicator"
                      className="absolute inset-y-2 left-0 z-10 w-0.75 rounded-full bg-primary"
                      transition={{
                        type: "spring",
                        stiffness: 450,
                        damping: 35,
                      }}
                    />
                  )}

                  {/* Icon */}
                  {Icon && (
                    <motion.span
                      className="flex shrink-0 items-center justify-center"
                      animate={{
                        scale: isActive ? 1.05 : 1,
                        x: isActive ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeOut",
                      }}
                    >
                      <Icon className="size-4.25" />
                    </motion.span>
                  )}

                  {/* Label */}
                  <motion.span
                    className="truncate"
                    animate={{
                      x: isActive ? 2 : 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeOut",
                    }}
                  >
                    {item.title}
                  </motion.span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </LayoutGroup>
      </SidebarMenu>
    </SidebarGroup>
  );
}
