import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface WorkflowCardProps {
  title: string;
  description: string;
  status: "Running" | "Draft" | "Paused";
}

export default function WorkflowCard({
  title,
  description,
  status,
}: WorkflowCardProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg">
      <CardContent className="flex items-center justify-between p-6">
        <div>
          <h3 className="text-lg font-semibold">
            {title}
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            {description}
          </p>
        </div>

        <Badge
          variant={
            status === "Running"
              ? "default"
              : status === "Paused"
              ? "secondary"
              : "outline"
          }
        >
          {status}
        </Badge>
      </CardContent>
    </Card>
  );
}