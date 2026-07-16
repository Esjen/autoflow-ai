import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import StatCard from "./StatCard";

export default function SocialProof() {
  return (
    <Section>
      <Container>
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Trusted by ambitious businesses
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            Built to help businesses grow faster
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            value="500+"
            label="Leads Managed"
          />

          <StatCard
            value="95%"
            label="AI Qualification Accuracy"
          />

          <StatCard
            value="24/7"
            label="Automation"
          />

          <StatCard
            value="10x"
            label="Faster Follow-ups"
          />
        </div>
      </Container>
    </Section>
  );
}