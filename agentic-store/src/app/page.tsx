import { AgentHeader } from "@/components/AgentHeader";
import { MetricPanel } from "@/components/MetricPanel";
import { PlanComposer } from "@/components/PlanComposer";
import { AssistantConsole } from "@/components/AssistantConsole";
import { IntegrationPanel } from "@/components/IntegrationPanel";
import { CapabilityCards } from "@/components/CapabilityCards";
import { StageTimeline } from "@/components/StageTimeline";
import { TaskGrid } from "@/components/TaskGrid";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-8 px-6 py-12 lg:px-10">
      <div className="grid gap-8">
        <AgentHeader />
        <MetricPanel />
      </div>
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <PlanComposer />
        <div className="flex flex-col gap-8">
          <AssistantConsole />
          <IntegrationPanel />
        </div>
      </div>
      <CapabilityCards />
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <StageTimeline />
        <TaskGrid />
      </div>
    </main>
  );
}
