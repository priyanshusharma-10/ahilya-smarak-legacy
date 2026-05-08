import { createFileRoute } from "@tanstack/react-router";
import { Biography } from "@/components/heritage/Biography";
import { AhilyaAchievements, Footer } from "@/components/heritage/Sections";
import { Timeline } from "@/components/heritage/Timeline";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden pt-20">
      <Biography />
      <AhilyaAchievements />
      <Timeline />
      <Footer />
    </main>
  );
}
