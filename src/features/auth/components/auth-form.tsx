"use client";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { ArrowRight, Eye, EyeOff, Mail } from "lucide-react";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export function AuthForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [loading, setLoading] = useState(false);

  const authenticate = (provider: "google" | "github") => {
    authClient.signIn.social(
      {
        provider: provider,
      },
      {
        onRequest: () => {
          setLoading(true);
        },
        onResponse(context) {
          setLoading(false);
        },
      },
    );
  };

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <fieldset disabled={loading}>
        <FieldGroup>
          {/* Social login */}
          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={() => authenticate("google")}
              variant="outline"
              type="button"
              className="h-11 gap-2"
            >
              <FcGoogle className="size-4" />
              Google
            </Button>

            <Button
              onClick={() => authenticate("github")}
              variant="outline"
              type="button"
              className="h-11 gap-2"
            >
              <FaGithub className="size-4" />
              GitHub
            </Button>
          </div>
        </FieldGroup>
      </fieldset>
    </form>
  );
}
