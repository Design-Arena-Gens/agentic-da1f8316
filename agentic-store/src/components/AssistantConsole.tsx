import { useMemo } from "react";

type TimelineItem = {
  id: string;
  role: "agent" | "human";
  message: string;
  timestamp: string;
};

const timeline: TimelineItem[] = [
  {
    id: "msg-1",
    role: "human",
    message:
      "Need a Prime Day readiness plan: inventory, marketing, logistics. Flag blockers ahead of escalation sync.",
    timestamp: "09:00",
  },
  {
    id: "msg-2",
    role: "agent",
    message:
      "Pulled last 180-day velocity. Top 120 SKUs require 3.2x safety stock. Drafted purchase order for two suppliers and queued approval.",
    timestamp: "09:01",
  },
  {
    id: "msg-3",
    role: "agent",
    message:
      "Marketing pod suggested 4 TikTok hooks + Meta Advantage+ refresh. Assets routed to creative studio. CAC forecast 18% lower.",
    timestamp: "09:02",
  },
  {
    id: "msg-4",
    role: "agent",
    message:
      "Logistics risk: Aramex corridor JED → DXB trending 32% over SLA. Auto-escalation triggered with compensation clause template.",
    timestamp: "09:03",
  },
  {
    id: "msg-5",
    role: "human",
    message:
      "Approve supplier PO, reroute high-risk shipments to DHL, and share growth brief with marketing squad.",
    timestamp: "09:04",
  },
  {
    id: "msg-6",
    role: "agent",
    message:
      "Approvals processed. Updates synced to NetSuite, Slack #ops-war-room, and Airtable runbook. Monitoring breaches in realtime.",
    timestamp: "09:05",
  },
];

export function AssistantConsole() {
  const groupedTimeline = useMemo(() => {
    return timeline.map((entry) => ({
      ...entry,
      align: entry.role === "agent" ? "items-start" : "items-end",
      bubble:
        entry.role === "agent"
          ? "bg-sky-500/10 text-sky-900 dark:bg-sky-500/15 dark:text-sky-200"
          : "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900",
      label: entry.role === "agent" ? "Agent" : "Ops Lead",
    }));
  }, []);

  return (
    <section className="rounded-3xl border border-zinc-100 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <header className="mb-4">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          Live command thread
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Observe how the agent collaborates with your team in real-time.
        </p>
      </header>
      <div className="flex flex-col gap-4 rounded-2xl border border-zinc-100 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/50">
        {groupedTimeline.map((entry) => (
          <div key={entry.id} className={`flex flex-col ${entry.align} gap-1`}>
            <span className="text-xs uppercase tracking-[0.25em] text-zinc-400">
              {entry.label} · {entry.timestamp}
            </span>
            <p
              className={`max-w-xl rounded-2xl px-4 py-3 text-sm leading-relaxed ${entry.bubble}`}
            >
              {entry.message}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

