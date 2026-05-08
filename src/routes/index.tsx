import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/heritage/Hero";
import { StatStrip } from "@/components/heritage/StatStrip";
import { Footer } from "@/components/heritage/Sections";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Hero />
      <StatStrip />
      <Footer />
    </main>
  );
}
