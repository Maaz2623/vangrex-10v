import { requireAuth } from "@/lib/auth-utils";
import { redirect } from "next/navigation";

export const CheckAuth = async () => {
  await requireAuth();

  redirect("/auth");
};
