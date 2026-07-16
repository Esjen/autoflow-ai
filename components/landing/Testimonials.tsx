import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/lib/data/testimonials";

export default function Testimonials() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            TESTIMONIALS
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Loved by growing businesses
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Thousands of teams trust AutoFlow AI to automate repetitive work,
            qualify leads, and close more deals.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              quote={testimonial.quote}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}