import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/heritage/Hero";
import { StatStrip } from "@/components/heritage/StatStrip";
import { Biography } from "@/components/heritage/Biography";
import { Timeline } from "@/components/heritage/Timeline";
import { Vision } from "@/components/heritage/Vision";
import { Zones } from "@/components/heritage/Zones";
import { DigitalShowcase, AudioStory } from "@/components/heritage/DigitalSections";
import { Trustees } from "@/components/heritage/Trustees";
import {
  SumitraSpotlight, SDG, CSR, Phases, Education, Circuit, Gallery, Contact, Footer,
} from "@/components/heritage/Sections";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Devi Ahilyabai Holkar Smarak · Indore | A Living Heritage Memorial" },
      { name: "description", content: "देवी अहिल्याबाई होलकर स्मारक — a ₹150 Cr cinematic heritage memorial in Indore reimagining 300 years of Lokmata Ahilyabai's legacy through 32 immersive experience zones." },
      { property: "og:title", content: "Devi Ahilyabai Holkar Smarak · Indore" },
      { property: "og:description", content: "Where History Lives Again — a national heritage initiative by the Ahilya Smarak Trust." },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Hero />
      <StatStrip />
      <Biography />
      <Timeline />
      <Vision />
      <Zones />
      <DigitalShowcase />
      <AudioStory />
      <Trustees />
      <SumitraSpotlight />
      <SDG />
      <CSR />
      <Phases />
      <Education />
      <Circuit />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
