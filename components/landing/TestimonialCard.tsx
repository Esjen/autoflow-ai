import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  quote: string;
}

export default function TestimonialCard({
  name,
  role,
  company,
  quote,
}: TestimonialCardProps) {
  return (
    <div className="rounded-2xl border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-6 flex gap-1 text-yellow-500">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-5 w-5 fill-current" />
        ))}
      </div>

      <p className="text-muted-foreground leading-7">
        "{quote}"
      </p>

      <div className="mt-8">
        <h4 className="font-semibold">{name}</h4>

        <p className="text-sm text-muted-foreground">
          {role} · {company}
        </p>
      </div>
    </div>
  );
}