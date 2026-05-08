import { createFileRoute } from "@tanstack/react-router";
import { DigitalShowcase, AudioStory } from "@/components/heritage/DigitalSections";
import { Circuit, Gallery, Footer } from "@/components/heritage/Sections";

export const Route = createFileRoute("/experience")({
  component: Experience,
});

function Experience() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden pt-20">
      <DigitalShowcase />
      <AudioStory />
      <Circuit />
      <Gallery />
      <Footer />
    </main>
  );
}
