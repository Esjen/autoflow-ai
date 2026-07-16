import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import SocialProof from "@/components/landing/SocialProof";
import Workflow from "@/components/landing/Workflow";
import Features from "@/components/landing/Features";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <SocialProof />
      <Workflow />
      <Features />
    </main>
  );
}