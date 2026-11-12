import { ThemeSwitcher } from "@/components/theme-switcher";
import Hero from "@/features/home/components/hero";
import Navbar from "@/features/home/components/navbar";
import { requireAuth } from "@/lib/auth-utils";
import Image from "next/image";

const HomePage = async () => {
  await requireAuth();
  return (
    <main className="relative">
      <Navbar />
      <Hero />
    </main>
  );
};

export default HomePage;
