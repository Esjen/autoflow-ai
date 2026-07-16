import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatsCard from "@/components/dashboard/StatsCard";
import WorkflowCard from "@/components/dashboard/WorkflowCard";

import {
  dashboardStats,
  recentWorkflows,
} from "@/lib/data/dashboard";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => {
          const Icon = stat.icon;

          return (
            <StatsCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              icon={<Icon className="h-6 w-6" />}
            />
          );
        })}
      </div>

      {/* Recent Workflows */}
      <div className="mt-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            Recent Workflows
          </h2>

          <button className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white transition hover:opacity-90">
            + New Workflow
          </button>
        </div>

        <div className="space-y-4">
          {recentWorkflows.map((workflow) => (
            <WorkflowCard
              key={workflow.title}
              title={workflow.title}
              description={workflow.description}
              status={workflow.status}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}