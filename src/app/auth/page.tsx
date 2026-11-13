import { AuthForm } from "@/features/auth/components/auth-form";
import DotField from "@/components/kokonutui/dot-field";
import Image from "next/image";
import Link from "next/link";
import { requireUnAuth } from "@/lib/auth-utils";

export default async function LoginPage() {
  await requireUnAuth();

  return (
    <div className="grid min-h-svh bg-background lg:grid-cols-2">
      {/* Left side */}
      <div className="relative flex min-h-svh flex-col p-6 md:p-10">
        {/* Brand */}
        <Link href="/" className="flex w-fit items-center gap-2">
          <Image
            src="/logo-white.png"
            width={64}
            height={64}
            alt="Tenvy"
            priority
            className="object-contain"
          />
        </Link>

        {/* Form */}
        <div className="flex flex-1 items-center justify-center py-12">
          <div className="w-full max-w-95">
            <div className="mb-9 space-y-3">
              <div className="mb-5 inline-flex items-center rounded-full border border-border/70 bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
                <span className="mr-2 size-1.5 rounded-full bg-primary" />
                Welcome to Tenvy
              </div>

              <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                Welcome back
              </h1>

              <p className="text-sm leading-relaxed text-muted-foreground">
                Sign in to your account to continue building, managing, and
                running your AI agents.
              </p>
            </div>

            <AuthForm />

            <p className="mt-8 text-center text-xs leading-relaxed text-muted-foreground">
              By continuing, you agree to our{" "}
              <Link
                href="/terms"
                className="font-medium text-foreground underline-offset-4 transition-colors hover:underline"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="font-medium text-foreground underline-offset-4 transition-colors hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Tenvy. All rights reserved.
        </div>
      </div>

      {/* Right side */}
      <div className="relative hidden overflow-hidden border-l border-border/50 bg-zinc-950 lg:block dark:bg-[#09090b]">
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(255,255,255,0.07),transparent_65%)]" />

        <DotField
          className="text-white/20"
          children={
            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-12 text-center text-zinc-100">
              {/* Logo */}
              <div className="mb-8 flex size-20 items-center justify-center rounded-2xl border border-white/10 bg-white/4 shadow-2xl shadow-black/30 backdrop-blur-xl">
                <Image
                  src="/logo-white.png"
                  width={64}
                  height={64}
                  alt="Tenvy"
                  className="object-contain"
                />
              </div>

              {/* Heading */}
              <h2 className="max-w-lg text-4xl font-semibold tracking-tight text-white">
                Make every interaction
                <span className="text-zinc-500"> intelligent.</span>
              </h2>

              <p className="mt-5 max-w-md text-base leading-relaxed text-zinc-400">
                Your workspace for building and orchestrating intelligent AI
                agents. Everything you need, in one place.
              </p>

              {/* Bottom badge */}
              <div className="mt-12 flex items-center gap-3 rounded-full border border-white/10 bg-white/4 px-4 py-2.5 shadow-lg shadow-black/20 backdrop-blur-xl">
                <div className="flex -space-x-2">
                  <div className="size-7 rounded-full border-2 border-[#09090b] bg-zinc-500/40" />
                  <div className="size-7 rounded-full border-2 border-[#09090b] bg-zinc-400/50" />
                  <div className="size-7 rounded-full border-2 border-[#09090b] bg-zinc-300/60" />
                </div>

                <span className="text-xs font-medium text-zinc-400">
                  Built for the next generation of AI
                </span>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
}
