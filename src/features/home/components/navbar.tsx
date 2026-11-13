"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

const navLinks = [
  { label: "Product", href: "#product" },
  { label: "Use cases", href: "#use-cases" },
  { label: "Developers", href: "#developers" },
  { label: "Pricing", href: "#pricing" },
];

const ease = [0.22, 1, 0.36, 1] as const;

const reveal = {
  hidden: {
    opacity: 0,
    y: -16,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const session = authClient.useSession();

  return (
    <header className="fixed inset-x-0 top-0 select-none z-50 px-4 pt-4 sm:px-6">
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
              delayChildren: 3.2,
            },
          },
        }}
        className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-5 py-2 sm:px-7"
      >
        {/* Logo */}
        <motion.div
          variants={reveal}
          transition={{ duration: 1.2, ease }}
          className="flex items-center gap-2 font-semibold tracking-tight"
        >
          <Link href="/" aria-label="Home">
            <Image
              src="/logo-white.png"
              width={80}
              height={80}
              alt="logo"
              priority
            />
          </Link>
        </motion.div>

        {/* Desktop navigation */}
        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.15,
              },
            },
          }}
          className="hidden items-center gap-8 md:flex"
        >
          {navLinks.map((link) => (
            <motion.div
              key={link.label}
              variants={reveal}
              transition={{ duration: 0.9, ease }}
            >
              <Link
                href={link.href}
                className="text-[13px] font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop actions */}
        <motion.div
          variants={reveal}
          transition={{ duration: 1, ease }}
          className="hidden items-center gap-5 md:flex"
        >
          <Button asChild size="sm">
            <Link
              href={session ? "/dashboard/agent-builder" : "/auth"}
              className="group flex items-center gap-2 rounded-full bg-primary px-4 text-[13px] font-medium text-primary-foreground transition-all hover:opacity-90"
            >
              Get started
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </motion.div>

        {/* Mobile menu button */}
        <motion.div
          variants={reveal}
          transition={{ duration: 0.9, ease }}
          className="md:hidden"
        >
          <Button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-muted"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileOpen ? "close" : "menu"}
                initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
                transition={{ duration: 0.18 }}
                className="flex"
              >
                {mobileOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </motion.span>
            </AnimatePresence>
          </Button>
        </motion.div>
      </motion.nav>

      {/* Mobile navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -12,
              scale: 0.97,
              filter: "blur(8px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              y: -8,
              scale: 0.98,
              filter: "blur(5px)",
            }}
            transition={{ duration: 0.35, ease }}
            className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-border bg-background p-4 shadow-lg md:hidden"
          >
            <div className="flex flex-col">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.055,
                    ease,
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between rounded-xl px-3 py-3.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4 opacity-40" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.35, delay: 0.2, ease }}
              className="mt-3 flex gap-3 border-t border-border pt-4"
            >
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="flex h-11 flex-1 items-center justify-center rounded-full border border-border text-sm font-medium transition-colors hover:bg-muted"
              >
                Log in
              </Link>

              <Button asChild size="sm">
                <Link href="/auth" onClick={() => setMobileOpen(false)}>
                  Get started
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
