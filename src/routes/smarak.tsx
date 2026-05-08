import { createFileRoute } from "@tanstack/react-router";
import { Vision } from "@/components/heritage/Vision";
import { Zones } from "@/components/heritage/Zones";
import { Phases, Footer } from "@/components/heritage/Sections";

export const Route = createFileRoute("/smarak")({
  component: Smarak,
});

function Smarak() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden pt-20">
      <Vision />
      <Zones />
      <Phases />
      <Footer />
    </main>
  );
}
