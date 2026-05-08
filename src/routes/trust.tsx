import { createFileRoute } from "@tanstack/react-router";
import { PatronMessage } from "@/components/heritage/PatronMessage";
import { Trustees } from "@/components/heritage/Trustees";
import {
  SumitraSpotlight,
  TrustDetails,
  CSR,
  Donation,
  Contact,
  Footer,
} from "@/components/heritage/Sections";

export const Route = createFileRoute("/trust")({
  component: Trust,
});

function Trust() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden pt-20">
      <SumitraSpotlight />
      <PatronMessage />
      <Trustees />
      <TrustDetails />
      <CSR />
      <Donation />
      <Contact />
      <Footer />
    </main>
  );
}
