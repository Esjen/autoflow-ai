import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import WorkflowStep from "./WorkflowStep";

export default function Workflow() {
  return (
    <Section>
      <Container>
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            HOW IT WORKS
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            From enquiry to closed deal in four simple steps
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            AutoFlow AI handles repetitive work automatically, allowing your
            team to focus on closing deals instead of chasing leads.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <WorkflowStep
            number="1"
            title="Capture"
            description="Customer enquiries arrive from your website, WhatsApp or email."
          />

          <WorkflowStep
            number="2"
            title="AI Qualifies"
            description="AI analyses the enquiry and scores the lead instantly."
          />

          <WorkflowStep
            number="3"
            title="Automate"
            description="Emails, CRM updates and follow-ups happen automatically."
          />

          <WorkflowStep
            number="4"
            title="Close"
            description="Your sales team receives qualified leads ready for action."
          />
        </div>
      </Container>
    </Section>
  );
}