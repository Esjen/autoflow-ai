import {
  Workflow,
  PlayCircle,
  CheckCircle2,
  Users,
} from "lucide-react";

export const dashboardStats = [
  {
    title: "Total Workflows",
    value: "12",
    icon: Workflow,
  },
  {
    title: "Executions",
    value: "438",
    icon: PlayCircle,
  },
  {
    title: "Success Rate",
    value: "98%",
    icon: CheckCircle2,
  },
  {
    title: "Active Users",
    value: "8",
    icon: Users,
  },
];

export const recentWorkflows = [
  {
    title: "AI Lead Qualification",
    description: "Automatically qualifies incoming leads using AI.",
    status: "Running",
  },
  {
    title: "Meeting Summary Generator",
    description: "Summarizes Zoom meetings and emails the notes.",
    status: "Draft",
  },
  {
    title: "Invoice Reminder",
    description: "Automatically sends payment reminder emails.",
    status: "Paused",
  },
] as const;