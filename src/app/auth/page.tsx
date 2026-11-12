import { AuthForm } from "@/features/auth/components/auth-form";
import DotField from "@/components/kokonutui/dot-field";
import { GalleryVerticalEnd, Sparkles } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      {/* Left side */}
      <div className="flex flex-col p-6 md:p-10">
        {/* Brand */}
        <div className="flex items-center gap-2 font-semibold tracking-tight">
          <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <GalleryVerticalEnd className="size-5" />
          </div>
          <span className="text-lg">Tenvy</span>
        </div>

        {/* Form */}
        <div className="flex flex-1 items-center justify-center py-10">
          <div className="w-full max-w-[380px]">
            <div className="mb-8 space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
                <Sparkles className="size-3.5" />
                Welcome to Tenvy
              </div>

              <h1 className="text-3xl font-semibold tracking-tight">
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
              <a
                href="/terms"
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>

        <div className="text-center text-xs text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Tenvy. All rights reserved.
        </div>
      </div>

      {/* Right side */}
      <div className="relative hidden overflow-hidden bg-muted lg:block">
        <DotField
          className="text-black/40"
          children={
            <div className="relative text-black z-10 flex h-full min-h-screen flex-col items-center justify-center px-12 text-center">
              <div className="mb-6 flex size-14 items-center justify-center rounded-2xl border bg-background/80 shadow-sm backdrop-blur">
                <Sparkles className="size-6" />
              </div>

              <h2 className="max-w-lg text-4xl font-semibold tracking-tight">
                Make every interaction
                <span className="text-muted-foreground"> intelligent.</span>
              </h2>

              <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                Your workspace for building and orchestrating intelligent AI
                agents. Everything you need, in one place.
              </p>

              <div className="mt-12 flex items-center gap-3 rounded-full border bg-background/70 px-4 py-2.5 shadow-sm backdrop-blur">
                <div className="flex -space-x-2">
                  <div className="size-7 rounded-full border-2 border-background bg-primary/20" />
                  <div className="size-7 rounded-full border-2 border-background bg-primary/40" />
                  <div className="size-7 rounded-full border-2 border-background bg-primary/60" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">
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
