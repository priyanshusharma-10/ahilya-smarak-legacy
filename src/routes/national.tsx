import { createFileRoute } from "@tanstack/react-router";
import { NationalSignificance } from "@/components/heritage/NationalSignificance";
import { SDG, Education, Footer } from "@/components/heritage/Sections";

export const Route = createFileRoute("/national")({
  component: National,
});

function National() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden pt-20">
      <NationalSignificance />
      <SDG />
      <Education />
      <Footer />
    </main>
  );
}
