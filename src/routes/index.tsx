import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/heritage/Navbar";
import { Hero } from "@/components/heritage/Hero";
import { StatStrip } from "@/components/heritage/StatStrip";
import { Biography } from "@/components/heritage/Biography";
import { AhilyaAchievements } from "@/components/heritage/Sections";
import { Timeline } from "@/components/heritage/Timeline";
import { Vision } from "@/components/heritage/Vision";
import { Zones } from "@/components/heritage/Zones";
import { DigitalShowcase, AudioStory } from "@/components/heritage/DigitalSections";
import { NationalSignificance } from "@/components/heritage/NationalSignificance";
import { PatronMessage } from "@/components/heritage/PatronMessage";
import { Trustees } from "@/components/heritage/Trustees";
import {
  SumitraSpotlight, SDG, CSR, Phases, Education, Circuit, Gallery,
  TrustDetails, Donation, Contact, Footer,
} from "@/components/heritage/Sections";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <StatStrip />
      <Biography />
      <AhilyaAchievements />
      <Timeline />
      <Vision />
      <Zones />
      <DigitalShowcase />
      <AudioStory />
      <NationalSignificance />
      <PatronMessage />
      <Trustees />
      <TrustDetails />
      <SumitraSpotlight />
      <SDG />
      <CSR />
      <Phases />
      <Education />
      <Circuit />
      <Gallery />
      <Donation />
      <Contact />
      <Footer />
    </main>
  );
}
